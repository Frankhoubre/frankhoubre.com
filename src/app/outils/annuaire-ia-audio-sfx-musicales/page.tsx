import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ToolIframePage } from "@/components/ToolIframePage";
import { baseUrl, siteName } from "@/lib/site";

const title = "Annuaire des IA audio, SFX et musicales";
const description =
  "Explorez et comparez les outils IA audio pour musique, voix, sound design et SFX avec filtres, score et tri par usage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${baseUrl}/outils/annuaire-ia-audio-sfx-musicales` },
  openGraph: {
    title: `${title} | ${siteName}`,
    description,
    url: `${baseUrl}/outils/annuaire-ia-audio-sfx-musicales`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
  },
};

export default function AnnuaireIaAudioSfxMusicalesPage() {
  const pageUrl = `${baseUrl}/outils/annuaire-ia-audio-sfx-musicales`;
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
        name: "Annuaire des IA audio, SFX et musicales",
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
            name: "Annuaire des IA audio, SFX et musicales",
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
        title="Annuaire IA audio, SFX et musicales"
        subtitle="Explore les meilleurs outils IA pour la voix, la musique, les bruitages et le sound design avec un rendu editorial moderne."
        iframeTitle="Annuaire IA audio SFX musicales"
        iframeSrc="/outils/annuaire-ia-audio-sfx-musicales/index.html"
      />
    </>
  );
}
