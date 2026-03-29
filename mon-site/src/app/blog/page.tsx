import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { getAllPosts } from "@/lib/blog";
import { baseUrl, siteName } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: `Articles et notes de ${siteName}.`,
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: `Blog | ${siteName}`,
    description: `Articles et notes de ${siteName}.`,
    url: `${baseUrl}/blog`,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteName}`,
    description: `Articles et notes de ${siteName}.`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="mb-12 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-800">
          Idées, tutoriels et actualités signés {siteName}. Utilisez la recherche
          et les catégories pour parcourir les articles publiés.
        </p>
      </header>
      <BlogList posts={posts} gridLayout />
    </div>
  );
}
