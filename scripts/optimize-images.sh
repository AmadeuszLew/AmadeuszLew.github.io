#!/usr/bin/env bash
# Generates WebP variants for project screenshots shown on the project detail page.
#   <name>.webp       - full resolution, used by the lightbox
#   <name>.thumb.webp - max 1280px wide, used by the feature cards
# Originals are kept untouched. Re-run after adding or replacing a screenshot and
# update the width/height passed to screenshot() in projects.service.ts.
# Requires ImageMagick 7 (`magick`).
set -euo pipefail
shopt -s failglob

command -v magick >/dev/null || { echo "ImageMagick 7 (magick) is required" >&2; exit 1; }

cd "$(dirname "$0")/../src/assets"

THUMB_WIDTH=1280
THUMB_QUALITY=82
FULL_QUALITY=90

work_dir=$(mktemp -d)
trap 'rm -rf "$work_dir"' EXIT

sources=(
  projects/TMS/*.png
  projects/SneakerShop/*.png
  projects/stockx/*.png
  projects/cdi/*.png
  projects/startwithhabit/*.png
  projects/ten.png
  projects/more.jpg
  man_icon.png
)

encode() {
  magick "$1" -strip "${@:3}" -define webp:method=6 "$2"
}

for src in "${sources[@]}"; do
  base="${src%.*}"

  # Flat UI screenshots often compress better losslessly; keep whichever is smaller
  # so text stays crisp in the lightbox without paying for it in bytes.
  encode "$src" "$work_dir/lossless.webp" -define webp:lossless=true
  encode "$src" "$work_dir/lossy.webp" -quality "$FULL_QUALITY"
  if [[ $(stat -c%s "$work_dir/lossless.webp") -le $(stat -c%s "$work_dir/lossy.webp") ]]; then
    full="$work_dir/lossless.webp"
  else
    full="$work_dir/lossy.webp"
  fi
  encode "$src" "$work_dir/thumb.webp" -resize "${THUMB_WIDTH}x>" -quality "$THUMB_QUALITY"

  mv "$full" "$base.webp"
  mv "$work_dir/thumb.webp" "$base.thumb.webp"

  printf '%-48s %s\n' "$src" "$(magick identify -format '%w %h' "$src")"
done
