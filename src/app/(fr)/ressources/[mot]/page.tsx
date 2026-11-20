import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourcePage } from "@/components/ressources/ResourcePage";
import { buildPageMetadata } from "@/lib/metadata";
import { getResource, resourcePath, resourcesFor } from "@/lib/ressources";

type Props = { params: Promise<{ mot: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return resourcesFor("fr").map((r) => ({ mot: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { mot } = await params;
  const r = getResource("fr", mot);
  if (!r) return {};
  const path = resourcePath("fr", r.slug);
  return buildPageMetadata({
    title: r.metaTitle,
    description: r.metaDescription,
    path,
    // Pages d'arrivée des DM Instagram : hors index pour ne pas concurrencer le blog.
    noIndex: true,
    alternateLanguages: { fr: path, en: resourcePath("en", r.twinSlug), "x-default": path },
  });
}

export default async function Page({ params }: Props) {
  const { mot } = await params;
  const r = getResource("fr", mot);
  if (!r) notFound();
  return <ResourcePage resource={r} />;
}
