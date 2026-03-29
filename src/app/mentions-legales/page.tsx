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
            <strong className="text-neutral-950">{siteName}</strong>
            <br />
            Remplacez ce bloc par votre identité, statut (personne physique /
            entreprise), adresse et coordonnées conformément à l’obligation
            d’information en ligne.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Hébergement
          </h2>
          <p className="mt-2">
            Indiquez ici le nom, l’adresse et les coordonnées de votre hébergeur
            (ex. Vercel, OVH, etc.).
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
      </div>
    </div>
  );
}
