"use client";

import { useEffect, useMemo, useState } from "react";
import type { PostSummary } from "@/lib/blog-thumbnail";
import { blogCategories } from "@/lib/site";
import { SearchInput } from "@/components/SearchInput";
import { PostCard } from "@/components/ui/PostCard";

export const POSTS_PER_PAGE = 9;

export function getPageNumbers(
  _current: number,
  total: number,
): (number | "ellipsis")[] {
  if (total <= 1) return [1];
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const set = new Set<number>();
  for (let i = 1; i <= 4; i++) set.add(i);
  for (let i = total - 2; i <= total; i++) set.add(i);
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

type Props = {
  posts?: PostSummary[];
  initialCategory?: string;
  initialSearch?: string;
  gridLayout?: boolean;
};

/**
 * Liste filtrable du blog : recherche, filtres par catégorie en capitales,
 * grille de fiches et pagination côté client (les archives statiques
 * /blog/page/N restent le chemin de crawl des moteurs).
 */
export function BlogList({
  posts = [],
  initialCategory = "",
  initialSearch = "",
  gridLayout = false,
}: Props) {
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const filtered = useMemo(() => {
    let list = posts;
    if (category) {
      list = list.filter((p) => p.frontmatter.category === category);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.frontmatter.title.toLowerCase().includes(q) ||
          p.frontmatter.excerpt.toLowerCase().includes(q),
      );
    }
    return list;
  }, [posts, category, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, currentPage]);

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full max-w-md">
          <label htmlFor="blog-search" className="meta mb-2 block">
            Recherche
          </label>
          <SearchInput value={search} onChange={setSearch} />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
          <button
            type="button"
            onClick={() => setCategory("")}
            className="chip"
            aria-pressed={category === ""}
          >
            Toutes
          </button>
          {blogCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCategory(c.slug)}
              className="chip"
              aria-pressed={category === c.slug}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <p className="meta border-t border-line pt-4" aria-live="polite">
        {filtered.length} article{filtered.length > 1 ? "s" : ""}
        {category ? ` · ${blogCategories.find((c) => c.slug === category)?.label ?? category}` : ""}
        {search.trim() ? ` · « ${search.trim()} »` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="border border-line px-6 py-16 text-center">
          <p className="h-item text-cream">Aucun article trouvé.</p>
          <p className="mt-2 text-sm text-fog">Essayez un autre mot ou retirez le filtre de catégorie.</p>
        </div>
      ) : gridLayout ? (
        <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((post, i) => (
            <li key={post.slug}>
              <PostCard
                post={post}
                href={`/blog/${post.slug}`}
                categoryHref={`/blog/category/${post.frontmatter.category}`}
                index={String((currentPage - 1) * POSTS_PER_PAGE + i + 1).padStart(2, "0")}
                headingLevel="h2"
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="border-b border-line">
          {pageItems.map((post) => (
            <li key={post.slug}>
              <PostCard
                post={post}
                href={`/blog/${post.slug}`}
                categoryHref={`/blog/category/${post.frontmatter.category}`}
                variant="row"
                headingLevel="h2"
              />
            </li>
          ))}
        </ul>
      )}

      {filtered.length > 0 && totalPages > 1 ? (
        <nav
          className="flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
          aria-label="Pagination"
        >
          <p className="meta">
            Page {currentPage} / {totalPages}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="chip"
            >
              Précédent
            </button>
            {pageNumbers.map((n, i) =>
              n === "ellipsis" ? (
                <span key={`e-${i}`} className="meta px-1">
                  …
                </span>
              ) : (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCurrentPage(n)}
                  className="chip min-w-9 justify-center px-2"
                  aria-current={n === currentPage ? "page" : undefined}
                >
                  {n}
                </button>
              ),
            )}
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="chip"
            >
              Suivant
            </button>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
