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

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-medium uppercase tracking-wide text-neutral-700">
        Partager
      </span>
      <a
        className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-900 hover:bg-neutral-100"
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </a>
      <a
        className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-900 hover:bg-neutral-100"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-900 hover:bg-neutral-100"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <button
        type="button"
        onClick={onCopy}
        className="rounded-md border border-neutral-200 px-2.5 py-1 text-xs font-medium text-neutral-900 hover:bg-neutral-100"
      >
        {copied ? "Copié" : "Copier le lien"}
      </button>
    </div>
  );
}
