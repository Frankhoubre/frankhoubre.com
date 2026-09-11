import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { PostCard } from "@/components/ui/PostCard";

type Props = {
  posts: Post[];
  /** Préfixe des liens articles (FR : /blog, EN : /en/blog). */
  basePath?: string;
  locale?: "fr" | "en";
};

/**
 * Derniers articles en double page : le plus récent en grand photogramme
 * sur sept colonnes, les suivants en liste serrée sur cinq.
 */
export function HomeLatestPostGrid({
  posts,
  basePath = "/blog",
  locale = "fr",
}: Props) {
  if (posts.length === 0) return null;
  const [first, ...rest] = posts;
  const categoryHref = (category: string) =>
    locale === "fr" ? `/blog/category/${category}` : undefined;

  return (
    <div className="grid-12 gap-y-12">
      <div className="col-span-12 lg:col-span-7">
        <PostCard
          post={{ slug: first.slug, frontmatter: first.frontmatter, thumbnail: getPostThumbnail(first) }}
          href={`${basePath}/${first.slug}`}
          locale={locale}
          categoryHref={categoryHref(first.frontmatter.category)}
          variant="feature"
          index="01"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </div>
      <div className="col-span-12 lg:col-span-5">
        {rest.map((post) => (
          <PostCard
            key={post.slug}
            post={{ slug: post.slug, frontmatter: post.frontmatter, thumbnail: getPostThumbnail(post) }}
            href={`${basePath}/${post.slug}`}
            locale={locale}
            categoryHref={categoryHref(post.frontmatter.category)}
            variant="row"
          />
        ))}
      </div>
    </div>
  );
}
