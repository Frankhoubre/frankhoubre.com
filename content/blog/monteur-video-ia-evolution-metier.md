---
title: "Monteur vidéo et IA : ce qui change vraiment au banc"
date: "2026-09-01"
category: "analyses"
excerpt: "Ce que l'IA prend au monteur vidéo en 2026, fonction par fonction, ce qu'elle ne sait toujours pas faire, et où replacer sa valeur sans brader son tarif."
thumbnail: "/images/blog/monteur-video-ia-evolution-metier/hero.webp"
---

# Monteur vidéo et IA : ce qui change vraiment au banc

Un monteur m'a écrit le mois dernier avec une question simple et un peu angoissée : est-ce que ça vaut encore le coup d'acheter une grosse station, ou est-ce que le métier va se dissoudre dans trois boutons. Il monte du documentaire depuis douze ans. Il ne demandait pas une prophétie, il demandait s'il devait signer un crédit sur trois ans.

Sur mes propres projets, l'IA n'est jamais entrée par la coupe. Elle est entrée par le dérushage, par l'indexation, par le raccord de deux images qui manquaient en fin de plan. Autrement dit par tout ce qui se passe avant et autour du moment où quelqu'un décide où couper.

Le problème, c'est que la plupart des contenus sur le sujet mélangent deux choses très différentes : les fonctions réelles livrées dans Premiere et dans Resolve, avec leurs limites écrites noir sur blanc dans la doc, et les projections de remplacement qui ne s'appuient sur aucune donnée d'emploi. Les premières se vérifient en dix minutes. Les secondes circulent depuis trois ans sans avoir produit un seul chiffre solide sur ce métier.

![Monteuse debout dans une salle de montage discutant avec le réalisateur assis sur l'accoudoir](/images/blog/monteur-video-ia-evolution-metier/hero.webp)

## Par quelle porte l'IA est entrée dans la salle de montage

Prends une semaine de montage sur un projet de commande et découpe-la honnêtement. Le temps machine de copie et de vérification des cartes. Le visionnage complet des rushes. Le tri, le nommage, la construction du bout à bout, les allers-retours de validation, le conformage, les sous-titres, les livrables aux différents formats. Sur cette liste, la part qui relève du jugement artistique tient dans deux lignes. Tout le reste est de la manutention organisée.

Les éditeurs de logiciels ont visé exactement ces lignes de manutention, et je trouve ça parfaitement rationnel de leur part. C'est là que le gain est mesurable, démontrable en salon, et sans risque juridique pour eux. Personne chez Adobe ou Blackmagic n'a annoncé un bouton qui décide du rythme d'une scène.

L'IA est entrée par la corvée.

La décision de montage, elle, n'a pas bougé d'un pouce. Autour d'elle, en revanche, le volume d'heures facturables a fondu, et ça touche directement le modèle économique du monteur freelance qui vendait des journées. J'ai développé le raisonnement sur l'ensemble des postes dans mon analyse des [métiers de l'audiovisuel face à l'IA](/blog/metiers-audiovisuel-ia-menaces-transformation-avis) ; ici je reste au banc.

> 💡 **Le cut de Frank :** avant de paniquer sur un outil, chronomètre une semaine normale avec un simple tableau à trois colonnes : tâche, durée, décision ou exécution. Tu sauras exactement quelle part de ton chiffre d'affaires est exposée. Chez moi, la première fois, le résultat m'a calmé et énervé en même temps.

## Fonction par fonction : ce que les outils font réellement en 2026

Je m'en tiens à ce qui est écrit dans la documentation officielle des deux logiciels que je croise le plus souvent sur les projets français. Pas de démo de salon, pas de fil de discussion enthousiaste.

### Côté Adobe Premiere

**Media Intelligence** analyse le contenu des clips pour identifier objets, lieux et angles de prise de vue, puis permet une recherche en langage naturel à travers les visuels, les transcriptions et les métadonnées. Adobe précise que cette analyse est locale et se déroule directement sur ta machine, sans connexion internet. Devant un client qui refuse que ses rushes quittent la maison, cette phrase vaut de l'or.

**Generative Extend** ajoute des images au début ou à la fin d'un clip, avec le modèle vidéo Firefly. Les limites publiées par Adobe sont précises : la vidéo peut être prolongée jusqu'à 2 secondes, l'audio jusqu'à 10 secondes, le clip source doit faire au moins 2 secondes en vidéo et 3 secondes en audio. Sur l'audio, le dialogue n'est pas prolongé, il est mis en sourdine pendant l'extension : seuls l'ambiance, le fond et les effets sont générés. La fonction consomme des crédits génératifs Firefly et les clips sont étiquetés en Content Credentials.

**La traduction automatique des sous-titres** couvre 27 langues d'après l'annonce d'Adobe.

### Côté DaVinci Resolve

Sur la page What's New de Blackmagic, la version courante est **Resolve 21**. **IntelliScript** prend en charge les formats Final Draft et texte brut, et permet d'assembler des timelines à partir du scénario. **AI IntelliSearch** analyse les médias pour retrouver des personnes, des objets ou des mots précis dans le dialogue. **Magic Mask** fait la sélection d'un sujet en un clic.

L'annonce de Resolve 20, en avril 2025, avait posé les bases avec plus de cent nouveautés. Le principe d'IntelliScript y est décrit clairement : le logiciel compare le texte du scénario à l'audio transcrit des rushes et construit un montage de la scène, les prises alternatives étant placées sur des pistes supplémentaires pour que le monteur arbitre. **AI Multicam SmartSwitch** assemble une timeline en changeant d'axe selon la détection du locuteur.

Un détail que beaucoup d'articles oublient : le DaVinci Neural Engine et les outils qui en dépendent sont réservés à **Resolve Studio**, vendu 295 dollars en licence perpétuelle. La version gratuite reste excellente pour monter, mais l'essentiel de l'assistance IA se trouve derrière cette licence.

| Fonction | Logiciel | Ce qu'elle fait officiellement | La limite écrite dans la doc |
| --- | --- | --- | --- |
| Media Intelligence | Premiere | Indexe objets, lieux, angles ; recherche en langage naturel | Analyse locale, donc dépendante de ta machine |
| Generative Extend | Premiere | Ajoute des images en début ou fin de clip | 2 s de vidéo, 10 s d'audio, dialogue non prolongé, crédits Firefly |
| Traduction de sous-titres | Premiere | Sous-titres multilingues automatiques | 27 langues annoncées |
| IntelliScript | Resolve | Monte une scène en confrontant scénario et audio transcrit | Suppose un texte de référence, Final Draft ou texte brut |
| Multicam SmartSwitch | Resolve | Change d'axe selon qui parle | Repose sur la détection de locuteur |
| IntelliSearch | Resolve | Retrouve personnes, objets, mots du dialogue | Studio uniquement, 295 dollars |

Lis la colonne de droite. C'est elle qui donne le vrai périmètre de ces outils.

## Le cas qui démonte la panique : le documentaire

IntelliScript suppose un texte de référence. Multicam SmartSwitch suppose des interlocuteurs identifiables. Ces deux fonctions sont taillées pour de la fiction scriptée, de l'interview posée, du corporate en plusieurs caméras, de la captation de conférence.

Prends maintenant du documentaire d'observation, du reportage sur le vif, du clip, de la vidéo de marque tournée en une journée sans script. Il n'existe pas de texte à confronter. Il n'y a pas de tour de parole propre. La structure se trouve au visionnage, en écoutant, en reconnaissant un moment qui n'était prévu nulle part.

Sur ces formats, l'assistance actuelle se limite à la recherche dans les rushes, à la transcription et aux sous-titres. De vrais gains de confort, et ça s'arrête là. L'assemblage, tu le fais toi, plan par plan, comme avant.

Le monteur qui m'a écrit travaille précisément ce type de matière. La pression sur son métier viendra du budget de ses commanditaires et de la concurrence sur les formats normés, bien avant de venir d'IntelliScript. Un vrai sujet, donc, mais un tout autre sujet.

![Assistant monteur préparant les cartes mémoire sur un poste d'ingest près d'une fenêtre](/images/blog/monteur-video-ia-evolution-metier/workflow-1.webp)

## Le poste qui encaisse vraiment : l'assistant monteur

Les fonctions livrées à ce jour recouvrent presque exactement la fiche de poste de l'assistant monteur : ingest, contrôle des médias, dérushage, indexation, nommage, sous-titres, préparation des versions. Un chef monteur qui travaillait seul absorbe ce gain et gagne du temps. Une équipe à deux se pose une question de répartition beaucoup plus brutale.

C'est ce que je vois sur les projets où j'interviens, et je le donne comme observation de terrain, pas comme statistique.

Pour un assistant, la valeur bascule vers ce qu'aucun index automatique ne produit : la connaissance intime de la matière. Repérer que la prise 4 est meilleure sur la deuxième moitié seulement. Entendre un avion au loin qui va poser problème au mixage. Remarquer un raccord de continuité que personne n'a vu au tournage. Un moteur de recherche te rend un clip. Il ne te dit pas que le regard s'échappe une demi-seconde trop tôt.

Côté boîte de production, le danger est ailleurs : le calcul de l'organisation change avant d'avoir changé les compétences. C'est exactement le piège que je décris dans mon guide pour [intégrer l'IA dans une boîte de production](/blog/integrer-ia-boite-production-depart), où le premier réflexe est souvent de supprimer une ligne de poste avant d'avoir mesuré ce que cette ligne portait vraiment.

## Sur les monteurs image, personne n'a encore compté

L'Observatoire des métiers de la culture et des médias à l'heure de l'IA, porté par Audiens, l'Afdas et le CNC, publie des notes de conjoncture métier par métier, adossées à des données d'emploi. Trois notes sont sorties côté audiovisuel : storyboarders en mai 2025, comédiens de doublage en octobre 2025, monteurs son et mixeurs en juillet 2026.

Aucune ne porte sur les monteurs image. Pas encore.

Ça a une conséquence directe sur ta veille : quand quelqu'un t'annonce un pourcentage de monteurs vidéo remplacés en France, il ne s'appuie pas sur cette source, puisqu'elle n'existe pas. Le chiffre n'est peut-être pas faux. Il ne repose simplement sur rien de vérifiable, et à ce stade je préfère écrire que je ne sais pas.

Ce qu'on sait, en revanche, vient du métier voisin le plus proche. La note sur les monteurs son et mixeurs relève une progression de 31 % des effectifs entre 2018 et 2022, une stabilité ensuite au-dessus du niveau d'avant pandémie, et aucun impact négatif de l'IA documenté dans les données analysées. Les tâches où les outils sont entrés y sont identifiées : débruitage, restauration, indexation de sonothèques, aide au conformage. Encore de la corvée.

Est-ce transposable au montage image ? Partiellement, et je pèse mes mots. Les deux métiers partagent la structure du problème : beaucoup de manutention autour d'une décision artistique. Ils ne partagent pas le rapport au client, ni la place dans la chaîne de validation. Un effectif stable ne dit d'ailleurs rien du tarif journalier, et c'est souvent par le tarif que la pression arrive en premier.

![Monteur et réalisateur accroupis au sol autour de fiches de séquences étalées en colonnes](/images/blog/monteur-video-ia-evolution-metier/workflow-2.webp)

## Ce qui ne bouge pas d'un millimètre

J'ai fait le test plusieurs fois, sur des séquences dialoguées où j'avais un script propre et des rushes bien transcrits, donc dans les conditions les plus favorables pour l'assemblage automatique. Le premier montage sort. Il est cohérent, il tient debout, il respecte le texte.

Il est aussi parfaitement plat.

Ce qu'il ne fait pas, et je n'ai encore jamais vu un outil le faire proprement : garder une prise techniquement moins bonne parce que la voix tremble au bon endroit. Retarder une coupe de six images pour laisser un silence s'installer. Casser volontairement le tour de parole pour rester sur l'écoute plutôt que sur celui qui parle. Attaquer une scène par la réaction, avant même que la réplique existe. Ce sont des décisions qui n'ont aucun ancrage dans le texte ni dans la piste audio : elles viennent d'une intention de mise en scène, et la machine n'a pas accès à cette intention.

Il y a un deuxième bloc que personne n'automatise, et qui pèse lourd sur une facture : la salle. Un client qui panique à trois jours de la livraison, un réalisateur qui défend une séquence à laquelle il tient trop, un annonceur qui veut tout raccourcir et qui a raison sur un point et tort sur trois autres. Tenir une salle de montage, expliquer pourquoi une coupe fonctionne, faire accepter une version, c'est du métier et ça ne se délègue pas à un bouton.

Le rythme, lui, se travaille et s'apprend. Je détaille la mécanique concrète, format par format, dans mon article sur [le rythme de montage des formats courts](/blog/parametrer-rythme-montage-ads-ia-15s-30s), et la méthode générale d'organisation d'un projet dans le [guide complet du montage assisté par IA](/blog/guide-complet-montage-video-assiste-intelligence-artificielle).

> 💡 **Le cut de Frank :** quand un premier montage automatique te sort quelque chose de correct, ne le corrige pas. Refais la scène à côté, à l'ancienne, sans regarder. Compare ensuite. Tu verras exactement où se situe ta valeur, et tu arrêteras de la brader.

## Ce qui casse en vrai, et comment s'en sortir

**La transcription se plante sur les noms propres et le jargon.** Un index basé sur une transcription approximative te fait rater des plans. Corrige les termes récurrents du projet dans la transcription avant de lancer les recherches, une fois pour toutes, en début de projet.

**Generative Extend se fait attendre au mauvais moment.** Deux secondes de vidéo, c'est un raccord de sortie, une respiration, un bout de fondu sauvé. Rien de plus. Si tu comptes dessus pour rattraper un plan trop court de deux secondes et demie, tu passes ta soirée à remonter la fin de la scène.

**Le dialogue n'est pas prolongé.** C'est la mauvaise surprise classique quand on étend l'audio en espérant récupérer une fin de phrase. Adobe le documente, mais tout le monde ne lit pas la doc avant la deadline.

**Les crédits génératifs sont une ligne de coût variable.** Sur un projet à cent raccords, ce n'est plus un détail invisible. Regarde ta consommation sur un projet complet avant de chiffrer le suivant, et pense à ce poste quand tu construis ta grille, comme pour tout autre consommable de production.

**Le classement automatique fabrique une fausse confiance.** Sur mes projets, le vrai risque tient en une phrase : arrêter de visionner l'intégralité des rushes. Le jour où tu montes uniquement ce que la recherche te remonte, tu ne montes plus le film, tu montes l'index.

**La question du hors ligne devient contractuelle.** Media Intelligence tourne en local d'après Adobe, ce qui est un argument sérieux face à un client qui exige que les rushes ne quittent pas la maison. Generative Extend passe par le cloud Firefly. Ces deux régimes ne se traitent pas pareil dans un contrat, et un monteur qui sait poser la différence rassure un client là où un concurrent bafouille.

**Le devoir de transparence existe désormais.** Le règlement européen sur l'IA impose des obligations d'information sur certains contenus générés ou manipulés depuis le 2 août 2026. Je détaille ce cadre et ses exceptions pour les œuvres artistiques dans mon [analyse des métiers face à l'IA](/blog/metiers-audiovisuel-ia-menaces-transformation-avis). Pour un monteur, la conséquence pratique est terre à terre : garde une trace de ce qui a été généré, plan par plan.

## Où replacer sa valeur sans se déguiser en monteur IA

Je vois passer des profils qui ajoutent « monteur IA » dans leur titre et qui perdent en crédibilité au lieu d'en gagner. Le titre ne dit rien de ce que la personne sait faire, et il attire les clients qui cherchent une baisse de prix.

Quatre déplacements me paraissent plus solides.

Le premier touche la facturation. Un forfait par livrable, avec un nombre de versions défini au contrat, tient beaucoup mieux qu'un tarif journalier le jour où une partie de la manutention s'évapore. Ma grille de référence pour ce type de calcul se trouve dans mon article sur [comment facturer une vidéo IA](/blog/combien-facturer-video-ia-professionnelle-grille-prix).

Le deuxième porte sur l'arbitrage des prises. Le tri automatique produit des candidats et s'arrête là. Choisir entre eux reste un jugement, et c'est le jugement qu'on paie.

Le troisième, personne ne se bat encore pour le prendre : la traçabilité. Savoir dire ce qui a été généré, avec quel outil, à quelle date, sur quel plan. Peu de monteurs le proposent aujourd'hui, et les producteurs commencent à le réclamer.

Le quatrième est le plus technique et le plus rare. Un plan généré et un plan capté ne se comportent pas pareil au raccord : le grain, la latence du mouvement, le comportement d'un visage en mouvement rapide. Marier les deux sans que ça saute aux yeux s'acquiert en montant, pas en lisant des fils de discussion.

Le monteur du début, lui, a eu sa réponse : achète la station. Media Intelligence tourne en local, l'analyse dépend donc de ta machine, et les projets multicaméras n'ont jamais été aussi lourds à porter. Reste la question qui devrait occuper les monteurs cette année. Combien de temps vas-tu continuer à facturer la partie que la machine sait déjà produire ?

## FAQ : les questions que les monteurs me posent

### Est-ce que l'IA va remplacer les monteurs vidéo ?

À ce jour, aucune note de conjoncture de l'Observatoire des métiers de la culture et des médias à l'heure de l'IA ne porte sur les monteurs image, donc personne ne peut avancer un chiffre français vérifiable sur ce métier. Ce qu'on observe dans les fonctions livrées par Adobe et Blackmagic, c'est une automatisation de la préparation et de l'assemblage brut, pas de la décision de coupe. Mon avis, formé sur mes propres projets : la pression porte d'abord sur les prestations facturées à la journée pour des tâches d'exécution, et beaucoup moins sur le montage narratif. Le métier se resserre sur le jugement, la direction de version et la relation client.

### Quels outils de montage assisté valent vraiment la peine en 2026 ?

Ceux qui font gagner du temps sur la manutention. Dans Premiere, Media Intelligence pour retrouver un plan par description et la traduction de sous-titres, annoncée sur 27 langues, sont les deux fonctions que j'utilise le plus. Dans Resolve, IntelliScript pour dégrossir une scène dialoguée quand tu as un scénario en Final Draft ou en texte brut, et IntelliSearch pour fouiller les rushes. Attention au détail budgétaire : le DaVinci Neural Engine est réservé à Resolve Studio, vendu 295 dollars en licence perpétuelle. La version gratuite monte très bien, mais sans l'essentiel de l'assistance.

### Combien de temps l'IA fait-elle gagner sur un dérushage ?

Je ne publierai pas de pourcentage, parce que le gain dépend entièrement de ta matière : nombre de caméras, qualité du son, présence ou non d'un script, formats des fichiers. Sur des rushes bien captés et bien transcrits, retrouver un plan par description prend quelques secondes au lieu de plusieurs minutes de navigation. Sur du son difficile, capté en extérieur avec du vent et plusieurs voix qui se chevauchent, la transcription se dégrade et l'index avec elle. La bonne méthode reste de mesurer sur un projet réel avant de promettre un délai raccourci à un client.

### Faut-il basculer sur Premiere ou sur Resolve pour profiter de l'IA ?

Les deux ont couvert le même terrain avec des approches différentes, donc le critère de choix reste ton métier plutôt que la liste de fonctions. Resolve pousse fort sur l'assemblage à partir du scénario et sur la détection de locuteur, ce qui parle à la fiction scriptée et au multicaméra. Premiere pousse sur la recherche dans les médias et sur la finition des livrables multilingues, ce qui parle à la commande et au contenu de marque. Changer d'outil coûte plusieurs semaines de productivité. Je ne le conseille que si le manque est structurel, pas pour une fonction isolée.

### Un assistant monteur a-t-il encore un avenir ?

Le poste est celui dont la fiche de tâches recoupe le plus les fonctions automatisées : ingest, contrôle, dérushage, indexation, sous-titres, préparation de versions. Il ne disparaît pas pour autant, mais il doit se déplacer vite vers ce qu'aucun index ne produit, à savoir la connaissance fine de la matière et la préparation des choix du chef monteur. Un assistant capable de dire quelle prise tient sur la deuxième moitié seulement, ou d'anticiper un problème de mixage, reste précieux. Un assistant qui ne fait que nommer des fichiers est exposé, et il le sait souvent avant tout le monde.

### Dois-je prévenir mon client quand j'utilise l'IA au montage ?

Sur le plan commercial, oui, et pas seulement par honnêteté : c'est aussi ce qui te permet de justifier ta méthode et ton prix. Sur le plan réglementaire, le règlement européen sur l'IA impose des obligations d'information sur certains contenus générés ou manipulés depuis le 2 août 2026, avec des aménagements pour les œuvres manifestement artistiques. Il y a aussi un enjeu de confidentialité à cadrer : Adobe indique que l'analyse de Media Intelligence est locale, alors que Generative Extend s'appuie sur le cloud Firefly. Un client sous accord de confidentialité strict ne traitera pas ces deux cas de la même façon.

### Comment facturer quand un outil divise mon temps de préparation ?

Sors du tarif journalier sur les tâches qui se sont automatisées, sinon tu factures mécaniquement moins pour un livrable identique. Vends un livrable, un nombre de versions inclus, un délai, et facture séparément les allers-retours au delà. Intègre les crédits génératifs à ton devis comme un consommable de production, au même titre que le stockage ou une licence, parce que leur consommation varie avec le format, la cadence et la résolution. Le glissement à opérer est simple à énoncer et difficile à tenir face à un client : tu vends des décisions et une responsabilité, pas des heures de manutention.

### Quelles compétences travailler en priorité si je monte aujourd'hui ?

Trois, dans cet ordre. Le raccord d'images hybrides, parce que mêler un plan généré et un plan capté sans que ça saute aux yeux demande de l'œil et de la pratique, et que peu de monteurs le maîtrisent. La tenue de salle, autrement dit défendre une version, écouter une contradiction, faire trancher, parce que c'est ce qui te rend difficile à remplacer par une prestation moins chère. La traçabilité enfin, parce que les producteurs commencent à demander qui a généré quoi et quand. Le reste, les fonctions logicielles, s'apprend en une semaine sur un projet réel.

## Pour aller plus loin

- La documentation officielle d'Adobe sur [Generative Extend](https://helpx.adobe.com/premiere/desktop/edit-projects/edit-with-generative-ai/generative-extend-faq.html), avec ses limites de durée et le comportement du dialogue.
- La page [What's New de DaVinci Resolve](https://www.blackmagicdesign.com/products/davinciresolve/whatsnew) chez Blackmagic Design, pour les fonctions livrées version par version.
- Les [notes de conjoncture de l'Observatoire des métiers à l'heure de l'IA](https://observatoires.afdas.com/observatoires/audiovisuel), portées par Audiens, l'Afdas et le CNC, à lire avant les prédictions.

Si tu montes et que tu te demandes quoi faire de tout ça, commence par la mesure : une semaine chronométrée, tâche par tâche, décision ou exécution. Tu sauras quoi protéger, quoi automatiser et quoi refacturer autrement. C'est moins spectaculaire qu'une prédiction sur dix ans, et beaucoup plus utile lundi matin.
