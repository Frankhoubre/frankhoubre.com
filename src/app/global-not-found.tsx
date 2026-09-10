import type { Metadata } from "next";
import Link from "next/link";
import { bodyFont, headingFont } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page introuvable | Frank Houbre",
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez le blog, les outils IA gratuits et la bio de Frank Houbre.",
};

const links = [
  { href: "/", label: "Accueil" },
  { href: "/blog", label: "Blog IA vidéo et image" },
  { href: "/outils", label: "Outils IA gratuits" },
  { href: "/a-propos", label: "À propos de Frank Houbre" },
  { href: "/en", label: "English version" },
] as const;

/**
 * 404 globale : avec deux root layouts (FR et EN), il n'existe plus de layout
 * unique pour composer une page not-found. Cette page est autonome (styles et
 * polices importés ici) et renvoie un vrai statut 404 avec noindex.
 */
export default function GlobalNotFound() {
  return (
    <html
      lang="fr"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="cyber-page flex min-h-full flex-col items-center justify-center px-6 py-24 text-center">
        <main className="max-w-xl">
          <p className="cyber-label">Erreur 404</p>
          <h1 className="cyber-title mt-4 text-3xl sm:text-5xl">
            Page introuvable
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
            L&apos;adresse demandée n&apos;existe pas ou a été déplacée. Les
            anciennes URL WordPress sont redirigées automatiquement ; si vous
            arrivez ici, le contenu a probablement été fusionné dans un article
            plus complet.
          </p>
          <nav aria-label="Pages utiles" className="mt-10">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="cyber-btn">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </main>
      </body>
    </html>
  );
}
