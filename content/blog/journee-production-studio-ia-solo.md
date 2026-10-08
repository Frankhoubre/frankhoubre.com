---
title: "Studio IA solo : une journée de production type"
date: "2026-10-08"
category: "business"
excerpt: "Une journée type dans un studio IA solo : découpage le matin, génération par blocs, montage avant finition, son et archivage le soir. Ce qui tient, ce qui casse."
thumbnail: "/images/blog/journee-production-studio-ia-solo/hero.webp"
---

# Studio IA solo : une journée de production type

Tu t'es levé avec huit heures devant toi et un plan précis en tête. À dix-sept heures, tu as quarante variations du même plan, aucune vraiment juste, un dossier « tests » qui déborde et pas une seconde de film en plus sur ta timeline. Tu as travaillé toute la journée et le projet n'a pas avancé.

Je connais cette journée par cœur. Je l'ai vécue des dizaines de fois pendant les deux années où j'ai produit seul, avant de monter Outerframe Studio. Et je la vis encore de temps en temps quand je relâche la discipline.

Ce qui suit est une journée type dans un studio IA solo. Je l'ai recomposée à partir de mes semaines de travail sur *Lost Garden* et sur les films d'avant. Les créneaux bougent d'un jour à l'autre, l'ordre ne bouge pas. Et c'est l'ordre qui fait qu'une journée produit quelque chose.

![Réalisateur seul épinglant les fiches des plans du jour sur un tableau de liège dans un garage converti en studio IA, lumière du matin par la porte entrouverte](/images/blog/journee-production-studio-ia-solo/hero.webp)

## Studio IA solo : ce que le mot recouvre ici

« Studio » fait penser à des couloirs, une salle de montage, quelqu'un qui passe une tête pour demander si le rendu est prêt. Un studio IA solo, c'est une seule personne qui tient tous les postes dans la même journée : scénariste le matin, directeur photo en fin de matinée, monteur l'après-midi, ingénieur du son en fin de journée, archiviste le soir.

Ce cumul fait toute la difficulté. Changer de poste coûte de l'énergie, et personne n'est là pour te dire que tu restes coincé dans le mauvais depuis trois heures. Un monteur en équipe arrête le réalisateur qui veut regénérer un plan pour la sixième fois. Seul, tu dois jouer les deux rôles.

Aujourd'hui, Outerframe est une société à deux, avec Thibaut Dumont. J'ai raconté pourquoi j'ai quitté le solo dans l'article sur [la création d'Outerframe Studio](/blog/outerframe-studio-pourquoi-studio-ia). Mais dans les faits, la production d'un épisode reste un travail où chacun passe l'essentiel de ses heures seul devant son poste. Ce qui suit vaut donc pour le créateur indépendant comme pour la personne qui, dans une petite structure, porte un projet de bout en bout.

Si tu as une deadline dans vingt-quatre heures, la logique de sprint est différente et je l'ai détaillée dans [la méthode pour produire une vidéo IA en 24h](/blog/comment-produire-video-ia-24h). Ici, on parle d'une journée ordinaire au milieu d'un projet qui dure des semaines. Celle qu'il faut savoir répéter cinquante fois sans s'user.

## Le matin : écrire la journée avant d'ouvrir un outil

Aucun générateur ouvert pendant la première heure. J'ai mis longtemps à tenir cette règle, et c'est celle qui rapporte le plus.

Je commence par relire ce qui est sorti la veille. Pas les rushes en détail, juste le montage brut de la dernière séquence et les notes laissées en fin de journée. Cinq à dix minutes. Le but est de récupérer le fil sans retomber tout de suite dans la manipulation.

Ensuite j'écris les plans du jour. Une ligne par plan : valeur, axe, durée approximative, intention. C'est le découpage que je décris dans [mon workflow complet de l'idée au film IA](/blog/workflow-complet-idee-film-ia-realiste), réduit à l'échelle d'une journée. Un plan que je n'arrive pas à décrire en une ligne est un plan que je n'ai pas pensé, et il sort de la liste avant de me coûter une seule génération.

Puis je choisis **un bloc**. Un bloc, c'est un groupe de plans qui partagent le même décor et la même lumière. Sur *Lost Garden*, ça peut être tous les plans de la serre de nuit d'une scène donnée. Je ne mélange pas deux décors dans la même session de génération. Chaque changement de décor oblige à recharger d'autres références, à recaler une autre lumière, et c'est précisément là que la continuité se casse.

Dernier geste du matin : ouvrir la bible du projet sur les fiches concernées. La fiche personnage, la fiche décor, la palette. Elles restent ouvertes à côté toute la journée. J'en parle en détail dans [le journal de production de Lost Garden](/blog/lost-garden-journal-production-serie-ia), où j'explique pourquoi cette bible s'écrit en langage de prompt et pas en langage littéraire.

> 💡 **Le cut de Frank :** écris en fin de liste ce que tu veux voir sur ta timeline à la fin de la journée. Une phrase. « La scène 4 montée en rendus corrects, même si trois plans restent à refaire. » Si tu ne peux pas écrire cette phrase le matin, tu passeras la journée à explorer au lieu de produire.

## Fin de matinée : générer par blocs, avec un plan témoin

La génération arrive au moment où j'ai le plus de concentration. Elle demande de juger vite et juste, plan après plan, et ce jugement s'émousse au fil des heures.

### Charger les références une seule fois

J'ouvre la session, je charge les références du bloc, et je n'y touche plus jusqu'à la fin du bloc. Recopier une fiche personnage à la main dans un champ de prompt dix fois par jour finit par produire dix versions légèrement différentes du même personnage. C'est cette gymnastique absurde qui m'a poussé à construire [Imaginode, un canvas IA à nodes](/blog/pourquoi-jai-construit-imaginode-canvas-ia) où les références restent branchées sur les plans. Peu importe l'outil que tu utilises : l'idée est de ne jamais retaper ce qui est déjà validé.

### Le plan témoin

Avant le premier plan du bloc, je sors ou je régénère un **plan témoin** du décor : une image validée qui fixe la lumière, la température, la valeur des noirs. Il reste affiché à côté pendant toute la session. Chaque nouveau plan est comparé à l'œil avec lui avant d'être gardé.

La méthode n'a rien de sophistiqué. Elle attrape pourtant la dérive de lumière, la panne la plus sournoise d'une série IA, celle qu'on ne voit pas sur un plan isolé et qui saute aux yeux au montage quand deux plans de la même scène ne racontent plus la même heure.

### Un plafond d'essais fixé avant de commencer

Le piège de la fin de matinée, c'est la variation infinie. Le plan est presque bon, tu relances, il est presque bon autrement, tu relances encore. Je fixe un plafond d'essais par plan avant de commencer le bloc. Quand il est atteint, je n'appuie plus sur le bouton : je reviens au prompt, à la référence ou au découpage. Le plus souvent, le problème est en amont.

### Nommer et tracer en même temps

Chaque sortie gardée est renommée tout de suite, avec une nomenclature stable : projet, épisode, scène, plan, version. Et je note dans un tableau le moteur, sa version et la date. Trois colonnes, rien de plus. Sur un film primé ou une commande client, on finit toujours par te demander quel outil a produit quel plan. Le remplir en direct prend dix secondes, le reconstituer après coup m'a déjà coûté des journées entières.

## Début d'après-midi : le creux, et ce que j'y mets

Le début d'après-midi est rarement le bon moment pour juger des images au détail près, alors je n'y programme plus de génération fine. Je garde ce créneau pour ce qui demande de la rigueur sans demander l'œil.

C'est le moment des tâches de studio que tout le monde repousse : répondre aux mails de production, vérifier les conditions d'utilisation d'une plateforme dont l'offre a changé, mettre à jour le tableau de traçabilité, préparer les fichiers d'un festival. Quand on est seul, personne d'autre ne fera cette partie, et la laisser s'accumuler finit par manger une journée entière en fin de mois.

C'est aussi le moment où je décolle de l'écran. L'INRS, l'institut de référence en France sur la santé au travail, le dit sans détour sur sa page consacrée au [travail sur écran](https://www.inrs.fr/risques/travail-ecran/prevention-risques.html) : travailler toute la journée sur un écran n'est pas recommandé, il faut alterner le travail informatisé avec d'autres tâches, et prévoir des pauses actives, idéalement toutes les trente minutes.

![Page de l'INRS sur la prévention des risques du travail sur écran, encadré En pratique recommandant des pauses actives idéalement toutes les 30 minutes](/images/blog/journee-production-studio-ia-solo/workflow-2.webp)

*Capture de la page « Travail sur écran : prévention des risques » de l'INRS (inrs.fr), relevée le 8 octobre 2026.*

Je ne tiens pas toujours le rythme des trente minutes, soyons honnêtes. Mais la production IA a une particularité qui aide : les temps de rendu. Quand une génération tourne, je me lève. Je marche jusqu'à la fenêtre, je range, je relis une fiche papier. Ouvrir un autre onglet « pour gagner du temps » est le réflexe à casser. Ce temps mort devient une pause au lieu de devenir un scroll.

> 💡 **Le cut de Frank :** imprime la liste des plans du jour et coche à la main. Revenir vers une feuille plutôt que vers un onglet te sort de l'écran plusieurs fois par heure sans que tu aies besoin d'y penser.

## L'après-midi : monter avec des plans pas finis

Les rendus du matin sont corrects, pas finaux, et ils partent quand même sur la timeline.

Ça surprend toujours les gens qui débutent. Ils veulent un plan parfait avant de le poser sur la timeline. Le résultat, c'est qu'ils passent une heure à finaliser un plan qui disparaîtra au montage parce que la scène respire mieux sans lui. Finir un plan avant de savoir s'il survit, c'est payer pour du travail qu'on jette.

Je pose donc les rendus corrects du matin, dans l'ordre du découpage, et je regarde la scène tourner. Le montage me dit trois choses que la génération ne peut pas me dire :

- quels plans sont trop longs, ce qui arrive presque toujours avec les clips générés ;
- quels plans ne servent à rien, souvent les plus beaux, ceux qu'on a eu du mal à lâcher ;
- quels plans manquent, en général un plan de réaction ou un plan de respiration qu'on n'avait pas écrit.

Les plans qui survivent passent en finition le lendemain matin, dans le bloc suivant. Les plans qui manquent rejoignent la liste du jour suivant. Cette inversion, monter avant de finir, est peut-être la seule chose qui rende soutenable une production longue quand on est seul : le vrai coût d'un épisode se compte en plans multipliés par le nombre de fois où on les relance.

Un test que je recommande : regarder la scène montée au moins une fois en plein écran, son coupé. Sans le son, les faiblesses de rythme et les sauts de lumière ressortent beaucoup plus vite. C'est aussi là que j'attrape les raccords qui ne tiennent pas, le genre d'erreurs que j'ai listées dans [l'article sur les erreurs de raccord dans un film IA](/blog/film-ia-erreurs-raccord-incoherences-visuelles-eviter).

## Fin de journée : le son, avec une oreille encore fraîche

Le son arrive en fin de journée, mais pas à la toute fin. Je lui garde un créneau avant que la fatigue s'installe, parce que l'oreille pardonne beaucoup moins que l'œil et qu'un mix fait épuisé s'entend le lendemain.

Une image générée arrive muette. Si tu poses une musique par-dessus et rien d'autre, tu obtiens une bande démo. Le travail du soir consiste à construire l'espace : une ambiance par décor, qui revient à l'identique d'une scène à l'autre, puis les effets, puis la musique. Sur *Lost Garden*, la serre a sa signature sonore fixe. Le spectateur ne l'analyse pas, il reconnaît le lieu avant de le voir.

Je cale tous mes mixes sur une cible de loudness unique pour tout le projet. La recommandation [EBU R 128](https://tech.ebu.ch/publications/r128) fixe une loudness moyenne de programme à -23 LUFS. Les plateformes appliquent ensuite leurs propres normalisations, mais l'important est d'avoir une cible unique et de s'y tenir, pour que deux scènes ou deux épisodes ne sonnent pas différemment.

![Créatrice seule assise dans sa voiture garée dans un parking souterrain la nuit, téléphone contre l'oreille pour vérifier un mix son sur un petit haut-parleur](/images/blog/journee-production-studio-ia-solo/workflow-1.webp)

Dernier contrôle avant de fermer la session son : l'écoute sur un petit haut-parleur. Téléphone, ordinateur portable, enceinte de cuisine. Une partie de ton public regardera sur un téléphone. Si les dialogues disparaissent sous la musique sur un haut-parleur de téléphone, le mix n'est pas fini, peu importe ce qu'il donne au casque.

## Le soir : archiver avant de fermer

La dernière demi-heure est la moins spectaculaire et c'est elle qui protège tout le reste.

Les historiques de génération vivent sur des serveurs qui ne t'appartiennent pas. Un service ferme, une offre change, un compte est suspendu, et des semaines de travail deviennent inaccessibles. Tout ce qui a été gardé dans la journée descend donc en local le soir même, renommé, rangé dans l'arborescence du projet.

Pour la sauvegarde elle-même, je suis la règle 3-2-1, telle que la résume le document [Data Backup Options publié pour l'US-CERT](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf) : trois copies de tout fichier important, une principale et deux sauvegardes, sur deux types de supports différents, dont une copie hors du lieu de travail. Pour un studio solo, ça donne en pratique le disque de travail, un disque externe, et une copie distante.

Puis j'écris le journal de bord. Cinq lignes, pas plus :

1. ce qui a été produit, en plans gardés et en secondes montées ;
2. ce qui a cassé et pourquoi ;
3. les prompts ou réglages qui ont marché et qu'il faut reporter dans la bible ;
4. les plans à refaire demain ;
5. le premier geste de demain matin.

Le cinquième point est le plus utile. Le lendemain, je ne commence pas devant une page blanche : je commence par une phrase que j'ai écrite la veille, en pleine connaissance du projet.

> 💡 **Le cut de Frank :** les ratés vont dans la bible au même titre que les réussites. Quand une formulation produit systématiquement un défaut, note-la à côté de la bonne. Dans six semaines, tu auras oublié pourquoi tu l'avais écartée, et tu la réécriras.

## La journée en un tableau

| Moment | Poste tenu | Ce qui sort à la fin | Le piège principal |
| --- | --- | --- | --- |
| Première heure | Scénariste, découpeur | Liste des plans du jour, un bloc choisi, la phrase d'objectif | Ouvrir un générateur « juste pour tester » |
| Fin de matinée | Directeur photo | Plans du bloc en rendus corrects, nommés et tracés | La variation infinie sur un plan presque bon |
| Début d'après-midi | Producteur, administratif | Mails, traçabilité, fichiers festival à jour | Programmer de la génération fine pendant le creux |
| Après-midi | Monteur | Scène montée, liste des plans qui survivent et qui manquent | Finaliser un plan avant de savoir s'il reste |
| Fin de journée | Ingénieur du son | Ambiances posées, mix à la cible, écoute téléphone faite | Mixer épuisé |
| Le soir | Archiviste | Sorties en local, sauvegarde 3-2-1, journal de cinq lignes | Fermer sans archiver « parce que c'est sur la plateforme » |

Le tableau ne dit rien des horaires, volontairement. Certains jours, la génération déborde sur l'après-midi parce qu'un bloc résiste. D'autres jours, il n'y a presque pas de génération parce que la journée est dédiée au son ou à la finition. Ce qui reste fixe, c'est la séquence : on écrit avant de générer, on monte avant de finir, on archive avant de fermer.

## Ce qui casse une journée solo, et comment je répare

### Le brief qui grandit en cours de route

Tu génères un plan, il te donne une idée, tu l'explores, et à seize heures tu travailles sur une scène qui n'existe pas dans le découpage. L'exploration a sa place, mais pas dans une journée de production. Ma parade : toute idée nouvelle va dans un fichier « plus tard », et je la regarde à froid le lendemain matin pendant l'heure d'écriture.

### L'outil mis à jour du jour au lendemain

Un modèle change de version et ne rend plus exactement pareil. Le plan témoin sert aussi à ça : si le premier plan du bloc ne colle plus au témoin malgré un prompt identique, je le vois en cinq minutes au lieu de le découvrir au montage. Dans ce cas, je recale le bloc entier ou je le reporte au lendemain. Retoucher un plan isolé crée une île visuelle qui se voit encore plus.

### La journée sans livrable

Tu as beaucoup travaillé et rien n'est sorti. Presque toujours, c'est la phrase d'objectif du matin qui manquait, ou elle était trop vague. « Avancer sur l'épisode » ne se vérifie pas. « La scène 4 montée en rendus corrects » se vérifie à dix-sept heures, oui ou non.

### Les interruptions

Seul, tu es aussi le service client, la comptabilité et le community manager. Si tu réponds aux messages au fil de l'eau pendant la génération, ton jugement visuel ne s'installe jamais. Je regroupe ces réponses dans le creux du début d'après-midi, et les notifications restent coupées le matin.

### La fatigue d'écran qui fausse le jugement

Après plusieurs heures de génération, tout finit par sembler acceptable. Ou inacceptable. Le signe qui ne trompe pas : tu gardes un plan que tu aurais jeté le matin. Quand je le remarque, j'arrête de générer et je passe au montage ou à l'archivage, des tâches où l'erreur coûte moins cher.

### Le perfectionnisme sur un plan qui ne restera pas

C'est le piège classique du solo, parce que personne ne te demande « on en a vraiment besoin ? ». Le montage avant finition le désamorce presque entièrement. Encore faut-il s'y tenir les jours où un plan te tient à cœur.

## Seul ou à deux : ce qui change vraiment

À deux, la forme des journées reste la même : chacun garde ses blocs, son montage, ses soirées d'archivage. La différence se joue sur ce qui doit exister par écrit.

Seul, ton pipeline peut vivre dans ta tête. À deux, il doit être écrit : quel moteur fait quoi, dans quel ordre, avec quels réglages par défaut, quelle nomenclature de fichiers. Le jour où quelqu'un d'autre ouvre ton projet, ce document est la seule chose qui empêche le film de dériver. Ce que je recommande au créateur solo, c'est d'écrire ce document dès maintenant, même s'il est le seul à le lire. Il te servira le jour où tu reprendras un projet après trois mois, ce qui revient presque au même que de le confier à quelqu'un d'autre.

L'autre changement, c'est le regard extérieur. À deux, quelqu'un peut te dire qu'un plan ne sert à rien. Seul, ce regard, tu dois le fabriquer : le montage son coupé, la relecture du matin, la nuit entre la génération et la finition. Ces trois habitudes font une bonne partie du travail d'un deuxième regard.

## FAQ

### Combien d'heures par jour travaille-t-on dans un studio IA solo ?

Il n'existe pas de chiffre de référence et je me méfie de ceux qui en donnent un. En revanche, le nombre d'heures compte moins que leur répartition. Une journée de huit heures passées à générer produit souvent moins qu'une journée de six heures découpée entre écriture, génération, montage, son et archivage. L'INRS rappelle de son côté que travailler toute la journée sur écran n'est pas recommandé et qu'il faut alterner avec d'autres tâches. En production IA, les temps de rendu offrent justement des pauses naturelles, à condition de ne pas les remplir avec un autre écran.

### Faut-il générer tous les jours quand on produit seul ?

Non. Certaines journées sont entièrement consacrées au son, à la finition, au montage ou à l'écriture de l'épisode suivant, et ce sont souvent elles qui font avancer le projet le plus nettement. Générer tous les jours donne une impression de progrès, parce qu'on voit des images nouvelles s'accumuler. Mais un dossier rempli de plans non montés ne rapproche pas du film fini. Je préfère une semaine avec trois jours de génération ciblée et deux jours de montage et de son qu'une semaine entière passée dans les générateurs. Le découpage écrit le matin indique quel type de journée le projet demande.

### Comment éviter de perdre sa journée dans les variations infinies ?

D'abord un plafond d'essais par plan, fixé avant de commencer et pas en cours de route, quand on est déjà pris par le plan. Ensuite un plan témoin du décor affiché pendant toute la session, qui donne un critère objectif pour valider ou rejeter. Enfin la règle de revenir en amont quand le plafond est atteint : réécrire le prompt, changer de référence ou revoir le découpage plutôt que relancer. Dans la grande majorité des cas, un plan qui résiste après plusieurs essais a un problème d'intention ou de référence, et aucune relance supplémentaire ne le réglera.

### Quel matériel faut-il pour un studio IA solo ?

Moins qu'on ne le croit pour la génération, puisque la plupart des moteurs vidéo tournent dans le cloud. En revanche, trois postes méritent un vrai investissement. Un écran correctement calibré, parce que tu juges des couleurs et des lumières toute la journée. Un casque ou des enceintes de monitoring fiables pour le son, complétés par une écoute sur téléphone. Et du stockage : un disque de travail rapide, un disque externe de sauvegarde et une copie distante, pour respecter la règle 3-2-1. Un studio solo qui perd ses archives perd des semaines de travail, et c'est le seul poste où l'économie se paie très cher.

### Comment organiser ses fichiers quand on produit seul ?

Avec une nomenclature décidée avant le premier plan et appliquée à chaque fichier gardé, au moment où on le garde. Projet, épisode, scène, plan, version, dans cet ordre, pour que le tri alphabétique suive le film. À côté, un tableau de traçabilité avec le moteur, sa version et la date pour chaque plan livré. Ce tableau répond aux questions des clients sur les droits, aux formulaires de déclaration d'usage de l'IA des festivals, et à toi-même quand tu dois régénérer un plan six mois plus tard. Le remplir en direct prend quelques secondes ; le reconstituer après coup prend des journées.

### Peut-on produire une série entière seul avec l'IA ?

C'est possible, mais la difficulté change de nature. Sur un court métrage, le risque principal est de ne pas finir. Sur une série, c'est de finir un épisode incohérent avec le précédent, parce que les personnages, les lumières et les outils dérivent d'une semaine à l'autre. Ce qui rend la chose tenable, c'est une bible écrite avant la première image, une génération par blocs de décor, un montage avant finition et un archivage rigoureux. Sans cette organisation, la plupart des séries IA s'arrêtent après le pilote, qui n'est souvent qu'un court métrage déguisé.

### Quelle différence entre cette journée type et un sprint de 24 heures ?

Le sprint sacrifie volontairement la durabilité pour livrer vite : un brief serré, un quota d'essais strict, une sélection impitoyable et un export le lendemain matin. On peut le faire une fois, pour une deadline réelle, et on en sort épuisé. La journée type décrite ici vise l'inverse : un rythme qu'on peut tenir cinquante jours de suite sur un projet long, avec un découpage quotidien, des blocs de génération, un montage avant finition et un archivage chaque soir. Les deux méthodes partagent les mêmes principes de découpage et de traçabilité, mais pas la même gestion de l'énergie.

## Ce que je retiens

Le bilan d'une journée de studio IA solo tient en trois questions : ce qui est sur la timeline le soir, ce qui est sauvegardé en trois exemplaires, et la phrase qui t'attend pour le lendemain matin. Le nombre d'images générées n'en fait pas partie.

Si tu ne devais garder qu'un geste, garde celui du matin : une heure sans générateur, une liste de plans écrite, un bloc choisi, une phrase d'objectif. Le reste de la journée en découle. Et si un jour tu as besoin d'un regard extérieur sur ton organisation de production, c'est le genre de chose sur laquelle j'accompagne des créateurs et des équipes depuis ma [page de prestation](/prestation).
