import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  cite?: string;
  meta?: string;
  className?: string;
  size?: "md" | "lg";
};

/** Citation éditoriale en serif italique, attribuée sur une ligne fine. */
export function QuoteBlock({ children, cite, meta, className = "", size = "lg" }: Props) {
  return (
    <figure className={className}>
      <blockquote
        className={`serif text-cream ${
          size === "lg"
            ? "text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.12]"
            : "text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.2]"
        }`}
      >
        {children}
      </blockquote>
      {cite || meta ? (
        <figcaption className="mt-6 flex items-center gap-4">
          <span className="h-px w-8 bg-stone/60" aria-hidden />
          <span className="meta meta-strong">{cite}</span>
          {meta ? <span className="meta meta-dim">{meta}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
