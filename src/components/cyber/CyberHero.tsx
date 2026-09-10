import Image from "next/image";
import Link from "next/link";
import { HeroSpotlight } from "@/components/cyber/HeroSpotlight";

export type HeroIconName = "core" | "vision" | "force";

export type HeroIconLink = {
  label: string;
  href: string;
  icon: HeroIconName;
  external?: boolean;
};

export type HeroSpec = { label: string; value: string };

export type CyberHeroProps = {
  titleLines: readonly [string, string, string];
  intro: string;
  icons: readonly HeroIconLink[];
  card: {
    title: string;
    text: string;
    ctaLabel: string;
    ctaHref: string;
    external?: boolean;
    thumb: { src: string; alt: string };
  };
  counter: string;
  specsTitle: string;
  specs: readonly HeroSpec[];
  images: {
    base: { src: string; alt: string };
    reveal: { src: string; alt: string };
  };
};

const REVEAL_ID = "reveal-img";

function HeroIcon({ name }: { name: HeroIconName }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    "aria-hidden": true,
  } as const;

  if (name === "core") {
    return (
      <svg {...common}>
        <path d="M8 1.4L13.8 4.7V11.3L8 14.6L2.2 11.3V4.7L8 1.4Z" />
        <circle cx="8" cy="8" r="1.35" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "vision") {
    return (
      <svg {...common} strokeLinecap="round">
        <path d="M2 5.2V2h3.2" />
        <path d="M14 5.2V2h-3.2" />
        <path d="M2 10.8V14h3.2" />
        <path d="M14 10.8V14h-3.2" />
        <rect x="5.2" y="5.2" width="5.6" height="5.6" />
      </svg>
    );
  }
  return (
    <svg {...common} strokeLinejoin="round">
      <path d="M9.2 1.6L4 9.1h3.5L6.8 14.4 12 6.9H8.5L9.2 1.6Z" />
    </svg>
  );
}

function SmartLink({
  href,
  external,
  className,
  children,
  ...rest
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
}) {
  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

/**
 * Hero plein écran « Cyber Ronin » : image de fond animée, seconde scène
 * révélée sous le curseur, titre en trois lignes, carte produit en verre et
 * fiche de repères. Tout le texte est rendu côté serveur (H1 propre pour les
 * moteurs) ; les animations de mots sont ajoutées côté client.
 */
export function CyberHero(props: CyberHeroProps) {
  const { titleLines, intro, icons, card, counter, specsTitle, specs, images } =
    props;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroSpotlight targetId={REVEAL_ID} />

      <div className="hero-base-img hero-image-animate">
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

      <div className="hero-reveal-img" id={REVEAL_ID} aria-hidden>
        <Image
          src={images.reveal.src}
          alt=""
          fill
          quality={80}
          sizes="100vw"
        />
      </div>

      <div className="hero-ui">
        <div className="hero-left">
          <div className="hero-copy">
            <h1 id="hero-title" className="words-pull-up">
              <span>{titleLines[0]}</span>
              <span>{titleLines[1]}</span>
              <span>{titleLines[2]}</span>
            </h1>
            <p className="fade-up-reveal" data-delay="0.5">
              {intro}
            </p>
            <nav
              className="icon-row fade-up-reveal"
              data-delay="0.65"
              aria-label="Raccourcis"
            >
              {icons.map((item) => (
                <SmartLink
                  key={item.href}
                  href={item.href}
                  external={item.external}
                  className="cyber-icon-btn"
                  aria-label={item.label}
                >
                  <HeroIcon name={item.icon} />
                </SmartLink>
              ))}
            </nav>
          </div>

          <article className="product-card cyber-card">
            <div className="product-thumb" aria-hidden>
              <Image
                src={card.thumb.src}
                alt=""
                fill
                quality={70}
                sizes="86px"
              />
            </div>
            <div className="product-body">
              <h2 className="words-pull-up">{card.title}</h2>
              <p className="fade-up-reveal" data-delay="1.05">
                {card.text}
              </p>
            </div>
            <SmartLink
              href={card.ctaHref}
              external={card.external}
              className="cart-btn cyber-btn fade-up-reveal"
            >
              {card.ctaLabel}
            </SmartLink>
          </article>
        </div>

        <p className="hero-page fade-up-reveal heading-font" data-delay="0.75">
          {counter}
        </p>

        <aside className="specs" aria-label={specsTitle}>
          <h3 className="words-pull-up">{specsTitle}</h3>
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className="cyber-spec-row fade-up-reveal"
              data-delay={(1.2 + i * 0.1).toFixed(1)}
            >
              <span className="cyber-spec-label">{spec.label}</span>
              <span className="cyber-spec-value">{spec.value}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
