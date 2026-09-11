import Link from "next/link";
import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { PostCard } from "@/components/ui/PostCard";

export const POSTS_PER_ARCHIVE_PAGE = 24;

type Locale = "fr" | "en";

/** Chemin d'une page d'archive (page 1 = racine du blog). */
export function blogPagePath(locale: Locale, page: number): string {
  const root = locale === "en" ? "/en/blog" : "/blog";
  return page <= 1 ? root : `${root}/page/${page}`;
}

function pageNumbers(total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set<number>([1, 2, 3, 4, total - 2, total - 1, total]);
  const sorted = [...set].sort((a, b) => a - b);
  const out: (number | "ellipsis")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1 && prev > 0) out.push("ellipsis");
    out.push(p);
    prev = p;
  }
  return out;
}

const COPY = {
  fr: {
    pageOf: (c: number, t: number) => `Page ${c} / ${t}`,
    prev: "Précédent",
    next: "Suivant",
    pagination: "Pagination des archives",
  },
  en: {
    pageOf: (c: number, t: number) => `Page ${c} / ${t}`,
    prev: "Previous",
    next: "Next",
    pagination: "Pagination",
  },
} as const;

type Props = {
  /** Posts de la page courante uniquement (déjà découpés). */
  posts: Post[];
  currentPage: number;
  totalPages: number;
  locale: Locale;
};

/**
 * Grille d'articles rendue côté serveur avec pagination par vraies URLs
 * (/blog, /blog/page/2, …). Chaque article ancien garde un chemin de crawl
 * interne, et la page reste légère (24 cartes max).
 */
export function PaginatedBlogGrid({ posts, currentPage, totalPages, locale }: Props) {
  const copy = COPY[locale];
  const articleHref = (slug: string) =>
    locale === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;
  const offset = (currentPage - 1) * POSTS_PER_ARCHIVE_PAGE;

  return (
    <>
      <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <li key={p.slug}>
            <PostCard
              post={{ slug: p.slug, frontmatter: p.frontmatter, thumbnail: getPostThumbnail(p) }}
              href={articleHref(p.slug)}
              locale={locale}
              categoryHref={locale === "fr" ? `/blog/category/${p.frontmatter.category}` : undefined}
              index={String(offset + i + 1).padStart(2, "0")}
              headingLevel="h2"
            />
          </li>
        ))}
      </ul>

      {totalPages > 1 ? (
        <nav
          className="mt-14 flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
          aria-label={copy.pagination}
        >
          <p className="meta">{copy.pageOf(currentPage, totalPages)}</p>
          <div className="flex flex-wrap items-center gap-2">
            {currentPage > 1 ? (
              <Link href={blogPagePath(locale, currentPage - 1)} rel="prev" className="chip">
                {copy.prev}
              </Link>
            ) : null}
            {pageNumbers(totalPages).map((n, i) =>
              n === "ellipsis" ? (
                <span key={`e-${i}`} className="meta px-1">
                  …
                </span>
              ) : (
                <Link
                  key={n}
                  href={blogPagePath(locale, n)}
                  aria-current={n === currentPage ? "page" : undefined}
                  className="chip min-w-9 justify-center px-2"
                >
                  {n}
                </Link>
              ),
            )}
            {currentPage < totalPages ? (
              <Link href={blogPagePath(locale, currentPage + 1)} rel="next" className="chip">
                {copy.next}
              </Link>
            ) : null}
          </div>
        </nav>
      ) : null}
    </>
  );
}
