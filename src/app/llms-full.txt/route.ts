import { getAllPosts } from "@/lib/blog";
import { getAllEnPosts } from "@/lib/blog-en";
import { baseUrl, person, siteName } from "@/lib/site";

/**
 * llms-full.txt — inventaire complet des articles (FR puis EN) pour les
 * assistants IA qui veulent la liste exhaustive. Complément de /llms.txt.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const frPosts = getAllPosts();
  const enPosts = getAllEnPosts();

  const lines: string[] = [
    `# ${siteName} — inventaire complet`,
    "",
    `> Tous les articles publiés par ${person.name} (formateur IA, réalisateur IA). FR d'abord, EN ensuite.`,
    "",
    `## Articles FR (${frPosts.length})`,
    "",
    ...frPosts.map(
      (p) => `- [${p.frontmatter.title}](${baseUrl}/blog/${p.slug})`,
    ),
    "",
    `## Articles EN (${enPosts.length})`,
    "",
    ...enPosts.map(
      (p) => `- [${p.frontmatter.title}](${baseUrl}/en/blog/${p.slug})`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
