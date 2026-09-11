import Image from "next/image";
import type { Metadata } from "next";
import { HomeFilmGallery } from "@/components/HomeFilmGallery";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { getHomeGalleryImages } from "@/lib/home-gallery";
import { JsonLd } from "@/components/JsonLd";
import { Cta } from "@/components/ui/Cta";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
  pageUrl,
} from "@/lib/metadata";
import { person, siteName } from "@/lib/site";

const pageTitle = "Conseil IA production vidéo et image";
const pageDescription =
  "Conseil IA pour entreprises et boîtes de prod : workflows, coûts et vitesse d’exécution. 4 200 € HT/jour, distanciel ou Paris/Strasbourg. Contactez-moi pour un premier échange.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/prestation",
  openGraph: {
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [
      {
        path: "/images/og-default.jpg",
        alt: "Conseil IA pour production vidéo et image",
      },
    ],
  },
});

const prestationJsonLd = buildGraphJsonLd(
  {
    "@type": "Service",
    name: "Conseil IA production vidéo et image",
    description: pageDescription,
    url: pageUrl("/prestation"),
    provider: {
      "@type": "Person",
      name: person.name,
      url: person.url,
      jobTitle: person.jobTitle,
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "City", name: "Strasbourg" },
      { "@type": "Country", name: "France" },
    ],
    offers: {
      "@type": "Offer",
      price: "4200",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "4200",
        priceCurrency: "EUR",
        unitText: "jour",
      },
    },
  },
  buildBreadcrumbList([
    { name: "Accueil", path: "/" },
    { name: "Prestation", path: "/prestation" },
  ]),
);

const keyBenefits = [
  {
    n: "01",
    title: "Production",
    description:
      "Structuration d'un pipeline IA clair pour passer plus vite de l'idée au rendu livrable, sans dégrader la qualité perçue.",
  },
  {
    n: "02",
    title: "Coûts",
    description:
      "Identification des postes de dépense compressibles et des tâches à automatiser pour réduire les coûts de production.",
  },
  {
    n: "03",
    title: "Vitesse",
    description:
      "Mise en place de méthodes opérationnelles pour accélérer les itérations créatives et raccourcir les délais de livraison.",
  },
] as const;

const interventions = [
  "Audit de vos workflows IA image/video actuels",
  "Recommandations concrètes et priorisées",
  "Optimisation du process pre-prod, prod et post-prod",
  "Structuration des prompts, styles et standards qualité",
  "Formation des équipes aux bonnes pratiques exécutables",
] as const;

const conditions = [
  ["Tarif journalier", "4 200 € HT / jour, tarif fixe"],
  ["Modalités", "Distanciel, Paris ou Strasbourg"],
  ["Déplacements", "Possibles selon mission et planning"],
  ["Livrable", "Feuille de route directement utilisable"],
] as const;

export default function PrestationPage() {
  const galleryImages = getHomeGalleryImages();

  return (
    <>
      <JsonLd data={prestationJsonLd} />
      <RevealObserver />

      {/* Ouverture plein cadre */}
      <section className="band grain vignette relative flex min-h-[86svh] flex-col" aria-labelledby="prestation-title">
        <div className="layer kenburns" aria-hidden>
          <Image
            src="/images/formation/hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="opacity-80"
          />
        </div>
        <div className="scrim" aria-hidden />
        <div className="glow drift" style={{ width: "40vw", height: "40vw", maxWidth: 640, maxHeight: 640, right: "-10%", top: "10%" }} aria-hidden />
        <div className="container-x relative z-[4] flex flex-1 flex-col justify-end pb-12 pt-[calc(var(--header-h)+4rem)] sm:pb-16">
          <p className="meta meta-strong reveal">05 / Prestation conseil IA</p>
          <h1 id="prestation-title" className="display display-md reveal mt-6 max-w-5xl normal-case leading-[0.98] text-cream" data-delay="0.1">
            J’accompagne les entreprises et boîtes de prod pour optimiser leur production avec l’IA.
          </h1>
          <div className="grid-12 mt-10 gap-y-8 border-t border-line pt-8">
            <p className="lede reveal col-span-12 lg:col-span-6" data-delay="0.2">
              Intervention orientée résultat pour améliorer trois leviers stratégiques : qualité de
              production, maîtrise des coûts et vitesse d’exécution.
            </p>
            <div className="reveal col-span-12 flex flex-wrap gap-3 lg:col-span-6 lg:justify-end" data-delay="0.3">
              <Cta href="/contact" variant="primary">
                Demander une disponibilité
              </Cta>
              <Cta href="/a-propos">À propos</Cta>
            </div>
          </div>
        </div>
      </section>

      {galleryImages.length > 0 ? (
        <section className="border-b border-line py-6" aria-label="Extraits de productions IA">
          <HomeFilmGallery images={galleryImages} />
        </section>
      ) : null}

      {/* Trois leviers */}
      <section className="section" aria-labelledby="leviers">
        <div className="container-x">
          <SectionHeader
            index="01"
            kicker="Une prestation orientée performance"
            id="leviers"
            title="Trois leviers, un objectif : des gains mesurables."
            lede="Je travaille avec des équipes dirigeantes, des studios, des agences et des boîtes de production qui veulent intégrer l’IA sans improvisation. L’accompagnement se concentre sur les décisions qui ont un impact direct sur les délais, le budget et la qualité."
          />
          <ul className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
            {keyBenefits.map((item) => (
              <li key={item.title} className="reveal">
                <p className="meta"><span className="meta-strong tabular">{item.n}</span> &nbsp;/&nbsp; Axe prioritaire</p>
                <h3 className="h-block mt-5 text-cream">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fog">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contenu de la mission et conditions */}
      <section className="section border-t border-line" aria-labelledby="mission">
        <div className="container-x">
          <div className="grid-12 gap-y-14">
            <div className="col-span-12 lg:col-span-4">
              <div className="frame frame-grain frame-marks relative aspect-[4/5]">
                <Image
                  src="/images/frank-houbre-about.png"
                  alt="Frank Houbre en prestation conseil IA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <p className="meta mt-3">Fig. 02 · Frank Houbre</p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="meta"><span className="meta-strong">02</span> &nbsp;/&nbsp; Ce que comprend la mission</p>
              <h2 id="mission" className="h-section mt-5">Conseil stratégique et exécution terrain</h2>
              <ol className="mt-10 border-t border-line">
                {interventions.map((item, i) => (
                  <li key={item} className="reveal grid grid-cols-[2.5rem_1fr] gap-4 border-b border-line py-4 text-[15px] text-stone" data-delay={(0.05 * i).toFixed(2)}>
                    <span className="meta tabular pt-1">0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-relaxed text-fog">
                La mission se conclut par une feuille de route directement utilisable par vos équipes.
              </p>
              <dl className="mt-12 grid gap-x-8 sm:grid-cols-2">
                {conditions.map(([k, v]) => (
                  <div key={k} className="spec-row">
                    <dt className="spec-label">{k}</dt>
                    <dd className="spec-value">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Dernier appel */}
      <section className="band band-navy grain border-t border-line" aria-labelledby="demande">
        <div className="container-x relative z-[4] section">
          <div className="grid-12 items-end gap-y-10">
            <div className="col-span-12 lg:col-span-8">
              <p className="meta"><span className="meta-strong">03</span> &nbsp;/&nbsp; Demande de mission</p>
              <h2 id="demande" className="h-section mt-5">Parlons de vos enjeux de production IA.</h2>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-fog">
                Si vous cherchez un accompagnement senior, structuré et orienté ROI, je peux vous aider à
                cadrer et accélérer votre exécution.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:text-right">
              <Cta href="/contact" variant="primary" size="lg">
                Me contacter pour une mission
              </Cta>
              <p className="meta mt-4">4 200 € HT / jour · Distanciel, Paris, Strasbourg</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
