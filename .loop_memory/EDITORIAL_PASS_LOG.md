# Journal de la passe éditoriale (charte GUIDE_EDITORIAL.md)

Première passe « correctifs charte ciblés » lancée le 2026-06-17, suite à
l'instruction de Frank fixant les règles éditoriales permanentes.

Méthode : audit automatisé (`node .loop_scripts/editorial_audit.mjs`) puis
correction des violations mesurées. Triage complet dans `EDITORIAL_TRIAGE.md`.

## État du corpus à l'audit initial (222 articles FR)

- Faibles : 0, Moyens : 19, Bons : 203.
- Violations concrètes : 7 tirets longs, 16 sans lien externe, 2 formulations
  IA, 2 sans FAQ. 0 trop court, 0 sans lien interne.

## État après la passe

- Faibles : 0, Moyens : 1, Bons : 221.
- Tirets longs : 0. FAQ manquantes : 0. Liens externes manquants : 0.
- Le seul « moyen » restant est `comment-structurer-video-ia-comme-vrai-film`,
  qui contient « il convient de noter que » volontairement, comme contre-exemple
  de mauvaise écriture. À conserver tel quel.

## Détail des modifications

### Tirets longs supprimés (règle dure) — 17 occurrences, 7 articles
`dzine-ia`, `comment-ajouter-grain-cinema-image-ia`,
`comment-ameliorer-realisme-mouvements-video-ia`,
`comment-ameliorer-texture-peau-image-ia`,
`comment-controler-style-visuel-generation-ia`,
`comment-creer-pub-video-avec-ia-comme-agence-pro`, `prompt-chatgpt`.
Remplacement des `–`/`—` par des traits d'union (plages numériques et termes
composés). Aucun changement de sens.

### Formulation IA / hype
- `metiers-audiovisuel-ia-menaces-transformation-avis` : titre de FAQ
  « devient incontournable » → « devient essentielle ».

### FAQ ajoutées (5 questions chacune, voix Frank, réponses sourcées)
- `comment-mixer-audio-image-rendu-cinema-video-ia` : loudness (EBU R128,
  YouTube), mix vs étalonnage, voix synthétique, stems, écoute. Ajoute aussi le
  lien externe manquant (EBU R128) + lien interne mastering.
- `comment-transformer-video-ia-publicite-premium` : compression plateforme,
  grain, master livrable, mentions légales IA, délai de production.

### Liens externes ajoutés (sources vérifiées, en contexte) — 15 articles
- `elevenlabs-fin-voix-v1-migration-2026` → changelog ElevenLabs.
- `flux-2-open-weights-images-ia-local-2026` → blog Black Forest Labs FLUX.2.
- `comment-mixer-audio-image-rendu-cinema-video-ia` → EBU R128.
- `comment-structurer-video-ia-comme-vrai-film` → Structure en trois actes (Wikipédia).
- `exterieur-foret-brume-profondeur-video-ia` → Perspective aérienne.
- `comment-simuler-objectif-anamorphique-generation-ia` → Format large anamorphosé.
- `sous-marine-caustiques-video-ia-limites` → Caustique.
- `comment-generer-scene-realiste-profondeur-champ` → Profondeur de champ.
- `interieur-bureau-lumiere-cyan-correction-ia` → Température de couleur.
- `nuit-neon-peau-credible-sans-magenta` → Balance des blancs.
- `comment-ameliorer-fluidite-video-generee` → Fréquence d'images.
- `comment-ajouter-realisme-post-production-video-ia` → Espace de couleur.
- `comment-ameliorer-rendu-moyen-rendu-pro-video-ia` → Compression vidéo.
- `animaux-domestiques-plan-action-ia` → Flou cinétique.
- `corriger-scintillement-flicker-video-ia` → DaVinci Resolve (Deflicker).
- `comment-organiser-assets-ia-comme-un-pro` → Gestion des actifs numériques.

## Passe 2 (mode maximum, 2026-06-17)

### Anti-cannibalisation
Analyse de tout le corpus (clustering TF-IDF + 6 agents de vérification sur les
clusters à risque). 15 liens internes hiérarchiques ajoutés (pilier -> variante).
Détail et décisions laissées à Frank (fusions potentielles) : `CANNIBALIZATION_MAP.md`.

### Maillage vers les pages piliers / argent
Constat : 1 seul article sur 222 liait vers une page `/outils/*` ou `/prestation`.
15 liens contextuels ajoutés vers : générateur de prompt cinéma, générateur de
storyboard PDF, calculateur de budget, reverse prompting, annuaire images gratuits,
annuaire audio, page prestation. Couverture passée de 1 à 16 articles. Chaque
pilier a maintenant 1 à 4 liens entrants (avant : 0).

### Scan voix
Recherche corpus des tics anglais/IA ("let's be real", "here's the thing",
"game changer", etc.). Corpus propre. Seule occurrence : "game changer" entre
guillemets comme exemple ironique (volontaire, conservé). Un "Let's be real"
résiduel corrigé en "Soyons clairs" dans generer-storyboard-professionnel-complet-ia.

### Points signalés (hors périmètre)
- `generer-storyboard-professionnel-complet-ia` utilise une image externe Unsplash
  (`images.unsplash.com`) alors que le STYLE_GUIDE impose des images locales
  `/images/blog/...`. À remplacer par un asset local.

## Reste à faire (passes futures, hors périmètre de cette passe ciblée)
- Relecture humaine ton + valeur sur l'ensemble (le score mécanique ne juge pas
  le « sonne humain »). Prioriser par trafic GSC/impressions.
- Vérifier l'anti-cannibalisation sur les clusters denses (178 `tutoriels`).
- Propager les corrections de tirets côté EN (`content/blog-en`) via le loop de
  traduction.
