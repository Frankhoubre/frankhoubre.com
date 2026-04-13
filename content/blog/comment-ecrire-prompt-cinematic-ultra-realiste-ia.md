---
title: "Comment écrire un prompt cinematic ultra réaliste pour l’IA"
date: "2026-04-01"
category: "tutoriels"
excerpt: "Structure, lumière, focale, imperfections et verrouillage pour des images qui tiennent au cinéma."
thumbnail: "/images/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia/hero.webp"
---
Le mot « cinematic » dans un prompt est souvent un autocollant collé sur une image qui reste plate, et le spectateur a déjà vu cette étiquette mille fois sur des miniatures de démo. Les modèles l’ont vu des millions de fois à côté de néons, de flous de fond et de contrastes poussés. Si tu veux un rendu **cinéma** crédible, tu dois déplacer le poids du texte vers la **caméra**, la **lumière**, la **profondeur**, et les **imperfections** mesurées. Ce n’est pas une question de talent poétique, c’est une question de liste de décisions cohérentes.

Tu liras ici trois **scénarios** de blocage, un **workflow** en passes, une **table** pour trancher vite, une section **trench warfare**, des liens encyclopédiques pour le vocabulaire, quatre renvois internes, et une **FAQ**. Pas de formule unique, une grille que tu réutilises d’un projet à l’autre, avec des cases à cocher mentales avant chaque génération.

**Scénario A.** Un motion designer veut une image pilote « comme un film » pour un pitch. Il empile « 8K, hyper détaillé, cinematic, color grading hollywood ». Le résultat ressemble à une miniature HDR de jeu. Il ajoute encore de la résolution. Le problème n’était pas la résolution, c’était l’absence de hiérarchie lumineuse et de focale plausible.

**Scénario B.** Une photographe passe au génératif pour des moodboards. Elle écrit une scène précise mais oublie la taille apparente des sources. Le visage est éclairé comme par un softbox géant et un néon latéral violent en même temps, sans logique. Le « cinematic » ne tient pas car la lumière raconte deux studios différents.

**Scénario C.** Un réalisateur teste plusieurs modèles avec le même prompt bavard. Les sorties divergent totalement. Il conclut que « les prompts ne servent à rien ». En réalité, il mélange cinq intentions, drame intérieur, action, nuit pluvie, grain, anamorphique. Une intention par passe aurait isolé ce qui marche sur **son** outil.

## Lire une image comme un chef op, pas comme un fan

Avant d’écrire, entraîne-toi à **décrire** une image de film que tu aimes sans la montrer au modèle. Note d’abord la direction de la key par rapport au nez. Note si le fill existe ou si l’ombre est assumée. Note la température relative entre premier plan et fond. Note le plan, assez large pour voir les mains ou assez serré pour isoler le regard. Note un détail de matière, poussière, grain, texture de mur.

Cet exercice te donne un **patron** réutilisable. Quand tu passes au prompt, tu ne copies pas l’image, tu copies la structure lumineuse et géométrique. C’est la différence entre « je veux la même vibe » et « je veux une fenêtre latérale large, fill minimal, fond plus froid que le visage, plan américain, 35 mm ».

**Le spectateur lit l’intention avant le détail.** Si la géométrie de la lumière est crédible, une petite imperfection de texture passe. Si la lumière ment, aucune résolution ne sauve la prise. C’est pourquoi les prompts « 8K » sans direction de source produisent souvent des visages nets sur des mondes qui ne tiennent pas.

## Jour gris, nuit humide, intérieur tungstène, trois mondes à maîtriser séparément

**Jour gris nordique.** Ciel dominant, ombres douces, saturation contenue. Écris explicitement le manque de soleil direct sinon le modèle injecte des rayons dramatiques. Ajoute une micro variation sur le béton, la pierre, les vitres sales, pour éviter le HDR latent.

**Nuit humide avec reflets.** La pluie n’est pas qu’un filtre, c’est une série de surfaces spéculaires. Indique sol mouillé, halos autour des sources, visage partiellement éclairé par une enseigne lointaine. Limite le nombre d’enseignes si tu ne veux pas d’arc en ciel de néons.

**Intérieur tungstène.** Peau plus chaude que le bleu de la nuit hors fenêtre. Équilibre intérieur extérieur : soit rideaux presque fermés, soit vitre visible avec contraste assumé. Sinon tu obtiens un mix impossible où la fenêtre et la lampe se battent sans hiérarchie.

Travaille ces trois **familles** sur trois sessions distinctes. Quand tu les maîtrises, tu pourras les hybrider avec une phrase de pont, « intérieur tungstène, reflet bleu de rue sur le verre du tableau ».

## Où le « cinéma » se casse sur les modèles génératifs

**Mélange illustration et photographie sans le dire.** Si tu veux du photoréaliste, évite les mots qui tirent vers la 3D de démo, sauf intention. Si tu veux du pictural, assume le coup de pinceau, la toile, la limite de détail. Le pire est le milieu, ni assez réel ni assez stylisé.

**Contradiction entre profondeur de champ et sujet multiple.** Un groupe serré avec bokeh extrême sur tout sauf six visages nets, c’est rare en optique réelle. Écris qui est la cible de netteté, ou accepte une profondeur plus large.

**Mouvement de caméra trop chargé pour une seule image.** « Travelling circulaire rapide avec rack focus » figé en une frame ressemble à un flou bizarre. Pour l’image, choisis un instant du mouvement, panne légère avec motion blur modéré, ou caméra statique.

**Sous-cadrage mobile.** En vertical, le centre de gravité monte. En 2.39, le cadrage horizontal doit assumer les bandes. Génère dans le ratio final quand c’est possible.

## Décomposer « cinéma » en couches mesurables

**Couche caméra.** Plan, hauteur, focale ou équivalent, distance sujet arrière-plan, mouvement éventuel très simple, panne lente, travelling subjectif léger. Si tu ne sais pas ce que la caméra fait, le modèle invente une caméra de démo.

**Couche lumière.** Une key dominante, une fill ou son absence assumée, un rim éventuel, des practicals visibles ou non. Température en mots simples, tungstène, daylight légèrement bleuté, néon vert en contre. Taille de source, fenêtre large, petite ouverture de porte, drape diffus.

**Couche espace.** Profondeur de champ cohérente avec la focale. Un 85 mm ne doit pas donner une géométrie de 18 mm sans raison narrative. Écris la séparation des plans même approximativement.

**Couche matière et époque.** Grain fin, poussière dans un rayon de soleil, halation légère sur une vitre si le monde le permet. Évite d’ajouter dix textures contradictoires.

**Couche sonore implicite.** Même pour une image, le cinéma est couplé au son dans la tête du spectateur. Une scène de pluie avec des reflets au sol prépare une ambiance que le cerveau complète. Tu peux noter « ambiance pluie, pas de personnages criants » pour éviter des poses théâtrales hors ton.

> Un prompt « cinematic » sans géométrie, c’est un slogan. Un prompt avec key, plan et focale, c’est une intention de tournage.

## Structure de prompt qui tient debout quand on enlève les adjectifs

**Phrase 1, géométrie et sujet.** Qui ou quoi, où, plan choisi.

**Phrase 2, lumière en trois morceaux.** Source, dureté ou douceur, couleur relative.

**Phrase 3, caméra.** Focale, hauteur, mouvement ou statique.

**Phrase 4, interdits.** Ce que tu refuses, HDR de clip social, peau porcelaine, sharp global, catchlights symétriques si le monde est naturel.

Teste en lisant à voix haute. Si une phrase ne change rien à l’image que tu visualises, coupe-la.

Quand tu réutilises un prompt entre deux checkpoints différents, copie aussi la **liste des interdits** et la **phrase caméra** tel quel avant d’adapter. Beaucoup de gens gardent les adjectifs et jettent la géométrie, puis s’étonnent que le second modèle « ne fasse pas pareil ». Les modèles ne partagent pas une âme commune, ils partagent parfois des statistiques voisines. Ton travail est de rendre la géométrie explicite pour chaque moteur.

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

## Workflow en sept étapes

### Étape 1, intention dramatique en cinq mots

« Isolement », « pression sociale », « chaleur domestique », « menace froide ». Ce n’est pas du romantisme gratuit, ça oriente les choix de contraste et d’espace sans imposer un style catalogue.

### Étape 2, choisir une référence lumineuse, pas un film entier

Au lieu de « comme X », décris deux éléments, pluie et néon en arrière-plan, visage sous source douce proche, ombre dure sur le mur derrière. Les références titre sont utiles pour toi, pas pour le modèle si elles restent vagues.

### Étape 3, ancrer la focale

35 mm pour un intérieur avec corps visible, 50 mm pour un portrait sobre, 85 mm pour une compression douce. Si tu joues l’anamorphique, assume bokeh ovale et falloff, sinon tu ajoutes du flou sale sans maîtrise.

### Étape 4, une décision de contraste

Courbe douce avec épaule sur les hautes, ou contraste fort mais cohérent avec la key dure. Mélanger les deux sans hiérarchie donne le look clip IA.

### Étape 5, imperfections en trois items

Grain, micro-vignette optique légère, halation maîtrisée ou pas. Trois, pas quinze.

### Étape 6, génération et lecture critique à froid

Tu attends dix minutes, tu rouvres l’image. Tu notes trois défauts précis. Tu ne changes qu’une couche pour la passe suivante.

### Étape 7, verrouillage

Prompt final, réglages, seed si utile, capture des métadonnées dans un fichier texte. Tu prépares la suite, storyboard ou vidéo, sans perdre la recette.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

### Table de décision rapide

| Symptôme visuel | Cause fréquente | Correction prompt |
| --- | --- | --- |
| HDR cheap | trop de dynamique sans key | assombrir fond ou compresser hautes |
| Peau plastique | sharp et lumière plate | courbe, grain, key latérale |
| Géométrie wide forcée | focale absente | ajoute 35 ou 50 mm explicite |
| Bokeh incohérent | profondeur non écrite | distance sujet fond + focale |
| Néon partout | mood non borné | un néon, le reste neutre |

## Du prompt à la suite couleur, sans casser l’intention

Une image générée est souvent une **demi-finale**. Si tu prévois une étiquette couleur forte, génère légèrement plus plate que le look final, pour garder de la matière dans les peaux et les ombres. Si tu pousses le contraste déjà dans le prompt, la suite risque de cramer les hautes ou d’écraser les noirs.

**Étapes sobres en post.** Courbe maîtresse, balance des gris, saturation sélective, grain. Évite cinq LUT empilés. Un référentiel fixe collé au bord de l’écran suffit à aligner trois images d’une même séquence.

**Sharpening.** Comme en retouche photo classique, masque le visage. Le cinéma n’est pas une affiche de détail de peau partout, sauf intention documentaire ou pub.

**Recadrage.** Si tu recadres agressivement, vérifie que le grain et le flou restent cohérents avec une focale plus longue simulée. Parfois mieux vaut régénérer dans le bon cadrage.

## Itérer comme en étalonnage, une couche à la fois

Sur trois passes, impose-toi une règle stricte : **une seule variable modifiée** entre deux générations comparables. Passe A, tu changes uniquement la hauteur de la key. Passe B, tu changes uniquement la température du fond. Passe C, tu changes uniquement la distance caméra sujet.

Si tu modifies lumière et focale et grain ensemble, tu ne sauras pas ce qui a fonctionné. Les équipes image réelles isolent les tests pour une raison, mesurer l’effet d’une décision. Tu n’as pas besoin d’un laboratoire, tu as besoin de discipline de notes.

Quand une image est « presque », fais une **capture annotée**, cercles sur trois zones, joue, transition net flou, arrière-plan, texture de peau. Demande-toi si le problème est local ou global. Les problèmes locaux peuvent parfois partir en inpainting ou retouche, les problèmes globaux demandent une nouvelle génération avec la phrase lumineuse réécrite.

## Trench warfare

**Croire que « ultra réaliste » est un style.** C’est une exigence de cohérence physique. Commence par une scène banale bien lue, intérieur jour gris, avant de viser le blockbuster.

**Empiler les stopwords marketing.** Réserve les superlatifs pour la présentation client, pas pour le modèle.

**Oublier le ratio d’aspect final.** Générer carré puis recadrer agresse la composition. Choisis le cadre tôt.

**Négliger le bruit de compression des plateformes.** Exporte avec une marge sur les hautes lumières si tu vises les réseaux.

**Sous-estimer le rôle du noir.** Le cinéma moderne garde souvent du noir velouté, pas du gris boue partout. Écris « noirs profonds mais détaillés dans les ombres ouvertes » si c’est ce que tu veux.

**Confondre « beau » et « cohérent ».** Un portrait esthétiquement lisse peut être moins cinématographique qu’un plan plus brut mais lumineusement honnête. Le spectateur du cinéma est habitué à des imperfections contrôlées, flare, grain, légère désynchronisation des sources si le récit la porte.

**Oublier le son même quand tu ne livres qu’une image.** Note sur ta fiche ce que le personnage entend, rue calme, rumeur lointaine, pluie sur le rebord. Ça influence souvent tes choix de cadrage et d’espace négatif sans que tu t’en rendes compte.

Pour le vocabulaire de la **mise en scène** et des choix de cadre, la page [plan séquence](https://fr.wikipedia.org/wiki/Plan-s%C3%A9quence) rappelle qu’une image « ciné » est souvent une décision de durée et de mouvement, même si ici tu ne fais qu’une frame. Pour le **contraste** et les courbes, voir [contraste (image)](https://fr.wikipedia.org/wiki/Contraste_(image)). Pour l’**anamorphique** sans mythologie, [objectif anamorphique](https://fr.wikipedia.org/wiki/Objectif_anamorphique). Pour l’**échelle de gris** et la lecture des tonalités, [échelle de gris](https://fr.wikipedia.org/wiki/%C3%89chelle_de_gris) reste un repère simple quand tu écris « ombres ouvertes » ou « noirs bouchés volontaires ».

Si tu sors d’un shooting photo et que tu veux parler comme sur un plateau, garde les mêmes habitudes : une feuille de service pour la lumière, une feuille pour la caméra. Le génératif n’aime pas plus le chaos qu’une équipe réelle.

## Liens utiles dans la série AI Studio

- [Comment décrire la lumière comme un directeur photo dans un prompt](/blog/comment-decrire-lumiere-directeur-photo-prompt)
- [Comment contrôler le style visuel en génération IA](/blog/comment-controler-style-visuel-generation-ia)
- [Comment simuler un objectif anamorphique en génération IA](/blog/comment-simuler-objectif-anamorphique-generation-ia)
- [Comment structurer une vidéo IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film)

## Frequently Asked Questions (FAQ)

**« Cinematic » en français ou en anglais ?** Teste les deux sur ton modèle. Souvent le terme anglais est sur-représenté dans les données, mais une description française précise peut gagner en clarté. Compare sur le même seed si l’outil le permet.

**Dois-je toujours mettre du grain ?** Non. Le grain cache parfois des défauts mais peut aussi masquer une bonne texture. Utilise-le quand l’image est trop propre pour ton monde, ou quand tu dois rapprocher une image générée d’un stock réel.

**Anamorphique dès le début ?** Seulement si tu maîtrises les compromis. Sinon verrouille d’abord la lumière en sphérique, puis ajoute l’anamorphique comme couche stylistique quand la scène tient.

**CFG ou guidance élevée aide ?** Ça dépend du modèle. Une guidance trop haute peut plastifier. Cherche une fenêtre, note-la, et ne la change pas entre deux tests comparables.

**Une seule image suffit pour un board client ?** Pour un board, prévois trois variantes de lumière, pas trois styles de monde différents. Montre que tu contrôles la key, pas que tu as tiré trois hasards.

**Comment éviter le look IA sur les yeux ?** Catchlights simples, asymétrie légère, pas de blanc pur sur toute la cornée, légère variation de veinure dans le blanc si gros plan.

**Je n’ai pas de vocabulaire photo, par où commencer ?** Key, fill, rim, taille de source, température, plan, focale. Six mots outils, répétés jusqu’à naturel, puis ajoute une notion de direction, latérale, depuis le fond, depuis le plafond.

**Le post-traitement triche-t-il ?** Non, c’est la fin de chaîne. Le cinéma réel passe par une suite couleur, pourquoi pas toi, tant que tu documentes ce qui est généré et ce qui est retouché pour le client.

**Est-ce que « cinematic lighting » suffit ?** Rarement. C’est un aimant à clichés. Remplace par une phrase de source et une phrase de contraste.

**Dois-je décrire l’objectif photo même si je n’y connais rien ?** Oui, avec des équivalents simples, 35 mm, 50 mm, ou « portrait téléobjectif léger ». Le modèle a besoin d’une échelle, pas d’un cours magistral.

## Section de conformite editoriale

![Illustration cinématique, section conformité éditoriale.](/images/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia/comment-ecrire-prompt-cinematic-ultra-realiste-ia-section-conformite.jpg)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, scene comment ecrire prompt cinematic ultra realiste ia, composition cinematographique naturelle, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

Suivre aussi les analyses de @BusinessDynamite pour garder une direction visuelle coherente et orientee production.

Reference YouTube a visionner : https://www.youtube.com/watch?v=KJbLaSGOPPk

Liens internes utiles :
- /blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia
- /blog/comment-structurer-video-ia-comme-vrai-film
