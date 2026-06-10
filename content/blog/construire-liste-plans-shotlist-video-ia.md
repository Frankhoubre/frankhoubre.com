---
title: "Construire une shotlist video IA qui evite les plans inutiles"
date: "2026-06-02"
category: "tutoriels"
excerpt: "Modele de shotlist terrain pour planifier les plans qui servent vraiment le montage et limiter la dette visuelle."
thumbnail: "/images/blog/construire-liste-plans-shotlist-video-ia/hero.webp"
---
Tu as généré quarante plans pour une vidéo de soixante secondes. Au montage, tu en utilises douze. Vingt-huit plans morts. **Construire une shotlist vidéo IA qui évite les plans inutiles** n'est pas de la paperasse. C'est l'économie de ta production.

Une bonne shotlist en IA ressemble à une shotlist de tournage, avec une différence : chaque ligne coûte de l'argent et du temps.

![Plan de travail IA en studio avec notes de production et ecrans de controle](/images/blog/construire-liste-plans-shotlist-video-ia/hero.webp)

## Pourquoi les shotlists IA dérapent

Sur un plateau, filmer un plan de plus prend vingt minutes. En IA, « juste un essai de plus » s'accumule en addiction. Sans shotlist disciplinée, tu génères au feeling et le montage devient un puzzle sans les bonnes pièces.

La shotlist copiée du cinéma sans adaptation multiplie les plans sans cohérence. En IA, moins de plans mieux verrouillés bat plus de plans approximatifs.

Vois [préparer un découpage technique avant génération vidéo IA](/blog/preparer-decoupage-technique-avant-generation-video-ia) et [comment structurer une vidéo IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film).

> 💡 **Frank's Cut:** chaque ligne doit répondre à « si je ne génère pas ce plan, le montage casse où ? ». Si la réponse est « nulle part », supprime la ligne.

## Anatomie d'une shotlist IA utile

Chaque entrée contient : **ID**, **intention montage**, **description**, **durée montage**, **durée génération**, **références**, **statut**, **dépendances**.

| Type de plan | Indispensable si... | Souvent inutile si... |
|-------------|---------------------|----------------------|
| Plan large | Nouveau décor | Décor établi |
| Gros plan réaction | Émotion clé | Action rapide |
| Insert détail | Info narrative | Remplissage |
| Plan mouvement | Dynamique requise | Même info en statique |

## Workflow terrain

### Étape 1 : animatic textuel

Écris script ou voix off avec timecodes. La shotlist habille cette colonne.

### Étape 2 : couverture minimale viable

Dialogue 2 pers. : 4-6 plans. Action simple : 3 plans. Pub rapide : 6-8 plans courts.

### Étape 3 : tableur partageable

Une ligne = un plan. Exportable pour le client.

### Étape 4 : revue « subtraction »

Peut-on raconter la même chose avec un plan de moins ? Cette passe économise 30-50 % de génération.

### Étape 5 : ordre par dépendances

Références héros d'abord, plans dépendants ensuite.

![Comparaison de versions A B C sur une timeline de montage avec annotations visuelles](/images/blog/construire-liste-plans-shotlist-video-ia/workflow-1.webp)

### Étape 6 : statuts temps réel

Plan B = dette planifiée. Plan C = supprimé de la liste.

### Étape 7 : montage sec à 70 %

Identifie les trous réels. Régénère uniquement pour les trous.

### Règle des 70 %

Ne génère pas 100 % avant un premier montage. Les 30 % restants sont ciblés.

Vois [comment optimiser son workflow IA pour gagner du temps](/blog/comment-optimiser-workflow-ia-gagner-temps).

## Modèle exemple pub 30s

| ID | Intention | Description | Durée montage | Statut |
|----|-----------|-------------|---------------|--------|
| PL01 | Hook | Main qui lâche café | 2s | A |
| PL02 | Problème | Bureau désordonné | 3s | A |
| PL03 | Solution | Produit sur bureau | 3s | à générer |
| PL04 | Preuve | Écran résultat | 2s | à générer |
| PL05 | CTA | Logo + slogan | 2s | à générer |

## Scénarios réels

**Court-métrage 3 min.** 25-35 plans, pas 80. Plans bonus en « optionnels » séparés.

**Série sociale.** Template réutilisable : hook, corps, CTA.

**Client brief flou.** Shotlist comme validation avant génération.

**Documentaire 8 min.** Par chapitres, priorité basse sur illustrations.

## Erreurs fréquentes

**Shotlist sans durées.** Fix : durée montage cible obligatoire.

**Plans bonus non marqués.** Fix : colonne optionnel oui/non.

**Oublier transitions.** Fix : une ligne par changement de décor.

**Shotlist figée.** Fix : versionne après rough cut.

Les principes de [planification AFI](https://www.afi.com/) s'appliquent : l'IA ne remplace pas la discipline.

![Validation finale d un master video IA sur ecran mobile et moniteur etalonne](/images/blog/construire-liste-plans-shotlist-video-ia/workflow-2.webp)

[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on construire une shotlist IA minimaliste qui élimine les plans morts avant génération.]

## FAQ

**Combien de plans pour une minute ?**

15-25 dynamique, 8-12 contemplatif. Au-delà de 30 pour une minute, probable superflu.

**Prompts dans la shotlist ?**

Oui, ou lien vers fichier prompt. La shotlist est le hub.

**Plans alternatifs ?**

Colonne « alt de PL03 », max deux alt par plan critique.

**Shotlist vs storyboard ?**

Storyboard = vision. Shotlist = exécution. Les deux se complètent.

**Multi-épisodes ?**

`EP02-SC03-PL05`. Plans récurrents réutilisables.

**Plan manquant au montage ?**

Ligne V2 avec raison « trou montage ».

**Image seule vs vidéo ?**

Même logique d'intention.

**Partager avec client non technique ?**

Cache prompt et seed. Montre intention et statut.

**Budget crédits ?**

Colonne interne utile pour éviter les plans bonus.

**Scène d'action complexe ?**

Décompose en beats : début, milieu, réaction, conséquence.

Une shotlist IA est un contrat entre intention de montage et crédits de génération. Applique ce modèle sur **construire une shotlist vidéo IA qui évite les plans inutiles**.

## Colonnes avancées et règle des 70 %

Ajoute : moteur prévu, référence verrouillée, ratio crop, assigné à, crédits estimés. Ne génère jamais 100 % de la shotlist avant un premier montage. Génère 70 % des plans indispensables, monte, identifie les trous. Les 30 % restants sont ciblés.

### Shotlist comme contrat client

En brief flou, la shotlist devient l'outil de validation : le client approuve les intentions avant génération. Moins de retours « ce n'est pas ce que je voulais » sur des plans déjà payés.

### Export final

PDF avec statuts, liens masters, prompts validés. Base pour saison 2 ou relivraison.

## Règle des 70 % et colonnes avancées

Ne génère jamais 100 % de la shotlist avant un premier montage. Soixante-dix pour cent des plans indispensables, monte, identifie les trous. Les trente pour cent restants sont ciblés. Cette règle a réduit de moitié mes plans morts sur les pubs 30 secondes.

Colonnes utiles : moteur prévu, référence verrouillée, ratio crop, assigné à, crédits estimés, statut A/B/C. La shotlist devient le hub de production, pas une liste de souhaits.

### Shotlist comme contrat client

En brief flou, le client approuve les intentions avant génération. Moins de retours « ce n'est pas ce que je voulais » sur des plans déjà payés. Export PDF final avec statuts et liens masters pour la saison 2.

### Action complexe

Décompose en beats : début, milieu, réaction, conséquence. Quatre plans minimum, huit maximum pour trente secondes d'action. Les plans « spectacle » sans beat attaché sont les premiers coupés au montage.

## Modèle shotlist pub 30s (exemple chiffré)

| ID | Intention | Description | Durée montage | Statut |
|----|-----------|-------------|---------------|--------|
| PL01 | Hook | Main lâche café | 2s | A |
| PL02 | Problème | Bureau désordonné | 3s | A |
| PL03 | Solution | Produit sur bureau | 3s | à générer |
| PL04 | Preuve | Écran résultat | 2s | à générer |
| PL05 | CTA | Logo + slogan | 2s | à générer |

Douze plans max pour trente secondes. Pas quarante.

Revue « subtraction » : pour chaque ligne, peux-tu raconter la même chose avec un plan de moins ? Cette passe économise trente à cinquante pour cent de génération chez les débutants.

Pour le workflow global : [comment optimiser son workflow IA pour gagner du temps](/blog/comment-optimiser-workflow-ia-gagner-temps).

Une shotlist sans durées est une liste de souhaits. Une shotlist sans intention montage est un catalogue de cadrages. Chaque ligne doit dire pourquoi le plan existe dans la timeline finale. Si tu ne peux pas répondre, supprime la ligne avant de générer. Ton portefeuille de crédits te remerciera.

## Erreurs shotlist classiques

Shotlist sans durées. Plans bonus non marqués optionnels. Oublier les transitions entre décors. Même shotlist pour horizontal et vertical sans recadrage planifié. Shotlist figée après le premier brief sans version V2 après rough cut.

Documentaire 8 minutes : shotlist par chapitres, 40-50 plans, pas 80. Collaboration à deux : colonne « assigné à » pour éviter les doublons de génération.

[Préparer un découpage technique avant génération vidéo IA](/blog/preparer-decoupage-technique-avant-generation-video-ia) complète cette discipline.

## Couverture minimale par type de scène

Dialogue 2 personnages : plan deux, OTS A, OTS B, réactions. Quatre à six plans.

Action simple : établissement, action, réaction. Trois plans.

Pub rapide : six à huit plans courts, une idée chacun.

Court-métrage 3 min : 25-35 plans, pas 80. Plans bonus listés « optionnels » non générés en passe 1.

Série sociale : template hook-corps-CTA réutilisable.

Le montage te dit ce qui manque. Ton imagination dit ce qui serait cool en plus. Fais confiance au montage.

Ordre de génération : références héros d'abord, plans dépendants ensuite. Mise à jour statut A B C en temps réel. Montage sec à 70 pour cent des plans A avant de combler les trous.

## Tableau phase shotlist

| Phase | Objectif | Livrable |
|-------|----------|----------|
| Brief | Intention verrouillée | animatic textuel |
| Shotlist V1 | Couverture minimale | sheet partagé |
| Gen 70% | Plans A indispensables | dossier raw |
| Rough cut | Trous identifiés | notes montage |
| Shotlist V2 | Trous uniquement | lignes ajoutées |
| Master | QA | export final |

Les principes [AFI sur la préparation](https://www.afi.com/) s'appliquent : l'IA ne remplace pas la discipline, elle la rend plus rentable. Une shotlist IA est un contrat entre ton intention de montage et tes crédits de génération. Chaque ligne shotlist répond à : si je ne génère pas ce plan, le montage casse où ? Sinon supprime. Cette question seule a divisé par deux mes plans morts.

Applique ce modèle sur **construire une shotlist vidéo IA qui évite les plans inutiles**, et ton montage ne manquera plus de rien tout en jetant moins. La shotlist est le meilleur investissement temps avant génération. Une heure de shotlist économise dix heures de tri de plans morts.

Shotlist partagée évite le doublon en équipe. Colonne assigné à. Export PDF final pour archive client. Prompts validés attachés à chaque ligne. Le hub de production tient dans un sheet, pas dans ta tête.

Vois [comment structurer une vidéo IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film) pour la colonne vertébrale narrative que la shotlist habille. Sans script ou voix off timecodée, la shotlist devient une liste de cadrages sans fonction.

## Conclusion

La shotlist n'est pas une contrainte créative. C'est le cadre qui libère ton énergie sur les plans qui comptent. Quand chaque ligne a une raison d'exister dans la timeline, tu arrêtes de générer par anxiété. Tu génères par intention. Sur une pub de trente secondes, douze lignes bien pensées battent quarante essais au hasard. Sur un court-métrage, vingt-cinq plans verrouillés avec références valent mieux que quatre-vingts plans jolis mais interchangeables.

En équipe, la shotlist partagée évite les doublons et les malentendus. Le monteur sait ce qui arrive. Le générateur sait ce qui est optionnel. Le client valide les intentions avant que les crédits partent en fumée. Exporte un PDF final avec statuts, liens vers les masters et prompts validés : c'est ta base pour la saison 2 ou une relivraison six mois plus tard.

La règle des 70 % reste le réflexe le plus rentable : monte avant de compléter. Les trous que tu découvres au montage sont les seuls plans bonus légitimes. Tout le reste, c'est de la dette visuelle que tu paieras en tri et en fatigue.

Applique ce modèle sur **construire une shotlist vidéo IA qui évite les plans inutiles**. Une heure de shotlist en amont économise dix heures de tri de plans morts. Ton montage ne manquera plus de rien, et tu jetteras moins.

### Shotlist et formats multiples

Si tu livres horizontal et vertical, duplique les lignes avec une colonne format et des notes de recadrage. Un plan large horizontal ne devient pas un plan vertical sans repenser le sujet. Prévois les deux dès la shotlist V1 pour éviter de régénérer quarante plans parce que le client a ajouté TikTok en dernière minute.

### Journal de production

À la fin de chaque projet, archive la shotlist finale avec les statuts réels : ce qui a été coupé, ce qui a été régénéré, ce qui a été optionnel et jamais généré. Ce fichier devient ton template pour le prochain brief similaire. La shotlist apprend avec toi si tu la documentes honnêtement.

Quand un plan manque au montage, ajoute une ligne V2 avec la raison « trou montage ». Analyse pourquoi la shotlist initiale l'a manqué. Cette rétrospective évite de répéter la même erreur sur le projet suivant. La shotlist n'est pas figée : elle vit jusqu'à l'export master.

Sur une série sociale hebdomadaire, garde un template shotlist hook-corps-CTA avec des colonnes préremplies. Tu ne repars pas de zéro chaque lundi. Tu adaptes les intentions, pas la structure. Cette habitude réduit la friction entre l'idée et la génération.

La shotlist est le meilleur investissement temps avant génération. Chaque ligne justifie son existence ou disparaît. Génère moins, monte mieux, livre plus vite. C'est la discipline qui sépare une production IA professionnelle d'un catalogue de clips isolés et jetables.

## Shotlist exploitable en génération

Chaque ligne doit dire : taille de plan, sujet, action une phrase, durée cible, note lumière, priorité A/B/C. **Pas de poésie :** « elle est triste » devient « gros plan, regard baissé, 3 s, key fenêtre, B ». **Handles :** note +12 frames si tu prévois un fondu. **Dépendances :** marque les plans qui exigent le même décor verrouillé. Une shotlist IA pro se lit comme un ordre de tournage, pas comme un traitement de scénario.


> 💡 **Frank's Cut:** une shotlist floue produit des plans beaux et inutilisables. Sois sec, le montage te remerciera.

Documente la version validée avec la date : la mémoire du projet vaut plus que le dernier prompt gagnant.

<!-- PUBLICATION DATE: 2026-06-02 -->