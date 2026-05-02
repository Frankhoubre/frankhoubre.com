import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { baseUrl, siteName } from "@/lib/site";

const title = "Calculateur Budget Production IA Gratuit";
const description =
  "Estimez le cout reel d'un projet video IA et convertissez les credits en euros pour mieux cadrer vos budgets de production.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/outils/calculateur-budget-production-ia` },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: `${baseUrl}/outils/calculateur-budget-production-ia`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
  },
};

export default function CalculateurBudgetProductionIaPage() {
  const pageUrl = `${baseUrl}/outils/calculateur-budget-production-ia`;
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
        name: "Calculateur budget production IA",
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
            name: "Calculateur budget production IA",
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
        title="Calculateur budget production IA"
        subtitle="Estime ton cout reel de production video IA avec un cadre clair pour piloter tes credits, abonnements et marges."
        iframeTitle="Calculateur budget production IA"
        iframeSrc="/outils/calculateur-budget-production-ia/index.html"
      />
    </>
  );
}
