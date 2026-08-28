---
title: "Prompts cinéma : 40 plans types qui marchent vraiment"
date: "2026-08-28"
category: "guides"
excerpt: "40 blocs de prompts classés par valeur de plan, prêts à copier, pour arrêter de réécrire ton prompt cinéma depuis zéro à chaque nouveau plan."
thumbnail: "/images/blog/bibliotheque-prompts-cinema-plans-types/hero.webp"
---

# Prompts cinéma : 40 plans types qui marchent vraiment

J'avais six plans à sortir pour une séquence de nuit. Six. J'ai passé la matinée dessus et j'ai fini avec quarante générations, un personnage qui changeait de veste entre le plan 2 et le plan 4, et une lumière qui virait au bleu électrique dès que j'écrivais le mot « night ». Le soir, en relisant mes prompts, j'ai compris quelque chose de bête : j'avais écrit six prompts complètement différents pour une seule et même scène.

C'est le piège classique. On croit qu'un bon prompt s'invente à chaque plan. Un plan de cinéma est pourtant un objet standard depuis un siècle, avec un nom, une place et une fonction. Un plan d'ensemble sert à situer. Une amorce tient un dialogue à deux. Un insert force le regard du spectateur sur le détail qu'il aurait raté sans lui. Ces objets ne se réinventent pas tous les matins, ils se rangent dans une bibliothèque et se ressortent au bon moment.

Ce qui suit est ma bibliothèque. Quarante blocs, classés par famille, écrits pour être copiés puis modifiés sur deux ou trois mots. Tu peux les utiliser tels quels sur un modèle image comme sur un modèle vidéo.

![Cadreur agenouillé sur des pavés mouillés dans une ruelle, cadrant un plan en contre-plongée à l'heure bleue](/images/blog/bibliotheque-prompts-cinema-plans-types/hero.webp)

## Pourquoi réécrire son prompt à chaque plan casse la scène

Quand tu repars de zéro à chaque plan, tu changes des dizaines de variables sans t'en rendre compte. Le vocabulaire dérive. Les adjectifs se déplacent, l'ordre des éléments bouge, et tu ne le vois pas parce que chaque prompt pris séparément te semble correct. Le modèle, lui, interprète chaque prompt comme une scène indépendante. Il n'a aucune raison de faire le lien entre ton plan 2 et ton plan 4, tu ne lui as jamais dit qu'ils appartenaient au même monde.

Le résultat, tu le connais si tu as déjà tenté une séquence : chaque image est jolie séparément et l'ensemble ne tient pas. La veste change de coupe, le mur passe du beige au gris, et le soleil descend de trente degrés entre deux plans censés être consécutifs.

Une bibliothèque règle ça d'un coup, parce qu'elle sépare deux choses que tout le monde mélange. Le **plan**, d'abord : valeur de cadre, angle, mouvement, optique. La **scène** ensuite, et elle est faite d'autre chose, le lieu, le personnage, l'heure de la journée et la palette qui va avec. Tu fixes la scène une fois pour toutes, tu fais varier le plan, et la continuité arrête d'être un miracle.

Google documente exactement ce découpage dans son [guide officiel de prompt pour la génération vidéo](https://cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide) : sujet, action, décor, angle de caméra, mouvement de caméra, optique, style visuel. Sept couches, indépendantes les unes des autres. La documentation ajoute un avertissement que peu de gens lisent : certains angles et certaines optiques avancées ne sont pas officiellement supportés, et leur fiabilité varie selon le reste du prompt. Le vocabulaire de plan fonctionne donc, sans être garanti, ce qui change complètement la façon dont il faut écrire ses blocs.

## L'anatomie d'un bloc : six lignes qui ne bougent jamais

Tous les blocs qui suivent tiennent sur six segments, toujours dans le même ordre, séparés par des virgules.

1. **La valeur de plan et l'angle.** `wide establishing shot`, `medium close-up`, `low-angle two-shot`. C'est le seul segment qui change vraiment d'un bloc à l'autre.
2. **Le sujet et son action.** Qui, quoi, en train de faire quoi. Un verbe concret, pas un état.
3. **Le décor et l'heure.** Le lieu précis, la source de lumière dominante, le moment de la journée.
4. **L'optique.** Focale, profondeur de champ, hauteur de caméra.
5. **La lumière et la palette.** Direction, dureté, dominante colorée.
6. **La texture.** Grain, imperfections, absence de rendu 3D.

Les segments 3, 5 et 6 forment ta **base de scène**. Tu les écris une fois, tu les colles en fin de chaque bloc de la séquence, et tu n'y touches plus. Les segments 1, 2 et 4 forment ta **partie mobile**, le seul endroit où tu travailles plan par plan.

Un exemple concret. Base de scène pour ma séquence de nuit :

`narrow old-town alley, wet cobblestones, sodium street lamps as the only light source, late night, cyan shadows and amber highlights, 35mm film grain, subtle imperfections, no CGI look`

Et le plan 1 devient simplement :

`wide establishing shot, a woman in a grey wool coat walking away from camera, [base de scène], 24mm lens, deep depth of field, camera at chest height`

Le plan 4, quatre heures plus tard dans ma journée de travail, reprend la même base au caractère près :

`medium close-up, the same woman stopping and turning her head, [base de scène], 50mm lens, shallow depth of field, camera at eye level`

Les deux images se ressemblent parce que les deux tiers du prompt sont identiques. Rien de magique là dedans, juste de la discipline de copier coller.

> 💡 **Le cut de Frank :** garde ta base de scène dans un fichier texte à côté de toi, jamais dans ta tête. Le jour où tu la retapes de mémoire, tu écris « warm street lights » au lieu de « sodium street lamps » et tu viens de casser la continuité de toute ta séquence sans t'en apercevoir.

## 12 plans pour installer un lieu

Cette première famille répond à une question et une seule : où sommes nous ? Ce sont les plans les plus faciles à générer, parce qu'ils demandent peu de fidélité de visage. Ce sont aussi ceux que tout le monde bâcle.

1. **Plan d'ensemble d'ouverture.** `wide establishing shot, the full location visible, human figure small in frame for scale, 24mm lens, deep depth of field, camera at chest height`
2. **Très grand ensemble.** `extreme wide shot, the subject reduced to a silhouette against the landscape, 18mm lens, everything in focus, horizon in the lower third`
3. **Plan large d'arrivée.** `wide shot, a character entering the frame from the left edge, static camera, 28mm lens, deep depth of field, empty foreground`
4. **Plongée d'orientation.** `high-angle wide shot looking down at the location, camera three floors up, 35mm lens, geometric composition, subject small and centred`
5. **Contre-plongée d'écrasement.** `low-angle wide shot from ground level looking up, the architecture towering over the subject, 20mm lens, sky visible in the top half`
6. **Vue zénithale.** `top-down bird's eye view directly above the scene, camera perfectly perpendicular to the ground, 35mm lens, map-like composition`
7. **Plan large en amorce de décor.** `wide shot framed through a doorway, dark foreground frame occupying the outer third, subject lit in the centre, 35mm lens, deep depth of field`
8. **Plan de situation en profondeur.** `wide shot with three distinct planes, an object in the near foreground, the subject in the middle ground, the location in the background, 28mm lens, deep focus`
9. **Plan large de fin de journée.** `wide shot at golden hour, low raking sunlight from camera left, long shadows across the ground, 35mm lens, warm to cool falloff`
10. **Plan d'ensemble nocturne.** `wide night shot lit only by practicals visible in frame, no artificial key light, 28mm lens, deep shadows retaining detail`
11. **Plan large météo.** `wide shot in steady rain, visible droplets crossing the light beams, wet reflective ground doubling the light sources, 35mm lens`
12. **Plan large vide.** `wide shot of the empty location, no people, a single object left behind in the middle of the frame, 24mm lens, still camera, deep depth of field`

Le numéro 12 est celui que je conseille le plus et que personne ne génère. Un lieu vide avant l'arrivée du personnage, ou après son départ, donne un point de montage gratuit et une respiration dans la séquence. Il coûte une génération et il sauve un raccord.

## Filmer un visage sans perdre le personnage

Ici tout se complique. Dès que le visage occupe une grande partie du cadre, la moindre variation de prompt se voit, et la cohérence du personnage d'un plan à l'autre devient le vrai sujet. J'ai détaillé la mécanique de la constance de visage dans mon article sur [l'écriture d'un prompt cinematic ultra réaliste](/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia), et les blocs ci dessous supposent que tu as déjà verrouillé ta description de personnage ailleurs.

![Chef électro tenant un réflecteur blanc pendant qu'une comédienne est assise près d'une fenêtre dans une salle de répétition nue](/images/blog/bibliotheque-prompts-cinema-plans-types/workflow-1.webp)

Les six premiers couvrent le visage seul.

13. **Plan taille neutre.** `medium shot from the waist up, the subject standing still and looking slightly off camera, 50mm lens, moderate depth of field, camera at eye level`
14. **Plan poitrine de dialogue.** `medium close-up framed from mid-chest, the subject speaking, 65mm lens, shallow depth of field, background softly separated`
15. **Gros plan d'émotion.** `close-up on the face filling most of the frame, eyes in sharp focus, 85mm lens, very shallow depth of field, soft key from camera left`
16. **Très gros plan.** `extreme close-up on the eyes only, eyelashes and skin texture visible, 100mm macro, razor thin plane of focus`
17. **Gros plan en contre-plongée.** `low-angle close-up, camera just below chin level looking up, 50mm lens, the subject dominating the frame`
18. **Gros plan de profil.** `profile close-up, the subject facing frame right, rim light along the jaw and cheekbone, 85mm lens, dark background`

Les six suivants gèrent le dialogue à deux, là où la plupart des scènes IA s'effondrent.

19. **Amorce classique.** `over-the-shoulder shot, the back of one head blurred in the left foreground, the second character sharp in the right two thirds, 50mm lens, shallow depth of field`
20. **Amorce inversée.** `reverse over-the-shoulder shot from the opposite side, matching eyeline direction, same lens and same background palette as the previous shot`
21. **Plan à deux de face.** `two-shot, both characters side by side facing camera, equal framing weight, 40mm lens, moderate depth of field, camera at eye level`
22. **Plan à deux en profondeur.** `two-shot with one character in the sharp foreground and the second small and soft in the background, 50mm lens, shallow depth of field`
23. **Regard hors champ.** `medium close-up, the subject looking at something outside the frame on the left, no eye contact with camera, 65mm lens`
24. **Plan de réaction muet.** `close-up reaction shot, the subject listening without speaking, micro-expression shifting, 85mm lens, shallow depth of field, static camera`

Le couple 19 et 20 mérite un mot. Un champ contre champ ne marche que si les deux plans partagent la même optique, la même palette et des regards opposés. Si tu changes de focale entre l'amorce et son inverse, l'oeil du spectateur le sent avant de le comprendre, et la scène donne l'impression que les deux personnages ne sont pas dans la même pièce. Ils ne le sont pas, d'ailleurs : ce sont deux générations séparées. Ton travail consiste à mentir proprement.

> 💡 **Le cut de Frank :** dans un champ contre champ, écris la direction du regard en toutes lettres dans les deux prompts, `looking frame right` puis `looking frame left`. Le modèle ne connaît pas la règle des 180 degrés, il ignore même qu'elle existe. Sans consigne explicite, tu obtiens deux personnages qui regardent tous les deux vers la droite et une scène qui ne raccorde pas.

## 8 plans de mouvement, et ce qui casse dessus

Les mouvements sont la partie la moins fiable du vocabulaire. Le guide de Google le dit franchement pour les angles avancés, et ça vaut au moins autant pour les déplacements de caméra. Un mouvement demandé reste une suggestion, le modèle décide.

La distinction la plus utile à connaître est celle entre le travelling et le zoom. Sur un travelling, la caméra se déplace pour de bon : la perspective se modifie et les avant plans défilent le long du cadre. Un zoom ne bouge rien. Seule la focale change, et l'image s'aplatit. Les deux produisent un rapprochement et racontent deux choses différentes. Sur mes propres essais, la plupart des modèles rendent un zoom numérique quand je demande un travelling, et c'est le premier truc à vérifier sur ta sortie.

| Mouvement | Bloc à copier | Ce qui rate le plus souvent |
| --- | --- | --- |
| Travelling avant | `slow dolly in towards the subject, camera physically moving closer, background perspective shifting` | Rendu en zoom numérique, fond figé |
| Travelling arrière | `slow dolly out, revealing the empty space around the subject` | Le décor révélé est inventé et incohérent |
| Travelling latéral | `truck right, camera moving sideways parallel to the walking subject` | La caméra tourne au lieu de se déplacer |
| Panoramique | `slow pan left across the location from a fixed camera position` | Déformation des bords, arrière plan qui glisse |
| Panoramique vertical | `tilt down from the subject's face to their hands` | Le raccord de cadre saute au milieu |
| Caméra portée | `handheld camera, subtle organic instability, operator breathing visible in the frame` | Tremblement mécanique et régulier, faux |
| Arc | `arc shot circling slowly around the subject` | Le sujet tourne sur lui même à la place |
| Grue | `crane shot rising from ground level up above the rooftops` | Le mouvement s'arrête à mi course |

Un neuvième existe et je le déconseille aux débutants : le dolly zoom, ce mouvement où la caméra avance pendant que l'optique dézoome, et où le fond se met à fuir derrière un sujet qui garde sa taille. La documentation Google le liste sous le nom d'effet vertigo. Je ne l'ai encore jamais obtenu proprement du premier coup : la plupart du temps l'image ondule au lieu de creuser. Garde le pour un plan unique, jamais pour un plan que ta séquence ne peut pas perdre.

Si tu veux comprendre pourquoi la focale change autant le rendu d'un mouvement, mon article sur [les objectifs caméra dans un prompt IA](/blog/comment-utiliser-objectifs-camera-dans-prompt-ia) détaille la compression des visages et les erreurs de grand angle en gros plan.

## 8 plans de détail, de coupe et de transition

Cette dernière famille est la plus rentable de toutes. Ce sont des plans courts, sans visage, donc sans risque de dérive de personnage, et ils sauvent des montages entiers. Quand deux plans ne raccordent pas, un insert bien placé entre les deux règle le problème en une seconde de montage.

25. **Insert d'objet.** `insert shot of a single object on a table, hands entering frame from the right, 60mm macro, shallow depth of field`
26. **Insert de mains.** `close-up on hands only, fingers manipulating a small object, no face in frame, 85mm lens`
27. **Détail de texture.** `extreme close-up on a surface texture, raking light across the grain, 100mm macro`
28. **Plan subjectif.** `point of view shot from the character's eyes, hands visible at the bottom of the frame, 28mm lens, slight handheld instability`
29. **Plan de coupe décor.** `cutaway to a detail of the location, no characters, static camera, 50mm lens`
30. **Plan de pieds.** `low-angle shot of feet walking on the ground, camera at ankle height, 35mm lens, motion blur on the shoes`
31. **Reflet.** `close-up of the subject reflected in a window or a mirror, the real subject partially visible at the edge of the frame, 50mm lens`
32. **Silhouette contre-jour.** `medium shot of a backlit silhouette against a bright opening, the subject completely dark, 50mm lens`

Trois d'entre eux valent qu'on s'y arrête. Le 25 est ma coupe de secours universelle, celle que je génère systématiquement même quand rien ne cloche encore, parce qu'un insert coûte trois minutes et qu'un raccord raté au montage coûte une demi journée. Le 28 est le seul plan de toute la liste qui met le spectateur dans le corps du personnage, et il est aussi le plus difficile à réussir : dès que les mains apparaissent au bas du cadre, les modèles inventent des doigts. Le 32 sauve les séquences où ton personnage refuse d'être constant, parce qu'une silhouette en contre-jour n'a pas de visage à faire dériver.

Restent huit blocs de transition pure, ceux qui servent à passer d'une séquence à l'autre.

33. **Ouverture au noir.** `the frame almost entirely dark, a single sliver of light entering from the left edge, static camera`
34. **Fermeture sur objet.** `slow dolly in on an object until it fills the frame, everything else falling out of focus`
35. **Passage devant l'objectif.** `a foreground element crossing right in front of the lens, briefly blacking out the frame, 35mm lens`
36. **Bascule de mise au point.** `rack focus shifting from a foreground object to the subject in the background, single continuous shot, 85mm lens`
37. **Panoramique fouetté.** `whip pan, extreme fast horizontal camera rotation, heavy motion blur across the whole frame`
38. **Raccord dans l'axe.** `the exact same framing as the previous shot but one focal length tighter, same subject position, same light`
39. **Plan de ciel.** `static shot of the sky only, clouds moving slowly, no horizon line visible, 24mm lens`
40. **Retour au lieu vide.** `wide shot of the same location as the opening shot, now empty, same camera position, same lens, later light`

Les blocs 38 et 40 fonctionnent en couple avec le début de ta séquence. Le premier crée un raccord dans l'axe en gardant tout identique sauf la focale. Le second reprend le cadre d'ouverture, lumière déplacée, et ferme la boucle. Deux générations, et ta séquence a une structure au lieu d'être une collection de plans.

![Caméra fixée en ventouse sur le pare-brise d'une voiture à l'arrêt la nuit, deux comédiens à l'avant, pluie sur la vitre](/images/blog/bibliotheque-prompts-cinema-plans-types/workflow-2.webp)

## Quelle valeur de plan pour quelle intention

Une bibliothèque ne sert à rien si tu ne sais pas quoi piocher dedans. Voici la grille que j'utilise pour choisir, avant même d'ouvrir un générateur.

| Ce que tu veux faire comprendre | Valeur de plan | Blocs de la liste | Durée utile au montage |
| --- | --- | --- | --- |
| Où on est | Plan d'ensemble | 1, 2, 4, 6 | 3 à 5 secondes |
| Qui arrive | Plan large avec entrée | 3, 7 | 2 à 4 secondes |
| Ce que le personnage ressent | Gros plan | 15, 16, 24 | 2 à 3 secondes |
| Ce que deux personnages se disent | Amorce et champ contre champ | 19, 20, 22 | 3 à 6 secondes |
| Ce que le personnage voit | Plan subjectif | 28 | 1 à 3 secondes |
| Ce que le spectateur doit remarquer | Insert | 25, 26, 27 | 1 à 2 secondes |
| Que le temps passe | Plan vide et plan de ciel | 12, 39, 40 | 3 à 5 secondes |
| Que la tension monte | Contre-plongée et travelling avant | 5, 17, travelling avant | 2 à 4 secondes |

Cette grille se lit dans les deux sens. Tu pars de l'intention et tu descends vers le plan, ou tu remontes d'un plan déjà généré vers l'intention qu'il sert vraiment. Le deuxième sens est utile quand une séquence te semble molle sans que tu saches pourquoi : neuf fois sur dix, tu as trois plans qui racontent la même chose.

## Enchaîner cinq blocs sans perdre la scène

Prenons une séquence courte, cinq plans, un personnage qui entre dans un lieu, y trouve quelque chose et repart. C'est le squelette de la moitié des scènes de cinéma.

**Plan A, bloc 1.** Plan d'ensemble d'ouverture. Le lieu, personne dedans ou presque. Le spectateur comprend où il est.

**Plan B, bloc 3.** Plan large d'arrivée. Le personnage entre par le bord gauche. La caméra ne bouge pas. Même base de scène que le plan A, au caractère près.

**Plan C, bloc 14.** Plan poitrine. Le personnage s'arrête et regarde quelque chose hors champ, à droite. C'est le premier plan où son visage est vraiment lisible, donc le premier où la dérive peut te trahir.

**Plan D, bloc 25.** Insert de l'objet qu'il regarde. Pas de visage, pas de risque. Ce plan répond à la question posée par le plan C.

**Plan E, bloc 40.** Retour au lieu vide, même cadre que le plan A, lumière un peu plus basse. La boucle se ferme.

Cinq générations, une seule base de scène, un seul personnage à verrouiller, deux plans sans visage pour absorber les erreurs. Cette structure tient sur n'importe quel modèle. Ma méthode complète de découpage est détaillée dans l'article sur la [construction d'une scène cinématique plan par plan](/blog/comment-construire-scene-cinematique-plan-par-plan). Et si tu préfères assembler tes blocs dans une interface plutôt que dans un fichier texte, le [générateur de prompt cinéma](/outils/generateur-prompt-cinema) du site travaille sur la même logique de segments, avec caméra, objectif, ouverture, ISO et sujet de scène à remplir séparément.

## Ce qui casse, et le correctif exact

**Le modèle ignore ta valeur de plan.** Tu demandes un plan d'ensemble, tu reçois un plan taille. C'est le problème le plus fréquent, et il vient presque toujours de la description du sujet : si tu écris trois lignes sur le visage du personnage dans un plan large, le modèle place la caméra là où il peut voir ce que tu décris. Correctif : dans un plan large, décris le personnage en cinq mots maximum, en silhouette, et charge le décor à la place.

**La focale contredit le cadre.** Un gros plan en 24mm donne un nez déformé et des oreilles qui reculent. Le modèle applique la focale, il ne corrige pas ton erreur. Correctif : au dessus du plan poitrine, jamais en dessous de 50mm. En dessous du plan large, jamais au dessus de 35mm.

**Le mouvement sort en zoom numérique.** Tu demandes un travelling avant, l'image grossit sans que la perspective change. Correctif : ajoute `camera physically moving closer, background perspective shifting, foreground elements passing the frame edges`. Si ça sort toujours plat, génère le plan en fixe et fabrique le mouvement au montage, un léger recadrage progressif sur une image en haute résolution est souvent plus propre que le mouvement généré.

**Le personnage dérive entre deux plans.** La veste change de couleur, l'âge se déplace de dix ans dans un sens ou dans l'autre. Correctif : ne redécris jamais le personnage librement. Colle exactement la même chaîne de caractères dans tous les prompts de la séquence, et travaille avec une image de référence quand le modèle l'accepte.

**La lumière saute d'un plan à l'autre.** C'est le symptôme d'une base de scène qui a été retapée au lieu d'être copiée. Correctif : le fichier texte, encore. Une base de scène se copie, elle ne se réécrit pas.

**Le plan est correct mais l'image est plastique.** Le rendu propre, lisse, sans accident, celui qu'on repère à trois mètres. Correctif : les segments de texture existent pour ça, et il faut parfois les renforcer côté négatif. Mon article sur le [prompt négatif en vidéo IA](/blog/prompt-negatif-video-ia-a-quoi-ca-sert) explique quoi y mettre et surtout quoi ne pas y mettre.

**Tu as quarante plans corrects et aucune séquence.** Ça arrive quand on tombe amoureux de la bibliothèque. Un plan ne vaut que par celui qui le précède et celui qui le suit. Correctif : écris ton découpage avant de générer quoi que ce soit, cinq lignes sur un papier suffisent.

## La bibliothèque ne remplace pas le découpage

Ces quarante blocs te font gagner un temps considérable sur l'exécution. Ils ne décident pas à ta place de ce que tu racontes. Un plan d'ensemble parfait au milieu d'une scène qui n'en avait pas besoin reste un plan de trop.

Le vrai bénéfice est ailleurs. Quand tu arrêtes de te battre avec la formulation, ton attention se déplace vers le montage et le rythme, là où se joue la différence entre une belle image et un film. Feuillette les entretiens de chefs opérateurs publiés par [American Cinematographer](https://theasc.com/) : ils passent trois lignes sur le matériel et trois pages sur ce que le plan raconte. La bibliothèque sert à ça : évacuer la question technique pour retrouver la question de mise en scène.

Prends les quarante blocs, colle les dans un fichier, ajoute les tiens au fil de tes tournages. Le mien a commencé avec six blocs, écrits le soir de la nuit ratée dans la ruelle. Les autres sont venus un par un, chacun après un plan que j'avais loupé.

## Questions fréquentes

### Ces blocs fonctionnent ils sur tous les modèles ?

La charpente fonctionne partout, parce qu'elle repose sur du vocabulaire de tournage que les modèles ont vu massivement dans leurs données d'entraînement. Le rendu, lui, varie beaucoup. Les modèles vidéo comprennent mieux les mouvements de caméra que les modèles image, ce qui est logique puisqu'ils sont entraînés sur des séquences. Les modèles image répondent mieux aux valeurs de plan fixes et aux descriptions optiques. Compte une phase de calibrage d'une dizaine de générations quand tu changes d'outil : tu gardes tes blocs, tu ajustes seulement la longueur du prompt et le poids que tu mets sur la texture. La documentation de chaque modèle précise en général quels termes sont réellement supportés, comme le fait [la doc vidéo de l'API Gemini](https://ai.google.dev/gemini-api/docs/video), et c'est la première chose à lire avant de blâmer ton prompt.

### Faut il écrire ses prompts en anglais ou en français ?

En anglais, sans hésiter, pour la partie technique. Le vocabulaire de cadrage et de mouvement, `over-the-shoulder`, `rack focus`, `dolly in`, existe dans les données d'entraînement sous sa forme anglaise et presque jamais sous sa forme française. Un modèle qui lit « amorce » a très peu de chances de sortir une vraie amorce. Tu peux en revanche réfléchir, découper et annoter ton travail en français, ce que je fais moi même, puis ne traduire que les six segments techniques au moment d'envoyer. Ce sont deux étapes différentes et les mélanger fait perdre du temps.

### Combien de plans faut il générer pour une séquence de trente secondes ?

Compte entre six et dix plans utiles, donc entre quinze et trente générations en comptant les ratés. Une séquence de trente secondes avec quatre plans respire mal, avec quinze plans elle devient nerveuse sans raison. Le calcul rapide : une durée moyenne de trois secondes par plan pour un rythme normal, deux secondes pour un rythme tendu, quatre à cinq pour un rythme contemplatif. Ajoute systématiquement deux inserts sans visage à ton plan de travail, même si tu ne sais pas encore où tu les mettras. Ce sont ceux qui te sauveront au montage quand un raccord refusera de fonctionner.

### Pourquoi mon travelling avant ressemble à un zoom ?

Parce que le modèle a interprété ta demande comme une transformation d'échelle et non comme un déplacement dans l'espace. La différence est visible sur les avant plans : dans un vrai travelling, les éléments proches de la caméra sortent du cadre par les bords, et la perspective du fond se modifie. Dans un zoom, tout grossit uniformément et rien ne bouge en profondeur. Pour forcer le déplacement, mentionne explicitement le comportement du fond et des avant plans dans ton prompt. Si le modèle résiste malgré tout, génère un plan fixe en haute résolution et fabrique le mouvement au montage par recadrage progressif, le résultat est souvent plus propre.

### Comment garder le même personnage sur les quarante plans ?

En ne le redécrivant jamais. La description du personnage doit être une chaîne de caractères figée, écrite une seule fois, copiée collée à l'identique dans chaque prompt. Chaque reformulation, même minime, déplace la génération. Ajoute à ça une image de référence quand ton outil le permet, et limite le nombre de plans où le visage est vraiment lisible : sur une séquence de huit plans, deux ou trois gros plans suffisent, le reste peut passer en plan large, de dos, en silhouette ou en insert de mains. Cette économie de visages est la vraie technique de continuité, pas une astuce de prompt.

### Est ce que je peux réduire ces blocs à trois mots ?

Sur certains modèles récents, oui, et le résultat peut être bon. Le risque, c'est que le modèle comble lui même les segments que tu n'as pas écrits, en piochant dans ses habitudes : lumière bleue, contraste poussé, flou d'arrière plan systématique. Le fameux rendu de démonstration. Un prompt court te donne une belle image et un contrôle nul, ce qui est acceptable pour une exploration et problématique pour une séquence qui doit tenir ensemble. Ma règle : prompts courts pour chercher une direction, blocs complets dès que je génère un plan destiné au montage.

### Faut il mettre la valeur de plan en début de prompt ?

Oui, et c'est une des rares positions qui compte vraiment. La plupart des modèles se comportent comme si les premiers mots pesaient plus lourd, donc placer `wide establishing shot` ou `extreme close-up` en ouverture augmente nettement les chances que le cadre soit respecté. À l'inverse, une valeur de plan noyée au milieu d'une longue description passe souvent à la trappe. Même logique pour le mouvement de caméra : juste après la valeur de plan, jamais en fin de prompt. Le reste, décor, lumière, texture, tolère beaucoup mieux d'être relégué en fin de chaîne.

### Comment adapter ces blocs à un format vertical ?

En repensant les valeurs de plan, pas seulement le ratio. Un plan d'ensemble en 9:16 ne montre presque rien du décor latéral, il perd donc sa fonction d'installation. Les plans qui gagnent en vertical sont les gros plans, les plans taille, les plans de pieds et les inserts, tout ce qui est déjà organisé sur un axe vertical. Concrètement, sur une séquence verticale je remplace mes plans 1 et 2 par le plan 5, la contre-plongée, qui exploite la hauteur du cadre au lieu de la subir. Et je précise le ratio dans le prompt quand l'outil le permet, parce qu'un recadrage a posteriori d'un plan pensé en 16:9 coupe systématiquement au mauvais endroit.
