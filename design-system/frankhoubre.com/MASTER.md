# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/frankhoubre.com/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** frankhoubre.com
**Restyled:** 2026-11-20, charte « régie de cinéma » (validée par Frank sur maquettes le même jour)
**Précédentes directions, retirées :** « Cinéma » (11 sept. 2026), noir et or (30 oct. 2026)
**Source de la charte :** `~/Claude/skool-posts/page-about-2026-11-20-regie/regie.css` et
`~/Claude/frank-reels-studio/recettes/regie-de-cinema.md` (reels et page About Skool).

---

## Direction artistique

La régie d'un plateau de cinéma : blanc sur noir, grands titres serif en capitales
resserrées, étiquettes en capitales machine, timecodes, filets à butée, coins de
viseur, vignettes numérotées façon pellicule, grain léger. **Aucune couleur
d'accent : la couleur vient des images** (photogrammes, portrait de Frank).

Un seul registre sur tout le site (marketing, blog, ressources, outils, tunnel de
formation, back-office). Le thème vit dans `.theme-regie` (`src/app/globals.css`),
posé sur `<body>` par `SiteShell` et sur le cadre du tunnel par `FunnelFrame`.

## Règles

1. **Blanc sur noir `#050505`.** Jamais d'or, de bleu ni d'ambre dans l'interface.
   Les anciens tokens (`--amber`, `--gold`, `--gold-label`) pointent sur le blanc.
2. **Aucun contour ni ombre dure autour d'un texte.** Le trait de 0,014 em des
   titres a la couleur du texte : il épaissit les déliés, ce n'est pas un contour
   (Frank a rejeté la version à déliés fins : « trop fine, peu lisible »).
3. **La lueur blanche va sur un groupe de mots par écran** : le mot en italique du
   titre (`.or`), un chiffre clé (`.lueur`). Forte sur le hero d'accueil, douce
   sur les titres de page et de section, presque éteinte sur les blocs.
4. **Angles droits.** Radius 0 partout (boutons, champs, cadres, cartes).
5. **Jamais de prix ni de crédits dans un visuel, jamais de promesse de live.**
   Palmarès : « 30 distinctions dont 10 prix ». Lien ScreenWeaver : `/start`.

## Couleurs (tokens de `.theme-regie`)

| Rôle | Valeur | Variable |
|------|--------|----------|
| Fond | `#050505` | `--bg` |
| Surfaces | `#0a0a0a`, `#0e0e0e`, `#141414` | `--bg-2`, `--surface`, `--surface-2` |
| Texte | `#ffffff` | `--text`, `--cream` |
| Texte secondaire | blanc à 82 % | `--text-2`, `--stone` |
| Texte discret | blanc à 62 % | `--text-muted`, `--fog` |
| Filets | blanc à 16 % et 32 % | `--line`, `--line-strong` |
| Lueurs | `--lueur`, `--lueur-2`, `--lueur-3` | text-shadow blancs, du plus fort au plus doux |

## Typographie (`src/lib/fonts.ts`)

- **Titres : Regie Bodoni**, `--font-title` (titrage) et `--font-title-text` (corps
  moyens, déliés plus épais). C'est Bodoni Moda (OFL) 800 resserrée à 74 % en
  largeur et figée dans quatre fichiers `src/fonts/regie-bodoni-*.woff2` par
  `scripts/build-regie-font.py`. La police est resserrée dans le fichier, pas en
  CSS : aucune `transform: scaleX` à écrire, les retours à la ligne sont justes.
  Capitales, `line-height` 0,96, mot clé en italique (`<span className="or">`).
  S'applique à `h1`, `h2`, `.h-section`, `.h-block`, `.display`, `.titre`,
  `.titre-texte`, et aux `h2` / `h3` d'article.
- **Étiquettes, navigation, boutons : Space Mono 700** en capitales, interlettrage
  0,14 em (`.meta`, `.nav-link`, `.btn`, `.chip`, `--font-mono`).
- **Chiffres, dates, numéros : JetBrains Mono 500** (`time`, `.tabular`, `.tc`,
  `.num`, `.badge`, `.vig-num`, `--font-tc`).
- **Texte courant : Inter** (`--font-body`). La charte n'a pas de police de
  lecture ; Bodoni et Space Mono fatiguent sur un article entier.
- **Titres de fiches et questions : Inter Tight 600**, casse normale (`h3`, `h4`,
  `.h-item`, questions de FAQ).
- Les titres sont écrits en minuscules dans le source, la CSS les passe en
  capitales. Ne pas poser `normal-case` ni `tracking-[…]` sur un titre.

## Motifs de la régie

- **Filet à butée** `.filet` (`.filet-court`, `.filet-long`) : trait de 2 px fermé
  par une butée verticale. Devant le kicker de `SectionHeader` et de `PageHeader`,
  sous les rôles du hero, avant la signature d'une citation, au-dessus de chaque
  `h2` d'article.
- **Coins de viseur** `.viseur`, et d'office sur `.frame-marks` et `.carte-noir`.
- **Vignette numérotée** `.vig-num` : chiffres JetBrains sur pastille noire, en
  haut à gauche d'un photogramme (pellicule d'accueil, fiches d'article, films).
- **Grain** : `body::after` (global) et `.theme-regie::before` (overlay à 10 %).
- **Kicker de séquence** : `01 / Titre` ou `01 ⟝ Titre` (numéro, filet, étiquette).

## Composants (voir `src/app/globals.css` et `src/components/ui/`)

- `Cta` / `.btn` : rectangle à filet blanc, capitales machine. `.btn-primary` :
  blanc plein, texte noir, lueur. Un seul bouton plein par écran.
- `SectionHeader`, `PageHeader` + `Breadcrumb` : numéro, filet, kicker, titre.
- `PostCard` (`grid`, `feature`, `row`) : la seule fiche d'article du site.
- `FilmFrame` / `.frame` / `VideoFacade` : tout photogramme, toute image.
- `QuoteBlock` : capitales Bodoni, jamais l'italique en minuscules.
- `HomeHero` : portrait de Frank en régie à droite, nom à gauche (voir `pages/home.md`).
- `.carte-noir` : bloc cadré avec coins de viseur (formulaires, encarts formation).
- `.chip-or` (pastille blanche pleine), `.chip-ligne`, `.tampon`, `.badge`.
- Prose (articles) : `.prose-cinema` pilote toute la mise en forme MDX.
- En-tête : `SiteHeader` (marque `.marque`, « FRANK *HOUBRE* »), menu mobile
  plein écran. Pied de page : marque monumentale, trois colonnes.

## Layout, motion

Inchangés : conteneur `.container-x` (88 rem), grille `.grid-12`, sections
`.section`, apparitions `.reveal` sous `html.js` seulement, `prefers-reduced-motion`
respecté. Le hero d'accueil n'a plus d'état masqué : son H1 est lisible dès la
première image.

## À ne pas faire

- ❌ Or, ambre, bleu, dégradés colorés, glassmorphism, coins arrondis, ombres portées
- ❌ Contour noir autour d'un texte, texte posé sur le tee-shirt blanc de Frank
- ❌ Bodoni en minuscules ou à déliés fins, lueur sur plusieurs mots d'un même écran
- ❌ `transform: scaleX` pour resserrer un titre (la police l'est déjà)
- ❌ Utilitaires Tailwind qui contredisent la charte sur un titre (`normal-case`,
  `tracking-*`, `rounded-*`)
- ❌ Sortir `globals.css` de `@layer base` / `@layer components`

## Pre-Delivery Checklist

- [ ] Aucune couleur d'accent, aucun radius, aucun contour de texte
- [ ] Une lueur par écran au plus
- [ ] Le visage de Frank n'est jamais sous un texte (hero à 1024, 1440, 1920 px)
- [ ] Mobile 375 px sans défilement horizontal, cibles tactiles de 44 px
- [ ] URL, balises, JSON-LD et H1 inchangés (`SEO-GUIDELINES.md` §8)
- [ ] `npm run typecheck` et `npm run lint`
