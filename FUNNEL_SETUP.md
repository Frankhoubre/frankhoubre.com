# Funnel « formation IA gratuite » (remplace systeme.io)

Le tunnel vit désormais dans le site. Trois pages publiques, une API, un
tableau de bord privé.

| Page | Rôle |
|------|------|
| `/formation-ia-gratuite` | Page d'inscription (un seul champ : email, plus consentement). Indexée. |
| `/formation-ia-gratuite/cours` | Les trois vidéos du challenge + offre AI Studios. Non indexée, accessible par lien. |
| `/formation-ia-gratuite/desinscription` | Confirmation après clic sur « ne plus recevoir ». |
| `/admin/funnel` | Back-office (jeton) : vue d'ensemble, `/admin/funnel/inscrits` (liste, recherche, filtres, pagination), `/admin/funnel/inscrits/<email>` (fiche, séquence par étape, journal, actions : renvoyer l'accès, désinscrire, supprimer RGPD), `/admin/funnel/emails` (résultats par étape et aperçu des 4 emails). Bloqué dans robots.txt. |

## Ce qui se passe à l'inscription

1. Le formulaire envoie l'email (prénom optionnel, plus demandé) à `POST /api/funnel/subscribe`
   (champ piège anti-robot, limite de 8 envois par IP et quart d'heure).
2. L'inscrit est enregistré (Upstash Redis), un cookie `fh_funnel_sub` évite
   de lui reproposer la fenêtre promo du site.
3. Resend envoie l'email d'accès tout de suite et programme trois emails :
   puis 14 emails programmés à 9 h Paris (J+1 à J+14, plan dans
   `src/lib/funnel/sequence.ts`, programmés après la réponse HTTP via `after()`). Les textes sont
   dans `src/lib/funnel/emails.ts`.
4. La personne est redirigée vers `/formation-ia-gratuite/cours?bienvenue=1`.
5. Le lien de désinscription (signé) annule les emails restants.

Une adresse déjà active qui se réinscrit ne reçoit pas une deuxième séquence.
Une adresse désinscrite qui revient la reçoit à nouveau.

## Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Obligatoire | Rôle |
|----------|-------------|------|
| `KV_REST_API_URL` et `KV_REST_API_TOKEN` | Déjà en place | Base Upstash Redis « upstash-kv-cerise-zebra » (plan Free, région iad1), créée le 2026-09-10 depuis Vercel → Storage et reliée au projet `project-qsxe9` (Production + Preview). Les variables sont injectées automatiquement ; `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` sont aussi acceptées si la base change un jour. Sans base, tout est gardé en mémoire et disparaît au redéploiement. |
| `RESEND_API_KEY` | Déjà en place | Clé « Vercel Integration » limitée au domaine frankhoubre.com, posée dans le projet par l'intégration Resend ↔ Vercel le 2026-09-10. |
| `RESEND_FROM` | Déjà en place (Production) | Valeur posée le 2026-09-10 : `Frank Houbre <frank@frankhoubre.com>`. Les réponses vont à hello@businessdynamite.xyz (Reply-To par défaut, modifiable via `RESEND_REPLY_TO`). Le domaine frankhoubre.com est ajouté dans Resend (région Irlande) avec DKIM, MX/SPF sur `send.frankhoubre.com` et DMARC `p=none` créés dans le DNS Vercel le 2026-09-10. |
| `FUNNEL_ADMIN_TOKEN` | En place (collé par Frank le 2026-09-10) | Mot de passe du tableau de bord. Long et aléatoire. Non saisi par l'assistant (règle : jamais de secret tapé dans un formulaire). |
| `FUNNEL_SECRET` | En place (collé par Frank le 2026-09-10) | Signe les liens de désinscription et le hachage des visiteurs. À défaut, le jeton admin sert de secret. Ne plus le changer une fois des emails envoyés (les liens de désinscription déjà envoyés deviendraient invalides). |
| `RESEND_SEGMENT_ID` | Déjà en place (Production) | Segment Resend « Formation IA gratuite (frankhoubre.com) », id `479a2cd1-d19e-485f-8a2a-41d9fee30212`, créé le 2026-09-10 dans le compte Resend hellobusinessdynamite. Chaque inscrit y est ajouté comme contact (liste séparée d'imaginode). `RESEND_AUDIENCE_ID` reste accepté pour l'ancien modèle d'audiences. |
| `RESEND_WEBHOOK_SECRET` | En place (collé par Frank le 2026-09-10) | Signing secret du webhook Resend créé le 2026-09-10 (id `ba1ef214-fec1-417f-8d4d-0c4f54d3c064`, URL `https://frankhoubre.com/api/funnel/resend-webhook`, événements delivered, opened, clicked, bounced, complained). Se copie depuis resend.com → Webhooks. Sans lui, le handler répond 501 et le tableau de bord n'affiche que les emails programmés. |
| `NEXT_PUBLIC_SITE_URL` | Déjà en place | Base des liens dans les emails. |

Pour tester en local : `.env.local` avec `FUNNEL_ADMIN_TOKEN`, `FUNNEL_SECRET`, et si
vous voulez de vrais envois `RESEND_API_KEY` + `RESEND_FROM`. Sans Upstash, le
stockage mémoire suffit pour essayer. Les variables Production et Preview
se récupèrent aussi avec `vercel env pull` une fois le CLI connecté.

## Webhook Resend (optionnel, pour les ouvertures et clics)

Le webhook existe déjà dans Resend (voir tableau). Son signing secret est dans
`RESEND_WEBHOOK_SECRET` sur Vercel. Le suivi des clics
et des ouvertures a été activé sur le domaine frankhoubre.com à sa création.

## Mesure du funnel

- Vues et clics sortants partent du navigateur vers `POST /api/funnel/event`
  (sendBeacon). Les robots sont ignorés. Les visiteurs uniques sont comptés
  par un hachage quotidien IP + navigateur, sans cookie.
- Ajoutez `?utm_source=tiktok` (ou youtube, newsletter, linkedin…) aux liens
  que vous partagez : le tableau de bord attribue les inscrits à ces sources.
  Sans utm, la source est le domaine du site d'origine, ou « direct ».
- Export CSV de tous les inscrits depuis le tableau de bord.

## Vidéos Vimeo

Les trois vidéos (identifiants `1210520480`, `1210520481`, `1210520482`) sont
définies dans `src/lib/funnel/config.ts`. Si la lecture est restreinte par
domaine dans Vimeo, ajouter `frankhoubre.com` (et `localhost` pour les tests)
dans les réglages de confidentialité de chaque vidéo.

## Avant de couper systeme.io

1. Pousser le code et redéployer : toutes les variables sont en place (base Redis, clé Resend, expéditeur, segment, jeton admin, secret).
2. S'inscrire soi-même sur `/formation-ia-gratuite`, vérifier l'email d'accès,
   la redirection et le tableau de bord.
3. Exporter les contacts de systeme.io (CSV) et les importer dans l'audience
   Resend si vous voulez leur écrire ensuite.
4. Sur systeme.io, rediriger les deux anciennes pages (`/formation-ia-gratuite-video-…`
   et `/formation-ia-gratuite-cours-cinema`) vers les nouvelles URL, ou changer
   les liens dans vos bios TikTok, YouTube et LinkedIn.
