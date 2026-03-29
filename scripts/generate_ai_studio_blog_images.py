#!/usr/bin/env python3
"""
Plaques cinéma locales (grain, vignette, color grade) pour le blog.
Génération basse résolution puis upscale pour rester rapide sans GPU.
À remplacer par des stills Flux ou SDXL quand tu as un sujet précis.
"""
from __future__ import annotations

import hashlib
import math
import random
import struct
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images" / "blog"

SLUGS = [
    "comment-creer-une-video-cinematique-avec-l-ia-etape-par-etape",
    "pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes",
    "workflow-complet-idee-film-ia-realiste",
    "comment-transformer-image-ia-video-fluide-credible",
    "comment-obtenir-rendu-cinema-avec-seedance-2",
    "creer-court-metrage-100-ia-sans-camera-acteurs",
    "comment-ecrire-script-efficace-video-generee-par-ia",
    "comment-structurer-video-ia-comme-vrai-film",
    "comment-ameliorer-realisme-mouvements-video-ia",
    "comment-creer-pub-video-avec-ia-comme-agence-pro",
    "comment-ecrire-prompt-cinematic-ultra-realiste-ia",
    "pourquoi-ton-prompt-ne-marche-pas-comment-corriger",
    "erreurs-prompt-qui-rendent-image-ia-artificielle",
    "comment-decrire-lumiere-directeur-photo-prompt",
    "comment-utiliser-objectifs-camera-dans-prompt-ia",
    "comment-creer-scenes-coherentes-plusieurs-plans-ia",
    "comment-ecrire-prompt-personnage-realiste-constant",
    "comment-eviter-visages-deformes-generation-ia",
    "comment-controler-style-visuel-generation-ia",
    "comment-creer-univers-visuel-coherent-avec-ia",
    "comment-generer-images-ia-photoréalistes-sans-effet-plastique",
    "flux-vs-sdxl-quelle-ia-choisir-images-realistes",
    "comment-ajouter-grain-cinema-image-ia",
    "comment-ameliorer-texture-peau-image-ia",
    "comment-creer-portrait-ia-digne-film",
    "comment-generer-scene-realiste-profondeur-champ",
    "comment-creer-lumieres-naturelles-image-ia",
    "comment-simuler-objectif-anamorphique-generation-ia",
    "pourquoi-images-ia-manquent-contraste-comment-corriger",
    "comment-creer-ambiance-sombre-cinematique-avec-ia",
]

OUT_W, OUT_H = 1920, 1080
SW, SH = 480, 270


def _rng(seed: bytes):
    def rnd():
        nonlocal seed
        seed = hashlib.sha256(seed).digest()
        return struct.unpack(">I", seed[:4])[0] / 0xFFFFFFFF

    return rnd


def cinematic_plate(slug: str, kind: str) -> Image.Image:
    seed = f"{slug}:{kind}".encode()
    rnd = _rng(seed)
    W, H = SW, SH

    base_r = int(18 + rnd() * 25)
    base_g = int(20 + rnd() * 22)
    base_b = int(28 + rnd() * 35)
    data = []
    for y in range(H):
        fy = y / H
        lift = math.sin(fy * math.pi) * 0.15
        row = []
        for x in range(W):
            n = rnd() * 0.08
            r = min(255, max(0, int(base_r + lift * 40 + n * 255)))
            g = min(255, max(0, int(base_g + lift * 35 + n * 255)))
            b = min(255, max(0, int(base_b + lift * 30 + n * 255)))
            row.append((r, g, b))
        data.extend(row)

    img = Image.new("RGB", (W, H))
    img.putdata(data)
    img = img.filter(ImageFilter.GaussianBlur(radius=0.8 + rnd() * 0.8))

    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    cx = int(W * (0.35 + rnd() * 0.3))
    cy = int(H * (0.25 + rnd() * 0.2))
    warm = (255, 210, 160, int(35 + rnd() * 40))
    draw.ellipse(
        (cx - W // 2, cy - H // 3, cx + W // 2, cy + H // 2),
        fill=warm,
    )
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

    graded = Image.new("RGB", (W, H))
    gp = graded.load()
    ip = img.load()
    for y in range(H):
        for x in range(W):
            r, g, b = ip[x, y]
            r = int(r * 0.92 + 8)
            g = int(g * 0.95 + 6)
            b = int(min(255, b * 1.08 + 4))
            gp[x, y] = (r, g, b)

    random.seed(int.from_bytes(hashlib.md5(seed).digest()[:4], "big"))
    grain = Image.effect_noise((W, H), float(12 + rnd() * 8)).convert("L")
    grain = grain.filter(ImageFilter.GaussianBlur(0.25))
    graded = Image.blend(
        graded,
        Image.merge("RGB", (grain, grain, grain)),
        0.14,
    )

    v = Image.new("L", (W, H), 0)
    vd = ImageDraw.Draw(v)
    vd.ellipse((-W // 4, -H // 4, W + W // 4, H + H // 4), fill=220)
    v = v.filter(ImageFilter.GaussianBlur(radius=25))
    black = Image.new("RGB", (W, H), (0, 0, 0))
    graded = Image.composite(black, graded, v)

    r, g, b = graded.split()
    r = r.transform((W, H), Image.Transform.AFFINE, (1, 0, 1, 0, 1, 0))
    b = b.transform((W, H), Image.Transform.AFFINE, (1, 0, -1, 0, 1, 0))
    graded = Image.merge("RGB", (r, g, b))

    return graded.resize((OUT_W, OUT_H), Image.Resampling.LANCZOS)


def main() -> None:
    for slug in SLUGS:
        out_dir = PUBLIC / slug
        out_dir.mkdir(parents=True, exist_ok=True)
        for name in ("hero", "workflow-1", "workflow-2"):
            path = out_dir / f"{name}.webp"
            plate = cinematic_plate(slug, name)
            plate.save(path, "WEBP", quality=88, method=6)
            print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
