// Avtoblogyoz yasagan maqola (2026-11-03). Niyat: O'zbekistondagi o'yinchi eski mobil raqamini auksionga qo'yib sotmoqchi bo'lib, «raqamni sotishdan oldin o'yin akkaunti» deb qidiradi va PUBG, Mobile Legends, Free Fire, Steam akkauntlari hamda Telegram'dagi Stars/Premium xaridlari yangi egaga o'tib ketmasligi uchun nima qilishni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/about
//   https://telegram.org/blog/ultimate-privacy-topics-2-0
//   https://core.telegram.org/api/fragment
//   https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms
//   https://fragment.com/terms
//   https://fragment.com/number/88800888000

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "raqam-sotishdan-oldin-oyin-akkauntini-himoyalash",
  game: "pubg-mobile",
  type: "trust",
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
  keywords: ["raqamni sotishdan oldin o'yin akkaunti","raqam sotsam pubg akkaunt","eski raqamni sotish xavfsizmi","o'yin akkauntini raqamdan uzish","steam telefon raqamini almashtirish","mobil raqam auksioni akkaunt","продать номер телефона игровой аккаунт","как отвязать номер от аккаунта pubg","продажа номера что будет с аккаунтом","смена номера steam перед продажей сим","аукцион мобильных номеров узбекистан"],
  locales: {
    uz: {
      title: "Raqam sotishdan oldin o‘yin akkauntini himoyalash: PUBG, MLBB, Steam, Telegram",
      metaTitle: "Raqam sotishdan oldin o‘yin akkauntini himoyalash",
      metaDescription: "O‘yin akkaunti SIM bilan birga o‘tmaydi, ammo u SMS orqali tiklansa, yangi ega kira oladi. Sotishdan oldin har akkauntga yangi kirish usulini ulang.",
      excerpt: "O‘yin akkaunti SIM bilan birga o‘tmaydi, ammo u SMS orqali tiklansa, yangi ega kira oladi. Sotishdan oldin har akkauntga yangi kirish usulini ulang.",
      answer: "O‘yin akkaunti SIM bilan birga o‘tmaydi, ammo u SMS orqali tiklansa, yangi ega kira oladi. Sotishdan oldin har akkauntga yangi kirish usulini ulang.",
      body: [
        {
          t: "h2",
          id: "sim-yangi-egaga-otsa-oyin",
          text: "SIM yangi egaga o‘tsa, o‘yin akkauntiga qanday xavf tug‘iladi?",
        },
        {
          t: "p",
          text: "Akkauntning o‘zi SIM karta bilan birga xaridorga o‘tmaydi. Xavf tiklash jarayonida. Raqam akkauntga kirish yoki parolni tiklash vositasi bo‘lib qolgan bo‘lsa, SMS kodni endi yangi egasi oladi. Kod kimga kelsa, akkauntga kirish imkoni ham o‘shanda bo‘ladi.",
        },
        {
          t: "p",
          text: "Xavf darajasi akkaunt raqamga qanchalik bog‘langaniga qarab o‘zgaradi. Bir o‘yinchi PUBG yoki Mobile Legends’ga ijtimoiy tarmoq orqali kiradi va raqam umuman ishtirok etmaydi. Boshqasida telefon yagona tiklash usuli bo‘lib turadi. Har bir o‘yinda qaysi usullar ulanganini sozlamalardan o‘zingiz tekshiring. Aniq menyu nomlari o‘yin versiyasiga qarab farq qiladi va bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun yo‘qotish narxi yuqori. Akkauntda yillar davomida yig‘ilgan UC, olmos, CP, skinlar, pass progressi va Steam kutubxonasi turadi. Akkaunt qo‘ldan ketsa, bularning hammasi u bilan ketadi.",
        },
        {
          t: "p",
          text: "Asosiy qoida bitta: kirish va tiklash usullarini SIM hali qo‘lingizda turganda almashtiring. Raqam sotilgandan keyin tasdiq kodi yangi egaga boradi va har bir o‘zgarish ancha qiyinlashadi.",
        },
        {
          t: "h2",
          id: "raqam-auksioni-haqidagi-kanal-postida",
          text: "Raqam auksioni haqidagi kanal postida nima aniq, nima noaniq?",
        },
        {
          t: "p",
          text: "Bu mavzu Telegram kanalidagi postdan keyin ko‘p muhokama qilindi. Postda oddiy fuqarolar ham raqamini auksionga qo‘yishi va e’lon uchun haq to‘lashi aytilgan. Kanal rasmiy manba emas.",
        },
        {
          t: "note",
          tone: "info",
          text: "Postdagi e’lon haqi miqdori Telegram yoki Fragment manbalarida topilmadi. Gap mobil operatorlarning raqam auksioni haqida bo‘lishi mumkin. Shartlar, narx va muddatlarni faqat operatorning rasmiy saytida yoki ofisida aniqlang.",
        },
        {
          t: "p",
          text: "Buni Fragment’dagi savdo bilan adashtirmang. <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment</a> sahifasiga ko‘ra, Telegram 2022-yil oxirida TON blokcheynida soni cheklangan virtual raqamlarni kolleksion sifatida chiqargan. <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">Fragment shartlari</a>ga ko‘ra, ularning egalari raqamni xususiy sotishi yoki ochiq auksionga qo‘yishi mumkin. Beeline, Ucell yoki Uzmobile SIM kartasi bu savdoga kirmaydi.",
        },
        {
          t: "p",
          text: "Auksion qaysi bo‘lishidan qat’i nazar, o‘yin akkauntlarini himoyalash tartibi bir xil. U quyida berilgan.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "pubg-mlbb-free-fire-va",
          text: "PUBG, MLBB, Free Fire va Steam: raqamga bog‘liqlik jadvali",
        },
        {
          t: "p",
          text: "Jadval qaysi akkauntdan boshlashni ko‘rsatadi. O‘yinlarning kirish usullari vaqti-vaqti bilan o‘zgaradi, shuning uchun yakuniy tekshiruvni o‘yinning rasmiy yordam sahifasida qiling.",
        },
        {
          t: "table",
          head: [
            "Platforma",
            "Raqam qayerda ishlatilishi mumkin",
            "Sotishdan oldin nimani tekshirish",
            "GemPay xaridida nima kerak",
          ],
          rows: [
            [
              "PUBG Mobile",
              "Kirish yoki tiklash usuli",
              "Bog‘langan usullar ro‘yxati; telefon bo‘lsa, pochta yoki ijtimoiy tarmoq qo‘shing",
              "Player ID",
            ],
            [
              "Mobile Legends",
              "Kirish yoki tiklash usuli",
              "Akkaunt qaysi usullarga bog‘langanini sozlamalardan ko‘ring",
              "User ID va Server ID",
            ],
            [
              "Free Fire, CODM",
              "Ulangan platforma akkauntiga bog‘liq",
              "Ulangan ijtimoiy tarmoq yoki pochtaga o‘zingiz kira olasizmi",
              "Player ID",
            ],
            [
              "Steam",
              "Himoya kodlari va tiklash",
              "Kodlar qayerga kelishi, pochtaga kirish bor-yo‘qligi",
              "Steam login (account name)",
            ],
            [
              "Telegram",
              "Kirish kodi raqamga keladi",
              "Raqamni yangisiga almashtirish, ikki bosqichli parol",
              "@username",
            ],
          ],
        },
        {
          t: "p",
          text: "Oxirgi ustunga e’tibor bering: GemPay hech bir o‘yin uchun telefon raqam yoki parol so‘ramaydi. SIM sotilishi bot orqali qilinadigan xaridlarga ta’sir qilmaydi — ID va login sizda qolsa bo‘ldi. Steam’da login bilan profil nomini adashtirish oson. Farqi <a href=\"/blog/steam-login-qayerda-account-name\">Steam login qayerda turadi</a> maqolasida tushuntirilgan.",
        },
        {
          t: "h2",
          id: "simni-auksionga-qoyishdan-oldingi-5",
          text: "SIM’ni auksionga qo‘yishdan oldingi 5 qadam",
        },
        {
          t: "steps",
          items: [
            {
              title: "Ro‘yxat tuzing",
              text: "Shu raqam qaysi o‘yinlarda, Steam’da, pochtada, Telegram’da va bank ilovalarida turganini yozib chiqing. Deyarli kirmaydigan eski akkauntlarni ham qo‘shing.",
            },
            {
              title: "Yangi usulni avval ulang",
              text: "Har bir akkauntga yangi raqam, pochta yoki ijtimoiy tarmoqni qo‘shing. Eski raqamni faqat shundan keyin o‘chiring.",
            },
            {
              title: "Telegram’ni himoyalang",
              text: "Akkauntdagi raqamni yangisiga almashtiring va ikki bosqichli parol qo‘ying. Shunda faqat SMS kodning o‘zi bilan akkauntga kirib bo‘lmaydi.",
            },
            {
              title: "Sinab ko‘ring",
              text: "Har bir o‘yindan chiqib, yangi usul bilan qayta kiring. Kira olmasangiz, eski raqam hali kerak — SIM’ni sotishga shoshilmang.",
            },
            {
              title: "Ma’lumotlarni saqlang",
              text: "Player ID, Steam login, @username va xarid cheklarini alohida joyga yozib qo‘ying. Hammasi tekshirilgandan keyingina SIM’ni auksionga qo‘ying.",
            },
          ],
        },
        {
          t: "p",
          text: "Eng ko‘p uchraydigan xato — avval eski raqamni o‘chirib, yangisini keyin qo‘shmoqchi bo‘lish. Ko‘p xizmatlar o‘zgarishni eski raqamga kod yuborib tasdiqlaydi. Raqam qo‘lingizda bo‘lmasa, bu kodni olib bo‘lmaydi.",
        },
        {
          t: "p",
          text: "Yana bir xato — faqat asosiy o‘yinni tekshirish. Ikkinchi telefondagi eski akkaunt yoki ukangizga bergan Steam profili ham shu raqamga bog‘langan bo‘lishi mumkin.",
        },
        {
          t: "h2",
          id: "telegram-stars-premium-va-gempay",
          text: "Telegram Stars, Premium va GemPay buyurtmalari raqam bilan ketib qoladimi?",
        },
        {
          t: "p",
          text: "GemPay’da Stars va Premium @username bo‘yicha olinadi, telefon raqam so‘ralmaydi. Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi, bot akkauntingizga kirmaydi.",
        },
        {
          t: "p",
          text: "Lekin xarid akkauntning o‘ziga yoziladi. Telegram akkaunti eski raqamda qolib, yangi egasi kod orqali unga kirsa, Stars balansi ham, faol obuna ham o‘sha akkauntda qoladi. Shuning uchun Telegram’dagi raqamni SIM sotilishidan oldin almashtirish shart.",
        },
        {
          t: "p",
          text: "Raqam almashgach @username’ingiz o‘zgarmaganini tekshiring. Jamoadoshlaringiz sizga Stars yoki Premium sovg‘a qilmoqchi bo‘lsa, aynan shu nomni yozadi. Nomdagi bitta xato harf sovg‘aning boshqa odamga ketishiga olib keladi.",
        },
        {
          t: "p",
          text: "GemPay’dagi narxlar:",
        },
        {
          t: "list",
          items: [
            `Stars donasi — ${som(STARS_UNIT_CARD, "uz")} (UzCard/HUMO o‘tkazmasi yoki bot balansi), Click yoki Uzum Bank orqali — ${som(STARS_UNIT_ONLINE, "uz")}. Bir buyurtmada 50 dan 10 000 tagacha.`,
            `Premium — 3 oy ${som(premium(3), "uz")}, 6 oy ${som(premium(6), "uz")}, 12 oy ${som(premium(12), "uz")}. Narx barcha to‘lov usulida bir xil, 1 oylik tarif yo‘q.`,
          ],
        },
        {
          t: "p",
          text: "Stars o‘yin valyutasiga aylanmaydi: UC yoki olmos uchun alohida buyurtma kerak. Farqlari <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC va olmos qaysi biri nimaga kerak</a> maqolasida berilgan. Obunaning o‘yinchiga real foydasi haqida — <a href=\"/blog/telegram-premium-oyinchi-uchun\">Telegram Premium o‘yinchiga nima beradi</a>.",
        },
        {
          t: "h2",
          id: "888-anonim-raqam-oyinchi-uchun",
          text: "+888 anonim raqam o‘yinchi uchun SIM o‘rnini bosadimi?",
        },
        {
          t: "p",
          text: "Ba’zilar eski SIM’ni sotib, Telegram uchun +888 raqamga o‘tishni o‘ylaydi. Telegram uchun bu ishlaydi, o‘yinlar uchun esa yechim emas.",
        },
        {
          t: "list",
          items: [
            "<a href=\"https://telegram.org/blog/ultimate-privacy-topics-2-0\" target=\"_blank\" rel=\"noopener\">Telegram blogi</a>ga ko‘ra, Fragment’dagi anonim raqam bilan SIM kartasiz akkaunt ochish mumkin. Kirish kodi SMS’da emas, Fragment’da ko‘rinadi.",
            "Kodni ko‘rish uchun fragment.com’ga raqam egasi bo‘lgan hamyon bilan kiriladi (<a href=\"https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms\" target=\"_blank\" rel=\"noopener\">texnik hujjat</a>).",
            "<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment sahifasi</a>da yozilishicha, bu raqamlar bilan qo‘ng‘iroq qilib, SMS yuborib yoki boshqa xizmatlarda ro‘yxatdan o‘tib bo‘lmaydi, agar o‘sha xizmat ularni o‘zi qo‘llab-quvvatlamasa. O‘yinlar va Steam ularni qabul qilishi tasdiqlanmagan.",
            "Hamyonga kirish ma’lumotlari yo‘qolsa, Fragment hamyonni ham, undagi raqamni ham tiklay olmaydi. Xaridlar uchun pul qaytarilmaydi. Telegram akkaunti bloklansa yoki o‘chirilsa, zarar qoplanmaydi (<a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">shartlar</a>).",
          ],
        },
        {
          t: "p",
          text: "Demak, o‘yin va Steam akkauntlari uchun baribir oddiy raqam yoki ishonchli pochta kerak.",
        },
        {
          t: "h2",
          id: "raqam-savdosi-atrofidagi-qaysi-takliflar",
          text: "Raqam savdosi atrofidagi qaysi takliflar firibgarlik?",
        },
        {
          t: "p",
          text: "SIM sotilayotgan paytda o‘yinchilarga ko‘pincha quyidagi sxemalar bilan murojaat qilishadi:",
        },
        {
          t: "list",
          items: [
            "<strong>«Yangi ega» yoki «auksion xodimi» nomidan SMS kod so‘rash.</strong> Bahona: «raqam menga noto‘g‘ri o‘tdi, kodni tashlab bering». Bu kod bilan akkauntingizga kirish mumkin.",
            "<strong>«Akkauntni o‘tkazish» yoki «tasdiqlash» uchun parol so‘raydigan bot.</strong> Haqiqiy auksionga o‘yin yoki Telegram parolingiz kerak emas.",
            "<strong>Raqam evaziga o‘yin valyutasi va’dasi.</strong> «Raqamingizni bering, 5 000 olmos tashlaymiz» kabi takliflar login yig‘ish usuli. Shunga o‘xshash sxemalar tahlili — <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">Free Fire’da «bepul olmos» qaysi biri haqiqiy</a>.",
            "<strong>Soxta qo‘llab-quvvatlash.</strong> O‘zini GemPay yoki o‘yin supporti deb tanishtirib, kod so‘raydigan akkauntlar.",
          ],
        },
        {
          t: "p",
          text: "GemPay buyurtma uchun faqat Player ID yoki @username so‘raydi, parol hech qachon so‘ralmaydi. O‘yinda avval nik tekshirib ko‘rsatiladi, siz tasdiqlaganingizdan keyin to‘lov qilinadi. Kod yoki parol so‘ragan har qanday «xodim» soxta. Umumiy qoidalar <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">O‘yin hisobini xavfsiz to‘ldirish</a> maqolasida jamlangan.",
        },
        {
          t: "h2",
          id: "sim-sotilib-bolgan-bolsa-birinchi",
          text: "SIM sotilib bo‘lgan bo‘lsa: birinchi navbatda nima qilinadi",
        },
        {
          t: "p",
          text: "Raqam qo‘ldan ketgan, lekin akkauntlar hali sizda bo‘lsa, tez harakat qiling:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Hali kirib turgan akkauntlarga darhol yangi kirish usulini qo‘shing va parolni almashtiring.",
            "Telegram’da faol sessiyalar ro‘yxatini oching va notanish qurilmalarni yoping. Ikki bosqichli parol hali qo‘yilmagan bo‘lsa, hozir qo‘ying.",
            "Kira olmayotgan o‘yin bo‘yicha o‘yinning rasmiy qo‘llab-quvvatlash xizmatiga yozing. Player ID va xarid cheklari akkaunt sizniki ekanini ko‘rsatishga yordam berishi mumkin.",
            "GemPay buyurtmasi bo‘yicha savol bo‘lsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing.",
          ],
        },
        {
          t: "p",
          text: "GemPay’da buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushib bo‘lgan valyuta esa qaytarilmaydi. Shuning uchun ID’ni to‘lovdan oldin bot ko‘rsatgan nik bilan solishtiring. Batafsil ma’lumot <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">to‘lov va qaytarish</a> sahifasida.",
        },
        {
          t: "p",
          text: "Sotilgan raqamni operator orqali qaytarish mumkinligi bu maqolada tasdiqlanmagan. Buni operatorning o‘zidan so‘rang.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More",
              href: "https://telegram.org/blog/ultimate-privacy-topics-2-0",
            },
            {
              label: "Fragment collectibles",
              href: "https://core.telegram.org/api/fragment",
            },
            {
              label: "auth.sentCodeTypeFragmentSms",
              href: "https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms",
            },
            {
              label: "Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "+888 0088 8000",
              href: "https://fragment.com/number/88800888000",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Raqamni sotgandan keyin PUBG yoki Free Fire’dagi UC va olmos yo‘qolib qoladimi?",
          a: "Valyuta telefon raqamga emas, o‘yin akkauntiga yoziladi, shuning uchun SIM sotilishining o‘zi uni o‘chirmaydi. Muammo akkauntni shu raqam orqali tiklash mumkin bo‘lsa paydo bo‘ladi: unda yangi ega akkauntga kirishga urinishi mumkin.",
        },
        {
          q: "Steam akkauntidagi telefonni qanday qilib yangisiga almashtiraman?",
          a: "Almashtirishni eski SIM hali qo‘lingizda turganda qiling, chunki tasdiq kodi eski raqamga kelishi mumkin. Aniq tartibni Steam’ning rasmiy yordam sahifasida tekshiring va pochtangizga kira olishingizga ishonch hosil qiling.",
        },
        {
          q: "GemPay’dan o‘yin valyutasi olish uchun telefon raqam kerakmi?",
          a: "Kerak emas. O‘yin uchun Player ID (Mobile Legends’da User ID va Server ID), Steam uchun login, Telegram xizmatlari uchun @username yetarli. Parol hech qachon so‘ralmaydi.",
        },
        {
          q: "Telegram Premium eski raqamga ulanganmi yoki akkauntgami?",
          a: "Obuna akkauntga tegishli: GemPay uni @username bo‘yicha Telegram’ning sovg‘a mexanizmi orqali ulaydi. Akkaunt eski raqamda qolib, unga boshqa odam kirsa, obuna ham o‘sha akkauntda qoladi.",
        },
        {
          q: "O‘yin akkauntini +888 raqamga bog‘lab qo‘ysam bo‘ladimi?",
          a: "Fragment ma’lumotiga ko‘ra, bu raqamlar o‘sha xizmatning o‘zi qo‘llab-quvvatlamasa, boshqa joylarda ishlamaydi. O‘yinlar va Steam ularni qabul qilishi tasdiqlanmagan, shuning uchun oddiy raqam yoki pochtadan foydalaning.",
        },
        {
          q: "Raqamni sotgach, jamoadoshlarim menga Stars sovg‘a qila oladimi?",
          a: "Ha, sovg‘a raqamga emas, @username’ga yuboriladi. Raqam almashgandan keyin username joyida ekanini tekshirib, uni jamoadoshlaringizga xatosiz yuboring.",
        },
        {
          q: "Yangi egasi SMS kodni yuborishimni so‘rasa, nima qilish kerak?",
          a: "Hech qanday kodni yubormang — u akkauntlaringizdan biriga kirish uchun ishlatilishi mumkin. Shu raqamga bog‘langan akkauntlarda kirish usulini darhol almashtiring va Telegram’dagi faol sessiyalarni tekshiring.",
        },
      ],
    },
    ru: {
      title: "Перед продажей номера: как защитить аккаунты PUBG, MLBB, Steam и Telegram",
      metaTitle: "Перед продажей номера: как защитить аккаунты PUBG, MLBB",
      metaDescription: "Игровой аккаунт не переходит вместе с SIM, но при восстановлении по SMS новый владелец сможет войти. До продажи привяжите новый способ входа.",
      excerpt: "Игровой аккаунт не переходит вместе с SIM, но при восстановлении по SMS новый владелец сможет войти. До продажи привяжите новый способ входа.",
      answer: "Игровой аккаунт не переходит вместе с SIM, но при восстановлении по SMS новый владелец сможет войти. До продажи привяжите новый способ входа.",
      body: [
        {
          t: "h2",
          id: "sim-yangi-egaga-otsa-oyin",
          text: "Чем грозит игровому аккаунту переход SIM к новому владельцу?",
        },
        {
          t: "p",
          text: "Сам аккаунт вместе с SIM-картой покупателю не переходит. Опасность — в восстановлении доступа. Если номер остаётся способом входа или сброса пароля, SMS-код теперь получит новый владелец. У кого код, у того и доступ к аккаунту.",
        },
        {
          t: "p",
          text: "Уровень риска зависит от того, насколько аккаунт завязан на номер. Один игрок заходит в PUBG или Mobile Legends через соцсеть, и номер вообще не участвует. У другого телефон — единственный способ восстановления. Какие способы привязаны в каждой игре, проверьте сами в настройках. Точные названия пунктов меню зависят от версии игры и в этой статье не подтверждены.",
        },
        {
          t: "p",
          text: "Для игрока цена потери высока. На аккаунте лежат UC, алмазы, CP, скины, прогресс пропуска и библиотека Steam, собранные за годы. Уходит аккаунт — уходит всё это.",
        },
        {
          t: "p",
          text: "Главное правило одно: меняйте способы входа и восстановления, пока SIM ещё у вас на руках. После продажи номера код подтверждения уйдёт новому владельцу, и любое изменение станет намного сложнее.",
        },
        {
          t: "h2",
          id: "raqam-auksioni-haqidagi-kanal-postida",
          text: "Что в посте про аукцион номеров точно, а что нет?",
        },
        {
          t: "p",
          text: "Тему активно обсуждают после поста в одном Telegram-канале. В нём говорится, что обычные граждане тоже могут выставить свой номер на аукцион и заплатить за размещение. Канал не является официальным источником.",
        },
        {
          t: "note",
          tone: "info",
          text: "Указанная в посте плата за размещение в источниках Telegram и Fragment не найдена. Возможно, речь идёт об аукционе номеров мобильных операторов. Условия, цены и сроки уточняйте только на официальном сайте оператора или в офисе.",
        },
        {
          t: "p",
          text: "Не путайте это с торговлей на Fragment. Согласно странице <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">Fragment</a>, в конце 2022 года Telegram выпустил ограниченную серию виртуальных номеров как коллекционные предметы в блокчейне TON. По <a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">условиям Fragment</a> владельцы могут продать такой номер частным образом или выставить на открытый аукцион. SIM-карты Beeline, Ucell или Uzmobile к этим торгам отношения не имеют.",
        },
        {
          t: "p",
          text: "Какой бы ни был аукцион, порядок защиты игровых аккаунтов один и тот же. Он описан ниже.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "pubg-mlbb-free-fire-va",
          text: "PUBG, MLBB, Free Fire и Steam: таблица привязки к номеру",
        },
        {
          t: "p",
          text: "Таблица подскажет, с какого аккаунта начать. Способы входа в играх время от времени меняются, поэтому окончательную проверку делайте на официальной странице поддержки игры.",
        },
        {
          t: "table",
          head: [
            "Платформа",
            "Где может использоваться номер",
            "Что проверить до продажи",
            "Что нужно для покупки в GemPay",
          ],
          rows: [
            [
              "PUBG Mobile",
              "Способ входа или восстановления",
              "Список привязок; если там телефон — добавьте почту или соцсеть",
              "Player ID",
            ],
            [
              "Mobile Legends",
              "Способ входа или восстановления",
              "К каким способам привязан аккаунт — смотрите в настройках",
              "User ID и Server ID",
            ],
            [
              "Free Fire, CODM",
              "Зависит от привязанного аккаунта платформы",
              "Можете ли вы сами войти в привязанную соцсеть или почту",
              "Player ID",
            ],
            [
              "Steam",
              "Коды защиты и восстановление",
              "Куда приходят коды, есть ли доступ к почте",
              "Логин Steam (account name)",
            ],
            [
              "Telegram",
              "Код входа приходит на номер",
              "Сменить номер на новый, поставить облачный пароль",
              "@username",
            ],
          ],
        },
        {
          t: "p",
          text: "Обратите внимание на последний столбец: GemPay ни для одной игры не спрашивает номер телефона или пароль. Продажа SIM не влияет на покупки через бота — достаточно, чтобы ID и логин остались у вас. В Steam легко перепутать логин с именем профиля. Разница объяснена в статье <a href=\"/blog/steam-login-qayerda-account-name\">где найти логин Steam</a>.",
        },
        {
          t: "h2",
          id: "simni-auksionga-qoyishdan-oldingi-5",
          text: "5 шагов перед тем, как выставить SIM на аукцион",
        },
        {
          t: "steps",
          items: [
            {
              title: "Составьте список",
              text: "Запишите, где стоит этот номер: в играх, Steam, почте, Telegram и банковских приложениях. Добавьте и старые аккаунты, в которые почти не заходите.",
            },
            {
              title: "Сначала привяжите новый способ",
              text: "К каждому аккаунту добавьте новый номер, почту или соцсеть. Старый номер удаляйте только после этого.",
            },
            {
              title: "Защитите Telegram",
              text: "Смените номер в аккаунте на новый и включите облачный пароль (двухэтапную проверку). Тогда одного SMS-кода для входа будет недостаточно.",
            },
            {
              title: "Проверьте на деле",
              text: "Выйдите из каждой игры и зайдите заново новым способом. Не получилось — значит, старый номер ещё нужен, с продажей SIM не спешите.",
            },
            {
              title: "Сохраните данные",
              text: "Запишите отдельно Player ID, логин Steam, @username и чеки покупок. Выставляйте SIM на аукцион, только когда всё проверено.",
            },
          ],
        },
        {
          t: "p",
          text: "Самая частая ошибка — сначала удалить старый номер, а новый добавить потом. Многие сервисы подтверждают изменение кодом на старый номер. Если номера у вас уже нет, этот код не получить.",
        },
        {
          t: "p",
          text: "Ещё одна ошибка — проверить только основную игру. Старый аккаунт на втором телефоне или профиль Steam, который вы отдали младшему брату, тоже могут быть привязаны к этому номеру.",
        },
        {
          t: "h2",
          id: "telegram-stars-premium-va-gempay",
          text: "Уйдут ли Telegram Stars, Premium и заказы GemPay вместе с номером?",
        },
        {
          t: "p",
          text: "В GemPay Stars и Premium покупаются по @username, номер телефона не нужен. Premium подключается через официальный механизм подарков Telegram, бот в ваш аккаунт не входит.",
        },
        {
          t: "p",
          text: "Но покупка записывается на сам аккаунт. Если Telegram остался на старом номере и новый владелец войдёт в него по коду, баланс Stars и активная подписка останутся в этом аккаунте. Поэтому номер в Telegram нужно сменить до продажи SIM.",
        },
        {
          t: "p",
          text: "После смены номера убедитесь, что ваш @username не изменился. Именно его укажут тиммейты, если захотят подарить вам Stars или Premium. Одна неверная буква — и подарок уйдёт другому человеку.",
        },
        {
          t: "p",
          text: "Цены в GemPay:",
        },
        {
          t: "list",
          items: [
            `Одна звезда Stars — ${som(STARS_UNIT_CARD, "ru")} (перевод с UzCard/HUMO или баланс бота), через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. В одном заказе — от 50 до 10 000 штук.`,
            `Premium — 3 месяца ${som(premium(3), "ru")}, 6 месяцев ${som(premium(6), "ru")}, 12 месяцев ${som(premium(12), "ru")}. Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет.`,
          ],
        },
        {
          t: "p",
          text: "Stars не превращаются в игровую валюту: для UC или алмазов нужен отдельный заказ. Разница описана в статье <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC и алмазы: что для чего нужно</a>. О реальной пользе подписки для игрока — <a href=\"/blog/telegram-premium-oyinchi-uchun\">что Telegram Premium даёт игроку</a>.",
        },
        {
          t: "h2",
          id: "888-anonim-raqam-oyinchi-uchun",
          text: "Заменит ли игроку анонимный номер +888 обычную SIM?",
        },
        {
          t: "p",
          text: "Некоторые думают продать старую SIM и перейти в Telegram на номер +888. Для Telegram это работает, а для игр — не решение.",
        },
        {
          t: "list",
          items: [
            "Согласно <a href=\"https://telegram.org/blog/ultimate-privacy-topics-2-0\" target=\"_blank\" rel=\"noopener\">блогу Telegram</a>, с анонимным номером Fragment можно завести аккаунт без SIM-карты. Код входа приходит не по SMS, а отображается на Fragment.",
            "Чтобы увидеть код, нужно войти на fragment.com с кошелька, которому принадлежит номер (<a href=\"https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms\" target=\"_blank\" rel=\"noopener\">техническая документация</a>).",
            "На <a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">странице Fragment</a> сказано, что с этих номеров нельзя звонить, отправлять SMS или регистрироваться в других сервисах, если только сам сервис их не поддерживает. Что игры и Steam их принимают, не подтверждено.",
            "Если потерять данные для входа в кошелёк, Fragment не восстановит ни кошелёк, ни номер в нём. Деньги за покупки не возвращаются. Если аккаунт Telegram заблокируют или удалят, убытки не компенсируются (<a href=\"https://fragment.com/terms\" target=\"_blank\" rel=\"noopener\">условия</a>).",
          ],
        },
        {
          t: "p",
          text: "Итог: для игровых аккаунтов и Steam всё равно нужен обычный номер или надёжная почта.",
        },
        {
          t: "h2",
          id: "raqam-savdosi-atrofidagi-qaysi-takliflar",
          text: "Какие предложения вокруг продажи номера — мошенничество?",
        },
        {
          t: "p",
          text: "Пока SIM продаётся, к игрокам часто приходят с такими схемами:",
        },
        {
          t: "list",
          items: [
            "<strong>Просьба прислать SMS-код от имени «нового владельца» или «сотрудника аукциона».</strong> Предлог: «номер перешёл ко мне с ошибкой, скиньте код». По этому коду можно войти в ваш аккаунт.",
            "<strong>Бот, который просит пароль для «переноса» или «подтверждения» аккаунта.</strong> Настоящему аукциону ваш пароль от игры или Telegram не нужен.",
            "<strong>Игровая валюта в обмен на номер.</strong> Предложения вроде «дайте номер — закинем 5 000 алмазов» — способ собрать логины. Разбор похожих схем — в статье <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">«бесплатные алмазы» в Free Fire: что правда, а что обман</a>.",
            "<strong>Фальшивая поддержка.</strong> Аккаунты, которые представляются поддержкой GemPay или игры и просят код.",
          ],
        },
        {
          t: "p",
          text: "Для заказа GemPay спрашивает только Player ID или @username, пароль не запрашивается никогда. В играх сначала показывается найденный ник, и оплата проходит только после вашего подтверждения. Любой «сотрудник», который просит код или пароль, — фальшивка. Общие правила собраны в статье <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
        },
        {
          t: "h2",
          id: "sim-sotilib-bolgan-bolsa-birinchi",
          text: "SIM уже продана: что делать в первую очередь",
        },
        {
          t: "p",
          text: "Если номер ушёл, но аккаунты пока у вас, действуйте быстро:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "В аккаунтах, где вы ещё авторизованы, сразу добавьте новый способ входа и смените пароль.",
            "В Telegram откройте список активных сеансов и завершите незнакомые устройства. Если облачный пароль ещё не включён, включите его сейчас.",
            "По игре, в которую не можете войти, напишите в её официальную поддержку. Player ID и чеки покупок могут помочь подтвердить, что аккаунт ваш.",
            "По вопросам о заказе GemPay пишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа.",
          ],
        },
        {
          t: "p",
          text: "Если заказ в GemPay не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Валюта, которая уже зачислена на счёт, не возвращается. Поэтому до оплаты сверяйте ID с ником, который показал бот. Подробнее — на странице <a href=\"https://www.gempay.uz/tolov-va-qaytarish\">оплата и возврат</a>.",
        },
        {
          t: "p",
          text: "Можно ли вернуть проданный номер через оператора, в этой статье не подтверждено. Уточните это у самого оператора.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More",
              href: "https://telegram.org/blog/ultimate-privacy-topics-2-0",
            },
            {
              label: "Fragment collectibles",
              href: "https://core.telegram.org/api/fragment",
            },
            {
              label: "auth.sentCodeTypeFragmentSms",
              href: "https://core.telegram.org/constructor/auth.sentCodeTypeFragmentSms",
            },
            {
              label: "Terms of Service",
              href: "https://fragment.com/terms",
            },
            {
              label: "+888 0088 8000",
              href: "https://fragment.com/number/88800888000",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Пропадут ли UC и алмазы в PUBG или Free Fire после продажи номера?",
          a: "Валюта числится на игровом аккаунте, а не на номере телефона, поэтому сама продажа SIM её не удаляет. Проблема возникает, если аккаунт можно восстановить через этот номер: тогда новый владелец может попытаться в него войти.",
        },
        {
          q: "Как поменять телефон в аккаунте Steam на новый?",
          a: "Делайте это, пока старая SIM ещё у вас: код подтверждения может прийти на прежний номер. Точный порядок уточните на официальной странице поддержки Steam и заранее убедитесь, что у вас есть доступ к почте.",
        },
        {
          q: "Нужен ли номер телефона, чтобы купить игровую валюту в GemPay?",
          a: "Нет. Для игры хватает Player ID (в Mobile Legends — User ID и Server ID), для Steam — логина, для услуг Telegram — @username. Пароль не спрашивают никогда.",
        },
        {
          q: "Telegram Premium привязан к старому номеру или к аккаунту?",
          a: "Подписка принадлежит аккаунту: GemPay подключает её по @username через механизм подарков Telegram. Если аккаунт остался на старом номере и в него вошёл кто-то другой, подписка останется там же.",
        },
        {
          q: "Можно ли привязать игровой аккаунт к номеру +888?",
          a: "По данным Fragment, такие номера не работают в других сервисах, если те сами их не поддерживают. Поддержка со стороны игр и Steam не подтверждена, поэтому используйте обычный номер или почту.",
        },
        {
          q: "Смогут ли тиммейты дарить мне Stars после продажи номера?",
          a: "Да, подарок отправляется на @username, а не на номер. После смены номера проверьте, что username на месте, и передайте его тиммейтам без опечаток.",
        },
        {
          q: "Что делать, если новый владелец просит переслать SMS-код?",
          a: "Не отправляйте никаких кодов — ими могут воспользоваться, чтобы зайти в один из ваших аккаунтов. Срочно поменяйте способ входа там, где ещё привязан этот номер, и проверьте активные сеансы в Telegram.",
        },
      ],
    },
  },
};

export default article;
