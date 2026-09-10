import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { Badge } from "@/components/Badge";

type Props = {
  posts: Post[];
  /** Préfixe des liens articles (FR : /blog, EN : /en/blog). */
  basePath?: string;
  locale?: "fr" | "en";
};

export function HomeLatestPostGrid({
  posts,
  basePath = "/blog",
  locale = "fr",
}: Props) {
  const dateFmt = new Intl.DateTimeFormat(locale === "en" ? "en-US" : "fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const previewLabel = locale === "en" ? "Preview" : "Aperçu";

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const thumb = getPostThumbnail(post);
        const href = `${basePath}/${post.slug}`;
        return (
          <li key={post.slug}>
            <article className="cyber-card group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1a120c]">
                <Link href={href} className="relative block h-full w-full">
                  {thumb ? (
                    thumb.startsWith("http") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={thumb}
                        alt={`${previewLabel} : ${post.frontmatter.title}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <Image
                        src={thumb}
                        alt={`${previewLabel} : ${post.frontmatter.title}`}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[var(--label)]">
                      {previewLabel}
                    </div>
                  )}
                </Link>
                <span className="absolute left-3 top-3 z-10">
                  <Badge
                    category={post.frontmatter.category}
                    href={
                      locale === "fr"
                        ? `/blog/category/${post.frontmatter.category}`
                        : undefined
                    }
                  />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <time
                  dateTime={post.frontmatter.date}
                  className="cyber-label"
                >
                  {dateFmt.format(new Date(`${post.frontmatter.date}T12:00:00`))}
                </time>
                <h3 className="mt-3 text-[13px] leading-snug text-[var(--cream)] normal-case tracking-normal">
                  <Link href={href} className="hover:underline">
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {post.frontmatter.excerpt}
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
