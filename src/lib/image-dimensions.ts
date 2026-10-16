import manifest from "@/generated/image-dimensions.json";

export type Dimensions = { width: number; height: number };

const table: Record<string, number[] | undefined> = manifest;

/**
 * Largeur et hauteur d'une image de `public/images/blog`, depuis le manifeste
 * généré avant chaque build (scripts/build-image-dimensions.mjs). Pas de
 * lecture disque au rendu : elle ferait embarquer tout public/ dans la
 * fonction Vercel. Renvoie null pour une image absente du manifeste.
 */
export function readPublicImageDimensions(publicPath: string): Dimensions | null {
  const key = decodeURIComponent(publicPath.split("?")[0] ?? "");
  const hit = table[key];
  return hit && hit.length === 2 ? { width: hit[0], height: hit[1] } : null;
}
