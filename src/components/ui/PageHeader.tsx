import type { ReactNode } from "react";

type Crumb = { label: string; href?: string };

type Props = {
  /** Repère de dossier : « 02 / JOURNAL ». */
  index?: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Colonne de droite : liens, compteurs, annotations. */
  aside?: ReactNode;
  /** Fil d'Ariane rendu par le parent (déjà mis en forme). */
  breadcrumb?: ReactNode;
  className?: string;
  size?: "xl" | "lg" | "md";
};

const SIZES = {
  xl: "display display-lg",
  lg: "h-section",
  md: "h-block",
} as const;

/**
 * En-tête de page intérieure : kicker et fil d'Ariane, titre monumental,
 * chapô serif, annotation en marge droite. Fermé par une ligne fine.
 */
export function PageHeader({
  index,
  kicker,
  title,
  lede,
  aside,
  breadcrumb,
  className = "",
  size = "xl",
}: Props) {
  return (
    <header className={`container-x pt-[calc(var(--header-h)+3rem)] sm:pt-[calc(var(--header-h)+4.5rem)] ${className}`}>
      {breadcrumb ? <div className="mb-8">{breadcrumb}</div> : null}
      <div className="grid-12 items-end gap-y-8">
        <div className="col-span-12 lg:col-span-9">
          <p className="meta flex items-center gap-3">
            {index ? <span className="meta-strong tabular">{index}</span> : null}
            <span>{kicker}</span>
          </p>
          <h1 className={`mt-5 ${SIZES[size]}`}>{title}</h1>
          {lede ? <div className="lede mt-6 max-w-3xl">{lede}</div> : null}
        </div>
        {aside ? <div className="col-span-12 lg:col-span-3 lg:justify-self-end lg:text-right">{aside}</div> : null}
      </div>
      <div className="hairline mt-10 sm:mt-14" />
    </header>
  );
}

export function Breadcrumb({ items, label = "Fil d'Ariane" }: { items: Crumb[]; label?: string }) {
  return (
    <nav aria-label={label}>
      <ol className="meta flex flex-wrap items-center gap-x-3 gap-y-1">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-3">
            {i > 0 ? <span className="text-fog/50" aria-hidden>/</span> : null}
            {item.href ? (
              <a href={item.href} className="link-muted">
                {item.label}
              </a>
            ) : (
              <span className="meta-strong line-clamp-1 max-w-[16rem] sm:max-w-none">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
