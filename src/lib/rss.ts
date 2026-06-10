import { getAllPosts } from "@/lib/blog";
import { baseUrl, person, siteName } from "@/lib/site";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildRssFeed(): string {
  const posts = getAllPosts().slice(0, 50);
  const feedUrl = `${baseUrl}/feed.xml`;
  const blogUrl = `${baseUrl}/blog`;
  const updated =
    posts[0]?.frontmatter.dateModified ??
    posts[0]?.frontmatter.date ??
    new Date().toISOString().slice(0, 10);

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`;
      const pubDate = new Date(`${post.frontmatter.date}T12:00:00Z`).toUTCString();
      return `    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.frontmatter.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(person.name)}</author>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteName} — Blog IA vidéo et image`)}</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(person.description)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date(`${updated}T12:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <managingEditor>${escapeXml(person.name)}</managingEditor>
${items}
  </channel>
</rss>`;
}
