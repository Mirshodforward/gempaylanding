// Avtoblogyoz yasagan maqola (2026-11-13). Niyat: Klan yoki o'yin chatida «Telegram bagi orqali» juda arzon Premium yoki 100 000 Stars sotish taklifini ko'rgan o'yinchi «bag orqali arzon stars premium olish xavflimi» deb qidiradi. U bunday xarid o'z akkauntiga, Stars balansiga va shu Stars bilan olingan sovg'alarga nima qilishini bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/tos/stars
//   https://fragment.com/stars/buy
//   https://fragment.com/premium
//   https://core.telegram.org/bug-bounty
//   https://telegram.org/tos

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "klan-chatida-bag-stars-premium-taklifi",
  game: null,
  type: "trust",
  datePublished: "2026-11-13",
  dateModified: "2026-11-13",
  keywords: ["bag orqali arzon stars va premium olish","telegram bag arzon stars","bag orqali premium olish xavflimi","arzon telegram stars xavfi","telegram premium 0.25 dollar","100 000 stars 15 dollar","klan chatida arzon stars","баг telegram stars дешево","баг telegram premium за 0.25","дешевые звезды телеграм опасно","купить telegram stars через баг","блокировка за баг telegram stars"],
  locales: {
    uz: {
      title: "Bag orqali arzon Stars va Premium olish: klan chatidagi taklif xavflimi?",
      metaTitle: "Bag orqali arzon Stars va Premium olish",
      metaDescription: "Ha, xavfli: bunday bag rasman tasdiqlanmagan. Telegram Stars’ni balansdan yechib olishi, shartlarni buzgan akkauntni esa bloklashi mumkin.",
      excerpt: "Ha, xavfli: bunday bag rasman tasdiqlanmagan. Telegram Stars’ni balansdan yechib olishi, shartlarni buzgan akkauntni esa bloklashi mumkin.",
      answer: "Ha, xavfli: bunday bag rasman tasdiqlanmagan. Telegram Stars’ni balansdan yechib olishi, shartlarni buzgan akkauntni esa bloklashi mumkin.",
      body: [
        {
          t: "h2",
          id: "klan-chatida-bag-orqali-stars",
          text: "Klan chatida «bag orqali» Stars yoki Premium sotishyapti — olsam xavflimi?",
        },
        {
          t: "p",
          text: "Ha, xavfli. Telegram’ning rasmiy manbalarida bunday bag haqida hech narsa yo‘q. U haqda faqat Telegram kanallaridagi postlar bor. Ularda Premium va katta Stars paketlari juda past narxda olingani aytiladi. Bu raqamlar rasman tasdiqlanmagan, bag yopilgan-yopilmagani ham noma’lum.",
        },
        {
          t: "p",
          text: "Bunday taklifda xavf ikki tomondan keladi:",
        },
        {
          t: "list",
          items: [
            "<strong>Sotuvchi tomonidan.</strong> U pulni olib, hech narsa bermasligi mumkin. «Bag» so‘zi bu yerda ko‘pincha oddiy aldovni texnik sir qilib ko‘rsatish uchun ishlatiladi.",
            "<strong>Telegram tomonidan.</strong> Stars shartlarida Telegram balansdagi Stars’ni vaqtincha ushlab turish yoki butunlay yechib olish huquqini o‘zida saqlab qolgan. Shartlar buzilsa, akkaunt vaqtincha yoki doimiy bloklanishi mumkin.",
          ],
        },
        {
          t: "p",
          text: "O‘yinchi uchun bu oddiy hisob. Chatdagi arzon taklif bilan siz pul tejamaysiz. Aksincha, Telegram akkauntingiz, Stars balansingiz va jamoadoshlarga yuborgan sovg‘alaringiz xavf ostida qoladi.",
        },
        {
          t: "h2",
          id: "bunday-xarid-akkaunt-stars-balansi",
          text: "Bunday xarid akkaunt, Stars balansi va sovg‘alarga nima qilishi mumkin?",
        },
        {
          t: "p",
          text: "Jadvaldagi har bir qator <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">Telegram Stars shartlari</a> yoki <a href=\"https://telegram.org/tos\" target=\"_blank\" rel=\"noopener\">Telegram’ning umumiy shartlari</a>ga bog‘langan.",
        },
        {
          t: "table",
          head: [
            "Nima",
            "Nima bo‘lishi mumkin",
            "Rasmiy manbada nima deyilgan",
          ],
          rows: [
            [
              "Telegram akkauntingiz",
              "Vaqtincha yoki doimiy bloklanishi",
              "Shartlar buzilsa, Telegram yoki uning ayrim xizmatlari bloklanishi mumkin",
            ],
            [
              "Stars balansi",
              "Stars ushlab turilishi yoki yechib olinishi",
              "Telegram bu huquqni o‘zida saqlab qoladi",
            ],
            [
              "Akkaunt yo‘qolsa, qolgan Stars",
              "Kuyib ketadi",
              "Akkaunt o‘chirilsa yoki yo‘qotilsa, qolgan balans yo‘qotilgan hisoblanadi",
            ],
            [
              "Shu Stars bilan olingan sovg‘a va Premium",
              "Aniq emas",
              "Bekor qilinishi haqida aniq rasmiy gap topilmadi",
            ],
            [
              "Stars xaridining o‘zi",
              "Telegram pulni qaytarmaydi",
              "Stars savdosi yakuniy, keraksiz yoki adashib qilingan xarid qaytarilmaydi",
            ],
          ],
        },
        {
          t: "p",
          text: "To‘rtinchi qatorni alohida tushuntiramiz. Shubhali Stars bilan olingan sovg‘a yoki Premium keyin o‘chiriladimi, bu maqolada tasdiqlanmagan. Lekin ular saqlanib qolishiga ham asos yo‘q.",
        },
        {
          t: "p",
          text: "Masalan, siz arzon Stars bilan squad sardoriga turnir g‘alabasi uchun sovg‘a yubordingiz. Bir haftadan keyin Telegram balansingizdagi qolgan Stars’ni yechib oldi. Sovg‘a nima bo‘lishi noma’lum, balansingiz esa nolda qoladi. Sotuvchi bilan ham aloqa uzilgan bo‘ladi.",
        },
        {
          t: "p",
          text: "Stars balansdan qanday yechib olinishi haqida batafsil: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">klan chatidagi arzon Stars va refund xavfi</a>.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "chatdagi-narxni-rasmiy-korsatkich-bilan",
          text: "Chatdagi narxni rasmiy ko‘rsatkich bilan qanday solishtirasiz?",
        },
        {
          t: "p",
          text: "Stars shartlarida Stars’ni iOS va Android’dagi Telegram ilovasi ichida sotib olish mumkinligi aytilgan. Yana bir joy — <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">Fragment</a>. U yerda 50 Stars yonida 0,75, 1 000 Stars yonida 15 qiymati turadi. Demak, bitta Star taxminan 0,015 ga to‘g‘ri keladi. 100 000 Stars paketi yonida esa 1 500 va 1 304,85 qiymatlari ko‘rsatilgan. Sahifada valyuta aniq yozilmagan, shuning uchun biz ularni dollar deb atamaymiz.",
        },
        {
          t: "p",
          text: "Tekshirish oson. Chatdagi taklifdan Stars miqdori va so‘ralgan summani oling. Keyin Fragment’da xuddi shu miqdor yonidagi raqamni toping. Taklif bir necha barobar arzon bo‘lsa, o‘zingizdan so‘rang: sotuvchi Stars’ni qayerdan oldi? Stars’ni halol yo‘l bilan olgan odam ularni zarariga sotmaydi.",
        },
        {
          t: "table",
          head: [
            "Qayerdan",
            "Qanday to‘lanadi",
            "Nimaga e’tibor berish kerak",
          ],
          rows: [
            [
              "Telegram ilovasi (iOS, Android)",
              "Ilova ichidagi xarid",
              "Stars shartlarida ko‘rsatilgan yo‘l",
            ],
            [
              "Fragment",
              "Kriptohamyon",
              "100 000 Stars yonida 1 500 / 1 304,85, valyuta yozilmagan",
            ],
            [
              "Chatdagi «bag» sotuvchisi",
              "Kartaga yoki hamyonga oldindan",
              "Rasmiy tasdiq yo‘q, Stars kelishi ham, saqlanib qolishi ham noma’lum",
            ],
            [
              "GemPay",
              "So‘mda: karta, Click, Uzum Bank, bot balansi",
              `1 ta Star ${som(STARS_UNIT_CARD, "uz")} yoki ${som(STARS_UNIT_ONLINE, "uz")}, bir buyurtmada 50 dan 10 000 tagacha`,
            ],
          ],
        },
        {
          t: "p",
          text: "Premium’ni bu yerda solishtirmaymiz. Fragment Premium’ni kriptohamyon orqali sotadi, ammo postlardagi Premium narxlari rasman tasdiqlanmagan.",
        },
        {
          t: "h2",
          id: "sotuvchi-nima-sorasa-darhol-toxtash",
          text: "Sotuvchi nima so‘rasa, darhol to‘xtash kerak?",
        },
        {
          t: "p",
          text: "Chatdagi «bag» sotuvchilarining talablari odatda bir xil bo‘ladi. Quyidagilardan birortasini ko‘rsangiz, suhbatni yoping:",
        },
        {
          t: "list",
          items: [
            "<strong>Oldindan to‘lov</strong> kartaga, TON yoki Gram hamyonga. Pul yuborganingiz tovar kelishini ta’minlamaydi.",
            "<strong>Telegram kirish kodi</strong> yoki ikki bosqichli tekshiruv paroli. Bu ma’lumot bilan akkauntingizga boshqa odam kiradi.",
            "<strong>Hamyonning kalit so‘zlari.</strong> Ular bilan hamyon va unga ulangan hamma narsa qo‘ldan ketadi.",
            "<strong>«Bag usulini o‘rgataman»</strong> yoki «yopiq botga kirish» uchun alohida to‘lov.",
            "<strong>«Garant» deb tanishtirilgan notanish bot yoki akkaunt.</strong> Bunday sxemalar haqida: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi gift takliflari va firibgarlik</a>.",
            "<strong>Shoshirish:</strong> «bag bugun yopiladi», «klan uchun 5 ta joy qoldi».",
          ],
        },
        {
          t: "p",
          text: "Telegram shartlarida xizmatdan spam yuborish yoki foydalanuvchilarni aldash uchun foydalanish taqiqlangan. Shu sabab bunday xabar ustidan shikoyat qilish mumkin.",
        },
        {
          t: "h2",
          id: "taklifni-kordingiz-5-qadamda-nima",
          text: "Taklifni ko‘rdingiz: 5 qadamda nima qilasiz?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Hech narsa to‘lamang va xabardagi havolalarni ochmang.",
            "Sotuvchiga hech qanday ma’lumot bermang. Kod, parol va hamyon so‘zlarini ayniqsa bermang.",
            "Xabar ustidan «Report spam» orqali shikoyat qiling. Shikoyatdan keyin nima bo‘lishi haqida: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatidagi shubhali havola va spam cheklovi</a>.",
            "Klan admini va jamoadoshlarni ogohlantiring, postni o‘chirishni so‘rang.",
            "Stars yoki Premium kerak bo‘lsa, narxi ochiq ko‘rsatilgan joydan so‘mda oling. Bu haqda oxirgi bo‘limda yozilgan.",
          ],
        },
        {
          t: "h2",
          id: "allaqachon-olib-qoygan-bolsangiz-balans",
          text: "Allaqachon olib qo‘ygan bo‘lsangiz, balans va sovg‘alar bilan nima qilasiz?",
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram’ga umid qilmang: Stars shartlarida savdo yakuniy deb yozilgan. Chatdagi sotuvchi bilan qilingan bitim esa umuman Telegram orqali o‘tmagan.",
        },
        {
          t: "p",
          text: "Keyingi harakatlar:",
        },
        {
          t: "list",
          items: [
            "<strong>Sotuvchi bilan aloqani to‘xtating.</strong> «Yetkazish uchun yana to‘lang» yoki «tasdiqlash kodini yuboring» degan talablarga javob bermang. Ikkinchi to‘lov odatda birinchisini qaytarmaydi.",
            "<strong>Shubhali Stars’ni shoshib sarflamang.</strong> Telegram Stars’ni balansdan yechishi mumkin. Ularni jamoadoshga qimmat sovg‘a qilib sarflash vaziyatni «tozalamaydi».",
            "<strong>Akkauntni himoyalang.</strong> Ikki bosqichli tekshiruv parolini yoqing, faol seanslar ro‘yxatini ko‘rib chiqing va notanish qurilmalarni chiqarib yuboring. Batafsil: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">Telegram akkauntini buzishdan himoyalash</a>.",
            "<strong>Balans va sovg‘alarni kuzatib boring.</strong> Sovg‘a yoki Premium bekor qilinishi rasman tasdiqlanmagan. Biz taxmin qilmaymiz, lekin bir necha kun balansga qarab turing.",
          ],
        },
        {
          t: "p",
          text: "Sotuvchiga kod yoki parol bergan bo‘lsangiz, avval akkauntni himoyalang. Stars yo‘qotish akkauntni yo‘qotishdan kamroq zarar.",
        },
        {
          t: "h2",
          id: "bag-sotuvchisiga-nega-ishonib-bolmaydi",
          text: "«Bag» sotuvchisiga nega ishonib bo‘lmaydi?",
        },
        {
          t: "p",
          text: "Telegram zaiflik topganlarga o‘zi pul to‘laydi. Buning uchun <a href=\"https://core.telegram.org/bug-bounty\" target=\"_blank\" rel=\"noopener\">Bug Bounty dasturi</a> bor. Mukofot muammo qanchalik jiddiyligiga qarab $100 dan $100 000 va undan ko‘pgacha bo‘ladi.",
        },
        {
          t: "p",
          text: "Dastur shartlari:",
        },
        {
          t: "list",
          items: [
            "zaiflik haqida security@telegram.org manziliga yoziladi;",
            "tuzatilishidan oldin ommaga yoki uchinchi shaxslarga oshkor qilingan muammo uchun mukofot berilmaydi;",
            "sinov qonunni buzmasligi, xizmat ishini izdan chiqarmasligi va boshqa foydalanuvchilarga zarar yetkazmasligi kerak.",
          ],
        },
        {
          t: "p",
          text: "Bagni klan chatida sotish bu shartlarning hammasini buzadi. Demak, «bag» sotayotgan odam ikki xil bo‘lishi mumkin. U yo umuman bag yo‘q joyda sizni aldayapti, yo qoidani ochiq buzib, xavfni sizga ham o‘tkazyapti.",
        },
        {
          t: "h2",
          id: "jamoadosh-uchun-stars-va-premiumni",
          text: "Jamoadosh uchun Stars va Premium’ni xavfsiz qanday olish mumkin?",
        },
        {
          t: "p",
          text: "Narxi ochiq ko‘rsatilgan va qaytarish tartibi yozilgan yo‘lni tanlang. GemPay’da Stars va Premium <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali so‘mda olinadi. Akkauntingizga kirilmaydi, parol so‘ralmaydi.",
        },
        {
          t: "table",
          head: [
            "",
            "Telegram Stars",
            "Telegram Premium",
          ],
          rows: [
            [
              "Nima kerak",
              "Faqat @username",
              "Faqat @username",
            ],
            [
              "Narx",
              `1 ta Star ${som(STARS_UNIT_CARD, "uz")} (karta yoki balans), ${som(STARS_UNIT_ONLINE, "uz")} (Click yoki Uzum Bank)`,
              `3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}`,
            ],
            [
              "Hajm",
              "Bir buyurtmada 50 dan 10 000 tagacha",
              "1 oylik tarif yo‘q",
            ],
            [
              "Qanday tushadi",
              "Bir necha soniyada",
              "Telegram’ning rasmiy sovg‘a mexanizmi orqali, bir necha soniyada faollashadi",
            ],
          ],
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi, Rossiyadan SBP ham ishlaydi. Visa va Mastercard qabul qilinmaydi. Kripto, VPN yoki xorijiy karta kerak emas. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Tafsilotlar: <a href=\"/tolov-va-qaytarish\">To‘lov va qaytarish</a>. Savol bo‘lsa, buyurtma raqami bilan <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga yozing.",
        },
        {
          t: "p",
          text: "Stars UC yoki olmosga aylanmaydi. O‘yin valyutasi Player ID bo‘yicha alohida olinadi.",
        },
        {
          t: "p",
          text: "Botda Stars bo‘limi qayerda turishi va qaysi xatolar pulga zarar qilishi haqida: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars’ni GemPay’da sotib olish</a>. Premium squad chatiga nima berishi haqida: <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium o‘yinchiga nima beradi</a>.",
        },
        {
          t: "p",
          text: "GemPay mustaqil xizmat va Telegram nomidan ish yuritmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service for Telegram Stars",
              href: "https://telegram.org/tos/stars",
            },
            {
              label: "Fragment — Buy Stars",
              href: "https://fragment.com/stars/buy",
            },
            {
              label: "Fragment — Telegram Premium",
              href: "https://fragment.com/premium",
            },
            {
              label: "Telegram Bug Bounty Program",
              href: "https://core.telegram.org/bug-bounty",
            },
            {
              label: "Telegram Terms of Service",
              href: "https://telegram.org/tos",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Telegram bu bagni rasman tan oldimi yoki yopdimi?",
          a: "Rasmiy sahifalarda bunday bag haqida ham, uning tuzatilgani haqida ham ma’lumot yo‘q. Shuning uchun «hali ishlayapti» degan gap — sotuvchining so‘zi xolos.",
        },
        {
          q: "Sotuvchi Stars balansimga tushganini ko‘rsatsa, demak hammasi joyidami?",
          a: "Yo‘q. Telegram balansdagi Stars’ni keyin ham ushlab turishi yoki yechib olishi mumkin, Stars shartlarida bu huquq yozilgan. Balansga tushgani ular saqlanib qolishini anglatmaydi.",
        },
        {
          q: "Sotuvchi «Fragment orqali arzon olib beraman, hamyon kalitini bering» desa-chi?",
          a: "Kalit so‘zlarni hech kimga bermang: ularni olgan odam hamyonni va unga ulangan hamma narsani o‘ziga oladi. Fragment narxlarini sahifaning o‘zida vositachisiz ko‘rishingiz mumkin.",
        },
        {
          q: "Arzon Stars bilan o‘yindagi UC yoki olmos olsa bo‘ladimi?",
          a: "Yo‘q, Stars Telegram ichida ishlatiladi va UC, olmos yoki CP’ga aylanmaydi. O‘yin valyutasi Player ID bo‘yicha alohida olinadi.",
        },
        {
          q: "100 000 Stars’ni GemPay’da bitta buyurtmada olsa bo‘ladimi?",
          a: "Yo‘q, bitta buyurtmaga 50 dan 10 000 tagacha Stars sig‘adi. Kattaroq miqdorni qanday rasmiylashtirish mumkinligini botda yoki yordam xizmatidan so‘rang.",
        },
        {
          q: "Klan admini sifatida bunday postni ko‘rsam, nima qilishim kerak?",
          a: "Postni o‘chiring, yuborgan odamni chatdan chiqaring va «Report spam» orqali shikoyat qiling. Keyin a’zolarga kod, parol berish va oldindan to‘lash mumkin emasligini qisqa eslatib qo‘ying.",
        },
      ],
    },
    ru: {
      title: "Дешёвые Stars и Premium «через баг»: опасно ли предложение в чате клана?",
      metaTitle: "Дешёвые Stars и Premium «через баг»",
      metaDescription: "Да, опасно: такой баг официально не подтверждён. Telegram может списать Stars с баланса, а аккаунт, нарушивший правила, — заблокировать.",
      excerpt: "Да, опасно: такой баг официально не подтверждён. Telegram может списать Stars с баланса, а аккаунт, нарушивший правила, — заблокировать.",
      answer: "Да, опасно: такой баг официально не подтверждён. Telegram может списать Stars с баланса, а аккаунт, нарушивший правила, — заблокировать.",
      body: [
        {
          t: "h2",
          id: "klan-chatida-bag-orqali-stars",
          text: "В чате клана продают Stars или Premium «через баг» — опасно ли покупать?",
        },
        {
          t: "p",
          text: "Да, опасно. В официальных источниках Telegram о таком баге ничего нет. О нём пишут только посты в Telegram-каналах. В них утверждается, что Premium и крупные пакеты Stars удавалось купить за копейки. Эти цифры официально не подтверждены. Неизвестно и то, закрыт баг или нет.",
        },
        {
          t: "p",
          text: "Риск в такой сделке приходит с двух сторон:",
        },
        {
          t: "list",
          items: [
            "<strong>От продавца.</strong> Он может взять деньги и ничего не отдать. Слово «баг» здесь часто нужно, чтобы выдать обычный обман за технический секрет.",
            "<strong>От Telegram.</strong> В условиях Stars Telegram оставляет за собой право временно удержать Stars на балансе или списать их насовсем. При нарушении правил аккаунт могут заблокировать — временно или навсегда.",
          ],
        },
        {
          t: "p",
          text: "Для игрока расчёт простой. Дешёвое предложение из чата не экономит деньги. Наоборот, под угрозой оказываются ваш Telegram-аккаунт, баланс Stars и подарки, которые вы отправили тиммейтам.",
        },
        {
          t: "h2",
          id: "bunday-xarid-akkaunt-stars-balansi",
          text: "Что такая покупка может сделать с аккаунтом, балансом Stars и подарками?",
        },
        {
          t: "p",
          text: "Каждая строка таблицы опирается на <a href=\"https://telegram.org/tos/stars\" target=\"_blank\" rel=\"noopener\">условия Telegram Stars</a> или <a href=\"https://telegram.org/tos\" target=\"_blank\" rel=\"noopener\">общие условия Telegram</a>.",
        },
        {
          t: "table",
          head: [
            "Что",
            "Что может произойти",
            "Что сказано в официальном источнике",
          ],
          rows: [
            [
              "Ваш Telegram-аккаунт",
              "Временная или постоянная блокировка",
              "При нарушении условий могут заблокировать Telegram или отдельные его сервисы",
            ],
            [
              "Баланс Stars",
              "Stars удержат или спишут",
              "Telegram оставляет это право за собой",
            ],
            [
              "Оставшиеся Stars, если аккаунт потерян",
              "Сгорают",
              "При удалении или потере аккаунта остаток баланса считается утраченным",
            ],
            [
              "Подарки и Premium, купленные на эти Stars",
              "Неясно",
              "Чёткого официального заявления об их отмене не найдено",
            ],
            [
              "Сама покупка Stars",
              "Telegram деньги не вернёт",
              "Продажа Stars окончательна, ненужные или ошибочные покупки не возмещаются",
            ],
          ],
        },
        {
          t: "p",
          text: "Четвёртую строку поясним отдельно. Отзовут ли потом подарок или Premium, купленные на сомнительные Stars, в этой статье не подтверждено. Но и оснований считать, что они останутся, тоже нет.",
        },
        {
          t: "p",
          text: "Пример. Вы на дешёвые Stars отправили капитану сквада подарок за победу в турнире. Через неделю Telegram списал остаток Stars с вашего баланса. Что будет с подарком — неизвестно, а баланс у вас на нуле. Связи с продавцом к тому моменту уже нет.",
        },
        {
          t: "p",
          text: "Подробнее о том, как Stars списывают с баланса: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">дешёвые Stars в чате клана и риск возврата</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "chatdagi-narxni-rasmiy-korsatkich-bilan",
          text: "Как сравнить цену из чата с официальной?",
        },
        {
          t: "p",
          text: "В условиях Stars сказано, что Stars можно купить внутри приложения Telegram на iOS и Android. Есть ещё одно место — <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">Fragment</a>. Там рядом с 50 Stars указано 0,75, рядом с 1 000 Stars — 15. Значит, одна звезда стоит примерно 0,015. У пакета 100 000 Stars указаны значения 1 500 и 1 304,85. Валюта на странице прямо не названа, поэтому мы не называем эти суммы долларами.",
        },
        {
          t: "p",
          text: "Проверить несложно. Возьмите из предложения в чате количество Stars и запрошенную сумму. Потом найдите на Fragment число рядом с тем же количеством. Если предложение дешевле в несколько раз, спросите себя: откуда у продавца эти Stars? Тот, кто получил их честно, не станет продавать себе в убыток.",
        },
        {
          t: "table",
          head: [
            "Где",
            "Как платить",
            "На что обратить внимание",
          ],
          rows: [
            [
              "Приложение Telegram (iOS, Android)",
              "Встроенная покупка",
              "Способ, указанный в условиях Stars",
            ],
            [
              "Fragment",
              "Криптокошелёк",
              "У 100 000 Stars — 1 500 / 1 304,85, валюта не указана",
            ],
            [
              "Продавец «бага» в чате",
              "Предоплата на карту или кошелёк",
              "Официального подтверждения нет, неизвестно, придут ли Stars и сохранятся ли",
            ],
            [
              "GemPay",
              "В сумах: карта, Click, Uzum Bank, баланс бота",
              `1 звезда — ${som(STARS_UNIT_CARD, "ru")} или ${som(STARS_UNIT_ONLINE, "ru")}, в одном заказе от 50 до 10 000`,
            ],
          ],
        },
        {
          t: "p",
          text: "Premium здесь не сравниваем. Fragment продаёт Premium через криптокошелёк, но цены на Premium из постов официально не подтверждены.",
        },
        {
          t: "h2",
          id: "sotuvchi-nima-sorasa-darhol-toxtash",
          text: "Что должен попросить продавец, чтобы сразу остановиться?",
        },
        {
          t: "p",
          text: "Требования продавцов «бага» в чатах обычно одни и те же. Увидели хотя бы одно из них — закрывайте переписку:",
        },
        {
          t: "list",
          items: [
            "<strong>Предоплата</strong> на карту, в TON- или Gram-кошелёк. Отправленные деньги не гарантируют, что товар придёт.",
            "<strong>Код входа в Telegram</strong> или пароль двухэтапной проверки. С ними в ваш аккаунт войдёт чужой человек.",
            "<strong>Секретные слова кошелька.</strong> С ними вы теряете кошелёк и всё, что к нему привязано.",
            "<strong>Отдельная плата</strong> за «научу пользоваться багом» или «доступ в закрытый бот».",
            "<strong>Незнакомый бот или аккаунт, представленный как «гарант».</strong> О таких схемах: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">предложения подарков в игровом чате и мошенничество</a>.",
            "<strong>Спешка:</strong> «баг сегодня закроют», «для клана осталось 5 мест».",
          ],
        },
        {
          t: "p",
          text: "Условия Telegram запрещают использовать сервис для спама и обмана пользователей. Поэтому на такое сообщение можно пожаловаться.",
        },
        {
          t: "h2",
          id: "taklifni-kordingiz-5-qadamda-nima",
          text: "Увидели предложение: что делать в 5 шагов?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Ничего не оплачивайте и не открывайте ссылки из сообщения.",
            "Не сообщайте продавцу никаких данных. Особенно — код, пароль и секретные слова кошелька.",
            "Пожалуйтесь на сообщение через «Report spam». Что происходит после жалобы: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">подозрительная ссылка в чате клана и ограничение за спам</a>.",
            "Предупредите админа клана и тиммейтов, попросите удалить пост.",
            "Если Stars или Premium нужны, купите их в сумах там, где цена указана открыто. Об этом — в последнем разделе.",
          ],
        },
        {
          t: "h2",
          id: "allaqachon-olib-qoygan-bolsangiz-balans",
          text: "Уже купили: что делать с балансом и подарками?",
        },
        {
          t: "note",
          tone: "info",
          text: "На Telegram не рассчитывайте: в условиях Stars продажа названа окончательной. А сделка с продавцом из чата вообще прошла мимо Telegram.",
        },
        {
          t: "p",
          text: "Дальнейшие действия:",
        },
        {
          t: "list",
          items: [
            "<strong>Прекратите общение с продавцом.</strong> Не реагируйте на «доплатите за доставку» или «пришлите код подтверждения». Второй платёж, как правило, не возвращает первый.",
            "<strong>Не спешите тратить сомнительные Stars.</strong> Telegram может списать их с баланса. Если потратить их на дорогой подарок тиммейту, ситуация от этого «чище» не станет.",
            "<strong>Защитите аккаунт.</strong> Включите пароль двухэтапной проверки, просмотрите список активных сеансов и завершите незнакомые. Подробно: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">как защитить Telegram-аккаунт от взлома</a>.",
            "<strong>Следите за балансом и подарками.</strong> Отмена подарков или Premium официально не подтверждена. Мы не гадаем, но несколько дней поглядывайте на баланс.",
          ],
        },
        {
          t: "p",
          text: "Если вы уже передали продавцу код или пароль, сначала защитите аккаунт. Потерять Stars — меньшая беда, чем потерять аккаунт.",
        },
        {
          t: "h2",
          id: "bag-sotuvchisiga-nega-ishonib-bolmaydi",
          text: "Почему продавцу «бага» нельзя доверять?",
        },
        {
          t: "p",
          text: "Telegram сам платит тем, кто находит уязвимости. Для этого есть <a href=\"https://core.telegram.org/bug-bounty\" target=\"_blank\" rel=\"noopener\">программа Bug Bounty</a>. Вознаграждение зависит от серьёзности проблемы — от $100 до $100 000 и выше.",
        },
        {
          t: "p",
          text: "Условия программы:",
        },
        {
          t: "list",
          items: [
            "об уязвимости пишут на security@telegram.org;",
            "за проблему, раскрытую публично или третьим лицам до исправления, награда не выплачивается;",
            "тестирование не должно нарушать закон, мешать работе сервиса и как-либо вредить другим пользователям.",
          ],
        },
        {
          t: "p",
          text: "Продажа бага в чате клана нарушает все эти условия разом. Значит, вариантов два. Либо продавец обманывает вас там, где никакого бага нет, либо открыто нарушает правила и перекладывает риск на вас.",
        },
        {
          t: "h2",
          id: "jamoadosh-uchun-stars-va-premiumni",
          text: "Как безопасно купить Stars и Premium для тиммейта?",
        },
        {
          t: "p",
          text: "Выбирайте способ, где цена указана открыто и описан порядок возврата. В GemPay Stars и Premium покупаются в сумах через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. Входить в ваш аккаунт не нужно, пароль не спрашивают.",
        },
        {
          t: "table",
          head: [
            "",
            "Telegram Stars",
            "Telegram Premium",
          ],
          rows: [
            [
              "Что нужно",
              "Только @username",
              "Только @username",
            ],
            [
              "Цена",
              `1 звезда — ${som(STARS_UNIT_CARD, "ru")} (карта или баланс), ${som(STARS_UNIT_ONLINE, "ru")} (Click или Uzum Bank)`,
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
            ],
            [
              "Объём",
              "В одном заказе от 50 до 10 000",
              "Тарифа на 1 месяц нет",
            ],
            [
              "Как приходит",
              "За несколько секунд",
              "Через официальный механизм подарков Telegram, активируется за несколько секунд",
            ],
          ],
        },
        {
          t: "p",
          text: "Оплата — UzCard, HUMO, Click, Uzum Bank или баланс бота, из России работает СБП. Visa и Mastercard не принимаются. Криптовалюта, VPN или иностранная карта не нужны. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Подробности: <a href=\"/tolov-va-qaytarish\">Оплата и возврат</a>. Если есть вопросы, пишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа.",
        },
        {
          t: "p",
          text: "Stars не превращаются в UC или алмазы. Игровая валюта покупается отдельно по Player ID.",
        },
        {
          t: "p",
          text: "Где в боте раздел Stars и какие ошибки стоят денег: <a href=\"/blog/telegram-stars-sotib-olish-gempay\">покупка Telegram Stars в GemPay</a>. Что Premium даёт чату сквада: <a href=\"/blog/telegram-premium-oyinchi-uchun\">что Telegram Premium даёт игроку</a>.",
        },
        {
          t: "p",
          text: "GemPay — независимый сервис и не действует от имени Telegram.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Terms of Service for Telegram Stars",
              href: "https://telegram.org/tos/stars",
            },
            {
              label: "Fragment — Buy Stars",
              href: "https://fragment.com/stars/buy",
            },
            {
              label: "Fragment — Telegram Premium",
              href: "https://fragment.com/premium",
            },
            {
              label: "Telegram Bug Bounty Program",
              href: "https://core.telegram.org/bug-bounty",
            },
            {
              label: "Telegram Terms of Service",
              href: "https://telegram.org/tos",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Telegram официально признал этот баг или закрыл его?",
          a: "На официальных страницах нет ни сведений о таком баге, ни информации о его исправлении. Поэтому «он ещё работает» — это только слова продавца.",
        },
        {
          q: "Продавец показал, что Stars пришли на баланс. Значит, всё в порядке?",
          a: "Нет. Telegram может удержать или списать Stars с баланса и позже — это право прописано в условиях Stars. То, что звёзды пришли, не значит, что они останутся.",
        },
        {
          q: "А если продавец говорит: «Куплю дёшево через Fragment, дай секретные слова кошелька»?",
          a: "Никому не сообщайте секретные слова: получивший их забирает кошелёк и всё, что к нему привязано. Цены Fragment можно посмотреть прямо на сайте, без посредников.",
        },
        {
          q: "Можно ли на дешёвые Stars купить UC или алмазы в игре?",
          a: "Нет, Stars используются внутри Telegram и не конвертируются в UC, алмазы или CP. Игровая валюта покупается отдельно по Player ID.",
        },
        {
          q: "Можно ли купить 100 000 Stars в GemPay одним заказом?",
          a: "Нет, в один заказ помещается от 50 до 10 000 Stars. Как оформить больший объём, уточните в боте или в поддержке.",
        },
        {
          q: "Я админ клана и увидел такой пост. Что делать?",
          a: "Удалите пост, исключите автора из чата и пожалуйтесь через «Report spam». Затем коротко напомните участникам: никаких кодов, паролей и предоплат.",
        },
      ],
    },
  },
};

export default article;
