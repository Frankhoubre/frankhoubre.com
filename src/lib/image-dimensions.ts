import fs from "fs";
import path from "path";

export type Dimensions = { width: number; height: number };

const cache = new Map<string, Dimensions | null>();

/**
 * Lit largeur et hauteur d'une image de `public/` (PNG, JPEG, WebP) depuis son
 * en-tête, pour que les captures gardent leur ratio naturel sans que l'article
 * ait à recopier les dimensions. Renvoie null si le fichier est absent ou si
 * le format n'est pas reconnu.
 */
export function readPublicImageDimensions(publicPath: string): Dimensions | null {
  if (cache.has(publicPath)) return cache.get(publicPath)!;
  let result: Dimensions | null = null;
  try {
    const file = path.join(process.cwd(), "public", decodeURIComponent(publicPath.replace(/^\/+/, "")));
    const fd = fs.openSync(file, "r");
    try {
      const buf = Buffer.alloc(256 * 1024);
      const n = fs.readSync(fd, buf, 0, buf.length, 0);
      result = parseDimensions(buf.subarray(0, n));
    } finally {
      fs.closeSync(fd);
    }
  } catch {
    result = null;
  }
  cache.set(publicPath, result);
  return result;
}

function parseDimensions(b: Buffer): Dimensions | null {
  if (b.length >= 24 && b.readUInt32BE(0) === 0x89504e47) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  if (b.length >= 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
    }
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === "VP8 ") {
      return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    }
    return null;
  }
  if (b.length >= 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) {
        i += 1;
        continue;
      }
      const marker = b[i + 1];
      // SOF0..SOF15 sauf DHT (C4), JPG (C8) et DAC (CC).
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
      }
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}
