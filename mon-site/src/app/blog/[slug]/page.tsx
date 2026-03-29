import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { ArticleShareButtons } from "@/components/ArticleShareButtons";
import { ArticleToc } from "@/components/ArticleToc";
import { Badge } from "@/components/Badge";
import { createBlogMdxComponents } from "@/components/createBlogMdxComponents";
import { FaqSection } from "@/components/FaqSection";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { RelatedPosts } from "@/components/RelatedPosts";
import { buildArticleToc } from "@/lib/blog-toc";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import {
  extractYouTubeVideoIds,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  isPostPublished,
  readingTimeMinutes,
  type Post,
} from "@/lib/blog";
import type { FaqPair } from "@/lib/mdx-pipeline";
import { prepareArticleMdxParts } from "@/lib/mdx-pipeline";
import { baseUrl, person, siteName } from "@/lib/site";

export const revalidate = 3600;

function trunc(s: string, max: number): string {
  const t = s.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

function stripMdSimple(s: string): string {
  return s
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isPostPublished(post)) {
    return { title: "Blog" };
  }
  const title = trunc(post.frontmatter.title, 70);
  const description = trunc(post.frontmatter.excerpt, 160);
  const thumb = getPostThumbnail(post);
  const ogImage = thumb
    ? thumb.startsWith("http")
      ? thumb
      : `${baseUrl}${thumb}`
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: `${baseUrl}/blog/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.dateModified ?? post.frontmatter.date,
      url: `${baseUrl}/blog/${slug}`,
      siteName,
      ...(ogImage
        ? { images: [{ url: ogImage, width: 1200, height: 630 }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

function buildJsonLd(opts: {
  post: Post;
  slug: string;
  videoIds: string[];
  faqPairs: FaqPair[] | null;
}) {
  const { post, slug, videoIds, faqPairs } = opts;
  const url = `${baseUrl}/blog/${slug}`;
  const thumb = getPostThumbnail(post);
  const img = thumb
    ? thumb.startsWith("http")
      ? thumb
      : `${baseUrl}${thumb}`
    : undefined;
  const authorImage =
    typeof person.image === "string" && person.image.startsWith("http")
      ? person.image
      : `${baseUrl}${person.image}`;

  const article = {
    "@type": "NewsArticle",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.dateModified ?? post.frontmatter.date,
    url,
    mainEntityOfPage: url,
    ...(img ? { image: [img] } : {}),
    author: {
      "@type": "Person",
      name: person.name,
      url: person.url,
      jobTitle: person.jobTitle,
      image: authorImage,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: baseUrl,
    },
  };

  const graph: object[] = [article];

  if (faqPairs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqPairs.map((p) => ({
        "@type": "Question",
        name: p.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: stripMdSimple(p.answer),
        },
      })),
    });
  }

  for (const id of videoIds) {
    graph.push({
      "@type": "VideoObject",
      name: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      uploadDate: post.frontmatter.date,
      contentUrl: `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isPostPublished(post)) notFound();

  const raw = post.content;
  const toc = buildArticleToc(raw);
  const videoIds = extractYouTubeVideoIds(raw);
  const { beforeMdx, afterMdx, faqPairs } = prepareArticleMdxParts(raw);
  const thumb = getPostThumbnail(post);
  const skipFirstBodyImage = Boolean(post.frontmatter.thumbnail?.trim());
  const components = createBlogMdxComponents(slug, { skipFirstBodyImage });
  const faqComponents = createBlogMdxComponents(slug, {
    skipFirstBodyImage: false,
  });
  const minutes = readingTimeMinutes(raw);
  const related = getRelatedPosts(slug, 3);
  const shareUrl = `${baseUrl}/blog/${slug}`;

  const mdxOpts = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  const jsonLd = buildJsonLd({ post, slug, videoIds, faqPairs });

  const authorImg =
    typeof person.image === "string" && person.image.startsWith("http")
      ? person.image
      : `${baseUrl}${person.image}`;

  const dateFmt = new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,42rem)_minmax(0,1fr)] lg:gap-10">
          <div className="hidden lg:block" aria-hidden />
          <article className="min-w-0 max-w-2xl justify-self-center lg:col-start-2">
            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-800 hover:text-neutral-950"
            >
              ← Blog
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-800">
              <Badge
                category={post.frontmatter.category}
                href={`/blog/category/${post.frontmatter.category}`}
              />
              <time dateTime={post.frontmatter.date}>
                {dateFmt.format(new Date(`${post.frontmatter.date}T12:00:00`))}
              </time>
              <span aria-hidden>·</span>
              <span>{minutes} min de lecture</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {post.frontmatter.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">
              {post.frontmatter.excerpt}
            </p>
            <div className="mt-6">
              <ArticleShareButtons url={shareUrl} title={post.frontmatter.title} />
            </div>

            {thumb ? (
              <div className="relative mt-10 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                {thumb.startsWith("http") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumb}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={thumb}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                )}
              </div>
            ) : null}

            <div className="prose-cinema mt-10 max-w-none">
              {beforeMdx ? (
                <MDXRemote
                  source={beforeMdx}
                  components={components}
                  options={mdxOpts}
                />
              ) : null}
              {faqPairs ? (
                <FaqSection pairs={faqPairs} components={faqComponents} />
              ) : null}
              {afterMdx ? (
                <MDXRemote
                  source={afterMdx}
                  components={components}
                  options={mdxOpts}
                />
              ) : null}
            </div>

            <footer className="mt-14 flex gap-4 border-t border-neutral-200 pt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={authorImg}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-full border border-neutral-200 object-cover"
              />
              <div>
                <p className="font-semibold text-neutral-950">
                  {person.authorDisplayName}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-800">
                  {person.description}
                </p>
              </div>
            </footer>

            <RelatedPosts posts={related} />
          </article>

          <div className="mt-12 hidden lg:col-start-3 lg:mt-0 lg:block lg:justify-self-start">
            <div className="sticky top-24">
              <ArticleToc items={toc} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
