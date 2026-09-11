import Image from "next/image";
import Link from "next/link";
import { HeroSpotlight } from "@/components/motion/HeroSpotlight";
import { Arrow } from "@/components/ui/Cta";

export type HeroSpec = { label: string; value: string };

export type HomeHeroProps = {
  /** Repère de dossier en haut à gauche : « 01 / Réalisateur IA ». */
  kicker: string;
  /** Nom monumental (première ligne du H1). */
  name: string;
  /** Rôles, deuxième ligne du H1 (mots-clés conservés pour le référencement). */
  roles: string;
  intro: string;
  /** Quatre annotations en marge droite. */
  notes: readonly string[];
  /** Compteur en haut à droite : « 142 articles ». */
  counter: string;
  counterLabel: string;
  primary: { label: string; href: string; external?: boolean };
  secondary: { label: string; href: string; external?: boolean };
  specsTitle: string;
  specs: readonly HeroSpec[];
  scrollLabel: string;
  images: {
    base: { src: string; alt: string };
    reveal: { src: string; alt: string };
  };
};

const REVEAL_ID = "reveal-img";

function SmartLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/**
 * Hero plein écran : photogramme en fondu lent, seconde scène révélée sous
 * le curseur (desktop), nom monumental en bas à gauche, annotations en
 * marge droite, ligne de pied avec intro, actions et repères. Tout le
 * texte est rendu côté serveur ; les mots montent sous un masque côté client.
 */
export function HomeHero(props: HomeHeroProps) {
  const {
    kicker,
    name,
    roles,
    intro,
    notes,
    counter,
    counterLabel,
    primary,
    secondary,
    specsTitle,
    specs,
    scrollLabel,
    images,
  } = props;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroSpotlight targetId={REVEAL_ID} />

      <div className="hero-media hero-media-animate">
        <Image
          src={images.base.src}
          alt={images.base.alt}
          fill
          priority
          fetchPriority="high"
          quality={80}
          sizes="100vw"
        />
      </div>
      <div className="hero-reveal" id={REVEAL_ID} aria-hidden>
        <Image src={images.reveal.src} alt="" fill quality={75} sizes="100vw" />
      </div>
      <div className="hero-scrim" aria-hidden />
      <div className="hero-grain" aria-hidden />

      <div className="hero-ui">
        <p className="hero-kicker meta meta-strong reveal" data-delay="0.3">
          {kicker}
        </p>

        <div className="hero-side reveal" data-delay="0.4">
          <p className="display text-[clamp(1.6rem,3vw,2.6rem)] leading-none text-cream">{counter}</p>
          <p className="meta mt-1">{counterLabel}</p>
        </div>

        <div className="hero-copy">
          <h1 id="hero-title" className="words-pull-up">
            <span className="hero-name">{name}</span>
            <span className="hero-roles">{roles}</span>
          </h1>
        </div>

        <ul className="hero-notes reveal" data-delay="0.6" aria-label="Repères">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>

        <div className="hero-bottom reveal" data-delay="0.8">
          <p className="hero-intro">{intro}</p>
          <div className="hero-actions">
            <SmartLink href={primary.href} external={primary.external} className="btn btn-primary">
              <span>{primary.label}</span>
              <Arrow />
            </SmartLink>
            <SmartLink href={secondary.href} external={secondary.external} className="btn">
              <span>{secondary.label}</span>
              <Arrow />
            </SmartLink>
          </div>
          <aside className="hero-specs" aria-label={specsTitle}>
            <p className="meta mb-1">{specsTitle}</p>
            {specs.map((spec) => (
              <div key={spec.label} className="spec-row !py-2">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
            <p className="hero-scroll mt-5" aria-hidden>
              <span className="scroll-cue" />
              <span className="meta meta-dim">{scrollLabel}</span>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
