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

/** Profils publics (accueil, JSON-LD `sameAs`). */
export const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@frankhoubre" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/frank-houbre/" },
  { label: "Instagram", href: "https://www.instagram.com/frank.houbre/" },
  { label: "YouTube", href: "https://www.youtube.com/@BusinessDynamite" },
  { label: "IMDb", href: "https://www.imdb.com/name/nm17957426/" },
] as const;

export const person = {
  name: "Frank Houbre",
  authorDisplayName: "Frank Houbre",
  jobTitle: "Créateur, image & vidéo par IA",
  /** Court résumé (SEO, JSON-LD, cartes de partage). */
  description:
    "Guides et tutoriels pour exploiter l’IA générative au service d’un rendu cinématographique crédible : lumière, prompts, image et vidéo.",
  /** Paragraphes affichés dans la section auteur des articles. */
  bio: [
    "J’écris sur ce site pour partager des workflows concrets autour de l’IA générative : prompts structurés comme un brief photo ou vidéo, erreurs qui donnent un rendu « plastique », et pistes pour garder une cohérence visuelle sur plusieurs plans.",
    "L’idée n’est pas de collectionner des effets spectaculaires, mais d’approcher un langage de réalisation — lumière naturelle, grain, mouvement de caméra — pour que le résultat tienne la route à l’écran.",
  ] as const,
  url: baseUrl,
  image: "/images/author.svg",
  sameAs: socialLinks.map((item) => item.href),
} as const;
