import type { Metadata } from "next";
import Link from "next/link";
import { baseUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `En savoir plus sur ${siteName} et ce site.`,
  alternates: { canonical: `${baseUrl}/a-propos` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">À propos</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-800">
        <p>
          Ce site est l’espace personnel de <strong className="text-neutral-950">{siteName}</strong>{" "}
          : articles, notes et ressources publiées sur le{" "}
          <Link
            href="/blog"
            className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
          >
            blog
          </Link>
          .
        </p>
        <p>
          Pour échanger, vous pouvez utiliser la page{" "}
          <Link
            href="/contact"
            className="font-medium text-neutral-950 underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-600"
          >
            Contact
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
