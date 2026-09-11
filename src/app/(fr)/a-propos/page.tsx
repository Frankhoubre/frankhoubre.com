import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArrowLink } from "@/components/ui/Cta";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ABOUT_OG_IMAGE,
  PERSON_ID,
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
} from "@/lib/metadata";
import { baseUrl, person, socialLinks } from "@/lib/site";

const aboutTitle = "À propos de Frank Houbre | Formateur IA, réalisateur IA et entrepreneur";
const aboutDescription =
  // ≤155 caractères : au-delà, Google tronque la description en SERP.
  "Biographie de Frank Houbre, formateur IA et réalisateur IA : parcours, projets, distinctions et vision de la création assistée par IA.";
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

export const metadata: Metadata = buildPageMetadata({
  title: "À propos",
  titleAbsolute: aboutTitle,
  description: aboutDescription,
  path: "/a-propos",
  alternateLanguages: {
    fr: "/a-propos",
    en: "/en/about",
    "x-default": "/a-propos",
  },
  openGraph: {
    type: "profile",
    title: aboutTitle,
    description: aboutDescription,
    images: [
      {
        path: ABOUT_OG_IMAGE.path,
        width: ABOUT_OG_IMAGE.width,
        height: ABOUT_OG_IMAGE.height,
        alt: ABOUT_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    title: aboutTitle,
    description: aboutDescription,
    images: [`${baseUrl}${ABOUT_OG_IMAGE.path}`],
  },
});

const aboutBreadcrumbJsonLd = buildBreadcrumbList([
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/a-propos" },
]);

const roles = [
  {
    n: "01",
    kicker: "Formateur IA",
    title: "Une pédagogie orientée exécution",
    text: (
      <>
        Frank Houbre structure l’apprentissage autour de <strong>workflows concrets</strong> :
        prompts utiles, <strong>direction artistique</strong>, génération cohérente, montage,
        narration et exploitation créative des outils d’IA.
      </>
    ),
  },
  {
    n: "02",
    kicker: "Réalisateur IA",
    title: "Une approche de mise en scène",
    text: (
      <>
        Son angle n’est pas celui du simple prompting. Il insiste sur le <strong>cadre</strong>,
        la <strong>lumière</strong>, la cohérence des personnages, le rythme des plans et la
        construction d’<strong>univers visuels plus crédibles</strong>.
      </>
    ),
  },
  {
    n: "03",
    kicker: "Entrepreneur",
    title: "Un parcours entre tech et création",
    text: (
      <>
        L’<strong>expérience entrepreneuriale</strong>, la création d’outils, la formation et
        les projets artistiques forment un ensemble cohérent qui renforce sa légitimité sur les
        sujets IA.
      </>
    ),
  },
] as const;

const timeline = [
  { year: "2014", label: "MyMusicTeacher", text: "Plateforme d’apprentissage musical en ligne. Médaille d’or au Concours Lépine, levée de 200 000 euros." },
  { year: "2018", label: "Business Dynamite", text: "Plateforme et chaîne YouTube dédiées à l’entrepreneuriat et aux outils numériques." },
  { year: "2023", label: "AI Studios", text: "Programme de formation pour créateurs : films, publicités et contenus visuels avec l’IA." },
  { year: "2024", label: "ScreenWeaver", text: "Outil d’écriture qui relie scénario, storyboard et production visuelle." },
  { year: "2025", label: "Ronces, VOIDBORN", text: "Films IA sélectionnés et primés dans des festivals internationaux." },
] as const;

export default function AboutPage() {
  // ProfilePage (format reconnu par Google pour les pages « à propos ») dont
  // l'entité principale est le même Person (@id) que sur l'accueil et les
  // articles.
  const profilePageJsonLd = {
    "@type": "ProfilePage",
    "@id": `${baseUrl}/a-propos#profile`,
    url: `${baseUrl}/a-propos`,
    name: aboutTitle,
    description: aboutDescription,
    inLanguage: "fr-FR",
    mainEntity: { "@id": PERSON_ID },
  };

  const jsonLd = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Frank Houbre",
    url: baseUrl,
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
      <JsonLd data={buildGraphJsonLd(profilePageJsonLd, jsonLd, aboutBreadcrumbJsonLd)} />

      <article>
        <PageHeader
          index="03"
          kicker="À propos"
          title={
            <>
              Frank Houbre
              <span className="block text-fog">formateur IA et réalisateur IA</span>
            </>
          }
          lede="Entrepreneur et créateur : la compréhension technique des outils, la pédagogie appliquée à la production, et une exigence de mise en scène inspirée du cinéma."
          aside={
            <ul className="meta space-y-1 lg:text-right">
              <li>France · Paris / Strasbourg</li>
              <li>FR / EN</li>
              <li>Depuis 2014</li>
            </ul>
          }
        />

        {/* Portrait et introduction */}
        <section className="container-x section-sm">
          <div className="grid-12 gap-y-12">
            <div className="col-span-12 sm:col-span-5 lg:col-span-4">
              <div className="frame frame-grain frame-marks relative aspect-[4/5]">
                <Image
                  src="/images/frank-houbre-about.png"
                  alt="Portrait de Frank Houbre"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="meta mt-3">Fig. 01 · Portrait officiel</p>
            </div>
            <div className="col-span-12 sm:col-span-7 lg:col-span-7 lg:col-start-6">
              <div className="prose-cinema">
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
              <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-3">
                {[
                  ["Positionnement", "Formation IA, vidéo IA, image IA et réalisation orientée cinéma."],
                  ["Projets", "AI Studios, ScreenWeaver, Ronces, VOIDBORN et contenus pédagogiques."],
                  ["Distinctions", "Prix, sélections officielles et présence publique sur plusieurs plateformes."],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="meta">{k}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-stone">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Trois métiers */}
        <section aria-labelledby="positionnement" className="section border-t border-line">
          <div className="container-x">
            <SectionHeader index="01" kicker="Trois métiers" id="positionnement" title="Formateur, réalisateur, entrepreneur" />
            <div className="mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-3 lg:gap-8">
              {roles.map((r) => (
                <article key={r.n}>
                  <p className="meta"><span className="meta-strong tabular">{r.n}</span> &nbsp;/&nbsp; {r.kicker}</p>
                  <h3 className="h-item mt-5 text-cream">{r.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fog [&_strong]:font-medium [&_strong]:text-stone">{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Parcours : texte et chronologie */}
        <section aria-labelledby="parcours" className="section border-t border-line">
          <div className="container-x">
            <div className="grid-12 gap-y-14">
              <div className="col-span-12 lg:col-span-3">
                <p className="meta"><span className="meta-strong">02</span> &nbsp;/&nbsp; Parcours</p>
                <ol className="mt-8 hidden lg:block">
                  {timeline.map((t) => (
                    <li key={t.year} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-3 last:border-b">
                      <span className="meta meta-strong tabular pt-0.5">{t.year}</span>
                      <span>
                        <span className="block text-sm text-cream">{t.label}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-fog">{t.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <h2 id="parcours" className="h-section">De la musique à la mise en scène par l’IA</h2>
                <div className="prose-cinema mt-8">
                  <p>
                    Son parcours débute dans la musique. Guitariste passionné, il commence très jeune à
                    enseigner, puis transforme cette expérience en projet entrepreneurial avec la création de
                    MyMusicTeacher en 2014. La plateforme propose une approche innovante de l’apprentissage
                    musical en ligne, mêlant pédagogie interactive et technologie. Rapidement remarquée, la
                    startup remporte plusieurs distinctions, dont une médaille d’or au Concours Lépine, et
                    réalise une levée de fonds de 200 000 euros. Ce premier projet pose les bases de ce qui
                    deviendra sa signature : rendre accessibles des compétences complexes grâce à des systèmes
                    intelligents et bien structurés.
                  </p>
                  <p>
                    Après cette première aventure, Frank Houbre élargit son champ d’action au digital et à la
                    formation en ligne. Il fonde{" "}
                    <a href="https://businessdynamite.xyz/" target="_blank" rel="noopener noreferrer">
                      Business Dynamite
                    </a>
                    , une plateforme dédiée à l’entrepreneuriat et aux opportunités offertes par Internet. À
                    travers ses contenus, ses formations et sa chaîne YouTube, il accompagne des milliers de
                    créateurs et d’entrepreneurs dans le développement de leurs projets, en mettant l’accent
                    sur l’autonomie, la compréhension des systèmes et la capacité à exécuter.
                  </p>
                  <p>
                    Cette phase marque une évolution importante : au-delà de la création d’outils, il devient
                    également un pédagogue reconnu, capable de vulgariser des sujets techniques et d’en faire
                    des leviers concrets d’action.
                  </p>
                  <p>
                    Avec l’essor de l’intelligence artificielle générative, il déplace progressivement son
                    centre de gravité vers la création image et vidéo assistée par IA. Il y applique une
                    logique de <strong>réalisateur</strong> et de <strong>producteur</strong> : transformer les
                    outils en système de fabrication d’<strong>images cohérentes</strong>, au service d’un
                    récit, d’une identité visuelle et d’un objectif de production.
                  </p>
                </div>
                <ol className="mt-10 border-t border-line lg:hidden">
                  {timeline.map((t) => (
                    <li key={t.year} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-3">
                      <span className="meta meta-strong tabular pt-0.5">{t.year}</span>
                      <span>
                        <span className="block text-sm text-cream">{t.label}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-fog">{t.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Projets phares */}
        <section aria-labelledby="projets-phares" className="section border-t border-line">
          <div className="container-x">
            <div className="grid-12 gap-y-12">
              <div className="col-span-12 lg:col-span-3">
                <p className="meta"><span className="meta-strong">03</span> &nbsp;/&nbsp; Projets phares</p>
              </div>
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <h2 id="projets-phares" className="h-section">Former, outiller, réaliser</h2>
                <div className="prose-cinema mt-8">
                  <p>
                    À partir des années 2020, son travail s’oriente progressivement vers l’intelligence
                    artificielle et ses applications créatives. Il explore notamment la génération d’images,
                    de vidéos et de musiques, et s’intéresse à une question centrale : comment transformer ces
                    technologies en véritables outils de narration, et non en simples générateurs de contenu.
                  </p>
                  <p>C’est dans cette logique qu’il développe plusieurs projets structurants.</p>
                  <p>
                    Avec{" "}
                    <a href="https://www.skool.com/ai-studios" target="_blank" rel="noopener noreferrer">
                      AI Studios
                    </a>
                    , il crée une communauté et un programme de formation dédiés aux créateurs qui
                    souhaitent produire des films, des publicités et des contenus visuels grâce à l’IA.
                    L’objectif est clair : passer d’une utilisation superficielle des outils à une{" "}
                    <strong>maîtrise complète des workflows créatifs</strong>, en intégrant les{" "}
                    <strong>fondamentaux du cinéma</strong>.
                  </p>
                  <p>
                    En parallèle, il conçoit{" "}
                    <a href="https://screenweaver.ai" target="_blank" rel="noopener noreferrer">
                      ScreenWeaver
                    </a>
                    , un outil d’écriture nouvelle génération pensé comme un pont entre le scénario et
                    l’image. Contrairement aux logiciels traditionnels, ScreenWeaver ne se limite pas à la
                    rédaction : il permet de structurer une histoire, de visualiser ses scènes, et de
                    préparer sa transformation en <strong>storyboard</strong> et en{" "}
                    <strong>production visuelle</strong>. Le projet s’inscrit dans une vision plus large du
                    futur de la création, où l’écriture, la mise en scène et la fabrication de l’image
                    convergent au sein d’un même espace.
                  </p>
                  <p>
                    Sur le plan artistique, Frank Houbre développe également des films IA comme{" "}
                    <a href="https://vimeo.com/1164434045?fl=ip&fe=ec" target="_blank" rel="noopener noreferrer">
                      Ronces
                    </a>{" "}
                    (court film IA) et{" "}
                    <a href="https://youtu.be/TaoYARoU7Lc?si=csVLgOV_wuQs4uA0" target="_blank" rel="noopener noreferrer">
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
              </div>
            </div>
          </div>
        </section>

        {/* Distinctions */}
        <section aria-labelledby="distinctions" className="section border-t border-line">
          <div className="container-x">
            <SectionHeader
              index="04"
              kicker="Distinctions"
              id="distinctions"
              title="Prix, distinctions et sélections"
              lede={
                <>
                  Les distinctions publiques associées à Frank Houbre et à ses projets IA renforcent son
                  positionnement de créateur et réalisateur IA. Elles montrent une reconnaissance à la fois
                  sur le plan visuel, narratif et festivalier.
                </>
              }
              aside={<p className="meta">{awards.length + selections.length} mentions</p>}
            />
            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="meta">Prix et distinctions</p>
                <ol className="mt-4">
                  {awards.map((award, i) => (
                    <li key={award} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-4 text-[15px] text-stone last:border-b">
                      <span className="meta tabular pt-1">0{i + 1}</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="meta">Sélections et finaliste</p>
                <ol className="mt-4">
                  {selections.map((selection, i) => (
                    <li key={selection} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-4 text-[15px] text-stone last:border-b">
                      <span className="meta tabular pt-1">0{i + 1}</span>
                      <span>{selection}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section aria-labelledby="vision" className="band band-navy grain border-t border-line">
          <div className="container-x relative z-[4] section">
            <div className="grid-12 gap-y-12">
              <div className="col-span-12 lg:col-span-3">
                <p className="meta"><span className="meta-strong">05</span> &nbsp;/&nbsp; Vision</p>
              </div>
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <QuoteBlock cite="Frank Houbre" meta="Sur la formation IA">
                  <span id="vision">L’outil ne remplace pas le regard. Il accélère la fabrication, mais la qualité dépend toujours d’une direction claire.</span>
                </QuoteBlock>
                <div className="prose-cinema mt-12">
                  <p>
                    Aujourd’hui, Frank Houbre s’inscrit dans une nouvelle génération de créateurs : ceux qui
                    ne séparent plus l’écriture, la technologie et la production, mais les considèrent comme
                    un seul et même processus.
                  </p>
                  <p>
                    Son travail repose sur une conviction simple : les outils seuls ne suffisent pas. Ce qui
                    fait la différence, c’est la méthode, la compréhension des fondamentaux, et la capacité à
                    transformer une idée en vision claire.
                  </p>
                  <p>
                    À travers ses projets, ses contenus et ses outils, il cherche à donner aux créateurs les
                    moyens de ne plus « créer à l’aveugle », mais de voir, structurer et construire leurs
                    histoires avec précision.
                  </p>
                  <p>
                    Sa vision de la formation IA et de la réalisation IA repose sur une idée simple : l’outil
                    ne remplace pas le <strong>regard</strong>. Il accélère la fabrication, mais la qualité
                    dépend toujours d’une <strong>direction claire</strong>, d’une{" "}
                    <strong>exigence esthétique</strong> et d’une compréhension des fondamentaux de l’image.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réseaux et suite */}
        <section aria-labelledby="reseaux" className="section border-t border-line">
          <div className="container-x">
            <div className="grid-12 gap-y-12">
              <div className="col-span-12 lg:col-span-5">
                <p className="meta"><span className="meta-strong">06</span> &nbsp;/&nbsp; Réseaux, profils et sites</p>
                <h2 id="reseaux" className="h-block mt-5 text-cream">Retrouver Frank Houbre</h2>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  Les principales plateformes, bases de données publiques et sites associés.
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {socialLinks.map((item) => (
                    <li key={item.href}>
                      <ArrowLink href={item.href} className="text-fog hover:text-cream">
                        {item.label}
                      </ArrowLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                <p className="meta">Pour aller plus loin</p>
                <ul className="mt-4">
                  {[
                    { href: "/blog", label: "Le blog", text: "Tutoriels, analyses et actualités IA." },
                    { href: "/prestation", label: "Conseil IA production vidéo et image", text: "Conditions d’intervention en entreprise." },
                    { href: "/presse", label: "Kit presse", text: "Biographie, visuels et références festival." },
                    { href: "/contact", label: "Contact", text: "Un point d’entrée, réponse sous 48 h." },
                  ].map((l) => (
                    <li key={l.href} className="border-t border-line last:border-b">
                      <Link href={l.href} className="group flex items-baseline justify-between gap-6 py-4 no-underline">
                        <span>
                          <span className="block text-[15px] text-cream">{l.label}</span>
                          <span className="mt-1 block text-xs text-fog">{l.text}</span>
                        </span>
                        <span className="meta text-fog transition-colors group-hover:text-cream">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
