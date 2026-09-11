import Image from "next/image";
import Link from "next/link";
import type { PostFrontmatter } from "@/lib/blog";
import { Badge } from "@/components/Badge";
import { Arrow } from "@/components/ui/Cta";

export type PostCardData = {
  slug: string;
  frontmatter: PostFrontmatter;
  thumbnail?: string;
};

type Props = {
  post: PostCardData;
  href: string;
  locale?: "fr" | "en";
  /** Lien de catégorie (FR uniquement). */
  categoryHref?: string;
  /** « feature » : grande image 16/9 et titre plus grand (première carte). */
  variant?: "grid" | "feature" | "row";
  index?: string;
  sizes?: string;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
};

function formatDate(date: string, locale: "fr" | "en") {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

function Thumb({
  src,
  alt,
  sizes,
  priority,
  fallback,
}: {
  src?: string;
  alt: string;
  sizes: string;
  priority: boolean;
  fallback: string;
}) {
  if (!src) {
    return (
      <div className="meta absolute inset-0 grid place-items-center text-fog/60">{fallback}</div>
    );
  }
  if (src.startsWith("http")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />;
}

/**
 * Fiche d'article : photogramme rectangulaire, ligne de métadonnées
 * (date, catégorie, numéro), titre, extrait, flèche. Une seule fiche pour
 * toutes les listes du site, en trois variantes.
 */
export function PostCard({
  post,
  href,
  locale = "fr",
  categoryHref,
  variant = "grid",
  index,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  headingLevel: Heading = "h3",
}: Props) {
  const previewLabel = locale === "en" ? "Preview" : "Aperçu";
  const date = formatDate(post.frontmatter.date, locale);

  if (variant === "row") {
    return (
      <article className="group grid gap-5 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
        <div className="frame frame-hover relative aspect-[16/10] sm:aspect-[4/3]">
          <Thumb src={post.thumbnail} alt="" sizes="240px" priority={false} fallback={previewLabel} />
          <Link href={href} className="absolute inset-0 z-[2]" tabIndex={-1} aria-hidden />
        </div>
        <div className="min-w-0">
          <div className="meta flex flex-wrap items-center gap-x-3 gap-y-1">
            <time dateTime={post.frontmatter.date}>{date}</time>
            <span className="text-fog/50" aria-hidden>/</span>
            <Badge category={post.frontmatter.category} href={categoryHref} plain />
          </div>
          <Heading className="h-item mt-3">
            <Link href={href} className="line-link">
              {post.frontmatter.title}
            </Link>
          </Heading>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fog">{post.frontmatter.excerpt}</p>
        </div>
      </article>
    );
  }

  const feature = variant === "feature";

  return (
    <article className="group flex h-full flex-col">
      <div className={`frame frame-grain frame-hover relative ${feature ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Thumb src={post.thumbnail} alt="" sizes={sizes} priority={priority} fallback={previewLabel} />
        <Link href={href} className="absolute inset-0 z-[2]" tabIndex={-1} aria-hidden />
        <span className="absolute left-3 top-3 z-[3]">
          <Badge category={post.frontmatter.category} href={categoryHref} />
        </span>
        {index ? (
          <span className="meta meta-strong absolute bottom-3 right-3 z-[3] text-[10px]">{index}</span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <div className="meta flex items-center gap-3">
          <time dateTime={post.frontmatter.date}>{date}</time>
        </div>
        <Heading className={`mt-3 ${feature ? "h-block" : "h-item"}`}>
          <Link href={href} className="line-link">
            {post.frontmatter.title}
          </Link>
        </Heading>
        <p className={`mt-3 flex-1 leading-relaxed text-fog ${feature ? "line-clamp-3 text-base" : "line-clamp-2 text-sm"}`}>
          {post.frontmatter.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" aria-hidden>
          <Arrow />
        </span>
      </div>
    </article>
  );
}
