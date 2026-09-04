---
title: "Erreurs de film IA : les leçons de mes 3 premiers films"
date: "2026-09-04"
category: "analyses"
excerpt: "Ronces, VOIDBORN, Lost Garden : les six erreurs qui m'ont coûté le plus de temps sur mes trois premiers films IA, et ce que je fais autrement depuis."
thumbnail: "/images/blog/erreurs-premiers-films-ia-lecons/hero.webp"
metaTitle: "Erreurs de film IA : le retour d'expérience de Frank Houbre"
metaDescription: "Les erreurs de mes trois premiers films IA, Ronces, VOIDBORN et Lost Garden : écriture, coût à la seconde, bible, montage, festivals, publication."
tags: ["erreurs film ia", "court métrage ia", "retour d'expérience", "production ia", "frank houbre"]
author: "Frank Houbre"
published: true
---

# Erreurs de film IA : les leçons de mes 3 premiers films

Tu relances la même génération depuis deux heures. Tu changes un mot du prompt, tu baisses un curseur, tu recommences. Et le plan ne sort toujours pas, parce qu'il était impossible depuis le début : tu l'as écrit avant de savoir ce que les moteurs savent produire.

Les erreurs qui coûtent vraiment cher sur un film IA se voient rarement à l'image. Elles vivent en amont, dans une décision prise trop tôt ou jamais prise.

J'ai fait trois projets avant d'accepter ça. Un court métrage, un animé, puis une série. À chaque fois j'ai cru que le problème venait de l'outil, du prompt, du modèle du moment. Six erreurs sont revenues d'un projet à l'autre, et aucune ne se joue dans le prompt.

![Projection test d'un film IA sur un mur d'appartement, le réalisateur observe les réactions de deux spectateurs](/images/blog/erreurs-premiers-films-ia-lecons/hero.webp)

## Les trois projets, et le mur que chacun m'a mis

Trois formats différents, trois manières de casser. Aucun des trois ne m'a appris la même chose.

| Projet | Format | Ce que j'ai validé | Ce qui a cassé |
| --- | --- | --- | --- |
| [Ronces](/blog/ronces-coulisses-court-film-ia) | Court métrage, moins de deux minutes, sans personnage visible | Qu'une intention narrative tient sur la durée d'un court, et qu'un moteur par type de plan vaut mieux qu'un moteur pour tout | L'écriture, faite avant de savoir ce que les moteurs sortent vraiment |
| [VOIDBORN](/blog/voidborn-anime-ia-festival-coulisses) | Animé, sélections et prix en festivals | Qu'un jury évalue le film et pas la technique | Une première version réaliste entièrement jetée avant de basculer vers le style animé |
| [Lost Garden](/blog/lost-garden-journal-production-serie-ia) | Série animée, épisode 1 *The Awakening of the Lantern Knight* | Qu'une bible écrite avant la première image fait gagner plus de temps qu'elle n'en coûte | La reproductibilité : revenir six semaines plus tard sur un décor déjà validé |

Si tu cherches la check-list technique de continuité, la veste qui change de texture, la lumière qui pivote, le raccord regard qui ne tient pas, elle est dans [mon guide sur les erreurs de raccord dans un film IA](/blog/film-ia-erreurs-raccord-incoherences-visuelles-eviter). Ici je parle des décisions de production qui rendent ces erreurs possibles.

## Erreur 1 : j'ai écrit sans savoir ce que la machine sait fabriquer

Sur VOIDBORN, la première version était réaliste. Personnages en chair, environnements quasi photographiques, tentative de cinématique d'action. Je l'ai jetée. Les corps humains en mouvement complexe et la cohérence de visage sur plusieurs plans étaient précisément les zones où les modèles lâchaient, et j'avais construit tout le film dessus.

Basculer vers un style animé stylisé a sauvé le film. Mais j'avais déjà brûlé des semaines à écrire pour un rendu que je n'obtiendrais pas.

Le vrai problème, c'est qu'on écrit avec les réflexes du tournage. Un plan-séquence de vingt secondes, sur un plateau, c'est une question de répétition et de chorégraphie. En génération, c'est une contrainte technique dure. Un exemple, à la date où j'écris : la [documentation de l'API Gemini pour Veo](https://ai.google.dev/gemini-api/docs/veo) liste trois durées possibles, 4, 6 ou 8 secondes, et impose 8 dès qu'on utilise l'extension, des images de référence ou une résolution supérieure. Les formats se limitent au 16:9 et au 9:16. Chez [fal, la fiche de Kling v3 Pro](https://fal.ai/models/fal-ai/kling-video/v3/pro/text-to-video) accepte des durées de 3 à 15 secondes. Ces valeurs se lisent dans la documentation en cinq minutes.

Ça change la façon d'écrire une scène. Ton découpage doit exister en blocs qui rentrent dans ces fenêtres, avec des points de coupe prévus, ou tu passeras ton temps à recoller à la main ce que tu aurais pu écrire proprement.

> 💡 **Le cut de Frank :** avant d'écrire la scène 1, génère cinq plans témoins sur ton sujet réel, pas sur une image de démo. Le plus difficile, le plus banal, un mouvement de caméra, un visage, une transition. Tu sauras en une heure ce que ton scénario a le droit de contenir.

## Erreur 2 : je comptais en plans, la facture compte en secondes

Sur un tournage, la seconde de rushes ne coûte rien une fois l'équipe sur place. Le coût est dans la journée. En génération, c'est l'inverse exact, et j'ai mis un projet entier à intégrer ce renversement.

La facturation à la seconde est publique et vérifiable. Sur la fiche fal de Kling v3 Pro, chaque seconde générée est facturée 0,112 dollar sans audio, 0,168 dollar avec audio, et 0,196 dollar si le contrôle de voix est activé. La page donne son propre exemple : une vidéo de 5 secondes avec audio et contrôle de voix revient à 0,98 dollar.

![Capture de la fiche fal.ai du modèle Kling v3 Pro affichant la facturation à la seconde d'une génération vidéo IA](/images/blog/erreurs-premiers-films-ia-lecons/workflow-1.webp)

*Capture de fal.ai, page du modèle fal-ai/kling-video/v3/pro/text-to-video, le 4 septembre 2026. Le bloc de droite détaille le prix à la seconde selon que l'audio et le contrôle de voix sont activés.*

Un dollar le plan, ça paraît indolore. Sauf qu'un plan validé, ce n'est jamais une génération. C'est six, huit, parfois quinze essais avant celui qu'on garde, et la variation entre deux essais reste imprévisible sur certains sujets. Multiplie par le nombre de plans d'un court, ajoute les plans que le montage éliminera, et le budget réel n'a plus rien à voir avec l'addition que tu avais faite dans ta tête.

Ce que je fais maintenant : je fixe un plafond d'essais par plan avant de commencer, en général six, et quand je l'atteins je change de stratégie au lieu de relancer. Soit je réécris le plan, soit je change de moteur, soit j'accepte que ce plan n'existe pas et je le remplace au découpage. J'ai détaillé la méthode de chiffrage complète dans [combien coûte un court métrage IA en 2026](/blog/combien-coute-court-metrage-ia-2026).

> 💡 **Le cut de Frank :** note le nombre d'essais réels par plan dans un tableur pendant tout le projet. Au bout de trois semaines, tu sauras quels types de plans te ruinent, et tu arrêteras de les écrire.

## Erreur 3 : j'ai gardé mes décisions dans ma tête

Sur Ronces, le décor principal dérivait d'une génération à l'autre. La surface du béton, l'angle de lumière, la densité des ombres. J'ai fini par tenir une fiche par décor, avec sa description de texture, de lumière et d'angle, que je relisais avant chaque génération. Ça a marché. Sauf que je l'ai construite en cours de route, après avoir déjà perdu des plans.

Sur un court, ta tête suffit presque. Trois semaines de production, tu te souviens de tes choix. Sur Lost Garden, la mémoire n'a pas tenu deux épisodes : rouvrir un dossier vieux de six semaines et devoir régénérer un personnage validé, dans une lumière calée, avec un outil peut-être mis à jour entre temps, c'est le moment où la plupart des séries IA s'arrêtent.

Ce qui les tue est rarement la qualité du premier plan. C'est l'impossibilité de le reproduire.

Alors j'ai inversé l'ordre : la bible avant la première image. Une fiche par personnage écrite en langage de prompt, une fiche par décor avec la source de lumière dominante et sa direction, une palette verrouillée en références visuelles, un langage caméra assumé, et les règles de raccord. Chaque ligne doit être actionnable. « Ambiance mélancolique » ne sert à rien le jour où tu régénères. « Lumière unique par le bas, source chaude, contre-jour bleu, jamais de fill frontal » sert tous les jours.

Le détail complet de cette bible et de ce qu'elle contient est dans le [journal de production de Lost Garden](/blog/lost-garden-journal-production-serie-ia).

## Erreur 4 : j'ai laissé le montage réparer ce que l'écriture aurait dû trancher

Ronces dure moins de deux minutes. J'aurais pu tirer vers quatre ou cinq. J'ai resserré, et le montage a éliminé des plans que j'aimais bien parce qu'ils ralentissaient le rythme.

Sur le moment j'ai vécu ça comme une bonne décision de montage. Avec le recul c'est surtout un aveu : ces plans n'auraient jamais dû être générés. Chacun m'a coûté des essais, du temps de tri, de l'étalonnage, et il a fini à la poubelle parce que la question de son utilité narrative n'avait pas été posée à l'écriture.

La génération rend la matière facile à obtenir, et c'est exactement ce qui rend le tri difficile. Quand produire un plan supplémentaire coûte trois minutes d'attente, on en produit. On se dit qu'on verra au montage. Puis on se retrouve avec quatre-vingts plans pour un film qui en demande trente, et l'énergie qui aurait dû aller dans la finition part dans l'arbitrage.

Ma règle depuis : chaque plan du découpage doit répondre à une question écrite en une phrase avant sa première génération. Qu'est-ce que le spectateur comprend ou ressent après ce plan qu'il ne comprenait pas avant. Si je n'arrive pas à écrire la phrase, le plan saute avant de coûter quoi que ce soit.

## Erreur 5 : j'ai montré le film beaucoup trop tard

Les trois projets ont eu le même défaut de méthode. J'ai travaillé seul jusqu'à un état quasi final, puis j'ai montré.

Le problème est mécanique. Quand tu as regardé tes propres plans deux cents fois, tu ne vois plus ce qu'un spectateur voit à la première seconde. Tu vois ce que tu as corrigé. Le raccord que tu as bricolé pendant deux heures te saute aux yeux, et il ne saute aux yeux de personne d'autre. À l'inverse, la chose qui décroche vraiment le spectateur est souvent quelque chose que tu ne regardes plus depuis longtemps : un rythme d'ouverture trop lent, une intention qui n'arrive pas, un son qui ne dit pas où on est.

Ce que je fais maintenant tient en trois projections. Une sur le premier bloc monté, même moche, même sans son. Une à mi-parcours. Une avant verrouillage. Deux ou trois personnes, chez moi, sur un mur. Je ne regarde pas l'image pendant la projection, je regarde leurs visages et je note à quelle seconde ils décrochent.

Une seule question après : raconte-moi ce que tu as vu. S'ils racontent autre chose que le film, ce n'est pas eux qui ont mal regardé.

> 💡 **Le cut de Frank :** ne demande jamais « tu as aimé ». Demande « à quel moment tu as décroché ». La première question appelle de la politesse, la seconde appelle une seconde précise.

## Erreur 6 : j'ai traité la diffusion comme une étape d'après

Celle-là est la plus bête, parce qu'elle ne demande aucun talent pour être évitée. Juste de lire avant.

Côté festivals, les règles de soumission demandent souvent des choses qui se décident à la production. Le [Korea International AI Film Festival](https://filmmakers.festhome.com/en/festival/korea-international-ai-film-festival-kaiff), par exemple, exige que la technologie IA employée, sa proportion et le domaine où elle intervient soient décrits dans le formulaire de candidature. Il impose une durée sous les 30 minutes et des sous-titres anglais dès qu'il y a de la narration ou du dialogue.

Décrire la part d'IA de son film demande d'avoir tracé ce qu'on a utilisé, plan par plan, pendant la production. Reconstituer ça après coup sur un projet de trois mois est un cauchemar. VOIDBORN a tourné dans plusieurs sélections, du Seoul International AI Film Festival au Hollywood Indie Festival en passant par l'Australian AI Festival, et j'ai eu besoin de ces informations à chaque fois.

Côté plateformes, la même logique. YouTube demande de signaler les contenus d'IA générative dans trois cas précis : quand on fait dire ou faire quelque chose à une personne réelle qu'elle n'a pas dit ni fait, quand les images d'un événement ou d'un lieu réel sont modifiées, et quand une scène d'apparence réaliste est générée alors qu'elle n'a jamais eu lieu.

![Capture de la page d'aide YouTube expliquant dans quels cas signaler un contenu généré par IA générative](/images/blog/erreurs-premiers-films-ia-lecons/workflow-2.webp)

*Capture de support.google.com, page « Signaler l'utilisation de contenus d'IA générative », le 4 septembre 2026. Le paramètre « Utilisation de l'IA » se trouve dans YouTube Studio.*

Ce que beaucoup ratent, c'est l'autre moitié de la page. Le contenu manifestement irréaliste ou fantastique n'a pas à être signalé, et les retouches mineures non plus : filtres de beauté, réglages de couleur ou de lumière, netteté, upscaling, réparation, sous-titres. Un animé stylisé et un plan photoréaliste d'une rue existante ne tombent donc pas dans la même case. Savoir laquelle te concerne se décide au moment où tu choisis ton style, pas le jour de la mise en ligne.

## La check-list que j'applique avant de générer quoi que ce soit

Rien d'exotique là-dedans. C'est la liste des choses qui, faites en amont, m'ont épargné les six erreurs du dessus.

1. Générer cinq plans témoins sur le vrai sujet, avant d'écrire la scène 1.
2. Relever les durées et les formats réellement supportés par les moteurs retenus, et découper en conséquence.
3. Écrire la bible avant la première image : personnages, décors, palette, langage caméra, règles de raccord.
4. Fixer un plafond d'essais par plan, et une action à prendre quand il est atteint.
5. Justifier chaque plan du découpage en une phrase, sinon le couper.
6. Tenir un journal de production qui note les outils utilisés plan par plan, pour les formulaires de festivals.
7. Choisir le style en sachant dans quelle case de déclaration il fait tomber le film.
8. Trois projections test minimum, dont une très tôt.
9. Décider du format de livraison, sous-titres compris, avant le montage final.

## Ce que ce retour d'expérience ne prouve pas

Trois projets, un seul auteur. C'est un échantillon, pas une étude, et je préfère le dire avant qu'un lecteur le déduise.

Deux limites en particulier. D'abord, mes trois films sont des projets courts et solo. Une partie de ce qui m'a coûté du temps disparaît dès qu'une équipe existe, parce qu'une équipe est obligée d'écrire ses décisions pour se coordonner. C'est peut-être la vraie raison pour laquelle la bible fonctionne, et pas la magie du document en soi.

Ensuite, les contraintes techniques que je cite sont datées. Les durées, les résolutions et les prix relevés aujourd'hui sur la documentation de Veo et sur la fiche fal de Kling v3 Pro bougeront. Ce qui ne bougera pas, c'est le principe : ces contraintes existent, elles sont écrites quelque part, et les lire avant d'écrire coûte vingt minutes contre des semaines.

## FAQ

### Quelle est l'erreur la plus coûteuse sur un premier film IA ?

Écrire le film sans savoir ce que les moteurs produisent réellement sur ton sujet. C'est la seule erreur de la liste qui contamine tout le reste : un scénario calibré pour un rendu inatteignable te fait générer des centaines d'essais inutiles, gonfle la facture, allonge le montage et t'oblige à réparer en post ce qui aurait dû être décidé à l'écriture. Sur VOIDBORN, ça m'a coûté une version entière du film, abandonnée avant de basculer vers un style animé qui, lui, jouait avec les forces des modèles. La parade tient en une heure de tests réels avant la première page de scénario.

### Faut-il utiliser un seul moteur vidéo ou plusieurs sur un même film ?

Plusieurs, si le film contient des types de plans très différents. Sur Ronces, j'ai utilisé Kling pour les plans larges de végétation en mouvement, où la physique des plantes tenait mieux, et WAN pour les intérieurs à architecture figée, où la stabilité de texture comptait davantage. Le coût de cette approche est réel : deux pipelines à maîtriser, deux logiques de prompt, et un travail d'étalonnage supplémentaire pour raccorder les rendus. Sur un premier projet, un seul moteur bien maîtrisé reste plus sage. Sur le deuxième, choisir l'outil par plan plutôt que par habitude devient rentable.

### Comment estimer le budget de génération d'un court métrage IA ?

Pars de la seconde, pas du plan. Les modèles vidéo se facturent au temps généré : sur la fiche fal de Kling v3 Pro, une seconde coûte 0,112 dollar sans audio et 0,168 dollar avec audio au 4 septembre 2026. Multiplie ensuite par ton nombre d'essais réels, qui est la variable que tout le monde sous-estime. Un plan validé demande rarement une génération, souvent six à dix. Puis ajoute les plans que le montage supprimera. Un calcul honnête part donc du nombre de secondes générées sur l'ensemble du projet, pas du nombre de secondes du film fini.

### Est-ce qu'un film IA doit être signalé comme tel sur YouTube ?

Cela dépend de ce que montre le film. YouTube demande de signaler les contenus d'IA générative quand on fait dire ou faire quelque chose à une personne réelle qu'elle n'a pas dit ni fait, quand les images d'un événement ou d'un lieu réel sont modifiées, ou quand une scène d'apparence réaliste est générée alors qu'elle n'a jamais eu lieu. À l'inverse, un contenu manifestement irréaliste ou fantastique n'a pas à être signalé, pas plus que les retouches mineures comme les réglages de couleur, l'upscaling ou les sous-titres. Un animé stylisé et un plan photoréaliste d'une rue existante ne relèvent donc pas du même traitement.

### Que demandent les festivals de films IA au moment de la soumission ?

Cela varie, mais plusieurs demandent une déclaration précise de l'usage de l'IA. Le Korea International AI Film Festival exige que la technologie employée, sa proportion et le domaine où elle intervient soient décrits dans le formulaire de candidature, impose une durée sous les 30 minutes et réclame des sous-titres anglais dès qu'il y a narration ou dialogue. Ces informations se collectent pendant la production. Tenir un journal qui note les outils utilisés plan par plan transforme une soirée de reconstitution pénible en dix minutes de recopie.

### Combien de temps faut-il consacrer à la bible avant de générer ?

Sur un court métrage, une demi-journée suffit pour poser les personnages, les décors, la palette et le langage caméra. Sur une série, compte plusieurs jours et prévois de la faire vivre pendant toute la production. Le test de qualité est simple : chaque ligne doit pouvoir être recopiée dans un prompt. Une bible qui contient des impressions littéraires ne sert à rien le jour où tu régénères un plan validé six semaines plus tôt. Ajoutes-y tes ratés, avec le prompt fautif noté à côté du bon, sinon tu réécriras la formulation que tu avais écartée.

### À quel moment montrer un film IA à quelqu'un pour la première fois ?

Beaucoup plus tôt que ce que l'instinct dicte. Dès que le premier bloc est monté, même sans son et sans étalonnage. Passé quelques centaines de visionnages de tes propres plans, tu ne vois plus le film, tu vois tes corrections. Trois projections test suffisent : une très tôt, une à mi-parcours, une avant verrouillage. Regarde les visages plutôt que l'écran et note la seconde où l'attention lâche. La bonne question à poser après n'est pas « tu as aimé », mais « à quel moment tu as décroché », parce qu'elle appelle un repère précis plutôt qu'une politesse.
