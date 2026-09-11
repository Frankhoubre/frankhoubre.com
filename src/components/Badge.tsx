import Link from "next/link";
import { getCategoryLabel } from "@/lib/site";

type Props = {
  category: string;
  href?: string;
  className?: string;
  /** Sans cadre : simple libellé en capitales (dans une ligne de métadonnées). */
  plain?: boolean;
};

export function Badge({ category, href, className = "", plain = false }: Props) {
  const label = getCategoryLabel(category);
  const base = plain ? "meta meta-strong hover:text-cream" : "badge";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {label}
      </Link>
    );
  }
  return <span className={`${base} ${className}`}>{label}</span>;
}
