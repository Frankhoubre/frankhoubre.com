"use client";

import { useCallback, useRef, useState, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLPreElement> & {
  copyLabel: string;
  copiedLabel: string;
};

/**
 * Bloc de code ou de prompt d'un article, avec un bouton pour copier son
 * contenu. Le texte reste rendu côté serveur : seul le bouton est interactif.
 */
export function CodeBlock({ copyLabel, copiedLabel, children, ...rest }: Props) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    const text = ref.current?.innerText ?? "";
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ""));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, []);

  return (
    <div className="code-block">
      <button
        type="button"
        onClick={onCopy}
        className="code-copy"
        data-copied={copied ? "true" : undefined}
        aria-live="polite"
      >
        {copied ? copiedLabel : copyLabel}
      </button>
      <pre {...rest} ref={ref}>
        {children}
      </pre>
    </div>
  );
}
