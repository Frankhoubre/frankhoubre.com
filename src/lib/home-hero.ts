/**
 * Visuels des heros, servis depuis public/images/home/ :
 * - hero-regie.webp : le portrait de Frank en régie (accueil FR et EN),
 *   image retenue le 20 nov. 2026 (sourire, main tendue), 2240 px de large ;
 * - hero-base.webp : la scène du tunnel de formation ;
 * - hero-reveal.webp : la scène alternative révélée sous le curseur ;
 * - hero-thumb.webp : la vignette carrée de la carte AI Studios.
 * Pour changer d'illustration, remplacer ces trois fichiers (1920 px de large
 * pour les deux scènes, 400 x 400 pour la vignette) et mettre à jour les alt.
 */
export const homeHeroImages = {
  portrait: {
    src: "/images/home/hero-regie.webp",
    alt: "Frank Houbre, réalisateur de films IA, souriant en régie, micro en main et main tendue vers la caméra",
  },
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
