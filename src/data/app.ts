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
  /**
   * Imzo sertifikatining to'liq DN'i — `apksigner verify --print-certs`
   * ko'rsatadigan qator bilan HARF-BAHARF bir xil bo'lishi shart.
   *
   * NEGA BU YERDA: ilgari u sahifada qotirilgan edi va `OU=Mobile`
   * qismi tushib qolgandi. Foydalanuvchi sahifadagi ko'rsatma bo'yicha
   * imzoni tekshirsa, mos kelmagan qatorni ko'rib faylni SOXTA deb
   * o'ylashi mumkin edi — ya'ni tekshiruv o'z maqsadiga qarshi ishlardi.
   */
  signerDn: string;
  /** Sertifikatning SHA-256 daydjesti — kalit almashmaganini tekshirish uchun */
  signerSha256: string;
};

export const ANDROID_APP: AppRelease = {
  version: "1.1.1",
  versionCode: 3,
  url: "https://starspaymee.starstg.uz/dl/gempay-1.1.1.apk",
  sizeMb: 32.9,
  sha256: "b1b3694196af3127780aeb2b23986643f525dbc8a8ef0c705a35e4ce9c4ca48b",
  released: "2026-09-12",
  minAndroid: "7.0",
  packageId: "uz.starstg.gampay",
  signerDn: "CN=GemPay, OU=Mobile, O=GemPay, L=Tashkent, C=UZ",
  signerSha256: "d7794ef4eeb02cf8a161d2c98ec64a3faa067c8e2e2e119389c458fea5ff5332",
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
