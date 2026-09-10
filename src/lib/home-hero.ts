/**
 * Visuels du hero d'accueil, servis depuis public/images/home/ :
 * - hero-base.webp : la scène affichée par défaut ;
 * - hero-reveal.webp : la scène alternative révélée sous le curseur ;
 * - hero-thumb.webp : la vignette carrée de la carte AI Studios.
 * Pour changer d'illustration, remplacer ces trois fichiers (1920 px de large
 * pour les deux scènes, 400 x 400 pour la vignette) et mettre à jour les alt.
 */
export const homeHeroImages = {
  base: {
    src: "/images/home/hero-base.webp",
    alt: "Photogramme IA : une silhouette en manteau sur une rampe de béton monumentale, ciel gris, une source de lumière orange",
  },
  reveal: {
    src: "/images/home/hero-reveal.webp",
    alt: "Variante de la scène révélée sous le curseur : la silhouette face à la ville dans la brume, sous une architecture brutaliste",
  },
  thumb: {
    src: "/images/home/hero-thumb.webp",
    alt: "Vignette du programme AI Studios : détail du photogramme IA",
  },
} as const;
