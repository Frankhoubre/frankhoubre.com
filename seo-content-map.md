# Carte SEO du contenu (piliers, satellites, anti-cannibalisation)

Complément de `seo-cross-domain-strategy.md` (frontières entre sites) et de
`seo-90-day-plan.md` (calendrier). Ce fichier dit qui est la page de référence
pour chaque sujet SUR frankhoubre.com. Mise à jour : 2026-07-09.

## 1. Pages piliers (les références à renforcer en priorité)

| Sujet | Page pilier | Donnée GSC qui le justifie | Rôle |
| --- | --- | --- | --- |
| Frank Houbre (entité) | `/` + `/a-propos` | 182 + 63 clics marque, pos 3.3 ; « qui est frank houbre » 327 imp pos 5 | Conversion opportunités |
| Preuve presse/festivals | `/presse` | 0 clic aujourd'hui : page de preuve, pas de ranking | Conversion médias |
| Consulting IA | `/prestation` | 26 imp, pos 8-14.5, aucun lien interne avant le 2026-07-09 | Conversion missions |
| Topaz Video AI | `/blog/topaz-video-ai-test-avis-restauration-video` | ~3 400 imp cumulées, 40+ requêtes pos 9-19 | Trafic + preuve d'expertise |
| Dzine | `/blog/dzine-ia` | ~6 300 imp legacy+blog, pos 5-7 | Trafic |
| Midjourney | `/blog/midjourney-guide-complet` | 618 imp FR+EN, pos 7-31 | Trafic |
| WAN (Alibaba) | à créer : `wan-alibaba-guide-complet` (J1 du plan) | legacy `/wan-2-1-alibaba/` 2 717 imp pos 9.5 + requêtes wan 2.1/2.5 | Trafic |
| Métiers audiovisuel et IA | `/blog/metiers-audiovisuel-ia-menaces-transformation-avis` | 14 clics, CTR 10.9 %, pos 6.3 : meilleure page hors marque | Autorité + presse |
| HeyGen / doublage | `/blog/heygen-elevenlabs-comparatif` | requêtes doublage HeyGen pos 5.8-9.6 | Trafic |
| Génération image gratuite | `/blog/meilleur-generateur-image-ia-gratuit` | requêtes « ia gratuite » (faibles positions, longue traîne) | Trafic |
| Outils gratuits | `/outils` + 6 outils | `/outils/generateur-prompt-cinema` CTR 16 %, `/outils/reverse-prompting` CTR 12.5 % | Backlinks + preuve |

## 2. Règle pilier/satellite

- Un sujet = une page pilier, listée ci-dessus. Les satellites traitent UNE
  sous-intention (prix, alternative, tutoriel précis, cas d'usage) et lient le
  pilier avec une ancre descriptive.
- Le pilier lie ses satellites dans une section ressources.
- Avant de créer un article : `ls content/blog/` et vérifier cette carte. Si
  l'intention est déjà couverte à 70 %+, enrichir l'existant (nouvelle
  section + dateModified) au lieu de créer.
- Les articles d'actualité (category actualite) pointent vers le pilier
  evergreen du sujet dès qu'il existe.

## 3. Mots-clés réservés par site (résumé opérationnel)

- **frankhoubre.com** : frank houbre*, réalisateur IA, filmmaker IA, cinéma
  IA, film IA, avis/test [outil créatif], workflow vidéo IA, prompt cinéma,
  consulting IA production, métiers audiovisuel IA, coulisses
  Ronces/VOIDBORN/Lost Garden/ScreenWeaver.
- **AI Studios** : formation IA vidéo, apprendre vidéo IA, cours IA.
- **ScreenWeaver** : AI storyboard generator, script to storyboard, AI
  filmmaking software.
- **businessdynamite.xyz** : business en ligne, gagner de l'argent avec
  l'IA, marketing IA, dropshipping, assistant virtuel IA.

## 4. Mots-clés à NE PAS travailler sur frankhoubre.com

- « prompt chatgpt » et toute sa famille (~5 000 imp mais positions 44-98) :
  requête générique dominée par de gros sites, hors positionnement cinéma.
  L'article `/blog/prompt-chatgpt` existe pour l'héritage WordPress : le
  recentrer un jour sur « écrire des prompts comme un brief de tournage »
  (voir J83 du plan), ne jamais chercher à ranker sur « prompt chatgpt » sec.
- « intelligence artificielle gratuite », « top 10 ia gratuit » : intention
  liste généraliste, positions 66-100, aucune valeur d'autorité.
- « formation ia », « formation vidéo ia » : réservés AI Studios.
- « ia et assistante virtuelle », « dropshipping ia », « email marketing
  ia » : réservés businessdynamite.xyz (héritage WP déjà redirigé).
- Requêtes japonaises e-commerce et patterns spam (`shopdetail`) : déchets de
  l'ancien hack, gérés par les handlers 410, ne rien créer.

## 5. Doublons et fusions

Fusions déjà faites (301 en place) : generateur-image-ia-sans-inscription →
meilleur-generateur-image-ia-gratuit ; ancien contenu business WP → /blog.

À surveiller (paires proches, ne pas créer de troisième article) :
- `comment-creer-storyboard-ia-etape-par-etape` /
  `generer-storyboard-professionnel-complet-ia` /
  `storyboarding-ia-vision-cinematographique` : trois angles storyboard.
  N'en créer AUCUN autre ; différencier les titles si GSC montre de la
  cannibalisation (impressions partagées sur les mêmes requêtes).
- `combien-facturer-video-ia-professionnelle-grille-prix` (facturer au
  client) vs J15 `combien-coute-court-metrage-ia-2026` (coût de production) :
  intentions distinctes, garder les deux mais lier l'un vers l'autre.
- `workflow-kling-3-animation-fluide-realiste` : tout nouveau contenu Kling
  doit être un comparatif ou une actu, pas un deuxième workflow.
- `monetiser-competences-creation-ia-freelance-agence` est le pilier
  monétisation créateur : les articles du cluster G du plan sont ses
  satellites et doivent le lier.

## 6. Ce que chaque article du plan doit respecter

1. Une seule intention primaire, notée dans le plan.
2. 3 à 6 liens internes contextuels dont au moins un vers le pilier du
   cluster (règle du SEO-GUIDELINES.md §6).
3. Un lien entrant ajouté depuis une page existante du cluster le jour de la
   publication.
4. Si le sujet frôle un site réservé : appliquer la parade indiquée colonne
   « anti-cannibalisation » du plan (angle personnel + lien sortant vers le
   site propriétaire du mot-clé).
