"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { POSTS_PER_PAGE, type PostSummary } from "@/lib/blog-thumbnail";
import { blogCategories } from "@/lib/site";
import { SearchInput } from "@/components/SearchInput";
import { PostCard } from "@/components/ui/PostCard";


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
  /** Première page de la liste, rendue dans le HTML (9 fiches). */
  posts?: PostSummary[];
  /** Nombre total d'articles de la vue initiale (tout le blog ou la catégorie). */
  total?: number;
  initialCategory?: string;
  initialSearch?: string;
  gridLayout?: boolean;
};

const INDEX_URL = "/api/blog-summaries";

/**
 * Liste filtrable du blog : recherche, filtres par catégorie, grille de
 * fiches et pagination côté client. Le HTML ne porte que la première page ;
 * l'index complet (résumés de tous les articles) est chargé à la première
 * interaction. Les archives statiques /blog/page/N et l'index des pages de
 * catégorie restent le chemin de crawl des moteurs.
 */
export function BlogList({
  posts = [],
  total = posts.length,
  initialCategory = "",
  initialSearch = "",
  gridLayout = false,
}: Props) {
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [index, setIndex] = useState<PostSummary[] | null>(null);
  const requested = useRef(false);

  const loadIndex = useCallback(() => {
    if (requested.current) return;
    requested.current = true;
    fetch(INDEX_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: PostSummary[]) => setIndex(data))
      .catch(() => {
        // Nouvel essai à la prochaine interaction.
        requested.current = false;
      });
  }, []);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setSearch(initialSearch);
    if (initialSearch.trim()) loadIndex();
  }, [initialSearch, loadIndex]);

  // Tant que rien n'a été filtré, la première page vient du HTML serveur.
  const untouched = category === initialCategory && !search.trim();

  const filtered = useMemo(() => {
    if (!index) return posts;
    let list = index;
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
  }, [index, posts, category, search]);

  const loading = !index && (!untouched || currentPage > 1);
  const count = index ? filtered.length : total;
  const totalPages = Math.max(1, Math.ceil(count / POSTS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const pageItems = useMemo(() => {
    if (!index) return posts.slice(0, POSTS_PER_PAGE);
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [index, posts, filtered, currentPage]);

  const pickCategory = (slug: string) => {
    loadIndex();
    setCategory(slug);
  };
  const onSearch = (value: string) => {
    loadIndex();
    setSearch(value);
  };
  const goToPage = (n: number) => {
    loadIndex();
    setCurrentPage(n);
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="space-y-8" onPointerEnter={loadIndex} onFocusCapture={loadIndex} aria-busy={loading}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="w-full max-w-md">
          <label htmlFor="blog-search" className="meta mb-2 block">
            Recherche
          </label>
          <SearchInput value={search} onChange={onSearch} />
        </div>
        <div className="chip-scroller flex gap-2 sm:flex-wrap" role="group" aria-label="Filtrer par catégorie">
          <button
            type="button"
            onClick={() => pickCategory("")}
            className="chip"
            aria-pressed={category === ""}
          >
            Toutes
          </button>
          {blogCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => pickCategory(c.slug)}
              className="chip"
              aria-pressed={category === c.slug}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <p className="meta border-t border-line pt-4" aria-live="polite">
        {count} article{count > 1 ? "s" : ""}
        {category ? ` · ${blogCategories.find((c) => c.slug === category)?.label ?? category}` : ""}
        {search.trim() ? ` · « ${search.trim()} »` : ""}
      </p>

      {count === 0 ? (
        <div className="border border-line px-6 py-16 text-center">
          <p className="h-item text-cream">Aucun article trouvé.</p>
          <p className="mt-2 text-sm text-fog">Essayez un autre mot ou retirez le filtre de catégorie.</p>
        </div>
      ) : gridLayout ? (
        <ul className={`grid gap-x-8 gap-y-14 transition-opacity duration-200 sm:grid-cols-2 lg:grid-cols-3 ${loading ? "opacity-50" : ""}`}>
          {pageItems.map((post, i) => (
            <li key={post.slug}>
              <PostCard
                post={post}
                href={`/blog/${post.slug}`}
                categoryHref={`/blog/category/${post.frontmatter.category}`}
                index={String((currentPage - 1) * POSTS_PER_PAGE + i + 1).padStart(2, "0")}
                headingLevel="h2"
                priority={i === 0 && currentPage === 1}
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

      {count > 0 && totalPages > 1 ? (
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
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
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
                  onClick={() => goToPage(n)}
                  className="chip min-w-9 pointer-coarse:min-w-11 justify-center px-2"
                  aria-current={n === currentPage ? "page" : undefined}
                >
                  {n}
                </button>
              ),
            )}
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
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
