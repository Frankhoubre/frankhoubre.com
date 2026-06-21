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
