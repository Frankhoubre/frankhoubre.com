import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArrowLink } from "@/components/ui/Cta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ABOUT_OG_IMAGE,
  PERSON_ID,
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
  pageUrl,
} from "@/lib/metadata";
import { baseUrl, person, socialLinks } from "@/lib/site";

const pageTitle = "Kit presse Frank Houbre : bio, visuels et références";
const pageDescription =
  "Kit presse de Frank Houbre, formateur IA et réalisateur IA : biographie courte et longue, portrait HD, films primés, distinctions festival et contact média.";

export const metadata: Metadata = buildPageMetadata({
  title: "Kit presse",
  titleAbsolute: pageTitle,
  description: pageDescription,
  path: "/presse",
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        path: ABOUT_OG_IMAGE.path,
        width: ABOUT_OG_IMAGE.width,
        height: ABOUT_OG_IMAGE.height,
        alt: ABOUT_OG_IMAGE.alt,
      },
    ],
  },
});

const shortBio =
  "Frank Houbre est formateur IA et réalisateur IA français. Fondateur d’AI Studios, de ScreenWeaver et de Business Dynamite, il enseigne aux créateurs comment produire des images, vidéos et films IA avec une exigence de cinéma. Ses films Ronces et VOIDBORN ont été primés dans des festivals internationaux.";

const longBio = [
  "Frank Houbre commence par la musique et l’enseignement, puis fonde MyMusicTeacher en 2014, une plateforme d’apprentissage musical en ligne récompensée d’une médaille d’or au Concours Lépine. Il crée ensuite Business Dynamite, plateforme et chaîne YouTube dédiées à l’entrepreneuriat et aux outils numériques.",
  "Avec l’arrivée de l’IA générative, il déplace son travail vers la création image et vidéo assistée par IA, avec une logique de réalisateur et de producteur : cadre, lumière, continuité, montage. Il fonde AI Studios, programme de formation pour créateurs, et conçoit ScreenWeaver, un outil d’écriture qui relie scénario, storyboard et production visuelle.",
  "Ses films IA, Ronces (court film) et VOIDBORN (animé), ont été sélectionnés et récompensés dans plusieurs festivals internationaux dédiés à l’IA. Il partage ses méthodes sur frankhoubre.com, en français et en anglais.",
];

const facts = [
  { label: "Fonction", value: "Formateur IA, réalisateur IA, entrepreneur" },
  { label: "Basé", value: "France (Paris, Strasbourg, distanciel)" },
  { label: "Projets", value: "AI Studios, ScreenWeaver, Business Dynamite" },
  { label: "Films", value: "Ronces, VOIDBORN, Lost Garden" },
  { label: "Langues", value: "Français, anglais" },
] as const;

const awards = [
  "Chroma Awards, première place (Silver)",
  "Seoul International AI Film Festival (SIAFF), médaille d’argent",
  "Australian AI Festival, Winner (Melbourne)",
  "Hollywood Indie Festival, Award Winner",
  "Chroma Dreamina, deuxième place",
] as const;

const selections = [
  "Pulse of Animation Festival, sélection officielle",
  "Los Angeles Film Awards, sélection officielle",
  "Top Shorts, sélection officielle",
  "Bangkok Movie Awards, finaliste",
] as const;

const topics = [
  "Comment produire une vidéo IA crédible sans effet plastique",
  "Réalisation IA : ce que le cinéma apprend aux créateurs de contenu",
  "Former des équipes de production à l’IA image et vidéo",
  "Écriture, storyboard et production : le pipeline d’un film IA",
  "L’IA dans les festivals : ce que changent les prix et sélections",
] as const;

const visuals = [
  {
    src: "/images/frank-houbre-about.png",
    alt: "Portrait officiel de Frank Houbre, formateur IA et réalisateur IA",
    label: "Portrait officiel (carré, 1024 px)",
    ratio: "1/1",
  },
  {
    src: "/images/og-default.jpg",
    alt: "Visuel de présentation de Frank Houbre pour les partages et articles",
    label: "Visuel de présentation (1200 × 630)",
    ratio: "1200/630",
  },
] as const;

const contactEmail = "hello@businessdynamite.xyz";

const jsonLd = buildGraphJsonLd(
  {
    "@type": "ProfilePage",
    name: pageTitle,
    url: pageUrl("/presse"),
    description: pageDescription,
    inLanguage: "fr-FR",
    mainEntity: { "@id": PERSON_ID },
  },
  {
    "@type": "Person",
    "@id": PERSON_ID,
    name: person.name,
    url: baseUrl,
    jobTitle: person.jobTitle,
    description: shortBio,
    image: `${baseUrl}${person.image}`,
    email: contactEmail,
    award: [...awards],
    sameAs: [...person.sameAs],
  },
  buildBreadcrumbList([
    { name: "Accueil", path: "/" },
    { name: "Kit presse", path: "/presse" },
  ]),
);

export default function PressePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <article>
        <PageHeader
          index="07"
          kicker="Kit presse"
          title={
            <>
              Frank Houbre
              <span className="block text-fog">formateur IA et réalisateur IA</span>
            </>
          }
          lede="Tout ce dont un journaliste, un organisateur d’événement ou un partenaire a besoin : biographies prêtes à copier, visuels libres d’usage éditorial, distinctions vérifiables et contact direct."
          aside={
            <p className="meta lg:text-right">
              Contact média
              <br />
              <a href={`mailto:${contactEmail}`} className="link-muted lowercase tracking-normal">
                {contactEmail}
              </a>
            </p>
          }
        />

        {/* Fiche d'identité */}
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
              <p className="meta">Fiche</p>
              <dl className="mt-4">
                {facts.map((f) => (
                  <div key={f.label} className="spec-row">
                    <dt className="spec-label">{f.label}</dt>
                    <dd className="spec-value !text-left sm:!text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <p className="meta">Biographie courte · 60 mots</p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-stone">{shortBio}</p>
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <p className="meta">Signature courte · légende ou programme</p>
                <p className="mt-3 text-[15px] text-stone">
                  Frank Houbre, formateur IA et réalisateur IA, fondateur d’AI Studios et de ScreenWeaver.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  Orthographe du nom : Frank sans « c », Houbre avec un « h ». Merci de lier vers{" "}
                  <Link href="/" className="link">
                    frankhoubre.com
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Biographie longue */}
        <section aria-labelledby="bio-longue" className="section border-t border-line">
          <div className="container-x">
            <div className="grid-12 gap-y-10">
              <div className="col-span-12 lg:col-span-3">
                <p className="meta"><span className="meta-strong">01</span> &nbsp;/&nbsp; Biographie longue</p>
              </div>
              <div className="col-span-12 lg:col-span-8 lg:col-start-5">
                <h2 id="bio-longue" className="h-section">Parcours</h2>
                <div className="prose-cinema mt-8">
                  {longBio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <p className="mt-4 text-sm text-fog">
                  La version détaillée du parcours est sur la page{" "}
                  <Link href="/a-propos" className="link">
                    À propos
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visuels */}
        <section aria-labelledby="visuels" className="section border-t border-line">
          <div className="container-x">
            <SectionHeader
              index="02"
              kicker="Visuels"
              id="visuels"
              title="Portrait et visuels"
              lede="Usage éditorial autorisé (presse, programmes, réseaux) avec la mention « Frank Houbre ». Pas de recadrage qui déforme, pas d’usage publicitaire sans accord."
            />
            <ul className="mt-14 grid gap-10 sm:grid-cols-2">
              {visuals.map((v, i) => (
                <li key={v.src}>
                  <div className="frame frame-grain frame-marks relative" style={{ aspectRatio: v.ratio }}>
                    <Image src={v.src} alt={v.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="meta">Fig. 0{i + 2} · {v.label}</p>
                    <ArrowLink href={v.src} external className="shrink-0">
                      Ouvrir en HD
                    </ArrowLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Distinctions */}
        <section aria-labelledby="distinctions" className="section border-t border-line">
          <div className="container-x">
            <SectionHeader index="03" kicker="Distinctions" id="distinctions" title="Films primés et sélections officielles" />
            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="meta">Prix et distinctions</p>
                <ol className="mt-4">
                  {awards.map((a, i) => (
                    <li key={a} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-4 text-[15px] text-stone last:border-b">
                      <span className="meta tabular pt-1">0{i + 1}</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="meta">Sélections officielles et finales</p>
                <ol className="mt-4">
                  {selections.map((s, i) => (
                    <li key={s} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-4 text-[15px] text-stone last:border-b">
                      <span className="meta tabular pt-1">0{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-sm text-fog">
                  Fiche IMDb et profils publics :{" "}
                  {socialLinks
                    .filter((s) => ["IMDb", "LinkedIn", "YouTube"].includes(s.label))
                    .map((s, i, arr) => (
                      <span key={s.href}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                          {s.label}
                        </a>
                        {i < arr.length - 1 ? ", " : "."}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sujets et contact */}
        <section aria-labelledby="sujets" className="section border-t border-line">
          <div className="container-x">
            <div className="grid-12 gap-y-12">
              <div className="col-span-12 lg:col-span-7">
                <p className="meta"><span className="meta-strong">04</span> &nbsp;/&nbsp; Interventions</p>
                <h2 id="sujets" className="h-section mt-5">Sujets d’interview et de conférence</h2>
                <ol className="mt-10 border-t border-line">
                  {topics.map((t, i) => (
                    <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-4 text-[15px] text-stone">
                      <span className="meta tabular pt-1">0{i + 1}</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-sm leading-relaxed text-fog">
                  Pour une mission en entreprise, voir la page{" "}
                  <Link href="/prestation" className="link">
                    conseil IA production vidéo et image
                  </Link>
                  .
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <p className="meta">Contact média</p>
                <h3 className="h-block mt-5 text-cream">Demandes presse et événements</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-stone">
                  Écrivez à{" "}
                  <a href={`mailto:${contactEmail}`} className="link">
                    {contactEmail}
                  </a>{" "}
                  en précisant le média, l’angle et la date. Réponse sous 48 h ouvrées.
                </p>
                <p className="mt-4 text-sm text-fog">
                  Pour toute autre demande, la page{" "}
                  <Link href="/contact" className="link">
                    Contact
                  </Link>{" "}
                  reste le point d’entrée.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
