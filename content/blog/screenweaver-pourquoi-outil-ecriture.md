---
title: "ScreenWeaver : pourquoi j'ai construit mon outil d'écriture"
date: "2026-08-21"
category: "analyses"
excerpt: "Mes scénarios tenaient. C'est tout le reste qui partait en morceaux. Voici pourquoi j'ai construit ScreenWeaver et ce que l'outil fait vraiment aujourd'hui."
thumbnail: "/images/blog/screenweaver-pourquoi-outil-ecriture/hero.webp"
metaTitle: "ScreenWeaver : pourquoi j'ai construit mon outil d'écriture"
metaDescription: "L'histoire de ScreenWeaver racontée par Frank Houbre : le problème de fragmentation entre scénario et image, les choix produit, et ce que l'outil fait vraiment."
tags: ["screenweaver", "outil écriture scénario ia", "storyboard ia", "continuité production", "frank houbre"]
author: "Frank Houbre"
readingTime: 13
published: true
---

# ScreenWeaver : pourquoi j'ai construit mon outil d'écriture

Sur mon court-métrage [Ronces](/blog/ronces-coulisses-court-film-ia), j'ai réécrit une scène un dimanche soir. Deux répliques coupées, un déplacement changé, rien de spectaculaire. Le lundi, j'ai relancé la génération des plans à partir de mon storyboard. Les images sont sorties propres et bien éclairées. Elles racontaient la version d'avant.

Personne ne m'avait prévenu. Aucun voyant rouge, aucun conflit de fichier. Le storyboard vivait dans son coin, le scénario dans le sien, et les deux avaient cessé de se parler à un moment que je n'ai jamais pu dater précisément. J'ai perdu une journée à comprendre, une autre à refaire.

Ce n'est pas une histoire d'outil mal choisi. J'avais de bons outils. Le problème, c'est qu'ils ne savaient rien les uns des autres.

![Plateau de tournage vide au petit matin, marques de placement à la craie sur le plancher, lampe de répétition allumée](/images/blog/screenweaver-pourquoi-outil-ecriture/hero.webp)

## Le vrai problème n'était pas d'écrire, c'était de tenir le film ensemble

Quand je raconte l'origine de [ScreenWeaver](https://screenweaver.ai), on me répond souvent la même chose : « ah, tu as fait une IA qui écrit des scénarios ». Non. Écrire n'a jamais été mon goulot d'étranglement. Je sais m'asseoir et écrire. Ce que je ne savais pas faire, c'était empêcher le film de se désintégrer entre le moment où je l'écris et le moment où je le fabrique.

Regarde à quoi ressemble une production IA solo quand personne ne l'a pensée comme un système. Le plan de séquence vit dans un document. Le scénario vit dans un logiciel d'écriture. Les références visuelles vivent dans un dossier cloud dont les noms de fichiers ne correspondent à aucun numéro de scène. Les prompts vivent dans un historique de chat. Les rushes vivent dans un dossier daté. Les fiches personnages vivent dans ta tête, jusqu'au jour où elles n'y vivent plus.

Chaque passage d'un endroit à l'autre est une fuite. Tu perds la température de couleur que tu avais en tête, puis l'heure du jour. Tu oublies que ce personnage porte encore le manteau de la scène 8. Et tu laisses filer l'interdit que tu t'étais fixé au début du projet, celui que tu répétais à voix haute et que tu ne retrouves plus nulle part par écrit.

Sur [VOIDBORN](/blog/voidborn-anime-ia-festival-coulisses), j'ai tenu la continuité à la force du poignet, avec des captures d'écran renommées à la main et un fichier texte que je relisais avant chaque bloc de génération. Ça a marché. C'était aussi la partie la moins créative de toute la production, et de loin la plus fragile.

La dispersion coûte du temps, évidemment. Elle coûte surtout des renoncements. À un moment, tu arrêtes de retoucher la scène 12 parce que tu sais ce que ça implique en aval. Tu laisses passer une version tiède. L'outil vient de décider à ta place.

> 💡 **Le cut de Frank :** si tu hésites à réécrire une scène parce que « ça va tout casser dans les images », note-le quelque part. C'est le symptôme numéro un d'une chaîne de production qui te tient au lieu de te servir.

## Pourquoi je n'ai pas voulu d'un générateur de scénarios

Quand j'ai commencé à esquisser l'outil, la tentation était évidente : brancher un modèle sur une page blanche et laisser la machine produire des pages. Techniquement, c'est le morceau le plus facile. C'est aussi le plus inutile.

Un scénario généré ne résout aucun problème de production. Il en crée un : plus personne ne sait ce que le film veut dire, donc plus personne ne peut arbitrer quoi que ce soit en aval. Un chef opérateur, un monteur, un compositeur, tous prennent des décisions en s'appuyant sur une intention. Si l'intention n'appartient à personne, chaque décision devient arbitraire, et ça se voit à l'écran.

La règle que je me suis fixée dès le départ tient en une phrase : **le scénario reste la source de vérité**. Le texte est autoritaire. Le storyboard, la continuité, les workflows de génération sont des extensions du texte, jamais des remplacements. L'IA aide à décider, elle ne signe pas.

Ça a des conséquences concrètes sur le produit. Ça veut dire qu'un plan de storyboard n'existe pas tout seul : il est rattaché à une slugline et à un beat. Ça veut dire qu'un workflow d'image ne part pas d'un prompt orphelin : il hérite du contexte de la scène, des personnages présents, du décor. Ça veut dire que si tu réécris la scène 12, les panneaux et les workflows qui en dépendent sont marqués comme périmés au lieu de rester silencieux.

C'est aussi ce qui différencie ScreenWeaver des piles d'outils qu'on assemble soi-même. J'ai fait cette pile pendant deux ans, et elle tient tant que tu la surveilles de près. Le jour où tu regardes ailleurs, elle casse en silence.

## Write, See, Build : trois portes ouvertes dans cet ordre

L'outil s'organise autour de trois verbes, et l'ordre compte plus que les fonctionnalités.

### Write : un endroit sérieux pour écrire, gratuit

La base, c'est un environnement d'écriture qui respecte le métier. Formatage standard, pagination lisible, plan et actes visibles pendant que tu écris, beats étiquetés et rattachés aux pages. Tu peux restructurer une séquence par glisser-déposer, le script suit.

Ce socle est gratuit, sans limite de projets ni de pages, avec export PDF et export [Final Draft](https://www.finaldraft.com) au format `.fdx`. Ce choix n'est pas commercial, il est structurel : je ne voulais pas d'un outil qui prend tes mots en otage. Si tu veux écrire chez moi et produire ailleurs, l'export existe et il marche. Le format [Fountain](https://fountain.io) reste par ailleurs la meilleure assurance vie d'un scénario, quel que soit le logiciel que tu utilises.

Tu peux rester là et ne jamais aller plus loin. C'est prévu pour : un scénariste qui n'a besoin que de la page ne doit pas se retrouver avec un tableau de bord de production sur les bras.

### See : le storyboard accroché au texte

C'est là que l'histoire de ScreenWeaver commence vraiment, parce que c'est exactement l'endroit où mon dimanche soir avait déraillé.

Les planches de storyboard sont générées depuis le scénario et restent liées aux scènes et aux beats. Tu lis le film comme une séquence, pas comme un tas d'images. Les références, les intentions d'objectif, les notes de placement vivent à côté des panneaux concernés. Quand la structure bouge, la carte visuelle bouge avec elle.

La différence est bête et énorme : un storyboard qui sait de quelle scène il vient peut te dire qu'il n'est plus à jour. Un dossier d'images, non.

![Portant de costumes dans un couloir, fiches de continuité numérotées attachées aux cintres, lumière de fin d'après-midi](/images/blog/screenweaver-pourquoi-outil-ecriture/workflow-1.webp)

### Build : le graphe de génération qui hérite du contexte

La troisième porte, c'est la production. Les workflows d'image et de vidéo sont construits à partir du scénario, du storyboard, des personnages, des décors et du contexte du projet. Tu ne repars pas d'une page blanche à chaque plan : tu pars d'un graphe déjà câblé, que tu modifies.

Chaque nœud reste éditable. On enlève la friction de mise en place, pas le contrôle créatif. Tu peux changer de modèle, brancher un autre fournisseur, dupliquer une branche pour tester une variante, garder les versions et les comparer. L'outil est pensé pour fonctionner avec les moteurs vidéo du moment, Seedance, Veo, Sora, Kling, et pour que ce choix reste le tien.

C'est le même raisonnement que celui qui m'a poussé à construire [Imaginode](/blog/pourquoi-jai-construit-imaginode-canvas-ia), mon canvas à nodes, mais pris par l'autre bout de la chaîne. Imaginode part du plan à fabriquer. ScreenWeaver part du film à raconter. Les deux se rejoignent au même endroit : arrêter de retaper la même intention dans cinq interfaces.

## La continuité, ce poste qu'on découvre toujours trop tard

Sur un court, tu peux tricher. Sur une série, jamais.

Quand j'ai lancé [Lost Garden](/blog/lost-garden-journal-production-serie-ia), j'ai compris en trois épisodes que la continuité n'est pas une case à cocher mais un poste de travail à part entière. Un personnage qui gagne deux centimètres de mâchoire entre deux blocs de génération. Un décor dont la fenêtre change de côté. Un objet narratif qui disparaît d'un plan à l'autre alors qu'il porte tout le sens de la scène.

ScreenWeaver suit les personnes, les lieux et les objets qui définissent l'histoire, et cette bible voyage avec le projet au lieu de vivre dans un document parallèle que personne ne relit. La continuité redevient un choix créatif, pas un accident.

Si tu travailles encore avec une bible externe, ce n'est pas grave, mais fais-la sérieusement. J'ai détaillé la méthode dans mon guide sur [la bible de lieux et de décors](/blog/creer-bible-lieux-decor-projet-ia). Le principe est le même quel que soit l'outil : ce que tu ne notes nulle part finit par disparaître, et ça revient toujours sous une forme légèrement différente au plan suivant.

> 💡 **Le cut de Frank :** avant d'attaquer un épisode, relis la fiche du personnage principal à voix haute. Si tu bafouilles sur un détail, c'est que la fiche est incomplète, pas que ta mémoire est mauvaise.

## Le parcours d'une scène, concrètement

Voici ce que donne une modification de scène dans les deux mondes. C'est le tableau que j'aurais voulu lire avant de commencer à construire.

| Étape | L'ancienne pile d'outils | Dans un espace connecté | Ce que ça évite |
| --- | --- | --- | --- |
| Réécrire la scène 12 | Le fichier scénario change, rien d'autre ne bouge | Le plan, les beats et la pagination se réalignent | Une structure qui ment sur elle-même |
| Mettre le storyboard à jour | Retrouver les bons panneaux à la main, de mémoire | Les panneaux rattachés à la scène sont signalés | Le storyboard fantôme de mon dimanche soir |
| Vérifier la continuité | Rouvrir d'anciens messages et d'anciennes captures | Personnages, décors et objets sont suivis dans le projet | Un manteau qui change de couleur entre deux plans |
| Relancer une génération | Reconstruire le prompt et le contexte à zéro | Le graphe hérite de la scène et de ses fiches | Des crédits brûlés sur des essais mal briefés |
| Comparer deux versions | Deux dossiers, deux noms de fichiers, un doute | Versions rattachées au plan et au scénario | Le choix par fatigue plutôt que par intention |

La colonne de droite ne te fait pas taper plus vite. Elle rend une correction tardive supportable, ce qui n'est pas du tout la même chose.

## Où en est le produit aujourd'hui

Je préfère être précis plutôt que vendeur, parce que l'outil est encore en bêta et que les choses bougent vite.

| Niveau | Ce que ça contient | Statut au 21 août 2026 |
| --- | --- | --- |
| Screenwriter | Projets et pages illimités, éditeur de scénario, plan et beats, export PDF et Final Draft | Gratuit, disponible |
| Storyboard Beta | Tout Screenwriter, plus l'espace storyboard et la génération de planches depuis le scénario | Offre d'accès anticipé pour les testeurs |
| Filmmaker | Génération de storyboard, planification visuelle avec continuité, IA documentaliste, moteur de workflows, collaboration temps réel | Annoncé pour fin août 2026, tarif à venir |

Les tarifs et le périmètre exact des offres évoluent pendant la bêta. Vérifie sur le site avant de t'engager sur quoi que ce soit, je ne veux pas qu'un article daté serve de contrat.

Sur l'usage réel, je préfère citer ce que je peux nommer. [VOIDBORN](/blog/voidborn-anime-ia-festival-coulisses), mon court animé, a été primé au Seoul International AI Film Festival, au Hollywood Indie Festival et à l'Australian AI Festival. Ronces et Lost Garden ont servi de terrain d'essai sur le reste de la chaîne. Un logiciel de production se juge sur des films finis, pas sur des captures d'écran.

![Réalisateur en repérage cadrant une porte en pierre au viseur de champ, ruelle pavée mouillée sous un ciel couvert](/images/blog/screenweaver-pourquoi-outil-ecriture/workflow-2.webp)

## Ce que ScreenWeaver ne fait pas

Autant le dire clairement, parce que la déception vient toujours d'une promesse mal posée.

Ce n'est pas un bouton qui fabrique un film. Tu écris toujours, tu décides toujours, et tu passes toujours des soirées à regarder des rushes ratés en te demandant pourquoi la lumière ne prend pas.

Ce n'est pas non plus un correcteur d'histoire. Une structure creuse reste creuse quand elle est bien affichée. L'outil rend ta structure visible, ce qui est souvent inconfortable : beaucoup de scénarios tiennent debout tant qu'on ne les regarde pas de face.

Ce n'est pas un moteur de génération. ScreenWeaver prépare, organise, transmet le contexte et route les sorties, mais les images sortent des modèles que tu choisis. Si tu veux comprendre comment je pilote la qualité en amont, ma [méthode de réalisateur IA](/blog/methode-realisateur-ia-diriger-avant-generer) explique la partie qui ne dépend d'aucun logiciel.

Et il ne remplace pas Final Draft sur le terrain de Final Draft. Sur la pagination stricte, les modes de révision et les échanges de fichiers avec une production classique, le standard reste le standard. J'ai fait le match honnêtement dans mon [comparatif ScreenWeaver contre Final Draft](/blog/screenweaver-vs-final-draft).

## Ce que construire mon propre outil m'a appris

Trois choses, et aucune n'est technique.

La première : les fonctionnalités qu'on réclame ne sont presque jamais celles qui manquent. Les demandes portaient sur des exports, des raccourcis, des thèmes. Le vrai manque était invisible et structurel, c'était le lien entre les objets. Un utilisateur sait décrire sa douleur, rarement sa cause.

La deuxième : un outil de création doit assumer une opinion. Refuser de générer le scénario, c'est perdre des utilisateurs qui cherchaient exactement ça. Tant mieux. Un logiciel qui essaie de plaire à tout le monde finit par ne rien tenir, et dans la création, ne rien tenir se voit tout de suite.

La troisième : j'aurais dû construire cet outil un projet plus tôt. J'ai passé des mois à colmater une chaîne de production avec de la discipline personnelle, en me disant que c'était le métier. Ce n'était pas le métier, c'était de la maintenance. Le jour où le scénario, les planches et les workflows ont commencé à se parler, j'ai récupéré la partie du travail qui m'intéresse.

Si tu veux le mode d'emploi plutôt que l'histoire, le [guide studio de ScreenWeaver](/blog/screenweaver-ai-ecriture-scenario-storyboard) détaille le workflow phase par phase, avec les réglages et les erreurs classiques.

## FAQ : ScreenWeaver, l'histoire et l'outil

**Qu'est-ce que ScreenWeaver exactement ?**

C'est un espace de travail unique où l'écriture, la structure, le storyboard, la continuité et les workflows de génération restent attachés les uns aux autres. Le point de départ est un éditeur de scénario professionnel, avec plan visible et beats rattachés aux pages. À partir de ce texte, l'outil génère des planches de storyboard liées aux scènes, suit les personnages, les lieux et les objets du projet, puis prépare des graphes de génération d'images et de vidéo qui héritent du contexte. Le produit est en bêta et se présente comme une interface de production, pas comme un simple traitement de texte pour scénaristes.

**Pourquoi ne pas avoir simplement utilisé Final Draft ou un logiciel existant ?**

Parce que le problème n'était pas l'écriture. Final Draft fait très bien ce qu'il fait depuis des décennies : formatage, pagination, révisions, échanges de fichiers avec l'industrie. Rien de tout cela ne casse quand tu produis un film IA. Ce qui casse, c'est la liaison entre le texte et tout ce qui vient après. Un scénario parfaitement formaté ne t'empêche pas de générer lundi les images de la version de dimanche. Il fallait un objet nouveau : un projet où le storyboard et les workflows connaissent la scène dont ils viennent. J'ai gardé l'export `.fdx` justement pour ne pas obliger à choisir.

**Est-ce que ScreenWeaver écrit le scénario à ma place ?**

Non, et c'est un choix assumé, pas une limitation technique. Le scénario reste la source de vérité du projet et il t'appartient. L'IA intervient en support : une IA documentaliste à qui tu donnes des documents pour qu'elle challenge ton scénario, repère des anachronismes et vérifie la cohérence, ainsi que des workflows qui préparent la génération visuelle. Sur la page elle-même, tu restes seul aux commandes. Un scénario généré crée un problème plus grave que celui qu'il résout : plus personne ne peut arbitrer en aval, parce que plus personne ne sait ce que le film veut dire.

**La partie écriture est-elle vraiment gratuite ?**

Oui. L'offre Screenwriter comprend des projets et des pages illimités, l'éditeur de scénario, le plan et les beats, l'export PDF et l'export Final Draft, sans paiement. La logique est simple : tes mots ne doivent pas être pris en otage par un abonnement. Les offres payantes concernent ce qui vient après la page, storyboard, continuité, recherche documentaire, moteur de workflows et collaboration. L'offre Filmmaker est annoncée pour fin août 2026 et son tarif n'est pas encore public. Comme tout évolue pendant la bêta, vérifie les conditions à jour sur le site avant de t'abonner.

**À qui s'adresse l'outil, concrètement ?**

Aux créateurs qui écrivent en pensant déjà au film : réalisateurs solo, petites équipes, scénaristes qui produisent eux-mêmes, studios qui développent vite. Il sert pour des films, des séries, des publicités, de l'animation 3D, de l'animé et des clips. Si tu n'écris que des scénarios et que la production ne te concerne pas, l'espace d'écriture gratuit suffit largement et tu peux ignorer le reste. Si tu fabriques des images et que tu passes ton temps à recopier ton intention d'une interface à l'autre, c'est là que l'outil devient intéressant.

**Est-ce que ça marche avec les modèles vidéo que j'utilise déjà ?**

Oui, c'est même un principe de conception. Les workflows sont pensés pour rester ouverts, avec le choix du modèle et du fournisseur à chaque étape, et l'outil fonctionne avec les moteurs vidéo actuels comme Seedance, Veo, Sora et Kling. Chaque nœud du graphe est éditable : tu peux changer un modèle, insérer une étape de retouche, dupliquer une branche pour tester une variante. L'objectif est d'enlever le temps de câblage, pas de t'enfermer dans une automatisation rigide. Les modèles changent trop vite pour qu'un outil de production parie sur un seul.

**Des vrais films ont-ils été produits avec ?**

Oui, et je préfère nommer plutôt que d'annoncer un chiffre invérifiable. VOIDBORN, mon court animé, a été primé au Seoul International AI Film Festival, au Hollywood Indie Festival et à l'Australian AI Festival. Mes autres projets ont servi de terrain d'essai permanent : Ronces pour la fabrication d'un court, Lost Garden pour la continuité sur une série. C'est le seul critère qui compte à mes yeux. Un outil de production se juge sur des films terminés, pas sur des démonstrations. Si une fonctionnalité ne survit pas à un vrai projet, elle ne mérite pas d'exister.

**Par où commencer si je veux tester ?**

Commence par écrire, pas par explorer. Ouvre un projet, importe ou tape une séquence que tu connais bien, et termine-la entièrement : structure, beats, dialogues. Ensuite seulement, génère les planches de cette séquence et regarde si ce que tu vois correspond à ce que tu avais en tête. C'est le test le plus honnête possible, parce qu'il compare ton intention à un résultat sur un matériau que tu maîtrises. Explorer chaque bouton avant d'avoir fini un cycle complet est le meilleur moyen de se faire une fausse opinion sur n'importe quel outil.

## Ce que je referais pareil

Je n'ai pas construit ScreenWeaver pour écrire plus vite. Je l'ai construit pour arrêter de payer trois fois le prix d'un changement d'avis.

Un film se fabrique par corrections successives. Si ton système de travail rend chaque correction coûteuse, tu vas arrêter de corriger, et ton film sera exactement aussi bon que ta première intuition. C'est rarement suffisant.

Les modèles, les interfaces et les tarifs bougeront encore, plusieurs fois. La seule chose que je ne bougerai pas, c'est l'ordre. Le texte d'abord. Les images accrochées au texte, et le droit de revenir en arrière jusqu'au dernier moment.
