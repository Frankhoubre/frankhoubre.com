import { FunnelFrame } from "@/components/funnel/FunnelFrame";

const LOGIN_ERRORS: Record<string, string> = {
  jeton: "Jeton incorrect.",
  "non-configure":
    "FUNNEL_ADMIN_TOKEN n’est pas défini sur le serveur : ajoutez la variable puis redéployez.",
  "trop-de-tentatives": "Trop de tentatives. Réessayez dans un quart d’heure.",
};

export function AdminLogin({ error }: { error?: string }) {
  return (
    <FunnelFrame>
      <div className="container-narrow py-16 sm:py-24">
        <div className="card card-surface p-6 sm:p-8">
          <p className="meta">Espace privé</p>
          <h1 className="h-block mt-4 text-cream">Back-office du funnel</h1>
          <p className="mt-3 text-sm leading-relaxed text-fog">
            Entrez le jeton défini dans la variable FUNNEL_ADMIN_TOKEN du déploiement.
          </p>
          <form method="post" action="/api/funnel/admin-login" className="mt-6 space-y-4">
            <div>
              <label htmlFor="token" className="meta mb-2 block">
                Jeton d’accès
              </label>
              <input
                id="token"
                name="token"
                type="password"
                autoComplete="current-password"
                required
                className="input"
              />
            </div>
            {error ? (
              <p role="alert" className="border border-amber/70 bg-amber/10 px-3 py-2 text-sm text-cream">
                {LOGIN_ERRORS[error] ?? "Connexion impossible."}
              </p>
            ) : null}
            <button type="submit" className="btn btn-primary w-full">
              <span>Ouvrir le back-office</span>
            </button>
          </form>
        </div>
      </div>
    </FunnelFrame>
  );
}
