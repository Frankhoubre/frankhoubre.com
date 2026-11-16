"use client";

import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import { SearchInput } from "@/components/SearchInput";

type SearchPostItem = {
  slug: string;
  title: string;
};

type Props = {
  /** Articles affichés par défaut (les plus récents) : rendus dans le HTML. */
  posts: SearchPostItem[];
  currentSlug: string;
};

const INDEX_URL = "/api/blog-index";

/**
 * Recherche de la colonne d'article. Le HTML ne porte que les articles
 * récents ; l'index complet (slug + titre) est chargé au premier focus.
 */
export function ArticleSidebarSearch({ posts, currentSlug }: Props) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchPostItem[] | null>(null);
  const requested = useRef(false);

  const loadIndex = useCallback(() => {
    if (requested.current) return;
    requested.current = true;
    fetch(INDEX_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: SearchPostItem[]) => setIndex(data))
      .catch(() => {
        // Nouvel essai au prochain focus ; d'ici là, la recherche porte sur les récents.
        requested.current = false;
      });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts.filter((p) => p.slug !== currentSlug).slice(0, 8);
    return (index ?? posts)
      .filter((p) => p.slug !== currentSlug && p.title.toLowerCase().includes(q))
      .slice(0, 8);
  }, [posts, index, currentSlug, query]);

  return (
    <section
      className="mt-10 w-56 border-t border-line pt-6 text-sm"
      aria-label="Recherche blog"
      onFocusCapture={loadIndex}
      onPointerEnter={loadIndex}
    >
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
