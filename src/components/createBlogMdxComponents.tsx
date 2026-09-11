import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import type { HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { getTextFromChildren, slugify } from "@/lib/slugify";
import { MiddleBanner } from "@/components/MiddleBanner";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";

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
  options: { skipFirstBodyImage: boolean; articleTitle?: string },
): MDXComponents {
  const headingSeen = new Map<string, number>();
  const bodyImageIndex = { n: 0 };

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
    h1: makeHeading("h1", headingSeen),
    h2: makeHeading("h2", headingSeen),
    h3: makeHeading("h3", headingSeen),
    h4: makeHeading("h4", headingSeen),
    a: ({ href, children, className, ...rest }) => {
      const nofollowPrefix = "nf:";
      const rawHref = href ?? "#";
      const isNofollowExternal =
        rawHref.startsWith("nf:http://") || rawHref.startsWith("nf:https://");
      const resolvedHref = isNofollowExternal
        ? rawHref.slice(nofollowPrefix.length)
        : rawHref;
      const external = resolvedHref.startsWith("http");
      if (external) {
        return (
          <a
            href={resolvedHref}
            target="_blank"
            rel={
              isNofollowExternal
                ? "nofollow noopener noreferrer"
                : "noopener noreferrer"
            }
            className={className}
            {...rest}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={resolvedHref} className={className} {...rest}>
          {children}
        </Link>
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
  };
}
