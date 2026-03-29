#!/usr/bin/env python3
"""Exporte prompts image complets pour le blog (debug / re-génération)."""
from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from ai_studio_rest_data import ARTICLES, SCENES  # noqa: E402


def full_prompt(scene: str) -> str:
    return (
        "cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, "
        f"shallow depth of field, {scene}, natural skin texture, subtle imperfections, "
        "film grain, volumetric lighting, realistic color grading, no CGI look, "
        "no artificial sharpness, widescreen 16:9 composition"
    )


def main() -> None:
    out = []
    for meta in ARTICLES:
        slug = meta["slug"]
        sh, s1, s2 = SCENES[slug]
        out.append(
            {
                "slug": slug,
                "hero": full_prompt(sh),
                "workflow_1": full_prompt(s1),
                "workflow_2": full_prompt(s2),
            }
        )
    print(json.dumps(out, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
