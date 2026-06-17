# Carte anti-cannibalisation FR (analyse 2026-06-17)

Analyse de tout le corpus FR (222 articles) : clustering TF-IDF des titres/excerpts
puis vérification de l'intention réelle par lecture des articles (6 agents sur les
clusters à risque). Méthode non destructive retenue : différenciation + maillage
hiérarchique. Aucune fusion ni suppression effectuée (charte : préserver les URLs
indexées, ne rien supprimer sans raison solide).

## Liens internes hiérarchiques ajoutés (15)

| Source | Cible | Rôle |
| --- | --- | --- |
| alternatives-midjourney | ideogram-recraft-leonardo-comparatif | liste -> comparatif spécialisé |
| meilleur-generateur-image-ia | alternatives-midjourney | pilier -> variante "sortir de Midjourney" |
| chatgpt-image-dalle-guide | meilleur-generateur-image-ia | guide outil -> comparatif pilier |
| meilleurs-outils-ia-video | pika-labs-vs-runway-choisir-moteur-plan-action | liste -> duel spécifique |
| workflow-kling-3-animation-fluide-realiste | pipeline-complet-image-vers-video-ia | variante outil -> pilier pipeline |
| workflow-ia-creatif | pipeline-complet-image-vers-video-ia | pilier macro -> pilier étage image/vidéo |
| pipeline-complet-image-vers-video-ia | verifier-qualite-mobile-desktop-video-ia | pipeline -> étape QA finale |
| hailuo-minimax-workflow-court-metrage-realiste | workflow-complet-idee-film-ia-realiste | variante outil -> pilier générique |
| workflow-complet-idee-film-ia-realiste | hailuo-minimax-workflow-court-metrage-realiste | pilier -> variante outil |
| comment-obtenir-rendu-cinema-avec-seedance-2 | workflow-complet-seedance-2-rendu-cinema | réglages -> workflow complet |
| creer-publicite-video-percutante-intelligence-artificielle | comment-transformer-video-ia-publicite-premium | stratégie -> finition premium |
| guide-complet-montage-video-assiste-intelligence-artificielle | comment-monter-video-ia-capcut-comme-un-pro | guide général -> variante CapCut |
| personnages-coherents-plusieurs-images-ia | workflow-nano-banana-personnages-coherents | pilier -> variante outil |
| comment-creer-scenes-coherentes-plusieurs-plans-ia | diriger-regards-micro-expressions-personnages-ia | scène -> direction d'acteur |
| comment-creer-scenes-coherentes-plusieurs-plans-ia | comment-gerer-continuite-costume-scenes-ia | scène -> spécialité costume |

Déjà présents (vérifiés, non dupliqués) : workflow-complet-seedance-2 -> obtenir-rendu-cinema-seedance-2 ; personnages-coherents -> dzine-ia ; diriger-regards -> personnages-coherents ; ideogram-comparatif -> meilleur-generateur ; meilleur-generateur -> ideogram-comparatif et -> chatgpt-image-dalle-guide.

## Décisions laissées à Frank (potentiellement destructives)

Deux paires sont des quasi-doublons d'intention. Les agents recommandent une
fusion + redirection 301, ce qui touche des URLs. À trancher par Frank :

1. **meilleur-generateur-image-ia-gratuit** vs **generateur-image-ia-sans-inscription**
   Recouvrement ~90 % (mêmes sections, même FAQ). Options : fusionner en un seul
   article "gratuit et sans inscription" + 301, ou différencier nettement
   (coût/valeur vs confidentialité/friction). Pour l'instant : laissés tels quels.

2. **personnages-coherents-plusieurs-images-ia** (pilier) vs
   **workflow-nano-banana-personnages-coherents** (variante outil)
   Méthode quasi identique. Lien hiérarchique ajouté. Si l'écart reste faible,
   envisager d'absorber Nano Banana comme section du pilier, ou recentrer son
   mot-clé sur "Nano Banana workflow".

3. **Différenciation de titres/excerpts** (Seedance 1/2, pub percutante/premium,
   CapCut/guide montage) : suggérée par les agents mais non appliquée pour ne pas
   risquer des URLs/titres déjà en place. À faire seulement si les pages se
   gênent réellement dans la GSC une fois indexées.

## Note technique
Le préfixe `nf:` devant une URL externe (ex : `](nf:https://...)`) est une
convention VOULUE, gérée par `src/components/createBlogMdxComponents.tsx` (ajoute
`rel="nofollow"`). Ce ne sont pas des liens cassés.
