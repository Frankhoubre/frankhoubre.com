import Image from "next/image";
import { HeroSpotlight } from "@/components/cyber/HeroSpotlight";

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
 * révélée par le projecteur du curseur, grain, vignette, lueurs et letterbox.
 * Le contenu passe par-dessus (z-index 5).
 */
export function CineHero({ base, reveal, children, size = "full" }: Props) {
  return (
    <section
      className={`cine-band cine-grain cine-vignette cine-letterbox ${
        size === "full" ? "min-h-[88svh]" : "min-h-[52svh]"
      } flex flex-col`}
      aria-label="Introduction"
    >
      <div className="cine-layer cine-kenburns" aria-hidden={Boolean(reveal)}>
        <Image src={base.src} alt={base.alt} fill priority sizes="100vw" />
      </div>
      {reveal ? (
        <div id={REVEAL_ID} className="cine-layer hero-reveal-img" style={{ zIndex: 2 }}>
          <Image src={reveal.src} alt={reveal.alt} fill sizes="100vw" />
          <HeroSpotlight targetId={REVEAL_ID} />
        </div>
      ) : null}
      <div className="cine-scrim" aria-hidden />
      <div
        className="cine-glow cine-glow-orange cine-drift"
        style={{ width: "48vw", height: "48vw", maxWidth: 760, maxHeight: 760, right: "-12%", top: "10%" }}
        aria-hidden
      />
      <div
        className="cine-glow cine-glow-blue cine-drift-slow"
        style={{ width: "40vw", height: "40vw", maxWidth: 640, maxHeight: 640, left: "-14%", bottom: "-18%" }}
        aria-hidden
      />
      <div className="relative z-[5] flex flex-1 flex-col">{children}</div>
    </section>
  );
}
