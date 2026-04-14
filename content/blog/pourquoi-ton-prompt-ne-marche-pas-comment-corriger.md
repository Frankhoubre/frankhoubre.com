---
title: "Pourquoi ton prompt ne marche pas, et comment le corriger"
date: "2026-04-01"
category: "tutoriels"
excerpt: "Diagnostiquer contradictions, mauvaise hiérarchie, et tests en trois passes pour retrouver le contrôle."
thumbnail: "/images/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger/hero.webp"
---
Tu recopies un prompt qui a marché pour quelqu’un d’autre, tu obtiens un visage lisse, un ciel HDR, et un décor qui ressemble à une carte postale générique. La colère monte, tu ajoutes des adjectifs, la situation empire. Rien de tout cela ne prouve que tu es nul en « prompt ». Ça prouve surtout que **ton texte se contredit**, ou qu’il ne donne aucune priorité au modèle.

Ici on parle diagnostic, pas magie. Trois situations réelles. **Nadia**, photographe de mariage à Bruxelles, voulait un portrait « doux et dramatique » avec « contraste fort » et « peau parfaite » : le modèle a choisi le glamour plastique parce que les instructions se neutralisaient. **Julien**, motion designer à Lyon, empilait cinq films de référence dans un seul paragraphe : chaque style a pris une bouchée du cadre. **Amina**, community manager pour une marque outdoor, écrivait en français poétique sans aucun terme de caméra ni de lumière : le moteur a inventé un néon par défaut.

Les modèles de langage et les pipelines image suivent des statistiques. Quand tu écris, tu **ordonnes des probabilités**. L’article encyclopédique sur [l’ingénierie des prompts](nf:https://en.wikipedia.org/wiki/Prompt_engineering) résume l’idée : formuler clairement l’intention améliore la sortie, pas parce que le texte est joli, parce qu’il réduit l’ambiguïté. Ton travail ressemble donc plus à du montage d’instructions qu’à de la poésie, même quand le résultat final doit être poétique visuellement.

## La hiérarchie : ce que le modèle lit en premier dans ta tête

Avant les adjectifs, place la **géométrie du cadre**. Plan américain, taille, gros plan. Hauteur de caméra : niveau œil, légère contre-plongée, ou hauteur poitrine pour une tension douce. Ensuite la **lumière en trois lignes**, comme un chef opérateur la noterait sur un carnet.

Ligne A, source principale : taille apparente, couleur, direction. Exemple : grande fenêtre nord, lumière douce, légèrement froide. Ligne B, remplissage ou absence : pas de fill, ombre nette sous le nez, contraste franc. Ligne C, arrière-plan : pièce sombre, lampe practical chaude au fond, bokeh large.

Si tu retires tous les mots « cinematic » et « ultra réaliste », est-ce que ton prompt décrit encore une scène que tu peux voir ? Sinon, il était creux. Pour une structure de prompt orientée rendu film, voir aussi [comment écrire un prompt cinématique ultra réaliste pour l’IA](/blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia).

> **Astuce pro :** une seule émotion dominante par image. « Mélancolique et euphorique » n’est pas une nuance, c’est deux films différents.

## Contradictions classiques et comment les voir

**Beauté versus vérité.** Tu demandes peau parfaite et texture de pores visible. Le modèle penche vers l’un ou l’autre, rarement les deux sans retouche humaine.

**Lumière dure versus douceur romantique.** Tu veux une ombre tranchée sous le nez et en même temps un flou de princesse. Choisis : portrait mode magazine avec une key dure assumée, ou portrait fenêtre douce avec transitions longues sur la peau.

**Grand-angle et mains au premier plan.** Tu décris un 18 mm près du visage et tu t’étonnes des doigts longs. Passe sur du 35 mm ou 50 mm, ou recule le sujet dans le texte.

**Trop de références film.** « Comme Blade Runner, Dune, et Amélie Poulain » mélange néons, sable, et Paris pastel. Prends **une** référence de lumière, pas de synopsis.

Pour les tics de langage qui poussent vers le plastique, la liste des erreurs fréquentes est détaillée dans [les erreurs de prompt qui rendent une image IA artificielle](/blog/erreurs-prompt-qui-rendent-image-ia-artificielle).

## Le test des cinq lignes barrées

Avant de régénérer par frustration, imprime mentalement cinq lignes de ton prompt : caméra, sujet, lieu, lumière, interdit. Barre-en une seule, régénère. Si rien ne bouge, ce n’était pas la ligne qui pilotait le résultat, c’était un autre conflit plus bas dans le texte. Ce jeu stupide t’évite l’addiction au bouton « encore ».

Quand tu travailles pour un client, ajoute une sixième ligne contractuelle : **usage** (réseau, print, pitch interne). Ça évite de pousser un ratio ou une esthétique qui n’a aucun sens pour la livraison finale.

## Workflow en trois passes, réglages concrets

**Passe 1, composition et lumière.** Tu n’ajoutes ni grain fin ni texture peau. Tu verrouilles cadrage, focale, sources. Dans l’interface, tu notes le **nombre de steps** ou équivalent au premier palier où la géométrie se stabilise, pas au maximum affiché.

**Passe 2, matière et peau.** Tu ajoutes trois imperfections réelles maximum : grain fin, micro-texture peau au zoom, poussière légère dans un rayon de soleil. Tu évites d’ajouter en même temps dix adjectifs de matière.

**Passe 3, netteté et finition.** Tu baisses le sharpen mental du prompt, tu ajoutes des interdits ciblés plutôt qu’une liste encyclopédique.

Exemple de socle, à adapter :

```text
35mm spherical, eye level, medium close-up, man early 30s, stubble,
worn denim jacket, small apartment, window light from left, soft size large,
hard shadow under nose, cool fill very weak, warm practical lamp deep background,
natural skin, visible pores, no plastic skin, shallow depth of field
```

**Négatifs :** quatre à huit cibles précises battent trente génériques. Exemple : `extra fingers, fused teeth, symmetrical catchlights, oversharpened skin, waxy texture`.

### Clics type dans une interface « classique »

Ouvre ton outil, crée un dossier `2026-04-05_test_prompt`. Colle le socle minimal, **désactive** tout style préréglé fantasy ou anime si tu vises du photoréalisme. Règle le ratio sur 2:3 ou 16:9 selon ta sortie, pas sur carré si tu prépares une bannière horizontale.

Lance une première image avec steps au tiers inférieur de la plage recommandée pour ton modèle. Observe : si le décor est boueux, monte d’un palier de steps. Si la peau devient cire, **descends la guidance** d’un cran ou retire un superlatif de beauté.

Duplique la scène, nomme `passe1_lumiere`, `passe2_peau`, `passe3_grain`. Ne modifie qu’une scène à la fois quand tu compares. À la fin de la session, copie le prompt final dans `prompts.txt` avec la date.

Quand tu enchaînes plusieurs cadrages, garde une **fiche personnage stable** et change seulement plan et action. Le guide [comment écrire un prompt pour un personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant) évite les dérives d’identité.

> **Astuce pro :** si tu modifies trois couches à la fois entre deux générations, tu ne sauras jamais laquelle a sauvé l’image.

## Anglais, français, et tags techniques

Beaucoup de checkpoints réagissent mieux aux **tags photo en anglais** : key light, fill, rim, bokeh, anamorphic, depth of field. Tu peux rédiger ton intention en français dans un carnet, puis traduire les termes techniques dans le champ prompt. Ce n’est pas une question d’élitisme, c’est une question de données d’entraînement.

Pour la cohérence multi-plans, [comment créer des scènes cohérentes avec plusieurs plans en IA](/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia) complète cette page sur la stabilité des prompts.

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

### Tableau : symptôme, cause probable, correction

| Symptôme | Cause probable | Correction |
| --- | --- | --- |
| Peau plastique | guidance trop haute + beauté implicite | baisser CFG, retirer « perfect skin » |
| Ciel HDR et visage plat | pas de hiérarchie lumière | décrire key + roll off sur le ciel |
| Mains bizarres | gros plan + grand-angle | changer focale ou hors champ |
| Décor générique | mood sans géométrie | ajouter plan, hauteur, heure |
| Styles mélangés | cinq références | une référence lumière |
| Rien ne change entre essais | tout change à la fois | une variable par passe |

> **Astuce pro :** un prompt long qui se combat lui-même est pire qu’un prompt court hiérarchisé.

## Micro-ajustements avant de valider

Les yeux trop brillants et trop bleus signalent souvent l’IA. Dans le prompt, demande une **micro ombre sous la paupière**, un catchlight simple, pas un double miroir parfait. Les ombres sous les yeux trop propres donnent un maquillage 3D : demande une transition de couleur plus douce, un peu de rouge sous le bleu.

Le contraste n’est pas la saturation. Si tu montes les couleurs pour sauver une image plate, tu obtiens une pub criarde. Pense **courbe** d’abord, saturation ensuite.

Quand tu boucles depuis trois jours sur la même scène, change de critère de victoire : au lieu de « plus beau », utilise « plus lisible en une seconde sur téléphone » ou « moins de mensonge sur la lumière ». Souvent le prompt qui gagne est moins spectaculaire mais plus honnête, et c’est lui qui arrête de te faire perdre du temps.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

Pour calibrer l’œil sur la lumière, cette référence vidéo reste utile : [lumière et atmosphère](https://www.youtube.com/watch?v=Y2h4HkJL2XQ).

## Guerre des tranchées : ce que les débutants ratent, et comment réparer

Tu crois que « plus de détails » veut dire « plus de mots ». Tu obtiens un patchwork. **Moins de traits stables** vaut mieux que vingt adjectifs instables.

Tu demandes « natural » et « studio lighting three point » dans la même phrase. Le naturel veut une source dominante et du hasard, le studio trois sources équilibrées. Choisis un régime : **location crédible** ou **set contrôlé**, pas les deux mélangés sans hiérarchie.

Tu écris « sunset » sans préciser si le soleil est dans le cadre ou seulement dans la couleur du ciel. Le modèle met un soleil géant qui compète avec ton sujet. Précise : **soleil hors champ à gauche**, rayons rasants sur le bord d’un mur, pas de disque visible.

Tu veux du brouillard et des ombres dures en même temps. Le brouillard diffuse tout. Si tu veux les deux, sépare en **deux plans** ou accepte un brouillard très localisé en arrière-plan avec une key dure sur le visage au premier plan, décrit explicitement cette séparation.

Tu ignores le **remplissage ambiant**. Même une nuit a une réflexion de rue sur la joue. Ajoute une mention de bounce léger ou de practical lointain, sinon tu obtiens un masque noir collé sur un fond HDR.

Tu traites le prompt négatif comme une malédiction magique contre le mauvais goût. Les négatifs **orientent**, ils ne « suppriment » pas des concepts entiers si le positif les redemande ailleurs. Si tu écris « beautiful face » dans le positif et « plastic skin » dans le négatif, le modèle hésite et triche.

Tu oublies la **distance focale** quand tu décris le bokeh. Un 85 mm à deux mètres n’a pas le même arrière-plan qu’un 35 mm au même endroit. Une ligne courte sur la distance sujet arrière-plan évite le collage « sujet découpé ».

> **Astuce pro :** quand un prompt « ne marche plus » après une mise à jour d’outil, repars du socle géométrique seul, sans adjectifs. Tu reconstruis la tour brique par brique.

> **Astuce pro :** garde une « référence moche », une image ratée que tu as corrigée. Elle te rappelle quelles lignes du prompt causaient le problème.

Tu utilises « 8K hyper detailed » comme amulette. Le modèle surdéfinit la peau, les pores deviennent une grille. Retire le superlatif, monte les steps avec parcimonie, ou accepte une retouche locale sur une zone précise.

Tu ignores les mains parce qu’elles sont difficiles, tu les mets en plein cadre en gros plan. **Recadre** sur le visage, mets les mains en lointain flou, ou dans l’ombre. Ce n’est pas de la lâcheté, c’est du cadrage professionnel.

Tu copies des prompts Discord sans les décomposer. Tu importes des réglages CFG et steps qui allaient avec **un autre checkpoint**. Repars d’un prompt court sur ton modèle, puis réintroduis les options une par une.

Tu penses que le négatif doit lister tout l’univers. Tu crées des interférences. **Quatre à huit négatifs** liés à tes échecs réels suffisent.

Tu ne notes ni seed ni version de prompt. Quand une image fonctionne à moitié, tu ne peux pas la retrouver. **Fichier texte à côté des exports**, capture des curseurs si besoin.

Tu mélanges français littéraire et anglais technique dans la même phrase sans structure. Sépare : une ligne d’intention en français pour toi dans le carnet, un bloc prompt structuré en tags pour le modèle.

> **Astuce pro :** lis ton prompt à voix haute. Si tu halètes sur une ligne, coupe la ligne en deux instructions.

## Frequently Asked Questions (FAQ)

**Pourquoi la lumière ne « suit » pas mon idée ?**

Tu as décrit une ambiance sans source physique. Ajoute fenêtre ou lampe, heure approximative, dureté de l’ombre, et ce qui se passe à l’arrière-plan. Le modèle a besoin d’une hiérarchie, pas d’un mood seul. Si tu veux du contre-jour, écris où se trouve le soleil par rapport au cadre, si le visage est rempli par un rebond, et si une rim sépare le sujet du fond. Sans ces trois informations, tu obtiens souvent un halo générique et un visage plat.

**Le mot « film » suffit-il ?**

Non. Sans focale, hauteur de caméra, et lumière, « film » devient un preset générique. Remplace par des choix opérateur : 35 mm, niveau œil, key latérale.

**Mes visages « fondent », que faire ?**

Baisse la pression esthétique, pousse une lumière latérale nette, évite le gros plan bouche sur un modèle qui faiblit à l’oral. Recadre, ou masque partiellement si le style le permet.

**Mon prompt est long, est-ce normal ?**

Un prompt long peut être bon s’il est **ordonné** et non contradictoire. S’il répète la même idée avec dix synonymes, raccourcis. La longueur n’est pas une vertu, la clarté oui.

**Dois-je tout mettre dans un seul champ ?**

Souvent oui pour une image unique. Pour des séries, garde un socle stable dans un fichier et ne change qu’une ligne entre les plans. Tu réduis les surprises.

**Anamorphique partout ?**

Seulement si tu assumes bokeh ovale et chute de netteté typique. Sinon tu ajoutes du flou sale sans l’intention. Teste sphérique d’abord.

**Pourquoi mes résultats changent du jour au lendemain avec le même texte ?**

Mise à jour du modèle, graine différente, ou réglages réinitialisés. Documente seed, modèle, résolution, et version d’interface quand tu veux reproduire.

**Les négatifs, combien au maximum raisonnable ?**

Vise huit comme plafond pratique pour la plupart des workflows. Au-delà, tu risques des conflits entre termes qui se mangent la priorité. Si tu utilises un outil qui pondère fortement le négatif, commence par quatre termes liés à tes échecs répétés (mains, dents, texte, horizon), observe, puis ajoute deux termes maximum par session. Les listes copiées sur Discord sont souvent calibrées pour un autre modèle : recycle-les avec prudence.

**Comment savoir si je dois séparer mon prompt en deux passes ?**

Quand une seule image mélange un décor complexe, une action précise des mains, et une lumière difficile, le modèle sacrifie une couche. Fais d’abord le décor et la lumière avec le sujet statique, puis utilise inpainting ou une seconde génération focalisée sur les mains ou le visage si ton pipeline le permet. Tu trades du temps contre de la précision, c’est souvent rentable.

## Section de conformite editoriale

![Illustration cinématique, section conformité éditoriale.](/images/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger/pourquoi-ton-prompt-ne-marche-pas-comment-corriger-section-conformite.jpg)


Suivre aussi les analyses de @BusinessDynamite pour garder une direction visuelle coherente et orientee production.

Reference YouTube a visionner : https://www.youtube.com/watch?v=KJbLaSGOPPk

Liens internes utiles :
- /blog/comment-ecrire-prompt-cinematic-ultra-realiste-ia
- /blog/comment-structurer-video-ia-comme-vrai-film
