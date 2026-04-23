"""Post-traitement « pellicule » sur images déjà générées (local A1111, etc.)."""
from __future__ import annotations

import numpy as np
from PIL import Image, ImageChops, ImageFilter, ImageOps


def apply_cinematic_post(
    im: Image.Image,
    *,
    grain_strength: float = 0.085,
    ca_pixels: float = 1.25,
    vignette_strength: float = 0.42,
    soften: float = 0.12,
    seed: int | None = None,
) -> Image.Image:
    """
    Grain photographique, aberration chromatique légère, vignette,
    léger adoucissement pour casser le « plastic sharp » IA.
    """
    im = im.convert("RGB")
    w, h = im.size
    if seed is not None:
        np.random.seed(seed)

    # Adoucissement très léger (réduit l'hyper-net AI)
    if soften > 0:
        blur = im.filter(ImageFilter.GaussianBlur(radius=0.45))
        im = Image.blend(im, blur, soften)

    # Aberration chromatique (décalage R/B)
    if ca_pixels > 0:
        r, g, b = im.split()
        r = ImageChops.offset(r, int(round(ca_pixels)), 0)
        b = ImageChops.offset(b, -int(round(ca_pixels)), 0)
        im = Image.merge("RGB", (r, g, b))

    arr = np.asarray(im).astype(np.float32) / 255.0
    # Grain (bruit lumineux corrélé par canal)
    noise = np.random.randn(h, w).astype(np.float32) * grain_strength
    for c in range(3):
        arr[:, :, c] = np.clip(arr[:, :, c] + noise * (0.85 + 0.05 * c), 0, 1)

    out = Image.fromarray((arr * 255).astype(np.uint8), mode="RGB")

    # Vignette radiale
    if vignette_strength > 0:
        yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
        cx, cy = w / 2, h / 2
        nx = (xx - cx) / (w / 2)
        ny = (yy - cy) / (h / 2)
        d = np.sqrt(nx * nx + ny * ny)
        vig = 1.0 - np.clip((d - 0.25) / 0.95, 0, 1) ** 1.8 * vignette_strength
        vig = vig[:, :, np.newaxis]
        va = np.asarray(out).astype(np.float32) / 255.0
        va = np.clip(va * vig, 0, 1)
        out = Image.fromarray((va * 255).astype(np.uint8))

    # Contraste léger façon timing lab
    out = ImageOps.autocontrast(out, cutoff=0.5)

    return out
