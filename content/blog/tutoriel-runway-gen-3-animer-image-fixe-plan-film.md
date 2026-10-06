---
title: "Tutoriel Runway 2026 : animer une image fixe pour un film"
date: "2026-04-18"
dateModified: "2026-10-06"
category: "tutoriels"
excerpt: "Gen-3 a été retiré en juillet 2026. La méthode pour animer une image fixe avec Gen-4.5 : crédits, prompt de mouvement, passes et validation au montage."
thumbnail: "/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/hero.webp"
---

# Tutoriel Runway 2026 : animer une image fixe pour un film

Tu as une image fixe qui te plaît vraiment. La lumière est juste, le cadre tient, la texture a du grain. Tu l'envoies dans Runway pour lui donner trois secondes de vie, et le plan déraille : les mains fondent, les contours respirent, le fond glisse comme un décor de théâtre mal fixé. Et si tu suivais un tutoriel écrit pour Gen-3, il y a une deuxième mauvaise surprise : le modèle n'est plus dans le menu.

Runway a retiré Gen-3 Alpha le 8 juillet 2026, puis Gen-3 Alpha Turbo le 30 juillet 2026. Les tutoriels qui traînent encore en ligne, y compris la première version de celui-ci publiée en avril, décrivent donc un outil qui n'existe plus. Le modèle de remplacement pour l'image vers vidéo s'appelle Gen-4.5, les crédits ont changé, les formules aussi, et le domaine lui-même a bougé : runwayml.com redirige désormais vers runway.com.

Ce qui n'a pas bougé, c'est la méthode. Une image animée tient à l'écran quand la source est propre, quand le mouvement est unique et sobre, et quand tu juges le plan dans la timeline plutôt qu'en preview. J'ai réécrit ce tutoriel Runway de haut en bas pour qu'il colle à l'outil tel qu'il est en octobre 2026, avec les vrais chiffres de la documentation officielle et la routine que j'applique pour sortir des plans montables.

![Réalisatrice sur un quai de port à l'aube comparant une photo imprimée du lieu au décor réel avant de l'animer dans Runway](/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/hero.webp)

## Ce qui a changé chez Runway depuis Gen-3

Tu ouvres Runway avec un vieux tutoriel sous le coude, tu cherches « Gen-3 Alpha Turbo » dans le sélecteur et tu ne le trouves pas. Ton compte n'y est pour rien : le modèle a été retiré.

La page d'aide [« Creating with Gen-3 Alpha and Gen-3 Alpha Turbo »](https://help.runwayml.com/hc/en-us/articles/30266515017875-Creating-with-Gen-3-Alpha-and-Gen-3-Alpha-Turbo) affiche désormais un simple avis de retrait avec les dates et quatre remplacements. Pour l'image vers vidéo et le texte vers vidéo, c'est Gen-4.5. Pour les images clés (une image de début, une image de fin), c'est l'app **Animate Frames**. Pour transformer une vidéo existante, c'est **Edit Studio Aleph 2.0**. Toutes les fonctions qui dépendaient de Gen-3, Camera Control, Expand Video, Act-One sur Gen-3, Keyframes sur Gen-3, ont suivi le même chemin.

Ce nettoyage a commencé plus tôt dans l'année. La page [« Deprecated Standalone Tools »](https://help.runwayml.com/hc/en-us/articles/40213860628371-Deprecated-Standalone-Tools), mise à jour le 5 août 2026, liste tout ce qui a disparu et par quoi le remplacer. On y apprend par exemple que la page All Tools a été supprimée le 10 avril 2026, que l'interpolation d'images renvoie vers l'app Animate Keyframes, et que l'ancien Lip Sync a été remplacé par Act-Two le 27 mai 2026.

![Tableau officiel des outils retirés par Runway, avec Gen-3 Alpha et Gen-3 Alpha Turbo remplacés par les modèles vidéo actuels](/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/workflow-2.webp)

*Capture de la page « Deprecated Standalone Tools » du centre d'aide Runway, faite le 6 octobre 2026. Les dates de retrait de Gen-3 Alpha (8 juillet 2026) et Gen-3 Alpha Turbo (30 juillet 2026) figurent sur la page dédiée au modèle.*

Côté abonnement, deux changements comptent pour toi. Le plan Unlimited n'est plus proposé depuis le 1er juin 2026, remplacé par la formule Max. Les anciens abonnés Unlimited le gardent jusqu'au 30 novembre 2026, puis basculent sur Max au même prix mensuel, selon [l'article d'aide sur la transition](https://help.runwayml.com/hc/en-us/articles/52068047744019-Unlimited-plan-is-switching-to-Max). Et un mode de génération sans crédits, appelé Unlimited Mode, existe sur les plans Pro et Max, mais seulement sur certains modèles, avec une file plus lente et moins de rendus simultanés.

Pour quelqu'un qui anime des images fixes, je trouve l'échange plutôt favorable. Gen-4.5 accepte plus de formats, plus de durées et un prompt de mouvement plus fin. Il faut juste réapprendre les réglages et refaire ses calculs de crédits.

## Gen-4.5 en image vers vidéo : les réglages qui comptent

La fiche technique publiée sur [la page d'aide officielle de Gen-4.5](https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5) tient en dix lignes, et presque chacune change quelque chose à ta façon de travailler.

![Fiche technique officielle de Runway Gen-4.5 : 12 crédits par seconde, durées de 2 à 10 secondes, sortie 720p, 24 ou 25 images par seconde](/images/blog/tutoriel-runway-gen-3-animer-image-fixe-plan-film/workflow-1.webp)

*Capture de la page « Creating with Gen-4.5 » du centre d'aide Runway, faite le 6 octobre 2026.*

Le modèle est accessible à partir du plan **Standard**. Il coûte **12 crédits par seconde** de vidéo, en texte vers vidéo comme en image vers vidéo. La durée se règle **de 2 à 10 secondes**. La sortie est en **720p**, à **24 ou 25 images par seconde** (le choix se fait dans les réglages avancés). Il tourne sur la version web.

En image vers vidéo, six formats sont proposés : 16:9 en 1280x720, 9:16 en 720x1280, 1:1 en 960x960, 4:3 en 1104x832, 3:4 en 832x1104 et 21:9 en 1584x672. Le texte vers vidéo, lui, ne sort qu'en 16:9. Par défaut, le format s'adapte à ton image d'entrée ; si tu en choisis un autre, Runway recadre ton image. Garde ce détail en tête, parce qu'un recadrage automatique peut couper le haut d'un visage que tu avais soigneusement placé.

Deux options de sortie méritent d'être connues. La première, c'est l'upscale en 4K après génération, inclus dans les formules payantes. La seconde, c'est l'export en **ProRes** ou en **séquence PNG**, choisi au moment de la génération, réservé aux plans Max, Unlimited (Legacy) et Enterprise, et facturé **5 crédits par seconde** en plus du coût de base. Pour un plan qui part à l'étalonnage, c'est la seule façon d'éviter une compression de plus entre Runway et ton logiciel de montage.

> 💡 **Le cut de Frank :** règle la cadence avant de générer. Si ton projet est en 25 images par seconde, pour une diffusion européenne par exemple, demande du 25 dès le départ. Convertir un plan IA de 24 à 25 après coup ajoute exactement le genre de micro-saccade que tu cherches à éviter.

Et Gen-4, alors ? Il est toujours là, avec son petit frère Gen-4 Turbo, mais [la page d'aide de Gen-4](https://help.runwayml.com/hc/en-us/articles/37327109429011-Creating-with-Gen-4) porte un bandeau qui le classe dans les modèles de génération précédente. Gen-4 coûte aussi 12 crédits par seconde. Gen-4 Turbo descend à **5 crédits par seconde**, en clips de 5 ou 10 secondes, avec une image d'entrée obligatoire et un prompt limité à 1 000 caractères. C'est encore un excellent outil de brouillon, j'y reviens plus bas.

## Combien de plans tu sors vraiment avec ton abonnement

Les tarifs ci-dessous viennent de [la page des prix de Runway](https://runway.com/pricing), consultée le 6 octobre 2026, en dollars et hors taxes. Le calcul des plans est le mien : il divise simplement les crédits mensuels par le coût d'un clip de 5 secondes, soit 60 crédits en Gen-4.5 et 25 crédits en Gen-4 Turbo.

| Formule | Prix mensuel (annuel) | Crédits | Clips Gen-4.5 de 5 s | Clips Gen-4 Turbo de 5 s | À savoir |
| --- | --- | --- | --- | --- | --- |
| Free | 0 $ | 125, une seule fois | aucun (Gen-4.5 demande Standard) | non précisé | pour découvrir l'interface |
| Standard | 15 $ (12 $) | 625 par mois | 10 | 25 | sans filigrane, upscale 4K |
| Pro | 35 $ (28 $) | 2 250 par mois | 37 | 90 | upscale 4K illimité, Unlimited Mode sur certains modèles |
| Max | 95 $ (76 $) | 9 500 par mois | 158 | 380 | report d'un mois de crédits, ProRes et HDR |

Regarde la ligne Standard avec un œil de monteur. Dix clips de 5 secondes, c'est 50 secondes de matière brute par mois. Si tu gardes un rendu sur trois, ce qui est déjà un bon ratio sur des plans exigeants, tu obtiens une quinzaine de secondes utilisables. Assez pour un teaser, très loin d'un court-métrage.

Un point de la politique de remboursement change aussi la façon de travailler. D'après [l'article d'aide sur les crédits](https://help.runwayml.com/hc/en-us/articles/34266159290003-Can-I-have-credits-refunded), les crédits ne sont rendus automatiquement qu'en cas d'erreur de génération. Un rendu terminé mais raté, qui ne respecte pas ton prompt ou déforme ton personnage, est consommé. Chaque essai coûte. C'est la meilleure raison de préparer ta source avant de lancer quoi que ce soit.

Si tu compares avec la concurrence avant de t'abonner, j'ai mis les deux moteurs face à face sur des plans d'action dans [mon comparatif Pika Labs contre Runway](/blog/pika-labs-vs-runway-choisir-moteur-plan-action). Et pour le choix entre les modèles de Google et de Kuaishou, l'approche plan par plan est détaillée dans [mon article Kling ou Veo 3](/blog/kling-vs-veo-3-choisir-par-plan).

## Préparer l'image source comme un plan tourné

Runway le dit lui-même dans son [guide de prompt image vers vidéo](https://help.runwayml.com/hc/en-us/articles/48324313115155-Image-to-Video-Prompting-Guide) : ton image sert de première image à la vidéo, et les défauts visuels qu'elle contient, mains floues ou visages approximatifs, risquent d'être amplifiés une fois animés. Le modèle n'invente pas une structure propre à partir d'une base fragile.

Traite ton image comme un plateau. Avant de l'envoyer, je vérifie quatre choses :

- **La séparation des plans.** Premier plan, sujet, fond. Si tout est au même niveau de détail, le modèle hésite sur ce qui doit bouger et la parallaxe devient incohérente.
- **Les zones qui cassent.** Doigts collés, mèches de cheveux fondues dans le décor, dents floues, petit texte sur une enseigne, reflets contradictoires dans une vitre. Ce sont elles qui explosent en premier.
- **La lumière.** Une source de lumière lisible et cohérente donne au modèle une logique d'ombres à suivre quand la caméra bouge.
- **Le mouvement implicite**, le point le moins connu, que Runway documente dans la FAQ du guide. Une image qui contient du flou de bougé, de la poussière soulevée ou une pose en pleine action suggère déjà un mouvement. Si ton prompt demande l'inverse, une voiture garée et immobile alors que l'image montre un nuage de poussière derrière elle, le modèle se bat contre l'image. La solution proposée par Runway : retirer ces indices de mouvement dans l'image avant de générer.

Pour une première série de tests, choisis une composition simple. Plus il y a d'éléments fins en mouvement, feuillage, foule, pluie, plus la probabilité d'artefact grimpe. Tu complexifieras quand tu sauras ce que ton image supporte.

Si cette image fait partie d'une séquence, vérifie aussi qu'elle raccorde avec ses voisines avant de l'animer : même direction de lumière, même focale ressentie, mêmes costumes. Un plan animé parfait qui ne raccorde pas finit à la poubelle. J'ai rassemblé les pièges les plus fréquents dans [mon guide sur les erreurs de raccord en film IA](/blog/film-ia-erreurs-raccord-incoherences-visuelles-eviter).

## Écrire un prompt de mouvement que Gen-4.5 comprend

Le réflexe de débutant, c'est de redécrire l'image. « Une femme en ciré jaune sur un quai de port à l'aube, brume, caisses bleues. » Le modèle voit déjà tout ça. Ce qu'il ne voit pas, c'est ce qui doit se passer.

Le guide officiel est net là-dessus : un bon prompt image vers vidéo parle presque exclusivement de mouvement. Runway le découpe en cinq composantes : l'action du sujet, le mouvement de l'environnement, le mouvement de caméra, le style et le rythme du mouvement, la direction et la vitesse. Tu n'as pas besoin des cinq à chaque fois. Le conseil de Runway, que je partage, est de commencer par la ou les deux composantes critiques et d'ajouter du détail seulement si le résultat le demande.

Pour les débutants, Runway propose une structure simple :

`The camera [mouvement de caméra] as the subject [action]. [Descriptions complémentaires]`

Sur l'image du quai, ça donne par exemple : *The camera slowly pushes in as the woman lowers the photograph. Mist drifts across the harbour. Natural handheld feel, very subtle.* Une intention de caméra, une action, un mouvement d'ambiance, un style. Rien de contradictoire.

Gen-4.5 sait aussi suivre des enchaînements. La page d'aide du modèle insiste sur sa capacité à exécuter des instructions séquencées, et le guide de prompt décrit deux façons de le faire : en langage naturel (« X se produit, puis Y, enfin Z ») ou avec des repères temporels du type `[00:01] X occurs. [00:03] Y occurs.` Attention à la durée : trois actions dans un clip de 3 secondes, c'est la garantie d'un plan bousculé. Pour une séquence d'actions, monte la durée.

Il y a des cas où décrire le visuel reste utile, et le guide les liste : faire entrer un élément absent de l'image, provoquer un changement radical par rapport à l'image de départ, préciser une transformation, ou décrire une interaction entre deux éléments. En dehors de ces cas, reste sur le mouvement.

| Type de plan | Intention | Prompt de départ | Risque fréquent | Correction prioritaire |
| --- | --- | --- | --- | --- |
| Portrait émotionnel | renforcer la présence | slow subtle push-in, subject stays still | visage qui se déforme | durée courte, amplitude réduite |
| Plan d'ambiance | donner vie au décor | gentle lateral drift, mist moving slowly | parallaxe incohérente | simplifier les plans de profondeur dans la source |
| Insert objet | accent narratif | slow rack focus toward the object | contours qui ondulent | renforcer la netteté locale de la source |
| Plan de tension | instabilité contrôlée | subtle handheld shake, slow push-in | artefacts en bord de cadre | limiter le tremblé et la durée |
| Transition | relier deux scènes | camera slowly tilts up to the sky | coupe parasite dans le clip | allonger la durée ou simplifier le prompt |

Pour aller plus loin sur l'écriture, j'ai compilé des formulations de plans qui fonctionnent dans [ma bibliothèque de prompts cinéma](/blog/bibliotheque-prompts-cinema-plans-types). Les mouvements de caméra s'y transposent directement à Gen-4.5.

## La méthode en passes : brouillon, plan, finition

Un rendu terminé est payé, même raté. Inutile donc de viser le plan final au premier essai : j'avance par passes, en changeant une seule variable à la fois.

### Passe 1 : tester l'intention avec un modèle moins cher

Runway recommande lui-même, sur la page de Gen-4, de tester d'abord en Gen-4 Turbo puis de passer au modèle supérieur si besoin. Le raisonnement vaut encore avec Gen-4.5. Un clip Turbo de 5 secondes coûte 25 crédits contre 60 en Gen-4.5. Tu t'en sers pour vérifier une seule chose : est-ce que ton image supporte le mouvement prévu ? Si le visage fond déjà en Turbo sur un push-in léger, retourne retoucher l'image avant de dépenser 60 crédits.

Si tu es sur un plan Pro ou Max et que le modèle que tu vises apparaît dans l'Unlimited Mode, c'est le moment de l'utiliser. Le bouton en haut à droite de la session affiche « Unlimited ∞ » quand le mode est actif. Plus lent, mais gratuit en crédits.

### Passe 2 : le plan en Gen-4.5, sobre et court

Une fois l'intention validée, passe en Gen-4.5. Choisis la durée la plus courte qui contient ton action. Le modèle accepte 2 secondes, et pour un insert ou un portrait, 3 ou 4 secondes suffisent largement. Un mouvement, une amplitude modérée. Si ça casse, n'ajoute rien : baisse l'amplitude, raccourcis, relance.

Tiens un mini journal à côté. Nom de version, intention, réglages, défaut principal. Trois lignes par essai. Le jour où un client demande une retouche sur un plan validé trois semaines plus tôt, ce journal t'évite de repartir à l'aveugle.

### Passe 3 : allonger ou enrichir, seulement si les deux premières tiennent

Pour un plan plus long que 10 secondes, Runway documente une technique simple dans son guide : place la tête de lecture sur la dernière image du clip, clique sur **Use**, puis **Use current frame**. Cette image devient l'entrée d'une nouvelle génération. Tu raccordes ensuite les deux clips dans ton logiciel de montage en supprimant l'image en double.

C'est puissant, et c'est aussi là que la dérive s'accumule. Chaque prolongation hérite des petites erreurs de la précédente. Au-delà de deux prolongations, je repars généralement d'une image source retravaillée plutôt que d'empiler.

Pour un plan qui part d'une image précise et arrive sur une autre image précise, passe par l'app Animate Frames, le remplaçant officiel des Keyframes de Gen-3.

> 💡 **Le cut de Frank :** un plan de 3 secondes propre bat toujours un plan de 8 secondes qui se dégrade. Coupe avant la dérive. Au montage, personne ne te reprochera un plan court.

## Valider le plan dans la timeline, pas dans la preview

La preview de Runway est flatteuse. Fond sombre, lecture en boucle, aucun plan avant ni après. Un plan s'y regarde comme un objet isolé, alors qu'au cinéma il ne vit qu'en séquence.

Dès la passe 2, je place le rendu entre ses vrais voisins dans la timeline. Les défauts de mouvement se voient rarement au centre du plan : ils apparaissent aux coupes, quand le mouvement du plan précédent ne prolonge pas celui-ci, ou quand le dernier tiers du clip commence à flotter.

Ensuite, je passe quatre contrôles :

1. La durée réelle. Ajuste-la selon la tenue du plan, pas selon ton intention de départ. Beaucoup de plans IA sont excellents sur 3 secondes et fragiles au-delà.
2. Le plein écran, puis le téléphone. La compression d'une plateforme de diffusion fait ressortir des contours qui tremblent et que ton écran de travail masquait.
3. Le son : une ambiance, une respiration, un impact léger. Un mouvement imparfait passe souvent mieux avec un son juste, et un plan visuellement correct paraît faux dans le silence. Mon [guide voix off et doublage IA](/blog/doublage-voix-off-cloner-diriger-voix-film) couvre cette couche.
4. La relecture à froid. Reviens quelques heures plus tard, regarde la séquence sans t'arrêter et note les trois moments où ton œil sort de l'histoire. Ils pointent presque toujours un mouvement trop poussé ou un plan trop long.

Pour l'intégration couleur et grain avec des plans tournés ou d'autres moteurs, la méthode complète est dans [mon guide de montage vidéo assisté par IA](/blog/guide-complet-montage-video-assiste-intelligence-artificielle).

## Trois cas concrets et ce qu'ils enseignent

Premier cas, une transition entre deux scènes. Il faut un plan passerelle entre un intérieur calme et une rue de nuit tendue. Plutôt que de tourner un plan de plus, on anime une image fixe de seuil de porte avec un drift latéral lent et une lumière qui change à peine. La première version en 8 secondes s'effondre dans son dernier tiers. La version retenue fait 4 secondes, même prompt, et le passage se fait sans rupture de rythme. Le prompt n'a pas bougé d'un mot entre les deux versions, seule la durée a changé.

Deuxième cas, un portrait pour un teaser. L'image source est forte, mais chaque mouvement ambitieux déforme les traits. Le prompt final tient en une ligne : un push-in très lent, sujet immobile, un léger mouvement de cheveux. Trois secondes. Le plan renforce la présence du personnage au lieu d'attirer l'œil sur des artefacts.

Le troisième cas, un plan urbain avec beaucoup de profondeur, demande plus d'essais. Les premiers rendus font glisser les lignes d'architecture les unes sur les autres. On a d'abord simplifié l'image source en adoucissant les détails du fond, puis réduit la vitesse demandée. En post, une harmonisation du grain finit l'intégration.

Dans les trois cas, le plan gardé est le plus sobre de la série. Au montage, personne ne remarque qu'ils viennent d'une image fixe.

Je reviens sur ce point en vidéo sur ma chaîne Business Dynamite.

[Voir l'explication en vidéo](https://www.youtube.com/watch?v=TBBkUSFAGSU)

## Dépannage : les erreurs les plus fréquentes et leur correction

**Le modèle n'apparaît pas dans le sélecteur.** Si tu cherches Gen-3, il a été retiré. Si tu cherches Gen-4.5, vérifie ta formule : il faut au minimum Standard. Sur la version web, tape « Gen-4.5 » dans la recherche de la vue Apps, ou passe par le sélecteur de modèle du mode Tool avec l'onglet Video actif.

**Le mouvement est trop agressif et le plan se déforme en fin de clip.** Réduis l'amplitude dans le prompt (« very subtle », « slowly »), raccourcis la durée, garde une seule intention de caméra.

**Le visage ou les mains fondent.** Retravaille la source sur ces zones avant toute nouvelle génération. Puis refais une passe avec un mouvement minimal pour vérifier que le sujet tient.

**Le mouvement obtenu contredit celui demandé.** Cherche les indices de mouvement implicites dans ton image : flou de bougé, poussière, pose en pleine action, lignes de fuite fortes. Retire-les ou choisis un mouvement qui va dans leur sens.

**Une coupe parasite apparaît au milieu du clip.** Le guide de prompt de Runway rattache ce défaut à la combinaison image et prompt. En pratique, je simplifie le prompt, je retire les enchaînements trop nombreux et j'allonge un peu la durée si j'ai demandé plusieurs actions.

**L'image est recadrée de façon inattendue.** Le format de sortie s'aligne par défaut sur ton image. Si tu l'as changé, Runway recadre. Prépare ton image directement dans l'un des six formats acceptés.

**Les crédits fondent sans résultat utilisable.** Arrête de générer, reviens à la source. Fixe-toi un maximum de trois à cinq essais par plan avec une variable modifiée à chaque fois, et teste en Gen-4 Turbo ou en Unlimited Mode quand c'est possible.

**L'export final laisse voir des artefacts.** Vérifie ta chaîne d'export. Sur Max, l'option ProRes au moment de la génération supprime une étape de compression.

## FAQ : animer une image fixe avec Runway en 2026

### Runway Gen-3 est-il encore disponible ?

Non. D'après le centre d'aide de Runway, Gen-3 Alpha a été retiré le 8 juillet 2026 et Gen-3 Alpha Turbo le 30 juillet 2026. Les fonctions qui en dépendaient, Camera Control, Expand Video, Act-One sur Gen-3 ou Keyframes sur Gen-3, ont disparu avec eux. Runway oriente vers Gen-4.5 pour l'image vers vidéo et le texte vers vidéo, vers l'app Animate Frames pour les images clés, et vers Edit Studio Aleph 2.0 pour la transformation de vidéo. Les tutoriels qui parlent encore de Gen-3 restent utiles pour la logique de travail, mais leurs réglages et leurs coûts ne correspondent plus à l'outil actuel.

### Combien coûte un plan de 5 secondes avec Gen-4.5 ?

Gen-4.5 consomme 12 crédits par seconde, donc 60 crédits pour un clip de 5 secondes, en image vers vidéo comme en texte vers vidéo. Avec la formule Standard à 15 dollars par mois (625 crédits), cela représente une dizaine de clips mensuels. Pro donne 2 250 crédits, Max 9 500. Ajoute 5 crédits par seconde si tu choisis l'export ProRes ou séquence PNG, réservé aux plans Max, Unlimited (Legacy) et Enterprise. Retiens surtout que les crédits ne sont rendus qu'en cas d'erreur technique : un rendu terminé mais raté est consommé, d'où l'intérêt de tester ton mouvement avant de viser le plan définitif.

### Quelle durée choisir pour un plan animé à partir d'une image fixe ?

Gen-4.5 accepte de 2 à 10 secondes. Pour un portrait, un insert ou un plan d'ambiance, je vise 3 à 4 secondes : c'est la zone où la stabilité est la meilleure et où le plan s'insère facilement au montage. Au-delà, la dérive augmente, surtout sur les visages, les mains et les fonds détaillés. Une durée plus longue se justifie quand ton prompt enchaîne plusieurs actions, parce que le modèle a besoin de temps pour les dérouler. Dans tous les cas, c'est la tenue du plan qui fixe la durée finale, pas ton intention de départ. Coupe avant la dégradation.

### Pourquoi mes mains et mes visages se déforment-ils dans Runway ?

Parce que ce sont les zones les plus fragiles pour un modèle vidéo et que Runway part de ton image comme première image. Le guide officiel le dit clairement : les défauts visuels de la source, mains ou visages flous, peuvent être amplifiés à l'animation. Vérifie d'abord ta base : doigts distincts, contours nets, lumière lisible. Ensuite, réduis l'amplitude du mouvement et évite de cumuler plusieurs intentions de caméra. Fais une passe avec un mouvement minimal pour confirmer que le sujet tient, puis seulement ajoute de la vie. Cette progression règle la grande majorité des déformations que je vois passer.

### Faut-il encore utiliser Gen-4 ou Gen-4 Turbo ?

Oui, comme outil de brouillon. Runway classe Gen-4 dans la génération précédente, mais les deux modèles restent disponibles. Gen-4 Turbo coûte 5 crédits par seconde, soit 25 crédits pour 5 secondes, contre 60 en Gen-4.5, et Runway recommande lui-même de tester en Turbo avant de monter en gamme. Je m'en sers pour vérifier qu'une image supporte un mouvement donné. Un visage qui fond déjà en Turbo t'envoie retravailler la source. Pour le plan final, Gen-4.5 donne un meilleur suivi du prompt et des formats plus variés. Note que Gen-4 exige une image d'entrée et limite le prompt à 1 000 caractères.

### Comment obtenir un plan plus long que 10 secondes ?

Runway documente la méthode dans son guide de prompt image vers vidéo. Place la tête de lecture sur la toute dernière image du clip terminé, clique sur Use puis sur Use current frame : cette image devient l'entrée d'une nouvelle génération. Tu assembles ensuite les deux clips dans ton logiciel de montage et tu supprimes l'image partagée. La limite, c'est l'accumulation : chaque prolongation hérite des petites dérives de la précédente. Au-delà de deux enchaînements, repars plutôt d'une image source retravaillée. Et si tu veux aller d'une image précise à une autre, utilise l'app Animate Frames, prévue pour ça.

### Que deviennent les abonnés au plan Unlimited ?

Le plan Unlimited n'est plus vendu depuis le 1er juin 2026. Les abonnés existants le conservent jusqu'au 30 novembre 2026. À cette date, les abonnements mensuels basculent automatiquement sur Max au même prix de 95 dollars par mois, sauf résiliation. Les abonnés annuels peuvent choisir en novembre entre un remboursement des mois restants et un bonus de crédits pour migrer vers Max. Max ne comprend pas l'ancien Explore Mode, mais donne 9 500 crédits mensuels avec un mois de report. À ne pas confondre avec l'Unlimited Mode, un mode de génération sans crédits proposé sur Pro et Max pour certains modèles.

### Comment intégrer un plan Runway avec des plans tournés ?

Par la cohérence de rythme, de texture et de mouvement. Place le plan animé dans la vraie timeline dès les premiers essais et ajuste sa durée pour qu'il respire avec ses voisins. Génère dans la cadence de ton projet, 24 ou 25 images par seconde, pour éviter une conversion après coup. En postproduction, harmonise couleur et grain pour rapprocher les signatures visuelles, et si ton plan Max le permet, demande un export ProRes pour garder de la latitude à l'étalonnage. Le son fait le reste : une ambiance commune entre le plan tourné et le plan généré lisse la transition mieux que n'importe quel effet.

{/* PUBLICATION DATE: 2026-04-18 */}
