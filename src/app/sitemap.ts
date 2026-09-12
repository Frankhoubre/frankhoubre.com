import type { MetadataRoute } from "next";
import { POSTS_PER_ARCHIVE_PAGE } from "@/components/PaginatedBlogGrid";
import { getAllPosts, getPostsByCategory } from "@/lib/blog";
import { getAllEnPosts } from "@/lib/blog-en";
import { BUZZ_PATHS } from "@/lib/buzz/config";
import { FUNNEL_PATHS } from "@/lib/funnel/config";
import { outilPages } from "@/lib/outils-metadata";
import { baseUrl, blogCategories, type BlogCategorySlug } from "@/lib/site";

function maxDate(dates: (string | undefined)[]): Date {
  const times = dates
    .filter(Boolean)
    .map((d) => new Date(d as string).getTime())
    .filter((t) => !Number.isNaN(t));
  if (!times.length) return new Date();
  return new Date(Math.max(...times));
}

/**
 * Déclare les versions FR/EN d'une même page dans le sitemap (balises
 * xhtml:link hreflang). Complète les <link rel="alternate"> des pages : Google
 * recommande l'un ou l'autre, les deux ensemble lèvent tout doute.
 */
function alternates(fr: string, en: string) {
  return {
    languages: {
      fr: `${baseUrl}${fr}`,
      en: `${baseUrl}${en}`,
      "x-default": `${baseUrl}${fr}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const enPosts = getAllEnPosts();
  const enSlugs = new Set(enPosts.map((p) => p.slug));
  const frSlugs = new Set(posts.map((p) => p.slug));
  const now = new Date();

  const postDate = (p: (typeof posts)[number]) =>
    p.frontmatter.dateModified
      ? new Date(p.frontmatter.dateModified)
      : new Date(p.frontmatter.date);

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: postDate(p),
    changeFrequency: "monthly",
    priority: 0.7,
    ...(enSlugs.has(p.slug)
      ? { alternates: alternates(`/blog/${p.slug}`, `/en/blog/${p.slug}`) }
      : {}),
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
  const enBlogLastMod = enPosts.length
    ? maxDate(
        enPosts.flatMap((p) => [p.frontmatter.dateModified, p.frontmatter.date]),
      )
    : now;

  // Pages d'archives paginées (FR et EN) : page 1 = racine du blog.
  const frPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_ARCHIVE_PAGE));
  const enPages = Math.max(1, Math.ceil(enPosts.length / POSTS_PER_ARCHIVE_PAGE));
  const frArchiveEntries: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, frPages - 1) },
    (_, i) => ({
      url: `${baseUrl}/blog/page/${i + 2}`,
      lastModified: blogLastMod,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    }),
  );
  const enArchiveEntries: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, enPages - 1) },
    (_, i) => ({
      url: `${baseUrl}/en/blog/page/${i + 2}`,
      lastModified: enBlogLastMod,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    }),
  );

  const enEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: alternates("/", "/en"),
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: enBlogLastMod,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternates("/blog", "/en/blog"),
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: alternates("/a-propos", "/en/about"),
    },
    ...enPosts.map((p) => ({
      url: `${baseUrl}/en/blog/${p.slug}`,
      lastModified: postDate(p),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(frSlugs.has(p.slug)
        ? { alternates: alternates(`/blog/${p.slug}`, `/en/blog/${p.slug}`) }
        : {}),
    })),
    ...enArchiveEntries,
  ];

  const toolEntries: MetadataRoute.Sitemap = Object.values(outilPages).map(
    (tool) => ({
      url: `${baseUrl}${tool.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: tool.path.includes("annuaire") ? 0.85 : 0.8,
    }),
  );

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: alternates("/", "/en"),
    },
    ...enEntries,
    {
      url: `${baseUrl}/blog`,
      lastModified: blogLastMod,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: alternates("/blog", "/en/blog"),
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: alternates("/a-propos", "/en/about"),
    },
    {
      url: `${baseUrl}/presse`,
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
    ...toolEntries,
    {
      url: `${baseUrl}/liens`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}${FUNNEL_PATHS.optin}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Tunnel payant « Viral AI videos », en anglais uniquement.
    {
      url: `${baseUrl}${BUZZ_PATHS.sales}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
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
    ...frArchiveEntries,
    ...postEntries,
  ];
}
