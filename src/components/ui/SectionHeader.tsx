import type { ReactNode } from "react";

type Props = {
  /** Numéro de séquence affiché en marge : « 01 », « 02 »… */
  index?: string;
  /** Kicker en capitales espacées. */
  kicker: string;
  title: ReactNode;
  id?: string;
  /** Chapô éditorial (serif italique) ou texte courant. */
  lede?: ReactNode;
  /** Colonne de droite : lien, annotation, compteur. */
  aside?: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "section" | "block";
};

/**
 * En-tête de section en double page : numéro et kicker en marge, titre
 * monumental sur sept colonnes, annotation à droite. La composition est
 * asymétrique par construction (3 / 7 / 2).
 */
export function SectionHeader({
  index,
  kicker,
  title,
  id,
  lede,
  aside,
  as: Tag = "h2",
  className = "",
  size = "section",
}: Props) {
  return (
    <div className={`grid-12 items-end gap-y-6 ${className}`}>
      <div className="col-span-12 flex items-baseline gap-4 lg:col-span-3 lg:block">
        {index ? <span className="meta meta-strong tabular">{index}</span> : null}
        <p className={`meta ${index ? "lg:mt-2" : ""}`}>{kicker}</p>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <Tag id={id} className={size === "section" ? "h-section" : "h-block"}>
          {title}
        </Tag>
        {lede ? <div className="mt-5 max-w-2xl text-base leading-relaxed text-fog lg:text-[1.05rem]">{lede}</div> : null}
      </div>
      {aside ? (
        <div className="col-span-12 lg:col-span-2 lg:justify-self-end lg:text-right">{aside}</div>
      ) : null}
    </div>
  );
}
