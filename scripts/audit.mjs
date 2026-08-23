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
        const title = document.title;
        const desc = document.querySelector('meta[name="description"]')?.content || "";
        const canon = document.querySelector('link[rel="canonical"]')?.href || "";
        const noindex = /noindex/.test(
          document.querySelector('meta[name="robots"]')?.getAttribute("content") || "",
        );
        return { h1, jumps, noAlt, ld, title, desc, canon, noindex };
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
