import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/prompt-chatgpt",
        destination: "/blog/prompt-chatgpt",
        permanent: true,
      },
      {
        source: "/dzine-ia",
        destination: "/blog/dzine-ia",
        permanent: true,
      },
      {
        source: "/outils/reverse-prompting-image-ia/index.html",
        destination: "/outils/reverse-prompting-image-ia",
        permanent: true,
      },
      {
        source: "/outils/calculateur-budget-production-ia/index.html",
        destination: "/outils/calculateur-budget-production-ia",
        permanent: true,
      },
      {
        source: "/outils/generateur-storyboard-pdf/index.html",
        destination: "/outils/generateur-storyboard-pdf",
        permanent: true,
      },
      {
        source: "/outils/annuaire-generateurs-images-ia-gratuits/index.html",
        destination: "/outils/annuaire-generateurs-images-ia-gratuits",
        permanent: true,
      },
      {
        source: "/outils/annuaire-ia-audio-sfx-musicales/index.html",
        destination: "/outils/annuaire-ia-audio-sfx-musicales",
        permanent: true,
      },
    ];
  },
  turbopack: {
    /** Répertoire de l’app Next (évite une détection erronée si plusieurs lockfiles). */
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
