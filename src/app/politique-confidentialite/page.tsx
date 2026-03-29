import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Traitement des données personnelles sur le site de ${siteName} (RGPD).`,
  alternates: { canonical: `${baseUrl}/politique-confidentialite` },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        Politique de confidentialité
      </h1>
      <p className="mt-4 text-sm text-neutral-600">
        Dernière mise à jour : mars 2026.
      </p>
      <div className="prose-cinema mt-8 max-w-none space-y-6 text-neutral-800">
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Responsable du traitement
          </h2>
          <p className="mt-2">
            Le responsable du traitement des données personnelles collectées via
            ce site est <strong className="text-neutral-950">{siteName}</strong>
            . Indiquez ici une adresse postale et un moyen de contact dédié
            (courriel) pour l’exercice de vos droits, comme pour la page{" "}
            <Link
              href="/mentions-legales"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              Mentions légales
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Données collectées et finalités
          </h2>
          <p className="mt-2">
            Ce site est essentiellement <strong className="text-neutral-950">statique</strong>{" "}
            : les pages sont consultables sans création de compte ni formulaire
            obligatoire.
          </p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong className="text-neutral-950">Hébergement et logs</strong>{" "}
              : l’hébergeur (par ex. Vercel ou équivalent) peut enregistrer des
              données techniques (adresse IP, horodatage, navigateur) dans des
              fichiers journaux aux fins de sécurité, maintenance et statistiques
              d’infrastructure, conformément à sa propre politique et au contrat
              d’hébergement.
            </li>
            <li>
              <strong className="text-neutral-950">Contact</strong> : si vous
              contactez l’éditeur (courriel ou futur formulaire), les données
              que vous transmettez (nom, message, etc.) sont utilisées uniquement
              pour répondre à votre demande.
            </li>
            <li>
              <strong className="text-neutral-950">Contenus tiers</strong>{" "}
              : certains articles peuvent intégrer des vidéos{" "}
              <strong className="text-neutral-950">YouTube</strong> (lecteur
              embarqué). En lançant la lecture, YouTube (Google) peut déposer
              des cookies ou traiter des données selon{" "}
              <a
                href="https://policies.google.com/privacy?hl=fr"
                className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
                rel="noopener noreferrer"
                target="_blank"
              >
                sa politique de confidentialité
              </a>
              .
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Base légale
          </h2>
          <p className="mt-2">
            Les traitements liés à la consultation du site et à l’hébergement
            reposent sur l’<strong className="text-neutral-950">intérêt légitime</strong>{" "}
            d’assurer le fonctionnement et la sécurité du service. Les
            échanges initiés par vous via le contact reposent sur la{" "}
            <strong className="text-neutral-950">demande de mesures précontractuelles</strong>{" "}
            ou votre <strong className="text-neutral-950">consentement</strong>{" "}
            selon le cas.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Durée de conservation
          </h2>
          <p className="mt-2">
            Les messages de contact sont conservés le temps nécessaire au
            traitement de la demande puis archivés ou supprimés selon les
            obligations légales applicables. Les journaux d’hébergement suivent
            la durée fixée par l’hébergeur.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Destinataires et transferts
          </h2>
          <p className="mt-2">
            Les données peuvent être traitées par les prestataires techniques
            (hébergement, éventuellement messagerie). Si ces prestataires sont
            situés hors de l’Espace économique européen, des garanties
            appropriées (clauses types, etc.) peuvent s’appliquer.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Vos droits
          </h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification, d’effacement, de limitation, d’opposition et de
            portabilité le cas échéant, ainsi que du droit d’introduire une
            réclamation auprès d’une autorité de contrôle (en France, la CNIL).
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">
            Cookies
          </h2>
          <p className="mt-2">
            Le site ne vise pas à déposer de cookies de mesure d’audience
            propriétaires. Des cookies ou traceurs peuvent toutefois être
            imposés par des services tiers (ex. YouTube) lorsque vous interagissez
            avec eux.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-950">Contact</h2>
          <p className="mt-2">
            Pour toute question relative à cette politique ou à vos données,
            vous pouvez utiliser les coordonnées indiquées sur la page{" "}
            <Link
              href="/contact"
              className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
            >
              Contact
            </Link>{" "}
            ou dans les mentions légales, une fois celles-ci complétées.
          </p>
        </section>
      </div>
    </div>
  );
}
