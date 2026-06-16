---
title: "Préparer un découpage technique avant génération vidéo IA"
date: "2026-05-29"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Le plan de tournage version IA pour éviter les générations inutiles et livrer plus vite des plans exploitables."
thumbnail: "/images/blog/preparer-decoupage-technique-avant-generation-video-ia/hero.webp"
---

Tu as passé une soirée entière à générer des plans. Le lendemain matin, en montage, tu réalises que tu n'as ni le raccord regard, ni l'axe caméra cohérent, ni la durée utile pour raconter quoi que ce soit. Tu recommences. Et tu recommences encore. Ce n'est pas un problème de moteur. C'est un problème de découpage technique absent.

**Préparer un découpage technique avant génération vidéo IA**, ce n'est pas faire du papier administratif. C'est poser, avant le premier prompt, la même discipline qu'un réalisateur impose sur un plateau : quels plans, dans quel ordre, avec quelle intention, et avec quels critères de rejet. Sans ça, tu produis du volume. Avec ça, tu produis de la narration exploitable.

Ce guide vient du terrain. J'ai livré des spots, des courts métrages et des campagnes sociales où la différence entre une semaine perdue et une livraison propre tenait souvent à une feuille de découpage de trente lignes, pas à un nouvel abonnement outil. Tu vas apprendre à construire ce document, à le connecter à tes générations, et à t'en servir comme filtre impitoyable contre les essais inutiles.

![Découpage technique vidéo IA sur table de montage avec storyboard, numéros de plans et annotations lumière](/images/blog/preparer-decoupage-technique-avant-generation-video-ia/hero.webp)

## Pourquoi le découpage technique change tout en vidéo IA

En cinéma classique, le découpage technique traduit le scénario en unités filmables. En vidéo IA, il remplit la même fonction, mais avec une contrainte supplémentaire : chaque plan est une micro production isolée. Le moteur ne sait pas ce que tu as généré avant. Il ne devine pas ton raccord. Il n'anticipe pas ton montage final. Si tu ne lui donnes pas une cartographie claire, tu obtiens des fragments brillants et incompatibles.

Le premier bénéfice est économique. Chaque génération coûte du temps, des crédits, de l'attention. Un découpage bien pensé te dit exactement combien de plans tu dois produire, leur durée cible, et leur niveau d'exigence. Un plan de transition n'a pas besoin du même budget qu'un gros plan héros. Cette hiérarchie évite de sur-investir sur des détails que personne ne verra.

Le deuxième bénéfice est narratif. Quand tu écris « plan 4 : travelling latéral lent, sujet de profil, lumière latérale froide, durée 3 s, fonction : transition émotionnelle », tu forces une intention. Tu ne génères plus « une belle image ». Tu génères un maillon de chaîne. Le montage devient une assemblage logique, pas une loterie.

Le troisième bénéfice est la cohérence visuelle. En listant pour chaque plan la direction de lumière, la focale implicite, la palette et les éléments immuables (costume, décor, heure du jour), tu crées un contrat avec toi-même. Ce contrat devient la base de tes prompts et de tes images pilotes. Les dérives se repèrent immédiatement parce que tu compares chaque sortie à une fiche précise, pas à une impression vague.

Beaucoup de débutants confondent storyboard et découpage technique. Le storyboard montre *à quoi* ça ressemble. Le découpage technique précise *comment* tu vas l'obtenir et *à quoi* il sert dans la séquence. Les deux se complètent. Sur un projet IA court, tu peux tenir avec un découpage textuel dense et deux ou trois références visuelles par plan. Sur un projet long, tu ajoutes des vignettes. L'important, c'est la granularité opérationnelle.

Pour ancrer cette discipline dans ton pipeline global, relie ce travail à [comment structurer une vidéo IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film) et à [comment construire une shot list vidéo IA](/blog/construire-liste-plans-shotlist-video-ia). Ces deux guides prolongent directement ce que tu poses ici sur le papier.

> 💡 **Frank's Cut:** numérote tes plans comme sur un vrai tournage (plan 1, plan 2, plan 2 bis). Dès que tu écris « essai sympa » sans numéro, tu perds le contrôle de la production.

## Les colonnes indispensables de ton découpage IA

Un découpage technique IA efficace tient sur une page par séquence. Chaque ligne est un plan. Chaque colonne répond à une question que tu te poseras forcément en génération ou en montage.

| Colonne | Contenu attendu | Pourquoi c'est critique |
| --- | --- | --- |
| N° plan | Identifiant stable | Traçabilité versions et feedback client |
| Durée cible | 2 à 6 secondes en général | Évite les générations trop longues et instables |
| Type de plan | GP, PA, travelling, insert | Cadre le mouvement caméra dans le prompt |
| Action | Verbe + objet + direction | Réduit l'ambiguïté du moteur |
| Lumière | Source, qualité, température | Assure les raccords entre plans |
| Référence | Image pilote ou mood | Verrouille identité visuelle |
| Statut | A / B / C / à regénérer | Accélère le tri post-génération |
| Notes montage | Transition, son, rythme | Anticipe la coupe finale |

Tu n'as pas besoin d'un tableur complexe. Un document texte structuré suffit au début. L'erreur classique est de remplir les colonnes après coup, une fois les plans générés. À ce moment-là, tu rationalises des choix aléatoires. Le découpage se fait *avant* la génération, même si tu l'ajustes légèrement ensuite.

Pour la durée, sois réaliste par rapport aux moteurs que tu utilises. Runway, Kling, Pika, Seedance : tous ont des zones de confort différentes. Note dans ton découpage la durée maximale testée sur ton moteur actuel. Si un plan dépasse cette durée en intention narrative, découpe-le en deux plans distincts plutôt que de forcer une génération longue qui va se déformer.

Pour la lumière, utilise un vocabulaire stable sur tout le projet : « key 45° gauche, fill doux, backlight discret » vaut mieux que « ambiance ciné ». Les moteurs réagissent mieux aux directions concrètes. Et surtout, quand tu relis tes plans côte à côte, tu repères en une seconde un raccord de lumière impossible entre le plan 3 et le plan 4.

La colonne **référence** est ta assurance vie. Avant toute vidéo, verrouille une image pilote par plan ou par groupe de plans (même décor, même personnage). Le découpage technique pointe vers le fichier : `plan03-pilote-v2.png`. Sans référence, tu navigues à vue. Avec référence, tu peux mesurer objectivement si la génération respecte ton intention.

## Workflow en six étapes : du script au premier batch

### Étape 1 : extraire les beats narratifs

Lis ton script ou ton brief et souligne les beats : accroche, tension, révélation, résolution. Chaque beat devient un bloc de séquence. Un spot de 30 secondes peut tenir en quatre beats. Un court métrage de trois minutes en douze à quinze. Cette étape évite de découper au feeling plan par plan sans vision d'ensemble.

Pose-toi la question du public et du support. Un Reel vertical ne se découpe pas comme un master 16:9. Si tu dois livrer les deux, note-le dès le découpage : certains plans seront tournés (générés) en pensant le cadrage vertical, d'autres seront des recadrages assumés du master. Cette décision anticipée évite de découvrir en post que ton sujet est coupé aux genoux sur mobile.

### Étape 2 : traduire chaque beat en plans nommés

Pour chaque beat, liste les plans nécessaires au minimum. Pas les plans « sympas en bonus ». Le minimum viable narratif. Tu pourras ajouter des plans de coupe plus tard si le budget le permet. Au départ, vise la clarté : un spectateur qui n'a jamais vu ton brief doit comprendre l'histoire avec ces plans seuls.

Nomme chaque plan par sa fonction : `01-accroche-visage`, `02-insert-produit`, `03-reaction`. Ce nommage devient ton dossier de fichiers, tes prompts archivés, tes exports. La cohérence de nommage fait gagner des heures sur les projets qui s'étalent sur plusieurs semaines.

### Étape 3 : rédiger la fiche lumière et mouvement par plan

Pour chaque ligne du découpage, complète l'action et la lumière avant d'ouvrir un seul outil IA. Une fiche type ressemble à ceci : « Plan 5. Travelling avant lent. Personnage marche vers caméra, regard caméra, expression déterminée. Lumière : golden hour, soleil bas arrière gauche, ombres longues. Durée : 4 s. Référence : plan05-mood-sunset.jpg. »

Si tu hésites entre deux directions, tranche maintenant. L'hésitation en découpage devient la dérive en génération. Tu peux toujours garder une variante « plan 5 alt » pour un test, mais une doit être la référence principale.

### Étape 4 : valider le découpage en lecture à voix haute

Lis le découpage comme un montage mental. « Plan 1 : on voit… Plan 2 : on comprend… Plan 3 : on ressent… » Si tu bloques sur une transition, le problème est dans le découpage, pas dans le moteur. Corrige avant de générer. Cette lecture prend dix minutes et en épargne dix heures.

Fais relire par quelqu'un d'autre si possible. Un œil neuf repère les sauts logiques. Sur un projet solo, laisse reposer une nuit et relis.froid le lendemain.

### Étape 5 : générer par vagues alignées sur le découpage

Ne génère pas dans le désordre. Vague 1 : tous les plans du beat 1. Vague 2 : beat 2. Tu compares les plans d'une même vague entre eux pour les raccords. Tu classes A/B/C directement dans la colonne statut de ton découpage. Un plan C ne mérite pas de retouche immédiate : il mérite une regénération ciblée ou une révision de la fiche plan.

![Storyboard numéroté et fiches plans alignées sur timeline de montage vidéo IA](/images/blog/preparer-decoupage-technique-avant-generation-video-ia/workflow-1.webp)

### Étape 6 : montage de contrôle avant post lourde

Assemble un premier cut sec, sans étalonnage, sans FX. Vérifie uniquement : rythme, lisibilité, raccords. Si le cut sec ne tient pas, le color grading ne le sauvera pas. Ajuste le découpage (ajoute un plan de coupe, raccourcis un plan trop long) et regénère uniquement les lignes concernées. C'est là que ton document devient un outil vivant, pas une coquille vide.

Pour aller plus loin sur l'optimisation de ce pipeline, voir [comment optimiser son workflow IA pour gagner du temps](/blog/comment-optimiser-workflow-ia-gagner-temps). Tu y trouveras des règles de batch et d'archivage qui collent à ce découpage.

## Scénarios terrain : trois projets réels

### Le spot produit 20 secondes (Léa, Lyon)

Léa devait livrer un spot parfum en 20 secondes, 16:9 et 9:16. Sans découpage, elle avait généré quinze plans « magnifiques » dont huit inutilisables en vertical. Refonte : découpage de douze plans numérotés, dont trois exclusifs vertical (gros plan flacon centré, mains en haut de frame, fumée ascendante). Résultat : deux livrables en une journée de génération au lieu de trois épuisantes.

### Le court métrage dialogue (Thomas, Bruxelles)

Thomas tournait une scène de dialogue cuisine en IA. Son erreur initiale : un seul plan séquence de 12 secondes. Impossible à stabiliser. Découpage en cinq plans : large establishing, over épaule personnage A, over épaule personnage B, insert mains, retour large. Chaque plan avait sa fiche lumière identique (fenêtre gauche, praticable chaude). Le montage a pris deux heures au lieu de deux jours de corrections.

### La campagne social batch (Nadia, Casablanca)

Nadia produisait dix variations d'un même concept pour A/B test. Son découpage listait les éléments variables (fond, costume, geste) et les éléments fixes (cadrage, lumière, durée). Elle a généré par colonne variable, pas par intuition. Les dix versions étaient comparables. Le client a validé en une réunion.

## Dépannage : ce que les débutants cassent

**Découpage trop vague.** Symptôme : prompts longs et contradictoires. Fix : une action par plan, une direction lumière par plan. Si tu as besoin de « et aussi » dans ta fiche, scinde le plan.

**Oublier les plans de transition.** Symptôme : montage qui saute, sensation de collage. Fix : ajoute des inserts (mains, objet, détail décor) dans le découpage. Les inserts coûtent peu en génération et sauvent beaucoup en montage.

**Générer hors ordre.** Symptôme : raccords lumière impossibles. Fix : génère par séquence et compare dans la vague. Ne passe à la vague suivante tant que la cohérence n'est pas acceptable.

**Découpage figé alors que le récit ne tient pas.** Symptôme : cut sec médiocre malgré de beaux plans. Fix : mets à jour le découpage, numérote les nouveaux plans (plan 6 bis), regénère ciblé. Le document sert le récit, pas l'inverse.

**Ne pas noter les prompts validés.** Symptôme : impossible de regénérer un plan A identique. Fix : colonne « prompt validé » ou lien vers fichier texte. Le découpage technique et le journal de prompts sont jumeaux.

Pour les standards de rythme et de lisibilité en diffusion, les guides [YouTube sur les formats vidéo](https://support.google.com/youtube/answer/1722171) et la documentation [Vimeo sur la compression](https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-compression-guidelines) t'aident à calibrer durée et résolution dès le découpage.

![Validation découpage technique sur moniteur étalonné et tablette mobile avant génération batch](/images/blog/preparer-decoupage-technique-avant-generation-video-ia/workflow-2.webp)

[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on structurer un projet vidéo IA plan par plan avant de lancer les générations pour éviter les allers-retours inutiles.]

## Plan d'exécution sur cinq jours

**Jour 1 :** brief, beats, première version du découpage. **Jour 2 :** images pilotes et validation lumière. **Jour 3 :** génération vague 1 et 2, tri A/B/C. **Jour 4 :** cut sec, ajustement découpage, regénérations ciblées. **Jour 5 :** post sobre, QA mobile/desktop, livraison.

Ce rythme est compressible sur trois jours pour un spot court. Ne compresse jamais l'étape cut sec. C'est le moment où le découpage technique prouve sa valeur ou révèle ses failles.

## FAQ

### Faut-il un storyboard illustré ou un document texte suffit ?

Pour un spot court ou une séquence unique, un découpage texte dense avec deux ou trois références par plan suffit largement. L'essentiel est la précision des colonnes opérationnelles : durée, action, lumière, référence, statut. Le storyboard illustré devient indispensable quand tu coordonnes une équipe, quand le client doit valider avant génération, ou quand tu gères plusieurs personnages et axes caméra complexes. Dans tous les cas, le découpage technique reste le document de vérité pour la génération : le storyboard montre, le découpage ordonne. Tu peux commencer sans dessin et ajouter des vignettes plus tard si le projet grossit.

### Combien de plans prévoir pour un spot de 30 secondes ?

Un spot de 30 secondes tient généralement entre huit et quinze plans en vidéo IA, selon le rythme voulu. Un montage publicitaire nerveux peut en demander plus avec des plans très courts. Un spot émotionnel lent peut en utiliser moins avec des plans plus longs. La règle pratique : un plan IA au-delà de cinq ou six secondes devient risqué sur la plupart des moteurs actuels. Découpe donc en unités de deux à quatre secondes et assemble. Ton découpage doit refléter cette réalité technique, pas le rêve d'un plan séquence unique de trente secondes.

### Comment gérer les plans qui échouent systématiquement ?

Si un plan échoue trois fois, le problème est presque toujours dans la fiche plan, pas dans la malchance. Simplifie l'action, réduis la durée, verrouille une image pilote plus stricte, ou scinde le plan en deux unités plus simples. Note chaque échec dans la colonne notes : « déformation mains », « dérive lumière », « visage instable ». Ces notes alimentent ta prochaine itération. Si le plan reste non essentiel narrativement, supprime-le du découpage et trouve une solution de montage avec les plans voisins. La brutalité éditoriale fait partie du métier.

### Le découpage technique est-il utile en solo ou seulement en équipe ?

Il est même plus utile en solo, parce que tu joues tous les rôles et tu n'as personne pour te recadrer. Le découpage devient ta voix de réalisateur extérieure. Il te force à trancher avant la fatigue, avant l'attachement émotionnel à un rendu, avant la surcharge de choix. En équipe, il aligne tout le monde. En solo, il te protège de toi-même. Les créateurs qui progressent vite en IA ne sont pas ceux qui génèrent le plus : ce sont ceux qui découpent le mieux.

### Dois-je inclure le son dans le découpage technique ?

Oui, au minimum sous forme de notes montage : musique tendue ou calme, présence de voix off, bruitage clé (porte, moteur, ville), silence volontaire. Le son influence le rythme de coupe et la durée perçue des plans. Un plan de trois secondes avec musique crescendo ne se lit pas comme un plan de trois secondes en silence. Anticiper le son dans le découpage évite de générer des plans trop longs ou trop courts par rapport à la bande son finale.

### Comment archiver le découpage pour une relivraison client ?

Exporte une version PDF ou texte datée à chaque validation majeure : `decoupage-v1-2026-05-29.pdf`. Lie chaque plan à son dossier de fichiers (`/plan03/ raw, pilote, master`). Quand le client revient six semaines plus tard pour une déclinaison, tu retrouves exactement ce qui a été validé. Ajoute une ligne « prompt validé » ou un lien vers ton journal de production. Cette archive transforme un projet one-shot en actif réutilisable.

### Peut-on adapter un découpage cinéma classique à l'IA sans tout réécrire ?

Oui, à condition d'ajouter les colonnes spécifiques IA : référence pilote, moteur prévu, durée max testée, statut A/B/C. Les notions de plan américain, contre-champ, insert et raccord regard restent valides. Les moteurs gèrent mal certaines continuités (mains, objets fins, texte). Note ces fragilités dans ton découpage pour prévoir des inserts ou des contournements. Le langage cinéma reste ton meilleur allié : il est précis, partagé, et éprouvé.

En production IA, la vitesse sans découpage donne du bruit. Avec un découpage technique solide, chaque génération a un but, chaque plan a une place, et ta livraison finale ressemble à une direction artistique, pas à une compilation d'essais. **Préparer un découpage technique avant génération vidéo IA**, c'est le geste le moins glamour et le plus rentable de ta semaine.

<!-- PUBLICATION DATE: 2026-05-29 -->
