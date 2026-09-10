import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { Badge } from "@/components/Badge";

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
    preview: "Aperçu",
    pageOf: (c: number, t: number) => `Page ${c} sur ${t}`,
    prev: "Précédent",
    next: "Suivant",
    pagination: "Pagination des archives",
  },
  en: {
    preview: "Preview",
    pageOf: (c: number, t: number) => `Page ${c} of ${t}`,
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
  const dateFmt = new Intl.DateTimeFormat(locale === "en" ? "en-US" : "fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const articleHref = (slug: string) =>
    locale === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {posts.map((p) => {
          const thumb = getPostThumbnail(p);
          return (
            <article
              key={p.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(228,220,210,0.95)] bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(224,112,32,0.5)] hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Link href={articleHref(p.slug)} className="relative block h-full w-full">
                  {thumb ? (
                    thumb.startsWith("http") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={thumb}
                        alt={`${copy.preview} : ${p.frontmatter.title}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <Image
                        src={thumb}
                        alt={`${copy.preview} : ${p.frontmatter.title}`}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    )
                  ) : (
                    <div className="flex h-full items-center justify-center text-neutral-500">
                      {copy.preview}
                    </div>
                  )}
                </Link>
                <span className="absolute left-3 top-3 z-10">
                  <Badge
                    category={p.frontmatter.category}
                    href={
                      locale === "fr" ? `/blog/category/${p.frontmatter.category}` : undefined
                    }
                  />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time dateTime={p.frontmatter.date} className="text-xs text-neutral-700">
                  {dateFmt.format(new Date(`${p.frontmatter.date}T12:00:00`))}
                </time>
                <h2 className="mt-2 text-base leading-snug text-neutral-950 normal-case tracking-normal">
                  <Link href={articleHref(p.slug)} className="hover:underline">
                    {p.frontmatter.title}
                  </Link>
                </h2>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-700">
                  {p.frontmatter.excerpt}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {totalPages > 1 ? (
        <nav
          className="mt-12 flex flex-col items-center gap-4 border-t border-[rgba(228,220,210,0.95)] pt-8 sm:flex-row sm:justify-between"
          aria-label={copy.pagination}
        >
          <p className="text-sm text-neutral-800">{copy.pageOf(currentPage, totalPages)}</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {currentPage > 1 ? (
              <Link
                href={blogPagePath(locale, currentPage - 1)}
                rel="prev"
                className="ds-chip rounded-md px-3 py-1.5 text-sm font-medium"
              >
                {copy.prev}
              </Link>
            ) : null}
            <div className="flex flex-wrap items-center gap-1">
              {pageNumbers(totalPages).map((n, i) =>
                n === "ellipsis" ? (
                  <span key={`e-${i}`} className="px-2 text-neutral-600">
                    …
                  </span>
                ) : (
                  <Link
                    key={n}
                    href={blogPagePath(locale, n)}
                    aria-current={n === currentPage ? "page" : undefined}
                    className={`ds-chip min-w-9 rounded-md px-2 py-1.5 text-center text-sm font-medium ${
                      n === currentPage ? "ds-chip-active" : ""
                    }`}
                  >
                    {n}
                  </Link>
                ),
              )}
            </div>
            {currentPage < totalPages ? (
              <Link
                href={blogPagePath(locale, currentPage + 1)}
                rel="next"
                className="ds-chip rounded-md px-3 py-1.5 text-sm font-medium"
              >
                {copy.next}
              </Link>
            ) : null}
          </div>
        </nav>
      ) : null}
    </>
  );
}
