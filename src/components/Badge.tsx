import Link from "next/link";
import { getCategoryLabel } from "@/lib/site";

type Props = {
  category: string;
  href?: string;
  className?: string;
};

export function Badge({ category, href, className = "" }: Props) {
  const label = getCategoryLabel(category);
  const base = "ds-badge";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {label}
      </Link>
    );
  }
  return <span className={`${base} ${className}`}>{label}</span>;
}
