import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { baseUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Biographie de Frank Houbre, entrepreneur, réalisateur et créateur spécialisé dans la narration à l’ère de l’intelligence artificielle.",
  alternates: { canonical: `${baseUrl}/a-propos` },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Frank Houbre",
    url: `${baseUrl}/a-propos`,
    mainEntityOfPage: `${baseUrl}/a-propos`,
    jobTitle:
      "Entrepreneur, réalisateur et créateur spécialisé dans les nouvelles formes de narration à l’ère de l’intelligence artificielle",
    nationality: "Française",
    image: `${baseUrl}/images/frank-houbre-about.png`,
    description:
      "Frank Houbre est un entrepreneur français, réalisateur et créateur spécialisé dans les nouvelles formes de narration à l’ère de l’intelligence artificielle.",
    knowsAbout: [
      "Intelligence artificielle générative",
      "Narration visuelle",
      "Storytelling",
      "Réalisation",
      "Écriture de scénario",
      "Formation en ligne",
      "Entrepreneuriat digital",
    ],
    sameAs: [
      "https://www.tiktok.com/@frankhoubre",
      "https://www.linkedin.com/in/frank-houbre/",
      "https://www.instagram.com/frank.houbre/",
      "https://www.youtube.com/@BusinessDynamite",
      "https://www.imdb.com/name/nm17957426/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <header className="space-y-5">
          <p className="font-mono text-xs uppercase tracking-wide text-neutral-500">À propos</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Frank Houbre</h1>
          <div className="space-y-4 text-lg leading-relaxed text-neutral-800">
            <p>
              Frank Houbre est un entrepreneur français, réalisateur et créateur spécialisé dans les
              nouvelles formes de narration à l’ère de l’intelligence artificielle.
            </p>
            <p>
              À la croisée de la technologie, du storytelling et de l’image, il développe depuis plus
              de dix ans des outils, des projets et des formats visant à repousser les limites de la
              création.
            </p>
          </div>
          <figure className="mt-6 max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
            <Image
              src="/images/frank-houbre-about.png"
              alt="Portrait de Frank Houbre"
              width={520}
              height={520}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 640px) 100vw, 520px"
            />
          </figure>
        </header>

        <section aria-labelledby="parcours" className="mt-12 space-y-4">
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
            formation en ligne. Il fonde Business Dynamite, une plateforme dédiée à l’entrepreneuriat
            et aux opportunités offertes par Internet. À travers ses contenus, ses formations et sa
            chaîne YouTube, il accompagne des milliers de créateurs et d’entrepreneurs dans le
            développement de leurs projets, en mettant l’accent sur l’autonomie, la compréhension des
            systèmes et la capacité à exécuter.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            Cette phase marque une évolution importante: au-delà de la création d’outils, il devient
            également un pédagogue reconnu, capable de vulgariser des sujets techniques et d’en faire
            des leviers concrets d’action.
          </p>
        </section>

        <section aria-labelledby="projets-phares" className="mt-12 space-y-4">
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
              Avec AI Studios, il crée une communauté et un programme de formation dédiés aux
              créateurs qui souhaitent produire des films, des publicités et des contenus visuels
              grâce à l’IA. L’objectif est clair: passer d’une utilisation superficielle des outils à
              une maîtrise complète des workflows créatifs, en intégrant les fondamentaux du cinéma.
            </p>
            <p>
              En parallèle, il conçoit ScreenWeaver, un outil d’écriture nouvelle génération pensé
              comme un pont entre le scénario et l’image. Contrairement aux logiciels traditionnels,
              ScreenWeaver ne se limite pas à la rédaction: il permet de structurer une histoire, de
              visualiser ses scènes, et de préparer sa transformation en storyboard et en production
              visuelle. Le projet s’inscrit dans une vision plus large du futur de la création, où
              l’écriture, la mise en scène et la fabrication de l’image convergent au sein d’un même
              espace.
            </p>
            <p>
              Sur le plan artistique, Frank Houbre développe également VOIDBORN, un projet de fiction
              réalisé avec des outils d’intelligence artificielle. À travers cette œuvre, il explore
              les nouvelles possibilités offertes par ces technologies pour produire des univers
              visuels ambitieux, sans les contraintes traditionnelles de production. Le projet a été
              sélectionné et récompensé dans plusieurs festivals internationaux dédiés à l’IA,
              confirmant son positionnement à la frontière entre cinéma et innovation.
            </p>
          </div>
        </section>

        <section aria-labelledby="vision" className="mt-12 space-y-4">
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
        </section>

        <section aria-labelledby="reseaux" className="mt-12 space-y-4">
          <h2 id="reseaux" className="text-2xl font-semibold tracking-tight text-neutral-950">
            Réseaux sociaux et profils
          </h2>
          <p className="text-lg leading-relaxed text-neutral-800">
            Retrouvez Frank Houbre sur les principales plateformes et bases de données publiques:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-lg leading-relaxed text-neutral-800">
            <li>
              <a
                href="https://www.tiktok.com/@frankhoubre"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/frank-houbre/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/frank.houbre/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@BusinessDynamite"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.imdb.com/name/nm17957426/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
              >
                IMDb
              </a>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-neutral-800">
            Pour en savoir plus, consultez le{" "}
            <Link
              href="/blog"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              blog
            </Link>{" "}
            ou la page{" "}
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
