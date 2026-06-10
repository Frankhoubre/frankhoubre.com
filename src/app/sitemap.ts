import type { MetadataRoute } from "next";
import { getAllPosts, getPostsByCategory } from "@/lib/blog";
import { baseUrl, blogCategories, type BlogCategorySlug } from "@/lib/site";

function maxDate(dates: (string | undefined)[]): Date {
  const times = dates
    .filter(Boolean)
    .map((d) => new Date(d as string).getTime())
    .filter((t) => !Number.isNaN(t));
  if (!times.length) return new Date();
  return new Date(Math.max(...times));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const now = new Date();

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.frontmatter.dateModified
      ? new Date(p.frontmatter.dateModified)
      : new Date(p.frontmatter.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const catEntries: MetadataRoute.Sitemap = blogCategories.map(
    (c: { slug: BlogCategorySlug }) => {
      const catPosts = getPostsByCategory(c.slug);
      const lm = catPosts.length
        ? maxDate(
            catPosts.flatMap((p) => [
              p.frontmatter.dateModified,
              p.frontmatter.date,
            ]),
          )
        : now;
      return {
        url: `${baseUrl}/blog/category/${c.slug}`,
        lastModified: lm,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      };
    },
  );

  const blogLastMod = posts.length
    ? maxDate(
        posts.flatMap((p) => [p.frontmatter.dateModified, p.frontmatter.date]),
      )
    : now;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogLastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/feed.xml`,
      lastModified: blogLastMod,
      changeFrequency: "daily",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/outils`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/outils/generateur-prompt-cinema`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outils/generateur-storyboard-pdf`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outils/calculateur-budget-production-ia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outils/reverse-prompting-image-ia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/outils/annuaire-generateurs-images-ia-gratuits`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/outils/annuaire-ia-audio-sfx-musicales`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/liens`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/prestation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...catEntries,
    ...postEntries,
  ];
}
