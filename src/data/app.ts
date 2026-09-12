/**
 * Android ilovasining joriy relizi — YAGONA haqiqat manbasi.
 *
 * Sahifa, JSON-LD (`SoftwareApplication`), sitemap va yuklab olish tugmasi
 * shu yerdan oziqlanadi. Yangi versiya chiqarganda FAQAT shu fayl
 * yangilanadi — qolgan hamma joy o'zi ergashadi.
 *
 * NEGA APK, Play Store emas: ilova hozircha do'kondan tashqarida
 * tarqatiladi. Buni sahifada yashirmaymiz — foydalanuvchi "noma'lum
 * manbadan o'rnatish" ni yoqishi kerakligini va faylni faqat gempay.uz dan
 * olish kerakligini ochiq aytamiz. Yashirilgan noqulaylik ishonchni
 * yo'qotadi, ochig'i esa aksincha.
 *
 * `sha256` ATAYLAB ko'rsatiladi: do'kondan tashqari tarqatilgan faylning
 * haqiqiyligini foydalanuvchi o'zi tekshira oladigan yagona yo'l shu.
 */

export type AppRelease = {
  /** `pubspec.yaml` dagi versiya nomi */
  version: string;
  /** Android `versionCode` — yangilanish tartibini shu belgilaydi */
  versionCode: number;
  /** Yuklab olish manzili — to'g'ridan-to'g'ri APK fayl */
  url: string;
  /** Fayl hajmi, MB (bir kasr xonagacha) */
  sizeMb: number;
  /** SHA-256 — foydalanuvchi faylni tekshirishi uchun */
  sha256: string;
  /** Reliz sanasi, `yyyy-mm-dd` — sahifada va sitemap `lastmod` da */
  released: string;
  /** Minimal Android versiyasi (Gradle `minSdk = 24`) */
  minAndroid: string;
  /** Paket nomi — o'rnatilgan ilovani aniqlash uchun */
  packageId: string;
};

export const ANDROID_APP: AppRelease = {
  version: "1.1.0",
  versionCode: 2,
  url: "https://starspaymee.starstg.uz/dl/gempay-1.1.0.apk",
  sizeMb: 32.9,
  sha256: "fb67ebdca736a02addec25036999dd6925139d799c2aa6e01b43c3108b442083",
  released: "2026-09-12",
  minAndroid: "7.0",
  packageId: "uz.starstg.gampay",
};

/**
 * iOS holati.
 *
 * `false` bo'lsa sahifa "iOS uchun hozircha yo'q" deb OCHIQ yozadi va
 * foydalanuvchini Telegram Mini App'ga yo'naltiradi — u iPhone'da ham
 * bir xil ishlaydi. Yolg'on "tez orada" va'dasi bermaymiz: App Store'ga
 * chiqish sanasi ma'lum bo'lmaguncha buni aytish mumkin emas.
 */
export const IOS_AVAILABLE = false;
