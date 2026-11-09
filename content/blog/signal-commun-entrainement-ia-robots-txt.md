---
title: "Entraînement IA : un robots.txt commun chez OpenAI et Google"
date: "2026-11-01"
category: "actualite"
excerpt: "Le 30 octobre, OpenAI, Google, Microsoft et Anthropic ont promis de respecter un même signal robots.txt contre l'entraînement IA. Ce que ça change."
thumbnail: "/images/blog/signal-commun-entrainement-ia-robots-txt/hero.webp"
---

Le vendredi 30 octobre 2026, quatre entreprises qui entraînent les plus gros modèles du marché ont dit la même chose le même jour. Google, Microsoft, OpenAI et Anthropic vont respecter un signal commun dans le fichier robots.txt pour savoir si un site accepte, ou refuse, que ses pages servent à entraîner une IA générative. Une ligne, `User-Agent: __usage_ai-training`, au lieu d'une règle par robot.

Si tu publies tes images, tes films, tes scénarios ou tes making-of sur ton propre site, ça te concerne directement. Jusqu'ici, il fallait connaître le nom de chaque crawler (GPTBot, Google-Extended, ClaudeBot...) et espérer ne pas en oublier un. Le nouveau signal veut régler ça. Il ne règle pas tout, et les dates de mise en route ne sont pas les mêmes chez les quatre.

![Dans une serre vitrée transformée en archive de photographe, à midi, une photographe aux cheveux gris en veste de travail indigo ferme à clé un tiroir de meuble à plans rempli de tirages noir et blanc, tandis que le tiroir du dessous reste ouvert sur des planches contact](/images/blog/signal-commun-entrainement-ia-robots-txt/hero.webp)

## Ce qui a été annoncé le 30 octobre

- **Google**, sur son [blog Search Central](https://developers.google.com/search/blog/2026/10/ai-training-control), signé John Mueller : Google veut prendre en charge ce « policy token » partagé, avec un objectif fixé à 2027.
- **Microsoft**, sur le [blog Bing](https://blogs.bing.com/search/2026/10/your-content-your-choice-clearer-preferences-for-training-and-grounding/), signé Krishna Madhavan : les nouvelles préférences entrent en vigueur le 1er février 2027.
- **OpenAI**, dans un billet intitulé [Making it easier for websites to express AI training preferences](https://openai.com/index/helping-websites-express-ai-training-preferences/) : mise en place visée « dans les prochains mois », détails promis plus tard.
- **Anthropic**, par la voix de Kevin Kelley, auteur du brouillon technique publié à l'IETF le même jour. Dans son [message à la liste de travail](https://mailarchive.ietf.org/arch/msg/ai-control/mddjatOxSR0h6GmLRBWlc839c7w/) envoyé à 15 h 39 UTC, il écrit qu'Anthropic a « déjà commencé à implémenter » le support.

Le texte de référence s'appelle [draft-kelley-aipref-training-preference-signal-00](https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/). C'est un brouillon individuel : l'IETF ne l'a pas validé, il n'a aucun statut officiel et il expire le 3 mai 2027 s'il n'est pas révisé. Il s'appuie sur le vocabulaire du groupe de travail AIPREF, qui travaille sur une définition commune de « l'entraînement IA ».

![Billet du blog Google Search Central du 30 octobre 2026 annonçant le support d'un contrôle partagé de l'entraînement IA dans robots.txt](/images/blog/signal-commun-entrainement-ia-robots-txt/capture-google-search-central-2026-11-01.webp)
*Capture du billet Google Search Central « Supporting a shared AI training control for websites », daté du 30 octobre 2026. Source : developers.google.com, capture du 1er novembre 2026.*

## Comment le signal marche, concrètement

Aucune nouvelle directive à apprendre. On écrit un groupe robots.txt ordinaire, sauf que la ligne `User-Agent` ne désigne pas un robot : elle désigne un usage.

Pour refuser l'entraînement sur tout ton site :

```
User-Agent: __usage_ai-training
Disallow: /
```

Pour tout refuser sauf ton dossier presse, l'exemple que donne le brouillon lui-même :

```
User-Agent: __usage_ai-training
Disallow: /
Allow: /press-kit/
```

Premier piège : le joker ne compte pas. Un `User-Agent: *` avec `Disallow: /` n'exprime aucune préférence d'entraînement au sens de ce signal, il faut nommer `__usage_ai-training` en toutes lettres. Et si ton fichier ne contient aucun groupe à ce nom, tu n'as rien exprimé du tout (chez Microsoft, la valeur par défaut est « Allow »).

Le signal dit ce que tu acceptes qu'on fasse de tes pages, il laisse les robots passer. Pour bloquer l'exploration elle-même, tu vises toujours le robot par son nom, comme avant.

> 💡 **Le cut de Frank :** le cas du dossier presse est le plus intéressant pour un créateur. Tu peux fermer ton portfolio, tes planches et tes rushes à l'entraînement, et laisser ouverts ta bio, ton affiche et ton synopsis. Ce sont justement les pages que tu veux voir citées quand quelqu'un demande à une IA qui a réalisé ton film.

## Les quatre entreprises, côte à côte

Même signal, quatre calendriers. Le tableau reprend ce que chaque annonce dit, lu le 1er novembre 2026.

| Entreprise | Date de prise en charge annoncée | Contrôle maison qui reste en place | Ce qui change en plus |
|---|---|---|---|
| Google | 2027, sans jour précis | Google-Extended (depuis 2023) | Refuser via le signal commun, sans mentionner Google-Extended, vaudra un refus de Google-Extended |
| Microsoft | 1er février 2027 | Bingbot pour l'exploration | Préférence « AI Grounding » séparée, page par page ; NoArchive et NoCache ne comptent plus pour l'IA après le 1er mars 2027 |
| OpenAI | « Dans les prochains mois » | Contrôles robots.txt existants | Le signal vise l'entraînement des modèles fondation génératifs |
| Anthropic | Implémentation commencée, sans date | ClaudeBot, Claude-User, Claude-SearchBot | Auteur du brouillon IETF |

Google ajoute un point qui compte pour les éditeurs européens : selon son billet, la démarche est cohérente avec le Code de bonnes pratiques de l'AI Act pour les fournisseurs de modèles d'IA à usage général, qui reconnaît robots.txt comme moyen principal d'exprimer une préférence lisible par une machine. Si tu suis déjà les obligations de [marquage des vidéos IA au titre de l'article 50](/blog/eu-ai-act-article-50-marquage-video-ia-aout-2026), c'est la même logique réglementaire qui avance, côté données cette fois.

## Entraînement et grounding : la distinction de Microsoft

Microsoft sépare deux usages que les autres laissent flous.

L'**entraînement** (AI Training), c'est le fait de modifier les paramètres d'un modèle avec ton contenu. Ça se règle dans robots.txt avec le signal commun, ou page par page.

Le **grounding** (AI Grounding), c'est le fait d'utiliser ta page pour nourrir une réponse générée, comme une source qu'on cite dans Copilot. Ça se règle uniquement page par page, avec trois options : Allow, DisallowExtended (seulement les produits Microsoft, pas les services revendus à des tiers) et Disallow.

![Extrait du blog Bing du 30 octobre 2026 détaillant les options AI Grounding et l'exemple robots.txt avec le signal __usage_ai-training](/images/blog/signal-commun-entrainement-ia-robots-txt/capture-bing-blog-2026-11-01.webp)
*Capture du billet Bing « Your content, your choice: clearer preferences for training and grounding », publié le 30 octobre 2026, section sur la publication des réglages avant le 1er mars 2027. Source : blogs.bing.com, capture du 1er novembre 2026.*

Microsoft le dit noir sur blanc : refuser le grounding réduit fortement ta visibilité dans ses expériences IA, et aucune option ne garantit ni trafic, ni présence, ni rémunération. La place dans les résultats Bing classiques, elle, ne bouge pas.

Si tu es réalisateur ou illustrateur, tu peux donc refuser qu'on apprenne de ton style tout en acceptant d'être cité comme source. Chez Google, le billet rappelle que les sites qui autorisent Google-Extended restent éligibles à l'apparition et aux clics via le grounding dans les apps Gemini.

## Ce que le signal ne fera pas

OpenAI parle d'un engagement volontaire, et le brouillon renvoie à la RFC 9309, celle de robots.txt, qui n'a jamais été un verrou. Un scraper qui se moque de robots.txt se moquera aussi de ce signal. Et un robot sans nom propre y échappe d'office : c'est tout le sujet de [la plainte du New York Times contre Brave](/blog/new-york-times-plainte-brave-scraping), déposée le 2 novembre.

Rien ne bouge non plus pour le passé. Les données déjà collectées et les modèles déjà entraînés restent ce qu'ils sont : tu exprimes une préférence pour la suite, point.

Dernière limite, celle qui fâche le plus les illustrateurs : ton robots.txt vaut pour ton domaine, et seulement lui. Une image reprise sur Pinterest, un forum ou un agrégateur dépend du robots.txt de ces sites-là. Pour la question des droits eux-mêmes, notre guide sur les [droits d'auteur des images générées par IA](/blog/droits-auteur-images-generees-ia) reste la bonne porte d'entrée.

*Mise à jour du 9 novembre 2026 : Universal a ajouté au générique de The Odyssey une mention qui interdit d'entraîner une IA sur le film, et Christopher Nolan s'en félicite. Je montre dans [mon article sur cette mention](/blog/nolan-odyssey-mention-anti-entrainement-ia) pourquoi elle doit être doublée d'un signal lisible par machine, comme celui-ci.*

## Ce que je ferais sur mon site cette semaine

Rien ne presse côté technique : aucun des quatre ne lit encore le signal en production, sauf peut-être Anthropic, qui n'a pas donné de date. Mais ajouter le groupe maintenant ne coûte rien et ne casse rien, puisqu'un robot qui ne le connaît pas l'ignore.

1. Fais l'inventaire de ce que ton site expose : portfolio, galeries haute définition, scripts, making-of, pages presse.
2. Décide dossier par dossier. Ce que tu veux protéger de l'entraînement passe en `Disallow`, ce que tu veux voir repris (bio, synopsis, affiche) reste en `Allow`.
3. Ajoute le groupe `__usage_ai-training` à ton robots.txt, sans toucher aux règles qui visent déjà GPTBot ou Google-Extended : elles continuent de fonctionner.
4. Si tu tiens à ta place dans Copilot, regarde les balises de grounding de Microsoft avant le 1er mars 2027.
5. Note dans un coin la date du 1er février 2027 et vérifie à ce moment-là ce que Google et OpenAI ont réellement mis en route.

Si tu vends tes images ou tes vidéos, croise ça avec ce qu'on explique sur [la vente d'images générées par IA et sa légalité](/blog/vendre-images-generees-ia-legalite) : tes licences restent les mêmes, et ton robots.txt garde une trace datée de ce que tu acceptes.

Et si tu débutes et que tout ce jargon robots.txt te paraît loin de la création, ma [formation IA gratuite](https://frankhoubre.com/formation-ia-gratuite) reprend les bases du workflow avant d'aller sur ces questions de diffusion.

## FAQ

### Qu'est-ce que le signal __usage_ai-training ?

C'est un « policy token », un nom spécial qu'on place sur la ligne User-Agent d'un groupe robots.txt. Au lieu de désigner un robot précis, il désigne un usage : l'entraînement de modèles d'IA générative. Les règles Allow et Disallow qui suivent indiquent, chemin par chemin, si tu acceptes ou refuses que ton contenu serve à entraîner un modèle. Le mécanisme vient d'un brouillon déposé à l'IETF le 30 octobre 2026 par Kevin Kelley, d'Anthropic. Google, Microsoft, OpenAI et Anthropic ont annoncé le même jour qu'ils le respecteraient, chacun selon son propre calendrier, entre fin 2026 et 2027.

### Est-ce que ça marche dès aujourd'hui ?

Pas vraiment, ou pas partout. Microsoft annonce une prise en compte à partir du 1er février 2027, au fil de l'exploration de ses robots. Google vise 2027 sans jour précis. OpenAI parle des « prochains mois » et promet des détails plus tard. Anthropic dit avoir commencé l'implémentation sans donner de date. Tu peux ajouter le groupe dès maintenant : il ne casse rien, car un robot qui ne connaît pas ce nom l'ignore. Mais pendant quelques mois, ce sont toujours les règles par robot (GPTBot, Google-Extended, ClaudeBot) qui font foi chez ceux qui les lisent.

### Faut-il supprimer les règles GPTBot et Google-Extended ?

Non. Les quatre entreprises le disent : le signal commun s'ajoute aux contrôles existants, il ne les remplace pas. Google précise même qu'une règle Google-Extended explicite garde la main. Si ton fichier refuse l'entraînement via le signal commun sans mentionner Google-Extended, Google traitera ça comme un refus de Google-Extended. Si tu autorises Google-Extended explicitement, c'est ton choix spécifique qui l'emporte. Le brouillon IETF prévoit d'ailleurs que les expressions précises priment sur les générales. Garde donc tes règles actuelles, et ajoute le nouveau groupe par-dessus pour couvrir les acteurs que tu n'as pas listés.

### Un User-Agent: * avec Disallow: / suffit-il ?

Non, et c'est le piège le plus probable. Le brouillon précise que les groupes joker ne s'appliquent pas au policy token. Un `User-Agent: *` suivi de `Disallow: /` bloque l'exploration par les robots qui respectent robots.txt, ce qui fait aussi disparaître ton site de Google et de Bing. En revanche, il n'exprime aucune préférence d'entraînement au sens du nouveau signal. Pour refuser l'entraînement tout en restant visible dans les moteurs, il faut un groupe dédié qui nomme `__usage_ai-training`, et laisser tes autres règles d'exploration telles qu'elles sont.

### Est-ce que refuser l'entraînement me fait perdre du référencement ?

Pas dans la recherche classique. Microsoft écrit que l'éligibilité aux résultats Bing traditionnels ne change pas, quelle que soit ta préférence d'entraînement ou de grounding. Google présente son signal comme un contrôle d'entraînement, distinct de la recherche. La vraie question concerne les réponses générées : chez Microsoft, refuser le grounding réduit fortement ta visibilité dans Copilot et les autres expériences IA, et Google rappelle que les sites qui autorisent Google-Extended restent éligibles au grounding dans Gemini. Refuser l'entraînement et refuser d'être cité sont deux décisions séparées, qu'il vaut mieux prendre l'une après l'autre.

### Mes images déjà aspirées vont-elles sortir des modèles ?

Non. Le signal exprime une préférence pour les collectes à venir. Il ne retire rien des jeux de données déjà constitués ni des modèles déjà entraînés, et aucune des annonces du 30 octobre ne promet le contraire. Le brouillon précise que la préférence qui compte est celle du robots.txt en vigueur au moment où le contenu a été récupéré. Si une image a été collectée en 2025 sans aucune restriction, ton refus de 2026 ne la concerne pas. Pour un retrait ciblé, il faut passer par les procédures propres à chaque entreprise ou par la voie juridique, ce qui est une autre histoire.

### Le signal protège-t-il mes images publiées sur Instagram ou YouTube ?

Non. Un robots.txt ne vaut que pour le domaine qui l'héberge. Tes images publiées sur Instagram, YouTube, Behance ou ArtStation dépendent des règles et du robots.txt de ces plateformes, et de leurs conditions d'utilisation. Le signal commun sert d'abord aux créateurs qui ont leur propre site : portfolio, site de film, blog. C'est un argument de plus pour garder une vitrine à toi, où tu décides de ce qui est ouvert ou fermé, plutôt que de tout confier aux réseaux. Les copies de ton travail reprises sur des sites tiers échappent aussi à ton fichier.

### Le brouillon peut-il encore changer ?

Oui. C'est un brouillon individuel, déposé le 30 octobre 2026, qui n'est pas validé par l'IETF et n'a aucun statut officiel. Il expire le 3 mai 2027 s'il n'est pas révisé, et la définition de « l'entraînement IA » qu'il reprend vient d'un autre brouillon du groupe AIPREF, lui aussi en discussion. Microsoft écrit d'ailleurs que le standard n'est pas finalisé. Le nom du token et sa syntaxe de base ont de bonnes chances de tenir, puisque quatre gros acteurs s'y sont engagés publiquement. Les détails, eux, peuvent bouger : relis les annonces officielles avant février 2027.
