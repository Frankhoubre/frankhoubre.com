// Génère src/generated/image-dimensions.json : largeur et hauteur de chaque
// image de public/images/blog, lues dans l'en-tête du fichier (PNG, JPEG, WebP).
// Le composant <Capture> s'en sert pour garder le ratio naturel sans lire le
// disque au rendu : un fs.read sur public/ ferait embarquer les 600 Mo
// d'images dans la fonction Vercel (limite 250 Mo).
// Lancé automatiquement avant `npm run build` (script prebuild).
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const imagesDir = path.join(root, "public", "images", "blog");
const outFile = path.join(root, "src", "generated", "image-dimensions.json");

function parseDimensions(b) {
  if (b.length >= 24 && b.readUInt32BE(0) === 0x89504e47) {
    return [b.readUInt32BE(16), b.readUInt32BE(20)];
  }
  if (b.length >= 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1];
    }
    if (chunk === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
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
        return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      }
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}

function readHead(file) {
  const fd = fs.openSync(file, "r");
  try {
    const buf = Buffer.alloc(256 * 1024);
    const n = fs.readSync(fd, buf, 0, buf.length, 0);
    return buf.subarray(0, n);
  } finally {
    fs.closeSync(fd);
  }
}

const result = {};
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) {
      const dims = parseDimensions(readHead(full));
      if (dims) {
        const rel = "/" + path.relative(path.join(root, "public"), full).split(path.sep).join("/");
        result[rel] = dims;
      }
    }
  }
}
walk(imagesDir);

const sorted = Object.fromEntries(Object.keys(result).sort().map((k) => [k, result[k]]));
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(sorted, null, 0).replace(/\],"/g, '],\n"') + "\n");
console.log(`image-dimensions: ${Object.keys(sorted).length} images`);
