import type { Post } from "@/lib/blog";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { PostCard } from "@/components/ui/PostCard";

type Props = {
  posts: Post[];
  locale?: "fr" | "en";
};

const COPY = {
  fr: { kicker: "Continuer la lecture", title: "Articles liés", base: "/blog" },
  en: { kicker: "Keep reading", title: "Related articles", base: "/en/blog" },
} as const;

export function RelatedPosts({ posts, locale = "fr" }: Props) {
  if (!posts.length) return null;
  const copy = COPY[locale];

  return (
    <section className="mt-20 border-t border-line pt-10" aria-labelledby="related-title">
      <div className="flex items-baseline justify-between gap-6">
        <div>
          <p className="meta">{copy.kicker}</p>
          <h2 id="related-title" className="h-block mt-3 text-cream">
            {copy.title}
          </h2>
        </div>
        <p className="meta meta-dim">{posts.length} / 03</p>
      </div>
      <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-3">
        {posts.map((post, i) => (
          <li key={post.slug}>
            <PostCard
              post={{ slug: post.slug, frontmatter: post.frontmatter, thumbnail: getPostThumbnail(post) }}
              href={`${copy.base}/${post.slug}`}
              locale={locale}
              categoryHref={locale === "fr" ? `/blog/category/${post.frontmatter.category}` : undefined}
              index={`0${i + 1}`}
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
