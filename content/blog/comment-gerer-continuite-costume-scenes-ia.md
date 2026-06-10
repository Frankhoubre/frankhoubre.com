---
title: "Comment gerer la continuite costume entre plusieurs scenes IA"
date: "2026-05-28"
category: "tutoriels"
excerpt: "Methode simple pour verrouiller costume, matieres et accessoires sur toute une sequence IA sans perdre des heures en retouches."
thumbnail: "/images/blog/comment-gerer-continuite-costume-scenes-ia/hero.webp"
---
Scène 3 : veste bleu marine, col ouvert. Scène 7 : la même veste est devenue noir anthracite avec un col montant. Scène 12 : le personnage porte une chemise qu'il n'avait pas trente secondes plus tôt dans le récit. Le montage est à refaire, le client pose des questions, et tu passes ta nuit en inpainting. **Comment gérer la continuité costume entre plusieurs scènes IA** n'est pas un luxe pour les perfectionnistes. C'est ce qui sépare une vidéo « IA cheap » d'une production crédible.

Les moteurs ne retiennent pas ce que ton personnage portait au plan précédent. Chaque génération réinterprète les vêtements. Ce guide te donne un système pour verrouiller costume, matières et accessoires sans y laisser ta santé mentale.

![Plan de travail IA en studio avec notes de production et ecrans de controle](/images/blog/comment-gerer-continuite-costume-scenes-ia/hero.webp)

## Pourquoi les costumes dérivent en IA

Le costume est un ensemble de signifiants visuels : couleur, coupe, texture, accessoires, état. Les modèles compressent cette complexité en quelques tokens. « Blue jacket » devient une veste différente à chaque fois.

Le problème s'aggrave quand tu changes de décor ou de lumière. Une veste bleue en néon cyan ne ressemble pas à la même veste en lumière dorée. Le spectateur compare inconsciemment.

Les accessoires sont les premiers à disparaître : montres, bagues, lunettes. Un personnage sans lunettes puis avec lunettes, sans raison narrative, détruit la confiance.

Pour le visage qui change en parallèle, vois [pourquoi mes personnages changent à chaque scène](/blog/pourquoi-personnages-changent-chaque-scene-ia) et [IP-Adapter et références : verrouiller un visage sur plusieurs plans](/blog/reference-ipadapter-visage-coherent-plans).

> 💡 **Frank's Cut:** crée une fiche costume d'une page avec trois photos de référence (face, trois-quarts, détail matière). Interdis-toi de générer un plan personnage sans avoir cette fiche ouverte.

## Anatomie d'une fiche costume verrouillée

**Identifiant** : `CHAR-01-CASUAL`

**Description stable** : *« navy blue wool blazer, single-breasted, two buttons, white crew-neck t-shirt, dark indigo jeans, brown leather belt, white sneakers »*

**Interdits** : *no black jacket, no turtleneck, no logo*

**Références visuelles** : 3 images validées, angles différents

| Élément | Verrouillage | Méthode |
|---------|--------------|---------|
| Couleur principale | Strict | Référence image + prompt identique |
| Coupe / silhouette | Strict | Description détaillée |
| Texture matière | Modéré | Mot-clé matière + gros plan référence |
| Accessoires | Strict | Mention systématique |
| État (propre/usé) | Modéré | Cohérent par arc narratif |

## Workflow terrain : costume cohérent de bout en bout

### Étape 1 : design costume avant le premier plan

Génère six variations, choisis la meilleure, archive comme référence maîtresse.

### Étape 2 : character sheet

Face, profil, trois-quarts, gros plan tissu. Même tenue, lumière neutre, fond gris. Vois [tutoriel complet : créer des personnages cohérents sur plusieurs images](/blog/personnages-coherents-plusieurs-images-ia).

### Étape 3 : bloc prompt copiable

Colle le même bloc à chaque prompt sans le modifier. La moindre variation invite le modèle à réinterpréter.

### Étape 4 : image-to-image et IP-Adapter

Référence forte (poids 0.6-0.8). Ajuste : trop fort fige la pose, trop faible dérive le costume.

### Étape 5 : vidéo depuis image fixe validée

Ne demande jamais au moteur vidéo d'inventer la tenue depuis le texte seul.

### Étape 6 : contrôle en montage

Scrub entre scènes. Les yeux voient la dérive avant le client.

![Comparaison de versions A B C sur une timeline de montage avec annotations visuelles](/images/blog/comment-gerer-continuite-costume-scenes-ia/workflow-1.webp)

### Étape 7 : inpainting en dernier recours

Si un plan est indispensable mais costume décalé, inpainte la zone. Vois [inpainting local : retoucher yeux et mains en IA](/blog/inpainting-local-retoucher-yeux-mains-ia).

## Scénarios réels

**Série courte, même tenue 5 minutes.** Une fiche, zéro changement. Refuse les plans où la teinte dérive.

**Pub jour/nuit.** Tenue identique, documente la réaction aux lumières différentes.

**Changement de tenue narratif.** Deux fiches distinctes, transition visible à l'écran.

**Production sur plusieurs semaines.** Rouvre la fiche à chaque session. Compare avant chaque batch.

## Erreurs fréquentes et correctifs

**Reformuler le costume à chaque prompt.** Fix : bloc copiable identique.

**Oublier les accessoires.** Fix : liste dans chaque prompt personnage.

**Changer de moteur entre scènes.** Fix : même pipeline, mêmes références.

**Corriger uniquement en colorimétrie.** Fix : la teinte de veste n'est pas un problème de LUT.

**Cheveux et barbe instables.** Fix : traite-les comme partie du costume.

La [American Costume Society](https://www.costumesocietyamerica.com/) et [Smithsonian Fashion History](https://www.si.edu/spotlight/fashion-history) rappellent que le costume raconte le personnage.

![Validation finale d un master video IA sur ecran mobile et moniteur etalonne](/images/blog/comment-gerer-continuite-costume-scenes-ia/workflow-2.webp)

[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on créer une fiche costume et verrouiller tenue et accessoires sur une séquence IA complète.]

## FAQ

**Combien de tenues différentes gérer sur un projet court ?**

Une à deux tenues maximum par personnage principal sur cinq minutes. Chaque tenue supplémentaire multiplie le risque.

**Les costumes générés par IA ont-ils des problèmes de droits ?**

Évite logos et motifs iconiques. Crée des tenues génériques mais détaillées. Documente la chaîne de génération.

**Comment gérer la continuité sur des plans de dos ?**

Génère une référence dos dans le character sheet. Vérifie la longueur de veste par rapport aux plans de face.

**Faut-il utiliser ControlNet pour le costume ?**

Combine OpenPose pour la pose et IP-Adapter pour le costume.

**Que faire si un accessoire disparaît sur un plan crucial ?**

Inpainting ciblé en priorité. Régénération si l'inpainting déforme le geste.

**La continuité costume compte-t-elle en plan très large ?**

Oui pour silhouette et couleur dominante. Tolérance plus large sur les détails fins.

**Comment gérer plusieurs personnages dans la même scène ?**

Une fiche par personnage, codes distincts. Génère d'abord séparément si besoin.

**Le costume doit-il être dans la bible de lieux ?**

Non, bible personnage. Croise les deux pour les matières selon le décor. Vois [créer une bible de lieux et décors pour projet IA](/blog/creer-bible-lieux-decor-projet-ia).

**Les costumes blancs sont-ils plus difficiles ?**

Oui. Documente la réaction à la lumière. Préfère un off-white défini plutôt que « white shirt » vague.

**Comment gérer manteaux et saisons ?**

Fiche `CHAR-01-HIVER` séparée. Transition visible ou cut temporel assumé.

La continuité costume, c'est de la discipline industrielle appliquée à un outil probabiliste. Applique cette méthode sur **comment gérer la continuité costume entre plusieurs scènes IA**, et tes personnages existeront d'une scène à l'autre.

## Matières, motifs et pièges visuels

Les matières réagissent à la lumière : la laine absorbe, le satin réfléchit, le cuir a des highlights marqués. Documente comment chaque matière principale de ta tenue héros réagit en intérieur néon vs extérieur soleil. Génère deux références lumière du même costume si la séquence alterne les deux.

Évite les motifs complexes (carreaux, rayures fines, tweed) sur les tenues héros. Les motifs dérivent plus vite que les couleurs unies. Si le scénario exige un motif, prévois plus de budget inpainting et de références.

Les lunettes sont le cauchemar de la continuité : elles apparaissent, disparaissent, changent de forme. Soit elles sont verrouillées dans chaque prompt, soit tu assumes qu'elles disparaissent et tu évites les gros plans où elles devraient être visibles.

### Checklist costume avant livraison

1. Couleur dominante identique à la référence ?
2. Silhouette (longueur veste, coupe) stable ?
3. Accessoires verrouillés cohérents ?
4. Cheveux et barbe stables ?
5. Chaussures correctes si visibles ?

Deux non cochées = plan B. Trois = régénération ou inpainting.

## FAQ (compléments)

**Comment gérer une tache ou une déchirure narrative ?**

Si le scénario exige une tache qui s'agrandit, versionne la fiche costume : `CHAR-01-ACTE2-TACHE`. Le changement doit être visible et documenté. Une tache qui apparaît sans raison est une erreur de continuité.

**Les costumes de figurants comptent-ils ?**

En gros plan foule, oui partiellement. Simplifie : silhouettes floues, plans larges courts. Ne promets pas des individus distincts que tu ne peux pas maintenir.

La continuité costume, c'est de la discipline industrielle. Applique cette méthode sur **comment gérer la continuité costume entre plusieurs scènes IA**.

## Matières, motifs et accessoires : terrain avancé

La laine absorbe la lumière, le satin réfléchit, le cuir crée des highlights marqués. Documente comment chaque matière de ta tenue héros réagit en néon intérieur versus soleil extérieur. Génère deux références lumière du même costume si la séquence alterne les deux contextes.

Évite les motifs complexes sur les tenues héros : carreaux, rayures fines, tweed. Les motifs dérivent plus vite que les couleurs unies. Si le scénario exige un motif, prévois inpainting et références supplémentaires.

Les lunettes sont le cauchemar numéro un : elles apparaissent, disparaissent, changent de monture. Soit verrouillage strict dans chaque prompt, soit absence assumée sur tous les plans. Les montres et bagues suivent la même logique.

### Production sur plusieurs semaines

Rouvre la fiche costume à chaque session. Compare le premier plan du jour à la référence maîtresse avant tout batch. Les projets dérivent entre deux sessions, pas pendant une seule.

### Checklist avant livraison client

Couleur dominante, silhouette, accessoires, cheveux, chaussures si visibles. Deux cases non cochées sur cinq : plan B minimum. Trois : régénération ou inpainting obligatoire.

Sur une série que j'ai livrée, le personnage portait une chemise beige sur huit plans. Nous avons refusé trois plans magnifiques parce que la teinte dérivait vers l'ocre. Le client a remarqué que « ça tenait », pas que nous avions jeté des plans spectaculaires.

## Personnages multiples et figurants

Une fiche par personnage principal : `CHAR-01`, `CHAR-02`. Codes couleur distincts dans les descriptions. Ne mélange pas les références en une seule génération si l'outil gère mal le multi-référence.

Pour la foule : silhouettes floues, plans larges courts, ou foule statique. Ne promets pas des individus distincts que tu ne peux pas maintenir.

Les costumes blancs et très clairs dérivent vers gris ou crème selon la lumière. Préfère un off-white défini (*ivory cotton #F5F0E8*) plutôt que « white shirt » vague.

Le costume raconte le personnage mais surtout la crédibilité de ta production en IA. Un spectateur ne nomme pas l'erreur de veste : il dit « ça fait cheap ».

Sur une pub, le personnage porte la marque par la tenue. Une veste qui change de teinte entre plan produit et plan lifestyle envoie un signal d'amateurisme. Le client ne nomme pas l'erreur : il demande une retouche vague. Verrouille avant. Le inpainting de dernière minute sur une veste entière coûte plus cher que quatre variations de génération bien briefées au départ.

## Inpainting et dernier recours

Quand un plan est narratifement indispensable et que la veste dérive, inpainte la zone en reprenant la référence costume. Ne refais pas tout le plan si 80 % est bon. Pour les mains et détails, combine avec [inpainting local : retoucher yeux et mains en IA](/blog/inpainting-local-retoucher-yeux-mains-ia).

Les moteurs vidéo inventent les tenues depuis le texte : pars toujours d'une image fixe validée costume plus visage. C'est non négociable sur une série ou une pub avec personnage récurrent.

### Journal costume

```
CHAR-01-CASUAL | ref: char01-sheet-v3.png | prompt bloc: [coller ici] | plans: SC02-PL01 à SC05-PL03
```

Archive à chaque validation. Dans un mois, ce fichier vaut de l'or.

Le character sheet est ton costume department numérique. Face, trois-quarts, dos si besoin, gros plan matière. Même lumière neutre, fond gris. Ce sheet est la source de vérité pour toute la production. Quand un réalisateur sur un plateau dit « même costume prise 2 », tu fais pareil : même bloc prompt, mêmes références, zéro improvisation sur les adjectifs vestimentaires.

Change de tenue narrative ? Deux fiches, transition visible. Manteau hiver ? Fiche CHAR-01-HIVER séparée. Le spectateur accepte un changement qu'il voit. Il rejette un jump invisible entre plans consécutifs.

## Tableau costume

| Élément | Verrouillage | Note |
|---------|--------------|------|
| Couleur | Strict | Ref image |
| Coupe | Strict | Bloc prompt |
| Accessoires | Strict | Liste fixe |
| Motifs | Éviter | Dérive rapide |
| État usure | Modéré | Arc narratif |

La [American Costume Society](https://www.costumesocietyamerica.com/) rappelle que le costume est narration. En IA, c'est crédibilité technique. Un personnage cohérent vaut dix plans spectaculaires incohérents. Bloc prompt identique à chaque plan personnage. Références IP-Adapter. Image fixe avant vidéo. Checklist avant livraison. Discipline simple, résultats disproportionnés.

Applique cette méthode sur **comment gérer la continuité costume entre plusieurs scènes IA**, et tes personnages existeront d'une scène à l'autre. La continuité costume n'est pas du perfectionnisme : c'est ce qui distingue une production sérieuse d'un montage de clips isolés. Quand le client dit « ça fait pro », il parle souvent de ces détails qu'il ne sait pas nommer.

Discipline costume, crédibilité livrée.

Vois aussi [créer une bible de lieux et décors pour projet IA](/blog/creer-bible-lieux-decor-projet-ia) pour la cohérence globale du projet. Costume et décor forment l'univers visuel avec la lumière.

## Fiche costume par personnage

Pour chaque héros, verrouille un document une page : couleur dominante, texture, accessoire signature, ce qui est interdit (capuche, bijou, veste ouverte). **Référence still :** trois angles sous la même lumière. **Prompt stable :** répète les mêmes termes vestimentaires mot pour mot entre les plans. **QA :** compare col, boutons et fermetures en 200 % zoom avant d'enchaîner la scène suivante. Un costume qui dérive tue la continuité plus vite qu'un visage légèrement différent.


> 💡 **Frank's Cut:** une photo du costume sur le plateau virtuel vaut dix adjectifs dans le prompt.

Documente la version validée avec la date : la mémoire du projet vaut plus que le dernier prompt gagnant.


Seuil publication : ne valide pas tant que le test mobile sans son n'est pas passé.

<!-- PUBLICATION DATE: 2026-05-28 -->