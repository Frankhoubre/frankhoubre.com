import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { FormationPromoModal } from "@/components/FormationPromoModal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { baseUrl, siteName } from "@/lib/site";
import "./globals.css";

const headingFont = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Site personnel de Frank Houbre : articles, notes et ressources autour du web et de la création.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="relative isolate flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="relative z-10 flex-1">{children}</main>
        <SiteFooter />
        <FormationPromoModal />
      </body>
    </html>
  );
}
