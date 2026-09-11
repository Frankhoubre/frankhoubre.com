import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/funnel/config";
import { siteName } from "@/lib/site";

type Props = {
  tone?: "dark" | "light";
  /** Page de capture : aucun lien de sortie dans l'en-tête. */
  minimal?: boolean;
  children: React.ReactNode;
};

/**
 * Cadre minimal des pages du tunnel : une seule sortie (le site) en haut,
 * le légal en bas. Pas de menu, pour garder l'attention sur l'inscription.
 * `tone` est conservé pour compatibilité : il n'existe plus qu'un registre.
 */
export function FunnelFrame({ minimal = false, children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-charcoal text-cream">
      <header className="border-b border-line">
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href="/" className="display inline-flex items-center text-[13px] tracking-[0.2em] text-cream no-underline">
            {siteName}
          </Link>
          {minimal ? (
            <span className="meta">Formation offerte</span>
          ) : (
            <Link href="/blog" className="nav-link">
              Le blog
            </Link>
          )}
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-line">
        <div className="container-x meta flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5 text-[10px]">
          <p>
            © {new Date().getFullYear()} {siteName}
          </p>
          <nav aria-label="Légal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className="link-muted inline-flex min-h-11 items-center">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="link-muted inline-flex min-h-11 items-center">
              Confidentialité
            </Link>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="link-muted inline-flex min-h-11 items-center lowercase tracking-normal">
              {SUPPORT_EMAIL}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
