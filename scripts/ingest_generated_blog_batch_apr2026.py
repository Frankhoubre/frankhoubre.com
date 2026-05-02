#!/usr/bin/env python3
"""Ingère les PNG générés (Cursor assets) vers public/images/blog en WebP."""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from cinematic_still_post import apply_cinematic_post  # noqa: E402

# Dossier assets Cursor (chemins absolus possibles)
_ASSET_CANDIDATES = [
    Path(
        "/Users/frankhoubre/.cursor/projects/"
        "Users-frankhoubre-Documents-frankhoubre-com/assets"
    ),
    ROOT.parent / ".cursor" / "projects" / "Users-frankhoubre-Documents-frankhoubre-com" / "assets",
]

ASSETS = next((p for p in _ASSET_CANDIDATES if p.is_dir()), _ASSET_CANDIDATES[0])

PUBLIC = ROOT / "public" / "images" / "blog"
OUT_W, OUT_H = 1376, 768

# préfixe fichier -> slug
BATCH = [
    ("blog-cadrer", "comment-cadrer-image-ia-comme-pro-cinema"),
    ("blog-gen", "comment-generer-images-ia-photorealistes-sans-effet-plastique"),
    ("blog-penser", "comment-penser-comme-realisateur-avec-ia"),
    ("blog-regle", "comment-utiliser-regle-des-tiers-generation-ia"),
    ("blog-angles", "comment-choisir-bons-angles-camera-ia"),
    ("blog-scene", "comment-construire-scene-cinematique-plan-par-plan"),
    ("blog-narr", "comment-creer-narration-visuelle-sans-dialogue"),
    ("blog-tens", "comment-creer-tension-visuelle-scene-ia"),
    ("blog-acteur", "comment-diriger-personnage-ia-comme-acteur"),
]

SLOTS = (
    ("hero", "hero.webp"),
    ("w1", "workflow-1.webp"),
    ("w2", "workflow-2.webp"),
)


def main() -> None:
    if not ASSETS.is_dir():
        raise SystemExit(f"Assets introuvable: {ASSETS}")

    seed = 0
    for prefix, slug in BATCH:
        dest = PUBLIC / slug
        dest.mkdir(parents=True, exist_ok=True)
        for slot, out_name in SLOTS:
            src = ASSETS / f"{prefix}-{slot}.png"
            if not src.is_file():
                raise SystemExit(f"Manquant: {src}")
            im = Image.open(src).convert("RGB")
            im = apply_cinematic_post(im, seed=seed)
            seed += 1
            im = im.resize((OUT_W, OUT_H), Image.Resampling.LANCZOS)
            out = dest / out_name
            im.save(out, "WEBP", quality=90, method=6)
            print(out.relative_to(ROOT))


if __name__ == "__main__":
    main()
