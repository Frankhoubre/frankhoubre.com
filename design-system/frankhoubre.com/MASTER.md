# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** frankhoubre.com
**Generated:** 2026-04-20 13:17:16
**Restyled:** 2026-09-07 (direction « Cyber Ronin »)
**Category:** Portfolio/Personal

---

## Global Rules

### Color Palette

| Role | Value | CSS Variable |
|------|-------|--------------|
| Text (was « cream ») | `#111111` | `--cream` |
| Muted text | `rgba(17, 17, 17, 0.72)` | `--muted` |
| Label text | `rgba(17, 17, 17, 0.62)` | `--label` |
| Accent | `#E07020` | `--orange` |
| Accent deep | `#C45A18` | `--orange-deep` |
| Page ground (was « ink ») | `#F6F6F7` | `--ink`, `--background` |
| Glass card | `rgba(255, 255, 255, 0.78)` + `backdrop-filter: blur(18px)` | `--card` |
| Body text | `#111111` | `--foreground` |
| CTA | `#E07020` (black text) | `--color-cta` |

**Color Notes (since 2026-09-10, direction de Frank) :** un seul registre, clair :
fond blanc-gris `#F6F6F7` quadrillé (lignes toutes les 32 px, plus marquées tous
les 160 px, posées par `body::before`), texte noir, accent orange, titres
Orbitron. Les variables `--cream` / `--ink` gardent leur nom historique mais
valent désormais noir / blanc-gris : ne pas les lire au premier degré. Les
boutons pleins sont noirs avec texte blanc (`.ds-cta-dark`, `.ds-badge`) ou
orange avec texte noir (`.ds-cta-primary`, `.cyber-btn-solid`). Le hero
d'accueil garde ses images plein écran sous un voile clair (`.hero::after`).
Jamais de bleu, jamais de registre sombre pleine page.

### Typography

- **Heading Font:** Orbitron (weights 500, 700), uppercase in the dark register,
  `letter-spacing: 0.02em`, `font-weight: 500`.
- **Body Font:** Inter (300, 400, 500, 600).
- Both are self-hosted via `next/font/google` (`src/lib/fonts.ts`). No `<link>` to
  Google Fonts, no third-party font CSS.
- Small labels: 11px, uppercase, `letter-spacing 0.08–0.12em`, color `--label`
  (`.cyber-label`, `.cyber-spec-label`).

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |
| `--hero-top` | `92px` | Top offset of hero UI under the fixed header |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |
| Glass card | `0 18px 50px rgba(0,0,0,0.28)` | `.cyber-card` |

---

## Component Specs (see `src/app/globals.css`)

### Dark register (`.cyber-*`)

- `.cyber-page`: white-grey ground, black text (nom historique).
- `.cyber-card`: glass card, radius 18px, 1px border `rgba(251,219,175,0.08)`.
- `.cyber-btn`: pill, 1px cream border, transparent, 12px/500, hover lifts 1px.
  `.cyber-btn-solid` for the orange filled variant.
- `.cyber-icon-btn`: 38px circle, 1px cream border at 55%, 16px stroke icon inside.
- `.cyber-spec-row` / `.cyber-spec-label` / `.cyber-spec-value`: key/value rows with
  12% cream hairlines between rows.
- `.cyber-link`: cream underline at 35%, full cream on hover.

### Cinema layer (`.cine-*`, landings du funnel)

- `.cine-band` : bande sombre `#0b0c10`, texte blanc ; `.cine-grain::before` (grain SVG,
  overlay 16 %), `.cine-vignette::after`, `.cine-letterbox` (bandes noires 14/22 px),
  `.cine-scrim` (voile sombre sous le texte), `.cine-glow-orange` / `.cine-glow-blue`
  (lueurs floutées, dérive lente `cineDrift`), `.cine-kenburns` (zoom lent 18 s),
  `.cine-timecode`, `.cine-card` (verre sombre), `.cine-cta` (bouton orange lumineux,
  une lueur par écran). Sur fond clair : `.cine-leak-*` (fuites de lumière douces).
- Composant `CineHero` (src/components/funnel/CineHero.tsx) : photogramme plein cadre
  + variante révélée au curseur (HeroSpotlight) + tout ce qui précède.
- Apparitions au scroll : `RevealObserver` + classes `fade-up-reveal` / `data-delay`,
  activées seulement sous `html.js` ; tout est désactivé en `prefers-reduced-motion`.
- Dials : ENERGY 3 / RHYTHM 3 / MOTION 2 sur les landings ; le reste du site reste
  ENERGY 2 / RHYTHM 2 / MOTION 1.

### Light register (`.ds-*`)

- `.ds-card`, `.ds-hero`, `.ds-surface`, `.ds-chip`, `.ds-badge`, `.ds-input`: unchanged
  shapes, warm neutrals, orange hover borders and focus rings.
- `.ds-cinematic-frame`: ink gradient frame with orange glow, used for page headers.
- `.ds-cta-primary`: orange gradient pill. `.ds-cta-ghost-light`: cream ghost pill.

### Hero « Cyber Ronin » (`src/components/cyber/CyberHero.tsx`)

- Full viewport (`100dvh`), base image + alternate image revealed under the cursor
  by a radial `mask-image` (radius 260 / 160 / 120 px by viewport width).
- Grid `1fr 1fr` × `auto 1fr auto`; left column holds H1 (3 lines), intro, icon row,
  glass product card; right column holds a counter (top) and a specs list (bottom).
- Breakpoints: 1024, 900, 768 (single column), 720 (flex column, counter in flow),
  480, 360. All defined in `globals.css` under the `.hero*` rules.

### Motion

- `heroImageIn` 1.2s (scale 1.18 → 1), `wordPullUp` 0.55s per word staggered 0.1s,
  `fadeUp` 0.7s with 8px blur, delays via `data-delay`.
- Word splitting and IntersectionObserver reveals live in
  `src/components/cyber/RevealObserver.tsx`; hidden initial states apply only under
  `html.js` (set by an inline script in `SiteShell`), so no-JS and crawlers see everything.
- `prefers-reduced-motion: reduce` disables every animation and transition.

---

## Style Guidelines

**Style:** Motion-Driven, light engineering grid, black on white-grey, orange accent

**Keywords:** Full-bleed imagery under a light scrim, cursor spotlight, white glass
cards, uppercase Orbitron labels, black on white-grey grid, orange accent

**Section Order (home):** 1. Cyber hero, 2. Film strip marquee, 3. Positioning +
public signals, 4. Four pillars, 5. Explore by theme (categories + tools), 6. Films
(click-to-play facades), 7. Learn / create / position, 8. FAQ, 9. Latest articles.

---

## Anti-Patterns (Do NOT Use)

- ❌ Corporate templates, generic layouts
- ❌ Blue accents (the old `#2563EB` is retired)
- ❌ **Emojis as icons** — Use inline SVG (stroke 1.2, 16px) like the hero icon row
- ❌ **Missing cursor:pointer** on clickable elements
- ❌ **Layout-shifting hovers**
- ❌ **Low contrast text** — muted cream on ink stays ≥ 4.5:1; never use `--label`
  for body copy
- ❌ **Instant state changes** — transitions 150–300ms
- ❌ **Invisible focus states** — orange 2px outline is the default (`:focus-visible`)
- ❌ Third-party iframes at load — use `VideoFacade` (click to play)
- ❌ `<img>` for local assets — use `next/image`

---

## Pre-Delivery Checklist

- [ ] No emojis used as icons (inline SVG instead)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150–300ms)
- [ ] Contrast 4.5:1 minimum in both registers
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Content visible without JavaScript (no `.js`-gated text left hidden)
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind the fixed header on the home (`--hero-top`)
- [ ] No horizontal scroll on mobile
