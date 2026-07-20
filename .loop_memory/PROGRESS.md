# PROGRESS.md — Loop state (read at start of every run, update at end)

## Last run: 2026-07-20 (Run 23 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-17 (batch 22: 3 articles).
- WebSearch for real news in last 72h: found Kimi K3 Moonshot AI launch July 16-17, 2026
  (Bloomberg, CNBC, Fortune confirmed: 2.8T parameter MoE model, 1M token context, open weights
  promised July 27) and WAICO formation at WAIC Shanghai July 16-17, 2026 (Al Jazeera, Xinhua,
  CGTN confirmed: 29-nation AI governance org founded by China at World AI Conference).
- Plan 90 jours J8 (2026-07-20): dzine-image-animator-tutoriel
  (cluster OUTILS, mot-clé "dzine ai image animator", pos 7.1, 59 imp).
  Liens vers /blog/dzine-ia (pilier), /blog/comment-transformer-image-ia-video-fluide-credible.
  Anti-cannibalisation : satellite mono-fonction du pilier dzine-ia (qui couvre l'ensemble pipeline).
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a889b945.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-20.json --start 0 --end 1 then --start 2 --end 3
  from worktree). Images written to main repo public/. Copied to worktree before staging.
- Bug fix: mastering-loudness-pub-reseaux-sociaux-ia (FR+EN) had <= in Markdown table
  causing MDX parse error. Fixed to "max -1 dBTP". Build passed after fix.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (553 pages, 3 new articles prerendered + 2 MDX fixes).
- Cleaned main repo image dirs, merged fast-forward into main (44c0911), pushed origin/main.

### Articles published this run
1. `kimi-k3-moonshot-modele-ia-chinois-juillet-2026` (actualite)
2. `waico-chine-alliance-ia-mondiale-waic-shanghai-2026` (actualite)
3. `dzine-image-animator-tutoriel` (tutoriels/evergreen — plan 90j J8)

### Technical note this run
- Working tree: agent-a889b945 (current worktree). Articles committed directly.
- Image generation: ran from worktree dir, but script wrote to main repo public/ (standard behavior).
  Copied to worktree before git add.
- Build went 544 -> 553 pages (+3 articles + EN translations from translation loop).
- Bug fixed: mastering-loudness-pub-reseaux-sociaux-ia used <= in table cell which MDX
  parsed as JSX tag start. Fixed to "max". This was a pre-existing article from the translation loop.
- Merge: no conflict (image dirs cleaned from main before merge). Fast-forward OK.
- SEO audit 0 errors confirmed.
- Plan 90 jours J8 (dzine-image-animator-tutoriel) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J9 = `parcours-frank-houbre-guitare-cinema-ia`
   (cluster MARQUE, mot-clé "frank houbre parcours / frank houbre biographie", pos navigationnelle).
   Liens vers /a-propos (pilier), /presse. Anti-cannibalisation: l'article raconte (narratif long),
   /a-propos synthétise. Décrire le parcours guitare -> cinéma -> IA.
   [données Frank] requis : n'inventer aucun fait biographique. Décaler si données absentes.
2. News to watch: Kimi K3 open weights drop (announced July 27 — confirm if happened),
   Meta Muse Video official launch (previewed July 7 — watch for GA),
   WAICO first regulatory moves, Google Gemini 3.5 Pro GA updates,
   Anthropic new pricing after Fable 5 paywall switch (July 20 = day 1 paid).
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-17 (Run 22 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-16 (batch 21: 3 articles).
- WebSearch for real news in last 72h: found Apple Intelligence approuvé en Chine avec
  Alibaba Qwen (TechCrunch, Yahoo Finance, The Next Web, 15 juillet 2026)
  et PrismML Bonsai 27B premier modèle 27B sur iPhone (9to5Mac, prismml.com, MarkTechPost,
  14 juillet 2026).
- Plan 90 jours J7 (2026-07-17): voidborn-anime-ia-festival-coulisses
  (cluster CAS, mot-clé "animé ia festival", PAA voidborn). Données réelles uniquement
  (festivals, prix tirés de press.ts : Seoul, Hollywood, Australia, Bangkok, etc.).
  Liens vers ronces-coulisses-court-film-ia, illustrations-manga-anime-ia,
  pipeline-ia-script-storyboard-production-de-a-z.
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a2e5d366.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-17.json --start 0 --end 1 then --start 2 --end 3
  from worktree). Images written to main repo public/. Copied to worktree before staging.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (544 pages, 3 new articles prerendered, up from 539).
- Cleaned main repo image dirs, merged fast-forward into main, pushed origin/main (e2122ac).

### Articles published this run
1. `apple-intelligence-chine-alibaba-qwen-approbation-juillet-2026` (actualite)
2. `prismml-bonsai-27b-modele-ia-iphone-juillet-2026` (actualite)
3. `voidborn-anime-ia-festival-coulisses` (guides/evergreen — plan 90j J7)

### Technical note this run
- Working tree: agent-a2e5d366 (current worktree). Articles committed directly.
- Image generation: ran from worktree dir, but script wrote to main repo public/ (standard behavior).
  Copied to worktree before git add.
- Build went 539 -> 544 pages (+3 articles + EN translations from translation loop).
- Merge: no conflict (image dirs cleaned from main before merge). Fast-forward OK.
- SEO audit 0 errors confirmed.
- Plan 90 jours J7 (voidborn-anime-ia-festival-coulisses) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J8 = `dzine-image-animator-tutoriel`
   (cluster OUTILS, mot-clé "dzine ai image animator", pos 7.1, 59 imp).
   Liens vers dzine-ia (pilier, entrant depuis lui), comment-transformer-image-ia-video.
   Anti-cannibalisation : satellite mono-fonction du pilier dzine-ia.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17 or July 24 fallback — check if launched),
   Claude Fable 5 paywall bascule (July 19 deadline), World AI Conference Shanghai (July 17-18),
   Meta infrastructure announcements, Anthropic IPO timeline.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-16 (Run 21 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-14 (batch 20: 3 articles).
- WebSearch for real news in last 72h: found PixVerse levée de fonds 439M$ Series C
  (TechCrunch, Yahoo Finance, VentureBurn, TNGlobal, pixverse.ai confirmed, 13 juillet 2026)
  et Claude Fable 5 accès gratuit prolongé jusqu'au 19 juillet 2026
  (BleepingComputer, Forbes, Dataconomy, TechTimes confirmed, 12-13 juillet 2026).
- Plan 90 jours J6 (2026-07-16): doublage-ia-alternatives-heygen-comparatif
  (cluster OUTILS, mot-clé "alternatives heygen doublage", PAA HeyGen pos 5.8-9.6).
  Liens vers heygen-elevenlabs-comparatif (pilier), synchronisation-labiale,
  doublage-voix-off-cloner-diriger-voix-film.
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a3536ac9.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-16.json --start 0 --end 1 then --start 2 --end 3
  from worktree). Images written to worktree public/ directly.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (539 pages, 3 new articles prerendered, up from 532).
- Staged explicit paths (3 .md + 3 hero.webp), committed bb4942d in worktree.
- Merged fast-forward into main, pushed origin/main (2a09e36).

### Articles published this run
1. `pixverse-439-millions-levee-fonds-video-ia-juillet-2026` (actualite)
2. `claude-fable-5-gratuit-prolonge-19-juillet-2026` (actualite)
3. `doublage-ia-alternatives-heygen-comparatif` (comparatifs/evergreen — plan 90j J6)

### Technical note this run
- Working tree: agent-a3536ac9 (current worktree). Articles committed directly.
- Image generation: ran from worktree scripts/ dir (wrote to worktree public/ directly).
- Build went 532 -> 539 pages (+3 articles + EN translations from translation loop).
- Merge: no conflict (empty image dirs in main removed before merge). Fast-forward OK.
- SEO audit 0 errors confirmed.
- Plan 90 jours J6 (doublage-ia-alternatives-heygen-comparatif) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J7 = `voidborn-anime-ia-festival-coulisses`
   (cluster CAS, mot-clé "animé ia festival", liens vers ronces-coulisses-court-film-ia,
   presse, illustrations-manga-anime-ia). Données réelles uniquement (festival, date, titre).
2. News to watch: Google Gemini 3.5 Pro GA (targeting July 17, July 24 fallback),
   World AI Conference Shanghai (July 17-18), Meta infrastructure announcements,
   Claude Fable 5 paywall bascule (July 19 deadline), Anthropic IPO timeline.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-14 (Run 20 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-13 (batch 19: 3 articles).
- WebSearch for real news in last 24-72h: found iOS 27 public beta lancée le 13 juillet 2026
  (9to5Mac, MacRumors, Engadget, Macworld, Cult of Mac confirmed) et Mistral Robostral Navigate
  lancé le 8 juillet 2026 (Bloomberg, mistral.ai officiel, CryptoBriefing, TheAIInsider confirmed).
- Plan 90 jours J5 (2026-07-14): claude-code-createurs-video-guide
  (cluster OUTILS, mot-clé "claude code tarif / claude code prix", pos 9.5 sans page dédiée).
  Liens vers comment-optimiser-workflow-ia, gerer-versions-projets-video-ia.
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a1d59096.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-14.json --start 0 --end 1 then --start 2 --end 3
  from main repo). Copied images to worktree before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (532 pages, 3 new articles prerendered, up from 527).
- Staged explicit paths (3 .md + 3 hero.webp), committed 8346a49 in worktree.
- Rebased after translation loop pushed new commits, then pushed origin/main (679bea6).

### Articles published this run
1. `ios-27-beta-publique-live-siri-ia-test-juillet-2026` (actualite)
2. `mistral-robostral-navigate-robot-ia-juillet-2026` (actualite)
3. `claude-code-createurs-video-guide` (guides/evergreen — plan 90j J5)

### Technical note this run
- Working tree: agent-a1d59096 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 527 -> 532 pages (+3 articles + EN translations from translation loop).
- Translation loop pushed between our merge and push: used git stash + git pull --rebase + git stash pop.
- SEO audit 0 errors confirmed.
- Plan 90 jours J5 (claude-code-createurs-video-guide) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J6 = `doublage-ia-alternatives-heygen-comparatif`
   (cluster OUTILS, mot-clé "alternatives heygen doublage", PAA HeyGen pos 5.8-9.6).
   Liens vers heygen-elevenlabs-comparatif (pilier), synchronisation-labiale. Anti-cannibalisation:
   parade = celui-ci compare HeyGen à ses concurrentes doublage, le pilier compare HeyGen/ElevenLabs.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17 or July 24 fallback),
   Mistral flagship open-weight model GA (teased for partners in July), Apple iOS 27 beta updates,
   Runway announcements, xAI next model, Meta Watermelon GA date.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-13 (Run 19 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-12 (batch 18: 3 articles).
- WebSearch for real news in last 24-72h: found Apple poursuit OpenAI pour vol de secrets
  commerciaux (July 10, 2026 — CNBC, CNN, Bloomberg, TechCrunch, Axios, Fortune confirmed)
  et Meta Muse Spark 1.1 lancement modèle agentique multimodal (July 9, 2026 — ai.meta.com,
  TechCrunch, MarkTechPost, Dataconomy, Fortune confirmed).
- Plan 90 jours J4 (2026-07-13): ronces-coulisses-court-film-ia
  (cluster CAS, mot-clé "ronces film ia / court métrage ia coulisses").
- Wrote 2 actualite + 1 evergreen directly in worktree agent-aee95621.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-13.json --start 0 --end 1 then --start 2 --end 3
  from main repo). Copied images to worktree before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (527 pages, 3 new articles prerendered, up from 521).
- Staged explicit paths (3 .md + 3 hero.webp), committed d19541d in worktree.
- Removed untracked images from main repo, then merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `apple-openai-proces-secrets-commerciaux-juillet-2026` (actualite)
2. `meta-muse-spark-11-agent-multimodal-juillet-2026` (actualite)
3. `ronces-coulisses-court-film-ia` (guides/evergreen — plan 90j J4)

### Technical note this run
- Working tree: agent-aee95621 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 521 -> 527 pages (+3 articles + EN translations from translation loop).
- SEO audit 0 errors confirmed.
- Plan 90 jours J4 (ronces-coulisses-court-film-ia) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J5 = `claude-code-createurs-video-guide`
   (cluster OUTILS, mot-clé "claude code tarif / claude code prix", pos 9.5 sans page dédiée).
   Liens vers comment-optimiser-workflow-ia, gerer-versions-projets-video-ia. Anti-cannibalisation: faible.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17), iOS 27 public beta release
   (around July 14), Runway Gen-5 announcements, xAI Grok 4.5 EU launch,
   Apple/OpenAI lawsuit developments, Meta Muse Spark 1.1 GA (currently preview).
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-12 (Run 18 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-11 (batch 17: 3 articles).
- WebSearch for real news in last 24-72h: found OpenAI ChatGPT Work + GPT-5.6 GA launch
  July 9-10, 2026 (TechCrunch, 9to5Mac, digitalapplied.com, techbriefly.com, ithinkdiff.com
  confirmed) and Google Gemini 3.5 Pro announcement for mid-July 2026, 2M token context,
  Deep Think mode (developersdigest.tech, zoombangla.com, aitoolsreview.co.uk confirmed).
- Plan 90 jours J3 (2026-07-12): frank-houbre-formation-ai-studios
  (cluster FORMATION, mot-clé "frank houbre formation", navigationnelle/commerciale).
- Wrote 2 actualite + 1 evergreen/guide directly in worktree agent-ac993f1c.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-12.json --start 0 --end 1 then --start 2 --end 3
  from main repo). Note: script prepends public/ to dest; queue must NOT include public/ prefix.
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (521 pages, 3 new articles prerendered, up from 517).
- Staged explicit paths only (3 .mdx + 3 hero.webp), committed 1e7a2e7 in worktree.
- Removed untracked images from main repo, then merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `chatgpt-work-gpt-56-disponibilite-generale-juillet-2026` (actualite)
2. `google-gemini-35-pro-fenetre-2m-tokens-juillet-2026` (actualite)
3. `frank-houbre-formation-ai-studios` (guides/evergreen — plan 90j J3)

### Technical note this run
- Working tree: agent-ac993f1c (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 517 -> 521 pages (+3 articles + 1 EN translation from translation loop).
- SEO audit 0 errors confirmed.
- Plan 90 jours J3 (frank-houbre-formation-ai-studios) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J4 = `ronces-coulisses-court-film-ia`
   (cluster CAS, mot-clé "ronces film ia / court métrage ia coulisses").
   Lien vers creer-court-metrage-100-ia, /presse. Anti-cannibalisation: faible.
   Article coulisses sur le court métrage Ronces de Frank. Données réelles uniquement.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17), Apple iOS 27 public beta
   release (around July 14), xAI Grok 4.5 EU launch, OpenAI ChatGPT Work Plus/Business rollout,
   Runway Gen-5 announcements.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-11 (Run 17 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-10 (batch 16: 3 articles).
- WebSearch for real news in last 24-72h: found OpenAI GPT-Live full-duplex voice model
  launch July 8, 2026 (openai.com/index/introducing-gpt-live/, TechCrunch, MacRumors,
  VentureBeat, SiliconANGLE confirmed) and Meta Muse Image launch July 7, 2026 followed
  by consent controversy + rollback July 10, 2026 (about.fb.com, TechCrunch, CNBC,
  Bloomberg, Axios, Variety, Hollywood Reporter confirmed).
- Plan 90 jours J2 (2026-07-11): methode-realisateur-ia-diriger-avant-generer
  (cluster MARQUE, mot-clé "méthode réalisateur IA").
- Wrote 2 actualite + 1 evergreen/guide directly in worktree agent-a17aabb9.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-11.json --start 0 --end 3 from main repo).
  Note: script prepends public/ to dest; queue must NOT include public/ prefix.
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (517 pages, 3 new articles prerendered, up from 513).
  Pre-existing EN translation timeout on worktree build: not caused by new articles.
- Staged explicit paths only (3 .md + 3 hero.webp), committed e514bfb in worktree.
- Removed untracked images from main repo, then merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `openai-gpt-live-voix-duplex-chatgpt-juillet-2026` (actualite)
2. `meta-muse-image-generateur-instagram-juillet-2026` (actualite)
3. `methode-realisateur-ia-diriger-avant-generer` (guides/evergreen — plan 90j J2)

### Technical note this run
- Working tree: agent-a17aabb9 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 513 -> 517 pages (+3 articles + EN translations from translation loop).
- Merge conflict pattern (untracked images in main after generation): cleaned with rm -rf before merge.
- SEO audit 0 errors confirmed.
- Plan 90 jours J2 (methode-realisateur-ia-diriger-avant-generer) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J3 = `frank-houbre-formation-ai-studios`
   (cluster FORMATION, mot-clé "frank houbre formation", intention navigationnelle/commerciale).
   Lien vers /a-propos et accueil. Décrire AI Studios, renvoyer vers Skool.
   Anti-cannibalisation: rester sur la requête marque, ne pas cibler "formation IA vidéo" générique.
2. News to watch: GPT-5.6 Sol/Terra/Luna general availability (rolled out July 9),
   Meta Muse Video development updates, iOS 27 public beta release (around July 14),
   Runway Gen-5 announcement, xAI Grok 4.5 EU launch, Google Video Remix EMEA rollout.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-10 (Run 16 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-07 (batch 15: 3 articles).
- WebSearch for real news in last 24-72h: found xAI Grok 4.5 launch July 8, 2026
  (x.ai/news/grok-4-5, Axios, Yahoo Tech, explainx.ai confirmed) and Google Photos
  Video Remix powered by Gemini Omni launch July 8, 2026 (TechCrunch, 9to5Google,
  Engadget, Dataconomy confirmed).
- Plan 90 jours J1 (2026-07-10): WAN Alibaba guide complet (slug wan-alibaba-guide-complet).
- Wrote 2 actualite + 1 evergreen/guide directly in worktree agent-a99862aa.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-10.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (513 pages, 3 new articles prerendered, up from 502).
  Note: build from worktree failed on EN article timeout (comment-vendre-videos-ia-clients-professionnels),
  build from main repo passed cleanly. Same pré-existing issue pattern, not caused by new articles.
- Staged explicit paths only (3 .md + 3 hero.webp), committed 6c37d39 in worktree.
- Merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `xai-grok-45-coding-agentique-createurs-juillet-2026` (actualite)
2. `google-photos-video-remix-gemini-omni-juillet-2026` (actualite)
3. `wan-alibaba-guide-complet` (guides/evergreen — plan 90j J1)

### Technical note this run
- Working tree: agent-a99862aa (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 502 -> 513 pages (+3 articles + EN translations).
- Merge conflict on untracked articles/images in main repo (had been copied there for build test).
  Fix: remove them from main before merge. Same pattern as previous runs.
- SEO audit 0 errors confirmed.
- Plan 90 jours J1 (wan-alibaba-guide-complet) publié. Marquer comme done dans seo-90-day-plan.md si nécessaire.

### Next run should
1. Evergreen slot: Plan 90 jours J2 = `methode-realisateur-ia-diriger-avant-generer`
   (cluster MARQUE, mot-clé "méthode réalisateur IA", liens vers /a-propos et
   comment-penser-comme-realisateur). Vérifier anti-cannibalisation.
2. News to watch: Anthropic-Microsoft talks (Maia 200 chip), iOS 27 public beta
   (around July 14), Runway Gen-5 announcement, White House AI voluntary standards,
   xAI Grok 4.5 EU launch (mid-July), Google Video Remix EMEA rollout.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-07 (Run 15 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-06 (batch 14: 3 articles).
- WebSearch for real news in last 24-72h: found xAI Grok Voice 21 new multilingual voices
  (x.ai/news/new-flagship-voices July 6, 2026 confirmed) and Meta Watermelon model claiming
  GPT-5.5 parity (Bloomberg, American Bazaar, Benzinga, TechTimes, July 3-4 confirmed).
- Wrote 2 actualite + 1 business/evergreen directly in worktree agent-ae704954.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-07.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Fixed thumbnail, excerpt length, and internal links on all 3 articles.
  Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (502 pages, 3 new articles prerendered, up from 497).
- Staged explicit paths only (3 .mdx + 3 hero.webp), committed 94072c4 in worktree.
- Merge conflict on untracked images in main repo: removed them first, then merged cleanly (fast-forward).
- Pushed origin/main.

### Articles published this run
1. `xai-grok-voice-21-voix-voice-agent-builder-juillet-2026` (actualite)
2. `meta-watermelon-modele-ia-gpt-55-parite-juillet-2026` (actualite)
3. `checklist-avant-livrer-video-ia-client` (business/evergreen)

### Technical note this run
- Working tree: agent-ae704954 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 497 -> 502 pages (+3 articles +2 EN translations from translation loop).
- Merge conflict: the 3 generated images existed as untracked in main working tree.
  Fix: remove them from main before merge. Same pattern as previous runs.

### Next run should
1. Evergreen slot: NOW DRIVEN BY `seo-90-day-plan.md` (repo root, added 2026-07-09,
   GSC-backed). Take the next unpublished day from its "État d'avancement" section
   (starts at J1 `wan-alibaba-guide-complet`, planned 2026-07-10) and follow the row's
   brief + anti-cannibalization parade. Update the tracker after publishing. The old
   candidates (brief client, workflow integration, offre de service) are already
   covered by plan days J59/J16/J66 — do not write them separately.
2. News to watch: iOS 27 public beta launch (around July 14), Runway Gen-5 announcement,
   xAI Grok 4.5 broader public rollout, Meta Watermelon release date if announced,
   EU AI Act Article 50 enforcement (August 2 deadline approaching — possible follow-up).
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-06 (Run 14 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-05 (batch 13: 3 articles).
- WebSearch for real news in last 24-72h: found Runway Agent Skills launch July 2 2026
  (runwayml.com/changelog confirmed) and EU AI Act Article 50 enforcement deadline August 2 2026
  (tellers.ai, artificialintelligenceact.eu, kontainer.com verified).
- Wrote 2 actualite + 1 business/evergreen directly in worktree agent-ab239127.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-06.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (497 pages, 3 new articles prerendered, up from 492).
- Staged explicit paths only (3 .mdx + 3 hero.webp), committed 50bab6c in worktree.
- Merge conflict on untracked images in main repo: removed them first, then merged cleanly.
- Merged worktree-agent-ab239127 into main (4b09952), pushed origin/main.

### Articles published this run
1. `runway-agent-skills-campagnes-pub-video-ia-juillet-2026` (actualite)
2. `eu-ai-act-article-50-marquage-video-ia-aout-2026` (actualite)
3. `presenter-projet-video-ia-client-non-tech` (business/evergreen)

### Technical note this run
- Working tree: agent-ab239127 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 492 -> 497 pages (+3 articles +2 EN translations from translation loop).
- Merge conflict: the 3 generated images existed as untracked in main working tree.
  Fix: remove them from main before merge. Same pattern as previous runs.

### Next run should
1. Evergreen candidates: "checklist avant de livrer une vidéo IA au client" (business),
   "créer un brief client pour un projet vidéo IA" (business, brief template),
   "comment intégrer l'IA dans son workflow de production existant" (tutoriels).
2. News to watch: iOS 27 public beta launch (around July 14), Runway Gen-5 announcement,
   ElevenLabs v3 TTS details, GPT-5.6 broader public rollout, EU AI Act further enforcement dates.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-05 (Run 13 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-04 (batch 12: 3 articles).
- WebSearch for real news in last 24-72h: found Kling AI $2.8B funding round July 2-4 2026
  (Bloomberg, CNBC, TechTimes, TechStartups) and Apple iOS 27 public beta announcement
  July 2-3 2026 (Forbes, 9to5Mac, MacRumors, Apple newsroom).
- Wrote 2 actualite + 1 business/evergreen directly in worktree agent-a68886ea.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, --queue
  tmp-new-articles-queue-2026-07-05.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 1 em-dash error in devis article -> fixed -> 0 errors.
- Build: PASS (492 pages, 3 new articles prerendered, up from 487).
- Staged explicit paths only (3 .md + 3 hero.webp), committed 82c4b16, pushed origin/main.

### Articles published this run
1. `kling-ai-levee-fonds-28-milliards-valorisation-juillet-2026` (actualite)
2. `apple-ios-27-beta-publique-apple-intelligence-siri-ia` (actualite)
3. `creer-devis-projet-video-ia-client-modele-structure` (business/evergreen)

### Technical note this run
- Working tree: agent-a68886ea (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- node_modules: hard-linked with cp -rl from main repo.
- Build went 487 -> 492 pages (+3 articles +2 EN translations from translation loop).

### Next run should
1. Evergreen candidates: "présenter un projet vidéo IA à un client non-tech" (business),
   "comment créer un brief client pour un projet vidéo IA" (business),
   "checklist avant de livrer une vidéo IA au client" (business).
2. News to watch: iOS 27 beta 3 developer release (around July 7-8), Apple Intelligence
   new features testing; GPT-5.6 broader public rollout; Runway Gen-5 announcement;
   ElevenLabs Eleven v3 TTS details; Anthropic Samsung chip design news.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-04 (Run 12 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-03 (batch 11: 3 articles).
- WebSearch for real news in last 72h: found Anthropic-Samsung chip talks July 2, 2026
  (TechCrunch, Bloomberg, The Information, Dataconomy, Korea Herald) and Microsoft Frontier
  Company launch July 2, 2026 (TechCrunch, CNBC, TechAfrica News, TechTimes).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a59200fc.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, --queue
  tmp-new-articles-queue-2026-07-04.json --start N --end N one at a time from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Word-count warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (487 pages, 3 new articles prerendered, up from 482).
- Staged explicit paths only (3 .md + 3 hero.webp), committed 11e3978, pushed origin/main.

### Articles published this run
1. `anthropic-samsung-chip-ia-2nm-juillet-2026` (actualite)
2. `microsoft-frontier-company-25-milliards-deploiement-ia-2026` (actualite)
3. `choisir-format-vertical-horizontal-video-ia-plateformes` (tutoriels/evergreen)

### Technical note this run
- Working tree: agent-a59200fc. Image generation: run from main repo, then cp to worktree.
- node_modules: hard-linked with cp -rl from main repo.
- Build went 482 -> 487 pages (+3 articles +2 EN translations from translation loop).

### Next run should
1. Evergreen: "comment créer un devis pour un projet vidéo IA" (business, quote template).
2. News to watch: GPT-5.6 broader public rollout, Apple iOS 27 public beta (July 14),
   Runway Gen-5 announcement, ElevenLabs platform updates, Kling IPO news.

## Previous run: 2026-07-03 (Run 11 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-02 (batch 10: 3 articles).
- WebSearch for real news in last 72h: found Anthropic Claude Sonnet 5 launch June 30 2026
  (TechCrunch, Anthropic official, MacRumors, Nerova.ai) and California x Anthropic state deal
  June 29 2026 (gov.ca.gov, TechCrunch, CBS Sacramento, The Next Web, Fox Business).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a18db463.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API).
- SEO audit: 0 errors. Title/word-count warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (482 pages, 3 new articles prerendered, up from 467).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed 4dada90, pushed origin/main.

### Articles published this run
1. `claude-sonnet-5-anthropic-agent-ia-juin-2026` (actualite)
2. `californie-anthropic-claude-accord-agences-etat-2026` (actualite)
3. `prompt-negatif-video-ia-a-quoi-ca-sert` (tutoriels/evergreen)

### Technical note this run
- Working tree: agent-a18db463. Build went 467 -> 482 pages.

## Previous run: 2026-07-02 (Run 10 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-28 (batch 9: 3 articles).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a0ae2ae7.
- Build: PASS (467 pages). Committed e188e5c, pushed origin/main.

### Articles published this run
1. `anthropic-fable-5-retour-global-juillet-2026` (actualite)
2. `google-gemini-31-flash-image-omni-flash-video-juin-2026` (actualite)
3. `elevenlabs-music-v2-guide-createurs-video` (tutoriels/evergreen)

## Previous run: 2026-06-28 (Run 9 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-26 (batch 8: 3 articles).
- WebSearch for real news in last 72h: found Anthropic Mythos 5 partial unblock (June 26-27, 2026
  via CNN, Bloomberg, CNBC, NBC News, Fortune, Federal News Network, The Hill) and OpenAI GPT-5.6
  Sol/Terra/Luna launch under federal supervision (June 26, 2026 via TechTimes, FindSkill.ai, Releasebot).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a457609e.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, tmp-new-articles-queue.json).
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (456 pages, 3 new articles prerendered, up from 451).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed c10e5b2, pushed origin/main.

### Articles published this run
1. `anthropic-mythos-5-reautorisation-cybersecurite-juin-2026` (actualite)
2. `openai-gpt-56-sol-terra-luna-modeles-juin-2026` (actualite)
3. `creer-broll-ia-plans-coupe-convaincants` (tutoriels/evergreen)

### Technical note this run
- Working tree: agent-a457609e (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format. Confirmed correct.
- Build went 451 -> 456 pages (+3 articles +2 EN translations from translation loop).
- node_modules hard-linked again (cp -rl from main repo) as worktree had empty node_modules dir.

### Next run should
1. Evergreen candidates: "devis et template de quote pour projet vidéo IA client" (business),
   "présenter un projet vidéo IA à un client non-tech" (business),
   "vertical vs horizontal format for AI clips" (confirm no cannibalization first).
2. News to watch: GPT-5.6 general availability date, Fable 5 reauthorization status,
   Runway Gen-4.5 practical tips, ElevenLabs Music v2 launch, Apple iOS 27 beta updates.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-26 (Run 8 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-25 (batch 7: 3 articles).
- WebSearch for real news in last 72h: found OpenAI/Broadcom Jalapeño chip reveal (June 24, 2026
  via TechCrunch, CNBC, VentureBeat, Bloomberg, Tom's Hardware) and Google $75M investment
  in A24 for AI filmmaking tools (June 22, 2026 via Variety, Deadline, IndieWire, HollywoodReporter).
- Wrote 2 actualite + 1 comparatifs/evergreen directly in main working tree (agent-a4a11153).
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, tmp-new-articles-queue.json).
- SEO audit: 0 errors. Pre-existing warnings only (thin-content on news expected per STYLE_GUIDE).
- Build: PASS (451 pages, 3 new articles prerendered, up from 446).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed 2398a4d, pushed origin/main.

### Articles published this run
1. `openai-broadcom-jalapeno-chip-inference-ia-2026` (actualite)
2. `google-a24-partenariat-ia-outils-cinema-2026` (actualite)
3. `video-ia-talking-head-presentations-quel-outil-choisir` (comparatifs/evergreen)

### Technical note this run
- Working tree: agent-a4a11153 (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format. Confirmed correct.
- Build went 446 -> 451 pages (+3 articles +2 EN translations from translation loop).

### Next run should
1. Evergreen candidates: "devis et template de quote pour projet vidéo IA client" (business),
   "B-roll IA : créer des plans de coupe convaincants" (tutoriels),
   "présenter un projet vidéo IA à un client non-tech" (business).
2. News to watch: OpenAI Jalapeño deployment updates, Apple iOS 27 AI features,
   Runway Gen-5 announcements, ElevenLabs new model releases, Anthropic IPO timeline.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-25 (Run 7 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-23 (batch 6: 3 articles).
- WebSearch for real news in last 72h: found Sora API shutdown (September 24, 2026 confirmed
  via OpenAI Help Center + TechCrunch) and Anthropic confidential IPO S-1 filing (June 1, 2026
  via Anthropic.com official + CNBC + TechCrunch + Fortune at $965B valuation).
- Wrote 2 actualite + 1 business/evergreen directly in main working tree (agent-a1ee818d).
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue format
  with dest/prompt fields). Images generated to main repo public/ correctly.
- SEO audit: 0 errors. Title/excerpt warnings fixed on 2 articles. Word depth warnings on
  news articles are expected (STYLE_GUIDE: 900-1500 acceptable for fast news).
- Build: PASS (446 pages, 3 new articles prerendered, up from 427).
- Staged explicit paths only (3 .md + 3 hero.webp), committed cb0a08b, pushed origin/main.

### Articles published this run
1. `sora-api-arret-septembre-2026-alternatives-createurs` (actualite)
2. `anthropic-ipo-confidential-965-milliards-valorisation-2026` (actualite)
3. `livrer-fichiers-sources-projet-video-ia-client` (business/evergreen)

### Technical note this run
- Working tree: agent-a1ee818d (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format (not hero/workflow_1/2
  format). The render_blog_queue_gemini.py uses {dest, prompt, slug} format. Confirmed correct.
- The tmp-blog-local-stills-prompts.json uses a different format (hero/workflow_1/workflow_2)
  and goes through a different pipeline. Don't confuse the two.
- Build went 427 -> 446 pages (+3 articles +16 EN translations from translation loop).

### Next run should
1. Set up fresh worktree for content work if translation loop is active.
2. Evergreen candidates: "quote template for AI video projects" (business, scope + devis),
   "vertical vs horizontal format for AI clips" (confirm no cannibalization first),
   "AI video for talking-head presentations" comparatif.
3. News to watch: Apple iOS 27 beta developer releases, Runway Gen-5 announcements,
   ElevenLabs new model releases, any Kling 3.1 update, Anthropic IPO timeline updates.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (avoid checking < 15min
   after push due to CDN 404 caching behavior).

## Previous run: 2026-06-23 (Run 6 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-22 (batch 5: 3 articles).
- WebSearch for real news in last 72h: found Lionsgate equity stake in Runway AI
  (Variety, June 2026) and MiniMax Hub platform launch at Shanghai Film Festival
  (Variety, June 15, 2026).
- Wrote 2 actualite + 1 comparatif/evergreen in worktree agent-adb79a3f.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
  Images copied from main repo to worktree before git add.
- SEO audit: 0 errors on new articles. Pre-existing style/thin-content warnings only (news expected).
- Build from worktree: PASS (427 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged worktree-agent-adb79a3f into main, pushed origin/main (63f3ce5).

### Articles published this run
1. `lionsgate-runway-ai-series-courtes-ip-hollywood-2026` (actualite)
2. `minimax-hub-plateforme-video-ia-shanghai-juin-2026` (actualite)
3. `meilleur-outil-ia-video-publicite-produit-comparatif` (comparatifs/evergreen)

### Technical note this run
- Worktree was agent-adb79a3f (pre-existing from the run setup). Works correctly.
- Images generated in main repo, then cleared from main repo before merge to avoid
  untracked file conflict (same pattern as previous runs).
- Build went 419 -> 427 pages (+3 articles +5 EN translations from translation loop).

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "delivering source files to client for AI video project" (business),
   "vertical vs horizontal format for AI clips" (may be covered - check first),
   "AI video for talking-head presentations" comparatif,
   "quote template for AI video projects" (scope + devis).
3. News to watch: Runway Gen-5 announcements, ElevenLabs new model releases,
   Sora ChatGPT integration update, any Kling 3.1 update, Apple Intelligence updates.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-22 (Run 5 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-21 (batch 4: 3 articles).
- WebSearch for real news in last 72h: found Dreamina Seedance 2.0 Mini launch
  (ByteDance/CapCut, June 17, 2026, via Manila Times + digitalphablet.com + aijourn.com)
  and Google Flow + Veo 3.1 update with audio on all features (blog.google).
- Wrote 2 actualite + 1 evergreen in worktree loop/content-2026-06-22.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
  Note: script writes to main repo ROOT (not worktree), so images copied manually after generation.
- SEO audit: 0 errors on new articles. Pre-existing warnings only (thin-content on news expected).
- Build from worktree: PASS (419 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged loop/content-2026-06-22 into main, pushed origin/main (fa99c89).
- CDN propagation: Vercel CDN cache held 404s from first check (08:12 UTC, before build finish).
  New build confirmed via homepage cache date 08:31 UTC. Articles live once CDN revalidates.

### Articles published this run
1. `seedance-2-mini-bytedance-video-rapide-juin-2026` (actualite)
2. `google-flow-veo-31-edition-audio-juin-2026` (actualite)
3. `corriger-erreurs-anatomiques-video-ia-corps-mains` (evergreen, tutoriels)

### Technical note this run
- CRITICAL FORMAT BUG FIXED: blog.ts getSlugs() reads ONLY flat files (.md / .mdx)
  in content/blog/. It does NOT recurse into subdirectories. Articles created as
  dir/index.mdx are INVISIBLE to the site. Always use content/blog/slug.md format.
  Never content/blog/slug/index.mdx. (Fix commit 6e66a82 renamed all 3 articles.)
- Image generation script (scripts/render_blog_queue_gemini.py) writes to main repo ROOT,
  not the active worktree. Workaround: run script from worktree dir (it still writes to main),
  then cp images from main to worktree before git add. This is the correct workflow.
- CDN 404 caching: Vercel CDN caches 404 responses. If you check a new URL before the
  new Vercel build finishes, you get a 404 that stays cached for ~30min. Avoid checking
  new article URLs until 15-20min after push.

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "best AI video for product ads" comparatif,
   "delivering source files to clients for AI video" business article,
   "vertical vs horizontal format for AI clips" format article.
3. News to watch: ElevenLabs Music v2 developments, Runway Gen-5 announcements,
   any Kling 3.1 update, Apple WWDC Siri/Gemini integration details.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-21 (Run 4 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-20 (batch 3: 3 articles).
- WebSearch for real news in last 72h: found Midjourney Medical Scanner announcement
  (Bloomberg June 18, 2026) and Google Gemini/Imagen API preview model deprecations
  (deadline June 24-25, 2026, from ai.google.dev/gemini-api/docs/changelog).
- Wrote 2 actualite + 1 evergreen in worktree loop/content-2026-06-21.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
- SEO audit: 1 error (multiple H1 in Google article from code block comments) -> fixed -> 0 errors.
- Build from worktree: PASS (417 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged loop/content-2026-06-21 into main, pushed origin/main (0af03f0).
- Live verification: 200 OK on all 3 new article URLs.

### Articles published this run
1. `midjourney-medical-scanner-pivot-hardware-juin-2026` (actualite)
2. `google-imagen-gemini-image-preview-depreciation-juin-2026` (actualite)
3. `pipeline-ia-script-storyboard-production-de-a-z` (evergreen, tutoriels)

### Technical note this run
- node_modules: must use `cp -rl` (hard-link), NOT `ln -s` (symlink). Turbopack rejects
  symlinked node_modules that point outside its project root. Had to remove soft link and
  redo with `cp -rl`. Confirmed the `cp -rl` approach works.
- Image generation: temporarily swap tmp-blog-gen-queue.json with 3-item queue, run with
  --force, then restore the original 249-item queue.

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "best AI video tool for product ads" comparatif,
   "hands and eyes still breaking: current fixes" troubleshooting,
   "AI project quote template + scope" business article,
   "getting a clean loop for social" format article.
3. News to watch: ElevenLabs Music v2 API (launched June 8 changelog, underreported),
   Runway Gen-4.5 practical workflow for creators (released Dec 2025, still evergreen material),
   any Sora ChatGPT video integration update.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Google Imagen articles stay live as Imagen models actually shut down June 24-25.

## Previous run: 2026-06-20 (Run 3 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-19 (batch 2: 3 articles).
- WebSearch for real news in last 72h: found Grok Imagine Video 1.5 (xAI, June 17, 2026, GA release)
  and Higgsfield Creative OS (June 6, 2026, Claude MCP + Adobe/Figma integrations).
- Wrote 2 actualite + 1 evergreen in worktree agent-ae6e44dd.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API).
- SEO audit: 0 errors (news thin-content warnings are expected per STYLE_GUIDE).
- Build from main repo: PASS (3 new articles prerendered).
- Fast-forward merged worktree-agent-ae6e44dd into main, pushed origin/main (58f7c54).

### Articles published this run
1. `grok-imagine-video-1-5-xai-generation-video-ia` (actualite) - slug sans date prefix
2. `higgsfield-creative-os-claude-adobe-juin-2026` (actualite)
3. `gerer-versions-projets-video-ia` (evergreen, tutoriels)

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: script-to-screen pipeline (tie all pillar tools together),
   "best AI video for music videos" comparatif extension (product-ads, talking-head),
   quote template / scope creep on AI projects.
3. Consider thin-article rewrites from IDEAS_BACKLOG.
4. Verify new articles have EN translations (translation loop may handle).

---

## Previous run: 2026-06-19 (Run 2 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-17 (batch 1: 3 articles).
- WebSearch for real news in last 72h: found Kling 3.0 Turbo (June 17, 2026)
  and CNC rapport IA cinéma/audiovisuel (presented June 9, 2026 at Assemblée nationale).
- Wrote 2 actualite + 1 evergreen in worktree agent-a11e082e.
- Generated 3 hero images via render_blog_queue_gemini.py (Imagen API).
- SEO audit: 2 em-dash errors in source anchors -> fixed -> 0 errors.
- Build from main repo: PASS (409 pages, 3 new articles prerendered).
- Merged worktree-agent-a11e082e into main, pushed origin/main (450bbf8).

### Articles published this run
1. `2026-06-19-kling-3-turbo-previsualisation-video-ia` (actualite)
2. `2026-06-19-cnc-rapport-ia-cinema-audiovisuel-2026` (actualite)
3. `2026-06-19-luma-ray-2-guide-pratique-settings-workflow` (evergreen, tutoriels)

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: business quote template / scope creep on AI projects;
   comparator "best AI video tool for product ads"; version-control for AI projects.
3. Consider thin-article rewrites from IDEAS_BACKLOG.
4. Check if Kling 3.0 Turbo articles got EN translations (translation loop may handle).

---

## Previous run: 2026-06-17 (Run 0 — SETUP, no content published)

### What happened
- Inspected the repo end to end. It is a Next.js 16.2.1 App Router site,
  "AI Studio" by Frank Houbre, about cinematic AI creation. Content is markdown
  in `content/blog/` (FR, primary) and `content/blog-en/` (EN). Deploys to
  Vercel on push to `main`. Date-gated publishing (future dates auto-publish).
- Built the loop system: `.loop_memory/` (this folder) and `.loop_scripts/`
  (runnable audit + ledger generator + playbooks).
- Ran baseline `npm run build` -> PASS. Ran `seo_audit.mjs` -> 25 errors
  (all em dash), ~298 warnings. Captured in SEO_AUDIT_LOG.md.
- Generated CONTENT_INDEX.md (all 266 articles), seeded CONTENT_LEDGER.md,
  KEYWORD_MAP.md, NEWS_SOURCES.md, STYLE_GUIDE.md.

### Important discovery (affects everything)
- A SEPARATE Claude Code session (PID seen at setup) is ACTIVELY running an
  EN-translation loop: it writes `content/blog-en/*.md` and commits to `main`
  about every 90 seconds. We share one working directory and one git HEAD.
- Consequence: this loop must NOT do `git add -A` (it would capture the other
  loop's in-progress files) and must NOT race commits on `main`. Stage only
  this loop's own paths (`.loop_memory .loop_scripts SETUP_LOOP.md`) and only
  when safe. See ERRORS_AND_BLOCKERS.md.

### In progress / not done
- Loop system files (22) ARE committed + pushed to origin/main, but they were
  swept into the translation loop's `git add -A` commit `db3313b` (mislabeled
  "Add EN translation: fixing bad lighting in AI"). Files intact + inert.
  History left as-is (rewriting shared, actively-pushed main is unsafe).
- No news, evergreen, or content fixes published (correct for a setup run).
- LESSON: explicit-path staging is not enough against the other loop's
  `git add -A`. Before publishing ANY article content, set up a separate git
  worktree for this loop (see ERRORS_AND_BLOCKERS B1).

### What failed
- Nothing failed. Build green, audit green-enough.

### What was fixed
- First operational SEO fix applied in an isolated worktree: all 25 em-dash
  errors cleared (audit 25 -> 0) by replacing ` — ` with ` : ` in 25 FR
  articles. Committed on branch `loop/seo-fixes-2026-06-17`, pushed (preview).
  NOT merged to main (would break the translation loop's fast-forward push);
  merge when that loop is idle. See SEO_AUDIT_LOG + PUBLISH_LOG.
- Found quality debt: a subset of those 25 articles are mostly filler; queued
  for careful rewrite in IDEAS_BACKLOG (did NOT auto-strip, which gutted them).

### DONE this run (operational)
- Em-dash fix MERGED to main and VERIFIED LIVE on frankhoubre.com (the live
  midjourney-vs-dalle article renders ":" not "—"). Branch + worktree cleaned up.
- Confirmed the safe publish mechanism: work in a worktree, merge into local
  main, let the translation loop's next push carry it to origin (zero
  divergence). The translation loop is still active as of 15:57.

### Also done this run (content batch 1)
- Published 2 news + 1 evergreen, LIVE + verified on frankhoubre.com:
  elevenlabs-fin-voix-v1-migration-2026, flux-2-open-weights-images-ia-local-2026,
  corriger-scintillement-flicker-video-ia. 3 Imagen hero images. Merge ad2e2b0,
  pushed origin/main. Audit 0 errors, build PASS.
- Proven full content pipeline: worktree -> write -> Imagen images (Gemini key
  copied into worktree, gitignored) -> audit -> build (hard-link node_modules,
  NOT symlink: Turbopack rejects symlinked node_modules) -> commit -> merge ->
  push -> verify live -> cleanup worktree.

### Also done this run (B3 fix)
- FIXED the site-wide duplicate H1 on FR articles (src/lib/mdx-pipeline.ts
  stripLeadingH1). Verified live: 2 -> 1 H1 across FR, EN unchanged. Merge
  eb77f47, pushed, Vercel deployed. B3 moved to RESOLVED.

### Automation installed 2026-06-19
- launchd LaunchAgent `com.frankhoubre.growthloop` (loaded) + runner
  `.loop_scripts/daily_run.sh`: runs the daily loop at login + 10:00, idempotent,
  notifies "X articles le DATE", loop pushes main. Logs in
  ~/Library/Logs/frankhoubre-growthloop/.
- BLOCKER for unattended runs: the launchd `claude` CLI is NOT logged in (the
  desktop app login does not carry over). User must run ONCE: `claude setup-token`
  (Terminal). Until then the runner notifies "action requise" and does nothing.
  The runner detects this case (greps "not logged in") and notifies the fix.
- Today (2026-06-19) is stamped done to avoid a duplicate same-day batch (a batch
  was already published this session). First auto-run = next login after auth is
  fixed; or `bash .loop_scripts/daily_run.sh --force` to run today.

### Next run should
1. Set up a fresh worktree for content work
   (`git worktree add -b loop/content-YYYY-MM-DD ../frankhoubre-loop main`),
   copy `.env.local` into it for Imagen, hard-link node_modules for build.
2. Begin the daily content cycle: 2 news (actualite) + 1 evergreen, written by
   Claude, using WebSearch + NEWS_SOURCES.md, checked against KEYWORD_MAP.md for
   cannibalization. Write FR first (primary site). Date them today. Generate
   hero images via the Gemini scripts.
3. Careful rewrite of the thin filler articles (IDEAS_BACKLOG) — do NOT
   auto-strip; the strip script gutted them.
4. Re-run audit, fix new safe issues, update all memory files, write
   DAILY_REPORT.md.

### Open decisions for the human (see ERRORS_AND_BLOCKERS.md)
- Should the growth loop publish to `main` directly while the translation loop
  also pushes to `main`? Recommended: yes but stage explicit paths only, never
  `-A`. Confirm acceptable.
- Image generation for new articles uses GEMINI_API_KEY (present) via the
  python scripts. Confirm the loop may run those, or ship news with the default
  OG image until images are generated.
