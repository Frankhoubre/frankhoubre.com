import Link from "next/link";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { FUNNEL_PATHS } from "@/lib/funnel/config";

const NAV = [
  { href: FUNNEL_PATHS.admin, label: "Vue d’ensemble", key: "overview" },
  { href: `${FUNNEL_PATHS.admin}/inscrits`, label: "Inscrits", key: "subscribers" },
  { href: `${FUNNEL_PATHS.admin}/emails`, label: "Emails", key: "emails" },
] as const;

/** Pages publiques du tunnel, ouvertes dans un nouvel onglet. */
const FUNNEL_PAGES = [
  { href: FUNNEL_PATHS.optin, label: "Page d’inscription" },
  { href: `${FUNNEL_PATHS.course}?bienvenue=1`, label: "Page formation" },
  { href: FUNNEL_PATHS.unsubscribed, label: "Page désinscription" },
] as const;

export type AdminSection = (typeof NAV)[number]["key"];

/**
 * Cadre commun des pages du back-office : navigation en capitales sur une
 * ligne fine, titre, actions. Registre « produit » : plus dense que le site,
 * même langage visuel.
 */
export function AdminShell({
  active,
  title,
  eyebrow = "Formation IA gratuite",
  actions,
  children,
}: {
  active: AdminSection;
  title: string;
  eyebrow?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <FunnelFrame>
      <div className="container-x py-8 sm:py-10">
        <nav aria-label="Back-office" className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-line pb-3">
          <ul className="flex flex-wrap gap-x-6">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={item.key === active ? "page" : undefined}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="/api/funnel/export" className="nav-link">
            Export CSV
          </a>
          <a href="/api/funnel/admin-login?logout=1" className="nav-link ml-auto">
            Se déconnecter
          </a>
        </nav>
        <nav aria-label="Pages du tunnel" className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line py-3">
          <span className="meta">Pages du tunnel</span>
          {FUNNEL_PAGES.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="nav-link"
            >
              {p.label} ↗
            </a>
          ))}
        </nav>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="meta">{eyebrow}</p>
            <h1 className="h-section mt-3 text-cream">{title}</h1>
          </div>
          {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
        </div>

        {children}
      </div>
    </FunnelFrame>
  );
}
