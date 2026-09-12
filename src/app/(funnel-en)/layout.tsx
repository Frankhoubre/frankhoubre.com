import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { fontVariables } from "@/lib/fonts";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";
import "../globals.css";

export const viewport: Viewport = rootViewport;
export const metadata: Metadata = {
  ...rootMetadata,
  openGraph: { ...rootMetadata.openGraph, locale: "en_US" },
};

/**
 * Root layout du tunnel payant anglais (« Viral AI videos ») : même principe
 * que le tunnel FR (sans header ni footer du site), avec `lang="en"` dès le
 * HTML initial.
 */
export default function FunnelEnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative isolate flex min-h-full flex-col bg-background text-foreground">
        {/* Les états initiaux des animations ne s'appliquent qu'avec JS. */}
        <Script id="funnel-en-js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <main id="main-content" className="relative z-10 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
