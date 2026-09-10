import Link from "next/link";
import { FunnelFrame } from "@/components/funnel/FunnelFrame";
import { FUNNEL_PATHS } from "@/lib/funnel/config";

const NAV = [
  { href: FUNNEL_PATHS.admin, label: "Vue d’ensemble", key: "overview" },
  { href: `${FUNNEL_PATHS.admin}/inscrits`, label: "Inscrits", key: "subscribers" },
  { href: `${FUNNEL_PATHS.admin}/emails`, label: "Emails", key: "emails" },
] as const;

export type AdminSection = (typeof NAV)[number]["key"];

/** Cadre commun des pages du back-office : titre, navigation, déconnexion. */
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
    <FunnelFrame tone="light">
      <div className="ds-page">
        <nav aria-label="Back-office" className="flex flex-wrap items-center gap-2">
          <ul className="flex gap-1 rounded-full border border-[rgb(226_226_230/0.9)] bg-white p-1">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  aria-current={item.key === active ? "page" : undefined}
                  className={`inline-flex min-h-9 items-center rounded-full px-3 text-sm transition-colors duration-200 ${
                    item.key === active
                      ? "bg-[#111111] text-white"
                      : "text-neutral-800 hover:bg-[#ececef]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/api/funnel/export"
            className="inline-flex min-h-9 items-center rounded-full border border-[rgb(226_226_230/0.9)] bg-white px-3 text-sm text-neutral-800 hover:bg-[#ececef]"
          >
            Export CSV
          </a>
          <a
            href="/api/funnel/admin-login?logout=1"
            className="ml-auto inline-flex min-h-9 items-center px-2 text-sm text-neutral-700 underline underline-offset-4 hover:text-neutral-950"
          >
            Se déconnecter
          </a>
        </nav>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="ds-eyebrow">{eyebrow}</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
          </div>
          {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
        </div>

        {children}
      </div>
    </FunnelFrame>
  );
}
