---
title: "Prompt ChatGPT : essentiel, mais c'est quoi ?"
date: "2026-03-30"
category: "tutoriels"
excerpt: "Découper un prompt comme un brief de tournage, verrouiller le contexte, itérer sans tourner en rond, et arrêter de supplier l'outil avec des phrases vagues."
thumbnail: "/images/blog/prompt-chatgpt/hero.png"
---

Tu ouvres ChatGPT. Tu veux du pro. Tu écris trois mots molles. Et tu attends un miracle. Voilà le drame quotidien.

Un prompt ChatGPT, ce n'est pas une formule magique trouvée sur un fil Reddit. C'est une **consigne lisible**, avec un résultat testable, et une façon de corriger sans tout jeter. Ici, je te donne la même grille que j'utilise quand je briefe une image, un script, ou une structure de scène, sauf que le « chef op », c'est le modèle. Si tu traites ChatGPT comme un stagiaire intelligent qui ne devine pas ton intérieur, tu gagnes du temps. Si tu le traites comme une boule de cristal, tu perds des heures.

Ce guide est pour toi si tu débutes, si tu crées des visuels ou des vidéos avec l'IA, et si tu veux que le texte qui sorte serve vraiment ton film, ta pub, ou ton storyboard. On parle champ lexical de la prod, pas jargon inutile.

### Le visuel d'ouverture, généré comme une image de plateau

Avant de plonger dans le texte, voilà l'esprit que je veux pour ce sujet : une scène crédible, humaine, lumière practical, grain discret, pas une illu « tech » avec des néons partout. Si tu génères cette image en local avec Flux, SDXL, ou un flux équivalent, reprends la structure suivante mot pour mot, puis remplace uniquement la scène entre crochets.

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, dim writers room at night, laptop open with sticky notes, single warm desk lamp on face and hands, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

> Un prompt image et un prompt ChatGPT, c'est la même obsession : nommer le cadre, la lumière, ce qui compte au premier plan, et ce qui est interdit. Si tu n'écris pas ces décisions, un autre goût les prendra à ta place.

## Concepts clés : ce que « prompt » veut vraiment dire

ChatGPT lit des tokens, pas tes intentions cachées. Quand tu écris « fais mieux », le modèle invente une définition de « mieux ». Quand tu écris « **mieux** signifie : moins d'adjectifs, plus d'actions, trois fois plus court », tu viens de donner un critère mesurable.

Trois couches utiles. La couche **rôle**, brève, pour caler le ton et le niveau. La couche **tâche**, avec livrable explicite. La couche **contraintes**, techniques ou créatives, selon ton projet. Si tu mélanges tout en un pavé poétique, le modèle fera du tri et oubliera le tiers.

Le contexte n'est pas une option. « Tu es un expert » sans préciser l'univers, c'est du décor vide. « Tu aides un débutant à écrire un prompt image pour une scène intérieure, lumière fenêtre nord, objectif 35 mm » : là, tu ancreras le vocabulaire.

L'itération doit être **une variable à la fois**. Tu changes la structure, ou le ton, ou la longueur, pas les trois d'un coup. Sinon tu ne sauras jamais ce qui a sauvé la réponse.

Les exemples dans ta consigne, même miniatures, valent dix paragraphes d'adjectifs. Un exemple n'est pas une contrainte de copie, c'est un repère de forme.

Enfin, ChatGPT n'est pas ton chef de projet. Toi, tu décides. L'outil propose, tu vérifies, tu coupes, tu réinjectes.

Une nuance de terrain : la fenêtre de contexte, même large, n'est pas une mémoire sentimentale. Si tu enchaînes vingt tournures différentes dans la même discussion, le modèle **priorise** ce qui est récent et visible. Les contraintes critiques, **réinjecte les** quand tu changes de sujet, ou quand tu passes de « écriture » à « critique ». Sinon tu crois qu'il « sait » encore que tu voulais du 35 mm, alors que la conversation a dérivé sur le casting.

Un pont direct avec ton pipeline image et vidéo : utilise ChatGPT pour fabriquer des **négatifs utiles**, quatre à huit lignes, ciblées sur ce que ton modèle local fait mal chez toi. Tu lui colles une sortie ratée décrite en mots, tu lui demandes « qu'est-ce qui sonne faux pour un œil ciné » puis « traduis en négatifs précis ». Tu repasses ça dans ComfyUI ou ton UI de diffusion. Ce n'est pas de la triche, c'est du **couplage** entre langage et rendu.

### Scénario débutant 1 : la freelance qui doit rendre un brief client lundi midi

Sarah écrit des tournées court format pour marques modestes. Elle n'a pas de réalisateur sous la main. Elle veut que ChatGPT lui sorte un **brief image** pour trois plans : produit, main, ambiance restaurant. Elle tape « inspire toi Instagram ». Résultat : phrases creuses, hashtags mentaux, aucune charpente lumière.

Ce qu'elle change. Elle ouvre la conversation avec cinq lignes fixes : public, tonalité, interdits visuels, taille de sortie, et vocabulaire de caméra qu'elle accepte. Puis elle demande un tableau : plan, intention, lumière, focale, mouvement, erreur à éviter. **Le livrable n'est plus une « inspo », c'est une check list de tournage.** Elle gagne trois heures et son prestataire IA image arrête de lui renvoyer du néon gratuit.

### Scénario débutant 2 : l'étudiant en ciné qui apprend le découpage sans se noyer

Marc veut comprendre comment passer d'une scène dialogue à des plans. Il pose une question large à minuit. ChatGPT lui balance huit plans génériques, dont quatre impossibles avec son budget.

Ce qu'il change. Il colle trois lignes de contexte : lieu réel disponible, deux comédiens, pas de travelling. Il demande **deux propositions** de découpage, pas dix, et une justification en une phrase par plan. Il force le modèle à signaler où le son sauve une coupe. D'un coup, la réponse redevient pédagogique au lieu d'encyclopédique.

### Scénario débutant 3 : la petite agence qui prépare un storyboard oral avant pitch

Deux associés doivent présenter une promesse visuelle. Ils utilisent ChatGPT pour aligner un **fil narratif** entre trois images clés. Le piège : ils acceptent la première version « smooth » sans contradiction.

Ce qu'ils changent. Ils ajoutent une consigne tardive : « liste trois incohérences possibles entre les trois images, puis corrige le texte ». ChatGPT devient critique, pas complaisant. **La présentation tient** parce que quelqu'un a simulé la question du client au fond de la salle.

## Workflow pratique : le prompt ChatGPT comme un mini contrat

### Étape 0 : pose le cadre en quatre lignes, avant toute poésie

Ligne A : qui tu es dans l'histoire utilisateur, créateur solo, étudiant, chef de pub. Ligne B : ce que tu livres vraiment, script, brief image, liste d'erreurs, critique. Ligne C : niveau de langue et de précision. Ligne D : ce qui est **interdit** dans la sortie, clichés, morale, jugement sur un concurrent.

Si tu utilises des instructions personnalisées ou un GPT custom, c'est ici que tu dois investir. Tu ne réécris pas un roman à chaque message, tu poses la loi une fois.

### Étape 1 : nomme le livrable avec un format

Évite « explique ». Prefère « donne **cinq puces** », ou « **un tableau** colonnes : Plan, Action, Risque », ou « **deux paragraphes**, puis **six questions** de contrôle ». Le format force une densité utile.

### Étape 2 : injecte la matière première

Colle ton brouillon même laid. ChatGPT travaille mieux sur du concret imparfait que sur du vide. Si tu n'as pas de texte, donne trois références de lumière ou de rythme, pas trois films cultes sans précision.

### Étape 3 : demande une passe « risque »

Une question simple : « Qu'est-ce qui pourrait rendre cette sortie inutilisable pour un tournage réel ? » Puis une passe correction. Tu obtiens un **garde-fou** sans payer un consultant.

### Étape 4 : fige la version utile

Tu copies la meilleure sortie dans un fichier texte, tu nommes la date, tu notes ce qui a marché dans ta consigne. Ton futur toi est impatient, il déteste deviner.

### Étape 5 : boucle courte

Message suivant, **une modification** : plus court, moins formel, plus technique, autre point de vue caméra. Tu compares deux versions côte à côte comme deux prises.

### Étape 6 : export vers ton outil visuel sans perdre l'intention

Quand la sortie te convient, demande une **version minimaliste** : uniquement les lignes actionnables, sans prose. Puis une version « copier coller image prompt » si tu en as besoin, avec une ligne caméra, une ligne lumière, une ligne matière, une ligne interdits. Tu viens de transformer une conversation en **fiche technique** que tu peux coller ailleurs. Si tu travailles en équipe, ajoute une ligne « questions restantes » pour que ton binôme sache où c'est encore fragile.

### Étape 7 : revue « comme un client »

Une dernière demande utile : « Adopte le rôle d'un client pressé qui dit non trois fois. » Tu récupères des objections courtes, tu réponds avec une **révision ciblée**. Ce jeu role bête évite le ton complaisant quand tu es seul devant l'écran le soir.

Voici un repère visuel pour l'étape « écrire sur le papier numérique avant d'enchaîner », même esprit documentaire, mains, matière, pas de surcompression.

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, hands typing on laptop keyboard, coffee mug soft in foreground, morning side light on wooden desk, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

![Mains au clavier et lumière du matin, repère pour le travail d'écriture itérative.](workflow-1.png)

### Table de lecture : quoi écrire au lieu de supplier

| Ta phrase actuelle | Ce qui manque | Ta **action** de remplacement |
| --- | --- | --- |
| Fais un beau script | critères de beauté | « Donne 12 lignes max, ton sec, une action visible par phrase » |
| Comme un pro | niveau | « Style brief agence, pas académique, jargon caméra assumé » |
| Sois créatif | cadre | « Propose **deux** directions opposées, puis tranche selon le budget » |
| Corrige tout | variable inconnue | « Corrige uniquement la logique temporelle, ne touche pas aux dialogues » |
| Inspire toi de | référence floue | « Fenêtre nord, pluie fine, néons loin derrière, pas de slow mo » |

Et quand tu passes du texte au **storyboard mental**, pense cadrage. Voici un prompt de référence pour une image type « lecture de plans sur table », utile pour te rappeler que ChatGPT doit t'aider à trancher, pas à multiplier les idées floues.

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, printed storyboard frames and pencil on table, director hands reviewing shots, soft overhead practical, oval anamorphic bokeh in background, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

![Feuilles et crayon sur table, esprit « choix de plans » plutôt que dispersion.](workflow-2.png)

> Quand tu demandes à ChatGPT de « structurer », force un choix final explicite, A ou B, avec une phrase de conséquence. La structure sans décision, c'est du remplissage confortable.

Pour calibrer l'œil sur la clarté des consignes en général, cette référence aide à voir comment une explication efficace **pose le cadre avant le détail** : [prompting et structure d'une consigne utile](https://www.youtube.com/watch?v=hHWkvFH8u9I)

## Trench warfare : ce que les débutants ratent, et comment réparer

**Le roman introductif.** Tu passes vingt lignes à contextualiser avant la question. Le modèle sature. Répare : cinq lignes de contexte max, puis la demande, puis un exemple.

**Le « tu sais quoi je veux ».** ChatGPT ne sait pas. Répare : une phrase qui décrit le résultat **visible** ou **testable**.

**Le mélange des tâches.** Rédaction plus traduction plus critique dans le même message. Répare : trois messages courts, trois passes nettes.

**L'absence de niveau.** « Explique » sans public = vulgarité flottante. Répare : « pour quelqu'un qui connaît déjà les bases du montage » ou l'inverse.

**La fuite en avant créative.** Plus de variations au lieu de valider une base. Répare : **fige la V1** qui tient, puis seulement des variantes de détail.

**La peur du copier coller.** Tu hache mal ton propre texte par peur du plagier toi même. Répare : assume le copier coller de ton brief, c'est ta matière première.

**L'oubli du son.** Même pour de l'image, le son change le rythme des titres et des dialogues. Répare : une ligne « précise si la scène entend quoi au premier plan ».

**Promesse légale ou médicale sans relecture humaine.** Répare : tu **ajoutes toujours** une couche humaine pour tout ce qui engage une responsabilité.

**Copier une sortie trop longue dans un outil qui refuse le pavé.** Répare : demande d'abord une **compression** en respectant une structure, puis colle. Le modèle sait souvent réduire mieux quand tu lui donnes le format cible exact, par exemple quarante mots maximum pour une superposition vidéo.

**Abus du mot « cinematic ».** Répare : remplace par **une décision**, hauteur de caméra, focale, dureté de la source, distance sujet fond. Même en texte, le cinéma est géométrie et lumière, pas un adjectif.

**Comparer ChatGPT à l'aléatoire d'une image IA.** Répare : sépare les problèmes. Le texte peut être cohérent alors que l'image dérive, et l'inverse. Note dans deux colonnes ce qui vient du **langage** et ce qui vient du **moteur visuel**, sinon tu mélanges les torts.

## Liens utiles dans la série AI Studio

- [Pourquoi ton prompt ne marche pas, et comment le corriger](/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger)
- [Comment écrire un prompt cinematic ultra réaliste pour l'IA](/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia)
- [Les erreurs de prompt qui rendent une image IA artificielle](/blog/erreurs-prompt-qui-rendent-image-ia-artificielle)
- [Comment écrire un script efficace pour une vidéo générée par IA](/blog/comment-ecrire-script-efficace-video-generee-par-ia)

## Foire aux questions (FAQ)

**Un prompt ChatGPT, c'est toujours en anglais ?**

Non. L'anglais aide pour certains tags techniques photo, mais tu peux structurer en français et **injecter** les mots outils anglais nécessaires dans les cases du tableau.

**« System » et « user », je dois comprendre quoi en vrai ?**

Pense studio. Le system, c'est la charte. Le user, c'est le contre jour du jour. Si tu n'as accès qu'à une seule zone, mets la charte au début et **répète** les contraintes critiques avant la question suivante.

**ChatGPT invente des faits, je fais quoi ?**

Tu demandes des sources **uniquement** quand c'est pertinent, et tu vérifies ailleurs pour tout ce qui est chiffré, légal, ou médical. Pour la fiction et le brief créatif, tu cherches la **cohérence interne**, pas la vérité Wikipedia.

**C'est quoi un bon prompt en une phrase ?**

« Livre X au format Y sous contraintes Z, avec un paragraphe sur les risques. » Remplace X, Y, Z.

**Je dois mettre la température où ?**

Pour du brief créatif, valeur médium, tu veux de la variété contrôlée. Pour du contrôle de liste, un peu plus bas. Le réglage précis dépend de ton interface, l'idée est **moins d'aléatoire** quand tu veux du répétable.

**Ça remplace un scénariste ?**

Non. Ça remplace le blanc de la page si tu pilotes, ça ne remplace pas le regard humain sur l'émotion ni la responsabilité éditoriale.

**Je perds mes conversations, astuce ?**

Archive dans un dossier projet : date, version, prompt exact qui a marché. **Copier le succès** comme on duplique un réglage qui tient sur une image.
