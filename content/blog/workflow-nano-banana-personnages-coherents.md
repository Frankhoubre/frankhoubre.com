---
title: "Workflow Nano Banana pour créer des personnages cohérents"
date: "2026-05-15"
category: "tutoriels"
excerpt: "Fiche identité, prompts figés, QA visuelle et itérations disciplinées : le pipeline Nano Banana pour des personnages cohérents sur toute une série d'images."
thumbnail: "/images/blog/workflow-nano-banana-personnages-coherents/hero.webp"
---

Tu génères un héros magnifique. Plan suivant : autre visage, autre nez, autre manteau. Tu retouches au feeling. Trois heures plus tard, ta « série » ressemble à quatre casting différents. *Ce n'est pas que Nano Banana « ne sait pas ».* C'est que tu n'as pas encore un **workflow Nano Banana pour personnages cohérents** : fiche, squelette de prompt, journal, et rejet systématique des dérives.

Nano Banana (et ses variantes type Pro) est souvent cité pour des itérations rapides. La vitesse sans cadre tue la cohérence en dix clics. Ce guide te donne la méthode de studio que j'applique sur des campagnes, des storyboards, et des bibles personnage avant même de passer à la vidéo.

![Trois portraits cohérents du même personnage accrochés au mur, lumière studio douce](/images/blog/workflow-nano-banana-personnages-coherents/hero.webp)

## Pourquoi la cohérence n'est pas un bouton magique

Un modèle image lit des **tokens**, pas ton intention narrative. Si tu écris « trench » puis « pardessus » puis « manteau long », tu as trois costumes pour le même cerveau statistique. La cohérence est une **chaîne** : description figée, variations contrôlées, archive des seeds, et QA visuelle avant d'ajouter un plan à la bible.

**Nano Banana** peut accélérer les essais. **Ton workflow** décide ce qui entre dans la bible officielle. Sans bible, tu collectionnes des jolies erreurs.

J'ai vu des équipes publier une campagne où le « même » protagoniste avait trois morphologies de mâchoire entre les formats 16:9 et 9:16. Le client n'a pas dit « l'IA est nulle ». Il a dit « votre casting est incohérent ». C'est toujours un échec de workflow, pas de modèle.

Pour la théorie multi-images générique, croise [tutoriel : personnages cohérents sur plusieurs images](/blog/personnages-coherents-plusieurs-images-ia). Ici, on spécialise le pipeline pour **Nano Banana** et les pièges de vitesse.

Les alternatives type [Dzine pour personnages cohérents](/blog/dzine-ia) peuvent automatiser une partie de la chaîne. Garde la fiche et la QA : l'automatisation sans rejet systématique recrée le casting multiple en plus rapide.

> 💡 **Frank's Cut:** interdis-toi de valider un plan « parce qu'il est beau ». Valide seulement si **cinq points anatomiques + un accessoire** matchent la fiche. Sinon tu construis une série sur du sable.

## Phase 0 : fiche personnage (dix lignes max, non poétique)

Avant le premier prompt long :

1. Âge apparent (ex : 34 ans).
2. Silhouette (mince, épaules larges).
3. Cheveux (couleur, longueur, attachés ou non).
4. Yeux (couleur, forme si pertinent).
5. Peau (teint, grain visible oui/non).
6. Costume **verrouillé** (trench beige boutons corne, pas synonymes).
7. Accessoire identitaire (montre gauche, cicatrice sourcil droit).
8. Émotion dominante de la série (fatiguée, déterminée).
9. Interdits (pas de lunettes si non dans la bible).
10. Référence interne (`HEROINE_A_v01`).

Une phrase émotionnelle suffit. Pas de paragraphe littéraire dans la fiche technique.

Pour les prompts personnage en profondeur, [comment écrire un prompt pour un personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant) complète la couche rédaction.

## Phase 1 : le squelette de prompt figé

Structure copier-coller :

```text
=== IDENTITÉ (ne jamais modifier) ===
woman 34, slim build, shoulder-length dark brown hair,
light olive skin with visible pores, beige trench coat horn buttons,
small scar above right eyebrow, silver watch left wrist

=== SCÈNE (varier) ===
three-quarter view, overcast street, soft diffused light

=== CONTRAINTES ===
50mm lens, hands visible but not extreme close-up,
natural skin texture, no plastic beauty, no text on clothes
```

**Règle d'or** : le bloc identité est **sacré**. Tu changes scène et angle, pas les synonymes du costume.

## Phase 2 : session Nano Banana disciplinée

La vitesse de Nano Banana est un piège. Impose un **quota** : 8 variations max par angle nouveau, puis pause QA.

**Avant d'ouvrir l'outil**, lis la fiche à voix haute. Si tu ne peux pas réciter le costume et l'accessoire sans hésiter, tu n'es pas prêt à générer. Ça paraît enfantin. Ça évite des soirées.

**Pendant la session**, une seule variable à la fois : angle OU décor OU expression légère. Mélanger « maintenant pluie et sourire et profil » sur la variation 5, c'est repartir à la roulette.

**Après la session**, exporte uniquement les VALIDÉ dans un dossier `bible_officielle/`. Interdis-toi d'envoyer au client des images du dossier `essais/`. La tentation est réelle quand une image « presque » est plus jolie qu'une image « exacte ».

| Étape | Action | Durée indicative |
|-------|--------|------------------|
| Portrait face | Valider identité | 30 min |
| Trois quarts | Même identité | 20 min |
| Profil | Même identité | 20 min |
| Plan américain | Contexte décor | 25 min |
| QA croisée | Comparer 5 points | 15 min |

**Journal** (`journal_HEROINE_A.txt`) :

```text
2026-04-14 portrait face seed 88421 VALIDÉ v03
2026-04-14 trois quarts seed 88421 dérive manteau vert REJETÉ
```

Si l'outil expose une seed, note-la. Si elle saute, repars de l'image validée en **img2img** léger (10 à 25 % de force selon UI) plutôt que de regénérer depuis zéro.

![Trois angles du même personnage sur mur de référence, cohérence costume et visage](/images/blog/workflow-nano-banana-personnages-coherents/workflow-1.webp)

## Phase 3 : QA visuelle (cinq points + accessoire)

Sur chaque image candidate, coche :

1. **Distance interoculaire** (rapport yeux/nez).
2. **Forme du nez** (arête, bout).
3. **Ligne de mâchoire**.
4. **Couleur cheveux** (pas de reflets hors bible).
5. **Costume** (coupe, couleur, boutons).
6. **Accessoire** (montre, cicatrice).

Un seul non = **rejet**, pas « on garde pour l'ambiance ». L'ambiance avec un autre visage détruit la série.

Pour éviter les visages déformés en amont, [comment éviter les visages déformés en génération IA](/blog/comment-eviter-visages-deformes-generation-ia) liste des garde-fous utiles même hors Nano Banana.

## Phase 4 : angles, mains, et décors

La cohérence se joue souvent sur la **séquence d'angles**, pas sur la magie d'un seul prompt parfait. L'ordre recommandé n'est pas anodin : face d'abord (contrat morphologique), trois quarts (test costume sous lumière oblique), profil (test nez et mâchoire), américain (test silhouette et proportion jambes/torse). Sauter le face et commencer par un plan américain en plein soleil, c'est inviter le modèle à inventer un visage qui « tient » de loin mais s'effondre en gros plan.

**Angles** : une fois le portrait face validé, enchaîne trois quarts puis profil **sans toucher à l'identité**. Change uniquement le bloc scène.

**Mains** : plans américains avant gros plans mains. Si les doigts fusionnent, recadre plus large, ne « répare » pas dix fois en gros plan.

**Décors** : un décor complexe par session. Mélanger rue + intérieur + plage le même jour dilue ton attention QA.

> 💡 **Frank's Cut:** imprime (ou affiche en plein écran) ton **portrait validé** à côté de chaque nouvelle génération. Le cerveau humain détecte les dérives plus vite que la barre latérale de l'outil.

## Phase 5 : bible livrable et passage vidéo

Exporte une **bible PDF** ou dossier :

- 4 à 6 images validées (face, 3/4, profil, américain).
- Fiche texte identité.
- Prompts complets copiables.
- Liste des seeds et versions outil.

Quand tu passes à Seedance ou Kling, cette bible devient tes pilotes. Le workflow vidéo hérite de la cohérence image. Sans bible, la vidéo **amplifie** le chaos.

Pour des images photoréalistes sans plastique, [générer des images IA photoréalistes sans effet plastique](/blog/comment-generer-images-ia-photorealistes-sans-effet-plastique) évite de saboter la bible dès la base.

![Créateur annotant fiche personnage et codes vestimentaires sur bureau, lampe chaude](/images/blog/workflow-nano-banana-personnages-coherents/workflow-2.webp)

## Tableau : erreurs Nano Banana vs fix

| Symptôme | Cause fréquente | Fix workflow |
|----------|-----------------|--------------|
| Visage « presque » pareil | Synonymes costume | Verrouiller tokens identité |
| Âge qui varie | Adjectifs contradictoires | Une ligne âge dans fiche |
| Bijoux qui apparaissent | Prompt scène trop riche | Négatif + fiche interdits |
| Peau plastique | « beautiful flawless » | pores, grain, pas de beauté |
| Décor qui vole la lumière | HDR décor | Simplifier scène |
| 40 variations sans tri | Vitesse Nano Banana | Quota 8 + QA |

## Trois scénarios réels

### Scénario A : campagne pub (même modèle, 4 visuels)

**Jour 1** : portrait face + trois quarts validés, bible exportée.

**Jour 2** : quatre décors (bureau, rue, café, escalier) avec **même identité**, QA chaque fois.

**Livrable** : dossier `HEROINE_A_campaign/` avec uniquement les VALIDÉ.

### Scénario B : storyboard fiction (12 cases)

Génère d'abord **3 références** (face, 3/4, silhouette). Pour chaque case storyboard, img2img depuis la référence la plus proche de l'angle, pas texte seul. Voir [storyboard professionnel complet avec l'IA](/blog/generer-storyboard-professionnel-complet-ia) pour l'échelle projet.

### Scénario C : reprise après une semaine

Ouvre `journal_HEROINE_A.txt`, reprends seed + prompt identité, **ne relis pas de mémoire**. La mémoire change les adjectifs. Le journal non.

## Nano Banana vs Flux pour la bible

Nano Banana : vitesse d'itération, risque de dérive si tu zappes la QA. Flux : souvent plus lourd par image, parfois meilleur sur textures fines pour pilotes vidéo. Beaucoup d'équipes font la **bible identité** sur Nano Banana discipliné, puis une pilote « héros » Flux pour la vidéo. Le comparatif [Flux vs SDXL](/blog/flux-vs-sdxl-quelle-ia-choisir-images-realistes) aide à trancher selon ton livrable.

### Variantes de prompt à éviter (synonymes qui tuent)

| Tu crois préciser | Le modèle entend | Fix |
|-------------------|------------------|-----|
| trench / coat / overcoat | trois vestes | un seul token « beige trench coat horn buttons » |
| pretty / beautiful / stunning | beauté plastique | « visible skin pores, natural texture » |
| young woman / girl / female | âge instable | « woman 34 » une fois |
| dark hair / brunette / brown hair | teinte variable | « dark brown hair shoulder-length » |

### Session « recalage » après dérive

Si tu t'es laissé emporter et que les dix dernières images dérivent : **stop**. Ouvre le portrait VALIDÉ le plus ancien. Regénère en img2img depuis celui-ci uniquement, identité copiée au caractère près, scène simplifiée (fond gris, lumière douce). Recalibre. Puis seulement retente les décors complexes.

### Cohérence émotionnelle (souvent oubliée)

La morphologie peut tenir pendant que l'âme du visage change trop. Si ta série est « fatigue », interdis « big smile » dans le bloc scène. Une micro-expression (« slight tired eyes ») suffit. L'émotion incohérente fait autant de tort que un nez différent sur une pub série.

### Export pour équipe motion

Livre au motion designer : PDF 4 pages (face, 3/4, profil, américain), TXT identité, PNG sans compression destructive. Pas de mélange JPEG qualité 60 : les artefacts deviennent des « pores » fantômes en vidéo.

### Checklist avant passage Kling ou Seedance

- [ ] 4 angles VALIDÉ dans bible_officielle
- [ ] journal à jour avec seeds
- [ ] même température de lumière sur les 4
- [ ] accessoire visible sur au moins 2 angles
- [ ] test img2img léger depuis face VALIDÉ si doute

Les guides [Google AI Principles](https://ai.google/principles/) ne décrivent pas Nano Banana, mais rappellent l'importance de la transparence quand tu livres des personnages synthétiques à des marques. Documente ce qui est généré et ce qui est retouché.

## Troubleshooting cohérence

**« Presque la même personne » sur toute la série.** Tu as accepté des « presque ». Reprends la fiche, rejette, regénère depuis portrait validé en img2img.

**Le manteau change de teinte.** Un seul token couleur dans identité. Pas de « beige ou camel ».

**Les yeux changent de bleu à vert.** Couleur yeux dans identité + négatif « heterochromia » si besoin.

**Tu confonds vitesse et progrès.** 30 images non triées < 6 images bible. Ralentis.

**Tu modifies l'identité pour « réparer » une scène.** Interdit. Change la scène, pas le nez.

**Vidéo incohérente après.** La pilote vidéo n'était pas dans la bible. Exporte uniquement des VALIDÉ vers Kling/Seedance.

**Client demande « une version plus jeune » en cours de route.** Nouvelle fiche `v02`, pas de retouche opportuniste sur v01. Sinon tu perds la traçabilité et tu recrées le chaos.

**Série nocturne + série jour même personnage.** Deux sous-dossiers `bible_jour/` et `bible_nuit/` avec la même identité textuelle, lumière adaptée au bloc scène uniquement. Ne change pas la morphologie pour « compenser » la nuit.

La recherche en [computer vision](https://en.wikipedia.org/wiki/Computer_vision) sur la reconnaissance de visages rappelle que les humains sont hypersensibles aux micro changements de proportions. Ton QA doit être aussi exigeant qu'un casting director, pas qu'un scroll Instagram.

### Scénario D : influencer fictif (30 posts)

Semaine 1 : bible 6 images. Semaine 2 : posts « lifestyle » depuis img2img des VALIDÉ. Semaine 3 : un seul décor nouveau par jour, QA stricte. Jamais 30 prompts texte seul depuis zéro. La cohérence est un marathon de rejet, pas un sprint de génération.

### Palette et maquillage : verrouiller sans sur-prompt

Note dans la fiche : teinte lèvres naturelle, pas de rouge à lèvres vif sauf campagne dédiée. Les lèvres sont un piège de cohérence entre deux sessions. Un « no makeup look » explicite dans l'identité bat cinq adjectifs beauté contradictoires. Si la marque impose un maquillage fort, crée une **sous-fiche** `HEROINE_A_makeup_v01` et ne mélange pas avec la version bare face.

### Naming fichiers (évite le chaos)

`HEROINE_A_face_VALID_v03.png` pas `final_final2.png`. Le nom raconte l'état de validation. Dans six mois, tu retrouves la vérité sans ouvrir cent miniatures.

Garde aussi une copie cloud en lecture seule pour le client : il voit la bible, il ne la mélange pas avec des essais non validés partagés par erreur.

[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on verrouiller une fiche personnage et éviter les synonymes qui cassent la cohérence entre les plans.]

## FAQ

**Nano Banana ou Nano Banana Pro : lequel pour une bible ?**

Pro si tu as besoin de plus de contrôle ou de résolution sur les détails costume. L'essentiel reste le workflow : fiche, identité figée, journal, QA. Sans ça, Pro ne sauve pas une série incohérente.

**Puis-je mélanger Nano Banana et Midjourney sur le même personnage ?**

Déconseillé pour une bible stricte. Les moteurs « interprètent » différemment les tokens. Si tu mixes, utilise img2img depuis une référence validée et accepte des sessions de recalage. Pour Midjourney seul, voir [guide complet Midjourney](/blog/midjourney-guide-complet) comme référence parallèle, pas comme mélange automatique.

**Combien d'images minimum dans une bible ?**

Quatre : face, trois quarts, profil, plan américain. Six si la main ou un accessoire complexe est central. En dessous, la vidéo et les nouveaux angles devinent trop.

**Comment gérer plusieurs personnages dans une même scène ?**

Une fiche + un journal par personnage. Génère séparément, compose en post ou avec outils de mise en scène contrôlée. Deux identités dans un seul prompt = roulette russe.

**Les LoRA ou références custom ?**

Si ton stack le permet, une LoRA entraînée sur tes VALIDÉ verrouille encore plus. Le workflow Nano Banana reste la base : sans images propres, la LoRA apprend du bruit.

**Que faire si le client change le costume en milieu de projet ?**

Nouvelle version `HEROINE_A_v02`, nouvelle ligne journal, pas de mélange avec v01 dans le même dossier livrable. La transparence évite les retours « ce n'est pas la même actrice ».

**La cohérence suffit-elle pour la vidéo ?**

Non. Elle est nécessaire, pas suffisante. Enchaîne avec [workflow complet Seedance 2 pour un rendu cinéma](/blog/workflow-complet-seedance-2-rendu-cinema) ou le workflow Kling 3 quand tu animes la bible.

**Droits et usage commercial ?**

Vérifie les conditions de ton compte et le contrat client. Archive les preuves de chaîne de création. La cohérence technique ne remplace pas la conformité juridique.

**Combien de temps pour une bible complète ?**

Compte une demi-journée focus pour un personnage principal (4 angles + QA), plus une demi-journée si décor complexe ou second personnage. Les débutants qui promettent « bible en 1 h » oublient le recalage. Mieux vaut annoncer demi-journée et livrer une bible tenable qu'une galerie jolie incohérente.

**Faut-il retoucher dans Photoshop après Nano Banana ?**

Oui pour retirer un artefact local, non pour « sculpter » un autre nez. Si tu retouches la morphologie, mets à jour la fiche et regénère les angles depuis la retouche documentée, sinon la vidéo suivante recassera tout.

**Nano Banana en équipe : qui valide ?**

Une seule personne « gardienne de la bible » par projet. Deux validateurs avec standards différents recréent le « presque » accepté. En réunion, projete face + candidat côte à côte, pas en scroll rapide sur téléphone.

Le **workflow Nano Banana pour créer des personnages cohérents**, ce n'est pas cliquer plus vite. C'est rejeter plus vite tout ce qui n'est pas la même personne. Fais ça, et Nano Banana redevient un accélérateur, pas un générateur de casting multiples.

<!-- PUBLICATION DATE: 2026-05-15 -->
