import type { Post, PostFrontmatter } from "@/lib/blog";

const IMG_MD = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/;

/**
 * Version allégée d'un Post pour les listes côté client : on ne sérialise
 * jamais `content` (markdown complet) dans le payload RSC — c'est ce qui
 * faisait peser /blog à ~4 Mo de HTML. La vignette est résolue côté serveur.
 */
/**
 * Fiches par page dans la liste filtrable du blog. Vit ici, hors du composant
 * client, pour que les pages serveur lisent un vrai nombre (un export d'un
 * module "use client" n'est qu'une référence côté serveur).
 */
export const POSTS_PER_PAGE = 9;

/** Champs du frontmatter dont une fiche d'article a besoin, rien de plus. */
export type PostSummaryFrontmatter = Pick<
  PostFrontmatter,
  "title" | "excerpt" | "date" | "category"
>;

export type PostSummary = {
  slug: string;
  frontmatter: PostSummaryFrontmatter;
  thumbnail?: string;
};

export function toPostSummary(post: Post): PostSummary {
  const { title, excerpt, date, category } = post.frontmatter;
  return {
    slug: post.slug,
    frontmatter: { title, excerpt, date, category },
    thumbnail: getPostThumbnail(post),
  };
}

export function getPostThumbnail(post: Post): string | undefined {
  const fm = post.frontmatter.thumbnail?.trim();
  if (fm) return fm;

  const m = post.content.match(IMG_MD);
  if (!m) return undefined;
  const src = m[2].trim();
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/")
  ) {
    return src;
  }
  return `/images/blog/${post.slug}/${src}`;
}
