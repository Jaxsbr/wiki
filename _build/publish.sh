#!/bin/sh
# Publish the ver-kyker wiki to GitHub Pages.
# Builds the observatory site from the markdown source, commits, and pushes.
# Usage:  sh _build/publish.sh "commit message"
# Auth + TLS are handled by the OneCLI gateway (no token in the remote URL).
set -eu

HERE=$(CDPATH= cd "$(dirname "$0")" && pwd)
REPO=$(CDPATH= cd "$HERE/.." && pwd)
MSG=${1:-"Publish wiki update"}

RT=$(command -v node || command -v bun || true)
[ -n "$RT" ] || { echo "need node or bun on PATH"; exit 1; }

"$RT" "$HERE/build.mjs"

cd "$REPO"
git add -A
if git diff --cached --quiet; then
  echo "no changes to publish"
  exit 0
fi
git commit -m "$MSG"
git push origin main
echo "Published -> https://jaxsbr.github.io/wiki/"
