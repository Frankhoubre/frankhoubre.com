# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** frankhoubre.com
**Generated:** 2026-04-20 13:17:16
**Restyled:** 2026-09-11 (direction « Cinéma » : réalisateur / studio, éditorial suisse, brutalisme)
**Category:** Portfolio/Personal

---

## Direction artistique

Un site de réalisateur, pas un SaaS. Sensation recherchée : monumental,
cinématographique, mystérieux, intelligent, minimal, humain. Références :
cinéma grand format, photographie argentique, architecture brutaliste, design
éditorial suisse, dossiers de production, cartes topographiques.

Un seul registre, sombre, sur tout le site (marketing, blog, outils, tunnel de
formation, back-office). La sophistication vient de la composition (grille,
vide, asymétrie, lignes fines), jamais des effets.

## Global Rules

### Color Palette (tokens dans `src/app/globals.css`, `:root` + `@theme`)

| Role | Value | CSS variable | Tailwind |
|------|-------|--------------|----------|
| Page ground (charcoal) | `#0B0B0C` | `--bg` | `bg-charcoal` |
| Near black | `#111214` | `--bg-2` | `bg-charcoal-2` |
| Surface (graphite) | `#17191C` | `--surface` | `bg-graphite` |
| Surface 2 | `#1D2024` | `--surface-2` | `bg-graphite-2` |
| Deep navy (bandes) | `#0E2436` | `--navy` | `bg-navy` |
| Steel blue | `#3F5B6C` | `--steel` | `text-steel` |
| Fog (texte secondaire) | `#9CA3A8` | `--fog` / `--text-muted` | `text-fog` |
| Stone (texte 2) | `#D8D6CE` | `--stone` / `--text-2` | `text-stone` |
| Warm white (texte) | `#EEECE5` | `--cream` / `--text` | `text-cream` |
| Muted amber (accent rare) | `#B07B47` | `--amber` | `text-amber` |
| Hairline | `rgba(238,236,229,0.12)` | `--line` | `border-line` |
| Hairline forte | `rgba(238,236,229,0.26)` | `--line-strong` | `border-line-strong` |

**Règles :** 80 à 90 % de l'interface reste noir / charbon / gris / bleu acier /
blanc chaud. L'ambre ne sert qu'aux signaux (état actif, erreur de formulaire,
point de repère). Jamais de gradient SaaS, de glow néon, de glassmorphism
omniprésent, de blob. Les anciens noms (`--orange`, `--ink`, `--muted`,
`--label`) existent encore comme alias vers ces tokens : ne pas les réutiliser.

### Typography

- **Display / titres / navigation / métadonnées :** Inter Tight (500, 600, 700),
  `--font-display`. Titres en `font-weight: 600`, `letter-spacing: -0.02em`,
  `line-height` ≈ 1. Classes : `.display` (capitales, 0.92), `.display-xl/lg/md`,
  `.h-section` (clamp 1.85–3.4rem), `.h-block` (1.35–1.9rem), `.h-item` (1.125rem).
- **Texte courant :** Inter (400, 500, 600), `--font-body`. 16 px, `line-height 1.6`.
- **Citations et chapôs :** Instrument Serif italique, `--font-serif`. Classes
  `.serif`, `.lede` (1.3–1.75rem), `QuoteBlock`.
- **Métadonnées :** `.meta` = 11 px, capitales, `letter-spacing 0.18em`, brume.
  Variantes `.meta-strong` (stone), `.meta-dim`, `.meta-amber`. Esprit dossier de
  production : `01 / SÉQUENCE`, `FIG. 01`, `PLANCHE 02`, compteurs tabulaires.
- Toutes les polices sont auto-hébergées via `next/font/google` (`src/lib/fonts.ts`,
  export `fontVariables`). Aucun `<link>` vers Google Fonts.

### Spacing, grid, container

- Conteneur `.container-x` : `max-width 88rem`, gouttière `clamp(1rem, 4vw, 3.5rem)`.
- Grille `.grid-12` : 12 colonnes. Compositions éditoriales asymétriques :
  3 / 7 / 2 (`SectionHeader`), 5 / 7, 4 / 8, 7 / 5. Jamais de 50/50 systématique ni
  de trois cartes identiques centrées.
- Sections `.section` (`clamp(4rem, 9vw, 8.5rem)` vertical), `.section-sm`. Pages
  intérieures : `.page-top` ou `PageHeader` (contenu sous l'en-tête fixe, `--header-h` = 64 px).
- Le vide est structurel : grandes marges, une idée par bloc, annotations en marge.

### Radius, lines, shadows

- Radius : 0 à 2 px (`--r-1`). Les utilitaires Tailwind `rounded-*` sont plafonnés à 8 px.
- Séparateurs : lignes 1 px à faible contraste (`.hairline`, `border-line`).
  Elles structurent navigation, listes (`.spec-row`), sections, tableaux, footer.
- Aucune ombre portée. Les surfaces se distinguent par la couleur (`.card`,
  `.card-surface`) et la hairline.

### Motion (`src/components/motion/RevealObserver.tsx`, `HeroSpotlight.tsx`)

- Apparitions au scroll : `.reveal` (fondu + 22 px, 900 ms), `.reveal-mask`
  (clip-path depuis le bas), `.reveal-line` (scaleX), `data-delay` en secondes.
  Titres du hero : `.words-pull-up` (mots qui montent sous un masque de ligne).
- Images : `.kenburns` (zoom lent 20 s), `.hero-media-animate` (fondu 1,6 s),
  `.frame-hover` (scale 1 → 1.025 en 900 ms). Lueur : `.glow` + `.drift`, une par écran.
- Ease : `cubic-bezier(0.22, 1, 0.36, 1)`. Durées 200 / 450 / 900 ms. Hover :
  flèche +4 px, souligné qui grandit (`.line-link`, `.nav-link`), fond inversé (`.btn`).
- Les états initiaux masqués n'existent que sous `html.js` (script inline
  `beforeInteractive` dans `SiteShell` et le layout du tunnel) : sans JS, tout est visible.
- `prefers-reduced-motion: reduce` neutralise toutes les animations et transitions.
- Projecteur du curseur (`HeroSpotlight`) : desktop à pointeur fin uniquement, `requestAnimationFrame`.

### Textures

- Grain argentique global (`body::after`, opacité 0,05), grain de cadre
  (`.frame-grain`, `.grain`, opacité 0,09 / 0,10 en overlay), vignette (`.vignette`),
  voile (`.scrim`, `.hero-scrim`). Toujours quasi imperceptible.

---

## Component Specs (voir `src/app/globals.css` et `src/components/ui/`)

- `Cta` / `CtaButton` (`.btn`, `.btn-primary`, `.btn-quiet`, `.btn-sm`, `.btn-lg`) :
  rectangle 1 px, capitales, flèche qui glisse. Un seul bouton plein (blanc chaud)
  par écran. `ArrowLink` (`.arrow-link`) pour finir une fiche.
- `SectionHeader` : numéro + kicker en marge (3 col.), titre (7 col.), annotation (2 col.).
- `PageHeader` + `Breadcrumb` : ouverture de page intérieure (kicker, titre
  monumental, chapô serif, colonne d'annotations, hairline).
- `PostCard` (`grid`, `feature`, `row`) : la seule fiche d'article du site.
- `FilmFrame` / `.frame` (+ `.frame-grain`, `.frame-marks` = repères de cadre
  aux quatre coins) : tout photogramme, toute image.
- `VideoFacade` : façade vidéo cadrée, lecteur chargé au clic.
- `QuoteBlock`, `TechnicalDiagram` (orbites SVG, rotation lente sous JS).
- `HomeHero` (`.hero*`) : image plein cadre, scène révélée sous le curseur, nom
  monumental en bas à gauche, notes en marge droite, ligne de pied (intro,
  actions, repères, cue de scroll).
- Listes : `.spec-row` (clé / valeur sur hairline), listes numérotées
  `grid-cols-[2.5rem_1fr]`, accordéon `.faq-item` (+ `Plus`).
- Formulaires : `.input` (fond near black, hairline forte, focus stone),
  `.chip` (filtres, pagination ; `.is-active` / `aria-pressed`).
- `.badge` : étiquette de catégorie sur image (verre sombre, capitales 10 px).
- Header : `SiteHeader` (`.site-header`, `.is-solid` après 24 px de scroll ou hors
  accueil), `.nav-link`, menu mobile plein écran. Footer : marque monumentale,
  trois colonnes, ligne de métadonnées.
- Prose (articles, pages longues) : `.prose-cinema` pilote toute la mise en forme
  MDX (titres avec hairline, listes à tiret, blockquote serif, tableaux dans
  `.table-wrap`, images dans `.figure`). Les blocs insérés portent `.not-prose`.

### Registre produit (back-office `/admin/funnel`)

Même langage (tokens, hairlines, `.meta`, `.btn`, `.chip`, `.input`,
`.card-surface`) mais plus dense : `AdminShell` avec navigation en capitales sur
une ligne, tableaux sur hairlines, graphique SVG steel / stone.

---

## Anti-Patterns (Do NOT Use)

- ❌ Gradients violet/rose, glow néon, glassmorphism, blobs, ombres flottantes
- ❌ Boutons pill, gros radius (> 8 px), cartes toutes identiques en grille 3 × N
- ❌ Emojis, icônes colorées, illustrations corporate
- ❌ Orbitron, orange vif, fond clair quadrillé (direction précédente, retirée)
- ❌ Utilitaires Tailwind qui ne pourraient pas surcharger un composant :
  tout `globals.css` est dans `@layer base` / `@layer components`, ne pas sortir
  une règle de ces couches
- ❌ Contraste faible : brume (`--fog`) sur charbon reste ≥ 7:1 ; ambre sur charbon
  ≈ 5.4:1, réservé aux petits signaux
- ❌ Contenu masqué hors `html.js`, animations sans `prefers-reduced-motion`
- ❌ Iframes tierces au chargement (utiliser `VideoFacade`), `<img>` pour un asset local

---

## Pre-Delivery Checklist

- [ ] Aucune couleur hors tokens ; ambre limité aux signaux
- [ ] Composition asymétrique (grille 12, marges, vide) ; pas de trois cartes identiques
- [ ] Hairlines 1 px, radius ≤ 2 px, pas d'ombre
- [ ] Métadonnées `.meta` numérotées, titres Inter Tight, citations serif
- [ ] Hover discrets (flèche, souligné, fond inversé), transitions 200–900 ms
- [ ] `prefers-reduced-motion` respecté, contenu visible sans JavaScript
- [ ] Focus visible (outline stone), boutons utilisables au clavier, alt sur les images
- [ ] Responsive 375 / 768 / 1024 / 1440, pas de défilement horizontal
- [ ] Contenu sous l'en-tête fixe (`PageHeader` ou `.page-top`)
