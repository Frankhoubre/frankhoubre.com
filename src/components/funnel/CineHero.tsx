import Image from "next/image";
import { HeroSpotlight } from "@/components/motion/HeroSpotlight";

const REVEAL_ID = "cine-hero-reveal";

type Props = {
  base: { src: string; alt: string };
  /** Même scène avec des éléments changés, révélée sous le curseur. */
  reveal?: { src: string; alt: string };
  children: React.ReactNode;
  /** Bande moins haute (en-tête de page) ou plein écran (landing). */
  size?: "full" | "compact";
};

/**
 * Bande cinéma d'ouverture : photogramme plein cadre en léger zoom, variante
 * révélée par le projecteur du curseur, grain, vignette, une seule lueur.
 * Le contenu passe par-dessus (z-index 5).
 */
export function CineHero({ base, reveal, children, size = "full" }: Props) {
  return (
    <section
      className={`band grain vignette ${size === "full" ? "min-h-[92svh]" : "min-h-[56svh]"} flex flex-col`}
      aria-label="Introduction"
    >
      <div className="layer kenburns" aria-hidden={Boolean(reveal)}>
        <Image src={base.src} alt={base.alt} fill priority sizes="100vw" />
      </div>
      {reveal ? (
        <div id={REVEAL_ID} className="hero-reveal" style={{ zIndex: 2 }}>
          <Image src={reveal.src} alt={reveal.alt} fill sizes="100vw" />
          <HeroSpotlight targetId={REVEAL_ID} />
        </div>
      ) : null}
      <div className="scrim" aria-hidden />
      <div
        className="glow drift"
        style={{ width: "44vw", height: "44vw", maxWidth: 720, maxHeight: 720, right: "-12%", top: "8%" }}
        aria-hidden
      />
      <div className="relative z-[5] flex flex-1 flex-col">{children}</div>
    </section>
  );
}
