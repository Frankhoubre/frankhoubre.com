# PROGRESS.md — Loop state (read at start of every run, update at end)

## Last run: 2026-09-02 (J22 publié)

### What happened
- J22 du plan 90 jours publié à la date prévue après le décalage du J21 :
  `audit-workflow-ia-methode-mission`, catégorie `business`, 13 H2, FAQ 7
  questions, score éditorial 100 / bucket good / 0 flag, 0 issue au seo_audit
  côté FR. Le calendrier ne glisse pas ce jour, donc J23 = 2026-09-03
  (`reverse-prompting-methode-complete`).
- Satellite commercial de `/prestation`, dont la page liste littéralement
  « Audit de vos workflows IA image/vidéo actuels » en première intervention.
  Intention « audit ia entreprise production ».
- Anti-cannibalisation : les quatre voisins ont été ouverts un par un et chacun
  garde son rôle. `integrer-ia-boite-production-depart` garde le DÉMARRAGE
  (boîte qui part de zéro, pilote de six semaines),
  `comment-optimiser-workflow-ia-gagner-temps` garde l'optimisation
  individuelle du temps, `formation-interne-equipe-creative-ia` garde la montée
  en compétence, `workflow-ia-creatif` garde le pipeline technique. Le nouvel
  article ne traite QUE le diagnostic d'un existant qui tourne déjà.
- Faits vérifiés le 2026-09-02 sur les sources officielles, aucun inventé.
  1. AI Act article 4 (littératie IA) : obligation pesant sur les fournisseurs
     ET les déployeurs, entrée en application le 2025-02-02. La FAQ officielle
     de la Commission écrit « The supervision and enforcement rules apply from
     3 August 2026 onwards » et, dans une AUTRE réponse de la même page, « as of
     2 August 2026 ». Supervision confiée aux autorités nationales de
     surveillance du marché, pas au bureau de l'IA. Amendement Digital Omnibus
     entré en vigueur mi juillet 2026 : l'obligation reste, le niveau déterminé
     disparaît. Aucun certificat exigé, registre interne des formations suffisant.
  2. AI Act article 50 : applicable depuis le 2026-08-02, révélation du deepfake
     par le déployeur, exception des œuvres manifestement artistiques limitée à
     révéler l'existence du contenu généré sans entraver la jouissance de
     l'œuvre, exception du contrôle éditorial humain pour le texte.
  3. CNIL : les fiches pratiques IA « concernent uniquement la phase de
     développement de systèmes d'IA, et non celle de déploiement ». Cité mot
     pour mot.
- Trois angles qui font la valeur de l'article. Le volet littératie IA traité
  comme une ligne d'audit concrète (un registre de formation daté, montrable sur
  papier) plutôt que comme une abstraction juridique. Le périmètre des fiches
  CNIL, qui ne couvrent PAS le déploiement, ce qui corrige une erreur fréquente
  chez les dirigeants. Et l'écart temps de travail / temps de cycle posé comme
  l'indicateur numéro un, avec sa conséquence assumée : un cycle inchangé après
  compression du temps de travail désigne le circuit de décision et pas l'outil.
- Honnêteté : la FAQ officielle donne deux dates à deux endroits différents
  (2 et 3 août 2026), l'article le signale au lieu de trancher en silence. Aucun
  chiffre de résultat de mission inventé, aucun ROI, aucun pourcentage
  d'économie. Un seuil « plus de 15 % » du premier jet a été retiré du tableau
  faute de source et reformulé en qualitatif. Le seul montant cité est le tarif
  public de 4 200 € HT/jour, vérifié dans `src/app/prestation/page.tsx`.
- Passe d'humanisation, trouvaille principale du jour : QUATRE sections
  d'affilée étaient bâties en listes à en-têtes gras, exactement le tell
  structurel de la consigne. Trois sections ont été réécrites en prose et la
  symétrie des quatre paragraphes à ouverture en gras de « Ce que je rends » a
  été cassée ; trois listes ont été gardées parce qu'elles la méritent
  (catalogue des six fuites, formule de chiffrage, découpage jour par jour).
  Le scanner unslop-text sortait 4 HIGH réels sur les labels gras de la liste de
  chiffrage, corrigés à la racine : score 17 -> 4, densité 3,5 -> 0,8/1k. Les 4
  low restants sont le faux positif français connu. Corrigés à la main aussi :
  1 parallélisme négatif, 3 signposting, 2 premières lignes de section qui
  répétaient leur titre, 1 preuve sociale vague. Rythme après corrections : 235
  phrases, moyenne 19,0 mots, écart-type 9,6, 8 fenêtres de 3 phrases proches.
- Images : 2 stills Nano Banana 2 propres du premier coup, plus une VRAIE
  capture d'écran de la FAQ « AI Literacy » de la Commission européenne placée
  juste sous l'affirmation qu'elle prouve, légendée avec source et date. Les
  stores vénitiens ont été explicitement exclus du prompt du héros parce qu'ils
  revenaient deux fois dans les 6 derniers héros.
- À RETENIR POUR LES PROCHAINS RUNS, trois points nouveaux.
  1. `.loop_scripts/screenshot_url.sh` est écrit pour macOS (chemin en dur vers
     `/Applications/Google Chrome.app`) et échoue sur cette machine Windows.
     Contournement sans toucher au script : Chrome headless Windows en direct
     (`--headless=new --virtual-time-budget=18000 --window-size=1440,900
     --screenshot`), puis recadrage et conversion webp avec Pillow (12.3.0
     installé, `cwebp` absent de la machine).
  2. `scripts/render_blog_queue_nanobanana.py` n'accepte PAS `--slug`, malgré ce
     que dit la consigne de la tâche. Seulement `--dest` et `--prompt`. Toujours
     le lancer depuis PowerShell (rappel du J21).
  3. Le heredoc bash ne tient pas sur un article français : le wrapper shell
     mange les apostrophes droites, même piège que celui déjà documenté pour
     grep. Écrire l'article avec l'outil Write, puis normaliser en LF.
- PIÈGE LF confirmé : un `git stash push` / `pop` fait pour mesurer la baseline
  du seo_audit reconvertit les fichiers touchés en CRLF (`core.autocrlf=true`)
  et fait remonter les erreurs de 1983 à 1991. Renormaliser en LF APRÈS le pop.
  Baseline mesurée : 1991 erreurs avant les modifications du jour, 1983 après,
  soit 8 de moins que le dépôt, les 2 articles existants passant de CRLF à LF.
  Le reste est l'artefact CRLF préexistant documenté au J18, hors périmètre.
- Gates : lint 0 erreur (4 warnings préexistants), typecheck PASS, build PASS
  (578 pages, article prérendu), seo_audit 0 issue sur les 3 fichiers FR
  touchés, editorial_audit 100 / good / 0 flag pour les 3, build_ledger
  régénéré (302 FR, 232 EN, business 18 -> 19, 0 undefined).

### Next
- J23 le 2026-09-03 : `reverse-prompting-methode-complete` (PROD, tutoriel
  reverse prompting, pousser `/outils/reverse-prompting-image-ia` qui fait
  12.5 % de CTR).

## Previous run: 2026-09-01 (J21 publié)

### What happened
- J21 du plan 90 jours publié : `monteur-video-ia-evolution-metier`, catégorie
  `analyses`, 3718 mots, 10 H2, FAQ 8 questions, score éditorial 100 / bucket
  good / 0 flag, 0 issue au seo_audit. Le plan le prévoyait le 2026-08-31 mais
  aucun run n'a eu lieu ce jour là : le calendrier glisse d'un jour de plus,
  donc J22 = 2026-09-02 (`audit-workflow-ia-methode-mission`).
- Satellite du pilier `metiers-audiovisuel-ia-menaces-transformation-avis` mis à
  jour au J20. Le lien entrant réciproque a été posé dans la section « Montage
  et postproduction » du pilier, ce qui règle le premier des quatre liens vers
  satellites annoncés au J20 (restent J43, J71, J74). Second lien entrant ajouté
  depuis `guide-complet-montage-video-assiste-intelligence-artificielle`.
- Anti-cannibalisation : parade du plan appliquée telle quelle. Le pilier garde
  la vue d'ensemble des postes, le guide complet garde la MÉTHODE de montage,
  `parametrer-rythme-montage-ads-ia-15s-30s` garde le rythme des formats courts,
  `comment-monter-video-ia-capcut-comme-un-pro` garde la variante outil. Le
  nouvel article ne traite QUE le métier et le repositionnement tarifaire.
- Faits vérifiés le 2026-09-01 sur les sources officielles, aucun inventé.
  1. Adobe Premiere : Media Intelligence (objets, lieux, angles de prise de vue,
     recherche en langage naturel, analyse LOCALE sur la machine sans connexion
     internet) ; Generative Extend (2 s de vidéo et 10 s d'audio maximum, clip
     source d'au moins 2 s en vidéo et 3 s en audio, dialogue NON prolongé et mis
     en sourdine, cloud Firefly, crédits génératifs, Content Credentials) ;
     traduction automatique des sous-titres annoncée sur 27 langues.
  2. Blackmagic : Resolve 21 en version courante sur la page What's New,
     IntelliScript (Final Draft et texte brut), AI IntelliSearch, Magic Mask ;
     annonce Resolve 20 d'avril 2025 (IntelliScript confronte scénario et audio
     transcrit, prises alternatives sur pistes supplémentaires ; AI Multicam
     SmartSwitch selon la détection du locuteur) ; DaVinci Neural Engine réservé
     à Resolve Studio, 295 dollars en licence perpétuelle.
  3. Observatoire des métiers à l'heure de l'IA (Audiens + Afdas + CNC) : trois
     notes seulement, et AUCUNE sur les monteurs image.
- Trois angles qui font la valeur de l'article. D'abord l'absence de note sur les
  monteurs image, écrite noir sur blanc : aucun pourcentage français de
  remplacement n'est adossé à cette source, donc l'article assume un « je ne sais
  pas » plutôt que de recopier un chiffre invérifiable. Ensuite, IntelliScript
  suppose un script et SmartSwitch des locuteurs identifiables, donc le
  documentaire d'observation et le reportage sont structurellement hors de portée
  de l'assemblage automatique. Enfin, le transfert de charge tombe sur la fiche
  de poste de l'ASSISTANT monteur, pas du chef monteur, donné comme observation
  de terrain et pas comme statistique.
- Passe d'humanisation : le scanner unslop-text ne sort que 2 findings LOW, deux
  faux positifs français (« utilise » lu comme « utilize »). Comme les jours
  précédents, son vert n'a rien prouvé et le vrai travail a été manuel : 8
  parallélismes négatifs sur 12 supprimés (les 2 restants sont des concessifs
  légitimes), 2 titres de section eux-mêmes bâtis sur un parallélisme réécrits,
  3 premières lignes de section qui répétaient leur propre titre, 4 signposting
  remplacés par la chose annoncée, le scaffolding « Deux conséquences pratiques /
  La première / La seconde » cassé en prose, et la dernière section sortie du
  format liste à en-têtes gras pour ne pas enchaîner une troisième section
  symétrique. Une preuve sociale vague corrigée (« les deux logiciels que la
  majorité des monteurs utilisent en France », sans source, devient « que je
  croise le plus souvent sur les projets français »).
- Images : 3 générées via Nano Banana 2, motifs consignés dans PUBLISH_LOG pour
  l'anti-répétition, aucun cliché interdit, aucun texte lisible, aucun motif
  recyclé des héros des J15 à J20.
- À RETENIR POUR LES PROCHAINS RUNS : lancer
  `scripts/render_blog_queue_nanobanana.py` depuis PowerShell, jamais depuis Git
  Bash. MSYS convertit l'argument `--dest /images/blog/...` en chemin Windows et
  le script tente d'écrire hors du repo (PermissionError). Les 3 générations du
  jour ont été perdues au premier essai pour cette raison, puis refaites.
- Gates : lint 0 erreur (4 warnings préexistants), typecheck PASS, build PASS,
  seo_audit 0 issue sur le nouveau slug, editorial_audit 100 / good / 0 flag,
  build_ledger régénéré (301 FR, 232 EN).

### Next
- J22 le 2026-09-02 : `audit-workflow-ia-methode-mission` (B2B, méthode d'audit
  de workflow IA en mission, pousser /prestation).

## Previous run: 2026-08-30 (J20 publié, jour UPDATE)

### What happened
- J20 du plan 90 jours publié à la date prévue. Jour UPDATE : aucun nouveau
  slug, l'article existant `metiers-audiovisuel-ia-menaces-transformation-avis`
  est enrichi. URL et date d'origine 2026-04-14 préservées, `dateModified` passé
  au 2026-08-30. 2804 -> 4388 mots, 10 -> 12 H2, FAQ 9 -> 11 questions, score
  éditorial 94 -> 100 / bucket good / 0 flag. Le calendrier ne glisse pas ce
  jour, donc J21 = 2026-08-31 (`monteur-video-ia-evolution-metier`).
- Titre raccourci et recentré sur le mot-clé du plan : « Les métiers de
  l'audiovisuel menacés ou transformés par l'IA : mon avis » (71 caractères,
  au-dessus du seuil du checker) devient « Métiers de l'audiovisuel face à
  l'IA : les chiffres 2026 » (56 caractères). La page ressort à la position 6.3
  avec 10.9 % de CTR sur « métiers audiovisuel ia », d'où le mot-clé en tête.
- Deux apports neufs, tous deux vérifiés le 2026-08-30, aucun inventé.
  1. Cadre légal : article 50 du règlement (UE) 2024/1689 applicable depuis le
     2026-08-02. Obligation de révéler qu'un deepfake est généré ou manipulé ;
     exception pour l'œuvre manifestement artistique, créative, satirique ou
     fictionnelle, limitée à révéler l'existence du contenu généré d'une manière
     qui n'entrave pas l'affichage ou la jouissance de l'œuvre ; exception de
     contrôle éditorial humain substantiel pour le texte d'intérêt public ;
     marquage lisible par machine côté fournisseurs, avec transition jusqu'au
     2026-12-02 pour les systèmes déjà sur le marché. C'est le même socle
     juridique que celui vérifié au J16, réutilisé sous l'angle métier.
  2. Données d'emploi françaises de l'Observatoire des métiers de la culture et
     des médias à l'heure de l'IA (Audiens + Afdas + CNC), trois notes de
     conjoncture : storyboarders (mai 2025, effectifs en légère hausse 2024
     compris, aucun impact net observable à date) ; comédiens de doublage
     (2025-10-07, léger recul sur deux ans attribué à la baisse de commandes et
     non à l'IA) ; monteurs son et mixeurs (2026-07-30, +31 % d'effectifs entre
     2018 et 2022 puis stables, aucun impact négatif documenté).
- Angle qui fait la valeur de cette mise à jour : les données mesurées sont
  placées juste après mon tableau d'opinion, suivies d'une section où je dis
  explicitement où je me suis trompé (son artisanal, storyboard), plus deux
  limites assumées (l'emploi déclaré en France ne dit rien des marchés freelance
  étrangers ; un effectif stable peut cacher une baisse du tarif journalier).
- Aucun taux d'adoption des studios d'animation, de postproduction et de VFX
  publié : les pourcentages trouvés en ligne n'étaient rattachés à aucune
  édition précise du baromètre CNC. Le refus est écrit dans l'article, comme au
  J14 et au J19.
- Correction factuelle trouvée en passant : le lien « Je décortique ce point
  directement en vidéo » pointait vers une vidéo Business Dynamite intitulée
  « SEEDANCE 2 est sorti », sans rapport avec le sujet. Vérifié par oEmbed
  YouTube, puis supprimé avec sa phrase d'accroche.
- Nettoyage éditorial hérité : « Frank's Cut » -> « Le cut de Frank » (même
  correctif qu'au J17), franglais « accountable » -> « responsable », et quatre
  fautes réelles corrigées (« ce qui doit douleur au spectateur », « si tu
  pilotages pipelines », « L'école a-t-il encore un rôle », « plates
  génératifs »).
- Aucun article ne pointait vers ce pilier avant aujourd'hui. Liens entrants
  réciproques ajoutés depuis `integrer-ia-boite-production-depart` et
  `doublage-voix-off-cloner-diriger-voix-film`. Les liens vers les satellites
  J21, J43, J71 et J74 prévus au plan restent à poser au fil de leurs sorties.
- Images : aucune génération, jour UPDATE. Les 3 webp existantes sont sur le
  disque et référencées, donc pas de contrôle anti-répétition ce run.

### Notes outillage
- Le scanner `unslop_text_scan.py` a été utile pour la première fois sur un
  vrai tell : 9 hits HIGH, tous réels, tous dans l'ancien texte, le device
  « **concept** : liste » répété 9 fois dans le même article. Six sur neuf
  dégraissés, rescan à 0. La leçon tient toujours dans l'autre sens : ce hit-là
  est une forme, pas du vocabulaire anglais, c'est pour ça que le scanner l'a vu
  sur du français. Les 4 parallélismes négatifs et la symétrie des trois
  paragraphes en gras, eux, n'ont été trouvés qu'à la main.
- Piège shell confirmé : un heredoc Bash `<<'EOF'` contenant du texte français
  long a cassé le parseur (« unexpected EOF while looking for matching »).
  Passer par le tool Write pour déposer le script Python, puis l'exécuter via
  PowerShell avec `py`, marche à tous les coups. C'est la méthode à reprendre
  pour toute édition d'article un peu volumineuse.
- `build_ledger.mjs` reste sain depuis le correctif CRLF du J14 : régénéré ce
  run sans aucun `undefined` (300 FR, 232 EN).

## Previous run: 2026-08-29 (J19 publié)

### What happened
- J19 du plan 90 jours publié à la date prévue : `kling-vs-veo-3-choisir-par-plan`
  (catégorie `comparatifs`, ~3900 mots, 9 H2, 15 H3, FAQ 8 questions, 0 remarque
  aux deux audits). Le calendrier ne glisse pas ce jour, donc J20 = 2026-08-30,
  et c'est un jour UPDATE (`metiers-audiovisuel-ia-menaces-transformation-avis`).
- Angle : arbitrage entre moteurs, plan par plan. L'article ne refait ni le
  pipeline Kling ni le brief Veo, c'est la parade anti-cannibalisation prévue au
  plan. `workflow-kling-3-animation-fluide-realiste` et
  `google-veo-3-brief-realisateur-plan-sequence` restent piliers de leur outil
  et reçoivent chacun un lien entrant réciproque.
- Le critère de tri numéro un pour un lecteur francophone est une limite
  documentée que je n'ai vue nulle part ailleurs : la sortie voix de Kling v3
  couvre le chinois et l'anglais, les autres langues sont traduites
  automatiquement vers l'anglais. Donc pas de lip-sync français natif chez Kling.
- Faits vérifiés le 2026-08-29 sur sources officielles uniquement, aucun inventé :
  doc Veo de l'API Gemini (durées 4/6/8 s, 1080p et 4K réservés aux générations
  de 8 s, 16:9 et 9:16, audio natif toujours actif, 3 images de référence max,
  prolongation en 720p seulement, Lite sans 4K ni prolongation) ; tarifs API
  Gemini ; fiches et schémas fal.ai pour Veo 3.1 et Kling v3 Standard/Pro
  (durée 3 à 15 s, formats 16:9/9:16/1:1, `shot_type` customize ou intelligent,
  prix à la seconde avec et sans audio) ; date de sortie stable de Kling 3.0 au
  2026-02-07 attribuée à Wikipédia dans le texte.
- Assumé explicitement dans une section « ce que ce comparatif ne dit pas » :
  aucune note de qualité d'image, aucune résolution Kling. Les sources tierces se
  contredisent, je préfère ne rien affirmer.
- 3 images Nano Banana 2, scènes dérivées du contenu réel : falaise côtière à
  l'aube avec viseur de réalisatrice (hero, plan large d'établissement), table de
  cuisine avec perche son en plein jour (workflow-1, plan de dialogue), salle de
  bloc la nuit avec gimbal (workflow-2, plan de mouvement complexe). Propres du
  premier coup, aucun texte lisible ni logo, aucun décor recyclé des 5 derniers
  heros.

### Notes outillage
- Les deux pièges de `render_blog_queue_nanobanana.py` déjà notés au J18 (pas
  d'option `--slug`, et `MSYS_NO_PATHCONV=1` obligatoire depuis Git Bash) ont été
  retouchés en direct ce run faute d'avoir relu ce fichier avant de lancer les
  images. Le plus simple reste de générer depuis PowerShell, où le `--dest` en
  `/images/blog/...` passe sans conversion de chemin.
- L'artefact CRLF des checkers est toujours là et non corrigé (hors périmètre).
  Article écrit en LF comme aux J17 et J18, d'où 0 erreur sur le nouveau slug
  alors que les deux articles édités pour les liens entrants continuent
  d'afficher leurs 4 erreurs fantômes de frontmatter.


## Previous run: 2026-08-28 (J18 publié)

### What happened
- J18 du plan 90 jours publié à la date prévue : `bibliotheque-prompts-cinema-plans-types`
  (catégorie `guides`, 4950 mots, 11 H2, FAQ 8 questions). Le calendrier ne
  glisse pas ce jour, donc J19 = 2026-08-29 (`kling-vs-veo-3-choisir-par-plan`).
- Angle : ressource, pas méthode. 40 blocs de prompts numérotés, classés par
  famille (12 plans d'installation, 12 plans de visage et de dialogue, 8
  mouvements, 8 plans de détail et de transition), copiables tels quels.
  C'est la parade anti-cannibalisation prévue au plan face à
  `comment-ecrire-prompt-cinematic-ultra-realiste-ia`, qui garde la méthode
  d'écriture. La distinction est écrite dans les deux articles.
- Faits vérifiés le 2026-08-28 sur la source officielle uniquement : le guide
  de prompt vidéo de Google Cloud (découpage sujet / action / décor / angle /
  mouvement / optique / style, et son avertissement explicite sur les angles et
  optiques avancés qui ne sont pas officiellement supportés). Les 40 blocs sont
  une construction maison présentée comme telle. Les trois affirmations de
  fiabilité sont formulées en observation personnelle, pas en fait.
- Liens entrants réciproques ajoutés depuis
  `comment-ecrire-prompt-cinematic-ultra-realiste-ia` et
  `comment-construire-scene-cinematique-plan-par-plan`.
- 3 images Nano Banana 2, scènes dérivées du contenu réel de l'article : ruelle
  pavée à l'heure bleue sous la pluie (hero), salle de répétition avec plaque
  blanche en plein jour (workflow-1), intérieur de voiture la nuit sous la pluie
  (workflow-2). Propres du premier coup, aucun texte ni logo, aucun décor
  recyclé des 5 derniers heros.

### Notes outillage
- L'artefact CRLF des checkers est maintenant diagnostiqué et chiffré. Le repo
  a `core.autocrlf=true`, donc tout le worktree est en CRLF. `seo_audit.mjs` et
  `editorial_audit.mjs` perdent alors la totalité du frontmatter, parce que leur
  regex `^([A-Za-z0-9_]+):\s*(.*)$` ne matche pas quand la ligne finit par `\r`
  (`$` ne tolère pas le `\r` en JS hors mode multiligne). Seule la dernière
  ligne du bloc passe. Résultat : 1990 erreurs fantômes sur 531 fichiers.
  `build_ledger.mjs` a déjà le correctif (`split(/\r?\n/)`) avec un commentaire
  qui décrit exactement ce piège, il n'a jamais été reporté sur les deux autres.
  Vérifié en rejouant les deux audits sur des copies patchées : 0 erreur au lieu
  de 1990. Les scripts n'ont pas été modifiés (hors périmètre du run). Voir
  ERRORS_AND_BLOCKERS.md.
- Contournement appliqué en attendant : écrire les nouveaux articles en LF
  (déjà fait au J17 et au J18), ce qui les rend lisibles par le checker.
- `render_blog_queue_nanobanana.py` n'a pas d'option `--slug`, seulement `--dest`
  et `--prompt`. Et depuis Git Bash il faut préfixer `MSYS_NO_PATHCONV=1`, sinon
  le `/images/blog/...` du `--dest` est converti en chemin Windows et le script
  essaie d'écrire dans `C:\Program Files\Git\images`.

## Previous run: 2026-08-27 (J17 publié, jour UPDATE)

### What happened
- J17 du plan 90 jours est un jour UPDATE : aucun nouveau slug créé, l'article
  existant `adobe-firefly-avis` a été enrichi pour couvrir Firefly Image 5.
  URL et `date` d'origine (2026-04-23) préservées, `dateModified` = 2026-08-27.
  Publié à la date prévue, le calendrier ne glisse pas. J18 = 2026-08-28.
- Recentrage sur l'intention « adobe firefly 5 » : titre
  « Adobe Firefly 5 testé : ce qui change vraiment en 2026 » (54 car.),
  excerpt refait (142 car.), 2798 -> 3623 mots, 2 H2 entièrement neufs
  (« Ce que Firefly Image 5 change concrètement » et « Adobe fait maintenant
  tourner les modèles des autres chez lui »).
- Faits vérifiés le 2026-08-27 sur les sources officielles Adobe uniquement,
  aucun inventé : Image Model 5 en bêta publique le 2025-10-28 à MAX
  (génération native 4 MP sans upscale, portraits anatomiquement plus justes,
  Prompt to Edit, édition par calques annoncée comme « in development » et
  formulée comme telle dans l'article) ; disponibilité générale le 2026-03-19,
  en même temps que les modèles personnalisés en bêta publique et l'accès à
  plus de 30 modèles dont Nano Banana 2, Veo 3.1, Gen-4.5, Kling 2.5 Turbo ;
  AI Markup disponible et Precision Flow en bêta au 2026-04-09 ; assistant
  Firefly en bêta publique et Creative AI Studio en bêta privée au 2026-06-18 ;
  Generate Music / Speech / Sound Effects en disponibilité générale au
  2026-08-20.
- AUCUN tarif Firefly publié : la page de plans adobe.com et le helpx sur les
  crédits génératifs ont expiré en timeout, et les seules valeurs disponibles
  venaient de comparateurs tiers qui se contredisaient. Deux affirmations sont
  marquées explicitement comme observations personnelles (fragilité du texte
  dans l'image, zones anatomiques encore à vérifier).
- Nettoyage éditorial de l'ancien article au passage : 3 titres H2 encore en
  anglais issus du vieux template traduits, « Frank's Cut » corrigé en
  « Le cut de Frank », backticks de mot-clé retirés de l'intro, FAQ passée de
  4 à 7 questions, conclusion ajoutée.
- Lien entrant réciproque ajouté depuis
  `photoshop-firefly-etendre-plans-ia-generative`, comme le plan le demandait.
- Passe anti-slop complète (humanizer, unslop-text, antislop-copywriting) :
  3 parallélismes négatifs ramenés à 0 sous cette forme, 4 signposting
  supprimés, 1 hit HIGH du scanner corrigé (label gras suivi de deux-points),
  4 chiffres fabriqués supprimés du premier jet plus 1 seuil inventé dans le
  tableau, et deux correctifs structurels : une section convertie en prose pour
  casser trois listes numérotées d'affilée, et l'énumération mécanique
  « premier / deuxième / troisième / quatrième point » cassée.
- Les 3 images de juillet ont été REMPLACÉES : elles portaient du texte lisible
  partout et le hero était le cliché interdit du bureau avec café et écrans ;
  workflow-2 n'était même pas référencée dans l'article. Nouvelles scènes :
  abribus sous la pluie à l'heure bleue, train de banlieue le matin, boutique
  de mode après la fermeture. Propres du premier coup, aucune régénération.
- Le fichier a été réécrit en LF : le total d'erreurs seo_audit passe de 1990 à
  1986, les 4 erreurs de l'artefact CRLF sur ce slug disparaissent.

### Notes outillage
- Le scanner unslop-text est anglophone : sur du français un score vert ne
  prouve rien, toutes les corrections réelles viennent de la lecture manuelle.
- `render_blog_queue_nanobanana.py` n'accepte PAS `--slug`, seulement `--dest`
  et `--prompt`, doit être lancé via PowerShell (MSYS casse les chemins), et
  IGNORE une image déjà présente au-dessus de `--min-bytes` : sur un jour
  UPDATE qui remplace des images existantes, `--force` est obligatoire.
- Les pages adobe.com/products/firefly/plans.html et le helpx generative-credits
  expirent systématiquement en timeout via WebFetch. Ne pas publier de tarif
  Adobe tant qu'une source officielle n'est pas lisible.
- Flag `meta 0c` sur `photoshop-firefly-etendre-plans-ia-generative` (score 94) :
  préexistant, même artefact CRLF, pas causé par le lien entrant ajouté.
- Écrire les longues entrées de log via un fichier scratch + PowerShell : le
  heredoc bash casse sur ces textes (guillemets français et apostrophes).

## Previous run: 2026-08-26 (J16 publié)

### What happened
- Publication du J16 du plan 90 jours : `integrer-ia-boite-production-depart`
  (evergreen, guides, 3549 mots). Publié à la date prévue, le calendrier ne
  glisse pas ce jour. J17 = 2026-08-27 (UPDATE `adobe-firefly-avis`, Firefly 5).
- Intention « ia boîte de production », guide décideur B2B qui pousse vers
  /prestation. Angle tenu à distance des deux voisins du cluster : ici le
  DÉMARRAGE cadré au niveau de la structure (premier livrable, pilote de six
  semaines, rôles, conformité, coût réel), tandis que
  `formation-interne-equipe-creative-ia` traite le programme de montée en
  compétence qui vient APRÈS, et `comment-optimiser-workflow-ia-gagner-temps`
  l'optimisation individuelle. La distinction est écrite dans les trois.
- Faits juridiques vérifiés le 2026-08-26, aucun inventé : obligations de
  transparence de l'article 50 du règlement (UE) 2024/1689 applicables depuis
  le 2026-08-02 (le Digital Omnibus sur l'IA, en vigueur depuis le 2026-07-27,
  n'a pas reporté le gros de l'article 50), transition de quatre mois jusqu'au
  2026-12-02 pour le marquage lisible par machine, exception œuvres limitée à
  révéler l'existence du contenu généré, code de bonnes pratiques de la
  Commission publié le 2026-06-10 avec environ 190 signataires fin juillet 2026
  et adhésion volontaire. Toute interprétation au-delà du texte est signalée
  comme telle dans l'article.
- Tarif conseil 4 200 € HT/jour relevé dans `src/app/prestation/page.tsx`.
- Passe anti-slop complète (humanizer, unslop-text, antislop-copywriting) :
  8 parallélismes négatifs ramenés à 1, 4 signposting supprimés, 2 aphorismes
  réécrits, 2 faits fabriqués supprimés (une statistique « la moitié des cas »
  et un prix « 40 000 € » inventés), et un correctif structurel : 4 sections
  d'affilée étaient bâties à l'identique en listes à en-têtes gras, deux ont été
  converties (prose et liste numérotée à 4e item dissymétrique).
- 3 images Nano Banana 2 propres du premier coup, aucune régénération.

### Notes outillage
- Le scanner unslop-text est anglophone : sur du français un score vert ne
  prouve rien, toutes les corrections réelles viennent de la lecture manuelle.
- `render_blog_queue_nanobanana.py` n'accepte PAS `--slug`, seulement `--dest`
  et `--prompt`, et doit être lancé via PowerShell (MSYS casse les chemins).
- `editorial_audit.mjs --json` sort avec un BOM UTF-8 : lire en `utf-8-sig`.
- Warning `fr/formation-interne-equipe-creative-ia: No H1` : préexistant, ce
  fichier n'a jamais eu de ligne `# `.

## Previous run: 2026-08-25 (J15 publié)

### What happened
- Publication du J15 du plan 90 jours : `combien-coute-court-metrage-ia-2026`
  (evergreen, analyses, 3617 mots). Publié à la date prévue, le calendrier ne
  glisse pas ce jour. J16 = 2026-08-26.
- Intention « coût court métrage ia ». Angle tenu à distance de
  `combien-facturer-video-ia-professionnelle-grille-prix` : ici le coût de
  PRODUCTION, là-bas le PRIX DE VENTE, avec lien croisé explicite dans les deux
  sens et la distinction écrite dans les deux articles.
- Tarifs relevés le 2026-08-25 sur les pages officielles, aucun inventé :
  fal.ai (Wan 2.5 0,05 $/s, Kling 2.5 Turbo Pro 0,07 $/s, Veo 3 0,40 $/s),
  Runway (Standard 15 $/mois ou 12 $ en annuel pour 625 crédits, Pro 35/28 $,
  Max 95/76 $, gratuit 125 crédits une seule fois), Gemini (AI Pro 21,99 EUR/mois
  avec essai limité de Veo 3.1 Lite, AI Ultra à partir de 99,99 EUR/mois),
  ElevenLabs (6 $ / 22 $ / 99 $ / 299 $, annuel = 10 mois payés sur 12),
  Suno (gratuit sans usage commercial, Pro 8 $, Premier 24 $, droits commerciaux
  limités aux morceaux créés pendant l'abonnement actif), DaVinci Resolve
  (gratuit, Studio 295 $ en licence perpétuelle), Sundance édition 2027
  (courts : 55 $ / 75 $ / 95 $, 50 min générique compris).
- FAIT NEUF À RETENIR : **Topaz est passé à l'abonnement** (Video Personal
  39 $/mois avec engagement annuel ou 59 $/mois sans, bundle Studio 69 $/mois ou
  399 $/an). Ça périme les budgets écrits l'an dernier et ça renforce l'article
  `upscaling-video-gratuit-alternatives-topaz`, qui mériterait un UPDATE.
- Pages Midjourney et Kling inaccessibles (403 et 446). Aucun tarif Midjourney
  ni Kling abonnement n'est publié plutôt que d'écrire un chiffre de mémoire.
- LEÇON DU RUN, à appliquer aux prochains articles chiffrés : la passe
  antislop-copywriting a rattrapé TROIS erreurs de calcul du premier jet.
  60 plans gardés sur 4 font 240 générations, pas 400. Quatre mois de Topaz sans
  engagement font 236 $, donc moins que les 295 $ de Resolve Studio, il fallait
  écrire cinq mois. Et deux statistiques fabriquées (« un sur douze », « la
  moitié des rejets ») s'étaient glissées dans le texte. Refaire tous les calculs
  à la main avant publication, la relecture de style ne suffit pas.
- 3 images Nano Banana 2 (hall d'un petit cinéma indépendant l'après-midi,
  cabine d'enregistrement voix la nuit, cour d'immeuble parisien par temps
  couvert). Les 3 prompts portaient « completely unbranded, blank unmarked, no
  readable text, no logos, no emblems » dès le premier jet : aucune régénération
  nécessaire, contrairement aux deux runs précédents. Garder cette formule.
- Liens entrants réciproques ajoutés depuis
  `combien-facturer-video-ia-professionnelle-grille-prix` et
  `ronces-coulisses-court-film-ia`.
- `build_ledger.mjs` refonctionne : CONTENT_INDEX régénéré (297 FR, 232 EN,
  « analyses 10 », 0 `undefined`). Le correctif d'hier tient.
- Reste ouvert : `seo_audit.mjs` souffre toujours de l'artefact CRLF (1998
  erreurs globales, identique à hier, 0 pour ce slug). Le correctif d'une ligne
  de `build_ledger.mjs` s'y applique probablement, non fait ici.
- Prochain jour : J16 (`integrer-ia-boite-production-depart`) le 2026-08-26.

## Run précédent : 2026-08-24 (J14 publié)

### What happened
- Publication du J14 du plan 90 jours : `minimax-hailuo-prix-credits-formules`
  (evergreen, guides, 3360 mots). Prévu le 2026-08-22, publié le 24 : aucun run
  les 22 et 23, le calendrier glisse de deux jours de plus. J15 = 2026-08-25.
- Intention commerciale « hailuo prix / minimax crédits ». Faits relevés le
  2026-08-24 et aucun inventé : formules officielles sur
  `hailuoai.video/doc/payment-policy.html` (Standard 14,99 $ / 1 000 crédits,
  Pro 54,99 $ / 4 500, Master 119,99 $ / 10 000, Ultra 124,99 $ / 12 000, Max
  199,99 $ / 20 000 + Relax Mode, Unlimited 94,99 $ fermée à la vente le
  18 juin 2025 et bloquée sur Hailuo01), crédits non reportables, remboursement
  automatique si échec ou refus de modération ; tarifs API sur fal.ai
  (0,045 $/s en 768p, 0,08 $/s en 1080p, 25 fps) ; fiche H3 sur Hugging Face
  (`MiniMaxAI/MiniMax-H3`, 4 à 15 s, base 768p, module 2K, stéréo natif 32 kHz,
  11 langues, 24 fps).
- DÉCISION ÉDITORIALE à retenir : aucun coût en crédits par génération n'est
  publié. Les sources tierces donnaient quatre valeurs contradictoires pour un
  même format. L'article assume le trou et livre un protocole de mesure en
  5 étapes à la place, ce qui est devenu son principal apport.
- Passe anti-slop complète (humanizer, unslop-text, antislop-copywriting) :
  8 parallélismes « ce n'est pas X, c'est Y » ramenés à 0, 5 signposting
  supprimés, roadmap d'intro réécrite, une section à en-têtes gras convertie en
  prose pour casser la symétrie structurelle. Scanner : 0 high, 0 medium,
  5 low tous faux positifs FR (« utilises » lu comme « utilize »).
- 3 images Nano Banana 2 (comptoir de maison de location au petit matin, hayon
  de camion de production à l'heure dorée, salle machine de post la nuit).
  Hero et workflow-2 régénérés une fois : la première version de workflow-2
  affichait de vrais logos de marque lisibles (AJA) sur les racks. Ajouter
  « completely unbranded, blank unmarked, no emblems » au prompt règle le cas.
- Liens entrants réciproques ajoutés depuis
  `minimax-hub-plateforme-video-ia-shanghai-juin-2026` et
  `hailuo-minimax-workflow-court-metrage-realiste`.
- `build_ledger.mjs` EST RÉPARÉ. Cause du bug qui bloquait les 4 runs
  précédents : en JS, `.` ne matche pas `
`, donc sur les 283 articles en CRLF
  le `
` de fin de ligne faisait échouer le regex de frontmatter et toutes les
  catégories tombaient à `undefined`. Correctif : `split("
")` remplacé par
  `split(/
?
/)` dans `fm()`. CONTENT_INDEX.md est donc régénéré proprement
  pour la première fois depuis le 2026-08-17, 0 `undefined`.
- Reste ouvert : `seo_audit.mjs` souffre du même artefact CRLF (1998 erreurs
  globales, 0 pour les slugs en LF). Le même correctif d'une ligne s'y applique
  probablement, non fait ici pour garder le run cadré.
- Prochain jour : J15 (`combien-coute-court-metrage-ia-2026`) le 2026-08-25.

## Run précédent : 2026-08-21 (J13 publié)

### What happened
- Publication du J13 du plan 90 jours : `screenweaver-pourquoi-outil-ecriture`
  (evergreen, analyses, 3241 mots). Coulisses fondateur en FR, angle tenu à
  distance des mots-clés produit EN de screenweaver.ai comme le prévoit le plan.
- Faits produit vérifiés avant écriture dans le repo ScreenWeaver local
  (dossier Desktop/Screenweaver/claudecodegit, fichier `messages/en.json`) :
  offre Screenwriter gratuite (projets et pages illimités, éditeur, plan et beats,
  export PDF et Final Draft), Storyboard Beta pour les testeurs, offre Filmmaker
  annoncée pour fin août 2026 sans tarif public, moteurs Seedance/Veo/Sora/Kling,
  films reconnus en festivals. Aucun prix chiffré publié : le montant de
  Storyboard Beta n'était pas vérifiable, donc il n'apparaît pas dans l'article.
- 3 images Nano Banana 2 (marques de placement à la craie sur un plateau au petit
  matin, fiches de continuité sur un portant de costumes, viseur de champ en
  repérage sous la pluie). `workflow-2` a dû être régénéré : la première version
  affichait une ardoise avec du texte lisible et un générique inventé, interdit
  par le protocole image. Toujours lancer le script depuis PowerShell, sans `--slug`.
- Passage humanizer appliqué : anaphores en rafale, parallélismes « ce n'est pas A,
  c'est B » (4 supprimés), triple impératif de conclusion et aphorisme dupliqué
  réécrits.
- Liens entrants réciproques ajoutés depuis `screenweaver-ai-ecriture-scenario-storyboard`
  et `screenweaver-vs-final-draft`.
- CORRECTION ÉDITORIALE : l'ancien guide `screenweaver-ai-ecriture-scenario-storyboard`
  se présentait comme un article tiers (« Je ne suis pas leur équipe », « leur
  posture publique »), ce qui contredit frontalement l'article fondateur. Deux
  phrases corrigées pour dire la relation réelle. À surveiller : d'autres articles
  du cluster ScreenWeaver peuvent porter le même cadrage tiers erroné.
- `build_ledger.mjs` sort encore un CONTENT_INDEX corrompu sous CRLF
  (« Categories: undefined 285 ») : régénération revert. 4e run consécutif bloqué
  par ce bug, il faut le corriger dans le script (parseur frontmatter + CRLF).
- Prochain jour : J14 (`minimax-hailuo-prix-credits-formules`) le 2026-08-22.

## Run précédent : 2026-08-20 (J12 publié)

### What happened
- Publication du J12 du plan 90 jours : `midjourney-sref-references-style`
  (evergreen, tutoriels, ~3500 mots), satellite du pilier `midjourney-guide-complet`.
- Faits Midjourney vérifiés en ligne avant écriture (doc officielle Style Reference
  et Moodboards, update officielle du 25 juin 2026 sur `--sref random` en mode
  brouillon, sortie de V8.2 le 24 juillet 2026). Le comportement `--sv 6` vs
  `--sv 7` vient de tests communautaires et est attribué comme tel dans l'article.
  Mes plages de `--sw` sont présentées comme des repères de production, pas comme
  une table officielle.
- 3 images Nano Banana 2 (studio photo au matin, nuancier sur décor en
  construction, tirages sur hayon d'utilitaire au crépuscule). Rappel toujours
  valable : lancer le script depuis PowerShell, il n'accepte pas `--slug`.
- Liens entrants réciproques ajoutés depuis `midjourney-guide-complet` et
  `comment-controler-style-visuel-generation-ia`.
- `build_ledger.mjs` régénère toujours un CONTENT_INDEX corrompu sous CRLF
  (285 catégories `undefined`) : régénération revert, comme aux runs précédents.
- Prochain jour : J13 (`screenweaver-pourquoi-outil-ecriture`) le 2026-08-21.

## Run précédent : 2026-08-19 (J11 publié)

### What happened
- Publication du J11 du plan 90 jours : `lost-garden-journal-production-serie-ia`
  (evergreen, analyses, 2960 mots). Prévu le 2026-08-18, publié le 19 : aucun run
  n'a eu lieu le 18, le calendrier glisse donc d'un jour (J12 = 2026-08-20).
- Faits Lost Garden vérifiés avant écriture via l'oEmbed YouTube : chaîne
  LostGarden Anime, épisode 1 « The Awakening of the Lantern Knight ». Aucun
  chiffre de production inventé (ni durée, ni budget, ni nombre d'épisodes, ni
  liste d'outils figée) : c'est la contrainte principale de ce sujet.
- 3 images générées via `scripts/render_blog_queue_nanobanana.py`. Deux pièges
  découverts : le script n'accepte PAS `--slug` (uniquement `--dest`/`--prompt`),
  et il doit être lancé depuis PowerShell, car Git Bash convertit `/images/...`
  en `C:\Program Files\Git\images` et le run échoue en PermissionError.
- Passage humanizer appliqué : 6 parallélismes « X n'est pas A, c'est B »
  supprimés, liste à en-têtes gras dé-graissée, chutes-punchline réécrites.
- Liens entrants réciproques ajoutés depuis `ronces-coulisses-court-film-ia` et
  `voidborn-anime-ia-festival-coulisses`.
- `CONTENT_INDEX.md` toujours pas régénérable : `build_ledger.mjs` sort un index
  corrompu sous CRLF (« Categories: undefined 287 »). Revert, comme au run
  précédent. À corriger un jour dans le script (parseur frontmatter et fins de ligne CRLF).

### Next run should
1. Evergreen slot: Plan 90 jours J12 = `midjourney-sref-references-style`
   (cluster OUTILS, mot-clé "midjourney sref"), à publier le 2026-08-20.
   Prévoir le lien entrant réciproque depuis le pilier `midjourney-guide-complet`.
2. Générer les images UNIQUEMENT via scripts/render_blog_queue_nanobanana.py,
   lancé depuis PowerShell, avec --dest et --prompt (pas de --slug).
3. Suivre la table "État d'avancement" de seo-90-day-plan.md (décalée d'un jour
   le 2026-08-19) pour les jours suivants.

## Previous run: 2026-07-20 (Run 23 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-17 (batch 22: 3 articles).
- WebSearch for real news in last 72h: found Kimi K3 Moonshot AI launch July 16-17, 2026
  (Bloomberg, CNBC, Fortune confirmed: 2.8T parameter MoE model, 1M token context, open weights
  promised July 27) and WAICO formation at WAIC Shanghai July 16-17, 2026 (Al Jazeera, Xinhua,
  CGTN confirmed: 29-nation AI governance org founded by China at World AI Conference).
- Plan 90 jours J8 (2026-07-20): dzine-image-animator-tutoriel
  (cluster OUTILS, mot-clé "dzine ai image animator", pos 7.1, 59 imp).
  Liens vers /blog/dzine-ia (pilier), /blog/comment-transformer-image-ia-video-fluide-credible.
  Anti-cannibalisation : satellite mono-fonction du pilier dzine-ia (qui couvre l'ensemble pipeline).
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a889b945.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-20.json --start 0 --end 1 then --start 2 --end 3
  from worktree). Images written to main repo public/. Copied to worktree before staging.
- Bug fix: mastering-loudness-pub-reseaux-sociaux-ia (FR+EN) had <= in Markdown table
  causing MDX parse error. Fixed to "max -1 dBTP". Build passed after fix.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (553 pages, 3 new articles prerendered + 2 MDX fixes).
- Cleaned main repo image dirs, merged fast-forward into main (44c0911), pushed origin/main.

### Articles published this run
1. `kimi-k3-moonshot-modele-ia-chinois-juillet-2026` (actualite)
2. `waico-chine-alliance-ia-mondiale-waic-shanghai-2026` (actualite)
3. `dzine-image-animator-tutoriel` (tutoriels/evergreen — plan 90j J8)

### Technical note this run
- Working tree: agent-a889b945 (current worktree). Articles committed directly.
- Image generation: ran from worktree dir, but script wrote to main repo public/ (standard behavior).
  Copied to worktree before git add.
- Build went 544 -> 553 pages (+3 articles + EN translations from translation loop).
- Bug fixed: mastering-loudness-pub-reseaux-sociaux-ia used <= in table cell which MDX
  parsed as JSX tag start. Fixed to "max". This was a pre-existing article from the translation loop.
- Merge: no conflict (image dirs cleaned from main before merge). Fast-forward OK.
- SEO audit 0 errors confirmed.
- Plan 90 jours J8 (dzine-image-animator-tutoriel) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J9 = `parcours-frank-houbre-guitare-cinema-ia`
   (cluster MARQUE, mot-clé "frank houbre parcours / frank houbre biographie", pos navigationnelle).
   Liens vers /a-propos (pilier), /presse. Anti-cannibalisation: l'article raconte (narratif long),
   /a-propos synthétise. Décrire le parcours guitare -> cinéma -> IA.
   [données Frank] requis : n'inventer aucun fait biographique. Décaler si données absentes.
2. News to watch: Kimi K3 open weights drop (announced July 27 — confirm if happened),
   Meta Muse Video official launch (previewed July 7 — watch for GA),
   WAICO first regulatory moves, Google Gemini 3.5 Pro GA updates,
   Anthropic new pricing after Fable 5 paywall switch (July 20 = day 1 paid).
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-17 (Run 22 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-16 (batch 21: 3 articles).
- WebSearch for real news in last 72h: found Apple Intelligence approuvé en Chine avec
  Alibaba Qwen (TechCrunch, Yahoo Finance, The Next Web, 15 juillet 2026)
  et PrismML Bonsai 27B premier modèle 27B sur iPhone (9to5Mac, prismml.com, MarkTechPost,
  14 juillet 2026).
- Plan 90 jours J7 (2026-07-17): voidborn-anime-ia-festival-coulisses
  (cluster CAS, mot-clé "animé ia festival", PAA voidborn). Données réelles uniquement
  (festivals, prix tirés de press.ts : Seoul, Hollywood, Australia, Bangkok, etc.).
  Liens vers ronces-coulisses-court-film-ia, illustrations-manga-anime-ia,
  pipeline-ia-script-storyboard-production-de-a-z.
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a2e5d366.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-17.json --start 0 --end 1 then --start 2 --end 3
  from worktree). Images written to main repo public/. Copied to worktree before staging.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (544 pages, 3 new articles prerendered, up from 539).
- Cleaned main repo image dirs, merged fast-forward into main, pushed origin/main (e2122ac).

### Articles published this run
1. `apple-intelligence-chine-alibaba-qwen-approbation-juillet-2026` (actualite)
2. `prismml-bonsai-27b-modele-ia-iphone-juillet-2026` (actualite)
3. `voidborn-anime-ia-festival-coulisses` (guides/evergreen — plan 90j J7)

### Technical note this run
- Working tree: agent-a2e5d366 (current worktree). Articles committed directly.
- Image generation: ran from worktree dir, but script wrote to main repo public/ (standard behavior).
  Copied to worktree before git add.
- Build went 539 -> 544 pages (+3 articles + EN translations from translation loop).
- Merge: no conflict (image dirs cleaned from main before merge). Fast-forward OK.
- SEO audit 0 errors confirmed.
- Plan 90 jours J7 (voidborn-anime-ia-festival-coulisses) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J8 = `dzine-image-animator-tutoriel`
   (cluster OUTILS, mot-clé "dzine ai image animator", pos 7.1, 59 imp).
   Liens vers dzine-ia (pilier, entrant depuis lui), comment-transformer-image-ia-video.
   Anti-cannibalisation : satellite mono-fonction du pilier dzine-ia.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17 or July 24 fallback — check if launched),
   Claude Fable 5 paywall bascule (July 19 deadline), World AI Conference Shanghai (July 17-18),
   Meta infrastructure announcements, Anthropic IPO timeline.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-16 (Run 21 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-14 (batch 20: 3 articles).
- WebSearch for real news in last 72h: found PixVerse levée de fonds 439M$ Series C
  (TechCrunch, Yahoo Finance, VentureBurn, TNGlobal, pixverse.ai confirmed, 13 juillet 2026)
  et Claude Fable 5 accès gratuit prolongé jusqu'au 19 juillet 2026
  (BleepingComputer, Forbes, Dataconomy, TechTimes confirmed, 12-13 juillet 2026).
- Plan 90 jours J6 (2026-07-16): doublage-ia-alternatives-heygen-comparatif
  (cluster OUTILS, mot-clé "alternatives heygen doublage", PAA HeyGen pos 5.8-9.6).
  Liens vers heygen-elevenlabs-comparatif (pilier), synchronisation-labiale,
  doublage-voix-off-cloner-diriger-voix-film.
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a3536ac9.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-16.json --start 0 --end 1 then --start 2 --end 3
  from worktree). Images written to worktree public/ directly.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (539 pages, 3 new articles prerendered, up from 532).
- Staged explicit paths (3 .md + 3 hero.webp), committed bb4942d in worktree.
- Merged fast-forward into main, pushed origin/main (2a09e36).

### Articles published this run
1. `pixverse-439-millions-levee-fonds-video-ia-juillet-2026` (actualite)
2. `claude-fable-5-gratuit-prolonge-19-juillet-2026` (actualite)
3. `doublage-ia-alternatives-heygen-comparatif` (comparatifs/evergreen — plan 90j J6)

### Technical note this run
- Working tree: agent-a3536ac9 (current worktree). Articles committed directly.
- Image generation: ran from worktree scripts/ dir (wrote to worktree public/ directly).
- Build went 532 -> 539 pages (+3 articles + EN translations from translation loop).
- Merge: no conflict (empty image dirs in main removed before merge). Fast-forward OK.
- SEO audit 0 errors confirmed.
- Plan 90 jours J6 (doublage-ia-alternatives-heygen-comparatif) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J7 = `voidborn-anime-ia-festival-coulisses`
   (cluster CAS, mot-clé "animé ia festival", liens vers ronces-coulisses-court-film-ia,
   presse, illustrations-manga-anime-ia). Données réelles uniquement (festival, date, titre).
2. News to watch: Google Gemini 3.5 Pro GA (targeting July 17, July 24 fallback),
   World AI Conference Shanghai (July 17-18), Meta infrastructure announcements,
   Claude Fable 5 paywall bascule (July 19 deadline), Anthropic IPO timeline.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-14 (Run 20 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-13 (batch 19: 3 articles).
- WebSearch for real news in last 24-72h: found iOS 27 public beta lancée le 13 juillet 2026
  (9to5Mac, MacRumors, Engadget, Macworld, Cult of Mac confirmed) et Mistral Robostral Navigate
  lancé le 8 juillet 2026 (Bloomberg, mistral.ai officiel, CryptoBriefing, TheAIInsider confirmed).
- Plan 90 jours J5 (2026-07-14): claude-code-createurs-video-guide
  (cluster OUTILS, mot-clé "claude code tarif / claude code prix", pos 9.5 sans page dédiée).
  Liens vers comment-optimiser-workflow-ia, gerer-versions-projets-video-ia.
- Wrote 2 actualite + 1 evergreen directly in worktree agent-a1d59096.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-14.json --start 0 --end 1 then --start 2 --end 3
  from main repo). Copied images to worktree before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (532 pages, 3 new articles prerendered, up from 527).
- Staged explicit paths (3 .md + 3 hero.webp), committed 8346a49 in worktree.
- Rebased after translation loop pushed new commits, then pushed origin/main (679bea6).

### Articles published this run
1. `ios-27-beta-publique-live-siri-ia-test-juillet-2026` (actualite)
2. `mistral-robostral-navigate-robot-ia-juillet-2026` (actualite)
3. `claude-code-createurs-video-guide` (guides/evergreen — plan 90j J5)

### Technical note this run
- Working tree: agent-a1d59096 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 527 -> 532 pages (+3 articles + EN translations from translation loop).
- Translation loop pushed between our merge and push: used git stash + git pull --rebase + git stash pop.
- SEO audit 0 errors confirmed.
- Plan 90 jours J5 (claude-code-createurs-video-guide) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J6 = `doublage-ia-alternatives-heygen-comparatif`
   (cluster OUTILS, mot-clé "alternatives heygen doublage", PAA HeyGen pos 5.8-9.6).
   Liens vers heygen-elevenlabs-comparatif (pilier), synchronisation-labiale. Anti-cannibalisation:
   parade = celui-ci compare HeyGen à ses concurrentes doublage, le pilier compare HeyGen/ElevenLabs.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17 or July 24 fallback),
   Mistral flagship open-weight model GA (teased for partners in July), Apple iOS 27 beta updates,
   Runway announcements, xAI next model, Meta Watermelon GA date.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-13 (Run 19 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-12 (batch 18: 3 articles).
- WebSearch for real news in last 24-72h: found Apple poursuit OpenAI pour vol de secrets
  commerciaux (July 10, 2026 — CNBC, CNN, Bloomberg, TechCrunch, Axios, Fortune confirmed)
  et Meta Muse Spark 1.1 lancement modèle agentique multimodal (July 9, 2026 — ai.meta.com,
  TechCrunch, MarkTechPost, Dataconomy, Fortune confirmed).
- Plan 90 jours J4 (2026-07-13): ronces-coulisses-court-film-ia
  (cluster CAS, mot-clé "ronces film ia / court métrage ia coulisses").
- Wrote 2 actualite + 1 evergreen directly in worktree agent-aee95621.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-13.json --start 0 --end 1 then --start 2 --end 3
  from main repo). Copied images to worktree before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (527 pages, 3 new articles prerendered, up from 521).
- Staged explicit paths (3 .md + 3 hero.webp), committed d19541d in worktree.
- Removed untracked images from main repo, then merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `apple-openai-proces-secrets-commerciaux-juillet-2026` (actualite)
2. `meta-muse-spark-11-agent-multimodal-juillet-2026` (actualite)
3. `ronces-coulisses-court-film-ia` (guides/evergreen — plan 90j J4)

### Technical note this run
- Working tree: agent-aee95621 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 521 -> 527 pages (+3 articles + EN translations from translation loop).
- SEO audit 0 errors confirmed.
- Plan 90 jours J4 (ronces-coulisses-court-film-ia) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J5 = `claude-code-createurs-video-guide`
   (cluster OUTILS, mot-clé "claude code tarif / claude code prix", pos 9.5 sans page dédiée).
   Liens vers comment-optimiser-workflow-ia, gerer-versions-projets-video-ia. Anti-cannibalisation: faible.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17), iOS 27 public beta release
   (around July 14), Runway Gen-5 announcements, xAI Grok 4.5 EU launch,
   Apple/OpenAI lawsuit developments, Meta Muse Spark 1.1 GA (currently preview).
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-12 (Run 18 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-11 (batch 17: 3 articles).
- WebSearch for real news in last 24-72h: found OpenAI ChatGPT Work + GPT-5.6 GA launch
  July 9-10, 2026 (TechCrunch, 9to5Mac, digitalapplied.com, techbriefly.com, ithinkdiff.com
  confirmed) and Google Gemini 3.5 Pro announcement for mid-July 2026, 2M token context,
  Deep Think mode (developersdigest.tech, zoombangla.com, aitoolsreview.co.uk confirmed).
- Plan 90 jours J3 (2026-07-12): frank-houbre-formation-ai-studios
  (cluster FORMATION, mot-clé "frank houbre formation", navigationnelle/commerciale).
- Wrote 2 actualite + 1 evergreen/guide directly in worktree agent-ac993f1c.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-12.json --start 0 --end 1 then --start 2 --end 3
  from main repo). Note: script prepends public/ to dest; queue must NOT include public/ prefix.
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (521 pages, 3 new articles prerendered, up from 517).
- Staged explicit paths only (3 .mdx + 3 hero.webp), committed 1e7a2e7 in worktree.
- Removed untracked images from main repo, then merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `chatgpt-work-gpt-56-disponibilite-generale-juillet-2026` (actualite)
2. `google-gemini-35-pro-fenetre-2m-tokens-juillet-2026` (actualite)
3. `frank-houbre-formation-ai-studios` (guides/evergreen — plan 90j J3)

### Technical note this run
- Working tree: agent-ac993f1c (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 517 -> 521 pages (+3 articles + 1 EN translation from translation loop).
- SEO audit 0 errors confirmed.
- Plan 90 jours J3 (frank-houbre-formation-ai-studios) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J4 = `ronces-coulisses-court-film-ia`
   (cluster CAS, mot-clé "ronces film ia / court métrage ia coulisses").
   Lien vers creer-court-metrage-100-ia, /presse. Anti-cannibalisation: faible.
   Article coulisses sur le court métrage Ronces de Frank. Données réelles uniquement.
2. News to watch: Google Gemini 3.5 Pro GA (target July 17), Apple iOS 27 public beta
   release (around July 14), xAI Grok 4.5 EU launch, OpenAI ChatGPT Work Plus/Business rollout,
   Runway Gen-5 announcements.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-11 (Run 17 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-10 (batch 16: 3 articles).
- WebSearch for real news in last 24-72h: found OpenAI GPT-Live full-duplex voice model
  launch July 8, 2026 (openai.com/index/introducing-gpt-live/, TechCrunch, MacRumors,
  VentureBeat, SiliconANGLE confirmed) and Meta Muse Image launch July 7, 2026 followed
  by consent controversy + rollback July 10, 2026 (about.fb.com, TechCrunch, CNBC,
  Bloomberg, Axios, Variety, Hollywood Reporter confirmed).
- Plan 90 jours J2 (2026-07-11): methode-realisateur-ia-diriger-avant-generer
  (cluster MARQUE, mot-clé "méthode réalisateur IA").
- Wrote 2 actualite + 1 evergreen/guide directly in worktree agent-a17aabb9.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-11.json --start 0 --end 3 from main repo).
  Note: script prepends public/ to dest; queue must NOT include public/ prefix.
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (517 pages, 3 new articles prerendered, up from 513).
  Pre-existing EN translation timeout on worktree build: not caused by new articles.
- Staged explicit paths only (3 .md + 3 hero.webp), committed e514bfb in worktree.
- Removed untracked images from main repo, then merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `openai-gpt-live-voix-duplex-chatgpt-juillet-2026` (actualite)
2. `meta-muse-image-generateur-instagram-juillet-2026` (actualite)
3. `methode-realisateur-ia-diriger-avant-generer` (guides/evergreen — plan 90j J2)

### Technical note this run
- Working tree: agent-a17aabb9 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 513 -> 517 pages (+3 articles + EN translations from translation loop).
- Merge conflict pattern (untracked images in main after generation): cleaned with rm -rf before merge.
- SEO audit 0 errors confirmed.
- Plan 90 jours J2 (methode-realisateur-ia-diriger-avant-generer) publié.
- Image queue format: dest must NOT include public/ prefix (script adds it automatically).

### Next run should
1. Evergreen slot: Plan 90 jours J3 = `frank-houbre-formation-ai-studios`
   (cluster FORMATION, mot-clé "frank houbre formation", intention navigationnelle/commerciale).
   Lien vers /a-propos et accueil. Décrire AI Studios, renvoyer vers Skool.
   Anti-cannibalisation: rester sur la requête marque, ne pas cibler "formation IA vidéo" générique.
2. News to watch: GPT-5.6 Sol/Terra/Luna general availability (rolled out July 9),
   Meta Muse Video development updates, iOS 27 public beta release (around July 14),
   Runway Gen-5 announcement, xAI Grok 4.5 EU launch, Google Video Remix EMEA rollout.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-10 (Run 16 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-07 (batch 15: 3 articles).
- WebSearch for real news in last 24-72h: found xAI Grok 4.5 launch July 8, 2026
  (x.ai/news/grok-4-5, Axios, Yahoo Tech, explainx.ai confirmed) and Google Photos
  Video Remix powered by Gemini Omni launch July 8, 2026 (TechCrunch, 9to5Google,
  Engadget, Dataconomy confirmed).
- Plan 90 jours J1 (2026-07-10): WAN Alibaba guide complet (slug wan-alibaba-guide-complet).
- Wrote 2 actualite + 1 evergreen/guide directly in worktree agent-a99862aa.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-10.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (513 pages, 3 new articles prerendered, up from 502).
  Note: build from worktree failed on EN article timeout (comment-vendre-videos-ia-clients-professionnels),
  build from main repo passed cleanly. Same pré-existing issue pattern, not caused by new articles.
- Staged explicit paths only (3 .md + 3 hero.webp), committed 6c37d39 in worktree.
- Merged fast-forward into main, pushed origin/main.

### Articles published this run
1. `xai-grok-45-coding-agentique-createurs-juillet-2026` (actualite)
2. `google-photos-video-remix-gemini-omni-juillet-2026` (actualite)
3. `wan-alibaba-guide-complet` (guides/evergreen — plan 90j J1)

### Technical note this run
- Working tree: agent-a99862aa (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 502 -> 513 pages (+3 articles + EN translations).
- Merge conflict on untracked articles/images in main repo (had been copied there for build test).
  Fix: remove them from main before merge. Same pattern as previous runs.
- SEO audit 0 errors confirmed.
- Plan 90 jours J1 (wan-alibaba-guide-complet) publié. Marquer comme done dans seo-90-day-plan.md si nécessaire.

### Next run should
1. Evergreen slot: Plan 90 jours J2 = `methode-realisateur-ia-diriger-avant-generer`
   (cluster MARQUE, mot-clé "méthode réalisateur IA", liens vers /a-propos et
   comment-penser-comme-realisateur). Vérifier anti-cannibalisation.
2. News to watch: Anthropic-Microsoft talks (Maia 200 chip), iOS 27 public beta
   (around July 14), Runway Gen-5 announcement, White House AI voluntary standards,
   xAI Grok 4.5 EU launch (mid-July), Google Video Remix EMEA rollout.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-07 (Run 15 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-06 (batch 14: 3 articles).
- WebSearch for real news in last 24-72h: found xAI Grok Voice 21 new multilingual voices
  (x.ai/news/new-flagship-voices July 6, 2026 confirmed) and Meta Watermelon model claiming
  GPT-5.5 parity (Bloomberg, American Bazaar, Benzinga, TechTimes, July 3-4 confirmed).
- Wrote 2 actualite + 1 business/evergreen directly in worktree agent-ae704954.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-07.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Fixed thumbnail, excerpt length, and internal links on all 3 articles.
  Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (502 pages, 3 new articles prerendered, up from 497).
- Staged explicit paths only (3 .mdx + 3 hero.webp), committed 94072c4 in worktree.
- Merge conflict on untracked images in main repo: removed them first, then merged cleanly (fast-forward).
- Pushed origin/main.

### Articles published this run
1. `xai-grok-voice-21-voix-voice-agent-builder-juillet-2026` (actualite)
2. `meta-watermelon-modele-ia-gpt-55-parite-juillet-2026` (actualite)
3. `checklist-avant-livrer-video-ia-client` (business/evergreen)

### Technical note this run
- Working tree: agent-ae704954 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 497 -> 502 pages (+3 articles +2 EN translations from translation loop).
- Merge conflict: the 3 generated images existed as untracked in main working tree.
  Fix: remove them from main before merge. Same pattern as previous runs.

### Next run should
1. Evergreen slot: NOW DRIVEN BY `seo-90-day-plan.md` (repo root, added 2026-07-09,
   GSC-backed). Take the next unpublished day from its "État d'avancement" section
   (starts at J1 `wan-alibaba-guide-complet`, planned 2026-07-10) and follow the row's
   brief + anti-cannibalization parade. Update the tracker after publishing. The old
   candidates (brief client, workflow integration, offre de service) are already
   covered by plan days J59/J16/J66 — do not write them separately.
2. News to watch: iOS 27 public beta launch (around July 14), Runway Gen-5 announcement,
   xAI Grok 4.5 broader public rollout, Meta Watermelon release date if announced,
   EU AI Act Article 50 enforcement (August 2 deadline approaching — possible follow-up).
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-06 (Run 14 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-05 (batch 13: 3 articles).
- WebSearch for real news in last 24-72h: found Runway Agent Skills launch July 2 2026
  (runwayml.com/changelog confirmed) and EU AI Act Article 50 enforcement deadline August 2 2026
  (tellers.ai, artificialintelligenceact.eu, kontainer.com verified).
- Wrote 2 actualite + 1 business/evergreen directly in worktree agent-ab239127.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API,
  --queue tmp-new-articles-queue-2026-07-06.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (497 pages, 3 new articles prerendered, up from 492).
- Staged explicit paths only (3 .mdx + 3 hero.webp), committed 50bab6c in worktree.
- Merge conflict on untracked images in main repo: removed them first, then merged cleanly.
- Merged worktree-agent-ab239127 into main (4b09952), pushed origin/main.

### Articles published this run
1. `runway-agent-skills-campagnes-pub-video-ia-juillet-2026` (actualite)
2. `eu-ai-act-article-50-marquage-video-ia-aout-2026` (actualite)
3. `presenter-projet-video-ia-client-non-tech` (business/evergreen)

### Technical note this run
- Working tree: agent-ab239127 (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- Build went 492 -> 497 pages (+3 articles +2 EN translations from translation loop).
- Merge conflict: the 3 generated images existed as untracked in main working tree.
  Fix: remove them from main before merge. Same pattern as previous runs.

### Next run should
1. Evergreen candidates: "checklist avant de livrer une vidéo IA au client" (business),
   "créer un brief client pour un projet vidéo IA" (business, brief template),
   "comment intégrer l'IA dans son workflow de production existant" (tutoriels).
2. News to watch: iOS 27 public beta launch (around July 14), Runway Gen-5 announcement,
   ElevenLabs v3 TTS details, GPT-5.6 broader public rollout, EU AI Act further enforcement dates.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-05 (Run 13 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-04 (batch 12: 3 articles).
- WebSearch for real news in last 24-72h: found Kling AI $2.8B funding round July 2-4 2026
  (Bloomberg, CNBC, TechTimes, TechStartups) and Apple iOS 27 public beta announcement
  July 2-3 2026 (Forbes, 9to5Mac, MacRumors, Apple newsroom).
- Wrote 2 actualite + 1 business/evergreen directly in worktree agent-a68886ea.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, --queue
  tmp-new-articles-queue-2026-07-05.json --start 0 --end 3 in two calls from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 1 em-dash error in devis article -> fixed -> 0 errors.
- Build: PASS (492 pages, 3 new articles prerendered, up from 487).
- Staged explicit paths only (3 .md + 3 hero.webp), committed 82c4b16, pushed origin/main.

### Articles published this run
1. `kling-ai-levee-fonds-28-milliards-valorisation-juillet-2026` (actualite)
2. `apple-ios-27-beta-publique-apple-intelligence-siri-ia` (actualite)
3. `creer-devis-projet-video-ia-client-modele-structure` (business/evergreen)

### Technical note this run
- Working tree: agent-a68886ea (current worktree). Articles committed directly.
- Image generation: ran from main repo, then copied to worktree public/ before staging.
- node_modules: hard-linked with cp -rl from main repo.
- Build went 487 -> 492 pages (+3 articles +2 EN translations from translation loop).

### Next run should
1. Evergreen candidates: "présenter un projet vidéo IA à un client non-tech" (business),
   "comment créer un brief client pour un projet vidéo IA" (business),
   "checklist avant de livrer une vidéo IA au client" (business).
2. News to watch: iOS 27 beta 3 developer release (around July 7-8), Apple Intelligence
   new features testing; GPT-5.6 broader public rollout; Runway Gen-5 announcement;
   ElevenLabs Eleven v3 TTS details; Anthropic Samsung chip design news.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (wait 15-20min).

## Previous run: 2026-07-04 (Run 12 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-03 (batch 11: 3 articles).
- WebSearch for real news in last 72h: found Anthropic-Samsung chip talks July 2, 2026
  (TechCrunch, Bloomberg, The Information, Dataconomy, Korea Herald) and Microsoft Frontier
  Company launch July 2, 2026 (TechCrunch, CNBC, TechAfrica News, TechTimes).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a59200fc.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, --queue
  tmp-new-articles-queue-2026-07-04.json --start N --end N one at a time from main repo).
- Copied images from main repo to worktree public/images/blog/ before git add.
- SEO audit: 0 errors. Word-count warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (487 pages, 3 new articles prerendered, up from 482).
- Staged explicit paths only (3 .md + 3 hero.webp), committed 11e3978, pushed origin/main.

### Articles published this run
1. `anthropic-samsung-chip-ia-2nm-juillet-2026` (actualite)
2. `microsoft-frontier-company-25-milliards-deploiement-ia-2026` (actualite)
3. `choisir-format-vertical-horizontal-video-ia-plateformes` (tutoriels/evergreen)

### Technical note this run
- Working tree: agent-a59200fc. Image generation: run from main repo, then cp to worktree.
- node_modules: hard-linked with cp -rl from main repo.
- Build went 482 -> 487 pages (+3 articles +2 EN translations from translation loop).

### Next run should
1. Evergreen: "comment créer un devis pour un projet vidéo IA" (business, quote template).
2. News to watch: GPT-5.6 broader public rollout, Apple iOS 27 public beta (July 14),
   Runway Gen-5 announcement, ElevenLabs platform updates, Kling IPO news.

## Previous run: 2026-07-03 (Run 11 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-07-02 (batch 10: 3 articles).
- WebSearch for real news in last 72h: found Anthropic Claude Sonnet 5 launch June 30 2026
  (TechCrunch, Anthropic official, MacRumors, Nerova.ai) and California x Anthropic state deal
  June 29 2026 (gov.ca.gov, TechCrunch, CBS Sacramento, The Next Web, Fox Business).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a18db463.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API).
- SEO audit: 0 errors. Title/word-count warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (482 pages, 3 new articles prerendered, up from 467).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed 4dada90, pushed origin/main.

### Articles published this run
1. `claude-sonnet-5-anthropic-agent-ia-juin-2026` (actualite)
2. `californie-anthropic-claude-accord-agences-etat-2026` (actualite)
3. `prompt-negatif-video-ia-a-quoi-ca-sert` (tutoriels/evergreen)

### Technical note this run
- Working tree: agent-a18db463. Build went 467 -> 482 pages.

## Previous run: 2026-07-02 (Run 10 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-28 (batch 9: 3 articles).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a0ae2ae7.
- Build: PASS (467 pages). Committed e188e5c, pushed origin/main.

### Articles published this run
1. `anthropic-fable-5-retour-global-juillet-2026` (actualite)
2. `google-gemini-31-flash-image-omni-flash-video-juin-2026` (actualite)
3. `elevenlabs-music-v2-guide-createurs-video` (tutoriels/evergreen)

## Previous run: 2026-06-28 (Run 9 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-26 (batch 8: 3 articles).
- WebSearch for real news in last 72h: found Anthropic Mythos 5 partial unblock (June 26-27, 2026
  via CNN, Bloomberg, CNBC, NBC News, Fortune, Federal News Network, The Hill) and OpenAI GPT-5.6
  Sol/Terra/Luna launch under federal supervision (June 26, 2026 via TechTimes, FindSkill.ai, Releasebot).
- Wrote 2 actualite + 1 tutoriels/evergreen directly in worktree agent-a457609e.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, tmp-new-articles-queue.json).
- SEO audit: 0 errors. Thin-content warnings on news articles expected per STYLE_GUIDE.
- Build: PASS (456 pages, 3 new articles prerendered, up from 451).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed c10e5b2, pushed origin/main.

### Articles published this run
1. `anthropic-mythos-5-reautorisation-cybersecurite-juin-2026` (actualite)
2. `openai-gpt-56-sol-terra-luna-modeles-juin-2026` (actualite)
3. `creer-broll-ia-plans-coupe-convaincants` (tutoriels/evergreen)

### Technical note this run
- Working tree: agent-a457609e (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format. Confirmed correct.
- Build went 451 -> 456 pages (+3 articles +2 EN translations from translation loop).
- node_modules hard-linked again (cp -rl from main repo) as worktree had empty node_modules dir.

### Next run should
1. Evergreen candidates: "devis et template de quote pour projet vidéo IA client" (business),
   "présenter un projet vidéo IA à un client non-tech" (business),
   "vertical vs horizontal format for AI clips" (confirm no cannibalization first).
2. News to watch: GPT-5.6 general availability date, Fable 5 reauthorization status,
   Runway Gen-4.5 practical tips, ElevenLabs Music v2 launch, Apple iOS 27 beta updates.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-26 (Run 8 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-25 (batch 7: 3 articles).
- WebSearch for real news in last 72h: found OpenAI/Broadcom Jalapeño chip reveal (June 24, 2026
  via TechCrunch, CNBC, VentureBeat, Bloomberg, Tom's Hardware) and Google $75M investment
  in A24 for AI filmmaking tools (June 22, 2026 via Variety, Deadline, IndieWire, HollywoodReporter).
- Wrote 2 actualite + 1 comparatifs/evergreen directly in main working tree (agent-a4a11153).
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, tmp-new-articles-queue.json).
- SEO audit: 0 errors. Pre-existing warnings only (thin-content on news expected per STYLE_GUIDE).
- Build: PASS (451 pages, 3 new articles prerendered, up from 446).
- Staged explicit paths only (3 .md + 3 hero.webp + queue file), committed 2398a4d, pushed origin/main.

### Articles published this run
1. `openai-broadcom-jalapeno-chip-inference-ia-2026` (actualite)
2. `google-a24-partenariat-ia-outils-cinema-2026` (actualite)
3. `video-ia-talking-head-presentations-quel-outil-choisir` (comparatifs/evergreen)

### Technical note this run
- Working tree: agent-a4a11153 (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format. Confirmed correct.
- Build went 446 -> 451 pages (+3 articles +2 EN translations from translation loop).

### Next run should
1. Evergreen candidates: "devis et template de quote pour projet vidéo IA client" (business),
   "B-roll IA : créer des plans de coupe convaincants" (tutoriels),
   "présenter un projet vidéo IA à un client non-tech" (business).
2. News to watch: OpenAI Jalapeño deployment updates, Apple iOS 27 AI features,
   Runway Gen-5 announcements, ElevenLabs new model releases, Anthropic IPO timeline.
3. Check if new articles got EN translations (translation loop may handle).
4. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-25 (Run 7 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-23 (batch 6: 3 articles).
- WebSearch for real news in last 72h: found Sora API shutdown (September 24, 2026 confirmed
  via OpenAI Help Center + TechCrunch) and Anthropic confidential IPO S-1 filing (June 1, 2026
  via Anthropic.com official + CNBC + TechCrunch + Fortune at $965B valuation).
- Wrote 2 actualite + 1 business/evergreen directly in main working tree (agent-a1ee818d).
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue format
  with dest/prompt fields). Images generated to main repo public/ correctly.
- SEO audit: 0 errors. Title/excerpt warnings fixed on 2 articles. Word depth warnings on
  news articles are expected (STYLE_GUIDE: 900-1500 acceptable for fast news).
- Build: PASS (446 pages, 3 new articles prerendered, up from 427).
- Staged explicit paths only (3 .md + 3 hero.webp), committed cb0a08b, pushed origin/main.

### Articles published this run
1. `sora-api-arret-septembre-2026-alternatives-createurs` (actualite)
2. `anthropic-ipo-confidential-965-milliards-valorisation-2026` (actualite)
3. `livrer-fichiers-sources-projet-video-ia-client` (business/evergreen)

### Technical note this run
- Working tree: agent-a1ee818d (current worktree). Articles committed directly.
- Image generation: tmp-new-articles-queue.json with dest/prompt format (not hero/workflow_1/2
  format). The render_blog_queue_gemini.py uses {dest, prompt, slug} format. Confirmed correct.
- The tmp-blog-local-stills-prompts.json uses a different format (hero/workflow_1/workflow_2)
  and goes through a different pipeline. Don't confuse the two.
- Build went 427 -> 446 pages (+3 articles +16 EN translations from translation loop).

### Next run should
1. Set up fresh worktree for content work if translation loop is active.
2. Evergreen candidates: "quote template for AI video projects" (business, scope + devis),
   "vertical vs horizontal format for AI clips" (confirm no cannibalization first),
   "AI video for talking-head presentations" comparatif.
3. News to watch: Apple iOS 27 beta developer releases, Runway Gen-5 announcements,
   ElevenLabs new model releases, any Kling 3.1 update, Anthropic IPO timeline updates.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK (avoid checking < 15min
   after push due to CDN 404 caching behavior).

## Previous run: 2026-06-23 (Run 6 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-22 (batch 5: 3 articles).
- WebSearch for real news in last 72h: found Lionsgate equity stake in Runway AI
  (Variety, June 2026) and MiniMax Hub platform launch at Shanghai Film Festival
  (Variety, June 15, 2026).
- Wrote 2 actualite + 1 comparatif/evergreen in worktree agent-adb79a3f.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
  Images copied from main repo to worktree before git add.
- SEO audit: 0 errors on new articles. Pre-existing style/thin-content warnings only (news expected).
- Build from worktree: PASS (427 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged worktree-agent-adb79a3f into main, pushed origin/main (63f3ce5).

### Articles published this run
1. `lionsgate-runway-ai-series-courtes-ip-hollywood-2026` (actualite)
2. `minimax-hub-plateforme-video-ia-shanghai-juin-2026` (actualite)
3. `meilleur-outil-ia-video-publicite-produit-comparatif` (comparatifs/evergreen)

### Technical note this run
- Worktree was agent-adb79a3f (pre-existing from the run setup). Works correctly.
- Images generated in main repo, then cleared from main repo before merge to avoid
  untracked file conflict (same pattern as previous runs).
- Build went 419 -> 427 pages (+3 articles +5 EN translations from translation loop).

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "delivering source files to client for AI video project" (business),
   "vertical vs horizontal format for AI clips" (may be covered - check first),
   "AI video for talking-head presentations" comparatif,
   "quote template for AI video projects" (scope + devis).
3. News to watch: Runway Gen-5 announcements, ElevenLabs new model releases,
   Sora ChatGPT integration update, any Kling 3.1 update, Apple Intelligence updates.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-22 (Run 5 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-21 (batch 4: 3 articles).
- WebSearch for real news in last 72h: found Dreamina Seedance 2.0 Mini launch
  (ByteDance/CapCut, June 17, 2026, via Manila Times + digitalphablet.com + aijourn.com)
  and Google Flow + Veo 3.1 update with audio on all features (blog.google).
- Wrote 2 actualite + 1 evergreen in worktree loop/content-2026-06-22.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
  Note: script writes to main repo ROOT (not worktree), so images copied manually after generation.
- SEO audit: 0 errors on new articles. Pre-existing warnings only (thin-content on news expected).
- Build from worktree: PASS (419 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged loop/content-2026-06-22 into main, pushed origin/main (fa99c89).
- CDN propagation: Vercel CDN cache held 404s from first check (08:12 UTC, before build finish).
  New build confirmed via homepage cache date 08:31 UTC. Articles live once CDN revalidates.

### Articles published this run
1. `seedance-2-mini-bytedance-video-rapide-juin-2026` (actualite)
2. `google-flow-veo-31-edition-audio-juin-2026` (actualite)
3. `corriger-erreurs-anatomiques-video-ia-corps-mains` (evergreen, tutoriels)

### Technical note this run
- CRITICAL FORMAT BUG FIXED: blog.ts getSlugs() reads ONLY flat files (.md / .mdx)
  in content/blog/. It does NOT recurse into subdirectories. Articles created as
  dir/index.mdx are INVISIBLE to the site. Always use content/blog/slug.md format.
  Never content/blog/slug/index.mdx. (Fix commit 6e66a82 renamed all 3 articles.)
- Image generation script (scripts/render_blog_queue_gemini.py) writes to main repo ROOT,
  not the active worktree. Workaround: run script from worktree dir (it still writes to main),
  then cp images from main to worktree before git add. This is the correct workflow.
- CDN 404 caching: Vercel CDN caches 404 responses. If you check a new URL before the
  new Vercel build finishes, you get a 404 that stays cached for ~30min. Avoid checking
  new article URLs until 15-20min after push.

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "best AI video for product ads" comparatif,
   "delivering source files to clients for AI video" business article,
   "vertical vs horizontal format for AI clips" format article.
3. News to watch: ElevenLabs Music v2 developments, Runway Gen-5 announcements,
   any Kling 3.1 update, Apple WWDC Siri/Gemini integration details.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Vercel CDN has cleared and all 3 new articles are 200 OK.

## Previous run: 2026-06-21 (Run 4 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-20 (batch 3: 3 articles).
- WebSearch for real news in last 72h: found Midjourney Medical Scanner announcement
  (Bloomberg June 18, 2026) and Google Gemini/Imagen API preview model deprecations
  (deadline June 24-25, 2026, from ai.google.dev/gemini-api/docs/changelog).
- Wrote 2 actualite + 1 evergreen in worktree loop/content-2026-06-21.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API, queue-swap technique).
- SEO audit: 1 error (multiple H1 in Google article from code block comments) -> fixed -> 0 errors.
- Build from worktree: PASS (417 pages, 3 new articles prerendered). Hard-linked node_modules.
- Fast-forward merged loop/content-2026-06-21 into main, pushed origin/main (0af03f0).
- Live verification: 200 OK on all 3 new article URLs.

### Articles published this run
1. `midjourney-medical-scanner-pivot-hardware-juin-2026` (actualite)
2. `google-imagen-gemini-image-preview-depreciation-juin-2026` (actualite)
3. `pipeline-ia-script-storyboard-production-de-a-z` (evergreen, tutoriels)

### Technical note this run
- node_modules: must use `cp -rl` (hard-link), NOT `ln -s` (symlink). Turbopack rejects
  symlinked node_modules that point outside its project root. Had to remove soft link and
  redo with `cp -rl`. Confirmed the `cp -rl` approach works.
- Image generation: temporarily swap tmp-blog-gen-queue.json with 3-item queue, run with
  --force, then restore the original 249-item queue.

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: "best AI video tool for product ads" comparatif,
   "hands and eyes still breaking: current fixes" troubleshooting,
   "AI project quote template + scope" business article,
   "getting a clean loop for social" format article.
3. News to watch: ElevenLabs Music v2 API (launched June 8 changelog, underreported),
   Runway Gen-4.5 practical workflow for creators (released Dec 2025, still evergreen material),
   any Sora ChatGPT video integration update.
4. Check if new articles got EN translations (translation loop may handle).
5. Verify Google Imagen articles stay live as Imagen models actually shut down June 24-25.

## Previous run: 2026-06-20 (Run 3 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-19 (batch 2: 3 articles).
- WebSearch for real news in last 72h: found Grok Imagine Video 1.5 (xAI, June 17, 2026, GA release)
  and Higgsfield Creative OS (June 6, 2026, Claude MCP + Adobe/Figma integrations).
- Wrote 2 actualite + 1 evergreen in worktree agent-ae6e44dd.
- Generated 3 hero images via scripts/render_blog_queue_gemini.py (Imagen API).
- SEO audit: 0 errors (news thin-content warnings are expected per STYLE_GUIDE).
- Build from main repo: PASS (3 new articles prerendered).
- Fast-forward merged worktree-agent-ae6e44dd into main, pushed origin/main (58f7c54).

### Articles published this run
1. `grok-imagine-video-1-5-xai-generation-video-ia` (actualite) - slug sans date prefix
2. `higgsfield-creative-os-claude-adobe-juin-2026` (actualite)
3. `gerer-versions-projets-video-ia` (evergreen, tutoriels)

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: script-to-screen pipeline (tie all pillar tools together),
   "best AI video for music videos" comparatif extension (product-ads, talking-head),
   quote template / scope creep on AI projects.
3. Consider thin-article rewrites from IDEAS_BACKLOG.
4. Verify new articles have EN translations (translation loop may handle).

---

## Previous run: 2026-06-19 (Run 2 — 3 articles published)

### What happened
- Read all .loop_memory/ files. Last publish was 2026-06-17 (batch 1: 3 articles).
- WebSearch for real news in last 72h: found Kling 3.0 Turbo (June 17, 2026)
  and CNC rapport IA cinéma/audiovisuel (presented June 9, 2026 at Assemblée nationale).
- Wrote 2 actualite + 1 evergreen in worktree agent-a11e082e.
- Generated 3 hero images via render_blog_queue_gemini.py (Imagen API).
- SEO audit: 2 em-dash errors in source anchors -> fixed -> 0 errors.
- Build from main repo: PASS (409 pages, 3 new articles prerendered).
- Merged worktree-agent-a11e082e into main, pushed origin/main (450bbf8).

### Articles published this run
1. `2026-06-19-kling-3-turbo-previsualisation-video-ia` (actualite)
2. `2026-06-19-cnc-rapport-ia-cinema-audiovisuel-2026` (actualite)
3. `2026-06-19-luma-ray-2-guide-pratique-settings-workflow` (evergreen, tutoriels)

### Next run should
1. Set up fresh worktree for content work.
2. Evergreen candidates: business quote template / scope creep on AI projects;
   comparator "best AI video tool for product ads"; version-control for AI projects.
3. Consider thin-article rewrites from IDEAS_BACKLOG.
4. Check if Kling 3.0 Turbo articles got EN translations (translation loop may handle).

---

## Previous run: 2026-06-17 (Run 0 — SETUP, no content published)

### What happened
- Inspected the repo end to end. It is a Next.js 16.2.1 App Router site,
  "AI Studio" by Frank Houbre, about cinematic AI creation. Content is markdown
  in `content/blog/` (FR, primary) and `content/blog-en/` (EN). Deploys to
  Vercel on push to `main`. Date-gated publishing (future dates auto-publish).
- Built the loop system: `.loop_memory/` (this folder) and `.loop_scripts/`
  (runnable audit + ledger generator + playbooks).
- Ran baseline `npm run build` -> PASS. Ran `seo_audit.mjs` -> 25 errors
  (all em dash), ~298 warnings. Captured in SEO_AUDIT_LOG.md.
- Generated CONTENT_INDEX.md (all 266 articles), seeded CONTENT_LEDGER.md,
  KEYWORD_MAP.md, NEWS_SOURCES.md, STYLE_GUIDE.md.

### Important discovery (affects everything)
- A SEPARATE Claude Code session (PID seen at setup) is ACTIVELY running an
  EN-translation loop: it writes `content/blog-en/*.md` and commits to `main`
  about every 90 seconds. We share one working directory and one git HEAD.
- Consequence: this loop must NOT do `git add -A` (it would capture the other
  loop's in-progress files) and must NOT race commits on `main`. Stage only
  this loop's own paths (`.loop_memory .loop_scripts SETUP_LOOP.md`) and only
  when safe. See ERRORS_AND_BLOCKERS.md.

### In progress / not done
- Loop system files (22) ARE committed + pushed to origin/main, but they were
  swept into the translation loop's `git add -A` commit `db3313b` (mislabeled
  "Add EN translation: fixing bad lighting in AI"). Files intact + inert.
  History left as-is (rewriting shared, actively-pushed main is unsafe).
- No news, evergreen, or content fixes published (correct for a setup run).
- LESSON: explicit-path staging is not enough against the other loop's
  `git add -A`. Before publishing ANY article content, set up a separate git
  worktree for this loop (see ERRORS_AND_BLOCKERS B1).

### What failed
- Nothing failed. Build green, audit green-enough.

### What was fixed
- First operational SEO fix applied in an isolated worktree: all 25 em-dash
  errors cleared (audit 25 -> 0) by replacing ` — ` with ` : ` in 25 FR
  articles. Committed on branch `loop/seo-fixes-2026-06-17`, pushed (preview).
  NOT merged to main (would break the translation loop's fast-forward push);
  merge when that loop is idle. See SEO_AUDIT_LOG + PUBLISH_LOG.
- Found quality debt: a subset of those 25 articles are mostly filler; queued
  for careful rewrite in IDEAS_BACKLOG (did NOT auto-strip, which gutted them).

### DONE this run (operational)
- Em-dash fix MERGED to main and VERIFIED LIVE on frankhoubre.com (the live
  midjourney-vs-dalle article renders ":" not "—"). Branch + worktree cleaned up.
- Confirmed the safe publish mechanism: work in a worktree, merge into local
  main, let the translation loop's next push carry it to origin (zero
  divergence). The translation loop is still active as of 15:57.

### Also done this run (content batch 1)
- Published 2 news + 1 evergreen, LIVE + verified on frankhoubre.com:
  elevenlabs-fin-voix-v1-migration-2026, flux-2-open-weights-images-ia-local-2026,
  corriger-scintillement-flicker-video-ia. 3 Imagen hero images. Merge ad2e2b0,
  pushed origin/main. Audit 0 errors, build PASS.
- Proven full content pipeline: worktree -> write -> Imagen images (Gemini key
  copied into worktree, gitignored) -> audit -> build (hard-link node_modules,
  NOT symlink: Turbopack rejects symlinked node_modules) -> commit -> merge ->
  push -> verify live -> cleanup worktree.

### Also done this run (B3 fix)
- FIXED the site-wide duplicate H1 on FR articles (src/lib/mdx-pipeline.ts
  stripLeadingH1). Verified live: 2 -> 1 H1 across FR, EN unchanged. Merge
  eb77f47, pushed, Vercel deployed. B3 moved to RESOLVED.

### Automation installed 2026-06-19
- launchd LaunchAgent `com.frankhoubre.growthloop` (loaded) + runner
  `.loop_scripts/daily_run.sh`: runs the daily loop at login + 10:00, idempotent,
  notifies "X articles le DATE", loop pushes main. Logs in
  ~/Library/Logs/frankhoubre-growthloop/.
- BLOCKER for unattended runs: the launchd `claude` CLI is NOT logged in (the
  desktop app login does not carry over). User must run ONCE: `claude setup-token`
  (Terminal). Until then the runner notifies "action requise" and does nothing.
  The runner detects this case (greps "not logged in") and notifies the fix.
- Today (2026-06-19) is stamped done to avoid a duplicate same-day batch (a batch
  was already published this session). First auto-run = next login after auth is
  fixed; or `bash .loop_scripts/daily_run.sh --force` to run today.

### Next run should
1. Set up a fresh worktree for content work
   (`git worktree add -b loop/content-YYYY-MM-DD ../frankhoubre-loop main`),
   copy `.env.local` into it for Imagen, hard-link node_modules for build.
2. Begin the daily content cycle: 2 news (actualite) + 1 evergreen, written by
   Claude, using WebSearch + NEWS_SOURCES.md, checked against KEYWORD_MAP.md for
   cannibalization. Write FR first (primary site). Date them today. Generate
   hero images via the Gemini scripts.
3. Careful rewrite of the thin filler articles (IDEAS_BACKLOG) — do NOT
   auto-strip; the strip script gutted them.
4. Re-run audit, fix new safe issues, update all memory files, write
   DAILY_REPORT.md.

### Open decisions for the human (see ERRORS_AND_BLOCKERS.md)
- Should the growth loop publish to `main` directly while the translation loop
  also pushes to `main`? Recommended: yes but stage explicit paths only, never
  `-A`. Confirm acceptable.
- Image generation for new articles uses GEMINI_API_KEY (present) via the
  python scripts. Confirm the loop may run those, or ship news with the default
  OG image until images are generated.
