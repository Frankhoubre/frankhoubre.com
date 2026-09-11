import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArrowLink } from "@/components/ui/Cta";
import {
  buildBreadcrumbList,
  buildGraphJsonLd,
  buildPageMetadata,
  pageUrl,
} from "@/lib/metadata";
import { person, siteName, socialLinks } from "@/lib/site";

const contactEmail = "hello@businessdynamite.xyz";
const contactTitle = `Contact ${siteName}`;
const contactDescription = `Une question ou un projet IA vidéo/image ? Écrivez à ${contactEmail} pour un échange sur formation, réalisation ou conseil. Réponse sous 48 h.`;

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: contactDescription,
  path: "/contact",
  openGraph: {
    title: contactTitle,
    description: contactDescription,
  },
});

const contactJsonLd = buildGraphJsonLd(
  {
    "@type": "ContactPage",
    name: contactTitle,
    url: pageUrl("/contact"),
    description: contactDescription,
    mainEntity: {
      "@type": "Person",
      name: person.name,
      email: contactEmail,
      url: person.url,
      jobTitle: person.jobTitle,
    },
  },
  buildBreadcrumbList([
    { name: "Accueil", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
);

const reasons = [
  { n: "01", label: "Formation", text: "AI Studios, questions sur la méthode, parcours de formation.", href: "/formation-ia-gratuite", cta: "Formation gratuite" },
  { n: "02", label: "Conseil", text: "Mission en entreprise ou en boîte de production, workflows IA image et vidéo.", href: "/prestation", cta: "Voir la prestation" },
  { n: "03", label: "Presse", text: "Interviews, conférences, visuels et biographies prêtes à l’emploi.", href: "/presse", cta: "Kit presse" },
] as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <PageHeader
        index="06"
        kicker="Contact"
        title="Parlons de votre projet."
        lede="Une question, un besoin, une mission ? Un seul point d’entrée, une réponse sous 48 h ouvrées."
        aside={
          <ul className="meta space-y-1 lg:text-right">
            <li>Réponse sous 48 h</li>
            <li>FR / EN</li>
            <li>Paris · Strasbourg · Distanciel</li>
          </ul>
        }
      />
      <div className="container-x section-sm">
        <div className="grid-12 gap-y-14">
          <div className="col-span-12 lg:col-span-7">
            <p className="meta">Écrire à</p>
            <a
              href={`mailto:${contactEmail}`}
              className="display mt-4 block break-all text-[clamp(1.5rem,4.2vw,3.6rem)] normal-case leading-none tracking-[-0.02em] text-cream transition-colors duration-200 hover:text-stone"
            >
              {contactEmail}
            </a>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-fog">
              Précisez le contexte en une ou deux lignes : le projet, le délai, le format attendu.
              Les demandes de mission reçoivent une proposition de créneau d’échange.
            </p>
            <div className="mt-10 border-t border-line pt-6">
              <p className="meta">Ailleurs</p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {socialLinks.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <ArrowLink href={item.href} className="text-fog hover:text-cream">
                      {item.label}
                    </ArrowLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="meta">Selon votre demande</p>
            <ul className="mt-4">
              {reasons.map((r) => (
                <li key={r.n} className="border-t border-line py-5 last:border-b">
                  <p className="meta">
                    <span className="meta-strong tabular">{r.n}</span> &nbsp;/&nbsp; {r.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{r.text}</p>
                  <Link href={r.href} className="arrow-link mt-3 text-fog hover:text-cream">
                    <span>{r.cta}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="arrow" aria-hidden>
                      <path d="M1.5 7h11M8 2.5L12.5 7 8 11.5" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
