# DAILY_REPORT.md — Run 21 — 2026-07-16

## Résumé

3 articles publiés. 0 erreurs SEO. Build 539 pages PASS. Push origin/main OK.

## Articles publiés

### 1. PixVerse lève 439 millions : le géant de la vidéo IA qui monte en silence
- **Slug :** `pixverse-439-millions-levee-fonds-video-ia-juillet-2026`
- **Catégorie :** actualite
- **Sources :** TechCrunch (13/07), pixverse.ai officiel, VentureBurn, TNGlobal
- **Angle :** levée 439M$ Series C, valorisation 2B$, 150M inscrits, 3 gammes de modèles (V/C/R-Series), ambition mondes interactifs
- **Mots environ :** 1245

### 2. Claude Fable 5 gratuit jusqu'au 19 juillet : ce que ça veut dire pour toi
- **Slug :** `claude-fable-5-gratuit-prolonge-19-juillet-2026`
- **Catégorie :** actualite
- **Sources :** BleepingComputer, Forbes, Dataconomy, TechTimes (12-13/07)
- **Angle :** 3e prolongation accès gratuit (Pro/Max/Team jusqu'au 19 juillet), contrainte compute, tarifs après bascule (10$/50$ par M tokens), comparaison GPT-5.6
- **Mots environ :** 1100

### 3. Doublage IA : les vraies alternatives à HeyGen comparées
- **Slug :** `doublage-ia-alternatives-heygen-comparatif`
- **Catégorie :** comparatifs (evergreen — Plan 90j J6)
- **Sources :** n/a (craft, specs vérifiées sur sites officiels)
- **Angle :** Descript / ElevenLabs / Murf / Captions / Synthesia vs HeyGen sur 6 cas d'usage distincts + tableau comparatif + FAQ
- **Mots environ :** 2100+

## Métriques techniques

- SEO audit : **0 erreurs**, ~521 warnings (thin content sur articles actualite = attendu)
- Build : **PASS** — 539 pages (vs 532 précédent run, +7)
- Commit worktree : bb4942d
- Push main : 2a09e36
- Images hero : 3/3 générées via Imagen API (render_blog_queue_gemini.py)

## Notes techniques

- Script render_blog_queue_gemini.py lancé depuis le worktree : écrit les images dans le worktree public/ directement. Pas de copie manuelle nécessaire.
- Merge propre : dossiers images vides supprimés de main avant merge (rm -rf des 3 dossiers créés par mkdir mais non remplis).
- node_modules : hard-linked avec cp -rl depuis main repo.

## Plan 90j avancement

- J1 wan-alibaba-guide-complet : PUBLIÉ 2026-07-10
- J2 methode-realisateur-ia-diriger-avant-generer : PUBLIÉ 2026-07-11
- J3 frank-houbre-formation-ai-studios : PUBLIÉ 2026-07-12
- J4 ronces-coulisses-court-film-ia : PUBLIÉ 2026-07-13
- J5 claude-code-createurs-video-guide : PUBLIÉ 2026-07-14
- J6 doublage-ia-alternatives-heygen-comparatif : PUBLIÉ 2026-07-16
- J7 voidborn-anime-ia-festival-coulisses : PROCHAIN RUN

---

# DAILY_REPORT.md — Run 20 — 2026-07-14

## Résumé

3 articles publiés, 0 erreurs SEO, build 532 pages PASS, push origin/main OK.

## Articles publiés

### 1. iOS 27 beta publique est là : ce que j'ai testé en premier
- slug: ios-27-beta-publique-live-siri-ia-test-juillet-2026
- catégorie: actualite
- sources: 9to5mac, macrumors, engadget, macworld, cultofmac (13/07/2026)
- angle: beta publique lancée le 13 juillet, Visual Intelligence caméra, Siri contextuel, test pratique créateurs
- mots environ: 1200

### 2. Mistral lance Robostral Navigate : l'IA qui pilote un robot avec une seule caméra
- slug: mistral-robostral-navigate-robot-ia-juillet-2026
- catégorie: actualite
- sources: bloomberg, mistral.ai officiel, cryptobriefing, theaiinsider, aiweekly (08/07/2026)
- angle: modèle 8B open-weight navigation robot caméra RGB, benchmark R2R-CE, cas d'usage IA physique
- mots environ: 1050

### 3. Claude Code pour créateurs vidéo : usages concrets et tarifs
- slug: claude-code-createurs-video-guide
- catégorie: guides (evergreen — plan 90j J5)
- sources: n/a (craft, vérification specs anthropic.com)
- angle: usages Claude Code pour créateurs vidéo, tarifs, comparaison avec ChatGPT, workflows concrets
- mots environ: 2200+

## Métriques

- SEO audit: 0 erreurs, warnings attendus
- Build: PASS — 532 pages (+3 new, up from 527)
- Commit worktree: 8346a49
- Push main: 679bea6 (après git stash + pull --rebase, translation loop avait pusché entre-temps)
- Images hero: 3/3 générées via Imagen API
