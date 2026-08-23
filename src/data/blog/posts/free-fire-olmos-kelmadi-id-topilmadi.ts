// AVTOMATIK KIRITILGAN — `npm run ingest`.
// Manba reja: .plan/articles/free-fire-olmos-kelmadi-id-topilmadi.json
// Qo'lda tahrirlash mumkin; keyingi ingest faqat yangi fayllarni qo'shadi.

import type { Article } from "../types";

const article: Article = {
  slug: "free-fire-olmos-kelmadi-id-topilmadi",
  game: "free-fire",
  type: "problem",
  datePublished: "2026-08-23",
  dateModified: "2026-08-23",
  pillar: false,
  keywords: ["free fire olmos kelmadi","free fire id topilmadi","free fire uid xato","free fire olmos tushmadi","free fire region qo'llab-quvvatlanmaydi","free fire to'lov o'tdi olmos yo'q","free fire noto'g'ri id ga to'ldirdim"],
  locales: {
    uz: {
      title: "Free Fire olmos kelmadi yoki «ID topilmadi» — sabablari va yechimi",
      metaTitle: "Free Fire olmos kelmadi? ID xatosi yechimi",
      metaDescription: "Free Fire olmosi kelmadimi yoki ID topilmadimi? Xatoning 6 ta sababi, 15 daqiqalik tekshiruv rejasi va supportga nima yuborish kerakligi bir sahifada.",
      excerpt: "Olmos tushmadimi yoki bot Player ID ni topmayaptimi? Ikkala xatoning sabablari, tekshiruv tartibi va supportga yuboriladigan aniq ro'yxat.",
      answer: "Free Fire olmosi kelmasligining asosiy sabablari: noto'g'ri Player ID, nik o'rniga UID kiritilmagani, akkaunt regioni qo'llab-quvvatlanmasligi yoki o'yin serveri tomonidagi navbat. Avval o'yinni to'liq yopib qayta oching va balansni tekshiring. Olmos 15 daqiqada ham kelmasa, to'lov chekini va UID ni @StarsPaymeeSupport ga yuboring: buyurtma qo'lda tekshiriladi.",
      body: [
    { t: "p", text: "Free Fire to'ldirishda ikki xil xato bor va ular bir xil his qilinadi, lekin yechimi butunlay boshqacha. Birinchisi to'lovgacha yuz beradi: bot Player ID ni qabul qilmaydi yoki nikni ko'rsata olmaydi — bu bosqichda hali hech narsa to'lanmagan va hech narsa yo'qolmagan. Ikkinchisi to'lovdan keyin: pul yechilgan, buyurtma raqami bor, lekin o'yin ichidagi olmos hisobi eski holicha turibdi." },
    { t: "p", text: "Quyida ikkalasi alohida ko'rib chiqilgan. Har bir sabab uchun uni bir daqiqada tasdiqlash yoki rad etish usuli bor, oxirida esa supportga yuboriladigan aniq ro'yxat. <a href=\"/oyinlar/free-fire\">Free Fire to'ldirish sahifasida</a> nik tekshiruvi to'lovdan oldin va bepul ishlaydi — xatolarning katta qismi aynan shu qadamda tutiladi." },
    { t: "facts", items: [{"k":"Yetkazib berish","v":"Odatda bir necha daqiqada, avtomatik"},{"k":"Nik tekshiruvi","v":"To'lovdan oldin, bepul"},{"k":"Qo'llab-quvvatlanadigan versiya","v":"Free Fire Global (MAX bilan bitta akkaunt)"},{"k":"Support","v":"@StarsPaymeeSupport"}] },
    { t: "h2", id: "tez-tekshiruv", text: "Avval shuni qiling: 60 soniyalik tekshiruv" },
    { t: "p", text: "Yordam so'rashdan oldin uchta harakat. Amaliyotda «olmos kelmadi» degan murojaatlarning sezilarli qismi shu yerda yopiladi: olmos allaqachon hisobda bo'ladi, faqat ilova eski balansni ko'rsatib turgan bo'ladi." },
    { t: "steps", items: [{"title":"O'yinni to'liq yoping va qayta oching","text":"Fon rejimiga tashlash yetarli emas — ilovani ochiq ilovalar ro'yxatidan olib tashlang, so'ng qaytadan kiring. Mijoz balansni xotiradan ko'rsatishi mumkin, to'liq qayta ishga tushirish esa uni serverdan yangilaydi."},{"title":"Balansni solishtiring","text":"Olmos hisobi odatda asosiy ekranning yuqori qismida turadi. Raqamni to'lovdan oldingi qiymat bilan solishtiring: o'sish bo'lsa, buyurtma bajarilgan va boshqa hech narsa qilish shart emas."},{"title":"Botdagi buyurtma holatini oching","text":"@Gempayuz_bot ichida oxirgi buyurtmalaringiz ro'yxati bor. Buyurtma bajarilgan ko'rinsa, muammo o'yin mijozida; kutilayotgan yoki xato holatida bo'lsa, buyurtma raqamini saqlab qo'ying — supportga aynan shu kerak bo'ladi."}] },
    { t: "h2", id: "id-topilmadi-sabablari", text: "«ID topilmadi» xatosining 6 ta sababi" },
    { t: "p", text: "Bu xato to'lovgacha chiqadi va deyarli har doim kiritilgan raqamga tegishli bo'ladi. Sabablarni uchrash chastotasi bo'yicha tartibda ko'ramiz." },
    { t: "p", text: "<strong>1. Nik yoki e-mail kiritilgan, UID emas.</strong> Player ID — faqat raqamlardan iborat identifikator, odatda 8-12 xona. U o'yindagi nomingiz ham, Google yoki Facebook pochtangiz ham emas. Nikni istalgan vaqtda o'zgartirish mumkin, UID esa akkaunt bilan qoladi — shuning uchun tekshiruv aynan UID bo'yicha ketadi." },
    { t: "p", text: "<strong>2. Nusxalashda raqam buzilgan.</strong> Qo'lda ko'chirilganda 0 bilan 8, 1 bilan 7 chalkashadi; bufer orqali olinganda esa oldiga yoki oxiriga probel qo'shilib qoladi. UID ni profil ekranidagi nusxalash tugmasi orqali oling va botga qo'yganda ortiqcha belgi qolmaganini ko'zdan kechiring." },
    { t: "p", text: "<strong>3. Akkaunt juda yangi.</strong> Bir necha soat oldin yaratilgan profil to'ldirish tizimlariga darrov ko'rinmasligi mumkin. Bu xato o'zi o'tadi — bir necha soatdan keyin qayta urinib ko'ring." },
    { t: "p", text: "<strong>4. Guest akkaunt.</strong> Hech qayerga bog'lanmagan mehmon profili — eng nozik holat. U nafaqat to'ldirishda muammo beradi, balki telefon almashtirilsa yoki ilova o'chirilsa tiklanmaydi ham. Akkauntni Google, Facebook yoki VK ga bog'lang, keyin to'ldiring." },
    { t: "p", text: "<strong>5. Akkaunt boshqa regionda.</strong> To'ldirish marshrutlari regionga bog'langan, shuning uchun mos kelmagan akkaunt so'rovda umuman topilmasligi mumkin. Bu holat alohida bo'limda ko'rib chiqilgan." },
    { t: "p", text: "<strong>6. Akkaunt bloklangan yoki o'chirilgan.</strong> Cheklangan profil tashqi so'rovlarga javob bermaydi. Buni tekshirish oson: o'yinga o'zingiz kirib ko'ring. Kira olmasangiz, muammo to'ldirishda emas, akkauntning o'zida va uni faqat o'yin nashriyotining qo'llab-quvvatlash xizmati hal qiladi." },
    { t: "p", text: "UID ni qayerdan olish va uni botga qanday kiritish <a href=\"/blog/free-fire-olmos-sotib-olish\">Free Fire olmos sotib olish qo'llanmasida</a> bosqichma-bosqich ko'rsatilgan — bu maqola esa xato allaqachon chiqqan holat uchun." },
    { t: "h2", id: "notogri-nik", text: "Bot boshqa odamning nikini ko'rsatdi — to'lamang" },
    { t: "note", text: "Ekranda chiqqan nom sizniki bo'lmasa, bu UID noto'g'ri ekanining aniq belgisi. Bu bosqichda hech narsa yechilmagan: orqaga qayting, raqamni profildan qayta oling va yangidan kiriting.", title: "Nik notanish bo'lsa, to'lovni tasdiqlamang", tone: "warn" },
    { t: "p", text: "Eng ko'p uchraydigan holat — do'stning UID si. Bir marta nusxalangan raqam buferda yoki yozuvlarda qolib ketadi, keyin o'ylamasdan qo'yiladi. Ikkinchi holat — bitta raqam adashishi: kichik ekranda 0 va 8, 1 va 7 deyarli bir xil ko'rinadi, natijada butunlay boshqa, lekin haqiqiy akkaunt topiladi va tizim uni bemalol tasdiqlaydi." },
    { t: "p", text: "Agar to'lov allaqachon o'tgan va olmos begona akkauntga tushgan bo'lsa, uni qaytarish yo'li yo'q: o'yin nashriyoti olmosni bir profildan boshqasiga ko'chirmaydi, yetkazilgan raqamli tovar esa bekor qilinmaydi. Sotuvchi ham buni orqaga qaytara olmaydi. Nikni o'qish ikki soniya oladi va bu butun jarayondagi yagona tuzatib bo'lmaydigan xatodan saqlaydi." },
    { t: "h2", id: "region", text: "Akkaunt regioni mos kelmasa nima bo'ladi" },
    { t: "p", text: "Free Fire akkaunti birinchi kirishda IP manzil bo'yicha ma'lum server mintaqasiga biriktiriladi. Keyinchalik bu bog'lanish o'zgarmaydi — na profil sozlamalarida, na murojaat orqali. To'ldirish marshrutlari ham xuddi shu tartibda ishlaydi: har bir provayder faqat o'zi ulangan mintaqalarga yetkazadi." },
    { t: "p", text: "GemPay Free Fire Global bilan ishlaydi. Agar akkaunt boshqa mintaqa serveriga biriktirilgan bo'lsa, buyurtma bajarilmaydi va mablag' qaytariladi, chunki yetkazib berish umuman boshlanmaydi. Buni oldindan bilishning oddiy yo'li — o'sha bepul nik tekshiruvi: tizim akkauntni topib, nomni ko'rsata olsa, marshrut mos kelgan bo'ladi." },
    { t: "note", text: "Mavjud akkauntning mintaqasi VPN yoqilganda ham o'zgarmaydi, chunki u birinchi kirishda biriktirilgan. Bundan tashqari, region cheklovini chetlab o'tish o'yin qoidalariga zid va akkaunt cheklanishiga olib kelishi mumkin. Mos kelmaslik aniqlansa, to'g'ri yo'l bitta: @StarsPaymeeSupport ga UID ni yozib, marshrut bor-yo'qligini so'rash.", title: "VPN bilan regionni «tuzatib» bo'lmaydi", tone: "warn" },
    { t: "h2", id: "pul-otdi-olmos-yoq", text: "To'lov o'tdi, olmos yo'q: 15 daqiqalik reja" },
    { t: "p", text: "Bu bo'lim to'lov tasdiqlangan, lekin balans o'zgarmagan holat uchun. Vaqt bo'yicha harakat qiling — shoshilib qilingan ish odatda vaziyatni chalkashtiradi." },
    { t: "steps", items: [{"title":"0-2 daqiqa: kuting","text":"Buyurtma odatda shu oraliqda avtomatik bajariladi. Bu vaqtda o'yindan chiqmang, akkauntni almashtirmang va yangi buyurtma bermang."},{"title":"2-5 daqiqa: mijozni yangilang","text":"O'yinni to'liq yopib qayta oching va balansga qarang. Bir nechta akkauntingiz bo'lsa, aynan UID si to'lovda ko'rsatilgan profilga kirganingizga ishonch hosil qiling."},{"title":"5-15 daqiqa: dalillarni yig'ing","text":"Botdagi buyurtma raqamini, to'lov chekini yoki tranzaksiya ID sini va o'yin ichidagi balans skrinshotini bir joyga to'plang. Bu ma'lumotlar tekshiruvni bir necha barobar tezlashtiradi."},{"title":"15 daqiqadan keyin: supportga yozing","text":"@StarsPaymeeSupport ga yig'ilgan ma'lumotlarni bitta xabarda yuboring. Buyurtma qo'lda tekshiriladi: yetkazib berish yakunlanadi yoki mablag' qaytariladi."}] },
    { t: "p", text: "<strong>Bularni qilmang.</strong> O'sha paketni qayta to'lamang: har bir to'lov alohida buyurtma sifatida ishlanadi va ikkalasi ham yetkazilishi mumkin. Bank orqali chargeback ochmang — bu tekshiruvni to'xtatadi va odatda uzoq davom etadi. Xuddi shu buyurtmani boshqa botlarda takrorlashning ham ma'nosi yo'q." },
    { t: "p", text: "Alohida ogohlantirish: shunday paytda «olmosingizni qaytaramiz» yoki «bepul olmos beramiz» degan begona kanallar tez topiladi. Ularga UID, chek yoki akkaunt ma'lumotini bermang. Bunday takliflar qanday ishlashi va nega ularning hech biri haqiqiy emasligi <a href=\"/blog/free-fire-bepul-olmos-haqiqatmi\">bepul olmos va firibgarlik sxemalari haqidagi maqolada</a> ochib berilgan." },
    { t: "h2", id: "max-va-bonus", text: "Free Fire MAX, bonus olmos va «yo'qolgan» balans" },
    { t: "p", text: "Free Fire va Free Fire MAX — bitta akkaunt va bitta olmos hisobi. Oddiy versiyada to'ldirilgan olmos MAX da ham turadi va aksincha. Agar MAX da balans ko'rinmasa, ikkinchi ilovada boshqa profilga kirgan bo'lish ehtimoli yuqori: ikkalasida ham profilni ochib UID ni solishtiring, raqamlar bir xil bo'lishi kerak." },
    { t: "p", text: "Ikkinchi tez-tez uchraydigan chalkashlik — kirish usuli. Bitta telefonda Google va Facebook orqali ikkita butunlay alohida akkaunt bo'lishi mumkin va ular hech qanday balansni bo'lishmaydi. «Olmos yo'qoldi» degan xulosaga kelishdan oldin o'yindan chiqib, to'lovda ko'rsatilgan UID ga ega akkauntga kiring." },
    { t: "p", text: "Uchinchisi — bonus olmos. Paketlar odatda asosiy miqdor va unga qo'shiladigan bonusdan iborat bo'ladi, shuning uchun hisobga tushgan umumiy raqam paket nomidagi sondan katta chiqadi va bu xato emas. Bonus qismi ayrim aksiya yoki bo'limlarda cheklangan bo'lishi mumkin — bu o'yin tomonidagi qoida, sotuvchiga bog'liq emas. Paketlar tuzilishi <a href=\"/blog/free-fire-olmos-nima-va-paketlari\">olmos paketlari haqidagi maqolada</a> yozilgan; joriy tarkib va narx esa har doim botda, to'lovdan oldin ko'rinadi." },
    { t: "h2", id: "supportga-nima-yuborish", text: "Supportga nima yuborish kerak" },
    { t: "p", text: "Hamma narsani bitta xabarda yuborsangiz, tekshiruv bir bosqichda tugaydi. Kerakli ro'yxat qisqa:" },
    { t: "list", ordered: false, items: ["UID — to'lovda ko'rsatilgan Player ID","Botdagi buyurtma raqami","To'lov cheki yoki tranzaksiya ID si","To'lov vaqti va usuli: UzCard, HUMO, Click, Payme yoki Paynet","O'yin ichidagi nik va joriy olmos balansi skrinshoti","Xato matni chiqqan bo'lsa, uning skrinshoti"] },
    { t: "p", text: "Manzil: @StarsPaymeeSupport. To'lov buyurtma raqami bo'yicha tizim yozuvlaridan topiladi, shuning uchun chek yo'qolgan bo'lsa ham murojaat qilish mumkin — shunchaki tekshiruv biroz uzoqroq davom etadi." },
    { t: "note", text: "Akkaunt paroli, SMS kod, karta to'liq raqami va CVV — bularning hech biri to'ldirish uchun kerak emas va GemPay ularni hech qachon so'ramaydi. Kim so'rasa, u support emas.", title: "Bularni hech kimga yubormang", tone: "warn" },
    { t: "h2", id: "keyingi-safar", text: "Keyingi safar xatosiz to'ldirish" },
    { t: "p", text: "Uchta odat bu maqolaning yarmini keraksiz qiladi. Birinchisi — UID ni bir marta profildan olib, telefon yozuvlariga saqlab qo'yish; keyin har safar qidirish shart bo'lmaydi. Ikkinchisi — akkauntni Google, Facebook yoki VK ga bog'lash: bog'lanmagan profil na tiklanadi, na ishonchli to'ldiriladi. Uchinchisi — nikni har safar o'qib chiqish, chunki tekshiruv bepul va to'lovdan oldin ishlaydi." },
    { t: "note", text: "GemPay o'yin nashriyotining rasmiy hamkori emas — bu mustaqil to'ldirish xizmati. Yetkazib berish faqat ochiq Player ID orqali bajariladi, akkauntga kirish talab qilinmaydi.", title: "Xizmat maqomi haqida", tone: "info" },
    { t: "p", text: "To'ldirishning to'liq tartibi <a href=\"/oyinlar/free-fire\">Free Fire sahifasida</a>, boshqa o'yinlar bo'yicha to'lov usullari esa <a href=\"/oyinlar\">o'yinlar katalogida</a> ko'rsatilgan. Joriy paketlar va ularning narxi doim botda, to'lov oynasidan oldin ko'rinadi." },
    { t: "cta", text: "Player ID ni kiriting, nikni bepul tekshiring va faqat shundan keyin to'lang — @Gempayuz_bot" },
    { t: "links", title: "Free Fire bo'yicha davomi", items: [{"label":"Free Fire olmos sotib olish — bosqichma-bosqich qo'llanma","href":"/blog/free-fire-olmos-sotib-olish"},{"label":"Bepul olmos: qaysi usullar haqiqiy, qaysilari firibgarlik","href":"/blog/free-fire-bepul-olmos-haqiqatmi"},{"label":"Olmos paketlari va narx nimaga bog'liq","href":"/blog/free-fire-olmos-nima-va-paketlari"},{"label":"Free Fire to'ldirish sahifasi","href":"/oyinlar/free-fire"},{"label":"Barcha o'yinlar katalogi","href":"/oyinlar"}] }
      ],
      faq: [
              {
                      "q": "To'lov o'tdi, lekin olmos kelmadi. Pul yo'qoldimi?",
                      "a": "Yo'q. Har bir to'lov o'z buyurtma raqami bilan qayd etiladi va tizim yozuvlarida qoladi. Yetkazib berish bajarilmagan bo'lsa, buyurtma qo'lda tekshiriladi: olmos yuboriladi yoki mablag' qaytariladi. Chekni saqlang va @StarsPaymeeSupport ga buyurtma raqami bilan yozing."
              },
              {
                      "q": "Nega bot mening ID yimni topa olmayapti?",
                      "a": "Ko'p hollarda nik yoki e-mail kiritilgan bo'ladi, UID emas, yoki nusxalashda probel qo'shilib qolgan bo'ladi. Player ID faqat raqamlardan iborat va uni profil ekranidagi nusxalash tugmasi orqali olish xavfsizroq. Yangi yaratilgan akkaunt esa bir necha soatdan keyin ko'rinishi mumkin."
              },
              {
                      "q": "Noto'g'ri UID ga to'ldirdim, qaytarib bo'ladimi?",
                      "a": "Yo'q. O'yin nashriyoti olmosni bir akkauntdan boshqasiga ko'chirmaydi, shuning uchun yetkazilgan olmosni qaytarish imkonsiz. Aynan shuning uchun bot to'lovdan oldin nikni bepul ko'rsatadi — nik notanish bo'lsa, to'lovni tasdiqlamang."
              },
              {
                      "q": "«Region qo'llab-quvvatlanmaydi» degani nima?",
                      "a": "Free Fire akkaunti birinchi kirishda ma'lum server mintaqasiga biriktiriladi va bu keyin o'zgarmaydi. To'ldirish marshrutlari ham mintaqaga bog'liq. GemPay Global versiya bilan ishlaydi; boshqa mintaqadagi akkauntga buyurtma tushmaydi va to'lov qaytariladi."
              },
              {
                      "q": "VPN orqali regionni o'zgartirsam bo'ladimi?",
                      "a": "Tavsiya qilmaymiz. Mavjud akkauntning mintaqasi VPN bilan baribir o'zgarmaydi, chunki u birinchi kirishda biriktirilgan. Bundan tashqari, cheklovni chetlab o'tishga urinish o'yin qoidalariga zid va akkaunt bloklanishiga olib kelishi mumkin. To'g'ri yo'l — nik tekshiruvidan o'tish va support bilan bog'lanish."
              },
              {
                      "q": "Olmos Free Fire MAX da ko'rinmayapti, nega?",
                      "a": "Free Fire va Free Fire MAX bitta akkauntni va bitta olmos hisobini bo'lishadi, shuning uchun balans ikkalasida ham bir xil bo'lishi kerak. Ko'rinmasa, ehtimol ikkinchi ilovada boshqa profilga kirgansiz. Ikkala ilovada profilni ochib UID raqamini solishtiring."
              },
              {
                      "q": "Bonus olmoslar nega hamma joyda ishlamayapti?",
                      "a": "Paketlar odatda asosiy va bonus olmosdan iborat bo'ladi. Bonus qismi oddiy xaridlarga o'tadi, lekin ayrim aksiya va bo'limlarda cheklov bo'lishi mumkin. Bu o'yin tomonidagi qoida va sotuvchiga bog'liq emas."
              },
              {
                      "q": "Qayta to'lasam, olmos ikki marta keladimi?",
                      "a": "Ha, har bir to'lov alohida buyurtma sifatida bajariladi, shuning uchun ikki marta to'lasangiz ikki marta yetkazilishi mumkin. Birinchi buyurtma osilib qolgan bo'lsa, qayta to'lamang: avval @StarsPaymeeSupport ga buyurtma raqami bilan yozing."
              }
      ],
    },
  },
};

export default article;
