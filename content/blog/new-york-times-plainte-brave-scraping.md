---
title: "Le New York Times attaque Brave pour scraping IA"
date: "2026-11-03"
time: "10:05"
category: "actualite"
excerpt: "Le 2 novembre, le New York Times et trois quotidiens ont porté plainte contre Brave : index de 30 milliards de pages revendu à des IA. Ce qu'on sait."
thumbnail: "/images/blog/new-york-times-plainte-brave-scraping/hero.webp"
---

Lundi 2 novembre 2026, le New York Times a déposé plainte contre Brave Software devant le tribunal fédéral de Manhattan. Le même jour, le Daily News, le Chicago Tribune et l'Orlando Sentinel ont lancé une plainte presque identique. Ils accusent l'éditeur du navigateur Brave d'avoir copié leurs articles pour bâtir un index de plus de 30 milliards de pages, puis d'en avoir vendu l'accès à des entreprises d'IA, dont Anthropic, Perplexity, Mistral, xAI et Cohere.

J'en parle ici parce que l'affaire touche tous ceux qui publient en ligne, toi compris si tu mets tes scénarios, tes making-of ou tes images sur ton site. Au cœur de la plainte, il y a un robot d'indexation qui ne dit pas son nom, et qu'on ne peut donc pas bloquer seul. Trois jours après l'annonce d'un signal commun contre l'entraînement IA, le timing est cruel.

![Un matin de novembre sur les marches en granit d'un tribunal fédéral de Manhattan, une assistante juridique en manteau bleu marine monte deux cartons d'archives remplis de journaux imprimés pendant qu'un avocat en manteau camel lui tient la lourde porte en bronze](/images/blog/new-york-times-plainte-brave-scraping/hero.webp)

## Ce que disent les deux plaintes

Les deux dossiers sont enregistrés au tribunal fédéral du district sud de New York : 1:26-cv-09549 pour le New York Times, 1:26-cv-09554 pour les trois autres journaux. [TechCrunch](https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping/) a sorti l'info le 2 novembre en fin de journée (heure de Paris), [heise](https://www.heise.de/en/news/Copyright-infringement-New-York-Times-sues-Brave-Software-11508658.html) l'a reprise le soir même, et le site spécialisé [PPC Land](https://ppc.land/new-york-times-and-three-papers-sue-brave-over-ai-answers-and-ad-blocking/) a publié le 3 novembre une lecture détaillée des deux textes.

Le Times décrit Brave comme un « fournisseur, revendeur et distributeur de contenus volés » pour les entreprises d'IA. Les reproches visent quatre choses :

- L'index Brave, plus de 30 milliards de pages selon Brave lui-même, construit avec un robot qui n'affiche pas d'identifiant propre.
- L'API Brave Search, vendue à des entreprises d'IA. Les cinq clients cités (Anthropic, Perplexity, Mistral, xAI, Cohere) ne sont pas poursuivis.
- Ask Brave, la fonction de réponses IA du moteur, qui aurait recraché de longs passages d'articles.
- Le navigateur, avec un filtre qui contourne les paywalls, et le blocage des pubs des journaux pendant que Brave vend les siennes.

D'après PPC Land, chaque plainte compte cinq chefs : contrefaçon directe, contrefaçon par contribution, contrefaçon par fait d'autrui, contournement d'une mesure technique au sens du DMCA (pour le filtre anti-paywall) et enrichissement sans cause au titre du droit de l'État de New York. Les journaux demandent une interdiction, des dommages et intérêts et un procès devant jury. Aucun montant n'est chiffré.

![Article TechCrunch du 2 novembre 2026 signé Rebecca Bellan : le New York Times et d'autres médias poursuivent Brave, accusé d'avoir constitué un index de plus de 30 milliards de pages avec un robot non identifié](/images/blog/new-york-times-plainte-brave-scraping/capture-techcrunch-plainte-2026-11-03.webp)
*L'article de TechCrunch qui a sorti l'affaire. Source : techcrunch.com, capture du 3 novembre 2026.*

## Le détail qui me gêne : un robot sans nom

La page d'aide officielle de Brave, que j'ai relue ce matin, l'écrit noir sur blanc : le crawler de Brave Search « n'affiche pas d'user agent différencié ». Brave justifie ça par la crainte d'être écarté par les sites qui n'autorisent que Google. En échange, il promet de ne jamais explorer une page que Googlebot n'a pas le droit d'explorer.

Conséquence pratique : si tu veux fermer ta porte à Brave dans ton robots.txt, tu dois la fermer à Google aussi. Aucun créateur ne fera ça, tu disparaîtrais de la recherche. Les plaintes en tirent l'argument que bloquer Brave est « impossible » et que ce choix technique prouve une contrefaçon volontaire.

![Page d'aide Brave Search Crawler : le robot n'affiche pas d'user agent différencié, ne visite pas ce que Googlebot ne peut pas visiter, et robots.txt ne sert pas à empêcher l'indexation](/images/blog/new-york-times-plainte-brave-scraping/capture-aide-crawler-brave-2026-11-03.webp)
*La page d'aide officielle du robot de Brave. Source : search.brave.com/help/brave-search-crawler, capture du 3 novembre 2026.*

Même page, autre phrase : chez Brave, robots.txt ne sert pas à empêcher une page d'être indexée. Pour la retirer des résultats, il faut une balise noindex. Sauf que noindex retire aussi la page de Google, donc on revient au même point.

> 💡 **Le cut de Frank :** ouvre ton robots.txt ce soir et regarde ce qu'il dit vraiment. Si tu bloques seulement GPTBot ou ClaudeBot, tu te crois sans doute tranquille. Un index peut très bien passer par un autre chemin. Pose-toi plutôt la question de ce qu'on peut lire sur ton site sans compte.

## Entraînement ou réponse en temps réel

Le 30 octobre, Google, Microsoft, OpenAI et Anthropic ont promis de respecter un même signal contre l'entraînement IA dans le robots.txt. J'en ai fait [le décryptage complet ici](/blog/signal-commun-entrainement-ia-robots-txt). Brave ne fait pas partie des quatre.

La plainte vise surtout ce qui se passe après l'entraînement. Une API comme celle de Brave sert aussi à nourrir un assistant en direct : l'utilisateur pose une question, le modèle va chercher des pages fraîches et répond avec. Microsoft appelle ça le grounding, et c'était déjà le point faible du signal du 30 octobre, qui ne couvre que l'entraînement.

Les journaux disent avoir testé cette voie. Selon le compte rendu de PPC Land, une requête sur l'API de Brave a renvoyé 1 291 mots sur 1 295 d'un article du Times, mot pour mot. Ask Brave aurait restitué environ 87 % d'un article payant. Ce sont des affirmations des plaignants, que Brave n'a pas encore contestées devant le tribunal.

| | Signal commun du 30 octobre | Plainte contre Brave du 2 novembre |
|---|---|---|
| Qui | Google, Microsoft, OpenAI, Anthropic | NYT, Daily News, Chicago Tribune, Orlando Sentinel |
| Ce qui est visé | L'entraînement des modèles | Index, API, réponses IA, anti-paywall, pubs |
| Outil du créateur | Une ligne dans robots.txt | Aucun : le robot n'a pas de nom propre |
| Nature | Engagement volontaire | Procédure judiciaire, issue inconnue |

## Ce qu'on ne sait pas encore

Brave n'avait pas répondu aux demandes de TechCrunch au moment de la publication. Sa défense reste inconnue. On peut imaginer qu'il invoquera le fair use américain, comme OpenAI face au Times, mais c'est une supposition de ma part.

Le Times affirme avoir écrit deux fois au patron de Brave, Brendan Eich, le 11 août 2025 puis le 13 avril 2026, sans réponse. Un porte-parole du journal a déclaré à Reuters, repris par heise, que Brave « a ignoré le droit d'auteur actuel ». C'est la version d'une seule partie.

Le chiffre de « plus de 100 millions de dollars » qui circule sur certains sites mérite aussi de la prudence. D'après PPC Land, il correspond à une estimation du chiffre d'affaires total de Brave en 2025, sans lien établi avec l'index.

Et le calendrier, personne ne le connaît. Le Times poursuit OpenAI et Microsoft depuis fin 2023 et l'affaire n'est toujours pas jugée sur le fond.

## Ce que ça change pour toi, créateur

Si tu es cinéaste ou illustrateur et que tu publies ton travail, ce que tu mets en accès libre peut finir dans un index, puis dans une réponse d'assistant, sans qu'aucune règle de robots.txt ne l'arrête. Les engagements des grands labos ne couvrent que ceux qui les signent.

Ce que je ferais cette semaine :

1. Relire ton robots.txt et y ajouter le signal `__usage_ai-training` si tu refuses l'entraînement. Il ne bloquera pas Brave, mais il pèsera auprès des quatre signataires.
2. Garder les fichiers de travail (scénarios complets, character sheets en haute définition, rushes) derrière un compte ou un lien privé, et publier des extraits.
3. Dater et archiver tes publications. En cas de litige, tu devras prouver que l'œuvre est la tienne et quand tu l'as sortie.

Si tu travailles avec des images générées, les règles de propriété restent compliquées. On les a posées dans [le guide sur les droits d'auteur des images IA](/blog/droits-auteur-images-generees-ia). Pour une adaptation de livre ou de BD, le point droits est dans [la méthode pour adapter un livre en film IA](/blog/adapter-livre-film-ia-methode-droits). Et si tu débutes, ma [formation IA gratuite](https://frankhoubre.com/formation-ia-gratuite) reprend le workflow de base, du découpage au montage.

## FAQ

### Qui poursuit Brave et où ?

Le New York Times a déposé une plainte le 2 novembre 2026 devant le tribunal fédéral du district sud de New York, à Manhattan (dossier 1:26-cv-09549). Le même jour, le Daily News, le Chicago Tribune et l'Orlando Sentinel ont déposé une plainte séparée mais très proche (dossier 1:26-cv-09554). D'après PPC Land, les deux plaintes sont portées par le même avocat, Steven Lieberman, du cabinet Rothwell Figg. Anthropic, Perplexity, Mistral, xAI et Cohere sont cités comme clients de l'API de Brave, mais aucune de ces entreprises n'est poursuivie dans ces deux dossiers.

### Que reproche exactement le New York Times à Brave ?

Le Times accuse Brave d'avoir copié ses articles pour construire un index de plus de 30 milliards de pages, puis de vendre l'accès à cet index à des entreprises d'IA via l'API Brave Search. La plainte vise aussi Ask Brave, la fonction de réponses IA, qui aurait reproduit de longs passages d'articles payants. Elle attaque enfin deux fonctions du navigateur : un filtre qui contourne les paywalls et le remplacement des publicités des journaux par celles de Brave. Le journal parle de « fournisseur, revendeur et distributeur de contenus volés ».

### Pourquoi ne peut-on pas bloquer le robot de Brave ?

La page d'aide officielle de Brave Search indique que son crawler n'affiche pas d'user agent différencié. Brave explique vouloir éviter que les sites qui n'acceptent que Google ne le bloquent. Il promet en contrepartie de ne pas explorer ce que Googlebot n'a pas le droit d'explorer. Résultat : pour fermer la porte à Brave dans robots.txt, il faut la fermer aussi à Google, ce qui revient à disparaître de la recherche. Les plaignants y voient la preuve d'une contrefaçon volontaire. Brave n'a pas encore répondu sur ce point devant le tribunal.

### Quel rapport avec le signal robots.txt contre l'entraînement IA ?

Le 30 octobre 2026, Google, Microsoft, OpenAI et Anthropic ont promis de respecter une même ligne de robots.txt, `__usage_ai-training`, pour savoir si un site refuse l'entraînement de leurs modèles. Brave ne fait pas partie des signataires. Et ce signal ne couvre que l'entraînement, pas l'usage en temps réel des pages pour répondre à une question, ce que Microsoft appelle le grounding. La plainte contre Brave porte justement en grande partie sur cet usage en temps réel, via l'API et Ask Brave.

### Que demandent les journaux ?

Ils demandent au tribunal d'interdire les pratiques visées, ce qui pourrait toucher l'index, l'API, Ask Brave, le filtre anti-paywall et le remplacement des pubs. Ils réclament aussi des dommages et intérêts, la restitution des profits et un procès devant jury. Aucun montant global n'est chiffré dans les plaintes. Le chiffre de 100 millions de dollars repris par certains sites correspond, selon PPC Land, à une estimation du chiffre d'affaires total de Brave en 2025, sans lien démontré avec l'index. Il vaut mieux ne pas le citer comme un préjudice.

### Est-ce que ça change quelque chose pour un créateur français ?

La procédure se déroule aux États-Unis et son issue prendra du temps. Le Times poursuit OpenAI et Microsoft depuis fin 2023 sans jugement sur le fond. Pour un créateur en France, l'effet immédiat est surtout pratique : ce que tu publies en accès libre peut nourrir des index et des assistants que tu ne contrôles pas. Ajoute le signal `__usage_ai-training` à ton robots.txt si tu refuses l'entraînement, garde tes fichiers de travail derrière un accès privé, et date tes publications pour pouvoir prouver ton antériorité en cas de litige.
