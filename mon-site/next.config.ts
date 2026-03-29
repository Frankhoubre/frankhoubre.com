import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
