import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type Props = {
  legende?: string;
  caption?: string;
  children?: ReactNode;
};

/**
 * Galerie de 2 à 6 captures : une colonne sur mobile, deux au-delà de 640 px,
 * trois quand le nombre d'images est un multiple de trois. Chaque capture
 * garde son ratio et sa propre lightbox.
 */
export function Gallery({ legende, caption, children }: Props) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement<{ compact?: boolean }>[];
  if (!items.length) return null;
  const cols = items.length % 3 === 0 ? "sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2";
  const label = legende ?? caption;

  return (
    <section className="gallery not-prose my-12" aria-label={label}>
      {label ? <p className="meta meta-strong mb-4">{label}</p> : null}
      <div className={`grid grid-cols-1 items-start gap-x-5 gap-y-8 ${cols}`}>
        {items.map((child, i) => cloneElement(child, { key: i, compact: true }))}
      </div>
    </section>
  );
}
