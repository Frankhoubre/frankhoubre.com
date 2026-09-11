# Home Page Overrides

> **PROJECT:** frankhoubre.com
> **Updated:** 2026-09-11 (direction « Cinéma »)
> **Page Type:** Landing / Marketing

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here.

---

## Page-Specific Rules

### Layout

- Hero `HomeHero` (`src/components/home/HomeHero.tsx`) : plein écran (100svh),
  photogramme `public/images/home/hero-base.webp` en fondu lent, scène
  alternative `hero-reveal.webp` révélée sous le curseur (desktop). Grille 12 :
  kicker en haut à gauche, compteur d'articles en haut à droite, nom monumental
  en bas à gauche (H1 : nom + rôles), quatre notes en marge droite, ligne de pied
  (intro, deux actions, repères, cue de scroll).
- L'en-tête est transparent sur le hero, verre sombre dès 24 px de scroll.
- Sections numérotées comme des séquences : 02 Positionnement (3 / 6 / 3),
  03 Le site (liste de quatre entrées sur hairlines), 04 Explorer (deux listes
  `.spec-row` : catégories + outils), 05 Films (façade 8 col. + deux façades 4 col.),
  06 Vision (bande navy : citation serif + `TechnicalDiagram`), 07 Approche
  (trois colonnes texte), 08 FAQ (4 / 7, accordéon), 09 Journal (fiche
  `feature` 7 col. + cinq fiches `row` 5 col.).
- Bandeau d'extraits `HomeFilmGallery` juste sous le hero (deux marquees).

### Typography

- H1 : `.hero-name` clamp(3rem, 9.5vw, 9.75rem) capitales + `.hero-roles`
  clamp(1.2rem, 2.2vw, 2rem) stone. Titres de section `.h-section`.

### Components

- Films : `VideoFacade` (poster + « Lire », iframe au clic).
- Derniers articles : `HomeLatestPostGrid` → `PostCard`.
- Le bloc « Explorer par thème » doit lister toutes les catégories non vides avec
  leur compte et tous les outils de `outilPages` : c'est le hub de maillage interne.

### Content invariants (SEO)

- H1 conserve « Frank Houbre », « formateur IA », « réalisateur IA », « créateur vidéo ».
- JSON-LD graph inchangé : Organization, WebSite (+ SearchAction), Person, WebPage,
  FAQPage (mêmes questions que la section FAQ).
