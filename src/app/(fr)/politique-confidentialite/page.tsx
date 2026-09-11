import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { buildBreadcrumbList, buildPageMetadata } from "@/lib/metadata";
import { siteName } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialité",
  description: `Données personnelles, cookies et droits RGPD sur ${siteName}. Découvrez comment vos informations sont collectées et protégées.`,
  path: "/politique-confidentialite",
  openGraph: {
    title: `Politique de confidentialité | ${siteName}`,
  },
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbList([
          { name: "Accueil", path: "/" },
          { name: "Politique de confidentialité", path: "/politique-confidentialite" },
        ])}
      />
      <PageHeader
        kicker="RGPD"
        size="lg"
        title="Politique de confidentialité"
        lede="Données personnelles, cookies et droits : ce que le site collecte, pourquoi, et comment exercer vos droits."
        aside={<p className="meta">Mise à jour · septembre 2026</p>}
      />
      <div className="container-x section-sm">
      <div className="prose-cinema max-w-3xl">
        <section>
          <h2>
            Responsable du traitement
          </h2>
          <p>
            Le responsable du traitement des données personnelles collectées via
            ce site est <strong>{siteName}</strong>
            . Indiquez ici une adresse postale et un moyen de contact dédié
            (courriel) pour l’exercice de vos droits, comme pour la page{" "}
            <Link
              href="/mentions-legales"
             
            >
              Mentions légales
            </Link>
            .
          </p>
        </section>
        <section>
          <h2>
            Données collectées et finalités
          </h2>
          <p>
            Ce site est essentiellement <strong>statique</strong>{" "}
            : les pages sont consultables sans création de compte ni formulaire
            obligatoire.
          </p>
          <ul>
            <li>
              <strong>Hébergement et logs</strong>{" "}
              : l’hébergeur (Vercel Inc.) peut enregistrer des
              données techniques (adresse IP, horodatage, navigateur) dans des
              fichiers journaux aux fins de sécurité, maintenance et statistiques
              d’infrastructure, conformément à sa propre politique et au contrat
              d’hébergement.
            </li>
            <li>
              <strong>Contact</strong> : si vous
              contactez l’éditeur (courriel ou futur formulaire), les données
              que vous transmettez (nom, message, etc.) sont utilisées uniquement
              pour répondre à votre demande.
            </li>
            <li>
              <strong>Formation gratuite</strong>{" "}
              : si vous demandez la formation vidéo IA offerte, votre prénom
              et votre adresse email sont enregistrés, avec la date, la source
              de votre visite (site d’origine ou paramètres de campagne) et
              l’état de votre abonnement. Ils servent uniquement à vous envoyer
              les accès et la série d’emails du challenge, puis les conseils de
              Frank Houbre. Chaque email contient un lien de désinscription en
              un clic. Les emails sont envoyés par Resend, Inc. et les données
              stockées chez Upstash, Inc. (base Redis). La mesure d’audience de
              ces pages (vues, inscriptions, clics sortants) repose sur un
              hachage quotidien non réversible de l’adresse IP et du
              navigateur, sans cookie ni identifiant conservé.
            </li>
            <li>
              <strong>Contenus tiers</strong>{" "}
              : certains articles peuvent intégrer des vidéos{" "}
              <strong>YouTube</strong> (lecteur
              embarqué). En lançant la lecture, YouTube (Google) peut déposer
              des cookies ou traiter des données selon{" "}
              <a
                href="https://policies.google.com/privacy?hl=fr"
               
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
          <h2>
            Base légale
          </h2>
          <p>
            Les traitements liés à la consultation du site et à l’hébergement
            reposent sur l’<strong>intérêt légitime</strong>{" "}
            d’assurer le fonctionnement et la sécurité du service. Les
            échanges initiés par vous via le contact reposent sur la{" "}
            <strong>demande de mesures précontractuelles</strong>{" "}
            ou votre <strong>consentement</strong>{" "}
            selon le cas.
          </p>
        </section>
        <section>
          <h2>
            Durée de conservation
          </h2>
          <p>
            Les messages de contact sont conservés le temps nécessaire au
            traitement de la demande puis archivés ou supprimés selon les
            obligations légales applicables. Les journaux d’hébergement suivent
            la durée fixée par l’hébergeur. Les inscriptions à la formation
            gratuite sont conservées tant que vous restez abonné, puis au plus
            trois ans après votre désinscription ou votre dernier contact ;
            vous pouvez demander leur suppression immédiate à tout moment.
          </p>
        </section>
        <section>
          <h2>
            Destinataires et transferts
          </h2>
          <p>
            Les données peuvent être traitées par les prestataires techniques
            (hébergement, éventuellement messagerie). Si ces prestataires sont
            situés hors de l’Espace économique européen, des garanties
            appropriées (clauses types, etc.) peuvent s’appliquer.
          </p>
        </section>
        <section>
          <h2>
            Vos droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification, d’effacement, de limitation, d’opposition et de
            portabilité le cas échéant, ainsi que du droit d’introduire une
            réclamation auprès d’une autorité de contrôle (en France, la CNIL).
          </p>
        </section>
        <section>
          <h2>
            Cookies
          </h2>
          <p>
            Le site ne vise pas à déposer de cookies de mesure d’audience
            propriétaires. Après une inscription à la formation gratuite, un
            cookie technique (« fh_funnel_sub », un an) évite seulement de vous
            reproposer l’inscription. Des cookies ou traceurs peuvent toutefois être
            imposés par des services tiers (ex. YouTube) lorsque vous interagissez
            avec eux.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question relative à cette politique ou à vos données,
            vous pouvez utiliser les coordonnées indiquées sur la page{" "}
            <Link
              href="/contact"
             
            >
              Contact
            </Link>{" "}
            ou dans les mentions légales, une fois celles-ci complétées.
          </p>
        </section>
      </div>
      </div>
    </>
  );
}
