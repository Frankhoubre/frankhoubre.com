"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { blogCategories } from "@/lib/site";
import { Badge } from "@/components/Badge";
import { SearchInput } from "@/components/SearchInput";

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
  posts?: Post[];
  initialCategory?: string;
  gridLayout?: boolean;
};

export function BlogList({
  posts = [],
  initialCategory = "",
  gridLayout = false,
}: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

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

  const dateFmt = useMemo(
    () =>
      new Intl.DateTimeFormat("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    [],
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md flex-1">
          <label htmlFor="blog-search" className="sr-only">
            Recherche
          </label>
          <SearchInput value={search} onChange={setSearch} />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("")}
            className={`ds-chip ${
              category === ""
                ? "ds-chip-active"
                : ""
            }`}
          >
            Toutes
          </button>
          {blogCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCategory(c.slug)}
              className={`ds-chip ${
                category === c.slug
                  ? "ds-chip-active"
                  : ""
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-neutral-800">
          Aucun article trouvé.
        </p>
      ) : gridLayout ? (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((post) => {
            const thumb = getPostThumbnail(post);
            return (
              <li key={post.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block h-full w-full"
                    >
                      {thumb ? (
                        thumb.startsWith("http") ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={thumb}
                            alt={`Aperçu : ${post.frontmatter.title}`}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <Image
                            src={thumb}
                            alt={`Aperçu : ${post.frontmatter.title}`}
                            fill
                            className="object-cover transition duration-300 group-hover:scale-[1.02]"
                            sizes="(max-width: 1024px) 50vw, 33vw"
                          />
                        )
                      ) : (
                        <div className="flex h-full items-center justify-center text-neutral-500">
                          Aperçu
                        </div>
                      )}
                    </Link>
                    <span className="absolute left-3 top-3 z-10">
                      <Badge
                        category={post.frontmatter.category}
                        href={`/blog/category/${post.frontmatter.category}`}
                      />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <time
                      dateTime={post.frontmatter.date}
                      className="text-xs text-neutral-700"
                    >
                      {dateFmt.format(
                        new Date(`${post.frontmatter.date}T12:00:00`),
                      )}
                    </time>
                    <h2 className="mt-2 text-lg font-semibold leading-snug text-neutral-950">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-800">
                      {post.frontmatter.excerpt}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="space-y-6">
          {pageItems.map((post) => {
            const thumb = getPostThumbnail(post);
            return (
              <li key={post.slug}>
                <article className="flex flex-col gap-4 border-b border-neutral-200 pb-6 sm:flex-row">
                  {thumb ? (
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative block w-full shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:w-48"
                    >
                      <div className="relative aspect-[16/10] w-full sm:aspect-square sm:h-32 sm:w-32">
                        {thumb.startsWith("http") ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={thumb}
                            alt={`Aperçu : ${post.frontmatter.title}`}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Image
                            src={thumb}
                            alt={`Aperçu : ${post.frontmatter.title}`}
                            fill
                            className="object-cover"
                            sizes="200px"
                          />
                        )}
                      </div>
                    </Link>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        category={post.frontmatter.category}
                        href={`/blog/category/${post.frontmatter.category}`}
                      />
                      <time
                        dateTime={post.frontmatter.date}
                        className="text-xs text-neutral-700"
                      >
                        {dateFmt.format(
                          new Date(`${post.frontmatter.date}T12:00:00`),
                        )}
                      </time>
                    </div>
                    <h2 className="mt-2 text-xl font-semibold text-neutral-950">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-neutral-800">
                      {post.frontmatter.excerpt}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}

      {filtered.length > 0 && totalPages > 1 ? (
        <nav
          className="flex flex-col items-center gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:justify-between"
          aria-label="Pagination"
        >
          <p className="text-sm text-neutral-800">
            Page {currentPage} sur {totalPages}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="ds-chip rounded-md px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
            >
              Précédent
            </button>
            <div className="flex flex-wrap items-center gap-1">
              {pageNumbers.map((n, i) =>
                n === "ellipsis" ? (
                  <span
                    key={`e-${i}`}
                    className="px-2 text-neutral-600"
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCurrentPage(n)}
                    className={`ds-chip min-w-9 rounded-md px-2 py-1.5 text-sm font-medium ${
                      n === currentPage
                        ? "ds-chip-active"
                        : ""
                    }`}
                  >
                    {n}
                  </button>
                ),
              )}
            </div>
            <button
              type="button"
              disabled={currentPage >= totalPages}
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              className="ds-chip rounded-md px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40"
            >
              Suivant
            </button>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
