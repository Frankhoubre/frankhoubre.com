import Link from "next/link";
import { getCategoryLabel } from "@/lib/site";

type Props = {
  category: string;
  href?: string;
  className?: string;
};

export function Badge({ category, href, className = "" }: Props) {
  const label = getCategoryLabel(category);
  const base =
    "inline-flex items-center rounded-full bg-neutral-950 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className} hover:opacity-90`}>
        {label}
      </Link>
    );
  }
  return <span className={`${base} ${className}`}>{label}</span>;
}
