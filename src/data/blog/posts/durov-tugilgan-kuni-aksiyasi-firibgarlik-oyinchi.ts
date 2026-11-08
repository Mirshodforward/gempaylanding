// Avtoblogyoz yasagan maqola (2026-11-08). Niyat: O‘zbekistondagi o‘yinchi klan yoki o‘yin chatida «Durov tug‘ilgan kuni munosabati bilan Stars, Premium yoki NFT sovg‘a tarqatilmoqda» degan xabarni ko‘rib, «durov tug‘ilgan kuni aksiyasi» deb qidiradi va bu haqiqatmi yoki firibgarlikmi, akkaunt va Stars’ni qanday himoyalashni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://telegram.org/faq

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "durov-tugilgan-kuni-aksiyasi-firibgarlik-oyinchi",
  game: null,
  type: "trust",
  datePublished: "2026-11-08",
  dateModified: "2026-11-08",
  keywords: ["durov tug‘ilgan kuni aksiyasi","durov tugilgan kuni stars","durov sovg‘a tarqatish firibgarlik","telegram stars tekin tarqatish aldov","durov nft sovga aksiya","klan chatida firibgarlik xabar","день рождения дурова раздача звезд","раздача telegram stars скам","дуров дарит подарки развод","бесплатные звезды телеграм обман","раздача nft подарков дуров"],
  locales: {
    uz: {
      title: "Durov tug‘ilgan kuni aksiyasi: Stars va NFT tarqatish rostmi yoki aldov?",
      metaTitle: "Durov tug‘ilgan kuni aksiyasi",
      metaDescription: "Durov tug‘ilgan kuni aksiyasi rasmiy Telegram manbalarida tasdiqlanmagan. Stars, Premium yoki NFT tarqatilyapti degan chat xabarini aldov deb biling.",
      excerpt: "Durov tug‘ilgan kuni aksiyasi rasmiy Telegram manbalarida tasdiqlanmagan. Stars, Premium yoki NFT tarqatilyapti degan chat xabarini aldov deb biling.",
      answer: "Durov tug‘ilgan kuni aksiyasi rasmiy Telegram manbalarida tasdiqlanmagan. Stars, Premium yoki NFT tarqatilyapti degan chat xabarini aldov deb biling.",
      body: [
        {
          t: "h2",
          id: "durov-tugilgan-kuni-munosabati-bilan",
          text: "Durov tug‘ilgan kuni munosabati bilan Telegram Stars yoki NFT tarqatyaptimi?",
        },
        {
          t: "p",
          text: "Yo‘q, bunday aksiya rasmiy manbalarda tasdiqlanmagan. <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>’da ham, ilovaning o‘zida ham Durovning tug‘ilgan kuniga bog‘langan Stars, Premium yoki NFT sovg‘a tarqatish haqida gap yo‘q. Klan yoki o‘yin chatida «Durov sovg‘a ulashyapti» degan xabarni ko‘rsangiz, uni firibgarlik deb hisoblang va havolani ochmang.",
        },
        {
          t: "p",
          text: "Mavzu Telegram kanallaridagi tabrik postlaridan chiqqan. Masalan, sovg‘alar haqidagi bir kanalda Durov tabriklangan va unga kolleksion NFT sovg‘a qilingani aytilgan. Bu postda Telegram nomidan hech narsa tarqatilishi va’da qilinmagan.",
        },
        {
          t: "p",
          text: "Firibgarlar esa aynan shunday sanalardan foydalanadi. Odamlar bayram kayfiyatida bo‘ladi, «sovg‘a» so‘ziga tezroq ishonadi va havolani o‘ylamasdan bosadi.",
        },
        {
          t: "p",
          text: "Rasmiy FAQ’ga ko‘ra, Telegram’ni Pavel Durov va uning akasi Nikolay qo‘llab-quvvatlaydi. Pavel loyihani moliyaviy va g‘oyaviy jihatdan qo‘llab-quvvatlaydi, Nikolay texnik tomonga hissa qo‘shadi. Shuning uchun faqat Pavelni yagona «yaratuvchi» deb ko‘rsatgan xabar ham to‘liq aniq emas.",
        },
        {
          t: "p",
          text: "Muhimi boshqa narsa: ularning ismi va surati qo‘yilgan akkaunt rasmiy e’lon manbai emas. Ism va suratni istalgan profilga qo‘yish mumkin.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-durov-sovgasi-xabari",
          text: "Klan chatidagi «Durov sovg‘asi» xabari qanday ko‘rinishda keladi?",
        },
        {
          t: "p",
          text: "Bunday xabarlar odatda quyidagi andozalardan biriga tushadi:",
        },
        {
          t: "list",
          items: [
            "«Durovning tug‘ilgan kuni! Birinchi kelganlarga Stars tarqatilmoqda — botga kiring».",
            "«NFT sovg‘angizni olish uchun hamyoningizni ulang».",
            "«Premium sovg‘a qilinadi, tasdiqlash uchun SMS’dagi kodni yuboring».",
            "«Stars’ni chiqarib olish uchun kichik komissiya to‘lang».",
            "«Klaningiz uchun maxsus sovg‘a, faqat bugun» — ostida notanish havola.",
          ],
        },
        {
          t: "p",
          text: "Eng xavfli holat — xabar notanishdan emas, jamoadoshdan kelganida. Klandagi tanish nik ishonch uyg‘otadi. Lekin uning akkaunti buzilgan va xabar uning nomidan tarqatilayotgan bo‘lishi mumkin.",
        },
        {
          t: "p",
          text: "Shubha tug‘ilsa, jamoadoshdan boshqa yo‘l bilan so‘rang: o‘yin ichidagi chatda yoki telefon orqali.",
        },
        {
          t: "p",
          text: "Bunday xabarlar ko‘pincha katta summalar va «yangiliklar» bilan shoshiltiradi. Masalan, kanal postlarida NFT sovg‘a qimmat narxga sotib olingani aytiladi, lekin bu sotuv tekshirilmagan. Wallet hamma uchun to‘liq ochilishi ham postda faqat tilak sifatida yozilgan, rasmiy e’lon emas. Chatdagi xabar buni «bugundan kuchga kirdi» deb ko‘rsatsa, bu sizni shoshiltirish usuli.",
        },
        {
          t: "note",
          tone: "info",
          text: "Tasdiqlanmagan: Durovning yoshi va tug‘ilgan sanasi, NFT sovg‘aning qancha pulga sotilgani va kimga sovg‘a qilingani, Wallet hamma uchun ochilishi. Bularni klan chatida fakt sifatida tarqatmang. Sana to‘g‘ri chiqqan taqdirda ham, bu «aksiya» haqiqiy ekanini isbotlamaydi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "haqiqiy-va-soxta-taklifni-qanday",
          text: "Haqiqiy va soxta taklifni qanday farqlash mumkin?",
        },
        {
          t: "p",
          text: "Quyidagi jadvalni chatdagi har qanday «sovg‘a» xabariga qo‘llang. Bitta belgi mos kelsa ham to‘xtang.",
        },
        {
          t: "table",
          head: [
            "Belgi",
            "Ishonchli manba yoki servis",
            "Chatdagi soxta «aksiya»",
          ],
          rows: [
            [
              "Kirish kodi yoki parol",
              "So‘ralmaydi",
              "«Tasdiqlash uchun» so‘raladi",
            ],
            [
              "Oldindan to‘lov",
              "Sovg‘a oluvchidan pul olinmaydi",
              "«Komissiya», «aktivatsiya», «soliq» uchun to‘lov",
            ],
            [
              "Bot",
              "Username’i tekshiriladi",
              "Bot qiyofasidagi oddiy akkaunt",
            ],
            [
              "Manba",
              "telegram.org yoki ilovaning o‘zi",
              "Forward qilingan post, noma’lum kanal",
            ],
            [
              "Vaqt bosimi",
              "Shoshiltirilmaydi",
              "«1 soat qoldi», «faqat birinchi kelganlarga»",
            ],
            [
              "Hamyon",
              "Kripto yuborish so‘ralmaydi",
              "«Hamyonni ulang», «tekshiruv uchun TON yuboring»",
            ],
          ],
        },
        {
          t: "p",
          text: "Bot haqiqiymi yoki bot qiyofasidagi oddiy akkauntmi — buni username bo‘yicha tekshirish <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">UC sotadigan «…game» bot haqidagi maqolada</a> batafsil yozilgan.",
        },
        {
          t: "p",
          text: "Ba’zan «aksiya» o‘rniga teskari taklif keladi: sizdagi sovg‘ani yuqori narxda sotib olishni va’da qilishadi. Bu sxemaning belgilari <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatidagi gift sotib olish takliflari</a> haqidagi maqolada ko‘rib chiqilgan.",
        },
        {
          t: "h2",
          id: "havolani-bosib-qoydim-yoki-kodni",
          text: "Havolani bosib qo‘ydim yoki kodni yubordim: nima qilish kerak?",
        },
        {
          t: "p",
          text: "Faqat havolani ochib, hech narsa kiritmagan bo‘lsangiz, xavf ancha past. Sahifani yoping va boshqa hech narsa bosmang.",
        },
        {
          t: "p",
          text: "Kod, parol yoki hamyon ma’lumotini kiritgan bo‘lsangiz, kechiktirmasdan shu tartibda harakat qiling:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Telegram sozlamalarida faol seanslar ro‘yxatini oching va o‘zingiz tanimagan barcha qurilmalarni chiqarib yuboring.",
            "Ikki bosqichli tekshiruv parolini yoqing, yoqilgan bo‘lsa — yangisiga almashtiring. Nega bu kodning o‘zidan kuchliroq himoya ekani <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 akkauntni himoyalash</a> maqolasida tushuntirilgan.",
            "Klan chatiga ogohlantirish yozing: akkauntingizdan kelgan havolalarni ochmaslikni so‘rang.",
            "O‘yin akkauntlaringiz Telegram yoki shu telefon raqami orqali tiklansa, ularga boshqa kirish usulini ulang va parollarni almashtiring.",
            "Firibgar xabarini «Report spam» orqali shikoyat qiling. Shikoyatdan keyin cheklov qanday qo‘yilishi <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatidagi shubhali havola</a> haqidagi maqolada bor.",
          ],
        },
        {
          t: "p",
          text: "«Komissiya» yoki TON yuborib qo‘ygan bo‘lsangiz, ortidan keladigan «pulingizni qaytarib beramiz» degan takliflarga ham ishonmang. Bunday «yordamchilar» ko‘pincha o‘sha sxemaning davomi bo‘ladi va yana to‘lov so‘raydi.",
        },
        {
          t: "h2",
          id: "stars-sovgalar-va-oyin-akkauntini",
          text: "Stars, sovg‘alar va o‘yin akkauntini qanday himoyalash mumkin?",
        },
        {
          t: "p",
          text: "Stars va sovg‘alar Telegram akkauntingizga bog‘langan. Akkaunt qo‘ldan ketsa, ular ham ketadi. Shuning uchun asosiy himoya alohida «Stars himoyasi» emas, akkauntning o‘z xavfsizligi.",
        },
        {
          t: "list",
          items: [
            "Kirish kodi, ikki bosqichli parol va hamyon kalit so‘zlarini hech kimga bermang. O‘zini «admin», «moderator» yoki «Durov jamoasi» deb tanishtirgan odamga ham.",
            "Sovg‘ani tashqi botga, «garant»ga yoki «tekshiruv uchun» notanish akkauntga o‘tkazmang.",
            "Ikki bosqichli tekshiruv paroli boshqa saytlarda takrorlanmasin.",
            "O‘yin donatida faqat Player ID beriladi, parol emas. Qaysi ma’lumot ochiq va qaysisi akkauntni yo‘qotishga olib kelishi <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a> maqolasida yozilgan.",
          ],
        },
        {
          t: "p",
          text: "Yana bir belgi: Stars o‘yin valyutasiga aylanmaydi. Shuning uchun «Durov sovg‘asidagi Stars’ni UC yoki olmosga almashtirib beramiz» degan taklif ham aldov.",
        },
        {
          t: "h2",
          id: "klan-admini-chatni-qanday-himoyalaydi",
          text: "Klan admini chatni qanday himoyalaydi?",
        },
        {
          t: "p",
          text: "Buzilgan bitta akkaunt butun klan chatiga havola tarqatishi mumkin. Admin bo‘lsangiz, oldindan bir nechta qoida kiritib qo‘ying:",
        },
        {
          t: "list",
          items: [
            "Chat qoidalariga «Sovg‘a, Stars yoki Premium tarqatish haqidagi havolalar o‘chiriladi» degan bandni qo‘shing.",
            "Shubhali xabarni o‘chiring, yuboruvchini vaqtincha chatdan chiqaring va u bilan boshqa yo‘l orqali bog‘laning.",
            "Akkaunti tiklangan jamoadoshni ikki bosqichli parolni yoqqanidan keyin qaytaring.",
            "Turnir sovrinlarini faqat siz yoki tasdiqlangan sardor e’lon qilsin. Shunda «sovg‘a» haqidagi begona xabar darhol ajralib turadi.",
          ],
        },
        {
          t: "p",
          text: "Ogohlantirish uchun tayyor matn: «Durov nomidan Stars, Premium yoki NFT tarqatilayotgani haqidagi xabarlar soxta. Havolani ochmang, kod va parol yubormang. Bunday xabar kelsa, adminga yozing».",
        },
        {
          t: "h2",
          id: "stars-yoki-premium-kerak-bolsa",
          text: "Stars yoki Premium kerak bo‘lsa, aksiya kutmasdan qayerdan olish mumkin?",
        },
        {
          t: "p",
          text: "«Tarqatish»ni kutish o‘rniga ishonchli yo‘l bor: o‘zingiz yoki jamoadoshingiz uchun sotib olish. GemPay — mustaqil xizmat, Telegram bilan hamkorlik da’vo qilmaydi. Buyurtma @Gempayuz_bot orqali so‘mda beriladi.",
        },
        {
          t: "p",
          text: `<strong>Telegram Stars.</strong> 1 ta yulduz karta o‘tkazmasi (UzCard, HUMO) yoki bot balansidan to‘lansa ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali onlayn to‘lovda ${som(STARS_UNIT_ONLINE, "uz")}. Bir buyurtmada 50 dan 10 000 tagacha olish mumkin, faqat @username kerak. Yulduzlar bir necha soniyada tushadi.`,
        },
        {
          t: "p",
          text: `<strong>Telegram Premium.</strong> 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. Narx barcha to‘lov usulida bir xil, 1 oylik tarif yo‘q. Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali @username bo‘yicha ulanadi va bir necha soniyada faollashadi. Akkauntga kirilmaydi.`,
        },
        {
          t: "p",
          text: "<strong>Jamoadoshga sovg‘a.</strong> Turnir g‘olibi yoki klan sardoriga sovg‘a qilmoqchi bo‘lsangiz, uning @username’ini kiritasiz — kod ham, parol ham so‘ralmaydi. Soxta «aksiya»ni ham shu farq fosh qiladi: haqiqiy sovg‘a uchun oluvchidan hech narsa talab qilinmaydi.",
        },
        {
          t: "p",
          text: "To‘lov UzCard, HUMO, Click, Uzum Bank yoki bot balansi orqali qilinadi. Visa va Mastercard qabul qilinmaydi; xorijiy karta, VPN yoki kripto kerak emas. Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi. Savol bo‘lsa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga buyurtma raqami bilan yozing. Bosqichlar <a href=\"/blog/telegram-stars-sotib-olish-gempay\">Telegram Stars’ni so‘mda sotib olish</a> qo‘llanmasida batafsil yozilgan.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Bugun Telegram’dan Durov tug‘ilgan kuni uchun Premium sovg‘a keladimi?",
          a: "Telegram’ning rasmiy sahifalarida bunday sovg‘a e’lon qilinmagan. Chatda shu haqda va’da bergan har qanday xabar yoki bot — shubhali.",
        },
        {
          q: "Jamoadoshim «Durov aksiyasi» havolasini yubordi — uning akkaunti buzilganmi?",
          a: "Bo‘lishi mumkin, shuning uchun havolani ochmang. Jamoadoshga o‘yin ichidagi chat yoki telefon orqali xabar bering: u seanslarini tekshirib, ikki bosqichli parolni yoqsin.",
        },
        {
          q: "«Stars olish uchun komissiya to‘lang» deyishsa nima qilay?",
          a: "Hech narsa to‘lamang. Sovg‘a oluvchidan pul so‘rash — aldovning eng ochiq belgisi. Xabarni «Report spam» orqali shikoyat qilib, suhbatni yoping.",
        },
        {
          q: "NFT sovg‘ani olish uchun hamyon ulash yoki TON yuborish kerakmi?",
          a: "Yo‘q. Notanish botga hamyon ulash yoki «tekshiruv» uchun kripto yuborish sovg‘a olishning sharti emas. Kalit so‘zlar yoki TON so‘ralsa, hamyoningizni bo‘shatishga urinishmoqda.",
        },
        {
          q: "Kodni yuborib qo‘ygan bo‘lsam, Stars va sovg‘alarim saqlanib qoladimi?",
          a: "Tez harakat qilsangiz, akkauntni saqlab qolish imkoni bor: begona seanslarni tugating va ikki bosqichli parolni yoqing yoki almashtiring. Akkauntga kirish yo‘qolsa, unga bog‘langan Stars va sovg‘alar ham u bilan birga ketadi.",
        },
        {
          q: "Klan adminiman — bunday xabarlar tarqalmasligi uchun nima qilay?",
          a: "Chat qoidalariga «sovg‘a» havolalari o‘chirilishini yozib qo‘ying. Shubhali xabarni darhol olib tashlang va yuboruvchini akkauntini himoyalaguncha chatdan vaqtincha chiqaring.",
        },
      ],
    },
    ru: {
      title: "Акция ко дню рождения Дурова: раздача Stars и NFT — правда или обман?",
      metaTitle: "Акция ко дню рождения Дурова",
      metaDescription: "Официальные источники Telegram не подтверждают акцию ко дню рождения Дурова. Сообщение в чате о раздаче Stars, Premium или NFT считайте обманом.",
      excerpt: "Официальные источники Telegram не подтверждают акцию ко дню рождения Дурова. Сообщение в чате о раздаче Stars, Premium или NFT считайте обманом.",
      answer: "Официальные источники Telegram не подтверждают акцию ко дню рождения Дурова. Сообщение в чате о раздаче Stars, Premium или NFT считайте обманом.",
      body: [
        {
          t: "h2",
          id: "durov-tugilgan-kuni-munosabati-bilan",
          text: "Раздаёт ли Telegram Stars или NFT в честь дня рождения Дурова?",
        },
        {
          t: "p",
          text: "Нет, официальные источники такую акцию не подтверждают. О раздаче Stars, Premium или NFT-подарков ко дню рождения Дурова нет ни слова ни в <a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>, ни в самом приложении. Если в чате клана или в игровом чате пишут «Дуров раздаёт подарки», считайте это мошенничеством и не открывайте ссылку.",
        },
        {
          t: "p",
          text: "Тема пошла из поздравительных постов в Telegram-каналах. Например, один канал о подарках поздравил Дурова и написал, что ему подарили коллекционный NFT-подарок. Раздачу чего-либо от имени Telegram этот пост не обещал.",
        },
        {
          t: "p",
          text: "Мошенники как раз пользуются такими датами. У людей праздничное настроение: слову «подарок» верят быстрее и жмут на ссылку не задумываясь.",
        },
        {
          t: "p",
          text: "Согласно официальному FAQ, Telegram поддерживают Павел Дуров и его брат Николай. Павел поддерживает проект финансово и идейно, Николай отвечает за технологическую часть. Поэтому сообщение, где единственным «создателем» назван только Павел, тоже не вполне точное.",
        },
        {
          t: "p",
          text: "Важнее другое: аккаунт с их именем и фотографией — не источник официальных объявлений. Имя и фото можно поставить в любой профиль.",
        },
        {
          t: "h2",
          id: "klan-chatidagi-durov-sovgasi-xabari",
          text: "Как выглядит сообщение «подарок от Дурова» в чате клана?",
        },
        {
          t: "p",
          text: "Обычно такие сообщения укладываются в один из шаблонов:",
        },
        {
          t: "list",
          items: [
            "«День рождения Дурова! Первым раздают Stars — заходите в бота».",
            "«Чтобы получить NFT-подарок, подключите кошелёк».",
            "«Дарим Premium, для подтверждения пришлите код из SMS».",
            "«Чтобы вывести Stars, оплатите небольшую комиссию».",
            "«Специальный подарок для вашего клана, только сегодня» — и ниже незнакомая ссылка.",
          ],
        },
        {
          t: "p",
          text: "Самый опасный случай — когда сообщение приходит не от незнакомца, а от тиммейта. Знакомый ник из клана вызывает доверие. Но его аккаунт могли взломать и рассылать сообщения от его имени.",
        },
        {
          t: "p",
          text: "Если есть сомнения, спросите тиммейта другим способом: во внутриигровом чате или по телефону.",
        },
        {
          t: "p",
          text: "Такие сообщения часто подгоняют крупными суммами и «новостями». Например, в постах каналов пишут, что NFT-подарок купили за большие деньги, но эта продажа не проверена. Полное открытие Wallet для всех в посте тоже упомянуто лишь как пожелание, а не как официальное объявление. Если сообщение в чате подаёт это как «вступило в силу сегодня», вас просто торопят.",
        },
        {
          t: "note",
          tone: "info",
          text: "Не подтверждено: возраст и дата рождения Дурова, за сколько продан NFT-подарок и кому его подарили, открытие Wallet для всех. Не распространяйте это в чате клана как факты. Даже если дата окажется верной, это не доказывает, что «акция» настоящая.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "haqiqiy-va-soxta-taklifni-qanday",
          text: "Как отличить настоящее предложение от фальшивого?",
        },
        {
          t: "p",
          text: "Прогоните через эту таблицу любое сообщение о «подарке» в чате. Если совпал хотя бы один признак — остановитесь.",
        },
        {
          t: "table",
          head: [
            "Признак",
            "Надёжный источник или сервис",
            "Фальшивая «акция» в чате",
          ],
          rows: [
            [
              "Код входа или пароль",
              "Не запрашивают",
              "Просят «для подтверждения»",
            ],
            [
              "Предоплата",
              "С получателя подарка денег не берут",
              "Оплата «комиссии», «активации», «налога»",
            ],
            [
              "Бот",
              "Username можно проверить",
              "Обычный аккаунт под видом бота",
            ],
            [
              "Источник",
              "telegram.org или само приложение",
              "Пересланный пост, неизвестный канал",
            ],
            [
              "Давление временем",
              "Не торопят",
              "«Остался 1 час», «только первым»",
            ],
            [
              "Кошелёк",
              "Отправлять крипту не просят",
              "«Подключите кошелёк», «отправьте TON для проверки»",
            ],
          ],
        },
        {
          t: "p",
          text: "Как по username понять, настоящий это бот или обычный аккаунт под видом бота, подробно разобрано в <a href=\"/blog/game-bilan-tugaydigan-donat-boti-tekshirish\">статье о боте «…game», который продаёт UC</a>.",
        },
        {
          t: "p",
          text: "Иногда вместо «акции» приходит обратное предложение: ваш подарок обещают выкупить по высокой цене. Признаки этой схемы описаны в статье о <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">предложениях купить гифт в игровом чате</a>.",
        },
        {
          t: "h2",
          id: "havolani-bosib-qoydim-yoki-kodni",
          text: "Перешёл по ссылке или отправил код: что делать?",
        },
        {
          t: "p",
          text: "Если вы только открыли ссылку и ничего не вводили, риск намного ниже. Закройте страницу и больше ничего не нажимайте.",
        },
        {
          t: "p",
          text: "Если вы ввели код, пароль или данные кошелька, действуйте без промедления в таком порядке:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте в настройках Telegram список активных сеансов и завершите все устройства, которые не узнаёте.",
            "Включите пароль двухэтапной проверки, а если он уже включён — смените на новый. Почему это защищает сильнее, чем сам код, объяснено в статье <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">о защите аккаунта +888</a>.",
            "Предупредите чат клана: попросите не открывать ссылки, пришедшие с вашего аккаунта.",
            "Если игровые аккаунты восстанавливаются через Telegram или этот номер телефона, привяжите к ним другой способ входа и смените пароли.",
            "Пожалуйтесь на сообщение мошенника через «Report spam». Как после жалобы вводится ограничение, рассказано в статье о <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">подозрительной ссылке в чате клана</a>.",
          ],
        },
        {
          t: "p",
          text: "Если вы уже отправили «комиссию» или TON, не верьте и последующим предложениям «вернуть деньги». Такие «помощники» часто оказываются продолжением той же схемы и снова просят оплату.",
        },
        {
          t: "h2",
          id: "stars-sovgalar-va-oyin-akkauntini",
          text: "Как защитить Stars, подарки и игровой аккаунт?",
        },
        {
          t: "p",
          text: "Stars и подарки привязаны к вашему аккаунту Telegram. Если аккаунт уведут, уйдут и они. Поэтому главная защита — не какая-то отдельная «защита Stars», а безопасность самого аккаунта.",
        },
        {
          t: "list",
          items: [
            "Никому не сообщайте код входа, пароль двухэтапной проверки и сид-фразу кошелька. Даже тому, кто представляется «админом», «модератором» или «командой Дурова».",
            "Не передавайте подарок стороннему боту, «гаранту» или незнакомому аккаунту «для проверки».",
            "Пароль двухэтапной проверки не должен повторяться на других сайтах.",
            "Для доната в игру нужен только Player ID, а не пароль. Какие данные открытые, а какие ведут к потере аккаунта, описано в статье о <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">безопасном пополнении игрового счёта</a>.",
          ],
        },
        {
          t: "p",
          text: "Ещё один признак: Stars не превращаются в игровую валюту. Значит, предложение «обменяем Stars из подарка Дурова на UC или алмазы» — тоже обман.",
        },
        {
          t: "h2",
          id: "klan-admini-chatni-qanday-himoyalaydi",
          text: "Как админу клана защитить чат?",
        },
        {
          t: "p",
          text: "Один взломанный аккаунт может разослать ссылку по всему чату клана. Если вы админ, заранее введите несколько правил:",
        },
        {
          t: "list",
          items: [
            "Добавьте в правила чата пункт: «Ссылки о раздаче подарков, Stars или Premium удаляются».",
            "Удаляйте подозрительное сообщение, временно исключайте отправителя из чата и связывайтесь с ним другим способом.",
            "Возвращайте тиммейта с восстановленным аккаунтом после того, как он включит пароль двухэтапной проверки.",
            "Пусть призы турниров объявляете только вы или подтверждённый капитан. Тогда постороннее сообщение о «подарке» сразу выделяется.",
          ],
        },
        {
          t: "p",
          text: "Готовый текст для предупреждения: «Сообщения о раздаче Stars, Premium или NFT от имени Дурова — фейк. Не открывайте ссылки, не отправляйте коды и пароли. Если получили такое сообщение, напишите админу».",
        },
        {
          t: "h2",
          id: "stars-yoki-premium-kerak-bolsa",
          text: "Где взять Stars или Premium, не дожидаясь акций?",
        },
        {
          t: "p",
          text: "Вместо того чтобы ждать «раздачу», есть надёжный путь — купить для себя или для тиммейта. GemPay — независимый сервис и не заявляет о партнёрстве с Telegram. Заказ оформляется в сумах через @Gempayuz_bot.",
        },
        {
          t: "p",
          text: `<strong>Telegram Stars.</strong> 1 звезда стоит ${som(STARS_UNIT_CARD, "ru")} при оплате переводом с карты (UzCard, HUMO) или с баланса бота и ${som(STARS_UNIT_ONLINE, "ru")} при онлайн-оплате через Click или Uzum Bank. За один заказ можно взять от 50 до 10 000 звёзд, нужен только @username. Звёзды приходят за несколько секунд.`,
        },
        {
          t: "p",
          text: `<strong>Telegram Premium.</strong> 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Цена одинакова при любом способе оплаты, тарифа на 1 месяц нет. Premium подключается по @username через официальный механизм подарков Telegram и активируется за несколько секунд. Вход в аккаунт не нужен.`,
        },
        {
          t: "p",
          text: "<strong>Подарок тиммейту.</strong> Хотите поздравить победителя турнира или капитана клана — вводите его @username, ни код, ни пароль не спрашивают. Именно эта разница и выдаёт фальшивую «акцию»: для настоящего подарка от получателя ничего не требуется.",
        },
        {
          t: "p",
          text: "Оплата — через UzCard, HUMO, Click, Uzum Bank или баланс бота. Visa и Mastercard не принимаются; зарубежная карта, VPN или крипта не нужны. Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней. С вопросами пишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>, указав номер заказа. Все шаги подробно описаны в инструкции <a href=\"/blog/telegram-stars-sotib-olish-gempay\">как купить Telegram Stars за сумы</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Telegram FAQ",
              href: "https://telegram.org/faq",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Придёт ли сегодня от Telegram Premium в подарок ко дню рождения Дурова?",
          a: "На официальных страницах Telegram такой подарок не объявлялся. Любое сообщение или бот в чате, которые это обещают, — повод насторожиться.",
        },
        {
          q: "Тиммейт прислал ссылку на «акцию Дурова» — его аккаунт взломали?",
          a: "Вполне возможно, поэтому ссылку не открывайте. Сообщите тиммейту через внутриигровой чат или по телефону: пусть проверит сеансы и включит пароль двухэтапной проверки.",
        },
        {
          q: "Пишут «оплатите комиссию, чтобы получить Stars» — что делать?",
          a: "Ничего не платите. Требование денег с получателя подарка — самый явный признак развода. Пожалуйтесь через «Report spam» и закройте переписку.",
        },
        {
          q: "Нужно ли подключать кошелёк или отправлять TON, чтобы получить NFT-подарок?",
          a: "Нет. Подключение кошелька к незнакомому боту или перевод крипты «для проверки» не являются условием получения подарка. Если просят сид-фразу или TON, кошелёк пытаются опустошить.",
        },
        {
          q: "Я уже отправил код — сохранятся ли мои Stars и подарки?",
          a: "Если действовать быстро, аккаунт можно отстоять: завершите чужие сеансы и включите или смените пароль двухэтапной проверки. Если доступ к аккаунту потерян, вместе с ним уходят и привязанные к нему Stars и подарки.",
        },
        {
          q: "Я админ клана — как не дать таким сообщениям расходиться?",
          a: "Пропишите в правилах чата, что ссылки на «подарки» удаляются. Подозрительное сообщение убирайте сразу, а отправителя временно исключайте, пока он не защитит свой аккаунт.",
        },
      ],
    },
  },
};

export default article;
