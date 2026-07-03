# Gempay — Landing (gempay.uz)

Marketing + SEO/AEO sayt: **Astro 5 static**. 200+ o'yin valyutasini (PUBG UC,
Mobile Legends olmos, Free Fire va h.k.) arzon va bir daqiqada to'ldirish
xizmatini tanishtiradi. Mahsulotning o'zi shu yerda emas — Mini App Telegram
botida (**@Gempayuz_bot**), Developer API esa **api.gempay.uz** da.

## Nega Astro?

Sof marketing/blog sayt uchun Astro static eng yaxshisi: 0 JS (kerakli joyda
ozgina), to'liq HTML — Google, Yandex va AI crawlerlar (GPTBot, ClaudeBot,
PerplexityBot) uchun ideal. Eng tez Core Web Vitals = yuqori reyting.
Dinamik tizim (kabinet, API, Mini App) alohida Next.js ilovasida qoladi.

## Texnologiya

- **Astro 5** (`output: static`) + `@astrojs/sitemap` (i18n: uz/ru/en)
- Komponentlar: `src/components/*.astro`, dizayn tokenlari: `src/styles/global.css`
- Kontent modeli: `src/i18n/copy.ts` (landing) + `src/i18n/blog.ts` (blog + SEO/JSON-LD helperlar)
- Ikona tizimi: `src/components/icons.ts` (inline SVG), gem logo: `Logo.astro`

## Struktura

```
src/
  layouts/Layout.astro        SEO/AEO head (meta, OG, Twitter, hreflang, JSON-LD slot)
  i18n/copy.ts                landing kontenti (uz/ru) + GAMES + URL'lar
  i18n/blog.ts                5 ta blog (uz/ru/en) + schema helperlar
  components/                 Navbar, Hero, Games, Features, HowItWorks, Stats,
                              Developers, FAQ, CTA, Footer + Blog* + Icon/Logo
  pages/
    index.astro               UZ bosh sahifa     →  gempay.uz
    ru/index.astro            RU bosh sahifa     →  gempay.uz/ru
    blog/                     UZ blog (index + [slug])
    ru/blog/  en/blog/        RU / EN blog
public/
  robots.txt                  AI + qidiruv crawlerlar ochiq, sitemap
  favicon.svg                 gem logo (SVG)
  site.webmanifest
scripts/generate-assets.mjs   PNG ikonalar + og-image.png (sharp orqali)
```

## Ishga tushirish

```bash
npm install
npm run assets     # favicon-*.png, icon-*.png, og-image.png hosil qiladi (sharp)
npm run dev        # http://localhost:4321
npm run build      # dist/ (Vercel'ga tayyor)
```

> `npm run assets` ni kamida bir marta ishga tushiring — `og-image.png` va PNG
> ikonalar shundan keyin paydo bo'ladi (SVG favicon allaqachon bor).

## SEO / AEO

- Har sahifada: canonical, hreflang (uz/ru/en + x-default), OG/Twitter, meta keywords
- JSON-LD: `WebSite`, `Organization`, `Service` (+ `OfferCatalog`), `FAQPage`,
  `BlogPosting`, `BreadcrumbList`
- Hero ichida ko'rinadigan **AEO direct-answer** qatori (LLM'lar iqtibos olishi uchun)
- `robots.txt` AI crawlerlarni ochiq qoldiradi → ChatGPT/Perplexity/Yandexda topiladi
- Blog kalit so'zlari: PUBG UC arzon, ML olmos, Free Fire olmos, o'yin valyutasi arzon...

## Domen / aloqa

- Sayt: **gempay.uz**
- Bot / Mini App: **@Gempayuz_bot**
- Developer API + Swagger: **api.gempay.uz/docs**
