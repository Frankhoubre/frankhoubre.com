"use client";

import { useState } from "react";

type Props = { text: string; label: string; doneLabel: string };

/** Copie le prompt dans le presse-papiers (repli : sélection du texte). */
export function CopyPromptButton({ text, label, doneLabel }: Props) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      window.setTimeout(() => setDone(false), 2500);
    } catch {
      const pre = document.getElementById("buzz-prompt");
      if (pre) {
        const range = document.createRange();
        range.selectNodeContents(pre);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  }

  return (
    <button type="button" onClick={copy} className="btn btn-primary btn-sm">
      <span role="status">{done ? doneLabel : label}</span>
    </button>
  );
}
