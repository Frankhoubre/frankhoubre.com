import Link from "next/link";
import { siteName, socialLinks } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-auto border-t border-zinc-200/90 bg-white/75 py-8 text-sm text-zinc-800 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-medium text-zinc-900">
          © {year} {siteName}
        </p>
        <div className="flex flex-col gap-2 sm:items-end">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Liens de pied de page"
          >
            <Link
              href="/mentions-legales"
              className="transition-colors duration-200 hover:text-zinc-950"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="transition-colors duration-200 hover:text-zinc-950"
            >
              Confidentialité
            </Link>
          </nav>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Réseaux sociaux">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-zinc-950"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
