export const blogCategories = [
  { slug: "actualite", label: "Actualité" },
  { slug: "tutoriels", label: "Tutoriels" },
  { slug: "notes", label: "Notes" },
  { slug: "business", label: "Business" },
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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.frankhoubre.com",
);

export const siteName = "Frank Houbre";

/** Profils et sites publics (accueil, JSON-LD `sameAs`). */
export const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@frankhoubre" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/frank-houbre/" },
  { label: "Instagram", href: "https://www.instagram.com/frank.houbre/" },
  { label: "YouTube", href: "https://www.youtube.com/@BusinessDynamite" },
  { label: "IMDb", href: "https://www.imdb.com/name/nm17957426/" },
  { label: "AI Studios", href: "https://www.skool.com/ai-studios" },
  { label: "Business Dynamite", href: "https://businessdynamite.xyz/" },
  { label: "ScreenWeaver", href: "https://screenweaver.ai" },
] as const;

export const person = {
  name: "Frank Houbre",
  authorDisplayName: "Frank Houbre",
  jobTitle: "Formateur IA, réalisateur IA et créateur image & vidéo",
  /** Court résumé (SEO, JSON-LD, cartes de partage). */
  description:
    "Frank Houbre est formateur IA vidéo et image, réalisateur IA et entrepreneur. Il partage des tutoriels, workflows et analyses pour créer des images, vidéos et films IA avec une exigence cinématographique.",
  /** Paragraphes affichés dans la section auteur des articles. */
  bio: [
    "J’écris sur ce site pour partager des workflows concrets autour de l’IA générative : prompts structurés comme un brief photo ou vidéo, direction artistique, erreurs qui donnent un rendu « plastique », et pistes pour garder une cohérence visuelle sur plusieurs plans.",
    "Mon objectif est d’aider les créateurs à produire des images, vidéos et films IA plus crédibles, en s’appuyant sur un vrai langage de réalisation : lumière, cadre, mouvement, montage et continuité visuelle.",
  ] as const,
  url: baseUrl,
  image: "/images/author.svg",
  sameAs: socialLinks.map((item) => item.href),
} as const;
