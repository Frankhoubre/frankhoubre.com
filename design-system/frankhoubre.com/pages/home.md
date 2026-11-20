# Home Page Overrides

> **PROJECT:** frankhoubre.com
> **Updated:** 2026-11-20 (charte « régie de cinéma »)
> **Page Type:** Landing / Marketing

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/frankhoubre.com/MASTER.md`).
> Only deviations from the Master are documented here.

---

## Page-Specific Rules

### Layout

- Hero `HomeHero` (`src/components/home/HomeHero.tsx`) : portrait de Frank en régie
  (`public/images/home/hero-regie.webp`, blazer bleu marine, sourire, main tendue)
  cadré à droite et fondu vers le noir à gauche. À gauche : kicker, H1 (nom en
  capitales Bodoni, « HOUBRE » en italique avec la lueur forte, rôles en capitales
  machine), filet à butée, intro, deux actions. En pied : ligne de régie en
  JetBrains Mono (nombre d'articles, « 30 distinctions dont 10 prix », films).
- Le nom ne passe jamais sur le visage. Sous 1024 px, le portrait monte au-dessus
  du texte (pleine largeur, fondu vers le bas).
- Pellicule `HomeFilmGallery` sous le hero : deux bandes de vignettes numérotées.
- Sections numérotées comme des séquences : 02 Positionnement (avec le palmarès
  « 30 » en marge), 03 Le site, 04 Explorer, 05 Films, 06 Vision (citation en
  capitales Bodoni + `TechnicalDiagram`), 07 Approche, 08 FAQ, 09 Journal.

### Components

- Films : `VideoFacade` (poster + « Lire », iframe au clic, coins de viseur).
- Derniers articles : `HomeLatestPostGrid` → `PostCard`.
- Le bloc « Explorer par thème » doit lister toutes les catégories non vides avec
  leur compte et tous les outils de `outilPages` : c'est le hub de maillage interne.

### Content invariants (SEO)

- H1 conserve « Frank Houbre », « formateur IA », « réalisateur IA », « créateur vidéo ».
- JSON-LD graph inchangé : Organization, WebSite (+ SearchAction), Person, WebPage,
  FAQPage (mêmes questions que la section FAQ).
