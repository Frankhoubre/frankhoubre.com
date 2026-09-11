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
    return base.filter((p) => p.title.toLowerCase().includes(q)).slice(0, 8);
  }, [posts, currentSlug, query]);

  return (
    <section className="mt-10 w-56 border-t border-line pt-6 text-sm" aria-label="Recherche blog">
      <p className="meta mb-3">Rechercher un article</p>
      <SearchInput
        id="article-sidebar-search"
        value={query}
        onChange={setQuery}
        placeholder="Titre d'article"
        compact
      />
      <ul className="mt-4 space-y-2.5">
        {filtered.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block text-[13px] leading-snug text-fog transition-colors hover:text-cream">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
