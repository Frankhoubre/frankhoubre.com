import { RESOURCES_EN } from "./en";
import { RESOURCES_FR } from "./fr";
import { RESOURCE_BASE, RESOURCE_SLUG_PAIRS } from "./pairs";
import type { Resource, ResourceLocale } from "./types";

export type { Resource, ResourceLocale } from "./types";
export { RESOURCE_BASE } from "./pairs";

export function resourcesFor(locale: ResourceLocale): Resource[] {
  return locale === "fr" ? RESOURCES_FR : RESOURCES_EN;
}

export function getResource(locale: ResourceLocale, slug: string): Resource | undefined {
  return resourcesFor(locale).find((r) => r.slug === slug);
}

export function resourcePath(locale: ResourceLocale, slug: string): string {
  return `${RESOURCE_BASE[locale]}/${slug}`;
}

// Garde-fou au build : la table légère des paires doit suivre le contenu.
for (const [fr, en] of RESOURCE_SLUG_PAIRS) {
  if (getResource("fr", fr)?.twinSlug !== en || getResource("en", en)?.twinSlug !== fr) {
    throw new Error(`Paire de ressources incohérente : ${fr} / ${en}`);
  }
}
if (RESOURCES_FR.length !== RESOURCE_SLUG_PAIRS.length || RESOURCES_EN.length !== RESOURCE_SLUG_PAIRS.length) {
  throw new Error("Une page ressource manque dans pairs.ts");
}
