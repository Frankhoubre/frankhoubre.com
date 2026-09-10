import { FormationPromoModal } from "@/components/FormationPromoModal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { bodyFont, headingFont } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

type SiteShellProps = {
  lang: Locale;
  children: React.ReactNode;
};

/**
 * Squelette HTML partagé par les deux root layouts. Chaque groupe de routes
 * ((fr) et (en)) sert son propre <html lang> dès le HTML initial : plus de
 * correction côté client, les moteurs lisent la bonne langue au premier rendu.
 */
export function SiteShell({ lang, children }: SiteShellProps) {
  const skipLabel =
    lang === "en" ? "Skip to main content" : "Aller au contenu principal";

  return (
    <html
      lang={lang}
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
      // La classe « js » est ajoutée par le script inline avant l'hydratation.
      suppressHydrationWarning
    >
      <body className="relative isolate flex min-h-full flex-col bg-background text-foreground">
        {/* Active les états d'animation uniquement quand JS tourne : les
            crawlers et les navigateurs sans script voient tout le contenu. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a href="#main-content" className="ds-skip-link">
          {skipLabel}
        </a>
        <SiteHeader />
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
        <SiteFooter />
        <FormationPromoModal />
      </body>
    </html>
  );
}
