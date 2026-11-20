"""Fabrique « Regie Bodoni » : Bodoni Moda (OFL) resserrée à 74 % en largeur.

La charte « régie de cinéma » resserre ses titres avec scaleX(.74). Sur le site,
une déformation CSS casse les retours à la ligne ; on fige donc la largeur dans
la police. Quatre fichiers statiques : titrage (corps optique 96) et texte
(corps optique 36, déliés plus épais), en romain 800 et italique 700.

Usage : python3 scripts/build-regie-font.py <dossier des woff2 Bodoni Moda latin>
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.ttLib.scaleUpem import scale_upem
from fontTools.varLib.instancer import instantiateVariableFont

SRC = sys.argv[1]
ROMAN = f"{SRC}/bodonimoda-v28-aFTQ7PxzY382XsXX63LUYJSKSKjWXFBP.woff2"
ITALIC = f"{SRC}/bodonimoda-v28-aFTS7PxzY382XsXX63LUYJSPeKrcW3JNsao.woff2"
K = 0.74


def build(src, wght, opsz, out, family):
    font = TTFont(src)
    font = instantiateVariableFont(font, {"wght": wght, "opsz": opsz})
    upem = font["head"].unitsPerEm
    # Tout réduire de 74 %, puis rendre la hauteur : seule la largeur reste resserrée.
    scale_upem(font, round(upem * K))
    font["head"].unitsPerEm = upem
    back = upem / round(upem * K)
    glyf = font["glyf"]
    for name in font.getGlyphOrder():
        g = glyf[name]
        if g.isComposite():
            for c in g.components:
                c.y = round(c.y * back)
        elif g.numberOfContours > 0:
            g.coordinates.scale((1, back))
            g.coordinates.toInt()
        g.recalcBounds(glyf)
    hhea, os2 = font["hhea"], font["OS/2"]
    for t, attrs in ((hhea, ("ascent", "descent", "lineGap")),
                     (os2, ("sTypoAscender", "sTypoDescender", "sTypoLineGap", "usWinAscent", "usWinDescent",
                            "sxHeight", "sCapHeight", "yStrikeoutPosition", "yStrikeoutSize"))):
        for a in attrs:
            if hasattr(t, a):
                setattr(t, a, round(getattr(t, a) * back))
    font["post"].underlinePosition = round(font["post"].underlinePosition * back)
    for rec in font["name"].names:
        if rec.nameID in (1, 4, 6, 16):
            rec.string = family if rec.nameID != 6 else family.replace(" ", "")
    font.flavor = "woff2"
    font.save(out)
    print(out)


build(ROMAN, 800, 96, "src/fonts/regie-bodoni-display.woff2", "Regie Bodoni Display")
build(ITALIC, 700, 96, "src/fonts/regie-bodoni-display-italic.woff2", "Regie Bodoni Display")
build(ROMAN, 800, 36, "src/fonts/regie-bodoni-text.woff2", "Regie Bodoni Text")
build(ITALIC, 700, 36, "src/fonts/regie-bodoni-text-italic.woff2", "Regie Bodoni Text")
