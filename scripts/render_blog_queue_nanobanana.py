#!/usr/bin/env python3
"""Génère les images du blog via Nano Banana 2 (Google Gemini 3.1 Flash Image)
servi par le Vercel AI Gateway.

Remplace `render_blog_queue_gemini.py` (Google Imagen direct) à partir du
2026-08-03 : ne plus utiliser le MCP Higgsfield pour les images du blog, ne
plus utiliser l'API Gemini directe. Seul ce script (Vercel AI Gateway) doit
être utilisé pour générer les images héro des articles.

Prérequis (NE JAMAIS commiter la clé) — dans `.env.local` à la racine :
  AI_GATEWAY_API_KEY=vck_...    # clé Vercel AI Gateway

Usage:
  python3 scripts/render_blog_queue_nanobanana.py
  python3 scripts/render_blog_queue_nanobanana.py --start 0 --end 0
  python3 scripts/render_blog_queue_nanobanana.py --force
  python3 scripts/render_blog_queue_nanobanana.py --slug mon-slug --dest /images/blog/mon-slug/hero.webp --prompt "..."
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

GATEWAY_URL = "https://ai-gateway.vercel.sh/v1/chat/completions"
DEFAULT_MODEL = "google/gemini-3.1-flash-image-preview"  # Nano Banana 2

NO_TEXT_CLAUSE = (
    "absolutely no text, no typography, no letters, no words, no captions, "
    "no title cards, no subtitles, no watermark, no logo, no graphic overlay, "
    "no UI, no infographic"
)

SINGLE_FRAME_CLAUSE = (
    "composed as one single cohesive photographic frame, one continuous "
    "camera shot, unified composition, a single moment in time, "
    "shallow depth of field with natural bokeh"
)

_COLLAGE_TRIGGERS = re.compile(
    r"\b(montage|s[ée]quence|sequence|split[- ]?screen|collage|grid|"
    r"contact sheet|editorial photography(?:\s+style)?|moodboard|planche)\b",
    re.I,
)


def _sanitize_prompt(prompt: str) -> str:
    """Retire les métadonnées d'article et renforce l'interdiction de texte."""
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
    p = f"A single cinematic film still, one cohesive frame, 16:9. {p}"
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


def _generate_nanobanana(api_key: str, model: str, prompt: str, timeout: int) -> bytes:
    """Appelle Nano Banana 2 via le Vercel AI Gateway (/v1/chat/completions)
    et retourne les octets de la première image générée."""
    resp = requests.post(
        GATEWAY_URL,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json={
            "model": model,
            "messages": [{"role": "user", "content": prompt}],
        },
        timeout=timeout,
    )
    if resp.status_code != 200:
        raise SystemExit(f"AI Gateway HTTP {resp.status_code}: {resp.text[:500]}")
    data = resp.json()
    try:
        images = data["choices"][0]["message"]["images"]
    except (KeyError, IndexError, TypeError):
        raise SystemExit(f"Réponse sans image: {str(data)[:500]}")
    if not images:
        raise SystemExit(f"Réponse sans image: {str(data)[:500]}")
    url = images[0]["image_url"]["url"]
    if not url.startswith("data:image"):
        raise SystemExit(f"Format d'image inattendu (pas de data URI): {url[:120]}")
    b64 = url.split(",", 1)[1]
    return base64.b64decode(b64)


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
    parser.add_argument("--model", default=DEFAULT_MODEL)
    parser.add_argument("--queue", type=Path, default=DEFAULT_QUEUE)
    parser.add_argument("--min-bytes", type=int, default=8000)
    parser.add_argument("--timeout", type=int, default=120)
    parser.add_argument(
        "--dest", default=None, help="Génère une seule image (avec --prompt), ignore --queue"
    )
    parser.add_argument("--prompt", default=None)
    args = parser.parse_args()

    _load_env_local()
    api_key = os.environ.get("AI_GATEWAY_API_KEY")
    if not api_key:
        raise SystemExit(
            "AI_GATEWAY_API_KEY manquante. Ajoute-la dans .env.local :\n"
            "  AI_GATEWAY_API_KEY=vck_...   (Vercel AI Gateway)"
        )

    if args.dest and args.prompt:
        records = [{"dest": args.dest, "prompt": args.prompt}]
    else:
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

        prompt = _sanitize_prompt(rec["prompt"])
        if len(prompt) > 3500:
            prompt = prompt[:3490] + "…"

        raw = _generate_nanobanana(api_key, args.model, prompt, args.timeout)
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
