import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/Cta";

export type HomeHeroProps = {
  /** Repère de dossier au-dessus du nom : « 01 / Réalisateur de films IA ». */
  kicker: string;
  /** Nom monumental (première ligne du H1). Le dernier mot passe en italique avec la lueur. */
  name: string;
  /** Rôles, deuxième ligne du H1 (mots-clés conservés pour le référencement). */
  roles: string;
  intro: string;
  /** Ligne de régie en pied de hero : « 369 articles », « 30 distinctions dont 10 prix »… */
  facts: readonly string[];
  primary: { label: string; href: string; external?: boolean };
  secondary: { label: string; href: string; external?: boolean };
  /** Portrait en régie, cadré à droite. */
  image: { src: string; alt: string };
};

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
 * Hero d'accueil, charte « régie de cinéma » : portrait de Frank en régie à
 * droite, fondu vers le noir à gauche, nom en capitales Bodoni (le nom de
 * famille en italique avec la lueur), rôles en capitales machine, filet à
 * butée, deux actions et une ligne de régie en pied. Tout le texte est rendu
 * côté serveur, sans état masqué : le H1 est lisible dès la première image.
 */
export function HomeHero({ kicker, name, roles, intro, facts, primary, secondary, image }: HomeHeroProps) {
  const words = name.split(" ");
  const last = words.pop();
  const first = words.join(" ");
  const [index, ...kickerRest] = kicker.split(" / ");

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image src={image.src} alt={image.alt} fill priority fetchPriority="high" quality={82} sizes="(max-width: 860px) 100vw, 70vw" />
      </div>
      <div className="hero-scrim" aria-hidden />

      <div className="hero-ui">
        <div className="hero-copy">
          <p className="meta flex items-center gap-3">
            <span className="meta-strong tabular">{index}</span>
            <span aria-hidden>/</span>
            <span>{kickerRest.join(" / ")}</span>
          </p>
          <h1 id="hero-title">
            <span className="hero-name">
              {first} <em>{last}</em>
            </span>
            <span className="hero-roles">{roles}</span>
          </h1>
          <span className="filet filet-long mt-6" aria-hidden />
          <p className="hero-intro">{intro}</p>
          <div className="hero-actions">
            <SmartLink href={primary.href} external={primary.external} className="btn btn-primary btn-lg">
              <span>{primary.label}</span>
              <Arrow />
            </SmartLink>
            <SmartLink href={secondary.href} external={secondary.external} className="btn btn-lg">
              <span>{secondary.label}</span>
              <Arrow />
            </SmartLink>
          </div>
        </div>
      </div>

      <p className="hero-ligne">
        <span className="container-x block">{facts.join(" · ")}</span>
      </p>
    </section>
  );
}
