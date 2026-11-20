import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  cite?: string;
  meta?: string;
  className?: string;
  size?: "md" | "lg";
};

/** Citation éditoriale en capitales Bodoni, attribuée après un filet à butée. */
export function QuoteBlock({ children, cite, meta, className = "", size = "lg" }: Props) {
  return (
    <figure className={className}>
      <blockquote
        className={`serif text-cream ${
          size === "lg"
            ? "text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02]"
            : "text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.05]"
        }`}
      >
        {children}
      </blockquote>
      {cite || meta ? (
        <figcaption className="mt-6 flex items-center gap-4">
          <span className="filet filet-court" aria-hidden />
          <span className="meta meta-strong">{cite}</span>
          {meta ? <span className="meta meta-dim">{meta}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
