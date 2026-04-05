---
title: "Créer un court métrage 100 % IA sans caméra ni acteurs"
date: "2026-03-30"
category: "tutoriels"
excerpt: "Structure narrative, cohérence des personnages, limitations honnêtes, et finishing pour tenir un festival en ligne."
thumbnail: "/images/blog/creer-court-metrage-100-ia-sans-camera-acteurs/hero.webp"
---
Tu veux raconter une histoire complète sans lever une caméra, sans casting, sans location payante. L’excitation dure jusqu’au troisième plan, quand le visage change, le mur ondule, et le silence absolu transforme ton drame en démo logiciel. Un court intégralement généré est possible, mais il demande **les mêmes disciplines qu’un vrai tournage**, brief, storyboard, raccords, son, et acceptation des limites. La différence, c’est que tu remplaces la lumière du soleil par une phrase, et le bruit du plateau par une piste que tu dois inventer.

Trois portraits. **Étienne**, musicien à Rennes, voulait un clip narratif de deux minutes : il a d’abord échoué en voulant des plans trop larges et des mains partout, puis a gagné en resserrant et en cachant. **Farah**, étudiante en arts à Montréal, préparait un pitch pour un festival en ligne : elle a documenté chaque étape générée pour rassurer le comité sur la chaîne de production. **Giorgio**, autodidacte à Milan, pensait sauter le montage : il est revenu à DaVinci parce que le rythme ne se génère pas tout seul dans un seul clip long. Les trois se sont entendus sur une évidence simple après coup : **finir** vaut mieux qu’explorer dix outils en parallèle sans livrable final ni archive propre pour plus tard ou pour le festival suivant éventuel.

Le format court a une histoire et des contraintes narratives reconnues, utiles pour calibrer tes ambitions, voir [court métrage](nf:https://en.wikipedia.org/wiki/Short_film) sur Wikipédia. L’IA ne supprime pas le besoin d’une structure, elle le rend plus visible quand elle manque.

## Ce que « 100 % IA » engage vraiment

### Limites honnêtes à accepter tôt

Les interactions mains objets précises restent fragiles sur beaucoup de pipelines. Les profils de visage extrêmes peuvent dériver. Les foules détaillées explosent en artefacts. Les longs dialogues sur un seul gros plan bouche posent problème. Ce n’est pas une liste pour te décourager, c’est une **carte des contournements** : hors champ, suggestion, découpe, son.

Cent pour cent généré ne veut pas dire zéro intervention humaine. Ça veut dire : pas de pixels capturés par une caméra sur le plateau. Tu interviens encore sur le brief, le prompt, le choix des plans, le montage, l’étalonnage, le mix, parfois l’inpainting. Soyons clairs pour éviter la déception : **tu remplaces la caméra**, pas la décision. Si tu annonces autre chose à ton public, prépare-toi à un retour bancal.

## Durée cible et promesse honnête

Pour un premier projet viable, vise **soixante à quatre-vingt-dix secondes** finales, pas cinq minutes. Une minute bien montée bat trois minutes de séquence unique qui s’effondre. Écris ta promesse en une phrase : « le spectateur découvre X au bout de Y secondes ». Si tu ne peux pas la remplir, ton histoire est trop large.

Le [workflow complet pour passer d’une idée à un film IA réaliste](/blog/workflow-complet-idee-film-ia-realiste) détaille les phases brief, pilote image, mouvement, son, que tu peux boucler plusieurs fois sur une minute.

> **Astuce pro :** une minute, c’est environ quinze à vingt-cinq plans selon ton style. Compte-les au storyboard avant de générer.

## Script oral et structure

Écris pour la voix et l’image, pas pour le roman. Phrases courtes, verbes d’action, pauses marquées par des points. Lis à voix haute, si tu t’essouffles, le spectateur aussi. Le guide [comment écrire un script efficace pour une vidéo générée par l’IA](/blog/comment-ecrire-script-efficace-video-generee-par-ia) colle à cette étape.

Structure simple qui fonctionne encore : **équilibre**, perturbation, conséquence, image finale qui pose une question ou un geste. Tu n’as pas besoin d’un twist hollywoodien, tu as besoin d’une **émotion claire** à la fin.

## Feuille de personnage et raccords

Une fiche par personnage : âge approximatif, vêtement avec matière, coiffure, accessoire rare, marque de temps. Tu recopies la fiche dans chaque prompt de plan. Tu changes seulement cadrage et action. Pour les enchaînements, [comment créer des scènes cohérentes avec plusieurs plans en IA](/blog/comment-creer-scenes-coherentes-plusieurs-plans-ia) évite les ruptures de costume ou de lumière.

Si un plan exige des mains au premier plan et que ton outil faiblit, **recadre** ou remplace le geste par un détail objet, tasse, clé, lettre.

## Storyboard stylo, trois cases minimum par beat

Même moche. Case A entrée, case B tension, case C conséquence. Sous chaque case : type de plan, focale, mouvement modeste. Le storyboard est le contrat entre ton imagination et le modèle qui ne lit pas dans tes pensées.

### Dossier projet type

Crée `COURT2026/` avec `brief.txt`, `storyboard.jpg` (photo du papier), `prompts.txt`, `audio/`, `renders/img/`, `renders/vid/`, `exports/`. À chaque plan validé, tu déplaces le fichier dans `renders` avec un nom qui contient scène, plan, version. Quand tu dois rouvrir le projet dans un mois, tu ne dépend pas de ta mémoire.

## Génération : pilote, puis série

**Étape 1** : trois images fixes pour le look, même socle, variation lumière seulement.

**Étape 2** : valide peau et tissu au zoom, choisis une **référence pilote**.

**Étape 3** : pour chaque plan, génère image puis courte vidéo si besoin, amplitude **20 à 45 %** sur les tests, jamais orbite d’emblée sur décor chargé.

**Étape 4** : exporte PNG propres, nomme `sc01_pl02_v03.png`, copie le prompt dans `prompts.txt`.

### Journée type de production

Matin : tu ne génères pas, tu mets à jour le storyboard et tu lis le script à voix haute. Après-midi : tu fais trois plans maximum, image puis vidéo, avec critique immédiate sur téléphone. Soir : tu montes ce que tu as, même brut, pour entendre les trous de rythme. Cette cadence évite l’illusion du progrès par le nombre de fichiers sans montage.

Pour le rythme global et les actes, [comment structurer une vidéo IA comme un vrai film](/blog/comment-structurer-video-ia-comme-vrai-film) aide à éviter le plat du milieu.

```text
Scene 01 plan 02: 35mm eye level medium shot, same woman cream sweater,
same kitchen north window rain, side key, practical warm back,
slow push in 3 percent, no orbit, hands out of frame
```

![Repère de workflow, lumière et texture pour caler ton œil.](workflow-1.webp)

### Tableau : choix créatif, risque IA, mitigation

| Choix | Risque | Mitigation |
| --- | --- | --- |
| Plan large intérieur | murs ondulants | resserrer, moins de lignes |
| Dialogue long même plan | bouche et joues | découper, inserts |
| Travelling long | géométrie | trois plans fixes + son |
| Multiples personnages | identité | fiches + cadrage serré |
| Nuit sans practical | boue visuelle | lampe visible dans le cadre |
| Mains au 18 mm | doigts longs | focale plus longue |

> **Astuce pro :** le son masque des raccords durs. Une porte, un pas, un souffle, valent trois fondus IA douteux.

![Second repère, profondeur et grain, avant passage vidéo ou post.](workflow-2.webp)

Pour le rythme visuel, cette référence vidéo reste utile : [rythme et composition](https://www.youtube.com/watch?v=hHWkvFH8u9I).

## Montage, étalonnage, mix

Importe tout dans ton NLE. Recadre légèrement pour casser la symétrie parfaite. Courbe globale, masque peau si besoin, **grain overlay** fin. Mix : room tone dès le début, bruitages discrets, musique qui laisse des silences. Exporte **deux masters** si tu dois : un propre et un « social » avec compression anticipée.

### Clics DaVinci Resolve (exemple)

Crée un projet `CourtIA`, paramètre timeline 24 fps, résolution selon ton master. Importe les clips dans un bin par scène. Sur la page Edit, pose une piste audio pour room tone en A1, voix en A2, musique en A3. Coupe sur les beats respiratoires du dialogue, pas sur chaque respiration artificielle de l’IA. Passe en Color : node 1 courbe globale, node 2 masque visage doux pour protéger les rouges, node 3 grain si besoin. Sur la page Deliver, exporte `master_h264.mp4` et une archive `master_prores.mov` si tu dois ré-encoder plus tard.

Si tu utilises Premiere ou Final Cut, la logique est identique : **étalonnage avant compression**, pas l’inverse.

## Guerre des tranchées : ce que les débutants ratent, et comment réparer

Tu veux un plan séquence parce que « ça fait cinéma ». Tu obtiens une géométrie molle. **Découpe** en trois plans, le spectateur préfère trois vérités.

Tu changes de modèle entre les scènes sans étalonnage commun. Les personnages changent de peau. **LUT ou courbe de série** sur toute la timeline.

Tu oublies le son jusqu’au dernier jour. Tu te demandes pourquoi ça sonne fake. **Ambiance dès le premier montage**.

Tu livres sans readme sur ce qui est généré et retouché. Les festivals et clients posent la question. **Documente**.

Tu vises le 4K avant d’avoir une histoire. Tu optimises des erreurs. **Histoire d’abord**, résolution ensuite.

Tu copies des prompts sans les adapter à ton personnage. Tu obtiens un casting différent à chaque fois. **Fiche stable**.

Tu refuses le montage parce que « l’IA fait la vidéo ». Le rythme reste ton métier humain.

Tu veux une scène de foule : chaque figure est une bombe à mains et visages. **Silhouettes**, arrière-plan flou, ou foule suggérée par son et ombres.

Tu mélanges deux styles visuels parce que tu as changé de checkpoint au milieu. Le spectateur lit une coupure de pub. **Verrouille le stack** pour le projet ou re-grade tout sur une courbe commune.

Tu négliges les sous-titres accessibles : même si ta cible parle la langue, les festivals en ligne et les réseaux récompensent la lisibilité. Exporte un `.srt` simple aligné sur ton montage final.

> **Astuce pro :** regarde le montage avec le son coupé, puis avec le son seul. Les deux passes révèlent des problèmes différents.

> **Astuce pro :** garde une version « brut IA » et une version « grade » dans deux dossiers. Quand un plan doit être regénéré, tu sais quel prompt a servi.

## Frequently Asked Questions (FAQ)

**Quelle durée pour un premier court viable ?**

Soixante à quatre-vingt-dix secondes finales sont un bon premier objectif. Monte seulement quand la structure tient.

**Dois-je absolument du 4K ?**

Non pour apprendre. Oui pour certaines projections si ton pipeline tient. Itère bas, finalise haut.

**Comment gérer les droits et la transparence festival ?**

Documente outils, retouches humaines, éléments musicaux et leur licence. Chaque festival a ses règles, prépare un PDF court.

**Le handheld sans tournage ?**

Amplitude très faible sur la génération, ou tremblement ajouté en post sur l’arrière-plan seulement si le visage se déforme.

**Combien de personnages maximum au début ?**

Un ou deux avec fiches solides. Chaque personnage multiplie les risques de rupture.

**Puis-je mélanger IA et une seule prise réelle ?**

Oui, c’est même souvent plus crédible. Ce guide parle 100 % généré, mais l’hybride est une porte de secours intelligente.

**Où apprendre le vocabulaire des plans ?**

Films muets avec arrêt image, nommer le cadrage à voix haute, recopier dans tes prompts.

**Pourquoi mon clip ressemble à une pub ?**

Saturation, netteté, lumière frontale. Penche la key, baisse le sharp sur la peau, ajoute du grain.

**Comment éviter les visages qui changent ?**

Même lumière, même fiche, même checkpoint quand possible, références fixes.

**Le mouvement déforme tout ?**

Baisse l’amplitude, simplifie le décor, ou repars d’une frame corrigée.

**Comment choisir la musique sans tuer le récit ?**

Évite les morceaux qui montent en permanence sans respiration. Coupe la musique sous les répliques importantes. Laisse trois secondes de quasi silence après une information forte. Teste avec quelqu’un qui n’a pas travaillé sur le projet, demande ce qu’il a compris sans regarder l’écran, seulement le son.

**Puis-je utiliser des voix clonées ou synthétiques ?**

Selon ton territoire légal et les conditions des outils. Documente la source de la voix dans ton readme festival. Si la voix est recognisable comme une célébrité, évite, même « pour un essai ». Pour un personnage fictif, garde une cohérence de timbre entre les plans en réutilisant le même preset ou le même service documenté.

**Comment gérer les textes à l’écran ?**

Garde les cartons courts, typographie sobre, lisibles sur téléphone. Génère le fond d’image sans texte si le modèle déforme les lettres, ajoute le texte en post vectoriel. Aligné sur la safe zone des réseaux si tu doubles la sortie.

**Faut-il un storyboard numérique ?**

Pas obligatoire. Une photo de feuille suffit si tu la nommes et la dates. L’important est la **décision de cadrage** fixée avant la génération, pas l’outil de dessin.

**Comment savoir si mon histoire tient sans image ?**

Lis le script seul à quelqu’un. Si la personne demande des clarifications sur qui fait quoi, ton image ne sauvera pas la scène. Serre le texte avant de payer en GPU.

**Dois-je storyboard tous les plans dès le début ?**

Au minimum les **beats** : entrée, pivot émotionnel, climax, chute. Les plans intermédiaires peuvent se préciser pendant la génération si tu gardes la même promesse.

**Comment éviter la fatigue des réseaux sur le format ?**

Le format compte moins que l’intention claire en cinq secondes. Recadre pour le vertical si besoin, mais repense la composition, ne recadre pas aveuglément un horizontal.

**Que faire si un plan clé refuse de se stabiliser ?**

Change le lieu dans le brief, simplifie l’action, ou remplace le plan par un insert objet qui porte la même information narrative. L’histoire est plus importante que le plan fanfaron.

**Comment archiver pour moi dans dix ans ?**

Exporte un master lisible, note les versions d’outils dans un fichier texte, garde les prompts et un échantillon des frames brutes. Les codecs changent, les fichiers texte restent.

**Puis-je collaborer à deux sur le même projet ?**

Oui si vous partagez la même convention de noms, le même dossier `prompts.txt`, et la même fiche personnage. Sinon vous créez deux films différents dans le même dossier.

**Le grain masque-t-il les défauts de l’IA ?**

Un peu, mais c’est un pansement. Le grain harmonise, il ne remplace pas une géométrie cassée. Utilise-le après avoir minimisé les erreurs structurelles.

**Comment présenter le projet à un festival en ligne ?**

Vidéo finale, synopsis court, readme technique avec outils, musique sous licence, captures du storyboard. Certains festivals demandent une déclaration sur l’usage de l’IA, prépare une phrase honnête sans jargon marketing.

**Comment éviter le décalage entre bande-annonce et film ?**

Si tu montes un teaser avant le film fini, utilise des plans que tu es prêt à garder, ou marque clairement le teaser comme « work in progress ». Rien ne fatigue plus un jury que des attentes créées par un trailer sur-généré et un corps de film instable.

**Faut-il un coloriste externe ?**

Si tu as le budget et une projection cinéma prévue, oui ça peut aider. Pour un premier projet en ligne, une courbe maîtrisée, des masques peau prudents, et un grain cohérent suffisent souvent si ton image source est propre.

**Comment intégrer des bruitages sans bibliothèque payante ?**

Enregistre cinq sons toi-même avec un téléphone propre, porte, pas, eau, chaises. Même basiques, ils ancrent plus qu’une banque générique mal choisie. Nettoie le bruit de fond extrême, normalise doucement, place sous la vidéo avant la musique.
