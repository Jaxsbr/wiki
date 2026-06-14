// Build the ver-kyker "observatory" wiki for GitHub Pages from markdown source.
// Self-contained: template.html + assets/ live alongside this script in _build/.
//   markdown source : $WIKI_SRC (default /workspace/agent/wiki — the agent's wiki)
//   output (served) : this script's parent dir (the repo root, what Pages serves)
// Run:  node _build/build.mjs       (host)
//   or: bun  _build/build.mjs       (container)
// The agent never edits HTML/CSS — it edits markdown and this produces the theme.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url)); // _build/
const OUT = path.resolve(HERE, '..');                      // repo root (published)
const SRC = process.env.WIKI_SRC || '/workspace/agent/wiki';
const TEMPLATE_FILE = path.join(HERE, 'template.html');
const ASSETS_DIR = path.join(HERE, 'assets');
const BASE = '/wiki';

if (!fs.existsSync(SRC)) { console.error(`source not found: ${SRC} (set WIKI_SRC)`); process.exit(1); }

// clean OUT, preserving repo metadata and the build toolchain
for (const e of fs.readdirSync(OUT)) {
  if (e === '.git' || e === '_build') continue;
  fs.rmSync(path.join(OUT, e), { recursive: true, force: true });
}

// theme assets -> _assets/
fs.mkdirSync(path.join(OUT, '_assets'), { recursive: true });
for (const f of fs.readdirSync(ASSETS_DIR)) fs.copyFileSync(path.join(ASSETS_DIR, f), path.join(OUT, '_assets', f));

const template = fs.readFileSync(TEMPLATE_FILE, 'utf8')
  .split('/_assets/').join(`${BASE}/_assets/`)
  .split('href="/"').join(`href="${BASE}/"`)
  .split('href="/requests"').join(`href="${BASE}/requests/"`)
  .split('href="/log"').join(`href="${BASE}/log/"`);

function countMd(dir) { let n = 0; for (const e of fs.readdirSync(dir, { withFileTypes: true })) { if (e.name.startsWith('.')) continue; if (e.isDirectory()) n += countMd(path.join(dir, e.name)); else if (e.name.endsWith('.md')) n++; } return n; }
const pages = countMd(SRC);
let requests = 0, last = '—';
try { requests = (fs.readFileSync(path.join(SRC, 'requests.md'), 'utf8').match(/^## R-\d+/gm) || []).length; } catch {}
try { const d = fs.readFileSync(path.join(SRC, 'log.md'), 'utf8').match(/^## \[(\d{4}-\d{2}-\d{2})\]/gm) || []; if (d.length) last = d[d.length - 1].slice(4, 14); } catch {}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function rewriteMd(md, relDir) {
  md = md.split('http://127.0.0.1:8765').join(BASE);
  md = md.replace(/\[([^\]]*)\]\(\/?sources\/[^)]*\)/g, '$1'); // de-link unpublished raw sources
  return md.replace(/\]\(([^)]+)\)/g, (m, inner) => {
    const tm = inner.match(/^(\S+)(\s+.*)$/s); let url = tm ? tm[1] : inner.trim(); const title = tm ? tm[2] : '';
    let anchor = ''; const h = url.indexOf('#'); if (h >= 0) { anchor = url.slice(h); url = url.slice(0, h); }
    if (url === '' || /^(https?:|mailto:|\/)/i.test(url)) return `](${url}${anchor}${title})`;
    const resolved = path.posix.normalize(path.posix.join(relDir === '' ? '.' : relDir, url));
    if (resolved.startsWith('../')) return m;
    if (resolved.endsWith('.md')) { const noext = resolved.slice(0, -3); return `](${noext === 'index' ? `${BASE}/` : `${BASE}/${noext}/`}${anchor}${title})`; }
    return `](${BASE}/${resolved}${anchor}${title})`;
  });
}
function renderPage(title, md) {
  const mdJson = JSON.stringify(md).replace(/</g, '\\u003c');
  return template.split('{{TITLE}}').join(esc(title)).split('{{PAGES}}').join(String(pages))
    .split('{{REQUESTS}}').join(String(requests)).split('{{LAST}}').join(esc(last)).split('{{MD_JSON}}').join(mdJson);
}
let mdCount = 0, htmlCount = 0;
function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue;
    const abs = path.join(dir, e.name); const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) { walk(abs, r); continue; }
    if (e.name.endsWith('.md')) {
      const raw = fs.readFileSync(abs, 'utf8').replace(/^﻿?---\r?\n[\s\S]*?\r?\n---\r?\n+/, ''); // strip any front matter
      const title = (raw.match(/^#\s+(.+)$/m) || [])[1] || e.name.replace(/\.md$/, '');
      const html = renderPage(title, rewriteMd(raw, rel));
      const base = e.name.replace(/\.md$/, '');
      const outRel = (rel === '' && base === 'index') ? 'index.html' : path.posix.join(rel, base, 'index.html');
      const outAbs = path.join(OUT, outRel); fs.mkdirSync(path.dirname(outAbs), { recursive: true }); fs.writeFileSync(outAbs, html); mdCount++;
    } else if (e.name.endsWith('.html')) {
      const outAbs = path.join(OUT, r); fs.mkdirSync(path.dirname(outAbs), { recursive: true }); fs.copyFileSync(abs, outAbs); htmlCount++;
    }
  }
}
walk(SRC, '');
fs.writeFileSync(path.join(OUT, '.nojekyll'), ''); // serve static as-is (keep _assets/)
console.log(`built ${mdCount} pages, ${htmlCount} demos -> ${OUT} (imagery via Steam CDN hotlinks) | pages=${pages} requests=${requests} last=${last}`);
