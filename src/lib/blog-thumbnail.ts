import type { Post } from "@/lib/blog";

const IMG_MD = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/;

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
