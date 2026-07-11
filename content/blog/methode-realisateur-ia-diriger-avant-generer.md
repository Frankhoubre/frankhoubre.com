---
title: "Réalisateur IA : ma méthode pour diriger avant de générer"
date: "2026-07-11"
category: "guides"
excerpt: "Avant tout prompt IA, je prends 20 minutes pour décider l'état interne, la position caméra, la logique montage. Une méthode qui change le résultat."
thumbnail: "/images/blog/methode-realisateur-ia-diriger-avant-generer/hero.webp"
---

# Réalisateur IA : ma méthode pour diriger avant de générer

La plupart des gens utilisent les outils de vidéo IA comme des machines à slot : tu mets un prompt, tu tires le levier, tu recommences si le résultat ne convient pas. Parfois tu tombes sur quelque chose de beau. Le plus souvent, tu accumules des clips isolés qui ne vont nulle part.

Pendant deux ans, j'ai cherché ce qui différenciait les créateurs qui sortaient des films cohérents de ceux qui postaient des clips épars. La réponse n'est pas dans l'outil, ni dans le modèle. Elle est dans ce qu'on fait avant de lancer le premier prompt.

Voici ma méthode. Elle tient sur trois décisions que tu prends avant de toucher un outil.

## Le problème de fond : générer sans diriger

Quand tu génères une image ou une vidéo IA, tu joues le rôle de scriptwriter, réalisateur, directeur de photographie et acteur en même temps. Mais si tu n'as pas séparé ces rôles mentalement avant de commencer, tu mélanges tout dans un seul prompt.

"Un homme en costume sombre marche dans un couloir éclairé à contre-jour, ambiance thriller années 80."

C'est un prompt correct. Mais il dit *quoi* filmer, pas *pourquoi*. Il décrit l'image, pas l'intention. Résultat : tu obtiens quelque chose de joli, visuellement correct, mais qui ne te mène nulle part.

Un réalisateur pense autrement. Il ne commence pas par "quel plan vais-je tourner". Il commence par "que veut le personnage dans cette scène, et comment la caméra traduit ce désir".

Ce décalage de posture, c'est ce que j'appelle diriger avant de générer.

## Décision 1 : l'état interne du personnage

La première décision n'est pas visuelle. Elle est psychologique.

Avant d'écrire quoi que ce soit, je me demande : que ressent ce personnage exactement à ce moment précis ? Pas une émotion générale ("il est triste"). Une nuance précise : "il vient de comprendre qu'il a fait une erreur, et il sait qu'il ne peut pas la corriger". C'est différent.

Cette précision change tout dans le prompt. Un personnage qui "réalise qu'il a tout perdu" ne marche pas de la même façon qu'un personnage qui "cache une peur". Les modèles vidéo IA actuels (Kling, Runway, Veo) sont sensibles à ces nuances quand elles sont exprimées correctement.

**Comment je le formule dans le prompt :**

Au lieu de "acteur qui marche dans la rue", j'écris "man walking alone, carrying weight, slight hesitation in each step, doesn't make eye contact". Les modèles lisent la gestuelle comme un état interne. Donne-leur la gestuelle, pas l'émotion abstraite.

> 💡 **Le cut de Frank :** La différence entre "un homme triste" et "un homme dont les épaules sont légèrement affaissées, le regard baissé, les pas un peu trop courts", c'est la différence entre un acteur de publicité et un acteur de cinéma. Le texte décrit le corps, la caméra voit le corps, le spectateur lit l'âme.

## Décision 2 : la position de la caméra comme point de vue

La caméra n'est jamais neutre. Elle a un point de vue. Et ce point de vue est une décision de mise en scène, pas une décision technique.

Quand je prépare un plan, je me pose cette question : est-ce que la caméra est du côté du personnage ou est-ce qu'elle l'observe ? Ces deux positions créent deux effets complètement différents.

**Caméra solidaire du personnage** : plan subjectif, légèrement bas, légèrement instable. Le spectateur vit l'action. Usage : scènes d'action, moments de découverte, stress.

**Caméra qui observe** : plan distant, fixe, composition symétrique. Le spectateur analyse. Usage : scènes de révélation, moments de solitude, distanciation.

**Caméra qui juge** : plongée marquée, personnage écrasé par l'espace. Le spectateur prend de la hauteur sur le personnage. Usage : moments d'échec, de culpabilité.

**Caméra à la hauteur du regard** : plan américain ou plan poitrine, légère contre-plongée. Égalité entre personnage et spectateur. Usage : dialogues, confrontations.

Je prends cette décision avant d'ouvrir un seul outil. Elle détermine ensuite tout le reste : la focale que je vais préciser dans le prompt, le mouvement de caméra, l'espace autour du personnage.

**Exemple concret :**

Pour une scène de confrontation entre deux personnages, j'ai le choix entre les filmer de face (deux corps, espace entre eux, tension visible dans la composition) ou alterner les plans (chacun vu du point de vue de l'autre). Ces deux approches ne demandent pas les mêmes prompts, pas les mêmes outils, et ne racontent pas la même chose.

Je prends cette décision d'abord. Ensuite seulement j'ouvre Kling ou Runway.

## Décision 3 : la logique de montage avant le premier clip

C'est le point que presque tout le monde saute. On génère un clip, puis un autre, puis un troisième, et on essaie de les assembler après coup. Ça ne marche presque jamais.

Avant de générer quoi que ce soit, je sais comment cette séquence va se monter. Pas dans le détail, mais dans les grandes lignes.

**Ma méthode : les trois colonnes**

Je prends une feuille ou un document. Je trace trois colonnes.

Colonne 1 : la logique dramatique (ce qui se passe narrativement).
Colonne 2 : la logique visuelle (ce que la caméra montre).
Colonne 3 : la logique émotionnelle (ce que le spectateur ressent).

Pour chaque moment clé de la séquence, je remplis les trois colonnes. Quand les trois colonnes sont alignées, je peux générer le prompt avec confiance. Quand elles sont en contradiction, je dois résoudre le problème narratif avant de générer quoi que ce soit.

**Exemple sur une séquence de 30 secondes :**

| Dramatique | Visuel | Émotionnel |
|---|---|---|
| Elle reçoit un message | Plan rapproché mains + téléphone | Curiosité légère |
| Elle lit | Plan sur son visage, micro-expression | Inquiétude croissante |
| Elle décide | Elle lève les yeux vers l'horizon, large | Détermination mêlée de peur |

Ces trois lignes me donnent trois prompts clairs. Chacun sert un moment précis. Chacun contribue au rythme global. Je ne génère pas "pour voir". Je génère avec un objectif.

## Comment j'applique ça dans la pratique

Voici mon workflow exact avant chaque session de génération.

**20 minutes de préparation, pas d'outil ouvert.**

1. J'écris l'état interne de chaque personnage pour chaque scène que je vais générer. Un ou deux mots précis par personnage par scène.

2. Je décide la position de caméra pour chaque plan : solidaire, observatrice, jugeante, ou à hauteur du regard.

3. Je remplis les trois colonnes pour ma séquence. Si une ligne laisse les trois colonnes vides, c'est un signe que la scène n'est pas encore écrite.

4. Je traduis chaque ligne en prompt. L'état interne du personnage devient la gestuelle. La position de caméra devient la focale et le cadrage. La logique dramatique devient les actions décrites.

Seulement à ce stade j'ouvre l'outil.

Cette préparation prend entre 15 et 30 minutes pour une séquence de 2 à 3 minutes. Elle me fait économiser des heures de génération en aveugle.

## Ce que ça change dans les résultats

Je ne vais pas te promettre que cette méthode te donnera toujours des résultats parfaits. Les modèles IA ont encore des limites sur la continuité de personnage, la cohérence temporelle et les mouvements fins.

Mais ce qu'elle change, c'est la direction des erreurs.

Quand tu génères sans décision préalable, les clips ratés ne te disent pas pourquoi ils ont raté. Tu recommences au hasard en espérant un meilleur tirage.

Quand tu génères avec une intention précise, les clips ratés te disent exactement où est le problème : la gestuelle était trop générique, la position de caméra ne correspondait pas à l'émotion voulue, la logique dramatique n'était pas claire dans le prompt. Tu peux corriger avec précision.

C'est la différence entre un artisan qui sait ce qu'il fait et un technicien qui applique des recettes. Les deux peuvent produire de beaux résultats. Seul l'un des deux peut expliquer pourquoi.

## Les outils s'adaptent à ta méthode, pas l'inverse

Un dernier point que j'entends souvent : "mais les modèles IA ne comprennent pas tout ça, il faut des prompts très techniques".

C'est faux dans les deux sens. Les modèles IA actuels comprennent beaucoup plus d'intentions narratives et émotionnelles qu'on ne le pense. Mais ils les comprennent en termes de corps, de gestuelle, de composition spatiale, pas en termes d'émotions abstraites.

Kling 3.0, Runway Gen-4.5, Veo 3 : tous ces modèles répondent mieux à "homme aux épaules tombantes, regard au sol, pas hésitants dans un couloir vide" qu'à "homme déprimé".

Ta méthode de réalisation te donne la précision nécessaire pour passer de l'émotion abstraite à la description physique concrète. C'est ça, diriger un modèle IA.

Pour aller plus loin sur le [pipeline complet de A à Z](/blog/pipeline-ia-script-storyboard-production-de-a-z), j'ai détaillé comment enchaîner cette phase de direction avec la génération des assets et le montage. Et si tu veux approfondir la lecture du regard et des micro-expressions dans les clips IA, l'article sur la [direction des personnages IA](/blog/comment-diriger-personnage-ia-comme-acteur) va dans le détail.

ScreenWeaver, l'outil que j'ai construit, est conçu précisément pour cette phase : garder visible la logique dramatique pendant qu'on écrit le script et qu'on prépare le storyboard. Le problème n'est pas la génération, c'est de ne pas perdre le fil entre l'intention et l'image.

## FAQ

**Comment décider de l'état interne d'un personnage quand l'histoire est encore floue ?**
C'est l'inverse. L'état interne du personnage te dit si l'histoire est floue ou non. Si tu ne peux pas répondre à "que ressent ce personnage à cet instant précis avec une nuance précise", c'est que la scène n'est pas encore écrite. C'est un signal, pas un blocage. Note plusieurs hypothèses, génère un clip pour chacune, et laisse les clips te dire quelle version tient.

**Cette méthode s'applique-t-elle aux courts formats (reels, shorts, TikTok) ?**
Oui, encore plus. Un reel de 30 secondes ne supporte aucune incohérence. La décision de la position caméra et l'état interne du personnage (ou du "sujet" si c'est un contenu de marque) doivent être encore plus précis que pour un long format. La brièveté punit l'imprécision.

**Faut-il faire un vrai storyboard avant de générer ?**
Un storyboard dessiné n'est pas obligatoire. Les trois colonnes (dramatique, visuel, émotionnel) remplissent la même fonction avec moins de friction. Si tu aimes dessiner ou si tu travailles avec des clients qui ont besoin de visualiser avant validation, un storyboard formel a du sens. Sinon, les trois colonnes suffisent.

**Comment cette méthode s'adapte quand on travaille avec un client ?**
Les décisions (état interne, position caméra, logique de montage) deviennent des questions à poser en brief. "Quelle est l'émotion dominante que vous voulez laisser au spectateur à la fin de cette vidéo ?" n'est pas une question créative abstraite. C'est une question de direction qui détermine tous les choix visuels. Les clients ont généralement une réponse précise à ça.

**Les modèles IA actuels comprennent-ils vraiment la gestuelle comme état interne ?**
Les grands modèles vidéo IA (Kling 3.0, Runway Gen-4.5, Veo 3, Wan 2.7) ont été entraînés sur des millions de films et clips. Ils ont vu les patterns de gestuelle associés aux états émotionnels. La compréhension n'est pas parfaite, mais elle est suffisamment fiable pour que la description physique précise donne de meilleurs résultats que les termes émotionnels abstraits. Teste-le : "sad man" vs "man with slightly slumped shoulders, downward gaze, slow deliberate steps".

**Combien de temps faut-il pour que cette méthode devienne automatique ?**
La préparation de 20 minutes devient plus rapide avec la pratique. Après 30 à 40 sessions de génération avec cette structure, les trois décisions (état interne, position caméra, logique montage) deviennent réflexes. Tu les prends en 5 à 10 minutes sans y penser consciemment. C'est là que tu commences à vraiment réaliser plutôt que générer.

**Faut-il maîtriser le cinéma classique pour utiliser cette méthode ?**
Non. Les trois concepts (état interne, position de caméra, logique de montage) sont descriptibles sans vocabulaire technique. Si tu comprends la différence entre regarder une scène de loin (observateur) et la vivre à l'intérieur (solidaire), tu as les bases. Le reste vient de la pratique et de l'observation active des films que tu regardes.

**Cette méthode fonctionne-t-elle pour la génération d'images statiques, pas seulement la vidéo ?**
Oui. Pour l'image, la "position de caméra" devient la composition et le point de vue. L'"état interne du personnage" reste la gestuelle et l'expression. La "logique de montage" devient la logique de série si tu génères plusieurs images liées. La méthode est transposable.
