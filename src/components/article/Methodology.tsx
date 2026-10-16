import type { ReactNode } from "react";
import { Plus } from "@/components/FaqSection";
import { ARTICLE_LABELS, formatArticleDate, type ArticleLocale } from "@/components/article/labels";

type Props = {
  locale: ArticleLocale;
  date?: string;
  children?: ReactNode;
};

/** Encart repliable et discret : sources consultées, date, ce qui a été testé ou non. */
export function Methodology({ locale, date, children }: Props) {
  const t = ARTICLE_LABELS[locale];
  const d = formatArticleDate(date, locale, "long");
  return (
    <details className="methodology faq-item my-12">
      <summary>
        <span className="meta meta-strong">{t.methodology}</span>
        <Plus />
      </summary>
      <div className="methodology-body text-[15px] leading-relaxed text-fog">
        {d ? (
          <p className="meta mb-3 text-[10px]">
            {t.methodologyDate}{" "}
            {d.iso ? <time dateTime={d.iso}>{d.label}</time> : d.label}
          </p>
        ) : null}
        {children}
      </div>
    </details>
  );
}
