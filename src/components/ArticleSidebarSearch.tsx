"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchInput } from "@/components/SearchInput";

type SearchPostItem = {
  slug: string;
  title: string;
};

type Props = {
  posts: SearchPostItem[];
  currentSlug: string;
};

export function ArticleSidebarSearch({ posts, currentSlug }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = posts.filter((p) => p.slug !== currentSlug);
    if (!q) return base.slice(0, 8);
    return base
      .filter((p) => p.title.toLowerCase().includes(q))
      .slice(0, 8);
  }, [posts, currentSlug, query]);

  return (
    <section className="mt-8 w-56 text-sm text-neutral-800" aria-label="Recherche blog">
      <p className="mb-3 font-semibold text-neutral-950">Rechercher un article</p>
      <SearchInput
        id="article-sidebar-search"
        value={query}
        onChange={setQuery}
        placeholder="Titre d'article..."
      />
      <ul className="mt-3 space-y-2">
        {filtered.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block text-neutral-800 hover:text-neutral-950 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
