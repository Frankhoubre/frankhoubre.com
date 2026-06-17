import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonicalise l'hôte : www → non-www (308) pour éviter le contenu
      // dupliqué. Géré ici (et non côté Vercel) pour rester dans le repo.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.frankhoubre.com" }],
        destination: "https://frankhoubre.com/:path*",
        permanent: true,
      },
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
      // Fusions editoriales (anti-cannibalisation) : 301 vers l'article canonique.
      {
        source: "/blog/generateur-image-ia-sans-inscription",
        destination: "/blog/meilleur-generateur-image-ia-gratuit",
        permanent: true,
      },
      {
        source: "/en/blog/generateur-image-ia-sans-inscription",
        destination: "/en/blog/meilleur-generateur-image-ia-gratuit",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  turbopack: {
    /** Répertoire de l’app Next (évite une détection erronée si plusieurs lockfiles). */
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
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
