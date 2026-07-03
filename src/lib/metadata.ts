import type { Metadata } from "next";
import { baseUrl, siteName } from "@/lib/site";

/** Default social share image (real 1200×630 JPEG). */
export const DEFAULT_OG_IMAGE = {
  path: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Frank Houbre — formateur IA et réalisateur IA",
} as const;

export const ABOUT_OG_IMAGE = {
  path: "/images/frank-houbre-about.png",
  width: 1200,
  height: 630,
  alt: "Portrait de Frank Houbre",
} as const;

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  return `${baseUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

export function pageUrl(path: string): string {
  const p = normalizePath(path);
  return p === "/" ? `${baseUrl}/` : `${baseUrl}${p}`;
}

type OgImageInput = {
  path: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type BuildPageMetadataOptions = {
  /** Short title; combined with site name unless `titleAbsolute` is set. */
  title: string;
  description: string;
  path: string;
  /** Full document title, bypassing the layout `%s | siteName` template. */
  titleAbsolute?: string;
  keywords?: string[];
  noIndex?: boolean;
  /** Versions de langue (hreflang). Clé = hreflang, valeur = chemin local. */
  alternateLanguages?: Record<string, string>;
  openGraph?: {
    type?: "website" | "article" | "profile";
    title?: string;
    description?: string;
    images?: OgImageInput[];
    publishedTime?: string;
    modifiedTime?: string;
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    images?: string[];
  };
  authors?: { name: string; url?: string }[];
};

export function buildGraphJsonLd(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

function resolveOgImages(images?: OgImageInput[]) {
  const source = images?.length
    ? images
    : [
        {
          path: DEFAULT_OG_IMAGE.path,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ];

  return source.map((img) => ({
    url: absoluteUrl(img.path),
    width: img.width ?? DEFAULT_OG_IMAGE.width,
    height: img.height ?? DEFAULT_OG_IMAGE.height,
    alt: img.alt ?? DEFAULT_OG_IMAGE.alt,
  }));
}

export function buildPageMetadata(opts: BuildPageMetadataOptions): Metadata {
  const canonical = pageUrl(opts.path);
  const ogTitle = opts.openGraph?.title ?? `${opts.title} | ${siteName}`;
  const ogDescription = opts.openGraph?.description ?? opts.description;
  const ogImages = resolveOgImages(opts.openGraph?.images);
  const twitterCard = opts.twitter?.card ?? "summary_large_image";
  const twitterTitle = opts.twitter?.title ?? ogTitle;
  const twitterDescription = opts.twitter?.description ?? opts.description;
  const twitterImages = opts.twitter?.images ?? ogImages.map((img) => img.url);

  const languages = opts.alternateLanguages
    ? Object.fromEntries(
        Object.entries(opts.alternateLanguages).map(([hl, p]) => [
          hl,
          pageUrl(p),
        ]),
      )
    : undefined;

  return {
    title: opts.titleAbsolute ? { absolute: opts.titleAbsolute } : opts.title,
    description: opts.description,
    alternates: { canonical, ...(languages ? { languages } : {}) },
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    ...(opts.noIndex ? { robots: { index: false, follow: true } } : {}),
    ...(opts.authors?.length ? { authors: opts.authors } : {}),
    openGraph: {
      type: opts.openGraph?.type ?? "website",
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName,
      // Locale dérivée du chemin : les pages /en annoncent en_US (sinon les
      // partages sociaux et certains crawlers voient un signal fr_FR erroné).
      locale:
        opts.path === "/en" || opts.path.startsWith("/en/")
          ? "en_US"
          : "fr_FR",
      images: ogImages,
      ...(opts.openGraph?.publishedTime
        ? { publishedTime: opts.openGraph.publishedTime }
        : {}),
      ...(opts.openGraph?.modifiedTime
        ? { modifiedTime: opts.openGraph.modifiedTime }
        : {}),
    },
    twitter: {
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImages,
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function buildWebApplicationJsonLd(opts: {
  name: string;
  path: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: { question: string; answer: string }[];
}) {
  const url = pageUrl(opts.path);
  const graph: object[] = [
    {
      "@type": "WebPage",
      name: opts.name,
      url,
      description: opts.description,
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: baseUrl,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: opts.name,
      url,
      description: opts.description,
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
    },
  ];

  if (opts.breadcrumbs?.length) {
    graph.push(buildBreadcrumbList(opts.breadcrumbs));
  }

  if (opts.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: opts.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
