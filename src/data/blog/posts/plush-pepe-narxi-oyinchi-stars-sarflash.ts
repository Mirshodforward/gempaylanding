// Avtoblogyoz yasagan maqola (2026-11-13). Niyat: «Plush Pepe $55 000 ga sotildi» postini ko'rgan o'yinchi «nft sovg'a sotib olish arzimi» yoki «Plush Pepe narxi oshadimi» deb qidiradi. U Stars yoki donat pulini qora fonli kolleksion sovg'aga sarflash UC va Premium'dan foydaliroqmi, xavfi qanday va sovg'ani keyin qanday sotish mumkinligini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq
//   https://telegram.org/blog/collectible-gifts-and-more
//   https://core.telegram.org/api/gifts
//   https://telegram.org/blog/wear-gifts-blockchain-and-more

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "plush-pepe-narxi-oyinchi-stars-sarflash",
  game: null,
  type: "comparison",
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  keywords: ["nft sovga sotib olish arzimi","plush pepe narxi","plush pepe narxi oshadimi","telegram nft sovga narxi","kolleksion sovga sotish","stars nimaga sarflash","nft sovga yoki uc","купить nft подарок telegram стоит ли","plush pepe цена","продать подарок telegram за звезды","коллекционные подарки telegram цена"],
  locales: {
    uz: {
      title: "NFT sovg‘a sotib olish arzimi: Plush Pepe, UC yoki Premium — o‘yinchi uchun",
      metaTitle: "NFT sovg‘a sotib olish arzimi",
      metaDescription: "O‘yinchiga ko‘pincha arzimaydi: kolleksion sovg‘a faqat profilni bezaydi, narxi oshishi kafolatlanmagan. O‘yin va chat uchun UC yoki Premium foydaliroq.",
      excerpt: "O‘yinchiga ko‘pincha arzimaydi: kolleksion sovg‘a faqat profilni bezaydi, narxi oshishi kafolatlanmagan. O‘yin va chat uchun UC yoki Premium foydaliroq.",
      answer: "O‘yinchiga ko‘pincha arzimaydi: kolleksion sovg‘a faqat profilni bezaydi, narxi oshishi kafolatlanmagan. O‘yin va chat uchun UC yoki Premium foydaliroq.",
      body: [
        {
          t: "h2",
          id: "nft-sovga-sotib-olish-oyinchiga",
          text: "NFT sovg‘a sotib olish o‘yinchiga arzimi?",
        },
        {
          t: "p",
          text: "Maqsadingiz o‘yinda kuchayish, yangi skin yoki squad chatida qulaylik bo‘lsa, arzimaydi. Kolleksion sovg‘a Telegram profilini bezaydi va kolleksiyangizga qo‘shiladi. O‘yinda u hech narsa bermaydi, narxi oshishini esa hech kim va’da qila olmaydi.",
        },
        {
          t: "p",
          text: "Bu savol kanaldagi bitta postdan keyin ko‘paydi. Unda qora fonli Birmingham Plush Pepe #940 31 500 💎 ga, ya’ni taxminan $55 000 ga sotilgani aytilgan. Bu kanal postidagi da’vo, rasmiy manbada u tasdiqlanmagan. Bunday sotuv bo‘lgan taqdirda ham u bitta nusxaga tegishli. Undan sizning sovg‘angiz ham shunchalik qimmatlashadi degan xulosa chiqmaydi.",
        },
        {
          t: "p",
          text: "<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>da sovg‘adagi «Value» maydoni taxminiy qayta sotish narxini ko‘rsatishi yozilgan. «Taxminiy» degani xaridor aynan shu summani to‘laydi degani emas.",
        },
        {
          t: "p",
          text: "Kimga mos bo‘lishi mumkin? Kolleksiyaga chin dildan qiziqadigan va yo‘qotsa ham og‘rinmaydigan summani sarflaydigan odamga. Keyingi pass yoki turnir uchun yig‘ilgan pulni bunday tavakkalga qo‘ymang.",
        },
        {
          t: "h2",
          id: "bir-xil-pulga-nima-olasiz",
          text: "Bir xil pulga nima olasiz: NFT sovg‘a, UC yoki Premium?",
        },
        {
          t: "p",
          text: "To‘rt xil xaridni bir jadvalda solishtirdik: nima beradi, nima kerak, narxi qayerda ko‘rinadi va keyin sotsa bo‘ladimi.",
        },
        {
          t: "table",
          head: [
            "Xarid",
            "Nima beradi",
            "Nima kerak",
            "Narx qayerda ko‘rinadi",
            "Keyin sotsa bo‘ladimi",
          ],
          rows: [
            [
              "Kolleksion sovg‘a",
              "Profilga taqiladi, profil ko‘rinishi sovg‘aning foni va belgisiga moslashadi",
              "Telegram akkaunti va Stars",
              "Sovg‘adagi «Value» maydonida, taxminiy",
              "Ha, Stars’da narx qo‘yib sotiladi, lekin xaridor topilishi aniq emas",
            ],
            [
              "UC, olmos, CP",
              "O‘yindagi skin, pass va boshqa xaridlar",
              "Player ID",
              "Botda",
              "Yo‘q, hisobga tushgan valyuta qaytarilmaydi",
            ],
            [
              "Telegram Premium",
              "Telegram’ning qo‘shimcha funksiyalari",
              "@username",
              `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`,
              "Yo‘q, bu muddatli obuna",
            ],
            [
              "Telegram Stars",
              "Telegram ichidagi xaridlar, jumladan sovg‘alar",
              "@username",
              `1 tasi ${som(STARS_UNIT_CARD, "uz")} (karta yoki balansdan) yoki ${som(STARS_UNIT_ONLINE, "uz")} (Click, Uzum Bank)`,
              "O‘yin valyutasiga aylanmaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "Profilga taqilgan sovg‘a haqida Telegram <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">blogidagi e’londa</a> yozilgan: profil sovg‘aning foni va belgisiga moslab o‘zgaradi.",
        },
        {
          t: "p",
          text: "Asosiy farq shunda. UC va Premium — sarflanadigan xarid: pul aniq narsaga ketadi, natijani darhol ko‘rasiz. Kolleksion sovg‘ani qayta sotsa bo‘ladi, lekin qancha pul qaytishi oldindan noma’lum. Stars ikkalasining o‘rtasida turadi: ular bilan sovg‘a olinadi, ammo UC yoki olmosga aylanmaydi.",
        },
        {
          t: "p",
          text: "Misol. Royale Pass uchun yig‘ilgan pulga Stars olib, kolleksion sovg‘a oldingiz. Endi pass uchun boshqa pul kerak: sovg‘ani sotsangiz ham, tushgan Stars UC bo‘lib qaytmaydi. Qaysi valyuta qayerda ishlashini <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC va olmos farqi</a> maqolasida batafsil yozganmiz.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "plush-pepe-narxi-oshadimi-buni",
          text: "Plush Pepe narxi oshadimi: buni oldindan bilsa bo‘ladimi?",
        },
        {
          t: "p",
          text: "Yo‘q, oldindan bilib bo‘lmaydi. Sotuvchi narxni Stars’da o‘zi qo‘yadi, xaridor esa rozi bo‘lsa sotib oladi. Telegram ko‘rsatadigan «Value» — faqat mo‘ljal. Narxga nimalar ta’sir qilishini tushunish mumkin, lekin ertangi narxni hech qanday belgi aytib bermaydi.",
        },
        {
          t: "p",
          text: "Rasmiy manbalarda sovg‘aning tuzilishi haqida quyidagilar yozilgan:",
        },
        {
          t: "list",
          items: [
            "Har bir kolleksion sovg‘aning modeli, foni va belgisi bor, ustiga raqam qo‘yiladi. Ularni Telegram rassomlari chizadi.",
            "Ayrim kombinatsiyalar boshqalaridan noyobroq, har bir nusxa esa alohida san’at asari hisoblanadi (<a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>).",
            "Har bir atributning noyoblik ko‘rsatkichi bor: u shu atributni olish ehtimolini 1 000 tadan nechta ekanini ko‘rsatadi (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram API hujjati</a>).",
          ],
        },
        {
          t: "p",
          text: "Nima tasdiqlanmagan:",
        },
        {
          t: "list",
          items: [
            "Qora fon boshqa fonlardan noyobroq yoki qimmatroq ekani rasmiy manbada topilmadi.",
            "Plush Pepe to‘plamida jami nechta nusxa borligi va atributlarning aniq foizlari bu maqolada tasdiqlanmagan.",
          ],
        },
        {
          t: "p",
          text: "Demak, «qora fon bo‘lsa, albatta qimmat» degan qoida yo‘q. Kanaldagi shov-shuv bosilsa, kecha taklif qilingan narxni bugun hech kim bermasligi mumkin. Har bir nusxani alohida tekshiring.",
        },
        {
          t: "h2",
          id: "stars-sarflashdan-oldin-5-daqiqalik",
          text: "Stars sarflashdan oldin: 5 daqiqalik tekshiruv",
        },
        {
          t: "p",
          text: "Bu tekshiruv bir necha daqiqa oladi, lekin shoshib qilingan xariddan saqlaydi:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Sovg‘a havolasini Telegram ichida oching va modeli, foni hamda belgisini ko‘ring.",
            "Har bir atributning noyoblik ko‘rsatkichiga qarang: 1 000 tadan qancha kam bo‘lsa, atribut shuncha kam uchraydi.",
            "«Value» maydonidagi taxminiy narxni ko‘ring. Telegram tizimida qiymat dollarda ham saqlanadi, lekin bu ham sotuv narxi emas, mo‘ljal xolos.",
            "Filtr orqali xuddi shu model, fon yoki belgili boshqa nusxalarni qidiring va sotuvdagi narxlarni solishtiring. Model, fon va belgi bo‘yicha qidirish <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>da tasvirlangan.",
            "Kerakli Stars miqdorini hisoblang va faqat Telegram ichidagi xarid oynasida to‘lang. Chatdagi sotuvchiga oldindan pul yubormang.",
          ],
        },
        {
          t: "p",
          text: "Agar sotuvchi so‘ragan narx «Value» va o‘xshash nusxalar narxidan ancha baland bo‘lsa, shoshmang. Bir kun kutib, narxlarni qayta solishtirish zarar qilmaydi.",
        },
        {
          t: "h2",
          id: "kolleksionni-ozingiz-chiqarib-korish-upgrade",
          text: "Kolleksionni o‘zingiz chiqarib ko‘rish: upgrade va crafting",
        },
        {
          t: "p",
          text: "Qimmat nusxani bozordan olishning o‘rniga ikki yo‘l bor, lekin ular ham natijani kafolatlamaydi.",
        },
        {
          t: "h3",
          text: "Oddiy sovg‘ani yangilash",
        },
        {
          t: "p",
          text: "Olingan sovg‘ani oz miqdordagi Stars evaziga kolleksion sovg‘aga yangilash mumkin. Buni sovg‘ani olgan odam ham, yuboruvchi ham oldindan qila oladi. Telegram’ning yozishicha, yangilashga ketgan Stars blokcheyn to‘lovlarini qoplaydi. Aniq summani yangilash oynasida ko‘rasiz.",
        },
        {
          t: "h3",
          text: "Crafting",
        },
        {
          t: "p",
          text: "Ba’zi sovg‘alardan 4 tagachasini birlashtirib, Uncommon, Rare, Epic yoki Legendary versiyasini olishga urinib ko‘rish mumkin. «Urinib ko‘rish» so‘ziga e’tibor bering: natija ehtimolga bog‘liq.",
        },
        {
          t: "p",
          text: "Ikkala yo‘lda ham noyob kombinatsiya chiqishini hech kim va’da qilmaydi. Buni pul ko‘paytirish usuli emas, lootbox’ga o‘xshash kichik o‘yin deb qabul qiling va unga faqat ortiqcha Stars sarflang.",
        },
        {
          t: "h2",
          id: "pulni-qaytarmoqchi-bolsangiz-sovgani-sotish",
          text: "Pulni qaytarmoqchi bo‘lsangiz: sovg‘ani sotish yo‘llari",
        },
        {
          t: "h3",
          text: "Telegram ichida",
        },
        {
          t: "p",
          text: "Kolleksion sovg‘ani profilingizda oching, «Sell» tugmasini bosing va Stars’da narx qo‘ying. Sotilsa, sizga Stars tushadi. Marketplace komissiyasining aniq foizi bu maqolada tasdiqlanmagan, shuning uchun qo‘lingizga tushadigan summani sotuv oynasida tekshiring.",
        },
        {
          t: "h3",
          text: "TON blokcheyni orqali",
        },
        {
          t: "p",
          text: "Kolleksion sovg‘ani TON blokcheynidagi NFT’ga aylantirish mumkin. Shundan keyin uni boshqa egaga o‘tkazish yoki auksionga qo‘yish mumkin. Sovg‘a TON hamyonga o‘tkazilsa, uni auksion saytlari kabi tashqi xizmatlarga ulasa bo‘ladi. <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>ga ko‘ra, TON’ga o‘tkazilgan sovg‘a Telegram akkaunti o‘chirilsa ham egasida qoladi.",
        },
        {
          t: "p",
          text: "Tashqi xizmat — Telegram’ning o‘zi emas. Sovg‘ani u yerga chiqarishdan oldin nimalarni hisobga olish kerakligini <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">sovg‘ani marketpleysga o‘tkazish</a> maqolasida yozganmiz.",
        },
        {
          t: "p",
          text: "Qaysi yo‘lni tanlamang, sotuvdan tushgan Stars UC, olmos yoki CP’ga aylanmaydi. O‘yin valyutasini baribir alohida olishingizga to‘g‘ri keladi.",
        },
        {
          t: "h2",
          id: "donat-puli-bilan-nft-olishda",
          text: "Donat puli bilan NFT olishda o‘yinchi nimani yo‘qotishi mumkin?",
        },
        {
          t: "list",
          items: [
            "<strong>Narx farqini.</strong> Qayta sotish narxi taxminiy, xaridor umuman topilmasligi ham mumkin. Olgan narxingizda sota olishingiz aniq emas.",
            "<strong>Klan chatidagi «arzon Stars» uchun pulni.</strong> Notanish odamdan arzon Stars yoki NFT olish xavfli. Nima uchunligini <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">arzon Stars xavfi</a> maqolasida tushuntirganmiz.",
            "<strong>Oldindan to‘lovni.</strong> Sotuvchi oldindan pul, notanish «garant» bot, kirish kodi yoki parol so‘rasa, suhbatni to‘xtating. Belgilar ro‘yxati: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">gift sotuvidagi firibgarlik</a>.",
            "<strong>Notanish TON manzilga yuborilgan pulni.</strong> Manzil pul qayerga ketishini ko‘rsatadi, sovg‘a kelishini emas. Qarang: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">TON manzilga to‘lov xavfi</a>.",
            "<strong>Postga ishonib qilingan xaridni.</strong> Kanaldagi «narx o‘sishda davom etmoqda» degan gap prognoz emas, kimningdir fikri xolos.",
          ],
        },
        {
          t: "h2",
          id: "oyinchi-uchun-qaror-qaysi-vaziyatda",
          text: "O‘yinchi uchun qaror: qaysi vaziyatda nima olish kerak?",
        },
        {
          t: "list",
          items: [
            "<strong>Turnir yoki yangi pass oldidan</strong> UC, olmos yoki CP oling. GemPay’da faqat Player ID kerak, nik tekshirib ko‘rsatiladi va siz tasdiqlaganingizdan keyin to‘lanadi. Valyuta 1–5 daqiqada avtomatik tushadi.",
            "<strong>Squad chati va kanallar uchun</strong> Premium oling. Uni jamoadoshga @username bo‘yicha sovg‘a qilsa bo‘ladi: u Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi va akkauntga kirilmaydi. Narx barcha to‘lov usulida bir xil, 1 oylik tarif yo‘q. Premium o‘yinchiga nima berishini <a href=\"/blog/telegram-premium-oyinchi-uchun\">alohida maqolada</a> ko‘rib chiqqanmiz.",
            "<strong>Kolleksiyaga qiziqsangiz,</strong> Stars’ga faqat yo‘qotsangiz ham bo‘ladigan summani ajrating. Stars <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>da so‘mda, @username bo‘yicha, bir buyurtmada 50 dan 10 000 tagacha olinadi. Sovg‘ani esa Telegram ichida o‘zingiz tanlaysiz.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay — mustaqil xizmat, Telegram yoki o‘yin ishlab chiquvchilari bilan hamkorlik da’vo qilmaydi. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain…",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "NFT sovg‘ani sotib, tushgan Stars’ni UC yoki olmosga almashtirsam bo‘ladimi?",
          a: "Yo‘q. Sotuvdan sizga Stars tushadi, Stars esa o‘yin valyutasiga aylanmaydi. UC, olmos yoki CP alohida, Player ID bo‘yicha so‘mda olinadi.",
        },
        {
          q: "Sovg‘ani sotishga qo‘ysam, narxni o‘zim qo‘yamanmi yoki Value bo‘yicha sotiladimi?",
          a: "Telegram FAQ’ga ko‘ra, narxni Stars’da o‘zingiz qo‘yasiz. Value faqat mo‘ljal: undan baland narx qo‘ysangiz, xaridor topilmasligi mumkin.",
        },
        {
          q: "Pass uchun yig‘gan pulimga Plush Pepe olsam, keyin sotib passni olaman — shunday qilsa bo‘ladimi?",
          a: "Tavsiya qilmaymiz. Sovg‘a qachon va qanchaga sotilishi noma’lum, tushgan Stars esa UC bo‘lib qaytmaydi. Pass uchun o‘yin valyutasini to‘g‘ridan-to‘g‘ri olgan ma’qul.",
        },
        {
          q: "Jamoadoshim NFT sovg‘asini menga sotmoqchi, oldindan to‘lasam bo‘ladimi?",
          a: "Tavsiya qilmaymiz: oldindan yuborilgan pul sovg‘a kelishini ta’minlamaydi. Sovg‘a Telegram’da sotuvga qo‘yilgan bo‘lsa, uni ilova ichidagi xarid oynasi orqali oling.",
        },
        {
          q: "NFT sovg‘a olish uchun Stars’ni so‘mda qayerdan olaman?",
          a: `@Gempayuz_bot’da @username bo‘yicha, bir buyurtmada 50 dan 10 000 tagacha. Karta yoki balansdan 1 tasi ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")} turadi, Stars bir necha soniyada tushadi.`,
        },
        {
          q: "Jamoadoshga qimmat NFT o‘rniga nima sovg‘a qilsam foydaliroq?",
          a: "U ko‘p o‘ynasa — UC, olmos yoki CP, Telegram’da ko‘p o‘tirsa — Premium. Premium @username bo‘yicha sovg‘a sifatida ulanadi, uning akkauntiga kirish kerak emas.",
        },
        {
          q: "Qora fonli Plush Pepe boshqa fonlilardan qimmatroq turadimi?",
          a: "Rasmiy manbalarda qora fon noyobroq yoki qimmatroq ekani tasdiqlanmagan. Har bir atributning noyobligini sovg‘a oynasidagi ko‘rsatkichdan tekshiring.",
        },
      ],
    },
    ru: {
      title: "Стоит ли покупать NFT-подарок: Plush Pepe, UC или Premium — для игрока",
      metaTitle: "Стоит ли покупать NFT-подарок",
      metaDescription: "Игроку чаще всего не стоит: коллекционный подарок только украшает профиль, рост цены не гарантирован. Для игры и чата полезнее UC или Premium.",
      excerpt: "Игроку чаще всего не стоит: коллекционный подарок только украшает профиль, рост цены не гарантирован. Для игры и чата полезнее UC или Premium.",
      answer: "Игроку чаще всего не стоит: коллекционный подарок только украшает профиль, рост цены не гарантирован. Для игры и чата полезнее UC или Premium.",
      body: [
        {
          t: "h2",
          id: "nft-sovga-sotib-olish-oyinchiga",
          text: "Стоит ли игроку покупать NFT-подарок?",
        },
        {
          t: "p",
          text: "Если вы хотите стать сильнее в игре, получить новый скин или удобство в чате сквада, то не стоит. Коллекционный подарок украшает профиль в Telegram и пополняет вашу коллекцию. В игре он ничего не даёт, а рост его цены никто обещать не может.",
        },
        {
          t: "p",
          text: "Этот вопрос стали задавать чаще после одного поста в канале. В нём говорится, что Birmingham Plush Pepe #940 с чёрным фоном продали за 31 500 💎, то есть примерно за $55 000. Это утверждение из поста канала, официальный источник его не подтверждает. Даже если такая продажа была, речь об одном экземпляре. Из неё не следует, что ваш подарок подорожает так же.",
        },
        {
          t: "p",
          text: "В <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a> сказано, что поле «Value» на подарке показывает примерную цену перепродажи. «Примерная» не значит, что покупатель заплатит именно эту сумму.",
        },
        {
          t: "p",
          text: "Кому это может подойти? Тому, кому коллекционирование действительно интересно и кто тратит сумму, которую не жалко потерять. Деньги, отложенные на следующий пасс или турнир, на такой риск не ставьте.",
        },
        {
          t: "h2",
          id: "bir-xil-pulga-nima-olasiz",
          text: "Что вы получите за те же деньги: NFT-подарок, UC или Premium?",
        },
        {
          t: "p",
          text: "Мы сравнили в одной таблице четыре вида покупок: что они дают, что для них нужно, где видна цена и можно ли потом продать.",
        },
        {
          t: "table",
          head: [
            "Покупка",
            "Что даёт",
            "Что нужно",
            "Где видна цена",
            "Можно ли потом продать",
          ],
          rows: [
            [
              "Коллекционный подарок",
              "Надевается на профиль, оформление профиля подстраивается под фон и символ подарка",
              "Аккаунт Telegram и Stars",
              "В поле «Value» на подарке, примерно",
              "Да, выставляется за Stars по вашей цене, но найдётся ли покупатель — неизвестно",
            ],
            [
              "UC, алмазы, CP",
              "Скины, пассы и другие покупки в игре",
              "Player ID",
              "В боте",
              "Нет, зачисленная валюта не возвращается",
            ],
            [
              "Telegram Premium",
              "Дополнительные функции Telegram",
              "@username",
              `3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}`,
              "Нет, это подписка на срок",
            ],
            [
              "Telegram Stars",
              "Покупки внутри Telegram, в том числе подарки",
              "@username",
              `1 звезда — ${som(STARS_UNIT_CARD, "ru")} (с карты или баланса) или ${som(STARS_UNIT_ONLINE, "ru")} (Click, Uzum Bank)`,
              "В игровую валюту не превращаются",
            ],
          ],
        },
        {
          t: "p",
          text: "О подарке, надетом на профиль, Telegram пишет в <a href=\"https://telegram.org/blog/wear-gifts-blockchain-and-more\" target=\"_blank\" rel=\"noopener\">анонсе в блоге</a>: оформление профиля меняется под фон и символ подарка.",
        },
        {
          t: "p",
          text: "Главное различие вот в чём. UC и Premium — расходные покупки: деньги идут на конкретную вещь, результат виден сразу. Коллекционный подарок можно перепродать, но сколько денег вернётся, заранее неизвестно. Stars стоят посередине: на них покупают подарки, но в UC или алмазы они не превращаются.",
        },
        {
          t: "p",
          text: "Пример. Вы копили на Royale Pass, но купили на эти деньги Stars и взяли коллекционный подарок. Теперь на пасс нужны другие деньги: даже если вы продадите подарок, полученные Stars не вернутся к вам в виде UC. Какая валюта где работает, мы подробно разобрали в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">о разнице между Stars, UC и алмазами</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "plush-pepe-narxi-oshadimi-buni",
          text: "Вырастет ли цена Plush Pepe: можно ли узнать это заранее?",
        },
        {
          t: "p",
          text: "Нет, заранее узнать нельзя. Продавец сам назначает цену в Stars, а покупатель берёт подарок, если согласен. «Value», которое показывает Telegram, — лишь ориентир. Понять, что влияет на цену, можно, но завтрашнюю цену не подскажет ни один признак.",
        },
        {
          t: "p",
          text: "Вот что официальные источники говорят об устройстве подарка:",
        },
        {
          t: "list",
          items: [
            "У каждого коллекционного подарка есть модель, фон и символ, а сверху — номер. Их рисуют художники Telegram.",
            "Одни комбинации встречаются реже других, а каждый экземпляр считается отдельным произведением искусства (<a href=\"https://telegram.org/blog/collectible-gifts-and-more\" target=\"_blank\" rel=\"noopener\">блог Telegram</a>).",
            "У каждого атрибута есть показатель редкости: он показывает, сколько из 1 000 шанс получить этот атрибут (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">документация Telegram API</a>).",
          ],
        },
        {
          t: "p",
          text: "Что не подтверждено:",
        },
        {
          t: "list",
          items: [
            "В официальных источниках не нашлось подтверждения, что чёрный фон реже или дороже других фонов.",
            "Сколько всего экземпляров в коллекции Plush Pepe и каковы точные проценты атрибутов, в этой статье не подтверждено.",
          ],
        },
        {
          t: "p",
          text: "Значит, правила «чёрный фон — обязательно дорого» нет. Когда шумиха в канале утихнет, цену, которую предлагали вчера, сегодня может не дать никто. Проверяйте каждый экземпляр отдельно.",
        },
        {
          t: "h2",
          id: "stars-sarflashdan-oldin-5-daqiqalik",
          text: "Перед тем как тратить Stars: проверка на 5 минут",
        },
        {
          t: "p",
          text: "Проверка занимает несколько минут, но спасает от поспешной покупки:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте ссылку на подарок внутри Telegram и посмотрите его модель, фон и символ.",
            "Посмотрите показатель редкости каждого атрибута: чем меньше число из 1 000, тем реже встречается атрибут.",
            "Посмотрите примерную цену в поле «Value». В системе Telegram стоимость хранится и в долларах, но это тоже не цена продажи, а только ориентир.",
            "Через фильтр найдите другие экземпляры с той же моделью, фоном или символом и сравните цены на продаже. Поиск по модели, фону и символу описан в <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>.",
            "Посчитайте, сколько Stars нужно, и платите только в окне покупки внутри Telegram. Не переводите деньги продавцу из чата заранее.",
          ],
        },
        {
          t: "p",
          text: "Если продавец просит намного больше, чем «Value» и цены похожих экземпляров, не торопитесь. Подождать день и снова сравнить цены не повредит.",
        },
        {
          t: "h2",
          id: "kolleksionni-ozingiz-chiqarib-korish-upgrade",
          text: "Как получить коллекционный подарок самому: улучшение и крафтинг",
        },
        {
          t: "p",
          text: "Вместо покупки дорогого экземпляра на рынке есть два пути, но и они результат не гарантируют.",
        },
        {
          t: "h3",
          text: "Улучшение обычного подарка",
        },
        {
          t: "p",
          text: "Полученный подарок можно улучшить до коллекционного за небольшое количество Stars. Это может сделать и тот, кто получил подарок, и отправитель — заранее. По словам Telegram, Stars за улучшение идут на оплату комиссий блокчейна. Точную сумму вы увидите в окне улучшения.",
        },
        {
          t: "h3",
          text: "Крафтинг",
        },
        {
          t: "p",
          text: "Некоторые подарки можно объединить — до 4 штук — и попробовать получить версию Uncommon, Rare, Epic или Legendary. Обратите внимание на слово «попробовать»: результат зависит от вероятности.",
        },
        {
          t: "p",
          text: "Ни в одном из этих путей никто не обещает редкую комбинацию. Воспринимайте это не как способ приумножить деньги, а как мини-игру вроде лутбокса, и тратьте на неё только лишние Stars.",
        },
        {
          t: "h2",
          id: "pulni-qaytarmoqchi-bolsangiz-sovgani-sotish",
          text: "Если хотите вернуть деньги: как продать подарок",
        },
        {
          t: "h3",
          text: "Внутри Telegram",
        },
        {
          t: "p",
          text: "Откройте коллекционный подарок в своём профиле, нажмите «Sell» и назначьте цену в Stars. Если подарок купят, вам придут Stars. Точный процент комиссии маркетплейса в этой статье не подтверждён, поэтому сумму, которая дойдёт до вас, проверяйте в окне продажи.",
        },
        {
          t: "h3",
          text: "Через блокчейн TON",
        },
        {
          t: "p",
          text: "Коллекционный подарок можно превратить в NFT в блокчейне TON. После этого его можно передать другому владельцу или выставить на аукцион. Если перевести подарок на TON-кошелёк, его можно подключить к внешним сервисам, например к аукционным сайтам. Согласно <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>, подарок, перенесённый в TON, остаётся у владельца, даже если удалить аккаунт Telegram.",
        },
        {
          t: "p",
          text: "Внешний сервис — это не сам Telegram. Что учесть, прежде чем выводить туда подарок, мы написали в статье <a href=\"/blog/sovgani-marketpleysga-otkazish-xavfsizmi-oyinchi\">о переводе подарка на маркетплейс</a>.",
        },
        {
          t: "p",
          text: "Какой путь ни выберите, Stars от продажи не превратятся в UC, алмазы или CP. Игровую валюту всё равно придётся покупать отдельно.",
        },
        {
          t: "h2",
          id: "donat-puli-bilan-nft-olishda",
          text: "Что может потерять игрок, купив NFT на деньги для доната?",
        },
        {
          t: "list",
          items: [
            "<strong>Разницу в цене.</strong> Цена перепродажи примерная, покупатель может вообще не найтись. Продать по цене, за которую вы купили, получится не обязательно.",
            "<strong>Деньги за «дешёвые Stars» из чата клана.</strong> Покупать дешёвые Stars или NFT у незнакомца рискованно. Почему — объяснили в статье <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">о риске дешёвых Stars</a>.",
            "<strong>Предоплату.</strong> Если продавец просит деньги вперёд, незнакомого бота-«гаранта», код входа или пароль, прекращайте разговор. Список признаков: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">мошенничество при продаже подарков</a>.",
            "<strong>Деньги, отправленные на незнакомый TON-адрес.</strong> Адрес показывает, куда ушли деньги, но не гарантирует, что подарок придёт. Подробнее: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">риск оплаты на TON-адрес</a>.",
            "<strong>Покупку, сделанную на доверии к посту.</strong> Фраза в канале «цена продолжает расти» — не прогноз, а просто чьё-то мнение.",
          ],
        },
        {
          t: "h2",
          id: "oyinchi-uchun-qaror-qaysi-vaziyatda",
          text: "Решение для игрока: что брать в какой ситуации?",
        },
        {
          t: "list",
          items: [
            "<strong>Перед турниром или новым пассом</strong> берите UC, алмазы или CP. В GemPay нужен только Player ID: ник проверяется и показывается вам, а оплата идёт после вашего подтверждения. Валюта зачисляется автоматически за 1–5 минут.",
            "<strong>Для чата сквада и каналов</strong> берите Premium. Его можно подарить тиммейту по @username: он подключается через официальный механизм подарков Telegram, входить в аккаунт не нужно. Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет. Что Premium даёт игроку, мы разобрали <a href=\"/blog/telegram-premium-oyinchi-uchun\">в отдельной статье</a>.",
            "<strong>Если вам интересно коллекционирование,</strong> выделите на Stars только ту сумму, которую не жалко потерять. Stars можно купить в <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> за сумы, по @username, от 50 до 10 000 за один заказ. А подарок вы выбираете сами внутри Telegram.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay — независимый сервис и не заявляет о партнёрстве с Telegram или разработчиками игр. Если заказ не выполнен, деньги возвращаются полностью в течение 3 рабочих дней. Уже зачисленная валюта не возвращается.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
            {
              label: "Collectible Gifts, Message Search Filters and More",
              href: "https://telegram.org/blog/collectible-gifts-and-more",
            },
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
            {
              label: "Wear Collectible Gifts, Move Gifts to the Blockchain…",
              href: "https://telegram.org/blog/wear-gifts-blockchain-and-more",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Можно ли продать NFT-подарок и обменять полученные Stars на UC или алмазы?",
          a: "Нет. С продажи вам придут Stars, а Stars в игровую валюту не превращаются. UC, алмазы или CP покупаются отдельно, за сумы, по Player ID.",
        },
        {
          q: "Если выставлю подарок на продажу, цену назначаю я или он продаётся по Value?",
          a: "По Telegram FAQ цену в Stars вы назначаете сами. Value — только ориентир: если поставите намного выше, покупатель может не найтись.",
        },
        {
          q: "Куплю Plush Pepe на деньги, отложенные на пасс, а потом продам и возьму пасс — так можно?",
          a: "Не советуем. Неизвестно, когда и за сколько подарок продастся, а полученные Stars не вернутся в виде UC. На пасс лучше сразу купить игровую валюту.",
        },
        {
          q: "Тиммейт хочет продать мне свой NFT-подарок — можно заплатить ему заранее?",
          a: "Не советуем: предоплата не гарантирует, что подарок придёт. Если подарок выставлен на продажу в Telegram, покупайте его через окно покупки в приложении.",
        },
        {
          q: "Где купить Stars за сумы, чтобы взять NFT-подарок?",
          a: `В @Gempayuz_bot по @username, от 50 до 10 000 за один заказ. С карты или баланса 1 звезда стоит ${som(STARS_UNIT_CARD, "ru")}, через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}, Stars приходят за несколько секунд.`,
        },
        {
          q: "Что полезнее подарить тиммейту вместо дорогого NFT?",
          a: "Если он много играет — UC, алмазы или CP, если много сидит в Telegram — Premium. Premium подключается как подарок по @username, заходить в его аккаунт не нужно.",
        },
        {
          q: "Plush Pepe с чёрным фоном стоит дороже, чем с другими фонами?",
          a: "В официальных источниках не подтверждено, что чёрный фон реже или дороже. Редкость каждого атрибута проверяйте по показателю в окне подарка.",
        },
      ],
    },
  },
};

export default article;
