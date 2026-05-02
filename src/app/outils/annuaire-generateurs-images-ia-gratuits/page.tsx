import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { baseUrl, siteName } from "@/lib/site";

const title = "Annuaire des generateurs d'images IA gratuits";
const description =
  "Comparez les meilleurs generateurs d'images IA gratuits avec filtres, tri intelligent et notation pour choisir rapidement le bon outil.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/outils/annuaire-generateurs-images-ia-gratuits` },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: `${baseUrl}/outils/annuaire-generateurs-images-ia-gratuits`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
  },
};

export default function AnnuaireGenerateursImagesIaGratuitsPage() {
  const pageUrl = `${baseUrl}/outils/annuaire-generateurs-images-ia-gratuits`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#app`,
        name: "Annuaire des generateurs d'images IA gratuits",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description,
        url: pageUrl,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Outils",
            item: `${baseUrl}/outils`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Annuaire des generateurs d'images IA gratuits",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ToolIframePage
        title="Annuaire des generateurs d'images IA gratuits"
        subtitle="Compare les plateformes image IA gratuites avec une interface claire pour trouver rapidement l'outil adapte a ton style et ton niveau."
        iframeTitle="Annuaire generateurs images IA gratuits"
        iframeSrc="/outils/annuaire-generateurs-images-ia-gratuits/index.html"
      />
    </>
  );
}
