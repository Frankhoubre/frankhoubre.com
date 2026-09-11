"use client";

import { useEffect } from "react";

const WORD_DELAY_S = 0.06;

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
 * Chaque <span> enfant direct est traité comme une ligne masquée ; l'index
 * de mot continue d'une ligne à l'autre.
 */
function splitElement(el: HTMLElement) {
  if (el.dataset.split === "1") return;
  el.dataset.split = "1";

  const lineSpans = Array.from(el.children).filter(
    (c): c is HTMLSpanElement => c.tagName === "SPAN",
  );

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

  el.classList.add("pull-line");
  const { nodes } = splitWords(el.textContent ?? "", 0);
  el.replaceChildren(...nodes);
}

const REVEAL_SELECTOR = ".reveal, .reveal-mask, .reveal-line, .fade-up-reveal";

/**
 * Révélation au scroll : mots qui montent sous un masque (.words-pull-up)
 * et blocs qui apparaissent (.reveal, .reveal-mask, .reveal-line ; délai via
 * data-delay en secondes). Sans IntersectionObserver, tout est révélé.
 */
export function RevealObserver() {
  useEffect(() => {
    const wordEls = Array.from(
      document.querySelectorAll<HTMLElement>(".words-pull-up"),
    );
    const fadeEls = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
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
