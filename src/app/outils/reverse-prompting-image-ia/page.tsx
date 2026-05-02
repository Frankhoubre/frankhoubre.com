import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { baseUrl, siteName } from "@/lib/site";

const title = "Reverse Prompting Image IA Gratuit";
const description =
  "Uploadez une image et reconstituez un prompt IA exploitable avec une analyse visuelle detaillee pour Midjourney, Flux, Sora et plus.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/outils/reverse-prompting-image-ia` },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: `${baseUrl}/outils/reverse-prompting-image-ia`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
  },
};

export default function ReversePromptingImageIaPage() {
  const pageUrl = `${baseUrl}/outils/reverse-prompting-image-ia`;
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
        name: "Reverse Prompting Image IA",
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
            name: "Reverse Prompting Image IA",
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
        title="Reverse prompting image IA"
        subtitle="Upload une image et reconstruis un prompt exploitable avec une experience visuelle premium orientee direction artistique."
        iframeTitle="Reverse prompting image IA"
        iframeSrc="/outils/reverse-prompting-image-ia/index.html"
      />
    </>
  );
}
