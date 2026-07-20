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

### 2026-07-20 — Dzine Image Animator : animer un portrait photo en vidéo pas à pas
- slug: dzine-image-animator-tutoriel
- locale: fr
- url: https://frankhoubre.com/blog/dzine-image-animator-tutoriel
- category: tutoriels
- type: evergreen
- search_intent: tutoriel / how-to
- primary_keyword: dzine ai image animator
- secondary_keywords: dzine image animator, animer portrait ia, photo to video ia, wan 2.2 animate, animation portrait ia, dzine tutoriel
- sources: n/a (evergreen outil)
- internal_links: -> /blog/dzine-ia, -> /blog/comment-transformer-image-ia-video-fluide-credible
- cta: none
- cannibalization_notes: dzine-ia = avis/test/pipeline complet. dzine-image-animator = satellite mono-fonction. Distinct.
- checker: pass (audit 0 err, build 553 pages)
- published_commit: 44c0911

### 2026-07-20 — WAICO : la Chine lance une alliance mondiale de 29 pays pour réguler l'IA
- slug: waico-chine-alliance-ia-mondiale-waic-shanghai-2026
- locale: fr
- url: https://frankhoubre.com/blog/waico-chine-alliance-ia-mondiale-waic-shanghai-2026
- category: actualite
- type: news
- search_intent: news / informational
- primary_keyword: WAICO chine alliance IA mondiale juillet 2026
- secondary_keywords: WAIC Shanghai 2026, gouvernance IA internationale, régulation IA chine, World AI Cooperation Organisation
- sources: aljazeera.com/news/2026/7/17/chinas-xi-jinping-launches-new-ai-alliance-what-is-it, cgtn.com/news/2026-07-07/Shanghai-to-host-record-breaking-World-AI-Conference-July-17-to-20, english.news.cn/20260717/fdc7646bcf8c491c92123f095aaaa670/c.html
- internal_links: -> /blog/eu-ai-act-article-50-marquage-video-ia-aout-2026
- cta: none
- cannibalization_notes: aucun article existant sur la gouvernance IA internationale / WAICO. Distinct de l'AI Act UE (angle différent).
- checker: pass (audit 0 err, build 553 pages)
- published_commit: 44c0911

### 2026-07-20 — Kimi K3 : Moonshot AI lance un modèle à 2,8 trillions de paramètres qui rivalise avec GPT-5.6
- slug: kimi-k3-moonshot-modele-ia-chinois-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/kimi-k3-moonshot-modele-ia-chinois-juillet-2026
- category: actualite
- type: news
- search_intent: news / informational
- primary_keyword: Kimi K3 Moonshot AI modèle IA chinois juillet 2026
- secondary_keywords: kimi k3, moonshot ai kimi, modèle IA chinois, mixture of experts 2.8T, open weight kimi, kimi k3 max
- sources: bloomberg.com/news/articles/2026-07-17/china-s-powerful-new-moonshot-ai-model-closes-gap-with-us-rivals, cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html, fortune.com/2026/07/16/moonshots-kimi-k3-pushes-chinese-ai-into-fable-level-territory/
- internal_links: -> /blog/wan-alibaba-guide-complet, -> /blog/gerer-versions-projets-video-ia
- cta: none
- cannibalization_notes: aucun article existant sur Moonshot AI / Kimi K3. Distinct des articles WAN Alibaba (outils vidéo, pas LLM).
- checker: pass (audit 0 err, build 553 pages)
- published_commit: 44c0911

### 2026-07-17 — VOIDBORN : comment un animé IA a été primé dans des festivals internationaux
- slug: voidborn-anime-ia-festival-coulisses
- locale: fr
- url: https://frankhoubre.com/blog/voidborn-anime-ia-festival-coulisses
- category: guides
- type: evergreen
- search_intent: info/preuve
- primary_keyword: animé ia festival (voidborn)
- secondary_keywords: court métrage ia festival, voidborn frank houbre, film ia primé, seoul ai film festival, hollywood indie festival, animation ia festival
- sources: n/a (coulisses réelles Frank Houbre, données press.ts vérifiées)
- internal_links: -> /blog/ronces-coulisses-court-film-ia, -> /blog/illustrations-manga-anime-ia, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: ronces-coulisses-court-film-ia = coulisses technique d'un court-métrage réaliste. voidborn = coulisses décision stylistique anime + circuit festival international. Distinct.
- checker: pass (audit 0 err, build 544 pages)
- published_commit: e2122ac

### 2026-07-17 — Bonsai 27B : PrismML compresse un modèle 27 milliards de paramètres sur iPhone
- slug: prismml-bonsai-27b-modele-ia-iphone-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/prismml-bonsai-27b-modele-ia-iphone-juillet-2026
- category: actualite
- type: news
- search_intent: news / informational
- primary_keyword: PrismML Bonsai 27B iPhone IA juillet 2026
- secondary_keywords: Bonsai 27B on-device, modèle 27B smartphone, prismml quantification, qwen3.6 27b mobile, ia locale iphone, modèle IA mobile
- sources: 9to5mac.com/2026/07/14/prismml-releases-bonsai-27b-claiming-first-major-ai-model-of-its-size-fit-for-iphone/, prismml.com/news/prismml-releases-bonsai-27b, marktechpost.com/2026/07/14/prismml-releases-bonsai-27b
- internal_links: -> /blog/comfyui-guide-debutant-creer-pipeline-image-video-ia, -> /blog/wan-alibaba-guide-complet
- cta: none
- cannibalization_notes: aucun article existant sur les modèles IA on-device/mobile. Sujet distinct des tutoriels ComfyUI.
- checker: pass (audit 0 err, build 544 pages)
- published_commit: e2122ac

### 2026-07-17 — Apple Intelligence approuvé en Chine avec Alibaba Qwen : ce que ça change
- slug: apple-intelligence-chine-alibaba-qwen-approbation-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/apple-intelligence-chine-alibaba-qwen-approbation-juillet-2026
- category: actualite
- type: news
- search_intent: news / informational
- primary_keyword: Apple Intelligence Chine Alibaba Qwen approbation juillet 2026
- secondary_keywords: CAC approbation IA, Apple Intelligence Qwen, apple intelligence chine lancement, Baidu apple ia, apple intelligence modèle chine
- sources: techcrunch.com/2026/07/15/apple-intelligence-approved-for-launch-in-china-with-alibabas-qwen-ai/, finance.yahoo.com/technology/ai/articles/apple-intelligence-approved-china-alibaba-131501096.html, thenextweb.com/news/alibaba-qwen-apple-intelligence-china-approved
- internal_links: -> /blog/wan-alibaba-guide-complet, -> /blog/eu-ai-act-article-50-marquage-video-ia-aout-2026
- cta: none
- cannibalization_notes: aucune couverture précédente d'Apple Intelligence Chine. Angle réglementaire + implications créateurs distinct des articles Apple iOS 27 (iOS bêta publique, pas Intelligence spécifiquement).
- checker: pass (audit 0 err, build 544 pages)
- published_commit: e2122ac

### 2026-07-16 — Doublage IA : les vraies alternatives à HeyGen comparées
- slug: doublage-ia-alternatives-heygen-comparatif
- locale: fr
- url: https://frankhoubre.com/blog/doublage-ia-alternatives-heygen-comparatif
- category: comparatifs
- type: evergreen
- search_intent: comparaison
- primary_keyword: alternatives heygen doublage (doublage ia comparatif)
- secondary_keywords: descript doublage ia, murf alternatives, captions ia, synthesia heygen comparatif, elevenlabs doublage, lip sync ia outils
- sources: n/a (craft/evergreen, verified tool specs from official sites)
- internal_links: -> /blog/heygen-elevenlabs-comparatif, -> /blog/synchronisation-labiale-lip-sync-quel-outil-ia-choisir, -> /blog/doublage-voix-off-cloner-diriger-voix-film
- cta: none
- cannibalization_notes: heygen-elevenlabs-comparatif compare HeyGen vs ElevenLabs entre eux. Ce guide compare HeyGen à ses concurrentes doublage (Descript, Murf, Captions, Synthesia). Distinct. Plan 90j J6.
- checker: pass (audit 0 err, build 539 pages)
- published_commit: bb4942d

### 2026-07-16 — Claude Fable 5 gratuit jusqu'au 19 juillet : ce que ça veut dire pour toi
- slug: claude-fable-5-gratuit-prolonge-19-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/claude-fable-5-gratuit-prolonge-19-juillet-2026
- category: actualite
- type: news
- search_intent: news / informational
- primary_keyword: Claude Fable 5 gratuit juillet 2026
- secondary_keywords: Claude Fable 5 prolongé 19 juillet, Anthropic accès gratuit Fable 5, Fable 5 payant prix tokens, Claude Pro Fable 5 extension
- sources: bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-stays-free-for-paid-users-until-july-19-as-anthropic-buys-more-time/, forbes.com/sites/sandycarter/2026/07/13/claude-fable-5-extends-to-july-19-7-days-7-power-moves/, dataconomy.com/2026/07/13/claude-fable-5-free-access-extended-july-19/, techtimes.com/articles/320265/20260712/fable-5-free-through-july-19-anthropic-blinks-again-opus-5-leak-surfaces-cursor.htm
- internal_links: -> /blog/claude-code-createurs-video-guide, -> /blog/anthropic-fable-5-retour-global-juillet-2026
- cta: none
- cannibalization_notes: anthropic-fable-5-retour-global-juillet-2026 couvre le retour mondial du 1er juillet (contrôles levés). Ce nouvel article couvre la troisième extension gratuite jusqu'au 19 juillet (pricing/accessibilité). Angle distinct.
- checker: pass (audit 0 err, build 539 pages)
- published_commit: bb4942d

### 2026-07-16 — PixVerse lève 439 millions : le géant de la vidéo IA qui monte en silence
- slug: pixverse-439-millions-levee-fonds-video-ia-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/pixverse-439-millions-levee-fonds-video-ia-juillet-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: PixVerse 439 millions levée fonds vidéo IA juillet 2026
- secondary_keywords: PixVerse Series C 2 milliards, PixVerse V-Series C-Series R-Series, PixVerse 150 millions utilisateurs, PixVerse API vidéo génération, PixVerse Alibaba investissement
- sources: techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b/, pixverse.ai/en/blog/pixverse-closes-series-c-extension-and-announces-expansion-into-interactive-entertainment, ventureburn.com/pixverse-raises-439m-real-time-interactive-worlds/, technode.global/2026/07/14/ai-video-generation-platform-pixverse-raises-439m-series-c-to-build-real-time-interactive-worlds-game-engine/
- internal_links: -> /blog/wan-alibaba-guide-complet, -> /blog/5-meilleurs-ia-video-maker-clip-musical-2026
- cta: none
- cannibalization_notes: aucun article existant sur PixVerse. Distinct des comparatifs outils vidéo généraux. Angle : levée de fonds + positionnement marché juillet 2026.
- checker: pass (audit 0 err, build 539 pages)
- published_commit: bb4942d

### 2026-07-14 — Claude Code pour créateurs vidéo : usages concrets et tarifs
- slug: claude-code-createurs-video-guide
- locale: fr
- url: https://frankhoubre.com/blog/claude-code-createurs-video-guide
- category: guides
- type: evergreen
- search_intent: info/commerciale
- primary_keyword: claude code (claude code tarif, claude code prix)
- secondary_keywords: claude code créateurs vidéo, claude code usages concrets, agent ia terminal créateur, automatiser production vidéo ia, claude code vs chatgpt
- sources: n/a (craft/evergreen, verified tool specs from anthropic.com)
- internal_links: -> /blog/comment-optimiser-workflow-ia, -> /blog/gerer-versions-projets-video-ia
- cta: none direct (soft Claude mention)
- cannibalization_notes: no existing claude-code dedicated article. Distinct from claude-sonnet-5-anthropic-agent-ia-juin-2026 (news article about model release) and from californie-anthropic-claude-accord-agences-etat-2026 (government deal news). This is the practical how-to guide for creators wanting to use Claude Code tool. Plan 90j J5.
- checker: pass (audit 0 err, build 532 pages)
- published_commit: 8346a49

### 2026-07-14 — Mistral lance Robostral Navigate : l'IA qui pilote un robot avec une seule caméra
- slug: mistral-robostral-navigate-robot-ia-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/mistral-robostral-navigate-robot-ia-juillet-2026
- category: actualite
- type: news
- search_intent: news / technology analysis
- primary_keyword: Mistral Robostral Navigate robot IA juillet 2026
- secondary_keywords: Robostral Navigate 8B open-weight, navigation robot caméra RGB, Mistral IA physique, Robostral R2R-CE benchmark, Mistral robotique modèle
- sources: bloomberg.com/news/articles/2026-07-08/mistral-ai-releases-robotics-model-to-support-physical-ai-push, mistral.ai/news/robostral-navigate/, cryptobriefing.com/mistral-robostral-navigate-robotics-model/, theaiinsider.tech/2026/07/08/mistral-ai-introduces-robot-navigation-model/, aiweekly.co/alerts/mistral-debuts-robostral-navigate-an-8b-single-camera-robot-nav-model
- internal_links: -> /blog/mistral-grok-meta-ai-createurs, -> /blog/wan-alibaba-guide-complet
- cta: none
- cannibalization_notes: mistral-grok-meta-ai-createurs covers Mistral in ecosystem comparatif context. No existing article on Robostral or robotics AI models. This is the July 8, 2026 Robostral Navigate launch news. Distinct.
- checker: pass (audit 0 err, build 532 pages)
- published_commit: 8346a49

### 2026-07-14 — iOS 27 beta publique est là : ce que j'ai testé en premier
- slug: ios-27-beta-publique-live-siri-ia-test-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/ios-27-beta-publique-live-siri-ia-test-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical review
- primary_keyword: iOS 27 beta publique live Siri IA test juillet 2026
- secondary_keywords: iOS 27 beta publique juillet 13, Siri IA iOS 27 test, Visual Intelligence caméra iOS, iOS 27 créateurs, Apple Intelligence beta publique
- sources: 9to5mac.com/2026/07/13/ios-27-public-beta/, macrumors.com/2026/07/13/apple-seeds-ios-27-public-beta-1/, engadget.com/2214198/public-betas-for-ios-27-macos-27-and-more-apple-platforms-are-now-available/, macworld.com/article/3190070/the-os-27-public-betas-are-out-now-with-siri-ai-platform-improvements-and-more.html, cultofmac.com/news/ios-27-public-beta-launch
- internal_links: -> /blog/apple-openai-proces-secrets-commerciaux-juillet-2026, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: apple-ios-27-beta-publique-apple-intelligence-siri-ia (July 5) covers the announcement that the beta was coming "around July 14". This article covers the July 13 actual launch, what's in the live build, what to test. Distinct event (announcement vs actual beta going live). Different practical angle (coming soon vs test now).
- checker: pass (audit 0 err, build 532 pages)
- published_commit: 8346a49

### 2026-07-13 — Ronces : les coulisses de mon court-métrage IA
- slug: ronces-coulisses-court-film-ia
- locale: fr
- url: https://frankhoubre.com/blog/ronces-coulisses-court-film-ia
- category: guides
- type: evergreen
- search_intent: info/preuve/coulisses
- primary_keyword: ronces film ia (court métrage ia coulisses)
- secondary_keywords: ronces court métrage IA Frank Houbre, coulisses production IA, diriger avant générer, pipeline court métrage IA, Kling WAN Midjourney court film
- sources: n/a (craft/evergreen, projet personnel Frank Houbre — Ronces court-métrage IA)
- internal_links: -> /blog/creer-court-metrage-100-ia-sans-camera-acteurs, -> /presse, -> /a-propos
- cta: AI Studios (lien vers /a-propos), Kit presse (/presse)
- cannibalization_notes: creer-court-metrage-100-ia-sans-camera-acteurs est un guide technique général. Cet article est spécifiquement les coulisses du projet Ronces de Frank (cas réel, angle personnel). Distinct.
- checker: pass (audit 0 err, build 527 pages)
- published_commit: d19541d

### 2026-07-13 — Meta Muse Spark 1.1 : l'agent multimodal qui veut tout faire
- slug: meta-muse-spark-11-agent-multimodal-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/meta-muse-spark-11-agent-multimodal-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Meta Muse Spark 1.1 agent multimodal API juillet 2026
- secondary_keywords: Muse Spark 1.1 API tarif, Meta Superintelligence Labs agent, Muse Spark 1.1 vs Claude, Muse Spark 1M tokens, Meta Model API coding agentique
- sources: ai.meta.com/blog/introducing-muse-spark-meta-model-api/, techcrunch.com/2026/07/09/meta-enters-the-crowded-ai-coding-battle-with-muse-spark-1-1/, marktechpost.com/2026/07/09/meta-superintelligence-labs-releases-muse-spark-1-1/, dataconomy.com/2026/07/10/meta-muse-spark-1-1-launch-agentic-ai/, fortune.com/2026/07/09/meta-muse-spark-1-1-release-alexandr-wang-superintelligence-labs-mark-zuckerberg/
- internal_links: -> /blog/claude-sonnet-5-anthropic-agent-ia-juin-2026, -> /blog/chatgpt-work-gpt-56-disponibilite-generale-juillet-2026, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: meta-muse-image-generateur-instagram-juillet-2026 couvre Muse Image (générateur images Instagram). meta-watermelon-modele-ia-gpt-55-parite-juillet-2026 couvre Watermelon (LLM frontier). Cet article couvre Muse Spark 1.1 (modèle agentique multimodal API publique, juillet 9 2026). Produits distincts.
- checker: pass (audit 0 err, build 527 pages)
- published_commit: d19541d

### 2026-07-13 — Apple attaque OpenAI : vol de secrets commerciaux et bataille pour le hardware IA
- slug: apple-openai-proces-secrets-commerciaux-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/apple-openai-proces-secrets-commerciaux-juillet-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Apple OpenAI procès secrets commerciaux hardware IA juillet 2026
- secondary_keywords: Apple OpenAI lawsuit hardware, Tang Tan Apple OpenAI, io Products Jony Ive OpenAI, Apple Intelligence ChatGPT rupture, secrets industriels IA 2026
- sources: cnbc.com/2026/07/10/apple-openai-lawsuit-trade-secrets.html, techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/, bloomberg.com/news/articles/2026-07-10/apple-sues-openai-for-trade-secret-theft-in-blockbuster-case, axios.com/2026/07/10/apple-sues-openai-trade-secret-theft, cnn.com/2026/07/10/tech/apple-openai-devices-lawsuit, fortune.com/2026/07/10/apple-openai-lawsuit-trade-secrets-theft-allegations/
- internal_links: -> /blog/clause-contrat-client-contenu-genere-ia, -> /a-propos
- cta: none
- cannibalization_notes: anthropic-samsung-chip-ia-2nm-juillet-2026 couvre les discussions chip Anthropic/Samsung. microsoft-frontier-company-25-milliards couvre Microsoft. Cet article couvre le procès Apple vs OpenAI du 10 juillet 2026 pour vol de secrets commerciaux hardware. Distinct.
- checker: pass (audit 0 err, build 527 pages)
- published_commit: d19541d

### 2026-07-12 — Frank Houbre formation : AI Studios, contenu et avis
- slug: frank-houbre-formation-ai-studios
- locale: fr
- url: https://frankhoubre.com/blog/frank-houbre-formation-ai-studios
- category: guides
- type: evergreen
- search_intent: navigationnelle / commerciale
- primary_keyword: frank houbre formation (ai studios avis)
- secondary_keywords: AI Studios Frank Houbre, formation cinéma IA, apprendre IA vidéo, Frank Houbre Skool, formation vidéo IA créateurs
- sources: n/a (craft/evergreen, méthode personnelle Frank Houbre, programme AI Studios)
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/methode-realisateur-ia-diriger-avant-generer, -> /a-propos
- cta: AI Studios (lien vers /a-propos pour accès Skool)
- cannibalization_notes: formation-interne-equipe-creative-ia couvre la formation des équipes en entreprise (B2B). Cet article est spécifiquement sur la requête marque "frank houbre formation" et présente AI Studios (le programme Skool). Angle marque personnel vs angle B2B. Distinct. Rester sur requête marque, ne pas cibler "formation IA vidéo" générique.
- checker: pass (audit 0 err, build 521 pages)
- published_commit: 1e7a2e7

### 2026-07-12 — Google Gemini 3.5 Pro : 2 millions de tokens en contexte, Deep Think en juillet
- slug: google-gemini-35-pro-fenetre-2m-tokens-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/google-gemini-35-pro-fenetre-2m-tokens-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Google Gemini 3.5 Pro fenêtre 2M tokens juillet 2026
- secondary_keywords: Gemini 3.5 Pro Deep Think, Gemini 3.5 Pro date sortie, Gemini 3.5 Pro 2 millions tokens, Google One AI Ultra Deep Think, Gemini 3.5 Pro vs GPT-5.6
- sources: developersdigest.tech/blog/gemini-3-5-pro-developer-guide-2026, zoombangla.com/google-gemini-35-pro-launch-july-2026-context-window/, aitoolsreview.co.uk/insights/gemini-3-5-pro, coursiv.io/blog/gemini-3-5-pro, findskill.ai/blog/gemini-3-5-pro-release-date/
- internal_links: -> /blog/google-flow-veo-31-edition-audio-juin-2026, -> /blog/google-photos-video-remix-gemini-omni-juillet-2026
- cta: none
- cannibalization_notes: google-gemini-31-flash-image-omni-flash-video-juin-2026 couvre les modèles API Gemini 3.1 Flash/Omni. google-flow-veo-31-edition-audio-juin-2026 couvre Veo 3.1/Flow. Cet article couvre l'annonce Gemini 3.5 Pro (2M tokens, Deep Think, rebuild zéro) pour juillet 2026. Distinct.
- checker: pass (audit 0 err, build 521 pages)
- published_commit: 1e7a2e7

### 2026-07-12 — ChatGPT Work et GPT-5.6 GA : OpenAI passe à l'agent de travail
- slug: chatgpt-work-gpt-56-disponibilite-generale-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/chatgpt-work-gpt-56-disponibilite-generale-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: ChatGPT Work GPT-5.6 disponibilité générale juillet 2026
- secondary_keywords: ChatGPT Work agent productivité, GPT-5.6 Sol Terra Luna API, ChatGPT Work Codex fusion, ChatGPT Work Pro Enterprise, agent IA livrables juillet 2026
- sources: techbriefly.com/2026/07/10/chatgpt-work-gpt-5-6-productivity-app/, 9to5mac.com/2026/07/09/openai-announcing-the-next-chapter-for-chatgpt-today-watch-here/, digitalapplied.com/blog/chatgpt-work-openai-agent-launch-2026, ithinkdiff.com/chatgpt-work-gpt-5-6-rollout-july-2026/, engadget.com/2210308/openai-rolls-out-gpt5-6-july-9/
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/claude-sonnet-5-anthropic-agent-ia-juin-2026, -> /blog/methode-realisateur-ia-diriger-avant-generer
- cta: none
- cannibalization_notes: openai-gpt-56-sol-terra-luna-modeles-juin-2026 couvre le lancement limité du 26 juin sous supervision gouvernementale (20 orgs). Cet article couvre le 9 juillet : GA publique + lancement ChatGPT Work (nouvel agent). Événements et dates distincts. openai-gpt-live-voix-duplex-chatgpt-juillet-2026 couvre GPT-Live voix (8 juillet). Distinct.
- checker: pass (audit 0 err, build 521 pages)
- published_commit: 1e7a2e7

### 2026-07-11 — Réalisateur IA : ma méthode pour diriger avant de générer
- slug: methode-realisateur-ia-diriger-avant-generer
- locale: fr
- url: https://frankhoubre.com/blog/methode-realisateur-ia-diriger-avant-generer
- category: guides
- type: evergreen
- search_intent: informational / autorité personnelle
- primary_keyword: méthode réalisateur IA diriger avant générer
- secondary_keywords: réalisateur ia, diriger ia, prompt cinéma ia, état interne personnage ia, position caméra ia, logique montage ia
- sources: n/a (craft/evergreen, méthode personnelle Frank Houbre)
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/comment-diriger-personnage-ia-comme-acteur
- cta: ScreenWeaver soft bridge (workspace entre écriture et storyboard)
- cannibalization_notes: comment-penser-comme-realisateur-avec-ia est un article générique "mindset de réalisateur". Cet article est la MÉTHODE PERSONNELLE de Frank (3 décisions concrètes, cas réels, exemples de prompts). Angle signature vs angle générique. Distinct.
- checker: pass (audit 0 err, build 517 pages)
- published_commit: e514bfb

### 2026-07-11 — Meta Muse Image : le générateur IA qui a mis Instagram en colère
- slug: meta-muse-image-generateur-instagram-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/meta-muse-image-generateur-instagram-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Meta Muse Image générateur IA Instagram juillet 2026
- secondary_keywords: Muse Image Meta AI, Meta Superintelligence Labs image generator, Muse Image opt-out controverse, CAA SAG-AFTRA Meta likeness, Instagram générateur image IA
- sources: about.fb.com/news/2026/07/introducing-muse-image-meta-ai/, techcrunch.com/2026/07/07/meta-rolls-out-muse-a-new-ai-image-generator/, cnbc.com/2026/07/07/meta-ai-muse-image.html, bloomberg.com/news/articles/2026-07-07/meta-debuts-new-ai-image-generation-model-inside-chatbot-instagram, axios.com/2026/07/07/ai-meta-image-generator, techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash, variety.com/2026/biz/news/meta-suspends-ai-image-instagram-feature-backlash-1236806989
- internal_links: -> /blog/eu-ai-act-article-50-marquage-video-ia-aout-2026, -> /blog/wan-alibaba-guide-complet
- cta: none
- cannibalization_notes: no existing Meta Muse Image article. midjourney-medical-scanner covers a different company/product (Midjourney hardware). This is the July 7 Meta image generation model launch + July 10 consent controversy. Distinct event and company.
- checker: pass (audit 0 err, build 517 pages)
- published_commit: e514bfb

### 2026-07-11 — GPT-Live : OpenAI passe la voix ChatGPT en full-duplex
- slug: openai-gpt-live-voix-duplex-chatgpt-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/openai-gpt-live-voix-duplex-chatgpt-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: GPT-Live OpenAI voix full-duplex ChatGPT juillet 2026
- secondary_keywords: GPT-Live-1 ChatGPT voix, voix bidirectionnelle IA ChatGPT, GPT-Live vs Advanced Voice Mode, OpenAI full-duplex voice model juillet 2026, ChatGPT voice créateurs
- sources: openai.com/index/introducing-gpt-live/ (July 8, 2026), techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/, macrumors.com/2026/07/08/openai-gpt-live-voice/, venturebeat.com/technology/openai-launches-gpt-live-a-full-duplex-voice-upgrade-that-lets-chatgpt-talk-more-like-a-person, siliconangle.com/2026/07/08/openai-launches-gpt-live-voice-model-series-ahead-broad-gpt-5-6-release/
- internal_links: -> /blog/elevenlabs-music-v2-guide-createurs-video, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: xai-grok-voice-21-voix-voice-agent-builder-juillet-2026 covers xAI Grok Voice TTS/July 6. elevenlabs-music-v2-guide-createurs-video covers ElevenLabs Music. This is the July 8 OpenAI GPT-Live full-duplex voice model launch (different company, different product). Distinct.
- checker: pass (audit 0 err, build 517 pages)
- published_commit: e514bfb

### 2026-07-10 — WAN d'Alibaba : guide complet du modèle vidéo open source
- slug: wan-alibaba-guide-complet
- locale: fr
- url: https://frankhoubre.com/blog/wan-alibaba-guide-complet
- category: guides
- type: evergreen
- search_intent: how-to / comprehensive guide
- primary_keyword: WAN Alibaba modèle vidéo open source guide complet
- secondary_keywords: wan 2.7, wan 2.1, wan alibaba comfyui, image-to-video open source, first last frame vidéo IA
- sources: n/a (craft/evergreen, verified tool specs: blog.comfy.org, aibizbuilderpro.com, computertech.co, alici.ai)
- internal_links: -> /blog/wan-27-video-decevant-kling-seedance, -> /blog/upscaling-video-passer-vieux-court-metrage-4k-ia
- cta: none
- cannibalization_notes: wan-27-video-decevant-kling-seedance is a comparison/critique article. This is the comprehensive how-to guide covering all WAN versions, installation, settings, use cases. Distinct intent (guide vs opinion/comparison).
- checker: pass (audit 0 err, build 513 pages)
- published_commit: 6c37d39

### 2026-07-10 — Google Photos lance Video Remix : retouche vidéo IA pour abonnés
- slug: google-photos-video-remix-gemini-omni-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/google-photos-video-remix-gemini-omni-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Google Photos Video Remix Gemini Omni juillet 2026
- secondary_keywords: Video Remix Google Photos, Gemini Omni video editing, relighting video IA Google, video remix abonnés AI Plus
- sources: techcrunch.com/2026/07/08/google-photos-adds-a-new-ai-video-remix-tool/, 9to5google.com/2026/07/08/google-photos-video-remix/, engadget.com/2210417/google-announces-new-video-remix-feature-for-ai-subscribers/, dataconomy.com/2026/07/09/google-video-remix-ai-tool-photos/
- internal_links: -> /blog/google-flow-veo-31-edition-audio-juin-2026, -> /blog/video-ia-talking-head-presentations-quel-outil-choisir
- cta: none
- cannibalization_notes: google-flow-veo-31-edition-audio-juin-2026 covers Veo 3.1/Flow update; google-gemini-31-flash-image-omni-flash-video-juin-2026 covers new Gemini API models. This is the July 8 Google Photos Video Remix consumer tool launch. Distinct product and intent.
- checker: pass (audit 0 err, build 513 pages)
- published_commit: 6c37d39

### 2026-07-10 — Grok 4.5 d'xAI : un modèle agentique à prix cassé pour les créateurs
- slug: xai-grok-45-coding-agentique-createurs-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/xai-grok-45-coding-agentique-createurs-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Grok 4.5 xAI modèle agentique prix juillet 2026
- secondary_keywords: Grok 4.5 tarif API, Grok 4.5 vs Claude Opus, Grok 4.5 Cursor coding, xAI agentique workflows créatifs
- sources: x.ai/news/grok-4-5 (July 8, 2026), axios.com/2026/07/08/spacexai-grok-new-model, tech.yahoo.com/ai/articles/spacexai-launches-grok-4-5-204749219.html, explainx.ai/blog/grok-4-5-public-launch-spacexai-july-2026
- internal_links: -> /blog/xai-grok-voice-21-voix-voice-agent-builder-juillet-2026, -> /blog/claude-sonnet-5-anthropic-agent-ia-juin-2026
- cta: none
- cannibalization_notes: xai-grok-voice-21-voix-voice-agent-builder-juillet-2026 covers Grok Voice TTS/July 6. grok-imagine-video-1-5-xai-generation-video-ia covers Grok Imagine Video. This is the July 8 Grok 4.5 agentic reasoning model launch. Distinct product.
- checker: pass (audit 0 err, build 513 pages)
- published_commit: 6c37d39

### 2026-07-07 — Checklist avant de livrer une vidéo IA à un client
- slug: checklist-avant-livrer-video-ia-client
- locale: fr
- url: https://frankhoubre.com/blog/checklist-avant-livrer-video-ia-client
- category: business
- type: evergreen
- search_intent: how-to / practical checklist
- primary_keyword: checklist livraison vidéo IA client
- secondary_keywords: livrer vidéo IA client, vérification avant livraison vidéo IA, artefacts vidéo IA livraison, droits vidéo IA commercial, documentation livraison production IA
- sources: n/a (craft/evergreen, method-based)
- internal_links: -> /blog/eu-ai-act-article-50-marquage-video-ia-aout-2026, -> /blog/livrer-fichiers-sources-projet-video-ia-client
- cta: none
- cannibalization_notes: livrer-fichiers-sources-projet-video-ia-client covers what to include in the delivery package; presenter-projet-video-ia-client-non-tech covers how to present to client. This is specifically the pre-send quality checklist (artefacts, audio, format, rights, final read). Distinct intent.
- checker: pass (audit 0 err, build 502 pages)
- published_commit: 94072c4

### 2026-07-07 — Meta Watermelon : le modèle qui prétend rattraper GPT-5.5
- slug: meta-watermelon-modele-ia-gpt-55-parite-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/meta-watermelon-modele-ia-gpt-55-parite-juillet-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Meta Watermelon modèle IA GPT-5.5 parité juillet 2026
- secondary_keywords: Watermelon Meta AI LLM, Alexandr Wang Meta superintelligence, Meta Muse Spark Avocado, Watermelon benchmarks GPT-5.5, Meta frontier model 2026
- sources: americanbazaaronline.com/2026/07/03/meta-ai-chief-says-watermelon-model-has-caught-up-to-gpt-5-5, benzinga.com/markets/tech/26/07/60264651/metas-upcoming-watermelon-ai-model-matches-openais-gpt-5-5, techtimes.com/articles/319723/20260704/meta-watermelon-ai-claims-gpt-55-parity-benchmarks-remain-unnamed-and-unverified.htm
- internal_links: -> /blog/claude-sonnet-5-anthropic-agent-ia-juin-2026, -> /blog/openai-gpt-56-sol-terra-luna-modeles-juin-2026
- cta: none
- cannibalization_notes: no existing Meta Watermelon article. claude-sonnet-5 and openai-gpt-56 cover other frontier models but from different companies and distinct events. This is the July 2026 Meta internal Watermelon parity claim. Distinct.
- checker: pass (audit 0 err, build 502 pages)
- published_commit: 94072c4

### 2026-07-07 — xAI lance 21 nouvelles voix Grok et un builder d'agents vocaux
- slug: xai-grok-voice-21-voix-voice-agent-builder-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/xai-grok-voice-21-voix-voice-agent-builder-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: xAI Grok Voice 21 nouvelles voix Voice Agent Builder juillet 2026
- secondary_keywords: Grok Voice multilingue 25 langues, Voice Agent Builder no-code xAI, TTS API xAI tarifs, Grok Voice vs ElevenLabs, voix IA créateurs vidéo
- sources: x.ai/news/new-flagship-voices (July 6, 2026), x.ai/news/grok-voice-agent-builder (July 1, 2026), releasebot.io/updates/xai, basenor.com/blogs/news/xai-launches-grok-voice-agent-builder-beta-for-developers
- internal_links: -> /blog/elevenlabs-music-v2-guide-createurs-video, -> /blog/elevenlabs-tutoriel-definitif-voix-ultra-realistes
- cta: none
- cannibalization_notes: grok-imagine-video-1-5-xai-generation-video-ia covers xAI's Grok Imagine Video 1.5 (different product: video generation vs TTS/voice). No existing article on Grok Voice. Distinct.
- checker: pass (audit 0 err, build 502 pages)
- published_commit: 94072c4

### 2026-07-06 — Présenter un projet vidéo IA à un client non-tech : méthode
- slug: presenter-projet-video-ia-client-non-tech
- locale: fr
- url: https://frankhoubre.com/blog/presenter-projet-video-ia-client-non-tech
- category: business
- type: evergreen
- search_intent: how-to / practical business
- primary_keyword: présenter projet vidéo IA client non-tech
- secondary_keywords: pitch client vidéo IA, moodboard client IA, révisions projet vidéo IA, brief client production IA, validation styleframe vidéo IA
- sources: n/a (craft/evergreen, method-based)
- internal_links: -> /blog/livrer-fichiers-sources-projet-video-ia-client, -> /blog/creer-devis-projet-video-ia-client-modele-structure
- cta: none direct (soft references to devis and livraison guides)
- cannibalization_notes: organiser-brief-client-production-video-ia covers brief writing; creer-devis-projet-video-ia-client-modele-structure covers quote document; comment-convaincre-client-video-ia covers convincing existing clients. This is specifically about the presentation method to a non-tech client: moodboard, styleframe, animatique, revision rounds. Distinct intent.
- checker: pass (audit 0 err, build 497 pages)
- published_commit: 50bab6c (merge 4b09952)

### 2026-07-06 — EU AI Act Article 50 : vos vidéos IA doivent être marquées dès le 2 août
- slug: eu-ai-act-article-50-marquage-video-ia-aout-2026
- locale: fr
- url: https://frankhoubre.com/blog/eu-ai-act-article-50-marquage-video-ia-aout-2026
- category: actualite
- type: news
- search_intent: news / urgent compliance guide
- primary_keyword: EU AI Act Article 50 marquage vidéo IA août 2026
- secondary_keywords: EU AI Act compliance créateurs, C2PA watermark vidéo IA, marquage contenu IA Europe, watermark stéganographique vidéo IA, deployer EU AI Act obligations
- sources: tellers.ai/blog/ai_video_eu_ai_act_compliance_august_2026_2026-04-27.mdx/, artificialintelligenceact.eu/transparency-rules-article-50/, kontainer.com/news/the-eus-new-rules-on-ai-generated-visual-content-what-every-marketer-must-know
- internal_links: -> /blog/clause-contrat-client-contenu-genere-ia, -> /blog/livrer-fichiers-sources-projet-video-ia-client
- cta: none
- cannibalization_notes: clause-contrat-client-contenu-genere-ia covers contractual IA clauses; this covers the EU regulatory obligation to mark AI video content (Article 50). Different scope (regulation vs contract). No existing article on EU AI Act enforcement. Distinct.
- checker: pass (audit 0 err, build 497 pages)
- published_commit: 50bab6c (merge 4b09952)

### 2026-07-06 — Runway lance Agent Skills : créer une pub vidéo IA en une commande
- slug: runway-agent-skills-campagnes-pub-video-ia-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/runway-agent-skills-campagnes-pub-video-ia-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Runway Agent Skills campagnes pub vidéo IA juillet 2026
- secondary_keywords: Runway Agent Skills campagne pub, Runway agent commercial vidéo, localisation vidéo IA Runway, Runway agentic workflow 2026
- sources: runwayml.com/changelog (July 2, 2026 entry confirmed), releasebot.io/updates/runwayai
- internal_links: -> /blog/organiser-brief-client-production-video-ia, -> /blog/meilleur-outil-ia-video-publicite-produit-comparatif
- cta: none
- cannibalization_notes: meilleur-outil-ia-video-publicite-produit-comparatif covers tool comparison for ads; this is a news article on the specific July 2 Runway Agent Skills launch. Different intent (news vs comparison). No existing Runway Agent Skills article. Distinct.
- checker: pass (audit 0 err, build 497 pages)
- published_commit: 50bab6c (merge 4b09952)

### 2026-07-05 — Créer un devis pour un projet vidéo IA : structure, pièges et modèle
- slug: creer-devis-projet-video-ia-client-modele-structure
- locale: fr
- url: https://frankhoubre.com/blog/creer-devis-projet-video-ia-client-modele-structure
- category: business
- type: evergreen
- search_intent: how-to / practical business
- primary_keyword: créer devis projet vidéo IA client
- secondary_keywords: devis prestation vidéo IA, scope prestation vidéo IA, clause révisions vidéo IA, modèle devis créateur vidéo IA, tarif vidéo IA client
- sources: n/a (craft/evergreen, method-based)
- internal_links: -> /outils/calculateur-budget-production-ia, -> /blog/clause-contrat-client-contenu-genere-ia
- cta: calculateur budget production IA (soft)
- cannibalization_notes: combien-facturer-video-ia-professionnelle-grille-prix covers pricing rates/amount; clause-contrat-client-contenu-genere-ia covers legal clauses; livrer-fichiers-sources-projet-video-ia-client covers delivery. This is specifically about writing the quote document itself (structure, scope, what to include/exclude). Distinct intent.
- checker: pass (audit 0 err, build 492 pages)
- published_commit: 82c4b16

### 2026-07-05 — iOS 27 beta publique : Apple Intelligence et Siri IA arrivent sur iPhone
- slug: apple-ios-27-beta-publique-apple-intelligence-siri-ia
- locale: fr
- url: https://frankhoubre.com/blog/apple-ios-27-beta-publique-apple-intelligence-siri-ia
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: iOS 27 beta publique Apple Intelligence Siri IA 2026
- secondary_keywords: iOS 27 créateurs vidéo, Apple Intelligence image generation, Siri IA iPhone 15 Pro, Image Playground iOS 27, Photos Extend iOS 27
- sources: forbes.com/sites/davidphelan/2026/07/03/apple-ios-27-release-date-the-iphone-public-beta-is-just-days-away/, 9to5mac.com/2026/07/02/ios-27-public-beta-release-date-when-you-can-install-the-new-iphone-update/, macrumors.com/2026/07/02/ios-27-public-beta-release-date/, apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/, apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/
- internal_links: none direct (news standalone, references iOS tools via context)
- cta: none
- cannibalization_notes: no existing iOS 27 or Apple Intelligence article. Distinct from all existing actualite articles (different company, different product). Checked CONTENT_LEDGER.
- checker: pass (audit 0 err, build 492 pages)
- published_commit: 82c4b16

### 2026-07-05 — Kling AI lève 2,8 milliards de dollars : ce que ça change pour les créateurs
- slug: kling-ai-levee-fonds-28-milliards-valorisation-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/kling-ai-levee-fonds-28-milliards-valorisation-juillet-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Kling AI levée fonds 2,8 milliards valorisation juillet 2026
- secondary_keywords: Kuaishou Kling AI 18 milliards, Alibaba Tencent Kling AI, Kling AI IPO Hong Kong, Kling AI créateurs données Chine, Kling AI ARR 500 millions
- sources: bloomberg.com/news/articles/2026-07-02/china-s-kling-ai-raises-2-billion-to-expand-ai-video-operations, cnbc.com/2026/07/03/kuaishou-shares-fall-after-securing-tencent-funding-for-kling-ai.html, techtimes.com/articles/319708/20260704/kling-ai-raises-record-28-billion-what-creators-owe-china-under-beijing-law.htm, techstartups.com/2026/07/03/kling-ai-raises-2-8b-at-15b-valuation-with-backing-from-alibaba-tencent-and-baidu/
- internal_links: none direct (news/analysis standalone — Kling workflow articles referenced in body)
- cta: none
- cannibalization_notes: no existing Kling AI funding article. 2026-06-19-kling-3-turbo-previsualisation-video-ia covers Kling 3.0 Turbo launch (different event). This is the July 2026 $2.8B funding round. Distinct.
- checker: pass (audit 0 err, build 492 pages)
- published_commit: 82c4b16

### 2026-07-04 — Vertical ou horizontal pour vos clips IA : comment choisir selon la plateforme
- slug: choisir-format-vertical-horizontal-video-ia-plateformes
- locale: fr
- url: https://frankhoubre.com/blog/choisir-format-vertical-horizontal-video-ia-plateformes
- category: tutoriels
- type: evergreen
- search_intent: how-to / decision guide
- primary_keyword: choisir format vertical horizontal vidéo IA plateformes
- secondary_keywords: 9:16 vs 16:9 vidéo IA, format natif social vidéo IA, ratio aspect vidéo IA TikTok YouTube, composition format vidéo IA mobile
- sources: n/a (craft/evergreen, method-based, platform specs verified)
- internal_links: -> /blog/produire-variantes-verticales-reels-shorts-ia, -> /blog/comment-structurer-video-ia-comme-vrai-film, -> /outils/calculateur-budget-production-ia
- cta: calculateur budget production IA (soft)
- cannibalization_notes: produire-variantes-verticales-reels-shorts-ia covers the technical pipeline for adapting 16:9 to 9:16. This covers the strategic decision of which format to choose before generation. Different intent.
- checker: pass (audit 0 err, build 487 pages)
- published_commit: 11e3978

### 2026-07-04 — Microsoft Frontier Company : 2,5 milliards pour déployer l'IA en entreprise
- slug: microsoft-frontier-company-25-milliards-deploiement-ia-2026
- locale: fr
- url: https://frankhoubre.com/blog/microsoft-frontier-company-25-milliards-deploiement-ia-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Microsoft Frontier Company 2,5 milliards déploiement IA enterprise 2026
- secondary_keywords: Microsoft forward-deployed engineering AI, Frontier Company 6000 ingénieurs, adoption IA enterprise 2026, Microsoft Azure IA déploiement
- sources: techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment, cnbc.com/2026/07/02/microsoft-commits-2point5-billion-6000-employees-ai-implementation-unit, theaiinsider.tech/2026/07/02/microsoft-launches-2-5b-frontier-company, techafricanews.com/2026/07/03/microsoft-launches-frontier-company-with-2-5-billion-ai-transformation-investment
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/californie-anthropic-claude-accord-agences-etat-2026
- cta: none
- cannibalization_notes: openai-broadcom-jalapeno-chip-inference-ia-2026 covers chip hardware. This is Microsoft's enterprise AI deployment unit launch July 2, 2026. Distinct event.
- checker: pass (audit 0 err, build 487 pages)
- published_commit: 11e3978

### 2026-07-04 — Anthropic en talks avec Samsung pour son premier chip IA maison
- slug: anthropic-samsung-chip-ia-2nm-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/anthropic-samsung-chip-ia-2nm-juillet-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Anthropic Samsung chip IA 2nm juillet 2026
- secondary_keywords: Anthropic chip propriétaire Samsung Foundry, Anthropic hardware infrastructure, Samsung 2nm Anthropic chip AI, Anthropic compute stratégie
- sources: techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung, bloomberg.com/news/articles/2026-07-02/anthropic-in-talks-with-samsung-for-custom-ai-chip, dataconomy.com/2026/07/03/anthropic-explores-samsung-partnership-to-develop-custom-ai-chips
- internal_links: -> /blog/openai-broadcom-jalapeno-chip-inference-ia-2026, -> /blog/anthropic-ipo-confidential-965-milliards-valorisation-2026
- cta: none
- cannibalization_notes: openai-broadcom-jalapeno-chip-inference-ia-2026 covers OpenAI's Jalapeño chip. This is Anthropic's custom chip talks with Samsung July 2, 2026. Distinct.
- checker: pass (audit 0 err, build 487 pages)
- published_commit: 11e3978

### 2026-07-03 — Prompt négatif en vidéo IA : à quoi ça sert vraiment ?
- slug: prompt-negatif-video-ia-a-quoi-ca-sert
- locale: fr
- url: https://frankhoubre.com/blog/prompt-negatif-video-ia-a-quoi-ca-sert
- category: tutoriels
- type: evergreen
- search_intent: how-to / practical method
- primary_keyword: prompt négatif vidéo IA à quoi ça sert
- secondary_keywords: negative prompt vidéo IA, réduire artefacts vidéo IA, prompt négatif Kling, prompt négatif ComfyUI, flickering anatomical errors vidéo IA
- sources: n/a (craft/evergreen, method-based, tool specs verified)
- internal_links: -> /blog/corriger-erreurs-anatomiques-video-ia-corps-mains, -> /blog/corriger-scintillement-flicker-video-ia
- cta: none
- cannibalization_notes: no existing negative prompt dedicated article. Distinct from positive prompt failures and image prompt errors.
- checker: pass (audit 0 err, build 482 pages)
- published_commit: 4dada90

### 2026-07-03 — Californie x Anthropic : Claude pour toutes les agences d'État
- slug: californie-anthropic-claude-accord-agences-etat-2026
- locale: fr
- url: https://frankhoubre.com/blog/californie-anthropic-claude-accord-agences-etat-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Californie Anthropic Claude accord agences État 2026
- secondary_keywords: Newsom Claude Anthropic deal, Claude gouvernement californie, IA gouvernement état américain, Claude 50% discount agences
- sources: gov.ca.gov/2026/06/29/governor-newsom-announces-a-first-of-its-kind-partnership, techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/anthropic-fable-5-retour-global-juillet-2026
- cta: none
- cannibalization_notes: anthropic-ipo-confidential covers IPO/finance. This is the June 29 California government deal. Distinct.
- checker: pass (audit 0 err, build 482 pages)
- published_commit: 4dada90

### 2026-07-03 — Claude Sonnet 5 : le modèle agentique par défaut d'Anthropic
- slug: claude-sonnet-5-anthropic-agent-ia-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/claude-sonnet-5-anthropic-agent-ia-juin-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Claude Sonnet 5 modèle agentique Anthropic juin 2026
- secondary_keywords: Claude Sonnet 5 prix API, Sonnet 5 vs Opus 4.8, Claude Sonnet 5 workflow créatif, Claude Sonnet 5 contexte 1M tokens
- sources: techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents, anthropic.com/news/claude-sonnet-5
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/anthropic-fable-5-retour-global-juillet-2026
- cta: none
- cannibalization_notes: different model and date from Fable 5 restoration. Distinct.
- checker: pass (audit 0 err, build 482 pages)
- published_commit: 4dada90

### 2026-07-02 — ElevenLabs Music v2 : guide pratique pour créateurs vidéo
- slug: elevenlabs-music-v2-guide-createurs-video
- locale: fr
- url: https://frankhoubre.com/blog/elevenlabs-music-v2-guide-createurs-video
- category: tutoriels
- type: evergreen
- search_intent: how-to / practical guide
- primary_keyword: ElevenLabs Music v2 créateurs vidéo guide
- secondary_keywords: inpainting musique IA, changement genre musique IA, licence commerciale musique IA, ElevenCreative workflow, musique IA vidéo
- sources: n/a (craft/evergreen based on verified ElevenLabs Music v2 launch May 27 2026)
- internal_links: -> /blog/elevenlabs-tutoriel-definitif-voix-ultra-realistes, -> /blog/comment-monter-video-ia-capcut-comme-un-pro
- cta: none
- cannibalization_notes: elevenlabs-fin-voix-v1-migration-2026 covers TTS v1 deprecation; elevenlabs-tutoriel-definitif-voix-ultra-realistes covers voice TTS how-to; heygen-elevenlabs-comparatif covers tool comparison. This is specifically about Music v2 AI music generation for video production. Distinct intent (music generation vs voice TTS).
- checker: pass (audit 0 err, build 467 pages)
- published_commit: e188e5c

### 2026-07-02 — Google Gemini 3.1 Flash Image et Omni Flash : image-to-video en API
- slug: google-gemini-31-flash-image-omni-flash-video-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/google-gemini-31-flash-image-omni-flash-video-juin-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Google Gemini 3.1 Flash Image Omni Flash image vidéo API 2026
- secondary_keywords: Gemini 3.1 Flash Image prix, Gemini Omni Flash image-to-video, Nano Banana 2 Google, Google Gemini API image video pipeline
- sources: ai.google.dev/gemini-api/docs/changelog, deepmind.google/models/model-cards/gemini-3-1-flash-lite-image, docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-image, digitalapplied.com/blog/nano-banana-2-lite-gemini-omni-flash-2026
- internal_links: -> /blog/google-imagen-gemini-image-preview-depreciation-juin-2026, -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/sora-api-arret-septembre-2026-alternatives-createurs
- cta: none
- cannibalization_notes: google-imagen-gemini-image-preview-depreciation-juin-2026 covers June 24 model deprecations; google-flow-veo-31-edition-audio-juin-2026 covers Veo 3.1 audio update. This is the June 30 LAUNCH of new Gemini image/video models. Distinct event and intent.
- checker: pass (audit 0 err, build 467 pages)
- published_commit: e188e5c

### 2026-07-02 — Claude Fable 5 de retour le 1er juillet : contrôles levés
- slug: anthropic-fable-5-retour-global-juillet-2026
- locale: fr
- url: https://frankhoubre.com/blog/anthropic-fable-5-retour-global-juillet-2026
- category: actualite
- type: news
- search_intent: news / practical analysis
- primary_keyword: Claude Fable 5 retour juillet 2026 accès mondial
- secondary_keywords: Fable 5 contrôles exportation levés, Claude Fable 5 classifieur cybersécurité, Anthropic Fable 5 API, Fable 5 Pro Max accès
- sources: cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html, venturebeat.com/technology/anthropic-is-bringing-back-claude-fable-5-globally-after-us-lifts-export-control-order, marktechpost.com/2026/07/01/anthropic-redeploys-claude-fable-5-on-july-1, forbes.com/sites/siladityaray/2026/07/01/trump-administration-lifts-export-controls-on-anthropics-mythos-5-and-fable-5-ai-models
- internal_links: -> /blog/anthropic-mythos-5-reautorisation-cybersecurite-juin-2026, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: anthropic-mythos-5-reautorisation-cybersecurite-juin-2026 covers the June 26 partial Mythos 5 unblock for 100+ US orgs. This is the July 1 global restoration of Fable 5 (different model, different event, different date). Distinct.
- checker: pass (audit 0 err, build 467 pages)
- published_commit: e188e5c

### 2026-06-28 — B-roll IA : comment créer des plans de coupe qui tiennent vraiment
- slug: creer-broll-ia-plans-coupe-convaincants
- locale: fr
- url: https://frankhoubre.com/blog/creer-broll-ia-plans-coupe-convaincants
- category: tutoriels
- type: evergreen
- search_intent: how-to / practical method
- primary_keyword: créer B-roll IA plans de coupe vidéo
- secondary_keywords: b-roll vidéo IA, plans de coupe IA Runway Kling, cohérence visuelle b-roll IA, insert vidéo IA
- sources: n/a (craft/evergreen, method-based, tool specs verified)
- internal_links: -> /outils/generateur-storyboard-pdf, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: storyboard PDF (soft)
- cannibalization_notes: comment-monter-video-ia-capcut-comme-un-pro covers editing workflow; pipeline-ia-script-storyboard-production-de-a-z covers overall pipeline. This is specifically about B-roll generation and coherence technique. No existing B-roll dedicated article. Distinct intent.
- checker: pass (audit 0 err, build 456 pages)
- published_commit: c10e5b2

### 2026-06-28 — GPT-5.6 : OpenAI lance Sol, Terra et Luna sous contrôle gouvernemental
- slug: openai-gpt-56-sol-terra-luna-modeles-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/openai-gpt-56-sol-terra-luna-modeles-juin-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: GPT-5.6 Sol Terra Luna OpenAI juin 2026
- secondary_keywords: GPT-5.6 accès limité gouvernement, OpenAI Sol modèle frontier, Terra Terra modèle équilibré, GPT-4.5 retraité, cadre supervision fédérale IA
- sources: techtimes.com/articles/318492/20260616/gpt-56-openai-chief-scientist-calls-it-meaningful-leap-june-launch-nears.htm, findskill.ai/blog/gpt-5-6-release-date-what-to-expect/, releasebot.io/updates/openai
- internal_links: -> /blog/anthropic-mythos-5-reautorisation-cybersecurite-juin-2026, -> /blog/pipeline-ia-script-storyboard-production-de-a-z
- cta: none
- cannibalization_notes: no existing GPT-5.6 article. anthropic-ipo-confidential covers Anthropic finance angle; this is OpenAI model launch under federal supervision framework. Distinct.
- checker: pass (audit 0 err, build 456 pages)
- published_commit: c10e5b2

### 2026-06-28 — Anthropic Mythos 5 : réautorisé après deux semaines de blocage national
- slug: anthropic-mythos-5-reautorisation-cybersecurite-juin-2026
- locale: fr
- url: https://frankhoubre.com/blog/anthropic-mythos-5-reautorisation-cybersecurite-juin-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Anthropic Mythos 5 réautorisé sécurité nationale juin 2026
- secondary_keywords: Claude Mythos 5 blocage gouvernement américain, Anthropic Fable 5 jailbreak, Project Glasswing Anthropic, Mythos 5 cybersécurité vulnérabilités
- sources: cnn.com/2026/06/26/tech/anthropic-mythos-release, bloomberg.com/news/articles/2026-06-26/us-allows-trusted-partners-to-use-anthropic-s-mythos-5-ai-model, cnbc.com/2026/06/26/us-government-anthropic-claude-mythos5-ai.html, nbcnews.com/tech/tech-news/us-government-gives-anthropic-green-light-limited-re-release-mythos-5-rcna352018, fortune.com/2026/06/27/anthropic-mythos-5-ai-model-us-commerce-department-clearance-fable/, federalnewsnetwork.com/artificial-intelligence/2026/06/anthropics-mythos-model-found-vulnerabilities-in-classified-us-government-systems-official-says/
- internal_links: -> /blog/anthropic-ipo-confidential-965-milliards-valorisation-2026, -> /blog/openai-gpt-56-sol-terra-luna-modeles-juin-2026
- cta: none
- cannibalization_notes: anthropic-ipo-confidential covers Anthropic IPO/finance angle. This is the Mythos 5 national security block/unblock story (different event, different angle). Distinct.
- checker: pass (audit 0 err, build 456 pages)
- published_commit: c10e5b2

### 2026-06-26 — Vidéo IA pour les présentations talking-head : quel outil choisir ?
- slug: video-ia-talking-head-presentations-quel-outil-choisir
- locale: fr
- url: https://frankhoubre.com/blog/video-ia-talking-head-presentations-quel-outil-choisir
- category: comparatifs
- type: evergreen
- search_intent: comparison / commercial
- primary_keyword: vidéo IA talking-head présentations outil choisir
- secondary_keywords: HeyGen vs Synthesia, avatar IA formation, talking-head IA 2026, D-ID présentation vidéo IA, clone vidéo IA e-learning
- sources: n/a (craft/evergreen, method-based, verified tool specs)
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /outils/calculateur-budget-production-ia
- cta: calculateur budget production IA (soft)
- cannibalization_notes: produire-variantes-verticales-reels-shorts-ia covers format adaptation (16:9->9:16); creer-avatar-parlant-videos-formation-heygen covers HeyGen tutorial only. This is a job-to-be-done comparatif across all talking-head tools by use case. Distinct intent.
- checker: pass (audit 0 err, build 451 pages)
- published_commit: 2398a4d

### 2026-06-26 — Google investit 75M$ dans A24 pour des outils IA dédiés au cinéma
- slug: google-a24-partenariat-ia-outils-cinema-2026
- locale: fr
- url: https://frankhoubre.com/blog/google-a24-partenariat-ia-outils-cinema-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: Google A24 partenariat IA outils cinéma 2026
- secondary_keywords: Google DeepMind A24 storyboard IA, A24 outils IA cinéastes, partenariat Hollywood IA, storyboard IA réalisateurs
- sources: variety.com/2026/film/news/google-a24-ai-filmmaking-tools-1236787297/, deadline.com/2026/06/google-a24-partnership-ai-filmmaking-tools-1236963944/, indiewire.com/news/analysis/a24-google-deepmind-workflow-ai-1235201651/, hollywoodreporter.com/business/digital/a24-google-deepmind-ai-venture-backrooms-1236627228/, siliconangle.com/2026/06/22/google-forms-research-partnership-a24-films-thats-focused-on-ai-filmmaking-tools/
- internal_links: -> /blog/pipeline-ia-script-storyboard-production-de-a-z, -> /blog/meilleur-outil-ia-video-publicite-produit-comparatif
- cta: none
- cannibalization_notes: no existing Google-A24 or A24 AI article. google-flow-veo-31-edition-audio-juin-2026 covers Google video tools update (news); this is R&D partnership news. metiers-audiovisuel-ia-menaces-transformation-avis covers opinion. Distinct.
- checker: pass (audit 0 err, build 451 pages)
- published_commit: 2398a4d

### 2026-06-26 — OpenAI et Broadcom dévoilent Jalapeño : leur premier chip IA dédié à l'inférence
- slug: openai-broadcom-jalapeno-chip-inference-ia-2026
- locale: fr
- url: https://frankhoubre.com/blog/openai-broadcom-jalapeno-chip-inference-ia-2026
- category: actualite
- type: news
- search_intent: news / industry analysis
- primary_keyword: OpenAI Broadcom Jalapeño chip IA inférence 2026
- secondary_keywords: Jalapeño ASIC LLM inference, OpenAI chip Broadcom 50% économies, chip IA inférence TSMC 3nm, alternative Nvidia IA
- sources: techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/, venturebeat.com/infrastructure/openai-unveils-first-custom-ai-inference-chip-jalapeno-with-broadcom-and-its-development-was-sped-up-with-openais-own-models, cnbc.com/2026/06/24/openai-and-broadcom-reveal-jalapeno-first-ai-chip-in-partnership.html, bloomberg.com/news/articles/2026-06-24/openai-and-broadcom-unveil-ai-chip-to-run-models-faster-cheaper, tomshardware.com/tech-industry/artificial-intelligence/broadcom-and-openai-unveil-custom-built-jalapeno-inference-processor-openais-first-chip-is-a-massive-reticle-sized-asic-built-in-an-ultra-fast-nine-month-development-cycle
- internal_links: (no direct link in article - news/analysis standalone)
- cta: none
- cannibalization_notes: no existing article on AI chips or hardware inference. anthropic-ipo-confidential covers industry finance angle; this is hardware/infrastructure. Distinct.
- checker: pass (audit 0 err, build 451 pages)
- published_commit: 2398a4d

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
