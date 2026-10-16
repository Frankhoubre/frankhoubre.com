import type { ReactNode } from "react";
import { ArticleLink } from "@/components/article/ArticleLink";
import { AFFILIATE_HREF_PREFIX, getAffiliateTool } from "@/lib/affiliate";

type Props = {
  outil?: string;
  tool?: string;
  href?: string;
  children?: ReactNode;
};

/**
 * Lien affilié dans le texte : `<LienSponsorise outil="higgsfield">` prend le
 * lien du registre, `href` couvre un lien payant hors registre. Toujours en
 * rel="sponsored nofollow noopener".
 */
export function SponsoredLink({ outil, tool, href, children }: Props) {
  const id = outil ?? tool;
  const target = id ? `${AFFILIATE_HREF_PREFIX}${id}` : href;
  if (!target) return <>{children}</>;
  const label = children ?? (id ? getAffiliateTool(id)?.name : null) ?? target;
  return (
    <ArticleLink href={target} sponsored>
      {label}
    </ArticleLink>
  );
}
