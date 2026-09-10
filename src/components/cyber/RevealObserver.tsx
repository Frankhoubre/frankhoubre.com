"use client";

import { useEffect } from "react";

const WORD_DELAY_S = 0.1;

/**
 * Un span par mot, séparés par de vraies espaces (texte accessible et
 * innerText intacts pour les lecteurs d'écran et les moteurs qui rendent le JS).
 */
function splitWords(
  text: string,
  startIndex: number,
): { nodes: Node[]; nextIndex: number } {
  const words = text.split(/\s+/).filter(Boolean);
  let index = startIndex;
  const nodes: Node[] = [];
  words.forEach((word, i) => {
    if (i > 0) nodes.push(document.createTextNode(" "));
    const span = document.createElement("span");
    span.className = "pull-word";
    span.textContent = word;
    span.style.animationDelay = `${(index * WORD_DELAY_S).toFixed(2)}s`;
    index += 1;
    nodes.push(span);
  });
  return { nodes, nextIndex: index };
}

/**
 * Découpe chaque .words-pull-up en mots (un span par mot, délai croissant).
 * Cas particulier du H1 : chaque <span> enfant direct est une ligne, on garde
 * un index de mot continu d'une ligne à l'autre.
 */
function splitElement(el: HTMLElement) {
  if (el.dataset.split === "1") return;
  el.dataset.split = "1";

  const lineSpans =
    el.tagName === "H1"
      ? Array.from(el.children).filter(
          (c): c is HTMLSpanElement => c.tagName === "SPAN",
        )
      : [];

  if (lineSpans.length > 0) {
    let index = 0;
    for (const line of lineSpans) {
      line.classList.add("pull-line");
      const { nodes, nextIndex } = splitWords(line.textContent ?? "", index);
      line.replaceChildren(...nodes);
      index = nextIndex;
    }
    return;
  }

  const { nodes } = splitWords(el.textContent ?? "", 0);
  el.replaceChildren(...nodes);
}

/**
 * Révélation au scroll : mots qui montent (.words-pull-up) et blocs qui se
 * dévoilent avec un flou (.fade-up-reveal, délai via data-delay). Sans
 * IntersectionObserver, tout est révélé immédiatement.
 */
export function RevealObserver() {
  useEffect(() => {
    const wordEls = Array.from(
      document.querySelectorAll<HTMLElement>(".words-pull-up"),
    );
    const fadeEls = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-up-reveal"),
    );

    wordEls.forEach(splitElement);

    if (!("IntersectionObserver" in window)) {
      wordEls.forEach((el) => el.classList.add("words-visible"));
      fadeEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const wordsIo = new IntersectionObserver(
      (entries, io) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("words-visible");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    const fadeIo = new IntersectionObserver(
      (entries, io) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay;
          if (delay) el.style.animationDelay = `${delay}s`;
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    wordEls.forEach((el) => wordsIo.observe(el));
    fadeEls.forEach((el) => fadeIo.observe(el));

    return () => {
      wordsIo.disconnect();
      fadeIo.disconnect();
    };
  }, []);

  return null;
}
