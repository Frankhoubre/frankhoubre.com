import Image from "next/image";
import type { ReactNode } from "react";
import { Badge } from "@/components/Badge";
import { Breadcrumb } from "@/components/ui/PageHeader";

type Props = {
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  minutesLabel: string;
  category: string;
  categoryHref?: string;
  thumb?: string;
  thumbAlt: string;
  breadcrumb: { label: string; href?: string }[];
  breadcrumbLabel?: string;
  /** Boutons de partage ou autre ligne d'action sous le chapô. */
  actions?: ReactNode;
  /** Légende sous le photogramme : « Fig. 01 · … ». */
  figureCaption?: string;
};

/**
 * Ouverture d'article : fil d'Ariane, ligne de métadonnées (catégorie, date,
 * durée), titre, chapô serif, puis le photogramme en 2:1 posé sur toute la
 * largeur de la colonne de lecture.
 */
export function ArticleHeader({
  title,
  excerpt,
  date,
  dateLabel,
  minutesLabel,
  category,
  categoryHref,
  thumb,
  thumbAlt,
  breadcrumb,
  breadcrumbLabel,
  actions,
  figureCaption,
}: Props) {
  return (
    <header>
      <Breadcrumb items={breadcrumb} label={breadcrumbLabel} />
      <div className="meta mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
        <Badge category={category} href={categoryHref} plain />
        <span className="text-fog/50" aria-hidden>/</span>
        <time dateTime={date}>{dateLabel}</time>
        <span className="text-fog/50" aria-hidden>/</span>
        <span>{minutesLabel}</span>
      </div>
      <h1 className="mt-6 text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.02] tracking-[-0.025em] text-cream">
        {title}
      </h1>
      <p className="lede mt-6">{excerpt}</p>
      {actions ? <div className="mt-8 border-t border-line pt-5">{actions}</div> : null}

      {thumb ? (
        <figure className="mt-12">
          <div className="frame frame-grain frame-marks relative aspect-[2/1] w-full">
            {thumb.startsWith("http") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={thumb} alt={thumbAlt} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <Image src={thumb} alt={thumbAlt} fill priority sizes="(max-width: 768px) 100vw, 720px" />
            )}
          </div>
          {figureCaption ? <figcaption className="meta mt-3">{figureCaption}</figcaption> : null}
        </figure>
      ) : null}
    </header>
  );
}
