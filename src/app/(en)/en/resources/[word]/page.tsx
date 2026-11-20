import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourcePage } from "@/components/ressources/ResourcePage";
import { buildPageMetadata } from "@/lib/metadata";
import { getResource, resourcePath, resourcesFor } from "@/lib/ressources";

type Props = { params: Promise<{ word: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return resourcesFor("en").map((r) => ({ word: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { word } = await params;
  const r = getResource("en", word);
  if (!r) return {};
  const path = resourcePath("en", r.slug);
  const fr = resourcePath("fr", r.twinSlug);
  return buildPageMetadata({
    title: r.metaTitle,
    description: r.metaDescription,
    path,
    // Landing pages for Instagram DMs: kept out of the index so they don't compete with the blog.
    noIndex: true,
    alternateLanguages: { fr, en: path, "x-default": fr },
  });
}

export default async function Page({ params }: Props) {
  const { word } = await params;
  const r = getResource("en", word);
  if (!r) notFound();
  return <ResourcePage resource={r} />;
}
