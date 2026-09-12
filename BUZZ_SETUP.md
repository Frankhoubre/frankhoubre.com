# Tunnel payant « Viral AI videos » (7 $, Stripe)

Deuxième tunnel du site, en anglais uniquement : la méthode et le prompt
exacts des reels IA de Frank (compte Instagram frank.houbre.ia, vidéo du
hamac, 6 millions de vues en une nuit), vendus 7 $ en paiement unique.
Tout ce qui a servi à produire les reels est sur Imaginode, la page y renvoie.

| Page | Rôle |
|------|------|
| `/en/viral-ai-videos` | Page de vente. Indexée (Product + Offer en JSON-LD). |
| `/en/viral-ai-videos/access` | La méthode, le prompt, les réglages, la checklist. Réservée aux acheteurs (lien signé ou cookie), jamais indexée. |
| `/admin/buzz` | Ventes, entonnoir, sources, acheteurs. Même jeton que `/admin/funnel`. |

## Avant la mise en vente : remplir la méthode

Le contenu vit dans `src/lib/buzz/content.ts`. Tous les passages entre
doubles crochets `[[…]]` de la partie `access` attendent les vrais détails
de la vidéo du hamac :

- l'idée de départ en une phrase ;
- le modèle image, le modèle vidéo, la durée, la résolution, le nombre
  d'essais ;
- le son ou la musique et la façon de l'ajouter ;
- les détails de montage, l'heure de publication, la légende, la première
  heure ;
- **le prompt exact** (`access.prompt`) ;
- un élément de checklist propre à la méthode.

Tant qu'il reste un `[[`, `isBuzzOfferReady()` renvoie `false` : le bouton
de paiement affiche « Opening soon » et l'API refuse d'ouvrir un paiement.
Le tableau de bord `/admin/buzz` montre l'état (« Méthode et prompt
remplis »). Rien n'est vendu tant que le contenu n'est pas celui de Frank.

Visuel facultatif : déposer une image de la vidéo dans
`public/images/buzz/hammock.jpg` (format vertical). Elle apparaît dans le
hero et sert d'image de partage.

## Ce qui se passe à l'achat

1. Le bouton appelle `POST /api/buzz/checkout`, qui ouvre une session Stripe
   Checkout (mode paiement, 7 $ USD, codes promo autorisés) et renvoie
   l'acheteur sur la page de paiement hébergée par Stripe. Le site ne voit
   jamais la carte.
2. Après paiement, Stripe renvoie sur `GET /api/buzz/access?session_id=…`.
   L'API vérifie la session chez Stripe (`payment_status = paid`), livre si
   ce n'est pas déjà fait, pose le cookie `fh_buzz_access` et ouvre
   `/en/viral-ai-videos/access?t=<jeton>&welcome=1`.
3. Le webhook Stripe (`POST /api/buzz/webhook`, événements
   `checkout.session.completed` et `checkout.session.async_payment_succeeded`)
   fait la même livraison si l'acheteur ferme la page avant le retour. La
   livraison est idempotente sur l'identifiant de session : jamais deux
   emails pour un même achat.
4. Livraison = enregistrement de l'achat (Upstash, clés `buzz:*`) + email
   Resend avec le lien personnel permanent (jeton HMAC signé avec
   `FUNNEL_SECRET`, sans expiration) + compteur `buzz_purchase`.
5. « Lien perdu » : `POST /api/buzz/resend-access` renvoie l'email si
   l'adresse correspond à un achat (réponse identique sinon, 5 essais par
   quart d'heure et par IP).

## Variables d'environnement (Vercel → Settings → Environment Variables)

| Variable | Obligatoire | Rôle |
|----------|-------------|------|
| `STRIPE_SECRET_KEY` | Oui | Clé secrète Stripe (`sk_live_…` en production, `sk_test_…` en Preview/local). Dashboard Stripe → Développeurs → Clés API. Sans elle, le bouton reste désactivé. |
| `STRIPE_WEBHOOK_SECRET` | Oui en production | Signing secret du webhook à créer dans Stripe → Développeurs → Webhooks : URL `https://frankhoubre.com/api/buzz/webhook`, événements `checkout.session.completed` et `checkout.session.async_payment_succeeded`. Sans lui, le handler répond 501 ; la livraison passe alors uniquement par le retour de paiement. |
| `BUZZ_STRIPE_PRICE_ID` | Non | Identifiant d'un prix créé dans Stripe (`price_…`) si vous préférez gérer le tarif depuis le dashboard. Sinon le prix est déclaré à la volée (7,00 USD) depuis `src/lib/buzz/config.ts`. |
| `NEXT_PUBLIC_IMAGINODE_URL` | Non | Lien Imaginode (lien de campagne ou d'affiliation). Défaut : `https://imaginode.ai/`. |
| `RESEND_API_KEY`, `RESEND_FROM` | Déjà en place | Email de livraison (même expéditeur que la formation gratuite). |
| `FUNNEL_SECRET` (ou `FUNNEL_ADMIN_TOKEN`) | Déjà en place | Signe les liens d'accès. Ne plus le changer une fois des liens envoyés. |
| `FUNNEL_ADMIN_TOKEN` | Déjà en place | Accès à `/admin/buzz` (connexion sur `/admin/funnel`). |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | Déjà en place | Base Upstash. Sans base, stockage mémoire (achats perdus au redéploiement, mais les liens signés restent valides). |

Test en local : `STRIPE_SECRET_KEY=sk_test_…` dans `.env.local`, carte de
test `4242 4242 4242 4242`. Pour le webhook en local :
`stripe listen --forward-to localhost:3000/api/buzz/webhook` puis copier le
secret `whsec_…` dans `STRIPE_WEBHOOK_SECRET`.

## Mesure

- Vues et clics sortants (Instagram, Imaginode) partent du navigateur vers
  `POST /api/buzz/event` (sendBeacon, robots ignorés, visiteurs uniques par
  hachage quotidien sans cookie).
- `buzz_checkout` et `buzz_purchase` sont comptés côté serveur avec la
  source (`utm_source` ou domaine du referrer). Ajoutez `?utm_source=instagram`
  aux liens en bio pour attribuer les ventes.
- Les métadonnées de la session Stripe gardent aussi `source`, `utmSource`,
  `utmMedium`, `utmCampaign` : visibles dans le dashboard Stripe.

## Légal

Contenu numérique livré immédiatement : la page de vente indique que le
paiement vaut demande d'accès immédiat et renonciation au délai de
rétractation (article L221-28 du Code de la consommation). Le pied de page
du tunnel renvoie aux mentions légales et à la politique de confidentialité
(en français, pas encore de version EN sur cette branche). Stripe émet le
reçu par email à l'acheteur.

## Checklist de lancement

1. Remplir `src/lib/buzz/content.ts` (prompt, modèles, réglages, chiffres).
2. Déposer `public/images/buzz/hammock.jpg` (facultatif).
3. Poser `STRIPE_SECRET_KEY` (live) et créer le webhook, poser
   `STRIPE_WEBHOOK_SECRET`. Redéployer.
4. Acheter soi-même en mode test, vérifier l'email, la page d'accès, le
   lien perdu, puis `/admin/buzz`.
5. Mettre le lien `https://frankhoubre.com/en/viral-ai-videos?utm_source=instagram`
   en bio Instagram.
