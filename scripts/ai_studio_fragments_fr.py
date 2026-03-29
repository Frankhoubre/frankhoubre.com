# -*- coding: utf-8 -*-
"""Paragraphes techniques réutilisables, mélangés par article pour densité et unicité."""
from __future__ import annotations

import hashlib

ALL_FRAGS: list[str] = [
    "Quand tu parles de cinéma à un modèle, pense caméra physique. Un 35 mm en intérieur, ce n’est pas la même chose qu’un 18 mm au même endroit. Le 35 mm rapproche le visage sans déformer les épaules. Le 18 mm allonge les mains vers la caméra et transforme un simple geste en catastrophe géométrique. Si ton personnage a des mains au premier plan, **choisis une focale plus longue** ou recule virtuellement la caméra.",
    "La lumière dure n’est pas une erreur en soi. L’erreur, c’est une lumière dure sans direction. Dis d’où vient la source, sa taille, sa couleur. Fenêtre nord, néon vert en contre, lampe de bureau tungstène. Même si le modèle simplifie, ton cerveau de spectateur cherche une hiérarchie lumineuse. Sans hiérarchie, tu obtiens ce plat gris qui crie l’IA.",
    "Le grain n’est pas un filtre Instagram posé à la fin. C’est une colle qui harmonise des zones trop propres avec des zones trop sales. Commence léger, 8 mm virtuel fin, puis monte si ton écran est calibré froid. Sur un laptop consumer, le grain disparaît, donc tu en mets trop, puis sur un bon écran ça devient boueux. **Teste sur deux écrans** avant de valider.",
    "Les mouvements de caméra en IA récompensent la modestie. Un push in de 5% sur dix secondes vend l’émotion mieux qu’une orbite complète qui déforme l’architecture. Si tu veux du dynamisme, coupe en montage, ne forces pas la physique dans la génération. Le montage ment à la caméra, le spectateur accepte.",
    "Le son est la moitié du réalisme. Un clip IA visuellement propre avec un silence absolu ressemble à une vitrine. Ajoute une chambre, une rue lointaine, un frigo, un vent léger. Puis compresse légèrement pour coller au média social. **Pose l’ambiance avant de figer le master vidéo**, sinon tu te racontes des histoires sur la qualité.",
    "Le brief en une phrase ne marche jamais. En trois phrases honnêtes, souvent oui. Phrase 1 : qui, où, quelle heure. Phrase 2 : ce que le spectateur doit ressentir à la fin. Phrase 3 : ce qui est interdit visuellement. Les interdits t’évitent le pack néon sci fi par défaut.",
    "La cohérence personnage, ce n’est pas copier coller le même prompt vingt fois. C’est une fiche courte : âge approximatif, vêtement ancré, marque de temps, cicatrice discrète, coiffure réelle. Puis une image de référence fixe que tu réinjectes. Si tu changes un détail majeur entre deux plans, le cerveau humain détecte avant même qu’il sache pourquoi.",
    "Les mains et les dents sont des capteurs de mensonge. Si tu n’as pas besoin des mains, mets les hors champ ou en lointain flou. Si tu en as besoin, prévois un recadrage serré sur le visage et laisse les mains hors cadre. Ce n’est pas de la lâcheté, c’est du métier.",
    "Le contraste n’est pas la saturation. Monter les couleurs pour cacher une image plate, ça donne une pub télé années 90. Travaille d’abord la courbe : noirs qui ne tombent pas en boue, hautes lumières qui ne crament pas la peau. Quand la courbe tient, la saturation a besoin de beaucoup moins.",
    "La profondeur de champ en prompt, décris l’objectif et la distance. Anamorphique donne des ovales de bokeh et une chute douce. Spherical net en 50 mm donne un bokeh plus rond et plus neutre. Si tu ne précises rien, le modèle te sort un bokeh « générique », souvent trop net et trop propre.",
    "Les seeds servent à reproduire, pas à magiquement améliorer. Si une image est mauvaise, changer de seed au hasard, c’est jouer à la roulette. Change le prompt, change la lumière, puis verrouille une seed quand tu approches du but. **Note la seed** dans ton fichier de session, comme un opérateur note une focale.",
    "Le suréchantillonnage d’image n’est pas toujours ton ami. Plus de steps peuvent cristalliser des textures de peau en stuc. Cherche le palier où les pores redeviennent suggérés plutôt que dessinés. C’est souvent un peu avant le maximum que l’interface te propose fièrement.",
    "Le format vertical impose une autre lecture. Un plan large horizontal raconte l’environnement. Un vertical demande un sujet clair, une ligne forte, peu d’éléments parasites sur les bords. Si tu recadres un horizontal en vertical sans repenser la compo, tu obtiens des têtes coupées et des mains qui entrent par surprise.",
    "Le bruit de compression social est une seconde couche de design. Si tu exportes trop propre, la plateforme ajoute son propre moche. Exporte avec un léger grain et un contrôle des hautes, tu gagneras en stabilité après upload. Ce n’est pas de la triche, c’est connaître le média.",
    "Les références film doivent être des références de lumière, pas de sujet. Dire « comme Blade Runner » sans préciser intérieur, pluie, néon indirect, ça ne veut rien dire pour un modèle. Dis plutôt : pluie, reflets au sol, néons en arrière plan, visage éclairé par une source douce proche.",
    "Le rythme d’un clip IA se construit au montage. Si tu attends que la génération te donne le rythme, tu seras dépendant des hasards. Génère des plans plus longs que nécessaire, puis coupe sec. La coupe sec donne l’intention. Le fondu donne la parenthèse. Trop de fondus, et tu retombes sur le clip de démo.",
    "La voix off demande un texte oral, pas un texte écrit collé. Raccourcis les phrases. Ajoute des respirations. Lis à voix haute avant de générer. Si tu t’essouffles, le spectateur aussi. **Marque les pauses** avec des points, pas avec des virgules partout.",
    "Les textures de tissu trahissent le plastique avant la peau. Un pull en laine doit avoir de la micro variation, pas un lissage de mannequin. Si ton pull ressemble à de la résine, baisse la clarté locale sur les vêtements, monte un peu le grain, reprends une photo de référence de tricot réel.",
    "L’étalonnage « teal and orange » fonctionne quand les peaux restent humaines. Si tout part en orange, les visages brûlent. Isole la peau avec un masque doux, ramène une teinte sang réel dans les rouges. Même en IA, tu finiras souvent en post. Accepte le round trip.",
    "Le storyboard, même grossier, te fait économiser des heures. Trois cases dessinées au stylo valent dix prompts aveugles. Tu sais où est la ligne d’horizon, où est le regard, où est la coupure. Le modèle ne devine pas ton plan suivant, tu dois le lui donner comme un cadre.",
    "Les transitions IA « cinéma » sont souvent des transitions de démo. Le vrai cinéma coupe. Si tu utilises un fondu IA entre deux images différentes, tu mélanges deux géométries. Préfère une coupe sèche avec un son qui enchaîne. L’oreille fait la continuité, pas le fondu.",
    "Le bruit de caméra subtil, micro tremblement, peut sauver un plan trop propre. Mais un pixel qui danse sur une joue, c’est une alerte. Si le tremblement modifie la peau, réduis l’amplitude ou fige le visage et bouge seulement l’environnement. **Sépare visage et décor** dans ta stratégie de mouvement.",
    "La résolution intermédiaire est ton laboratoire. Travaille où tu peux itérer en dix minutes, pas en trois heures. Quand une séquence tient, upscaler ou regénérer haut a un sens. Sinon tu optimises un pixel parfait dans une scène fausse.",
    "Les prompts « ultra détaillés » se contredisent souvent. Ajouter cinq styles différents dans le même paragraphe, c’est demander au modèle de tricher. Un style dominant, une concession, un interdit. Trois couches, pas quinze.",
    "Le spectateur regarde les yeux en premier, puis la bouche. Si les yeux sont nets mais la bouche fond, c’est fini. Priorise la netteté sur le triangle du visage, laisse le reste respirer dans le flou optique. C’est aussi comme ça que fonctionnent beaucoup d’objectifs réels.",
    "Les ombres portées trop noires sans transition donnent un look collage. Ajoute un fill très léger ou une réflexion indirecte crédible. L’IA aime le contraste facile. Toi, tu dois ramener la lumière ambiante qui existe dans une vraie pièce.",
    "Le temps météo dans une scène extérieure change tout. Même rue, même acteur, brouillard ou soleil bas, ce n’est pas la même émotion. Fixe l’heure et la météo dans le brief, sinon le modèle mélange des nuages dramatiques avec une lumière de midi.",
    "Les objets réfléchissants, lunettes, vitres, écrans, sont des pièges. Si tu n’en as pas besoin, retire les. Si tu en as besoin, prévois un angle de caméra où le reflet ne montre pas un décor impossible. **Simplifie le reflet** avant de complexifier le décor.",
    "Le monitoring sur téléphone n’est pas optionnel. La moitié de ton audience verra ton clip sur un écran petit et brillant. Si ton grain disparaît et ton contraste explose, tu dois rééquilibrer. Le cinéma moderne est double cible, cinéma et poche.",
    "Les copyrights et l’éthique client ne sont pas un paragraphe à la fin. Si tu bosses pour une marque, documente ce qui est généré, ce qui est retouché, ce qui est stock. La technique ici ne remplace pas le cadre légal. Elle vit à côté.",
    "La constance de palette sur plusieurs plans, c’est un LUT ou une courbe, pas un espoir. Exporte une référence, colle la sur le bord de ton écran, mate plan par plan. L’œil se fatigue vite, la référence non.",
    "Les plans trop larges en IA révèlent la géométrie. Si tu n’as pas besoin du plafond et de cinq fenêtres, resserre. Moins de monde dans le cadre, moins de chances qu’un mur respire. Le cadrage est une décision de réalisateur, pas un défaut de capteur.",
    "Le bruit de fond d’une scène de nuit n’est jamais silencieux. Même « silence » a un souffle. Ajoute un room tone bas, puis coupe au montage là où tu veux le vrai vide. Le contraste entre presque rien et rien fait la tension.",
    "Les couleurs de peau sous néon doivent rester dans une famille crédible. Le néon teinte, oui, mais laisse une part de sang dans les joues. Si tout part magenta, baisse la saturation sélective sur les rouges de peau, remonte légèrement la luminance.",
    "Le travelling latéral en IA demande souvent un décor simplifié. Plus il y a de lignes verticales, plus le modèle devra les tenir droites pendant le mouvement. Si tu vois des murs onduler, réduis la distance du travelling ou ajoute du flou de mouvement léger en post pour masquer sans mentir trop.",
    "Les prompts en anglais ne sont pas une trahison du français. Beaucoup de modèles ont plus de données sur des tags anglais techniques. Tu peux écrire en français pour toi, puis traduire les termes photo : key light, fill, rim, bokeh, anamorphic, stop, ISO mental.",
    "La limite d’un outil n’est pas une insulte personnelle. Si un modèle ne tient pas les mains, contourne. Si un autre ne tient pas les visages de profil, change l’angle. Le studio professionnel choisit l’outil pour la tâche, pas l’inverse.",
    "Le dossier projet propre vaut toutes les promesses de workflow viral. Nomme tes fichiers, garde une capture d’écran des réglages, copie le prompt dans un txt. Dans deux semaines, tu te remercieras quand un client dira « on reprend comme la version 2 ».",
    "Les yeux trop brillants et trop bleus sont un signal IA classique. Baisse la saturation sur le blanc des yeux, ajoute une micro ombre sous la paupière, évite le catchlight parfait en double symétrique. L’œil humain est légèrement imparfait, exploite ça.",
    "Le flou d’arrière plan doit suivre une loi de distance. Si le nez est net et le mur derrière est flou comme de la crème alors qu’il est à cinquante centimètres, le cerveau crie fake. **Décris la distance caméra sujet** et la distance sujet arrière plan, même approximative.",
    "La musique générique « épique » tue une scène intime. Choisis une musique qui laisse de l’air aux silences. Coupe la musique sous une phrase importante. Le cinéma, c’est aussi ce que tu enlèves.",
    "Les lumières multiples sans hiérarchie donnent un studio photo cheap. Choisis une key, une fill faible ou rien, peut être un rim. Trois sources fortes égales, c’est la mort de la profondeur. Écris qui domine en EV si tu peux, même grossièrement.",
    "Le rendu peau « porcelaine » vient souvent d’un mélange trop haut de détail plus une lumière frontale dure. Penche la lumière, ajoute une ombre douce sous le nez, baisse la clarté sur les hautes fréquences de peau en post. La peau a des pores, pas une grille.",
    "Les cadrages trop centrés donnent une affiche, pas une scène. Décale le sujet, laisse de l’espace dans la direction du regard. La règle des tiers n’est pas une loi, c’est un outil pour éviter la carte postale symétrique par défaut.",
    "Le timecode mental compte. Si ton clip est une pub de quinze secondes, chaque seconde a une fonction. Note ce qui se passe à 0, 3, 7, 12. Sinon tu tournes en rond sur un plan qui n’apporte rien à la structure.",
    "Les reflets dans les yeux racontent la pièce. Un catchlight rectangulaire sur une scène « bougie seulement » ment. Harmonise la forme de la source avec le décor. Les petits détails de cohérence font taire le cerveau critique.",
    "Le sharpening global est l’ennemi. Si tu veux du piqué, masque le visage et sharp très peu sur les textiles ou les détails éloignés. Jamais sur la peau au premier plan, sauf si tu cherches un look publicitaire années 2000 volontaire.",
    "Les séquences dialogue en IA demandent des plans de réaction. Même si tu n’as pas d’acteur réel, pense coupe, contre coupe, silence. Le montage porte le dialogue, pas un seul plan qui parle pendant trente secondes.",
    "La peur du noir pousse les débutants à remonter les ombres jusqu’au gris. Garde du noir réel, surtout en cinéma. Le noir donne le volume. Le gris donne la démo.",
    "Les prompts qui listent vingt adjectifs esthétiques sans géométrie produisent des fonds d’écran. Remplace la moitié des adjectifs par des données physiques : distance, focale, hauteur de caméra, heure, matériau dominant.",
    "Le cache du visage partiel, chapeau, mèche, peut aider la cohérence si ton outil galère sur les traits. Ce n’est pas tricher, c’est styliser. Beaucoup de films réels utilisent le hors champ pour la même raison.",
    "Les ambiances cuisine ou bar avec mille reflets demandent des angles prudents. Si tu simplifies une rangée de bouteilles en un mur sombre, tu gagnes en crédibilité. **Réduis la complexité** quand le modèle montre des limites.",
    "Le format carré historique Instagram n’est pas le même que le vertical TikTok. Le centre de gravité visuel monte en vertical. Place l’information importante dans le tiers supérieur, sinon le téléphone la mange sous le pouce du spectateur.",
    "Les transitions sonores masquent des coupures dures. Un whoosh discret, un impact de porte, un cut de musique sur le downbeat. Le son te permet de garder des images simples sans fondus IA douteux.",
    "La fatigue visuelle du spectateur augmente avec les néons saturés. Si ton monde est coloré, offre des respirations neutres entre deux pics. Le contraste de saturation structure l’acte, comme une scène de jour après une nuit.",
    "Les ombres sous les yeux trop propres donnent un maquillage 3D. Ajoute une micro variation de couleur, un peu de rouge sous le bleu, une transition moins nette. Les humains ont des couches, pas des calques.",
    "Le plan séquence IA est séduisant et rarement propre. Si tu en veux un, isole un décor simple, une action claire, un mouvement lent. Sinon découpe en trois plans, le spectateur préférera trois vérités qu’une séquence menteuse.",
    "Les fichiers de travail doivent survivre à un changement d’ordinateur. Exporte aussi une version lisible pour toi dans dix ans : mp4 h264 pour preview, wav pour son, png pour références. La technologie change, les archives restent.",
]


def pick_fragments(slug: str, n: int) -> str:
    h = int(hashlib.md5(slug.encode("utf-8")).hexdigest(), 16)
    k = len(ALL_FRAGS)
    picks: list[int] = []
    x = h
    for i in range(n):
        x = (x * 1103515245 + 12345 + i * 7919) % (2**31)
        picks.append(x % k)
    out: list[str] = []
    seen: set[int] = set()
    for idx in picks:
        if idx in seen:
            idx = (idx + 7) % k
        seen.add(idx)
        out.append(ALL_FRAGS[idx])
    return "\n\n".join(out)
