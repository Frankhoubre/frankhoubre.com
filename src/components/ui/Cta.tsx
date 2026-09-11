import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";
type Size = "sm" | "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary: "btn btn-primary",
  secondary: "btn",
  quiet: "btn btn-quiet",
};

const SIZE: Record<Size, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`arrow shrink-0 ${className}`}
      aria-hidden
    >
      <path d="M1.5 7h11M8 2.5L12.5 7 8 11.5" />
    </svg>
  );
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  external?: boolean;
  children: ReactNode;
};

/**
 * Appel à l'action rectangulaire : bord fin, capitales, flèche qui glisse.
 * `primary` est le seul bouton plein (blanc chaud), un par écran au plus.
 */
export function Cta({
  href,
  variant = "secondary",
  size = "md",
  arrow = true,
  external,
  className = "",
  children,
  ...rest
}: LinkProps) {
  const cls = `${VARIANT[variant]} ${SIZE[size]} ${className}`.trim();
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        <span>{children}</span>
        {arrow ? <Arrow /> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <span>{children}</span>
      {arrow ? <Arrow /> : null}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
};

export function CtaButton({
  variant = "secondary",
  size = "md",
  arrow = false,
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={`${VARIANT[variant]} ${SIZE[size]} ${className}`.trim()} {...rest}>
      <span>{children}</span>
      {arrow ? <Arrow /> : null}
    </button>
  );
}

/** Lien texte en capitales avec flèche : pour finir une fiche ou une section. */
export function ArrowLink({
  href,
  external,
  className = "",
  children,
  ...rest
}: LinkProps) {
  const cls = `arrow-link ${className}`.trim();
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        <span>{children}</span>
        <Arrow />
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}
