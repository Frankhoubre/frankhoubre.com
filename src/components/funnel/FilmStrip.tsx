import Image from "next/image";
import type { Still } from "@/lib/funnel/stills";

type Props = {
  stills: readonly Still[];
  caption: string;
  /** Première image chargée en priorité (au-dessus de la ligne de flottaison). */
  priority?: boolean;
};

/**
 * Planche de six extraits : deux colonnes sur mobile, trois sur grand écran.
 * Les images viennent de la galerie de l'accueil, déjà optimisées en WebP.
 */
export function FilmStrip({ stills, caption, priority = false }: Props) {
  return (
    <figure>
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
        {stills.map((s, i) => (
          <li
            key={s.src}
            className="relative aspect-video overflow-hidden rounded-xl border border-[rgba(17,17,17,0.12)] bg-[#e6e6ea]"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={priority && i < 3}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </li>
        ))}
      </ul>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.1em] text-[var(--label)]">
        {caption}
      </figcaption>
    </figure>
  );
}
