# DAILY_REPORT — 2026-06-22 (Run 5)

## Status : SUCCES

## Articles publiés (3)

1. **seedance-2-mini-bytedance-video-rapide-juin-2026** (actualite)
   - Dreamina Seedance 2.0 Mini lancé le 17 juin 2026 par ByteDance
   - 2x plus rapide que Fast, moitié prix, disponible via CapCut/Dreamina
   - Sources: manilatimes.net (20 juin 2026), aijourn.com, atlascloud.ai

2. **google-flow-veo-31-edition-audio-juin-2026** (actualite)
   - Google Flow : audio natif sur Ingredients to Video, Frames to Video, Extend
   - Nouveaux outils d'édition précise (insertion/suppression d'éléments)
   - Sources: blog.google/innovation-and-ai/products/veo-updates-flow/, VentureBeat

3. **corriger-erreurs-anatomiques-video-ia-corps-mains** (tutoriels, evergreen)
   - Pourquoi corps, mains, doigts se déforment en vidéo IA en mouvement
   - 6 techniques concrètes : cadrage, prompts, clips courts, pose neutre, regeneration
   - Distinct de inpainting-local-retoucher-yeux-mains-ia (images fixes) et
     comment-eviter-visages-deformes (visages en images)

## Build
- 419 pages statiques (PASS)
- Commit: fa99c89
- Push: origin/main OK

## Images
- 3 hero images générées via Gemini Imagen (~570-604KB chacune)

## SEO audit
- 0 erreurs sur les nouveaux articles
- Pas de tiret cadratin dans aucun article

## Note technique
- FORMAT BUG FIXE : Articles initialement en dir/index.mdx. blog.ts getSlugs() ne lit
  que les fichiers .md/.mdx plats. Fix appliqué : rename en slug.md (commit 6e66a82).
  REGLE pour la suite : toujours créer les articles au format content/blog/slug.md
- Script Imagen écrit dans ROOT (pas le worktree). Copier images avant git add.
- CDN Vercel : éviter de vérifier nouvelles URLs dans les 15min après push.

## Verification live (apres fix format)
- seedance-2-mini-bytedance-video-rapide-juin-2026 : 200 OK
- google-flow-veo-31-edition-audio-juin-2026 : 200 OK
- corriger-erreurs-anatomiques-video-ia-corps-mains : 200 OK
