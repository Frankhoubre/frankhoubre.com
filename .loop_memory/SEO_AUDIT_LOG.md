# SEO_AUDIT_LOG.md — Daily technical + SEO health

Run `node .loop_scripts/seo_audit.mjs` each day. Log the summary, what was
fixed, and what was deferred. Newest entry on top.

## 2026-06-17 — First operational SEO fix (em dashes)

Worked in an isolated git worktree (`../frankhoubre-loop`, branch
`loop/seo-fixes-2026-06-17`) to avoid the concurrent translation loop.

- Fixed all **25 em-dash errors** -> audit now **0 errors** (306 warnings, 1 info).
  Replaced ` — ` with ` : ` (French colon) in the templated filler lead lines.
  Body text only, frontmatter untouched, exactly 25 files, +27/-27 lines.
- IMPORTANT discovery (logged, NOT auto-applied): those em dashes live in a
  generic "## Approfondissement terrain" / "## Prolongement série B" filler
  block. Running the repo's `scripts/strip_campaign_boilerplate.py` to remove it
  GUTTED several articles (e.g. canva-ia-creation-visuels-rapides 2210->273
  words, pourquoi-personnages-changent-chaque-scene-ia 2168->245). That means a
  subset of these 25 articles are largely filler with thin real content. Do NOT
  auto-strip. Queued for careful per-article rewrite by Claude (IDEAS_BACKLOG).
- Status: committed on branch `loop/seo-fixes-2026-06-17`, pushed to origin
  (Vercel preview). NOT merged to main yet (merging out-of-band would make the
  translation loop's next push non-fast-forward). Merge when that loop is idle.

## 2026-06-17 — Baseline audit (setup run, read-only)

Build: `npm run build` PASS (exit 0, Next.js 16.2.1).
Audit: 266 files scanned (FR 219, EN 47).

- **Errors: 25**
  - 25x em dash (`—`) in FR articles, a hard style-guide violation. All 25 sit
    inside the same templated "gouvernance + risques + livrables" boilerplate
    block (`**Title** — L'extrait «...»`). This block is itself banned SEO
    filler. NOT auto-fixed on the setup run because (a) first run does not edit
    content, (b) a parallel translation loop is actively writing to the repo.
    This is the #1 safe fix for the first operational run. See ERRORS file.
    Files: 5-meilleurs-ia-video-maker-clip-musical-2026,
    alternatives-gratuites-chatgpt-fiction, canva-ia-creation-visuels-rapides,
    comment-transformer-image-ia-video-fluide-credible,
    creation-logo-ia-outils-gratuits-astuces,
    creer-avatar-parlant-videos-formation-heygen, croquis-en-chef-d-oeuvre-ia,
    droits-auteur-images-generees-ia, generateur-image-ia-sans-inscription,
    generer-storyboard-professionnel-complet-ia,
    ia-dialogues-realistes-outils-conversationnels,
    ia-generative-ecriture-creative-audiovisuel,
    ia-photographie-retouche-inpainting-generation,
    illustrations-manga-anime-ia, meilleur-generateur-image-ia-gratuit,
    midjourney-vs-dalle-3-concept-art, personnages-coherents-plusieurs-images-ia,
    photos-hyper-realistes-ia, pourquoi-images-ia-floues-comment-corriger,
    pourquoi-personnages-changent-chaque-scene-ia,
    pourquoi-videos-ia-manquent-de-realisme,
    secrets-prompts-rendu-photographique-ia,
    stable-diffusion-installation-debutants, textures-3d-intelligence-artificielle,
    topaz-video-ai-test-avis-restauration-video.

- **Warnings: ~298** (not blocking; address opportunistically)
  - ~146 headings: FR `prose` body sometimes has few H2 or no body H1; many EN
    files lead with body text instead of `# ` (EN H1 is rendered from
    frontmatter title by the page component, so EN "no H1 in body" is expected
    and the audit does not flag EN H1, only FR).
  - ~130 meta: excerpts outside the 120-160 char window, a few missing
    thumbnails. Tighten on touch.
  - ~16 internal-links: articles with 0 internal links. Add 2+ when editing.
  - 6 style: banned phrases (e.g. "landscape", "robust") in older articles.

- **Info: 1** internal-links.

### Technical baseline (verified healthy)

- robots.ts: allows `/`, disallows `/api/`, declares sitemap + host. OK.
- sitemap.ts: dynamic, includes FR posts, EN posts, categories, tools, legal.
  Uses dateModified/date for lastModified. OK.
- RSS at `/feed.xml`. OK.
- Canonicals, hreflang (en/fr/x-default on EN articles), OG, Twitter cards,
  BlogPosting + Breadcrumb + FAQ JSON-LD all present via metadata.ts and page
  components. OK.
- Date-gating: future-dated articles are hidden until their calendar day, so
  the sitemap only lists live posts. OK.

### Deferred / logged, not changed

- Em-dash + boilerplate remediation (see above) -> first operational run.
- Excerpt length normalization -> batch later, low risk but high volume.

<!-- New daily audit entries above this line -->
