import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

/**
 * Index léger des articles FR (slug + titre) pour la recherche de la colonne
 * d'article. Chargé au premier focus du champ : la liste complète ne voyage
 * plus dans le HTML de chaque article (~40 Ko par page auparavant).
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const posts = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
  }));
  return NextResponse.json(posts, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
