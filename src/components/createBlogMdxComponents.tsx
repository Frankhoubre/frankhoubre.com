import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { getTextFromChildren, slugify } from "@/lib/slugify";
import { isTitleLikeHeading } from "@/lib/article-headings";
import { MiddleBanner } from "@/components/MiddleBanner";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { AffiliateDisclosure } from "@/components/article/AffiliateDisclosure";
import { ArticleLink } from "@/components/article/ArticleLink";
import { Capture, type CaptureProps } from "@/components/article/Capture";
import { ComparisonTable } from "@/components/article/ComparisonTable";
import { Gallery } from "@/components/article/Gallery";
import type { ArticleLocale } from "@/components/article/labels";
import { Methodology } from "@/components/article/Methodology";
import { ProductCta } from "@/components/article/ProductCta";
import { SponsoredLink } from "@/components/article/SponsoredLink";
import { Strengths, Verdict, Weaknesses } from "@/components/article/Verdict";

function makeHeading(
  tag: "h1" | "h2" | "h3" | "h4",
  seen: Map<string, number>,
) {
  return function Heading({
    children,
    className,
    id,
    ...rest
  }: HTMLAttributes<HTMLHeadingElement>) {
    const Tag = tag;
    const text = getTextFromChildren(children as ReactNode);
    const base = slugify(text);
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    const autoId = n === 1 ? base : `${base}-${n}`;
    return (
      <Tag {...rest} id={id ?? autoId} className={className}>
        {children}
      </Tag>
    );
  };
}

/**
 * Composants MDX des articles. La mise en forme vit dans `.prose-cinema`
 * (globals.css) : ici, seuls les comportements (ids de titres, résolution
 * des images, liens externes, tableaux défilables) sont gérés.
 */
export function createBlogMdxComponents(
  slug: string,
  options: {
    skipFirstBodyImage: boolean;
    articleTitle?: string;
    locale?: ArticleLocale;
  },
): MDXComponents {
  const locale: ArticleLocale = options.locale ?? "fr";
  const headingSeen = new Map<string, number>();
  const bodyImageIndex = { n: 0 };
  const captureIndex = { n: 0 };
  const h2 = makeHeading("h2", headingSeen);

  // Filet de sécurité pour un <h1> écrit en HTML ou en JSX (les `# ` markdown
  // sont déjà traités par normalizeBodyHeadings) : le titre de la page est le
  // seul H1, un doublon du titre disparaît, tout autre H1 devient un H2.
  const BodyH1 = (props: HTMLAttributes<HTMLHeadingElement>) => {
    const text = getTextFromChildren(props.children as ReactNode);
    if (isTitleLikeHeading(text, options.articleTitle)) return null;
    return h2(props);
  };

  const BoundCapture = (props: CaptureProps & { compact?: boolean }) => {
    // eslint-disable-next-line react-hooks/immutability -- compteur de rendu serveur, ordre du document
    captureIndex.n += 1;
    return <Capture {...props} locale={locale} slug={slug} eager={captureIndex.n === 1} />;
  };
  type Kids = { children?: ReactNode };
  type VerdictAttrs = Omit<Parameters<typeof Verdict>[0], "locale">;
  const BoundVerdict = (p: VerdictAttrs) => <Verdict {...p} locale={locale} />;
  const BoundStrengths = (p: Kids) => <Strengths {...p} locale={locale} />;
  const BoundWeaknesses = (p: Kids) => <Weaknesses {...p} locale={locale} />;
  const BoundTable = (p: Omit<Parameters<typeof ComparisonTable>[0], "locale">) => (
    <ComparisonTable {...p} locale={locale} />
  );
  const BoundMethodology = (p: Kids & { date?: string }) => <Methodology {...p} locale={locale} />;
  const BoundDisclosure = () => <AffiliateDisclosure locale={locale} className="my-10" />;
  type CtaAttrs = Omit<Parameters<typeof ProductCta>[0], "product" | "locale" | "slug">;
  const CtaScreenWeaver = (p: CtaAttrs) => (
    <ProductCta {...p} product="screenweaver" locale={locale} slug={slug} />
  );
  const CtaImaginode = (p: CtaAttrs) => (
    <ProductCta {...p} product="imaginode" locale={locale} slug={slug} />
  );

  const fallbackAlt =
    options.articleTitle?.trim() &&
    `Illustration pour « ${options.articleTitle.trim()} »`;

  const Img = ({
    src,
    alt,
    ...rest
  }: ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src || typeof src !== "string") return null;
    let resolved = src.trim();
    if (!/^https?:\/\//i.test(resolved) && !resolved.startsWith("/")) {
      resolved = `/images/blog/${slug}/${resolved}`;
    }
    const skip =
      options.skipFirstBodyImage && bodyImageIndex.n === 0;
    // Compteur d’images par passe MDX (ordre stable du document, un rendu serveur).
    // eslint-disable-next-line react-hooks/immutability -- pas d’état React, séquence MDX
    bodyImageIndex.n += 1;
    if (skip) return null;
    const remote = /^https?:\/\//i.test(resolved);
    const resolvedAlt =
      (typeof alt === "string" && alt.trim()) ||
      fallbackAlt ||
      "Illustration";

    if (remote) {
      return (
        <span className="figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            {...rest}
            src={resolved}
            alt={resolvedAlt}
            loading="lazy"
            decoding="async"
          />
        </span>
      );
    }
    return (
      <span className="figure">
        <Image
          src={resolved}
          alt={resolvedAlt}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </span>
    );
  };

  return {
    h1: BodyH1,
    h2,
    h3: makeHeading("h3", headingSeen),
    h4: makeHeading("h4", headingSeen),
    a: ({ href, children, className }) => {
      const nofollowPrefix = "nf:";
      const rawHref = href ?? "#";
      const isNofollowExternal =
        rawHref.startsWith("nf:http://") || rawHref.startsWith("nf:https://");
      if (isNofollowExternal) {
        return (
          <a
            href={rawHref.slice(nofollowPrefix.length)}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={className}
          >
            {children}
          </a>
        );
      }
      if (/^(mailto:|tel:|#)/i.test(rawHref)) {
        return (
          <Link href={rawHref} className={className}>
            {children}
          </Link>
        );
      }
      return (
        <ArticleLink href={rawHref} className={className}>
          {children}
        </ArticleLink>
      );
    },
    table: (props) => (
      <div className="table-wrap">
        <table {...props} />
      </div>
    ),
    img: Img,
    YouTubeEmbed,
    MiddleBanner,
    // Composants premium : noms FR et alias EN, libellés selon la langue de l'article.
    Verdict: BoundVerdict,
    Forts: BoundStrengths,
    Strengths: BoundStrengths,
    Faibles: BoundWeaknesses,
    Weaknesses: BoundWeaknesses,
    TableauComparatif: BoundTable,
    ComparisonTable: BoundTable,
    Capture: BoundCapture,
    Screenshot: BoundCapture,
    Galerie: Gallery,
    Gallery,
    Methodologie: BoundMethodology,
    Methodology: BoundMethodology,
    MentionAffiliation: BoundDisclosure,
    AffiliateDisclosure: BoundDisclosure,
    LienSponsorise: SponsoredLink,
    SponsoredLink,
    CtaScreenWeaver,
    CtaImaginode,
  };
}
