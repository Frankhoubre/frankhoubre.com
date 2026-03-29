export const blogCategories = [
  { slug: "actualite", label: "Actualité" },
  { slug: "tutoriels", label: "Tutoriels" },
  { slug: "notes", label: "Notes" },
] as const;

export type BlogCategorySlug = (typeof blogCategories)[number]["slug"];

const categorySlugSet = new Set<string>(
  blogCategories.map((c) => c.slug),
);

export function isBlogCategorySlug(s: string): s is BlogCategorySlug {
  return categorySlugSet.has(s);
}

export function getCategoryLabel(slug: string): string {
  const found = blogCategories.find((c) => c.slug === slug);
  return found?.label ?? slug;
}

function trimTrailingSlash(url: string): string {
  return url.replace(/\/+$/, "");
}

export const baseUrl = trimTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

export const siteName = "Frank Houbre";

export const person = {
  name: "Frank Houbre",
  authorDisplayName: "Frank Houbre",
  jobTitle: "Auteur & créateur",
  description:
    "Articles, notes et tutoriels autour du web, de la création et des outils du quotidien.",
  url: baseUrl,
  image: `${baseUrl}/next.svg`,
  sameAs: [] as string[],
} as const;
