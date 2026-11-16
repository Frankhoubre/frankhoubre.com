import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";
import { toPostSummary } from "@/lib/blog-thumbnail";

/**
 * Résumés de tous les articles FR (titre, extrait, date, catégorie, vignette)
 * pour la recherche et les filtres de /blog et des pages de catégorie. Chargé
 * à la première interaction : le HTML de ces pages ne porte plus que la
 * première page de fiches.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  return NextResponse.json(getAllPosts().map(toPostSummary), {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
