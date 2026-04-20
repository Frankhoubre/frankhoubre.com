import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { baseUrl, person, socialLinks } from "@/lib/site";

const aboutTitle = "À propos de Frank Houbre | Formateur IA, réalisateur IA et entrepreneur";
const aboutDescription =
  "Biographie de Frank Houbre, formateur IA, réalisateur IA et entrepreneur français. Parcours, projets, distinctions, formation IA vidéo et image, et vision de la création assistée par intelligence artificielle.";
const awards = [
  "Chroma Awards - Première place (Silver)",
  "SIAFF Séoul - Médaille d'argent",
  "Australian AI Festival - Winner (Melbourne)",
  "Hollywood Indie Festival - Award Winner",
  "Chroma Dreamina - Deuxième place",
] as const;
const selections = [
  "Pulse of Animation Festival - Sélection officielle",
  "Los Angeles Film Awards - Sélection officielle",
  "Top Shorts - Sélection officielle",
  "Bangkok Movie Awards - Finaliste",
] as const;

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: { canonical: `${baseUrl}/a-propos` },
  openGraph: {
    title: aboutTitle,
    description: aboutDescription,
    url: `${baseUrl}/a-propos`,
    type: "profile",
    locale: "fr_FR",
    images: [
      {
        url: `${baseUrl}/images/frank-houbre-about.png`,
        width: 520,
        height: 520,
        alt: "Portrait de Frank Houbre",
      },
    ],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Frank Houbre",
    url: `${baseUrl}/a-propos`,
    mainEntityOfPage: `${baseUrl}/a-propos`,
    jobTitle:
      "Formateur IA, réalisateur IA et entrepreneur français",
    nationality: "Française",
    image: `${baseUrl}/images/frank-houbre-about.png`,
    description: aboutDescription,
    knowsAbout: [
      "Formation IA",
      "Intelligence artificielle générative",
      "Vidéo IA",
      "Image IA",
      "Films IA",
      "Narration visuelle",
      "Storytelling",
      "Réalisation",
      "Écriture de scénario",
      "Formation en ligne",
      "Entrepreneuriat digital",
    ],
    award: [...awards, ...selections],
    sameAs: [...person.sameAs],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
          <figure className="mx-auto w-full max-w-[170px] overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-sm sm:max-w-[200px] lg:mx-0 lg:max-w-[220px]">
            <Image
              src="/images/frank-houbre-about.png"
              alt="Portrait de Frank Houbre"
              width={520}
              height={520}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </figure>

          <div className="space-y-5">
            <p className="text-xs uppercase tracking-wide text-neutral-500">À propos</p>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
              Frank Houbre, formateur IA, réalisateur IA et entrepreneur
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-neutral-800">
              <p>
                Frank Houbre est un <strong>entrepreneur français</strong>, <strong>formateur IA</strong> et{" "}
                <strong>réalisateur IA</strong> spécialisé dans la création d’<strong>images</strong>,
                de <strong>vidéos</strong> et de <strong>films assistés par intelligence
                artificielle</strong>.
              </p>
              <p>
                Son travail relie trois dimensions complémentaires : la <strong>compréhension
                technique</strong> des outils, la <strong>pédagogie appliquée à la production</strong>,
                et une <strong>exigence de mise en scène</strong> inspirée du cinéma, de la narration
                visuelle et de la direction artistique.
              </p>
              <p>
                Cette page présente son parcours, ses projets structurants, ses distinctions
                publiques et sa vision de ce que peut devenir la création lorsqu’on utilise l’IA
                comme <strong>amplificateur de vision</strong> plutôt que comme simple générateur de
                contenu.
              </p>
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <div className="ds-card p-4">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Positionnement
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Formation IA, vidéo IA, image IA et réalisation orientée cinéma.
                </p>
              </div>
              <div className="ds-card p-4">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Projets
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  AI Studios, ScreenWeaver, Ronces, VOIDBORN et contenus pédagogiques.
                </p>
              </div>
              <div className="ds-card p-4">
                <p className="text-[11px] uppercase tracking-[0.15em] text-neutral-500">
                  Distinctions
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  Prix, sélections officielles et présence publique sur plusieurs plateformes.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section aria-labelledby="positionnement" className="mt-14 grid gap-6 lg:grid-cols-3">
          <article className="ds-card rounded-3xl p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Formateur IA
            </p>
            <h2 id="positionnement" className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
              Une pédagogie orientée exécution
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Frank Houbre structure l’apprentissage autour de <strong>workflows concrets</strong> :
              prompts utiles, <strong>direction artistique</strong>, génération cohérente, montage,
              narration et exploitation créative des outils d’IA.
            </p>
          </article>
          <article className="ds-card rounded-3xl p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Réalisateur IA
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
              Une approche de mise en scène
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Son angle n’est pas celui du simple prompting. Il insiste sur le <strong>cadre</strong>,
              la <strong>lumière</strong>, la cohérence des personnages, le rythme des plans et la
              construction d’<strong>univers visuels plus crédibles</strong>.
            </p>
          </article>
          <article className="ds-card rounded-3xl p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Entrepreneur
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950">
              Un parcours entre tech et création
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              L’<strong>expérience entrepreneuriale</strong>, la création d’outils, la formation et
              les projets artistiques forment un ensemble cohérent qui renforce sa légitimité sur les
              sujets IA.
            </p>
          </article>
        </section>

        <section aria-labelledby="parcours" className="mt-14 space-y-4">
          <h2 id="parcours" className="text-2xl font-semibold tracking-tight text-neutral-950">
            Parcours
          </h2>
          <p className="text-lg leading-relaxed text-neutral-800">
            Son parcours débute dans la musique. Guitariste passionné, il commence très jeune à
            enseigner, puis transforme cette expérience en projet entrepreneurial avec la création de
            MyMusicTeacher en 2014. La plateforme propose une approche innovante de l’apprentissage
            musical en ligne, mêlant pédagogie interactive et technologie. Rapidement remarquée, la
            startup remporte plusieurs distinctions, dont une médaille d’or au Concours Lépine, et
            réalise une levée de fonds de 200 000 euros. Ce premier projet pose les bases de ce qui
            deviendra sa signature: rendre accessibles des compétences complexes grâce à des systèmes
            intelligents et bien structurés.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            Après cette première aventure, Frank Houbre élargit son champ d’action au digital et à la
            formation en ligne. Il fonde{" "}
            <a
              href="https://businessdynamite.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              Business Dynamite
            </a>
            , une plateforme dédiée à l’entrepreneuriat et aux opportunités offertes par Internet. À
            travers ses contenus, ses formations et sa chaîne YouTube, il accompagne des milliers de
            créateurs et d’entrepreneurs dans le développement de leurs projets, en mettant l’accent
            sur l’autonomie, la compréhension des systèmes et la capacité à exécuter.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            Cette phase marque une évolution importante: au-delà de la création d’outils, il devient
            également un pédagogue reconnu, capable de vulgariser des sujets techniques et d’en faire
            des leviers concrets d’action.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            Avec l’essor de l’intelligence artificielle générative, il déplace progressivement son
            centre de gravité vers la création image et vidéo assistée par IA. Il y applique une
            logique de <strong>réalisateur</strong> et de <strong>producteur</strong>: transformer les
            outils en système de fabrication d’<strong>images cohérentes</strong>, au service d’un
            récit, d’une identité visuelle et d’un objectif de production.
          </p>
        </section>

        <section aria-labelledby="projets-phares" className="mt-14 space-y-4">
          <h2
            id="projets-phares"
            className="text-2xl font-semibold tracking-tight text-neutral-950"
          >
            Projets phares
          </h2>
          <p className="text-lg leading-relaxed text-neutral-800">
            À partir des années 2020, son travail s’oriente progressivement vers l’intelligence
            artificielle et ses applications créatives. Il explore notamment la génération d’images,
            de vidéos et de musiques, et s’intéresse à une question centrale: comment transformer ces
            technologies en véritables outils de narration, et non en simples générateurs de contenu.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            C’est dans cette logique qu’il développe plusieurs projets structurants.
          </p>
          <div className="space-y-3 text-lg leading-relaxed text-neutral-800">
            <p>
              Avec{" "}
              <a
                href="https://www.skool.com/ai-studios"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                AI Studios
              </a>
              , il crée une communauté et un programme de formation dédiés aux créateurs qui
              souhaitent produire des films, des publicités et des contenus visuels grâce à l’IA.
              L’objectif est clair: passer d’une utilisation superficielle des outils à une{" "}
              <strong>maîtrise complète des workflows créatifs</strong>, en intégrant les{" "}
              <strong>fondamentaux du cinéma</strong>.
            </p>
            <p>
              En parallèle, il conçoit{" "}
              <a
                href="https://screenweaver.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                ScreenWeaver
              </a>
              , un outil d’écriture nouvelle génération pensé comme un pont entre le scénario et
              l’image. Contrairement aux logiciels traditionnels, ScreenWeaver ne se limite pas à la
              rédaction: il permet de structurer une histoire, de visualiser ses scènes, et de
              préparer sa transformation en <strong>storyboard</strong> et en{" "}
              <strong>production visuelle</strong>. Le projet s’inscrit dans une vision plus large du
              futur de la création, où l’écriture, la mise en scène et la fabrication de l’image
              convergent au sein d’un même espace.
            </p>
            <p>
              Sur le plan artistique, Frank Houbre développe également des films IA comme{" "}
              <a
                href="https://vimeo.com/1164434045?fl=ip&fe=ec"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                Ronces
              </a>{" "}
              (court film IA) et{" "}
              <a
                href="https://youtu.be/TaoYARoU7Lc?si=csVLgOV_wuQs4uA0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                VOIDBORN
              </a>{" "}
              (animé IA). À travers ces œuvres, il explore les nouvelles possibilités offertes par
              ces technologies pour produire des univers visuels ambitieux, sans les contraintes
              traditionnelles de production. Le projet <strong>VOIDBORN</strong> a été sélectionné et
              récompensé dans plusieurs <strong>festivals internationaux</strong> dédiés à l’IA,
              confirmant son positionnement à la frontière entre <strong>cinéma</strong> et{" "}
              <strong>innovation</strong>.
            </p>
          </div>
        </section>

        <section aria-labelledby="distinctions" className="mt-14">
          <div className="max-w-3xl space-y-4">
            <h2 id="distinctions" className="text-2xl font-semibold tracking-tight text-neutral-950">
              Prix, distinctions et sélections
            </h2>
            <p className="text-lg leading-relaxed text-neutral-800">
              Les distinctions publiques associées à Frank Houbre et à ses projets IA renforcent son
            positionnement de <strong>créateur</strong> et <strong>réalisateur IA</strong>. Elles
            montrent une reconnaissance à la fois sur le plan <strong>visuel</strong>,{" "}
            <strong>narratif</strong> et <strong>festivalier</strong>.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="ds-card rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Prix et distinctions
              </p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-neutral-800">
                {awards.map((award) => (
                  <li key={award} className="rounded-2xl bg-neutral-50 px-4 py-3">
                    {award}
                  </li>
                ))}
              </ul>
            </section>

            <section className="ds-card rounded-3xl p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Sélections et finaliste
              </p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-neutral-800">
                {selections.map((selection) => (
                  <li key={selection} className="rounded-2xl bg-neutral-50 px-4 py-3">
                    {selection}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        <section aria-labelledby="vision" className="mt-14 space-y-4">
          <h2 id="vision" className="text-2xl font-semibold tracking-tight text-neutral-950">
            Vision
          </h2>
          <p className="text-lg leading-relaxed text-neutral-800">
            Aujourd’hui, Frank Houbre s’inscrit dans une nouvelle génération de créateurs: ceux qui
            ne séparent plus l’écriture, la technologie et la production, mais les considèrent comme
            un seul et même processus.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            Son travail repose sur une conviction simple: les outils seuls ne suffisent pas. Ce qui
            fait la différence, c’est la méthode, la compréhension des fondamentaux, et la capacité à
            transformer une idée en vision claire.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            À travers ses projets, ses contenus et ses outils, il cherche à donner aux créateurs les
            moyens de ne plus “créer à l’aveugle”, mais de voir, structurer et construire leurs
            histoires avec précision.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            Sa vision de la formation IA et de la réalisation IA repose sur une idée simple: l’outil
            ne remplace pas le <strong>regard</strong>. Il accélère la fabrication, mais la qualité
            dépend toujours d’une <strong>direction claire</strong>, d’une{" "}
            <strong>exigence esthétique</strong> et d’une compréhension des fondamentaux de l’image.
          </p>
        </section>

        <section aria-labelledby="reseaux" className="mt-14 space-y-4">
          <h2 id="reseaux" className="text-2xl font-semibold tracking-tight text-neutral-950">
            Réseaux, profils et sites
          </h2>
          <p className="text-lg leading-relaxed text-neutral-800">
            Retrouvez Frank Houbre sur les principales plateformes, bases de données publiques et
            sites associés:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed text-neutral-800">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-neutral-800">
            Pour en savoir plus, consultez le{" "}
            <Link
              href="/blog"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              blog
            </Link>{" "}
            pour les tutoriels et analyses,
            {" "}la page{" "}
            <Link
              href="/"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              d’accueil
            </Link>{" "}
            pour le positionnement général, ou la page{" "}
            <Link
              href="/contact"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              Contact
            </Link>
            .
          </p>
        </section>
      </article>
    </>
  );
}
