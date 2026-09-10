import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/SiteShell";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";
import "../globals.css";

export const viewport: Viewport = rootViewport;
export const metadata: Metadata = {
  ...rootMetadata,
  openGraph: { ...rootMetadata.openGraph, locale: "en_US" },
};

export default function EnRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
