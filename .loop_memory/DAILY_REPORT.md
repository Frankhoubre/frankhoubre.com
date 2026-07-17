# DAILY_REPORT.md — Run 22 — 2026-07-17

## Résumé

3 articles publiés. 0 erreurs SEO. Build 544 pages PASS. Push origin/main OK.

## Articles publiés

### 1. Apple Intelligence approuvé en Chine avec Alibaba Qwen : ce que ça change
- **Slug :** `apple-intelligence-chine-alibaba-qwen-approbation-juillet-2026`
- **Catégorie :** actualite
- **Sources :** TechCrunch (15/07), Yahoo Finance, The Next Web, MLQ.ai, Seeking Alpha, thenews.com.pk
- **Angle :** approbation CAC du 15 juillet 2026, Qwen + Baidu pour alimenter iOS/iPadOS/macOS/visionOS en Chine, sans date de lancement public. Alibaba +3,7%. Implications pour créateurs IA avec audiences internationales.
- **Mots environ :** 1300

### 2. Bonsai 27B : PrismML compresse un modèle 27 milliards de paramètres sur iPhone
- **Slug :** `prismml-bonsai-27b-modele-ia-iphone-juillet-2026`
- **Catégorie :** actualite
- **Sources :** 9to5Mac (14/07), prismml.com officiel, MarkTechPost, DevelopersDigest, CryptoBriefing, AlphaSignal
- **Angle :** Bonsai 27B basé sur Qwen3.6-27B, 3,9 Go en 1-bit, 11 tokens/s sur iPhone 17 Pro, 90% des perfs full-precision sur 15 benchmarks, Apache 2.0. Usages concrets pour créateurs vidéo IA en local.
- **Mots environ :** 1243

### 3. VOIDBORN : comment un animé IA a été primé dans des festivals internationaux
- **Slug :** `voidborn-anime-ia-festival-coulisses`
- **Catégorie :** guides (evergreen — Plan 90j J7)
- **Sources :** n/a (coulisses Frank Houbre, données réelles press.ts : Seoul AI Film Festival, Hollywood Indie Festival, Australian AI Festival, Bangkok Movie Awards, Top Shorts, LA Film Awards, Pulse Of Animation Festival, Mondial Chroma Awards)
- **Angle :** coulisses réalisateur, décision stylistique (anime vs réalisme), pipeline, ce que les jurys cherchent, soumission pratique
- **Mots environ :** 2000+

## Métriques techniques

- Pages build : 544 (était 539)
- SEO audit : 0 erreurs, 529 warnings (tous attendus : word-count news articles, pre-existing EN translations)
- Build : PASS (Turbopack, 9 workers)
- Merge : fast-forward worktree-agent-a2e5d366 -> main
- Push : origin/main OK (e2122ac)
- node_modules : cp -rl depuis main repo vers worktree

## Notes techniques

- Images générées dans main repo (comportement attendu du script). Copiées vers worktree avant staging.
- Main repo image dirs nettoyés avant merge pour éviter conflit fast-forward.
- Queue JSON : dest sans préfixe public/ (script ajoute automatiquement).
