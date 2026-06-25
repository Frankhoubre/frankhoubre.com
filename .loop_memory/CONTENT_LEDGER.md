# CONTENT_LEDGER.md — Every article the loop publishes

The baseline index of pre-existing articles is in `CONTENT_INDEX.md`
(auto-generated). THIS file is the rich, append-only ledger of articles the
growth loop itself creates. Add one block per published article, newest on top.

## Baseline at loop start (2026-06-17)

- FR: 219 articles in `content/blog/` (categories: tutoriels 177, business 14,
  comparatifs 12, actualite 6, analyses 6, guides 2, notes 1, postproduction 1).
- EN: 47 articles in `content/blog-en/`, mirroring FR slugs, produced by a
  separate translation loop that is actively running.
- 40 FR articles are future-dated (date-gated publish) through 2026-07-26.
- News (`actualite`) is the thinnest and stalest cluster: 6 articles, last
  dated 2026-06-17. This is the loop's main content gap.

The loop did NOT publish content on its first (setup) run. First published
article block goes below this line.

---

## Template (copy for each new article)

```
### YYYY-MM-DD — <Title>
- slug: <slug>
- locale: fr | en
- url: https://frankhoubre.com/blog/<slug>  (or /en/blog/<slug>)
- category: actualite | tutoriels | guides | comparatifs | analyses | business | postproduction | notes
- type: news | evergreen
- search_intent: <informational | commercial | comparison | how-to | ...>
- primary_keyword: <kw>
- secondary_keywords: <kw, kw, kw>
- sources: <url1>, <url2>   (news only; 2+ required)
- internal_links: <slug -> slug, slug -> slug>  (2+ required)
- cta: <ScreenWeaver bridge | tool link | none>
- cannibalization_notes: <checked against X, Y; distinct because ...>
- checker: pass (cycles: N)
- published_commit: <sha>
```

<!-- New article blocks below, newest first -->

### 2026-06-25 — Livrer les fichiers sources d'un projet vidéo IA : guide pratique
- slug: livrer-fichiers-sources-projet-video-ia-client
- locale: fr
- url: https://frankhoubre.com/blog/livrer-fichiers-sources-projet-video-ia-client
- category: business
- type: evergreen
- search_intent: how-to / practical business
- primary_keyword: livrer fichiers sources projet vidéo IA client
- secondary_keywords: sources vidéo IA client, prompts seeds livraison IA, fichiers montage IA client, propriété intellectuelle projet vidéo IA
- sources: n/a (craft/evergreen, method-based)
- internal_links: -> /blog/clause-contrat-client-contenu-genere-ia, -> /outils/calculateur-budget-production-ia
- cta: calculateur budget production IA (soft)
- cannibalization_notes: clause-contrat-client-contenu-genere-ia covers contract clauses; gerer-versions-projets-video-ia covers versioning. This is specifically about the delivery package content and what to include. Distinct intent (livraison vs versioning vs contrat).
- checker: pass (audit 0 err, build 446 pages)
- published_commit: cb0a08b

### 2026-06-25 — Anthropic IPO confidentielle : 965 milliards de valorisation, ce que ça change
- slug: anthropic-ipo-confidential-965-milliards-valorisation-2026
- locale: fr
- url: https://frankhoubre.com/blog/anthropic-ipo-confidential-965-milliards-valorisation-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Anthropic IPO valorisation 965 milliards 2026
- secondary_keywords: Anthropic S-1 confidentiel SEC, Anthropic Claude Code croissance, Anthropic vs OpenAI valorisation, Google chercheurs Anthropic départs
- sources: anthropic.com/news/confidential-draft-s1-sec, cnbc.com/2026/06/01/anthropic-ipo-s1-prospectus, techcrunch.com/2026/06/01/anthropic-files-to-go-public/, fortune.com/2026/06/01/anthropic-confidentially-files-ipo-965-billion-valuation/, bloomberg.com/news/articles/2026-06-24/google-poised-to-lose-two-more-high-profile-ai-staffers-to-anthropic
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/higgsfield-creative-os-claude-adobe-juin-2026
- cta: none
- cannibalization_notes: no existing Anthropic IPO article. Distinct from all other actualite articles (different company, different event). Checked CONTENT_INDEX.
- checker: pass (audit 0 err, build 446 pages)
- published_commit: cb0a08b

### 2026-06-25 — Sora ferme en septembre 2026 : alternatives et migration
- slug: sora-api-arret-septembre-2026-alternatives-createurs
- locale: fr
- url: https://frankhoubre.com/blog/sora-api-arret-septembre-2026-alternatives-createurs
- category: actualite
- type: news
- search_intent: news / urgent migration guide
- primary_keyword: Sora API arrêt septembre 2026 alternatives
- secondary_keywords: Sora discontinué créateurs, alternatives Sora vidéo IA, migrer de Sora Kling Runway, Sora API fermeture septembre 24 2026
- sources: help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation, techcrunch.com/2026/03/29/why-openai-really-shut-down-sora/, atlascloud.ai/blog/guides/sora-is-dead-best-sora-alternatives-after-the-openai-sora-shutdown-in-2026
- internal_links: -> /blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: no existing Sora shutdown article. Distinct from all Runway/Kling how-to articles. meilleur-outil-ia-video-publicite-produit-comparatif covers tool selection not shutdown/migration. Distinct intent.
- checker: pass (audit 0 err, build 446 pages)
- published_commit: cb0a08b

### 2026-06-23 — Quel outil IA vidéo choisir pour une publicité produit ? Comparatif par cas d'usage
- slug: meilleur-outil-ia-video-publicite-produit-comparatif
- locale: fr
- url: https://frankhoubre.com/blog/meilleur-outil-ia-video-publicite-produit-comparatif
- category: comparatifs
- type: evergreen
- search_intent: comparison / commercial
- primary_keyword: meilleur outil IA vidéo publicité produit
- secondary_keywords: Runway vs Kling publicité, IA vidéo pub produit, vidéo IA cohérence produit, comparatif outils vidéo IA 2026
- sources: n/a (craft/evergreen, method + verified tool specs)
- internal_links: -> /blog/clause-contrat-client-contenu-genere-ia, -> /outils/calculateur-budget-production-ia, -> /blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film
- cta: calculateur budget production IA (soft)
- cannibalization_notes: meilleurs-outils-ia-video is generic top-list; pika-labs-vs-runway-choisir-moteur-plan-action is Pika vs Runway only; comment-creer-pub-video-avec-ia-comme-agence-pro covers workflow, not tool selection. This is job-to-be-done comparison for product ads specifically. Distinct.
- checker: pass (audit 0 err, build 427 pages)
- published_commit: 63f3ce5

### 2026-06-23 — MiniMax lance Hub : une plateforme vidéo IA tout-en-un présentée au Festival de Shanghai
- slug: minimax-hub-plateforme-video-ia-shanghai-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/minimax-hub-plateforme-video-ia-shanghai-juin-2026
- category: actualite
- type: news
- search_intent: news / platform analysis
- primary_keyword: MiniMax Hub plateforme vidéo IA Shanghai 2026
- secondary_keywords: MiniMax Hub tout-en-un, Hailuo MiniMax nouvelles fonctions, agent IA production vidéo, plateforme unifiée vidéo IA
- sources: variety.com/2026/film/festivals/minimax-hub-ai-video-generator-shanghai-film-festival-1236781901/
- internal_links: -> /blog/hailuo-minimax-workflow-court-metrage-realiste, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: hailuo-minimax-workflow-court-metrage-realiste covers workflow tutorial; this is a news/analysis on the Hub platform launch at Shanghai festival. Different intent (news vs how-to).
- checker: pass (audit 0 err, build 427 pages)
- published_commit: 63f3ce5

### 2026-06-23 — Lionsgate prend une part dans Runway AI pour créer des séries courtes à partir de ses franchises
- slug: lionsgate-runway-ai-series-courtes-ip-hollywood-2026
- locale: fr
- url: https://frankhoubre.com/blog/lionsgate-runway-ai-series-courtes-ip-hollywood-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Lionsgate Runway AI séries courtes franchises Hollywood 2026
- secondary_keywords: Runway AI Lionsgate partenariat, John Wick IA séries, studio hollywoodien IA vidéo, Runway Gen-4.5 production
- sources: variety.com/2026/film/news/lionsgate-equity-stake-runway-ai-franchises-for-ai-show-1236775590/, thewrap.com/creative-content/movies/lionsgate-runway-ai-short-films-franchises-ip/
- internal_links: -> /blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: tutoriel-runway-gen-3-animer-image-fixe-plan-film covers Runway workflow how-to; pika-labs-vs-runway is tool comparison. This is a news/analysis on the Lionsgate equity stake and IP-to-series program. Different intent.
- checker: pass (audit 0 err, build 427 pages)
- published_commit: 63f3ce5

### 2026-06-22 — Erreurs anatomiques en vidéo IA : pourquoi les corps, mains et gestes se déforment
- slug: corriger-erreurs-anatomiques-video-ia-corps-mains
- locale: fr
- url: https://frankhoubre.com/blog/corriger-erreurs-anatomiques-video-ia-corps-mains
- category: tutoriels
- type: evergreen
- search_intent: how-to / troubleshooting
- primary_keyword: erreurs anatomiques vidéo IA corps mains
- secondary_keywords: mains cassées vidéo IA, déformation corps IA video, corriger artefacts anatomiques IA, mains déformées génération vidéo
- sources: n/a (craft/evergreen, method-based)
- internal_links: -> /blog/inpainting-local-retoucher-yeux-mains-ia, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: inpainting-local-retoucher-yeux-mains-ia covers static image inpainting; this covers motion/video temporal deformation. comment-eviter-visages-deformes covers faces in images. This is video-specific and body/hands focused. Distinct intent.
- checker: pass (audit 0 err, build 419 pages)
- published_commit: fa99c89

### 2026-06-22 — Google Flow et Veo 3.1 : l'audio arrive sur toutes les fonctions
- slug: google-flow-veo-31-edition-audio-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/google-flow-veo-31-edition-audio-juin-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Google Flow Veo 3.1 audio édition 2026
- secondary_keywords: Veo 3.1 audio Ingredients to Video, Google Flow nouvelles fonctions, Frames to Video audio natif, Gemini Omni Flash Flow
- sources: blog.google/innovation-and-ai/products/veo-updates-flow/, venturebeat.com Veo 3.1 Flow update
- internal_links: -> /outils/generateur-prompt-cinema, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: google-veo-3-brief-realisateur-plan-sequence covers Veo 3 workflow/brief. This is a news article on the specific Veo 3.1/Flow update with audio on all features. Different intent (news vs how-to).
- checker: pass (audit 0 err, build 419 pages)
- published_commit: fa99c89

### 2026-06-22 — Seedance 2.0 Mini : ByteDance lance un modèle vidéo 2x plus rapide et moitié moins cher
- slug: seedance-2-mini-bytedance-video-rapide-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/seedance-2-mini-bytedance-video-rapide-juin-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Seedance 2.0 Mini ByteDance vidéo rapide juin 2026
- secondary_keywords: Dreamina Seedance Mini, CapCut vidéo IA rapide, Seedance 2.0 Mini vs Fast, Seedance Mini prix
- sources: manilatimes.net/2026/06/20/tmt-newswire/plentisoft/dreamina-seedance-20-mini..., aijourn.com dreamina-launches-seedance-2-0-4k-and-seedance-2-0-mini, atlascloud.ai seedance-2.0-mini-overview
- internal_links: -> /outils/annuaire-generateurs-images-ia-gratuits, -> /blog/grok-imagine-video-1-5-xai-generation-video-ia
- cta: none
- cannibalization_notes: wan-27-video-decevant-kling-seedance covers Seedance 2.0 in comparison. workflow-complet-seedance-2-rendu-cinema covers workflow. comment-obtenir-rendu-cinema-avec-seedance-2 covers quality settings. This is a dated news/analysis on the specific Mini variant launch. Distinct.
- checker: pass (audit 0 err, build 419 pages)
- published_commit: fa99c89

### 2026-06-21 — Pipeline IA de A à Z : de l'idée au plan de tournage en une journée
- slug: pipeline-ia-script-storyboard-production-de-a-z
- locale: fr
- url: https://frankhoubre.com/blog/pipeline-ia-script-storyboard-production-de-a-z
- category: tutoriels
- type: evergreen
- search_intent: how-to / end-to-end workflow
- primary_keyword: pipeline IA script storyboard production
- secondary_keywords: workflow IA production vidéo, prompt cinématique storyboard, pipeline IA créateur, de l'idée au tournage IA
- sources: n/a (craft/evergreen, method-based)
- internal_links: -> /outils/generateur-prompt-cinema, -> /outils/generateur-storyboard-pdf, -> /outils/calculateur-budget-production-ia
- cta: ScreenWeaver natural bridge (workspace between writing and production)
- cannibalization_notes: no existing end-to-end pipeline article tying all pillars together. Fills the "script to screen" gap identified in KEYWORD_MAP. Distinct from individual tool how-tos.
- checker: pass (audit 0 err, build 417 pages)
- published_commit: 0af03f0

### 2026-06-21 — Google coupe Imagen et les modèles image Gemini preview : migration avant le 24 juin
- slug: google-imagen-gemini-image-preview-depreciation-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/google-imagen-gemini-image-preview-depreciation-juin-2026
- category: actualite
- type: news
- search_intent: news / urgent migration guide
- primary_keyword: Google Imagen Gemini image preview déprécié migration 2026
- secondary_keywords: imagen-3.0 deprecated, gemini-3-pro-image-preview shutdown, Gemini API vidéo juin 2026, migrer Imagen Gemini
- sources: ai.google.dev/gemini-api/docs/changelog, ai.google.dev/gemini-api/docs/deprecations, tokenmix.ai/blog/imagen-3-0-generate-002-deprecated-migration-guide-2026
- internal_links: -> /outils/generateur-prompt-cinema, -> /outils/generateur-storyboard-pdf
- cta: none
- cannibalization_notes: no existing article on Gemini API deprecations. Distinct from Grok, Higgsfield, ElevenLabs deprecation articles.
- checker: pass (1 err: multiple H1 from code comments -> fixed to ##, then 0 errors)
- published_commit: 0af03f0

### 2026-06-21 — Midjourney lance un scanner médical ultrasonique : pivot hardware ou feu d'artifice ?
- slug: midjourney-medical-scanner-pivot-hardware-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/midjourney-medical-scanner-pivot-hardware-juin-2026
- category: actualite
- type: news
- search_intent: news / platform analysis
- primary_keyword: Midjourney Medical scanner pivot hardware 2026
- secondary_keywords: Midjourney scanner ultrasonique, Midjourney Medical V8.1, pivot hardware Midjourney créateurs, Midjourney Medical San Francisco
- sources: bloomberg.com/news/articles/2026-06-18/ai-startup-midjourney-pivots-to-health-with-ultrasound-machine, midjourney.com/medical/blogpost, updates.midjourney.com/v8-1-is-now-the-default-model/, engadget.com Midjourney ultrasonic scanner
- internal_links: -> /outils/generateur-storyboard-pdf, -> /outils/annuaire-generateurs-images-ia-gratuits
- cta: none
- cannibalization_notes: no existing Midjourney hardware/medical article. Distinct from midjourney-vs-dalle-3 (comparatif) and other tool news articles.
- checker: pass (audit 0 err, build 417 pages)
- published_commit: 0af03f0

### 2026-06-20 — Gérer les versions de ses projets vidéo IA : méthode concrète
- slug: gerer-versions-projets-video-ia
- locale: fr
- url: https://frankhoubre.com/blog/gerer-versions-projets-video-ia
- category: tutoriels
- type: evergreen
- search_intent: how-to / practical method
- primary_keyword: gérer versions projets vidéo IA
- secondary_keywords: versioning projet IA, organisation fichiers prompts, seed vidéo IA, gestion itérations client IA
- sources: n/a (craft/evergreen, method-based)
- internal_links: -> /outils/calculateur-budget-production-ia, -> /blog/clauses-contrat-client-ia-video-production
- cta: soft (budget calculator)
- cannibalization_notes: no existing article on versioning / project management for AI video. Distinct from business/pricing articles. Fills gap identified in KEYWORD_MAP.
- checker: pass (audit 0 err, build prerendered)
- published_commit: 58f7c54

### 2026-06-20 — Higgsfield devient un Creative OS : Claude, Adobe et Figma dans le même pipeline
- slug: higgsfield-creative-os-claude-adobe-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/higgsfield-creative-os-claude-adobe-juin-2026
- category: actualite
- type: news
- search_intent: news / platform analysis
- primary_keyword: Higgsfield Creative OS Claude Adobe 2026
- secondary_keywords: Higgsfield Claude MCP, Higgsfield Adobe Premiere plugin, Seedance 2.0 Higgsfield, pipeline vidéo IA unifié
- sources: youmind.com/landing/x-viral-articles/higgsfield-ai-video-creative-os (June 6, 2026)
- internal_links: -> /blog/2026-06-19-kling-3-turbo-previsualisation-video-ia, -> /outils/generateur-prompt-cinema
- cta: none
- cannibalization_notes: no existing Higgsfield-specific article. Distinct from runway/pika comparatifs and general tool comparators.
- checker: pass (audit 0 err)
- published_commit: 58f7c54

### 2026-06-20 — Grok Imagine Video 1.5 : xAI passe en tête du classement vidéo IA
- slug: grok-imagine-video-1-5-xai-generation-video-ia
- locale: fr
- url: https://frankhoubre.com/blog/grok-imagine-video-1-5-xai-generation-video-ia
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Grok Imagine Video 1.5 xAI génération vidéo IA
- secondary_keywords: Grok Imagine Video prix, Grok vs Sora vs Veo, audio natif vidéo IA, Image-to-Video Arena classement
- sources: explainx.ai/blog/grok-imagine-video-1-5-xai-release-2026, x.ai/news/grok-imagine-video-1-5 (June 17, 2026)
- internal_links: -> /outils/annuaire-generateurs-images-ia-gratuits, -> /outils/calculateur-budget-production-ia
- cta: none
- cannibalization_notes: no existing Grok Imagine Video article. mistral-grok-meta-ai-createurs covers a different angle (tool ecosystem for creators vs. this specific model launch). Distinct.
- checker: pass (audit 0 err, build prerendered)
- published_commit: 58f7c54

### 2026-06-19 — Luma Ray 2 : guide pratique des settings et du workflow vidéo
- slug: 2026-06-19-luma-ray-2-guide-pratique-settings-workflow
- locale: fr
- url: https://frankhoubre.com/blog/2026-06-19-luma-ray-2-guide-pratique-settings-workflow
- category: tutoriels
- type: evergreen
- search_intent: how-to / tool guide
- primary_keyword: Luma Ray 2 settings workflow
- secondary_keywords: Luma Ray 2 Flash, Luma Ray 2 vs Kling, Modify Video Luma, Dream Machine workflow, génération vidéo IA mouvement naturel
- sources: n/a (craft/evergreen, based on documented model specs)
- internal_links: -> /outils/generateur-storyboard-pdf, -> /outils/calculateur-budget-production-ia, distinct from luma-dream-machine-kling-generer-videos-fluides (comparatif)
- cta: soft tools links
- cannibalization_notes: luma-dream-machine-kling-generer-videos-fluides is a comparatif (which tool); this is a practical settings guide for Ray 2 specifically. Different intent.
- checker: pass (audit 0 err, build 409 pages)
- published_commit: 450bbf8

### 2026-06-19 — CNC : ce que dit vraiment le rapport IA sur le cinéma et l'audiovisuel
- slug: 2026-06-19-cnc-rapport-ia-cinema-audiovisuel-2026
- locale: fr
- url: https://frankhoubre.com/blog/2026-06-19-cnc-rapport-ia-cinema-audiovisuel-2026
- category: actualite
- type: news
- search_intent: news / analysis
- primary_keyword: CNC rapport IA cinéma audiovisuel 2026
- secondary_keywords: impact IA filières cinéma, Observatoire IA CNC, IA générative audiovisuel France
- sources: cnc.fr/professionnels/etudes-et-rapports/..., bearingpoint.com/fr-fr/publications-evenements/...
- internal_links: none explicit (institutional news, no direct internal link target obvious)
- cta: none
- cannibalization_notes: no existing article on CNC institutional reports. Distinct from metiers-audiovisuel-ia-menaces-transformation-avis (opinion) and other IA-film articles.
- checker: pass (audit 0 err after fixing em-dash in source anchors)
- published_commit: 450bbf8

### 2026-06-19 — Kling 3.0 Turbo : générer des aperçus vidéo IA en quelques secondes
- slug: 2026-06-19-kling-3-turbo-previsualisation-video-ia
- locale: fr
- url: https://frankhoubre.com/blog/2026-06-19-kling-3-turbo-previsualisation-video-ia
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Kling 3.0 Turbo prévisualisation vidéo IA
- secondary_keywords: Kling Turbo vs standard, Kling 3.0 Omni mise à jour, génération vidéo IA rapide, prévisualisation animatique IA
- sources: openpr.com/news/4554630/kling-3-0-turbo-released, atlascloud.ai/blog/guides/kling-3.0-turbo-kling-omni
- internal_links: -> workflow-kling-3-animation-fluide-realiste (anchor: "workflow kling 3"), -> wan-27-video-decevant-kling-seedance (context)
- cta: none
- cannibalization_notes: workflow-kling-3-animation-fluide-realiste is a how-to guide; this is a dated news/analysis on the Turbo launch. Different intent.
- checker: pass (audit 0 err after fixing em-dash in source anchors)
- published_commit: 450bbf8

### 2026-06-17 — Scintillement (flicker) en vidéo IA : causes et solutions
- slug: corriger-scintillement-flicker-video-ia
- locale: fr
- url: https://frankhoubre.com/blog/corriger-scintillement-flicker-video-ia
- category: tutoriels
- type: evergreen
- search_intent: how-to / troubleshooting
- primary_keyword: scintillement flicker vidéo IA
- secondary_keywords: corriger flicker, instabilité texture vidéo IA, déflickering montage, cohérence temporelle
- sources: n/a (craft/evergreen)
- internal_links: -> comment-ameliorer-fluidite-video-generee, -> comment-transformer-image-ia-video-fluide-credible, -> upscaling-video-passer-vieux-court-metrage-4k-ia
- cta: none (craft-first)
- cannibalization_notes: checked vs comment-ameliorer-fluidite-video-generee (that = motion smoothness; this = frame-to-frame texture flicker, distinct problem). No dedicated flicker article existed. Differentiated explicitly in body.
- checker: pass (audit 0 err, build prerendered 149KB)
- published_commit: 5169676 (merge ad2e2b0)

### 2026-06-17 — FLUX.2 et la bascule open-weights : l'image IA en local
- slug: flux-2-open-weights-images-ia-local-2026
- locale: fr
- url: https://frankhoubre.com/blog/flux-2-open-weights-images-ia-local-2026
- category: actualite
- type: news
- search_intent: news / analysis
- primary_keyword: FLUX.2 open weights image IA local
- secondary_keywords: générer images IA local, modèle poids ouverts, ComfyUI FLUX.2, image IA sans cloud
- sources: bfl.ai/models/flux-2, github.com/black-forest-labs/flux2, blogs.nvidia.com/blog/rtx-ai-garage-flux-2-comfyui, huggingface.co/black-forest-labs/FLUX.2-dev
- internal_links: -> flux-vs-sdxl-quelle-ia-choisir-images-realistes, -> workflow-flux-images-ultra-detaillees, -> comfyui-guide-video-createurs-debutants ; tool: ScreenWeaver soft mention
- cta: ScreenWeaver soft bridge
- cannibalization_notes: distinct from flux-vs-sdxl (comparatif) and workflow-flux (how-to). This is news/analysis on the 2026 open-weights shift + local generation. Linked to both.
- checker: pass (audit 0 err, build prerendered 137KB)
- published_commit: 5169676 (merge ad2e2b0)

### 2026-06-17 — ElevenLabs retire ses voix v1 le 9 juillet : que faire
- slug: elevenlabs-fin-voix-v1-migration-2026
- locale: fr
- url: https://frankhoubre.com/blog/elevenlabs-fin-voix-v1-migration-2026
- category: actualite
- type: news
- search_intent: news / practical migration
- primary_keyword: ElevenLabs voix v1 retrait
- secondary_keywords: ElevenLabs v1 deprecated, migration voix IA, voix off IA, modèle voix ElevenLabs
- sources: ElevenLabs official changelog 2026-06-08 (elevenlabs.io/docs/changelog/2026/6/8). NOTE: verified directly; the "Music v2" claim seen in SEO summaries was NOT in the primary source and was dropped. Real fact = v1 TTS models retiring 2026-07-09 + Scribe v1 deprecation.
- internal_links: -> elevenlabs-tutoriel-definitif-voix-ultra-realistes, -> doublage-voix-off-cloner-diriger-voix-film ; tool: /outils/annuaire-ia-audio-sfx-musicales
- cta: soft (audio directory)
- cannibalization_notes: distinct from elevenlabs tutorial (how-to) and heygen-elevenlabs comparatif. This is a dated news/alert with migration steps.
- checker: pass (audit 0 err, build prerendered 137KB)
- published_commit: 5169676 (merge ad2e2b0)
