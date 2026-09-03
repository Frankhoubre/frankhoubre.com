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
### 2026-08-25 : Combien coûte un court-métrage IA en 2026
- slug: combien-coute-court-metrage-ia-2026
- locale: fr
- url: https://frankhoubre.com/blog/combien-coute-court-metrage-ia-2026
- category: analyses
- type: evergreen (plan 90j J15), analyse chiffrée, 3617 mots
- search_intent: commerciale / info (coût de production)
- primary_keyword: coût court métrage ia
- secondary_keywords: budget film ia, prix génération vidéo ia, coût production ia, tarif upscaling, frais festival court métrage
- sources: fal.ai/pricing (Wan 2.5 0,05 $/s, Kling 2.5 Turbo Pro 0,07 $/s, Veo 3 0,40 $/s) ; runway.com/pricing (Standard 15 $/mois ou 12 $ en annuel pour 625 crédits, Pro 35/28 $ pour 2 250, Max 95/76 $ pour 9 500, plan gratuit 125 crédits une seule fois) ; gemini.google/subscriptions (AI Pro 21,99 EUR/mois avec essai limité de Veo 3.1 Lite, AI Ultra à partir de 99,99 EUR/mois) ; elevenlabs.io/pricing (gratuit 10 000 crédits, Starter 6 $ / 30 000, Creator 22 $ / 121 000, Pro 99 $ / 600 000, Scale 299 $ / 1,8 M, facturation annuelle = 10 mois payés sur 12) ; suno.com/pricing (gratuit 50 crédits/jour sans usage commercial, Pro 8 $ / 2 500, Premier 24 $ / 10 000, droits commerciaux limités aux morceaux créés pendant l'abonnement actif) ; blackmagicdesign.com/products/davinciresolve (Resolve gratuit, Studio 295 $ en licence perpétuelle) ; topazlabs.com/pricing (Topaz est passé à l'abonnement : Video Personal 39 $/mois avec engagement annuel ou 59 $/mois sans, bundle Studio 69 $/mois ou 399 $/an) ; sundance.org/festivals/sundance-film-festival/submit (courts US et internationaux, édition 2027 : 55 $ anticipé, 75 $ officiel, 95 $ tardif, 50 min générique compris). Tout relevé le 2026-08-25
- internal_links: -> /blog/minimax-hailuo-prix-credits-formules, -> /blog/droits-auteur-musique-ia-bande-son, -> /blog/ronces-coulisses-court-film-ia, -> /blog/upscaling-video-gratuit-alternatives-topaz, -> /blog/voidborn-anime-ia-festival-coulisses, -> /blog/combien-facturer-video-ia-professionnelle-grille-prix, -> /outils/calculateur-budget-production-ia ; liens réciproques ajoutés DEPUIS combien-facturer-video-ia-professionnelle-grille-prix (section « Ce que ton prix doit couvrir ») et ronces-coulisses-court-film-ia (liste « Ce que vous pouvez réutiliser »)
- cta: aucun CTA produit ; renvoi vers l'outil maison /outils/calculateur-budget-production-ia et vers la grille de facturation client
- cannibalization_notes: seul autre article du site sur l'argent d'un projet vidéo IA, combien-facturer-video-ia-professionnelle-grille-prix, qui traite le PRIX DE VENTE au client. Celui-ci traite le COÛT DE PRODUCTION. La distinction est écrite noir sur blanc dans les deux articles, avec lien croisé explicite dans chaque sens. minimax-hailuo-prix-credits-formules (J14) reste sur les formules d'un seul outil, cité ici en satellite. Risque résiduel faible
- editorial_notes: TROIS ERREURS DE CALCUL du premier jet corrigées à la passe antislop-copywriting, à retenir pour les prochains articles chiffrés. (1) « soixante plans gardés sur quatre cents générés » était faux, 60 x 4 = 240, corrigé partout y compris dans la FAQ. (2) « sur quatre mois, la formule Topaz sans engagement dépasse le prix d'une licence Resolve Studio » était faux, 59 x 4 = 236 < 295 ; corrigé en cinq mois, 59 x 5 = 295 exactement. (3) Deux chiffres inventés supprimés : « leur taux de sélection dérive à un sur douze » et « ce qui supprime la moitié des rejets », remplacés par des formulations sans statistique fabriquée. Aucun tarif Midjourney ni Kling abonnement n'est publié : leurs pages renvoient 403 et 446 à la récupération, donc rien de vérifiable. La seule affirmation non sourcée restante, « le son représente rarement moins d'un quart du budget total », est explicitement présentée comme l'observation de Frank sur ses propres films, pas comme une donnée de marché. Le tableau central (60 plans x 5 s, taux de sélection 1/4 et 1/8, trois modèles) est entièrement dérivé des tarifs fal.ai et revérifié à la main
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100, bucket good, 0 flag, 0 tiret cadratin ; unslop-text 0 high / 0 medium / 2 low tous faux positifs FR « utilise » lu comme « utilize »)
- published_commit: 0f6785c

### 2026-08-24 : MiniMax Hailuo, crédits, prix et formules expliqués
- slug: minimax-hailuo-prix-credits-formules
- locale: fr
- url: https://frankhoubre.com/blog/minimax-hailuo-prix-credits-formules
- category: guides
- type: evergreen (plan 90j J14), guide prix, 3360 mots
- search_intent: commerciale (prix / formules / crédits)
- primary_keyword: hailuo prix
- secondary_keywords: minimax crédits, hailuo abonnement, hailuo tarif api, minimax hailuo formules, coût vidéo ia
- sources: hailuoai.video/doc/payment-policy.html (politique de paiement officielle : Standard 14,99 $ / 1 000 crédits, Pro 54,99 $ / 4 500, Master 119,99 $ / 10 000, Ultra 124,99 $ / 12 000 fléchés Hailuo02, Max 199,99 $ / 20 000 + Relax Mode illimité, Unlimited 94,99 $ fermée à la vente le 18 juin 2025 et bloquée sur Hailuo01 ; crédits expirant au mois sans report ; remboursement automatique en cas d'échec ou de refus de modération) ; fal.ai/models/fal-ai/minimax/hailuo-02/standard/text-to-video et .../pro/text-to-video (0,045 $/s en 768p soit 0,27 $ les 6 s, 0,08 $/s en 1080p soit 0,48 $ les 6 s à 25 fps) ; huggingface.co/MiniMaxAI/MiniMax-H3 (fiche officielle : 4 à 15 s, base 768p, module de remontée 2K, audio stéréo natif 32 kHz, 11 langues, 24 fps, MiniMax H3 Community License Agreement). Tout relevé le 2026-08-24
- internal_links: -> /blog/hailuo-minimax-workflow-court-metrage-realiste, -> /blog/combien-facturer-video-ia-professionnelle-grille-prix, -> /blog/upscaling-video-gratuit-alternatives-topaz, -> /blog/minimax-hub-plateforme-video-ia-shanghai-juin-2026 ; liens réciproques ajoutés DEPUIS minimax-hub-plateforme-video-ia-shanghai-juin-2026 (section « Ce qu'on ne sait pas encore », paragraphe Tarification) et hailuo-minimax-workflow-court-metrage-realiste (section « Références externes et liens internes »)
- cta: aucun CTA produit, soft mention nulle ; l'article renvoie vers la grille de facturation client du site
- cannibalization_notes: le cluster MiniMax compte désormais 3 articles FR aux intentions séparées. minimax-hub-plateforme-video-ia-shanghai-juin-2026 garde la requête d'actualité « minimax hub », hailuo-minimax-workflow-court-metrage-realiste garde le how-to de production, et celui-ci prend l'intention commerciale « hailuo prix / minimax crédits ». Risque résiduel faible : aucun recouvrement de mot-clé principal, liens croisés explicites dans les trois sens
- editorial_notes: AUCUN coût en crédits par génération n'est publié. Les sources tierces donnaient quatre valeurs contradictoires pour un même format (11, 15, 25 et 80 crédits selon les pages), toutes non officielles et datées de versions différentes du modèle. L'article assume ce trou et livre à la place un protocole de mesure en 5 étapes (relever le solde avant et après une génération, réglage par réglage), qui est aussi son principal apport de valeur. Toute l'arithmétique de l'article est dérivée des chiffres officiels ci-dessus et a été revérifiée à la main (54,99/14,99 = 3,7 ; 4 500/1 000 = 4,5 ; 124,99 - 119,99 = 5 ; 12 000 - 10 000 = 2 000 ; 0,27 x 6 = 1,62 ; 0,27 x 3 = 0,81 ; 30/6 = 5). Les taux de sélection (1 sur 3, 1 sur 8) sont donnés explicitement comme les chiffres de Frank sur ses projets, pas comme une donnée de marché
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100, bucket good, 0 flag, 0 tiret cadratin ; unslop-text 0 high / 0 medium / 5 low tous faux positifs FR)
- published_commit: 2c0a007

### 2026-08-21 — ScreenWeaver : pourquoi j'ai construit mon outil d'écriture
- slug: screenweaver-pourquoi-outil-ecriture
- locale: fr
- url: https://frankhoubre.com/blog/screenweaver-pourquoi-outil-ecriture
- category: analyses
- type: evergreen (plan 90j J13), coulisses fondateur, 3241 mots
- search_intent: info / preuve (navigationnelle de marque en second)
- primary_keyword: screenweaver histoire
- secondary_keywords: outil écriture scénario ia, pourquoi screenweaver, storyboard depuis scénario, continuité production ia, alternative final draft ia
- sources: repo produit ScreenWeaver en local (messages/en.json, sections Hero, Pricing, ProblemSection, ScriptInCharge, PipelineWorkflow, WorldContinuity, FestivalProof) consulté le 2026-08-21 ; screenweaver.ai ; finaldraft.com ; fountain.io. Aucun tarif chiffré publié : le montant de l'offre Storyboard Beta n'était pas vérifiable, l'offre Filmmaker est annoncée pour fin août 2026 sans prix public
- internal_links: -> /blog/ronces-coulisses-court-film-ia, -> /blog/voidborn-anime-ia-festival-coulisses, -> /blog/lost-garden-journal-production-serie-ia, -> /blog/pourquoi-jai-construit-imaginode-canvas-ia, -> /blog/creer-bible-lieux-decor-projet-ia, -> /blog/methode-realisateur-ia-diriger-avant-generer, -> /blog/screenweaver-vs-final-draft, -> /blog/screenweaver-ai-ecriture-scenario-storyboard ; liens réciproques ajoutés DEPUIS screenweaver-ai-ecriture-scenario-storyboard (liste de fin + section Transparence) et screenweaver-vs-final-draft (fin de « Qui devrait choisir quoi »)
- cta: mention ScreenWeaver assumée (article fondateur), aucun tarif, aucune promesse contractuelle, renvoi au site pour les conditions à jour
- cannibalization_notes: le cluster ScreenWeaver compte désormais 3 articles FR aux intentions séparées. screenweaver-ai-ecriture-scenario-storyboard garde le how-to (workflow phase par phase), screenweaver-vs-final-draft garde la comparaison, et celui-ci prend l'intention « pourquoi / histoire de l'outil » sans jamais viser les mots-clés produit EN (« AI storyboard generator », « ai screenplay writer ») qui sont réservés à screenweaver.ai. Risque résiduel faible : angle narratif à la première personne, zéro page fonctionnalité
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100, bucket good, 0 flag)
- published_commit: 048d845

### 2026-08-20 — Midjourney SREF : maîtriser les références de style
- slug: midjourney-sref-references-style
- locale: fr
- url: https://frankhoubre.com/blog/midjourney-sref-references-style
- category: tutoriels
- type: evergreen (plan 90j J12), ~3500 mots
- search_intent: tutoriel / how-to
- primary_keyword: midjourney sref
- secondary_keywords: référence de style midjourney, --sw style weight, --sv version sref, cohérence visuelle série, moodboard midjourney
- sources: docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference (paramètre --sref, image ou code ou random, --sw de 0 à 1000 défaut 100, --sv) ; docs.midjourney.com/hc/en-us/articles/39193335040013-Moodboards (--p incompatible avec --sv et --sw) ; updates.midjourney.com/random-styles-in-draft-mode (officiel, 25 juin 2026 : --sref random en mode brouillon sort 24 images) ; updates.midjourney.com V8.2 (24 juillet 2026) ; geekycuriosity.substack.com/p/midjourney-v8-alpha-the-new-style (tests communautaires --sv 6 vs --sv 7, attribué comme tel dans l'article)
- internal_links: -> /blog/midjourney-guide-complet, -> /blog/comment-controler-style-visuel-generation-ia, -> /blog/secrets-prompts-rendu-photographique-ia, -> /blog/comment-eviter-effet-image-generee-ia, -> /blog/alternatives-midjourney ; liens réciproques ajoutés DEPUIS midjourney-guide-complet (section « Le paramètre SREF sur Midjourney ») et comment-controler-style-visuel-generation-ia (liste de fin)
- cta: aucun (valeur d'abord, pas de mention produit)
- cannibalization_notes: satellite mono-fonction du pilier midjourney-guide-complet, qui garde l'intention « comment utiliser midjourney » et ne consacre qu'un H2 à SREF. Cet article prend l'intention « midjourney sref » (réglages, workflow, dépannage). Distinct aussi de comment-controler-style-visuel-generation-ia, qui est une méthode outil-agnostique de séparation style/sujet. Liens croisés dans les deux sens
- checker: pass (seo_audit 0 issue pour ce slug, lint 0 err / 4 warnings préexistants, typecheck PASS, build PASS, editorial_audit : absent des listes MOYENS et WEAK, donc bucket GOOD)
- published_commit: 2654bf6
- note: RIGUEUR FACTUELLE : aucune valeur de paramètre inventée. Les plages de --sw citées comme repères personnels (20-60, 100, 200-400, 600+) sont présentées explicitement comme mes réglages de production, pas comme une table officielle. Le comportement --sv 6 vs --sv 7 est attribué à des tests communautaires, pas présenté comme documentation. Aucune affirmation sur le modèle par défaut actuel, seulement la date de sortie de V8.2 (24 juillet 2026, source officielle)
- note: passage humanizer appliqué : liste à en-têtes gras convertie en prose numérotée, parallélismes négatifs et chute-punchline en rule of three réécrits


### 2026-08-19 — Lost Garden : journal de production d'une série IA
- slug: lost-garden-journal-production-serie-ia
- locale: fr
- url: https://frankhoubre.com/blog/lost-garden-journal-production-serie-ia
- category: analyses
- type: evergreen (plan 90j J11, prévu le 2026-08-18, publié le 19 faute de run le 18)
- search_intent: informationnelle / preuve, journal de production
- primary_keyword: lost garden série ia
- secondary_keywords: journal de production série ia, continuité personnage série ia, bible de production, cohérence visuelle épisodes
- sources: oEmbed YouTube du 2026-08-19 (titre « Lost Garden - The Awakening of the Lantern Knight - Episode 1 », chaîne LostGarden Anime, youtube.com/@lostgardenanime) ; tech.ebu.ch/publications/r128 (EBU R 128, cible -23 LUFS, vérifié) ; support.google.com/youtube/answer/1722171 (réglages d'encodage recommandés, vérifié) ; contenu existant du site pour Ronces / VOIDBORN
- internal_links: -> /blog/ronces-coulisses-court-film-ia, -> /blog/voidborn-anime-ia-festival-coulisses, -> /blog/notion-ia-bible-production-film-serie, -> /blog/creer-bible-lieux-decor-projet-ia, -> /blog/workflow-complet-idee-film-ia-realiste, -> /blog/pourquoi-jai-construit-imaginode-canvas-ia, -> /blog/pourquoi-personnages-changent-chaque-scene-ia, -> /blog/film-ia-erreurs-raccord-incoherences-visuelles-eviter ; liens réciproques ajoutés DEPUIS ronces-coulisses-court-film-ia et voidborn-anime-ia-festival-coulisses
- cta: aucun (soft mention Imaginode via l'article fondateur existant)
- cannibalization_notes: vérifié contre ronces (court métrage, coulisses) et voidborn (animé, festivals) ; distinct car l'angle est la continuité entre épisodes et le système de production, pas le récit d'un film. Requête de marque « lost garden » réservée à la chaîne YouTube conformément à seo-cross-domain-strategy.md. J33 et J78 (worldbuilding, économie) restent libres, 3 articles Lost Garden max au total
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100 / 0 flag, lint 0 err, typecheck PASS, build PASS 569 pages)
- published_commit: b8c97a3
- note: RIGUEUR FACTUELLE : aucun chiffre de production inventé. Pas de durée d'épisode, pas de budget, pas de nombre d'épisodes, pas de liste d'outils figée. Tout ce qui est affirmé vient soit de l'oEmbed YouTube, soit du contenu déjà publié sur le site, soit d'un énoncé de méthode. Passage humanizer appliqué après le premier jet : suppression de 6 parallélismes négatifs « X n'est pas A, c'est B », dé-gras de la liste à en-têtes, réécriture des chutes-punchline et de la section « trois choses »
- note: images générées via render_blog_queue_nanobanana.py (Nano Banana 2). Le script n'accepte pas --slug et doit être lancé depuis PowerShell (Git Bash casse le chemin /images/...)

### 2026-08-17 — Pourquoi j'ai construit Imaginode, mon canvas IA à nodes
- slug: pourquoi-jai-construit-imaginode-canvas-ia
- locale: fr
- url: https://frankhoubre.com/blog/pourquoi-jai-construit-imaginode-canvas-ia
- category: analyses
- type: evergreen (HORS PLAN 90j : article fondateur Imaginode demandé par Frank, ne touche pas la table d'avancement du plan)
- search_intent: navigationnelle / récit fondateur + workflow
- primary_keyword: imaginode canvas ia nodes
- secondary_keywords: canvas IA à nodes, node caméra, workflow vidéo IA, imaginode avis
- sources: repo local SimpleAI (README.md, src/lib/models.ts, CameraNode.tsx, vérifiés le 2026-08-17), capture live imaginode.ai du 2026-08-17. Coûts crédits recalculés depuis models.ts (marge 1.4 image / 1.2 vidéo, crédit = 0,01 €)
- internal_links: -> /blog/ronces-coulisses-court-film-ia, -> /blog/voidborn-anime-ia-festival-coulisses, -> /blog/methode-realisateur-ia-diriger-avant-generer, -> /blog/pipeline-ia-script-storyboard-production-de-a-z ; liens réciproques ajoutés DEPUIS ronces-coulisses-court-film-ia et voidborn-anime-ia-festival-coulisses
- cta: lien externe https://imaginode.ai (produit de Frank, transparence assumée dans l'article). AUCUN code promo mentionné (correctif Frank du 2026-08-17)
- cannibalization_notes: grep "imaginode" + "canvas" dans content/ : aucun article existant sur Imaginode ; seuls comfyui-* couvrent la logique nodale, angle distinct (ComfyUI local vs SaaS, différencié explicitement dans l'article). /liens présente déjà Imaginode comme outil principal
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100, lint 0 err, typecheck PASS, build PASS). NB : les ~2000 erreurs globales du seo_audit sur ce checkout Windows sont un artefact CRLF (core.autocrlf=true casse le parseur frontmatter du script), pas des vrais problèmes de contenu
- published_commit: 93d7d46
- note: images = vrais visuels produit : hero.webp (frame hero.mp4 à 4 s), workflow-1.webp (frame about.mp4 à 3 s, graphe de nodes), workflow-2.webp (capture live imaginode.ai recadrée pour retirer le bandeau promo). C'est le 1er des 3 articles Imaginode (les 2 autres sites publient les 19 et 21/08)

### 2026-08-03 — Upscaling vidéo gratuit : les alternatives à Topaz testées
- slug: upscaling-video-gratuit-alternatives-topaz
- locale: fr
- url: https://frankhoubre.com/blog/upscaling-video-gratuit-alternatives-topaz
- category: comparatifs
- type: evergreen
- search_intent: commerciale / comparatif
- primary_keyword: topaz video ai gratuit
- secondary_keywords: upscaler vidéo gratuit, alternative topaz video ai, video2x, upscayl, real-esrgan
- sources: github.com/k4yt3x/video2x, github.com/upscayl, github.com/bloc97/Anime4K, blackmagicdesign.com/products/davinciresolve (Super Scale = Studio only, $295 one-time, verified via web search), prix Topaz repris de l'article pilier existant (vérifiés 2026-07-09)
- internal_links: -> /blog/topaz-video-ai-test-avis-restauration-video (pilier, lien réciproque ajouté le même jour), -> /blog/upscaling-video-passer-vieux-court-metrage-4k-ia, -> /blog/comfyui-guide-video-createurs-debutants, -> /blog/voidborn-anime-ia-festival-coulisses
- cta: none (comparatif outils)
- cannibalization_notes: seo-90-day-plan.md J10. Distinct du pilier topaz-video-ai-test-avis-restauration-video : celui-ci = avis/prix/test de Topaz, celui-là = intention gratuit/alternatives. Pas de chevauchement de mot-clé principal.
- checker: pass (audit 0 err/warn pour ce slug, typecheck PASS, lint 0 erreur, build PASS)
- published_commit: b48ec8a
- note: première image générée avec le nouveau pipeline Nano Banana 2 (Vercel AI Gateway), plus de Higgsfield MCP à partir de ce run (voir ERRORS_AND_BLOCKERS.md)

### 2026-08-03 — Parcours de Frank Houbre : de la guitare au cinéma IA
- slug: parcours-frank-houbre-guitare-cinema-ia
- locale: fr
- url: https://frankhoubre.com/blog/parcours-frank-houbre-guitare-cinema-ia
- category: guides
- type: evergreen
- search_intent: navigationnelle / récit
- primary_keyword: frank houbre parcours
- secondary_keywords: frank houbre biographie, mymusicteacher, business dynamite, frank houbre ia
- sources: n/a (récit personnel ; faits biographiques vérifiés contre /a-propos + confirmés directement par Frank pour la partie guitare/concurrent)
- internal_links: -> /a-propos (pilier, entrant ajouté le même jour dans la section Parcours), -> /blog/ronces-coulisses-court-film-ia, -> /blog/voidborn-anime-ia-festival-coulisses, -> /blog/methode-realisateur-ia-diriger-avant-generer
- cta: Business Dynamite (mention naturelle dans le récit) + AI Studios (soft, via /a-propos)
- cannibalization_notes: seo-90-day-plan.md J9 (MARQUE). Distinct de /a-propos : la page bio synthétise, cet article raconte en long format. Distinct de frank-houbre-formation-ai-studios (J3, angle produit/formation) : celui-ci est la trajectoire personnelle.
- checker: pass (audit 0 err/warn pour ce slug, typecheck PASS, lint 0 erreur, build PASS avec /blog/parcours-frank-houbre-guitare-cinema-ia prérendu)
- published_commit: 2edcf4c
- note: plan J9 listait aussi un lien vers /presse ; la route /presse n'existe pas dans le codebase (confirmé, ni dans src/app ni de redirect) alors que /a-propos y renvoie déjà. Lien omis ici pour éviter un lien mort ; voir ERRORS_AND_BLOCKERS.md.

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

### 2026-08-29 — Kling ou Veo 3 : quel moteur selon le type de plan
- slug: kling-vs-veo-3-choisir-par-plan
- locale: fr
- url: https://frankhoubre.com/blog/kling-vs-veo-3-choisir-par-plan
- category: comparatifs
- type: evergreen / comparatif tête à tête (plan 90j J19), ~3900 mots, arbitrage organisé par type de plan
- search_intent: comparaison (choisir entre deux moteurs vidéo avant de générer)
- primary_keyword: kling vs veo
- secondary_keywords: kling ou veo 3, veo 3.1 prix, kling 3 durée, comparatif moteur vidéo ia, audio natif veo kling, coût seconde vidéo ia
- sources: documentation Veo de l'API Gemini (ai.google.dev/gemini-api/docs/veo) : Veo 3.1 / Fast / Lite, durées 4, 6 ou 8 s, 1080p et 4K réservés aux générations de 8 s, formats 16:9 et 9:16, audio natif toujours actif, jusqu'à 3 images de référence, prolongation de scène en 720p seulement, Lite sans 4K ni prolongation, Veo 3 stable 8 s fixes en 16:9 sans image de référence ; page de tarifs de l'API Gemini (ai.google.dev/gemini-api/docs/pricing) : Veo 3.1 0,40 $/s en 720p et 1080p et 0,60 $/s en 4K, Fast 0,10 / 0,12 / 0,30, Lite 0,05 / 0,08 ; fiches et schémas fal.ai (Veo 3.1 0,20 $/s sans audio et 0,40 avec, 4K 0,40 / 0,60, Fast 0,10 / 0,15, 24 fps, 8 s par génération, prolongation jusqu'à 7 s par étape et 20 étapes soit environ 148 s ; Kling v3 Standard 0,084 / 0,126 / 0,154, Kling v3 Pro 0,112 / 0,168 / 0,196, exemple officiel 5 s avec audio et voix = 0,98 $ ; schéma Kling v3 Pro : durée 3 à 15 s seconde par seconde, formats 16:9 / 9:16 / 1:1, shot_type customize ou intelligent, sortie voix en chinois et anglais avec traduction automatique des autres langues vers l'anglais) ; sortie stable de Kling 3.0 au 2026-02-07 (Wikipédia, attribuée comme telle dans le texte)
- internal_links: -> 2026-06-19-kling-3-turbo-previsualisation-video-ia, combien-coute-court-metrage-ia-2026, bibliotheque-prompts-cinema-plans-types, workflow-kling-3-animation-fluide-realiste, google-veo-3-brief-realisateur-plan-sequence, google-flow-veo-31-edition-audio-juin-2026. Liens entrants réciproques ajoutés depuis workflow-kling-3-animation-fluide-realiste et google-veo-3-brief-realisateur-plan-sequence
- cta: aucun CTA produit. Le sujet ne s'y prêtait pas, l'article renvoie vers les guides outil du blog et vers les 3 sources officielles
- cannibalization_notes: moyen selon le plan, parade appliquée telle quelle. Le nouvel article ne fait QUE l'arbitrage entre moteurs, plan par plan ; workflow-kling-3-animation-fluide-realiste garde le pipeline Kling et google-veo-3-brief-realisateur-plan-sequence garde le brief plan séquence, et les deux le disent explicitement. Distinct aussi de pika-labs-vs-runway-choisir-moteur-plan-action (autre paire de moteurs) et de meilleurs-outils-ia-video (panorama Sora / Runway / Higgsfield / Pika). Angle différenciant : la limite de langue de l'audio Kling (pas de voix française native) comme critère de tri numéro un
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit 0 flag / bucket good / 9 H2 / 15 H3 / 6 liens internes / 3 externes / FAQ 8 questions / 2 tableaux comparatifs, unslop-text 1 finding faux positif français, 0 tiret cadratin, build PASS, article prérendu)
- published_commit: 59a5407
### 2026-08-28 — Prompts cinéma : 40 plans types qui marchent vraiment
- slug: bibliotheque-prompts-cinema-plans-types
- locale: fr
- url: https://frankhoubre.com/blog/bibliotheque-prompts-cinema-plans-types
- category: guides
- type: evergreen / ressource (plan 90j J18), 4950 mots, 40 blocs de prompts numérotés
- search_intent: info (trouver des formulations de prompt prêtes à l'emploi par valeur de plan)
- primary_keyword: prompt cinéma ia
- secondary_keywords: prompt plan cinéma, bibliothèque de prompts, valeur de plan ia, prompt plan d'ensemble, prompt gros plan, prompt travelling
- sources: guide officiel de prompt pour la génération vidéo de Google Cloud (cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide) : découpage en sujet / action / décor et contexte / angle de caméra / mouvement de caméra / optique et effets / style visuel, avertissement explicite de la doc selon lequel certains angles et certaines optiques avancées ne sont pas officiellement supportés et que leur fiabilité varie, plus le vocabulaire cité mot pour mot (eye-level, low-angle, high-angle, bird's-eye, worm's-eye, dutch angle, close-up, extreme close-up, medium, full, wide/establishing, over-the-shoulder, POV, static, pan, tilt, dolly, truck, pedestal, zoom, crane, aerial, handheld, whip pan, arc, rack focus, effet vertigo alias dolly zoom) ; doc vidéo de l'API Gemini (ai.google.dev/gemini-api/docs/video) ; theasc.com. Les 40 blocs de prompt sont une construction maison, présentée comme telle, pas une citation. Aucun chiffre de fiabilité inventé : les trois affirmations de ce type sont formulées en observation personnelle.
- internal_links: -> comment-ecrire-prompt-cinematic-ultra-realiste-ia, comment-utiliser-objectifs-camera-dans-prompt-ia, comment-construire-scene-cinematique-plan-par-plan, prompt-negatif-video-ia-a-quoi-ca-sert, /outils/generateur-prompt-cinema ; entrants réciproques ajoutés depuis comment-ecrire-prompt-cinematic-ultra-realiste-ia et comment-construire-scene-cinematique-plan-par-plan
- cta: doux, vers l'outil gratuit /outils/generateur-prompt-cinema, décrit avec ses vrais champs relevés dans page.tsx. Aucune mention ScreenWeaver, le sujet ne s'y prêtait pas.
- cannibalization_notes: moyen avec comment-ecrire-prompt-cinematic-ultra-realiste-ia, parade appliquée comme prévu au plan. L'existant garde la MÉTHODE d'écriture, le nouveau est la BIBLIOTHÈQUE d'exemples classés par valeur de plan. La distinction est écrite dans les deux articles et les deux se lient. Même séparation tenue avec comment-utiliser-objectifs-camera-dans-prompt-ia (focales), comment-decrire-lumiere-directeur-photo-prompt (lumière) et comment-construire-scene-cinematique-plan-par-plan (découpage) : le nouvel article renvoie vers eux plutôt que de refaire leur travail.
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100 / bucket good / 0 flag / 11 H2 / 8 liens internes / 3 externes / FAQ 8 questions, build PASS 575 pages, article prérendu). Fichier écrit en LF pour éviter l'artefact CRLF du checker.
- published_commit: 502530a

### 2026-08-27 — Adobe Firefly 5 testé : ce qui change vraiment en 2026 (UPDATE)
- slug: adobe-firefly-avis
- locale: fr
- url: https://frankhoubre.com/blog/adobe-firefly-avis
- category: comparatifs
- type: UPDATE d'un article existant (plan 90j J17), pas une création. URL et date d'origine 2026-04-23 préservées, dateModified 2026-08-27, 2798 -> 3623 mots
- search_intent: commerciale (choisir ou garder Firefly après la sortie d'Image 5)
- primary_keyword: adobe firefly 5
- secondary_keywords: firefly image model 5, adobe firefly avis, firefly modèles personnalisés, firefly 4 mégapixels, prompt to edit
- sources: news.adobe.com/news/2025/10/adobe-max-2025-firefly (Image Model 5 en bêta publique le 2025-10-28, génération native 4 MP sans upscale, portraits anatomiquement plus justes, Prompt to Edit, Layered Image Editing annoncée « in development ») ; blog.adobe.com 2026-03-19 (Image Model 5 « now generally available », modèles personnalisés en bêta publique orientés personnage/illustration/photo, plus de 30 modèles dont Nano Banana 2, Veo 3.1, Runway Gen-4.5, Kling 2.5 Turbo, Quick Cut, Project Moonlight en bêta privée) ; blog.adobe.com 2026-04-09 (AI Markup disponible, Precision Flow en bêta, Generative Fill/Remove/Expand/Upscale) ; blog.adobe.com 2026-06-18 (assistant Firefly en bêta publique, Creative AI Studio en bêta privée avec Elements et Projects) ; blog.adobe.com 2026-08-20 (Generate Music, Speech et Sound Effects en disponibilité générale). AUCUN tarif publié : pages de plans Adobe et helpx crédits génératifs en timeout, sources tierces contradictoires. Deux affirmations marquées comme observations personnelles (fragilité du texte dans l'image, zones anatomiques à vérifier).
- internal_links: -> alternatives-midjourney, ideogram-recraft-leonardo-comparatif, comment-generer-images-ia-photorealistes-sans-effet-plastique, comment-ecrire-prompt-cinematic-ultra-realiste-ia, photoshop-firefly-etendre-plans-ia-generative, meilleur-generateur-image-ia, midjourney-guide-complet ; entrant réciproque ajouté depuis photoshop-firefly-etendre-plans-ia-generative comme prévu au plan
- cta: aucun CTA produit, article de test pur
- cannibalization_notes: nul par construction, l'UPDATE renforce l'existant au lieu de créer un doublon. Distinction maintenue avec photoshop-firefly-etendre-plans-ia-generative : là-bas l'extension de plan dans Photoshop, ici le test du modèle et le choix d'outil. Lien croisé dans les deux sens.
- checker: pass (seo_audit 0 issue pour ce slug et total en baisse 1990 -> 1986 grâce à la réécriture en LF, editorial_audit score 100 / bucket good / 0 flag / 11 H2 / 10 liens internes / 7 externes, build PASS, article prérendu)
- published_commit: 4c565e4

### 2026-08-26 — Intégrer l'IA dans une boîte de production en 6 semaines
- slug: integrer-ia-boite-production-depart
- locale: fr
- url: https://frankhoubre.com/blog/integrer-ia-boite-production-depart
- category: guides
- type: evergreen / guide décideur B2B (plan 90j J16)
- search_intent: commerciale (dirigeant de structure qui veut démarrer l'IA)
- primary_keyword: ia boîte de production
- secondary_keywords: intégrer ia entreprise production, pilote ia audiovisuel, ia agence vidéo, transparence ia contenu généré
- sources: article 50 du règlement (UE) 2024/1689 via artificialintelligenceact.eu/article/50 (obligations applicables depuis le 2026-08-02, transition de 4 mois jusqu'au 2026-12-02 pour le marquage lisible par machine des systèmes mis sur le marché EEE avant le 2026-08-02, divulgation côté déployeurs, exception œuvres limitée à révéler l'existence du contenu généré) ; code de bonnes pratiques de la Commission sur la transparence des contenus générés par IA via digital-strategy.ec.europa.eu (publié le 2026-06-10, environ 190 signataires fin juillet 2026, adhésion volontaire) ; texte de référence sur eur-lex.europa.eu/eli/reg/2024/1689/oj. Recoupé par recherche web le 2026-08-26 : le Digital Omnibus sur l'IA (en vigueur le 2026-07-27) n'a PAS reporté le gros de l'article 50. Tarif conseil 4 200 EUR HT/jour relevé dans src/app/prestation/page.tsx. Aucun chiffre inventé ; deux fabrications du premier jet supprimées à la passe antislop-copywriting (une statistique « la moitié des cas » et un prix « 40 000 € »).
- internal_links: -> /prestation (pilier), /outils/calculateur-budget-production-ia, clause-contrat-client-contenu-genere-ia, checklist-avant-livrer-video-ia-client, combien-coute-court-metrage-ia-2026, formation-interne-equipe-creative-ia, comment-optimiser-workflow-ia-gagner-temps ; entrants réciproques ajoutés depuis formation-interne-equipe-creative-ia et comment-optimiser-workflow-ia-gagner-temps
- cta: /prestation (mission de conseil, cadrage en une journée)
- cannibalization_notes: distinct de formation-interne-equipe-creative-ia (programme de montée en compétence, qui vient APRÈS le pilote) et de comment-optimiser-workflow-ia-gagner-temps (optimisation individuelle, pas structurelle). Ici : le démarrage cadré au niveau de la structure. La distinction est écrite explicitement dans les trois articles.
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100 / bucket good / 0 flag, build PASS 574 pages, article prérendu)
- published_commit: f16bdae

### 2026-08-30 — Métiers de l'audiovisuel face à l'IA : les chiffres 2026
- slug: metiers-audiovisuel-ia-menaces-transformation-avis
- locale: fr
- url: https://frankhoubre.com/blog/metiers-audiovisuel-ia-menaces-transformation-avis
- category: analyses
- type: UPDATE d'un article existant (plan 90j J20), pas une création. URL et date d'origine 2026-04-14 préservées, dateModified 2026-08-30, 2804 -> 4388 mots, 10 -> 12 H2, FAQ 9 -> 11 questions. Titre 71 -> 56 caractères, mot-clé remonté en tête
- search_intent: info (professionnel de l'audiovisuel qui veut savoir si son métier bouge, et de combien)
- primary_keyword: métiers audiovisuel ia
- secondary_keywords: métier audiovisuel menacé ia, emploi audiovisuel intelligence artificielle, storyboarder ia, comédien doublage ia, monteur son ia, étiquetage deepfake obligation
- sources: observatoires.afdas.com/observatoires/audiovisuel, Observatoire des métiers de la culture et des médias à l'heure de l'IA (Audiens + Afdas + CNC), trois notes de conjoncture relevées le 2026-08-30 : storyboarders mai 2025 (effectifs en légère hausse ces dernières années 2024 compris malgré les tensions de l'animation, aucun impact net positif ou négatif observable à date, polarisation anticipée entre studios d'originalité et productions standardisées glissant vers de la supervision) ; comédiens de doublage 2025-10-07 (léger recul du secteur sur deux ans attribué à la baisse de production de séries de plateformes et de contenus étrangers à doubler et non aux outils, comédiens pas directement affectés à date, voix de synthèse jugées trop mécaniques sur les productions exigeantes, segments exposés = personnages secondaires, documentaire, animation jeunesse, vidéo en ligne, facteur décisif cité = acceptation du public) ; monteurs son et mixeurs 2026-07-30 (+31 % d'effectifs entre 2018 et 2022 puis stables au-dessus du niveau d'avant pandémie, aucun impact négatif de l'IA documenté, tâches automatisées = débruitage, restauration d'enregistrements, indexation de sonothèques, aide au conformage, conclusion citée telle quelle). Cadre légal : article 50 du règlement (UE) 2024/1689, lignes directrices de la Commission sur digital-strategy.ec.europa.eu et lecture article par article sur artificialintelligenceact.eu/transparency-rules-article-50 (applicable depuis le 2026-08-02, exception pour l'œuvre manifestement artistique limitée à révéler l'existence du contenu généré sans entraver l'affichage ou la jouissance de l'œuvre, exception de contrôle éditorial humain substantiel pour le texte d'intérêt public, marquage lisible par machine côté fournisseurs avec transition jusqu'au 2026-12-02)
- internal_links: -> integrer-ia-boite-production-depart (nouveau), doublage-voix-off-cloner-diriger-voix-film, comment-se-differencier-marche-ia-creative, distribution-film-ia-strategies-visibilite-2026, generation-video-nouveaux-outils-changements-realisateurs. Liens entrants réciproques créés depuis integrer-ia-boite-production-depart (section « Qui fait quoi dans l'équipe ») et doublage-voix-off-cloner-diriger-voix-film (avant les références externes) : aucun article ne pointait vers ce pilier avant ce run
- cta: aucun CTA produit, article d'analyse pur
- cannibalization_notes: nul par construction, l'UPDATE renforce l'existant au lieu de créer un doublon. Ce fichier reste le pilier CINEMA du cluster métiers ; les satellites prévus au plan (J21 monteur-video-ia-evolution-metier, J43, J71, J74) devront pointer vers lui et recevoir un lien retour à leur sortie. Aucun taux d'adoption des studios d'animation, de postproduction et de VFX publié : les pourcentages trouvés en ligne n'étaient rattachés à aucune édition précise du baromètre CNC, refus assumé et écrit dans l'article
- checker: pass (seo_audit 0 issue pour les 3 slugs FR touchés, editorial_audit score 94 -> 100 / bucket good / 0 flag / 12 H2 / 8 liens internes / 6 externes / 3 images / 0 tiret cadratin, lint 0 err, typecheck PASS, build PASS 576 pages article prérendu, build_ledger régénéré 0 undefined). Fichier réécrit en LF comme aux J17, J18 et J19. Correction factuelle au passage : lien vidéo « Business Dynamite » qui pointait vers une vidéo Seedance 2 sans rapport, vérifié par oEmbed puis supprimé
- published_commit: e429cb5

### 2026-09-01 — Monteur vidéo et IA : ce qui change vraiment au banc
- slug: monteur-video-ia-evolution-metier
- locale: fr
- url: https://frankhoubre.com/blog/monteur-video-ia-evolution-metier
- category: analyses
- type: evergreen / analyse métier, satellite du pilier métiers (plan 90j J21). Publié le 2026-09-01 au lieu du 2026-08-31 prévu, aucun run le 31 août, le calendrier glisse d'un jour donc J22 = 2026-09-02
- search_intent: info (monteur en poste qui veut savoir ce que l'IA lui prend vraiment, et quoi faire de son tarif)
- primary_keyword: monteur vidéo ia
- secondary_keywords: montage vidéo ia métier, assistant monteur ia, intelliscript resolve, media intelligence premiere, generative extend limites, tarif monteur ia
- sources: documentation officielle Adobe relevée le 2026-09-01, helpx Generative Extend FAQ (vidéo prolongée jusqu'à 2 s, audio jusqu'à 10 s, clip source d'au moins 2 s en vidéo et 3 s en audio, dialogue NON prolongé et mis en sourdine pendant l'extension, seuls ambiance / fond / effets générés, cloud Firefly, crédits génératifs requis) et blog Adobe FR du 2025-04-02 sur Premiere Pro 25.2 (Media Intelligence identifie objets, lieux et angles de prise de vue avec recherche en langage naturel sur visuels, transcriptions et métadonnées, analyse LOCALE sur la machine sans connexion internet, Content Credentials, 4K, traduction automatique des sous-titres annoncée sur 27 langues) ; Blackmagic Design, page What's New de DaVinci Resolve (version courante Resolve 21, IntelliScript prend en charge Final Draft et le texte brut pour assembler des timelines, AI IntelliSearch retrouve personnes, objets et mots du dialogue, Magic Mask en un clic) et annonce Resolve 20 d'avril 2025 (plus de 100 nouveautés, IntelliScript compare le texte du scénario à l'audio transcrit et construit le montage de la scène avec les prises alternatives sur des pistes supplémentaires, AI Multicam SmartSwitch assemble selon la détection du locuteur), page Studio (DaVinci Neural Engine réservé à Resolve Studio, 295 dollars en licence perpétuelle) ; observatoires.afdas.com/observatoires/audiovisuel, Observatoire des métiers de la culture et des médias à l'heure de l'IA (Audiens + Afdas + CNC), trois notes seulement à ce jour (storyboarders mai 2025, comédiens de doublage octobre 2025, monteurs son et mixeurs juillet 2026 avec +31 % d'effectifs entre 2018 et 2022 puis stables et aucun impact négatif documenté) et AUCUNE note sur les monteurs image. Aucun chiffre inventé ; aucun pourcentage de remplacement des monteurs publié, refus assumé et écrit dans l'article
- internal_links: -> metiers-audiovisuel-ia-menaces-transformation-avis (pilier, 2 fois), guide-complet-montage-video-assiste-intelligence-artificielle, parametrer-rythme-montage-ads-ia-15s-30s, integrer-ia-boite-production-depart, combien-facturer-video-ia-professionnelle-grille-prix. Liens entrants réciproques ajoutés depuis metiers-audiovisuel-ia-menaces-transformation-avis (section « Montage et postproduction », ce qui pose le premier des liens vers satellites prévus au J20) et guide-complet-montage-video-assiste-intelligence-artificielle (section « Core concepts »)
- cta: aucun CTA produit, article d'analyse ; ScreenWeaver volontairement non mentionné, le sujet ne s'y prêtait pas
- cannibalization_notes: parade du plan appliquée telle quelle. Le pilier garde la vue d'ensemble de tous les postes, guide-complet-montage garde la MÉTHODE de montage, parametrer-rythme-montage-ads-ia-15s-30s garde le rythme des formats courts, comment-monter-video-ia-capcut-comme-un-pro garde la variante outil ; ce fichier ne traite QUE le métier (ce que les outils prennent fonction par fonction, ce qu'ils ne prennent pas, repositionnement tarifaire). Angles différenciants : aucune note de conjoncture ne couvre les monteurs image donc aucun chiffre français n'est disponible, IntelliScript et SmartSwitch supposent un script ou des locuteurs identifiables donc le documentaire d'observation est hors de portée de l'assemblage automatique, et le transfert de charge tombe sur l'assistant monteur et non sur le chef monteur
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100 / bucket good / 0 flag / 3718 mots / 10 H2 / 9 liens internes / 3 externes / 3 images / 0 tiret cadratin, lint 0 err, typecheck PASS, build PASS, build_ledger régénéré 301 FR 232 EN). Fichier écrit en LF comme aux J17 à J20. Images générées via PowerShell : lancé depuis Git Bash, MSYS convertit l'argument --dest et le script écrit hors du repo
- published_commit: 047a95c

### 2026-09-02 — Audit IA en entreprise : la méthode que j'applique
- slug: audit-workflow-ia-methode-mission
- locale: fr
- url: https://frankhoubre.com/blog/audit-workflow-ia-methode-mission
- category: business
- type: evergreen / méthode-preuve B2B, satellite commercial de /prestation (plan 90j J22). Publié le 2026-09-02 comme prévu après le décalage du J21, le calendrier ne glisse pas ce jour donc J23 = 2026-09-03
- search_intent: commerciale (dirigeant ou directeur de production qui a déjà une chaîne IA qui tourne, qui paie des abonnements et qui veut savoir ce que ça vaut avant de trancher)
- primary_keyword: audit ia entreprise production
- secondary_keywords: audit workflow ia, audit ia en entreprise, méthode audit ia, temps de cycle production ia, littératie IA article 4, conformité AI Act déployeur, coût réel étape production ia
- sources: FAQ officielle « AI Literacy - Questions & Answers » de la Commission européenne, digital-strategy.ec.europa.eu, consultée et capturée le 2026-09-02 (article 4 applicable depuis le 2025-02-02 ; obligation pesant sur les fournisseurs ET les déployeurs de prendre des mesures pour développer la littératie IA du personnel et des personnes opérant les systèmes pour leur compte ; « The supervision and enforcement rules apply from 3 August 2026 onwards » et, dans une autre réponse de la même page, « as of 2 August 2026 », les deux dates sont signalées dans l'article ; supervision par les autorités nationales de surveillance du marché et non par le bureau de l'IA ; amendement Digital Omnibus entré en vigueur mi juillet 2026, obligation maintenue mais plus de niveau déterminé mandaté ; « There is no need for a certificate. Organisations can keep an internal record of trainings and/or other guiding initiatives ») ; artificialintelligenceact.eu/article/50 (transparence du déployeur sur les deepfakes depuis le 2026-08-02, exception des œuvres manifestement artistiques, créatives, satiriques ou de fiction limitée à révéler l'existence du contenu généré d'une manière qui n'entrave pas l'affichage ni la jouissance de l'œuvre, exception du contrôle éditorial humain avec responsabilité éditoriale identifiée pour le texte) ; cnil.fr/fr/quel-est-le-perimetre-des-fiches-pratiques-sur-lia, cité mot pour mot (les fiches « concernent uniquement la phase de développement de systèmes d'IA, et non celle de déploiement », la phase de déploiement consistant à mettre en usage le système développé) ; src/app/prestation/page.tsx pour le tarif public de 4 200 € HT/jour et la liste des interventions. Les 3 URL externes testées au curl avant insertion, les 3 répondent 200. AUCUN chiffre de résultat de mission inventé : pas de ROI, pas de pourcentage d'économie, pas de nombre de missions ; un seuil « plus de 15 % » du premier jet a été retiré du tableau faute de source et reformulé en qualitatif
- internal_links: -> comment-optimiser-workflow-ia-gagner-temps, formation-interne-equipe-creative-ia, combien-facturer-video-ia-professionnelle-grille-prix, integrer-ia-boite-production-depart, metiers-audiovisuel-ia-menaces-transformation-avis, /outils/calculateur-budget-production-ia, /prestation (2 fois). Liens entrants réciproques ajoutés le même jour depuis integrer-ia-boite-production-depart (fin de la section « Comment savoir si le pilote a marché », là où le lecteur vient de terminer son pilote) et comment-optimiser-workflow-ia-gagner-temps (section « Mesures qui mentent moins que l'ego », là où les métriques individuelles appellent leur version équipe). Aucun lien vers /presse, la route n'existe toujours pas
- cta: soft CTA vers /prestation, deux mentions factuelles dont une portant le tarif public de 4 200 € HT/jour ; ScreenWeaver volontairement non mentionné, le sujet ne s'y prêtait pas
- cannibalization_notes: parade du plan appliquée et élargie après vérification des quatre voisins. integrer-ia-boite-production-depart garde le DÉMARRAGE (boîte qui part de zéro, pilote de six semaines), comment-optimiser-workflow-ia-gagner-temps garde l'optimisation individuelle du temps de travail, formation-interne-equipe-creative-ia garde la montée en compétence de l'équipe, workflow-ia-creatif garde le pipeline technique image/vidéo/voix. Ce fichier ne traite QUE le DIAGNOSTIC d'un existant qui tourne déjà : cadrage du périmètre, inventaire jour 1, mesure du temps de travail / temps de cycle / taux de reprise, catalogue des six fuites, volet légal déployeur, livrable et plan à 90 jours. La distinction est écrite dans le corps (« tu as besoin d'un démarrage cadré avant d'avoir besoin d'un audit »). Angles différenciants : la littératie IA de l'article 4 traitée comme une ligne d'audit concrète et pas comme une abstraction juridique, le périmètre des fiches CNIL qui ne couvrent PAS le déploiement, et l'écart temps de travail / temps de cycle posé comme l'indicateur numéro un d'une boîte qui a intégré l'IA
- checker: pass (seo_audit 0 issue sur les 3 fichiers FR touchés, baseline mesurée par git stash à 1991 erreurs avant et 1983 après, soit 8 de moins que le dépôt ; editorial_audit score 100 / bucket good / 0 flag / 4858 mots comptés par l'audit / 13 H2 / 11 liens internes / 3 externes / 3 images / 0 tiret cadratin, et les 2 articles porteurs des liens entrants restent à 100 ; lint 0 err, typecheck PASS, build PASS 578 pages article prérendu, build_ledger régénéré 302 FR 232 EN business 18 -> 19 0 undefined). Fichier écrit en LF. Attention : un git stash push/pop reconvertit les fichiers en CRLF avec core.autocrlf=true, renormaliser APRÈS le pop. Images : 2 stills Nano Banana 2 générés depuis PowerShell (le script n'accepte pas --slug, seulement --dest et --prompt) plus une vraie capture d'écran de la FAQ AI Literacy de la Commission ; .loop_scripts/screenshot_url.sh est macOS-only et inutilisable ici, contourné par Chrome headless Windows plus Pillow. L'article a été écrit avec l'outil Write, le heredoc bash mangeant les apostrophes droites
- published_commit: 9441a25

### 2026-09-03 — Reverse prompting : retrouver le prompt d'une image IA
- slug: reverse-prompting-methode-complete
- locale: fr
- url: https://frankhoubre.com/blog/reverse-prompting-methode-complete
- category: tutoriels
- type: evergreen / tutoriel PROD, satellite de l'outil /outils/reverse-prompting-image-ia (plan 90j J23). Publié le 2026-09-03 comme prévu, le calendrier ne glisse pas, donc J24 = 2026-09-04
- search_intent: info (créateur qui a une image de référence qu'il n'arrive pas à reproduire et qui cherche à en récupérer ou reconstruire le prompt)
- primary_keyword: reverse prompting
- secondary_keywords: retrouver prompt image ia, métadonnées image ia, png info automatic1111, workflow comfyui métadonnées, c2pa content credentials, synthid gemini, midjourney describe
- sources: docs.comfy.org/development/api-development/workflow-metadata relevé le 2026-09-03 (champs `workflow` et `prompt`, entrées texte en PNG, chaînes EXIF `workflow:{JSON}` et `prompt:{JSON}` en WebP animé, tags de conteneur en MP4/WebM, restauration par glisser-déposer ou File > Open, échecs avec --disable-metadata, ré-encodage tiers et nettoyage à l'upload par les plateformes sociales, workflow récupéré sans modèles ni nœuds personnalisés, consigne explicite de traiter la métadonnée embarquée comme entrée facultative et non fiable) ; wiki Features d'AUTOMATIC1111/stable-diffusion-webui (paramètres de génération ajoutés au PNG en text chunk, relecture par tout inspecteur de chunks PNG) ; spécification C2PA (action c2pa.created avec digitalSourceType trainedAlgorithmicMedia, compositeWithTrainedAlgorithmicMedia pour un composite partiellement génératif) ; contentcredentials.org/verify (formats acceptés et avertissement officiel de déploiement encore partiel, relevés sur la capture publiée dans l'article) ; support.google.com/gemini/answer/16722517 sur SynthID (100 Mo max, vidéo < 90 s, audio < 1 h, environ 10 vérifications par type de contenu sur 24 h glissantes, absence de tatouage = pas une IA Google mais possiblement une autre IA, cas indécis quand le contenu manque de détails ou la retouche est trop légère) ; docs.midjourney.com, page Describe (4 suggestions de prompt, upload ou URL, Discord et web, prompts plus longs sur les versions récentes). Aucun chiffre de fiabilité inventé ; les seuls chiffres personnels (trois tours de correction, coupe de moitié au-delà de 80 mots, quatre seeds par tour) sont donnés comme ma pratique
- internal_links: -> comment-utiliser-objectifs-camera-dans-prompt-ia, bibliotheque-prompts-cinema-plans-types, comment-ecrire-prompt-cinematic-ultra-realiste-ia, erreurs-prompt-qui-rendent-image-ia-artificielle, /outils/reverse-prompting-image-ia. Liens entrants réciproques ajoutés depuis erreurs-prompt-qui-rendent-image-ia-artificielle (fin du « Workflow de correction en 8 minutes ») et comment-ecrire-prompt-cinematic-ultra-realiste-ia (liste « Liens utiles dans la série AI Studio »)
- cta: lien vers l'outil maison de reverse prompting, placé dans le tableau comparatif avec ses limites écrites honnêtement (reste une reconstruction, à tester puis corriger). Pas de mention ScreenWeaver, le sujet ne s'y prêtait pas
- cannibalization_notes: cluster prompt = le plus dense du site, cinq voisins ouverts un par un. comment-ecrire-prompt-cinematic-ultra-realiste-ia garde la MÉTHODE d'écriture depuis une page blanche, bibliotheque-prompts-cinema-plans-types garde la banque d'exemples copiables, erreurs-prompt-qui-rendent-image-ia-artificielle garde le catalogue des tics de langage, pourquoi-ton-prompt-ne-marche-pas-comment-corriger garde le diagnostic d'un prompt déjà écrit, comment-utiliser-objectifs-camera-dans-prompt-ia garde les focales. Ce fichier ne traite QUE la rétro-ingénierie d'une image EXISTANTE et la distinction est écrite dans le corps. Angle différenciant : les contenus français du sujet ne couvrent que le niveau « modèle de vision qui devine », l'article impose l'ordre métadonnées > provenance signée > description en 7 couches > boucle de test, et explique pourquoi 9 images sur 10 trouvées en ligne n'ont plus rien à lire
- checker: pass (seo_audit 0 issue pour ce slug, editorial_audit score 100 / bucket good / 0 flag / 4453 mots / 12 H2 / 8 liens internes / 4 externes / 3 images / 0 tiret cadratin, lint 0 err, typecheck PASS, build PASS, build_ledger régénéré 303 FR 232 EN). Fichier écrit en LF. Les deux articles recevant un lien entrant ont été normalisés en LF au passage, ce qui fait tomber le seo_audit FR de 1983 à 1975 erreurs (artefact CRLF de checkout qui cassait le parsing de leur frontmatter). Images : hero Nano Banana 2 (salle d'archives photo la nuit, table lumineuse, loupe sur un tirage 35 mm) puis DEUX VRAIES CAPTURES au lieu de stills générés, conformément à la priorité captures quand l'article parle d'outils : docs.comfy.org page Workflow Metadata et contentcredentials.org/verify, vérifiées à l'écran et légendées avec source et date. .loop_scripts/screenshot_url.sh est codé en dur pour le Chrome macOS et échoue sur Windows, contourné par un équivalent en scratchpad de session, aucun fichier du repo modifié
- published_commit: 05beb67
