import type { Metadata } from "next";
import { ResourceHub } from "@/components/ressources/ResourceHub";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Ressources : un film, une méthode",
  description:
    "Dix méthodes pour passer de votre idée à un film : storyboard, scénario, court métrage, animé, webtoon, série verticale, personnage, caméra, MCP, modèles vidéo.",
  path: "/ressources",
  noIndex: true,
  alternateLanguages: { fr: "/ressources", en: "/en/resources", "x-default": "/ressources" },
});

export default function Page() {
  return <ResourceHub locale="fr" />;
}
