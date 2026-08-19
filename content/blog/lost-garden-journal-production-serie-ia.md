---
title: "Lost Garden : journal de production d'une série IA"
date: "2026-08-19"
category: "analyses"
excerpt: "Lost Garden est ma série animée IA. Le journal de production complet : la bible, le découpage, le son, les dérives de personnage et ce que je referais."
thumbnail: "/images/blog/lost-garden-journal-production-serie-ia/hero.webp"
metaTitle: "Lost Garden : journal de production d'une série IA"
metaDescription: "Le journal de production de Lost Garden, série animée IA de Frank Houbre : bible visuelle, découpage, génération par blocs, son et continuité entre épisodes."
tags: ["lost garden", "série ia", "production série animée", "continuité visuelle", "frank houbre"]
author: "Frank Houbre"
---

# Lost Garden : journal de production d'une série IA

Un court métrage IA vous pardonne à peu près tout. Le personnage change légèrement de visage entre deux plans, la lumière glisse d'un bleu vers un vert, la silhouette perd trois centimètres au montage, et personne ne le remarque parce que le film est fini avant que l'œil ait eu le temps de fabriquer une mémoire.

Une série, non.

Le vrai test d'un projet IA, c'est l'épisode 2. Le moment où vous rouvrez un dossier vieux de plusieurs semaines et où vous devez régénérer un personnage que vous aviez validé, dans une lumière que vous aviez calée, avec un outil qui a peut être été mis à jour entre temps. C'est là que la plupart des séries IA s'arrêtent. Ce qui les tue, c'est rarement la qualité du premier plan. C'est l'impossibilité de le reproduire.

Lost Garden est mon terrain d'essai sur ce problème précis. Ce qui suit est le journal de production, avec les endroits où ça a cassé.

![Personnage posant une lanterne allumée dans une serre victorienne abandonnée, référence visuelle de la série IA Lost Garden](/images/blog/lost-garden-journal-production-serie-ia/hero.webp)

## Pourquoi une série après deux courts métrages

J'ai fait [Ronces, un court métrage entièrement généré par IA](/blog/ronces-coulisses-court-film-ia), puis [VOIDBORN, un animé qui a tourné en festivals](/blog/voidborn-anime-ia-festival-coulisses). Ces deux projets ont validé des choses réelles : qu'on peut tenir une intention narrative sur la durée d'un court, qu'un jury évalue le film et pas la technique, qu'une direction artistique claire coûte moins cher en itérations qu'une direction floue.

En revanche, ils n'ont mis à l'épreuve que la capacité à finir un projet, jamais celle d'y revenir six semaines plus tard.

Lost Garden est une série animée. L'épisode 1 s'appelle *The Awakening of the Lantern Knight* et vit sur la chaîne LostGarden Anime. Le format change tout. Sur un court, votre bible visuelle peut tenir dans votre tête pendant les trois semaines de production. Sur une série, votre tête n'est pas un support de stockage fiable. Vous allez oublier la valeur exacte de la lumière de la serre, l'angle de la lanterne, la façon dont vous aviez décidé de couper les plans de dos.

[Voir l'épisode 1 de Lost Garden](https://www.youtube.com/watch?v=eZ_JlaLDJ-8)

Le vrai problème, c'est celui ci : sur une série, une bonne partie du travail consiste à documenter ses propres décisions pour pouvoir les rejouer. Et ça se conçoit avant la première image, pas après le premier raccord raté.

## La bible avant la première image

J'ai commencé Lost Garden par un document, pas par une génération. Ça a l'air scolaire. C'est la décision qui a fait gagner le plus de temps sur l'ensemble du projet.

Une bible utilisable, ce n'est pas un joli PDF de présentation. C'est un outil de travail que vous ouvrez trente fois par jour pendant la production. La mienne contient :

- une fiche par personnage, écrite en langage de prompt et pas en langage littéraire : les proportions, la matière des vêtements, ce qui doit rester identique et ce qui a le droit de bouger ;
- une fiche par décor, avec la source de lumière dominante, sa direction, sa température, et ce qu'on voit toujours à l'arrière plan ;
- une palette verrouillée : le vert de lanterne, les bleus de nuit, la valeur des noirs, notée en références visuelles plutôt qu'en impressions ;
- un langage caméra. Sur Lost Garden, j'ai banni les mouvements rapides parce qu'ils déclenchent des artefacts que je n'ai pas envie de nettoyer sur vingt plans ;
- les règles de raccord : comment on entre dans une scène, comment on en sort, quelle durée minimum pour qu'un plan respire.

![Mur d'atelier couvert de photogrammes imprimés épinglés en rangées pour la continuité d'une série animée IA](/images/blog/lost-garden-journal-production-serie-ia/workflow-1.webp)

Ce qui compte, c'est que chaque ligne de la bible soit actionnable. "Ambiance mélancolique" ne sert à rien. "Lumière unique par le bas, source chaude, contre jour bleu, jamais de fill frontal" sert tous les jours.

Si vous voulez la version méthode plutôt que la version journal, j'ai détaillé la structure dans [ma bible de production sous Notion pour un film ou une série](/blog/notion-ia-bible-production-film-serie) et la partie décors dans [créer une bible de lieux et de décors pour un projet IA](/blog/creer-bible-lieux-decor-projet-ia).

> 💡 **Le cut de Frank :** votre bible doit contenir vos ratés. Quand un prompt produit systématiquement un défaut, notez le prompt fautif à côté du bon. Six semaines plus tard, vous ne vous souviendrez plus pourquoi vous aviez écarté cette formulation, et vous la réécrirez.

## Le journal, épisode par épisode

Voici l'ordre réel dans lequel je travaille. Il n'est pas négociable, et chaque fois que je l'ai contourné pour gagner du temps, j'ai perdu une journée.

### Étape 1 : le découpage avant la génération

J'écris la scène, je la découpe en plans, et je décris chaque plan en une ligne. Valeur, axe, durée approximative, intention. Rien n'est généré à ce stade.

La tentation, quand on a un outil de génération sous la main, c'est de sauter cette étape. On tape un prompt, on regarde ce qui sort, et on se laisse guider par ce que la machine propose. Ça produit des jolis plans qui ne racontent rien, et un montage qui ressemble à une bande démo.

Le découpage écrit sert aussi de filtre budgétaire. Un plan que je n'arrive pas à décrire en une ligne est un plan que je n'ai pas pensé, et je le coupe avant de dépenser des générations dessus. J'ai décrit cette logique en détail dans [mon workflow complet, de l'idée au film IA](/blog/workflow-complet-idee-film-ia-realiste).

### Étape 2 : générer par blocs, jamais plan par plan

L'erreur classique sur une série : traiter chaque plan comme un projet indépendant. Vous ouvrez l'outil, vous générez le plan 12, vous êtes content, vous fermez. Le lendemain vous générez le plan 13 avec un prompt légèrement différent parce que vous avez oublié la formulation exacte de la veille, et la continuité part.

Je génère par blocs de plans qui partagent le même décor et la même lumière. Un bloc, une session, un jeu de références chargées une seule fois. Ça réduit mécaniquement la dérive parce que les plans du bloc sont produits dans les mêmes conditions.

C'est exactement cette gymnastique de références qui m'a poussé à construire mon propre outil. Recopier à la main une fiche personnage dans un champ de prompt, dix fois par jour, sur plusieurs épisodes, ça finit par devenir absurde. J'ai raconté ça dans [pourquoi j'ai construit Imaginode, mon canvas IA à nodes](/blog/pourquoi-jai-construit-imaginode-canvas-ia) : l'idée est de garder les références branchées sur les plans au lieu de les recoller manuellement.

### Étape 3 : monter avant de finir

Je monte l'épisode avec des plans non finalisés. Rendus corrects, pas rendus finaux. Le montage me dit quels plans sont trop longs, lesquels ne servent à rien, lesquels manquent.

Ensuite seulement je refais les plans qui survivent au montage. Finir un plan avant de savoir s'il reste au montage, c'est payer pour du travail qu'on jette.

Cette inversion est peut être la seule chose qui rend une série IA soutenable pour une personne seule. Le coût réel d'un épisode se calcule en plans multipliés par le nombre de fois où vous les relancez.

## Court métrage IA contre série IA : ce qui change vraiment

| Ce qu'on gère | Court métrage IA | Série IA |
| --- | --- | --- |
| Mémoire du projet | Votre tête suffit | Une bible écrite, obligatoire |
| Cohérence des personnages | Sur quelques minutes | Sur plusieurs épisodes et plusieurs semaines |
| Palette et lumière | Décidées en cours de route | Verrouillées avant le premier plan |
| Stabilité des outils | Le projet finit avant la mise à jour | Le modèle peut changer entre deux épisodes |
| Coût dominant | Génération des plans | Régénération pour cause de dérive |
| Rythme de travail | Sprint | Cadence tenable sur la durée |
| Risque principal | Ne pas finir | Finir un épisode incohérent avec le précédent |

La colonne de droite explique pourquoi tant de séries IA s'arrêtent après le pilote. Le pilote est un court métrage déguisé. L'épisode 2 est le premier vrai épisode.

## Le son, la partie que tout le monde repousse

Sur une série, le son est le premier endroit où l'amateurisme se voit. Ou plutôt s'entend, ce qui est pire, parce que l'oreille pardonne beaucoup moins que l'œil.

Deux problèmes reviennent à chaque épisode.

Le premier : les ambiances. Une image générée arrive muette. Si vous posez juste une musique par dessus, vous obtenez une bande démo. Il faut construire un espace sonore, une nappe qui donne au décor une profondeur que l'image seule n'a pas. Sur Lost Garden, la serre a une signature sonore fixe qui revient d'un épisode à l'autre. Le spectateur ne l'analyse pas, mais il reconnaît le lieu avant même de le voir.

![Enregistreur de terrain et micro canon sur trépied dans l'herbe humide à l'aube pour capter des ambiances](/images/blog/lost-garden-journal-production-serie-ia/workflow-2.webp)

Le second : la cohérence de niveau. Si l'épisode 1 est mixé plus fort que l'épisode 2, le spectateur touche son volume, et ce geste le sort du film. Je cale mes mixes sur une cible de loudness fixe pour toute la série. La recommandation [EBU R 128](https://tech.ebu.ch/publications/r128) fixe une loudness moyenne de programme à -23 LUFS, et même si les plateformes de streaming appliquent leurs propres normalisations, avoir une cible unique et s'y tenir garantit que vos épisodes se ressemblent entre eux. C'est le point important : la cohérence interne compte plus que la valeur choisie.

> 💡 **Le cut de Frank :** enregistrez vos propres ambiances quand vous le pouvez. Un vrai vent dans de l'herbe mouillée, capté à l'aube avec un enregistreur de terrain, donne à une image générée une crédibilité qu'aucune banque de sons libre de droits ne fournit, parce que personne d'autre ne l'a utilisée.

## Ce qui casse en cours de série, et comment je le répare

### La dérive du personnage

C'est la panne numéro un. Le visage bouge, l'âge apparent change, un détail de costume disparaît. Elle vient presque toujours d'une référence rechargée différemment ou d'un prompt reformulé de mémoire.

La réparation demande de remonter à la source. Je reviens à la fiche du personnage, je régénère la référence maîtresse, et je repars du bloc entier plutôt que du plan fautif. Retoucher un seul plan crée une île visuelle qui saute encore plus aux yeux. J'ai détaillé les causes dans [pourquoi vos personnages changent à chaque scène](/blog/pourquoi-personnages-changent-chaque-scene-ia).

### La dérive de la lumière

Plus sournoise. Elle ne se voit pas sur un plan, elle se voit au montage, quand deux plans censés être dans la même scène ne racontent pas la même heure de la journée.

Ma parade est simple : je génère un plan témoin par décor, je le garde ouvert à côté pendant toute la session, et je compare à l'œil avant de valider. La méthode n'a rien d'élégant, elle attrape les écarts avant qu'ils arrivent au montage.

### La dérive du rythme

Elle arrive quand on écrit l'épisode 3 en pensant à ce qu'on sait générer facilement plutôt qu'à ce que l'histoire demande. Le symptôme est reconnaissable : les épisodes se mettent à avoir la même forme, les mêmes types de plans, la même durée de scène.

Le remède est d'écrire l'épisode entier avant de toucher un outil. Toujours le même principe, à une échelle plus grande.

### La dérive de l'outil

Un modèle mis à jour ne rend plus exactement pareil. Les outils bougent, et un réglage validé au printemps ne se reproduit pas forcément à l'identique à l'automne. La seule protection réelle consiste à archiver les sorties validées en pleine résolution, à conserver les prompts exacts, et à considérer chaque bloc de plans comme un livrable clos qu'on ne rouvre pas sans raison.

Si vous voulez le panorama des raccords qui cassent un film IA, il est ici : [erreurs de raccord et incohérences visuelles à éviter](/blog/film-ia-erreurs-raccord-incoherences-visuelles-eviter).

## Ce que je referais autrement

D'abord, j'écrirais la bible sonore en même temps que la bible visuelle. Sur les premières scènes, j'ai traité le son comme une étape de finition, alors que c'est une décision de conception au même titre que la palette.

Ensuite, je fixerais la cadence de publication une fois un épisode complet produit, jamais avant. Annoncer un rythme qu'on ne connaît pas encore revient à se condamner à publier un épisode faible pour tenir une promesse.

Enfin, je verrouillerais la chaîne de livraison dès l'épisode 1 : codec, conteneur, résolution, niveau audio. Les [réglages d'encodage recommandés par YouTube](https://support.google.com/youtube/answer/1722171) donnent une base claire, et s'y tenir dès le départ évite de découvrir à l'épisode 4 que les trois premiers ne se lisent pas de la même façon.

Si je devais résumer ce que Lost Garden m'a appris : sur une série, ce qui vous distingue se joue moins dans le prompt du jour que dans votre capacité à le retrouver et à le rejouer dans six mois.

La série continue. Je documenterai la suite avec le même niveau de détail, y compris quand ça casse.

## FAQ

**Lost Garden est un court métrage ou une série ?**

C'est une série animée IA. Le premier épisode, *The Awakening of the Lantern Knight*, est publié sur la chaîne LostGarden Anime. Ce qui change par rapport à mes projets précédents tient surtout à la contrainte de continuité : un court métrage se termine avant que les problèmes de cohérence aient le temps d'apparaître, une série impose de retrouver exactement le même univers visuel plusieurs semaines ou plusieurs mois après l'avoir créé. C'est cette contrainte qui a dicté toute la méthode décrite dans cet article, à commencer par la bible écrite avant la première génération.

**Combien de temps faut il pour produire un épisode de série IA ?**

Ça dépend tellement du format, du niveau d'exigence et du nombre de plans que donner un chiffre serait malhonnête. Ce que je peux dire, c'est ce qui fait varier la durée : le nombre de régénérations. Un épisode avec une bible solide et un découpage écrit se produit dans un temps prévisible, parce que vous savez ce que vous générez et pourquoi. Un épisode improvisé au fil des générations peut prendre deux ou trois fois plus longtemps, non pas à cause de la technique, mais parce que vous refaites des plans que vous auriez pu ne jamais lancer.

**Quels outils utilisez vous pour Lost Garden ?**

Je change d'outils en fonction de ce que chaque plan demande, et je préfère ne pas figer une liste qui serait périmée dans trois mois. Ce qui compte davantage, c'est la structure autour des outils : des références stockées et réutilisables, des prompts archivés, un plan témoin par décor, et un montage fait avant la finition. C'est d'ailleurs pour tenir cette structure que j'ai fini par construire mon propre canvas à nodes. Sur une série, l'élément décisif reste le système qui garde vos décisions au chaud entre deux sessions, bien plus que la marque du générateur.

**Comment garder un personnage identique sur plusieurs épisodes ?**

Trois règles. Une : une fiche écrite en langage de prompt, pas en langage littéraire, avec ce qui doit rester strictement identique et ce qui a le droit de bouger. Deux : une image de référence maîtresse validée une fois, réutilisée systématiquement, jamais régénérée à la volée sous prétexte qu'un rendu vous plaît davantage. Trois : générer par blocs de plans dans une même session plutôt que plan par plan sur plusieurs jours. La dérive vient presque toujours d'une reformulation de mémoire entre deux sessions éloignées, pas d'une faiblesse du modèle.

**Faut il un budget important pour produire une série IA ?**

Le budget dominant n'est pas la génération, c'est la régénération. Chaque plan que vous refaites parce qu'il ne raccorde pas avec le précédent coûte deux fois : le rendu initial et le rendu correctif, plus votre temps. Une direction artistique verrouillée et un découpage écrit réduisent bien plus les coûts qu'un abonnement moins cher. En pratique, la préparation est le poste d'économie le plus rentable d'une production IA, et c'est celui que la plupart des créateurs sautent parce qu'il ne produit aucune image visible.

**Comment gérer une mise à jour de modèle en plein milieu d'une série ?**

En considérant chaque bloc de plans comme un livrable clos. Vous archivez les sorties validées en pleine résolution, vous conservez les prompts exacts et les références utilisées, et vous ne rouvrez pas un bloc terminé sans raison sérieuse. Si une mise à jour change le rendu, elle ne touchera que ce que vous n'avez pas encore produit. Pour la suite, deux options : accepter le nouveau rendu et l'absorber à une frontière d'épisode, où l'œil pardonne, ou revenir à l'ancien réglage si l'outil le permet encore.

**Le son mérite il autant d'attention que l'image sur une série IA ?**

Davantage, en proportion du temps que la plupart des gens y consacrent. L'image générée capte l'attention pendant la production, et le son se retrouve traité en fin de course. Or c'est le son qui installe un lieu, qui donne le sentiment de continuité entre deux épisodes, et qui trahit le plus vite un travail bâclé. Une signature sonore fixe par décor et une cible de loudness unique pour toute la série coûtent peu à mettre en place et changent complètement la perception de sérieux du projet.

**Par où commencer si je veux lancer ma propre série IA ?**

Par l'épisode 2, mentalement. Écrivez d'abord la bible, puis le découpage complet du premier épisode, et posez vous cette question avant de générer quoi que ce soit : serais je capable de refaire ce plan à l'identique dans trois mois avec ce que j'ai écrit ? Si la réponse est non, il manque quelque chose dans votre documentation, pas dans votre technique. Commencez petit, un épisode court et un seul décor maîtrisé, et augmentez l'ambition une fois que le système tient.

<!-- PUBLICATION DATE: 2026-08-19 -->
