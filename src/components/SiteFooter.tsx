import Link from "next/link";
import { siteName, socialLinks } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white/85 py-8 text-sm text-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {siteName}
        </p>
        <div className="flex flex-col gap-2 sm:items-end">
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Liens de pied de page"
          >
            <Link
              href="/mentions-legales"
              className="hover:text-neutral-950"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-neutral-950"
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
                className="hover:text-neutral-950"
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
