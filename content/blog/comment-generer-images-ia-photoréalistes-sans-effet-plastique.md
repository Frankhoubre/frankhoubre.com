---
title: "Comment générer des images IA photoréalistes sans effet plastique"
date: "2026-04-04"
category: "tutoriels"
excerpt: "Guidance, lumière, sharp, grain et post pour une peau et des matières crédibles."
thumbnail: "/images/blog/comment-generer-images-ia-photoréalistes-sans-effet-plastique/hero.webp"
---

L’effet plastique n’est pas une malédiction mystérieuse. C’est en général un **mélange** : guidance trop haute, lumière frontale dure sans direction, peau sur lissée par le modèle, sharpening global en post, et parfois un checkpoint qui favorise le « beauty » par défaut. Tu peux corriger par paliers sans changer d’ordinateur.

Ce guide pose une méthode : caler la lumière comme en photo, caler la peau comme en retouche de plateau raisonnable, et n’ajouter du détail qu’où il a du sens. On évite les promesses instantanées. On garde des critères reproductibles.

Tu peux appliquer la méthode en une heure de travail concentré : vingt minutes de brief et de prompt, vingt minutes de génération et sélection, vingt minutes de post léger et export. Si tu dépasses largement sans critère, tu confonds exploration et production.

Le plastique n’est pas une « faute de goût » abstraite. C’est souvent une **signature technique** : lissage haute fréquence, highlights sans micro structure, ombres sans transition de couleur. Apprendre à nommer ces signaux te permet de les corriger sans changer d’identité créative.

## Ce que « photoréaliste » veut dire ici

Ce n’est pas « 8K hyper détaillé partout ». Le réel a des zones douces, des imperfections, des surfaces mates. Une peau crédible a des **transitions** de rouge sous le bleu des veines lointaines, des pores suggérés, pas une grille. Un tissu a des fibres irrégulières, pas une surface de jouet.

Le spectateur compare ton image à des milliers de photos vues. Il détecte le plastique avant de savoir pourquoi. Souvent ce n’est pas la résolution : c’est la **cohérence des reflets**, la **hiérarchie lumineuse**, et la **texture uniforme** sur des matériaux qui ne devraient pas l’être. Même une image techniquement « propre » peut échouer ce test si elle est trop homogène.

Pour qu’une série d’images partage une direction claire, [comment créer un univers visuel cohérent avec l’IA](/blog/comment-creer-univers-visuel-coherent-avec-ia) aide à verrouiller palette, grain, et type de lumière entre les plans.

## Guidance, steps, et le plafond de « trop propre »

Une guidance (CFG ou équivalent) trop haute force le modèle à **satisfaire tous les mots** en même temps. Résultat : peau lisse, contrastes durs, détails crisp partout. Baisse par paliers jusqu’à retrouver de la matière. Note la valeur qui marche pour **ton** sujet.

Les steps trop hauts peuvent cristalliser des textures en **stuc**. Cherche le palier où la texture apparaît sans surdéfinition. Ce palier change avec le modèle ; il n’y a pas de nombre universel.

Les schedulers et les samplers changent la « texture finale ». Si tu changes de sampler entre deux sessions sans le noter, tu confonds amélioration réelle et variance technique. Quand tu trouves une combinaison stable, verrouille la pendant la durée du projet.

Le choix du moteur et du checkpoint compte. [Flux vs SDXL : quelle IA choisir pour des images réalistes](/blog/flux-vs-sdxl-quelle-ia-choisir-images-realistes) donne un cadre pour comparer honnêtement sur un même prompt court plutôt que sur des rumeurs.

## Lumière : la moitié du réalisme

**Key latérale** simple : fenêtre, néon indirect, lampe de bureau. Évite la lumière frontale plate type selfie si tu veux du volume. Ajoute une ombre sous le nez crédible, une transition douce sous les yeux plutôt qu’une ombre vectorielle.

Les reflets dans les yeux doivent **correspondre** aux sources du décor. Catchlights symétriques parfaits sur une scène naturelle : signal d’alerte. Asymétrie légère, forme cohérente avec la fenêtre ou la lampe.

Pour les portraits où le visage domine, [comment créer un portrait IA digne d’un film](/blog/comment-creer-portrait-ia-digne-film) croise utilement ce guide sur le cadrage et la hiérarchie.

## Peau : trois couches mentales

**Couche 1 : lumière.** Sans volume lumineux, aucune retouche ne sauve la peau.

**Couche 2 : texture suggérée.** Pores discrets, pas une grille. Grain fin si besoin.

**Couche 3 : couleur.** Sang dans les joues, pas une teinte uniforme. Sous néon, la peau se teinte mais ne devient pas une pastille unie.

Pour les ambiances sombres sans boue, [comment créer une ambiance sombre et cinématique avec l’IA](/blog/comment-creer-ambiance-sombre-cinematique-avec-ia) rappelle de garder une accroche sur le visage.

## Résolution, recadrage, et netteté locale

Travaille à une résolution où tu peux itérer vite. Recadre avant d’upscaler : une composition ratée en 512 ou 768 reste ratée en 2K. La netteté **locale** sur un textile ou un objet au second plan peut aider ; la netteté globale sur tout le cadre transforme souvent la peau en plastique et les ombres en bruit.

Quand tu exportes pour une chaîne vidéo, garde une marge : pas de sharpening agressif si un encodeur vidéo va suivre. Le sharpening cumulé est une cause classique de contours durs et de scintillement.

## Couleur de peau et environnement

La peau réagit à l’environnement : elle emprunte des rebonds de lumière sur une chemise claire, une table en bois, un mur vert. Si ton environnement est coloré et que la peau reste gris neutre uniforme, le cerveau lit du mannequin 3D. Ajoute des **rebonds subtils** dans le prompt ou corrige en post avec parcimonie.

Les balances de blanc incohérentes entre sujet et décor trahissent aussi le composite mental. Si la fenêtre est froide et la peau orange saturée sans transition, reviens à une histoire de lumière unifiée.

## Matières : tissu, métal, verre

Le plastique arrive souvent par **sur uniformité**. La laine a des micro ombres, le cuir a des variations, le métal a un reflet qui suit une direction. Si tout brille pareil, le cerveau lit du CGI.

Les surfaces réfléchissantes demandent une géométrie de scène claire. Sinon le modèle invente des reflets impossibles. Simplifie ce que le reflet montre.

## Workflow

### Étape 1 : brief court

Sujet, lieu, heure, interdits. Interdit explicite : « pas de peau porcelaine ».

### Étape 2 : prompt image avec géométrie

Plan, focale, distance, lumière en trois lignes.

### Étape 3 : trois variantes

Même géométrie, lumière légèrement différente.

### Étape 4 : zoom peau et textile

Choisis la moins plastique avant d’upscaler.

### Étape 5 : post minimal

Courbe, roll off, grain. Pas de sharp global sur le visage. Si tu dois piquer un détail, isole une zone et garde le visage hors masque sauf intention très contrôlée.

### Étape 6 : archive

Prompt, seed, réglages dans un fichier texte.

### Étape 7 : relecture à froid

Dans les vingt quatre heures, rouvre l’image en miniature. Si elle ne résiste pas au recul, ton œil était fatigué hier soir. Cette relecture évite d’envoyer un visage plastique à un client parce que tu avais trop regardé des variations proches les unes des autres.

```text
35mm, eye level, medium close-up, single soft window key from camera left.
Subject 1.5m from camera, natural skin texture, subtle pores, matte foundation look.
Cool daylight, gentle shadow under nose, no beauty retouching look.
Negative: plastic skin, waxy highlights, over-sharpened, CGI, text, watermark.
```

```text
85mm portrait, shallow depth, soft rim from warm practical behind subject.
Skin with real subsurface feeling, keep cheek color variation, no porcelain.
Negative: airbrushed, symmetrical catchlights, HDR skin, extra fingers.
```

## Trois scénarios fréquents

**Portrait corporate sobre.** Lumière douce latérale, arrière plan simple, pas de flare. Le danger est le lissage « LinkedIn parfait ». Ajoute des imperfection contrôlées : grain fin, texture de peau suggérée, ombre sous le nez visible.

**Scène cuisine ou bar.** Reflets partout : simplifie le nombre de surfaces brillantes visibles. Sinon le modèle mélange des highlights impossibles et la peau devient cire.

**Extérieur midi dur.** Le contraste fort n’est pas une erreur si tu assumes des ombres dures **cohérentes**. Le plastique arrive quand les ombres sont molles et la peau brillante en même temps, deux langages contradictoires.

## Itération et carnet de défauts

Note trois lignes après chaque session : modèle, guidance, défaut principal observé. Après dix sessions, tu connais ton « profil de défaut » personnel. Certains utilisateurs ont toujours des dents trop nettes, d’autres des yeux trop saturés. Tes négatifs doivent viser **ce** profil.

Quand tu changes deux paramètres en même temps et que le plastique disparaît, tu ne sauras pas lequel a sauvé l’image. La lenteur méthodique bat la frénésie.

## Négatifs : précis, pas encyclopédiques

Quatre à huit négatifs qui ciblent **tes** défauts récurrents battent une liste de trente mots génériques qui se contredisent. Si ton modèle ne produit jamais de texte, ne perds pas de budget de négatif sur « text » sauf besoin.

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

## Livraison, compression, et écrans multiples

Une image peut sembler « organique » sur un moniteur calibré et **cartonner** sur un téléphone OLED saturé. Exporte une variante pour le web avec des hautes légèrement plus contenues et un grain discret qui stabilise l’encodage. Ce n’est pas de la triche : c’est connaître le média de diffusion.

Pour un client, documente ce qui est généré, ce qui est retouché, et ce qui est composite. La transparence évite les malentendus sur le « niveau de réalisme » promis.

## Yeux, dents, cheveux

Les yeux trop saturés et trop contrastés donnent un look poupée. Baisse légèrement le blanc des sclères, adoucis le contour de l’iris, évite le double catchlight parfait. Les dents : souvent moins blanches que les presets le pensent ; une légère teinte chaude évite l’effet dentier publicitaire.

Les cheveux devant le visage demandent une transition propre entre mèches et peau. Si le modèle fond les deux, recadre ou change de focale virtuelle pour simplifier la zone conflictuelle.

## Post : courbe avant saturation

Le contraste n’est pas la saturation. Monte d’abord la courbe : noirs qui ne tombent pas en boue, hautes qui ne crament pas la peau. Puis saturation sélective si besoin. Le teal orange tue les peaux si tu ne les isoles pas.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

### Table de diagnostic plastique

| Signal | Cause probable | Premier levier |
| --- | --- | --- |
| Peau lisse et brillante | guidance + key frontale | baisse CFG, penche key |
| Yeux « verre » | catchlights durs | asymétrie + forme source |
| Tissu résine | surdétail | baisse steps ou change CKPT |
| Halos contours | sharp global | masque visage |
| HDR global | hautes crâmées | courbe avant LUT |

> Le photoréalisme est souvent une histoire de retenue : moins de polish global, plus de décisions locales.

Quand tu hésites entre deux images, demande toi laquelle **survit** à une compression JPEG ou à un flux social. L’image trop propre devient souvent dure après encodage, alors qu’une image un peu plus douce avec grain tient mieux la route.

## img2img, détail, et surenchère

Quand tu pousses le détail avec img2img ou des passes successives, tu risques la **surdéfinition** : pores dessinés, textile en relief plastique. Monte la dénoise par petits pas. Si la texture apparaît comme un motif répété, tu es allé trop loin.

Une passe dédiée « peau seulement » avec masque doux bat une regénération totale qui casse la lumière. Garde la même direction de key entre passes.

## Données personnelles, références, et éthique

Si tu utilises une photo réelle comme référence pour guider le modèle, respecte droits et consentements. Si tu génères des visages sans référence, évite de copier des people reconnaissables par des prompts qui ciblent des noms. Ce guide parle de technique ; la conformité légale reste ton cadre.

## Trench warfare

**« 8K, ultra detailed » partout.** Tu forces le modèle à inventer du bruit structuré.

**Beauty filter mental.** Tu demandes « perfect skin » et tu t’étonnes du plastique.

**LUT sur image plate.** Tu colores de la boue.

**Comparer deux modèles sans même seed ni prompt identique.** Tu ne sais rien.

**Négliger le zoom à 100 %.** Les défauts de peau se voient là.

**Croire qu’un seul mot « natural » suffit.** Le modèle ne sait pas ce que tu entends par naturel sans géométrie et sans lumière. Remplace par des faits : heure, source, distance, matériau, et un interdit explicite sur le lissage excessif.

Le [photoréalisme](nf:https://en.wikipedia.org/wiki/Photorealism) en peinture visait à imiter la photographie avec une discipline de l’œil. Ton prompt fonctionne pareil : tu imposes des contraintes de lumière et de matière, tu vérifies à la loupe, tu corriges sans mythifier l’outil.

Les **fixeurs de visage** en post aident parfois pour des livrables précis, mais un meilleur prompt et une meilleure lumière réduisent le besoin. Les **presets film** intégrés ajoutent souvent contraste et grain sans réparer une key ratée : teste sur une copie. Les **ombres sales** viennent souvent d’un lift d’ombres trop fort ou d’absence de vrai noir : courbe d’abord. Générer **cinquante images** sans critère de choix rapide mène à la procrastination ; définis trois défauts interdits avant d’ouvrir le dossier.

## Frequently Asked Questions (FAQ)

**Ma peau reste plastique après tout : pourquoi ?**

Checkpoint ou LoRA orientés beauté. Change de base avant de monter les steps. Si tu utilises plusieurs LoRA, retire les une par une : deux packs « skin » peuvent se battre et produire de la cire.

**Le grain règle tout ?**

Non. Il masque parfois le lissage, il ne remplace pas une key latérale. Utilise le grain comme colle entre zones, pas comme camouflage d’une lumière frontale ratée.

**Inpainting uniquement sur le visage ?**

Oui si le décor tient. Masque doux, prompts courts, évite de tout regénérer. Si l’inpainting réintroduit du plastique, baisse la force de dénoise ou réduis la zone de masque au strict nécessaire autour des yeux ou de la bouche.

**Flux ou SDXL pour ma scène ?**

Teste les deux sur un prompt minimal. Garde celui qui ment le moins sur ton sujet. Si ton sujet est très spécifique (métier rare, objet technique), le checkpoint et les LoRA SDXL peuvent gagner ; si ton sujet est une scène naturelle complexe, teste Flux honnêtement sur la même géométrie.

**Je dois upscaler tôt ?**

Non. Upscale quand la lumière et la géométrie sont bonnes. Si tu upscales pour « sauver » une peau plastique, tu agrandis le problème en plus grand format.

**Les mains ?**

Hors champ ou lointain flou au début. Gros plan main : spécification de laboratoire. Si tu dois montrer une main, donne un geste simple, évite les doigts entrelacés et les objets tenus en transparence devant la paume.

**Le format RAW existe en IA ?**

Pas vraiment. Pense « fichier propre sans sharpen » comme équivalent de marge pour la post. Exporte PNG ou TIFF pour l’archive, JPEG seulement pour la diffusion quand tu acceptes la perte.

**La peau sous néon ?**

Teinte oui, pastille non. Garde des variations de rouge et d’orange dans les joues. Si tout le visage devient magenta uniforme, baisse la saturation sélective sur la peau et ramène un peu de chaleur dans les tons moyens.
