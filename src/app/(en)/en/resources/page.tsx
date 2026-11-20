import type { Metadata } from "next";
import { ResourceHub } from "@/components/ressources/ResourceHub";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Resources: one word, one method",
  description:
    "The methods I send by DM after my reels: storyboard, script, film, anime, webtoon, drama, character, camera, MCP and video tools, each with its video lessons.",
  path: "/en/resources",
  noIndex: true,
  alternateLanguages: { fr: "/ressources", en: "/en/resources", "x-default": "/ressources" },
});

export default function Page() {
  return <ResourceHub locale="en" />;
}
