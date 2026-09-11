import type { Metadata } from "next";
import Link from "next/link";
import { fontVariables } from "@/lib/fonts";
import { Arrow } from "@/components/ui/Cta";
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
    <html lang="fr" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <main className="container-x flex flex-1 flex-col justify-between py-10">
          <p className="meta flex items-center justify-between">
            <span>Frank Houbre</span>
            <span>Erreur 404</span>
          </p>
          <div className="grid-12 items-end gap-y-10 py-16">
            <div className="col-span-12 lg:col-span-8">
              <p className="display text-[clamp(6rem,24vw,20rem)] leading-[0.85] text-cream/10">404</p>
              <h1 className="h-section -mt-4 text-cream">Page introuvable.</h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-fog">
                L’adresse demandée n’existe pas ou a été déplacée. Les anciennes URL WordPress sont
                redirigées automatiquement ; si vous arrivez ici, le contenu a probablement été fusionné
                dans un article plus complet.
              </p>
            </div>
            <nav aria-label="Pages utiles" className="col-span-12 lg:col-span-4">
              <p className="meta">Reprendre</p>
              <ul className="mt-4">
                {links.map((item, i) => (
                  <li key={item.href} className="border-t border-line last:border-b">
                    <Link href={item.href} className="group flex items-center justify-between gap-4 py-3.5 text-[15px] text-stone no-underline transition-colors hover:text-cream">
                      <span><span className="meta tabular mr-4">0{i + 1}</span>{item.label}</span>
                      <Arrow className="text-fog transition-colors group-hover:text-cream" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <p className="meta meta-dim">frankhoubre.com · Séquence interrompue</p>
        </main>
      </body>
    </html>
  );
}
