import { FunnelFrame } from "@/components/funnel/FunnelFrame";

const LOGIN_ERRORS: Record<string, string> = {
  jeton: "Jeton incorrect.",
  "non-configure":
    "FUNNEL_ADMIN_TOKEN n’est pas défini sur le serveur : ajoutez la variable puis redéployez.",
  "trop-de-tentatives": "Trop de tentatives. Réessayez dans un quart d’heure.",
};

export function AdminLogin({ error }: { error?: string }) {
  return (
    <FunnelFrame tone="light">
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6 sm:py-24">
        <div className="ds-surface p-6 sm:p-8">
          <p className="ds-eyebrow">Espace privé</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight">Back-office du funnel</h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Entrez le jeton défini dans la variable FUNNEL_ADMIN_TOKEN du déploiement.
          </p>
          <form method="post" action="/api/funnel/admin-login" className="mt-6 space-y-4">
            <div>
              <label htmlFor="token" className="mb-1.5 block text-sm font-medium text-neutral-900">
                Jeton d’accès
              </label>
              <input
                id="token"
                name="token"
                type="password"
                autoComplete="current-password"
                required
                className="ds-input"
              />
            </div>
            {error ? (
              <p
                role="alert"
                className="rounded-lg border border-[rgb(224_112_32/0.6)] bg-[rgb(224_112_32/0.1)] px-3 py-2 text-sm text-neutral-900"
              >
                {LOGIN_ERRORS[error] ?? "Connexion impossible."}
              </p>
            ) : null}
            <button type="submit" className="ds-cta-dark w-full !py-3.5">
              Ouvrir le back-office
            </button>
          </form>
        </div>
      </div>
    </FunnelFrame>
  );
}
