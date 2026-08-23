# GemPay — landing (gempay.uz)

Marketing + SEO/AEO sayti. O'yin valyutasini **O'zbekiston so'mida** to'ldirish
xizmatini tanishtiradi va Telegram botiga yo'naltiradi.

Mahsulotning o'zi bu yerda emas:

| Nima | Qayerda |
| --- | --- |
| Mini App (haqiqiy to'ldirish) | Telegram bot **@Gempayuz_bot** |
| Backend + narx mantiqi | `starspaymeebot/backend/modules/gameTopup/` |
| Developer API | **api.gempay.uz** |
| Qardosh loyiha (Telegram Stars) | **starstg.uz** |

## Nega Astro

Sof marketing/blog sayti uchun statik Astro eng mos: sahifada **~1 KB JS**
(mobil menyu va sarlavha holati), qolgani to'liq HTML. Google, Yandex va AI
kraulerlar (GPTBot, ClaudeBot, PerplexityBot) uchun ideal — hech narsani
render qilib kutish shart emas. Eng yaxshi Core Web Vitals = yuqoriroq
reyting.

## Katalog — yagona haqiqat manbasi

`src/data/games.ts` botdagi `modules/gameTopup/catalog.js` → `GAME_META` ning
nusxasi: 9 ta o'yin + Steam.

```
PUBG Mobile (UC) · Mobile Legends (olmos) · Magic Chess: Go Go (olmos)
Free Fire (olmos) · Call of Duty: Mobile (CP) · Honor of Kings (token)
Delta Force (Delta Coins) · Asphalt 9 (token) · Bigo Live (olmos) · Steam (hamyon)
```

Bot katalogi o'zgarsa — avval shu fayl yangilanadi, qolgan hamma narsa
(katak, futer, sitemap, JSON-LD, OG rasm) undan o'zi ergashadi.

> **NARX SAYTDA YO'Q — ataylab.** Narx provayder katalogidan jonli keladi va
> USDT kursiga bog'liq. Statik sahifaga yozilgan raqam bir haftada noto'g'ri
> va'daga aylanadi. `npm run ingest` matnda narx topsa — kiritishni to'xtatadi.

## Struktura

```
src/
  data/
    site.ts            domen, bot, tillar, tasdiqlash kodlari
    games.ts           katalog (bot bilan sinxron)
    gameContent.ts     har o'yinning O'ZIGA XOS sahifa matni
    blog/
      types.ts         maqola blok modeli + yordamchilar
      index.ts         reyestr (posts/ ni avtomatik yig'adi)
      posts/*.ts       maqolalar — har biri alohida fayl
  i18n/ui.ts           landing matnlari (uz/ru/en)
  lib/
    seo.ts             JSON-LD quruvchilar + hreflang
    color.ts, gameImages.ts
  layouts/Layout.astro <head> dagi BARCHA SEO signallari
  components/          Hero, Games, GameCard, Faq, blog/ArticleBody ...
  pages/
    index / ru / en             bosh sahifa
    oyinlar/ + [game]           katalog hub + 10 sahifa (har tilda)
    blog/ + [slug]              blog
    sitemap.xml.ts robots.txt.ts llms.txt.ts rss.xml.ts site.webmanifest.ts
  styles/              tokens → base → app (fonts.css avtomatik)
scripts/
  build-assets.mjs     favicon, PWA ikona, har o'yinga 1200×630 OG rasm
  fetch-fonts.mjs      Unbounded + Manrope ni yuklab, o'zimizda hostlaydi
  audit.mjs            haqiqiy brauzerda tekshiruv (pastga qarang)
  ingest.mjs           yaratilgan matnni tekshirib saytga kiritadi
  indexnow.mjs         Bing/Yandex ga yangilanish xabari
.plan/                 kontent rejasi va tadqiqot (repo tarixida qoladi)
```

## Ishga tushirish

```bash
npm install
npm run fonts     # public/fonts/*.woff2 + src/styles/fonts.css
npm run assets    # favicon, PWA ikona, public/og/*.png
npm run dev       # http://localhost:4321
npm run build     # dist/ — Vercel'ga tayyor
```

`fonts` va `assets` natijalari git'da yotadi, shuning uchun ularni faqat
logo yoki katalog o'zgarganda qayta ishga tushirish kerak.

## Tekshiruv

```bash
npm run build
npx serve dist          # yoki: python3 -m http.server -d dist 4399
npm run audit -- http://localhost:4399/ http://localhost:4399/oyinlar.html
```

`audit` haqiqiy Chromium'da ochib tekshiradi:

- gorizontal overflow (mobil CWV uchun halokatli) va aynan qaysi element
- `<h1>` soni va sarlavha ierarxiyasidagi sakrashlar
- `alt` siz rasmlar
- JSON-LD sintaksisi va sxema turlari
- `<title>` / `description` uzunligi
- har sahifaning mobil + desktop skrinshoti (`.audit/`)

## SEO / AEO

**Har sahifada:** canonical, hreflang (uz/ru/en + x-default), OG/Twitter,
`max-image-preview:large`, `max-snippet:-1`.

Canonical va hreflang **bitta funksiyadan** yasaladi (`localePath` +
`absoluteUrl`) — ular bir-biriga zid bo'lib qolishi mumkin emas. Ilgari
canonical'da `/` bor, hreflang'da yo'q edi; shu farq butun ko'p tilli
klasterni «tasdiqlanmagan» qilib qo'yardi.

**JSON-LD** bitta `@graph` ichida: `Organization`, `WebSite`, `Service` +
`OfferCatalog`, `ItemList`, `BreadcrumbList`, `HowTo`, `FAQPage`,
`BlogPosting`.

**AEO** — javob mashinalari (ChatGPT, Perplexity, Alisa) uchun:

- har sahifada KO'RINADIGAN «Qisqa javob» bloki, 40-60 so'z, mustaqil
  tushunarli — model aynan shuni iqtibos qiladi
- `/llms.txt` — saytning bezaksiz xaritasi va o'zgarmas faktlari
- `robots.txt` AI kraulerlarini ATAYLAB nomma-nom ochadi

**Dublikatga qarshi qoidalar** (buzilishi butun to'plamni cho'ktiradi):

- o'ziga xos matni yo'q o'yin sahifasi `noindex` oladi, `HowTo` sxemasi
  bermaydi va sitemapga tushmaydi
- tarjimasi yo'q maqola o'sha tilda umuman yaratilmaydi
- `<title>` ≤60 belgi — uzun nomli o'yinlarda `seoName` ishlatiladi

**Yandex uchun:** `robots.txt` da `Host`, `site.ts` da `yandex-verification`,
va `npm run indexnow` (Google IndexNow'ni qo'llab-quvvatlamaydi — unga
sitemap ishlaydi).

## Yangi o'yin qo'shish

1. `src/data/games.ts` ga yozuv qo'shing (bot `GAME_META` sidan nusxa)
2. `src/assets/games/<slug>.png` — muqova (492×492 yetadi)
3. `scripts/build-assets.mjs` dagi `GAMES` ro'yxatiga qo'shing → `npm run assets`
4. `src/data/gameContent.ts` ga O'ZIGA XOS matn yozing — busiz sahifa
   `noindex` bo'lib qoladi

Katak, futer, sitemap, JSON-LD va OG rasm o'zi yangilanadi.
