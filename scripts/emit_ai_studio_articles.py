#!/usr/bin/env python3
"""Émet les fichiers Markdown du blog AI Studio (frontmatter + corps long par slug)."""
from __future__ import annotations

import sys
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "content" / "blog"

sys.path.insert(0, str(Path(__file__).resolve().parent))
from ai_studio_fragments_fr import pick_fragments
from ai_studio_rest_data import ARTICLES, WORKFLOW_VIDEO, std_spec


def md_front(
    title: str,
    date: str,
    excerpt: str,
    slug: str,
) -> str:
    thumb = f"/images/blog/{slug}/hero.webp"
    return f"""---
title: "{title}"
date: "{date}"
category: "tutoriels"
excerpt: "{excerpt}"
thumbnail: "{thumb}"
---
"""


def block_prompt(scene: str) -> str:
    return f"""```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, {scene}, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```"""


def youtube_line(video_id: str, label: str) -> str:
    return f"Pour calibrer l’œil, regarde cette référence : [{label}](https://www.youtube.com/watch?v={video_id})"


# IDs YouTube (cinéma, lumière, compo), rotation pour varier les sources visuelles.
Y1 = "hHWkvFH8u9I"
Y2 = "Y2h4HkJL2XQ"
Y3 = "pLDTXnovoBc"
Y4 = "vP4YH5886nc"
Y5 = "KJbLaSGOPPk"


def article_common_tail(
    faq_pairs: list[tuple[str, str]],
    internal_links: list[tuple[str, str]],
) -> str:
    links_md = "\n".join(f"- [{t}](/blog/{s})" for t, s in internal_links)
    faq_md = "\n\n".join(f"**{q}**\n\n{a}" for q, a in faq_pairs)
    return f"""
## Liens utiles dans la série AI Studio

{links_md}

## Foire aux questions (FAQ)

{faq_md}
"""


def build_post(spec: dict) -> str:
    """Assemble un article long à partir de blocs."""
    concepts = spec.get("concepts") or pick_fragments(spec["slug"] + ":c", 6)
    between_images = spec.get("between_images") or pick_fragments(
        spec["slug"] + ":bi",
        4,
    )
    trench = spec.get("trench") or pick_fragments(spec["slug"] + ":tr", 8)
    parts = [
        md_front(spec["title"], spec["date"], spec["excerpt"], spec["slug"]),
        spec["hook"],
        "\n## Concepts clés (ce que tu dois retenir avant de cliquer partout)\n\n",
        concepts,
        "\n## Notes de plateau, détails qui changent tout\n\n",
        pick_fragments(spec["slug"] + ":plateau", 7),
        "\n## Workflow pratique, comme sur un vrai tournage (mais avec l’IA)\n\n",
        spec["workflow"],
        "\n## Micro réglages avant de figer une séquence\n\n",
        pick_fragments(spec["slug"] + ":fige", 8),
        "\n![",
        spec["alt1"],
        "](workflow-1.webp)\n\n",
        between_images,
        "\n![",
        spec["alt2"],
        "](workflow-2.webp)\n\n",
        "\n### Table de décision rapide\n\n",
        spec["table_md"],
        "\n",
        spec["pro_quote"],
        "\n## Trench warfare : ce que les débutants ratent, et comment réparer\n\n",
        trench,
        "\n",
        youtube_line(spec["yt"], spec["yt_label"]),
        "\n\n",
        block_prompt(spec["scene_hero"]),
        "\n\n",
        block_prompt(spec["scene_w1"]),
        "\n\n",
        block_prompt(spec["scene_w2"]),
        article_common_tail(spec["faq"], spec["links"]),
    ]
    return "".join(parts)


# Chaque entrée : textes longs (objectif 2500+ mots au total une fois assemblés).
POSTS: list[dict] = []


def register(p: dict) -> None:
    POSTS.append(p)


# --- 29 mars 2026 (3) ---
register(
    {
        "slug": "comment-creer-une-video-cinematique-avec-l-ia-etape-par-etape",
        "date": "2026-03-29",
        "title": "Comment créer une vidéo cinématique avec l’IA, étape par étape",
        "excerpt": "Un workflow studio pour passer d’une idée floue à une vidéo IA crédible, avec des réglages concrets et les pièges à éviter.",
        "yt": Y1,
        "yt_label": "réflexes de composition et de mouvement en cinéma",
        "alt1": "Repère lumière douce et grain discret, repère visuel pour caler ton image de départ.",
        "alt2": "Second repère de profondeur et de texture, pour ancrer le réalisme du plan.",
        "scene_hero": "dim interior, single practical lamp, dust in the air, actor silhouette mid-frame, moody contrast, handheld micro-shake",
        "scene_w1": "close-up of clapperboard out of focus foreground, blurred warm tungsten background, editorial framing",
        "scene_w2": "wide shot urban night street, wet pavement reflections, distant neon bokeh, natural noise",
        "table_md": """| Étape | Objectif | Réglage typique | Critère de qualité |
| --- | --- | --- | --- |
| Brief | éviter le flou artistique | 5 lignes max, émotion + contrainte | tu peux le lire à voix haute en 10 secondes |
| Image pilote | verrouiller le look | modèle photoréaliste, 16:9, peu de steps | peau et matière tiennent au zoom |
| Mouvement | vendre la caméra | amplitude faible, 24 fps mental | aucune déformation de mains ou de dents |
| Son | crédibiliser | bruit de chambre + ambi | pas de silence « studio » |
| Montage | cinéma | recadrage léger, grain, courbe | ça ressemble à un extrait, pas à une pub IA |
""",
        "pro_quote": """> Le cinéma commence quand tu arrêtes d’expliquer et que tu montres une intention. L’IA ne remplace pas ça, elle accélère seulement la matière première.

""",
        "links": [
            (
                "Pourquoi tes vidéos IA ont l’air fake",
                "pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes",
            ),
            (
                "Workflow idée vers film IA",
                "workflow-complet-idee-film-ia-realiste",
            ),
            (
                "Structurer comme un vrai film",
                "comment-structurer-video-ia-comme-vrai-film",
            ),
            (
                "Prompts cinéma photoréalistes",
                "comment-ecrire-prompt-cinematic-ultra-realiste-ia",
            ),
        ],
        "faq": [
            (
                "Quel outil choisir en premier si je suis zéro ?",
                "Commence par ce qui te donne une image pilote stable en 16:9. La vidéo est une chaîne. Si ton image de départ est plastique, aucun modèle de mouvement ne sauvera le clip. Garde un seul outil par étape pendant une semaine, sinon tu ne sauras jamais ce qui a fonctionné.",
            ),
            (
                "Je dois tourner en 4K dès le début ?",
                "Non. Travaille à une résolution où tu peux itérer vite. Monte la résolution quand ton brief, ton prompt et ton étalonnage sont verrouillés. Sinon tu passes ton temps à attendre des rendus moches.",
            ),
            (
                "Pourquoi mes personnages fondent entre deux plans ?",
                "Parce que tu changes de modèle, de seed, ou de description sans feuille de personnage. Fixe un descriptif court, réutilise une image de référence, et évite les gros changements de lumière entre les prompts.",
            ),
            (
                "Le grain, c’est obligatoire ?",
                "Pour vendre le cinéma sur des écrans qui sur-accentuent tout, oui dans 90% des cas. Le grain masque des micro défauts et aligne le clip sur une texture film. Ce n’est pas une astuce de fainéant, c’est du finishing.",
            ),
            (
                "Je n’ai pas de carte graphique locale, je suis foutu ?",
                "Tu n’es pas foutu, tu es seulement plus dépendant du cloud. Garde des exports légers, documente tes prompts, et surtout ne confonds pas vitesse de rendu avec qualité artistique. Beaucoup de clips moches sortent très vite.",
            ),
            (
                "Combien de temps pour un premier résultat propre ?",
                "Pour un clip court de démonstration, prévois une première journée pour le brief et l’image pilote, une seconde pour le mouvement et le son, une troisième pour le montage. Si tu veux du miracle en une heure, tu auras du bruit.",
            ),
            (
                "Est-ce légal pour un client ?",
                "Ça dépend du contrat, du droit à l’image, des bases d’entraînement, et du pays. Ici on parle technique. Pour du client, tu passes par une validation juridique, point.",
            ),
        ],
        "hook": textwrap.dedent("""
Tu connais ce moment. Tu sors un clip IA, tu le regardes, et tu ressens un malaise. Pas parce que c’est laid. Parce que ça ressemble à une démo logicielle.

Voilà la vérité que personne ne t’affiche en gros sur une landing page : la vidéo cinématique, ce n’est pas un bouton magique. C’est une chaîne. Brief, image, mouvement, son, montage. Si une maille lâche, tout le pull tire vers le cheap.

Dans ce guide, on ne va pas te vendre un outil unique. On va poser un workflow de studio, celui que tu utiliserais si tu avais une mini équipe, sauf que les rôles sont éclatés entre tes logiciels. Tu es le réalisateur, tu es aussi le chef op, tu es aussi le monteur. Tant que tu assumes ce rôle avec méthode, tu peux obtenir un rendu sérieux.

Je te parle en terrain. J’ai vu des débutants passer trois nuits sur un générateur parce qu’ils cherchaient le bon modèle, alors que leur brief tenait en deux phrases floues. J’ai vu l’inverse, des gens ultra structurés sortir un clip crédible en une après midi, parce qu’ils savaient où arrêter de pousser les curseurs.

On commence par une règle simple. **Ton clip n’a pas besoin d’être parfait, il a besoin d’être cohérent.** Cohérence de lumière, cohérence de texture, cohérence de rythme. Le spectateur ne te pardonnera pas une image 10/10 suivie d’un plan qui ressemble à un jeu vidéo des années 2000.

Imagine trois débutants fictifs, mais ultra classiques.

Premier cas. Léa veut une pub pour un café. Elle tape « cinematic coffee shop » et espère que l’IA devine l’heure, la saison, la focale. Résultat : néons partout, reflets impossibles, tasses en plastique brillant. Elle n’a pas dit l’heure, ni la focale, ni la source lumineuse. Elle a demandé un style, pas une scène.

Deuxième cas. Marc veut un teaser de série. Il obtient un plan sympa, puis il enchaîne avec un autre modèle pour le mouvement. Les visages changent subtilement. Le spectateur ne sait pas pourquoi, mais il sent le bug. Marc n’a pas de feuille de personnage, pas d’image de référence, pas de règle sur la lumière.

Troisième cas. Sofia veut du handheld « comme au cinéma ». Elle pousse l’amplitude au maximum. Les murs respirent, les mains deviennent du chewing gum. Elle confond chaos et caractère. Le handheld cinéma, c’est presque toujours contenu, jamais une tempête.

Si tu te reconnais dans un de ces trois profils, respire. Ce n’est pas une question de talent. C’est une question d’ordre. Et l’ordre, on peut l’apprendre en une semaine si tu arrêtes de zapper d’outil toutes les six minutes.
""").strip(),
        "concepts": textwrap.dedent("""
Avant les curseurs, trois concepts qui vont te faire gagner des heures.

**Le pilote visuel.** C’est une image fixe qui définit grain, palette, contraste, netteté, type de peau, matière des vêtements. Tant que ton pilote n’est pas bon, la vidéo ne fera que déplacer des défauts.

**La caméra mentale.** Tu dois savoir si tu es en plan large serré, en 35 mm ou en 50 mm, si la lumière est dure ou douce, si tu es en intérieur jour ou nuit. Ce n’est pas du snobisme, c’est du vocabulaire. Les modèles comprennent mieux une intention technique qu’un adjectif vague.

**La chaîne de vérité.** Chaque étape doit livrer un fichier que tu peux nommer sans honte sur un drive d’équipe. `01_brief.md`, `02_moodboard`, `03_pilote.png`, `04_clip_brut`, `05_mix`, `06_master`. Si tu ne peux pas retrouver ton chemin en trente secondes, tu vas refaire les mêmes erreurs en boucle.

Petit rappel qui fâche les marketeurs : le cinéma, c’est aussi du rythme. Une image belle mais statique pendant dix secondes sans intention sonore, c’est une diapositive, pas un film. Pense dès le brief à ce que le spectateur doit ressentir à la seconde trois, à la seconde huit, à la fin.

Enfin, garde la tête froide sur la résolution. Une 720p bien étalonnée avec du grain et un son propre bat souvent une 4K lisse qui hurle l’IA. La définition attire l’œil sur les défauts. Le contrôle attire l’œil sur l’émotion.
""").strip(),
        "workflow": WORKFLOW_VIDEO,
        "between_images": textwrap.dedent("""
Les deux images de workflow ci dessus ne sont pas là pour faire joli. Elles te rappellent deux choses : la lumière doit avoir une source crédible, et le grain doit vivre dans les zones sombres sans manger le visage.

Entre les deux captures, vérifie ton histogramme mental. Est ce que tu as encore du noir réel, ou est ce que ton image est un gris boueux ? Est ce que ta peau a une transition douce ombre vers lumière, ou est ce que tu as un halo coupé au pinceau ? Si tu hésites, baisse la netteté globale et remonte le contraste local sur les yeux seulement, avec une forme très soft.
""").strip(),
        "trench": textwrap.dedent("""
**Tu changes d’outil toutes les heures.** Tu ne sais plus si c’est le prompt ou le modèle. Fixe une semaine outil par étape.

**Tu pousses la netteté partout.** Ça donne du plastique. **Baisse la clarté locale**, travaille le contraste global.

**Tu crois que plus de steps égale mieux.** Souvent ça cristallise les défauts. Trouve le palier où la texture est là sans surdéfinition.

**Tu ignores les mains et les dents dans le brief.** Ajoute des consignes courtes : mains visibles seulement en lointain, ou mains hors champ.

**Tu fais du handheld extrême.** Réduis l’amplitude, ajoute un léger motion blur en post si besoin, pas en génération.

**Tu montes sans piste sonore.** Tu te mens sur le ressenti. Pose l’ambiance avant le master.

**Tu veux corriger un visage dans la génération vidéo.** Repars souvent d’une image fixe corrigée, puis relance un mouvement court.

**Tu oublies le recadrage.** Un léger resserre sur un plan large peut sauver une géométrie douteuse.

**Tu livres en ultra HD trop tôt.** Tu passes trois heures à rendre un clip que tu vas jeter. Itère bas, finalise haut.

**Tu copies des prompts géants trouvés en ligne.** Ils contiennent souvent des contradictions. Écris court, technique, testable.
""").strip(),
    }
)

for _idx, _meta in enumerate(ARTICLES):
    if _meta.get("manual"):
        continue
    register(std_spec(_meta, _idx))


def main() -> None:
    BLOG.mkdir(parents=True, exist_ok=True)
    for spec in POSTS:
        body = build_post(spec)
        path = BLOG / f"{spec['slug']}.md"
        path.write_text(body, encoding="utf-8")
        print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
