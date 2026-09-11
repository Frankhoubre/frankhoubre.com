"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteName, socialLinks } from "@/lib/site";
import { getDictionary, localeFromPathname } from "@/lib/i18n";
import { FORMATION_PROMO_URL } from "@/lib/formation-promo";
import { Arrow } from "@/components/ui/Cta";

/**
 * Pied de page : marque monumentale, trois colonnes de liens sur lignes
 * fines, puis une ligne de métadonnées (année, langues, RSS).
 */
export function SiteFooter() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  // Le légal n'existe pour l'instant qu'en FR : on y pointe depuis les deux langues.
  const legal = [
    { label: dict.footer.legalNotice, href: "/mentions-legales" },
    { label: dict.footer.privacy, href: "/politique-confidentialite" },
  ];

  const ctaLabel = locale === "en" ? "Get the free training" : "Recevoir la formation gratuite";
  const ctaKicker = locale === "en" ? "Next step" : "Prochaine étape";

  return (
    <footer className="relative z-10 mt-auto border-t border-line bg-charcoal">
      <div className="container-x">
        <div className="grid-12 gap-y-12 py-14 sm:py-20">
          <div className="col-span-12 lg:col-span-6">
            <p className="meta">{locale === "en" ? "AI filmmaker, trainer, creator" : "Réalisateur IA, formateur, créateur"}</p>
            <p className="display mt-4 text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.9] text-cream">
              {siteName}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-fog">
              {dict.footer.tagline}
            </p>
          </div>

          <div className="col-span-12 grid gap-10 sm:grid-cols-3 lg:col-span-6 lg:gap-8">
            <nav aria-label={dict.footer.nav}>
              <p className="meta border-b border-line pb-3">{dict.footer.nav}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {dict.nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link-muted">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {locale === "fr" ? (
                  <li>
                    <Link href="/presse" className="link-muted">
                      Kit presse
                    </Link>
                  </li>
                ) : null}
              </ul>
            </nav>

            <nav aria-label={dict.footer.social}>
              <p className="meta border-b border-line pb-3">{dict.footer.social}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} target="_blank" rel="noreferrer" className="link-muted">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="meta border-b border-line pb-3">{ctaKicker}</p>
              <Link href={FORMATION_PROMO_URL} className="group mt-4 block no-underline">
                <span className="h-item block text-cream">{ctaLabel}</span>
                <span className="mt-3 inline-flex items-center gap-2 text-fog transition-colors duration-200 group-hover:text-cream">
                  <span className="meta">{locale === "en" ? "3 videos, 24 min" : "3 vidéos, 24 min"}</span>
                  <Arrow />
                </span>
              </Link>
              <nav aria-label="Legal" className="mt-8">
                <ul className="space-y-2 text-xs">
                  {legal.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="link-muted">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="meta flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line py-5 text-[10px]">
          <span>
            © {year} · {siteName} · {dict.footer.rights}
          </span>
          <span className="flex items-center gap-4">
            <span>FR / EN</span>
            <span className="text-fog/40" aria-hidden>|</span>
            <Link href="/feed.xml" className="link-muted">
              RSS
            </Link>
            <span className="text-fog/40" aria-hidden>|</span>
            <span>frankhoubre.com</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
