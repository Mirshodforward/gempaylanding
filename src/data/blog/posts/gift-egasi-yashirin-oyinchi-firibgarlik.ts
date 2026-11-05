// Avtoblogyoz yasagan maqola (2026-11-05). Niyat: Noyob Telegram gifti bor yoki jamoadoshiga sovg'a qilgan o'yinchi egalar yashirilgandan keyin o'yin chatlarida kelayotgan sotib olish takliflari va nikka username yozish xavfini 'telegram gift sotib olish taklifi firibgarlik' kabi so'zlar bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://core.telegram.org/api/gifts

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "gift-egasi-yashirin-oyinchi-firibgarlik",
  game: null,
  type: "trust",
  datePublished: "2026-11-05",
  dateModified: "2026-11-05",
  keywords: ["telegram gift sotib olish taklifi firibgarlik","telegram nft gift firibgarlik","gift sotib olaman deb yozishdi","telegram sovg'a sotish xavfsizmi","nikka username yozish xavfi","jamoadoshga telegram gift sovg'a qilish","telegram gift egasi yashirin","мошенничество telegram подарки покупка","предложение купить nft подарок телеграм скам","скам с подарками telegram","юзернейм в нике подарки телеграм"],
  locales: {
    uz: {
      title: "O‘yin chatida giftni sotib olish taklifi: firibgarlikni qanday tanish mumkin",
      metaTitle: "O‘yin chatida giftni sotib olish taklifi",
      metaDescription: "Har bir taklif aldov emas, lekin kod, parol, oldindan to‘lov yoki notanish «garant» bot so‘ralsa, bu firibgarlik — suhbatni darhol to‘xtating.",
      excerpt: "Har bir taklif aldov emas, lekin kod, parol, oldindan to‘lov yoki notanish «garant» bot so‘ralsa, bu firibgarlik — suhbatni darhol to‘xtating.",
      answer: "Har bir taklif aldov emas, lekin kod, parol, oldindan to‘lov yoki notanish «garant» bot so‘ralsa, bu firibgarlik — suhbatni darhol to‘xtating.",
      body: [
        {
          t: "h2",
          id: "giftingizni-sotib-olmoqchi-bolgan-notanish",
          text: "Giftingizni sotib olmoqchi bo‘lgan notanish odam firibgarmi?",
        },
        {
          t: "p",
          text: "Har doim ham emas. Noyob giftga chin dildan qiziqadigan xaridorlar bor. Lekin suhbatda kirish kodi, parol, oldindan to‘lov yoki tashqi havola paydo bo‘lsa, bu endi savdo emas. Shu daqiqada suhbatni to‘xtating.",
        },
        {
          t: "p",
          text: "O‘yinchilarga bunday xabarlar tez-tez keladi. Sababi oddiy: squad chatlari, klan guruhlari va turnir kanallari ochiq. Nik, profil rasmi va username u yerda hammaga ko‘rinadi. Telegram hujjatiga ko‘ra, profilda ko‘rsatilgan sovg‘ani barcha foydalanuvchilar ko‘ra oladi (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Demak, chatdagi istalgan odam giftingizni ko‘rib, sizga shaxsiy xabar yozishi mumkin.",
        },
        {
          t: "p",
          text: "Gift savdosi bilan shug‘ullanadigan Telegram kanallarida hozir bir kuzatuv tarqalmoqda: kolleksion sovg‘alar egalari yashirilgach, sotib olish takliflari kamaygan, ba’zi egalar esa xaridor topish uchun username’ini nikiga yozib qo‘ymoqda. Bu kanal postlaridagi gap, rasmiy manbada tekshirilmagan.",
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram sovg‘a egalarini hamma uchun majburan yashirgani, yangilanish sanasi va versiyasi bu maqolada tasdiqlanmagan. Giftingiz boshqalarga nimani ko‘rsatayotganini o‘z profilingizda tekshiring.",
        },
        {
          t: "h2",
          id: "gift-profilda-turganda-oyinchiga-qanday",
          text: "Gift profilda turganda o‘yinchiga qanday e’tibor tortadi?",
        },
        {
          t: "p",
          text: "Olingan sovg‘a bilan ikki narsa qilish mumkin: uni profilda ko‘rsatish yoki Telegram Stars’ga aylantirish. Sovg‘alar profilga mahkamlangan va mahkamlanmagan bo‘ladi. Profilda ko‘rsatilgani hammaga ochiq.",
        },
        {
          t: "p",
          text: "Bu yerda bir nozik joy bor. Maxfiylik sozlamasiga qarab, olingan sovg‘alar profilga avtomatik chiqishi mumkin. Masalan, jamoadosh turnir g‘alabasi sharafiga sizga noyob gift yubordi. Siz unga e’tibor ham bermadingiz, gift esa profilingizda paydo bo‘ldi. Bir-ikki kundan keyin notanish odamlardan «sotasanmi?» degan xabarlar kela boshlaydi.",
        },
        {
          t: "table",
          head: [
            "Holat",
            "Kim ko‘radi",
            "O‘yinchi uchun nima anglatadi",
          ],
          rows: [
            [
              "Gift profilda ko‘rsatilgan",
              "Barcha foydalanuvchilar",
              "Chatdagi har kim giftni ko‘radi va sizga yoza oladi: haqiqiy taklif ham, aldov ham shu yerdan keladi",
            ],
            [
              "Gift profilda ko‘rsatilmagan",
              "Hammaga ochiq ko‘rinish yo‘q",
              "Giftga qarab sizni topish qiyinlashadi, begona xabarlar odatda kamayadi",
            ],
            [
              "Avtomatik ko‘rsatish yoqilgan",
              "Sozlamaga qarab — hamma",
              "Yangi sovg‘a siz bilmagan holda ochiq bo‘lib qolishi mumkin",
            ],
            [
              "Yuboruvchi ismini yashirgan",
              "Boshqalar yuboruvchini ko‘rmaydi, oluvchi ko‘radi",
              "Sovg‘a qilgan jamoadosh begonalar e’tiboridan chetda qoladi",
            ],
            [
              "Username nikda yozilgan",
              "O‘yin chatidagi hamma, profilni ochmasdan ham",
              "Sizga to‘g‘ridan-to‘g‘ri yozish eng oson bo‘ladi",
            ],
          ],
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "nikka-username-yozish-qanchalik-xavfli",
          text: "Nikka username yozish qanchalik xavfli?",
        },
        {
          t: "p",
          text: "Nik «Sardor | @sardor_gifts» ko‘rinishida tursa, sizni o‘yin chatidan ham, gift sahifasidan ham bir bosishda topish mumkin. Bu xaridorga qulay, lekin firibgarga ham ochiq eshik. Bunday nik egasi sotishga tayyor ekanini o‘zi e’lon qilgan bo‘ladi, shuning uchun aldovchilar aynan shularni qidiradi.",
        },
        {
          t: "p",
          text: "Asosiy xavflar:",
        },
        {
          t: "list",
          items: [
            "<strong>Soxta «garant» va «escrow» botlar.</strong> «Pulni bot ushlab turadi, sen giftni yubor» deyishadi. Bot firibgarniki bo‘lsa, gift ham, pul ham yo‘qoladi.",
            "<strong>Fishing havolalar.</strong> «Giftni tekshirish» yoki «hamyonni ulash» sahifasi Telegram kirish oynasiga o‘xshatib yasaladi. U yerga kiritilgan kod akkauntingizni ochib beradi.",
            "<strong>Ijtimoiy muhandislik.</strong> Klan a’zosi, turnir admini yoki «Telegram xodimi» nomidan yozishadi va ishonch qozongach, kichik «iltimos» qilishadi.",
            "<strong>Kod so‘rash.</strong> «Tasdiqlash uchun SMS kelgan kodni yubor» degan har qanday so‘rov akkauntni o‘g‘irlashga urinish.",
          ],
        },
        {
          t: "p",
          text: "Agar baribir sotmoqchi bo‘lsangiz, xavfni kamaytiring:",
        },
        {
          t: "list",
          items: [
            "Nikka shaxsiy username’ingizni emas, faqat savdo uchun ishlatadigan alohida aloqa manzilini yozing.",
            "Maxfiylik sozlamalarida kimlar sizga yozishi va qo‘ng‘iroq qilishi mumkinligini ko‘rib chiqing.",
            "Profil rasmi va bio’dan telefon raqami, shahar, maktab yoki boshqa shaxsiy ma’lumotni olib tashlang.",
            "Savdo tugashi bilan username’ni nikdan o‘chiring.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Sovg‘ada egasini qayta ko‘rsatadigan rasmiy sozlama bor-yo‘qligi bu maqolada tasdiqlanmagan. «Shu tugmani yoqsang, xaridorlar seni ko‘radi» deb havola yuborganlarga ishonmang.",
        },
        {
          t: "h2",
          id: "sotib-olish-taklifidagi-qaysi-belgilar",
          text: "Sotib olish taklifidagi qaysi belgilar aldovni ko‘rsatadi?",
        },
        {
          t: "p",
          text: "Odatiy ssenariy shunday ko‘rinadi. Klan chatida tanish bo‘lmagan akkaunt yozadi: «Giftingni yaxshi narxga olaman, faqat bot orqali tekshirib olaylik». Havola ochiladi, Telegram’ga o‘xshash oyna telefon raqami va kodni so‘raydi. Kod kiritilgach, akkaunt boshqa odam qo‘lida bo‘ladi va giftlar ham shu yerdan olib ketiladi.",
        },
        {
          t: "p",
          text: "Quyidagi belgilardan bittasi bo‘lsa ham ehtiyot bo‘ling:",
        },
        {
          t: "list",
          items: [
            "<strong>Narx bozordan ancha baland, ustiga shoshiltirish.</strong> «Hozir bermasang, boshqasidan olaman» — sizni o‘ylashga qo‘ymaslik usuli. Shoshilmang: haqiqiy xaridor kutib turadi.",
            "<strong>Telegram kodi, ikki bosqichli tekshiruv paroli, sessiya fayli yoki o‘yin akkaunti paroli so‘raladi.</strong> Bular faqat sizga kerak. Darhol bloklang.",
            "<strong>Noma’lum bot yoki saytga havola.</strong> «Giftni tekshirib ko‘raylik», «hamyonni ula» — havolani ochmang, suhbatni yoping.",
            "<strong>«Avval sen yubor» talabi.</strong> Ko‘pincha soxta to‘lov skrinshoti bilan birga keladi. Pul tushganini skrinshotdan emas, faqat o‘z bank ilovangizdan tekshiring.",
            "<strong>«Telegram qo‘llab-quvvatlash xizmati» yoki admin niqobi.</strong> «Giftingiz bloklanadi, tasdiqlang» degan qo‘rqitish. Shikoyat qiling va bloklang.",
            "<strong>Jamoadosh nomidan yozishadi, lekin akkaunt boshqa.</strong> Nik va rasm bir xil, username esa bir harfga farq qiladi. Do‘stingizdan o‘yin ichida yoki ovozli chatda so‘rang.",
          ],
        },
        {
          t: "h2",
          id: "taklif-kelganda-qadamma-qadam-nima",
          text: "Taklif kelganda qadamma-qadam nima qilish kerak?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Profilni tekshiring",
              text: "Username’ni harfma-harf solishtiring, umumiy guruhlarga qarang. Jamoadosh nomidan yozilgan bo‘lsa, uni boshqa kanal orqali — o‘yin ichida yoki ovozli chatda tasdiqlang.",
            },
            {
              title: "Hech narsa bermang va ochmang",
              text: "Kod, parol, sessiya fayli yoki o‘yin login’i hech qanday savdoga kerak emas. Kelgan havolalarni bosmang.",
            },
            {
              title: "Savdoni faqat Telegram ilovasining o‘zida ko‘rinadigan vositalar orqali qiling",
              text: "Tashqi «garant» bot va saytlarga ishonmang. Fragment’ga akkaunt ulash qanday ishlashi haqida — <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment va jamoadoshga sovg‘a uchun akkaunt ulash</a>.",
            },
            {
              title: "Ko‘rinishni cheklang",
              text: "Giftni sotish niyatingiz bo‘lmasa, uni profildan olib qo‘ying va maxfiylik sozlamalarida sovg‘alarning avtomatik ko‘rsatilishini tekshiring.",
            },
            {
              title: "Bloklang, shikoyat qiling va ogohlantiring",
              text: "Firibgarni bloklagach, squad chatiga uning username’ini yozib qo‘ying — keyingi nishon jamoadoshingiz bo‘lishi mumkin.",
            },
          ],
        },
        {
          t: "h2",
          id: "jamoadoshga-gift-yuborganda-uni-ortiqcha",
          text: "Jamoadoshga gift yuborganda uni ortiqcha e’tibordan qanday saqlash mumkin?",
        },
        {
          t: "p",
          text: "Sovg‘a qilishning o‘zi xavfli emas. Muammo sovg‘a profilda hammaga ko‘rinib qolganda boshlanadi. Bir necha oddiy qadam jamoadoshingizni begona xabarlardan saqlaydi.",
        },
        {
          t: "list",
          items: [
            "<strong>Ismingizni yashiring.</strong> Yuborishda ismni yashirsangiz, sovg‘a profilda ko‘rsatilganda ham boshqalar sizni ko‘rmaydi. Jamoadosh esa kimdan kelganini baribir biladi.",
            "<strong>Oldindan so‘rang.</strong> Foydalanuvchi ayrim turdagi sovg‘alarni qabul qilishni maxfiylik sozlamalarida o‘chirib qo‘ygan bo‘lishi mumkin.",
            "<strong>Ogohlantiring.</strong> Sovg‘a sozlamaga qarab profilga avtomatik chiqishi mumkinligini ayting. Xohlasa, u sovg‘ani profilda ko‘rsatmasligi yoki Stars’ga aylantirishi mumkin.",
            "<strong>Maqsadga mos sovg‘a tanlang.</strong> Noyob gift — kolleksiya buyumi va e’tibor tortadi. Agar maqsad jamoadoshni rag‘batlantirish bo‘lsa, Stars yoki Premium ham yetarli bo‘lishi mumkin.",
          ],
        },
        {
          t: "p",
          text: `GemPay’da Stars va Premium uchun faqat @username kerak, akkauntga kirilmaydi. Stars bir buyurtmada 50 dan 10 000 tagacha olinadi: 1 tasi karta o‘tkazmasi yoki bot balansidan ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}. Premium 3 oyga ${som(premium(3), "uz")}, 6 oyga ${som(premium(6), "uz")}, 12 oyga ${som(premium(12), "uz")} turadi va Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi. Yodda tuting: Stars o‘yin valyutasiga aylanmaydi. Premium squad chatida nimaga yarashi haqida — <a href="/blog/telegram-premium-oyinchi-uchun">Telegram Premium o‘yinchiga nima beradi</a>.`,
        },
        {
          t: "h2",
          id: "akkaunt-yoki-gift-qoldan-ketsa",
          text: "Akkaunt yoki gift qo‘ldan ketsa, birinchi navbatda nima qilinadi?",
        },
        {
          t: "p",
          text: "Tez harakat qiling, lekin yana bir «yordamchi»ga ishonib qolmang.",
        },
        {
          t: "list",
          items: [
            "<strong>Faol seanslarni tekshiring.</strong> Telegram sozlamalaridagi qurilmalar bo‘limida notanish seanslarni chiqarib yuboring.",
            "<strong>Ikki bosqichli tekshiruv parolini almashtiring.</strong> Yoqilmagan bo‘lsa, hoziroq yoqing va tiklash pochtasini tekshiring.",
            "<strong>O‘yin akkauntlarini tekshiring.</strong> Ulardan biri Telegram yoki o‘sha pochta orqali tiklansa, kirish usulini yangilang. Nima so‘ralishi mumkin va nima so‘ralmasligi haqida — <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a>.",
            "<strong>Mish-mishlarni ajrating.</strong> Stiker yoki havola orqali buzish haqidagi gaplar bo‘yicha — <a href=\"/blog/oyin-guruhida-telegram-stiker-xavfi-himoya\">o‘yin guruhida stiker xavfi va himoya</a>.",
            "<strong>Gift o‘tib ketgan bo‘lsa, ehtiyot bo‘ling.</strong> O‘tkazilgan giftni qaytarish mexanizmi bu maqolada tasdiqlanmagan. «Pulga qaytarib beraman» deb yozadiganlar ko‘pincha ikkinchi aldovni boshlaydi.",
            "<strong>Jamoani ogohlantiring</strong> va firibgar akkauntiga shikoyat yuboring.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay parol yoki kirish kodi so‘ramaydi: Stars va Premium uchun faqat @username, o‘yinlar uchun faqat Player ID kerak. Buyurtma bo‘yicha savol bo‘lsa, faqat <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing. Boshqa akkauntlar «GemPay yordami» nomidan yozsa, bu aldov.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Klan chatidan kimdir giftimni sotib olaman deb yozdi, javob bersam bo‘ladimi?",
          a: "Javob berishning o‘zida xavf yo‘q, narx va shartlarni yozishmada muhokama qilavering. Kod, parol, havola yoki «avval sen yubor» talabi chiqqan zahoti suhbatni yopib, odamni bloklang.",
        },
        {
          q: "Giftni sotish uchun nikimga @username qo‘shsam, nima xavf bor?",
          a: "Sizni har qanday o‘yin chatidan bir bosishda topish mumkin bo‘ladi va aldovchilar aynan sotishga tayyor egalarni qidiradi. Zarur bo‘lsa, shaxsiy emas, alohida savdo akkauntini yozing va savdodan keyin olib tashlang.",
        },
        {
          q: "Xaridor «garant bot» orqali savdo qilamiz desa, ishonsa bo‘ladimi?",
          a: "Notanish odam tavsiya qilgan tashqi botga ishonmang: u xaridorning o‘ziga tegishli bo‘lishi mumkin. Savdoni Telegram ilovasining o‘zida ko‘rinadigan vositalar bilan cheklang.",
        },
        {
          q: "Turnirdan keyin jamoadoshga ismsiz gift yubordim — u meni taniydimi?",
          a: "Ha, oluvchi yuboruvchini ko‘radi. Ism faqat sovg‘a uning profilida ko‘rsatilganda begonalardan yashiriladi.",
        },
        {
          q: "Takliflar kelmasligi uchun giftni profildan olib qo‘ysam, u o‘chib ketadimi?",
          a: "Yo‘q, Telegram sovg‘alarni profilga mahkamlangan va mahkamlanmagan holatda saqlaydi. Olib qo‘yilgan gift sizda qoladi, faqat boshqalarga ochiq ko‘rinmaydi.",
        },
        {
          q: "Gift kanallarida «egalar endi yashirin» deyishyapti — bunga ishonsa bo‘ladimi?",
          a: "Bu kanal kuzatuvi, rasmiy manbada tasdiqlanmagan. Giftingiz qanday ko‘rinishini o‘z profilingiz va maxfiylik sozlamalarida tekshirgan ishonchliroq.",
        },
        {
          q: "GemPay orqali jamoadoshga Stars yoki Premium olib berganda parol so‘raladimi?",
          a: "Yo‘q, jamoadoshning @username’i yetarli va akkauntga kirilmaydi. Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali ulanadi.",
        },
      ],
    },
    ru: {
      title: "Предложение купить подарок в игровом чате: как распознать мошенника",
      metaTitle: "Предложение купить подарок в игровом чате",
      metaDescription: "Не каждое предложение — обман. Но если просят код, пароль, предоплату или незнакомого бота-«гаранта», это мошенничество: сразу прекращайте разговор.",
      excerpt: "Не каждое предложение — обман. Но если просят код, пароль, предоплату или незнакомого бота-«гаранта», это мошенничество: сразу прекращайте разговор.",
      answer: "Не каждое предложение — обман. Но если просят код, пароль, предоплату или незнакомого бота-«гаранта», это мошенничество: сразу прекращайте разговор.",
      body: [
        {
          t: "h2",
          id: "giftingizni-sotib-olmoqchi-bolgan-notanish",
          text: "Незнакомец хочет купить ваш подарок — это мошенник?",
        },
        {
          t: "p",
          text: "Не всегда. Есть покупатели, которым редкий подарок действительно интересен. Но если в переписке появились код входа, пароль, предоплата или внешняя ссылка, это уже не сделка. В этот момент прекращайте разговор.",
        },
        {
          t: "p",
          text: "Игрокам такие сообщения приходят часто. Причина простая: чаты сквадов, клановые группы и турнирные каналы открыты. Ник, аватар и username там видят все. По документации Telegram, подарок, выставленный в профиле, доступен для просмотра всем пользователям (<a href=\"https://core.telegram.org/api/gifts\" target=\"_blank\" rel=\"noopener\">Telegram Gifts</a>). Значит, любой участник чата может увидеть ваш подарок и написать вам в личку.",
        },
        {
          t: "p",
          text: "В Telegram-каналах о торговле подарками сейчас ходит одно наблюдение: после того как владельцев коллекционных подарков скрыли, предложений о покупке стало меньше, а некоторые владельцы вписывают username в ник, чтобы их нашли покупатели. Это слова из постов каналов, в официальных источниках они не проверены.",
        },
        {
          t: "note",
          tone: "info",
          text: "То, что Telegram принудительно скрыл владельцев подарков для всех, а также дата и версия обновления в этой статье не подтверждены. Что ваш подарок показывает другим, проверьте в собственном профиле.",
        },
        {
          t: "h2",
          id: "gift-profilda-turganda-oyinchiga-qanday",
          text: "Чем подарок в профиле привлекает внимание к игроку?",
        },
        {
          t: "p",
          text: "С полученным подарком можно сделать две вещи: показать его в профиле или превратить в Telegram Stars. Подарки бывают закреплёнными в профиле и незакреплёнными. Те, что выставлены в профиле, видны всем.",
        },
        {
          t: "p",
          text: "Здесь есть тонкий момент. В зависимости от настроек приватности полученные подарки могут появляться в профиле автоматически. Например, тиммейт прислал вам редкий подарок в честь победы на турнире. Вы даже не обратили внимания, а подарок уже висит в профиле. Через день-два от незнакомцев начинают приходить сообщения «продашь?».",
        },
        {
          t: "table",
          head: [
            "Ситуация",
            "Кто видит",
            "Что это значит для игрока",
          ],
          rows: [
            [
              "Подарок выставлен в профиле",
              "Все пользователи",
              "Любой в чате видит подарок и может вам написать: отсюда приходят и настоящие предложения, и обман",
            ],
            [
              "Подарок не выставлен в профиле",
              "Открытого показа для всех нет",
              "Найти вас по подарку сложнее, посторонних сообщений обычно меньше",
            ],
            [
              "Включён автопоказ",
              "В зависимости от настройки — все",
              "Новый подарок может оказаться открытым без вашего ведома",
            ],
            [
              "Отправитель скрыл имя",
              "Другие не видят отправителя, получатель видит",
              "Тиммейт, который сделал подарок, остаётся вне внимания посторонних",
            ],
            [
              "Username вписан в ник",
              "Все в игровом чате, даже не открывая профиль",
              "Написать вам напрямую проще всего",
            ],
          ],
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "nikka-username-yozish-qanchalik-xavfli",
          text: "Насколько опасно вписывать username в ник?",
        },
        {
          t: "p",
          text: "Если ник выглядит как «Сардор | @sardor_gifts», вас можно найти в один клик и из игрового чата, и со страницы подарка. Покупателю удобно, но и для мошенника это открытая дверь. Владелец такого ника сам объявил, что готов продавать, поэтому обманщики ищут именно таких.",
        },
        {
          t: "p",
          text: "Основные риски:",
        },
        {
          t: "list",
          items: [
            "<strong>Фальшивые боты-«гаранты» и «escrow».</strong> Говорят: «Деньги подержит бот, а ты отправляй подарок». Если бот принадлежит мошеннику, пропадут и подарок, и деньги.",
            "<strong>Фишинговые ссылки.</strong> Страницу «проверки подарка» или «подключения кошелька» делают похожей на окно входа в Telegram. Код, введённый там, открывает доступ к вашему аккаунту.",
            "<strong>Социальная инженерия.</strong> Пишут от имени соклановца, админа турнира или «сотрудника Telegram», а завоевав доверие, просят о маленьком «одолжении».",
            "<strong>Запрос кода.</strong> Любая просьба вида «пришли код из СМС для подтверждения» — попытка угнать аккаунт.",
          ],
        },
        {
          t: "p",
          text: "Если всё же хотите продать, снизьте риск:",
        },
        {
          t: "list",
          items: [
            "Вписывайте в ник не личный username, а отдельный контакт только для сделок.",
            "Проверьте в настройках приватности, кто может вам писать и звонить.",
            "Уберите из аватара и био номер телефона, город, школу и другие личные данные.",
            "Как только сделка закончена, удалите username из ника.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Есть ли официальная настройка, которая снова показывает владельца на подарке, в этой статье не подтверждено. Не верьте тем, кто присылает ссылку со словами «включи эту кнопку — и покупатели тебя увидят».",
        },
        {
          t: "h2",
          id: "sotib-olish-taklifidagi-qaysi-belgilar",
          text: "Какие признаки в предложении выдают обман?",
        },
        {
          t: "p",
          text: "Типичный сценарий выглядит так. В клановом чате пишет незнакомый аккаунт: «Возьму твой подарок по хорошей цене, только давай проверим через бота». Открывается ссылка, окно, похожее на Telegram, просит номер телефона и код. После ввода кода аккаунт уже в чужих руках, и подарки уводят оттуда же.",
        },
        {
          t: "p",
          text: "Насторожитесь, даже если заметили хотя бы один признак:",
        },
        {
          t: "list",
          items: [
            "<strong>Цена намного выше рынка, плюс спешка.</strong> «Не отдашь сейчас — куплю у другого» — способ не дать вам подумать. Не торопитесь: настоящий покупатель подождёт.",
            "<strong>Просят код Telegram, пароль двухэтапной проверки, файл сессии или пароль от игрового аккаунта.</strong> Это нужно только вам. Сразу блокируйте.",
            "<strong>Ссылка на неизвестного бота или сайт.</strong> «Давай проверим подарок», «подключи кошелёк» — ссылку не открывайте, разговор закрывайте.",
            "<strong>Требование «сначала отправь ты».</strong> Часто идёт вместе с поддельным скриншотом оплаты. Поступление денег проверяйте не по скриншоту, а только в своём банковском приложении.",
            "<strong>Маска «поддержки Telegram» или админа.</strong> Запугивание вроде «ваш подарок заблокируют, подтвердите». Пожалуйтесь и заблокируйте.",
            "<strong>Пишут от имени тиммейта, но аккаунт другой.</strong> Ник и аватар те же, а username отличается на одну букву. Уточните у друга в игре или в голосовом чате.",
          ],
        },
        {
          t: "h2",
          id: "taklif-kelganda-qadamma-qadam-nima",
          text: "Что делать по шагам, когда пришло предложение?",
        },
        {
          t: "steps",
          items: [
            {
              title: "Проверьте профиль",
              text: "Сверьте username побуквенно, посмотрите общие группы. Если пишут от имени тиммейта, подтвердите это через другой канал — в игре или в голосовом чате.",
            },
            {
              title: "Ничего не отдавайте и не открывайте",
              text: "Код, пароль, файл сессии или логин от игры не нужны ни для какой сделки. По присланным ссылкам не переходите.",
            },
            {
              title: "Проводите сделку только через инструменты, которые видны в самом приложении Telegram",
              text: "Внешним ботам-«гарантам» и сайтам не доверяйте. Как работает подключение аккаунта к Fragment — в статье <a href=\"/blog/fragment-verifikatsiyasiz-akkaunt-ulash-oyinchi\">Fragment и подключение аккаунта для подарка тиммейту</a>.",
            },
            {
              title: "Ограничьте видимость",
              text: "Если продавать подарок не собираетесь, уберите его из профиля и проверьте в настройках приватности автопоказ подарков.",
            },
            {
              title: "Заблокируйте, пожалуйтесь и предупредите",
              text: "Заблокировав мошенника, напишите его username в чат сквада — следующей целью может стать ваш тиммейт.",
            },
          ],
        },
        {
          t: "h2",
          id: "jamoadoshga-gift-yuborganda-uni-ortiqcha",
          text: "Как отправить подарок тиммейту и не привлечь к нему лишнего внимания?",
        },
        {
          t: "p",
          text: "Само по себе дарить не опасно. Проблемы начинаются, когда подарок оказывается в профиле на виду у всех. Несколько простых шагов защитят тиммейта от посторонних сообщений.",
        },
        {
          t: "list",
          items: [
            "<strong>Скройте своё имя.</strong> Если при отправке скрыть имя, другие не увидят вас, даже когда подарок выставлен в профиле. Тиммейт при этом всё равно знает, от кого он.",
            "<strong>Спросите заранее.</strong> Пользователь мог запретить получение отдельных типов подарков в настройках приватности.",
            "<strong>Предупредите.</strong> Скажите, что в зависимости от настроек подарок может автоматически появиться в профиле. При желании он может не показывать его или превратить в Stars.",
            "<strong>Выбирайте подарок под цель.</strong> Редкий подарок — коллекционная вещь и притягивает внимание. Если цель — поощрить тиммейта, может хватить Stars или Premium.",
          ],
        },
        {
          t: "p",
          text: `В GemPay для Stars и Premium нужен только @username, вход в аккаунт не требуется. Stars заказываются от 50 до 10 000 штук за раз: 1 звезда стоит ${som(STARS_UNIT_CARD, "ru")} при переводе с карты или с баланса бота и ${som(STARS_UNIT_ONLINE, "ru")} через Click или Uzum Bank. Premium стоит ${som(premium(3), "ru")} за 3 месяца, ${som(premium(6), "ru")} за 6 месяцев и ${som(premium(12), "ru")} за 12 месяцев и подключается через официальный механизм подарков Telegram. Учтите: Stars не превращаются в игровую валюту. Чем Premium полезен в чате сквада — в статье <a href="/blog/telegram-premium-oyinchi-uchun">что Telegram Premium даёт игроку</a>.`,
        },
        {
          t: "h2",
          id: "akkaunt-yoki-gift-qoldan-ketsa",
          text: "Аккаунт или подарок увели — что делать в первую очередь?",
        },
        {
          t: "p",
          text: "Действуйте быстро, но не доверяйтесь очередному «помощнику».",
        },
        {
          t: "list",
          items: [
            "<strong>Проверьте активные сеансы.</strong> В разделе устройств в настройках Telegram завершите незнакомые сеансы.",
            "<strong>Смените пароль двухэтапной проверки.</strong> Если он не включён, включите прямо сейчас и проверьте почту для восстановления.",
            "<strong>Проверьте игровые аккаунты.</strong> Если какой-то из них восстанавливается через Telegram или ту же почту, обновите способ входа. Что могут запросить, а что не должны, — в статье <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>.",
            "<strong>Отделяйте слухи от фактов.</strong> О разговорах про взлом через стикер или ссылку — в материале <a href=\"/blog/oyin-guruhida-telegram-stiker-xavfi-himoya\">риск стикеров в игровой группе и защита</a>.",
            "<strong>Если подарок уже передан, будьте осторожны.</strong> Механизм возврата переданного подарка в этой статье не подтверждён. Те, кто пишет «верну за деньги», часто начинают второй обман.",
            "<strong>Предупредите команду</strong> и отправьте жалобу на аккаунт мошенника.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "GemPay не запрашивает пароль или код входа: для Stars и Premium нужен только @username, для игр — только Player ID. С вопросами по заказу пишите только в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> с номером заказа. Если вам пишут другие аккаунты от имени «поддержки GemPay», это обман.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Gifts",
              href: "https://core.telegram.org/api/gifts",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Кто-то из кланового чата написал, что купит мой подарок. Можно отвечать?",
          a: "Сам ответ ничем не грозит, цену и условия можно обсуждать в переписке. Но как только появляется код, пароль, ссылка или требование «сначала отправь ты», закрывайте диалог и блокируйте человека.",
        },
        {
          q: "Чем рискую, если добавлю @username в ник, чтобы продать подарок?",
          a: "Вас смогут найти в один клик из любого игрового чата, а обманщики ищут как раз владельцев, готовых продавать. Если это нужно, укажите не личный, а отдельный аккаунт для сделок и уберите его после продажи.",
        },
        {
          q: "Покупатель предлагает провести сделку через «бота-гаранта». Можно доверять?",
          a: "Не доверяйте внешнему боту, которого посоветовал незнакомец: он может принадлежать самому покупателю. Ограничьтесь инструментами, которые видны в самом приложении Telegram.",
        },
        {
          q: "После турнира я отправил тиммейту подарок без имени — он узнает, что это я?",
          a: "Да, получатель видит отправителя. Имя скрывается только от посторонних, когда подарок выставлен в его профиле.",
        },
        {
          q: "Если убрать подарок из профиля, чтобы не приходили предложения, он удалится?",
          a: "Нет, Telegram хранит подарки как закреплённые в профиле и незакреплённые. Убранный подарок остаётся у вас, просто перестаёт быть виден всем.",
        },
        {
          q: "В каналах про подарки пишут, что «владельцы теперь скрыты». Этому можно верить?",
          a: "Это наблюдение каналов, в официальных источниках оно не подтверждено. Надёжнее проверить, как выглядит ваш подарок, в собственном профиле и настройках приватности.",
        },
        {
          q: "Нужен ли пароль, если покупать тиммейту Stars или Premium через GemPay?",
          a: "Нет, достаточно @username тиммейта, вход в аккаунт не выполняется. Premium подключается через официальный механизм подарков Telegram.",
        },
      ],
    },
  },
};

export default article;
