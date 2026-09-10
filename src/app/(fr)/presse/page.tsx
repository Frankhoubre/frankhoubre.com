import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
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
    width: 1024,
    height: 1024,
  },
  {
    src: "/images/og-default.jpg",
    alt: "Visuel de présentation de Frank Houbre pour les partages et articles",
    label: "Visuel de présentation (1200 × 630)",
    width: 1200,
    height: 630,
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
      <article className="ds-page max-w-5xl">
        <header className="ds-cinematic-frame grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.5fr_1.5fr] lg:items-start">
          <div className="ds-cinematic-beam" aria-hidden />
          <figure className="relative z-10 mx-auto w-full max-w-[200px] overflow-hidden rounded-3xl border border-[rgba(17,17,17,0.2)] lg:mx-0">
            <Image
              src="/images/frank-houbre-about.png"
              alt="Portrait de Frank Houbre"
              width={520}
              height={520}
              priority
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 200px, 260px"
            />
          </figure>
          <div className="relative z-10">
            <p className="cyber-label">Kit presse</p>
            <h1 className="mt-3 text-2xl text-[var(--cream)] sm:text-4xl">
              Frank Houbre, formateur IA et réalisateur IA
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Cette page rassemble tout ce dont un journaliste, un organisateur d’événement ou un
              partenaire a besoin : biographies prêtes à copier, visuels libres d’usage éditorial,
              distinctions vérifiables et contact direct.
            </p>
            <dl className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label} className="cyber-spec-row">
                  <dt className="cyber-spec-label">{f.label}</dt>
                  <dd className="text-sm text-[var(--cream)] text-right">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section aria-labelledby="bio-courte" className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="ds-card p-6">
            <p className="ds-eyebrow">Biographie courte</p>
            <h2 id="bio-courte" className="mt-3 text-lg text-neutral-950">
              Version 60 mots
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-800">{shortBio}</p>
          </div>
          <div className="ds-card p-6">
            <p className="ds-eyebrow">Signature courte</p>
            <h2 className="mt-3 text-lg text-neutral-950">Pour une légende ou un programme</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-800">
              Frank Houbre, formateur IA et réalisateur IA, fondateur d’AI Studios et de
              ScreenWeaver.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              Orthographe du nom : Frank sans « c », Houbre avec un « h ». Merci de lier vers{" "}
              <Link href="/" className="ds-link text-neutral-950">
                frankhoubre.com
              </Link>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="bio-longue" className="mt-14 max-w-3xl">
          <p className="ds-eyebrow">Biographie longue</p>
          <h2 id="bio-longue" className="mt-3 text-xl text-neutral-950">
            Parcours
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-800 sm:text-lg">
            {longBio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-4 text-sm text-neutral-700">
            La version détaillée du parcours est sur la page{" "}
            <Link href="/a-propos" className="ds-link text-neutral-950">
              À propos
            </Link>
            .
          </p>
        </section>

        <section aria-labelledby="visuels" className="mt-14">
          <p className="ds-eyebrow">Visuels</p>
          <h2 id="visuels" className="mt-3 text-xl text-neutral-950">
            Portrait et visuels
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-800">
            Usage éditorial autorisé (presse, programmes, réseaux) avec la mention « Frank Houbre ».
            Pas de recadrage qui déforme, pas d’usage publicitaire sans accord.
          </p>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {visuals.map((v) => (
              <li key={v.src} className="ds-card overflow-hidden">
                <div className="relative aspect-[3/2] w-full bg-neutral-100">
                  <Image
                    src={v.src}
                    alt={v.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <p className="text-sm text-neutral-800">{v.label}</p>
                  <a
                    href={v.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-link shrink-0 text-sm font-medium text-neutral-950"
                  >
                    Ouvrir en HD
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="distinctions" className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="ds-card p-6">
            <p className="ds-eyebrow">Prix et distinctions</p>
            <h2 id="distinctions" className="mt-3 text-lg text-neutral-950">
              Films primés
            </h2>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-neutral-800">
              {awards.map((a) => (
                <li key={a} className="rounded-xl bg-[#f7f1e9] px-4 py-2.5">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="ds-card p-6">
            <p className="ds-eyebrow">Sélections</p>
            <h2 className="mt-3 text-lg text-neutral-950">Sélections officielles et finales</h2>
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-neutral-800">
              {selections.map((s) => (
                <li key={s} className="rounded-xl bg-[#f7f1e9] px-4 py-2.5">
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-neutral-700">
              Fiche IMDb et profils publics :{" "}
              {socialLinks
                .filter((s) => ["IMDb", "LinkedIn", "YouTube"].includes(s.label))
                .map((s, i, arr) => (
                  <span key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ds-link text-neutral-950"
                    >
                      {s.label}
                    </a>
                    {i < arr.length - 1 ? ", " : "."}
                  </span>
                ))}
            </p>
          </div>
        </section>

        <section aria-labelledby="sujets" className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="ds-eyebrow">Interventions</p>
            <h2 id="sujets" className="mt-3 text-xl text-neutral-950">
              Sujets d’interview et de conférence
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-neutral-800">
              {topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
              Pour une mission en entreprise, voir la page{" "}
              <Link href="/prestation" className="ds-link text-neutral-950">
                conseil IA production vidéo et image
              </Link>
              .
            </p>
          </div>
          <div className="ds-card p-6">
            <p className="ds-eyebrow">Contact média</p>
            <h2 className="mt-3 text-lg text-neutral-950">Demandes presse et événements</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-800">
              Écrivez à{" "}
              <a href={`mailto:${contactEmail}`} className="ds-link font-medium text-neutral-950">
                {contactEmail}
              </a>{" "}
              en précisant le média, l’angle et la date. Réponse sous 48 h ouvrées.
            </p>
            <p className="mt-4 text-sm text-neutral-700">
              Pour toute autre demande, la page{" "}
              <Link href="/contact" className="ds-link text-neutral-950">
                Contact
              </Link>{" "}
              reste le point d’entrée.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
