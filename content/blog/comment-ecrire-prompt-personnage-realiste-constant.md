---
title: "Comment écrire un prompt pour un personnage réaliste et constant"
date: "2026-04-03"
category: "tutoriels"
excerpt: "Fiche personnage, invariants, angles sûrs, et gestion des mains et du profil."
thumbnail: "/images/blog/comment-ecrire-prompt-personnage-realiste-constant/hero.webp"
---
Un même visage qui devient un cousin différent à chaque régénération, ce n’est pas de la malchance, c’est le défaut normal d’un outil qui optimise une image, pas une identité, et qui n’a aucune obligation de se souvenir pour toi. Si tu veux un personnage **réaliste** et **constant**, tu dois traiter le prompt comme un contrat de tournage, pas comme une liste de souhaits. Le modèle n’a pas ta mémoire. Toi, tu dois la remplacer par des invariants écrits, des angles qui limitent les mensonges, et une discipline de fichiers qui te permet de revenir en arrière sans deviner.

Ce guide part du terrain. Tu y trouveras des **scénarios** concrets, un **workflow** en passes, une **table** de décision, une section **trench warfare** sur ce que les débutants cassent en premier, des renvois vers la culture image utile, et une **FAQ** en fin de page. L’objectif est simple, passer du tir aléatoire à une méthode reproductible, quitte à produire moins d’images mais plus utiles.

**Scénario A.** Une créatrice veut un protagoniste pour trois plans d’une mini fiction. Elle copie un prompt « portrait ultra détaillé » trouvé en ligne. Le premier plan est convaincant. Le deuxième change la forme du nez. Le troisième invente une montre qu’elle n’a jamais demandée. Elle conclut que « l’IA ne sait pas tenir un personnage ». En réalité, elle n’a jamais figé les invariants ni réduit la charge cognitive du cadre.

**Scénario B.** Un réalisateur indépendant veut un personnage type pour une affiche. Il fixe vingt traits dans un seul paragraphe. Le modèle mélange deux styles, la veste devient cuir puis coton, la coiffure glisse. Il pense qu’il faut « encore plus de détails ». La bonne direction est l’inverse, **moins de traits contradictoires**, plus de hiérarchie, et une référence visuelle stable si l’outil la supporte.

**Scénario C.** Une petite agence prépare des visuels pour une campagne. Le client veut « le même héros » sur cinq déclinaisons. L’équipe régénère jusqu’à obtenir cinq visages proches, puis retouche à la main. Ça tient pour une livraison ponctuelle, mais ça ne scale pas. La méthode durable, c’est une fiche personnage courte, des seeds ou références notées, et des cadrages qui évitent les zones anatomiques fragiles.

Les articles voisins du blog couvrent la multi-plan, les visages difficiles, et le photoréalisme sans plastique, tu les retrouves dans la section liens en fin de guide.

## Lire les défauts « signature IA » avant de blâmer le personnage

Quand le visage semble « faux », le spectateur accuse souvent les yeux ou la peau. En pratique, la liste des suspects est plus longue et plus banale. **Les hautes lumières** trop propres sur le front créent une lecture studio même si tu voulais du naturel. **Le bokeh** incohérent, ovales qui changent de taille entre deux images du même objectif fictif, casse l’illusion optique. **Les ombres portées** trop noires sans bounce intérieur donnent un collage découpé. **Les reflets dans les yeux** parfaitement symétriques sur une scène quotidienne signalent une lumière de packshot.

Corriger le personnage sans corriger la lumière, c’est peindre sur une fondation qui bouge. Pour chaque image presque bonne, pose-toi quatre questions. La source principale est-elle au même endroit que dans le prompt ? Les tons de peau ont-ils une sous-couche rouge crédible ou seulement un beige lissé ? Les cheveux ont-ils une micro variation de brillance ou un casque uniforme ? Les vêtements ont-ils un pli qui suit le corps ou une surface de mannequin 3D ?

**Le bruit et le grain** ne sont pas une mode. Sur une série, un grain trop différent d’un plan à l’autre devient une variation de « caméra » inexpliquée. Choisis une densité de grain cible pour le projet, note-la, et rapproche les plans avant livraison. Même chose pour le **piqué**. Un plan ultra net à côté d’un plan doux sans justification de focale ou de mouvement ressemble à un montage de sources disparates.

## Ce que « constant » veut dire pour un modèle

La constance n’est pas la copie pixel par pixel. C’est une **corrélation** entre images : proportions du visage dans une fourchette, même famille de cheveux, même silhouette vestimentaire, mêmes indices d’âge, même marqueurs mémorables discrets. Si tu changes trois invariants à la fois entre deux prompts, tu n’auras aucune idée de ce qui a cassé la continuité.

**Âge et physiognomonie.** Donne une tranche, « début trentaine », plutôt qu’un nombre magique. Ajoute une caractéristique stable, fossette, cicatrice fine, écarteur discret, mais évite d’en empiler cinq. Chaque ajout est une nouvelle variable.

**Coiffure et barbe.** Ce sont des ancres visuelles fortes. « Cheveux châtains mi-longs, raie sur le côté, légère ondulation » bat « beaux cheveux ». Si tu changes la longueur entre deux plans, le spectateur lit un saut de casting.

**Tenue.** Un vêtement simple et typé, bleu de travail, caban beige, sweat gris uni, tient mieux qu’une tenue chargée de logos et de couches. Les motifs complexes attirent les hallucinations de tissu.

**Accessoire rare mais répété.** Une montre sobre, un badge usé, un tote bag local, ça aide la mémoire du spectateur. Évite les lunettes réfléchissantes si tu n’as pas besoin du reflet, c’est une porte ouverte aux incohérences.

> La constance, ce n’est pas répéter le même prompt bavard. C’est répéter les mêmes trois décisions qui définissent l’identité, et ne changer que le cadrage ou l’action.

## Fiche personnage « promptable » en une page

Garde un document texte à côté de tes exports. Une ligne pour l’identité stable, une ligne pour la tenue du jour si elle change volontairement, une ligne pour la scène, une ligne pour les interdits.

**Ligne identité.** Sexe perçu ou neutre selon ton besoin, âge approximatif, origine phénotypique si tu l’utilises avec respect et cohérence narrative, coiffure, barbe ou pas, marqueur stable.

**Ligne tenue.** Haut, bas, chaussures, couleur dominante, matière, usure légère si tu veux du réalisme.

**Ligne scène.** Lieu, heure, météo si extérieur, mood.

**Ligne interdits.** Pas de mains en premier plan si ton pipeline les dégrade, pas de dents visibles en très gros plan, pas de texte sur les vêtements, ce que tu refuses est aussi un pilier du contrat.

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

## Géométrie et angles qui réduisent les erreurs

Les mains, les dents, les profils stricts et les oreilles sont des zones sensibles. Ce n’est pas une honte de les **sortir du cadre** quand l’histoire le permet.

**Plan américain et plan poitrine** donnent souvent un meilleur ratio réalisme ou cohérence que le gros plan frontal complet si tu n’as pas de retouches prévues. Si tu dois montrer l’émotion du visage, un léger trois quarts aide plus qu’un masque symétrique parfait.

**Focale et distance.** Un 35 mm ou 50 mm « équivalents plein format » est un langage que les modèles comprennent souvent mieux que « portrait magnifique ». Écris la hauteur de caméra, niveau œil, légère contre-plongée, légère plongée, pour éviter la caméra flottante.

**Direction du regard.** Fixe un point simple, regarde vers la fenêtre, vers l’objectif, vers un interlocuteire hors champ. Le regard flou dans le prompt devient un regard flou dans l’image.

## Workflow en huit passes

### Passe 1 : silhouette et lumière

Tu cherches d’abord la lecture en ombre et lumière, pas les pores. Un personnage lisible au loin tient mieux qu’un visage « parfait » dans un décor incohérent.

### Passe 2 : visage et coiffure

Tu verrouilles l’identité sans ajouter dix adjectifs. Trois traits forts, puis stop.

### Passe 3 : tenue et matière

Tu décris le textile avec des mots de matière, laine, coton usé, jean brut, plutôt que « stylé ».

### Passe 4 : arrière-plan volontairement simple

Moins de géométrie concurrente, moins de glissement d’identité. Un mur, une fenêtre, une rue simple, selon ton récit.

### Passe 5 : netteté, grain, imperfections

Tu ajoutes du grain fin, une micro-asperité de peau, une poussière légère si le monde le permet. Le but est de casser le plastique par défaut.

### Passe 6 : négatifs ciblés

Quatre à huit interdits précis, mains supplémentaires, fusion de doigts, dents fusionnées, symétrie catchlight absurde, texte illisible sur les vêtements.

### Passe 7 : image de référence ou seed selon l’outil

Si ton flux le permet, une image de référence du personnage bat mille mots. Sinon, note la seed quand une image est proche du but, et ne change qu’une couche à la fois ensuite.

### Passe 8 : verrouillage fichier

Tu exportes, tu nommes, tu copies le prompt final dans le même dossier. Ton futur toi n’a pas à deviner quelle variante était la bonne.

## Enchaînement multi-plans sans perdre l’identité

Imagine une séquence courte : entrée dans un café, commande au comptoir, regard vers la rue. Trois images, un même personnage. La méthode qui échoue, c’est trois prompts indépendants « dans le même style ». La méthode qui tient commence par **une feuille de continuité** : direction de la key, température de couleur dominante, tenue inchangée sauf intention narrative, et trois cadrages écrits noir sur blanc.

**Plan 1, établissement.** Tu décris le lieu et la silhouette du personnage avant le visage. Le modèle ancre le monde, tu réduis les surprises sur les proportions.

**Plan 2, action.** Tu réinjectes la même ligne identité, tu changes uniquement l’action et le cadrage. Si tu modifies en même temps la lumière et la veste, tu ne sauras pas laquelle des deux a tué la ressemblance.

**Plan 3, réaction.** Tu gardes la key, tu joues sur le regard et la proximité caméra. Si tu dois rapprocher, préfère un bond de cadrage réaliste, du plan taille au plan épaules, plutôt que d’aller directement au frontale bouche.

Quand tu exportes vers la vidéo plus tard, ces trois images partagent déjà une **géométrie lumineuse** compatible. Tu évites le saut de studio entre deux plans qui devrait être continus.

## Post-production minimale pour sauver la constance

Même une retouche légère peut synchroniser une série. **Courbe** d’abord, pour caler noirs et hautes lumières sur une référence fixée. **Saturation** ensuite, en protégeant les rouges de peau si tu pousses un look. **Netteté locale** sur textile ou arrière-plan, jamais en masque global sur le visage, sauf intention publicitaire assumée.

Si deux visages sont proches mais pas identiques, parfois un léger **harmonisation** des tons de peau et des ombres suffit à vendre la continuité, surtout en plan moyen. En gros plan, le cerveau est moins indulgent, d’où l’intérêt de verrouiller tôt le cadrage et les invariants plutôt que de compter sur la retouche.

Les **LUT** ou presets couleur doivent servir de colle entre plans, pas de cache. Si la lumière de base ment, un LUT transforme le mensonge en style cohérent mais toujours faux pour qui regarde les ombres du nez et des joues.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

### Table de décision rapide

| Problème | Cause probable | Action |
| --- | --- | --- |
| Visage qui change entre plans | trop de traits variables à la fois | réduis à trois invariants, fige coiffure et âge |
| Mains invraisemblables | mains au premier plan sans contrôle | hors champ ou plan plus large |
| Peau plastique | sharp global et lumière plate | courbe avant saturation, grain léger |
| Dents « IA » | sourire trop serré en gros plan | bouche presque fermée ou plan plus large |
| Décor qui vole la vedette | arrière-plan trop chargé | simplifie murs et lignes de fuite |

## Trench warfare : erreurs fréquentes et réparations

**Copier une fiche d’acteur réelle dans le prompt.** Même pour un personnage fictif, coller des détails biométriques d’une personne identifiable est une ligne rouge éthique et souvent légale. Travaille des archétypes visuels cohérents, des marqueurs de costume, et des références **lumineuses**, pas des doubles numériques de gens réels sans cadre clair.

**Multiplier les adjectifs « cinéma » sans caméra.** Remplace-les par plan, focale, hauteur, heure, direction de la key. Le modèle a besoin d’une scène physique, pas d’un trailer marketing.

**Changer la coiffure pour « varier ».** C’est une nouvelle personne pour le cerveau humain. Varie plutôt l’action et le cadrage.

**Oublier la lumière entre deux plans.** Même personnage avec une key opposée sans justification narrative, le spectateur lit une erreur de continuité. Note la direction de la lumière sur ta fiche, comme sur un rapport de tournage.

**Sharper jusqu’à la mort.** Le sharpening sur la peau cristallise des textures de jeu vidéo. Masque le visage si tu post-traite.

**Négliger le monitoring mobile.** Sur téléphone, les contrastes mentent. Vérifie sur un écran petit avant de valider une série pour une campagne.

**Abandonner après un plan « presque ».** Garde cette image comme référence négative écrite : note trois défauts précis, puis régénère en ne touchant qu’une couche, lumière seulement, ou cadrage seulement. La constance s’apprend en séparant les variables, pas en relançant la roulette à chaque frustration.

Pour la **profondeur de champ** et le lien entre focale et séparation des plans, la fiche encyclopédique sur la [profondeur de champ](https://fr.wikipedia.org/wiki/Profondeur_de_champ) aide à calibrer le vocabulaire. Sur le langage classique du portrait, voir aussi [éclairage en trois points](https://fr.wikipedia.org/wiki/%C3%89clairage_en_trois_points). Pour le vocabulaire des plans et des cadrages tels qu’on les nomme sur un plateau, la page [plan (cadrage)](https://fr.wikipedia.org/wiki/Plan_(cadrage)) évite les mélanges entre « américain » et « italien » selon les écoles. Ces pages sont des repères de vocabulaire, pas des règles magiques pour un modèle précis.

**Journal de session, format minimal.** Une ligne date, une ligne outil et version de modèle, une ligne prompt figé, une ligne seed, une ligne « ce que j’ai changé depuis hier ». En deux semaines, ce journal vaut plus qu’un dossier de deux cents captures non triées. Tu peux aussi y noter le **CFG** ou équivalent et le nombre de steps au moment où la texture bascule vers le plastique, pour ne plus refaire l’exploration au hasard.

## Liens utiles dans la série AI Studio

- [Comment créer des scènes cohérentes avec plusieurs plans en IA](/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia)
- [Comment éviter les visages déformés en génération IA](/blog/comment-eviter-visages-deformes-generation-ia)
- [Comment générer des images IA photoréalistes sans effet plastique](/blog/comment-generer-images-ia-photoréalistes-sans-effet-plastique)
- [Comment transformer une image IA en vidéo fluide et crédible](/blog/comment-transformer-image-ia-video-fluide-credible)

## Frequently Asked Questions (FAQ)

**Faut-il toujours une image de référence ?** Non, mais sans référence tu dois être plus strict sur la fiche et les angles. Avec référence, tu gagnes en stabilité si l’outil gère l’img2img ou l’IP-Adapter du moment.

**Combien de traits sur la fiche personnage ?** Trois à cinq invariants forts. Au-delà, les contradictions augmentent.

**Le seed suffit-il ?** Seul, non. C’est un verrou partiel. Combine seed stable, prompt stable, et idéalement référence ou même modèle et même réglages.

**Pourquoi mes mains ratent toujours ?** Les mains sont rares et complexes dans les données. Mets-les hors champ, lointaines, ou occupe-les avec un objet simple et volumineux.

**Anglais ou français dans le prompt ?** Les deux peuvent marcher. Garde les termes photo en anglais si ton modèle y est sensible, key, fill, rim, bokeh, et écris le reste dans la langue qui te donne les meilleurs résultats sur ton stack.

**Je dois absolument un gros plan bouche ?** C’est une demande à risque. Prévois retouche locale ou inpainting ciblé, ou recule d’un cran de cadrage.

**Comment livrer « le même héros » à un client ?** Documente prompt, seed, réglages, et fournis une planche de trois angles validés plutôt que cinq hasards « proches ».

**La coiffure change entre deux images du même jour de tournage fictif, est-ce grave ?** Pour le spectateur, oui, sauf si ton récit montre explicitement un passage de temps ou une scène différente.

## Section de conformite editoriale

![Placeholder scene cinematique realiste](/images/blog/comment-ecrire-prompt-personnage-realiste-constant/comment-ecrire-prompt-personnage-realiste-constant-section-conformite.jpg)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, scene comment ecrire prompt personnage realiste constant, composition cinematographique naturelle, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

Suivre aussi les analyses de @BusinessDynamite pour garder une direction visuelle coherente et orientee production.

Reference YouTube a visionner : https://www.youtube.com/watch?v=KJbLaSGOPPk

Liens internes utiles :
- /blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia
- /blog/comment-structurer-video-ia-comme-vrai-film
