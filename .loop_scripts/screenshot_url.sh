#!/bin/bash
#
# Capture a website screenshot for use as an article image. Headless, scriptable,
# no browser extension needed (works inside the unattended daily loop).
#
# Uses Google Chrome's built-in headless screenshot, then converts to webp.
#
# Usage:
#   screenshot_url.sh <url> <dest.webp> [width] [height]
#
# Example:
#   .loop_scripts/screenshot_url.sh https://klingai.com \
#     public/images/blog/kling-3-turbo/screenshot.webp 1440 900
#
# Notes:
# - Captures the above-the-fold viewport at <width>x<height> (default 1440x900).
# - Some sites show a cookie/consent overlay that headless Chrome cannot dismiss;
#   the capture may include it. Pick a clean URL when possible.
# - Editorial use: a screenshot of the actual tool, with descriptive alt text.
#   Do not present it as your own UI. Caption/attribute when relevant.

set -uo pipefail

URL="${1:-}"
DEST="${2:-}"
W="${3:-1440}"
H="${4:-900}"

if [ -z "$URL" ] || [ -z "$DEST" ]; then
  echo "usage: screenshot_url.sh <url> <dest.webp> [width] [height]" >&2
  exit 2
fi

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CWEBP="$(command -v cwebp || echo /opt/homebrew/bin/cwebp)"
[ -x "$CHROME" ] || { echo "Google Chrome not found at $CHROME" >&2; exit 1; }

mkdir -p "$(dirname "$DEST")"
TMPDIR_S="$(mktemp -d)"
PNG="$TMPDIR_S/shot.png"

# --headless=new renders JS; virtual-time-budget lets the page settle.
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor=1 \
  --window-size="${W},${H}" \
  --virtual-time-budget=9000 \
  --screenshot="$PNG" \
  "$URL" >/dev/null 2>&1

if [ ! -s "$PNG" ]; then
  echo "screenshot failed (empty output) for $URL" >&2
  rm -rf "$TMPDIR_S"
  exit 1
fi

if [ -x "$CWEBP" ]; then
  "$CWEBP" -quiet -q 82 "$PNG" -o "$DEST" || { echo "cwebp failed" >&2; rm -rf "$TMPDIR_S"; exit 1; }
else
  # fallback: macOS sips cannot write webp; keep png next to dest
  cp "$PNG" "${DEST%.webp}.png"
  echo "cwebp missing; wrote ${DEST%.webp}.png instead" >&2
fi

rm -rf "$TMPDIR_S"
BYTES=$(stat -f '%z' "$DEST" 2>/dev/null || echo 0)
echo "wrote $DEST (${BYTES} bytes) from $URL"
