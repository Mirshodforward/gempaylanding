/**
 * Vizual va tuzilma auditi — `npm run audit -- <url...>`.
 *
 * Nimani tekshiradi:
 *   · gorizontal overflow (mobil CWV uchun halokatli) va AYNAN qaysi element
 *   · <h1> soni, sarlavha ierarxiyasi
 *   · alt'siz rasmlar
 *   · JSON-LD sxemalarining sintaksisi va turlari
 *   · sahifa skrinshoti (mobil + desktop)
 */
import { chromium } from "playwright-core";
import path from "node:path";

const EXEC =
  process.env.CHROME ||
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1148/chrome-mac/Chromium.app/Contents/MacOS/Chromium`;

const OUT = process.env.SHOTS || ".audit";
const urls = process.argv.slice(2);
if (!urls.length) {
  console.error("foydalanish: node scripts/audit.mjs <url> [url...]");
  process.exit(1);
}

const browser = await chromium.launch({ executablePath: EXEC });

const VIEWPORTS = [
  { name: "mobile", width: 390, height: 844, dsf: 2 },
  { name: "desktop", width: 1440, height: 900, dsf: 1 },
];

let problems = 0;

for (const url of urls) {
  console.log(`\n═══ ${url}`);

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.dsf,
    });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: "networkidle" });

    // ---- gorizontal overflow ----
    //
    // MEZON: sahifa HAQIQATAN yon tomonga siljiydimi. `scrollWidth` o'zi
    // yetarli emas — `overflow-x: hidden` bilan kesilgan mazmun ham uni
    // oshiradi, lekin foydalanuvchi hech qayerga sura olmaydi va Google'ning
    // mobil tekshiruvi ham buni muammo deb hisoblamaydi.
    //
    // Shuning uchun ikki daraja: haqiqiy siljish — XATO, kesilgan kenglik —
    // ogohlantirish (chunki `overflow: hidden` ga tayanish mo'rt yechim).
    const overflow = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const doc = document.documentElement.scrollWidth;
      window.scrollTo(9999, 0);
      const scrolled = window.scrollX;
      window.scrollTo(0, 0);
      if (!scrolled && doc <= vw + 1) return { ok: true, vw, doc, scrolled, culprits: [] };
      /**
       * Element ATAYLAB kesilganmi.
       *
       * Keng jadval `overflow-x: auto` o'ramda turishi TO'G'RI yechim: u
       * o'z ichida siljiydi, sahifa esa joyida qoladi. Bunday elementning
       * `getBoundingClientRect()` kengligi baribir ekrandan katta chiqadi,
       * shuning uchun uni aybdor deb ko'rsatish yolg'on signal bo'lardi.
       * Shu sabab har bir element uchun ota-onalar zanjiri tekshiriladi:
       * biror ota-ona uni kesayotgan bo'lsa, element o'tkazib yuboriladi.
       */
      const isClipped = (el) => {
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const cs = getComputedStyle(p);
          if (/(auto|scroll|hidden|clip)/.test(cs.overflowX)) return true;
          if (cs.contain.includes("strict") || cs.contain.includes("paint")) return true;
          if (cs.position === "fixed") return true;
        }
        return false;
      };

      const culprits = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        // Chapga yoki o'ngga chiqib ketganlar
        if (r.right > vw + 1 || r.left < -1) {
          const cs = getComputedStyle(el);
          // Ataylab kesilgan bezaklar hisobga olinmaydi
          if (cs.position === "fixed") continue;
          if (isClipped(el)) continue;
          culprits.push({
            sel:
              el.tagName.toLowerCase() +
              (el.id ? `#${el.id}` : "") +
              (el.className && typeof el.className === "string"
                ? `.${el.className.trim().split(/\s+/).slice(0, 3).join(".")}`
                : ""),
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
          });
        }
      }
      // Faqat eng tashqi aybdorlarni ko'rsatamiz (ota-ona bo'lsa bola ham chiqadi)
      return { ok: false, vw, doc, scrolled, culprits: culprits.slice(0, 12) };
    });

    if (!overflow.ok && overflow.scrolled) {
      problems++;
      console.log(
        `  ✗ [${vp.name}] SAHIFA YON TOMONGA SILJIYDI (${overflow.scrolled}px): hujjat ${overflow.doc}px, ekran ${overflow.vw}px`,
      );
      for (const c of overflow.culprits) {
        console.log(`      ${c.sel}  left=${c.left} right=${c.right} w=${c.width}`);
      }
    } else if (!overflow.ok) {
      console.log(
        `  · [${vp.name}] mazmun ${overflow.doc}px (kesilgan, siljimaydi) — ekran ${overflow.vw}px`,
      );
      for (const c of overflow.culprits) {
        console.log(`      ${c.sel}  right=${c.right} w=${c.width}`);
      }
    } else {
      console.log(`  ✓ [${vp.name}] overflow yo'q (${overflow.doc}px)`);
    }

    if (vp.name === "mobile") {
      // ---- tuzilma tekshiruvlari (bir marta yetarli) ----
      const struct = await page.evaluate(() => {
        const h1 = [...document.querySelectorAll("h1")].map((e) => e.textContent.trim());
        const heads = [...document.querySelectorAll("h1,h2,h3,h4")].map((e) => ({
          l: Number(e.tagName[1]),
          t: e.textContent.trim().slice(0, 50),
        }));
        const jumps = [];
        for (let i = 1; i < heads.length; i++) {
          if (heads[i].l - heads[i - 1].l > 1) jumps.push(`h${heads[i - 1].l} → h${heads[i].l}: "${heads[i].t}"`);
        }
        const noAlt = [...document.querySelectorAll("img")]
          .filter((i) => i.getAttribute("alt") === null)
          .map((i) => i.currentSrc || i.src);
        const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => {
          try {
            const j = JSON.parse(s.textContent);
            const nodes = j["@graph"] || [j];
            return nodes.map((n) => n["@type"]).join(", ");
          } catch (e) {
            return `PARSE ERROR: ${e.message}`;
          }
        });
        /**
         * Erishuvchanlik: nomi yo'q interaktiv elementlar va past kontrast.
         *
         * Nomi yo'q havola/tugma skrinrider uchun «link» deb o'qiladi va
         * foydalanuvchi qayerga borishini bilmaydi. Bu ayni paytda SEO
         * masalasi ham: Google havola matnidan sahifa mavzusini o'qiydi.
         */
        const srgb = (c) => {
          const v = c / 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        };
        const lum = (rgb) => 0.2126 * srgb(rgb[0]) + 0.7152 * srgb(rgb[1]) + 0.0722 * srgb(rgb[2]);
        const parse = (s) => (s.match(/\d+(\.\d+)?/g) || []).slice(0, 3).map(Number);
        /** Shaffof fonli elementda haqiqiy fonni topish uchun ota-onalarga chiqamiz. */
        const bgOf = (el) => {
          for (let p = el; p; p = p.parentElement) {
            const c = getComputedStyle(p).backgroundColor;
            const m = c.match(/rgba?\(([^)]+)\)/);
            if (!m) continue;
            const parts = m[1].split(",").map((x) => parseFloat(x));
            if (parts.length < 4 || parts[3] > 0.85) return parts.slice(0, 3);
          }
          return [7, 10, 20];
        };

        const noName = [];
        for (const el of document.querySelectorAll("a, button")) {
          const label =
            (el.getAttribute("aria-label") || "").trim() ||
            (el.textContent || "").trim() ||
            (el.querySelector("img")?.getAttribute("alt") || "").trim();
          if (!label) noName.push(el.outerHTML.slice(0, 90));
        }

        const lowContrast = [];
        const seenCombo = new Set();
        for (const el of document.querySelectorAll("p, li, span, a, h1, h2, h3, h4, dt, dd, td, th, strong, time")) {
          const txt = (el.firstChild?.nodeType === 3 ? el.firstChild.textContent : "").trim();
          if (txt.length < 4) continue;
          const cs = getComputedStyle(el);
          // Gradient bilan bo'yalgan matn (`background-clip: text`) da
          // `color` shaffof bo'ladi — kontrastni rang emas, gradient
          // belgilaydi va uni shu yo'l bilan o'lchab bo'lmaydi.
          if (cs.color.includes("rgba") && cs.color.endsWith(", 0)")) continue;
          const fg = parse(cs.color);
          if (fg.length < 3) continue;
          const bg = bgOf(el);
          const key = `${cs.color}|${bg.join()}`;
          if (seenCombo.has(key)) continue;
          seenCombo.add(key);
          const [a, b] = [lum(fg), lum(bg)].sort((x, y) => y - x);
          const ratio = (a + 0.05) / (b + 0.05);
          const size = parseFloat(cs.fontSize);
          const bold = Number(cs.fontWeight) >= 700;
          // WCAG AA: katta matn 3:1, oddiy matn 4.5:1
          const need = size >= 24 || (size >= 18.66 && bold) ? 3 : 4.5;
          if (ratio < need) {
            lowContrast.push(`${ratio.toFixed(2)}:1 (kerak ${need}) ${cs.color} — "${txt.slice(0, 40)}"`);
          }
        }

        const title = document.title;
        const desc = document.querySelector('meta[name="description"]')?.content || "";
        const canon = document.querySelector('link[rel="canonical"]')?.href || "";
        const noindex = /noindex/.test(
          document.querySelector('meta[name="robots"]')?.getAttribute("content") || "",
        );
        return { h1, jumps, noAlt, ld, title, desc, canon, noindex, noName, lowContrast };
      });

      if (struct.h1.length !== 1) {
        problems++;
        console.log(`  ✗ h1 soni: ${struct.h1.length} (aynan 1 bo'lishi kerak) ${JSON.stringify(struct.h1)}`);
      }
      if (struct.jumps.length) {
        problems++;
        console.log(`  ✗ sarlavha darajasi sakradi:`);
        struct.jumps.forEach((j) => console.log(`      ${j}`));
      }
      if (struct.noAlt.length) {
        problems++;
        console.log(`  ✗ alt yo'q: ${struct.noAlt.length} ta rasm`);
      }
      if (struct.noName.length) {
        problems++;
        console.log(`  ✗ nomi yo'q havola/tugma: ${struct.noName.length} ta`);
        struct.noName.slice(0, 4).forEach((h) => console.log(`      ${h}`));
      }
      if (struct.lowContrast.length) {
        problems++;
        console.log(`  ✗ past kontrast: ${struct.lowContrast.length} ta rang juftligi`);
        struct.lowContrast.slice(0, 6).forEach((x) => console.log(`      ${x}`));
      }
      // `noindex` sahifa qidiruv natijasida ko'rinmaydi — meta uzunligining
      // ahamiyati yo'q, shuning uchun tekshirilmaydi.
      if (!struct.noindex && struct.title.length > 60) {
        problems++;
        console.log(`  ✗ <title> ${struct.title.length} belgi (≤60 tavsiya): ${struct.title}`);
      }
      if (!struct.noindex && (struct.desc.length < 120 || struct.desc.length > 170)) {
        problems++;
        console.log(`  ✗ description ${struct.desc.length} belgi (140-160 kerak)`);
      }
      console.log(`  · JSON-LD: ${struct.ld.join(" | ") || "YO'Q"}`);
      console.log(`  · canonical: ${struct.canon || "(yo'q — noindex)"}`);
    }

    const name = url.replace(/^https?:\/\/[^/]+\/?/, "").replace(/[^\w-]/g, "_") || "home";
    await page.screenshot({ path: path.join(OUT, `${name}.${vp.name}.png`), fullPage: true });
    await ctx.close();
  }
}

await browser.close();
console.log(`\n${problems === 0 ? "✓ muammo topilmadi" : `✗ ${problems} ta muammo`}`);
process.exit(problems ? 1 : 0);
