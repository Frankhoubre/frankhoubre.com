import type { Metadata } from "next";
import { ResourceHub } from "@/components/ressources/ResourceHub";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Ressources : un mot, une méthode",
  description:
    "Les méthodes envoyées en message après mes reels : storyboard, script, film, animé, webtoon, série, personnage, caméra, MCP et outils vidéo, avec leurs leçons.",
  path: "/ressources",
  noIndex: true,
  alternateLanguages: { fr: "/ressources", en: "/en/resources", "x-default": "/ressources" },
});

export default function Page() {
  return <ResourceHub locale="fr" />;
}
