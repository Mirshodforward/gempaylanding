/**
 * Huquqiy sahifalar tekshiruvchisi — `npm run legal`.
 *
 * NEGA KERAK: oferta, to'lov shartlari va aloqa sahifasi bankka va
 * to'lov tizimlariga (МПС) topshiriladigan hujjatlar. Ularda yetishmagan
 * narsa build'ni buzmaydi — sahifa chiroyli ochiladi, faqat rekvizit
 * bo'sh qoladi yoki karta belgisi ko'rinmaydi. Bunday kamchilik odatda
 * eng noqulay joyda — bank tekshiruvida — ma'lum bo'ladi.
 *
 * Shuning uchun tekshiruv deploy oldida turadi va nima yetishmayotganini
 * nomma-nom aytadi.
 *
 * NIMANI TEKSHIRADI:
 *   · `site.ts` dagi majburiy rekvizitlar to'ldirilganmi;
 *   · xalqaro to'lov tizimlari belgilari `public/pay/` da bormi (МПС talabi);
 *   · har hujjat uchta tilda to'liqmi va SEO maydonlari o'lchamga mos keladimi;
 *   · `h2` langarlari takrorlanmaydimi (mundarija shularga tayanadi).
 */

import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { registerHooks } from "node:module";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Node 24 `.ts` fayllarni o'zi o'qiy oladi, lekin `import "./types"` kabi
 * kengaytmasiz yo'lni tushunmaydi — Vite tushunadi. Loyiha kodi Vite
 * qoidasiga ko'ra yozilgan, shuning uchun uni skript uchun o'zgartirmaymiz:
 * shu yerda yetishmagan kengaytmani o'zimiz sinab ko'ramiz.
 */
registerHooks({
  resolve(spec, ctx, next) {
    try {
      return next(spec, ctx);
    } catch (err) {
      if (!spec.startsWith(".")) throw err;
      for (const ext of [".ts", "/index.ts"]) {
        try {
          return next(spec + ext, ctx);
        } catch {
          // keyingi variantni sinaymiz
        }
      }
      throw err;
    }
  },
});

const { LEGAL, CONTACT, REQUIRED_LEGAL_FIELDS, PAYMENT_METHODS, LOCALES } = await import(
  path.join(ROOT, "src/data/site.ts")
);
const { LEGAL_DOCS } = await import(path.join(ROOT, "src/data/legal/index.ts"));

const errors = [];
const warnings = [];

// ------------------------------------------------------------- rekvizit ----

const SOURCES = { LEGAL, CONTACT };
const missing = REQUIRED_LEGAL_FIELDS.filter(({ path: field }) => {
  const [root, key] = field.split(".");
  return !SOURCES[root]?.[key];
});

if (missing.length) {
  errors.push(
    `${missing.length} ta majburiy rekvizit to'ldirilmagan (src/data/site.ts):\n` +
      missing.map((m) => `      · ${m.path} — ${m.label}`).join("\n"),
  );
}

// Bank rekvizitlari majburiy emas, lekin oferta ularsiz to'liq ko'rinmaydi.
if (!LEGAL.bank.name && !LEGAL.bank.account) {
  warnings.push("bank rekvizitlari bo'sh — oferta oxirida ular ko'rsatilmaydi");
}

// -------------------------------------------------------- to'lov belgisi ----

const MARK_DIR = path.join(ROOT, "public/pay");
const noMark = PAYMENT_METHODS.filter((m) => !existsSync(path.join(MARK_DIR, `${m.id}.svg`)));

const intlNoMark = noMark.filter((m) => m.kind === "card-intl");
const otherNoMark = noMark.filter((m) => m.kind !== "card-intl");

if (intlNoMark.length) {
  errors.push(
    `xalqaro to'lov tizimi belgisi yo'q — МПС shartnomasi buni TALAB qiladi:\n` +
      intlNoMark.map((m) => `      · public/pay/${m.id}.svg — ${m.name}`).join("\n") +
      `\n      Rasmiy SVG belgisini tizimning brend sahifasidan oling.`,
  );
}

if (otherNoMark.length) {
  warnings.push(
    `belgi fayli yo'q, matnli katak chiziladi: ` + otherNoMark.map((m) => m.id).join(", "),
  );
}

// ---------------------------------------------------------------- matn ----

for (const doc of LEGAL_DOCS) {
  for (const loc of LOCALES) {
    const c = doc.locales[loc];
    const where = `${doc.slug} [${loc}]`;

    if (!c) {
      errors.push(`${where}: tarkib yo'q`);
      continue;
    }

    // `<title>` qidiruv natijasida qirqiladi. Brend qo'shilishini ham
    // hisobga olamiz: sahifa uni `... | GemPay` qilib chiqaradi.
    if (c.metaTitle.length > 52) {
      errors.push(`${where}: metaTitle ${c.metaTitle.length} belgi (≤52 kerak — brend bilan 60 ga sig'sin)`);
    }

    const d = c.metaDescription.length;
    if (d < 140 || d > 165) {
      errors.push(`${where}: metaDescription ${d} belgi (140-165 kerak)`);
    }

    const words = c.answer.trim().split(/\s+/).length;
    if (words < 30 || words > 75) {
      warnings.push(`${where}: javob bloki ${words} so'z (40-60 tavsiya etiladi)`);
    }

    const ids = c.body.filter((b) => b.t === "h2").map((b) => b.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (dupes.length) {
      errors.push(`${where}: takrorlangan h2 id — ${[...new Set(dupes)].join(", ")}`);
    }
    if (ids.length < 3) {
      warnings.push(`${where}: atigi ${ids.length} ta bo'lim — mundarija chiqmaydi`);
    }

    if (!c.short) errors.push(`${where}: qisqa nom (short) yo'q — futer va non ushog'i uchun kerak`);
  }
}

// --------------------------------------------------------------- natija ----

if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} ta eslatma:`);
  for (const w of warnings) console.log(`   · ${w}`);
}

if (errors.length) {
  console.log(`\n❌ ${errors.length} ta muammo:`);
  for (const e of errors) console.log(`   · ${e}`);
  console.log(
    "\n   Bu sahifalar bankka va to'lov tizimlariga topshiriladi —\n" +
      "   yetishmagan rekvizit bilan deploy qilmang.",
  );
  process.exit(1);
}

const docs = LEGAL_DOCS.length;
console.log(`✓ huquqiy sahifalar to'liq — ${docs} ta hujjat × ${LOCALES.length} til`);
