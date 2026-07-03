import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pure static marketing site for Gempay — fast, fully crawlable, deploys to
// Vercel as-is. The product itself lives elsewhere (Mini App on Telegram via
// @Gempayuz_bot, Developer API on https://api.gempay.uz) — linked, not bundled.
export default defineConfig({
  site: 'https://gempay.uz',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'uz',
        locales: {
          uz: 'uz-UZ',
          ru: 'ru-RU',
          en: 'en-US',
        },
      },
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      serialize: (item) => {
        const strip = (u) =>
          u && u.length > 'https://gempay.uz/'.length
            ? u.replace(/\/$/, '')
            : u === 'https://gempay.uz/'
              ? 'https://gempay.uz'
              : u;
        const out = { ...item, url: strip(item.url) };
        if (Array.isArray(item.links)) {
          out.links = item.links.map((l) => ({ ...l, url: strip(l.url) }));
        }
        return out;
      },
    }),
  ],
});
