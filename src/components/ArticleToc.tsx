"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { TocItem } from "@/lib/blog";

const OFFSET = 120;

type Props = {
  items: TocItem[];
  layout?: "sidebar" | "inline";
};

/**
 * Sommaire : liste numérotée sur une règle verticale, la règle se remplit
 * au fil de la lecture et l'entrée active passe en blanc chaud.
 */
export function ArticleToc({ items, layout = "sidebar" }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [trackH, setTrackH] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const measure = () => {
      const el = listRef.current;
      if (el) setTrackH(el.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  useEffect(() => {
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => Boolean(e));

    const onScroll = () => {
      const y = window.scrollY + OFFSET;
      let current: string | null = ids[0] ?? null;
      for (const el of els) {
        if (el.offsetTop <= y) current = el.id;
      }
      setActive(current);

      if (!els.length) {
        setProgress(0);
        return;
      }
      const first = els[0].offsetTop;
      const last = els[els.length - 1].offsetTop;
      const span = Math.max(1, last - first);
      const p = Math.min(1, Math.max(0, (window.scrollY + OFFSET - first) / span));
      setProgress(p);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  if (!items.length) return null;

  const fillH = Math.max(0, trackH * progress);

  return (
    <nav
      aria-label="Sommaire"
      className={`relative text-sm ${layout === "inline" ? "w-full" : "w-56 shrink-0"}`}
    >
      {layout === "sidebar" ? <p className="meta mb-4">Sommaire</p> : null}
      <div className="relative">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-line" aria-hidden />
        <div
          className="absolute left-0 top-0 w-px origin-top bg-cream transition-[height] duration-150"
          style={{ height: fillH }}
          aria-hidden
        />
        <ol ref={listRef} className="space-y-1">
          {items.map((item, i) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`grid grid-cols-[1.75rem_1fr] gap-2 py-1 pl-4 leading-snug transition-colors duration-200 ${
                    isActive ? "text-cream" : "text-fog hover:text-stone"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (!el) return;
                    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET + 8;
                    window.scrollTo({ top, behavior: "smooth" });
                  }}
                >
                  <span className="meta tabular pt-0.5 text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item.text}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
