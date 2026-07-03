import { getAllPosts } from "@/lib/blog";
import { getAllEnPosts } from "@/lib/blog-en";
import { baseUrl, blogCategories, person, siteName } from "@/lib/site";

/**
 * llms.txt — index du site à destination des crawlers et assistants IA
 * (GPTBot, ClaudeBot, PerplexityBot, …). Format : llmstxt.org.
 * Index curé ici ; inventaire complet dans /llms-full.txt.
 */
export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const frPosts = getAllPosts();
  const enPosts = getAllEnPosts();
  const recentFr = frPosts.slice(0, 15);

  const lines: string[] = [
    `# ${siteName}`,
    "",
    `> ${person.name} est formateur IA et réalisateur IA français. Ce site publie des tutoriels, workflows et analyses pour créer des images, vidéos et films par IA avec un rendu cinéma crédible (sans effet plastique). Contenu en français, avec versions anglaises sous /en/.`,
    "",
    `Site: ${baseUrl}`,
    `Auteur: ${person.name} — ${baseUrl}/a-propos`,
    `Flux RSS: ${baseUrl}/feed.xml`,
    `Inventaire complet des articles: ${baseUrl}/llms-full.txt`,
    "",
    "## Hubs",
    "",
    `- [Blog (français, ${frPosts.length} articles)](${baseUrl}/blog)`,
    `- [Blog (English, ${enPosts.length} articles)](${baseUrl}/en/blog)`,
    ...blogCategories.map(
      (c) => `- [Catégorie ${c.label}](${baseUrl}/blog/category/${c.slug})`,
    ),
    `- [Outils IA gratuits](${baseUrl}/outils)`,
    "",
    "## Articles récents (FR)",
    "",
    ...recentFr.map(
      (p) =>
        `- [${p.frontmatter.title}](${baseUrl}/blog/${p.slug}): ${p.frontmatter.excerpt}`,
    ),
    "",
    "## Optional",
    "",
    `- [À propos / bio](${baseUrl}/a-propos)`,
    `- [About (English)](${baseUrl}/en/about)`,
    `- [Prestations](${baseUrl}/prestation)`,
    `- [Contact](${baseUrl}/contact)`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
