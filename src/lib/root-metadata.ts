import type { Metadata, Viewport } from "next";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/metadata";
import { baseUrl, person, siteName } from "@/lib/site";

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0c",
};

/**
 * Métadonnées communes aux deux root layouts (FR et EN). Les pages
 * surchargent title/description/canonical via buildPageMetadata.
 */
export const rootMetadata: Metadata = {
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
  // Autorise les grands aperçus d'image et les extraits longs : requis pour
  // Google Discover et les résultats enrichis avec vignette.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
