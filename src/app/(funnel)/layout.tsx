import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { fontVariables } from "@/lib/fonts";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";
import "../globals.css";

export const viewport: Viewport = rootViewport;
export const metadata: Metadata = rootMetadata;

/**
 * Troisième root layout, réservé au tunnel de formation et à son tableau de
 * bord : même langue et mêmes polices que le site, mais sans le header, le
 * footer ni la fenêtre promo (qui renverrait vers… ce tunnel).
 */
export default function FunnelRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fontVariables} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative isolate flex min-h-full flex-col bg-background text-foreground">
        {/* Les états initiaux des animations ne s'appliquent qu'avec JS. */}
        <Script id="funnel-js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
