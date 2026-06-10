import Link from "next/link";
import { siteName, socialLinks } from "@/lib/site";

const footerNav = [
  { label: "Blog", href: "/blog" },
  { label: "Outils", href: "/outils" },
  { label: "À propos", href: "/a-propos" },
  { label: "Prestation", href: "/prestation" },
  { label: "Contact", href: "/contact" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-auto border-t border-zinc-200/90 bg-white/75 py-10 text-sm text-zinc-800 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-semibold text-zinc-950">{siteName}</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-600">
              Formateur IA, réalisateur IA et créateur vidéo. Tutoriels, outils et
              workflows pour une production IA plus crédible.
            </p>
            <p className="mt-4 font-medium text-zinc-900">© {year}</p>
          </div>

          <nav aria-label="Navigation pied de page">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Pages
            </p>
            <ul className="mt-3 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-zinc-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/feed.xml"
                  className="transition-colors duration-200 hover:text-zinc-950"
                >
                  Flux RSS
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Liens légaux">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Légal
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="transition-colors duration-200 hover:text-zinc-950"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="transition-colors duration-200 hover:text-zinc-950"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/liens"
                  className="transition-colors duration-200 hover:text-zinc-950"
                >
                  Tous les liens
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Réseaux sociaux">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Réseaux
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:gap-y-2">
              {socialLinks.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-zinc-950"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
