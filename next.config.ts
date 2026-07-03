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
      // Récupération d'équité : anciennes URLs WordPress encore indexées
      // (source : export GSC 2026-07-03, colonne Pages). 301 vers le contenu
      // actuel le plus proche ; à défaut, vers le hub /blog. Sources SANS
      // trailing slash (Next strippe le slash en 308 avant ces règles).
      { source: "/wan-2-1-alibaba", destination: "/blog/wan-27-video-decevant-kling-seedance", permanent: true },
      { source: "/claude-sonnet-3-7", destination: "/blog/anthropic-fable-5-retour-global-juillet-2026", permanent: true },
      { source: "/re-ecriture-article-seo", destination: "/blog/ia-descriptions-youtube-seo", permanent: true },
      { source: "/revenus-passifs-avec-lia", destination: "/blog/monetiser-competences-creation-ia-freelance-agence", permanent: true },
      { source: "/outils-ia-gratuits", destination: "/outils", permanent: true },
      { source: "/videos-youtube-avec-lia", destination: "/blog/prompts-idees-videos-youtube", permanent: true },
      { source: "/storytelling-avec-lia", destination: "/blog/adapter-storytelling-marque-contenu-video-ia", permanent: true },
      { source: "/montage-video-ia", destination: "/blog/guide-complet-montage-video-assiste-intelligence-artificielle", permanent: true },
      { source: "/traduction-ia", destination: "/blog/traduction-scripts-ia-internationalisation-videos", permanent: true },
      { source: "/a-b-testing-ia", destination: "/blog/ab-test-miniatures-youtube-ia", permanent: true },
      { source: "/marketing-de-contenu-ia", destination: "/blog/comment-utiliser-ia-creer-pubs-rentables", permanent: true },
      { source: "/business/quels-sont-les-business-qui-cartonnent-en-france", destination: "/blog/comment-creer-agence-creation-video-ia", permanent: true },
      // Anciennes thématiques business sans équivalent actuel : hub blog.
      { source: "/dropshipping-ia", destination: "/blog", permanent: true },
      { source: "/assistant-virtuel-ia", destination: "/blog", permanent: true },
      { source: "/creer-application-ia-sans-coder", destination: "/blog", permanent: true },
      { source: "/ia-sans-coder", destination: "/blog", permanent: true },
      { source: "/startup-ia-sans-coder", destination: "/blog", permanent: true },
      { source: "/gestion-de-stock-ia", destination: "/blog", permanent: true },
      { source: "/generation-de-leads-ia", destination: "/blog", permanent: true },
      { source: "/email-marketing-ia-2", destination: "/blog", permanent: true },
      { source: "/veille-marche-ia", destination: "/blog", permanent: true },
      { source: "/niche-rentable-ia", destination: "/blog", permanent: true },
      { source: "/ia-petites-entreprises", destination: "/blog", permanent: true },
      { source: "/referencement-local-ia", destination: "/blog", permanent: true },
      { source: "/bases-de-lia-pour-entrepreneurs", destination: "/blog", permanent: true },
      { source: "/gagner-argent-chatgpt", destination: "/blog", permanent: true },
      { source: "/creation-site-ia", destination: "/blog", permanent: true },
      { source: "/retargeting-publicitaire-ia", destination: "/blog", permanent: true },
      { source: "/ia-comptabilite-tpe", destination: "/blog", permanent: true },
      { source: "/ethique-de-lia", destination: "/blog", permanent: true },
      { source: "/ia-reseaux-sociaux", destination: "/blog", permanent: true },
      { source: "/ia-opportunite-pour-entrepreneurs", destination: "/blog", permanent: true },
      { source: "/chatgpt-entrepreneur", destination: "/blog", permanent: true },
      { source: "/idee-business-ia", destination: "/blog", permanent: true },
      { source: "/descriptions-de-produits-avec-lia", destination: "/blog", permanent: true },
      // Ancienne pagination WordPress /blog/page/N.
      { source: "/blog/page/:num", destination: "/blog", permanent: true },
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
