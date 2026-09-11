import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/metadata";
import { siteName } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentions légales",
  description: `Éditeur, hébergeur et propriété intellectuelle du site ${siteName}. Informations légales et conditions d’utilisation.`,
  path: "/mentions-legales",
  openGraph: {
    title: `Mentions légales | ${siteName}`,
  },
});

const sections = [
  {
    n: "01",
    title: "Éditeur du site",
    body: (
      <p>
        <strong>BUSINESSDYNAMITE</strong>
        <br />
        Société par actions simplifiée
        <br />
        ZAC LES TERRASSES DE LA SARRE PEPINIERE SYNERGIE 4, 57400 SARREBOURG
        <br />
        Dirigeant : Frank HOUBRE
      </p>
    ),
  },
  {
    n: "02",
    title: "Informations légales",
    body: (
      <p>
        SIREN : 840 854 129
        <br />
        SIRET du siège social : 840 854 129 00011
        <br />
        Numéro de TVA : FR90840854129
        <br />
        Date de création : 06 juillet 2018
        <br />
        Activité (NAF / APE) : Autres enseignements - 8559B
      </p>
    ),
  },
  {
    n: "03",
    title: "Hébergement",
    body: (
      <p>
        <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Ave #4133
        <br />
        Covina, CA 91723
        <br />
        États-Unis
        <br />
        <a href="https://vercel.com">vercel.com</a>
      </p>
    ),
  },
  {
    n: "04",
    title: "Propriété intellectuelle",
    body: (
      <p>
        Les contenus publiés sur ce site (textes, visuels, code mis en ligne dans les articles)
        sont la propriété de leur auteur sauf mention contraire. Toute reproduction non autorisée
        est interdite.
      </p>
    ),
  },
] as const;

export default function LegalPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Accueil", path: "/" },
          { name: "Mentions légales", path: "/mentions-legales" },
        ])}
      />
      <PageHeader
        kicker="Conformité"
        size="lg"
        title="Mentions légales"
        aside={<p className="meta">Mise à jour · 18/04/2026</p>}
      />
      <div className="container-x section-sm">
        <dl className="max-w-4xl">
          {sections.map((s) => (
            <div key={s.n} className="grid-12 gap-y-3 border-t border-line py-8 last:border-b">
              <dt className="col-span-12 lg:col-span-4">
                <p className="meta">
                  <span className="meta-strong tabular">{s.n}</span>
                </p>
                <h2 className="h-item mt-2 text-cream">{s.title}</h2>
              </dt>
              <dd className="prose-cinema col-span-12 text-[15px] lg:col-span-7 lg:col-start-6">{s.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
