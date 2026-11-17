// Avtoblogyoz yasagan maqola (2026-11-17). Niyat: Klan chatida «Durov xalqaro qidiruvga qo‘yildi» xabarini ko‘rgan o‘zbekistonlik o‘yinchi Stars, Premium va UC donatini hozir olsa bo‘ladimi, klan chati va balansi saqlanadimi, deb «Durov qidiruv o‘yinchiga ta’siri» so‘rovi bilan qidiradi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/moderation
//   https://telegram.org/press
//   https://telegram.org/faq

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "durov-qidiruv-oyinchi-stars-donat-tasiri",
  game: null,
  type: "info",
  datePublished: "2026-11-17",
  dateModified: "2026-11-17",
  keywords: ["Durov qidiruv o‘yinchiga ta’siri","Durov xalqaro qidiruv Telegram Stars","Durov qidiruv UC donat","Telegram yopiladimi o‘yinchi","Telegram Stars balansi saqlanadimi","klan chati Telegram xavfsizmi","Telegram Premium hozir olsa bo‘ladimi","Дуров розыск Telegram Stars","Дуров международный розыск что будет с Telegram","Telegram заблокируют Узбекистан UC донат","Дуров ФСБ Telegram Premium"],
  locales: {
    uz: {
      title: "Durov qidiruvi haqidagi xabar: o‘yinchi Stars, Premium va UC olsinmi?",
      metaTitle: "Durov qidiruvi haqidagi xabar",
      metaDescription: "Ha, olsa bo‘ladi: Durov haqidagi xabar sabab donatni kechiktirishga rasmiy asos yo‘q. UC o‘yin akkauntida, Stars va Premium Telegram akkauntida saqlanadi.",
      excerpt: "Ha, olsa bo‘ladi: Durov haqidagi xabar sabab donatni kechiktirishga rasmiy asos yo‘q. UC o‘yin akkauntida, Stars va Premium Telegram akkauntida saqlanadi.",
      answer: "Ha, olsa bo‘ladi: Durov haqidagi xabar sabab donatni kechiktirishga rasmiy asos yo‘q. UC o‘yin akkauntida, Stars va Premium Telegram akkauntida saqlanadi.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-xabardan-keyin-donatni",
          text: "Klan chatidagi xabardan keyin donatni ushlab turish kerakmi?",
        },
        {
          t: "p",
          text: "Yo‘q, ushlab turishga rasmiy asos yo‘q. Telegram kanallarida tarqalgan xabarda Rossiya FSB’si Pavel Durovni «terrorizmga yordam berish»da ayblab, xalqaro qidiruvga qo‘ygani aytiladi. Biz tekshirgan rasmiy Telegram sahifalari bu da’voni na tasdiqlaydi, na rad etadi. Shuning uchun bu maqolada u fakt sifatida berilmaydi.",
        },
        {
          t: "p",
          text: "Postdagi boshqa gaplar ham tasdiqlanmagan. Masalan, Ukraina razvedkasiga tegishli botlar va kanallar bloklanmagani haqidagi da’vo tekshirilmagan. Telegram yoki Durovning ayblovga rasmiy javobi topilmadi. Fransiyadagi ishning hozirgi holati ham bu maqolada tasdiqlanmagan.",
        },
        {
          t: "p",
          text: "O‘yinchi uchun eng muhimi: Telegram’ning O‘zbekistonda ishlashi yoki akkauntlarda biror narsa o‘zgarishi haqida rasmiy bayonot yo‘q. UC, olmos, Stars va Premium’ni avvalgidek olish mumkin. Faqat bitta narsa o‘zgaradi: shov-shuvdan foydalanib pul so‘raydigan «sotuvchilar» klan chatlarida ko‘payadi.",
        },
        {
          t: "p",
          text: "Telegram haqiqatan vaqtincha uzilib qolsa nima bo‘lishi alohida maqolada yozilgan: <a href=\"/blog/telegram-uzilsa-oyin-donati-buyurtmasi\">Telegram ishlamasa donat nima bo‘ladi</a>.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "UC, olmos, Stars va Premium: qaysi biri Telegram’ga bog‘liq?",
        },
        {
          t: "p",
          text: "Bu to‘rttasi turli joyda saqlanadi. Shuning uchun Telegram haqidagi yangilik ularning har biriga turlicha taalluqli.",
        },
        {
          t: "table",
          head: [
            "Nima",
            "Qayerga tushadi",
            "Nima orqali beriladi",
            "Telegram yangiliklari ta’sir qiladimi",
          ],
          rows: [
            [
              "PUBG Mobile UC",
              "PUBG akkauntiga",
              "Player ID",
              "Yo‘q, UC o‘yin balansida turadi",
            ],
            [
              "Mobile Legends va Free Fire olmosi",
              "O‘yin akkauntiga",
              "Player ID",
              "Yo‘q, o‘yin ichida qoladi",
            ],
            [
              "Call of Duty Mobile CP",
              "O‘yin akkauntiga",
              "Player ID",
              "Yo‘q, o‘yin ichida qoladi",
            ],
            [
              "Telegram Stars",
              "Telegram akkauntidagi Stars balansiga",
              "@username",
              "Telegram ichida ishlaydi, lekin bu xabar sabab o‘zgarish e’lon qilinmagan",
            ],
            [
              "Telegram Premium",
              "Telegram akkauntiga obuna sifatida",
              "@username, Telegram’ning rasmiy sovg‘a mexanizmi orqali",
              "Telegram ichida ishlaydi, o‘zgarish e’lon qilinmagan",
            ],
          ],
        },
        {
          t: "p",
          text: "O‘yin valyutasi Telegram’ga umuman bog‘liq emas, bu yerda Telegram faqat buyurtma beriladigan joy. Valyuta tushgach, u PUBG, MLBB yoki CODM serverida saqlanadi.",
        },
        {
          t: "p",
          text: "Stars va Premium esa Telegram ichida ishlaydi. Shunday bo‘lsa ham, ularning holati shu xabar sabab o‘zgarishi hech qayerda aytilmagan.",
        },
        {
          t: "p",
          text: "Yana bir farq: Stars o‘yin valyutasiga aylanmaydi. Jamoadoshingizga UC kerak bo‘lsa, unga Stars emas, to‘g‘ridan-to‘g‘ri UC oling. Farqlar batafsil: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">qaysi valyuta nimaga kerak</a>.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "klan-yozishmalari-va-turnir-kanali",
          text: "Klan yozishmalari va turnir kanali yo‘qolib qolmaydimi?",
        },
        {
          t: "p",
          text: "Klan yozishmalari, turnir jadvallari va kanal postlari Telegram bulutida turadi. <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a> sahifasida yozilishicha, bulutdagi chatlar dunyoning turli joylaridagi bir nechta ma’lumot markazida saqlanadi. Ularni ochadigan shifr kalitlari esa qismlarga bo‘lib qo‘yilgan.",
        },
        {
          t: "p",
          text: "Rasmiy sahifalarda yana quyidagilar bor:",
        },
        {
          t: "list",
          items: [
            "Telegram’ni ishlab chiqadigan jamoa Dubayda ishlaydi (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
            "Durov ikki fuqarolikka ega: BAA va Fransiya (<a href=\"https://telegram.org/press\" target=\"_blank\" rel=\"noopener\">Telegram Press</a>).",
            "Telegram shu kungacha foydalanuvchi xabarlarining 0 baytini ham uchinchi tomonga, jumladan hukumatlarga bermaganini aytadi. Bu Telegram’ning o‘z bayonoti.",
          ],
        },
        {
          t: "p",
          text: "Bu gaplar ayblovga javob sifatida aytilmagan, ular ancha oldin e’lon qilingan. Ular faqat klan chatingiz qayerda saqlanishini tushunishga yordam beradi.",
        },
        {
          t: "p",
          text: "Amaliy maslahat: klan qoidalari, tarkib va turnir jadvalini kanalda pin qiling. Jamoadoshlarning Player ID ro‘yxatini esa telefoningizdagi alohida eslatmada ham saqlang. Shunda ulanish uzilsa ham, kimga qaysi akkauntga UC yoki olmos olish kerakligi qo‘lingizda bo‘ladi.",
        },
        {
          t: "h2",
          id: "moderatsiya-klan-kanaliga-tegishi-mumkinmi",
          text: "Moderatsiya klan kanaliga tegishi mumkinmi?",
        },
        {
          t: "p",
          text: "Postdagi ayblov moderatsiyaga taalluqli. Shuning uchun Telegram bu haqda o‘zi nima deyishini bilish foydali. <a href=\"https://telegram.org/moderation\" target=\"_blank\" rel=\"noopener\">Telegram Moderation Overview</a> sahifasida quyidagi ma’lumotlar bor:",
        },
        {
          t: "list",
          items: [
            "Zo‘ravonlikka chaqiriq va terrorchilik targ‘ibotiga Telegram’da o‘rin yo‘q.",
            "2026-yilda 30 403 376 ta guruh va kanal bloklangan.",
            "Ulardan 199 452 tasi terrorizmga aloqador jamoalar.",
            "Terror kontentini o‘chirish bo‘yicha hisobot 2016-yildan beri har kuni chiqariladi.",
            "ETIDAL bilan birga 200 milliondan ortiq terror kontenti o‘chirilgan, bu ishni Europol e’tirof etgan.",
          ],
        },
        {
          t: "p",
          text: "Bu raqamlar FSB da’vosini tasdiqlamaydi ham, rad etmaydi ham. Ular faqat Telegram moderatsiyasi nimaga qaratilganini ko‘rsatadi.",
        },
        {
          t: "p",
          text: "Oddiy klan kanalida qoidabuzar kontent bo‘lmasa, moderatsiyaning unga tegishiga sabab yo‘q. Muammo ko‘pincha adminlar e’tibor bermagan joydan chiqadi: begona reklama, notanish botlar, shubhali havolalar. Ularni vaqtida o‘chirib turing. Spam shikoyatlari qanday ishlashi haqida: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatida shubhali havola va spam cheklovi</a>.",
        },
        {
          t: "h2",
          id: "yangilik-ortidan-klan-chatida-qanday",
          text: "Yangilik ortidan klan chatida qanday aldovlar chiqadi?",
        },
        {
          t: "p",
          text: "Katta yangilik chiqqanda firibgarlar odamlarning xavotiridan foydalanadi. Klan chatida quyidagi takliflarga javob bermang:",
        },
        {
          t: "list",
          items: [
            "<strong>«Telegram yopiladi, Stars’ni tezda arzon sotamiz».</strong> Notanish odamdan olingan arzon Stars keyin balansdan yechib olinishi mumkin. Batafsil: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">arzon Stars va refund xavfi</a>.",
            "<strong>«Akkauntni zaxiralash uchun kodni yuboring».</strong> Telegram kirish kodi va ikki bosqichli tekshiruv paroli hech kimga berilmaydi, hatto klan lideriga ham.",
            "<strong>«Klanni yangi joyga ko‘chiramiz, mana bu botga kiring».</strong> Notanish bot orqali «ko‘chish» akkauntni boshqa odamga berib qo‘yish bilan tugashi mumkin.",
            "<strong>«Durovni qo‘llab-quvvatlash uchun Stars yoki Gram yig‘amiz».</strong> Bunday yig‘im rasmiy manbalarda yo‘q. O‘xshash holat: <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">Durov tug‘ilgan kuni aksiyasi</a>.",
            "<strong>«UC’ni hozir TON bilan oldindan to‘lab qo‘ying, keyin kech bo‘ladi».</strong> Shoshiltirish va oldindan to‘lov — aldovning eng ko‘p uchraydigan belgisi.",
          ],
        },
        {
          t: "p",
          text: "Yangilik qanchalik shov-shuvli bo‘lsa, «shoshiling» degan taklifga shunchalik ehtiyot bo‘ling.",
        },
        {
          t: "h2",
          id: "akkaunt-va-klan-kanalini-hozir",
          text: "Akkaunt va klan kanalini hozir qanday himoyalash mumkin?",
        },
        {
          t: "p",
          text: "Xabar rost bo‘ladimi, yo‘qmi, bu qadamlar har qanday holatda foyda beradi.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram’da ikki bosqichli tekshiruvni yoqing. <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a> sahifasiga ko‘ra, shundan keyin kirish uchun SMS kod ham, parol ham kerak bo‘ladi.",
            "Sozlamalardagi qurilmalar bo‘limini oching va o‘zingiz tanimagan seanslarni yoping.",
            "Klan kanaliga ikkinchi ishonchli admin qo‘shing, unga faqat kerakli huquqlarni bering. Shunda kanal bitta odamga bog‘lanib qolmaydi.",
            "O‘yin akkauntingiz qaysi kirish usuliga bog‘langanini tekshiring. U o‘zingiz nazorat qiladigan pochta yoki login orqali tiklanadigan bo‘lsin.",
            "Hech kimga kirish kodi, 2FA paroli yoki o‘yin parolini bermang. Donat uchun Player ID yoki @username yetarli.",
          ],
        },
        {
          t: "p",
          text: "Akkauntni himoyalash bo‘yicha batafsil reja: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 va akkaunt himoyasi</a>.",
        },
        {
          t: "h2",
          id: "gempayda-donat-uchun-nima-soraladi",
          text: "GemPay’da donat uchun nima so‘raladi va qancha turadi?",
        },
        {
          t: "p",
          text: "GemPay’da buyurtma <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a> orqali beriladi. GemPay mustaqil xizmat, Telegram yoki o‘yin ishlab chiquvchilari nomidan ish ko‘rmaydi.",
        },
        {
          t: "table",
          head: [
            "Xizmat",
            "Nima kerak",
            "Narx",
            "Qancha vaqtda",
          ],
          rows: [
            [
              "Telegram Stars",
              "Faqat @username, bir buyurtmada 50 dan 10 000 tagacha",
              `1 ta Stars — ${som(STARS_UNIT_CARD, "uz")} (karta yoki bot balansi), Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}`,
              "Bir necha soniyada",
            ],
            [
              "Telegram Premium",
              "@username, akkauntga kirilmaydi",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}`,
              "Bir necha soniyada faollashadi",
            ],
            [
              "UC, olmos, CP",
              "Faqat Player ID",
              "Botda ko‘rsatiladi",
              "1–5 daqiqada, avtomatik",
            ],
          ],
        },
        {
          t: "p",
          text: "Bilib qo‘yish kerak bo‘lgan tafsilotlar:",
        },
        {
          t: "list",
          items: [
            "Premium’ning 1 oylik tarifi yo‘q. Narx hamma to‘lov usulida bir xil.",
            "O‘yin valyutasida bot avval nikni tekshirib ko‘rsatadi. Nik to‘g‘ri bo‘lsagina to‘laysiz.",
            "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi. Visa va Mastercard qabul qilinmaydi.",
            "Xorijiy karta, VPN yoki kripto kerak emas. Parol hech qachon so‘ralmaydi.",
          ],
        },
        {
          t: "h3",
          text: "Jamoadoshga hozir sovg‘a qilish tartibi",
        },
        {
          t: "p",
          text: "Klandoshingizning tug‘ilgan kuni yoki turnirdagi g‘alabasi shu yangilikka to‘g‘ri kelgan bo‘lsa, sovg‘ani kechiktirish shart emas.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Nima berishni tanlang: o‘yinda ko‘p vaqt o‘tkazsa — UC yoki olmos, Telegram’da faol bo‘lsa — Premium yoki Stars.",
            "Undan shaxsiy xabarda Player ID yoki @username’ini so‘rang. Kod va parol so‘ramang, u ham bermasin.",
            "Botda tegishli bo‘limni ochib, ID yoki @username’ni kiriting.",
            "O‘yin valyutasida bot ko‘rsatgan nik jamoadoshingizniki ekanini solishtiring. Shubha bo‘lsa, to‘lamang va ID’ni qayta so‘rang.",
            "To‘lagach, jamoadoshdan o‘yin balansini yoki Telegram’dagi Stars va Premium’ni tekshirishini so‘rang.",
          ],
        },
        {
          t: "h2",
          id: "telegram-vaqtincha-ishlamay-qolsa-buyurtma",
          text: "Telegram vaqtincha ishlamay qolsa, buyurtma nima bo‘ladi?",
        },
        {
          t: "p",
          text: "Buyurtma payti ulanish uzilsa, qayta to‘lashga shoshilmang. Avval nima qayerda turishini tekshiring.",
        },
        {
          t: "note",
          tone: "info",
          text: "UC, olmos va CP Player ID bo‘yicha o‘yin akkauntiga tushadi. Shuning uchun birinchi navbatda o‘yindagi balansni ko‘ring.",
        },
        {
          t: "p",
          text: "Stars va Premium Telegram akkauntida ko‘rinadi. Ulanish tiklangach, Stars balansini va Premium belgisini tekshiring.",
        },
        {
          t: "p",
          text: "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Hisobga tushgan valyuta esa qaytarilmaydi. Shartlar <a href=\"/tolov-va-qaytarish\">to‘lov va qaytarish</a> sahifasida yozilgan.",
        },
        {
          t: "p",
          text: "Savol qolsa, qo‘llab-quvvatlash xizmatiga <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> orqali buyurtma raqamini ko‘rsatib yozing. Raqam bo‘lsa, buyurtma tezroq topiladi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Moderation Overview",
              href: "https://telegram.org/moderation",
            },
            {
              label: "Telegram Press Info",
              href: "https://telegram.org/press",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Durov haqidagi xabar sabab Stars balansim kuyib ketishi mumkinmi?",
          a: "Telegram bunday o‘zgarishni e’lon qilmagan. Xavf ko‘proq notanish odamdan arzonga olingan Stars’da bor, shuning uchun ularni ishonchli joydan oling.",
        },
        {
          q: "Klan kanalimizni shu ayblov tufayli yopib qo‘yishlari mumkinmi?",
          a: "Ayblov oddiy kanallarga ta’sir qilishi haqida rasmiy ma’lumot yo‘q. Moderatsiya qoidabuzar kontentga qaratilgan, shuning uchun kanalni spam va shubhali botlardan toza tuting.",
        },
        {
          q: "Jamoadoshga 12 oylik Premium olsam, pulim kuyib ketmaydimi?",
          a: `Bu xabar sabab Premium obunalari to‘xtatilishi haqida hech qanday e’lon yo‘q. Ikkilansangiz, qisqaroq muddatdan boshlang: 3 oylik Premium ${som(premium(3), "uz")} turadi.`,
        },
        {
          q: "PUBG’dagi UC’ga Telegram yangiliklari ta’sir qiladimi?",
          a: "Yo‘q, UC Player ID bo‘yicha PUBG akkauntiga tushadi va o‘yin balansida turadi. Telegram faqat buyurtma beriladigan joy.",
        },
        {
          q: "Chatda «Telegram yopiladi, Stars’ni arzon sotaman» deyishsa nima qilay?",
          a: "Javob bermang va oldindan pul yubormang, shoshiltirish aldovning odatiy belgisi. Xabarni klan adminiga ko‘rsating, u bunday postlarni o‘chirib tursin.",
        },
        {
          q: "Telegram ochilmay qolsa, GemPay buyurtmamni qanday tekshiraman?",
          a: "O‘yin valyutasini o‘yin ichidagi balansdan ko‘rasiz. Stars va Premium’ni ulanish tiklangach Telegram’da tekshiring, savol qolsa @StarsPaymeeSupport’ga buyurtma raqami bilan yozing.",
        },
      ],
    },
    ru: {
      title: "Новость о розыске Дурова: стоит ли геймеру покупать Stars, Premium и UC?",
      metaTitle: "Новость о розыске Дурова: стоит ли геймеру покупать Stars",
      metaDescription: "Да, можно: официальных причин откладывать донат из-за новости о Дурове нет. UC хранятся в игровом аккаунте, Stars и Premium — в аккаунте Telegram.",
      excerpt: "Да, можно: официальных причин откладывать донат из-за новости о Дурове нет. UC хранятся в игровом аккаунте, Stars и Premium — в аккаунте Telegram.",
      answer: "Да, можно: официальных причин откладывать донат из-за новости о Дурове нет. UC хранятся в игровом аккаунте, Stars и Premium — в аккаунте Telegram.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-xabardan-keyin-donatni",
          text: "Стоит ли откладывать донат после сообщения в чате клана?",
        },
        {
          t: "p",
          text: "Нет, официальных причин откладывать донат нет. В сообщении, которое разошлось по Telegram-каналам, говорится, что ФСБ России обвинила Павла Дурова в «содействии терроризму» и объявила его в международный розыск. Официальные страницы Telegram, которые мы проверили, это утверждение не подтверждают и не опровергают. Поэтому в этой статье мы не выдаём его за факт.",
        },
        {
          t: "p",
          text: "Остальные утверждения из поста тоже не подтверждены. Например, никто не проверил заявление о том, что боты и каналы украинской разведки не блокируются. Официального ответа Telegram или Дурова на обвинение мы не нашли. Подтверждений того, в каком состоянии сейчас дело во Франции, в этой статье тоже нет.",
        },
        {
          t: "p",
          text: "Для геймера важнее всего вот что: нет официальных заявлений о том, что Telegram изменит работу в Узбекистане или что-то изменится в аккаунтах. UC, алмазы, Stars и Premium можно покупать так же, как раньше. Меняется одно: на волне шумихи в чатах кланов становится больше «продавцов», которые просят деньги.",
        },
        {
          t: "p",
          text: "Что будет, если Telegram действительно временно перестанет работать, разобрано отдельно: <a href=\"/blog/telegram-uzilsa-oyin-donati-buyurtmasi\">что будет с донатом, если Telegram не работает</a>.",
        },
        {
          t: "h2",
          id: "uc-olmos-stars-va-premium",
          text: "UC, алмазы, Stars и Premium: что из этого зависит от Telegram?",
        },
        {
          t: "p",
          text: "Все четыре хранятся в разных местах. Поэтому новости о Telegram касаются каждого по-своему.",
        },
        {
          t: "table",
          head: [
            "Что",
            "Куда зачисляется",
            "По каким данным",
            "Влияют ли новости о Telegram",
          ],
          rows: [
            [
              "UC в PUBG Mobile",
              "На аккаунт PUBG",
              "Player ID",
              "Нет, UC лежат на игровом балансе",
            ],
            [
              "Алмазы Mobile Legends и Free Fire",
              "На игровой аккаунт",
              "Player ID",
              "Нет, остаются внутри игры",
            ],
            [
              "CP в Call of Duty Mobile",
              "На игровой аккаунт",
              "Player ID",
              "Нет, остаются внутри игры",
            ],
            [
              "Telegram Stars",
              "На баланс Stars в аккаунте Telegram",
              "@username",
              "Работают внутри Telegram, но изменений из-за этой новости не объявлено",
            ],
            [
              "Telegram Premium",
              "На аккаунт Telegram в виде подписки",
              "@username, через официальный механизм подарков Telegram",
              "Работает внутри Telegram, изменений не объявлено",
            ],
          ],
        },
        {
          t: "p",
          text: "Игровая валюта от Telegram вообще не зависит: здесь он служит только местом, где оформляется заказ. После зачисления валюта хранится на серверах PUBG, MLBB или CODM.",
        },
        {
          t: "p",
          text: "Stars и Premium работают внутри Telegram. Но и о том, что их статус изменится из-за этой новости, нигде не сказано.",
        },
        {
          t: "p",
          text: "Ещё одно отличие: Stars не превращаются в игровую валюту. Если тиммейту нужны UC, дарите ему именно UC, а не Stars. Подробнее о разнице: <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">какая валюта для чего нужна</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "klan-yozishmalari-va-turnir-kanali",
          text: "Не пропадут ли переписка клана и турнирный канал?",
        },
        {
          t: "p",
          text: "Переписка клана, турнирные сетки и посты канала хранятся в облаке Telegram. В <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a> сказано, что облачные чаты хранятся в нескольких дата-центрах в разных странах мира. Ключи для их расшифровки при этом разделены на части.",
        },
        {
          t: "p",
          text: "На официальных страницах есть и другие сведения:",
        },
        {
          t: "list",
          items: [
            "Команда разработчиков Telegram работает в Дубае (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
            "У Дурова двойное гражданство — ОАЭ и Франции (<a href=\"https://telegram.org/press\" target=\"_blank\" rel=\"noopener\">Telegram Press</a>).",
            "Telegram утверждает, что до сих пор не передал третьим лицам, включая правительства, ни одного байта переписки пользователей. Это заявление самого Telegram.",
          ],
        },
        {
          t: "p",
          text: "Эти слова не были ответом на обвинение — их опубликовали задолго до него. Они просто помогают понять, где хранится чат вашего клана.",
        },
        {
          t: "p",
          text: "Практический совет: закрепите в канале правила клана, состав и турнирную сетку. А список Player ID тиммейтов сохраните ещё и в отдельной заметке на телефоне. Тогда даже без связи вы будете знать, на какой аккаунт кому покупать UC или алмазы.",
        },
        {
          t: "h2",
          id: "moderatsiya-klan-kanaliga-tegishi-mumkinmi",
          text: "Может ли модерация задеть канал клана?",
        },
        {
          t: "p",
          text: "Обвинение в посте касается модерации, поэтому полезно знать, что о ней говорит сам Telegram. На странице <a href=\"https://telegram.org/moderation\" target=\"_blank\" rel=\"noopener\">Telegram Moderation Overview</a> приведены такие данные:",
        },
        {
          t: "list",
          items: [
            "Призывам к насилию и террористической пропаганде в Telegram не место.",
            "В 2026 году заблокировано 30 403 376 групп и каналов.",
            "Из них 199 452 — сообщества, связанные с терроризмом.",
            "Отчёты об удалении террористического контента публикуются ежедневно с 2016 года.",
            "Вместе с ETIDAL удалено более 200 миллионов единиц террористического контента, и эту работу отметил Europol.",
          ],
        },
        {
          t: "p",
          text: "Эти цифры не подтверждают и не опровергают заявление ФСБ. Они лишь показывают, против чего направлена модерация Telegram.",
        },
        {
          t: "p",
          text: "Если в обычном клановом канале нет контента, нарушающего правила, у модерации нет причин его трогать. Проблемы чаще возникают там, куда админы не смотрят: чужая реклама, незнакомые боты, подозрительные ссылки. Удаляйте их вовремя. Как работают жалобы на спам: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">подозрительная ссылка в чате клана и ограничения за спам</a>.",
        },
        {
          t: "h2",
          id: "yangilik-ortidan-klan-chatida-qanday",
          text: "Какие разводы появляются в чатах кланов после таких новостей?",
        },
        {
          t: "p",
          text: "Когда выходит громкая новость, мошенники играют на тревоге людей. Не отвечайте в чате клана на такие предложения:",
        },
        {
          t: "list",
          items: [
            "<strong>«Telegram закроют, срочно продаём Stars дёшево».</strong> Дешёвые Stars от незнакомца позже могут списать с баланса. Подробнее: <a href=\"/blog/arzon-stars-refund-sxemasi-oyinchi-xavfi\">дешёвые Stars и риск рефанда</a>.",
            "<strong>«Пришли код, чтобы сделать бэкап аккаунта».</strong> Код входа в Telegram и пароль двухэтапной проверки не сообщают никому — даже лидеру клана.",
            "<strong>«Переезжаем кланом в новое место, заходи в этого бота».</strong> «Переезд» через незнакомого бота может закончиться тем, что аккаунт перейдёт к другому человеку.",
            "<strong>«Собираем Stars или Gram в поддержку Дурова».</strong> В официальных источниках такого сбора нет. Похожий случай: <a href=\"/blog/durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi\">акция на день рождения Дурова</a>.",
            "<strong>«Оплати UC заранее в TON прямо сейчас, потом будет поздно».</strong> Спешка и предоплата — самые частые признаки обмана.",
          ],
        },
        {
          t: "p",
          text: "Чем громче новость, тем осторожнее относитесь к предложениям со словом «срочно».",
        },
        {
          t: "h2",
          id: "akkaunt-va-klan-kanalini-hozir",
          text: "Как защитить аккаунт и канал клана прямо сейчас?",
        },
        {
          t: "p",
          text: "Правдива новость или нет, эти шаги пригодятся в любом случае.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Включите в Telegram двухэтапную проверку. Согласно <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>, после этого для входа понадобится и SMS-код, и пароль.",
            "Откройте в настройках раздел «Устройства» и завершите сеансы, которые вы не узнаёте.",
            "Добавьте в канал клана второго надёжного админа и выдайте ему только нужные права. Так канал не будет зависеть от одного человека.",
            "Проверьте, к какому способу входа привязан ваш игровой аккаунт. Он должен восстанавливаться через почту или логин, которые контролируете вы.",
            "Никому не сообщайте код входа, пароль 2FA или пароль от игры. Для доната достаточно Player ID или @username.",
          ],
        },
        {
          t: "p",
          text: "Подробный план защиты аккаунта: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 и защита аккаунта</a>.",
        },
        {
          t: "h2",
          id: "gempayda-donat-uchun-nima-soraladi",
          text: "Что нужно для доната в GemPay и сколько это стоит?",
        },
        {
          t: "p",
          text: "Заказ в GemPay оформляется через <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>. GemPay — независимый сервис и не действует от имени Telegram или разработчиков игр.",
        },
        {
          t: "table",
          head: [
            "Услуга",
            "Что нужно",
            "Цена",
            "Сроки",
          ],
          rows: [
            [
              "Telegram Stars",
              "Только @username, от 50 до 10 000 штук за один заказ",
              `1 Stars — ${som(STARS_UNIT_CARD, "ru")} (карта или баланс бота), через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}`,
              "За несколько секунд",
            ],
            [
              "Telegram Premium",
              "@username, вход в аккаунт не нужен",
              `3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}`,
              "Активируется за несколько секунд",
            ],
            [
              "UC, алмазы, CP",
              "Только Player ID",
              "Указана в боте",
              "За 1–5 минут, автоматически",
            ],
          ],
        },
        {
          t: "p",
          text: "Что стоит знать:",
        },
        {
          t: "list",
          items: [
            "Тарифа Premium на 1 месяц нет. Цена одинакова при любом способе оплаты.",
            "Для игровой валюты бот сначала проверяет и показывает ник. Платите, только если ник верный.",
            "Оплата — UzCard, HUMO, Click, Uzum Bank или баланс бота. Visa и Mastercard не принимаются.",
            "Зарубежная карта, VPN или крипта не нужны. Пароль никогда не запрашивается.",
          ],
        },
        {
          t: "h3",
          text: "Как подарить донат тиммейту прямо сейчас",
        },
        {
          t: "p",
          text: "Если день рождения сокланового друга или его победа в турнире совпали с этой новостью, откладывать подарок не нужно.",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Выберите подарок: если он много играет — UC или алмазы, если активен в Telegram — Premium или Stars.",
            "Попросите у него в личке Player ID или @username. Не спрашивайте код и пароль, и пусть он их тоже не отправляет.",
            "Откройте нужный раздел в боте и введите ID или @username.",
            "Для игровой валюты сверьте, что ник, который показал бот, принадлежит вашему тиммейту. Если есть сомнения, не платите и уточните ID ещё раз.",
            "После оплаты попросите тиммейта проверить игровой баланс или Stars и Premium в Telegram.",
          ],
        },
        {
          t: "h2",
          id: "telegram-vaqtincha-ishlamay-qolsa-buyurtma",
          text: "Что будет с заказом, если Telegram временно перестанет работать?",
        },
        {
          t: "p",
          text: "Если связь оборвалась во время заказа, не спешите платить повторно. Сначала проверьте, что и где лежит.",
        },
        {
          t: "note",
          tone: "info",
          text: "UC, алмазы и CP зачисляются на игровой аккаунт по Player ID. Поэтому в первую очередь смотрите баланс в игре.",
        },
        {
          t: "p",
          text: "Stars и Premium видны в аккаунте Telegram. Когда связь восстановится, проверьте баланс Stars и значок Premium.",
        },
        {
          t: "p",
          text: "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. Зачисленная на счёт валюта при этом не возвращается. Условия описаны на странице <a href=\"/tolov-va-qaytarish\">оплата и возврат</a>.",
        },
        {
          t: "p",
          text: "Если остались вопросы, напишите в поддержку <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа. С номером заказ найдут быстрее.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram Moderation Overview",
              href: "https://telegram.org/moderation",
            },
            {
              label: "Telegram Press Info",
              href: "https://telegram.org/press",
            },
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Могут ли из-за новости о Дурове сгореть мои Stars?",
          a: "Telegram о таких изменениях не объявлял. Риск больше связан с дешёвыми Stars от незнакомцев, поэтому покупайте их в надёжном месте.",
        },
        {
          q: "Могут ли закрыть наш клановый канал из-за этого обвинения?",
          a: "Официальных данных о том, что обвинение как-то затронет обычные каналы, нет. Модерация направлена против контента, нарушающего правила, так что следите, чтобы в канале не было спама и подозрительных ботов.",
        },
        {
          q: "Если подарю тиммейту Premium на 12 месяцев, деньги не пропадут?",
          a: `Никаких объявлений о том, что подписки Premium приостановят из-за этой новости, нет. Если сомневаетесь, начните с короткого срока: Premium на 3 месяца стоит ${som(premium(3), "ru")}.`,
        },
        {
          q: "Влияют ли новости о Telegram на UC в PUBG?",
          a: "Нет, UC зачисляются на аккаунт PUBG по Player ID и хранятся на игровом балансе. Telegram — только место, где оформляется заказ.",
        },
        {
          q: "Что делать, если в чате пишут «Telegram закроют, продам Stars дёшево»?",
          a: "Не отвечайте и не отправляйте предоплату: давить на срочность — обычный приём мошенников. Покажите сообщение админу клана, чтобы он удалял такие посты.",
        },
        {
          q: "Как проверить заказ в GemPay, если Telegram не открывается?",
          a: "Игровую валюту можно увидеть на балансе внутри игры. Stars и Premium проверьте в Telegram, когда связь восстановится, а если вопросы останутся, напишите в @StarsPaymeeSupport с номером заказа.",
        },
      ],
    },
  },
};

export default article;
