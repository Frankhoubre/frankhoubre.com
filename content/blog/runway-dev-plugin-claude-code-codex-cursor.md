---
title: "Runway Dev arrive dans Claude Code, Codex et Cursor"
date: "2026-11-05"
time: "15:50"
category: "actualite"
excerpt: "Le 2 novembre, Runway a lancé un plugin gratuit qui branche Claude Code, Codex et Cursor sur son API vidéo. Ce qu'il fait, ce qu'il ne fait pas, et pour qui."
thumbnail: "/images/blog/runway-dev-plugin-claude-code-codex-cursor/hero.webp"
---

Tu as déjà essayé de brancher une API vidéo dans un petit outil maison ? Tu passes une soirée sur la doc, tu te trompes de nom de modèle, tu découvres le prix réel après le premier rendu, et la clé API finit collée dans un fichier qu'il ne fallait pas partager. Runway veut supprimer cette soirée-là.

Le 2 novembre 2026, Runway a publié les plugins Runway Dev pour trois agents de code : Claude Code d'Anthropic, Codex d'OpenAI et Cursor. Une fois installé, ton agent lit ton compte Runway Dev (tes projets, les modèles que chaque projet a le droit d'utiliser, leurs prix, ton solde de crédits) et peut construire l'intégration à ta place. J'ai lu l'annonce et la documentation officielles ce 5 novembre. Voici ce qui est vrai, ce qui est exagéré ailleurs, et ce que ça change si tu fabriques des vidéos.

![Schéma : Claude Code, Codex ou Cursor passent par le plugin runway-api (MCP Runway Dev et skills de l'API), qui lit les projets, les modèles autorisés, les prix et le solde de crédits du compte, puis peuvent créer un Model Router, des Characters, des Recipes ou des Workflows](/images/blog/runway-dev-plugin-claude-code-codex-cursor/hero.webp)

## Ce que Runway a lancé le 2 novembre

L'annonce tient en une phrase sur [le blog de Runway](https://runway.com/news/developers/runway-dev-plugins-for-coding-agents) : « Today, we're launching Runway Dev plugins for Claude Code, Codex and Cursor. » Le plugin s'appelle `runway-api`. Il combine deux briques :

- le **MCP Runway Dev**, le connecteur que Runway avait ouvert le 2 septembre pour laisser un assistant lire un compte ;
- sept **skills**, des fiches d'instructions qui apprennent à l'agent à se servir de l'API : configuration, choix des modèles, Model Routers, Characters, Recipes, Workflows.

Concrètement, l'agent peut lister tes projets, voir quels modèles chacun autorise avec leur prix et leurs limites, consulter ton solde de crédits, puis créer un **Model Router** (un aiguillage qui choisit le modèle selon la demande), un **Character** (un avatar en temps réel), une **Recipe** ou brancher un **Workflow** publié depuis l'app Runway. Quand un appel échoue, il va lire le détail de l'erreur. Quand un Model Router choisit un modèle, il peut voir pourquoi.

L'exemple donné par Runway est parlant : tu décris la fonction voulue, « une vidéo produit pour chaque article de ta boutique », et l'agent la construit de bout en bout sans quitter l'éditeur.

## Le point que d'autres sites ont raté : le plugin ne génère rien

J'ai vu passer des récapitulatifs qui présentent le plugin comme un générateur vidéo dans le terminal, avec des noms d'outils du genre « generateVideo ». Ce n'est pas ce que dit Runway. [Le guide d'installation officiel](https://docs.dev.runwayml.com/guides/plugin/) l'écrit sans ambiguïté : le plugin ne génère pas de média, les générations tournent dans ton application, via l'API.

Autrement dit, le plugin aide ton agent à **écrire le code** qui appellera Runway. Ce n'est pas une nouvelle interface pour faire des plans. Si tu cherches à générer tes rushes à la main, l'app web reste l'outil.

Deuxième point de sécurité, et il est bienvenu : aucune clé API n'est stockée dans le plugin. La connexion passe par OAuth, dans ton navigateur habituel. La clé de ton application, elle, se crée dans ton compte Runway Dev et reste côté serveur, dans la variable `RUNWAYML_API_SECRET`.

> 💡 **Le cut de Frank :** c'est exactement la règle que je répète en formation. Une clé API ne se colle jamais dans un prompt, ni dans un fichier envoyé à un agent. Si un outil te demande de le faire, c'est un mauvais outil.

## Installer le plugin : les commandes officielles

![Commandes d'installation du plugin Runway Dev publiées par Runway : /plugin install runway-api@claude-plugins-official dans Claude Code, codex plugin marketplace add runwayml/skills puis codex plugin add runway-api@runway-dev dans Codex, /add-plugin runway-api dans le chat Agent de Cursor](/images/blog/runway-dev-plugin-claude-code-codex-cursor/commandes.webp)
*Les commandes publiées par Runway le 2 novembre 2026. Reconstitution frankhoubre.com d'après runway.com/news.*

L'installation se fait en une commande, mais la connexion demande une étape de plus. D'après la documentation :

| Agent | Installation | Connexion au compte |
|---|---|---|
| Claude Code | `/plugin install runway-api@claude-plugins-official` dans une session | `claude mcp login plugin:runway-api:runway-dev` (ou `/mcp` avant la version 2.1.186) |
| Codex | `codex plugin marketplace add runwayml/skills`, puis `codex plugin add runway-api@runway-dev` | `codex mcp login runway-dev`, qui ouvre le navigateur |
| Cursor | `/add-plugin runway-api` dans le chat Agent, ou Customize puis « Runway Dev » | OAuth, dans ton navigateur |

Un détail à connaître si tu es sur Claude : Claude Code et Claude Desktop passent par une adresse MCP dédiée, et cette version ne permet pas de créer des Characters, selon [la page de connexion du MCP](https://docs.dev.runwayml.com/guides/mcp/). Pour vérifier que tout est branché, l'outil `whoami` te dit sur quel compte tu es connecté.

## Ce que ça coûte vraiment

Le plugin est gratuit à installer. Ce qui se paie, ce sont les générations que ton application lancera ensuite, en crédits, au tarif de chaque modèle. La page [Runway Dev pour les agents de code](https://dev.runway.com/agents) affichait ce 5 novembre des exemples de tarifs : 228 crédits par seconde pour Aleph 2.0, à partir de 20 crédits par seconde pour Seedance 2.5, 13 pour Kling O3 Standard, à partir de 3,4 pour Gemini Omni 1.1 Flash.

Ces chiffres vont bouger, vérifie-les avant de lancer un lot. Mais l'écart montre déjà un point : selon le modèle que ton agent choisit, la même seconde de vidéo peut coûter plus de soixante fois plus cher. C'est là que l'accès au catalogue et aux prix depuis l'éditeur devient utile, l'agent peut te prévenir avant d'écrire un appel ruineux.

Méfie-toi des tarifs en dollars par seconde qui circulent sur certains sites de veille. Je ne les ai retrouvés sur aucune page officielle.

## Mon avis : utile pour les studios qui automatisent, pas pour tout le monde

Je vais être honnête : si tu fais un court métrage, plan par plan, ce lancement ne change rien à ta journée. Tu as besoin de regarder chaque image, de refaire, de choisir. Un agent de code n'apporte rien à ce travail-là.

En revanche, si tu produis en volume, c'est différent. Je pense aux déclinaisons de pubs, aux vidéos produit pour un catalogue, aux formats verticaux d'une même campagne. En juillet, Runway visait déjà ces usages avec [Agent Skills dans son app](/blog/runway-agent-skills-campagnes-pub-video-ia-juillet-2026). Cette fois, la même logique sort de l'app et arrive dans l'éditeur de code. Un petit studio qui a une personne un peu technique peut construire son propre outil maison en une après-midi, là où il fallait un développeur pendant une semaine.

Ça confirme aussi une tendance que je vois partout depuis l'été : les outils créatifs se branchent sur les agents via MCP. On l'a fait pour l'écriture et le storyboard avec [le MCP de ScreenWeaver dans Claude et ChatGPT](/blog/screenweaver-mcp-claude-chatgpt-scenario-storyboard). Runway le fait pour la génération. Le vrai sujet pour toi, c'est de savoir lequel de ces assistants tu laisses toucher à tes crédits.

## Ce que je ferais cette semaine

1. Si tu n'as jamais ouvert Claude Code, commence par [mon guide Claude Code pour créateurs vidéo](/blog/claude-code-createurs-video-guide). Inutile d'installer un plugin dans un outil que tu ne sais pas encore utiliser.
2. Crée un projet Runway Dev séparé pour tes essais, avec peu de crédits et seulement les modèles bon marché autorisés. Le plugin respecte ce que chaque projet permet : c'est ton garde-fou.
3. Demande d'abord à l'agent de lister les modèles et les prix de ce projet, avant de lui faire écrire quoi que ce soit.
4. Fais-lui construire une seule chose simple, par exemple une page qui transforme une photo produit en clip de 5 secondes, et relis le code avant de le lancer.

Si tu débutes et que tu veux d'abord comprendre le workflow vidéo IA de base, du découpage au montage, ma [formation IA gratuite](https://frankhoubre.com/formation-ia-gratuite) part de zéro.

## FAQ

### Qu'est-ce que le plugin Runway Dev ?

C'est une extension pour trois agents de code, Claude Code, Codex et Cursor, lancée par Runway le 2 novembre 2026. Elle associe le MCP Runway Dev, qui permet à l'agent de lire ton compte, et sept skills qui lui apprennent à utiliser l'API de Runway. L'agent voit tes projets, les modèles autorisés dans chacun avec leurs prix et leurs limites, ainsi que ton solde de crédits. Il peut ensuite créer des Model Routers, des Characters, des Recipes ou brancher des Workflows, et construire une fonction complète dans ton application sans que tu quittes l'éditeur.

### Le plugin génère-t-il des vidéos directement dans Claude Code ?

Non. La documentation officielle de Runway précise que le plugin ne génère pas de média : les générations tournent dans ton application, via l'API. Le plugin sert à aider l'agent à écrire et à tester le code qui appellera Runway, pas à produire des plans à ta place dans le terminal. Certains sites de veille ont décrit des outils de génération vidéo intégrés au plugin, mais on ne les retrouve sur aucune page officielle. Pour générer tes images et tes clips à la main, l'application web de Runway reste l'outil prévu pour ça.

### Combien coûte le plugin Runway Dev ?

Le plugin est gratuit à installer. Tu paies seulement les générations que ton application lance ensuite, en crédits, au tarif de chaque modèle. Le 5 novembre 2026, la page Runway Dev pour les agents de code affichait par exemple 228 crédits par seconde pour Aleph 2.0, à partir de 20 pour Seedance 2.5, 13 pour Kling O3 Standard et à partir de 3,4 pour Gemini Omni 1.1 Flash. Ces tarifs peuvent changer, donc vérifie la page de prix de Runway Dev avant de lancer une série de rendus.

### Faut-il donner sa clé API Runway à l'agent ?

Non, et c'est une bonne nouvelle. Aucune clé API n'est stockée dans le plugin : la connexion au compte passe par OAuth, que tu valides toi-même dans ton navigateur habituel. La clé de ton application se crée dans ton compte Runway Dev et reste côté serveur, dans une variable d'environnement nommée RUNWAYML_API_SECRET. Garde cette règle pour tous tes outils IA : une clé API ne se colle jamais dans un prompt ni dans un fichier que tu envoies à un agent, même si c'est plus rapide sur le moment.

### Comment installer le plugin dans Claude Code ?

Dans une session Claude Code, tape `/plugin install runway-api@claude-plugins-official`. Il faut ensuite connecter ton compte avec `claude mcp login plugin:runway-api:runway-dev`, ou via `/mcp` si ta version de Claude Code est antérieure à la 2.1.186. La connexion ouvre ton navigateur pour l'autorisation OAuth. Pour vérifier que tout fonctionne, demande à l'agent d'utiliser l'outil whoami, qui indique le compte connecté. Note que la version du MCP utilisée par Claude ne permet pas de créer des Characters, selon la documentation de Runway.

### Est-ce utile pour un réalisateur qui fait un court métrage IA ?

Pas vraiment, du moins pas tout de suite. Un court métrage se fabrique plan par plan, en regardant chaque image et en refaisant ce qui ne va pas, et un agent de code n'aide pas à ce travail. Le plugin devient intéressant quand tu produis en volume : déclinaisons de pubs, vidéos produit pour un catalogue, formats multiples d'une même campagne. Un petit studio avec une personne un peu technique peut alors bâtir son propre outil interne bien plus vite qu'avant. Pour un projet de fiction, mieux vaut d'abord soigner le découpage et la cohérence des personnages.
