import type { Post, PostFrontmatter } from "@/lib/blog";

const IMG_MD = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/;

/**
 * Version allégée d'un Post pour les listes côté client : on ne sérialise
 * jamais `content` (markdown complet) dans le payload RSC — c'est ce qui
 * faisait peser /blog à ~4 Mo de HTML. La vignette est résolue côté serveur.
 */
export type PostSummary = {
  slug: string;
  frontmatter: PostFrontmatter;
  thumbnail?: string;
};

export function toPostSummary(post: Post): PostSummary {
  return {
    slug: post.slug,
    frontmatter: post.frontmatter,
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
