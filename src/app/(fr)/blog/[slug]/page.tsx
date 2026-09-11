import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import { ArticleHeader } from "@/components/ArticleHeader";
import { ArticleShareButtons } from "@/components/ArticleShareButtons";
import { AuthorBox } from "@/components/AuthorBox";
import { ArticleSidebarSearch } from "@/components/ArticleSidebarSearch";
import { ArticleMobileToc } from "@/components/ArticleMobileToc";
import { ArticleToc } from "@/components/ArticleToc";
import { createBlogMdxComponents } from "@/components/createBlogMdxComponents";
import { JsonLd } from "@/components/JsonLd";
import { FaqSection } from "@/components/FaqSection";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { RelatedPosts } from "@/components/RelatedPosts";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { buildArticleToc } from "@/lib/blog-toc";
import { getPostThumbnail } from "@/lib/blog-thumbnail";
import { getRecommendedYouTubeVideoId } from "@/lib/blog-video-map";
import { getEnPostBySlug } from "@/lib/blog-en";
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
import { ORGANIZATION_ID, PERSON_ID, buildPageMetadata } from "@/lib/metadata";
import { baseUrl, getCategoryLabel, person, siteName } from "@/lib/site";

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
  // Titre SERP : on vise ≤ 60 caractères. Le layout ajoute « | Frank Houbre »
  // (~15 car.) via son template ; quand le titre est déjà long, ce suffixe le
  // ferait tronquer. On retire alors la marque (titleAbsolute) et on plafonne.
  const title = trunc(post.frontmatter.title, 60);
  const fitsWithBrand = `${title} | ${siteName}`.length <= 60;
  const titleAbsolute = fitsWithBrand ? undefined : title;
  const description = trunc(post.frontmatter.excerpt, 160);
  const thumb = getPostThumbnail(post);
  const ogImage = thumb
    ? thumb.startsWith("http")
      ? thumb
      : `${baseUrl}${thumb}`
    : undefined;

  // hreflang vers la version EN (quand la traduction existe).
  const hasEn = getEnPostBySlug(slug) !== null;

  return buildPageMetadata({
    title,
    titleAbsolute,
    description,
    path: `/blog/${slug}`,
    ...(hasEn
      ? {
          alternateLanguages: {
            fr: `/blog/${slug}`,
            en: `/en/blog/${slug}`,
            "x-default": `/blog/${slug}`,
          },
        }
      : {}),
    openGraph: {
      type: "article",
      title: `${title} | ${siteName}`,
      description,
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.dateModified ?? post.frontmatter.date,
      ...(ogImage
        ? { images: [{ path: ogImage, width: 1200, height: 630 }] }
        : {}),
    },
    twitter: {
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    authors: [{ name: person.name, url: person.url }],
  });
}

function buildJsonLd(opts: {
  post: Post;
  slug: string;
  videoIds: string[];
  faqPairs: FaqPair[] | null;
}) {
  const { post, slug, videoIds, faqPairs } = opts;
  const url = `${baseUrl}/blog/${slug}`;
  const categoryLabel = getCategoryLabel(post.frontmatter.category);
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

  const wordCount = post.content.trim().split(/\s+/).filter(Boolean).length;

  const article = {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    inLanguage: "fr-FR",
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.dateModified ?? post.frontmatter.date,
    url,
    mainEntityOfPage: url,
    wordCount,
    timeRequired: `PT${readingTimeMinutes(post.content)}M`,
    articleSection: categoryLabel,
    isPartOf: {
      "@type": "Blog",
      name: `${siteName} Blog`,
      url: `${baseUrl}/blog`,
    },
    about: [
      "IA générative",
      "vidéo IA",
      "image IA",
      "workflow cinématographique",
    ],
    keywords: [
      post.frontmatter.category,
      categoryLabel,
      "IA",
      "intelligence artificielle",
      "prompt",
      "vidéo IA",
      "image IA",
      "cinématique",
    ],
    ...(img ? { image: [img] } : {}),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: person.name,
      url: person.url,
      jobTitle: person.jobTitle,
      description: person.description,
      image: authorImage,
      ...(person.sameAs.length
        ? { sameAs: [...person.sameAs] }
        : {}),
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

  const graph: object[] = [article];
  graph.push({
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.frontmatter.title,
        item: url,
      },
    ],
  });
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
      inLanguage: "fr-FR",
      thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      uploadDate: post.frontmatter.date,
      contentUrl: `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
      publisher: {
        "@type": "Organization",
        name: "BusinessDynamite",
        url: "https://www.youtube.com/@BusinessDynamite",
      },
      potentialAction: {
        "@type": "WatchAction",
        target: `https://www.youtube.com/watch?v=${id}`,
      },
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
  const allPosts = getAllPosts();
  // JSON-LD VideoObject : uniquement les vidéos réellement intégrées dans l'article.
  const videoIds = extractYouTubeVideoIds(raw);
  // Si l'article FR ne contient pas déjà de vidéo, on en suggère une de la
  // chaîne @BusinessDynamite (pertinente par sujet via la map, sinon défaut).
  const recommendedVideoId =
    videoIds.length === 0 ? getRecommendedYouTubeVideoId(post) : null;
  const { beforeMdx, afterMdx, faqPairs } = prepareArticleMdxParts(raw);
  const thumb = getPostThumbnail(post);
  const skipFirstBodyImage = Boolean(post.frontmatter.thumbnail?.trim());
  const articleTitle = post.frontmatter.title;
  const components = createBlogMdxComponents(slug, {
    skipFirstBodyImage,
    articleTitle,
  });
  const faqComponents = createBlogMdxComponents(slug, {
    skipFirstBodyImage: false,
    articleTitle,
  });
  const minutes = readingTimeMinutes(raw);
  const related = getRelatedPosts(slug, 3);
  const shareUrl = `${baseUrl}/blog/${slug}`;
  const sidebarPosts = allPosts.map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
  }));

  const mdxOpts = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  const jsonLd = buildJsonLd({
    post,
    slug,
    videoIds: recommendedVideoId ? [recommendedVideoId] : videoIds,
    faqPairs,
  });

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
      <JsonLd data={jsonLd} />
      <ReadingProgressBar />
      <div className="container-x page-top pb-20 sm:pb-28">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,45rem)_minmax(0,1fr)] lg:gap-12">
          <div className="hidden lg:block" aria-hidden>
            <p className="meta vertical-meta sticky top-32 text-[10px] text-fog/70">
              Journal · {getCategoryLabel(post.frontmatter.category)} · {post.frontmatter.date}
            </p>
          </div>
          <article className="min-w-0 max-w-[45rem] lg:col-start-2">
            <ArticleHeader
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              date={post.frontmatter.date}
              dateLabel={dateFmt.format(new Date(`${post.frontmatter.date}T12:00:00`))}
              minutesLabel={`${minutes} min de lecture`}
              category={post.frontmatter.category}
              categoryHref={`/blog/category/${post.frontmatter.category}`}
              thumb={thumb}
              thumbAlt={`Illustration pour « ${post.frontmatter.title} »`}
              breadcrumb={[
                { label: "Accueil", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.frontmatter.title },
              ]}
              actions={<ArticleShareButtons url={shareUrl} title={post.frontmatter.title} />}
              figureCaption={`Fig. 01 · ${getCategoryLabel(post.frontmatter.category)}`}
            />

            <ArticleMobileToc items={toc} />

            <div className="prose-cinema mt-12">
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

            {recommendedVideoId ? (
              <section className="mt-16 border-t border-line pt-8" aria-labelledby="video-title">
                <p className="meta">Chaîne YouTube</p>
                <h2 id="video-title" className="h-block mt-3 text-cream">
                  À voir sur ma chaîne
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Je décortique ce genre de workflow en vidéo sur ma chaîne
                  YouTube Business Dynamite.
                </p>
                <YouTubeEmbed
                  videoId={recommendedVideoId}
                  title={`${articleTitle} : Business Dynamite`}
                />
              </section>
            ) : null}

            <AuthorBox
              imageSrc={authorImg}
              jobTitle={person.jobTitle}
              bio={person.bio}
              links={[
                { label: "À propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
                { label: "Tous les articles", href: "/blog" },
              ]}
            />

            <RelatedPosts posts={related} />
          </article>

          <div className="mt-12 hidden lg:col-start-3 lg:mt-0 lg:block lg:justify-self-start">
            <div className="sticky top-28">
              <ArticleToc items={toc} />
              <ArticleSidebarSearch posts={sidebarPosts} currentSlug={slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
