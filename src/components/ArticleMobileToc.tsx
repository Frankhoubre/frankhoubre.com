"use client";

import type { TocItem } from "@/lib/blog";
import { ArticleToc } from "@/components/ArticleToc";
import { Plus } from "@/components/FaqSection";

type Props = {
  items: TocItem[];
};

export function ArticleMobileToc({ items }: Props) {
  if (!items.length) return null;

  return (
    <details className="faq-item mt-10 lg:hidden">
      <summary className="!text-[11px] !font-medium !uppercase !tracking-[0.18em] !text-fog">
        <span>Sommaire · {items.length} sections</span>
        <Plus />
      </summary>
      <div className="pt-2">
        <ArticleToc items={items} layout="inline" />
      </div>
    </details>
  );
}
