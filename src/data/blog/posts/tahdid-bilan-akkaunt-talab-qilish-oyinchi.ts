// Avtoblogyoz yasagan maqola (2026-11-16). Niyat: Klan yoki o‘yin chatida kimdir tahdid qilib +888 raqamni, Telegram akkauntni, sovg‘ani yoki hamyonni o‘tkazishni talab qilyapti. O‘yinchi «telegramda tahdid qilib akkaunt talab qilishsa nima qilish kerak» deb qidiradi. U nima bermaslik kerakligini, qanday shikoyat qilishni va akkauntini qanday darhol himoyalashni bilmoqchi.
// Faktlar tekshirilgan manbalar:
//   https://fragment.com/about
//   https://fragment.com/numbers
//   https://telegram.org/blog/ultimate-privacy-topics-2-0
//   https://telegram.org/faq

import type { Article } from "../types";
import { PREMIUM_PLANS, STARS_UNIT_CARD, STARS_UNIT_ONLINE, som } from "../../telegram";

const premium = (months: number) => PREMIUM_PLANS.find((p) => p.months === months)?.price ?? 0;

const article: Article = {
  slug: "tahdid-bilan-akkaunt-talab-qilish-oyinchi",
  game: null,
  type: "trust",
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  keywords: ["telegramda tahdid qilib akkaunt talab qilishsa","telegram akkaunt tahdid nima qilish kerak","+888 raqamni talab qilishyapti","telegram kod so‘rashsa nima qilish","klan chatida tahdid","telegram akkauntni himoyalash 2fa","telegramda shantaj shikoyat qilish","угрожают в телеграме требуют аккаунт","требуют номер +888 угрозы","что делать если вымогают аккаунт телеграм","как защитить аккаунт телеграм двухэтапная проверка","пожаловаться на угрозы в телеграм"],
  locales: {
    uz: {
      title: "Telegram’da tahdid qilib akkaunt yoki +888 talab qilishsa nima qilish kerak",
      metaTitle: "Telegram’da tahdid qilib akkaunt",
      metaDescription: "Hech narsa bermang: kod, 2FA paroli, +888 raqam va hamyon kaliti sizda qolsin. Avval 2FA va sessiyalarni yoping, keyin dalil saqlab shikoyat qiling.",
      excerpt: "Hech narsa bermang: kod, 2FA paroli, +888 raqam va hamyon kaliti sizda qolsin. Avval 2FA va sessiyalarni yoping, keyin dalil saqlab shikoyat qiling.",
      answer: "Hech narsa bermang: kod, 2FA paroli, +888 raqam va hamyon kaliti sizda qolsin. Avval 2FA va sessiyalarni yoping, keyin dalil saqlab shikoyat qiling.",
      body: [
        {
          t: "h2",
          id: "chatda-tahdid-qilib-akkaunt-sorashsa",
          text: "Chatda tahdid qilib akkaunt so‘rashsa, birinchi daqiqada nima qilish kerak?",
        },
        {
          t: "p",
          text: "Hech narsa bermang. Kirish kodi, ikki bosqichli tekshiruv paroli, +888 raqam, hamyon kaliti va kolleksion sovg‘alar faqat sizda qolishi kerak. Tahdidchi bilan bahslashmang, unga javob yozib vaqt yo‘qotmang.",
        },
        {
          t: "p",
          text: "Bu qoidani Telegram’ning o‘zi aytadi: u hech qachon tasdiqlash kodini yoki ikki bosqichli tekshiruv parolini so‘ramaydi (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>). O‘zini «Telegram xodimi», «moderator» yoki «klan admini» deb tanishtirib kod so‘ragan odamni firibgar deb biling.",
        },
        {
          t: "p",
          text: "Tahdidchining asosiy quroli — vahima. U sizga o‘ylashga vaqt qoldirmaslikka urinadi. Masalan, klan chatida shunday xabar keladi: «Bir soatda raqamni o‘tkazmasang, akkauntingni ban qildiraman». Bu so‘zlarning o‘zi akkauntingizga hech narsa qilmaydi. Xavfni faqat shoshib yuborgan ma’lumotingiz tug‘diradi.",
        },
        {
          t: "p",
          text: "Shuning uchun tartib quyidagicha:",
        },
        {
          t: "list",
          items: [
            "avval akkauntni yopasiz;",
            "keyin dalillarni saqlaysiz;",
            "oxirida shikoyat qilasiz.",
          ],
        },
        {
          t: "p",
          text: "Kanallarda +888 raqamlar tahdid bilan tortib olingani haqida postlar tarqalib turadi. Bunday hodisalar va ulardagi summalar rasmiy manbalarda tasdiqlanmagan. Lekin quyidagi qadamlar bunday postlar rost yoki yolg‘on bo‘lishiga bog‘liq emas.",
        },
        {
          t: "h2",
          id: "tahdidchi-aslida-nimani-olmoqchi-va",
          text: "Tahdidchi aslida nimani olmoqchi va bersangiz nima yo‘qotasiz?",
        },
        {
          t: "p",
          text: "Tahdidchilar har xil narsa so‘raydi. Ularning hammasi bir xil xavfli emas. Jadvalda qaysi ma’lumot akkauntni ochishi, qaysi biri esa shunchaki ochiq ma’lumot ekani ko‘rsatilgan.",
        },
        {
          t: "table",
          head: [
            "So‘raladigan narsa",
            "Bersangiz nima bo‘ladi",
            "To‘g‘ri javob",
          ],
          rows: [
            [
              "Telegram kirish kodi",
              "Tahdidchi akkauntingizga kirishga urinadi. 2FA yoqilgan bo‘lsa, unga parol ham kerak bo‘ladi",
              "Hech kimga bermang, skrinshotini ham yubormang",
            ],
            [
              "Ikki bosqichli tekshiruv paroli",
              "Kod bilan birga akkauntni to‘liq egallaydi",
              "Bermang, shubha bo‘lsa darhol almashtiring",
            ],
            [
              "+888 raqam",
              "Raqam yangi egasiga o‘tadi va keyin uni nima qilishni o‘sha odam hal qiladi",
              "O‘tkazmang, «vaqtinchalik» degan va’daga ishonmang",
            ],
            [
              "Hamyon kaliti yoki seed so‘zlari",
              "Hamyon, undagi raqam va sovg‘alar ham boshqa odam qo‘liga o‘tadi",
              "Hech qachon, hech kimga bermang",
            ],
            [
              "Kolleksion sovg‘a",
              "Sovg‘a boshqa egaga o‘tadi",
              "O‘tkazmang",
            ],
            [
              "Player ID yoki @username",
              "Ular bilan akkauntga kirib bo‘lmaydi",
              "Bu ochiq ma’lumot, uni bilishganidan qo‘rqmasangiz ham bo‘ladi",
            ],
          ],
        },
        {
          t: "p",
          text: "+888 raqamdagi xavfni alohida tushunish kerak. Fragment’ga ko‘ra, bu raqamlar bilan SIM-kartasiz ro‘yxatdan o‘tiladi, kirish kodi esa SMS orqali emas, Fragment’ning o‘zida olinadi. Kodni olish uchun hamyon Fragment’ga ulanadi (<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">How does Fragment work?</a>). Demak, hamyonni kim boshqarsa, kirish kodini ham o‘sha oladi.",
        },
        {
          t: "p",
          text: "Fragment yana shuni yozadi: raqam egasi uni Telegram akkauntiga istalgan vaqtda qo‘shishi va undan olib tashlashi mumkin. Kolleksiya buyumini esa har qanday egasi TON blokcheyni orqali boshqa odamga o‘tkaza oladi. Shuning uchun «raqamni menga o‘tkaz, tekshirib qaytaraman» degan gapning hech qanday kafolati yo‘q.",
        },
        {
          t: "p",
          text: "Nega aynan +888 egalariga bosim ko‘proq bo‘lishi mumkin? Raqamlar soni cheklangan: jami 136 566 ta raqam 2022-yil dekabrida sotilib tugagan, hozir ularni faqat mavjud egasidan sotib olish mumkin (<a href=\"https://fragment.com/numbers\" target=\"_blank\" rel=\"noopener\">Fragment: raqamlar</a>). Rasmiy floor narxi yo‘q, narxlar o‘zgarib turadi.",
        },
        {
          t: "p",
          text: "Seed so‘zlari haqidagi rasmiy TON qoidasi bu maqolada tekshirilmagan. Lekin mantiq oddiy: hamyon kalitini bilgan odam hamyonni ham boshqaradi.",
        },
        {
          t: "cta",
          text: "O‘yin valyutasi, Stars yoki Premium kerakmi? @Gempayuz_bot — so‘mda, faqat ID yoki @username.",
        },
        {
          t: "h2",
          id: "akkauntni-hozir-qanday-himoyalash-5",
          text: "Akkauntni hozir qanday himoyalash: 5 qadam",
        },
        {
          t: "p",
          text: "Bu ishlarni tahdidchiga javob yozishdan oldin bajaring. Bir necha daqiqa vaqt oladi.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Ikki bosqichli tekshiruvni yoqing yoki parolni almashtiring",
              text: "Yo‘li: Settings &gt; Privacy and Security &gt; 2-Step Verification. Shundan keyin akkauntga kirish uchun koddan tashqari parol ham kerak bo‘ladi (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
            },
            {
              title: "Tiklash uchun email qo‘shing",
              text: "Parolni unutsangiz, kirishni shu email orqali tiklaysiz. Telegram emailning o‘zi ham kuchli parol bilan himoyalangan bo‘lishi kerakligini alohida eslatadi.",
            },
            {
              title: "Begona sessiyalarni tugating",
              text: "Settings &gt; Devices (ba’zi versiyalarda Privacy &amp; Security &gt; Active Sessions) bo‘limini oching. Tanimagan qurilma yoki joyni ko‘rsangiz, sessiyani yoping.",
            },
            {
              title: "+888 raqamingiz bo‘lsa, hamyonni himoyalang",
              text: "Fragment’ga ulangan hamyon kalitini hech kimga bermang va hamyonni begona qurilmada ochmang. Batafsil reja: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">+888 akkauntni buzishdan himoyalash</a>.",
            },
            {
              title: "Klan admini va jamoadoshlarni ogohlantiring",
              text: "Tahdidchi akkauntingizga kirib olsa, sizning nomingizdan ularga ham yozishi mumkin. «Mendan kod yoki pul so‘ralsa, javob bermanglar» degan qisqa xabar yetadi.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "2FA parolini klan chatidagi «ishonchli» odamga ham aytmang. Uni faqat siz bilishingiz kerak.",
        },
        {
          t: "h2",
          id: "klan-chatida-qanday-tahdidlar-uchraydi",
          text: "Klan chatida qanday tahdidlar uchraydi va qaysilari bo‘sh gap?",
        },
        {
          t: "p",
          text: "Ko‘p tahdidlar sizni qo‘rqitib, ma’lumot olish uchun yoziladi. Ularning ortida real imkoniyat yo‘q.",
        },
        {
          t: "list",
          items: [
            "<strong>«Kodni yubor, bo‘lmasa akkaunting o‘chadi».</strong> Telegram kod so‘ramaydi. Kodni bermasangiz, begona odam faqat raqamingizni bilib akkauntga kira olmaydi. 2FA yoqilgan bo‘lsa, unga parol ham kerak bo‘ladi.",
            "<strong>«Men Telegram yoki Fragment supportidanman, raqamingiz tekshiruvda».</strong> Rasmiy xizmat kod va parol so‘ramaydi. Bunday «tekshiruv» — firibgarlarning eng sevimli usuli.",
            "<strong>«Raqamni yoki sovg‘ani o‘tkaz, aks holda turnirdan chiqaraman, klanni buzaman».</strong> Bu o‘yin ichidagi bosim. Player ID ochiq ma’lumot, u bilan o‘yin akkauntingizga kirib bo‘lmaydi.",
            "<strong>«Sovg‘angni arzonga sotib olaman, faqat avval garant botga o‘tkaz».</strong> Tahdid va «savdo» ko‘pincha birga keladi. Belgilari haqida: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">o‘yin chatida gift taklifidagi firibgarlik</a>.",
            "<strong>Tahdid bilan birga havola kelsa.</strong> «Akkauntingni tasdiqla» yoki «shikoyatni ko‘r» degan havolani ochmang. Spam va cheklovlar qanday ishlashi haqida: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">klan chatidagi shubhali havola</a>.",
            "<strong>«Shaxsiy ma’lumotlaringni tarqataman», «uyingni topaman».</strong> Bu endi chat muammosi emas. Dalillarni saqlang va huquqni muhofaza qiluvchi organlarga murojaat qiling.",
          ],
        },
        {
          t: "h2",
          id: "tahdid-qilgan-odam-ustidan-qanday",
          text: "Tahdid qilgan odam ustidan qanday shikoyat qilish va dalil saqlash mumkin?",
        },
        {
          t: "p",
          text: "Akkaunt yopilgach, dalillarga o‘ting. Tahdidchi o‘z xabarlarini istalgan payt o‘chirib yuborishi mumkin, shuning uchun bu bosqichni kechiktirmang.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Skrinshot oling",
              text: "Xabar matni, sanasi, tahdidchining @username’i va profili ko‘rinib tursin. Ism o‘zgarishi mumkin, username esa uni topishga yordam beradi.",
            },
            {
              title: "Nusxani alohida joyda saqlang",
              text: "Skrinshotlarni telefondan tashqari joyga ham ko‘chiring: kompyuterga yoki bulutli xotiraga.",
            },
            {
              title: "Ilova ichida shikoyat qiling va bloklang",
              text: "Tahdidchining profili yoki xabari menyusidagi shikoyat va bloklash bandlaridan foydalaning. Tahdidlar bo‘yicha shikoyat qanday tartibda va qancha muddatda ko‘rib chiqilishi bu maqolada tasdiqlanmagan.",
            },
            {
              title: "Guruh adminiga yozing",
              text: "Klan yoki o‘yin guruhining admini tahdidchini chatdan chiqarishi va boshqalarni ogohlantirishi mumkin. Unga skrinshotlarni yuboring.",
            },
            {
              title: "Jiddiy holatda politsiyaga boring",
              text: "Pul talab qilinsa yoki real hayotda zarar yetkazish bilan qo‘rqitilsa, dalillar bilan politsiyaga murojaat qiling.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "O‘g‘irlangan raqamni qaytarish yoki u bo‘yicha shikoyat qilishning rasmiy tartibi topilmadi. «Raqamingni qaytarib beramiz» deb pul so‘raydigan «yordamchi»larga to‘lamang.",
        },
        {
          t: "h2",
          id: "kod-yoki-raqamni-allaqachon-berib",
          text: "Kod yoki raqamni allaqachon berib qo‘ygan bo‘lsangiz nima qilasiz?",
        },
        {
          t: "p",
          text: "Vahimaga tushmang, lekin kechiktirmang ham: har bir daqiqa hisobda.",
        },
        {
          t: "list",
          items: [
            "<strong>Sessiyalarni tozalang.</strong> Settings &gt; Devices bo‘limida o‘zingiznikidan boshqa barcha sessiyalarni tugating.",
            "<strong>2FA parolini almashtiring.</strong> Eski parolni tahdidchi bilib olgan deb hisoblang.",
            "<strong>Tiklash emailining parolini ham yangilang.</strong> Email ochilsa, Telegram parolini tiklash ham begona odam qo‘liga o‘tadi.",
            "<strong>Hamyon kalitini bergan bo‘lsangiz,</strong> o‘sha hamyonni buzilgan deb hisoblang va undan boshqa foydalanmang.",
            "<strong>+888 raqam boshqa hamyonga o‘tib ketgan bo‘lsa,</strong> yangi egasi raqamni akkauntdan uzishi mumkin. Qaytarishning rasmiy yo‘li topilmadi. «Qaytaruvchi» xizmatlarga pul to‘lamang.",
            "<strong>Jamoadoshlarni ogohlantiring.</strong> Sizning akkauntingizdan kod, Stars yoki pul so‘ralsa, javob bermasinlar.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Telegram’ga kira olmay qolsangiz ham, jamoadoshlarga boshqa yo‘l bilan, masalan, o‘yin ichidagi chatdan xabar bering.",
        },
        {
          t: "h2",
          id: "jamoadoshning-akkaunti-egallangan-bolsa-klanni",
          text: "Jamoadoshning akkaunti egallangan bo‘lsa, klanni qanday himoyalash mumkin?",
        },
        {
          t: "p",
          text: "Tahdidchi ba’zan bitta akkauntni egallab, undan butun klanga yozadi. Tanish ism bilan kelgan xabarga odatda tez ishonishadi, hisob-kitob ham shunga.",
        },
        {
          t: "p",
          text: "Akkaunt egallanganini quyidagi belgilardan bilsa bo‘ladi:",
        },
        {
          t: "list",
          items: [
            "jamoadosh kutilmaganda kod, Stars, sovg‘a yoki «qarzga» pul so‘raydi;",
            "odatdagidan boshqacha yozadi, shoshiltiradi, «hech kimga aytma» deydi;",
            "«turnir uchun ovoz ber» yoki «skin yutib ol» degan havola tashlaydi.",
          ],
        },
        {
          t: "p",
          text: "Bunday holatda nima qilish kerak:",
        },
        {
          t: "list",
          items: [
            "<strong>Telegram’dan tashqarida tekshiring.</strong> Jamoadoshga o‘yin chatida, qo‘ng‘iroq yoki boshqa ilova orqali yozib, xabar haqiqatan undan kelganini so‘rang.",
            "<strong>Admin huquqlarini vaqtincha oling.</strong> Egallangan akkaunt guruhda admin bo‘lsa, boshqa adminlar uning huquqlarini egasi akkauntni qaytarmaguncha olib qo‘ygani ma’qul.",
            "<strong>Klanga umumiy ogohlantirish yozing.</strong> Kim nomidan nima so‘ralganini qisqa yozing va havolalarni ochmaslikni so‘rang.",
            "<strong>Jamoadoshga himoya qadamlarini yuboring.</strong> Unga boshqa yo‘l bilan yuqoridagi 5 qadamni yuboring: sessiyalarni yopish, 2FA parolini va tiklash emailini yangilash.",
          ],
        },
        {
          t: "p",
          text: "O‘zingiz «tekshirish uchun» hech kimga kod yubormang. Akkauntni egasining o‘zi tiklaydi.",
        },
        {
          t: "h2",
          id: "donat-stars-va-premium-olayotganda",
          text: "Donat, Stars va Premium olayotganda akkauntni qanday xavfsiz saqlash mumkin?",
        },
        {
          t: "p",
          text: "Halol xizmat xarid uchun faqat ochiq ma’lumot so‘raydi. UC, olmos, Stars yoki Premium olish uchun +888 raqam ham, hamyon ham kerak emas. GemPay’dagi tartib:",
        },
        {
          t: "table",
          head: [
            "Xarid",
            "Nima beriladi",
            "Nima hech qachon so‘ralmaydi",
          ],
          rows: [
            [
              "UC, olmos, CP",
              "Faqat Player ID. Nik tekshirib ko‘rsatiladi, tasdiqlaganingizdan keyin to‘laysiz",
              "O‘yin paroli, kirish kodi",
            ],
            [
              "Telegram Stars",
              "Faqat @username",
              "Telegram kodi, 2FA paroli, hamyon",
            ],
            [
              "Telegram Premium",
              "Faqat @username, Telegram’ning rasmiy sovg‘a mexanizmi orqali",
              "Akkauntga kirish",
            ],
          ],
        },
        {
          t: "p",
          text: `Stars bir buyurtmada 50 tadan 10 000 tagacha olinadi. 1 ta Stars narxi karta o‘tkazmasi yoki bot balansidan to‘lansa ${som(STARS_UNIT_CARD, "uz")}, Click yoki Uzum Bank orqali onlayn to‘lansa ${som(STARS_UNIT_ONLINE, "uz")}. Premium: 3 oy — ${som(premium(3), "uz")}, 6 oy — ${som(premium(6), "uz")}, 12 oy — ${som(premium(12), "uz")}. 1 oylik tarif yo‘q. UC va olmos narxlari <a href="https://t.me/Gempayuz_bot" target="_blank" rel="noopener">@Gempayuz_bot</a> ichida ko‘rsatiladi.`,
        },
        {
          t: "p",
          text: "Asosiy qoida: «donat uchun kodingni yoki parolingni ber» degan har qanday sotuvchi yoki «jamoadosh» xavfli. Nima so‘ralishi mumkinligi haqida batafsil: <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">o‘yin hisobini xavfsiz to‘ldirish</a>. Player ID’ni qayerdan topishni bilmasangiz: <a href=\"/blog/pubg-mobile-player-id-qayerda\">PUBG Mobile Player ID qayerda</a>.",
        },
        {
          t: "p",
          text: "Buyurtma bo‘yicha savol tug‘ilsa, buyurtma raqamini yozib <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a>’ga murojaat qiling. GemPay mustaqil xizmat va Telegram yoki o‘yin ishlab chiquvchilari nomidan ish yuritmaydi.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Buy and Sell Collectible Numbers",
              href: "https://fragment.com/numbers",
            },
            {
              label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More",
              href: "https://telegram.org/blog/ultimate-privacy-topics-2-0",
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
          q: "Tahdidchi faqat @username’imni bilsa, akkauntimni buza oladimi?",
          a: "Yo‘q, username ochiq ma’lumot. U bilan sizga yozish mumkin, lekin akkauntga kirib bo‘lmaydi. Kirish uchun kod, 2FA yoqilgan bo‘lsa parol ham kerak bo‘ladi.",
        },
        {
          q: "Telegram supportidan deb yozgan odamga kodni yuborsam nima bo‘ladi?",
          a: "U akkauntingizga kirishga urinadi, 2FA bo‘lmasa kirib ham oladi. Darhol Devices bo‘limida begona sessiyalarni yoping va parol qo‘ying. Haqiqiy Telegram xodimi kod so‘ramaydi.",
        },
        {
          q: "2FA yoqilgan bo‘lsa ham +888 raqamli akkaunt xavfdami?",
          a: "2FA bor bo‘lsa, faqat kod bilan kirib bo‘lmaydi. Lekin +888 raqam hamyonga bog‘liq: hamyon kalitini olgan odam raqamni o‘ziga o‘tkazishi mumkin. Shuning uchun hamyonni ham parol kabi ehtiyotlang.",
        },
        {
          q: "Tahdidchini bloklasam, u boshqa akkauntdan yozsa nima qilaman?",
          a: "Yangi akkauntni ham bloklab, shikoyat qiling va har bir xabarning skrinshotini saqlang. Bu takrorlansa, guruh adminiga ayting. Tahdid real hayotga o‘tsa, politsiyaga murojaat qiling.",
        },
        {
          q: "Tahdidchi Stars yoki pul evaziga «tinch qo‘yaman» desa, to‘lash kerakmi?",
          a: "Yo‘q. To‘lov uning to‘xtashiga hech qanday kafolat bermaydi. Aksincha, keyin yana talab qilishi mumkin. Yozishmani saqlang va pul talab qilingani bilan politsiyaga murojaat qiling.",
        },
        {
          q: "Player ID’ni chatda ko‘rsatish xavflimi?",
          a: "Player ID bilan o‘yin akkauntiga kirib bo‘lmaydi, donat ham aynan shu raqamga yuboriladi. Xavfli narsalar — parol, kirish kodi va akkaunt bog‘langan pochta, ularni hech kimga bermang.",
        },
      ],
    },
    ru: {
      title: "Угрожают в Telegram и требуют аккаунт или номер +888: что делать",
      metaTitle: "Угрожают в Telegram и требуют аккаунт или номер +888",
      metaDescription: "Ничего не отдавайте: код, пароль 2FA, +888 и ключ кошелька. Сначала включите 2FA и закройте чужие сеансы, затем сохраните доказательства и пожалуйтесь.",
      excerpt: "Ничего не отдавайте: код, пароль 2FA, +888 и ключ кошелька. Сначала включите 2FA и закройте чужие сеансы, затем сохраните доказательства и пожалуйтесь.",
      answer: "Ничего не отдавайте: код, пароль 2FA, +888 и ключ кошелька. Сначала включите 2FA и закройте чужие сеансы, затем сохраните доказательства и пожалуйтесь.",
      body: [
        {
          t: "h2",
          id: "chatda-tahdid-qilib-akkaunt-sorashsa",
          text: "В чате угрожают и требуют аккаунт: что делать в первую минуту?",
        },
        {
          t: "p",
          text: "Ничего не отдавайте. Код для входа, пароль двухэтапной проверки, номер +888, ключ кошелька и коллекционные подарки должны оставаться только у вас. Не спорьте с шантажистом и не тратьте время на ответы ему.",
        },
        {
          t: "p",
          text: "Это правило подтверждает сам Telegram: он никогда не запрашивает коды подтверждения и пароль двухэтапной проверки (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>). Если кто-то называет себя «сотрудником Telegram», «модератором» или «админом клана» и просит код, перед вами мошенник.",
        },
        {
          t: "p",
          text: "Главное оружие шантажиста — паника. Он старается не оставить вам времени подумать. Например, в клановом чате приходит сообщение: «Не переведёшь номер за час — добьюсь бана твоего аккаунта». Сами эти слова ничего с аккаунтом не сделают. Опасность создают только данные, которые вы отправите в спешке.",
        },
        {
          t: "p",
          text: "Поэтому порядок такой:",
        },
        {
          t: "list",
          items: [
            "сначала закрываете аккаунт;",
            "потом сохраняете доказательства;",
            "в конце подаёте жалобу.",
          ],
        },
        {
          t: "p",
          text: "В каналах периодически появляются посты о том, что номера +888 отбирали с помощью угроз. Такие случаи и суммы в них официальными источниками не подтверждены. Но шаги ниже работают независимо от того, правдивы эти посты или нет.",
        },
        {
          t: "h2",
          id: "tahdidchi-aslida-nimani-olmoqchi-va",
          text: "Что на самом деле нужно шантажисту и что вы потеряете, если отдадите?",
        },
        {
          t: "p",
          text: "Шантажисты просят разное, и не всё одинаково опасно. В таблице видно, какие данные открывают доступ к аккаунту, а какие — просто публичная информация.",
        },
        {
          t: "table",
          head: [
            "Что просят",
            "Что будет, если отдать",
            "Как правильно поступить",
          ],
          rows: [
            [
              "Код входа в Telegram",
              "Шантажист попытается войти в ваш аккаунт. Если включена 2FA, ему понадобится ещё и пароль",
              "Никому не отдавать, даже скриншотом",
            ],
            [
              "Пароль двухэтапной проверки",
              "Вместе с кодом даёт полный контроль над аккаунтом",
              "Не отдавать, при подозрении сразу сменить",
            ],
            [
              "Номер +888",
              "Номер переходит новому владельцу, и дальше он решает, что с ним делать",
              "Не переводить, не верить обещанию «это временно»",
            ],
            [
              "Ключ кошелька или seed-фраза",
              "Кошелёк, номер и подарки в нём переходят в чужие руки",
              "Никогда и никому не отдавать",
            ],
            [
              "Коллекционный подарок",
              "Подарок переходит другому владельцу",
              "Не переводить",
            ],
            [
              "Player ID или @username",
              "По ним войти в аккаунт нельзя",
              "Это открытые данные, бояться того, что их знают, не нужно",
            ],
          ],
        },
        {
          t: "p",
          text: "Риск с номером +888 стоит разобрать отдельно. По данным Fragment, с такими номерами регистрируются без SIM-карты, а код входа приходит не по SMS, а прямо на Fragment. Чтобы получить код, кошелёк подключают к Fragment (<a href=\"https://fragment.com/about\" target=\"_blank\" rel=\"noopener\">How does Fragment work?</a>). Значит, кто управляет кошельком, тот и получает код входа.",
        },
        {
          t: "p",
          text: "Fragment пишет и другое: владелец может в любой момент привязать номер к аккаунту Telegram или отвязать его. А любой владелец коллекционного предмета может передать его другому человеку через блокчейн TON. Поэтому фраза «переведи номер мне, я проверю и верну» ничем не гарантирована.",
        },
        {
          t: "p",
          text: "Почему именно на владельцев +888 давят чаще? Количество номеров ограничено: все 136 566 номеров были распроданы в декабре 2022 года, и сейчас купить их можно только у текущего владельца (<a href=\"https://fragment.com/numbers\" target=\"_blank\" rel=\"noopener\">Fragment: номера</a>). Официальной минимальной цены нет, цены постоянно меняются.",
        },
        {
          t: "p",
          text: "Официальное правило TON о seed-фразе в этой статье не проверялось. Но логика простая: кто знает ключ кошелька, тот кошельком и управляет.",
        },
        {
          t: "cta",
          text: "Нужна игровая валюта, Stars или Premium? @Gempayuz_bot — оплата в сумах, нужен только ID или @username.",
        },
        {
          t: "h2",
          id: "akkauntni-hozir-qanday-himoyalash-5",
          text: "Как защитить аккаунт прямо сейчас: 5 шагов",
        },
        {
          t: "p",
          text: "Сделайте это до того, как отвечать шантажисту. Займёт несколько минут.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Включите двухэтапную проверку или смените пароль",
              text: "Путь: Settings &gt; Privacy and Security &gt; 2-Step Verification. После этого для входа, кроме кода, понадобится ещё и пароль (<a href=\"https://telegram.org/faq\" target=\"_blank\" rel=\"noopener\">Telegram FAQ</a>).",
            },
            {
              title: "Добавьте почту для восстановления",
              text: "Если забудете пароль, вернёте доступ через неё. Telegram отдельно напоминает: сама почта тоже должна быть защищена надёжным паролем.",
            },
            {
              title: "Завершите чужие сеансы",
              text: "Откройте Settings &gt; Devices (в некоторых версиях — Privacy &amp; Security &gt; Active Sessions). Видите незнакомое устройство или место — закройте сеанс.",
            },
            {
              title: "Если у вас номер +888, защитите кошелёк",
              text: "Никому не передавайте ключ кошелька, подключённого к Fragment, и не открывайте кошелёк на чужих устройствах. Подробный план: <a href=\"/blog/888-anonim-raqam-oyinchi-akkaunt-himoyasi\">как защитить аккаунт +888 от взлома</a>.",
            },
            {
              title: "Предупредите админа клана и тиммейтов",
              text: "Если шантажист попадёт в ваш аккаунт, он может написать им от вашего имени. Достаточно короткого сообщения: «Если от меня попросят код или деньги — не отвечайте».",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Не сообщайте пароль 2FA даже «надёжному» человеку из кланового чата. Его должны знать только вы.",
        },
        {
          t: "h2",
          id: "klan-chatida-qanday-tahdidlar-uchraydi",
          text: "Какие угрозы встречаются в клановом чате и какие из них — пустые слова?",
        },
        {
          t: "p",
          text: "Многие угрозы пишут только для того, чтобы напугать и выманить данные. Реальных возможностей за ними нет.",
        },
        {
          t: "list",
          items: [
            "<strong>«Скинь код, иначе аккаунт удалят».</strong> Telegram код не запрашивает. Пока вы не отдали код, посторонний не войдёт в аккаунт, зная только номер. А с включённой 2FA ему нужен ещё и пароль.",
            "<strong>«Я из поддержки Telegram или Fragment, ваш номер на проверке».</strong> Официальная поддержка не просит коды и пароли. Такая «проверка» — любимый приём мошенников.",
            "<strong>«Переведи номер или подарок, иначе выкину из турнира и разнесу клан».</strong> Это давление внутри игры. Player ID — открытые данные, войти по нему в игровой аккаунт нельзя.",
            "<strong>«Куплю твой подарок недорого, только сначала переведи гарант-боту».</strong> Угрозы и «сделки» часто идут вместе. Признаки обмана: <a href=\"/blog/gift-egasi-yashirin-oyinchi-firibgarlik\">мошенничество с предложениями купить гифт в игровом чате</a>.",
            "<strong>К угрозе приложена ссылка.</strong> Не открывайте ссылки вида «подтверди аккаунт» или «посмотри жалобу». Как работают спам и ограничения: <a href=\"/blog/klan-chatida-shubhali-havola-spam-cheklov\">подозрительная ссылка в клановом чате</a>.",
            "<strong>«Солью твои личные данные», «найду, где ты живёшь».</strong> Это уже не проблема чата. Сохраните доказательства и обратитесь в правоохранительные органы.",
          ],
        },
        {
          t: "h2",
          id: "tahdid-qilgan-odam-ustidan-qanday",
          text: "Как пожаловаться на шантажиста и сохранить доказательства?",
        },
        {
          t: "p",
          text: "Когда аккаунт защищён, переходите к доказательствам. Шантажист может удалить свои сообщения в любой момент, поэтому этот этап не откладывайте.",
        },
        {
          t: "steps",
          items: [
            {
              title: "Сделайте скриншоты",
              text: "На них должны быть видны текст сообщения, дата, @username угрожающего и его профиль. Имя можно сменить, а username поможет его найти.",
            },
            {
              title: "Сохраните копию в другом месте",
              text: "Перенесите скриншоты не только на телефон, но и на компьютер или в облако.",
            },
            {
              title: "Пожалуйтесь и заблокируйте в приложении",
              text: "Используйте пункты жалобы и блокировки в меню профиля или сообщения. В каком порядке и в какие сроки рассматриваются жалобы на угрозы, в этой статье не подтверждено.",
            },
            {
              title: "Напишите админу группы",
              text: "Админ клана или игровой группы может удалить шантажиста из чата и предупредить остальных. Отправьте ему скриншоты.",
            },
            {
              title: "В серьёзном случае идите в полицию",
              text: "Если требуют деньги или угрожают реальным вредом, обращайтесь в полицию с доказательствами.",
            },
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Официального порядка возврата украденного номера или подачи жалобы по нему найти не удалось. Не платите «помощникам», которые обещают вернуть номер за деньги.",
        },
        {
          t: "h2",
          id: "kod-yoki-raqamni-allaqachon-berib",
          text: "Что делать, если код или номер уже отдан?",
        },
        {
          t: "p",
          text: "Без паники, но и без промедления: каждая минута на счету.",
        },
        {
          t: "list",
          items: [
            "<strong>Очистите сеансы.</strong> В разделе Settings &gt; Devices завершите все сеансы, кроме своего.",
            "<strong>Смените пароль 2FA.</strong> Считайте, что старый пароль шантажист уже знает.",
            "<strong>Обновите пароль и от почты для восстановления.</strong> Если взломают почту, сброс пароля Telegram тоже окажется в чужих руках.",
            "<strong>Если вы отдали ключ кошелька,</strong> считайте этот кошелёк скомпрометированным и больше им не пользуйтесь.",
            "<strong>Если номер +888 уже ушёл на другой кошелёк,</strong> новый владелец может отвязать его от аккаунта. Официального способа вернуть номер не найдено. Не платите сервисам, которые берутся его «вернуть».",
            "<strong>Предупредите тиммейтов.</strong> Если с вашего аккаунта попросят код, Stars или деньги, пусть не отвечают.",
          ],
        },
        {
          t: "note",
          tone: "info",
          text: "Даже если вы потеряли доступ к Telegram, предупредите тиммейтов другим способом — например, через чат в игре.",
        },
        {
          t: "h2",
          id: "jamoadoshning-akkaunti-egallangan-bolsa-klanni",
          text: "Аккаунт тиммейта захвачен: как защитить клан?",
        },
        {
          t: "p",
          text: "Иногда шантажист захватывает один аккаунт и пишет с него всему клану. Сообщению от знакомого имени обычно верят быстро — на это и расчёт.",
        },
        {
          t: "p",
          text: "Признаки захваченного аккаунта:",
        },
        {
          t: "list",
          items: [
            "тиммейт неожиданно просит код, Stars, подарок или денег «в долг»;",
            "пишет не так, как обычно, торопит, просит «никому не говорить»;",
            "кидает ссылки вроде «проголосуй за нас в турнире» или «выиграй скин».",
          ],
        },
        {
          t: "p",
          text: "Что делать в такой ситуации:",
        },
        {
          t: "list",
          items: [
            "<strong>Проверьте вне Telegram.</strong> Свяжитесь с тиммейтом через игровой чат, звонком или в другом приложении и спросите, правда ли это пишет он.",
            "<strong>Временно снимите права админа.</strong> Если захваченный аккаунт — админ группы, остальным админам лучше забрать у него права, пока владелец не вернёт доступ.",
            "<strong>Напишите общее предупреждение в клан.</strong> Коротко: от чьего имени и что просили, и попросите не открывать ссылки.",
            "<strong>Отправьте тиммейту шаги защиты.</strong> Другим способом перешлите ему 5 шагов выше: закрыть сеансы, обновить пароль 2FA и почту для восстановления.",
          ],
        },
        {
          t: "p",
          text: "Сами никому не отправляйте код «для проверки». Аккаунт восстанавливает только его владелец.",
        },
        {
          t: "h2",
          id: "donat-stars-va-premium-olayotganda",
          text: "Как сохранить аккаунт в безопасности при покупке доната, Stars и Premium?",
        },
        {
          t: "p",
          text: "Честный сервис просит для покупки только открытые данные. Чтобы купить UC, алмазы, Stars или Premium, не нужны ни номер +888, ни кошелёк. Как это устроено в GemPay:",
        },
        {
          t: "table",
          head: [
            "Покупка",
            "Что вы указываете",
            "Что никогда не запрашивается",
          ],
          rows: [
            [
              "UC, алмазы, CP",
              "Только Player ID. Ник проверяется и показывается, оплата — после вашего подтверждения",
              "Пароль от игры, код входа",
            ],
            [
              "Telegram Stars",
              "Только @username",
              "Код Telegram, пароль 2FA, кошелёк",
            ],
            [
              "Telegram Premium",
              "Только @username, через официальный механизм подарков Telegram",
              "Вход в аккаунт",
            ],
          ],
        },
        {
          t: "p",
          text: `Stars за один заказ можно купить от 50 до 10 000 штук. Цена 1 Stars при оплате переводом с карты или с баланса бота — ${som(STARS_UNIT_CARD, "ru")}, при онлайн-оплате через Click или Uzum Bank — ${som(STARS_UNIT_ONLINE, "ru")}. Premium: 3 месяца — ${som(premium(3), "ru")}, 6 месяцев — ${som(premium(6), "ru")}, 12 месяцев — ${som(premium(12), "ru")}. Тарифа на 1 месяц нет. Цены на UC и алмазы показаны в <a href="https://t.me/Gempayuz_bot" target="_blank" rel="noopener">@Gempayuz_bot</a>.`,
        },
        {
          t: "p",
          text: "Главное правило: любой продавец или «тиммейт», который говорит «для доната дай код или пароль», опасен. Что могут запросить и что нет — подробно в статье <a href=\"/blog/oyin-pul-xavfsiz-toldirish\">как безопасно пополнить игровой счёт</a>. Если не знаете, где найти Player ID: <a href=\"/blog/pubg-mobile-player-id-qayerda\">где найти Player ID в PUBG Mobile</a>.",
        },
        {
          t: "p",
          text: "Если по заказу возник вопрос, напишите в <a href=\"https://t.me/StarsPaymeeSupport\" target=\"_blank\" rel=\"noopener\">@StarsPaymeeSupport</a> и укажите номер заказа. GemPay — независимый сервис и не действует от имени Telegram или разработчиков игр.",
        },
        {
          t: "sources",
          items: [
            {
              label: "How does Fragment work?",
              href: "https://fragment.com/about",
            },
            {
              label: "Buy and Sell Collectible Numbers",
              href: "https://fragment.com/numbers",
            },
            {
              label: "No-SIM Signup, Auto-Delete All Chats, Topics 2.0 and More",
              href: "https://telegram.org/blog/ultimate-privacy-topics-2-0",
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
          q: "Может ли шантажист взломать аккаунт, если знает только мой @username?",
          a: "Нет, username — открытая информация. По нему можно вам написать, но войти в аккаунт нельзя: для входа нужен код, а при включённой 2FA — ещё и пароль.",
        },
        {
          q: "Что будет, если я отправил код человеку, который назвался поддержкой Telegram?",
          a: "Он попытается войти в ваш аккаунт, а без 2FA ему это удастся. Сразу завершите чужие сеансы в разделе Devices и установите пароль. Настоящие сотрудники Telegram коды не запрашивают.",
        },
        {
          q: "Если 2FA включена, аккаунт с номером +888 всё равно в опасности?",
          a: "С 2FA одного кода для входа недостаточно. Но номер +888 привязан к кошельку, и тот, кто получил ключ, может перевести номер себе. Поэтому берегите кошелёк так же, как пароль.",
        },
        {
          q: "Я заблокировал шантажиста, а он пишет с другого аккаунта. Что делать?",
          a: "Блокируйте и новый аккаунт, жалуйтесь и сохраняйте скриншот каждого сообщения. Если это повторяется, сообщите админу группы, а если угрозы переходят в реальную жизнь — обращайтесь в полицию.",
        },
        {
          q: "Шантажист обещает отстать за Stars или деньги. Платить?",
          a: "Нет. Оплата никак не гарантирует, что он остановится, — скорее он потребует ещё. Сохраните переписку и обратитесь в полицию с фактом вымогательства.",
        },
        {
          q: "Опасно ли показывать Player ID в чате?",
          a: "По Player ID войти в игровой аккаунт нельзя, именно на этот номер и отправляется донат. Опасно отдавать пароль, код входа и почту, к которой привязан аккаунт, — их никому не сообщайте.",
        },
      ],
    },
  },
};

export default article;
