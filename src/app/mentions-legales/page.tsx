import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
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

export default function LegalPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Accueil", path: "/" },
          { name: "Mentions légales", path: "/mentions-legales" },
        ])}
      />
      <div className="ds-page max-w-3xl">
      <section className="ds-hero p-6 sm:p-8">
        <p className="ds-eyebrow">Conformité</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Mentions légales
        </h1>
      </section>
      <div className="prose-cinema mt-8 max-w-none space-y-6 text-neutral-800">
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Éditeur du site
          </h2>
          <p className="mt-2">
            <strong className="text-neutral-950">BUSINESSDYNAMITE</strong>
            <br />
            Société par actions simplifiée
            <br />
            ZAC LES TERRASSES DE LA SARRE PEPINIERE SYNERGIE 4, 57400 SARREBOURG
            <br />
            Dirigeant : Frank HOUBRE
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Informations légales
          </h2>
          <p className="mt-2">
            SIREN : 840 854 129
            <br />
            SIRET du siege social : 840 854 129 00011
            <br />
            Numero de TVA : FR90840854129
            <br />
            Date de creation : 06 juillet 2018
            <br />
            Activite (NAF / APE) : Autres enseignements - 8559B
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Hébergement
          </h2>
          <p className="mt-2">
            <strong className="text-neutral-950">Vercel Inc.</strong>
            <br />
            440 N Barranca Ave #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
            <br />
            <a
              href="https://vercel.com"
              className="ds-link text-neutral-950 hover:text-neutral-600"
            >
              vercel.com
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Propriété intellectuelle
          </h2>
          <p className="mt-2">
            Les contenus publiés sur ce site (textes, visuels, code mis en ligne
            dans les articles) sont la propriété de leur auteur sauf mention
            contraire. Toute reproduction non autorisée est interdite.
          </p>
        </section>
        <section>
          <p className="mt-2 text-sm text-neutral-600">
            Sources et mises a jour le 18/04/2026.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
