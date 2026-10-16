import Link from "next/link";
import type { ReactNode } from "react";
import { EDITORIAL_REL, SPONSORED_REL, resolveArticleLink } from "@/lib/affiliate";

type Props = {
  href: string;
  sponsored?: boolean;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

/**
 * Lien d'article : interne via next/link, externe en nouvel onglet. Les liens
 * du registre d'affiliation (ou `aff:<outil>`, ou `sponsored`) sortent en
 * rel="sponsored nofollow noopener".
 */
export function ArticleLink({ href, sponsored = false, className, children, ...rest }: Props) {
  const link = resolveArticleLink(href, sponsored);
  if (link.unknownAffiliate !== undefined) {
    console.warn(`[affiliate] outil inconnu dans un article : aff:${link.unknownAffiliate}`);
    return <span className={className}>{children}</span>;
  }
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel={link.sponsored ? SPONSORED_REL : EDITORIAL_REL}
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} {...rest}>
      {children}
    </Link>
  );
}
