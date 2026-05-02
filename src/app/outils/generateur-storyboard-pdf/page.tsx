import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { baseUrl, siteName } from "@/lib/site";

const title = "Generateur de Storyboard PDF IA Gratuit";
const description =
  "Transformez vos images IA en storyboard PDF presentable avec mise en page, annotations de plans et export rapide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/outils/generateur-storyboard-pdf` },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: `${baseUrl}/outils/generateur-storyboard-pdf`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
  },
};

export default function StoryboardPdfToolPage() {
  const pageUrl = `${baseUrl}/outils/generateur-storyboard-pdf`;
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
        name: "Generateur de storyboard PDF IA",
        applicationCategory: "MultimediaApplication",
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
            name: "Generateur de storyboard PDF IA",
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
        title="Generateur de storyboard PDF IA"
        subtitle="Transforme tes images IA en storyboard presentable avec mise en page propre, annotations et export PDF pour production ou client."
        iframeTitle="Generateur storyboard PDF IA"
        iframeSrc="/outils/generateur-storyboard-pdf/index.html"
      />
    </>
  );
}
