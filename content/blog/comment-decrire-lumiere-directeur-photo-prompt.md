---
title: "Comment décrire la lumière comme un directeur photo dans un prompt"
date: "2026-04-02"
category: "tutoriels"
excerpt: "Key, fill, couleur, dureté, practicals, et comment éviter le « bel éclairage » sans géométrie."
thumbnail: "/images/blog/comment-decrire-lumiere-directeur-photo-prompt/hero.webp"
---
« Belle lumière » est la phrase la plus inutile qu’un modèle puisse recevoir, au même titre que « ambiance sympa » ou « mood parfait », qui ne donnent aucune contrainte géométrique à optimiser. Elle ne dit ni d’où vient la source, ni quelle est sa taille, ni comment elle colore la peau, ni ce qui reste dans l’ombre. Un directeur photo ne promet pas le beau, il **place** la lumière. Ton prompt doit faire pareil, avec des mots qui décrivent une géométrie, une hiérarchie, et une température relative. Ce guide te donne une syntaxe de travail, des **scénarios** réalistes, un **workflow**, une **table**, une section **trench warfare**, des renvois encyclopédiques, et une **FAQ**.

**Scénario A.** Un créateur veut un portrait dramatique. Il écrit « lighting dramatic ». Il obtient un contraste violent sans direction claire, des ombres sous le menton incohérentes, parfois deux keys rivales. Il croit que le modèle « ne sait pas faire le clair obscur ». En réalité, il n’a pas nommé **une** source dominante et la taille apparente de cette source.

**Scénario B.** Une directrice artistique veut un intérieur doux. Elle demande « soft light everywhere ». Le résultat est plat, sans modelé, parce que « doux partout » supprime la hiérarchie. La douceur doit venir de la **taille** de la source principale, pas de l’absence d’ombre.

**Scénario C.** Un auteur veut une scène nocturne avec néons. Il liste sept couleurs. Chaque surface devient un panneau publicitaire. Il fallait **une** couleur de contre dominante et des surfaces majoritairement sombres pour porter l’accent.

## Lire une photo de référence comme un chef op la commenterait

Prends une image de film ou de photo documentaire que tu respectes. Sans la coller dans le générateur, écris **six lignes** : direction de la key, taille apparente, présence ou absence de fill, température de la key, température du fond, présence d’une source visible dans le cadre. Puis une ligne sur ce que le sol fait à la lumière, sombre, clair, mouillé, tapis absorbant.

Cet exercice t’empêche de tomber dans le catalogue d’adjectifs. Tu remarques vite que beaucoup de portraits « naturels » ont une key large et un fond plus froid, ou l’inverse en studio avec une fenêtre fake bleue. Quand tu recopies la structure plutôt que le style, le modèle a une chance de converger.

**Le contraste perçu dépend de la key, pas du curseur contrast dans un logiciel.** Si ton prompt demande une key douce sur une peau et un fond très contrasté, précise où se fait le contraste, sur le mur, dans les practicals au loin, pas sur le visage en deux tons compétitifs.

## Jouer la dureté comme un choix dramatique

Une lumière dure n’est pas une erreur. L’erreur est la dureté **sans direction** et sans justification. Le soleil bas à travers des persiennes, c’est dur et beau. Le flash nu sans bounce sur un visage, c’est dur et documentaire. Le « dur » par défaut du modèle sans description, c’est une erreur de studio anonyme.

Pour écrire la dureté, pense **taille de source** et **distance**. Soleil, petite source lointaine. Fenêtre sans rideau de biais, source moyenne. Grand drap blanc devant la fenêtre, source large, ombres qui s’allongent et s’adoucissent.

Quand tu passes du dur au doux entre deux images d’une même scène, tu dois le **motiver** par le temps, un nuage passe, un rideau est tiré, ou par le cadrage, on s’éloigne de la fenêtre. Sinon le spectateur lit une erreur de tournage.

## Key, fill, rim, vocabulaire minimal qui sauve des pages

Quand tu bosses pour une série d’images, garde un **glossaire perso** dans ton fichier de projet : comment tu nommes la fenêtre, comment tu nommes le contre, comment tu écris l’absence de fill. La cohérence des mots entre les prompts du même dossier compte presque autant que la cohérence des réglages. Si lundi tu écris « soft window » et mardi « large north window diffused », le modèle peut interpréter deux géométries voisines mais pas identiques, et ton œil verra une dérive.

**Key light**, la source qui sculpte le visage ou le sujet. Décris sa direction par rapport au nez, latérale à quarante cinq degrés, quasi frontale mais décalée, contre-jour léger si tu assumes la silhouette. Décris sa **dureté**, ombre nette sous le nez ou transition douce sur la joue. Décris sa **taille apparente**, fenêtre plein cadre, petit trou de porte, softbox large invisible hors champ.

**Fill**, ce qui ouvre les ombres. « Pas de fill » est une phrase utile. « Fill très léger depuis le côté opposé à la key, trois stops plus bas » est encore mieux si ton outil répond à cette finesse. Sinon, « fill minimal, ombres profondes mais lisibles » suffit souvent.

**Rim ou backlight**, l’arête qui sépare le sujet du fond. Un rim trop fort sans key lisible donne un contour de détourage. Un rim discret avec une key claire donne de la présence.

**Practicals**, les sources visibles dans le cadre, lampe, néon, écran. Ils donnent une justification au spectateur. Ils aident le modèle à placer des highlights cohérents.

> Si tu ne peux pas dessiner la key au crayon sur une feuille, ton prompt n’est pas encore prêt.

## Couleur et température sans mélange absurde

Les peaux réagissent à la lumière. Un intérieur tungstène avec jour bleu visible par la fenêtre, c’est un classique. Écris explicitement **deux températures en relation**, chaude près, froide loin, ou l’inverse si la key est froide et les practicals chauds.

Évite la température « partout arc en ciel » sauf monde fiction assumé. Pour un portrait sérieux, **une** dominante et **une** note de contre.

Le vert sous néon doit laisser une part de sang dans les rouges si tu veux du vivant. Si la peau devient plastique vert, baisse la saturation sur les tons chair en post ou réécris le prompt pour limiter la surface éclairée par le néon.

**Teinte et saturation ne remplacent pas la direction.** Tu peux pousser un look vert total dans la suite couleur, mais si la key ment, tu colores un mensonge. Corrige d’abord la géométrie, ensuite la palette. Beaucoup de débutants font l’inverse et se retrouvent avec des visages magenta sur des ombres cyan sans logique de source.

**Les peaux foncées sous lumière dure** demandent souvent plus de précision sur le fill indirect, rebond du mur, vêtement clair proche, sinon le modèle écrase les ombres en taches d’encre. Écris explicitement le détail dans les ombres ouvertes si c’est ce que tu veux, pas seulement « high contrast ».

**Les cheveux blonds ou gris** prennent vite des halos si la key est dure et le fond clair. Assombris le fond ou adoucis la key, ou accepte un rim contrôlé qui sépare la chevelure sans la transformer en auréole de compression.

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

## Workflow en huit phrases types

### Phrase 1 : contexte spatial

Intérieur, extérieur, studio minimal, couloir, heure du jour ou nuit.

### Phrase 2 : key complète

Source, direction, taille, dureté. Exemple : grande fenêtre nord, lumière douce, venant de la gauche du cadre, ombre longue sur le mur.

### Phrase 3 : fill ou son absence

Fill quasi nul, reflet indirect du plancher clair, ou bounce léger depuis mur blanc hors champ.

### Phrase 4 : fond et séparation

Fond plus sombre que le sujet, ou contre-jour léger pour détacher les cheveux, ou profondeur avec practical au loin.

### Phrase 5 : caméra liée à la lumière

Plan, distance, focale. La caméra n’est pas la lumière, mais elle décide ce que le spectateur voit des ombres portées.

### Phrase 6 : matière sensible

Peau avec pores suggérés, tissu matte, verre avec reflets cohérents avec les sources nommées.

### Phrase 7 : interdits

Pas de second soleil, pas de rim sans key, pas de catchlight qui contredit la position de la fenêtre.

### Phrase 8 : intention émotionnelle courte

Isolement, chaleur, menace froide, fatigue du soir. Une ligne, pas un roman.

### Phrase 9 optionnelle : contrôle du spectateur

Où tu veux que l’œil aille en premier, triangle des yeux et de la bouche, main au premier plan, objet sur la table. Ce n’est pas de la lumière pure, mais ça influence souvent comment le modèle équilibre les expositions relatives. Si tu ne le dis pas, il peut sur-exposer un objet secondaire parce que « shiny » attire les statistiques.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

### Table de traduction « langage plateau → prompt »

| Plateau | Écris dans le prompt | Erreur fréquente |
| --- | --- | --- |
| Source dure | petite ouverture, rayon direct, ombre nette | « hard light » sans direction |
| Source douce | grande surface diffuse, fenêtre drapée | « soft » sans taille |
| Silhouette | contre-jour, fill quasi nul sur le visage | contre-jour + key frontale forte sans hiérarchie |
| Nuit crédible | practicals limités, zones mortes | ciel bleu nuit partout |
| Jour gris | omnidirectionnel doux, pas de soleil | ciel dramatique sans cohérence |

## Matériaux, surfaces, et lumière qui rebondit

Un mur crépi, une vitre, un parquet verni, un métal brossé, ne renvoient pas la lumière pareil. Tu n’es pas obligé de tout nommer, mais **une** phrase sur le comportement du lieu aide, murs clairs qui remplissent les ombres, briques sombres qui avalent le fill, sol humide qui ramène des reflets de néon.

Les **reflets dans les yeux** doivent correspondre au nombre et à la position des sources que tu décris. Si tu vois deux catchlights symétriques alors que tu as écrit une seule fenêtre latérale, corrige soit le prompt, soit l’image en post. Ce détail tue le réalisme avant la texture de peau.

Le **verre** et les lunettes demandent souvent un compromis de cadrage. Si le reflet montre un décor impossible, change l’angle plutôt que d’empiler des négatifs.

## Itérations : une couche lumineuse par passe

Sur une session honnête, tu compares trois images qui ne diffèrent que par **l’angle de la key** de dix à quinze degrés. Tu apprends comment ton modèle « lit » le nez et les joues. Ensuite tu fixes l’angle et tu joues le fill. Puis tu fixes fill et key et tu joues la température du fond.

Si tu changes tout à chaque clic, tu ne construis pas d’intuition. Les directeurs photo sur plateau font des tests avant le take, toi tu fais des tests avant de verrouiller un prompt pour une série.

> La lumière est une phrase. Si tu ajoutes un paragraphe, tu ajoutes des sources fantômes.

## Trench warfare

**Dire « natural light » sans préciser la fenêtre.** Précise taille, orientation relative, rideaux, heure.

**Demander du Rembrandt sans savoir ce que c’est.** Si tu veux un triangle de lumière sur la joue opposée, décris la key latérale et l’ombre du nez qui ne coupe pas la lèvre. Le nom seul est une étiquette.

**Multiplier les sources fortes égales.** Trois keys au même niveau, c’est le studio discount. Choisis une dominante.

**Oublier le sol.** Le sol renvoie de la lumière. Un parquet clair ou un tapis sombre change le visage.

**Négliger la hauteur de la key.** Une key trop haute crée des ombres de cernes agressives. Une key basse monte un film d’horreur. Assume le choix.

**Demander du volumétrique partout.** La brume visible en rayon, ce n’est pas neutre. Ça change la lisibilité du contraste. Si tu l’utilises, écris où commence la brume et quelle source la révèle.

**Copier des prompts « lighting pack » sans lieu.** Les packs sont souvent des mélanges. Recompose avec ton lieu précis, cuisine étroite, open space froid, chambre mansardée.

**Oublier que la caméra voit aussi l’ombre portée.** Si ton sujet touche un mur, une ombre doit s’y lire avec une direction cohérente avec la key. Sinon tu obtiens un flottement de collage. Ajoute une phrase sur l’ombre sur le mur derrière, longue, courte, douce, dure.

**Sous-estimer le rôle du plafond.** Plafond blanc bas, bounce vers le haut du crâne. Plafond noir ou très haut, moins de fill naturel. Une ligne sur le plafond peut expliquer pourquoi le haut du visage change entre deux lieux similaires.

Pour le vocabulaire historique du portrait, la page [clair-obscur](https://fr.wikipedia.org/wiki/Clair-obscur) situe l’intention sans t’obliger à copier Caravage. Pour les sources visibles dans le cadre, [lampe à incandescence](https://fr.wikipedia.org/wiki/Lampe_%C3%A0_incandescence) rappelle ce que « tungstène » suggère comme couleur. Pour la couleur de la lumière, [température de couleur](https://fr.wikipedia.org/wiki/Temp%C3%A9rature_de_couleur) aide à calibrer tes mots. Pour l’**éclairage en trois points**, classique en portrait studio, voir [éclairage en trois points](https://fr.wikipedia.org/wiki/%C3%89clairage_en_trois_points).

## Liens utiles dans la série AI Studio

- [Comment écrire un prompt cinematic ultra réaliste pour l’IA](/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia)
- [Comment créer des lumières naturelles en image IA](/blog/comment-creer-lumieres-naturelles-image-ia)
- [Comment créer une ambiance sombre et cinématique avec l’IA](/blog/comment-creer-ambiance-sombre-cinematique-avec-ia)
- [Comment générer une scène réaliste avec profondeur de champ](/blog/comment-generer-scene-realiste-profondeur-champ)

## Frequently Asked Questions (FAQ)

**Comment intégrer ce guide à un pipeline équipe ?** Partagez le glossaire interne des sources, pas seulement les images finales. Quand tout le monde écrit « key » et « fill » pareil, les itérations deviennent comparables. Ajoutez une capture des prompts gagnants à côté des livrables pour la review créa.

**Je dois tout écrire en anglais technique ?** Teste. Key et fill sont souvent efficaces. Le reste peut rester en français si ton modèle répond mieux.

**Comment savoir si j’ai trop de fill ?** Si le modelé du visage disparaît et que les yeux semblent flottants, baisse le fill ou assombris légèrement les ombres en post.

**Un néon rose sur la peau, comment éviter le plastique ?** Réduis la surface de peau directement frappée, ajoute une key neutre plus forte, ou corrige en sélection fine.

**La lumière du prompt ne correspond pas aux reflets des lunettes.** Retire les lunettes ou change l’angle de caméra pour simplifier le reflet.

**Peut-on mélanger flash et jour ?** Oui si tu écris la hiérarchie, jour dominant, flash léger comme détail, ou l’inverse pour une intention studio dans la rue.

**Comment décrire une bougie ?** Source petite, chaude, flicker très léger si ton outil le gère, sinon stable. Proximité courte, falloff rapide.

**Pourquoi mon ombre portée est coupée net au sol ?** Souvent une lumière dure sans bounce. Ajoute une phrase de sol réfléchissant ou un fill minimal.

**Je fais de la BD réaliste, même règles ?** Oui pour la cohérence. Le style peut être illustratif, la géométrie lumineuse reste une boussole.

**Comment écrire une scène avec deux personnages ?** Nomme une key commune, puis précise qui est plus tourné vers la source, qui est en fill, sinon tu obtiens deux éclairages studio différents sur le même plan.

**La neige et la pluie changent-elles la lumière ?** Oui. Neige diffuse et rebond, pluie ajoute des speculars et noircit les vêtements mouillés. Une phrase météo évite le décor soleil sec par défaut.

**Dois-je préciser l’heure pour un intérieur ?** Souvent oui, surtout si une fenêtre est visible. Midi et crépuscule ne renvoient pas la même quantité et qualité de jour.

**Comment éviter le « flou de peau » lumineux ?** Key trop frontale et trop douce sur une peau déjà lissée par le modèle. Pousse une key légèrement latérale et garde une micro texture.

**Est-ce utile de nommer la position du soleil ?** Oui, bas, haut, contre, ombres longues ou courtes. « Golden hour » seul est vague, précise l’orientation par rapport au sujet.

**Les prompts négatifs sur la lumière, utiles ?** Oui, en petit nombre, pas de double soleil, pas de rim sans key si ça te crée des contours sales, pas de fill frontal style selfie si tu veux du latéral, et évite les listes de trente interdits qui se contredisent.
