#!/usr/bin/env python3
"""Génère des visuels WebP cinématographiques (dégradé + grain + vignette) pour des dossiers blog."""
from __future__ import annotations

import hashlib
import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT_BASE = ROOT / "public" / "images" / "blog"

W, H = 1376, 768


def _slug_seed(slug: str) -> int:
    return int(hashlib.sha256(slug.encode()).hexdigest()[:8], 16)


def _lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def _make_gradient_rgb(seed: int, variant: int) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    rng = np.random.default_rng(seed + variant * 9973)
    # Palette dérivée du slug (tons ciné distincts par article)
    hue = (seed % 360) / 360.0
    # Couleurs de base (approximation HSV -> RGB simplifiée)
    def hsv_to_rgb(h: float, s: float, v: float) -> tuple[float, float, float]:
        i = int(h * 6)
        f = h * 6 - i
        p = v * (1 - s)
        q = v * (1 - f * s)
        t = v * (1 - (1 - f) * s)
        i = i % 6
        if i == 0:
            return v, t, p
        if i == 1:
            return q, v, p
        if i == 2:
            return p, v, t
        if i == 3:
            return p, q, v
        if i == 4:
            return t, p, v
        return v, p, q

    c1 = hsv_to_rgb(hue, 0.35 + 0.1 * variant, 0.12 + 0.04 * variant)
    c2 = hsv_to_rgb((hue + 0.08) % 1.0, 0.45, 0.28 + 0.05 * variant)
    c3 = hsv_to_rgb((hue + 0.18) % 1.0, 0.25, 0.45 + 0.06 * variant)

    xs = np.linspace(0, 1, W, dtype=np.float64)
    ys = np.linspace(0, 1, H, dtype=np.float64)
    gx, gy = np.meshgrid(xs, ys)
    angle = 0.9 + 0.15 * (seed % 7) / 7.0 + variant * 0.05
    u = gx * math.cos(angle) + gy * math.sin(angle)
    u = (u - u.min()) / (u.max() - u.min() + 1e-9)
    vmap = np.sqrt(gx * gx + (1 - gy) * (1 - gy))
    vmap = (vmap - vmap.min()) / (vmap.max() - vmap.min() + 1e-9)

    r = _lerp(c1[0], c2[0], u) * (0.75 + 0.25 * vmap) + c3[0] * 0.15
    g = _lerp(c1[1], c2[1], u) * (0.75 + 0.25 * vmap) + c3[1] * 0.15
    b = _lerp(c1[2], c2[2], u) * (0.75 + 0.25 * vmap) + c3[2] * 0.15

    # Spot lumineux (key light)
    cx, cy = 0.35 + 0.1 * rng.random(), 0.35 + 0.08 * rng.random()
    sigma = 0.35 + 0.1 * variant
    spot = np.exp(-(((gx - cx) ** 2 + (gy - cy) ** 2) / (2 * sigma**2)))
    r = np.clip(r + spot * 0.18, 0, 1)
    g = np.clip(g + spot * 0.16, 0, 1)
    b = np.clip(b + spot * 0.12, 0, 1)

    return r, g, b


def _film_grain(arr: np.ndarray, strength: float) -> np.ndarray:
    noise = np.random.randn(*arr.shape).astype(np.float64) * strength
    return np.clip(arr + noise, 0, 1)


def _vignette() -> np.ndarray:
    xs = np.linspace(-1, 1, W)
    ys = np.linspace(-1, 1, H)
    gx, gy = np.meshgrid(xs, ys)
    d = np.sqrt(gx * gx + gy * gy)
    vig = 1.0 - np.clip((d - 0.35) / 0.75, 0, 1) ** 1.8 * 0.55
    return vig.astype(np.float64)


def _rule_of_thirds_overlay(base: Image.Image) -> Image.Image:
    draw = ImageDraw.Draw(base, "RGBA")
    w, h = base.size
    third_w, third_h = w // 3, h // 3
    line = (255, 255, 255, 38)
    for x in (third_w, 2 * third_w):
        draw.line([(x, 0), (x, h)], fill=line, width=2)
    for y in (third_h, 2 * third_h):
        draw.line([(0, y), (w, y)], fill=line, width=2)
    return base.convert("RGB")


def _storyboard_grid_overlay(base: Image.Image) -> Image.Image:
    draw = ImageDraw.Draw(base, "RGBA")
    w, h = base.size
    pad = int(w * 0.08)
    cell = (w - 2 * pad) // 3
    for i in range(4):
        x = pad + i * cell
        draw.rectangle([x, int(h * 0.22), x + cell - 8, int(h * 0.72)], outline=(255, 255, 255, 45), width=2)
    return base.convert("RGB")


def _timeline_strip_overlay(base: Image.Image) -> Image.Image:
    draw = ImageDraw.Draw(base, "RGBA")
    w, h = base.size
    y0 = int(h * 0.78)
    draw.rounded_rectangle([int(w * 0.06), y0, int(w * 0.94), y0 + 36], radius=6, fill=(20, 22, 28, 200))
    for i, col in enumerate([(90, 140, 220), (120, 90, 200), (200, 160, 90)]):
        x1 = int(w * 0.1 + i * (w * 0.22))
        draw.rectangle([x1, y0 + 6, x1 + int(w * 0.16), y0 + 30], fill=(*col, 210))
    return base.convert("RGB")


def build_frame(slug: str, variant: int) -> Image.Image:
    seed = _slug_seed(slug)
    np.random.seed(seed + variant * 10007)
    r, g, b = _make_gradient_rgb(seed, variant)
    vig = _vignette()
    r, g, b = r * vig, g * vig, b * vig
    stack = np.stack([r, g, b], axis=-1)
    stack = _film_grain(stack, 0.035 + 0.012 * variant)
    rgb = (stack * 255).astype(np.uint8)
    img = Image.fromarray(rgb, mode="RGB")
    img = img.filter(ImageFilter.GaussianBlur(radius=0.4))

    rgba = img.convert("RGBA")
    if "regle-des-tiers" in slug and variant == 0:
        return _rule_of_thirds_overlay(rgba)
    if variant == 1:
        return _storyboard_grid_overlay(rgba)
    if variant == 2:
        return _timeline_strip_overlay(rgba)
    return img


def write_webp(slug: str, name: str, variant: int) -> Path:
    dest_dir = OUT_BASE / slug
    dest_dir.mkdir(parents=True, exist_ok=True)
    out = dest_dir / name
    im = build_frame(slug, variant)
    im.save(out, "WEBP", quality=88, method=6)
    return out


def main() -> None:
    jobs: list[tuple[str, str, int]] = []
    slugs = [
        "comment-penser-comme-realisateur-avec-ia",
        "comment-cadrer-image-ia-comme-pro-cinema",
        "comment-utiliser-regle-des-tiers-generation-ia",
        "comment-choisir-bons-angles-camera-ia",
        "comment-construire-scene-cinematique-plan-par-plan",
        "comment-creer-narration-visuelle-sans-dialogue",
        "comment-creer-tension-visuelle-scene-ia",
        "comment-diriger-personnage-ia-comme-acteur",
    ]
    for s in slugs:
        jobs.append((s, "hero.webp", 0))
        jobs.append((s, "workflow-1.webp", 1))
        jobs.append((s, "workflow-2.webp", 2))

    for slug, fname, var in jobs:
        p = write_webp(slug, fname, var)
        print(p.relative_to(ROOT))


if __name__ == "__main__":
    main()
