import { modifiedIso, publishedIso } from "@/lib/article-dates";
import { getAllPosts } from "@/lib/blog";
import { getAllEnPosts } from "@/lib/blog-en";
import { baseUrl, person, siteName } from "@/lib/site";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const FEEDS = {
  fr: {
    feedPath: "/feed.xml",
    blogPath: "/blog",
    title: `${siteName} : Blog IA vidéo et image`,
    description: person.description,
    language: "fr-FR",
  },
  en: {
    feedPath: "/en/feed.xml",
    blogPath: "/en/blog",
    title: `${siteName}: AI filmmaking, video and image blog`,
    description:
      "Frank Houbre is an AI video and image trainer, AI filmmaker and entrepreneur. Tutorials, workflows and analysis to create AI images, videos and films with a cinematic standard.",
    language: "en-US",
  },
} as const;

/**
 * Flux RSS du blog, un par langue. Les dates viennent du frontmatter (heure de
 * Paris quand elle est connue, sinon début de journée) : jamais midi par
 * défaut, qui datait dans le futur un article publié le matin.
 */
export function buildRssFeed(locale: "fr" | "en" = "fr"): string {
  const f = FEEDS[locale];
  const posts = (locale === "en" ? getAllEnPosts() : getAllPosts()).slice(0, 50);
  const feedUrl = `${baseUrl}${f.feedPath}`;
  const blogUrl = `${baseUrl}${f.blogPath}`;
  const updated = posts.length
    ? posts.map((p) => modifiedIso(p.frontmatter)).sort((a, b) => Date.parse(b) - Date.parse(a))[0]
    : null;

  const items = posts
    .map((post) => {
      const url = `${blogUrl}/${post.slug}`;
      const pubDate = new Date(publishedIso(post.frontmatter)).toUTCString();
      return `    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.frontmatter.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(person.name)}</dc:creator>
      <category>${escapeXml(post.frontmatter.category)}</category>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(f.title)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(f.description)}</description>
    <language>${f.language}</language>
${updated ? `    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>\n` : ""}    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}
