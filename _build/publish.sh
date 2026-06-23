#!/bin/sh
# Publish the ver-kyker wiki to GitHub Pages.
# Builds the observatory site from the markdown source, then publishes it to
# Jaxsbr/wiki through the GitHub REST API (Git Data API) — the same way every
# other NanoClaw persona writes to GitHub.
#
# NOT git push: ver-kyker's traffic goes through the OneCLI gateway, which proxies
# and auth-injects api.github.com but does not carry git's smart transport, so a
# push to github.com fails. publish-api.mjs does blobs -> tree -> commit -> ref.
# Auth is handled by the gateway (no token in this script).
#
# Usage:  sh _build/publish.sh "commit message"
set -eu

HERE=$(CDPATH= cd "$(dirname "$0")" && pwd)
MSG=${1:-"Publish wiki update"}

RT=$(command -v node || command -v bun || true)
[ -n "$RT" ] || { echo "need node or bun on PATH"; exit 1; }

# 1. Build the static site into the repo root (overwrites the prior output).
"$RT" "$HERE/build.mjs"

# 2. Publish the built site via the GitHub REST API.
"$RT" "$HERE/publish-api.mjs" "$MSG"
