import type { ReactNode } from "react";
import {
  ARTICLE_LABELS,
  formatArticleDate,
  sourceHost,
  type ArticleLocale,
} from "@/components/article/labels";

type Props = {
  locale: ArticleLocale;
  legende?: string;
  caption?: string;
  source?: string;
  verifieLe?: string;
  checkedOn?: string;
  children?: ReactNode;
};

/**
 * Tableau comparatif : le tableau markdown passé en enfant garde sa première
 * colonne figée pendant le défilement horizontal (lisible sur 360 px), puis
 * la ligne « Prix relevés le … » et la source.
 */
export function ComparisonTable({ locale, children, ...p }: Props) {
  const t = ARTICLE_LABELS[locale];
  const caption = p.legende ?? p.caption;
  const checked = formatArticleDate(p.verifieLe ?? p.checkedOn, locale);
  const host = sourceHost(p.source);

  return (
    <figure className="cmp-table my-12">
      {caption ? <p className="meta meta-strong mb-3">{caption}</p> : null}
      <p className="meta mb-2 text-[10px] sm:hidden">{t.swipeHint}</p>
      {children}
      {checked || p.source ? (
        <figcaption className="-mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[13px] leading-relaxed text-fog">
          {checked ? (
            <span>
              {t.pricesCheckedOn}{" "}
              {checked.iso ? <time dateTime={checked.iso}>{checked.label}</time> : checked.label}
            </span>
          ) : null}
          {p.source ? (
            <span>
              {t.source}
              {t.colon}{" "}
              <a href={p.source} target="_blank" rel="noopener noreferrer">
                {host ?? p.source}
              </a>
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
