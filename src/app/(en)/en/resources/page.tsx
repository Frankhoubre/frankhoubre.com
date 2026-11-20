import type { Metadata } from "next";
import { ResourceHub } from "@/components/ressources/ResourceHub";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Resources: one film, one method",
  description:
    "Ten methods to take your idea to a finished film: storyboard, screenplay, short film, anime, webtoon, vertical series, character, camera, MCP, video models.",
  path: "/en/resources",
  noIndex: true,
  alternateLanguages: { fr: "/ressources", en: "/en/resources", "x-default": "/ressources" },
});

export default function Page() {
  return <ResourceHub locale="en" />;
}
