---
title: "Les erreurs de prompt qui rendent une image IA artificielle"
date: "2026-04-02"
category: "tutoriels"
excerpt: "Liste des tics de langage et des réglages implicites qui poussent le modèle vers le plastique."
thumbnail: "/images/blog/erreurs-prompt-qui-rendent-image-ia-artificielle/hero.webp"
---
Tu demandes du « ultra réaliste 8K masterpiece », tu obtiens un mannequin cireux sous un ciel qui brûle, et tu te demandes pourquoi « réaliste » sonne comme une insulte. Ce n’est pas une malédiction, c’est une **liste courte de biais** que ton texte active sans que tu le voies. Les modèles ont vu des millions d’images étiquetées « quality, detailed, award winning » : souvent ce sont des photos retouchées agressives ou des rendus 3D lisses. Quand tu reprends les mêmes mots, tu hérites du même plastique.

Trois cas vécus. **Camille**, DA junior à Bordeaux, empilait les superlatifs par peur du vide : chaque génération ajoutait du sharp et du glow. **Mehdi**, développeur à Nice, mélangeait « film grain » et « spotless clean studio » dans la même phrase : le grain devenait une texture Photoshop collée sur une peau de poupée. **Sarah**, autrice de jeu vidéo à Québec, copiait des prompts Discord entiers : les LoRA implicites du message d’origine manquaient chez elle, le résultat était boueux sans qu’elle comprenne pourquoi. Les trois ont fini par une règle commune : **décomposer** le prompt avant de le juger, comme on décompose une recette au lieu d’avaler la bouteille d’épices.

Pour une vue d’ensemble du phénomène texte vers image, l’article [text-to-image model](nf:https://en.wikipedia.org/wiki/Text-to-image_model) sur Wikipédia pose le cadre : tu conditionnes une distribution d’images avec du langage, chaque mot pousse des corrélations statistiques.

## Le plastique n’est pas une personnalité

Quand une image « sent l’IA », le spectateur pointe souvent la peau. En coulisses, c’est souvent un **paquet de signaux** : netteté globale, catchlights symétriques, ciel saturé, ombres sans bounce, tissu sans micro-variation. Ton prompt peut activer ce paquet en cinq mots si tu reprends le vocabulaire des fiches stock. L’objectif de ce guide est de te faire **entendre ton propre texte** comme un dataset entendrait des tags.

## Erreur 1 : superlatifs sans géométrie

« Cinematic, epic, stunning, best quality » sans plan, sans focale, sans heure du jour, ça envoie le modèle vers des **poses catalogue** et des lumières génériques. Remplace la moitié des adjectifs par des données physiques : plan américain, 35 mm, niveau œil, fenêtre à gauche, pluie derrière la vitre.

Le correctif passe aussi par la hiérarchie décrite dans [pourquoi ton prompt ne marche pas et comment le corriger](/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger).

> **Astuce pro :** si tu retires tous les mots « quality » et que ton prompt ne décrit plus rien, il était vide.

## Erreur 2 : beauté par défaut

« Beautiful face, perfect skin, symmetrical eyes » pousse vers la **porcelaine**. Pour du réalisme, tu demandes texture, pores visibles au zoom, asymétrie légère, micro ombres sous les paupières.

Pour la lumière qui sculpte sans mentir, [comment décrire la lumière comme un directeur photo dans un prompt](/blog/comment-decrire-lumiere-directeur-photo-prompt) détaille les formulations utiles.

## Erreur 3 : cinq films en une ligne

Les références doivent parler de **lumière et matière**, pas de synopsis. Une ligne « Blade Runner, Dune, Amélie » mélange néons, sable, et pastel parisien. Choisis un régime visuel, ou sépare en deux générations.

## Erreur 4 : grand-angle et mains au premier plan

Le 18 mm près du visage étire les mains vers la caméra. Si tu vois des doigts longs, ce n’est pas « l’IA est nulle », c’est la **focale** qui ment. Passe en 35 mm ou 50 mm, ou recule le sujet dans le texte.

## Erreur 5 : négatif encyclopédique

Trente négatifs génériques se battent entre eux. Utilise **quatre à huit** cibles mesurées sur tes échecs : dents fusionnées, doigts en trop, texte illisible, horizon courbe.

## Erreur 6 : steps et guidance au maximum

Plus de steps peuvent **cristalliser** la peau en stuc. Une guidance trop haute fige les transitions. Cherche une fenêtre au milieu de la plage, note-la, réutilise-la.

## Erreur 7 : reflets et surfaces miroir sans discipline

Lunettes, écrans, vitrines demandent une **géométrie de reflet** cohérente avec la caméra. Si tu ajoutes « glasses » sans angle, le modèle invente un monde dans le verre. Précise trois quarts, reflet flou, ou retire les lunettes si la scène n’en a pas besoin.

## Erreur 8 : « clean » partout

« Clean kitchen, clean face, clean background » pousse vers le **studio stérile**. Le réel a poussière, traces, imperfection. Choisis une saleté contrôlée : eau sur le comptoir, doigts sur la vitre, grain de café échappé.

Pour choisir un moteur qui tolère mieux ton sujet, [Flux vs SDXL : quelle IA choisir pour des images réalistes](/blog/flux-vs-sdxl-quelle-ia-choisir-images-realistes) propose un test AB reproductible.

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

### Tableau : phrase typique, effet, remplacement

| Phrase typique | Effet probable | Remplacement |
| --- | --- | --- |
| masterpiece 8k | sharp global | retirer, décrire capteur ou grain |
| soft light everywhere | image plate | key + fill faible |
| beautiful perfect skin | porcelaine | texture peau, pores |
| cinematic bokeh | blob générique | focale, distance, forme |
| like [film A,B,C] | style bouillie | une référence lumière |
| ultra detailed eyes | yeux HDR | catchlight simple |
| no blur | image dure | flou optique cohérent |

> **Astuce pro :** un prompt est une liste de décisions. Sans décisions, le modèle choisit des défauts moyens qui sentent le stock.

Quand tu enseignes cette méthode à quelqu’un dans ton équipe, fais-lui faire l’exercice **à voix haute** : lire le prompt comme une liste de consignes de tournage. Si la personne ne visualise pas le cadre en cinq secondes, le modèle non plus. Cet exercice vaut toutes les feuilles de synonymes « pour varier ».

## Workflow de réécriture en huit minutes

**Minute 1-2 :** copie ton prompt dans un éditeur texte brut.

**Minute 2-4 :** barre tous les superlatifs, note-les sur le côté si tu y tiens émotionnellement.

**Minute 4-6 :** ajoute plan, focale, hauteur caméra, direction de key, heure.

**Minute 6-8 :** ajoute trois imperfections réelles max, grain fin, poussière légère, asymétrie du visage. Relis à voix haute.

### Double passe « décor puis visage »

Quand une seule image mélange un lieu chargé et un gros plan expressif, le modèle sacrifie une couche. Fais une première passe **wide** avec visage plus petit ou tourné, valide lumière et mur, puis recadre ou regénère serré avec la même key. Tu copies la ligne lumière telle quelle pour éviter que le néon change de côté.

Exemple réécrit, bloc texte :

```text
35mm spherical, eye level, medium shot, woman early 40s,
linen shirt slightly wrinkled, kitchen north window, rain on glass,
soft side light, weak bounce from table, visible skin texture,
small pores, slight under-eye shadow, shallow depth of field,
warm practical lamp in background bokeh, no beauty retouch
```

Pour garder un personnage stable entre les plans, [comment écrire un prompt pour un personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant) complète cette page.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

Pour calibrer l’œil sur le mouvement et le cadrage, cette vidéo aide : [mouvement caméra crédible](https://www.youtube.com/watch?v=pLDTXnovoBc).

## Checklist rapide avant de cliquer sur Générer

Coche mentalement : j’ai un **plan** nommé, une **focale** ou une famille de focale, une **direction de lumière**, une **heure** ou une météo, au moins une **imperfection** réelle, et moins de dix superlatifs vides. Si un item manque, tu n’es pas obligé d’arrêter ton travail, mais tu sais à l’avance quel défaut risque d’apparaître. Cette checklist prend quinze secondes et remplace des heures de régénération aveugle.

Si tu livres pour un client, ajoute : j’ai un **interdit** lié à la marque (pas de néon rose, pas de logo inventé) et une note sur le **ratio** final. Les prompts professionnels ressemblent souvent à des briefs courts, pas à des poèmes, et c’est une bonne nouvelle pour la reproductibilité.

## Guerre des tranchées : ce que les débutants ratent, et comment réparer

Tu penses que l’anglais technique est snob. Les checkpoints réagissent souvent mieux à **key, fill, rim, bokeh**. Écris en français dans ton carnet, traduis les tags pour le modèle.

Tu ajoutes « film grain » sans équilibrer la netteté ailleurs. Le grain devient un autocollant sur du plastique. **Baisse le sharp implicite** dans les autres lignes avant de monter le grain.

Tu demandes symétrie parfaite sur tout le visage. Les humains ne le sont pas. Une légère asymétrie des sourcils ou des paupières casse l’effet poupée.

Tu oublies les **catchlights** cohérents avec la scène. Une fenêtre rectangulaire doit donner une forme de reflet plausible, pas deux soleils ronds.

Tu mets « HDR » parce que tu veux du punch. Tu obtiens un ciel en feu et une peau encore lisse. Remplace par une description d’**exposition** : ciel légèrement compressé, visage protégé par une key latérale.

Tu copies un prompt qui incluait un LoRA ou un embedding chez l’auteur. Chez toi, sans ces poids, le prompt est une coquille vide qui **promet** un style impossible.

Tu refuses les mains : tu les mets en gros plan quand même. **Recadre** ou lointain flou.

Tu utilises « vibrant colors » sur une scène qui devrait être crasse et terne. Le modèle obéit, tu perds la narration. Remplace par une palette **limitée** et des matériaux délavés.

Tu demandes « sharp focus everywhere » : en optique réelle, le sharp partout n’existe pas avec une grande ouverture. Choisis un **plan de netteté** : yeux, puis dégradé.

Tu mets « professional lighting » sans dire quoi : trois sources studio par défaut apparaissent. Nomme une key, une fill faible, peut-être une rim, et leur couleur.

Tu crois que « natural » suffit : c’est le mot le plus vide du paquet. Remplace par heure, météo, taille de source, direction.

> **Astuce pro :** garde une « galerie de honte », trois images ratées annotées avec la ligne fautive du prompt. Tu progresses plus vite qu’avec cent images oubliées.

> **Astuce pro :** quand un mot « marche » une fois, ne le répète pas partout. La corrélation peut devenir une tique plastique.

## Frequently Asked Questions (FAQ)

**Je dois tout écrire en anglais ?**

Pas forcément pour toi, souvent oui pour les tags techniques dans le prompt si ton modèle les comprend mieux. Teste une paire français anglais sur trois scènes et garde ce qui stabilise.

**Les mots « photorealistic » aident-ils ?**

Parfois, mais seuls ils ne remplacent pas la lumière et la focale. Si tu les ajoutes sans géométrie, tu restes dans le stock.

**Comment savoir si mon prompt est trop long ?**

S’il contient trois styles contradictoires ou répète la même idée cinq fois, raccourcis. La longueur n’est pas le problème, la cohérence oui.

**Pourquoi mes yeux brillent comme des billes ?**

Catchlights symétriques et saturation élevée sur le blanc. Demande une ombre sous la paupière, baisse la saturation sur le sclère, un seul reflet principal.

**Le négatif « ugly » inverse-t-il la beauté plastique ?**

Souvent non, ça crée des artefacts bizarres. Précise plutôt « waxy skin, plastic texture, oversharpened » si c’est ce que tu veux éviter.

**Dois-je lister tout ce que je ne veux pas ?**

Non. Cible quatre à huit défauts que ton modèle produit réellement sur ton sujet.

**Comment tester sans gaspiller de crédits cloud ?**

Réduis résolution et nombre d’images par batch pour le diagnostic, monte seulement quand une direction tient.

**Mes tissus ressemblent à de la résine, que faire ?**

Retire les mots qui lissent, ajoute des mots de matière réelle, froissé, pulls, grain de bois brut, et baisse la guidance d’un cran.

**Pourquoi mon décor change entre deux seeds ?**

Le seed change l’échantillonnage. Si la géométrie saute trop, ton prompt décor est sous-déterminé. Ajoute des ancres physiques, matériau du sol, largeur de fenêtre, couleur du mur.

**Le même prompt donnait mieux la semaine dernière ?**

Mise à jour du modèle, interface, ou case cochée différemment. Archive captures d’écran des réglages avec la date.

**Comment intégrer du texte lisible dans l’image sans tout casser ?**

Garde la phrase courte, mentionne la typo dans le prompt, évite les polices fantaisie. Si le modèle échoue trois fois, place le texte en post en vectoriel plutôt que de saturer le négatif. Le texte est souvent le point où les corrélations plastiques apparaissent parce que le modèle mélange lettres et matière.

**Pourquoi mes images « sentent le générateur du mois » ?**

Tu utilises les mêmes mots mode que tout le monde en même temps. Les checkpoints réagissent aux modes collectives. Évite les prompts viral copy-paste, réécris avec tes propres ancres de lieu et de lumière.

**Dois-je mentionner la marque d’appareil photo ?**

Parfois ça aide, parfois ça déclenche des corrélations publicitaires lisses. Teste avec et sans « shot on » sur trois scènes. Garde seulement si ça améliore la texture sans lisser.

**Comment équilibrer grain et netteté ?**

Grain dans le prompt léger, netteté sélective en post sur les bords éloignés, jamais sur la peau au premier plan sauf intention publicitaire assumée. Si le grain du prompt crée du bruit sur la peau, passe le grain en overlay uniforme après coup.

**Les embeddings et triggers invisibles comptent-ils ?**

Oui si tu utilisais un fichier qui les contenait sans le savoir. Ouvre tes prompts dans un éditeur brut, cherche les chevrons ou noms de styles cachés. Recopie ligne par ligne pour isoler le déclencheur fantôme.

**Puis-je demander « comme une photo argentique » sans préciser ?**

Tu obtiendras du grain aléatoire et des couleurs aléatoires. Précise plutôt ISO mental, sous-exposition légère, grain fin, highlights rolloff, pour guider sans laisser le modèle choisir un pack vintage au hasard.

**Comment éviter les dents parfaites en ligne blanche ?**

Demande des dents naturelles, légère asymétrie, micro-espaces, ou cache la bouche avec un geste ou une ombre si le plan le permet. Évite « perfect smile » si tu veux du réel.

**Le prompt doit-il suivre un ordre précis ?**

Beaucoup de praticiens placent caméra et lumière tôt, matière et grain ensuite, interdits en fin. Ce n’est pas une loi physique, mais ça aide ton cerveau à hiérarchiser et aide certains encodeurs à pondérer correctement.

**Que faire si mon style « propre » est voulu ?**

Alors assume le plastique comme esthétique : éclairage studio trois points, peau lisse, pas de contradiction avec « documentary natural skin ». Le fake vient du mélange involontaire de signaux contradictoires, pas du choix honnête d’un look.

**Comment documenter mes prompts pour une équipe ?**

Un fichier partagé avec date, modèle, résolution, prompt final, capture des curseurs, et lien vers l’image dans le drive. Une ligne « ce qui a échoué avant » évite que le collègue répète la même erreur. La documentation est aussi une compétence créative, souvent sous-estimée dans les petites équipes pressées par les deadlines courtes et les revues client fréquentes.
