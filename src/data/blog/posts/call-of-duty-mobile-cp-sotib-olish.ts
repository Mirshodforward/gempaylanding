// AVTOMATIK KIRITILGAN — `npm run ingest`.
// Manba reja: .plan/articles/call-of-duty-mobile-cp-sotib-olish.json
// Qo'lda tahrirlash mumkin; keyingi ingest faqat yangi fayllarni qo'shadi.

import type { Article } from "../types";

const article: Article = {
  slug: "call-of-duty-mobile-cp-sotib-olish",
  game: "call-of-duty-mobile",
  type: "howto",
  datePublished: "2026-08-23",
  dateModified: "2026-08-23",
  pillar: false,
  keywords: ["call of duty mobile cp sotib olish","codm cp sotib olish","cod mobile cp to'ldirish","codm cp uzcard humo","call of duty mobile cp uzbekistan","codm cp click payme","call of duty mobile donat uzbekistan"],
  locales: {
    uz: {
      title: "Call of Duty: Mobile CP sotib olish — O'zbekistonda so'mda, 3 daqiqada",
      metaTitle: "Call of Duty Mobile CP sotib olish — O'zbekiston",
      metaDescription: "Call of Duty: Mobile CP ni O'zbekistonda so'mda sotib oling: Player ID, bepul nickname tekshiruvi, UzCard/HUMO/Click/Payme. CP 3 daqiqada tushadi.",
      excerpt: "CODM uchun CP ni Garena Player ID orqali so'mda to'ldirish: bepul nickname tekshiruvi, UzCard, HUMO, Click, Payme va uch daqiqalik yetkazish.",
      answer: "Call of Duty: Mobile uchun CP ni O'zbekistonda GemPay Telegram mini ilovasi orqali sotib olish mumkin: @Gempayuz_bot ni oching, Call of Duty: Mobile ni tanlang, Garena Player ID ni kiriting, nickname bepul tekshiriladi, paketni tanlab UzCard, HUMO, Click yoki Payme bilan so'mda to'lang. CP hisobingizga taxminan 3 daqiqada tushadi.",
      body: [
    { t: "p", text: "Yangi mavsum ochiladi, Battle Pass ro'yxatda turadi, lekin hisobda CP yo'q. O'zbekistondagi ko'p CODM o'yinchisi aynan shu joyda to'xtaydi: o'yin ichidagi to'lov oynasi UzCard yoki HUMO kartasini ko'rmaydi, xorijiy do'konlar esa Visa, PayPal yoki kriptovalyuta so'raydi. Natijada odam Telegram dagi notanish sotuvchiga akkaunt ma'lumotlarini berib yuborishga majbur bo'ladi va aynan shu yerda hisobini yo'qotadi." },
    { t: "p", text: "Buning kerak emasligini ko'rsatish uchun bu qo'llanma yozilgan. GemPay Telegram mini ilovasida CP faqat ochiq Garena Player ID orqali to'ldiriladi: siz ID ni kiritasiz, bot o'yin serveridan nikni tortib ekranga chiqaradi, siz uni tasdiqlaganingizdan keyingina to'lov oynasi ochiladi. Joriy paketlar ro'yxati <a href=\"/oyinlar/call-of-duty-mobile\">Call of Duty: Mobile CP to'ldirish sahifasida</a> va botda ko'rinadi. CP nima va u qayerga sarflanishini hali bilmasangiz, avval <a href=\"/blog/cod-points-cp-nima\">CP (COD Points) nima degan materialni</a> ko'rib chiqing." },
    { t: "h2", id: "cp-sotib-olish-6-qadam", text: "CP ni sotib olish: 6 qadam" },
    { t: "p", text: "Butun jarayon Telegram ichida o'tadi va odatda ikki-uch daqiqada tugaydi. Shu vaqtning ko'p qismi Player ID ni topib nusxa ko'chirishga ketadi, qolgani esa tasdiqlash va to'lovga." },
    { t: "steps", items: [{"title":"Botni oching","text":"@Gempayuz_bot ni Telegram da oching va mini ilovani ishga tushiring. Ro'yxatdan o'tish, anketa to'ldirish yoki alohida ilova yuklab olish talab qilinmaydi, Telegram akkauntingizning o'zi yetarli."},{"title":"Ro'yxatdan Call of Duty: Mobile ni tanlang","text":"O'yinlar ro'yxatida CODM alohida karta sifatida turadi. To'ldirish Garena SG/MY versiyasi uchun bajariladi; agar sizda Activision (Global) hisobi bo'lsa, uning ID si bu yerda ishlamaydi va bot nikni topa olmaydi."},{"title":"Garena Player ID ni kiriting","text":"Faqat raqamlarni, bo'sh joy va qavslarsiz kiriting. Bu yerda server, region yoki platforma tanlaydigan maydon yo'q: CODM da hisob bitta UID ga bog'langan, shuning uchun qo'shimcha tanlov so'ralmaydi."},{"title":"Bot ko'rsatgan nikni tasdiqlang","text":"Bir necha soniyada ekranda ID ga bog'langan o'yin niki paydo bo'ladi. Tekshiruv bepul va hech narsaga majburlamaydi. Nik sizniki bo'lsa, tasdiqlang; notanish bo'lsa, ortga qayting va ID ni qaytadan nusxa ko'chiring."},{"title":"CP paketini tanlang","text":"Paketlar ro'yxati ochiladi, har birining yonida shu daqiqadagi so'm summasi turadi. Paket hajmini Battle Pass, do'kondagi bundle yoki Lucky Draw uchun qancha CP kerakligiga qarab tanlang."},{"title":"So'mda to'lang va CP ni kuting","text":"To'lovni UzCard, HUMO, Click, Payme yoki Paynet orqali bajarasiz. To'lov o'tgach buyurtma avtomatik ishlanadi va CP odatda uch daqiqada hisobga tushadi. Chek va buyurtma raqami botdagi tarixda qoladi."}] },
    { t: "note", text: "Server, platforma, elektron pochta, Garena paroli, SMS kod va ekranni ulashish, bularning birortasi ham so'ralmaydi. Kerak bo'ladigan yagona ma'lumot ochiq Player ID, uni har bir o'yinchi o'z profilida ko'ra oladi.", title: "To'ldirishda nima so'ralmaydi", tone: "info" },
    { t: "h2", id: "garena-player-id-qayerdan-topasiz", text: "Garena Player ID ni qayerdan topasiz" },
    { t: "p", text: "Player ID (UID) Garena hisobingizning ochiq raqami. U nik bilan bir narsa emas: nikni istagancha o'zgartirsangiz ham ID o'zgarmaydi va aynan shuning uchun to'ldirish nik bo'yicha emas, ID bo'yicha bajariladi." },
    { t: "list", ordered: true, items: ["O'yinni oching va lobbi ekranining yuqori o'ng burchagidagi sozlamalar tugmasini bosing.","Menyudan User Settings bo'limiga o'ting.","Ro'yxatni pastga aylantiring: Player ID odatda eng pastda, Legal and Privacy yozuvi yonida ko'rsatiladi.","Raqamni nusxa ko'chiring va botga bo'sh joysiz joylashtiring."] },
    { t: "p", text: "Garena o'yin ichidagi menyularni yangilanishlar bilan qayta joylashtirib turadi. Agar sozlamalarda ko'rmasangiz, profil kartochkangizni oching, UID odatda nik ostida ham yozilgan bo'ladi. Iloji bo'lsa qo'lda termang, nusxa ko'chirib qo'ying: bitta xato raqam butunlay begona o'yinchining nikini chiqaradi. ID ni bir marta topib, uni Telegram dagi saqlangan xabarlaringizga yozib qo'ysangiz, keyingi to'ldirishlarda o'yinni ochish ham shart bo'lmaydi." },
    { t: "p", text: "Eng ko'p uchraydigan xato Global versiya ID sini Garena to'ldirishiga kiritish. Ikkala qurilmada o'yin bir xil ko'rinsa ham, ular alohida nashriyot, alohida server, alohida do'kon va alohida CP iqtisodiga ega. Qaysi versiya sizda ekanini bir daqiqada aniqlash uchun <a href=\"/blog/codm-garena-global-farqi\">CODM Garena va Global farqi qo'llanmasini</a> oching." },
    { t: "h2", id: "tolov-usullari", text: "Qanday to'lov usullari qabul qilinadi" },
    { t: "p", text: "To'lov to'liq mahalliy tizimda o'tadi. Bu shuni anglatadiki, kartangizdan so'm yechiladi, bank uni xorijiy tranzaksiya sifatida ko'rmaydi va tasdiqlash bosqichida bloklab qo'ymaydi." },
    { t: "facts", items: [{"k":"Qabul qilinadi","v":"UzCard, HUMO, Click, Payme, Paynet"},{"k":"Valyuta","v":"Faqat so'm"},{"k":"Kerak emas","v":"Visa yoki Mastercard, kriptovalyuta, xorijiy hamyon"},{"k":"VPN","v":"Talab qilinmaydi"},{"k":"Konvertatsiya","v":"Yo'q, almashuv sizning kartangiz darajasida bo'lmaydi"},{"k":"Chek","v":"Botdagi buyurtmalar tarixida saqlanadi"}] },
    { t: "p", text: "Bu oddiy narsadek tuyuladi, lekin CODM uchun muammo aynan shu joyda boshlanadi. Rus tilidagi donat do'konlari ham, xalqaro to'ldirish saytlari ham odatda Visa, Mastercard, xorijiy hamyon yoki kriptovalyuta so'raydi; UzCard va HUMO ularning ro'yxatida umuman yo'q. Shuning uchun o'zbekistonlik o'yinchi ko'pincha tanish orqali chet el kartasini topishga yoki vositachiga murojaat qilishga majbur bo'ladi, har bir qo'shimcha bo'g'in esa narxni ham, xavfni ham oshiradi." },
    { t: "p", text: "Konvertatsiya komissiyasi yo'qligi amalda shuni bildiradi: botda ko'rgan summa kartadan yechiladigan summa bilan bir xil bo'ladi. Har bir buyurtma uchun bot chek va buyurtma raqamini saqlaydi, muammoli holatda <strong>@StarsPaymeeSupport</strong> ga aynan shu raqamni yuborish yetarli." },
    { t: "h2", id: "narx-qanday-shakllanadi", text: "Narx qanday shakllanadi va nega saytda raqam yo'q" },
    { t: "p", text: "Saytda ham, bu maqolada ham CP ning so'mdagi aniq summasi yozilmaydi va sababi oddiy: bunday raqam bir necha soatdan keyin yolg'onga aylanadi. Narxni bir marta yozib qo'yib, keyin uni yangilamaslik foydalanuvchini aldashning eng jimgina usuli." },
    { t: "p", text: "Yakuniy summa uch narsaga bog'liq: provayderning dollardagi bazaviy narxi, valyuta va USDT kursi, hamda tanlangan paket hajmi. Birinchisi nashriyot aksiyalari va mintaqaviy narxlar bilan o'zgaradi, ikkinchisi kun ichida ham siljiydi, uchinchisi esa bitta CP ning tannarxiga ta'sir qiladi: kattaroq paketlarda u odatda pastroq tushadi." },
    { t: "p", text: "Shuning uchun so'mdagi summa faqat botda, siz paketni tanlagan paytda hisoblanadi va shu daqiqada dolzarb bo'ladi. Raqamni ko'rish uchun to'lash shart emas: paketni ochib, narxni ko'rib, ortga qaytishingiz mumkin." },
    { t: "p", text: "Garena SG/MY da CP paketlari notekis raqamlarda beriladi, odatda 114, 230, 460, 690, 1150, 2300 CP kabi, kattaroqlarida esa ustiga bonus CP qo'shiladi. Global versiyadagi yaxlit 500, 1100, 2400 paketlaridan farqi ana shunda ko'rinadi. Ro'yxatni nashriyot vaqti-vaqti bilan yangilab turadi, shuning uchun asosiy manba botdagi joriy ro'yxat bo'lib qoladi." },
    { t: "p", text: "Paket hajmini tanlashdan oldin nimaga sarflashingizni hisoblang: Battle Pass bir mavsumga bitta belgilangan summa, Lucky Draw esa har qadamda oshib boradigan zinapoya va u kutilganidan ancha ko'p CP yeydi. Kattaroq paketdagi bonus CP ni chegirma deb o'ylamang, u faqat siz haqiqatan shuncha CP sarflasangiz foyda beradi; keragidan ortiq CP hisobda osilib qoladi va uni qaytarib bo'lmaydi. Usullarni yonma-yon taqqoslash uchun <a href=\"/blog/codm-cp-arzon-qayerdan-olish\">CP ni arzon va xavfsiz olish taqqoslovini</a> ko'ring." },
    { t: "h2", id: "nickname-bepul-tekshiruvi", text: "Nickname bepul tekshiruvi nega muhim" },
    { t: "p", text: "To'ldirishdagi eng qimmat xato narx emas, noto'g'ri ID. CP begona hisobga tushsa, uni qaytarib olish deyarli imkonsiz: provayder buyurtmani bajargan bo'ladi, o'yin serveri esa valyutani hisobdan hisobga ko'chirmaydi. Bu qoida GemPay ga emas, o'yin iqtisodiga tegishli va barcha to'ldirish xizmatlarida bir xil ishlaydi." },
    { t: "p", text: "Nickname tekshiruvi shu xatoga qarshi yagona real himoya. Siz ID ni kiritganingizda bot o'yin serveriga so'rov yuboradi va shu ID ga bog'langan nikni qaytaradi. Ekranda o'zingizning nikingizni ko'rsangiz, ID to'g'ri. Ko'rmasangiz, hech narsa yo'qotmadingiz, chunki bu bosqichda pul yechilmaydi va buyurtma yaratilmaydi." },
    { t: "p", text: "Bitta raqamni adashtirish odatda ID topilmadi degan javob bermaydi. Ko'pincha bunday ID mavjud bo'ladi va bot butunlay boshqa odamning nikini ko'rsatadi. Shuning uchun nikni ko'z yugurtirib emas, harfma-harf o'qing: klan tegi, katta-kichik harflar va o'xshash belgilar ham mos kelishi kerak. Bezakli yozilgan nomlarda nol bilan katta O ni adashtirish juda oson." },
    { t: "p", text: "Bu tekshiruvni GemPay o'ylab topgani yo'q, u sohadagi standart amaliyot: ishonchli to'ldirish xizmati to'lovdan oldin nikni ko'rsatadi va parol so'ramaydi. Qaysidir xizmat shu ikkitasidan birini bajarmasa, o'sha xizmatni almashtirgan ma'qul." },
    { t: "note", text: "Nik notanish bo'lsa, to'lamang. Tekshiruv bepul, uni cheksiz marta takrorlash mumkin va bekor qilingan urinish hech qanday iz qoldirmaydi.", title: "Qoida", tone: "good" },
    { t: "h2", id: "cp-qancha-vaqtda-keladi", text: "CP qancha vaqtda keladi va ko'rinmasa nima qilish" },
    { t: "p", text: "Odatiy yetkazish vaqti uch daqiqa atrofida. Mavsum boshlanishi, yirik yangilanish yoki kechqurungi tirband soatlarda provayder navbati cho'zilib, besh daqiqagacha ketishi mumkin. Shu oraliqda to'lovni takrorlamang: ikkinchi to'lov ikkinchi buyurtma yaratadi va u ham bajariladi. Vaqtni to'g'ri sanang, hisob to'lov tasdiqlangan daqiqadan boshlanadi, siz botga qaytgan paytdan emas." },
    { t: "list", ordered: false, items: ["O'yindan to'liq chiqing, fon rejimida qoldirmang, so'ng qayta kiring: balans ko'pincha faqat yangi sessiyada yangilanadi.","Do'kon bo'limini ochib, yuqoridagi CP hisoblagichiga qarang.","O'yin ichidagi pochta bo'limini tekshiring, ba'zi to'ldirishlar u yerga xabar sifatida tushadi.","Botdagi buyurtmalar tarixini oching va buyurtma holatini ko'ring.","Chekdagi ID ni o'z profilingizdagi ID bilan solishtiring: tasdiqlangan nik haqiqatan sizniki bo'lganmi.","Shundan keyin ham CP ko'rinmasa, buyurtma raqami bilan @StarsPaymeeSupport ga yozing."] },
    { t: "p", text: "Har bir sababni alohida ko'rib chiqadigan batafsil ro'yxat <a href=\"/blog/codm-cp-kelmadi-nima-qilish\">CODM CP kelmadi degan qo'llanmada</a> yig'ilgan. Agar to'lov o'tgan bo'lsa-yu buyurtma holati uzoq vaqt o'zgarmasa, o'sha yerdan boshlagan ma'qul." },
    { t: "h2", id: "xavfsizlik-parol-soralmaydi", text: "Xavfsizlik: sizdan hech qachon parol so'ralmaydi" },
    { t: "note", text: "Qonuniy to'ldirish faqat ochiq Player ID orqali bo'ladi. Parol, SMS yoki OTP kod, Garena hisobiga kirish, masofaviy ulanish ilovasi yoki ekranni ulashish so'ralsa, suhbatni to'xtating.", title: "Parol so'ragan sotuvchi firibgar", tone: "warn" },
    { t: "list", ordered: false, items: ["Akkauntingizni bering, o'zim to'ldirib qo'yaman degan takliflar. Bu hisobni yo'qotishning eng keng tarqalgan yo'li.","Regionni o'zgartirib beraman yoki Garena hisobini Global ga ko'chiraman degan xizmatlar. Bunday aralashuv hisob bloklanishiga olib kelishi mumkin.","Bepul CP generatori va CP hack saytlari. Ular CP bermaydi, faqat login ma'lumotlarini yig'adi, chunki o'yin valyutasi faqat nashriyot serverida yaratiladi.","Avval pul olib, keyin tizimda xato bo'ldi, yana bir marta to'lang deydigan shaxsiy sotuvchilar.","Rasmiy bo'lmagan promo kod evaziga ID va parolni so'raydigan xabarlar."] },
    { t: "p", text: "Bu sxemalarning aksariyati bir xil ishlaydi: sizga narx emas, shoshilinchlik sotiladi. Aksiya tugayapti, oxirgi ikkita paket qoldi, hozir to'lasangiz ikki barobar CP degan gaplar o'ylab ko'rishga vaqt qoldirmaslik uchun aytiladi. Haqiqiy to'ldirishda shoshilishga sabab yo'q, chunki ID va nik o'zgarmaydi." },
    { t: "p", text: "GemPay hech bir o'yin nashriyotining rasmiy hamkori emas va buni ochiq yozadi: xizmat CP ni provayder kanali orqali yetkazadi, hisobingizga esa hech qachon kirmaydi. Sizdan talab qilinadigan yagona ma'lumot profilingizda ochiq turgan Player ID." },
    { t: "h2", id: "cp-ni-hozir-toldiring", text: "CP ni hozir to'ldiring" },
    { t: "p", text: "Player ID ni oldindan nusxa ko'chirib qo'ying, shundan keyin to'ldirish bir necha teginishda tugaydi. Joriy paketlar ro'yxati <a href=\"/oyinlar/call-of-duty-mobile\">Call of Duty: Mobile CP to'ldirish sahifasida</a> turadi, boshqa o'yinlar esa <a href=\"/oyinlar\">GemPay o'yinlar katalogida</a> yig'ilgan. Savol tug'ilsa yoki buyurtma osilib qolsa, buyurtma raqami bilan <strong>@StarsPaymeeSupport</strong> ga yozing." },
    { t: "cta", text: "@Gempayuz_bot ni oching va CP ni so'mda to'ldiring, nickname tekshiruvi bepul." },
    { t: "links", title: "Shu mavzudagi boshqa materiallar", items: [{"label":"Call of Duty: Mobile CP to'ldirish sahifasi","href":"/oyinlar/call-of-duty-mobile"},{"label":"CODM Garena va Global farqi: qaysi akkaunt sizda","href":"/blog/codm-garena-global-farqi"},{"label":"CODM CP kelmadi: sabablari va qadam-baqadam yechimi","href":"/blog/codm-cp-kelmadi-nima-qilish"},{"label":"CODM CP ni arzon va xavfsiz olish usullari taqqoslandi","href":"/blog/codm-cp-arzon-qayerdan-olish"},{"label":"CP (COD Points) nima va nimaga ishlatiladi","href":"/blog/cod-points-cp-nima"},{"label":"GemPay o'yinlar katalogi","href":"/oyinlar"}] }
      ],
      faq: [
              {
                      "q": "Call of Duty: Mobile CP ni O'zbekistondan sotib olsa bo'ladimi?",
                      "a": "Ha. GemPay Telegram mini ilovasi O'zbekiston kartalarini qabul qiladi: UzCard, HUMO, Click, Payme va Paynet. Visa yoki Mastercard, kriptovalyuta va VPN kerak emas, to'lov to'g'ridan-to'g'ri so'mda o'tadi. Buyurtma Garena SG/MY Player ID bo'yicha bajariladi."
              },
              {
                      "q": "To'ldirish uchun login va parol kerakmi?",
                      "a": "Yo'q, faqat Garena Player ID kerak, u profilda ochiq turadigan ma'lumot. GemPay hech qachon parol, SMS kod yoki hisobga kirishni so'ramaydi. Parol so'ragan sotuvchidan voz keching, bu akkauntni yo'qotishning eng keng tarqalgan yo'li."
              },
              {
                      "q": "CP qancha vaqtda keladi?",
                      "a": "Odatda uch daqiqa atrofida, band vaqtlarda besh daqiqagacha cho'zilishi mumkin. Agar shundan keyin ham ko'rinmasa, o'yindan to'liq chiqib qayta kiring va o'yin ichidagi pochta bo'limini tekshiring. Muammo saqlanib qolsa, buyurtma raqami bilan @StarsPaymeeSupport ga yozing."
              },
              {
                      "q": "Narxlar qayerda ko'rsatiladi va nega saytda yozilmagan?",
                      "a": "Narx botda paketni tanlaganingizda real vaqtda chiqadi. Provayder narxi va valyuta kursi kun davomida o'zgargani uchun saytda qat'iy so'm summasi yozilmaydi, aks holda u tez orada eskirgan bo'lardi. Botdagi raqam har doim dolzarb bo'ladi va uni ko'rish uchun to'lash shart emas."
              },
              {
                      "q": "Menda Global (Activision) akkaunt bo'lsa-chi?",
                      "a": "GemPay CP ni Garena SG/MY Player ID bo'yicha to'ldiradi. Global hisob ID si bu yerda ishlamaydi, chunki ikkala versiya alohida nashriyot, alohida server va alohida CP iqtisodiga ega. Qaysi versiya sizda ekanini aniqlash uchun Garena va Global farqi qo'llanmasini o'qing."
              },
              {
                      "q": "Nickname tekshiruvi pullikmi?",
                      "a": "Yo'q, u butunlay bepul va to'lovdan oldin bajariladi. Bot ID ga bog'langan o'yin nikini ekranga chiqaradi, siz esa uni tasdiqlaysiz. Nik sizniki bo'lmasa, to'lamang va ID ni qaytadan nusxa ko'chiring, chunki bu bosqichda hech narsa yechilmaydi."
              },
              {
                      "q": "To'lovdan keyin buyurtmani bekor qilsa bo'ladimi?",
                      "a": "To'lov tasdiqlangach buyurtma darhol provayderga uzatiladi, shuning uchun bekor qilish deyarli imkonsiz. Aynan shu sabab Player ID va nikni to'lovdan oldin tekshirish shart. Muammoli holatda buyurtma raqami bilan @StarsPaymeeSupport ga murojaat qiling."
              }
      ],
    },
  },
};

export default article;
