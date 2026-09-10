/**
 * Extraits choisis dans la galerie de l'accueil (public/images/home/gallery,
 * visuels Midjourney de Frank) pour les pages du funnel. Deux sélections
 * différentes pour ne pas montrer les mêmes plans deux fois de suite.
 */
export type Still = { src: string; alt: string };

const shot = (n: number, alt: string): Still => ({
  src: `/images/home/gallery/shot-${String(n).padStart(2, "0")}.webp`,
  alt,
});

/** Page d'inscription : six styles différents pour montrer l'étendue de la méthode. */
export const LANDING_STILLS: readonly Still[] = [
  shot(18, "Extrait de film IA : un homme en chemise blanche court avec une valise sur une route bordée de poteaux, lumière chaude"),
  shot(4, "Extrait IA : planche de personnage, trois vues d'une fillette animée avec des cristaux bleus"),
  shot(21, "Extrait IA en style animé : une jeune fille regarde par la fenêtre, reflets bleus"),
  shot(13, "Extrait de film IA : une foule minuscule face à des géants de pierre dans une lumière blanche"),
  shot(6, "Extrait de film IA : gros plan d'un homme âgé au visage marqué sous la neige"),
  shot(32, "Extrait IA en style illustré : une jeune femme aux cheveux blancs, regard inquiet, lumière froide"),
] as const;

/** Page de formation : six autres plans, au-dessus de l'offre AI Studios. */
export const COURSE_STILLS: readonly Still[] = [
  shot(20, "Extrait de film IA : une silhouette en robe sur un ponton face à une maison dans la brume"),
  shot(35, "Extrait de film IA : une cabane isolée dans le brouillard, des oiseaux dans le ciel"),
  shot(24, "Extrait de film IA : portrait d'une jeune femme au milieu d'une foule, regard caméra"),
  shot(12, "Extrait IA en style illustré : une femme en vert marche dans un paysage de brume"),
  shot(31, "Extrait IA en 3D : un vieil homme à lunettes assis dans un fauteuil, lumière douce"),
  shot(37, "Extrait de film IA : une silhouette assise dans une forêt embrumée au soleil couchant"),
] as const;
