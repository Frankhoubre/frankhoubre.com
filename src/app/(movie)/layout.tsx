import type { Metadata, Viewport } from "next";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://frankhoubre.com"),
};

/**
 * Root layout de la page du film OUT OF FRAME : plein écran noir, en anglais,
 * sans le header, le footer ni la fenêtre promo du site.
 */
export default function MovieRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full bg-black text-white">{children}</body>
    </html>
  );
}
