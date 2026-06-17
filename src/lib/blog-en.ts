import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { isBlogCategorySlug } from "@/lib/site";
import {
  isPostPublished,
  type Post,
  type PostFrontmatter,
} from "@/lib/blog";

/**
 * Blog anglais : même structure que le blog FR mais sous content/blog-en.
 * Vide au lancement, alimenté par la routine quotidienne (1 article EN/jour).
 */
const BLOG_EN_DIR = path.join(process.cwd(), "content", "blog-en");

function isValidPostFrontmatter(
  data: Record<string, unknown>,
): data is PostFrontmatter {
  if (typeof data.title !== "string" || !data.title.trim()) return false;
  if (typeof data.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data.date))
    return false;
  if (typeof data.category !== "string" || !isBlogCategorySlug(data.category))
    return false;
  if (typeof data.excerpt !== "string") return false;
  if (data.thumbnail !== undefined && typeof data.thumbnail !== "string")
    return false;
  if (data.dateModified !== undefined && typeof data.dateModified !== "string")
    return false;
  return true;
}

export function getEnSlugs(): string[] {
  if (!fs.existsSync(BLOG_EN_DIR)) return [];
  const bySlug = new Set<string>();
  for (const f of fs.readdirSync(BLOG_EN_DIR)) {
    if (f.endsWith(".md")) bySlug.add(f.slice(0, -3));
    else if (f.endsWith(".mdx")) bySlug.add(f.slice(0, -4));
  }
  return Array.from(bySlug);
}

export function getEnPostBySlug(slug: string): Post | null {
  for (const ext of [".md", ".mdx"]) {
    const fp = path.join(BLOG_EN_DIR, `${slug}${ext}`);
    if (!fs.existsSync(fp)) continue;
    const { data, content } = matter(fs.readFileSync(fp, "utf8"));
    if (!isValidPostFrontmatter(data as Record<string, unknown>)) return null;
    return { slug, frontmatter: data as PostFrontmatter, content: content.trimStart() };
  }
  return null;
}

export function getAllEnPosts(): Post[] {
  return getEnSlugs()
    .map(getEnPostBySlug)
    .filter((p): p is Post => p !== null)
    .filter(isPostPublished)
    .sort(
      (a, b) =>
        new Date(`${b.frontmatter.date}T00:00:00`).getTime() -
        new Date(`${a.frontmatter.date}T00:00:00`).getTime(),
    );
}
