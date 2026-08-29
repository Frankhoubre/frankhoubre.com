---
title: "Kling ou Veo 3 : quel moteur selon le type de plan"
date: "2026-08-29"
category: "comparatifs"
excerpt: "Kling vs Veo, le comparatif plan par plan : durée, audio natif, format, coût réel à la seconde. Quel moteur porte quel type de plan, et pourquoi."
thumbnail: "/images/blog/kling-vs-veo-3-choisir-par-plan/hero.webp"
---

# Kling ou Veo 3 : quel moteur selon le type de plan

Tu as un découpage de six plans. Tu ouvres ton abonnement, tu lances les six sur le même moteur, et trois reviennent parfaits pendant que les trois autres sont inutilisables. Tu relances. Tu ajustes le prompt. Tu brûles des crédits sur les mêmes trois plans pendant deux heures.

Le problème n'est pas ton prompt. Tu as demandé à un seul moteur de faire six métiers différents.

Kling et Veo ne se battent pas sur le même terrain. Ils ont des contraintes de durée différentes, des contraintes de format différentes, et surtout des économies très différentes selon que tu actives l'audio ou pas. Une fois que tu sais lire ces contraintes, le choix se fait plan par plan, en trente secondes, avant de générer.

J'ai organisé ce comparatif comme un découpage : un type de plan, le moteur qui le porte, la raison technique derrière. Tous les chiffres viennent des pages officielles, relevés le 29 août 2026, et je donne les sources au fur et à mesure.

![Réalisatrice cadrant un plan large au viseur sur une falaise à l'aube, choix du moteur vidéo IA avant génération](/images/blog/kling-vs-veo-3-choisir-par-plan/hero.webp)

## Ce que chaque moteur sait faire, en dur

Avant les avis, les contraintes. Elles décident de plus de choses que les impressions.

Côté Google, la famille actuelle est Veo 3.1, déclinée en trois niveaux : Veo 3.1, Veo 3.1 Fast et Veo 3.1 Lite. La documentation officielle de l'API Gemini donne les mêmes durées pour les trois, 4, 6 ou 8 secondes, et rien d'autre. Les résolutions vont du 720p au 1080p, plus la 4K sur les deux premiers niveaux, avec une restriction que beaucoup découvrent en production : le 1080p et la 4K ne sont disponibles que sur les générations de 8 secondes. Les formats sont 16:9 et 9:16. L'audio natif est toujours actif, tu ne peux pas le couper côté Gemini. Veo 3.1 et Veo 3.1 Fast acceptent jusqu'à trois images de référence et savent prolonger une scène, en 720p uniquement. Veo 3.1 Lite ne fait ni l'un ni l'autre.

Les modèles Veo 3 stables sont plus rigides : 8 secondes fixes, 720p et 1080p mais en 16:9 seulement, aucune image de référence.

Côté Kling, la génération actuelle est la série 3.0. Wikipédia date la sortie stable de Kling 3.0 au 7 février 2026, et les déclinaisons Turbo et Omni sont arrivées le 17 juin 2026, ce dont j'ai parlé à chaud dans mon papier sur [Kling 3.0 Turbo et la prévisualisation rapide](/blog/2026-06-19-kling-3-turbo-previsualisation-video-ia). Le schéma d'entrée publié par fal.ai pour Kling v3 Pro est parlant : la durée accepte toutes les valeurs entières de 3 à 15 secondes, les formats sont 16:9, 9:16 et 1:1, l'audio natif s'active ou se coupe par un booléen, et il existe un paramètre `shot_type` qui bascule entre `customize` et `intelligent`.

Voilà déjà trois écarts structurels qui n'ont rien à voir avec la qualité d'image.

| Contrainte | Veo 3.1 (API Gemini) | Kling v3 Pro (schéma fal.ai) |
| --- | --- | --- |
| Durées | 4, 6 ou 8 s | 3 à 15 s, seconde par seconde |
| Résolutions | 720p, 1080p et 4K (8 s uniquement) | non exposé dans ce schéma |
| Formats | 16:9, 9:16 | 16:9, 9:16, 1:1 |
| Audio natif | toujours actif | activable ou coupable |
| Images de référence | jusqu'à 3 (sauf Lite) | non exposé dans ce schéma |
| Prolongation de scène | oui, 720p (sauf Lite) | non exposé dans ce schéma |

> 💡 **Le cut de Frank :** la ligne qui décide le plus de choses dans ce tableau, c'est la durée. Un moteur qui s'arrête à 8 secondes t'oblige à découper. Un moteur qui monte à 15 te laisse tenir une intention jusqu'au bout. La résolution, tu la rattrapes en post. La durée, jamais.

## Le vrai clivage : l'audio natif et sa langue

Les deux moteurs génèrent de l'audio natif, dialogue synchronisé compris. Mais la documentation de fal.ai pour Kling v3 est explicite sur une limite que je n'ai vue mentionnée nulle part dans les tests que je lis : la sortie voix couvre le chinois et l'anglais, et les autres langues sont automatiquement traduites vers l'anglais.

Traduis ça en situation de tournage. Tu écris un dialogue en français, tu l'envoies à Kling avec l'audio activé, et tu récupères un comédien qui parle anglais avec un mouvement de lèvres calé sur l'anglais. Kling fait exactement ce que sa fiche annonce. Pour un plan de dialogue français, ça élimine son lip-sync natif avant même qu'on discute du rendu.

Veo 3.1 génère du dialogue avec synchronisation labiale, des ambiances et de la musique, en plusieurs langues selon la fiche modèle publiée par fal.ai. C'est le moteur que je pousse par défaut dès qu'un plan a des lèvres qui bougent en français.

Sur le son en général, Kling reste tout à fait jouable. C'est la voix française qui bloque, rien d'autre. Sur un plan d'ambiance, un plan de mouvement, un plan sans parole, tu coupes `generate_audio`, tu récupères une image propre, et tu montes ton son en post comme tu l'as toujours fait. C'est même souvent plus propre : tu contrôles ton mixage au lieu de le subir.

![Deux comédiens en dialogue à une table de cuisine, perche son en haut du cadre, plan de dialogue confié à Veo](/images/blog/kling-vs-veo-3-choisir-par-plan/workflow-1.webp)

## Le coût réel à la seconde, audio compris

C'est le tableau que je consulte avant chaque journée de génération. Les chiffres viennent de deux sources officielles relevées le 29 août 2026, la page de tarifs de l'API Gemini pour Veo, et les fiches modèles de fal.ai pour Kling et Veo.

Sur l'API Gemini, Veo 3.1 est à 0,40 $ la seconde en 720p et 1080p, et 0,60 $ en 4K. Veo 3.1 Fast descend à 0,10 $ en 720p, 0,12 $ en 1080p, 0,30 $ en 4K. Veo 3.1 Lite est à 0,05 $ en 720p et 0,08 $ en 1080p, sans 4K.

Sur fal.ai, où tu peux comparer les deux moteurs sur la même facture, la grille est différente parce que l'audio y est facturé séparément.

| Modèle sur fal.ai | Sans audio | Avec audio | Avec audio et contrôle de voix |
| --- | --- | --- | --- |
| Kling v3 Standard | 0,084 $/s | 0,126 $/s | 0,154 $/s |
| Kling v3 Pro | 0,112 $/s | 0,168 $/s | 0,196 $/s |
| Veo 3.1 Fast (720p ou 1080p) | 0,10 $/s | 0,15 $/s | non applicable |
| Veo 3.1 (720p ou 1080p) | 0,20 $/s | 0,40 $/s | non applicable |

Regarde la colonne de gauche. Sans audio, Kling v3 Pro coûte 0,112 $ la seconde contre 0,20 $ pour Veo 3.1 standard. Presque la moitié. Sur une journée où tu génères quarante versions de plans muets pour trouver le bon mouvement, l'écart n'est plus théorique.

Maintenant la colonne du milieu. Avec audio, Veo 3.1 double son tarif et passe à 0,40 $, pendant que Kling v3 Pro monte à 0,168 $. Sauf que ces 0,168 $ te donnent une voix anglaise. Si ton plan est en français, cette ligne ne t'intéresse pas.

La fiche fal.ai de Kling v3 Pro donne un exemple chiffré que je trouve honnête à citer tel quel : une vidéo de 5 secondes avec audio activé et contrôle de voix coûte 0,98 $.

Attention quand même, ces tarifs sont ceux de l'API. Si tu passes par les abonnements grand public de chaque plateforme, tu paies en crédits, et le coût réel d'un plan devient beaucoup plus difficile à calculer. J'ai détaillé cette arithmétique dans mon [analyse du coût réel d'un court métrage IA](/blog/combien-coute-court-metrage-ia-2026). Pour arbitrer entre deux moteurs, compare des prix à la seconde sur la même plateforme, sinon tu compares des choux et des carottes.

## Plan par plan : qui prend quoi

Voilà la grille que j'utilise sur un découpage réel. Lis-la comme une répartition de tâches entre deux techniciens qui ont chacun leur spécialité.

### Plan de dialogue en français

Veo, sans hésiter. C'est le seul des deux à produire une voix française avec un lip-sync natif. Contrainte à intégrer dès l'écriture : 8 secondes maximum par génération. Ça veut dire des répliques courtes, ou un découpage champ contrechamp où chaque plan porte une réplique et demie.

Si ta réplique ne tient pas en 8 secondes, tu ne rallonges pas le plan, tu le coupes. Du montage classique, et c'est presque toujours meilleur.

### Plan de dialogue en anglais

Les deux sont candidats et la décision devient économique. Kling v3 Pro avec audio à 0,168 $ la seconde contre Veo 3.1 à 0,40 $, et Kling te laisse en plus monter jusqu'à 15 secondes. Sur une scène de dialogue anglophone un peu longue, l'écart de facture devient considérable.

### Plan large d'ouverture, paysage, établissement

Kling, presque toujours, et sans audio. Tu n'as pas besoin de voix, tu as besoin de durée et de largeur. À 0,084 $ la seconde en Standard sans audio, tu peux te permettre de générer huit variantes du même plan large et de choisir la lumière qui colle au reste de ta séquence. Ton ambiance sonore, tu la poses en post, où tu la contrôles.

### Plan de mouvement complexe, action physique, corps entier

C'est le plan qui casse le plus de moteurs, et celui où la durée compte le plus. Un geste complet qui commence et se termine dans le plan a rarement la politesse de tenir en 8 secondes. Kling monte à 15, seconde par seconde, ce qui te laisse cadrer l'amorce et la chute du mouvement dans la même génération.

Le paramètre `shot_type` de Kling mérite un test ici. Sur `intelligent`, le moteur décide de son cadrage. Sur `customize`, il te rend la main. Pour du mouvement précis, je verrouille en `customize` et je décris le plan comme un chef opérateur le décrirait, avec la valeur de plan, l'axe et le mouvement de caméra. Si cette partie te manque, ma [bibliothèque de prompts par valeur de plan](/blog/bibliotheque-prompts-cinema-plans-types) donne des blocs déjà écrits pour ça.

![Grimpeur en pleine action suivi au gimbal dans une salle de bloc, plan de mouvement complexe confié à Kling](/images/blog/kling-vs-veo-3-choisir-par-plan/workflow-2.webp)

### Plan vertical pour les réseaux

Les deux acceptent le 9:16, donc pas de discrimination sur le format. La différence se joue ailleurs. Kling accepte aussi le 1:1, ce qui rend service sur certains placements, et surtout Kling laisse choisir une durée courte de 3 ou 4 secondes. Sur du contenu social où tu enchaînes des micro-plans, pouvoir demander exactement 3 secondes évite de payer 8 secondes pour en garder 3.

### Plan avec continuité de personnage entre deux prises

Veo 3.1 et Veo 3.1 Fast acceptent jusqu'à trois images de référence. C'est l'outil documenté pour tenir un visage ou un décor d'un plan à l'autre. Sur une série de plans qui doivent partager la même comédienne, c'est un argument que Kling n'expose pas dans le schéma fal.ai que j'ai consulté.

Attention au piège : Veo 3.1 Lite, la version la moins chère, accepte aussi les images de référence mais ne sait pas prolonger une scène. Si ton besoin est la continuité et pas la durée, Lite à 0,05 $ la seconde en 720p est probablement le meilleur rapport du marché pour ce cas précis.

### Plan à prolonger au-delà de 8 secondes

Veo, en connaissant la mécanique. La prolongation de scène existe sur Veo 3.1 et Veo 3.1 Fast, en 720p uniquement. La fiche fal.ai précise le fonctionnement : jusqu'à 7 secondes ajoutées par étape, 20 étapes maximum, ce qui mène à environ 148 secondes de sortie, soit à peu près deux minutes et demie.

Deux minutes et demie de plan continu, c'est énorme sur le papier. En pratique tu es bloqué en 720p sur toute la chaîne, et la dérive s'accumule à chaque étape. Je m'en sers pour des plans d'ambiance longs, jamais pour un plan qui porte une information dramatique.

## La méthode : trier le découpage avant d'ouvrir un moteur

Concrètement, voilà comment je procède quand j'arrive avec un découpage.

Je prends la liste des plans et j'ajoute quatre colonnes : durée cible en secondes, présence de parole, langue de la parole, présence d'un personnage récurrent. Rien d'autre. Aucune note artistique à ce stade.

Ensuite j'applique trois règles dans cet ordre.

La parole d'abord. Tout plan avec du dialogue français part chez Veo. Point final. La limite de langue de Kling est documentée, il n'y a rien à discuter.

La durée ensuite. Tout plan muet qui dépasse 8 secondes part chez Kling. Raison unique : Veo ne sait pas le faire en une génération.

La continuité en dernier. Tout plan qui doit reprendre un visage ou un décor déjà validé part chez Veo avec ses images de référence, sauf s'il tombe déjà sous la deuxième règle, auquel cas j'arbitre au cas par cas et je génère une version chez chacun.

Ce qui reste, les plans muets de moins de 8 secondes sans contrainte de continuité, c'est le gros du volume, et c'est là que je génère chez Kling sans audio, pour le prix.

Une fois le tri fait, tu ouvres tes moteurs et tu ne changes plus d'avis. Le pire scénario en production IA, c'est l'hésitation permanente : tu relances le même plan chez les deux, tu compares, tu doutes, et tu as brûlé trois heures pour un plan de six secondes.

> 💡 **Le cut de Frank :** garde une ligne de budget « double génération » explicite, disons deux ou trois plans sur trente. Sur ceux-là tu t'autorises à générer chez les deux et à trancher au visionnage. Sur tous les autres tu suis le tri. Ce qui coûte cher, c'est la comparaison que tu n'avais pas prévue au départ.

## Dépannage : ce qui casse et ce que ça veut dire

**Ton plan Veo revient en 720p alors que tu avais demandé du 1080p.** Vérifie la durée. La documentation Gemini est claire, le 1080p et la 4K ne sont disponibles que sur les générations de 8 secondes. Si tu as demandé 4 ou 6 secondes, la haute définition n'était pas dans le contrat.

**Ton comédien parle anglais alors que ton prompt était en français, sur Kling.** Comportement documenté, pas un accident. Coupe `generate_audio`, garde l'image, fais ta voix ailleurs. Ou passe ce plan chez Veo.

**Ton plan Kling de 15 secondes part en vrille après la dixième.** Classique, et ce n'est pas propre à Kling. Plus tu laisses courir, plus le modèle s'éloigne de l'intention initiale. Ma parade est bête : je génère la durée dont j'ai réellement besoin au montage, plus une seconde de marge, jamais le maximum autorisé. Demander 15 secondes parce que c'est possible, c'est acheter 5 secondes de dérive.

**Tes deux plans de la même scène n'ont pas la même lumière.** Sur Veo, passe par les images de référence, jusqu'à trois. Sur Kling tu n'as pas cet outil exposé, donc tu compenses en amont : même image pilote, même vocabulaire de lumière d'un prompt à l'autre. J'ai décrit cette discipline dans mon [workflow Kling 3 pour une animation fluide](/blog/workflow-kling-3-animation-fluide-realiste).

**Ta facture explose sans que tu comprennes.** Regarde si l'audio est actif. Sur Veo 3.1 via fal.ai, activer l'audio fait passer de 0,20 à 0,40 $ la seconde, exactement le double. Sur une journée de tests où tu ne regardes que l'image, c'est de l'argent jeté.

**Ta prolongation Veo dégrade la qualité à chaque étape.** Normal, elle tourne en 720p. Si ton livrable final est en 1080p, oublie la prolongation et passe par le montage.

## Ce que ce comparatif ne dit pas

Je n'ai publié aucune note de qualité d'image. Pas par prudence excessive : les deux moteurs bougent trop vite pour qu'une note tienne trois mois, et la qualité perçue dépend énormément du type de plan et du prompt. Restent les contraintes documentées et les prix, que tu peux vérifier toi-même en dix minutes. C'est ce que j'ai comparé.

Je n'ai pas non plus traité les résolutions Kling. Le schéma fal.ai de Kling v3 Pro que j'ai consulté n'expose pas de paramètre de résolution, et je préfère ne rien affirmer plutôt que de recopier un chiffre trouvé sur un site tiers. Si tu travailles en 4K sur Kling, vérifie sur ton propre accès avant de vendre un livrable.

Pour aller plus loin sur chaque moteur pris séparément, mon [brief réalisateur pour Veo 3](/blog/google-veo-3-brief-realisateur-plan-sequence) traite le plan séquence, et l'article sur [Flow et l'édition audio de Veo 3.1](/blog/google-flow-veo-31-edition-audio-juin-2026) couvre le côté interface. Les sources officielles utilisées ici sont la [documentation Veo de l'API Gemini](https://ai.google.dev/gemini-api/docs/veo), la [page de tarifs de l'API Gemini](https://ai.google.dev/gemini-api/docs/pricing) et les [fiches modèles publiées par fal.ai](https://fal.ai/models/fal-ai/kling-video/v3/pro/text-to-video).

## FAQ

### Kling ou Veo, lequel est le meilleur en 2026 ?

La question n'a pas de réponse utile telle quelle, parce que les deux moteurs n'ont pas les mêmes contraintes. Veo 3.1 plafonne à 8 secondes par génération mais gère le dialogue multilingue avec synchronisation labiale et accepte jusqu'à trois images de référence pour tenir un personnage. Kling v3 monte à 15 secondes, propose le format 1:1, et coûte nettement moins cher quand tu coupes l'audio. Sur un découpage réel tu utiliseras probablement les deux, Veo sur les plans parlés et les plans de continuité, Kling sur les plans muets, longs ou nombreux. Choisir un camp unique, c'est se priver de la moitié des solutions.

### Kling gère-t-il le dialogue en français ?

Pas en voix native. La documentation de fal.ai pour Kling v3 précise que la sortie voix couvre le chinois et l'anglais, et que les autres langues sont automatiquement traduites vers l'anglais. Concrètement, un dialogue écrit en français ressortira parlé en anglais, avec un mouvement de lèvres calé sur l'anglais. Pour un plan de dialogue français, ça disqualifie l'audio natif de Kling. Deux solutions propres : passer ce plan chez Veo, ou couper l'audio sur Kling, garder l'image, et faire ta voix française séparément avant de synchroniser au montage. La deuxième option marche bien sur les plans où les lèvres ne sont pas au premier plan.

### Combien coûte réellement une seconde de vidéo sur chaque moteur ?

Sur fal.ai, où les deux moteurs se comparent sur la même facture, relevé le 29 août 2026 : Kling v3 Standard est à 0,084 $ la seconde sans audio et 0,126 $ avec, Kling v3 Pro à 0,112 $ sans audio et 0,168 $ avec, Veo 3.1 Fast à 0,10 $ sans audio et 0,15 $ avec en 720p ou 1080p, Veo 3.1 standard à 0,20 $ sans audio et 0,40 $ avec. Sur l'API Gemini directement, Veo 3.1 est à 0,40 $ la seconde en 720p et 1080p, Veo 3.1 Fast à 0,10 $ en 720p, et Veo 3.1 Lite à 0,05 $ en 720p. Vérifie toujours sur la page officielle le jour où tu factures.

### Pourquoi mon plan Veo ne sort pas en 1080p ?

Parce que la haute définition est liée à la durée. La documentation officielle de l'API Gemini indique que le 1080p et la 4K ne sont disponibles que sur les générations de 8 secondes, sur Veo 3.1 et Veo 3.1 Fast. Si tu as demandé 4 ou 6 secondes, tu sors en 720p, quel que soit ton prompt. Veo 3.1 Lite ne propose pas de 4K du tout. C'est une contrainte à intégrer à l'écriture : si un plan doit finir en 1080p dans le livrable, il doit être écrit pour durer 8 secondes, quitte à couper le surplus au montage. Générer court pour économiser te coûte la définition.

### Quel moteur choisir pour un plan de plus de 8 secondes ?

Kling, si le plan est muet ou si la voix anglaise ne pose pas de problème, puisqu'il accepte n'importe quelle durée entière de 3 à 15 secondes. Veo peut aussi dépasser 8 secondes, mais par prolongation de scène, un mécanisme différent. Selon la fiche fal.ai, la prolongation ajoute jusqu'à 7 secondes par étape, 20 étapes au maximum, pour environ 148 secondes de sortie totale. Deux réserves importantes : la prolongation ne fonctionne qu'en 720p, et Veo 3.1 Lite ne la propose pas. Pour un plan long qui porte une information dramatique, je préfère largement une génération native chez Kling qu'une chaîne de prolongations.

### Comment garder le même visage d'un plan à l'autre ?

Sur Veo 3.1 et Veo 3.1 Fast, l'outil documenté est l'image de référence, jusqu'à trois images par génération, ce qui aide à préserver l'identité d'un personnage et les détails d'un décor. C'est l'argument le plus solide de Veo sur une série de plans liés. Le schéma fal.ai de Kling v3 Pro que j'ai consulté n'expose pas d'équivalent, donc sur Kling la continuité se joue en amont : même image pilote quand tu pars d'une image, et surtout le même vocabulaire descriptif d'un prompt à l'autre pour le visage, les vêtements et la lumière. Change un adjectif, tu changes de personne.

### Le paramètre shot_type de Kling sert à quoi ?

Le schéma d'entrée publié par fal.ai pour Kling v3 Pro expose un paramètre `shot_type` avec deux valeurs, `intelligent` et `customize`. En `intelligent`, tu laisses le moteur décider de son cadrage à partir de ta description. En `customize`, tu reprends la main. Mon usage est simple : `intelligent` quand je cherche des idées et que je veux être surpris sur un plan d'ambiance, `customize` dès qu'un plan a une place précise dans un découpage et doit raccorder avec le plan d'avant. Sur un plan de mouvement où l'axe compte, laisser le moteur choisir revient à laisser un inconnu poser ta caméra.

### Faut-il générer le même plan sur les deux moteurs pour comparer ?

Sur deux ou trois plans par projet, oui, et c'est un budget que je pose explicitement au départ. Sur tous les autres, non. La double génération systématique double la facture et, plus grave, elle installe le doute : tu passes ta journée à comparer au lieu de monter. Ma méthode est de trier le découpage avant d'ouvrir le moindre moteur, selon trois critères mesurables, la langue du dialogue, la durée cible et le besoin de continuité, puis de m'y tenir. Les plans réellement ambigus, tu les repères tout de suite, et ce sont ceux-là qui méritent une double passe.

## Pour finir

Le réflexe qui coûte le plus cher en vidéo IA, c'est de chercher le moteur qui fait tout. Il n'existe pas, et les fiches techniques le disent avant même que tu génères quoi que ce soit.

Veo tient le dialogue et la continuité de personnage, dans une fenêtre de 8 secondes qu'il faut accepter et écrire en conséquence. Kling tient la durée, le format carré et le volume, à condition de renoncer à la voix française native.

Prends ton prochain découpage. Ajoute les quatre colonnes. Trie. Tu vas voir que la moitié des plans se placent tout seuls, et que les trois ou quatre restants sont exactement ceux qui méritaient une vraie discussion.
