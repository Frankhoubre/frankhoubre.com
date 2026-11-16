"use client";

import { useCallback, useState } from "react";
import { siteName } from "@/lib/site";

type Props = {
  url: string;
  title: string;
  labels?: { share: string; copyLink: string; linkCopied: string };
};

const FR_LABELS = { share: "Partager", copyLink: "Copier le lien", linkCopied: "Lien copié" };

export function ArticleShareButtons({ url, title, labels = FR_LABELS }: Props) {
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
    <div className="meta flex flex-wrap items-center gap-x-5 gap-y-1">
      <span className="meta-dim">{labels.share}</span>
      {links.map((l) => (
        <a key={l.label} className={`line-link tap text-fog hover:text-cream ${l.label.length < 3 ? "tap-w" : ""}`} href={l.href} target="_blank" rel="noopener noreferrer">
          {l.label}
        </a>
      ))}
      <button type="button" onClick={onCopy} className="line-link tap text-fog hover:text-cream" aria-live="polite">
        {copied ? labels.linkCopied : labels.copyLink}
      </button>
    </div>
  );
}
