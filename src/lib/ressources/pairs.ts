/**
 * Chemins des pages ressources, sans leur contenu : ce fichier est importé par
 * le sélecteur de langue (composant client), il doit rester léger.
 * Chaque ligne : [slug FR, slug EN]. index.ts vérifie l'accord avec fr.ts et en.ts.
 */
export const RESOURCE_BASE = { fr: "/ressources", en: "/en/resources" } as const;

export const RESOURCE_SLUG_PAIRS: ReadonlyArray<readonly [string, string]> = [
  ["storyboard", "storyboard"],
  ["script", "script"],
  ["film", "film"],
  ["anime", "anime"],
  ["webtoon", "webtoon"],
  ["serie", "drama"],
  ["personnage", "character"],
  ["camera", "camera"],
  ["mcp", "mcp"],
  ["outil", "tool"],
];

export const RESOURCE_LOCALE_PAIRS: ReadonlyArray<readonly [string, string]> = [
  [RESOURCE_BASE.fr, RESOURCE_BASE.en],
  ...RESOURCE_SLUG_PAIRS.map(([fr, en]) => [`${RESOURCE_BASE.fr}/${fr}`, `${RESOURCE_BASE.en}/${en}`] as const),
];
