# Home Page Overrides

> **PROJECT:** frankhoubre.com
> **Updated:** 2026-09-07 (Cyber Ronin restyle)
> **Page Type:** Landing / Marketing

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here.

---

## Page-Specific Rules

### Layout

- The whole page uses the **dark register** (`.cyber-page`): ink ground, cream text.
- Hero: `CyberHero` (full viewport, spotlight reveal). Content max-width for the
  left column is 600px; everything below the hero sits in a `max-w-5xl` container.
- The header is transparent over the hero, then turns to ink glass on scroll. It stays
  dark on the home only; other pages keep the light header.
- Footer is ink on every page.

### Typography

- H1: Orbitron uppercase, three lines, `clamp(1.55rem, 3vw, 2.5rem)`.
- Section titles: `.cyber-title` at `text-xl sm:text-2xl`, sentence case.
- Card titles: 13px Orbitron, cream. Body: Inter 14–18px, `--muted`.

### Components

- Films use `VideoFacade` (poster + play button, iframe loaded on click).
- The film strip uses `HomeFilmGallery` with `next/image` thumbnails.
- Latest posts use `HomeLatestPostGrid` in dark glass cards.
- The « Explorer par thème » block must list every non-empty blog category with its
  count and every tool from `outilPages`: it is the crawl hub of the home.

### Content invariants (SEO)

- H1 keeps « Frank Houbre », « formateur IA », « réalisateur IA » and « créateur vidéo ».
- JSON-LD graph: Organization, WebSite (+ SearchAction), Person, WebPage, FAQPage,
  all linked by stable `@id` (`src/lib/metadata.ts`).
- Hero images are configured in `src/lib/home-hero.ts`.
