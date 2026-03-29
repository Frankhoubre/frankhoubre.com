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
      <Tag
        {...rest}
        id={id ?? autoId}
        className={`scroll-mt-28 font-semibold tracking-tight text-neutral-950 ${
          tag === "h1"
            ? "mb-6 text-3xl"
            : tag === "h2"
              ? "mb-4 mt-10 text-2xl"
              : tag === "h3"
                ? "mb-3 mt-8 text-xl"
                : "mb-2 mt-6 text-lg"
        } ${className ?? ""}`}
      >
        {children}
      </Tag>
    );
  };
}

export function createBlogMdxComponents(
  slug: string,
  options: { skipFirstBodyImage: boolean },
): MDXComponents {
  const headingSeen = new Map<string, number>();
  const bodyImageIndex = { n: 0 };

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
    if (remote) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          {...rest}
          src={resolved}
          alt={alt ?? ""}
          className="my-6 w-full rounded-lg border border-neutral-200"
        />
      );
    }
    return (
      <span className="my-6 block overflow-hidden rounded-lg border border-neutral-200">
        <Image
          src={resolved}
          alt={alt ?? ""}
          width={1200}
          height={630}
          className="h-auto w-full"
        />
      </span>
    );
  };

  const baseLink =
    "font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600";

  return {
    h1: makeHeading("h1", headingSeen),
    h2: makeHeading("h2", headingSeen),
    h3: makeHeading("h3", headingSeen),
    h4: makeHeading("h4", headingSeen),
    p: (props) => (
      <p
        className="mb-4 text-[1.05rem] leading-relaxed text-neutral-900"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mb-4 list-disc space-y-1 pl-6 text-neutral-900"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="mb-4 list-decimal space-y-1 pl-6 text-neutral-900"
        {...props}
      />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    a: ({ href, children, className, ...rest }) => {
      const external = href?.startsWith("http");
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseLink} ${className ?? ""}`}
            {...rest}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href ?? "#"} className={`${baseLink} ${className ?? ""}`} {...rest}>
          {children}
        </Link>
      );
    },
    blockquote: (props) => (
      <blockquote
        className="my-6 border-l-4 border-neutral-300 pl-4 italic text-neutral-800"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.9em] text-neutral-900"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-6 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-100 p-4 text-sm text-neutral-950"
        {...props}
      />
    ),
    table: (props) => (
      <div className="my-6 overflow-x-auto rounded-lg border border-neutral-200">
        <table className="w-full border-collapse text-sm" {...props} />
      </div>
    ),
    thead: (props) => <thead className="bg-neutral-50" {...props} />,
    tbody: (props) => <tbody {...props} />,
    tr: (props) => (
      <tr
        className="border-b border-neutral-200 last:border-0"
        {...props}
      />
    ),
    th: (props) => (
      <th
        className="px-3 py-2 text-left font-semibold text-neutral-950"
        {...props}
      />
    ),
    td: (props) => (
      <td className="px-3 py-2 text-neutral-900" {...props} />
    ),
    img: Img,
    YouTubeEmbed,
    MiddleBanner,
  };
}
