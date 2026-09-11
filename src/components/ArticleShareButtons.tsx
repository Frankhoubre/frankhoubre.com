"use client";

import { useCallback, useState } from "react";
import { siteName } from "@/lib/site";

type Props = {
  url: string;
  title: string;
};

export function ArticleShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(`${title} · ${siteName}`);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [url]);

  const links = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}` },
  ];

  return (
    <div className="meta flex flex-wrap items-center gap-x-5 gap-y-2">
      <span className="meta-dim">Partager</span>
      {links.map((l) => (
        <a key={l.label} className="line-link text-fog hover:text-cream" href={l.href} target="_blank" rel="noopener noreferrer">
          {l.label}
        </a>
      ))}
      <button type="button" onClick={onCopy} className="line-link text-fog hover:text-cream">
        {copied ? "Lien copié" : "Copier le lien"}
      </button>
    </div>
  );
}
