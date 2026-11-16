import type { Post } from "@/lib/blog";
import { readingTimeMinutes } from "@/lib/blog";
import { modifiedIso, publishedIso } from "@/lib/article-dates";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { readPublicImageDimensions } from "@/lib/image-dimensions";
import { ORGANIZATION_ID, PERSON_ID } from "@/lib/metadata";
import { baseUrl, getCategoryLabel, person, siteName } from "@/lib/site";

type Locale = "fr" | "en";

const L10N = {
  fr: {
    inLanguage: "fr-FR",
    blogPath: "/blog",
    authorPath: "/a-propos",
    jobTitle: person.jobTitle,
  },
  en: {
    inLanguage: "en-US",
    blogPath: "/en/blog",
    authorPath: "/en/about",
    jobTitle: "AI trainer, AI filmmaker and image & video creator",
  },
} as const;

/** Titre du balisage : Google coupe au-delà de 110 caractères. */
function headline(title: string): string {
  const t = title.trim();
  return t.length <= 110 ? t : `${t.slice(0, 109).trimEnd()}…`;
}

/**
 * Image de l'article pour le balisage : un ImageObject avec les dimensions
 * réelles quand le fichier est dans le manifeste (Google News et Discover
 * demandent une grande image, au moins 1200 px de large), sinon l'URL seule.
 */
export function articleImageNode(thumb: string | undefined): object | string | null {
  if (!thumb) return null;
  if (thumb.startsWith("http")) return thumb;
  const url = `${baseUrl}${thumb}`;
  const dims = readPublicImageDimensions(thumb);
  return dims
    ? { "@type": "ImageObject", url, width: dims.width, height: dims.height }
    : url;
}

/** Dimensions réelles de l'image de partage (og:image), 1200×630 à défaut. */
export function ogImageSize(thumb: string | undefined): { width: number; height: number } {
  const dims = thumb && !thumb.startsWith("http") ? readPublicImageDimensions(thumb) : null;
  return dims ?? { width: 1200, height: 630 };
}

/**
 * Nœud Article commun aux articles FR et EN : un seul constructeur, donc un
 * graphe identique dans les deux langues. NewsArticle seulement pour la
 * catégorie « actualite », BlogPosting pour tout le reste (guides, tutoriels,
 * comparatifs). Les dates sortent du frontmatter, jamais de la date du jour.
 */
export function buildArticleNode(post: Post, locale: Locale): object {
  const l = L10N[locale];
  const url = `${baseUrl}${l.blogPath}/${post.slug}`;
  const fm = post.frontmatter;
  const image = articleImageNode(getPostThumbnail(post));
  const authorUrl = `${baseUrl}${l.authorPath}`;

  return {
    "@type": fm.category === "actualite" ? "NewsArticle" : "BlogPosting",
    "@id": `${url}#article`,
    headline: headline(fm.title),
    description: fm.excerpt,
    inLanguage: l.inLanguage,
    datePublished: publishedIso(fm),
    dateModified: modifiedIso(fm),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    wordCount: post.content.trim().split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${readingTimeMinutes(post.content)}M`,
    articleSection: getCategoryLabel(fm.category),
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "Blog",
      name: `${siteName} Blog`,
      url: `${baseUrl}${l.blogPath}`,
    },
    ...(image ? { image: [image] } : {}),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: person.name,
      // Page auteur réelle (bio, distinctions, contact), pas l'accueil.
      url: authorUrl,
      jobTitle: l.jobTitle,
      image: `${baseUrl}${person.image}`,
      sameAs: [...person.sameAs],
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: siteName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/frank-houbre-about.png`,
        width: 1024,
        height: 1024,
      },
    },
  };
}
