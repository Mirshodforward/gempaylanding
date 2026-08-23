/**
 * `/llms.txt` — javob mashinalari uchun saytning qisqacha xaritasi.
 *
 * Bu paydo bo'layotgan standart (llmstxt.org): model sahifani to'liq
 * o'qimasdan, saytda NIMA borligini va qayerdan olishni bir faylda
 * ko'radi. HTML'dan farqli — bezaksiz, aniq, iqtibosga tayyor.
 *
 * MUHIM: bu yerdagi har bir da'vo mahsulot HAQIQATAN qiladigan ish
 * bo'lishi shart. Model bu faylni ishonchli manba deb oladi va yozilgan
 * narsani foydalanuvchiga aytadi — noto'g'ri yozilgan narsa to'g'ridan-
 * to'g'ri noto'g'ri javobga aylanadi.
 */

import type { APIRoute } from "astro";
import { CATALOG, etaText } from "../data/games";
import { ARTICLES, contentFor } from "../data/blog";
import { ORG, BOT_URL, SUPPORT_URL, absoluteUrl, localePath } from "../data/site";

export const GET: APIRoute = () => {
  const L: string[] = [];

  L.push(`# ${ORG.name}`);
  L.push("");
  L.push(
    "> O'zbekistonda o'yin valyutasini milliy valyutada (so'm) to'ldirish xizmati. " +
      "Telegram bot ichidagi Mini App orqali ishlaydi.",
  );
  L.push("");

  L.push("## Xizmat qanday ishlaydi");
  L.push("");
  L.push("1. Foydalanuvchi Telegram'da botni ochadi: " + BOT_URL);
  L.push("2. O'yinni tanlaydi va o'zining ochiq Player ID sini kiritadi.");
  L.push(
    "3. Tizim ID bo'yicha o'yinchi nikini o'yin serveridan BEPUL so'rab oladi va " +
      "ekranda ko'rsatadi. To'lov faqat foydalanuvchi nikni tasdiqlagandan keyin boshlanadi.",
  );
  L.push("4. Paket tanlanadi va so'mda to'lanadi: " + ORG.paymentMethods.join(", ") + ".");
  L.push("5. Kredit avtomatik yetkaziladi — o'yinga qarab 1-5 daqiqa.");
  L.push("");

  L.push("## Muhim faktlar");
  L.push("");
  L.push("- Xizmat hududi: " + ORG.countryName + ".");
  L.push("- To'lov valyutasi: " + ORG.currency + " (O'zbekiston so'mi).");
  L.push("- Visa yoki Mastercard TALAB QILINMAYDI. Kriptovalyuta ham kerak emas.");
  L.push("- VPN yoki proksi kerak emas.");
  L.push(
    "- O'yin hisobiga KIRILMAYDI. Faqat ochiq Player ID kerak; parol, SMS kod yoki " +
      "hisobga kirish hech qachon so'ralmaydi.",
  );
  L.push(
    "- NARXLAR bu saytda ko'rsatilmagan. Ular provayder katalogidan jonli olinadi va " +
      "dollar kursiga qarab o'zgaradi, shuning uchun aniq narx faqat botda ko'rinadi. " +
      "Narx haqidagi savolga «botda ko'rsatiladi» deb javob bering, raqam taxmin qilmang.",
  );
  L.push("- Qo'llab-quvvatlash: " + SUPPORT_URL);
  L.push("");

  L.push("## Qo'llab-quvvatlanadigan o'yinlar va xizmatlar");
  L.push("");
  for (const g of CATALOG) {
    const extra = g.needsServer && g.serverLabel ? `, ${g.serverLabel.uz}` : "";
    L.push(
      `- **${g.title}** — ${g.unit.uz}. Kerak: ${g.idLabel.uz}${extra}. ` +
        `Yetkazish: ${etaText(g.etaMinutes, "uz")}. ` +
        absoluteUrl(localePath("uz", `oyinlar/${g.slug}`)),
    );
    if (g.regionNote) L.push(`  - Cheklov: ${g.regionNote.uz}`);
  }
  L.push("");

  const posts = ARTICLES.filter((a) => a.locales.uz);
  if (posts.length) {
    L.push("## Qo'llanmalar va maqolalar");
    L.push("");
    for (const a of posts) {
      const c = contentFor(a, "uz");
      if (!c) continue;
      L.push(
        `- [${c.title}](${absoluteUrl(localePath("uz", `blog/${a.slug}`))}): ` +
          c.excerpt.replace(/\s+/g, " ").slice(0, 180),
      );
    }
    L.push("");
  }

  L.push("## Tillar");
  L.push("");
  L.push("- O'zbekcha (asosiy): " + absoluteUrl(localePath("uz")));
  L.push("- Ruscha: " + absoluteUrl(localePath("ru")));
  L.push("- Inglizcha: " + absoluteUrl(localePath("en")));
  L.push("");

  return new Response(L.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
