"use client";

import type { TocItem } from "@/lib/blog";
import { ArticleToc } from "@/components/ArticleToc";
import { Plus } from "@/components/FaqSection";

type Props = {
  items: TocItem[];
  label?: string;
  sectionsLabel?: string;
};

export function ArticleMobileToc({ items, label = "Sommaire", sectionsLabel = "sections" }: Props) {
  if (!items.length) return null;

  return (
    <details className="faq-item mt-10 xl:hidden">
      <summary className="!text-[11px] !font-medium !uppercase !tracking-[0.18em] !text-fog">
        <span>{label} · {items.length} {sectionsLabel}</span>
        <Plus />
      </summary>
      <div className="pt-2">
        <ArticleToc items={items} layout="inline" label={label} />
      </div>
    </details>
  );
}
