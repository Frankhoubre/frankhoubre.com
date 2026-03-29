import Link from "next/link";
import { siteName } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white/85 py-8 text-sm text-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {siteName}
        </p>
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
      </div>
    </footer>
  );
}
