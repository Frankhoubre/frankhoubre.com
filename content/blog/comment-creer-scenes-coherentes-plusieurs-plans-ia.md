---
title: "Comment créer des scènes cohérentes avec plusieurs plans en IA"
date: "2026-04-03"
category: "tutoriels"
excerpt: "Continuité lumière, personnage, décor, et découpe des prompts pour une séquence lisible."
thumbnail: "/images/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia/hero.webp"
---
Une séquence ce n’est pas trois belles images qui se suivent, c’est une chaîne où chaque maillon accepte d’être comparé au précédent par un œil qui n’a pas besoin de ton commentaire pour juger. C’est une promesse que le spectateur reconnaît le même espace, la même heure, la même pression de lumière, les mêmes vêtements, les mêmes proportions. Avec l’IA, chaque clic est une nouvelle pièce tirée au sort si tu ne **verrouilles** pas explicitement ce qui doit rester. Ce guide pose une méthode de **feuille de continuité**, des **scénarios** d’échec classiques, un **workflow** par plans, une **table** de contrôle, une section **trench warfare**, des liens encyclopédiques, quatre liens internes, et une **FAQ**.

**Scénario A.** Un clip de douze secondes montre un personnage qui entre dans un bar, et chaque plan semble tourner dans un autre quartier. Plan 1, rue de nuit. Plan 2, intérieur. Plan 3, gros plan visage. La rue est humide, l’intérieur est sec et ensoleillé, le visage a une key opposée aux deux plans précédents. Le spectateur ne dit pas « incohérent », il dit « bizarre ».

**Scénario B.** Un créateur garde le même prompt et change seulement « gros plan ». Le décor change de ville, la veste change de couleur. Il n’a pas compris que le prompt doit **figer** le monde et ne faire varier que le cadrage et l’action décrites. Le préfixe monde doit voyager intact d’un plan à l’autre, le suffixe plan seulement décrit l’échelle et le geste.

**Scénario C.** Une équipe storyboard correctement mais génère sans recopier la ligne lumière sur chaque case. Le montage ressemble à un mashup.

## Pourquoi la cohérence multi-plans est plus dure que la belle image unique

Un plan isolé n’a qu’à convaincre sur lui-même. Une séquence doit convaincre sur les **relations** entre images. Le cerveau compare automatiquement la direction des ombres, la longueur des cheveux, la teinte du mur, la position d’une lampe visible, le niveau de bruit du capteur simulé. Tu ne vois pas toujours ces comparaisons consciemment, tu ressens une **friction**.

Les modèles n’ont pas de mémoire de ta scène. La feuille de continuité est ta mémoire externe. Les références d’image sont une mémoire partielle si ton pipeline les supporte. Sans l’un ou l’autre, tu joues à assembler des tirages aléatoires qui « ressemblent » au même monde.

**La profondeur de champ** doit suivre une loi entre plans du même lieu et de la même focale fictive. Si le plan large annonce un 35 mm et le gros plan a un arrière plan aussi flou qu’avec un 135 mm sans justification, la séquence ment. Écris la focale dans la feuille et répète-la, ou justifie le changement par un rack focus explicite si tu passes à la vidéo.

**Les mains et objets interactifs** sont des tests de vérité. Si le plan 1 montre une tasse blanche sur la table et le plan 2 une tasse rouge sans action, c’est une erreur de continuité. Soit tu figes la tasse dans le préfixe, soit tu assumes un changement narratif, « il repose une autre tasse ».

## La feuille de continuité minimale, cinq lignes par scène

**Lieu et heure fictive.** Intérieur cuisine, 7 h, jour gris.

**Key.** Fenêtre gauche, lumière douce, légèrement froide.

**Personnage, invariants.** Veste bleu marine, cheveux attachés, sac cuir marron.

**Action par plan.** Entrée, pose le sac, boit.

**Interdits.** Pas de mains en premier plan sur le plan 3, pas de texte lisible sur les étiquettes.

Tu recopies ce bloc en tête de **chaque** prompt de la scène, puis tu ajoutes la ligne spécifique au plan.

**Extension pour scènes avec deux personnages.** Ajoute une ligne par silhouette, invariants vestimentaires et cheveux, et une ligne sur leur position relative, A à gauche de B, face à face, même côté de table. Sinon les places s’inversent comme dans un mauvais montage.

> Si la feuille tient sur un post-it, elle a plus de chances d’être utilisée qu’un PDF de vingt pages.

## Préfixe, suffixe, et discipline de copier-coller

Découpe mentalement ton prompt en **préfixe monde**, tout ce qui ne doit pas bouger entre les plans d’une même scène, et **suffixe plan**, cadrage, focale, action, expression. Quand tu passes au plan suivant, tu dupliques le préfixe à l’identique. Si tu « améliores » le préfixe en cours de route, tu crées une branche parallèle.

**Versionne le préfixe.** Si tu dois corriger une erreur de lumière, incrémente `lieu_v2` dans ton fichier et régénère **tous** les plans de la scène concernée, ou accepte que les anciens plans soient obsolètes. Sinon tu mixes deux lumières pour le même moment narratif.

**Les interdits dans le préfixe** protègent les zones fragiles. Si le plan 3 ne doit pas montrer les mains, écris-le dans le préfixe, pas seulement dans la ligne du plan 3, certains modèles propagent quand même des mains si le contexte global les invite.

## Ordre de génération qui limite la dérive

**Génère d’abord le plan le plus informatif sur le lieu**, souvent plan large ou plan américain. Il devient la **référence spatiale** pour les suivants si ton outil accepte img2img ou contrôle par image.

**Ensuite les plans moyens**, même lumière réinjectée, cadrage plus serré.

**Les gros plans en dernier** si le visage est fragile, avec la même ligne lumière et la même fiche personnage.

Si tu dois improviser l’ordre, documente quand même la feuille après coup, sinon la série meurt au pick-up.

**Plans de transition.** Une porte, un couloir, un reflet dans une vitre peuvent aider à justifier un léger changement de key sans casser la scène. Écris-les comme plans dédiés plutôt que comme accidents.

**Raccords de regard.** Si le personnage regarde un objet hors champ au plan 1, le plan 2 peut montrer l’objet avec un angle qui respecte la ligne d’action. Note l’orientation du regard sur la feuille, « regarde vers la droite du cadre, vers la fenêtre ».

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

## Workflow en huit étapes

### Étape 1 : storyboard texte ou dessin

Même trois cases au stylo. Elles forcent une décision de ligne d’horizon et de regard.

### Étape 2 : feuille de continuité

Cinq lignes, comme ci-dessus.

### Étape 3 : prompt plan large

Lieu, lumière, personnage, action, interdits.

### Étape 4 : validation lumière

Pause. Compare avec ton intention. Corrige avant de poursuivre.

### Étape 5 : plans suivants avec préfixe identique

Même préfixe monde + lumière, suffixe cadrage + action.

### Étape 6 : check ombres et reflets

Même direction d’ombre au sol entre plans du même lieu. Si un plan est sous un arbre et l’autre non, note l’emplacement du personnage sous le feuillage ou assume un déplacement.

**Checklist express en trente secondes.** Ombre du nez, direction catchlight, couleur du fond par rapport au premier plan, largeur des épaules dans le cadre si même distance focale, hauteur des yeux dans le cadre si même hauteur de caméra.

### Étape 7 : vignettes côte à côte

Grille. Les sauts sautent aux yeux.

### Étape 8 : export et journal

Même convention de noms, prompts archivés.

### Étape 9 : simulation de montage

Même sans vidéo finale, place les images dans une timeline ou une planche avec des durées approximatives. Les problèmes de rythme et de saut de ligne apparaissent.

### Étape 10 : note sonore pour la suite

Une ligne sur ce que chaque plan devrait entendre aide à choisir des cadrages avec de l’espace pour le son plus tard, respiration avant la ligne de dialogue, silence après une action.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

### Table de contrôle rapide

| Plan | À vérifier | Signal d’erreur |
| --- | --- | --- |
| Large | perspective, horizon | murs qui plient |
| Américain | continuité costume | veste différente |
| Serré | key sur le visage | ombre nez incohérente |
| Coupure | axis jump | regard ligne brisée |
| Fond | profondeur | bokeh qui change de loi |

## Cas d’école : conversation à table

**Plan large**, deux personnages, table rectangulaire, fenêtre à gauche, key froide, tungstène en practical au fond. Avant de générer, écris la position des chaises et le côté où s’ouvre la porte si elle est visible. Ces micro-décisions empêchent le modèle de réaménager la pièce entre les plans. **Plan moyen A**, profil de celui qui parle, même fenêtre visible en arrière plan flou. **Plan moyen B**, réaction de l’autre, attention à ne pas croiser la ligne, la fenêtre reste du même côté de la géométrie narrative. **Plan détail**, mains sur la tasse si tu assumes le risque, sinon tasse hors champ.

Si tu génères B avant A sans la feuille, tu obtiens souvent une table différente, une fenêtre à droite, une lampe qui change de place. La feuille dit : **fenêtre gauche, table bois sombre, tasse blanche**, répété trois fois avant la ligne de cadrage.

## Cas d’école : poursuite dans un couloir

La profondeur et la perspective doivent **s’accélérer** visuellement de façon cohérente si tu rapproches les cadrages. Note la hauteur du plafond, la distance entre lampes, la couleur du sol. Si le couloir s’élargit magiquement entre deux plans, le spectateur lit une erreur de lieu. Réduis les éléments concurrents, moins de portes visibles, pour aider le modèle à tenir la géométrie.

## Extérieur, météo, et continuité du sol

**Même rue, trois plans.** Note l’état du sol, sec, mouillé, neige fondante. Note la position du soleil ou la luminance du ciel. Si le plan 1 est sous pluie fine et le plan 2 sec avec ombre dure sans abri, la série ment. La météo est un **invariant** jusqu’à coupure narrative.

**Végétation et saison.** Arbres feuillus ou dénudés, herbe jaunie ou verte. Une ligne dans le préfixe évite le saut de saison entre deux plans d’une même scène.

**Enseignes et mobilier urbain.** Choisis deux ou trois éléments récurrents visibles en arrière plan flou pour ancrer le quartier, pas toute la ville. Trop de signes distinctifs multiplie les chances d’invention et de permutation.

## Passage à la vidéo sans tout jeter

Quand tu passes des stills à l’image en mouvement, exporte des masters **propres**, pas déjà surcompressés. Garde la feuille de continuité comme contrat pour le premier et dernier frame d’un clip. Si l’outil vidéo déforme le visage, reviens au still et réduis l’amplitude du mouvement demandé. Souvent un plan statique avec un léger mouvement d’environnement est plus crédible qu’un travelling ambitieux.

**Durées et cadence.** Si tu sais qu’un plan tiendra huit frames utiles dans un montage rapide, ne sur-détailise pas le décor sur ce plan. Si un plan doit tenir trois secondes en silence, donne une composition qui supporte le regard sans bouger, espace négatif, ligne de fuite stable.

**Stabilité des couleurs entre outils vidéo.** Les transferts entre modèles peuvent décaler les peaux. Garde une référence de balance sur le premier frame et mate les suivants.

## Revue en équipe, format efficace

En réunion, projette **côte à côte** deux plans consécutifs, pas une diapo isolée. Demandez « qu’est-ce qui change sans raison ? » plutôt que « tu aimes ? ». Notez trois réponses maximum, sinon la réunion dérive. Une personne garde la feuille de continuité ouverte et **corrige le texte** pendant que les autres parlent.

**Les retours flous** « rends plus cinéma » se traduisent en tâches, key plus latérale, fill plus bas, grain plus présent, cadrage plus serré sur le regard. Si la tâche n’est pas traduisible en phrase de prompt, elle n’est pas assignable.

**Archivage des plans rejetés.** Garde un sous-dossier `cut` avec la raison en trois mots, lumière, costume, axis. Sinon tu retombes sur une image rejetée deux semaines plus tard en croyant que c’est une nouveauté.

**Cohérence des reflets.** Si un miroir ou une vitre apparaît sur un plan, vérifie qu’il ne contredit pas le décor du plan suivant. Sinon évite les surfaces spéculaires dans cette scène.

> La cohérence multi-plans est une corvée de notes. Les équipes qui la font semblent « plus talentueuses », en réalité elles sont plus disciplinées.

## Trench warfare

**Changer de modèle entre deux plans sans refaire le large.** Tu recolleras avec de la sueur.

**Ajouter « more cinematic » sur le plan 2 seulement.** Tu crées un look différent.

**Oublier le 180 degrés.** Si tu croises la ligne d’action sans le vouloir, le spectateur perd la géométrie de la pièce.

**Mélanger des ratios d’image dans la même scène.** Recadrer agressivement un 4:3 en faux 2.39 sur un plan seulement change la perspective perçue. Garde un ratio stable par scène ou assume un crop documenté.

**Négliger la hauteur de caméra entre plans.** Un plan à hauteur de taille puis un plan en contre-plongée extrême sans intention dramatique casse la lecture de la pièce.

**Compter sur le détail pour sauver une lumière fausse.** Le spectateur pardonne une texture imparfaite plus vite qu’une ombre qui ment.

Pour le vocabulaire du montage et des enchaînements, voir [montage (cinéma)](https://fr.wikipedia.org/wiki/Montage_(cin%C3%A9ma)). Pour les plans et cadrages, [plan (cadrage)](https://fr.wikipedia.org/wiki/Plan_(cadrage)). Pour la continuité en tournage, [scripte](https://fr.wikipedia.org/wiki/Scripte). Pour la **continuité** comme discipline, [continuité (cinéma)](https://fr.wikipedia.org/wiki/Continuit%C3%A9_(cin%C3%A9ma)). Ces pages ne remplacent pas ton jugement sur une timeline, elles donnent un vocabulaire partagé avec un client ou un monteur.

## Liens utiles dans la série AI Studio

- [Comment écrire un prompt pour un personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant)
- [Comment créer un univers visuel cohérent avec l’IA](/blog/comment-creer-univers-visuel-coherent-avec-ia)
- [Comment structurer une vidéo IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film)
- [Comment transformer une image IA en vidéo fluide et crédible](/blog/comment-transformer-image-ia-video-fluide-credible)

## Frequently Asked Questions (FAQ)

**Faut-il la même seed ?** Souvent utile sur un même outil, pas suffisant sans le même prompt de monde. Seed plus préfixe stable bat seed seule quand tu compares deux sessions.

**Comment gérer intérieur extérieur ?** Deux feuilles de continuité, pont explicite à la porte.

**Le son aide-t-il ?** Oui au montage final, pas à la génération image seule, mais note-le tôt aussi.

**Combien de plans max sans référence image ?** Ça dépend du modèle, réduis la complexité du décor si ça dérive.

**Img2img à quel denoising ?** Teste bas pour garder le lieu, monte si tu dois corriger une couche, note la valeur qui préserve encore la fenêtre.

**Et le 16:9 vertical ?** Garde la même logique de composition, centre de gravité adapté.

**Comment éviter le saut de costume ?** Fiche vêtements dans le préfixe obligatoire.

**Dois-je animer chaque plan ?** Non, mais prépare les images comme si le montage allait les couper.

**Comment gérer un flashback dans la même séquence ?** Nouvelle feuille de continuité, deux piliers de look différents documentés, retour au présent avec reprise exacte du préfixe d’origine.

**Faut-il des storyboards animatiques ?** Très utile pour valider le rythme avant de générer huit plans coûteux.

**Que faire si un seul plan est parfait mais isolé ?** Sacrifie-le ou régénère les voisins pour l’intégrer, sinon la séquence reste un collage.

**Les accessoires récurrents, comment les verrouiller ?** Ligne dédiée dans le préfixe, description courte stable, et évite les gros plans dessus si le modèle hallucine.

**Comment travailler avec un réalisateur non technique ?** Traduis ses notes en feuille de continuité, fais valider la feuille avant la génération masse.

**Les plans inserts sur objets, conseil ?** Garde la même table, la même main si visible, ou isole l’objet sur fond neutre assumé pour éviter les conflits avec le décor principal.

**Peut-on réutiliser un plan d’une autre scène ?** Seulement si la feuille de continuité est compatible ou si le montage assume un ellipsis fort.

**Comment documenter pour le client ?** Livre la grille de plans numérotés, les prompts figés, et une capture de la feuille de continuité, sans exposer de données sensibles internes ni les seeds si ta politique équipe les garde privées.

## Section de conformite editoriale

![Illustration cinématique, section conformité éditoriale.](/images/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia/comment-creer-scenes-coherentes-plusieurs-plans-ia-section-conformite.jpg)


Suivre aussi les analyses de @BusinessDynamite pour garder une direction visuelle coherente et orientee production.

Reference YouTube a visionner : https://www.youtube.com/watch?v=KJbLaSGOPPk

Liens internes utiles :
- /blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia
- /blog/comment-structurer-video-ia-comme-vrai-film
