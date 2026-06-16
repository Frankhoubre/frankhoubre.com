"""Extraction et enrichissement des prompts « stills cinéma » depuis les articles markdown."""
from __future__ import annotations

import re
from pathlib import Path

# Langage ciné réel + imperfections (positif) — complète les Prompt: déjà dans les MD
FILM_STILL_SUFFIX = (
    ", 35mm photochemical film look, halation on bright practicals, "
    "subtle chromatic aberration at frame edges, soft shadow rolloff, "
    "natural lens imperfections and micro-contrast, slight anamorphic squeeze character, "
    "shot on a fast prime lens (50mm or 85mm), shallow depth of field, "
    "creamy natural bokeh, dynamic off-axis camera angle, "
    "documentary handheld still frame, not a 3d render, not cgi"
)

NEGATIVE_CINEMATIC = (
    "ai art, ai generated look, synthetic, plastic skin, wax skin, doll face, "
    "blender render, unreal engine, subsurface scattering plastic, hdr look, "
    "oversharpened, stock photo crispness, perfect symmetry, anime, cartoon, "
    "holographic ui, glowing interface, watermark, text, logo, "
    "deformed hands, extra fingers, duplicate limbs"
)


def extract_three_prompts(md_text: str) -> tuple[str, str, str]:
    """Retourne (hero, workflow_1, workflow_2) en excluant les templates [SCENE DESCRIPTION]."""
    prompts: list[str] = []
    for line in md_text.splitlines():
        m = re.match(r"^Prompt:\s*(.+)$", line)
        if not m:
            continue
        p = m.group(1).strip()
        if "[SCENE DESCRIPTION]" in p:
            continue
        prompts.append(p)
    if len(prompts) < 3:
        raise ValueError(
            f"besoin de 3 prompts cinéma (hors template), trouvé {len(prompts)}",
        )
    return prompts[0], prompts[1], prompts[2]


def enrich_for_local_render(prompt: str) -> str:
    """Retire `--ar` / `--v` et ajoute le suffixe pellicule."""
    p = re.sub(r"\s*--ar\s+[0-9:]+", "", prompt, flags=re.I)
    p = re.sub(r"\s*--v\s+\S+", "", p, flags=re.I)
    p = re.sub(r"\s+", " ", p).strip()
    if "35mm photochemical film look" not in p:
        p = p + FILM_STILL_SUFFIX
    return p


def load_article_prompts(md_path: Path) -> tuple[str, str, str]:
    return extract_three_prompts(md_path.read_text(encoding="utf-8"))


def prompts_for_slug(slug: str, root: Path) -> dict[str, str]:
    md = root / "content" / "blog" / f"{slug}.md"
    h, w1, w2 = load_article_prompts(md)
    return {
        "slug": slug,
        "hero": enrich_for_local_render(h),
        "workflow_1": enrich_for_local_render(w1),
        "workflow_2": enrich_for_local_render(w2),
    }
