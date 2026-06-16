---
title: "Diriger regards et micro expressions des personnages IA"
date: "2026-05-31"
dateModified: "2026-06-10"
category: "tutoriels"
excerpt: "Technique de direction d'acteur appliquée aux prompts pour obtenir des regards justes et des expressions stables."
thumbnail: "/images/blog/diriger-regards-micro-expressions-personnages-ia/hero.webp"
---
Personnage beau. Regard dans le vide. Sourire stock photo pendant un deuil. Sans direction dans le prompt, le moteur livre le catalogue LinkedIn.

**Diriger regards et micro expressions des personnages IA**, c'est écrire l'intention de metteur en scène : qui regarde quoi, avec quelle micro-réaction physique. Ce guide transpose sur les prompts ce que j'apprends sur un plateau avec de vrais acteurs : objectif du regard, beat émotionnel, contrainte corporelle.

![Gros plan acteur IA regard latéral micro expression retenue éclairage naturel](/images/blog/diriger-regards-micro-expressions-personnages-ia/hero.webp)

## Le moteur ne devine pas ton scénario émotionnel

Les modèles image et vidéo optimisent une figure humaine « agréable » par défaut. Sourire neutre, regard légèrement au-dessus de la caméra, yeux symétriques brillants. C'est l'opposé d'une scène dramatique où le personnage évite le contact, retient une larme, ou fixe un objet avec une micro-tension à la mâchoire.

La direction d'acteur en IA passe par trois écritures concrètes. **L'objet du regard** : pas « looking sad », mais `looking down at coffee cup in hands`. **Le beat** : ce qui vient de se passer en une phrase (`just heard bad news, holding back tears`). **La micro-contrainte physique** : `slight jaw tension, lips pressed, no smile`.

Sans objet du regard, les yeux partent en roulette. Sans beat, l'expression reste générique. Sans micro-contrainte, tu obtiens le masque LinkedIn.

Le spectateur lit d'abord les yeux, puis la bouche. Si les yeux sont nets mais la bouche fond ou sourire inapproprié, c'est fini. Priorise le triangle du visage dans le cadrage et dans le prompt.

| Élément direction | Mauvais prompt | Prompt dirigé |
| --- | --- | --- |
| Regard | « emotional face » | `eyes fixed on letter on table, not at camera` |
| Beat | « sad scene » | `moment after rejection, suppressing reaction` |
| Micro | « realistic » | `subtle nostril flare, brow slightly drawn` |
| Interdit | (absent) | `no stock smile, no glamour pose` |

Pour la continuité personnage, voir [personnages cohérents sur plusieurs images IA](/blog/personnages-coherents-plusieurs-images-ia). Pour les champs-contrechamps, [plan over épaule et continuité du regard en IA](/blog/plan-over-epaule-continuite-regard-ia). Pour la fiche personnage, [comment écrire un prompt personnage réaliste et constant](/blog/comment-ecrire-prompt-personnage-realiste-constant).

## Workflow de direction dans le prompt

### Étape 1 : écrire la feuille de scène en une ligne

Qui, quoi vient de se passer, vers quoi va le regard, ce qui est interdit expressif. Exemple : « Marie, vient de raccrocher, fixe le téléphone sur la table, ne pleure pas encore, pas de sourire. » Cette ligne précède tout prompt technique lumière/cadrage.

### Étape 2 : choisir l'axe du regard

Trois axes classiques. **Vers objet hors champ** : crédible, évite le contact caméra agressif. **Vers un autre personnage** (hors champ ou visible) : dialogue vivant. **Vers caméra** : rare, à justifier narrativement (accusation, confession). Note l'angle : `looking 30 degrees off camera left`.

### Étape 3 : ajouter la micro-expression physique

Une ou deux contraintes, pas dix. `slight lower lip tension`, `eyes slightly wet not crying`, `one eyebrow barely raised`. Les modèles sur-interprètent les émotions fortes. La retenue photographie mieux.

![Schéma axes regard champs-contrechamps annotations prompt direction acteur](/images/blog/diriger-regards-micro-expressions-personnages-ia/workflow-1.webp)

### Étape 4 : verrouiller cadrage et focale

Gros plan 85 mm pour les micro-expressions. Plan poitrine 50 mm pour le dialogue. Évite le 24 mm sur un visage si tu veux de la nuance : la distorsion caricature les expressions. Voir [comment diriger un personnage IA comme un acteur](/blog/comment-diriger-personnage-ia-comme-acteur) pour le lien corps/langage.

### Étape 5 : batch et tri par regard

Quatre variations, même feuille de scène. Tri : le regard tombe-t-il sur l'objet ? L'expression correspond-elle au beat ? La bouche reste-t-elle cohérente ? Un regard à 20 degrés de l'objectif suffit à classer B.

### Étape 6 : contrechamp et réaction

Génère le plan réaction avec la même feuille de scène du point de vue de l'autre personnage ou d'un observateur. Même lumière, même beat temporel. Le montage porte le dialogue, pas un plan unique qui parle trente secondes.

### Scénario A : scène de rupture, gros plan, silence

Feuille : « Il vient de dire qu'il part, elle fixe un point sur le mur, mâchoire serrée. » Prompt : 85 mm, key fenêtre latérale, `looking past camera at wall`, `jaw clenched subtly`, `no tears yet`, `no smile`. Six variations, une A. Contrechamp sur ses mains qui lâchent une tasse. Montage : plan visage 4 s, plan mains 2 s. L'émotion tient sans dialogue.

### Scénario B : dialogue café, deux personnages

Plan A : personnage 1 regarde `coffee cup`, écoute. Plan B : personnage 2 regarde `person opposite`, parle (lèvres si vidéo). Même palette, même heure fictive. Les regards croisés ou évités selon le sous-texte. Si le modèle met les deux en sourire commercial, renforce les interdits et baisse le poids « beauty ».

### Scénario C : documentaire IA, témoignage caméra

Regard caméra justifié. Micro-expression : `thoughtful, not performing`, `slight pause before answer`, `natural blink`. Évite `confident presenter smile`. Le public détecte le faux témoignage en trois secondes.

## Dépannage

**Yeux brillants symétriques type IA.** Baisse saturation yeux en post, une micro ombre sous paupière, catchlight unique pas double parfait.

**Regard vers caméra non voulu.** Ajoute `not looking at camera` et un objet précis. Recadre si le modèle insiste.

**Sourire stock en scène grave.** Zone interdit explicite : `no smile, no teeth visible`. Renforce le beat négatif.

**Bouche qui fond entre frames vidéo.** Clip court, visage plus stable, ou gros plan moins large. Sépare visage et décor en stratégie de mouvement.

**Expressions contradictoires** (sourire + larmes sans intention). Réduis à une émotion dominante et une micro-contrainte. Le modèle ne joue pas le paradoxe humain complexe en une passe.

**Contrechamp regard incohérent.** Même hauteur de yeux, même direction de lumière, même ligne de regard notée sur la feuille de montage (`ligne 180° respectée`).

**Double catchlight symétrique.** Signale IA immédiat. Fix : inpaint léger ou prompt `single natural catchlight from window left`. Baisse la brillance des yeux en post.

**Expression figée sur dix secondes de vidéo.** Le visage ne vit pas. Fix : découpe en plans plus courts, ajoute un plan mains ou objet, accepte la retenue plutôt que la grimace mobile.

## La ligne 180° et les axes de dialogue en IA

Même sans plateau physique, la ligne 180° existe dans le montage. Si le personnage A regarde à gauche hors champ vers B, B doit regarder à droite vers A. Note sur ta feuille de montage : `A eyeline screen left`, `B eyeline screen right`. Quand tu génères B sans cette note, le modèle met souvent les deux en regard caméra par défaut. Le dialogue meurt.

Pour les scènes à trois, la géométrie se complique. Simplifie : génère d'abord les deux plans du duo principal, valide l'axe, puis le troisième personnage en insert ou en plan large où l'axe est moins critique. Ne génère pas trois gros plans serrés avec trois regards différents sans storyboard.

Les plans de réaction sans dialogue sont ton arme secrète. Un personnage qui écoute avec une micro-contrainte (`slight nod withheld`, `jaw set`) vend la scène mieux qu'un monologue sur un seul visage. Génère ces réactions en batch avec la même feuille de scène que le locuteur. Le montage alterne. L'émotion monte.

Quand tu bosses en langue française mais prompts en anglais pour la direction, garde un glossaire fixe : `looking off-camera left` toujours traduit pareil dans ton équipe. Les synonymes changent parfois le comportement du modèle. La constance vocabulaire est une forme de direction.

[🎥 WATCH: Check out this breakdown on the Business Dynamite YouTube channel: https://www.youtube.com/@BusinessDynamite - Specifically look at the segment on directing AI characters with eyeline and micro-expressions]

![Avant après correction regard hors champ micro expression gros plan IA](/images/blog/diriger-regards-micro-expressions-personnages-ia/workflow-2.webp)

> 💡 **Frank's Cut:** écris **l'objet du regard** (`looking at coffee cup`). Sans cible, les yeux partent en roulette. C'est la première ligne que je vérifie sur chaque prompt portrait avant la lumière.

Pour la théorie du jeu d'acteur, le travail de [Sanford Meisner sur l'attention et la réaction](https://www.sanfordmeisner.com) inspire la structure beat + objet. Côté technique regard, les articles [ASC sur le language des gros plans](https://www.theasc.com) aident à nommer ce que tu veux obtenir.

## FAQ

### Faut-il écrire les prompts direction en anglais ?

Souvent oui pour les termes techniques (`looking at`, `jaw tension`, `off-camera eyeline`). Tu peux rédiger ta feuille de scène en français puis traduire les lignes direction. Les modèles ont plus de données sur les tags anglais pour la photo et le cinéma. Garde la cohérence : une fois l'anglais choisi pour la direction, ne mélange pas au hasard.

### Comment diriger un regard vers un autre personnage hors champ ?

Précise l'angle et la hauteur : `looking at standing person at camera right, eye level`. Si possible, génère une silhouette floue ou un épaulement du second personnage pour ancrer l'eyeline. Le montage contrechamp confirme ce que le spectateur devine. Sans ancrage, le regard flotte.

### Les micro-expressions tiennent-elles en vidéo IA ?

Moins bien qu'en still. Privilégie clips courts, mouvement minimal, expressions retenues plutôt que larges. Un sourcil qui bouge de trop entre frames trahit le génératif. Pour une réaction forte, coupe sur un still ou un plan très court.

### Comment éviter le regard « dead eyes » ?

Objet du regard + micro-contrainte + lumière avec catchlight cohérent. Les yeux morts viennent souvent d'un prompt vide émotionnellement et d'une key frontale plate. Une key latérale douce avec un reflet dans les yeux qui cite la source aide. Pas de catchlight symétrique double.

### Peut-on corriger un mauvais regard en post ?

Légèrement en inpaint sur still. En vidéo, c'est coûteux et rarement propre. Mieux vaut regénérer avec feuille de scène renforcée. Le inpaint yeux sur trois frames peut suffire pour un plan fixe court.

### Combien d'interdits expressifs dans un prompt ?

Deux à trois maximum. `no smile`, `no glamour pose`, `no direct camera stare` si pertinent. Au-delà, le modèle se perd ou ignore. Les interdits complètent le beat positif, ils ne le remplacent pas.

### Comment maintenir la même expression sur plusieurs plans ?

Fiche personnage + feuille de scène par beat narratif + image de référence fixe réinjectée. L'expression change quand le beat change, pas quand le plan change. Documente le prompt direction dans un journal. Voir le guide personnage constant.

### Regard caméra pour pub : même technique ?

Oui, mais le beat est commercial : `friendly but not stock`, `product glance down`, `return to lens`. L'objet peut être le produit. Les interdits évitent le sourire catalogue. Teste sur mobile : l'intention doit lire en une seconde.

## Fiche direction express (à copier)

Avant chaque batch portrait, remplis : **Beat** (une phrase), **Objet du regard** (nom concret), **Micro-contrainte** (une ou deux), **Interdit expressif** (deux max), **Focale**, **Key light**. Exemple rempli : « Elle vient de lire le message, fixe le téléphone posé table basse, lèvre inférieure légèrement pincée, pas de sourire pas de larmes, 85 mm, fenêtre gauche douce. » Ce bloc tient en six lignes. Il remplace vingt adjectifs « emotional cinematic portrait ».

Les équipes qui utilisent cette fiche réduisent de moitié les regénérations portrait sur les projets dialogue. Ce n'est pas de la paperasse. C'est de la direction écrite.

En vidéo, la direction du regard change par plan, pas par clip de trente secondes. Découpe : plan A regarde objet, plan B micro-réaction, plan C retour objet. Trois générations courtes avec la même feuille de scène et des micro-variations. Le montage assemble une performance que le modèle ne tient pas en continu. C'est la même astuce que le coverage sur un plateau réel.

Pour les scènes d'action, la direction expressif cède parfois la place à la direction physique : `eyes squinting against wind`, `jaw clenched against impact`. Le beat reste. L'objet du regard peut devenir secondaire si le corps domine. Mais évite le vide : même en action, `looking toward explosion off-screen right` ancre la tête.

Les références film pour la direction IA ne sont pas des captures Pinterest. Ce sont des notes de travail que tu traduis en objet, beat et micro-contrainte.

En équipe, partage la feuille de scène avant le batch, pas seulement le prompt technique. Le monteur qui connaît l'intention du regard choisit le plan A parmi six variantes plus vite que le générateur seul. La direction continue après la génération. Ce n'est pas fini quand l'image sort du moteur. C'est fini quand le regard raconte la scène au montage.

Pour les scènes de groupe, génère d'abord les duos avant le plan large trois personnages. L'IA perd les eyelines en groupe. Le plan large sert à établir le lieu. Les duos portent l'émotion. C'est l'inverse de l'instinct débutant qui commence par le plan général « pour voir ».

Teste chaque prompt direction sur un still avant la vidéo. Le regard est plus stable en image. Tu verrouilles l'eyeline, puis tu animes avec mouvement minimal. La vidéo hérite du still comme un acteur qui reprend une position de départ. Cette habitude seule réduit les regards perdus sur la moitié des projets portrait que je review en formation. Ce sont des notes : « plan 12 De Niro Taxi Driver, regard miroir, pas de sourire ». Tu traduis ensuite en objet et micro-contrainte, tu ne colles pas le nom du film dans le prompt seul. Le modèle ne connaît pas ta référence. Toi oui.

### Comment diriger une scène de pleurs sans caricature IA ?

Beat : `holding back tears, not crying yet`. Micro : `wet lower eyelids, no streams down cheeks`, `slight chin tremor optional`. Interdit : `crying heavily`, `mouth open wailing`. L'IA sur-joue la douleur. La retenue photographie mieux. Si tu as besoin de larmes visibles, une passe inpaint sur une frame clé dans un montage court, pas une génération « bawling ».

### Le regard vers la caméra en faux documentaire ?

Beat : `uncomfortable awareness of camera` ou `ignoring camera completely` selon intention. Pour l'ignorance caméra : `looking at interviewer off left`, pas `looking at lens`. Pour la confession directe : `steady eye contact, not smiling`, une micro-contrainte de vulnérabilité, pas de pose influenceur.

### Les enfants et personnages âgés en IA : même méthode ?

Oui, avec des micro-contraintes adaptées. Enfant : évite les expressions adultes stock, privilégie `curious look at object`, pas de pose catalogue. Personnage âgé : `natural skin texture`, micro-rides cohérentes avec le beat, pas de lissage beauté qui efface l'émotion. Le regard reste ancré sur un objet. Les yeux brillants IA sont encore plus visibles sur les peaux jeunes. Baisse la saturation oculaire en post systématiquement sur ces plans.

<!-- PUBLICATION DATE: 2026-05-31 -->
