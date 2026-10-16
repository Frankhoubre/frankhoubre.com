import type { ReactNode } from "react";
import { Arrow } from "@/components/ui/Cta";
import { ArticleLink } from "@/components/article/ArticleLink";
import { ARTICLE_LABELS, type ArticleLocale } from "@/components/article/labels";
import { resolveArticleLink } from "@/lib/affiliate";

type VerdictProps = {
  locale: ArticleLocale;
  outil?: string;
  tool?: string;
  pourQui?: string;
  forWhom?: string;
  lien?: string;
  link?: string;
  lienLabel?: string;
  linkLabel?: string;
  sponsored?: boolean;
  children?: ReactNode;
};

/**
 * Encart verdict sans note ni étoiles : pour qui, points forts, points
 * faibles, avis nuancé, lien vers l'outil. Les blocs <Forts> et <Faibles>
 * se placent côte à côte au-delà de 640 px, le reste du contenu est l'avis.
 */
export function Verdict({ locale, children, sponsored = false, ...p }: VerdictProps) {
  const t = ARTICLE_LABELS[locale];
  const tool = p.outil ?? p.tool;
  const forWhom = p.pourQui ?? p.forWhom;
  const href = p.lien ?? p.link;
  const linkLabel = p.lienLabel ?? p.linkLabel ?? tool;
  const isSponsored = href ? resolveArticleLink(href, sponsored).sponsored : false;

  return (
    <aside
      className="verdict not-prose my-14 border border-line-strong bg-graphite"
      aria-label={tool ? `${t.verdict} : ${tool}` : t.verdict}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line px-5 py-5 sm:px-8">
        <p className="meta meta-strong">{t.verdict}</p>
        {tool ? (
          <p className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-cream">
            {tool}
          </p>
        ) : null}
      </div>

      {forWhom ? (
        <div className="grid gap-1 border-b border-line px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6 sm:px-8">
          <p className="meta pt-1">{t.forWhom}</p>
          <p className="text-[15px] leading-relaxed text-stone">{forWhom}</p>
        </div>
      ) : null}

      <div className="verdict-body grid grid-cols-[minmax(0,1fr)] gap-x-8 px-5 pb-6 sm:grid-cols-[repeat(2,minmax(0,1fr))] sm:px-8">{children}</div>

      {href && linkLabel ? (
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line px-5 py-5 sm:px-8">
          <ArticleLink href={href} sponsored={sponsored} className="btn btn-sm">
            <span>{linkLabel}</span>
            <Arrow />
          </ArticleLink>
          {isSponsored ? <span className="meta">{t.affiliateLink}</span> : null}
        </div>
      ) : null}
    </aside>
  );
}

function VerdictList({ label, tone, children }: { label: string; tone: "plus" | "minus"; children?: ReactNode }) {
  return (
    <div className={`verdict-list verdict-${tone} pt-6`}>
      <p className="meta meta-strong flex items-center gap-2">
        <span className="verdict-mark" aria-hidden />
        {label}
      </p>
      <div className="mt-3 text-[15px] leading-relaxed text-stone">{children}</div>
    </div>
  );
}

export function Strengths({ locale, children }: { locale: ArticleLocale; children?: ReactNode }) {
  return (
    <VerdictList label={ARTICLE_LABELS[locale].strengths} tone="plus">
      {children}
    </VerdictList>
  );
}

export function Weaknesses({ locale, children }: { locale: ArticleLocale; children?: ReactNode }) {
  return (
    <VerdictList label={ARTICLE_LABELS[locale].weaknesses} tone="minus">
      {children}
    </VerdictList>
  );
}
