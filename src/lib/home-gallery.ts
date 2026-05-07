import { readdirSync } from "node:fs";
import { join } from "node:path";

export type HomeGalleryImage = {
  src: string;
  alt: string;
};

/** Images servies depuis `public/images/home/gallery/*.webp`. */
export function getHomeGalleryImages(): HomeGalleryImage[] {
  const dir = join(process.cwd(), "public", "images", "home", "gallery");
  let files: string[];
  try {
    files = readdirSync(dir);
  } catch {
    return [];
  }

  const webps = files
    .filter((name) => name.endsWith(".webp"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return webps.map((file, index) => ({
    src: `/images/home/gallery/${file}`,
    alt: `Extrait cinématique IA ${index + 1}`,
  }));
}
