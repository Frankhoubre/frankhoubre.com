---
title: "Les erreurs de prompt qui rendent une image IA artificielle"
date: "2026-04-02"
category: "tutoriels"
excerpt: "Liste des tics de langage et des réglages implicites qui poussent le modèle vers le plastique."
thumbnail: "/images/blog/erreurs-prompt-qui-rendent-image-ia-artificielle/hero.webp"
---
Tu écris un prompt en pensant “je vais faire cinéma”.  
Tu génères.  
Et tu vois immédiatement l’effet plastique.

Peau lissée, lumière impossible, décor brillant comme un showroom, yeux trop nets, ombres qui ne racontent rien. Ce n’est pas parce que tu manques de talent. C’est parce que certaines erreurs de prompt déclenchent des corrélations visuelles ultra artificielles, presque automatiquement.

L’objectif de cette masterclass, t’apprendre à repérer ces erreurs en amont, puis à les corriger avec une méthode claire, reproductible, pro.

![Hero image, erreurs de prompt.](hero.webp)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, frustrated creator comparing two generated portraits on monitor in a dim studio, one fake plastic output and one corrected realistic output, practical desk lamp and textured shadows, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

## Pourquoi une image devient artificielle en quelques mots

Les mots d’un prompt ne sont pas neutres. Ils activent des “familles” d’images apprises par le modèle. Quand tu empiles `masterpiece`, `8k`, `insane details`, `perfect skin`, tu pousses souvent vers un rendu de vitrine, pas vers un cadre de film crédible.

Le piège, c’est que le résultat peut paraitre impressionnant au premier regard. Puis l’œil humain décroche. Trop propre. Trop net. Trop faux.

> **Insight plateau**  
> Un prompt réaliste décrit une scène tournable, pas une affiche de concours.

Quand ton prompt “ne marche pas”, la base de correction reste la même que dans [pourquoi ton prompt ne marche pas et comment le corriger](/blog/pourquoi-ton-prompt-ne-marche-pas-comment-corriger), mais ici on pousse plus loin sur les erreurs visuelles concrètes qui créent l’aspect artificiel.

## 3 scénarios débutants qui reviennent chaque semaine

### Scénario 1, portrait “premium” qui ressemble à un mannequin 3D

Prompt habituel: trop de beauté abstraite, pas assez de géométrie lumineuse.  
Résultat: porcelaine, yeux billes, bouche trop parfaite.

Fix:
- remplacer les superlatifs par des infos caméra/lumière
- ajouter texture peau et micro imperfections
- limiter la netteté globale

### Scénario 2, scène urbaine “ciné” qui devient néon cartoon

Prompt habituel: “dark cinematic cyberpunk realistic” sans contexte.  
Résultat: reflets saturés, couleurs incohérentes, fond bruité.

Fix:
- décrire le lieu réel
- choisir une source lumière principale
- restreindre palette et contraste

### Scénario 3, ambiance dramatique qui devient fake “HDR”

Prompt habituel: “dramatic light, high contrast, ultra detailed”.  
Résultat: ciel cramé, peau brillante, ombres sans matière.

Fix:
- décrire l’exposition et le sens des ombres
- retirer le vocabulaire “punch” générique
- corriger d’abord la structure lumineuse

## Les 12 erreurs de prompt qui plastifient une image

### 1) Superlatifs sans informations physiques
`stunning`, `masterpiece`, `epic` ne remplacent pas un plan, une focale, une source.

### 2) “Perfect skin”
Ce couple de mots pousse directement vers une texture cire.

### 3) Mélanger 3 styles contradictoires
“film noir + fashion glossy + sci-fi neon” dans une ligne, image incohérente garantie.

### 4) Oublier la lumière motivée
Sans source lisible, le modèle invente des highlights artificiels.

### 5) Oublier la distance
Sans distance sujet/fond, la profondeur semble fausse.

### 6) Focale incohérente avec le cadre
Demander “85mm portrait” sur un plan large est contradictoire. Pour maitriser ce point, relie ton prompt à [comment utiliser les objectifs caméra dans un prompt IA](/blog/comment-utiliser-objectifs-camera-dans-prompt-ia).

### 7) Négatif trop long
30 interdits font se battre les priorités internes.

### 8) Trop de “clean”
`clean background`, `clean face`, `clean style` tue le réel.

### 9) Teinte sans hiérarchie
Pousser la couleur avant la lumière produit des peaux non crédibles.

### 10) Ajouter du grain pour cacher des défauts structurels
Le grain n’est pas une rustine magique.

### 11) Modifier 10 paramètres à la fois
Tu n’apprends jamais ce qui a réellement corrigé l’image.

### 12) Copier des prompts viraux sans contexte
Les prompts “copiés-collés” transportent souvent des biais non adaptés à ton sujet.

## Template strict qui évite 70% des dérives

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, [SCENE DESCRIPTION], natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

La partie critique reste `[SCENE DESCRIPTION]`. Elle doit décrire un plan tournable:
- qui
- où
- action
- lumière
- relation sujet/fond

## Workflow de correction en 8 minutes

1. Copie ton prompt brut dans un fichier texte.  
2. Supprime les adjectifs vides.  
3. Ajoute plan/focale/hauteur caméra.  
4. Ajoute source lumière principale.  
5. Ajoute une imperfection réelle du décor.  
6. Ajoute contraintes anti rendu fake.  
7. Génère deux variantes avec une seule différence.  
8. Compare au zoom et en plein écran.

### Exemple brut -> corrigé

Brut:
```text
beautiful cinematic woman portrait masterpiece 8k ultra detailed
```

Corrigé:
```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, medium close-up of a woman in her early 40s standing near rainy kitchen window at dusk with soft side key from camera-left and warm practical lamp in background, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

## Tableau diagnostic rapide

| Symptôme visible | Cause probable dans le prompt | Correction immédiate |
| --- | --- | --- |
| Peau cireuse | “perfect skin”, trop de clean | texture peau + imperfections |
| Yeux trop brillants | lumière non décrite | source + direction + intensité |
| Décor “jeu vidéo” | palette et contraste non cadrés | réduire saturation, ancrer matière |
| Visage déformé | focale/cadre incohérents | fixer focale réaliste + distance |
| Image artificielle malgré netteté | manque de hiérarchie | simplifier prompt et priorités |

![Image contextuelle 1, comparaison prompt brut vs corrigé.](workflow-1.webp)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, split comparison board with failed AI portrait and corrected cinematic portrait pinned in studio, neutral practical lighting and paper notes, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

## Vidéo YouTube a intégrer dans l'article

Utilise cette video de `@BusinessDynamite` dans la section analyse:

[https://www.youtube.com/watch?v=hHWkvFH8u9I](https://www.youtube.com/watch?v=hHWkvFH8u9I)

Ce qu’il faut observer:
- comment une demande vague devient une consigne exploitable
- comment la structure de phrase change le résultat final
- comment simplifier sans perdre l’intention

Exercice pratique:
- prends un prompt qui rate
- applique le workflow ci-dessus
- compare avant/après sur 3 generations

## Trench warfare, ce que les debutants font mal

- **Empiler les references**: trois films, deux styles photo, une tendance social, resultat incoherent.
- **Chercher la perfection peau**: plus tu demandes “perfect”, plus tu perds l’humain.
- **Confondre propre et realiste**: le reel contient texture, poussiere, micro defauts.
- **Nier la lumiere**: si la source n’existe pas, le visage ne peut pas sembler vrai.
- **Fixer tout en post**: la postprod aide, elle ne sauve pas une base fausse.
- **Ne pas verrouiller les acquis**: un prompt qui marche doit etre versionne.
- **Ignorer la coherence de personnage**: pour les series d’images, applique la logique de [comment ecrire un prompt pour un personnage realiste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant).

> **Insight plateau**  
> Le realisme est une somme de petites verites visuelles, pas une option “high quality”.

![Image contextuelle 2, verification texture et lumiere en post.](workflow-2.webp)

Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, editor checking skin texture and shadow consistency on calibrated monitor in a dark grading room, practical side lamp and realistic color chart, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9

## FAQ

### Pourquoi “photorealistic” seul ne suffit pas ?
Parce que ce mot ne decrit ni lumiere, ni geometri e, ni intention de plan. La raison principale est que le modele complete les zones ambiguës avec des approximations, ce qui cree des incoherences visibles quand la scene devient complexe. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Combien de negatifs faut-il mettre ?
En general 4 a 8, cibles sur tes erreurs recurrentes. La bonne reponse depend surtout de l'intention de scene et de la constance entre les plans, pas d'une regle absolue appliquee partout. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Faut-il toujours preciser la focale ?
Oui, surtout si tu veux stabiliser les visages et la perspective. La bonne reponse depend surtout de l'intention de scene et de la constance entre les plans, pas d'une regle absolue appliquee partout. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Comment savoir qu’un prompt est trop long ?
Quand il se contredit ou repete les memes idees sous dix formes. Commence par une version simple et stable, puis ajoute une seule contrainte a la fois pour voir clairement ce qui ameliore ou deteriore le resultat. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Le grain dans le prompt ou en post ?
Les deux peuvent marcher, mais le grain ne doit jamais masquer une lumiere mal pensee. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Pourquoi mes resultats changent d’une session a l’autre ?
Modele, seed, reglages, et contexte de generation changent la sortie. Documente tout. La raison principale est que le modele complete les zones ambiguës avec des approximations, ce qui cree des incoherences visibles quand la scene devient complexe. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Je peux garder un style “propre” sans effet plastique ?
Oui, si la lumiere reste motivee et la texture peau conservee. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Comment progresser vite ?
Tester peu de variantes, bien notees, avec une seule variable modifiee a la fois. Commence par une version simple et stable, puis ajoute une seule contrainte a la fois pour voir clairement ce qui ameliore ou deteriore le resultat. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

## Atelier avancé, protocole de correction reproductible

Tu veux progresser vite, voici un protocole simple à répéter.

### Session 1, nettoyer le bruit sémantique

Tu prends un prompt raté.  
Tu enlèves tous les mots non mesurables.

Tu gardes seulement:
- sujet
- action
- lieu
- lumière
- focale
- texture

Puis tu régénères.

### Session 2, ajouter la structure optique

Tu imposes:
- type de plan
- angle caméra
- distance sujet/fond
- source principale

Tu observes si la géométrie s’améliore.  
Si oui, tu verrouilles cette version comme baseline.

### Session 3, affiner la matière

Tu ajoutes:
- texture peau naturelle
- micro imperfection
- grain subtil
- interdits anti rendu fake

Tu compares les trois générations côte à côte.

> **Pro insight**  
> Le but n’est pas de trouver un prompt “génial”, le but est de construire un système stable qui évite les erreurs.

## Diagnostics visuels, grille d’analyse express

Quand une image semble artificielle, réponds à ces questions:

1. La lumière a-t-elle une source crédible ?  
2. La peau garde-t-elle du relief naturel ?  
3. Les reflets sont-ils cohérents avec la source ?  
4. La profondeur de champ suit-elle une logique physique ?  
5. Le fond soutient-il le sujet ou le parasite-t-il ?

Si tu as deux réponses “non”, le prompt doit être réécrit.

## Cas pratique détaillé

### Prompt initial
`cinematic masterpiece portrait ultra detailed perfect skin`

### Problèmes observés
- peau lisse
- yeux artificiels
- contraste sans volume

### Réécriture structurée

```text
Prompt: cinematic still, ultra photorealistic, shot on ARRI Alexa 65, anamorphic lens, shallow depth of field, medium close-up portrait of a woman in her late thirties standing by rainy kitchen window at dusk with side key from camera-left and warm practical lamp in deep background, natural skin texture, subtle imperfections, film grain, volumetric lighting, realistic color grading, no CGI look, no artificial sharpness --ar 16:9
```

### Résultat
- peau plus crédible
- lumière lisible
- profondeur cohérente

## Erreurs de post qui renforcent le fake

- sharpen global trop fort  
- contraste en S agressive  
- saturation rouge peau excessive  
- halos sur contours  
- grain “sale” non homogène

Le prompt n’est pas seul responsable.  
La finition peut ruiner une base saine.

## Méthode de travail en équipe

Si vous êtes plusieurs:
- un auteur prompt
- un reviewer visuel
- un reviewer narration

Chacun donne un retour court:
- ce qui marche
- ce qui casse
- ce qu’on teste ensuite

Tu évites les débats flous, tu gardes des décisions traçables.

## Troubleshooting massif, bloc complémentaire

### 16) Portrait trop “pub beauté”
Fix: réduire lissage implicite, renforcer micro-ombres.

### 17) Décor sans profondeur
Fix: ajouter distance sujet-fond et lumière arrière.

### 18) Trop de flare
Fix: limiter anamorphique forcé, garder flare subtil.

### 19) Yeux trop clairs
Fix: réduire highlights et saturation locale.

### 20) Lèvres plastiques
Fix: texture subtile, éviter mots “perfect makeup”.

### 21) Reflets lunettes incohérents
Fix: angle trois quarts, reflet simplifié.

### 22) Arrière-plan trop net
Fix: préciser profondeur de champ et distance.

### 23) Teint “orange”
Fix: contrôler température de key et balance finale.

### 24) Ombres sans détail
Fix: fill léger ou rebond naturel.

### 25) Rendu trop “jeux vidéo”
Fix: réduire saturation et netteté, prioriser matière.

### 26) Incohérence entre versions
Fix: seed stable pendant le diagnostic.

### 27) Prompt long mais vide
Fix: retirer les adjectifs décoratifs.

### 28) Prompt court trop abstrait
Fix: ajouter données physiques minimales.

### 29) Texte faux dans l’image
Fix: texte court ou ajout en post.

### 30) Fatigue de décision
Fix: sessions courtes, critères de rejet clairs.

## FAQ additionnelle

### Je peux rester en français intégral ?
Oui, mais certains tags techniques anglais restent plus fiables selon modèle. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Le mot “cinematic” suffit-il ?
Non, jamais sans contexte caméra/lumière. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Faut-il toujours donner l’heure ?
Oui si la lumière dépend d’une source naturelle. La bonne reponse depend surtout de l'intention de scene et de la constance entre les plans, pas d'une regle absolue appliquee partout. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Comment savoir si j’ai trop d’éléments ?
Si ton regard ne sait pas où aller, il y en a trop. Commence par une version simple et stable, puis ajoute une seule contrainte a la fois pour voir clairement ce qui ameliore ou deteriore le resultat. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Dois-je mentionner le capteur ?
Optionnel, utile surtout pour la cohérence inter-plans. La bonne reponse depend surtout de l'intention de scene et de la constance entre les plans, pas d'une regle absolue appliquee partout. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Peut-on corriger sans tout réécrire ?
Oui, en changeant une variable à la fois. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Quel est le meilleur réflexe anti fake ?
Remplacer les superlatifs par des données de tournage. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Quand valider un prompt ?
Quand deux générations consécutives restent crédibles avec variations mineures. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

## Extension finale, méthode de production hebdomadaire

Si tu veux professionnaliser ton niveau, organise tes sessions en cycles:

### Lundi, diagnostic
Tu collectes 10 sorties ratées et tu classes les défauts.

### Mardi, correction ciblée
Tu réécris 3 prompts avec une variable changée.

### Mercredi, stress test
Tu testes ces prompts sur plusieurs scènes proches.

### Jeudi, consolidation
Tu fixes un template interne et des interdits de style.

### Vendredi, livraison
Tu publies uniquement les sorties validées selon checklist.

Ce rythme transforme la progression en système.

### Mini checklist finale

- **source lumineuse lisible**  
- **peau non plastique**  
- **géométrie stable**  
- **reflets cohérents**  
- **fond narratif propre**

Si une case échoue, tu corriges avant publication.

## Annexe terrain, calibration avancée sur 7 jours

Jour 1, tu isoles tes 3 erreurs les plus fréquentes.  
Jour 2, tu construis 3 prompts propres, chacun centré sur une seule correction.  
Jour 3, tu compares ces prompts sur 2 scènes différentes.  
Jour 4, tu verrouilles une version baseline.  
Jour 5, tu testes uniquement la lumière.  
Jour 6, tu testes uniquement la focale.  
Jour 7, tu valides une mini bibliothèque de prompts robustes.

Cette routine paraît simple. Elle est redoutable.

### Mesure de progression

Note chaque session:
- nombre de rendus rejetés
- nombre de rendus “presque bons”
- nombre de rendus validés

Si ta courbe de rejets baisse et tes validations montent, ton système fonctionne.

## Guide de décision rapide avant publication

Question 1, l’image est-elle crédible à distance normale de lecture ?  
Question 2, l’image reste-t-elle crédible au zoom ?  
Question 3, le sujet reste-t-il le point focal principal ?  
Question 4, la lumière raconte-t-elle une source plausible ?  
Question 5, la peau semble-t-elle humaine, pas synthétique ?

Si tu réponds non à deux questions, publication reportée.

### Focus important, les “faux positifs”

Certaines images donnent une impression “waouh” immédiate mais ne tiennent pas plus de 3 secondes d’observation.  
C’est un faux positif.

Tu dois t’entraîner à les rejeter vite.

> **Pro insight**  
> L’exigence de réalisme se joue dans la deuxième lecture, pas dans le premier effet.

## Section dépannage expert

### 31) Teint “glacé”
Cause: désaturation mal répartie.  
Fix: restaurer micro variation dans les tons chair.

### 32) Ombres “collées”
Cause: contraste local trop dur.  
Fix: adoucir transitions sur pommettes et mâchoire.

### 33) Décor “carton”
Cause: matériaux non décrits.  
Fix: ajouter matière mur/sol dans prompt.

### 34) Cils excessivement nets
Cause: sharpen global.  
Fix: netteté sélective seulement hors peau.

### 35) Front brillant
Cause: highlights non contrôlés.  
Fix: source plus diffuse ou angle ajusté.

### 36) Lèvres “gel”
Cause: rendu glossy artificiel.  
Fix: texture matte subtile et saturation modérée.

### 37) Oreilles incohérentes
Cause: angle + cheveux mal définis.  
Fix: simplifier coiffure et inclinaison tête.

### 38) Couleurs “teal-orange” involontaires
Cause: corrélation style trop forte.  
Fix: limiter vocabulaire style et préciser palette.

### 39) Pores trop visibles
Cause: sur-interprétation texture.  
Fix: réduire détails micro au prompt.

### 40) Regard vide
Cause: pas d’intention d’action.  
Fix: préciser ce que regarde le personnage.

## FAQ avancée

### Dois-je créer des presets de prompts ?
Oui, mais par famille de scènes, pas universels. La bonne reponse depend surtout de l'intention de scene et de la constance entre les plans, pas d'une regle absolue appliquee partout. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Combien de temps garder un prompt baseline ?
Tant qu’il reste stable sur plusieurs sessions. Ce chiffre est un point de depart fiable, mais ajuste-le selon le type de mouvement, la densite du cadre et le niveau de realisme attendu. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Peut-on industrialiser cette méthode ?
Oui, avec templates + revue visuelle + logs. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Quel est le bon ratio rejet/validation au début ?
60/40 est déjà très correct. En pratique, traite cette decision comme un parametre narratif, pas comme un simple reglage technique, sinon le rendu devient vite incoherent d'un plan a l'autre. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.

### Comment éviter l’effet mode du moment ?
Rester ancré dans des descriptions physiques. Commence par une version simple et stable, puis ajoute une seule contrainte a la fois pour voir clairement ce qui ameliore ou deteriore le resultat. La methode la plus fiable consiste a tester deux variantes proches avec les memes conditions (seed, lumiere, cadrage), puis garder celle qui reste lisible apres plusieurs revisions. Si tu hesites, privilegie la coherence globale de la sequence et documente ton choix, car c'est ce qui donne un resultat credible sur la duree.
