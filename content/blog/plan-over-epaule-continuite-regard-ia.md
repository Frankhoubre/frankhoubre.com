---
title: "Plan over épaule : continuité de regard et profondeur"
date: "2026-07-13"
category: "tutoriels"
excerpt: "Cadrage OTS, axes et prompts pour lier deux personnages sans sauter la ligne d'action."
thumbnail: "/images/blog/plan-over-epaule-continuite-regard-ia/hero.webp"
---

Tu montes ton premier dialogue IA. Plan A : over épaule, magnifique en miniature. Plan B : face au personnage B. Et là, le regard ne tombe plus au bon endroit. Le spectateur ne sait plus qui parle à qui. *Ce n'est pas ton monteur qui a raté.* C'est la **ligne d'action** qui n'a jamais été verrouillée avant la génération.

Le **plan over épaule** (OTS) est l'arme la plus utilisée du cinéma de dialogue. En IA, c'est aussi l'un des cadrages qui trahissent le plus vite une production amateur : épaule qui change de taille, regard qui flotte, profondeur de champ incohérente entre les deux faces du champ contrechamp. Ce guide te donne la méthode plateau que j'utilise sur des scènes fiction, pub et contenus sociaux quand il faut que deux personnages **se parlent vraiment**.

![Over épaule cinéma : dialogue deux personnages, ligne d'action et profondeur de champ](/images/blog/plan-over-epaule-continuite-regard-ia/hero.webp)

## Pourquoi l'over épaule casse en IA (et pas au tournage)

Sur un vrai plateau, le réalisateur et le cadreur partagent la même carte mentale : qui est à gauche, qui est à droite, où tombe le regard, quelle épaule occupe le premier plan. L'IA ne voit pas ton plan suivant. Chaque génération est un monde isolé. Si tu ne documentes pas la géométrie de la scène, le modèle improvise une relation spatiale différente à chaque essai.

Le cerveau humain lit le dialogue en trois couches avant même d'entendre le son : position des corps, direction des yeux, continuité de la lumière sur les visages. Quand l'une saute, l'émotion s'effondre. Tu peux avoir des textures peau parfaites et un dialogue mort.

La règle des **180 degrés** n'est pas une lubie d'école. C'est une frontière invisible : une fois que tu as placé la caméra d'un côté de l'axe entre deux personnages, tu restes de ce côté pour tous les plans de la séquence (sauf mouvement de caméra qui traverse explicitement l'axe, rare en IA). Sauter l'axe, c'est inverser gauche et droite dans l'esprit du spectateur. En OTS, l'erreur classique est de générer le plan A avec le personnage A à gauche, puis le plan B avec A à droite sans transition.

> 💡 **Frank's Cut:** dessine la scène vue du dessus en trente secondes avant tout prompt. Flèche entre les deux têtes = axe. Coche de quel côté de l'axe vit la caméra pour chaque plan. Photographie ce croquis. C'est ta bible, pas le prompt du jour.

Pour la continuité globale du dialogue, croise avec [scène dialogue à deux : raccords regard et lumière](/blog/scene-dialogue-deux-personnages-raccord-ia). L'OTS est un cas particulier du même problème : géométrie + regard + lumière.

## Tableau de réglages OTS en production IA

| Paramètre | Valeur de départ | Objectif | Dérive fréquente |
| --- | --- | --- | --- |
| Angle OTS | 30 à 45° par rapport à l'axe | Lire les deux visages sans confusion | Profil pur, regard illisible |
| Hauteur caméra | Niveau yeux du personnage filmé +2 cm | Relation stable entre les corps | Plongée qui écrase le second rôle |
| Focale équivalente | 35 à 50 mm | Profondeur crédible, épaule proportionnée | Grand angle qui déforme l'épaule au premier plan |
| Durée clip | 3 à 5 s | Limiter dérive mâchoire et yeux | Plan long, visage qui « respire » |
| Mouvement caméra | Push in 2 à 4 % ou statique | Densifier sans casser la géométrie | Travelling latéral, murs qui ondulent |

Si ton OTS dérive, reviens à cette table avant de toucher au grain ou à la saturation. La plupart des échecs viennent d'un axe mal défini, pas d'un mauvais modèle.

## Fiche plateau OTS (à remplir avant génération)

Copie ce bloc dans `notes.txt` pour chaque scène :

```text
SCÈNE_03_OTS
- Personnage A (dos/épaule) : position FIXE côté gauche du cadre
- Personnage B (face) : regard vers A, yeux au tiers droit
- Axe : ligne A-B, caméra toujours côté sud de l'axe
- Lumière : key fenêtre latérale, fill faible, même température sur A et B
- Interdit : orbite, changement de hauteur caméra entre OTS et face
```

Cette fiche est ce qui sépare un dialogue montable d'une galerie de jolis plans isolés.

## Workflow complet : de la pilote au champ contrechamp

### Étape 1 : verrouiller l'axe et les positions (pas le prompt)

Tu commences par **qui regarde qui**, pas par « cinematic dialogue 8K ». Écris la position de chaque personnage par rapport à l'axe. Exemple : « A assis face caméra gauche, B debout à droite, B parle, A écoute. » Une seule action émotionnelle par plan : écoute, réplique, réaction.

Choisis quel personnage porte l'épaule au premier plan sur le plan OTS. En cinéma classique, on filme souvent celui qui **écoute** en OTS quand l'autre parle (on voit la réaction), ou l'inverse selon le jeu. En IA, reste **constant** sur toute la séquence : même logique plan par plan, sinon le monteur ne sait plus quelle réaction couper.

Définis la hauteur de l'épaule dans le cadre : tiers inférieur, pas plus de 25 % de l'image. Une épaule qui mange la moitié de l'écran écrase le visage du personnage B et donne un look documentaire cheap.

> 💡 **Frank's Cut:** génère d'abord un plan large « master » statique des deux personnages, même imparfait. Il sert de référence spatiale pour tous les OTS et faces. Tu compares chaque nouveau plan à ce master avant de valider.

### Étape 2 : pilotes image pour OTS et face (même lumière)

Tu produis **deux pilotes** minimum : une pour l'OTS (épaule + visage B), une pour la face ou le contrechamp. Même température de couleur, même direction de key, même niveau de fill. Si l'OTS est chaud fenêtre ouest et la face est bleu néon, le raccord criera même si les regards sont corrects.

Sur la pilote OTS, vérifie au zoom : contour de l'épaule net mais pas sur-sharp, œil de B au bon endroit du cadre, regard vers l'épaule/hors champ A. Sur la pilote face, vérifie que le regard tombe **exactement** vers l'emplacement de A dans l'OTS (même angle, pas vers la caméra sauf si c'est voulu).

Exporte PNG, archive prompts et seeds. Nomme `PILOTE_scene03_OTS_v01.png` et `PILOTE_scene03_FACE_B_v01.png`.

![Storyboard over épaule et champ contrechamp, axes et directions de regard](/images/blog/plan-over-epaule-continuite-regard-ia/workflow-1.webp)

### Étape 3 : vidéo modeste, même bloc identité

Passe en vidéo seulement quand les deux pilotes tiennent en lecture mobile. Durée **3 à 5 s**, mouvement caméra faible, une micro-action (clignement, micro hochement, respiration visible). Batch de quatre par plan, tri **A / B / C** brutal.

Prompt vidéo type (anglais souvent mieux lu par le moteur) :

```text
over-the-shoulder shot, character B in focus looking off-screen left toward listener,
soft shoulder foreground left, 40mm lens, natural skin, stable eye line,
no camera orbit, subtle push-in 3%, same window light as reference
```

Pour la face du personnage qui parle :

```text
medium close-up, character B speaking, eyes directed off-screen right toward listener,
same window key light, no direct eye contact with camera, minimal head movement
```

**Un seul levier** par batch : amplitude caméra OU action tête, pas les deux.

### Étape 4 : montage, son et QA regard

Monte en **coupe sèche** entre OTS et face. Évite le fondu IA entre deux géométries différentes. Le son fait la continuité : room tone commun, petite respiration ou bruit de fond qui colle entre les plans.

QA regard en playback : à chaque coupe, pose-toi « est-ce que B regarde toujours vers A ? » Si le regard glisse vers la caméra sur un plan sur deux, le dialogue est mort. Corrige la pilote ou le prompt directionnel, pas seulement l'étalonnage.

Harmonise les deux plans dans une session étalonnage commune. Même LUT, même courbe sur les peaux. Voir [comment corriger les couleurs d'une vidéo IA](/blog/comment-corriger-couleurs-video-ia) si ta balance diverge.

## Trois scénarios réels

### Scénario A : cuisine, dispute intime (OTS serré)

**Brief** : A assis dos à caméra (épaule), B debout face, lumière fenêtre matin, tension calme.

**Pilotes** : OTS 40 mm, épaule gauche 20 % cadre, B au tiers droit, regard vers gauche hors champ. Face B : même lumière, regard vers droite.

**Vidéo** : 4 s, push 2 %, B parle une phrase courte (voix enregistrée à part).

**Piège évité** : pas de travelling, pas de changement d'épaule entre les deux plans OTS de la scène.

### Scénario B : bureau vitré, négociation

**Brief** : deux personnages en costume, fond bureau flou, key latérale froide + fill chaud discret.

**Pilotes** : verrouiller la même profondeur de champ (B net, fond doux). L'épaule A doit avoir la même netteté floue sur les deux plans OTS.

**Montage** : alternance OTS A écoute / face B parle / OTS B écoute / face A réplique, toujours même côté de l'axe.

**Dette acceptée** : micro grain. **Refusée** : regard vers caméra sur un plan et hors champ sur l'autre.

### Scénario C : livrable vertical social (9:16)

**Brief** : dialogue 15 s, OTS serrés, lisibilité mobile.

**Adaptation** : épaule plus haute dans le cadre mais visage B reste dans le tiers supérieur safe zone. Teste compression TikTok avant validation client.

**Son** : voix prioritaire, pas de musique qui masque les micro-réactions.

## Troubleshooting : ce que les débutants cassent

**Le regard file vers la caméra.** Cause : prompt vague ou pilote face trop « portrait ». Fix : « eyes directed off-screen toward [left/right] listener », jamais « looking at camera » sauf intention.

**L'épaule change de taille entre deux OTS.** Cause : focale ou distance caméra différente entre générations. Fix : même bloc focale dans chaque prompt, même ratio épaule/cadre.

**Les personnages inversent gauche/droite.** Cause : saut de ligne des 180°. Fix : redessine l'axe, régénère la série entière du même côté.

**La mâchoire ou les yeux dérivent en mouvement.** Cause : plan trop long ou amplitude trop forte. Fix : 3 s, mouvement minimal, coupe au montage.

**Les deux plans n'ont pas la même « heure » lumineuse.** Cause : prompts lumière contradictoires. Fix : un paragraphe lumière copié-collé identique sur toutes les pilotes.

**Le dialogue paraît monté par un amateur.** Cause : pas de master de référence, pas de son commun. Fix : plan large référence + room tone + coupes sèches.

La [continuité cinématographique](https://en.wikipedia.org/wiki/Continuity_(fiction)) et la [cinématographie](https://en.wikipedia.org/wiki/Cinematography) rappellent que l'espace partagé entre les plans est narratif, pas décoratif. Même en IA, tu dois le construire volontairement.

[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on verrouiller la ligne d'action et la direction du regard avant de générer un champ contrechamp over épaule]

![Étalonnage commun et contrôle des raccords de regard sur timeline dialogue](/images/blog/plan-over-epaule-continuite-regard-ia/workflow-2.webp)

## Liens internes utiles

- [workflow complet Seedance 2](/blog//blog/workflow-complet-seedance-2-rendu-cinema)
- [scène dialogue à deux sans raccord cassé](/blog//blog/scene-dialogue-deux-personnages-raccord-ia)
- [transformer une image IA en vidéo fluide](/blog//blog/comment-transformer-image-ia-video-fluide-credible)
- [structurer une vidéo IA comme un vrai film](/blog//blog/comment-structurer-video-ia-comme-vrai-film)

## FAQ

**Quelle différence entre over épaule et plan poitrine en IA ?**

L'over épaule inclut une partie du corps (épaule, cheveux) du personnage écouté au premier plan, flou ou semi-flou, et cadre le visage de celui qui parle ou réagit. Le plan poitrine isole un seul personnage sans cette ancre spatiale. En IA, l'OTS demande plus de discipline sur l'axe et le regard, mais il donne souvent plus de profondeur et de crédibilité dialogue. Si ton outil galère sur deux visages, commence par des poitrines bien calibrées puis réintroduis l'épaule quand la géométrie tient.

**Comment indiquer la direction du regard dans le prompt ?**

Utilise des termes physiques : « looking off-screen left », « eyes toward listener at frame left », « not looking at camera ». Évite « emotional gaze » sans direction. Aligne avec ton croquis : si A est à gauche hors champ, B regarde vers la gauche du cadre. Vérifie sur chaque export en boucle courte. Un regard qui bouge de quelques degrés entre frame 12 et 24 suffit à casser le raccord.

**Faut-il la même seed pour tous les plans d'une scène ?**

Pas obligatoire, mais la cohérence vient surtout des pilotes et du bloc identité + lumière identiques. La seed aide à reproduire une texture si tu refais le même plan. Pour un nouveau angle (OTS vs face), change l'angle dans le prompt, garde identité et lumière, teste une ou deux seeds proches de la pilote validée.

**Combien de plans minimum pour un dialogue crédible ?**

Quatre plans utiles : OTS sur A, face B, OTS sur B, face A, plus éventuellement un plan large master. En IA courte, tu peux tenir avec trois si le raccord regard est parfait. Mieux vaut trois plans honnêtes que huit plans qui se contredisent.

**Puis-je faire un OTS avec les deux visages nets ?**

Rarement crédible en IA sur un seul plan : la profondeur de champ ment souvent. Préfère un visage net (celui dont on lit l'émotion) et une épaule plus douce. Si tu as besoin des deux nets, rapproche le style documentaire et accepte un look plus « propre » moins cinéma.

**Que faire si l'épaule au premier plan est déformée ?**

Allonge la focale virtuelle (50 mm plutôt que 24 mm), réduis la part de l'épaule dans le cadre, ou génère sans épaule visible (plan américain) et ajoute une épaule floue en post seulement si tu maîtrises le compositing. Souvent, regénérer avec moins d'épaule est plus rapide qu'un masque raté.

**Le son change-t-il la perception du regard ?**

Oui. Une voix posée tôt avec le bon timing fait accepter un micro décalage visuel. Un silence absolu accentue chaque erreur de direction des yeux. Pose le room tone et une ébauche de voix avant de valider définitivement les plans.

**Comment livrer ça à un client exigeant ?**

PDF une page : croquis axe, captures pilotes, liste des plans avec statut A/B/C, dettes assumées. Montre un extrait 10 s avec son. La transparence sur la méthode rassure plus qu'un seul clip « wow » non reproductible.

Un OTS IA ne se sauve pas en post. Il se gagne sur le croquis, la pilote, le regard verrouillé et le montage qui respecte l'axe. Quand ces quatre piliers sont là, ton dialogue respire enfin comme du cinéma, pas comme une compilation de portraits.


## Pratique terrain : brief client en une page

Quand tu travailles **over épaule continuité IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section brief client en une page est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Plan over épaule : continuité de regard et profondeur n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (45 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.


## Pratique terrain : grille QA partagée en équipe

Quand tu travailles **over épaule continuité IA** en conditions réelles, le chaos arrive des deadlines, pas des tutoriels. Cette section grille QA partagée en équipe est ce que je mets dans le dossier livrable pour que l'équipe retombe sur ses pieds une semaine plus tard sans moi.

Avant chaque batch, relis le brief en cinq lignes. Un changement « rapide » de prompt sans relire le brief crée des plans magnifiques mais inutilisables au montage. Le monteur te remerciera si chaque fichier porte un nom logique et une note A/B/C.

Pour la validation, impose deux écrans : téléphone lumineux + moniteur neutre. Beaucoup de défauts sur Plan over épaule : continuité de regard et profondeur n'apparaissent que sur l'un des deux. Si ça tient sur les deux, tu peux passer à la suite. Sinon, un seul levier change, pas cinq.

En réunion client, montre un extrait de dix secondes avec son, pas une galerie de stills. Le mouvement et l'audio vendent la crédibilité. Les images fixes mentent sur la qualité finale des vidéos IA.

Documente les dettes assumées (grain, micro dérive, texte composité en post). La transparence évite le « refaire tout » quand le directeur créatif voit le master sur grand écran.

> 💡 **Frank's Cut:** si tu n'as pas envie d'expliquer un choix technique au client, ce choix est probablement une dette à assumer noir sur blanc, pas à cacher.

Croise toujours avec [pourquoi mes vidéos IA ont l'air fake](/blog/pourquoi-mes-videos-ia-ont-l-air-fake-comment-rendre-realistes) quand tu doutes du réalisme global. Souvent le problème n'est pas le sujet de l'article, mais une pilote ou un son manquant en amont.

**Session type (50 min)** : brief 10 min, génération 20 min, QA 10 min, post 10 min, export mobile 5 min. Si tu n'as pas de plan A en une heure, pivote le brief, pas la caféine.

**Checklist finale** : message lisible sans son (si sous-titres), message audible avec son (si VO), cohérence avec la charte, export plateforme testé en privé, fichiers nommés et archivés.

<!-- PUBLICATION DATE: 2026-07-13 -->
