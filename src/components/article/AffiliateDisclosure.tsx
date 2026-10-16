import { ARTICLE_LABELS, type ArticleLocale } from "@/components/article/labels";

/** Bandeau d'affiliation affiché en tête d'article (frontmatter `affiliate: true`). */
export function AffiliateDisclosure({ locale, className = "" }: { locale: ArticleLocale; className?: string }) {
  const t = ARTICLE_LABELS[locale];
  return (
    <aside
      className={`affiliate-note not-prose grid gap-2 border-l border-stone/60 py-1 pl-4 sm:grid-cols-[8.5rem_1fr] sm:gap-5 ${className}`}
      aria-label={t.affiliateKicker}
    >
      <p className="meta meta-strong pt-[3px]">{t.affiliateKicker}</p>
      <p className="text-sm leading-relaxed text-fog">{t.affiliateText}</p>
    </aside>
  );
}
