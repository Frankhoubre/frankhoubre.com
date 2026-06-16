#!/usr/bin/env python3
"""Génère les images du blog (tmp-blog-gen-queue.json) via l'API Google Imagen.

Économique et photoréaliste : modèle par défaut « imagen-4.0-fast-generate-001 »,
rendu 1K en 16:9, puis post-traitement ciné (grain / vignette) comme les autres
renderers. Le style « still cinéma » (objectif, bokeh, angle dynamique, anti-IA)
vient du FILM_STILL_SUFFIX partagé, déjà appliqué aux prompts de la queue.

Prérequis (NE JAMAIS commiter la clé) — dans `.env.local` à la racine :
  GEMINI_API_KEY=AIza...        # clé API depuis Google AI Studio (« Get API key »)

Usage:
  python3 scripts/render_blog_queue_gemini.py
  python3 scripts/render_blog_queue_gemini.py --start 14 --end 100
  python3 scripts/render_blog_queue_gemini.py --model imagen-4.0-generate-001  # qualité ↑, coût ↑
  python3 scripts/render_blog_queue_gemini.py --force

La queue (tmp-blog-gen-queue.json) est produite par un export. Chaque entrée a
au moins { "dest": "/images/blog/.../x.webp", "prompt": "..." }.
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import re
import sys
import time
from io import BytesIO
from pathlib import Path

import requests
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_QUEUE = ROOT / "tmp-blog-gen-queue.json"
PUBLIC = ROOT / "public"

sys.path.insert(0, str(ROOT / "scripts"))
from cinematic_still_post import apply_cinematic_post  # noqa: E402

GEMINI_ENDPOINT = (
    "https://generativelanguage.googleapis.com/v1beta/models/{model}:predict"
)

# Interdiction de texte renforcée : Imagen 4 n'accepte pas de negativePrompt,
# donc on l'écrit dans le prompt positif.
NO_TEXT_CLAUSE = (
    "absolutely no text, no typography, no letters, no words, no captions, "
    "no title cards, no subtitles, no watermark, no logo, no graphic overlay, "
    "no UI, no infographic"
)

# Discipline « still » : formulé en POSITIF (nommer « no collage / grid »
# amorce justement le collage chez les modèles diffusion). On décrit un plan
# unique cohérent.
SINGLE_FRAME_CLAUSE = (
    "composed as one single cohesive photographic frame, one continuous "
    "camera shot, unified composition, a single moment in time, "
    "shallow depth of field with natural bokeh"
)

# Mots du sujet (issus de la queue) qui poussent vers une planche-contact /
# grille de cases ou des panneaux multiples — on les neutralise.
_COLLAGE_TRIGGERS = re.compile(
    r"\b(montage|s[ée]quence|sequence|split[- ]?screen|collage|grid|"
    r"contact sheet|editorial photography(?:\s+style)?|moodboard|planche)\b",
    re.I,
)


def _sanitize_prompt(prompt: str) -> str:
    """Retire les métadonnées d'article (qui font « écrire » du texte au modèle)
    et renforce l'interdiction de texte. Garde la description visuelle."""
    p = re.sub(
        r"Article theme:\s*.*?(?=Context:|Visual focus:|Cinematic|$)",
        "",
        prompt,
        flags=re.I | re.S,
    )
    p = re.sub(
        r"Context:\s*.*?(?=Visual focus:|Cinematic|$)", "", p, flags=re.I | re.S
    )
    p = re.sub(r"Visual focus:\s*", "", p, flags=re.I)
    p = _COLLAGE_TRIGGERS.sub("", p)
    p = re.sub(r"\s+", " ", p).strip(" .,")
    # Ancre un plan unique dès les premiers tokens (poids fort).
    p = f"A single cinematic film still, one cohesive frame. {p}"
    if "no typography" not in p.lower():
        p = f"{p}, {NO_TEXT_CLAUSE}"
    if "one single cohesive photographic frame" not in p.lower():
        p = f"{p}, {SINGLE_FRAME_CLAUSE}"
    return p


def _load_env_local() -> None:
    """Charge .env.local (clé=valeur) sans dépendance externe, sans écraser l'env."""
    env_path = ROOT / ".env.local"
    if not env_path.is_file():
        return
    for line in env_path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, value = line.partition("=")
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def _save_rgba_to_dest(im: Image.Image, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = im.convert("RGB")
    im = im.resize((1600, 900), Image.Resampling.LANCZOS)
    suf = dest.suffix.lower()
    if suf == ".webp":
        im.save(dest, "WEBP", quality=90, method=6)
    elif suf in (".jpg", ".jpeg"):
        im.save(dest, "JPEG", quality=92, optimize=True)
    else:
        im.save(dest, "PNG", optimize=True)


def _generate_imagen(
    api_key: str, model: str, prompt: str, size: str, timeout: int
) -> bytes:
    """Appelle Imagen (:predict) et retourne les octets PNG de la 1re image."""
    # Clés API Gemini (AIza… ou nouveau format AQ.…) → en-tête x-goog-api-key.
    # Un vrai token OAuth (ya29.…) passerait par Authorization: Bearer.
    if api_key.startswith("ya29."):
        auth_headers = {"Authorization": f"Bearer {api_key}"}
    else:
        auth_headers = {"x-goog-api-key": api_key}
    resp = requests.post(
        GEMINI_ENDPOINT.format(model=model),
        headers={
            **auth_headers,
            "Content-Type": "application/json",
        },
        json={
            "instances": [{"prompt": prompt}],
            "parameters": {
                "sampleCount": 1,
                "aspectRatio": "16:9",
                # imagen-*-fast a une taille fixe (1K) ; sampleImageSize n'est
                # accepté que par imagen-4.0-generate-001 / ultra.
                **({"sampleImageSize": size} if "fast" not in model else {}),
                "personGeneration": "allow_adult",
            },
        },
        timeout=timeout,
    )
    if resp.status_code != 200:
        raise SystemExit(
            f"Imagen HTTP {resp.status_code}: {resp.text[:300]}"
        )
    preds = resp.json().get("predictions") or []
    if not preds or "bytesBase64Encoded" not in preds[0]:
        raise SystemExit(f"Réponse Imagen sans image: {str(resp.json())[:300]}")
    return base64.b64decode(preds[0]["bytesBase64Encoded"])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--start", type=int, default=0)
    parser.add_argument("--end", type=int, default=10**9)
    parser.add_argument(
        "--force", action="store_true", help="Régénère même si le fichier existe"
    )
    parser.add_argument(
        "--no-post", action="store_true", help="Désactive grain / vignette"
    )
    parser.add_argument("--sleep", type=float, default=1.2, help="Pause entre requêtes")
    parser.add_argument(
        "--model",
        default="imagen-4.0-fast-generate-001",
        help="Modèle Imagen (fast = le moins cher)",
    )
    parser.add_argument(
        "--size", default="1K", choices=["1K", "2K"], help="Résolution Imagen 4"
    )
    parser.add_argument(
        "--prompt",
        default=None,
        help="Sujet personnalisé (remplace celui de la queue ; cible un seul "
        "index via --start/--end). Passe quand même par le nettoyage/style.",
    )
    parser.add_argument("--queue", type=Path, default=DEFAULT_QUEUE)
    parser.add_argument("--min-bytes", type=int, default=8000)
    parser.add_argument("--timeout", type=int, default=120)
    args = parser.parse_args()

    _load_env_local()
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise SystemExit(
            "GEMINI_API_KEY manquante. Ajoute-la dans .env.local :\n"
            "  GEMINI_API_KEY=AIza...   (Google AI Studio → Get API key)"
        )
    if not (api_key.startswith("AIza") or api_key.startswith("AQ.")):
        print(
            "⚠️  La clé n'a pas un format de clé API Gemini connu (AIza… ou AQ.…) — "
            "vérifie qu'elle vient bien de Google AI Studio.",
            file=sys.stderr,
        )

    if not args.queue.is_file():
        raise SystemExit(f"Fichier queue introuvable: {args.queue}")

    records = json.loads(args.queue.read_text(encoding="utf-8"))
    written = 0
    skipped = 0

    for i, rec in enumerate(records):
        if i < args.start or i > args.end:
            continue
        rel = rec["dest"].lstrip("/")
        dest = PUBLIC / rel
        if dest.is_file() and not args.force and dest.stat().st_size > args.min_bytes:
            skipped += 1
            continue

        prompt = _sanitize_prompt(args.prompt or rec["prompt"])
        if len(prompt) > 3500:
            prompt = prompt[:3490] + "…"

        raw = _generate_imagen(api_key, args.model, prompt, args.size, args.timeout)
        im = Image.open(BytesIO(raw)).convert("RGB")
        if not args.no_post:
            im = apply_cinematic_post(im, seed=i)
        _save_rgba_to_dest(im, dest)
        print(dest.relative_to(ROOT))
        written += 1
        time.sleep(args.sleep)

    print(f"Écrits: {written}, ignorés (déjà présents): {skipped}")


if __name__ == "__main__":
    main()
