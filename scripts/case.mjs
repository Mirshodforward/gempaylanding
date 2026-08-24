/**
 * Import nomlaridagi katta-kichik harf tekshiruvchisi — `npm run case`.
 *
 * NEGA KERAK: macOS fayl tizimi katta-kichik harfni ajratmaydi, Linux esa
 * ajratadi. Shuning uchun `import Faq from "../Faq.astro"` haqiqiy fayl
 * `FAQ.astro` bo'lsa ham lokalda muammosiz ishlaydi — va Vercel'da
 * («Could not resolve») build'ni yiqitadi. Xato faqat deploy paytida
 * ko'rinadi, ya'ni eng qimmat joyda.
 *
 * Bu tekshiruv `src/` dagi har bir nisbiy import'ni ochib, fayl nomi
 * katalogdagi haqiqiy nom bilan HARF-BAHARF mos kelishini talab qiladi.
 * Build'dan oldin ishlaydi — `dist/` kerak emas.
 */

import { readdirSync, statSync, existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "src");
const EXTS = [".astro", ".ts", ".tsx", ".js", ".mjs", ".css"];

/** `src/` ichidagi kod fayllarini rekursiv yig'adi. */
function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (EXTS.some((x) => p.endsWith(x))) out.push(p);
  }
  return out;
}

/** Katalog ro'yxatini keshlaydi — bir katalog ko'p marta so'raladi. */
const dirCache = new Map();
function entries(dir) {
  if (!dirCache.has(dir)) {
    try {
      dirCache.set(dir, readdirSync(dir));
    } catch {
      dirCache.set(dir, null);
    }
  }
  return dirCache.get(dir);
}

/**
 * Import yozuvidan haqiqiy faylni topadi. Astro/TS kabi kengaytmani
 * o'zi qo'shadi, shuning uchun barcha ehtimolni sinab ko'ramiz.
 */
function resolveSpec(fromFile, spec) {
  const base = path.resolve(path.dirname(fromFile), spec);
  const cands = [
    base,
    ...EXTS.map((e) => base + e),
    ...EXTS.map((e) => path.join(base, "index" + e)),
  ];
  for (const c of cands) {
    if (existsSync(c) && statSync(c).isFile()) return c;
  }
  return null;
}

// `from "./x"`, `import "./x"` va `import("./x")` — faqat nisbiy yo'llar.
const IMPORT_RE =
  /(?:from\s+|import\s+|import\()\s*["'](\.[^"']+)["']/g;

const caseMismatch = [];
const missing = [];

for (const file of walk(SRC)) {
  const src = await readFile(file, "utf8");
  for (const m of src.matchAll(IMPORT_RE)) {
    const spec = m[1];
    const target = resolveSpec(file, spec);
    const where = path.relative(ROOT, file);

    if (!target) {
      missing.push({ where, spec });
      continue;
    }

    // Fayl topildi — endi nomi katalogda AYNAN shunday yozilganmi?
    const list = entries(path.dirname(target));
    const name = path.basename(target);
    if (list && !list.includes(name)) {
      const real = list.find((e) => e.toLowerCase() === name.toLowerCase());
      caseMismatch.push({ where, spec, real });
    }
  }
}

if (missing.length) {
  console.log(`\n❌ ${missing.length} ta import fayli topilmadi:`);
  for (const m of missing) console.log(`   ${m.where}\n      → ${m.spec}`);
}

if (caseMismatch.length) {
  console.log(`\n❌ ${caseMismatch.length} ta import'da harf mos emas:`);
  for (const m of caseMismatch) {
    console.log(`   ${m.where}\n      → ${m.spec}   (haqiqiy nom: ${m.real})`);
  }
  console.log(
    "\n   Lokalda (macOS) ishlaydi, Vercel'da (Linux) build yiqiladi.",
  );
}

if (missing.length || caseMismatch.length) process.exit(1);

console.log("✓ import nomlari harf-baharf to'g'ri");
