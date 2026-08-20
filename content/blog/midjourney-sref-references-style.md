---
title: "Midjourney SREF : maîtriser les références de style"
date: "2026-08-20"
category: "tutoriels"
excerpt: "Le guide terrain du paramètre SREF de Midjourney : choisir une ancre, régler le poids avec --sw, fixer la version avec --sv, tenir toute une série."
thumbnail: "/images/blog/midjourney-sref-references-style/hero.webp"
metaTitle: "Midjourney SREF : maîtriser les références de style"
metaDescription: "Utiliser le paramètre SREF de Midjourney pour tenir un style sur toute une série : réglage de --sw, choix de --sv, workflow complet et erreurs à éviter."
tags: ["midjourney sref", "référence de style midjourney", "midjourney", "direction artistique ia", "cohérence visuelle"]
author: "Frank Houbre"
---

# Midjourney SREF : maîtriser les références de style

La première image est superbe. La deuxième tient encore. À la septième, vous ne reconnaissez plus rien : la lumière a viré, le grain a disparu, les visages sont redevenus lisses. Vous relisez votre prompt, il est identique au mot près. Et pourtant la série ne raconte plus la même chose.

C'est le mur que tout le monde prend en produisant plus d'une image à la fois. Un visuel isolé, ça se réussit à l'instinct. Une campagne de douze visuels, un storyboard de quarante cases ou une série d'épisodes, ça demande autre chose : un moyen de dire au modèle « refais exactement ce monde visuel, change juste ce qui se passe dedans ».

C'est le travail du paramètre `--sref`. Ce n'est pas un filtre qu'on pose sur une image finie, c'est une ancre que le modèle consulte à chaque génération. Voici comment je m'en sers en production, avec les réglages que je pousse vraiment, et les endroits où ça casse.

![Studio photo publicitaire en lumière du matin, trois objets identiques alignés sur un fond neutre avec une charte colorimétrique posée dans le cadre](/images/blog/midjourney-sref-references-style/hero.webp)

## Ce que fait vraiment SREF, et ce qu'il ne fait pas

SREF veut dire style reference. Vous donnez à Midjourney une image ou un code, et le modèle en extrait la signature visuelle : la palette, la façon dont la lumière tombe, le contraste, la matière, le rendu de peau, le niveau de grain. Il l'applique ensuite à un sujet que vous décrivez par ailleurs.

La distinction est capitale, parce qu'elle explique 90 % des déceptions. SREF ne copie pas le contenu de la référence. Il copie l'ambiance. Si votre image de référence montre une femme en imperméable sur un quai la nuit et que vous demandez « chef de chantier à midi », vous n'obtiendrez ni la femme, ni le quai, ni la nuit. Vous obtiendrez un chef de chantier traité comme cette image nocturne : même densité d'ombres, même froideur de palette, même façon de rendre le tissu mouillé. Le sujet vient du prompt, l'habillage vient du SREF.

Pour la ressemblance d'un personnage précis, ce n'est pas ce paramètre qu'il faut, mais la référence de personnage. Confondre les deux fait perdre des heures.

Deuxième malentendu fréquent : SREF ne remplace pas la description. Beaucoup de débutants collent un code trouvé sur un compte X, écrivent trois mots de sujet, et s'étonnent que le résultat soit générique. Le style de référence agit sur ce que le prompt a déjà posé. Si votre prompt ne dit rien de la lumière, de l'angle et de la matière, SREF n'a presque rien sur quoi mordre. Si vous voulez la méthode complète de rédaction en amont, elle est dans [notre guide complet sur Midjourney](/blog/midjourney-guide-complet), et la logique de séparation entre style et sujet est détaillée dans [notre méthode pour contrôler le style visuel d'une génération IA](/blog/comment-controler-style-visuel-generation-ia).

Troisième point, plus subtil. Une référence de style porte aussi ses défauts. Si l'image que vous prenez comme ancre a une peau trop propre et un bokeh de démo, vous venez de verrouiller ces défauts sur toute la série. Le choix de la référence est une décision de direction artistique, pas un clic.

## Les trois paramètres à connaître

Tout tient en trois commandes. La [documentation officielle Midjourney sur la référence de style](https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference) reste la source à jour, mais voici ce qu'elles font concrètement.

`--sref` prend soit l'adresse d'une image accessible publiquement, soit un code numérique. Vous pouvez aussi écrire `--sref random` pour que Midjourney pioche un style dans sa bibliothèque interne, ce qui est un excellent moteur d'exploration quand vous partez d'une page blanche.

`--sw` règle la force d'application, entre 0 et 1000, avec 100 par défaut. C'est le bouton le plus utile de tout le système, et le plus mal utilisé.

`--sv` choisit la version de l'algorithme de référence de style. Les versions n'interprètent pas la même chose dans votre image d'ancrage, et surtout elles ne donnent pas le même arbitrage entre style et sujet.

| Paramètre | Rôle | Valeurs | Ce qui arrive si vous l'ignorez |
| --- | --- | --- | --- |
| `--sref` | Ancre le style sur une image ou un code | URL d'image, code, ou `random` | Chaque génération repart du style moyen du modèle |
| `--sw` | Dose la force du style | 0 à 1000, défaut 100 | Vous subissez un dosage qui ne correspond ni à un usage doux ni à un verrouillage fort |
| `--sv` | Fixe la version de l'algorithme | dépend du modèle utilisé | Vos codes peuvent rendre différemment après une mise à jour |
| `--p` | Applique un moodboard ou votre profil de goût | ID de moodboard | Vous passez à côté d'une mémoire de style persistante |

Un détail que beaucoup découvrent trop tard : d'après la [documentation Midjourney sur les moodboards](https://docs.midjourney.com/hc/en-us/articles/39193335040013-Moodboards), le moodboard ne se combine ni avec `--sv` ni avec `--sw`. Vous ne pouvez donc pas doser un moodboard comme vous dosez une référence de style. Ce sont deux outils différents, avec deux usages différents, et c'est une raison sérieuse de rester sur SREF quand vous avez besoin de précision.

> 💡 **Le cut de Frank :** avant de toucher au prompt, faites une seule chose. Générez la même phrase avec `--sw 50`, `--sw 100`, `--sw 300` et `--sw 700`. En quatre images, vous saurez où votre référence commence à écraser le sujet. Ce test prend trois minutes et vous évite deux heures d'itérations à l'aveugle.

## Mon workflow SREF en cinq étapes

C'est le protocole que j'applique sur un lot de visuels publicitaires ou sur un storyboard. Rien d'exotique, mais l'ordre compte.

### 1. Fabriquer sa référence au lieu de la chercher

Le réflexe débutant, c'est d'aller chercher un code de style dans une bibliothèque en ligne. Ça marche pour explorer, ça ne marche pas pour un projet signé. Un code populaire est utilisé par des milliers de personnes, et votre campagne finit par ressembler à tout le reste.

Je fais l'inverse. Je génère d'abord une image de calage, sans référence, avec un prompt très détaillé sur la lumière et la matière. Je pousse jusqu'à obtenir l'image qui incarne le projet. Ensuite, cette image devient mon ancre : c'est elle que je passe en `--sref`. Le style appartient au projet, pas à un compte de partage.

Si vous partez vraiment de zéro, `--sref random` est utile. Depuis [une mise à jour officielle du 25 juin 2026](https://updates.midjourney.com/random-styles-in-draft-mode/), le mode brouillon combiné à `--sref random` sort 24 images de styles différents d'un coup. C'est de l'exploration rapide et pas chère, à traiter comme une planche de recherche, pas comme un livrable.

### 2. Trouver le bon poids

Une fois l'ancre choisie, la valeur de `--sw` fait tout. Voici les repères que j'utilise, issus de mes propres séries, pas d'une table théorique.

- Entre 20 et 60 : une teinte, un parfum. Utile quand vous voulez juste réchauffer une série sans imposer une signature forte.
- Autour de 100 : le réglage neutre, bon point de départ pour une première salve.
- Entre 200 et 400 : la zone que j'utilise le plus en production sérielle. Le style tient d'une image à l'autre, le sujet reste lisible.
- Au dessus de 600 : verrouillage. Le style prend le pouvoir, les sujets se ressemblent tous, et les scènes complexes se simplifient toutes seules. Réservé aux textures, aux fonds, aux ambiances.

Le symptôme d'un `--sw` trop haut est facile à reconnaître : vos personnages perdent leur action. Vous aviez demandé quelqu'un qui court, vous obtenez quelqu'un qui pose. Le style a mangé le récit. Baissez de moitié et regardez ce qui revient.

![Main tenant un nuancier de couleurs déployé devant un mur fraîchement peint sur un décor en construction, lumière chaude de fin d'après midi](/images/blog/midjourney-sref-references-style/workflow-1.webp)

### 3. Verrouiller la version

C'est l'étape que tout le monde saute, et c'est celle qui fait revenir les gens en disant « mon code ne marche plus ».

Midjourney a fait évoluer plusieurs fois son moteur de référence de style. Les versions successives, sélectionnables via `--sv`, ne lisent pas votre image d'ancrage de la même façon. Sur la V8 alpha, [des tests publiés par la communauté](https://geekycuriosity.substack.com/p/midjourney-v8-alpha-the-new-style) montrent que `--sv 7` laisse le style prendre le dessus sur le sujet décrit, alors que `--sv 6` donne plus de poids au contenu du prompt. Ce n'est pas un détail cosmétique : c'est un arbitrage entre direction artistique et narration.

Conséquence pratique : sur un projet qui va durer plusieurs semaines, notez la version que vous utilisez et gardez la. Un code trouvé dans une bibliothèque ancienne peut très bien rendre autre chose aujourd'hui si la version d'algorithme n'est pas celle avec laquelle il a été découvert. Si le rendu change du jour au lendemain alors que votre prompt n'a pas bougé, c'est le premier endroit à vérifier.

### 4. Générer par blocs, pas à l'unité

Une fois l'ancre et les réglages fixés, je ne génère plus image par image. Je fais des blocs de six à huit plans qui partagent la même lumière et le même lieu, avec la même ligne de paramètres collée à la fin de chaque prompt.

Concrètement, ma ligne de fin ressemble à ça, et elle ne change pas de la journée :

`--sref <mon ancre> --sw 280 --sv <version notée>`

Ce qui varie, c'est uniquement le début du prompt : sujet, action, angle, focale implicite. Cette discipline a un effet secondaire précieux. Quand une image sort mal, vous savez que le problème vient de la description, jamais du style, puisque le style est constant. Vous debuggez une variable à la fois.

### 5. Archiver l'ancre comme un asset de production

Une référence de style est un élément de production au même titre qu'une LUT ou une charte. Je range dans le dossier du projet l'image d'ancrage, la ligne de paramètres complète, et deux ou trois exemples validés. Six semaines plus tard, quand le client demande trois visuels de plus, la série reprend en dix minutes au lieu d'être refabriquée de mémoire.

Ceux qui travaillent en équipe apprécieront un détail : cette ligne de paramètres se transmet. Un collaborateur qui la colle obtient le même univers que vous, sans avoir à comprendre votre goût.

## SREF, moodboard ou description écrite : lequel choisir

Les trois approches font le même métier avec des compromis différents. Voici comment je tranche.

| Besoin | Meilleur outil | Pourquoi |
| --- | --- | --- |
| Tenir une série de visuels sur un projet précis | `--sref` avec `--sw` calé | Dosable, reproductible, transmissible |
| Faire émerger un goût personnel sur le long terme | Moodboard `--p` | Mémoire de style persistante, mais non dosable |
| Explorer sans direction arrêtée | `--sref random` en mode brouillon | Volume et surprise, coût faible |
| Contrôler une lumière ou une matière très précise | Description écrite détaillée | Aucune référence ne bat une consigne explicite sur un point technique |

Le meilleur résultat vient presque toujours d'une combinaison : une description solide qui porte la scène, plus une référence qui porte l'ambiance. La référence seule produit du joli sans intention. La description seule produit de l'intention sans continuité. Sur ce point précis, [notre article sur les prompts au rendu photographique](/blog/secrets-prompts-rendu-photographique-ia) donne la structure de description que j'utilise avant même de penser à une référence.

## Ce que les débutants cassent avec SREF

Première erreur, l'empilement de références. Trois ancres différentes dans le même prompt, en espérant une fusion élégante. Ce qui sort est un compromis mou, sans signature. Une ancre, un projet. Si vous voulez mélanger, faites le en amont, en générant une image de calage qui contient déjà ce mélange, puis utilisez celle là.

Deuxième erreur, changer d'ancre en cours de série. Une image ne leur plaît pas, ils remplacent la référence, relancent, et cassent la cohérence des vingt plans déjà validés. Quand une image rate, corrigez le prompt de cette image. Le style est le socle, on n'y touche pas en pleine production.

Troisième erreur, confondre style et cadrage. Une référence en plan large ne va pas vous donner des plans larges. Le cadrage se demande dans le prompt. J'ai vu des gens pousser `--sw` à 900 en espérant récupérer la composition de leur image de référence. Ils récupèrent la couleur et perdent le sujet.

Quatrième erreur, garder un poids fort sur les scènes chargées. Plus il y a de personnages, d'objets et d'actions dans le plan, plus un style dominant simplifie tout. Sur un plan à trois personnages, je descends souvent le poids d'un tiers par rapport à mes plans serrés.

Cinquième erreur, oublier le rendu final. Une image validée sur écran à 100 % peut s'effondrer une fois imprimée ou intégrée dans un montage. Le grain et les micro imperfections que votre référence apporte sont justement ce qui fait tenir l'image en grand format. Si votre série sent encore la génération automatique malgré une belle ancre, la cause est en général ailleurs, et [notre article sur l'effet image IA générée](/blog/comment-eviter-effet-image-generee-ia) liste les signaux à corriger.

![Deux tirages photo posés côte à côte sur le hayon d'un utilitaire dans un parking au crépuscule, comparaison de rendus sous éclairage mixte](/images/blog/midjourney-sref-references-style/workflow-2.webp)

Dernière erreur, calibrer sur le mauvais type de plan. Calibrer un style sur un portrait puis l'appliquer à des plans de décor ne donne rien de fiable. Calibrez sur le type de plan qui compose la majorité de votre série.

Un dernier point, moins technique. Midjourney bouge vite : la version 8.2 est sortie le 24 juillet 2026, après une V8.1 diffusée au printemps. Les comportements de style évoluent avec ces modèles. Ce qui ne bouge pas, c'est la méthode : une ancre choisie, un poids testé, une version notée, une ligne de paramètres qui ne change pas de la journée.

## Faut il passer par SREF sur tous les projets

Non, et c'est une réponse honnête. Sur une image unique, une illustration d'article, un test rapide, la référence de style ajoute une contrainte pour rien. Vous itérez plus vite avec une bonne description.

SREF devient indispensable dès qu'il y a répétition : une campagne, un storyboard, une série, une identité de marque, un jeu de vignettes qui doivent se ressembler. C'est un outil de continuité et pas un outil de qualité. Une image moyenne restera moyenne avec la plus belle des ancres. En revanche, une image que vous avez réussie devient reproductible, et c'est un problème nettement plus difficile que de réussir un joli visuel une fois.

Si vous hésitez encore entre plusieurs générateurs pour ce type de travail sériel, [notre comparatif des alternatives à Midjourney](/blog/alternatives-midjourney) situe qui gère bien la cohérence de style et qui ne la gère pas du tout.

## FAQ

**Quelle est la différence entre SREF et une référence de personnage ?**
SREF transporte l'habillage visuel : palette, lumière, contraste, matière, grain. Il ne transporte ni le sujet, ni le visage, ni le décor de l'image de référence. Une référence de personnage fait le travail inverse : elle cherche à conserver l'identité d'un individu d'une image à l'autre, quel que soit le style appliqué. Sur une production réelle, les deux se combinent : la référence de personnage tient les visages, la référence de style tient le monde autour d'eux. Confondre les deux est l'erreur la plus commune chez les débutants, et elle coûte cher en itérations inutiles avant qu'on comprenne pourquoi le personnage attendu n'apparaît jamais.

**Quelle valeur de `--sw` faut il utiliser au départ ?**
La valeur par défaut est 100, et c'est un point de départ raisonnable pour une première salve. Mais ne restez pas dessus par confort. Générez la même phrase à 50, 100, 300 et 700, regardez les quatre résultats côte à côte, et choisissez en fonction de ce que vous devez protéger. Si le sujet doit rester lisible et raconter une action, restez plutôt entre 100 et 400. Si vous fabriquez des fonds, des textures ou une ambiance sans sujet fort, vous pouvez monter beaucoup plus haut. Le bon réglage dépend de votre référence et de votre type de plan, pas d'une règle universelle.

**Pourquoi mon code SREF ne donne plus le même résultat qu'avant ?**
Parce que le moteur de référence de style a plusieurs versions, sélectionnables via `--sv`, et qu'elles n'interprètent pas une ancre de la même façon. Un code découvert avec une ancienne version peut donc rendre autre chose sur une version plus récente, même avec un prompt identique. Le réflexe à prendre est simple : notez la version d'algorithme utilisée au début du projet, et gardez la jusqu'à la fin. Si un rendu change sans que vous ayez touché au prompt, vérifiez ce paramètre en premier, avant de suspecter votre description ou le modèle lui même.

**Peut on utiliser une image personnelle comme référence de style ?**
Oui, à condition qu'elle soit accessible publiquement par une adresse, ou uploadée selon la méthode prévue par l'interface. C'est même la meilleure pratique pour un projet signé : une ancre que vous avez fabriquée vous appartient visuellement, alors qu'un code populaire circule dans des milliers de prompts. Attention tout de même à ce que vous choisissez. Les défauts de la référence se propagent à toute la série, donc une image un peu trop lisse ou trop saturée va contaminer chaque plan. Prenez le temps de générer une vraie image de calage avant de lancer la production.

**Combien de références peut on cumuler dans un prompt ?**
Techniquement, il est possible d'en indiquer plusieurs. En pratique, je le déconseille pour un travail sérieux. Le mélange de deux ou trois ancres produit un compromis sans caractère, difficile à reproduire et impossible à expliquer à un client. Si vous cherchez un croisement entre deux univers, fabriquez plutôt une image de calage qui contient déjà ce croisement, validez la, et servez vous d'elle comme ancre unique. Vous gardez une référence, donc une ligne de paramètres transmissible, et vous gardez la maîtrise de ce que vous avez réellement fusionné.

**SREF fonctionne t il aussi pour le storyboard et la prévisualisation ?**
C'est un de ses meilleurs usages. Un storyboard n'a pas besoin d'images parfaites, il a besoin d'images qui appartiennent au même film. Une ancre unique appliquée à trente ou quarante cases donne immédiatement cette impression d'univers, même si chaque case reste rapide à produire. Je descends généralement le poids sur les plans à plusieurs personnages, parce qu'un style dominant simplifie les compositions chargées. Pour la suite du travail, entre découpage, structure et production, l'enjeu devient l'organisation des plans plus que leur rendu.

**Faut il payer un abonnement spécifique pour utiliser SREF ?**
La référence de style fait partie des paramètres standards de Midjourney, elle n'est pas vendue à part. Ce qui compte davantage dans le choix d'une formule, c'est le volume de générations dont vous avez besoin, puisqu'un travail sérieux sur les références demande beaucoup d'essais de calibrage. Prévoyez large sur la phase de calage : c'est le moment où vous brûlez le plus de générations, et c'est aussi celui qui détermine la qualité de tout le reste. Une fois l'ancre validée, la production consomme beaucoup moins.

**Comment archiver un style pour le retrouver dans six mois ?**
Créez un fichier par projet avec trois éléments : l'image d'ancrage elle même, la ligne de paramètres complète recopiée telle quelle, et deux ou trois images validées qui servent de témoin. Ajoutez la date et la version du modèle utilisée. Cette fiche vaut de l'or au moment où un client revient pour trois visuels supplémentaires, parce que vous relancez la série sans rien reconstituer de mémoire. C'est exactement la même logique qu'une charte graphique en agence : ce qui n'est pas écrit finit toujours par se perdre entre deux projets.

## Le vrai gain

SREF ne va pas améliorer vos images. Il va rendre vos bonnes images répétables, et c'est une compétence beaucoup plus rare que la capacité à sortir un joli visuel isolé.

Le jour où vous livrez douze visuels qui appartiennent visiblement au même monde, sans passer trois heures à recoller les styles à la main, vous ne générez plus des images au hasard, vous dirigez une image. Ça se voit tout de suite dans un dossier client, et ça se voit encore mieux quand ce client revient six semaines plus tard.

Si vous ne devez retenir qu'une chose, prenez le temps de fabriquer votre propre ancre au lieu d'en emprunter une. Tout le reste, le poids et la version, se règle en une dizaine de générations.
