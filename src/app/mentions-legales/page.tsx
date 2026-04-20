import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Informations légales concernant le site de ${siteName}.`,
  alternates: { canonical: `${baseUrl}/mentions-legales` },
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Mentions légales</h1>
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
              className="text-neutral-950 underline underline-offset-2 hover:text-neutral-600"
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
  );
}
