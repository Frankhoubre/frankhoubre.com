---
title: "Créer un SaaS créatif : les leçons de ScreenWeaver"
date: "2026-09-24"
category: "business"
excerpt: "Huit mois de code, deux produits en production, une date ratée. Ce que construire un SaaS créatif m'a appris sur l'argent, le rythme et les promesses."
thumbnail: "/images/blog/screenweaver-lecons-saas-creatif/hero.webp"
metaTitle: "Créer un SaaS créatif : les leçons de ScreenWeaver"
metaDescription: "REX complet sur la construction de ScreenWeaver et d'Imaginode : choix techniques, économie unitaire, offre gratuite, dates ratées et rythme réel."
tags: ["créer saas créatif", "screenweaver", "imaginode", "build in public", "saas ia"]
author: "Frank Houbre"
---

# Créer un SaaS créatif : les leçons de ScreenWeaver

En juin 2026, j'ai poussé 322 commits sur ScreenWeaver. En avril, deux mois plus tôt, j'en avais poussé 20. Voilà à quoi ressemble vraiment la construction d'un logiciel quand ton métier principal est de faire des films.

J'ai déjà raconté [pourquoi j'ai construit cet outil d'écriture](/blog/screenweaver-pourquoi-outil-ecriture) : la vision produit, le problème de fragmentation entre le scénario et l'image. Restent les mois creux, l'arithmétique des marges, les dates annoncées qui glissent, et la question de savoir ce que « construit en solo » veut dire quand on encaisse de l'argent.

Les chiffres qui suivent sortent de deux dépôts Git et de deux sites en production, relevés le 24 septembre 2026. Rien n'est arrondi pour faire joli.

![Grenier aménagé en bureau au crépuscule, un homme sur un escabeau fait passer un câble réseau le long d'une poutre, ordinateur portable ouvert sur l'établi et planches de storyboard punaisées au mur](/images/blog/screenweaver-lecons-saas-creatif/hero.webp)

## Le premier piège, c'est de préférer le code au film

Fabriquer un outil est beaucoup plus confortable que fabriquer une œuvre. Un bug a une solution, un test passe ou ne passe pas, un déploiement vert donne une petite récompense tous les soirs. Une scène qui ne fonctionne pas ne te donne aucun retour de ce type. Elle reste là, et il faut la reprendre sans savoir si la prochaine version sera meilleure.

J'ai vu des créateurs s'enfermer là-dedans pendant un an. Ils ont un magnifique tableau de bord, une page de tarifs, un changelog soigné, et aucun projet terminé depuis dix-huit mois.

La règle que j'applique maintenant : un outil interne se juge sur les films qui sortent de la machine, pas sur la machine. Sur ScreenWeaver, les trois preuves que je peux nommer sont [VOIDBORN](/blog/voidborn-anime-ia-festival-coulisses), primé au Seoul International AI Film Festival et distingué deux fois aux Mondial Chroma Awards, Les Fils du Vinnana, mention honorable au Top Quark Film Festival et nommé à l'ALTFF Supershort, et le pilote de [Lost Garden](/blog/lost-garden-univers-coherent-episodes), finaliste de l'AI London Festival. Si aucun de ces films n'existait, le logiciel ne vaudrait rien, quelle que soit la qualité du code.

> 💡 **Le cut de Frank :** avant d'écrire une ligne de code, fixe-toi la sortie qui prouvera l'outil. Un film, un épisode, une campagne. Si tu n'as pas cette sortie en tête, tu es en train de construire un passe-temps, et c'est très bien, mais dis-le-toi.

## Le stack se choisit en un jour, le modèle de données coûte quatre mois

Le dépôt ScreenWeaver commence le 22 janvier 2026 par un projet Vite et React. Le lendemain, 23 janvier, il y a un commit qui s'appelle « migration to next js », suivi le même jour de deux autres qui déplacent la logique IA côté serveur. Vingt-quatre heures pour changer de framework, parce qu'à ce stade il n'y a rien à casser.

La vraie bascule technique arrive en mai : une pull request de migration vers [Yjs](https://docs.yjs.dev/), la bibliothèque de structures de données répliquées, fusionnée le 19 mai, puis une semaine de commits qui parlent de « legacy migration », d'entités à rattacher, de données anciennes à récupérer. En juin, il faut encore écrire un script de migration par lots pour découper les espaces de travail en fragments. Quatre mois après le début du projet, je suis en train de déménager des données d'utilisateurs réels d'un format vers un autre, avec la peur de perdre le scénario de quelqu'un.

Le choix du framework se corrige en une journée. Le choix de la forme des données se paye en mois, et il se paye au moment exact où tu as enfin des utilisateurs, donc au pire moment possible.

Ce qui m'a sauvé : les tests. Le dépôt en compte 676 fichiers. C'est la seule chose qui permet de toucher au cœur d'un produit en production sans avoir la nausée.

| Décision | Quand je l'ai prise | Ce qu'elle a coûté à corriger |
| --- | --- | --- |
| Vite vers Next.js | Jour 2 du projet | Une journée |
| Logique IA côté serveur | Jour 2 | Quelques heures |
| Documents plats vers Yjs et fragments | Mois 4 | Deux mois de migration et de scripts de réparation |
| Découpage en fragments par espace de travail | Mois 5 | Un script de migration par lots, avec passage à blanc obligatoire |

Si tu construis un outil créatif, la question à trancher tôt porte sur une seule chose : qui écrit sur le même objet en même temps. Deux personnes sur le même scénario, ou une personne et un agent, produisent un flux d'opérations concurrentes. Un fichier plat ne sait pas encaisser ça. Je l'ai compris quatre mois trop tard.

## Une date annoncée devient une dette le jour où tu la prononces

Le 21 août 2026, j'ai écrit dans un article de ce blog que l'offre Filmmaker de ScreenWeaver était annoncée pour fin août. Le [site de ScreenWeaver](https://screenweaver.ai/) affiche aujourd'hui « Coming soon », avec une cible au 30 septembre 2026, et une ligne qui précise que la production vidéo n'est pas disponible pendant la bêta.

Je laisse la phrase d'août en ligne. Elle était vraie au moment où je l'ai écrite, et son inexactitude aujourd'hui raconte quelque chose d'utile.

Ce qui s'est passé entre les deux est banal. La génération vidéo touche à la facturation, aux crédits, aux échecs de fournisseurs, aux fichiers lourds et au support quand tout ça casse. Chacun de ces morceaux est jouable en deux semaines. Assemblés, avec des utilisateurs qui paient déjà pour autre chose, ils ne le sont pas.

![Page de tarification de ScreenWeaver montrant l'offre Screenwriter gratuite, l'offre Storyboard Beta à 9,99 dollars par mois et l'offre Filmmaker annoncée pour le 30 septembre 2026](/images/blog/screenweaver-lecons-saas-creatif/workflow-1.webp)

*Capture de screenweaver.ai réalisée le 24 septembre 2026 : l'offre Filmmaker est toujours annoncée, avec une nouvelle date cible.*

Depuis, j'ai changé ma façon d'annoncer. Une fonctionnalité qui touche à l'argent des gens n'a plus de date publique tant que le chemin de paiement complet ne tourne pas en préproduction. Les autres peuvent avoir une date, parce qu'un retard sur un export PDF déçoit, alors qu'un retard sur un moteur de facturation crée des tickets, des remboursements et des gens qui perdent confiance.

> 💡 **Le cut de Frank :** annonce des mois, pas des jours, et seulement pour ce qui ne touche ni à la facturation ni aux données existantes. Sur le reste, sors la fonctionnalité d'abord et communique ensuite.

## L'offre gratuite doit tenir debout toute seule

ScreenWeaver donne gratuitement un environnement d'écriture complet : projets illimités, pages illimitées, éditeur au format standard, plan et beats, export PDF et export Final Draft. L'offre Storyboard Beta est à 9,99 dollars par mois pour les testeurs, et elle ouvre le storyboard et sa génération depuis le scénario.

Beaucoup de gens m'ont dit que c'était trop généreux. Un scénariste peut rester là toute sa vie sans payer un centime, et l'export Final Draft lui permet même de partir ailleurs quand il veut.

C'est exactement le but, et ça repose sur une lecture précise du métier. Un scénariste qui écrit son long métrage n'a besoin de rien d'autre pendant six mois. Il ne va pas payer un abonnement pour taper du texte, il existe trop d'alternatives gratuites, et j'ai d'ailleurs comparé [ScreenWeaver et Final Draft](/blog/screenweaver-vs-final-draft) sans tricher sur les forces du standard du marché. Le moment où le besoin change, c'est quand il veut voir son film : découper, faire des planches, tenir la continuité, produire des plans. C'est là que le produit coûte de l'argent à faire tourner, et c'est là qu'il doit en demander.

Un gratuit bridé produit l'effet inverse. L'utilisateur teste, rencontre le mur, et se fait un avis définitif sur ta qualité à partir d'une version amputée. Tu as payé un coût d'acquisition pour produire une mauvaise impression.

La contrepartie est réelle : je paye le stockage et le support de scénarios écrits par des gens qui ne passeront peut-être jamais à une offre payante. Je l'accepte parce que le gratuit sert de preuve, et que dans un métier où la confiance se construit lentement, la preuve vaut plus cher que la conversion immédiate.

## L'arithmétique qu'il faut poser avant la première ligne de code

Un SaaS créatif branché sur des modèles génératifs a un problème que les SaaS classiques n'ont pas : chaque clic coûte de l'argent réel à une facture fournisseur. Un seul abonné motivé peut consommer plus que ce qu'il te paye, en une semaine, sans la moindre mauvaise intention.

C'est le sujet que j'ai traité de la manière la plus explicite sur [Imaginode](/blog/pourquoi-jai-construit-imaginode-canvas-ia), mon canvas de création, où tout le système tourne autour d'une unité affichée. Un crédit vaut environ un centime d'euro, et le coût de la génération s'affiche avant de cliquer.

![Page de tarifs d'Imaginode avec les trois formules Starter, Créateur et Studio, leurs dotations en crédits mensuels et les équivalences en images, secondes de vidéo et minutes de voix off](/images/blog/screenweaver-lecons-saas-creatif/workflow-2.webp)

*Capture d'imaginode.ai réalisée le 24 septembre 2026 : trois formules, une seule unité de compte, les équivalences affichées plan par plan.*

Les [trois formules](https://imaginode.ai/fr/pricing) sont à 13, 42 et 145 euros hors taxes, pour 900, 3 100 et 10 500 crédits par mois. Le crédit est annoncé 7 % moins cher sur la formule du milieu et 6 % moins cher sur la grande. La dégressivité est faible, et c'est volontaire : les gros volumes coûtent proportionnellement aussi cher chez le fournisseur, donc offrir une grosse remise reviendrait à vendre à perte les clients les plus actifs.

J'ai écrit trois règles avant le code.

Les crédits mensuels expirent au renouvellement, les crédits achetés en recharge ne périment jamais, et une génération dépense toujours les mensuels en premier. Sans cette règle, un utilisateur accumule douze mois de crédits et les dépense en une nuit sur le modèle le plus cher, pendant que ta facture fournisseur arrive en une seule fois.

Deuxième règle, une génération ratée rend les crédits. Ça paraît évident, c'est en réalité une décision coûteuse, parce que tu payes quand même le fournisseur sur certains échecs. Je préfère ce coût à des tickets de support quotidiens et à la réputation d'un outil qui vole des crédits.

La dernière tient en six mots : le prix s'affiche avant le clic. Une facturation opaque sur des générations à quelques centimes finit toujours de la même façon, par un client qui découvre un montant en fin de mois et qui se désabonne le soir même.

| Modèle de prix | Ce que ça protège | Ce que ça coûte |
| --- | --- | --- |
| Abonnement plat sans limite | La simplicité de la promesse | Ta marge, dès le premier gros utilisateur |
| Crédits mensuels qui expirent | La prévisibilité de ta facture fournisseur | Les utilisateurs irréguliers, qui perdent leur dotation |
| Recharges sans date limite | La confiance des utilisateurs occasionnels | Un passif à porter dans tes comptes |
| Remboursement des échecs | Le support et la réputation | Quelques pour cent de marge |
| Coût affiché avant génération | Le taux de désabonnement | Un peu de conversion à l'instant du clic |

Si tu veux la méthode côté production plutôt que côté produit, j'ai détaillé ma façon de [budgéter un projet vidéo IA](/blog/budgeter-projet-video-ia-methode) avec les mêmes réflexes de coût unitaire.

## « En solo » est un mot de marketing

Le plan éditorial de ce blog annonçait cet article sous le titre « leçons d'un SaaS créatif construit en solo ». Je corrige, parce que ce serait malhonnête et parce que la correction est elle-même une leçon.

ScreenWeaver n'est pas un projet solo. Il est co-créé avec Thibaut, et il est édité par [Outerframe Studio](/blog/outerframe-studio-pourquoi-studio-ia), l'entité que j'ai montée pour porter ce genre de produit avec des conditions d'utilisation et un directeur de publication identifiable. Imaginode, lui, est un produit que je porte réellement seul, du canvas aux paiements.

Avoir fait les deux me donne une comparaison directe, et elle ne va pas dans le sens qu'on croit.

En solo, tu vas vite sur les décisions et tu ralentis sur l'exécution. Personne ne discute ton choix d'architecture, donc tu tranches en dix minutes. Personne ne relit non plus, donc tu passes trois jours sur un bug que quelqu'un d'autre aurait vu en dix minutes. À deux, l'inverse : les décisions prennent une soirée de discussion, l'exécution va deux à trois fois plus vite, et surtout le produit survit à une semaine de grippe.

Ce qui décide vraiment, c'est le nombre de rôles que tu tiens. Sur Imaginode je suis développeur, support, comptable, rédacteur des mentions légales et responsable de la conformité des paiements. Aucun de ces rôles n'est difficile isolément. Les tenir tous fait que chacun est tenu à 60 %, et sur un produit qui encaisse de l'argent, 60 % sur la conformité, c'est un problème qui attend son tour.

> 💡 **Le cut de Frank :** avant de te lancer, liste les rôles que le produit va réclamer une fois qu'il aura des clients payants. Pas les fonctionnalités, les rôles. C'est cette liste qui décide si tu peux le faire seul.

## Le rythme réel, mois par mois

Voilà le nombre de commits par mois sur ScreenWeaver depuis le début du projet, relevé dans le dépôt le 24 septembre 2026.

| Mois | Commits | Ce qui se passait |
| --- | --- | --- |
| Janvier 2026 | 41 | Démarrage, changement de framework, premières briques |
| Février | 88 | L'éditeur de scénario prend forme |
| Mars | 40 | Ralentissement, production en parallèle |
| Avril | 20 | Le mois creux |
| Mai | 106 | Bascule vers Yjs, reprise des données existantes |
| Juin | 322 | Le pic, migration en fragments et stabilisation |
| Juillet | 258 | Storyboard et continuité |
| Août | 100 | Préparation des offres |
| Septembre (au 24) | 59 | Support embarqué, finitions avant production vidéo |

Regarde avril. Vingt commits sur le mois, soit moins d'un par jour ouvré. Ce mois-là, je tournais, et le produit a vécu au ralenti. En juin, 322 commits, parce que la migration ne pouvait pas rester à moitié faite.

Ce profil est la forme normale d'un produit construit à côté d'un métier. Le mois creux lui-même ne fait aucun dégât. Ce que tu te racontes pendant ce mois-là, si. J'ai failli abandonner en avril, avec l'argument classique du « je n'ai pas le temps ». J'avais surtout perdu de vue la sortie que l'outil devait servir.

La seule discipline qui tient dans ce régime : garder le produit toujours déployable. Si avril te laisse une branche à moitié migrée, mai ne repart pas. Si avril te laisse une production stable et des tests verts, tu reprends en une heure.

Le même effet se voit ailleurs. J'ai écrit à propos du [Concours Lépine et de ce que l'innovation coûte vraiment](/blog/concours-lepine-lecons-innovation) que les inventeurs butent rarement sur l'idée. Ils lâchent pendant la période où rien ne se passe. C'est la même courbe.

## Ce que je referais autrement

Je poserais le modèle de données collaboratif dès la première semaine. Pas l'implémentation complète, juste le format : des opérations plutôt que des documents. Le surcoût initial est d'environ une semaine, il m'a coûté deux mois payés au mauvais moment.

Je ferais tourner un chemin de paiement complet en préproduction avant d'annoncer quoi que ce soit de payant. Abonnement, échec de paiement, remboursement, changement de formule, résiliation. Tant que ces cinq cas ne passent pas, la fonctionnalité n'existe pas, même si son interface est terminée.

Je mettrais le support dans le produit beaucoup plus tôt. Le widget de support de ScreenWeaver n'a été embarqué que le 14 septembre 2026, soit presque huit mois après le premier commit. Pendant ces huit mois, les retours arrivaient par messages privés, par mail, dans des conversations éparpillées, et une bonne partie s'est perdue.

Je ne publierais plus de date sur un mois entier de travail. Je l'ai fait en août pour Filmmaker, et l'article qui porte cette date est toujours en ligne. Dire « cet automne » aurait été aussi informatif et n'aurait créé aucune dette.

Ce que je referais exactement pareil, en revanche : construire l'outil pendant que je tournais, pas avant. Chaque fonctionnalité qui tient dans ScreenWeaver vient d'un problème rencontré sur un plateau ou dans une nuit de montage. Celles que j'ai imaginées au calme, sans projet en cours, sont les premières que j'ai supprimées.

Si tu veux voir le workflow complet plutôt que les coulisses, le [guide studio de ScreenWeaver](/blog/screenweaver-ai-ecriture-scenario-storyboard) détaille chaque phase avec les réglages.

## FAQ : construire un SaaS créatif

**Faut-il savoir coder pour lancer un outil créatif ?**

Aujourd'hui, non, au sens strict. Les assistants de code permettent de sortir un produit fonctionnel sans avoir jamais écrit de TypeScript. Mais il y a une nuance qui coûte cher : savoir produire du code et savoir maintenir un produit en production sont deux métiers différents. Le premier jour où un client perd des données, où un paiement échoue en boucle, où un fournisseur change son API sans prévenir, tu as besoin de comprendre ce qui tourne. Mon conseil : utilise tous les assistants que tu veux pour avancer, mais refuse d'expédier en production une partie du système que tu serais incapable de déboguer à la main.

**Combien coûte le lancement d'un SaaS branché sur des modèles IA ?**

Les coûts fixes sont plus bas qu'on ne croit et les coûts variables plus hauts. L'hébergement, la base de données et le nom de domaine tiennent dans quelques dizaines d'euros par mois au démarrage. Ce qui fait mal, c'est la facture des fournisseurs de modèles, qui suit l'usage réel et qui arrive sans plafond naturel. Ajoute la comptabilité, la TVA sur les ventes numériques, éventuellement un conseil juridique pour tes conditions générales. Le vrai budget de départ se raisonne comme une réserve de trésorerie : de quoi absorber un mois d'usage anormal sans avoir à couper le service.

**Gratuit illimité ou essai limité dans le temps ?**

Ça dépend entièrement du coût marginal de ton produit. Si une fonctionnalité ne consomme presque rien, comme du texte stocké, tu peux l'offrir sans limite et t'en servir comme preuve de qualité. Si elle appelle un modèle payant à chaque clic, l'illimité te tuera. La frontière que j'ai tracée sur ScreenWeaver passe exactement là : l'écriture est gratuite et illimitée, le storyboard et la génération sont payants parce qu'ils coûtent. Cette frontière a un avantage secondaire, elle est facile à expliquer en une phrase, et un utilisateur qui comprend pourquoi il paie râle beaucoup moins.

**Comment fixer le prix d'un abonnement créatif ?**

Pars du coût réel d'un mois d'usage typique chez tes fournisseurs, multiplie par deux ou trois pour couvrir les échecs, le support, l'hébergement et ta rémunération, puis compare au budget mental de ta cible. Sur Imaginode, la formule d'entrée est à 13 euros hors taxes pour 900 crédits, ce qui correspond à peu près au volume d'un projet par mois. Ce prix sort d'un calcul : le point où le produit reste rentable sur un usage normal tout en restant abordable pour un élève en formation. Vérifie ensuite ton hypothèse avec les données réelles, et accepte de la corriger.

**Faut-il construire en public ?**

Publier ton avancement t'apporte de la discipline et tes premiers utilisateurs. En face, ça t'expose sur les dates et ça t'installe dans une comparaison permanente avec des gens qui vont plus vite. Mon expérience de la date ratée de Filmmaker est directement un effet de bord du build in public : annoncer crée une pression qui te fait avancer, puis crée une dette quand la réalité prend deux semaines de plus. La version qui marche pour moi consiste à raconter ce qui est déjà en ligne, avec les chiffres exacts, et à rester vague sur le calendrier tant qu'une fonctionnalité touche à l'argent des gens.

**Combien de temps avant les premiers clients payants ?**

Sur ScreenWeaver, huit mois séparent le premier commit de l'ouverture d'une offre payante, et l'offre de production vidéo n'est toujours pas ouverte au 24 septembre 2026. Ce délai tient à tout ce qu'il faut autour du code : une entité pour encaisser, des conditions d'utilisation, un chemin de paiement fiable, un support. Si tu comptes en semaines, tu vas soit sauter une de ces étapes, soit encaisser de l'argent sur un produit qui n'est pas prêt à le recevoir. Les deux se paient au même endroit, la confiance.

**Faut-il viser une niche créative ou un public large ?**

La niche gagne, à condition d'être une niche qui produit quelque chose. Un outil pour scénaristes qui préparent un film a une utilité mesurable, une cible atteignable et un vocabulaire commun. Un outil de créativité générale s'adresse à tout le monde et à personne, se compare à des géants et n'a aucun critère de succès. Le signe qui ne trompe pas : si tu peux nommer les trois projets terminés grâce à ton outil, tu es sur une niche saine. Si tu ne peux citer que des inscriptions et des captures d'écran, ta cible est encore trop large.

**Que faire quand un fournisseur de modèle ferme ou change ses tarifs ?**

Prévoir que ça arrivera, parce que ça arrive plusieurs fois par an dans ce secteur. Concrètement, cela signifie trois choses : ne jamais exposer le nom d'un fournisseur comme promesse contractuelle dans tes offres, garder une couche d'abstraction entre ton produit et l'API appelée, et maintenir un catalogue de modèles que tu peux mettre à jour sans redéployer. Le jour où un modèle disparaît, tu bascules le trafic sur un autre et tu préviens tes utilisateurs. Sans cette préparation, la fermeture d'une API devient une panne de plusieurs jours, et tes clients ne font pas la différence entre ton fournisseur et toi.
