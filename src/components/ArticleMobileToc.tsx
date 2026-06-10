"use client";

import type { TocItem } from "@/lib/blog";
import { ArticleToc } from "@/components/ArticleToc";

type Props = {
  items: TocItem[];
};

export function ArticleMobileToc({ items }: Props) {
  if (!items.length) return null;

  return (
    <details className="ds-surface group mt-8 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-semibold text-neutral-950 [&::-webkit-details-marker]:hidden">
        <span>Sommaire de l&apos;article</span>
        <span
          className="text-xs font-medium text-neutral-500 transition group-open:rotate-180"
          aria-hidden
        >
          ▼
        </span>
      </summary>
      <div className="border-t border-neutral-200/90 px-4 pb-4 pt-2">
        <ArticleToc items={items} layout="inline" />
      </div>
    </details>
  );
}
