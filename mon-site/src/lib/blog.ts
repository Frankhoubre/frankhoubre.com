import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  isBlogCategorySlug,
  type BlogCategorySlug,
} from "@/lib/site";
import { slugify, stripMarkdownInline } from "@/lib/slugify";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  thumbnail?: string;
  dateModified?: string;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

export type TocItem = { id: string; text: string; level: 2 };

/**
 * Un article avec date YYYY-MM-DD est visible pendant tout ce jour calendaire
 * (heure locale du serveur ou du runtime), pas seulement après 23:59:59.
 */
function isPublishedDate(dateStr: string): boolean {
  const parts = dateStr.split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return false;
  const [y, m, d] = parts;
  const publishDay = new Date(y, m - 1, d);
  if (Number.isNaN(publishDay.getTime())) return false;
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return publishDay.getTime() <= todayStart.getTime();
}

export function isPostPublished(post: Post): boolean {
  return isPublishedDate(post.frontmatter.date);
}

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

export function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR);
  const bySlug = new Map<string, "md" | "mdx">();
  for (const f of files) {
    if (f.endsWith(".md")) {
      bySlug.set(f.slice(0, -3), "md");
    } else if (f.endsWith(".mdx")) {
      const slug = f.slice(0, -4);
      if (!bySlug.has(slug)) bySlug.set(slug, "mdx");
    }
  }
  return Array.from(bySlug.keys());
}

export function getPathForSlug(slug: string): string | null {
  const md = path.join(BLOG_DIR, `${slug}.md`);
  if (fs.existsSync(md)) return md;
  const mdx = path.join(BLOG_DIR, `${slug}.mdx`);
  if (fs.existsSync(mdx)) return mdx;
  return null;
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = getPathForSlug(slug);
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  if (!isValidPostFrontmatter(data as Record<string, unknown>)) return null;
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content: content.trimStart(),
  };
}

export function getAllPosts(): Post[] {
  const posts = getSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .filter((p) => isPublishedDate(p.frontmatter.date));

  posts.sort((a, b) => {
    const ta = new Date(`${a.frontmatter.date}T00:00:00`).getTime();
    const tb = new Date(`${b.frontmatter.date}T00:00:00`).getTime();
    return tb - ta;
  });
  return posts;
}

export function getPostsByCategory(category: BlogCategorySlug): Post[] {
  return getAllPosts().filter((p) => p.frontmatter.category === category);
}

export function getLatestPosts(n: number): Post[] {
  return getAllPosts().slice(0, n);
}

/** Actualité en tête lorsqu’il y en a ; sinon les derniers articles publiés. */
export function getHomeLatestPosts(limit: number): Post[] {
  const byActualite = getPostsByCategory("actualite");
  if (byActualite.length >= limit) {
    return byActualite.slice(0, limit);
  }
  const seen = new Set(byActualite.map((p) => p.slug));
  const rest = getAllPosts().filter((p) => !seen.has(p.slug));
  return [...byActualite, ...rest].slice(0, limit);
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 3,
): Post[] {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === currentSlug);
  if (!current) return [];

  const others = all.filter((p) => p.slug !== currentSlug);
  const cat = current.frontmatter.category as BlogCategorySlug;
  const same = others.filter((p) => p.frontmatter.category === cat);
  const rest = others.filter((p) => p.frontmatter.category !== cat);
  const merged = [...same, ...rest];
  return merged.slice(0, limit);
}

export function readingTimeMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function nextHeadingId(text: string, counts: Map<string, number>): string {
  const base = slugify(text);
  const n = (counts.get(base) ?? 0) + 1;
  counts.set(base, n);
  return n === 1 ? base : `${base}-${n}`;
}

export function extractToc(content: string): TocItem[] {
  const lines = content.split(/\n/);
  const counts = new Map<string, number>();
  const items: TocItem[] = [];

  for (const line of lines) {
    const md = line.match(/^##\s+(.+?)\s*$/);
    if (md) {
      const text = stripMarkdownInline(md[1]);
      if (!text) continue;
      items.push({
        id: nextHeadingId(text, counts),
        text,
        level: 2,
      });
      continue;
    }
    const html = line.match(/^<h2[^>]*>([\s\S]*?)<\/h2>\s*$/i);
    if (html) {
      const text = stripMarkdownInline(
        html[1].replace(/<[^>]+>/g, ""),
      );
      if (!text) continue;
      items.push({
        id: nextHeadingId(text, counts),
        text,
        level: 2,
      });
    }
  }
  return items;
}

export function extractYouTubeVideoIds(content: string): string[] {
  const ids = new Set<string>();
  const re1 =
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/g;
  const re2 = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]{11})/g;
  let m: RegExpExecArray | null;
  while ((m = re1.exec(content)) !== null) ids.add(m[1]);
  while ((m = re2.exec(content)) !== null) ids.add(m[1]);
  return [...ids];
}
