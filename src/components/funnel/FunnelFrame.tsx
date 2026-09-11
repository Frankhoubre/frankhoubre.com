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
 */
export function FunnelFrame({ tone = "dark", minimal = false, children }: Props) {
  const dark = tone === "dark";
  const wrap = dark ? "cyber-page" : "bg-background text-foreground";
  const bar = dark
    ? "border-[rgba(17,17,17,0.12)] text-[var(--cream)]"
    : "border-[rgba(228,220,210,0.9)] text-neutral-950";
  const link = dark
    ? "text-[rgba(17,17,17,0.72)] hover:text-[var(--cream)]"
    : "text-neutral-600 hover:text-neutral-950";

  return (
    <div className={`flex min-h-screen flex-col ${wrap}`}>
      <header className={`border-b ${bar}`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="heading-font inline-flex min-h-11 items-center text-sm uppercase tracking-[0.08em]"
          >
            {siteName}
          </Link>
          {minimal ? (
            <span className={`text-xs ${dark ? "text-[rgba(17,17,17,0.62)]" : "text-neutral-600"}`}>
              Formation offerte
            </span>
          ) : (
            <Link
              href="/blog"
              className={`inline-flex min-h-11 items-center text-sm transition-colors duration-200 ${link}`}
            >
              Le blog
            </Link>
          )}
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className={`border-t ${bar}`}>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-5 text-xs sm:px-6">
          <p className={dark ? "text-[rgba(17,17,17,0.62)]" : "text-neutral-600"}>
            © {new Date().getFullYear()} {siteName}
          </p>
          <nav aria-label="Légal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/mentions-legales" className={`inline-flex min-h-11 items-center transition-colors duration-200 ${link}`}>
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className={`inline-flex min-h-11 items-center transition-colors duration-200 ${link}`}>
              Confidentialité
            </Link>
            <a href={`mailto:${SUPPORT_EMAIL}`} className={`inline-flex min-h-11 items-center transition-colors duration-200 ${link}`}>
              {SUPPORT_EMAIL}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
