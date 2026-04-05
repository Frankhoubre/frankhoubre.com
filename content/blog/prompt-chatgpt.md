---
title: "Prompt ChatGPT : essentiel, mais c'est quoi ?"
date: "2026-03-30"
category: "tutoriels"
excerpt: "Découper un prompt comme un brief de tournage, verrouiller le contexte, itérer sans tourner en rond, et arrêter de supplier l'outil avec des phrases vagues."
thumbnail: "/images/blog/prompt-chatgpt/hero.png"
---

Tu ouvres une conversation avec ChatGPT, chez OpenAI, dans le navigateur ou une appli dédiée. Tu veux du pro. Tu écris trois mots vagues. Tu attends qu’il lise dans tes pensées. Puis tu le blâmes quand la sortie est creuse. Le problème rarement nommé : **un prompt, c’est un brief**, pas une prière. Comme en tournage, si tu n’écris pas le cadre, la lumière dominante et ce qui est hors cadrage, quelqu’un d’autre décide à ta place — sauf qu’ici « quelqu’un », c’est la moyenne statistique du modèle.

Ce guide t’explique ce qu’est un prompt utile avec ChatGPT : rôle court, tâche mesurable, contraintes, format de sortie, itération **une variable à la fois**. On relie ça à ton usage créatif (brief image, découpage, script, liste de négatifs pour la diffusion) sans promettre que le texte remplace un humain en responsabilité. ChatGPT est un **assistant de langage** : il assemble des formulations plausibles à partir de ton contexte visible ; il ne « sait » pas ton projet s’il n’est pas écrit, et il peut **halluciner** des faits si tu lui demandes du chiffré ou de l’historique sans garde-fou. L’interface peut afficher des suggestions ou des réponses rapides : à toi de garder le **brief** comme source de vérité, pas la première phrase confortable du modèle.

Trois silhouettes. **Sarah**, freelance social, veut un brief image pour trois plans ; elle obtient du vent parce qu’elle a écrit « inspire-toi d’Instagram ». **Marc**, étudiant ciné, veut un découpage ; il reçoit huit plans impossibles parce qu’il n’a pas dit qu’il n’a pas de travelling. **L’agence K**, pitch lundi, laisse ChatGPT être complaisant ; ils gagnent du confort et perdent la critique. Les workflows ci-dessous corrigent ça avec la même rigueur qu’un **tableau de tournage** : colonnes, livrables, risques.

## Ce que ChatGPT reçoit vraiment (sans magie)

**Tokens, pas intentions.** Le modèle traîne une fenêtre de contexte : texte visible, instructions système éventuelles, messages récents. Ce qui est **vieux** dans la conversation peut être partiellement oublié ou compressé mentalement par le modèle. Les contraintes critiques (format 16:9, interdiction de néon, ton sec) : **réinjecte-les** quand tu changes de sujet ou passes de la rédaction à la critique.

**Rôle, tâche, contraintes.** Le rôle (« tu aides un créateur solo ») calibre le ton. La tâche (« livre un tableau cinq lignes ») calibre la forme. Les contraintes (« pas de jargon juridique, pas de moraline ») calibrent les bords. Si tu mélanges tout en un poème, le modèle trie et jette.

**Format explicite.** « Explique » produit de la prose. « Donne **cinq puces** », « **un tableau** Plan / Action / Risque », « **deux paragraphes** puis **six questions** de contrôle » produisent de la densité utile. Le format est un **compresseur d’intention**.

**Exemples courts.** Un mini-exemple de ligne de prompt image ou de réplique cadrée vaut dix adjectifs. Ce n’est pas une consigne de plagier : c’est une **ancre de forme**.

Pour le lien avec les prompts visuels purs, voir [comment écrire un prompt cinematic ultra réaliste pour l'IA](/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia) et [les erreurs de prompt qui rendent une image IA artificielle](/blog/erreurs-prompt-qui-rendent-image-ia-artificielle).

**Itération disciplinée.** Quand tu changes trois paramètres entre deux messages (ton, longueur, structure), tu ne sais pas ce qui a amélioré la réponse. Note mentalement : « ce tour-ci, je ne change que la **longueur** ». C’est la même logique qu’en génération d’image : une variable à la fois.

**Connecteurs visuels.** Tu peux demander explicitement : « pour chaque plan, donne une ligne **copiable** pour un générateur d’image type SDXL/Flux » avec les champs caméra / lumière / matière / interdits. ChatGPT devient alors un **traducteur** entre ton intention narrative et un format technique — sous réserve que tu valides le résultat dans le moteur réel.

**Limites honnêtes.** Les capacités exactes (navigation web, analyse de fichiers, longueur max, modèles disponibles) **changent** selon ton abonnement et la date. Ce qui reste stable, c’est la méthode : brief clair, format, validation humaine.

### Trois scénarios débutants (avec pivot)

**Brief image trois plans.** Avant : « fais un truc créatif pour une marque café ». Après : public, tonalité, interdits visuels, ratio, puis « tableau : Plan, Intention, Lumière, Focale, Mouvement, Erreur à éviter ». Le livrable devient une **check-list** que tu peux coller dans un autre outil.

**Découpage avec contraintes terrain.** Avant : « découpe ma scène ». Après : lieu réel, deux comédiens, pas de travelling ; « **deux** propositions max, une phrase de justification par plan, signale où le son sauve une coupe ».

**Pitch storyboard.** Avant : une version « smooth ». Après : « liste **trois incohérences** possibles entre les trois images clés, puis corrige le texte ». Tu forces une passe **critique**, pas complaisante.

## Workflow pratique : le prompt comme mini-contrat

### Étape 0 — Quatre lignes de cadre

- **A** — Qui tu es dans l’histoire utilisateur (solo, étudiant, créa).  
- **B** — Ce que tu livres vraiment (script, brief, critique, négatifs).  
- **C** — Niveau de langue et de précision.  
- **D** — Interdits de sortie (clichés, jugements sur concurrents, etc.).

Si tu utilises des **instructions personnalisées** (Custom instructions) ou un **GPT** personnalisé dans l’écosystème OpenAI, investis-y ce cadre : tu ne réécris pas un roman à chaque message.

### Étape 1 — Nommer le livrable + format

Évite « améliore ». Préfère « réécris en **40 mots max** » ou « donne **A/B** avec une phrase de conséquence ».

### Étape 2 — Coller la matière première

Un brouillon laid bat un vide absolu. Si tu n’as pas de texte, donne trois références **observables** (lumière, rythme), pas trois titres de films sans précision.

### Étape 3 — Passe « risque »

« Qu’est-ce qui pourrait rendre cette sortie **inutilisable** pour un tournage réel ? » Puis correction ciblée. Tu obtiens un garde-fou gratuit.

### Étape 4 — Figer la version utile

Copie la meilleure sortie dans un fichier, date, note ce qui a marché dans ta consigne.

### Étape 5 — Boucle courte : une variable

Message suivant : plus court, plus technique, autre point de vue — **pas les trois**. Compare deux versions comme deux prises.

### Étape 6 — Export vers l’outil visuel

Demande une **version minimaliste** : lignes actionnables seules. Puis, si besoin, « copier-coller prompt image » avec une ligne caméra, lumière, matière, interdits. Tu transformes la conversation en **fiche technique**.

### Étape 7 — Revue « client pressé »

« Adopte le rôle d’un client qui dit non trois fois. » Tu récupères des objections courtes et tu révises. Jeu de rôle bête, efficace en solo tard le soir.

### Étape 8 — Passerelle vers la vidéo

Si tu enchaînes vers un pipeline vidéo, demande une **liste de sons** attendus par plan (ambiance, effets, musique indicative) et une **durée indicative** par beat. Ça aligne le texte avec [comment structurer une vidéo IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film) sans que tu réécrives tout au montage.

Voici un repère visuel pour l’étape « écrire avant d’enchaîner », même esprit documentaire.

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, hands typing on laptop keyboard, coffee mug soft in foreground, morning side light on wooden desk, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

![Mains au clavier et lumière du matin, repère pour le travail d'écriture itérative.](workflow-1.png)

### Table de lecture : remplacer la supplication par la consigne

| Ta phrase actuelle | Ce qui manque | Action de remplacement |
| --- | --- | --- |
| Fais un beau script | critères de beauté | « 12 lignes max, ton sec, une action visible par phrase » |
| Comme un pro | niveau | « brief agence, jargon caméra assumé » |
| Sois créatif | cadre | « **deux** directions opposées, puis tranche selon budget » |
| Corrige tout | variable inconnue | « corrige **uniquement** la logique temporelle » |
| Inspire-toi de X | référence floue | « fenêtre nord, pluie fine, néons loin derrière » |

Deuxième repère visuel, esprit « choix de plans ».

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, printed storyboard frames and pencil on table, director hands reviewing shots, soft overhead practical, oval anamorphic bokeh in background, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

![Feuilles et crayon sur table, esprit « choix de plans » plutôt que dispersion.](workflow-2.png)

> Quand tu demandes de « structurer », force un **choix final** explicite (A ou B) avec une phrase de conséquence. La structure sans décision, c’est du remplissage confortable qui simule du travail sans avancer le projet d’un plan.

Pour la clarté des consignes en général (vidéo pédagogique, pas un substitut à la vérification des faits) : [prompting et structure](https://www.youtube.com/watch?v=hHWkvFH8u9I)

## Trench warfare : erreurs fréquentes

**Roman introductif.** Vingt lignes de contexte avant la question : le signal utile se dilue. **Fix :** cinq lignes max, puis la demande, puis un exemple.

**« Tu sais ce que je veux ».** Non. **Fix :** résultat **visible** ou **testable** en une phrase.

**Mélange des tâches.** Rédaction + traduction + critique dans un seul message. **Fix :** trois messages, trois passes.

**Absence de niveau de public.** **Fix :** « pour quelqu’un qui connaît déjà le montage » ou l’inverse.

**Fuite en avant créative.** Variations sans base validée. **Fix :** fige la V1 qui tient, puis variantes de détail.

**Peur du copier-coller de ton propre brief.** C’est ta matière première : assume-la.

**Oubli du son** même quand tu prépares de l’image. **Fix :** une ligne « qu’entend-on au premier plan ? »

**Faits chiffrés, légal, médical** repris sans vérification humaine. **Fix :** ChatGPT n’est pas une base de vérité ; recoupe toujours des sources primaires. Pour la fiction et le brief créatif, vise la **cohérence interne** ; ne confonds pas une réponse plausible avec une fiche encyclopédique vérifiée, et ne t’appuie pas sur une encyclopédie en ligne comme autorité sans lecture critique des sources originales.

**Sortie trop longue pour l’outil suivant.** **Fix :** demande une compression au **format cible** (ex. quarante mots pour une incrustation).

**Abus de « cinematic ».** **Fix :** remplace par des décisions : hauteur caméra, focale, dureté de source, distance sujet–fond.

**Confondre échec texte et échec image.** Note en deux colonnes ce qui vient du **langage** et du **moteur visuel**.

## Liens utiles dans la série AI Studio

- [Pourquoi ton prompt ne marche pas, et comment le corriger](/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger)
- [Comment écrire un prompt cinematic ultra réaliste pour l'IA](/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia)
- [Les erreurs de prompt qui rendent une image IA artificielle](/blog/erreurs-prompt-qui-rendent-image-ia-artificielle)
- [Comment écrire un script efficace pour une vidéo générée par IA](/blog/comment-ecrire-script-efficace-video-generee-par-ia)

## FAQ

**Un prompt ChatGPT, c'est toujours en anglais ?**  
Non. L’anglais aide pour certains tags techniques ; tu peux structurer en français et **injecter** les termes outils dans un tableau.

**« System » et « user », concrètement ?**  
Pense charte (system) vs consigne du jour (user). Si une seule zone de texte, mets la charte au début et **répète** les contraintes critiques avant chaque grosse question.

**ChatGPT invente des faits : je fais quoi ?**  
Tu vérifies ailleurs pour tout ce qui engage une responsabilité. Pour la fiction / brief, tu cherches la cohérence interne — pas une vérité type encyclopédie sans recoupement.

**C'est quoi un bon prompt en une phrase ?**  
« Livre X au format Y sous contraintes Z, avec un paragraphe sur les risques. »

**La température / le réglage de variabilité ?**  
Pour du brief créatif, souvent milieu : variété contrôlée. Pour des listes strictes, un peu plus bas. Le nom exact du réglage dépend de l’interface OpenAI du moment ; l’idée est moins d’aléatoire quand tu veux de la **répétabilité**.

**Ça remplace un scénariste ?**  
Non. Ça aide à débloquer, structurer, reformuler. Le regard humain sur l’émotion et la responsabilité éditoriale reste nécessaire.

**Je perds mes conversations : astuce ?**  
Archive : date, version, prompt exact qui a marché. Comme pour une seed d’image stable que tu veux reproduire demain.

**Custom instructions vs message unique ?**  
Les instructions personnalisées portent ce qui est **stable** sur tous tes projets ; le message porte ce qui est **spécifique** à la tâche du jour.

**Les GPTs personnalisés changent quoi ?**  
Ils peuvent embarquer instructions, fichiers, outils — utiles pour un workflow répété. Tu restes responsable du brief et de la validation.

**ChatGPT et données sensibles ?**  
Ne colle pas de secrets, données personnelles tiers, ou info confidentielle client sans cadre légal clair avec ton organisation et les conditions OpenAI du moment.

**Comment générer des négatifs pour la diffusion ?**  
Colle une description d’image ratée, demande « qu’est-ce qui sonne faux pour un œil ciné ? » puis « traduis en négatifs courts ». Passe le résultat dans ComfyUI / SD / autre ; voir [comment générer des images IA photoréalistes sans effet plastique](/blog/comment-generer-images-ia-photoréalistes-sans-effet-plastique).

**Le modèle refuse ma demande : pourquoi ?**  
Politiques de sécurité et garde-fous évoluent ; reformule le but (éducation, fiction, brief technique) sans contourner de mauvaise foi.

**Plusieurs comptes ou équipes ?**  
Alignez une **charte de prompt** partagée (format de tableau, interdits, glossaire caméra) pour éviter que chaque membre réinvente un dialecte incompatible.

**Je veux du code / du JSON pour automatiser.**  
Demande un schéma strict et des exemples ; vérifie dans un linter. Le modèle peut décaler une virgule : garde une relecture humaine pour tout ce qui part en production.

**Comment éviter le ton « assistant trop enthousiaste » ?**  
Ajoute : « ton sec, pas de compliments, pas de phrases de transition ». Le style est une contrainte comme une autre.

**Les pièces jointes (PDF, images) : bonne idée ?**  
Oui pour résumer ou extraire des tableaux **si** ton offre le permet ; vérifie échantillon contre source pour les chiffres.

**Différence avec un moteur de recherche ?**  
Le moteur liste des pages ; ChatGPT **génère** du texte cohérent qui peut être faux. Pour les faits, tu veux souvent les deux : recherche, puis rédaction assistée à partir de sources ouvertes que **tu** juges fiables.

**Comment brief-er une scène pour un personnage constant ?**  
Utilise la même fiche personnage en tête de chaque sous-tâche ; relie à [comment écrire un prompt pour un personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant).

**Je prépare un workshop équipe : par où commencer ?**  
Fixe trois formats de sortie obligatoires (tableau, liste de risques, version courte « copier dans Slack ») et un glossaire caméra commun ; fais un exercice live sur **une** scène et compare les livrables au tableau blanc, puis votez sur la version la plus **tournable** demain matin.
