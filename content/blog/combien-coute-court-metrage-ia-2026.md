---
title: "Combien coûte un court-métrage IA en 2026"
date: "2026-08-25"
category: "analyses"
excerpt: "Le vrai coût d'un court-métrage IA en 2026, poste par poste : génération, son, finition, festivals, et la variable qui fait tout basculer."
thumbnail: "/images/blog/combien-coute-court-metrage-ia-2026/hero.webp"
---

# Combien coûte un court-métrage IA en 2026

Tu as chiffré ton court-métrage comme ça : un abonnement à 35 dollars, deux mois, 70 dollars, et tu t'es dit que le cinéma venait de devenir gratuit. Puis tu as regardé ton relevé à la fin du projet, et tu as trouvé cinq lignes que tu n'avais pas vues venir.

Je ne connais personne qui ait tenu son premier budget de film IA. Moi non plus.

Le coût d'un court-métrage IA en 2026 se décide loin de la page de tarifs de ton générateur : sur le nombre de plans que tu jettes, sur le son, sur la finition, sur les frais de sortie, et sur les heures que tu ne comptes jamais. Poste par poste, avec les tarifs publics relevés le 25 août 2026, voilà ce que ça coûte vraiment et comment le chiffrer avant de lancer la première génération.

![Réalisateur discutant du budget de son court-métrage IA avec la programmatrice d'un cinéma indépendant](/images/blog/combien-coute-court-metrage-ia-2026/hero.webp)

## Les six postes qui composent vraiment le budget

Quand un producteur classique découpe un devis, il ne met pas tout dans une case « tournage ». Il sépare préparation, tournage, post, son, livraison, frais généraux. La production IA suit exactement la même logique, sauf que la plupart des gens qui s'y mettent regardent un seul poste.

Les six qui comptent :

1. **La génération d'images et de plans.** Abonnements ou API. C'est le poste visible, et souvent le plus petit.
2. **Le son.** Voix, musique, bruitage, mixage. Trois fournisseurs différents dans la plupart des projets.
3. **La finition.** Montage, étalonnage, upscaling, exports.
4. **L'infrastructure.** Stockage, sauvegarde, machine, parfois du GPU loué.
5. **La sortie du film.** Frais de festivals, sous-titrage, masters de livraison.
6. **Ton temps.** La ligne la plus chère, et la seule que personne ne facture à soi-même.

Un court de six minutes bien fini traverse les six. Un test de trente secondes n'en traverse qu'un. C'est pour ça que les chiffres qui circulent sur les forums sont inutilisables : personne ne dit ce qu'il a inclus.

> 💡 **Le cut de Frank :** avant de chiffrer quoi que ce soit, écris la durée cible et le nombre de plans du montage final. Sans ces deux nombres, tu ne chiffres rien, tu devines.

## Le taux de sélection : la variable qui multiplie tout

Sur mon premier film, j'ai budgété les plans de mon montage. J'ai payé tous ceux qu'il a fallu générer pour les trouver.

Appelons ça le taux de sélection. Si tu gardes un plan sur quatre, ton budget de génération est multiplié par quatre. Si tu gardes un plan sur huit, il est multiplié par huit. Rien d'autre dans le devis n'a ce pouvoir de levier.

Prenons un cas concret et vérifiable. Un court de six minutes, soixante plans au montage final, cinq secondes de génération par plan. Les tarifs à la seconde ci-dessous sont ceux affichés publiquement sur [la page de tarification de fal.ai](https://fal.ai/pricing) au 25 août 2026.

| Modèle | Prix à la seconde | 1 plan gardé sur 4 (1 200 s) | 1 plan gardé sur 8 (2 400 s) |
| --- | --- | --- | --- |
| Wan 2.5 | 0,05 $ | 60 $ | 120 $ |
| Kling 2.5 Turbo Pro | 0,07 $ | 84 $ | 168 $ |
| Veo 3 | 0,40 $ | 480 $ | 960 $ |

Regarde la dernière ligne. Le même film, la même durée, le même nombre de plans, et un écart de 900 dollars entre deux cases du tableau. Le choix du modèle et la discipline de sélection pèsent plus lourd, ensemble, que tout le reste du budget d'un petit court.

Et c'est là que ça casse pour la plupart des gens : ils négocient le prix de leur abonnement pendant que leur taux de sélection dérive, sans jamais le mesurer, parce que le prompt n'a pas été stabilisé avant le premier plan.

Deux gestes font baisser ce chiffre plus vite que n'importe quelle négociation tarifaire. D'abord, tu fixes ton plan sur une image de référence validée avant de générer la vidéo, ce qui élimine d'un coup les rejets pour cadrage ou pour lumière. Ensuite, tu testes ton prompt sur le modèle le moins cher, et tu ne montes sur le modèle premium qu'une fois la description verrouillée. La même logique de mesure, appliquée à un seul outil, est détaillée dans mon article sur [les crédits et les formules de MiniMax Hailuo](/blog/minimax-hailuo-prix-credits-formules).

![Comédienne en cabine d'enregistrement pendant une session de voix pour un court-métrage IA](/images/blog/combien-coute-court-metrage-ia-2026/workflow-1.webp)

## Abonnement ou API : deux façons de payer la même image

Le tableau du dessus raisonne en API, à la seconde. La plupart des créateurs passent en réalité par un abonnement grand public, et les deux logiques ne se comparent pas directement.

Chez [Runway](https://runway.com/pricing), au 25 août 2026, l'offre Standard est à 15 dollars par mois en facturation mensuelle (12 dollars en annuel) pour 625 crédits, l'offre Pro à 35 dollars (28 en annuel) pour 2 250 crédits, l'offre Max à 95 dollars (76 en annuel) pour 9 500 crédits. Le plan gratuit donne 125 crédits, une fois, pas par mois. Chez Google, l'offre AI Pro est affichée à 21,99 euros par mois avec un accès d'essai limité à Veo 3.1 Lite, et l'offre AI Ultra démarre à 99,99 euros par mois sur [la page des abonnements Gemini](https://gemini.google/subscriptions/).

L'abonnement gagne quand tu produis en continu, tous les mois, sur un même outil. L'API gagne quand tu produis par vagues, avec des semaines creuses entre deux blocs de génération. Un court-métrage est presque toujours un projet à vagues : trois semaines d'écriture et de repérage visuel où tu ne consommes rien, puis dix jours où tu brûles tout.

D'où une règle simple que j'applique depuis deux ans. Si ton film tient sur moins de six semaines de production réelle, calcule en API, et prends l'abonnement uniquement pour l'outil dont tu utilises l'interface tous les jours.

Attention à un détail que les pages de tarifs mettent en tout petit : chez la plupart des fournisseurs, les crédits mensuels ne se reportent pas. Un mois où tu écris au lieu de générer est un mois payé pour rien. Sur quatre mois de projet, ça fait deux abonnements jetés.

> 💡 **Le cut de Frank :** ouvre un tableur avec une ligne par semaine de production et coche les semaines où tu vas réellement générer. Tu verras immédiatement combien de mois d'abonnement tu payes à vide.

## Le son, la ligne que les débutants oublient

Un film IA se juge à l'image sur les réseaux et à l'oreille en salle. Et cette partie du budget dérape plus souvent que les autres, parce qu'elle se découpe entre trois fournisseurs au lieu d'un.

**La voix.** [ElevenLabs](https://elevenlabs.io/pricing) affiche au 25 août 2026 un plan gratuit à 10 000 crédits, Starter à 6 dollars pour 30 000 crédits, Creator à 22 dollars pour 121 000, Pro à 99 dollars pour 600 000, Scale à 299 dollars pour 1,8 million. La facturation annuelle revient à payer dix mois sur douze. Ce qui coûte vraiment, ce sont les reprises : chaque nouvelle version d'une réplique reconsomme des crédits, et un dialogue de trois minutes réenregistré quinze fois coûte quinze fois son prix nominal.

**La musique.** [Suno](https://suno.com/pricing) propose un plan gratuit à 50 crédits par jour, un plan Pro à 8 dollars par mois pour 2 500 crédits, un plan Premier à 24 dollars pour 10 000. Sur le plan juridique, le plan gratuit est explicitement sans usage commercial, et les droits commerciaux des plans payants portent sur les morceaux créés pendant que l'abonnement est actif. Si tu résilies après avoir livré, relis tes conditions avant de sortir le film. J'ai détaillé ce terrain dans l'article sur [les droits d'auteur de la musique IA pour une bande son](/blog/droits-auteur-musique-ia-bande-son).

**Le bruitage et le mixage.** C'est le seul poste où je conseille de garder une part humaine si le film vise une projection. Un mixage de court se négocie généralement à la journée, et le prix dépend entièrement de ton marché local, donc je ne poserai pas de fourchette inventée ici. Demande deux devis, tu auras ton chiffre réel en 48 heures.

Ce que je retiens de mes propres films : le son représente rarement moins d'un quart du budget total quand le film est destiné à autre chose qu'un post vertical. Sur [Ronces](/blog/ronces-coulisses-court-film-ia), c'est la partie qui a demandé le plus d'allers-retours.

## Montage, upscaling et stockage : le coût de la finition

Le poste finition contient le plus gros logiciel gratuit du secteur, ce qui aide beaucoup. DaVinci Resolve reste téléchargeable sans payer, et la version Studio, qui débloque le moteur neuronal et le 10 bits au-delà de 60 images par seconde, est vendue [295 dollars en licence perpétuelle](https://www.blackmagicdesign.com/products/davinciresolve) sur le site de Blackmagic Design. Une licence, pas un abonnement, achetée une fois pour tous tes films.

L'upscaling, lui, a changé de modèle économique, et c'est une vraie ligne à revoir dans les budgets écrits l'an dernier. Topaz est passé à l'abonnement : au 25 août 2026, [la page de tarifs de Topaz Labs](https://www.topazlabs.com/pricing) affiche Topaz Video en formule Personal à 39 dollars par mois avec engagement annuel, ou 59 dollars par mois sans engagement, et un bundle Topaz Studio à 69 dollars par mois ou 399 dollars par an. Fais le calcul sur la durée de ton projet : cinq mois de la formule sans engagement, à 59 dollars, coûtent exactement le prix d'une licence Resolve Studio, sauf qu'à la fin tu ne possèdes rien. Il existe des chemins gratuits pour monter en résolution, que j'ai comparés dans mon guide sur [l'upscaling vidéo gratuit face à Topaz](/blog/upscaling-video-gratuit-alternatives-topaz).

Le stockage est le poste le plus sournois, parce qu'il ne se paye pas en une fois. Reprends le calcul de la section deux : soixante plans gardés sur deux cent quarante générés, ce sont deux cent quarante fichiers vidéo à conserver jusqu'à la fin du montage, plus les images de référence, plus les versions intermédiaires d'étalonnage. Tu ne peux pas jeter les rejets tant que le montage n'est pas verrouillé, parce que la moitié d'entre eux redeviennent utiles quand tu changes une transition.

Prévois un disque dédié par film et une sauvegarde miroir. Le prix dépend de ta capacité et de ton fournisseur, mais la règle ne dépend de rien : tant que le film vit sur un seul disque, tu es en train de parier ton projet sur du matériel qui tombe en panne.

![Coordinatrice de production travaillant sur les frais de festival d'un court-métrage IA dans une cour d'immeuble](/images/blog/combien-coute-court-metrage-ia-2026/workflow-2.webp)

## Après le film : festivals, livraison, archivage

Le budget s'arrête rarement à l'export. Un court-métrage existe quand quelqu'un le voit, et le faire voir a un prix affiché.

Les frais de soumission sont publics et vérifiables. Sundance, pour son édition 2027, affiche sur [sa page de soumission](https://www.sundance.org/festivals/sundance-film-festival/submit/) 55 dollars en dépôt anticipé, 75 dollars en dépôt officiel et 95 dollars en dépôt tardif pour les courts, américains comme internationaux, avec une durée limite de 50 minutes générique compris. Un seul festival de ce calibre coûte donc plus cher que deux mois d'abonnement de génération. Et une stratégie de sortie sérieuse ne se limite jamais à un festival.

À cela s'ajoutent des postes moins spectaculaires mais obligatoires :

- Le sous-titrage, dans au moins une langue de plus que la tienne si tu vises l'international.
- Les masters de livraison, chaque festival ayant ses exigences de codec et de niveau sonore.
- L'archivage long terme, une fois le disque de production libéré pour le film suivant.

C'est le moment de rappeler une évidence de production : dépose ton calendrier de festivals avant de commencer le film, pas après. Les dates de dépôt anticipé, à 40 dollars d'écart avec les dépôts tardifs, se ratent en une semaine de retard de mixage. Sur [Voidborn](/blog/voidborn-anime-ia-festival-coulisses), le calendrier de sortie a autant structuré la production que le scénario.

## Ton temps est la ligne la plus chère du devis

Additionne les six postes précédents pour un court de six minutes soigné : selon le modèle choisi et ta discipline de sélection, tu arrives quelque part entre quelques centaines et un bon millier de dollars de dépenses réelles. Ce montant se calcule, ligne par ligne, avec des tarifs publics. Et il reste petit à côté de la vraie facture.

Parce que le film t'a pris des semaines.

Compte les heures. Écriture, direction visuelle, prompts, tri des rushes, montage, son, étalonnage, exports, soumissions. Multiplie par le tarif horaire que tu factures à un client. Le résultat écrase toutes les autres lignes réunies, sur tous les projets que j'ai chiffrés.

Cette conversion est le point de contact entre le coût de production et le prix de vente. Ce sont deux calculs différents, et les confondre est la première cause de devis raté chez les créateurs indépendants. Ici on calcule ce que le film te coûte. Pour calculer ce que tu dois demander à un client, la grille est dans mon article sur [comment facturer une vidéo IA professionnelle](/blog/combien-facturer-video-ia-professionnelle-grille-prix), et l'estimation chiffrée passe par [le calculateur de budget de production IA](/outils/calculateur-budget-production-ia).

Un court-métrage personnel n'a pas à être rentable. Mais tu dois savoir ce qu'il t'a coûté, sinon tu ne sauras jamais si le suivant doit être financé autrement.

## Ce qui fait exploser un budget (et comment le voir venir)

Les dérapages ci-dessous, je les ai vus chez moi avant de les voir chez les gens que je forme.

Changer de modèle en cours de production coûte cher deux fois. Le nouveau moteur sort, il est meilleur, tu recommences trente plans déjà validés : le budget de génération double, et la cohérence visuelle du film prend un coup au passage. Décide ton moteur principal avant le premier plan, et tiens-le jusqu'au montage verrouillé.

Générer avant d'avoir écrit produit le même gâchis, en pire. Chaque plan généré sur une scène qui saute au montage est un plan payé pour rien. Verrouille ta continuité avant de brûler des crédits. C'est exactement le problème que j'essaie de résoudre avec ScreenWeaver, en gardant le scénario et le storyboard connectés pendant l'écriture.

Vient ensuite la sous-estimation du nombre de plans. Les gens comptent les plans de leur scénario, pas ceux du montage final. Un montage réel ajoute des inserts, des raccords, des respirations. Prévois une marge de 20 pour cent, sinon ta ligne génération est fausse dès le départ.

Restent les deux fuites bêtes : les abonnements qui tournent pendant les phases sans génération, et le change. Presque tous les tarifs cités dans cet article sont affichés hors taxes et en dollars. Si tu factures en euros, ton coût réel dépend du taux du jour et de ton régime fiscal, ce qui pèse vraiment sur un budget à quatre chiffres.

## Le protocole que j'utilise pour chiffrer avant de commencer

Cinq étapes, une heure de travail, et tu as un budget défendable au lieu d'une intuition.

1. **Compte tes plans.** Découpe ton scénario en plans, ajoute 20 pour cent de marge, note le chiffre.
2. **Mesure ton taux de sélection sur une scène.** Prends la scène la plus difficile du film, produis-la vraiment, compte combien de générations il t'a fallu pour garder chaque plan. Ce ratio-là est le tien, pas celui d'un tutoriel.
3. **Multiplie.** Nombre de plans, fois taux de sélection, fois durée moyenne, fois le tarif à la seconde de ton modèle. Tu as ta ligne génération.
4. **Ajoute les postes fixes.** Son, finition, stockage, festivals. Ce sont des montants que tu peux lire sur des pages publiques, comme celles citées ici.
5. **Convertis ton temps.** Estime tes heures par poste, applique ton tarif, et écris le total sur la même feuille. Même si tu ne le factures à personne.

La deuxième étape est celle que tout le monde saute, et c'est celle qui décide du reste. Une scène test coûte quelques dizaines de dollars. Une erreur de facteur trois sur un film entier en coûte plusieurs centaines.

## FAQ

### Un court-métrage IA coûte-t-il vraiment moins cher qu'un tournage classique ?

Sur le poste image, oui, et l'écart est massif : tu supprimes le matériel, l'équipe de tournage, les décors, les déplacements et les assurances. Sur les autres postes, l'écart se réduit beaucoup. Le son, le mixage, le sous-titrage, les masters de livraison et les frais de festivals coûtent exactement la même chose que sur un film tourné. Et ton temps, lui, augmente souvent : trier deux cent quarante générations prend plus d'heures qu'une journée de tournage bien préparée. La production IA déplace le budget de l'équipement vers le temps de fabrication, plutôt qu'elle ne le supprime.

### Quel est le poste le plus sous-estimé dans un budget de film IA ?

Le taux de sélection, sans hésiter. Tout le monde calcule le coût des plans qui finissent au montage, personne ne calcule celui des plans jetés. Sur un film à soixante plans, passer d'un rendu gardé sur quatre à un rendu gardé sur huit double la ligne génération, et cette dérive se produit sans que tu la remarques, plan après plan. Juste derrière arrive le son, parce qu'il se répartit entre trois fournisseurs différents et que chaque reprise de voix reconsomme des crédits. Mesure ces deux postes sur une scène test avant de chiffrer le film entier.

### Vaut-il mieux prendre un abonnement ou payer à la seconde en API ?

Ça dépend du rythme de ton projet, pas de ton volume total. Un abonnement est rentable quand tu génères de façon régulière, tous les mois, sur le même outil. Une facturation API à la seconde est plus adaptée aux projets par vagues, avec des semaines d'écriture ou de montage où tu ne consommes rien. Or un court-métrage fonctionne presque toujours par vagues. Vérifie aussi la règle de report des crédits : chez la plupart des fournisseurs, les crédits non consommés disparaissent en fin de mois, donc chaque mois calme est un mois payé pour rien.

### Combien coûte le son d'un court-métrage IA ?

Les briques logicielles sont peu chères et publiques : ElevenLabs démarre à 6 dollars par mois pour la voix, Suno à 8 dollars par mois pour la musique avec droits commerciaux sur les morceaux créés pendant l'abonnement. Ce qui coûte, ce sont les reprises et le mixage. Chaque nouvelle version d'une réplique reconsomme des crédits de voix, et un mixage professionnel se paye à la journée à un tarif qui dépend entièrement de ton marché local. Si ton film vise une projection en salle plutôt qu'un réseau social, garde une part humaine sur le mixage et demande deux devis avant de figer ton budget.

### Faut-il payer pour un logiciel de montage ?

Non, pas pour commencer. DaVinci Resolve est gratuit dans une version largement suffisante pour monter, étalonner et exporter un court-métrage, avec une limite au 8 bits jusqu'à 60 images par seconde en Ultra HD. La version Studio, à 295 dollars en licence perpétuelle, débloque le moteur neuronal, des effets supplémentaires et le 10 bits au-delà de 60 images par seconde. C'est un achat unique, valable pour tous tes films suivants, ce qui en fait un des rares postes du budget qui ne se répète pas. Compare ce montant à cinq mois d'abonnement d'upscaling sans engagement, qui coûtent le même prix, avant de trancher.

### Combien prévoir pour les festivals ?

Les frais sont publics, festival par festival, et ils montent vite. Sundance affiche pour son édition 2027 des frais de 55 dollars en dépôt anticipé, 75 dollars en dépôt officiel et 95 dollars en dépôt tardif pour les courts. Une sélection de dix festivals à ce niveau de tarif représente plusieurs centaines de dollars, souvent plus que ta ligne génération. Deux réflexes font baisser la facture : construire le calendrier de dépôt avant de commencer le film pour attraper les tarifs anticipés, et sélectionner les festivals qui correspondent réellement à ton film plutôt que d'arroser.

### Comment savoir si mon budget est réaliste avant de commencer ?

Produis une scène en vrai. Prends la séquence la plus difficile du film, celle avec le mouvement, le visage ou la lumière que tu redoutes, et fabrique-la de bout en bout, génération, montage, son. Compte tes générations, tes heures et tes dépenses réelles sur cette scène. Ensuite tu extrapoles au film entier avec un ratio mesuré au lieu d'un chiffre lu sur un forum. Cette scène test coûte quelques dizaines de dollars et t'évite les erreurs de facteur trois. C'est aussi le meilleur moyen de découvrir qu'un plan que tu croyais simple demande vingt tentatives.

### Ces tarifs vont-ils rester valables longtemps ?

Non, et il faut écrire les budgets en conséquence. Les prix cités ici ont été relevés le 25 août 2026 sur les pages officielles des éditeurs, et le secteur bouge vite dans les deux sens. Topaz est passé d'une licence perpétuelle à un abonnement, ce qui change complètement l'arbitrage sur le poste upscaling. À l'inverse, le prix à la seconde des modèles vidéo a plutôt baissé sur les gammes intermédiaires. Construis ton budget avec la structure de calcul de cet article, qui reste stable, et remplace les montants par les tarifs du jour au moment où tu chiffres.

## Ce qu'il faut retenir

Le coût d'un court-métrage IA en 2026 a peu de rapport avec le prix affiché sur la page d'abonnement de ton générateur. Il est fixé par ton taux de sélection, par la partie son que personne n'anticipe, par des frais de sortie qui existaient déjà avant l'IA, et par des semaines de ton temps.

Tout ça se mesure, heureusement. Une scène test, un tableur, cinq calculs, et tu sais en une heure si ton film tient dans ce que tu peux dépenser, avant d'avoir brûlé le premier crédit.

Et si le chiffre te fait peur, regarde-le quand même. C'est le seul moyen de savoir sur quelle ligne tu peux couper.
