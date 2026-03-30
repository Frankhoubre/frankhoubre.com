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
