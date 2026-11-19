// Avtoblogyoz yasagan maqola (2026-11-19). Niyat: Klan chatida «Fragment'da endi USDT va USDC bilan to'lasa bo'ladi» degan xabarni ko'rgan o'zbekistonlik o'yinchi «fragment usdt stars oyinchi» deb qidiradi. U Stars, Premium yoki UC olish uchun stablecoin sotib olishi kerakmi, bu usul rasman ishlayaptimi va so'mdagi yo'ldan foydasi bormi, shuni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/stars/buy
//   https://fragment.com/premium/gift
//   https://core.telegram.org/api/stars
//   https://telegram.org/tos/third-party-payments

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "fragment-usdt-usdc-oyinchi-stars-donat",
  game: null,
  type: "info",
  datePublished: "2026-11-19",
  dateModified: "2026-11-19",
  keywords: ["fragment usdt stars oyinchi","fragment usdt bilan stars olish","fragment usdc premium","stars usdt bilan sotib olish","telegram stars kriptosiz so'mda","fragment tarmoq to'lovi","uc uchun usdt kerakmi","fragment usdt оплата stars","купить telegram stars за usdt fragment","fragment usdc premium оплата","звезды телеграм без крипты узбекистан"],
  locales: {
    uz: {
      title: "Klan chatida «Fragment’da endi USDT»: o‘yinchiga stablecoin kerakmi?",
      metaTitle: "Klan chatida «Fragment’da endi USDT»",
      metaDescription: "Yo‘q, stablecoin olish shart emas: Fragment’da USDT va USDC to‘lovi bor, lekin Stars va Premium @username, UC esa Player ID bo‘yicha so‘mda olinadi.",
      excerpt: "Yo‘q, stablecoin olish shart emas: Fragment’da USDT va USDC to‘lovi bor, lekin Stars va Premium @username, UC esa Player ID bo‘yicha so‘mda olinadi.",
      answer: "Yo‘q, stablecoin olish shart emas: Fragment’da USDT va USDC to‘lovi bor, lekin Stars va Premium @username, UC esa Player ID bo‘yicha so‘mda olinadi.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-xabar-fragmentda-usdt",
          text: "Klan chatidagi xabar: Fragment’da USDT rostdan bormi?",
        },
        {
          t: "p",
          text: "Ha, bor. Fragment’ning <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">Stars sotib olish sahifasida</a> GRAM (TON) bilan bir qatorda USDT va USDC ham ko‘rsatilgan. <a href=\"https://fragment.com/premium/gift\" target=\"_blank\" rel=\"noopener\">Premium sovg‘a qilish sahifasida</a> ham bu ikki stablecoin bor.",
        },
        {
          t: "p",
          text: "Fragment Telegram’ning o‘z hujjatida ham tilga olinadi. <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">Stars bo‘yicha API hujjatida</a> u Stars uchun to‘lov yo‘llaridan biri sifatida keltirilgan. Stablecoin esa shu yo‘ldagi yana bir to‘lov vositasi.",
        },
        {
          t: "p",
          text: "Chatga tushgan xabar odatda bundan ko‘proq narsani aytadi. Telegram kanallarida tarqalgan bir postda bu usul test versiyada qo‘shilgani, olib tashlangani va keyin qaytarilgani yozilgan. Buni tasdiqlaydigan rasmiy e’lon topilmadi. Usul qachon ishga tushgani ham rasmiy manbalarda ko‘rsatilmagan.",
        },
        {
          t: "p",
          text: "Shuning uchun post tarixiga emas, sahifada hozir nima turganiga qarang.",
        },
        {
          t: "h2",
          id: "uc-stars-yoki-premium-uchun",
          text: "UC, Stars yoki Premium uchun USDT sotib olish kerakmi?",
        },
        {
          t: "p",
          text: "Yo‘q. Fragment’da yangi to‘lov vositasi paydo bo‘lgani so‘mda olish yo‘lini yopmaydi. Har bir xarid bo‘yicha:",
        },
        {
          t: "list",
          items: [
            "<strong>UC, olmos, CP</strong> — o‘yin akkauntiga tushadi va Player ID bo‘yicha olinadi. Biz Fragment’ning faqat Stars va Premium bo‘limlarini ko‘rdik, o‘yin valyutasi u yerda sotilishi haqida ma’lumot yo‘q.",
            "<strong>Stars</strong> — @username bo‘yicha so‘mda olinadi. Hamyon, VPN yoki kripto kerak emas.",
            "<strong>Premium</strong> — xuddi shunday, @username bo‘yicha, so‘mda.",
            "<strong>«Stars olib, keyin UC qilaman» rejasi</strong> — ishlamaydi. Stars o‘yin valyutasiga aylanmaydi, ya’ni USDT bilan Stars olib, keyin ularni olmos yoki CP’ga almashtirib bo‘lmaydi.",
          ],
        },
        {
          t: "p",
          text: "Masalan, PUBG’da Royale Pass uchun UC kerak bo‘lsa, USDT ham, Stars ham bu yo‘lni qisqartirmaydi. Qaysi valyuta nimaga sarflanishi <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">Stars, UC va olmos farqi haqidagi maqolada</a> jadval bilan yozilgan. Hamyon umuman kerakmi degan savolga <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">Telegram Wallet o‘yinchiga kerakmi</a> maqolasida javob berganmiz.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "somdan-fragmentgacha-usdt-yoli-qanday",
          text: "So‘mdan Fragment’gacha: USDT yo‘li qanday zanjir?",
        },
        {
          t: "p",
          text: "Kartasida faqat so‘m bor o‘yinchi uchun Fragment’dagi USDT to‘lovi bitta tugma emas. Taxminan shunday zanjir chiqadi:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "So‘mni USDT yoki USDC’ga almashtirish. Buning uchun alohida xizmat kerak, uning kursi, komissiyasi va shartlari o‘ziga xos.",
            "Kripto hamyon ochish va uni Fragment’ga ulash. Fragment Premium sahifasida kripto hamyon orqali xarid qilishni aytadi.",
            "Ro‘yxatdagi tarmoqlardan birini tanlash va hamyondagi tanga aynan shu tarmoqda ekanini tekshirish.",
            "Oluvchini ko‘rsatish. Fragment <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">Stars</a>ni ham, <a href=\"https://fragment.com/premium/gift\" target=\"_blank\" rel=\"noopener\">Premium</a>ni ham o‘zingizga yoki boshqa odamga olishga ruxsat beradi. Qaysi maydonga nima yozilishini sahifaning o‘zida tekshiring.",
            "Tarmoq to‘lovini qo‘shib to‘lash.",
          ],
        },
        {
          t: "p",
          text: "Tarmoq to‘lovi narxdan alohida ko‘rsatiladi. Biz tekshirgan paytda Stars xaridida u $2.71 edi, bu summa o‘zgarib turadi.",
        },
        {
          t: "p",
          text: "Har bosqichda qo‘shimcha xarajat yoki xato ehtimoli bor: almashtirish kursi, noto‘g‘ri tarmoq, hamyon ulanishi. Hamyonni Fragment’ga ulash haqida <a href=\"/blog/fragment-yangi-telegram-hamyon-oyinchi-stars\">Fragment’dagi yangi Telegram hamyon</a> maqolasida yozganmiz.",
        },
        {
          t: "h2",
          id: "jamoadoshning-usdtsi-boshqa-tarmoqda-bolsa",
          text: "Jamoadoshning USDT’si boshqa tarmoqda bo‘lsa nima bo‘ladi?",
        },
        {
          t: "p",
          text: "USDT yoki USDC bitta tanga bo‘lsa ham, turli blokcheynlar orqali yuboriladi. Ularni tarmoq deyishadi. To‘lov oynasida tarmoq alohida ko‘rsatiladi, shuning uchun uni to‘lovdan oldin tekshirish kerak.",
        },
        {
          t: "p",
          text: "Sahifa tekshirilgan paytda Stars bo‘limida quyidagilar turgan edi:",
        },
        {
          t: "table",
          head: [
            "Valyuta",
            "Stars sahifasidagi tarmoqlar",
          ],
          rows: [
            [
              "GRAM",
              "TON",
            ],
            [
              "USDT",
              "ETH, TON, POL, BSC, TRX",
            ],
            [
              "USDC",
              "ETH, Base, POL",
            ],
          ],
        },
        {
          t: "p",
          text: "Premium bo‘limidagi tarmoqlar ro‘yxatini bu yerda yozmaymiz: manbalarda u bir xil ko‘rinmadi. To‘lov oynasining o‘ziga qarang.",
        },
        {
          t: "p",
          text: "Klanda ko‘p uchraydigan holat: jamoadosh «menda USDT bor, men to‘layman» deydi, uning tangasi TRX tarmog‘ida, to‘lov oynasida esa ETH tanlangan. Bunda to‘lov tushadimi, pul qaytadimi va qancha kutish kerak — Fragment’ning rasmiy qo‘llanmasida topilmadi. Shuning uchun taxmin qilmang: tarmoqni to‘lovdan oldin hamyonda ham, oynada ham solishtiring.",
        },
        {
          t: "p",
          text: "Ro‘yxat o‘zgarishi mumkin. Chatdagi skrinshot eskirgan bo‘lishi mumkin.",
        },
        {
          t: "h2",
          id: "fragmentda-usdt-bilan-yoki-gempayda",
          text: "Fragment’da USDT bilan yoki GemPay’da so‘mda: nimasi farq qiladi?",
        },
        {
          t: "table",
          head: [
            "Mezon",
            "Fragment (USDT yoki USDC)",
            "GemPay (so‘m)",
          ],
          rows: [
            [
              "To‘lov vositasi",
              "Stablecoin va kripto hamyon",
              "UzCard, HUMO, Click, Uzum Bank yoki bot balansi; Rossiyadan SBP",
            ],
            [
              "Nima kiritiladi",
              "Oluvchi va to‘g‘ri tarmoq",
              "Stars va Premium uchun @username, o‘yin uchun Player ID",
            ],
            [
              "Qo‘shimcha to‘lov",
              "Tarmoq to‘lovi, o‘zgaruvchan (tekshirilganda Stars xaridida $2.71)",
              "Narx so‘mda ko‘rsatiladi",
            ],
            [
              "Premium",
              "Sahifa ochilganda: 3 oy $11.99, 6 oy $15.99, 1 yil $28.99, ustiga stablecoin olish xarajati",
              `3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}; narx hamma to‘lov usulida bir xil`,
            ],
            [
              "Stars",
              "Narx sahifada ko‘rsatiladi va o‘zgarib turadi",
              `1 ta Stars: karta yoki balans orqali ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali ${som(STARS_UNIT_ONLINE, "uz")}; bir buyurtmada 50 dan 10 000 tagacha`,
            ],
            [
              "Jamoadoshga sovg‘a",
              "Stars va Premium boshqa odamga ham olinadi",
              "Stars va Premium jamoadoshning @username’i bo‘yicha",
            ],
            [
              "UC, olmos, CP",
              "Ko‘rilgan sahifalarda yo‘q",
              "Player ID bo‘yicha, nik tekshiriladi, 1–5 daqiqada tushadi",
            ],
            [
              "Muammo chiqsa",
              "Kripto to‘lovni qaytarish bo‘yicha rasmiy qoida topilmadi",
              "Buyurtma bajarilmasa, pul 3 ish kuni ichida to‘liq qaytariladi",
            ],
          ],
        },
        {
          t: "p",
          text: "Qaysi yo‘l arzonroq ekanini so‘mga hisoblab bermaymiz: natija dollar kursiga, almashtirish komissiyasiga va o‘sha kungi tarmoq to‘loviga bog‘liq. O‘zingiz solishtirmoqchi bo‘lsangiz, bir xil davr uchun shunday hisoblang:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Fragment’dagi dollar narxini o‘sha kuni sahifadan oling.",
            "Unga to‘lov oynasida ko‘rsatilgan tarmoq to‘lovini qo‘shing.",
            "So‘mni stablecoin’ga almashtirishda yo‘qotadigan summani qo‘shing — kurs farqi va xizmat komissiyasi.",
            "Chiqqan jamini GemPay’dagi so‘mdagi narx bilan solishtiring.",
          ],
        },
        {
          t: "p",
          text: "GemPay’da Visa va Mastercard qabul qilinmaydi. Mahalliy karta yoki Click, Uzum Bank yetadi, xorijiy karta kerak emas.",
        },
        {
          t: "h2",
          id: "hamyonida-usdt-bor-oyinchi-uchun",
          text: "Hamyonida USDT bor o‘yinchi uchun qachon mantiqiy?",
        },
        {
          t: "list",
          items: [
            "<strong>Stablecoin allaqachon hamyonda bo‘lsa.</strong> So‘mni almashtirish bosqichi tushib qoladi, lekin tarmoqlarni ajrata bilish shart.",
            "<strong>Bir yo‘la ko‘p Stars kerak bo‘lsa.</strong> Telegram hujjatida Fragment katta xaridlarga ham imkon berishi qayd etilgan.",
            "<strong>Kripto bilan ishlamaydigan o‘yinchiga mos emas.</strong> Faqat UC yoki olmos kerak bo‘lsa, bu yo‘l qo‘shimcha qadamlardan boshqa narsa bermaydi.",
          ],
        },
        {
          t: "p",
          text: "Yana bir savol — kimdan sotib olyapsiz. Telegram’ning <a href=\"https://telegram.org/tos/third-party-payments\" target=\"_blank\" rel=\"noopener\">uchinchi tomon to‘lovlari shartlarida</a> aytilishicha, ba’zi to‘lovlarda sotuvchi Telegram litsenziyasi asosida ishlaydigan vakolatli reseler bo‘lishi mumkin, Telegram esa bunday bitimlarda tomon hisoblanmaydi. To‘lovdan oldin sotuvchi kimligini va muammo bo‘lsa kimga yozishni aniqlab oling.",
        },
        {
          t: "p",
          text: "TON va hamyonlar o‘yinchiga umuman nima berishi <a href=\"/blog/ton-org-telegram-integratsiya-oyinchiga-nima\">ton.org haqidagi maqolada</a> tushuntirilgan.",
        },
        {
          t: "h2",
          id: "chatda-usdt-yubor-stars-qilib",
          text: "Chatda «USDT yubor, Stars qilib beraman» deyishsa",
        },
        {
          t: "p",
          text: "Fragment’da USDT paydo bo‘lgani notanish odamga stablecoin yuborishni xavfsiz qilmaydi. Hamyon manzili pul qayerga ketishini ko‘rsatadi, Stars kelishini emas.",
        },
        {
          t: "list",
          items: [
            "Telegram kodi, 2FA paroli, hamyon kaliti va seed so‘zlarni hech kimga bermang.",
            "Stars va Premium uchun faqat @username, o‘yin uchun faqat Player ID kerak. Boshqa narsa so‘rashsa, suhbatni to‘xtating.",
            "«Testda arzon», «faqat bugun» degan gaplar shoshiltirish usuli. Bunday aksiya haqida rasmiy e’lon topilmadi.",
            "«Avval USDT yubor, keyin tushiraman» degan oldindan to‘lov — xavf belgisi.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          text: "Notanish manzilga kripto yuborish xavfi TON bilan ham bir xil. Batafsil: <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">klan chatidagi TON manzilga to‘lash xavfi</a>.",
        },
        {
          t: "h2",
          id: "gempayda-stars-premium-va-uc",
          text: "GemPay’da Stars, Premium va UC so‘mda qanday olinadi?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "<a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>ni oching.",
            "Stars, Premium yoki kerakli o‘yinni tanlang.",
            "Stars va Premium uchun @username, o‘yin uchun Player ID kiriting. O‘yinda nik tekshirib ko‘rsatiladi, siz tasdiqlaganingizdan keyin to‘lov bo‘ladi. Parol so‘ralmaydi.",
            "UzCard, HUMO, Click, Uzum Bank yoki bot balansi bilan to‘lang.",
            "Natijani tekshiring. Stars bir necha soniyada tushadi, Premium Telegram’ning rasmiy sovg‘a mexanizmi orqali bir necha soniyada faollashadi, o‘yin valyutasi 1–5 daqiqada keladi.",
          ],
        },
        {
          t: "p",
          text: "Premium 3, 6 va 12 oyga olinadi, 1 oylik tarif yo‘q. Jamoadoshga ham uning @username’i bo‘yicha olsa bo‘ladi, uning akkauntiga hech kim kirmaydi.",
        },
        {
          t: "p",
          text: "Biror narsa kelmasa, <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>ga buyurtma raqami bilan yozing. GemPay — mustaqil xizmat, Telegram yoki o‘yin ishlab chiquvchilari nomidan ish ko‘rmaydi.",
        },
        {
          t: "p",
          text: "Stars bo‘limi qayerdaligi va qaysi xatolar pul yo‘qotishi <a href=\"/blog/telegram-stars-sotib-olish-gempay\">GemPay’da Telegram Stars sotib olish</a> maqolasida yozilgan.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Fragment (Buy Telegram Stars)",
              href: "https://fragment.com/stars/buy",
            },
            {
              label: "Buy Telegram Premium",
              href: "https://fragment.com/premium/gift",
            },
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Third-Party Payments and Authorized Resellers",
              href: "https://telegram.org/tos/third-party-payments",
            },
          ],
        },
      ],
      faq: [
        {
          q: "GemPay’da USDT yoki USDC bilan to‘lasam bo‘ladimi?",
          a: "Yo‘q, GemPay stablecoin qabul qilmaydi. To‘lov so‘mda: UzCard, HUMO, Click, Uzum Bank yoki bot balansi, Rossiyadan esa SBP.",
        },
        {
          q: "Hamyonimda USDT qolgan, undan klandoshimga Stars olsam bo‘ladimi?",
          a: "Fragment Stars’ni boshqa odamga ham olishga ruxsat beradi. Faqat tangangiz turgan tarmoq sahifadagi ro‘yxatda bo‘lishi kerak, ustiga tarmoq to‘lovi ham qo‘shiladi.",
        },
        {
          q: "Fragment’da UC yoki olmos ham sotiladimi?",
          a: "Biz ko‘rgan Fragment sahifalarida faqat Stars va Premium bor, o‘yin valyutasi yo‘q. UC, olmos va CP o‘yin akkauntiga Player ID bo‘yicha olinadi.",
        },
        {
          q: "USDT bilan olgan Stars’imni PUBG’da UC qilsam bo‘ladimi?",
          a: "Yo‘q, Stars Telegram akkauntida qoladi va o‘yin valyutasiga aylanmaydi. UC alohida, Player ID bo‘yicha olinadi.",
        },
        {
          q: "Chatda «USDT to‘lovi ertaga yopiladi, shoshiling» deyishyapti — rostmi?",
          a: "Bunday muddat haqida rasmiy e’lon topilmadi, to‘lov qachon ishga tushgani ham rasmiy manbada yo‘q. Shoshiltirishni xavf belgisi deb biling va sahifaning o‘ziga qarang.",
        },
        {
          q: "Fragment’dan olingan Premium bilan GemPay’dan olingan Premium’ning farqi bormi?",
          a: "Farq to‘lovda: Fragment’da narx dollarda va kripto hamyon kerak, GemPay’da so‘mda, karta bilan to‘lanadi. GemPay’da Premium @username bo‘yicha Telegram’ning sovg‘a mexanizmi orqali 3, 6 yoki 12 oyga ulanadi.",
        },
      ],
    },
    ru: {
      title: "«На Fragment теперь USDT» в чате клана: нужен ли игроку стейблкоин?",
      metaTitle: "«На Fragment теперь USDT» в чате клана",
      metaDescription: "Нет, покупать стейблкоин не нужно. На Fragment можно платить USDT и USDC, но Stars и Premium покупают в сумах по @username, а UC — по Player ID.",
      excerpt: "Нет, покупать стейблкоин не нужно. На Fragment можно платить USDT и USDC, но Stars и Premium покупают в сумах по @username, а UC — по Player ID.",
      answer: "Нет, покупать стейблкоин не нужно. На Fragment можно платить USDT и USDC, но Stars и Premium покупают в сумах по @username, а UC — по Player ID.",
      body: [
        {
          t: "h2",
          id: "klan-chatidagi-xabar-fragmentda-usdt",
          text: "Сообщение в чате клана: на Fragment правда есть USDT?",
        },
        {
          t: "p",
          text: "Да, есть. На <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">странице покупки Stars</a> рядом с GRAM (TON) указаны USDT и USDC. На <a href=\"https://fragment.com/premium/gift\" target=\"_blank\" rel=\"noopener\">странице подарка Premium</a> эти два стейблкоина тоже есть.",
        },
        {
          t: "p",
          text: "Fragment упоминается и в документации самого Telegram. В <a href=\"https://core.telegram.org/api/stars\" target=\"_blank\" rel=\"noopener\">документации API по Stars</a> он назван одним из способов оплаты Stars. Стейблкоин — просто ещё одно платёжное средство внутри этого способа.",
        },
        {
          t: "p",
          text: "В сообщениях, которые попадают в чат, обычно написано больше. В одном посте, который разошёлся по Telegram-каналам, говорилось, что оплату добавили в тестовой версии, потом убрали, а затем вернули. Официального объявления об этом найти не удалось. Когда оплата заработала, в официальных источниках тоже не сказано.",
        },
        {
          t: "p",
          text: "Поэтому не стоит опираться на историю из поста. Смотрите, что указано на странице сейчас.",
        },
        {
          t: "h2",
          id: "uc-stars-yoki-premium-uchun",
          text: "Нужно ли покупать USDT ради UC, Stars или Premium?",
        },
        {
          t: "p",
          text: "Нет. Новый способ оплаты на Fragment не отменяет покупку в сумах. Вот что это значит для каждой покупки:",
        },
        {
          t: "list",
          items: [
            "<strong>UC, алмазы, CP</strong> зачисляются на игровой аккаунт, для покупки нужен Player ID. Мы смотрели только разделы Stars и Premium на Fragment, данных о продаже там игровой валюты нет.",
            "<strong>Stars</strong> покупаются в сумах по @username. Кошелёк, VPN и криптовалюта не нужны.",
            "<strong>Premium</strong> покупается так же: по @username и в сумах.",
            "<strong>План «куплю Stars, потом переведу в UC»</strong> не сработает. Stars не превращаются в игровую валюту, поэтому купить Stars за USDT и обменять их на алмазы или CP нельзя.",
          ],
        },
        {
          t: "p",
          text: "Например, если для Royale Pass в PUBG нужны UC, ни USDT, ни Stars не сократят путь. На что тратится каждая валюта, мы показали в таблице в <a href=\"/blog/telegram-stars-yoki-oyin-valyutasi\">статье о разнице между Stars, UC и алмазами</a>. Нужен ли кошелёк вообще, разобрали в материале <a href=\"/blog/telegram-wallet-oyinchiga-kerakmi\">«Нужен ли игроку Telegram Wallet»</a>.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "somdan-fragmentgacha-usdt-yoli-qanday",
          text: "От сумов до Fragment: из каких шагов состоит путь через USDT?",
        },
        {
          t: "p",
          text: "Если на карте у игрока только сумы, оплата USDT на Fragment — это не одна кнопка, а примерно такая цепочка:",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Обменять сумы на USDT или USDC. Для этого нужен отдельный сервис, у которого свой курс, комиссия и условия.",
            "Создать криптокошелёк и подключить его к Fragment. На странице Premium Fragment прямо говорит о покупке через криптокошелёк.",
            "Выбрать сеть из списка и проверить, что монеты в кошельке лежат именно в этой сети.",
            "Указать получателя. Fragment позволяет купить и <a href=\"https://fragment.com/stars/buy\" target=\"_blank\" rel=\"noopener\">Stars</a>, и <a href=\"https://fragment.com/premium/gift\" target=\"_blank\" rel=\"noopener\">Premium</a> себе или другому человеку. Что вписывать в каждое поле, проверьте на самой странице.",
            "Оплатить покупку вместе с сетевой комиссией.",
          ],
        },
        {
          t: "p",
          text: "Сетевая комиссия показывается отдельно от цены. Когда мы проверяли страницу, при покупке Stars она составляла $2.71, и эта сумма меняется.",
        },
        {
          t: "p",
          text: "На каждом шаге можно переплатить или ошибиться: курс обмена, неверная сеть, подключение кошелька. Как подключать кошелёк к Fragment, мы писали в статье про <a href=\"/blog/fragment-yangi-telegram-hamyon-oyinchi-stars\">новый Telegram-кошелёк на Fragment</a>.",
        },
        {
          t: "h2",
          id: "jamoadoshning-usdtsi-boshqa-tarmoqda-bolsa",
          text: "Выбор сети: где игроки ошибаются?",
        },
        {
          t: "p",
          text: "USDT и USDC — это одна и та же монета, но отправлять её можно через разные блокчейны. Их называют сетями. На Fragment сеть выбирает сам плательщик.",
        },
        {
          t: "p",
          text: "Когда мы проверяли страницу, в разделе Stars были такие варианты:",
        },
        {
          t: "table",
          head: [
            "Валюта",
            "Сети на странице Stars",
          ],
          rows: [
            [
              "GRAM",
              "TON",
            ],
            [
              "USDT",
              "ETH, TON, POL, BSC, TRX",
            ],
            [
              "USDC",
              "ETH, Base, POL",
            ],
          ],
        },
        {
          t: "p",
          text: "Список сетей для раздела Premium здесь не приводим: в разных источниках он выглядел по-разному. Смотрите прямо в окне оплаты.",
        },
        {
          t: "p",
          text: "Типичная ситуация: товарищ по команде пишет «у меня есть USDT». Монеты у него в сети TRX, а в окне оплаты выбрана ETH. Дойдёт ли платёж, вернутся ли деньги и сколько ждать, в официальных инструкциях Fragment найти не удалось. Поэтому не угадывайте: перед оплатой сверьте сеть и в кошельке, и в окне оплаты.",
        },
        {
          t: "p",
          text: "Список может измениться, а скриншот из чата — устареть.",
        },
        {
          t: "h2",
          id: "fragmentda-usdt-bilan-yoki-gempayda",
          text: "USDT на Fragment или сумы в GemPay: в чём разница?",
        },
        {
          t: "table",
          head: [
            "Критерий",
            "Fragment (USDT или USDC)",
            "GemPay (сумы)",
          ],
          rows: [
            [
              "Чем платить",
              "Стейблкоин и криптокошелёк",
              "UzCard, HUMO, Click, Uzum Bank или баланс бота; из России — СБП",
            ],
            [
              "Что указывать",
              "Получателя и правильную сеть",
              "Для Stars и Premium — @username, для игр — Player ID",
            ],
            [
              "Доплата",
              "Сетевая комиссия, она меняется (при проверке для Stars было $2.71)",
              "Цена указана в сумах",
            ],
            [
              "Premium",
              "На момент открытия страницы: 3 мес. — $11.99, 6 мес. — $15.99, 1 год — $28.99, плюс расходы на покупку стейблкоина",
              `3 мес. — ${som(premium(3), "ru")}, 6 мес. — ${som(premium(6), "ru")}, 12 мес. — ${som(premium(12), "ru")}; цена одинакова при любом способе оплаты`,
            ],
            [
              "Stars",
              "Цена указана на странице и меняется",
              `1 Stars: картой или с баланса — ${som(STARS_UNIT_CARD, "ru")}, через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}; в одном заказе от 50 до 10 000`,
            ],
            [
              "Подарок товарищу по команде",
              "Stars и Premium можно купить и другому человеку",
              "Stars и Premium по @username товарища",
            ],
            [
              "UC, алмазы, CP",
              "На просмотренных страницах нет",
              "По Player ID с проверкой ника, зачисление за 1–5 минут",
            ],
            [
              "Если что-то пошло не так",
              "Официальных правил возврата криптоплатежей не нашли",
              "Если заказ не выполнен, деньги полностью возвращаются в течение 3 рабочих дней",
            ],
          ],
        },
        {
          t: "p",
          text: "Какой путь дешевле в сумах, мы не считаем. Результат зависит от курса доллара, комиссии за обмен и сетевой комиссии в конкретный день.",
        },
        {
          t: "p",
          text: "Visa и Mastercard GemPay не принимает. Хватит местной карты, Click или Uzum Bank, зарубежная карта не нужна.",
        },
        {
          t: "h2",
          id: "hamyonida-usdt-bor-oyinchi-uchun",
          text: "Когда это имеет смысл игроку, у которого уже есть USDT?",
        },
        {
          t: "list",
          items: [
            "<strong>Стейблкоин уже лежит в кошельке.</strong> Тогда обменивать сумы не придётся, но в сетях разбираться всё равно нужно.",
            "<strong>Нужно сразу много Stars.</strong> В документации Telegram сказано, что Fragment подходит и для крупных покупок.",
            "<strong>Если вы не работаете с криптовалютой, этот путь не для вас.</strong> Когда нужны только UC или алмазы, он добавит лишних шагов и больше ничего не даст.",
          ],
        },
        {
          t: "p",
          text: "Важно и то, у кого вы покупаете. В <a href=\"https://telegram.org/tos/third-party-payments\" target=\"_blank\" rel=\"noopener\">условиях Telegram о сторонних платежах</a> сказано, что при некоторых платежах продавцом может быть авторизованный реселлер, который работает по лицензии Telegram. Telegram в таких сделках стороной не считается. До оплаты узнайте, кто продавец и куда писать, если возникнет проблема.",
        },
        {
          t: "p",
          text: "Что TON и кошельки вообще дают игроку, объяснили в <a href=\"/blog/ton-org-telegram-integratsiya-oyinchiga-nima\">статье про ton.org</a>.",
        },
        {
          t: "h2",
          id: "chatda-usdt-yubor-stars-qilib",
          text: "Если в чате пишут «скинь USDT, сделаю Stars»",
        },
        {
          t: "p",
          text: "USDT на Fragment не делает безопасным перевод стейблкоина незнакомцу. Адрес кошелька показывает, куда уйдут деньги, но не гарантирует, что Stars придут.",
        },
        {
          t: "list",
          items: [
            "Код от Telegram, пароль 2FA, ключ кошелька и seed-фразу никому не сообщайте.",
            "Для Stars и Premium нужен только @username, для игры — только Player ID. Если просят что-то ещё, прекращайте разговор.",
            "Фразы «на тесте дешевле» и «только сегодня» нужны, чтобы вас поторопить. Официальных объявлений о таких акциях найти не удалось.",
            "Предоплата по схеме «сначала скинь USDT, потом зачислю» — признак опасности.",
          ],
        },
        {
          t: "note",
          tone: "warn",
          text: "Перевод криптовалюты на незнакомый адрес так же рискован, как и с TON. Подробнее — в статье <a href=\"/blog/ton-manzilga-donat-tolovi-oyinchi-xavfi\">о риске оплаты на TON-адрес из чата клана</a>.",
        },
        {
          t: "h2",
          id: "gempayda-stars-premium-va-uc",
          text: "Как купить Stars, Premium и UC в сумах в GemPay?",
        },
        {
          t: "list",
          ordered: true,
          items: [
            "Откройте <a href=\"https://t.me/Gempayuz_bot\" target=\"_blank\" rel=\"noopener\">@Gempayuz_bot</a>.",
            "Выберите Stars, Premium или нужную игру.",
            "Для Stars и Premium введите @username, для игры — Player ID. Бот проверит и покажет ник в игре, оплата идёт после вашего подтверждения. Пароль не нужен.",
            "Оплатите через UzCard, HUMO, Click, Uzum Bank или с баланса бота.",
            "Проверьте результат. Stars приходят за несколько секунд. Premium подключается через официальный механизм подарков Telegram и тоже срабатывает за несколько секунд. Игровая валюта зачисляется за 1–5 минут.",
          ],
        },
        {
          t: "p",
          text: "Premium продаётся на 3, 6 и 12 месяцев, тарифа на 1 месяц нет. Подарить его товарищу можно по его @username, и в его аккаунт при этом никто не заходит.",
        },
        {
          t: "p",
          text: "Если что-то не пришло, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа. GemPay — независимый сервис и не заявляет об официальном партнёрстве с Telegram или разработчиками игр.",
        },
        {
          t: "p",
          text: "Где найти раздел Stars и из-за каких ошибок можно потерять деньги, читайте в статье <a href=\"/blog/telegram-stars-sotib-olish-gempay\">«Как купить Telegram Stars в GemPay»</a>.",
        },
        {
          t: "sources",
          items: [
            {
              label: "Fragment (Buy Telegram Stars)",
              href: "https://fragment.com/stars/buy",
            },
            {
              label: "Buy Telegram Premium",
              href: "https://fragment.com/premium/gift",
            },
            {
              label: "Telegram Stars",
              href: "https://core.telegram.org/api/stars",
            },
            {
              label: "Third-Party Payments and Authorized Resellers",
              href: "https://telegram.org/tos/third-party-payments",
            },
          ],
        },
      ],
      faq: [
        {
          q: "Можно ли оплатить в GemPay через USDT или USDC?",
          a: "Нет, стейблкоины GemPay не принимает. Оплата только в сумах: UzCard, HUMO, Click, Uzum Bank или баланс бота, а из России — СБП.",
        },
        {
          q: "В кошельке остались USDT. Можно купить на них Stars соклановцу?",
          a: "Да, Fragment позволяет купить Stars и для другого человека. Но сеть, в которой лежат ваши монеты, должна быть в списке на странице. Сверху добавится сетевая комиссия.",
        },
        {
          q: "Сетевая комиссия входит в цену Stars или платится отдельно?",
          a: "Она указывается отдельно и каждый раз может быть другой. В день нашей проверки при покупке Stars она составляла $2.71, но это сумма только на тот момент.",
        },
        {
          q: "Можно ли перевести Stars, купленные за USDT, в UC для PUBG?",
          a: "Нет. Stars остаются на аккаунте Telegram и в игровую валюту не превращаются. UC покупаются отдельно, по Player ID.",
        },
        {
          q: "В чате пишут: «оплату USDT завтра закроют, торопитесь». Это правда?",
          a: "Официальных объявлений о таком сроке нет. В официальных источниках не сказано даже, когда эта оплата появилась. Если вас торопят, это повод насторожиться. Проверяйте всё на самой странице Fragment.",
        },
        {
          q: "Отличается ли Premium с Fragment от Premium из GemPay?",
          a: "Отличается только способ оплаты. На Fragment цена в долларах и нужен криптокошелёк, а в GemPay платите картой в сумах. В GemPay Premium на 3, 6 или 12 месяцев подключается по @username через механизм подарков Telegram.",
        },
      ],
    },
  },
};

export default article;
