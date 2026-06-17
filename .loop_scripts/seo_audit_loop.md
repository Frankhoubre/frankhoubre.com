# SEO Audit Loop (daily)

## Run it
```
node .loop_scripts/seo_audit.mjs           # full report
node .loop_scripts/seo_audit.mjs --quiet   # summary + errors only
node .loop_scripts/seo_audit.mjs --json    # machine-readable
```
Then `npm run build` to catch frontmatter/MDX/route errors the static scan
cannot see.

## What the script checks
- Frontmatter: missing/invalid title, date, category (must match site.ts),
  excerpt; excerpt length 120-160; title <=65; duplicate titles per locale;
  thumbnail file existence; missing thumbnail.
- Headings: FR body H1 present and single; H2 count.
- Depth: word count (error <600, warn <1500).
- Internal links: 0 = warn, 1 = info, aim 2+.
- Style: em dash (ERROR, hard ban) and banned filler phrases.
- Images: empty/short alt text; local image files that do not exist.
- i18n: EN article with no FR counterpart slug (info).

## Fix policy
- **Fix directly (safe):** missing alt text when obvious, em-dash removal,
  banned-phrase rewrites, excerpt length, missing thumbnail wiring when the
  image exists, broken internal links, obvious heading fixes, sitemap/robots if
  clearly wrong.
- **Log first, do not auto-apply (risky):** deleting pages, large rewrites,
  redesigns, canonical/redirect strategy changes, anything touching many files
  at once. Record in SEO_AUDIT_LOG + ERRORS_AND_BLOCKERS.

## Things the script does NOT check (do manually / with tools)
- Live 404s, redirect chains, Core Web Vitals, real index coverage: use the
  Ahrefs MCP site-audit tools + Google Search Console when connected
  (see SETUP_LOOP).
- Orphan pages beyond internal-link count: spot-check from /blog and category
  pages.

## Always
- Append a dated entry to SEO_AUDIT_LOG.md: build status, error/warn counts,
  what was fixed, what was deferred and why.
