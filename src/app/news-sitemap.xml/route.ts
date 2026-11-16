import { publishedIso } from "@/lib/article-dates";
import { getAllPosts, isPostPublished, type Post } from "@/lib/blog";
import { getAllEnPosts } from "@/lib/blog-en";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 600;

// Google News ne lit que les articles des deux derniers jours.
const WINDOW_MS = 2 * 24 * 60 * 60 * 1000;

function esc(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Seules les actualités entrent dans le sitemap news : les guides et
 * tutoriels publiés le même jour ne sont pas de l'information datée.
 */
function isRecentNews(post: Post, cutoff: number): boolean {
  if (post.frontmatter.category !== "actualite") return false;
  const ts = new Date(publishedIso(post.frontmatter)).getTime();
  return ts >= cutoff && ts <= Date.now();
}

function entry(post: Post, path: string, language: "fr" | "en"): string {
  return `  <url>
    <loc>${baseUrl}${path}</loc>
    <news:news>
      <news:publication>
        <news:name>${esc(siteName)}</news:name>
        <news:language>${language}</news:language>
      </news:publication>
      <news:publication_date>${publishedIso(post.frontmatter)}</news:publication_date>
      <news:title>${esc(post.frontmatter.title)}</news:title>
    </news:news>
  </url>`;
}

export function GET() {
  const cutoff = Date.now() - WINDOW_MS;
  const items = [
    ...getAllPosts()
      .filter((p) => isPostPublished(p) && isRecentNews(p, cutoff))
      .map((p) => entry(p, `/blog/${p.slug}`, "fr")),
    ...getAllEnPosts()
      .filter((p) => isPostPublished(p) && isRecentNews(p, cutoff))
      .map((p) => entry(p, `/en/blog/${p.slug}`, "en")),
  ].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${items}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
