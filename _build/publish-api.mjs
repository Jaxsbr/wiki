#!/usr/bin/env node
// publish-api.mjs — publish the built wiki to Jaxsbr/wiki via the GitHub REST API.
//
// Why not `git push`? ver-kyker runs inside a NanoClaw container whose traffic is
// routed through the OneCLI gateway. The gateway proxies (and injects auth into)
// HTTPS calls to api.github.com, but it does NOT carry git's smart transport — so
// `git push` to github.com fails. Every other persona (emberpath, atomiq) writes
// through the Git Data API for this exact reason; this mirrors their groups/*/autonomy/gh.cjs.
//
// We send a placeholder token ("onecli-managed") and the gateway swaps in the real
// PAT for api.github.com. For host/manual runs (no gateway in front of us), set
// WIKI_PUBLISH_TOKEN=<pat> to authenticate directly.
//
// Flow: stage the built site -> diff against LIVE origin/main -> upload changed
// blobs -> build a full-snapshot tree -> commit -> fast-forward main.
//
// Usage:  node _build/publish-api.mjs "commit message"
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const REPO = 'Jaxsbr/wiki';
const API = 'api.github.com';
const BRANCH = 'main';
const TOKEN = process.env.WIKI_PUBLISH_TOKEN || 'onecli-managed';
const MSG = process.argv[2] || 'Publish wiki update';

const HERE = path.dirname(fileURLToPath(import.meta.url)); // _build/
const ROOT = path.resolve(HERE, '..');                     // repo root (published)

function req(method, p, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const r = https.request(
      {
        host: API,
        path: p,
        method,
        headers: {
          'User-Agent': 'ver-kyker-wiki',
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}),
        },
      },
      (res) => {
        let buf = '';
        res.on('data', (c) => (buf += c));
        res.on('end', () => {
          const ok = res.statusCode >= 200 && res.statusCode < 300;
          let json;
          try { json = buf ? JSON.parse(buf) : {}; } catch { json = { raw: buf }; }
          if (ok) resolve(json);
          else reject(new Error(`${method} ${p} -> ${res.statusCode}: ${buf.slice(0, 300)}`));
        });
      },
    );
    r.on('error', reject);
    if (data) r.write(data);
    r.end();
  });
}

const git = (args) =>
  execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 128 * 1024 * 1024 });

async function main() {
  // 1. Snapshot the working tree exactly as a commit would (respects .gitignore).
  git(['add', '-A']);
  const entries = git(['ls-files', '-s'])
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [meta, file] = line.split('\t');
      const [mode, sha] = meta.split(' ');
      return { mode, sha, path: file };
    });
  if (!entries.length) {
    console.error('nothing to publish (empty tree)');
    process.exit(1);
  }

  // 2. Base off LIVE origin/main (not local HEAD — robust to a stale clone).
  const ref = await req('GET', `/repos/${REPO}/git/ref/heads/${BRANCH}`);
  const baseCommitSha = ref.object.sha;
  const baseCommit = await req('GET', `/repos/${REPO}/git/commits/${baseCommitSha}`);
  const baseTreeSha = baseCommit.tree.sha;

  // 3. Blobs already on the server (skip re-uploading unchanged files).
  const baseTree = await req('GET', `/repos/${REPO}/git/trees/${baseTreeSha}?recursive=1`);
  const present = new Set((baseTree.tree || []).filter((t) => t.type === 'blob').map((t) => t.sha));

  // 4. Upload only new/changed blobs (git's blob sha == GitHub's).
  let uploaded = 0;
  for (const e of entries) {
    if (present.has(e.sha)) continue;
    const content = fs.readFileSync(path.join(ROOT, e.path));
    await req('POST', `/repos/${REPO}/git/blobs`, {
      content: content.toString('base64'),
      encoding: 'base64',
    });
    uploaded++;
  }

  // 5. Full-snapshot tree (no base_tree → additions, edits, and deletions all apply).
  const tree = entries.map((e) => ({ path: e.path, mode: e.mode, type: 'blob', sha: e.sha }));
  const newTree = await req('POST', `/repos/${REPO}/git/trees`, { tree });
  if (newTree.sha === baseTreeSha) {
    console.log('no changes to publish — site already live');
    return;
  }

  // 6. Commit and fast-forward main (no force: a concurrent push will fail safely).
  const commit = await req('POST', `/repos/${REPO}/git/commits`, {
    message: MSG,
    tree: newTree.sha,
    parents: [baseCommitSha],
  });
  await req('PATCH', `/repos/${REPO}/git/refs/heads/${BRANCH}`, { sha: commit.sha });
  console.log(
    `published ${commit.sha.slice(0, 7)} (${uploaded} blob${uploaded === 1 ? '' : 's'} uploaded) -> https://jaxsbr.github.io/wiki/`,
  );
}

main().catch((e) => {
  console.error('PUBLISH FAILED: ' + e.message);
  if (/-> 40[13]\b/.test(e.message)) {
    console.error(
      'GitHub auth was rejected. If the gateway returns a connect URL, surface it to Jaco and retry once reconnected.',
    );
  }
  process.exit(1);
});
