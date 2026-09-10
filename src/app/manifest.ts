import type { MetadataRoute } from "next";
import { person, siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} : formateur IA et réalisateur IA`,
    short_name: siteName,
    description: person.description,
    start_url: "/",
    display: "browser",
    lang: "fr",
    background_color: "#f6f6f7",
    theme_color: "#f6f6f7",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
