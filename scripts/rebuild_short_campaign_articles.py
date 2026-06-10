#!/usr/bin/env python3
"""Reconstruit les articles campagne courts (<2000 mots) avec contenu thématique + fragments."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "content" / "blog"
sys.path.insert(0, str(ROOT / "scripts"))

from ai_studio_fragments_fr import pick_fragments  # noqa: E402
from enrich_blog_posts_min_2000_words import word_count_body  # noqa: E402

MIN_WORDS = int(__import__("os").environ.get("BLOG_REBUILD_MIN_WORDS", "2000"))

WATCH = (
    "[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: "
    "https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on {topic}.]"
)


def parse_fm(raw: str) -> tuple[dict[str, str], str] | None:
    lines = raw.splitlines()
    if not lines or lines[0].strip() != "---":
        return None
    end = next((i for i in range(1, len(lines)) if lines[i].strip() == "---"), None)
    if end is None:
        return None
    fm: dict[str, str] = {}
    for line in lines[1:end]:
        m = re.match(r"^(title|date|category|excerpt|thumbnail):\s*(.+)$", line)
        if m:
            v = m.group(2).strip().strip('"')
            fm[m.group(1)] = v
    body = "\n".join(lines[end + 1 :])
    return fm, body


def extract_images(body: str) -> tuple[str, str, str]:
    imgs = re.findall(r"!\[([^\]]*)\]\((/images/blog/[^)]+)\)", body)
    hero = w1 = w2 = ""
    for alt, path in imgs:
        if path.endswith("/hero.webp"):
            hero = f"![{alt}]({path})"
        elif path.endswith("/workflow-1.webp"):
            w1 = f"![{alt}]({path})"
        elif path.endswith("/workflow-2.webp"):
            w2 = f"![{alt}]({path})"
    return hero, w1, w2


def topic_block(slug: str, title: str, excerpt: str) -> dict[str, str]:
    """Blocs uniques par slug (angle terrain)."""
    key = slug.replace("-", " ")
    return {
        "pain": (
            f"Sur **{title.lower()}**, le piege classique est de confondre vitesse et clarte. "
            f"Tu generes vite, tu empiles des versions, et tu decouvres au montage que {excerpt.lower().rstrip('.')} "
            f"n etait pas verrouille. Ce n est pas un probleme de talent. C est un probleme de brief et de tri."
        ),
        "angle": (
            f"L angle de cet article : transformer « {key} » en routine reproductible. "
            f"Pas une liste d outils. Une sequence d decisions que tu peux repeter sur le prochain projet client."
        ),
        "scenario_a": (
            f"**Scenario A (solo creator).** Tu as deux heures. Tu poses une fiche une page, tu generes un batch de trois, "
            f"tu tranches A B C, tu n touches qu a un levier sur la version B. Tu archives le prompt gagnant. "
            f"C est suffisant pour avancer sur {key} sans spirale."
        ),
        "scenario_b": (
            f"**Scenario B (client marque).** Tu envoies une capture du still valide avant la sequence complete. "
            f"Le client signe la direction. Tu reduces les allers retours de 40 pour cent sur {key}."
        ),
        "scenario_c": (
            f"**Scenario C (serie longue).** Tu numerotes les plans, tu gardes le meme bloc de prompt sur dix fichiers, "
            f"tu ne changes que l action. La coherence vient de la repetition disciplinee, pas de la chance."
        ),
        "watch_topic": f"mettre en place un workflow clair sur {key}",
    }


def build_body(fm: dict[str, str], slug: str, hero: str, w1: str, w2: str) -> str:
    title = fm.get("title", slug)
    excerpt = fm.get("excerpt", "")
    date = fm.get("date", "")
    t = topic_block(slug, title, excerpt)
    f1 = pick_fragments(slug + ":a", 5)
    f2 = pick_fragments(slug + ":b", 5)
    f3 = pick_fragments(slug + ":c", 6)
    f4 = pick_fragments(slug + ":d", 5)

    return f"""
{t["pain"]}

{t["angle"]} Ce guide suit la methode que j utilise en production : brief court, batch limite, post retenu, QA mobile.

{hero}

## Le point de rupture que les debutants sous-estiment

La plupart des blocages sur **{title.lower()}** viennent d un process flou, pas du moteur. Quand les instructions changent a chaque essai, tu obtiens des variantes incoherentes et un montage plein de compromis.

Deuxieme erreur : trop de contraintes dans le meme prompt. Tu ne sais plus ce qui a sauve ou casse la prise. **Un seul levier par iteration.**

Troisieme erreur : QA tardive. Vingt secondes de controle par clip sur telephone evitent des dettes visuelles qui contaminent toute la sequence.

Pour le socle, vois [comment optimiser son workflow IA](/blog/comment-optimiser-workflow-ia-gagner-temps) et [comment structurer une video IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film).

> 💡 **Frank's Cut:** si tu ne peux pas expliquer ta decision creative en une phrase, tu n es pas pret a regenerer. Ecris la phrase, puis seulement le prompt.

## Concepts terrain a verrouiller avant de generer

{f1}

| Phase | Objectif | Livrable |
| --- | --- | --- |
| Brief | Fixer intention et contraintes | `brief-{slug[:20]}.txt` |
| Generation | Batch court lisible | `raw-v1` |
| Tri | A B C sans pitie | `selection.md` |
| Post | Correction sans surtraitement | `master-v1` |
| QA | Mobile + son + rythme | `ready` |

## Workflow en profondeur

### Etape 1 : brief operationnel

Sujet, decor, lumiere, action, interdits. Lisible en trente secondes. Si c est un roman, ce n est plus un brief.

### Etape 2 : generation par batch

Quatre a six variations max, cadre constant. Archive ce qui marche immediatement.

### Etape 3 : tri A B C

A = utilisable. B = recuperable leger. C = rejet. La brutalite protege ton calendrier.

{w1}

### Etape 4 : post avec retenue

Balance globale d abord, grain ensuite. Un post agressif amplifie les artefacts.

{f2}

### Etape 5 : QA diffusion

Desktop, mobile, son, transitions. Quinze pour cent du temps total minimum.

## Cas concrets

{t["scenario_a"]}

{t["scenario_b"]}

{t["scenario_c"]}

{f3}

## Ce que les debutants cassent (et comment reparer)

- **Multi-variables.** Fix : une variable, une note, une decision.
- **Clip spectaculaire mais inutile.** Fix : valider seulement ce qui sert la narration.
- **Surcorrection post.** Fix : regenerer le plan faible.
- **Livraison floue.** Fix : codec, format, et support definis au brief.

References techniques : [YouTube encoding](https://support.google.com/youtube/answer/1722171), [Vimeo compression](https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-compression-guidelines).

{w2}

{WATCH.format(topic=t["watch_topic"])}

## Notes de plateau (details qui changent tout)

{f4}

## FAQ

**Faut-il tout documenter ?**

Oui. Prompt valide, date, statut A B C, raison du rejet. Sans trace, tu ne peux pas relivrer proprement dans un mois.

**Comment savoir si c est livrable ?**

Lisibilite narrative, stabilite visuelle, integration sonore. Si un plan casse le rythme ou la lumiere, c est une dette.

**Dois-je viser la perfection avant montage ?**

Non. Le plan de transition n a pas besoin du meme niveau qu un gros plan visage. Trie vite, corrige ce qui bloque.

**Les presets remplacent-ils le jugement ?**

Jamais. Preset = base mecanique. Ajuste selon lumiere, matiere, emotion.

**Comment eviter la cannibalisation SEO entre articles ?**

Une promesse precise par article, un angle terrain unique. Ici : {excerpt}

**Combien de temps pour la QA ?**

Quinze pour cent du temps total. Image, son, rythme, plateforme. Sans tampon, tu publies des defauts visibles sur mobile.

**Quand regenerer plutot que retoucher ?**

Quand la geometrie ou la lumiere de base est fausse. Le masque local sauve une texture, pas une intention ratee.

**Comment vendre cette methode a un client ?**

Montre la fiche brief et la grille A B C. Le process rassure plus qu un discours sur les modeles.

Applique cette discipline sur **{title.lower()}** et tu passeras du volume au resultat defendable. La qualite long terme vient du process, pas du dernier modele sorti.

<!-- PUBLICATION DATE: {date} -->
""".strip() + "\n"


def main() -> None:
    updated = 0
    for path in sorted(BLOG.glob("*.md")):
        raw = path.read_text(encoding="utf-8")
        parsed = parse_fm(raw)
        if not parsed:
            continue
        fm, body = parsed
        if word_count_body(body) >= MIN_WORDS:
            continue
        hero, w1, w2 = extract_images(body)
        slug = path.stem
        if not hero:
            hero = f"![Illustration {fm.get('title', slug)}](/images/blog/{slug}/hero.webp)"
        if not w1:
            w1 = f"![Workflow production {slug}](/images/blog/{slug}/workflow-1.webp)"
        if not w2:
            w2 = f"![Validation finale {slug}](/images/blog/{slug}/workflow-2.webp)"
        new_body = build_body(fm, slug, hero, w1, w2)
        fm_block = raw.split("---\n", 2)[0] + "---\n" + raw.split("---\n", 2)[1] + "---"
        # rebuild frontmatter from fm dict
        fm_lines = "---\n"
        for k in ("title", "date", "category", "excerpt", "thumbnail"):
            if k in fm:
                fm_lines += f'{k}: "{fm[k]}"\n'
        fm_lines += "---\n"
        path.write_text(fm_lines + new_body, encoding="utf-8")
        n = word_count_body(new_body)
        print(f"{path.name}: -> {n} mots")
        updated += 1
    print(f"Mis a jour: {updated}")


if __name__ == "__main__":
    main()
