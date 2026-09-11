import Image from "next/image";
import type { Still } from "@/lib/funnel/stills";

type Props = {
  stills: readonly Still[];
  caption: string;
  /** Première image chargée en priorité (au-dessus de la ligne de flottaison). */
  priority?: boolean;
  /** Conservé pour compatibilité : un seul registre désormais. */
  tone?: "light" | "dark";
};

/**
 * Planche contact de six extraits : deux colonnes sur mobile, trois sur
 * grand écran, chaque photogramme numéroté comme sur une planche.
 */
export function FilmStrip({ stills, caption, priority = false }: Props) {
  return (
    <figure>
      <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
        {stills.map((s, i) => (
          <li key={s.src} className="frame frame-grain frame-hover relative aspect-video">
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={priority && i < 3}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 380px"
            />
            <span className="meta meta-strong absolute bottom-2 right-3 z-[3] text-[9px]">0{i + 1}</span>
          </li>
        ))}
      </ul>
      <figcaption className="meta mt-3">{caption}</figcaption>
    </figure>
  );
}
