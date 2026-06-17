import type { Metadata, Viewport } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { FormationPromoModal } from "@/components/FormationPromoModal";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/metadata";
import { baseUrl, person, siteName } from "@/lib/site";
import "./globals.css";

const headingFont = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: person.description,
  applicationName: siteName,
  authors: [{ name: person.name, url: baseUrl }],
  creator: person.name,
  publisher: siteName,
  formatDetection: {
    telephone: false,
  },
  alternates: {
    types: {
      "application/rss+xml": `${baseUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    images: [
      {
        url: absoluteUrl(DEFAULT_OG_IMAGE.path),
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: person.description,
    images: [absoluteUrl(DEFAULT_OG_IMAGE.path)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col bg-background text-foreground">
        <HtmlLangSync />
        <a href="#main-content" className="ds-skip-link">
          Aller au contenu principal
        </a>
        <SiteHeader />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <SiteFooter />
        <FormationPromoModal />
      </body>
    </html>
  );
}
