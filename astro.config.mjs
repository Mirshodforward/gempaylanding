import { defineConfig } from "astro/config";

/**
 * GemPay landing — sof statik marketing/SEO sayti.
 *
 * Mahsulotning o'zi bu yerda EMAS: Mini App Telegram botida
 * (@Gempayuz_bot), Developer API esa api.gempay.uz da. Bu sayt faqat
 * tanishtiradi va botga yo'naltiradi — shuning uchun server, ma'lumotlar
 * bazasi va runtime kerak emas.
 *
 * `@astrojs/sitemap` ATAYLAB ishlatilmayapti: bizga har URL uchun aniq
 * `priority`, `lastmod` va hreflang juftliklari kerak (blog maqolalari
 * har xil og'irlikda), integratsiya esa bularni yetarlicha nozik
 * boshqarishga imkon bermaydi. Sitemap `src/pages/sitemap.xml.ts` da
 * qo'lda quriladi.
 */
export default defineConfig({
  site: "https://gempay.uz",
  output: "static",

  // Manzillar oxirida slash YO'Q. `src/data/site.ts` dagi `absoluteUrl()`
  // ham shu qoidaga amal qiladi — canonical bilan sitemap bir xil bo'lsin.
  trailingSlash: "never",

  build: {
    // `/oyinlar/pubg-mobile` → `oyinlar/pubg-mobile.html` (papka+index emas).
    // `vercel.json` dagi `cleanUrls` shuni slashsiz uzatadi.
    format: "file",
    inlineStylesheets: "auto",
  },

  image: {
    // Muqovalar 492×492 PNG — ularni avif/webp ga o'girish hajmni ~4 barobar
    // kamaytiradi. Astro'ning ichki `sharp` xizmati build vaqtida bajaradi,
    // brauzerga esa tayyor, hashlangan fayl boradi.
    service: { entrypoint: "astro/assets/services/sharp" },
  },

  // Sof HTML/CSS sayt: o'z JS'imiz ~1 KB (mobil menyu va sarlavha holati),
  // ustiga Vercel Web Analytics sanoqchisi qo'shiladi. Prefetch shu holatda
  // ham sezilarli foyda beradi — katalogdan o'yin sahifasiga o'tish deyarli
  // bir zumda bo'ladi.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  devToolbar: { enabled: false },
});
