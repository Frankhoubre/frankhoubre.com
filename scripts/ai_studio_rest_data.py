# -*- coding: utf-8 -*-
"""Données des articles AI Studio (slugs, dates, workflows partagés, scènes)."""
from __future__ import annotations

import hashlib

Y1 = "hHWkvFH8u9I"
Y2 = "Y2h4HkJL2XQ"
Y3 = "pLDTXnovoBc"
Y4 = "vP4YH5886nc"
Y5 = "KJbLaSGOPPk"
YT_ROT = [Y1, Y2, Y3, Y4, Y5]

WORKFLOW_VIDEO = """
### Étape 1 : brief en une page, sans poésie creuse

Ouvre un doc. Écris cinq lignes.

Ligne 1 : le sujet, physique, situé dans un lieu précis. Pas « une femme », mais « une femme en laine, près d’une fenêtre nord, pluie dehors ».

Ligne 2 : l’émotion dominante. Peur, soulagement, désir, fatigue. Un seul mot fort.

Ligne 3 : la durée cible et le format. 12 secondes, 16:9, voix off ou pas.

Ligne 4 : trois références visuelles humaines. Des films, pas des mots. « Blade Runner 2049 intérieurs », « Dune sable et brume », « Winter’s Bone naturel ».

Ligne 5 : interdits. « Pas de néon », « pas de peau lisse », « pas de flou de mouvement extrême ».

**Sauvegarde ce doc.** C’est ton contrat avec toi même.

### Étape 2 : moodboard rapide, trois images fixes

Génère trois images fixes avec le même prompt de base, en ne changeant que la lumière ou l’heure. Compare au zoom. Choisis celle qui tient la peau et les tissus. C’est ton pilote.

Réglages types côté image : démarre avec un modèle photoréaliste, évite les presets « fantasy ». Steps ou force équivalente : assez pour la texture, pas assez pour l’hyper netteté. CFG ou guidance : milieu de plage, pas le max, sinon tu obtiens du plastique.

### Étape 3 : mouvement minimal, comme un opérateur humain

Passe à la vidéo seulement quand le pilote est validé. Décris un mouvement de caméra simple. Truck lent, pan très lent, push in discret. **Évite 360° et les orbites** au début, c’est là que la géométrie explose.

Si ton outil propose force de mouvement, reste entre 20% et 45% au début. Au dessus, tu paies en déformation. Si tu as un réglage de cohérence avec l’image source, monte le légèrement jusqu’à ce que les mains restent stables.

### Étape 4 : son et ambiance, tout de suite

Ne finis pas visuel avant d’poser une piste d’ambiance. Même mauvaise. Le cerveau associe le son au réalisme. Bruit de pièce, ventilation, rue lointaine, pluie. Puis voix si besoin, traitée avec un peu de chambre.

### Étape 5 : montage, recadrage, grain

Importe dans ton NLE préféré. Recadre légèrement pour casser l’effet « cadrage IA parfait ». Ajoute une courbe douce, baisse un peu les hautes lumières, monte légèrement les mids pour garder du visage. **Ajoute du grain** en overlay, 8 mm léger ou 35 mm fin selon ton look.

Exporte une première version en qualité moyenne, regarde sur téléphone et sur écran calibré. Corrige, reboucle.

### Étape 6 : critique en cinq minutes

Pose un minuteur. Note trois défauts maximum. Corrige ceux qui touchent à la cohérence avant ceux qui touchent au détail cosmétique. Une main bizarre bat une tache de lumière discutable.
""".strip()

WORKFLOW_PROMPT = """
### Étape 1 : une phrase d’intention, puis la géométrie

Avant les adjectifs, écris ce que la caméra doit montrer. Plan américain, plan taille, gros plan. Hauteur de caméra : niveau œil, légèrement en contre plongée, ou à hauteur de poitrine pour une tension douce.

Ensuite seulement, ajoute l’émotion. L’émotion sans géométrie, les modèles la traduisent par des néons et des poses catalogue.

**Test rapide :** si tu retires tous les adjectifs « cinematic », est ce que ton prompt tient encore debout ? Sinon, il était creux.

### Étape 2 : lumière en trois lignes, comme un chef op

Ligne A : source principale, taille apparente, couleur, direction. Exemple : fenêtre large nord, lumière douce, légèrement froide.

Ligne B : fill ou absence de fill. Exemple : pas de fill, ombre dure sous le nez, contraste fort.

Ligne C : arrière plan. Exemple : pièce sombre, une lampe practical chaude au fond, bokeh large.

Tu viens de remplacer dix adjectifs vagues par une hiérarchie lisible.

### Étape 3 : objectif et champs, sans jargon inutile

Choisis une famille : 24 mm large, 35 mm polyvalent, 50 mm portrait sobre, 85 mm compression douce. Ajoute anamorphique seulement si tu assumes des ovales de bokeh et une chute de netteté caractéristique.

**Écris la distance sujet arrière plan** en une phrase courte. Même fausse au millimètre près, l’idée de profondeur aide le modèle à séparer les plans.

### Étape 4 : matière et imperfections contrôlées

Ajoute trois imperfection réelles : grain fin, poussière en suspension légère, micro texture de peau visible au zoom. Pas vingt. Trois.

Puis ajoute deux interdits explicites : pas de peau porcelaine, pas de sharp global agressif, pas de catchlights symétriques parfaits si la scène est naturelle.

### Étape 5 : personnage, fiche courte et stable

Âge approximatif, vêtement ancré, coiffure réaliste, accessoire rare mais mémorable. Évite les listes de vingt traits. **Moins de traits, plus stables.**

Si tu enchaînes plusieurs plans, garde la même fiche et change seulement le cadrage ou l’action.

### Étape 6 : itération en trois passes

Passe 1 : composition et lumière. Passe 2 : peau et tissus. Passe 3 : netteté et grain. Ne touche pas aux trois en même temps, sinon tu ne sauras pas ce qui a sauvé l’image.

### Étape 7 : négatif utile, pas encyclopédique

Quatre à huit négatifs précis battent trente négatifs génériques. Cible ce que ton modèle produit par défaut sur ton sujet : mains supplémentaires, dents fusionnées, texte illisible, horizon courbe.

### Étape 8 : verrouillage

Quand une image tient, note seed, note prompt final, note réglages critiques. Ton futur toi est un collaborateur impatient, il déteste le mystère.
""".strip()

WORKFLOW_IMAGE = """
### Étape 1 : choisir le bon moteur pour la tâche

Flux brille souvent sur les transitions douces, la matière, les scènes complexes avec beaucoup d’objets. SDXL reste un couteau suisse avec un écosystème énorme de LoRA et de workflows ComfyUI.

**Règle simple :** si tu veux du portrait peau et yeux avec contrôle fin, teste les deux sur le même prompt court. Garde celui qui ment le moins sur les mains et les dents.

### Étape 2 : résolution et recadrage avant beauté

Travaille en 16:9 ou 2:3 selon la sortie, pas en carré si ton film est horizontal. Monte en résolution seulement quand la composition est figée. Sinon tu optimises des erreurs en haute définition.

### Étape 3 : steps, CFG, scheduler, sans religion

Monte les steps jusqu’au point où la texture apparaît, puis arrête avant la surdéfinition. CFG trop haut = plastique. CFG trop bas = boue. **Cherche une fenêtre**, note la, réutilise la.

### Étape 4 : peau en deux temps

Temps 1 : génération avec lumière plausible et ombre sous le nez. Temps 2 : retouche locale légère ou inpainting sur la zone yeux bouche si nécessaire. Évite de régénérer toute la scène pour une micro zone.

### Étape 5 : grain cinéma en post souvent mieux qu’en prompt seul

Un grain overlay contrôlé, adapté à la densité des ombres, réagit mieux que « add grain » jeté dans le prompt sans mesure. Combine les deux seulement si tu sais ce que chaque couche apporte.

### Étape 6 : contraste et couleur

Courbe d’abord, saturation ensuite. Isole les peaux si tu pousses un look teal orange. **Garde du sang dans les rouges** des joues, sinon tu passes en mannequin 3D.

### Étape 7 : profondeur de champ crédible

Décris la distance et la focale. Vérifie les transitions net vers flou : trop abruptes = collage. Un léger flou gaussien sur l’arrière plan en post peut sauver une scène presque bonne.

### Étape 8 : export pour la suite vidéo

Exporte PNG ou TIFF propre pour l’image pilote, garde une variante avec grain si tu enchaînes directement vers un outil vidéo. Documente la focale et la lumière dans un fichier texte à côté, la vidéo te remerciera.
""".strip()

TABLE_VIDEO = """| Phase | But | Levier | Test rapide |
| --- | --- | --- | --- |
| Brief | clarifier | 5 lignes max | lisible à voix haute |
| Pilote | look | image fixe 16:9 | zoom peau et tissu |
| Mouvement | crédibilité | amplitude 20 à 45 % | mains stables |
| Son | ancrage | room tone | pas de silence absolu |
| Master | diffusion | grain + courbe | lecture sur téléphone |"""

TABLE_PROMPT = """| Couche | Tu écris quoi | Erreur fréquente | Bon signal |
| --- | --- | --- | --- |
| Caméra | plan, hauteur, focale | seulement « cinematic » | tu visualises le cadre |
| Lumière | key, fill, fond | « belle lumière » | tu sais où est la source |
| Matière | grain, texture peau | 20 adjectifs | 3 défauts réels assumés |
| Négatif | 4 à 8 cibles précises | liste encyclopédique | tu corriges un défaut mesuré |
| Lock | seed + fichier txt | tout en tête | reproductible demain |"""

TABLE_IMAGE = """| Choix | Critère | Flux | SDXL |
| --- | --- | --- | --- |
| Portrait | peau et yeux | tester en priorité | LoRA énorme, très flexible |
| Scène | objets multiples | souvent très fort | dépend du checkpoint |
| Vitesse locale | VRAM | selon quant | optimisé DIY |
| Post grain | contrôle fin | combine prompt + overlay | idem |
| Vidéo next | image pilote propre | export PNG + meta | export PNG + meta |"""

PRO_QUOTES = [
    """> Un prompt, c’est une liste de décisions. Si tu n’en prends pas, le modèle les prendra pour toi, et tu n’aimeras pas ses goûts.

""",
    """> Le réalisme n’est pas la netteté max. C’est une suite de petites erreurs cohérentes avec le monde physique.

""",
    """> Le cinéma commence quand tu arrêtes d’expliquer et que tu montres une intention. L’IA ne remplace pas ça, elle accélère la matière première.

""",
]

FAQ_VIDEO = [
    (
        "Je commence par quel logiciel ?",
        "Par celui qui te donne une image pilote stable pour {topic}. Pas celui qui a la meilleure bande annonce marketing.",
    ),
    (
        "Pourquoi mon clip ressemble à une pub télé ?",
        "Souvent trop de saturation, trop de netteté, trop de lumière frontale. Baisse la clarté locale, penche la lumière, ajoute du grain.",
    ),
    (
        "Mes personnages changent entre les plans, pourquoi ?",
        "Tu n’as pas verrouillé identité et lumière. Feuille de personnage courte, références fixes, prompts qui ne se contredisent pas.",
    ),
    (
        "Le mouvement déforme tout, que faire ?",
        "Réduis l’amplitude, raccourcis la durée, simplifie le décor, ou repars d’une image fixe corrigée.",
    ),
    (
        "Je dois absolument du 4K ?",
        "Non. Itère là où c’est rapide, upscale quand la direction est bonne.",
    ),
    (
        "Le son est facultatif ?",
        "Jamais. Même une ambi basse change le jugement sur l’image.",
    ),
    (
        "Combien de temps pour un premier clip propre ?",
        "Pour {topic}, compte plusieurs sessions courtes plutôt qu’un marathon. Le sommeil est un outil de correction.",
    ),
    (
        "C’est utilisable pour un client ?",
        "Techniquement possible, juridiquement ça dépend des contrats et des droits. Documente ta chaîne de production.",
    ),
    (
        "Pourquoi mes ciels sont trop HDR ?",
        "Tu n’as pas bridé les hautes lumières. Courbe et roll off doux avant de saturer.",
    ),
    (
        "Le handheld, comment sans casser la géométrie ?",
        "Amplitude faible, décor simple, ou flou de mouvement léger en post sur l’arrière plan seulement.",
    ),
    (
        "Je perds la motivation ?",
        "Réduis la durée du projet. Un clip de huit secondes bien fini vaut mieux qu’un long métrage IA bancal.",
    ),
    (
        "Où apprendre le vocabulaire opérateur ?",
        "En regardant des films avec le son coupé, en nommant plan par plan. Puis en recopiant ce vocabulaire dans {topic}.",
    ),
]

FAQ_PROMPT = [
    (
        "Mon prompt est long et moche, normal ?",
        "Non. Un prompt long est souvent un prompt qui se combat lui même. Raccourcis, hiérarchise, teste.",
    ),
    (
        "Anglais ou français ?",
        "Teste les deux sur {topic}. Garde la langue qui donne les tags photo les plus stables sur ton modèle.",
    ),
    (
        "Les négatifs, j’en mets trente ?",
        "Tu crées des interférences. Prends quatre négatifs qui ciblent tes défauts réels.",
    ),
    (
        "Pourquoi la lumière ne suit pas ?",
        "Tu n’as pas nommé de source, seulement un mood. Décris fenêtre, lampe, heure, dureté.",
    ),
    (
        "Comment garder un personnage ?",
        "Fiche courte stable, seed, référence image, et changements minimales entre plans.",
    ),
    (
        "Mes visages fondent, que mettre dans le prompt ?",
        "Moins de beauté, plus de lumière latérale, mains hors champ si possible.",
    ),
    (
        "Je copie des prompts sur Discord ?",
        "Inspire toi, réécris pour ton sujet. Les prompts génériques te collent un style générique.",
    ),
    (
        "Anamorphique à tout va ?",
        "Seulement si tu assumes bokeh ovale et falloff. Sinon tu ajoutes du flou sale.",
    ),
    (
        "Comment décrire une nuit crédible ?",
        "Source pratique proche, ombres profondes mais pas grises, reflets au sol si humide.",
    ),
    (
        "Je dois tout mettre dans un seul prompt ?",
        "Pour {topic}, sépare parfois en deux passes : lumière d’abord, détail ensuite.",
    ),
    (
        "Le style « film » suffit ?",
        "Non. « Film » sans caméra et sans lumière, c’est un fond d’écran.",
    ),
    (
        "Où je note mes tests ?",
        "Dans un fichier à côté des images. Sinon tu répètes les mêmes erreures sur {topic}.",
    ),
]

FAQ_IMAGE = [
    (
        "Flux ou SDXL pour {topic} ?",
        "Teste les deux avec le même prompt court. Garde le moteur qui ment le moins sur ton sujet précis.",
    ),
    (
        "Pourquoi ma peau est plastique ?",
        "Guidance trop haute, lumière frontale dure, sharp en post. Corrige dans cet ordre.",
    ),
    (
        "Le grain seulement en prompt ?",
        "Souvent non. Un overlay en post contrôle mieux les ombres.",
    ),
    (
        "Je monte les steps à fond ?",
        "Tu cristallises les défauts. Cherche un palier, note le.",
    ),
    (
        "Mes noirs sont gris ?",
        "Courbe, pas saturation. Remets du vrai noir cinéma.",
    ),
    (
        "L’anamorphique en prompt marche ?",
        "Oui si tu décris bokeh, falloff, et souvent des imperfections d’objectif légères.",
    ),
    (
        "Je travaille en local, conseil VRAM ?",
        "Résolution modeste pour itérer, upscale propre à la fin pour {topic}.",
    ),
    (
        "Inpainting ou regénération totale ?",
        "Inpaint pour yeux ou mains, regénère tout seulement si la lumière globale est fausse.",
    ),
    (
        "Contraste faible, pourquoi ?",
        "Modèle prudent ou export plat. Monte le contraste global avant la saturation.",
    ),
    (
        "Je veux une ambiance sombre ?",
        "Garde une petite accroche lumineuse sur le visage ou un practical, sinon boue.",
    ),
    (
        "SDXL checkpoint, lequel ?",
        "Celui qui correspond à ton sujet réel, pas celui à la mode cette semaine.",
    ),
    (
        "Je prépare une image pour vidéo ?",
        "Oui : export propre, note focale et lumière, garde une piste sans sharpen agressif pour {topic}.",
    ),
]


def faq_pairs(slug: str, title: str, cat: str) -> list[tuple[str, str]]:
    pool = {"video": FAQ_VIDEO, "prompt": FAQ_PROMPT, "image": FAQ_IMAGE}[cat]
    h = int(hashlib.md5(slug.encode("utf-8")).hexdigest(), 16)
    topic = title
    out: list[tuple[str, str]] = []
    for i in range(7):
        q, a = pool[(h + i * 7) % len(pool)]
        out.append((q, a.format(topic=topic)))
    return out


# Index 0 = premier article déjà émis à la main dans emit_ai_studio_articles.py
ARTICLES: list[dict] = [
    {
        "slug": "comment-creer-une-video-cinematique-avec-l-ia-etape-par-etape",
        "date": "2026-03-29",
        "cat": "video",
        "title": "Comment créer une vidéo cinématique avec l’IA, étape par étape",
        "excerpt": "Un workflow studio pour passer d’une idée floue à une vidéo IA crédible, avec des réglages concrets et les pièges à éviter.",
        "manual": True,
    },
    {
        "slug": "pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes",
        "date": "2026-03-29",
        "cat": "video",
        "title": "Pourquoi mes vidéos IA ont l’air fake, et comment les rendre réalistes",
        "excerpt": "Les signaux qui trahissent l’IA, du plastique à la géométrie, et des corrections concrètes pour un rendu crédible.",
    },
    {
        "slug": "workflow-complet-idee-film-ia-realiste",
        "date": "2026-03-29",
        "cat": "video",
        "title": "Workflow complet pour passer d’une idée à un film IA réaliste",
        "excerpt": "De la note sur papier au master, enchaînement des étapes, fichiers, et points de contrôle comme en studio.",
    },
    {
        "slug": "comment-transformer-image-ia-video-fluide-credible",
        "date": "2026-03-30",
        "cat": "video",
        "title": "Comment transformer une image IA en vidéo fluide et crédible",
        "excerpt": "Image pilote, cohérence temporelle, amplitude de mouvement, et post pour éviter l’effet marionnette.",
    },
    {
        "slug": "comment-obtenir-rendu-cinema-avec-seedance-2",
        "date": "2026-03-30",
        "cat": "video",
        "title": "Comment obtenir un rendu cinéma avec Seedance 2",
        "excerpt": "Réglages et habitudes de travail pour pousser un moteur vidéo vers un rendu film, sans look démo.",
    },
    {
        "slug": "creer-court-metrage-100-ia-sans-camera-acteurs",
        "date": "2026-03-30",
        "cat": "video",
        "title": "Créer un court métrage 100 % IA sans caméra ni acteurs",
        "excerpt": "Structure narrative, cohérence des personnages, limitations honnêtes, et finishing pour tenir un festival en ligne.",
    },
    {
        "slug": "comment-ecrire-script-efficace-video-generee-par-ia",
        "date": "2026-03-31",
        "cat": "video",
        "title": "Comment écrire un script efficace pour une vidéo générée par IA",
        "excerpt": "Format page, beats, descriptions visuelles exploitables, et dialogues qui survivent à la génération.",
    },
    {
        "slug": "comment-structurer-video-ia-comme-vrai-film",
        "date": "2026-03-31",
        "cat": "video",
        "title": "Comment structurer une vidéo IA comme un vrai film",
        "excerpt": "Actes, transitions, rythme, et grammes de montage pour dépasser le clip unique plan.",
    },
    {
        "slug": "comment-ameliorer-realisme-mouvements-video-ia",
        "date": "2026-03-31",
        "cat": "video",
        "title": "Comment améliorer le réalisme des mouvements en vidéo IA",
        "excerpt": "Vitesses, trajectoires, interactions mains objets, et quand préférer le montage à la génération brute.",
    },
    {
        "slug": "comment-creer-pub-video-avec-ia-comme-agence-pro",
        "date": "2026-04-01",
        "cat": "video",
        "title": "Comment créer une pub vidéo avec l’IA comme une agence pro",
        "excerpt": "Brief client, variantes, conformité, livrables, et finitions qui passent la review créa.",
    },
    {
        "slug": "comment-ecrire-prompt-cinematic-ultra-realiste-ia",
        "date": "2026-04-01",
        "cat": "prompt",
        "title": "Comment écrire un prompt cinematic ultra réaliste pour l’IA",
        "excerpt": "Structure, lumière, focale, imperfections et verrouillage pour des images qui tiennent au cinéma.",
    },
    {
        "slug": "pourquoi-ton-prompt-ne-marche-pas-comment-corriger",
        "date": "2026-04-01",
        "cat": "prompt",
        "title": "Pourquoi ton prompt ne marche pas, et comment le corriger",
        "excerpt": "Diagnostiquer contradictions, mauvaise hiérarchie, et tests en trois passes pour retrouver le contrôle.",
    },
    {
        "slug": "erreurs-prompt-qui-rendent-image-ia-artificielle",
        "date": "2026-04-02",
        "cat": "prompt",
        "title": "Les erreurs de prompt qui rendent une image IA artificielle",
        "excerpt": "Liste des tics de langage et des réglages implicites qui poussent le modèle vers le plastique.",
    },
    {
        "slug": "comment-decrire-lumiere-directeur-photo-prompt",
        "date": "2026-04-02",
        "cat": "prompt",
        "title": "Comment décrire la lumière comme un directeur photo dans un prompt",
        "excerpt": "Key, fill, couleur, dureté, practicals, et comment éviter le « bel éclairage » sans géométrie.",
    },
    {
        "slug": "comment-utiliser-objectifs-camera-dans-prompt-ia",
        "date": "2026-04-02",
        "cat": "prompt",
        "title": "Comment utiliser les objectifs caméra dans un prompt IA",
        "excerpt": "Focales, anamorphique, profondeur de champ, et erreurs classiques de compression de visage.",
    },
    {
        "slug": "comment-creer-scenes-coherentes-plusieurs-plans-ia",
        "date": "2026-04-03",
        "cat": "prompt",
        "title": "Comment créer des scènes cohérentes avec plusieurs plans en IA",
        "excerpt": "Continuité lumière, personnage, décor, et découpe des prompts pour une séquence lisible.",
    },
    {
        "slug": "comment-ecrire-prompt-personnage-realiste-constant",
        "date": "2026-04-03",
        "cat": "prompt",
        "title": "Comment écrire un prompt pour un personnage réaliste et constant",
        "excerpt": "Fiche personnage, invariants, angles sûrs, et gestion des mains et du profil.",
    },
    {
        "slug": "comment-eviter-visages-deformes-generation-ia",
        "date": "2026-04-03",
        "cat": "prompt",
        "title": "Comment éviter les visages déformés en génération IA",
        "excerpt": "Cadrage, résolution, négatifs utiles, inpainting et itérations sans tout casser.",
    },
    {
        "slug": "comment-controler-style-visuel-generation-ia",
        "date": "2026-04-04",
        "cat": "prompt",
        "title": "Comment contrôler le style visuel dans une génération IA",
        "excerpt": "Références, LUT, mots qui mentent, et séparation style sujet pour ne pas tout mélanger.",
    },
    {
        "slug": "comment-creer-univers-visuel-coherent-avec-ia",
        "date": "2026-04-04",
        "cat": "prompt",
        "title": "Comment créer un univers visuel cohérent avec l’IA",
        "excerpt": "Bible lumière, palette, architecture, et règles de décision pour dix images ou plus.",
    },
    {
        "slug": "comment-generer-images-ia-photoréalistes-sans-effet-plastique",
        "date": "2026-04-04",
        "cat": "image",
        "title": "Comment générer des images IA photoréalistes sans effet plastique",
        "excerpt": "Guidance, lumière, sharp, grain et post pour une peau et des matières crédibles.",
    },
    {
        "slug": "flux-vs-sdxl-quelle-ia-choisir-images-realistes",
        "date": "2026-04-05",
        "cat": "image",
        "title": "Flux vs SDXL : quelle IA choisir pour des images réalistes",
        "excerpt": "Comparaison terrain, cas d’usage, VRAM, et comment décider en vingt minutes de tests.",
    },
    {
        "slug": "comment-ajouter-grain-cinema-image-ia",
        "date": "2026-04-05",
        "cat": "image",
        "title": "Comment ajouter du grain cinéma sur une image IA",
        "excerpt": "Types de grain, intensité par zone, combinaison prompt et post, et pièges sur écran consumer.",
    },
    {
        "slug": "comment-ameliorer-texture-peau-image-ia",
        "date": "2026-04-05",
        "cat": "image",
        "title": "Comment améliorer la texture de peau en image IA",
        "excerpt": "Lumière latérale, fréquences, retouche locale et export pour la vidéo ou l’impression.",
    },
    {
        "slug": "comment-creer-portrait-ia-digne-film",
        "date": "2026-04-06",
        "cat": "image",
        "title": "Comment créer un portrait IA digne d’un film",
        "excerpt": "Focale, catchlights, profondeur, imperfection et direction du regard pour un plan crédible.",
    },
    {
        "slug": "comment-generer-scene-realiste-profondeur-champ",
        "date": "2026-04-06",
        "cat": "image",
        "title": "Comment générer une scène réaliste avec profondeur de champ",
        "excerpt": "Séparation des plans, bokeh cohérent, distance sujet décor, et post pour adoucir les transitions.",
    },
    {
        "slug": "comment-creer-lumieres-naturelles-image-ia",
        "date": "2026-04-06",
        "cat": "image",
        "title": "Comment créer des lumières naturelles en image IA",
        "excerpt": "Fenêtre, heure, météo, bounce intérieur, et ce qui différencie jour gris de golden hour.",
    },
    {
        "slug": "comment-simuler-objectif-anamorphique-generation-ia",
        "date": "2026-04-07",
        "cat": "image",
        "title": "Comment simuler un objectif anamorphique en génération IA",
        "excerpt": "Bokeh, falloff, flare, distorsion légère, et quand ne pas utiliser le mot anamorphic.",
    },
    {
        "slug": "pourquoi-images-ia-manquent-contraste-comment-corriger",
        "date": "2026-04-07",
        "cat": "image",
        "title": "Pourquoi tes images IA manquent de contraste, et comment corriger",
        "excerpt": "Histogramme, courbes, saturation sélective, et rapport ombres lumières façon cinéma.",
    },
    {
        "slug": "comment-creer-ambiance-sombre-cinematique-avec-ia",
        "date": "2026-04-07",
        "cat": "image",
        "title": "Comment créer une ambiance sombre et cinématique avec l’IA",
        "excerpt": "Noir réel, practicals, visages dans l’ombre, grain et export sans boue ni HDR cheap.",
    },
]


def hook_from_title(title: str) -> str:
    return f"""Tu es ici pour : {title}. Bien. On va éviter deux pièges tout de suite.

Le premier piège, c’est croire qu’un seul réglage magique règle tout. Le second, c’est accumuler des tutos sans jamais finir un mini projet. **Choisis une durée courte**, huit à quinze secondes ou une image unique, et va jusqu’au bout avec une méthode.

Ce que je te propose ici, c’est une lecture de terrain. Pas une promesse. Tu vas comprendre pourquoi certaines images « passent » et d’autres déclenchent instantanément le réflexe « IA » chez le spectateur. Souvent ce n’est pas la résolution. C’est la lumière menteuse, la peau trop lisse, le bokeh incohérent, ou un mouvement qui défie la physique.

Trois mini scénarios. Un créateur veut du beau sans contrainte : il obtient du générique. Un autre veut du détail partout : il obtient du plastique. Un troisième veut du cinéma sans son : il obtient une vitrine.

Pour {title}, garde une règle simple. Une décision forte vaut trois compromis. Une source lumineuse claire vaut dix adjectifs. Un export avec une histoire de fichiers propre vaut une nuit de chaos.

On descend dans le concret. Note au stylo ce que tu faisais avant, applique une seule modification aujourd’hui, compare demain. Si tu ne vois pas la différence, ce n’est pas grave, tu auras au moins un critère de plus. L’œil s’entraîne comme un muscle, avec des répétitions honnêtes."""


SCENES: dict[str, tuple[str, str, str]] = {
    "comment-creer-une-video-cinematique-avec-l-ia-etape-par-etape": (
        "dim interior, single practical lamp, dust in the air, actor silhouette mid-frame, moody contrast, handheld micro-shake",
        "close-up of clapperboard out of focus foreground, blurred warm tungsten background, editorial framing",
        "wide shot urban night street, wet pavement reflections, distant neon bokeh, natural noise",
    ),
    "pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes": (
        "subway platform at night, sickly green fluorescent spill, tired commuter face half in shadow, 35mm spherical lens look, heavy grain",
        "overexposed smartphone ad aesthetic vs muted film contrast split screen metaphor, editorial still, subtle chromatic aberration",
        "close-up hands holding paper cup, shallow depth, steam, natural skin pores, soft tungsten rim",
    ),
    "workflow-complet-idee-film-ia-realiste": (
        "messy director desk, printed storyboard, pencil, coffee stain, warm desk lamp, quiet evening interior",
        "wide shot empty soundstage with single spotlight, dust, industrial texture, moody silhouette",
        "monitor glow on face in dark edit suite, reflection in glasses, cool bias, film grain",
    ),
    "comment-transformer-image-ia-video-fluide-credible": (
        "woman turning head slowly, window light, motion blur hint only on background, photoreal skin",
        "city street shallow focus, camera slight dolly in, wet asphalt, natural flares",
        "macro fabric texture with bokeh lights behind, gentle parallax feeling, cinematic color grade",
    ),
    "comment-obtenir-rendu-cinema-avec-seedance-2": (
        "dance rehearsal studio mirror, soft side light, chalk dust, realistic sweat sheen subtle",
        "night exterior with soft fog, streetlamp bloom controlled, anamorphic hint, no neon overload",
        "close eyes catching single catchlight, shallow dof, filmic roll-off on highlights",
    ),
    "creer-court-metrage-100-ia-sans-camera-acteurs": (
        "two silhouettes at kitchen table, single overhead practical, tension in posture, noir influence",
        "forest path morning mist, natural sunlight shafts, handheld micro texture, no fantasy",
        "final shot empty chair by window, rain trails on glass, quiet ending frame",
    ),
    "comment-ecrire-script-efficace-video-generee-par-ia": (
        "typewriter and stack of pages, warm tungsten, shallow dof, dust in air",
        "close-up pen marking beat on paper margin, texture macro, natural shadows",
        "writer staring out window rain, reflection layered, restrained grade",
    ),
    "comment-structurer-video-ia-comme-vrai-film": (
        "three monitors showing timeline sketches, dim suite, blue bias, practical lamp",
        "clapperboard sharp foreground, blurred set behind, ready to roll energy",
        "audience in dark room screen glow, subtle grain, realistic skin tones",
    ),
    "comment-ameliorer-realisme-mouvements-video-ia": (
        "athlete mid stride frozen almost, slight motion blur on limbs only, stadium lights soft",
        "car interior dashboard lights, night road bokeh, stable horizon line",
        "chef slicing vegetables, hands mid action, controlled shutter feel",
    ),
    "comment-creer-pub-video-avec-ia-comme-agence-pro": (
        "minimal product on concrete, single hard light, crisp shadow, no fake glow",
        "office team around table, natural window key, realistic wardrobe wrinkles",
        "packshot hero with subtle film grain, restrained palette, premium but human",
    ),
    "comment-ecrire-prompt-cinematic-ultra-realiste-ia": (
        "cinematographer holding light meter, set backstage, smoke haze soft, documentary texture",
        "lens case open, glass reflections, workshop clutter, photoreal metal",
        "sunset silhouette on rooftop, anamorphic flare subtle, natural haze",
    ),
    "pourquoi-ton-prompt-ne-marche-pas-comment-corriger": (
        "crumpled paper notes with crossed words, desk lamp, frustration still life",
        "split face lit wrong vs right key light tutorial metaphor, photoreal",
        "keyboard close-up, finger hovering enter, shallow dof, cool room light",
    ),
    "erreurs-prompt-qui-rendent-image-ia-artificielle": (
        "wax mannequin-like face in harsh flash, lesson frame, then natural light version",
        "oversharpened landscape halos around branches, visible artifacting",
        "plastic toy texture on jacket macro, wrong material lesson",
    ),
    "comment-decrire-lumiere-directeur-photo-prompt": (
        "large softbox edge visible in reflection, portrait subject, controlled falloff",
        "candlelit dinner table, warm skin, deep shadows, single source logic",
        "hard noon sun one alley wall bright other dark, crisp shadow line",
    ),
    "comment-utiliser-objectifs-camera-dans-prompt-ia": (
        "50mm portrait distance, compressed background city lights bokeh circles",
        "24mm wide interior architecture lines converging gently, natural distortion",
        "85mm detail eye close-up, creamy bokeh, minimal distortion on face",
    ),
    "comment-creer-scenes-coherentes-plusieurs-plans-ia": (
        "same apartment kitchen wide, matching props, morning cool light consistent",
        "same character waist-up different angle, continuity clothing and hair",
        "same street corner establishing then OTS conversation, matching weather",
    ),
    "comment-ecrire-prompt-personnage-realiste-constant": (
        "character sheet collage natural lighting, neutral background, three angles subtle",
        "same woman coat scarf at bus stop overcast, consistent wardrobe",
        "same man barber chair mirror reflection, consistent haircut stubble",
    ),
    "comment-eviter-visages-deformes-generation-ia": (
        "profile face half shadow, safe angle, ear and jaw defined, no smile teeth",
        "slight down angle eyes up, controlled catchlights, pores visible",
        "wide hat brim shadow over eyes, mystery framing, avoids teeth",
    ),
    "comment-controler-style-visuel-generation-ia": (
        "moodboard wall pins photographs color swatches, tungsten office",
        "LUT cube on monitor colorist desk, scopes blurred background",
        "painter palette beside cinema still print, hybrid metaphor",
    ),
    "comment-creer-univers-visuel-coherent-avec-ia": (
        "futuristic city but grounded textures rust concrete, no neon soup, cohesive palette",
        "repeated hexagon motif in architecture subtle, same weather fog",
        "same vehicle design three shots different streets, continuity paint wear",
    ),
    "comment-generer-images-ia-photoréalistes-sans-effet-plastique": (
        "middle-aged woman natural skin pores window light, no beauty filter",
        "denim jacket macro thread fade real wear, cool fill warm key",
        "outdoor portrait overcast softbox sky, realistic catchlight shape",
    ),
    "flux-vs-sdxl-quelle-ia-choisir-images-realistes": (
        "two workstations side by side monitors different software blur logos, neutral",
        "GPU card close-up heat pipes, workshop vibe, practical light",
        "split image same pose different render subtle variation, comparison feel",
    ),
    "comment-ajouter-grain-cinema-image-ia": (
        "35mm film scan texture overlay subtle on digital portrait, convincing blend",
        "dark shadows grain visible midtones clean, controlled",
        "projector beam dust grain in theater air, volumetric soft",
    ),
    "comment-ameliorer-texture-peau-image-ia": (
        "cheek macro pores and soft peach fuzz, side light, no wax",
        "older man wrinkles dignified, warm key, shadow in eye sockets natural",
        "backlit ear rim light fine hairs, realistic bloom control",
    ),
    "comment-creer-portrait-ia-digne-film": (
        "actor mid-dialogue eyes to camera off-axis, shallow dof, tungsten key",
        "black and white portrait high contrast but skin not plastic, grain",
        "environmental portrait workshop tools background contextual",
    ),
    "comment-generer-scene-realiste-profondeur-champ": (
        "foreground out of focus leaves, subject sharp mid, city far soft bokeh",
        "restaurant depth layers patrons blurred foreground glass reflections",
        "car rearview mirror sharp driver face road bokeh behind",
    ),
    "comment-creer-lumieres-naturelles-image-ia": (
        "north window soft portrait, white curtain diffusion, realistic falloff",
        "golden hour long shadow grass, warm rim cool fill subtle",
        "overcast beach flat light skin still dimensional, no hdr sky",
    ),
    "comment-simuler-objectif-anamorphique-generation-ia": (
        "oval bokeh street lights, slight horizontal flare, widescreen feel",
        "close portrait anamorphic falloff edges softer, center sharp",
        "car headlights streak flare controlled, wet road, cinematic",
    ),
    "pourquoi-images-ia-manquent-contraste-comment-corriger": (
        "flat log image vs graded version side by side on monitor, scopes",
        "mountain scene crushed blacks lifted intentionally filmic, not muddy",
        "face with clear shadow under nose from side key, contrast readable",
    ),
    "comment-creer-ambiance-sombre-cinematique-avec-ia": (
        "noir alley single street lamp pool of light, rain, realistic wet speculars",
        "interior candle and darkness most of frame, face partially lit",
        "subway tunnel vanishing point, sparse lights, grain heavy",
    ),
}


def links_for_index(i: int) -> list[tuple[str, str]]:
    slugs = [a["slug"] for a in ARTICLES]
    titles = {a["slug"]: a["title"] for a in ARTICLES}
    n = len(slugs)
    picks = [i - 1, i + 1, i + 4, i + 9]
    out: list[tuple[str, str]] = []
    for p in picks:
        j = p % n
        if j == i:
            continue
        s = slugs[j]
        out.append((titles[s], s))
        if len(out) >= 4:
            break
    return out[:4]


def std_spec(meta: dict, index: int) -> dict:
    slug = meta["slug"]
    cat = meta["cat"]
    wf = {"video": WORKFLOW_VIDEO, "prompt": WORKFLOW_PROMPT, "image": WORKFLOW_IMAGE}[
        cat
    ]
    tbl = {"video": TABLE_VIDEO, "prompt": TABLE_PROMPT, "image": TABLE_IMAGE}[cat]
    sh, sw1, sw2 = SCENES[slug]
    qi = int(hashlib.md5(slug.encode("utf-8")).hexdigest(), 16) % len(PRO_QUOTES)
    yt = YT_ROT[index % len(YT_ROT)]
    labels = [
        "rythme et composition",
        "lumière et atmosphère",
        "mouvement caméra crédible",
        "couleur et contraste",
        "préparation de tournage",
    ]
    return {
        "slug": slug,
        "date": meta["date"],
        "title": meta["title"],
        "excerpt": meta["excerpt"],
        "hook": hook_from_title(meta["title"]),
        "workflow": wf,
        "alt1": "Repère de workflow, lumière et texture pour caler ton œil.",
        "alt2": "Second repère, profondeur et grain, avant passage vidéo ou post.",
        "table_md": tbl,
        "pro_quote": PRO_QUOTES[qi],
        "yt": yt,
        "yt_label": labels[index % len(labels)],
        "scene_hero": sh,
        "scene_w1": sw1,
        "scene_w2": sw2,
        "faq": faq_pairs(slug, meta["title"], cat),
        "links": links_for_index(index),
    }
