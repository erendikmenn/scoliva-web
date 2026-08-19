import type { Locale } from "./site";

export const copy = {
  tr: {
    htmlLang: "tr",
    nav: {
      product: "Nasıl çalışır?",
      exams: "Sınavlar",
      about: "Hikâye",
      contact: "İletişim",
      cta: "Bize yazın",
      menu: "Menü",
      close: "Kapat",
    },
    hero: {
      badge: "Adaptif öğrenme",
      titleBefore: "Öğrenme şeklini ",
      titleMark: "keşfeden",
      titleAfter: ", seninle birlikte gelişen eğitim.",
      body: "Scoliva bir soru bankası değil. Öğrenciyi tanıyan, ders videosu, not, soru, asistan ve planı aynı yerden — sana özel — üreten bir çalışma sistemi.",
      primary: "Hemen başla",
      secondary: "Sistemi incele",
      proofA: "YKS",
      proofANote: "Şimdi",
      proofB: "LGS · SAT · IB",
      proofBNote: "Yolda",
      bubbleName: "Scoliva Asistan",
      bubble:
        "Denklem sistemlerinde hızlanman gerekiyor. Bu konuya odaklanmış 15 soruluk bir pratik hazırladım.",
    },
    examsRibbon: "YKS · LGS · SAT · IB ve sonrası",
    what: {
      eyebrow: "Ne yapıyoruz?",
      title: "Seni tanırız. Sistem sana göre kurulur.",
      items: [
        {
          title: "Ders videoları",
          body: "Aynı anlatım herkese gitmez. Video, senin seviyen ve tempo için üretilir.",
        },
        {
          title: "Notlar",
          body: "Ezber özet değil. Notların, senin boşluklarına ve tekrarlarına göre yazılır.",
        },
        {
          title: "Sorular",
          body: "Sıradaki soru ortak bir bankadan değil, sana göre seçilir.",
        },
        {
          title: "Asistan",
          body: "Takıldığında konuşabileceğin, seni tanıyan bir çalışma arkadaşı.",
        },
        {
          title: "Çalışma planı",
          body: "Bugün ne çalışacağın, senin öğrenme ritmine göre kurulur.",
        },
        {
          title: "Tekrarlar",
          body: "Unutmadan önce ve hatırlaman gereken anda geri gelir.",
        },
      ],
    },
    how: {
      eyebrow: "Nasıl çalışır?",
      title: "Adaptif bir öğrenme sistemi.",
      cta: "Deneyimi incele",
      cards: [
        {
          n: "1",
          title: "Tanı",
          body: "Öğrenciyi tanırız. Sistem, nasıl öğrendiğine göre şekillenir. Anlatım, tempo ve sıradaki adım başkasının değil, senin ritmine kurulur.",
          asideTitle: "Bilgi haritası",
          asideBody: "Neyin oturduğu, neyin açık olduğu tek bakışta.",
          asideAction: "Haritayı aç",
          items: [
            { label: "Türev", note: "Oturdu" },
            { label: "Limit", note: "Açık" },
            { label: "İntegral", note: "Yolda" },
          ],
        },
        {
          n: "2",
          title: "Uyarla",
          body: "Video, not, soru, asistan ve plan aynı yerden gelir. Hepsi sana özel üretilir; ortak bir bankadan kopyalanmaz.",
          asideTitle: "Bugün sana özel",
          asideBody: "Aynı konu, senin boşluğuna göre üç parça.",
          asideAction: "İçeriği gör",
          items: [
            { label: "Ders videosu", note: "12 dk" },
            { label: "Not", note: "Limit boşluğu" },
            { label: "Soru seti", note: "8 soru" },
          ],
        },
        {
          n: "3",
          title: "Dinamik adaptasyon",
          body: "Çalışman ilerledikçe plan da değişir. İhtiyacın olan konu tekrarı, soru tipi veya anlatım, bir mentorun rehberliğindeki gibi önüne gelir.",
          asideTitle: "Scoliva Asistan",
          asideBody:
            "Türev alma oturdu; zincir kuralında hâlâ takılıyorsun. Bugüne özel 5 soruluk bir pratik hazırladım. Çözelim mi?",
          asideAction: "Hemen başla",
          items: [],
        },
        {
          n: "4",
          title: "İlerle",
          body: "Sıradaki adım boşta kalmaz. Sınav gününe kadar neyin kapandığı, yarın neyin açık olduğu görünür ve çalışma oraya kurulur.",
          asideTitle: "Yarın",
          asideBody: "Plan, dünün çalışmasına göre yeniden kuruldu.",
          asideAction: "Planı gör",
          items: [
            { label: "09:30", note: "Limit · kısa tekrar" },
            { label: "11:00", note: "8 soruluk set" },
            { label: "20:15", note: "Asistan ile netleştir" },
          ],
        },
      ],
    },
    features: {
      eyebrow: "Sistem",
      title: "Soru bankası değil. Sana özel bir sistem.",
      items: [
        {
          title: "Bir örnek",
          body: "Takıldığın soruyu atarsın; sana göre bir çözüm videosu üretilir ve kayda geçer. Asıl iş budur: her parça sana özel.",
        },
        {
          title: "Bilgi haritası",
          body: "Güç ve boşluk tek bakışta. Sınav gününe kadar neyin oturduğu, neyin açık olduğu görünür.",
        },
        {
          title: "Haftalık özet",
          body: "Ne ilerledi, yarın ne var — kısa, dürüst bir recap. Videoların ve notların sende kalır.",
        },
      ],
    },
    exams: {
      eyebrow: "Kapsam",
      title: "Türkiye’de başlıyoruz. Her sınava açılıyoruz.",
      body: "Yüksek stakes sınav hazırlığıyla başladık. Aynı öğrenme çekirdeğini ulusal ve uluslararası yolculuklara taşıyoruz.",
      items: [
        { name: "YKS", status: "Şimdi", note: "TYT ve AYT. MEB kazanımları ve geçmiş dağılımlar." },
        { name: "LGS", status: "Yolda", note: "Ortaokul çıkışı için aynı öğrenme sistemi." },
        { name: "SAT", status: "Yolda", note: "Uluslararası geçiş için aynı çalışma sistemi." },
        { name: "IB", status: "Yolda", note: "Diploma Programme yolculuğuna uyarlanıyor." },
      ],
    },
    story: {
      eyebrow: "Hikâye",
      title: "İyi bir koça erişim bir ayrıcalık olmamalı.",
      p1: "Scoliva, sınav hazırlığındaki en büyük eşitsizliğin iyi bir koça erişim olduğuna inanan bir ekip tarafından kuruldu. Amacımız her öğrenciye — nerede yaşarsa yaşasın — kendi seviyesini bilen bir çalışma sistemi vermek.",
      p2: "Video, not, soru, asistan ve plan aynı çekirdekte. Ufuk dar değil: her sınav, her öğrenme yolculuğu.",
    },
    faq: {
      eyebrow: "Sık sorulanlar",
      title: "Kısa cevaplar.",
      items: [
        {
          q: "Scoliva nedir?",
          a: "Öğrenciyi tanıyan adaptif bir öğrenme sistemi. Ders videoları, notlar, sorular, asistan ve çalışma planı kişiye özel üretilir.",
        },
        {
          q: "Kimler için?",
          a: "Yüksek stakes sınava hazırlanan öğrenciler için başladık — önce YKS. Aynı sistem LGS, SAT ve IB yolculuklarına doğru genişliyor.",
        },
        {
          q: "Neden bana özel?",
          a: "Çünkü sistemi senin nasıl öğrendiğine göre kuruyoruz. Anlatım, soru, not ve plan başkasına değil, sana göre gelir.",
        },
        {
          q: "Klasik soru bankasından farkı ne?",
          a: "Soru bankası herkese aynı içeriği verir. Scoliva video, not, soru, asistan ve planı sana göre üretir. Takıldığın soruyu atıp çözüm videosu almak da bunun yalnızca bir örneği.",
        },
        {
          q: "Nasıl iletişime geçerim?",
          a: "Demo, iş birliği, basın ve kurumsal talepler için hello@scoliva.ai adresine yazman yeterli.",
        },
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Konuşalım.",
      body: "Demo, ortaklık, okul ve dershane iş birliği veya basın için bir iş günü içinde dönüş yaparız.",
      emailLabel: "E-posta",
      linkedinLabel: "LinkedIn",
      cta: "Bize yazın",
    },
    footer: {
      blurb: "AI for personalized learning, for every exam.",
      privacy: "Gizlilik",
      rights: "Scoliva. Tüm hakları saklıdır.",
    },
    privacy: {
      title: "Gizlilik",
      updated: "Son güncelleme: 19 Ağustos 2026",
      intro:
        "Bu sayfa scoliva.ai tanıtım sitesi için geçerlidir. Ürün hesapların açıldığında ayrı, daha ayrıntılı bir aydınlatma metni yayımlanır.",
      sections: [
        {
          title: "Ne topluyoruz?",
          body: "Bu sitede hesap oluşturmazsın. Bize e-posta yazarsan adın, adresin ve mesajın iletişim amacıyla işlenir. Sunucu günlüklerinde teknik bağlantı verisi (IP, tarayıcı, zaman) kısa süre tutulabilir.",
        },
        {
          title: "Neden?",
          body: "Yalnızca soruna cevap vermek, demo veya iş birliği talebini yürütmek ve sitenin güvenliğini sağlamak için. Reklam profili çıkarılmaz, veri satılmaz.",
        },
        {
          title: "Kimlerle paylaşılır?",
          body: "Site Cloudflare üzerinde barınır. E-posta Google Workspace (hello@scoliva.ai) üzerinden iletilir. Bu altyapı dışında üçüncü taraflara pazarlama amacıyla aktarım yapılmaz.",
        },
        {
          title: "Hakların",
          body: "KVKK kapsamındaki erişim, düzeltme, silme ve itiraz hakların için hello@scoliva.ai adresine yazman yeterlidir.",
        },
      ],
    },
  },
  en: {
    htmlLang: "en",
    nav: {
      product: "How it works",
      exams: "Exams",
      about: "Story",
      contact: "Contact",
      cta: "Write to us",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      badge: "Adaptive learning",
      titleBefore: "Education that ",
      titleMark: "discovers",
      titleAfter: " how you learn, and grows with you.",
      body: "Scoliva is not a question bank. It is a study system that knows the student and produces lesson videos, notes, questions, an assistant and a plan — for you, from one place.",
      primary: "Get started",
      secondary: "See the system",
      proofA: "YKS",
      proofANote: "Now",
      proofB: "LGS · SAT · IB",
      proofBNote: "Next",
      bubbleName: "Scoliva Assistant",
      bubble:
        "You need to pick up speed on systems of equations. I made a 15-question drill focused on that.",
    },
    examsRibbon: "YKS · LGS · SAT · IB and beyond",
    what: {
      eyebrow: "What we do",
      title: "We know you. The system is built around you.",
      items: [
        {
          title: "Lesson videos",
          body: "No shared lecture for everyone. The video is made for your level and pace.",
        },
        {
          title: "Notes",
          body: "Not a generic summary. Notes are written around your gaps and reviews.",
        },
        {
          title: "Questions",
          body: "The next item is not pulled from a shared bank. It is chosen for you.",
        },
        {
          title: "Assistant",
          body: "Someone to talk to when you’re stuck — a study partner that already knows you.",
        },
        {
          title: "Study plan",
          body: "What you work on today follows how you learn.",
        },
        {
          title: "Reviews",
          body: "It comes back before you forget, and when you need to remember.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "An adaptive learning system.",
      cta: "See the experience",
      cards: [
        {
          n: "1",
          title: "Know",
          body: "We know the student. The system takes its shape from how you learn. Explanation, pace and the next step are built around you.",
          asideTitle: "Knowledge map",
          asideBody: "What has landed and what is still open, in one view.",
          asideAction: "Open the map",
          items: [
            { label: "Derivatives", note: "Landed" },
            { label: "Limits", note: "Open" },
            { label: "Integrals", note: "Next" },
          ],
        },
        {
          n: "2",
          title: "Adapt",
          body: "Videos, notes, questions, assistant and plan come from one place. All of it is made for you — not copied from a shared bank.",
          asideTitle: "Made for today",
          asideBody: "The same topic, three pieces around your gap.",
          asideAction: "See the work",
          items: [
            { label: "Lesson video", note: "12 min" },
            { label: "Notes", note: "Limits gap" },
            { label: "Question set", note: "8 items" },
          ],
        },
        {
          n: "3",
          title: "Live adaptation",
          body: "As you work, the plan changes. The review, question type or explanation you need arrives the way it would from a mentor.",
          asideTitle: "Scoliva Assistant",
          asideBody:
            "Derivatives have landed; the chain rule still catches you. I made a 5-question drill for today. Shall we?",
          asideAction: "Start now",
          items: [],
        },
        {
          n: "4",
          title: "Move",
          body: "The next step is never empty. Through to exam day you can see what closed, what is still open, and the work is built there.",
          asideTitle: "Tomorrow",
          asideBody: "The plan was rebuilt from yesterday’s work.",
          asideAction: "See the plan",
          items: [
            { label: "09:30", note: "Limits · short review" },
            { label: "11:00", note: "Set of 8" },
            { label: "20:15", note: "Clear it with the assistant" },
          ],
        },
      ],
    },
    features: {
      eyebrow: "The system",
      title: "Not a question bank. A system built for you.",
      items: [
        {
          title: "One example",
          body: "You send a question you’re stuck on; a solution video is made for you and saved. The real work is making every part personal.",
        },
        {
          title: "Knowledge map",
          body: "Strength and gaps in one view. What has landed and what is still open, through to exam day.",
        },
        {
          title: "Weekly recaps",
          body: "What moved, what tomorrow is for — short and honest. Your videos and notes stay with you.",
        },
      ],
    },
    exams: {
      eyebrow: "Scope",
      title: "We begin in Türkiye. We are building for every exam.",
      body: "High-stakes exam prep first. The same learning core is being designed for national and international journeys.",
      items: [
        { name: "YKS", status: "Now", note: "TYT and AYT, mapped to national objectives." },
        { name: "LGS", status: "Next", note: "The same learning system for middle-school exit." },
        { name: "SAT", status: "Next", note: "The same study system, international track." },
        { name: "IB", status: "Next", note: "Being adapted for the Diploma Programme." },
      ],
    },
    story: {
      eyebrow: "Story",
      title: "Access to a good coach shouldn’t be a privilege.",
      p1: "Scoliva was founded by a team who believed the deepest unfairness in exam prep is access to a good coach. The aim is a study system that knows your level — wherever you live.",
      p2: "Videos, notes, questions, assistant and plan in one core. The horizon is not narrow: every exam, every learning journey.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Short answers.",
      items: [
        {
          q: "What is Scoliva?",
          a: "An adaptive learning system that knows the student. Lesson videos, notes, questions, an assistant and a study plan are made for you.",
        },
        {
          q: "Who is it for?",
          a: "We started with students in high-stakes exam prep — YKS first. The same system is expanding toward LGS, SAT and IB.",
        },
        {
          q: "Why is it personal?",
          a: "Because the system is built around how you learn. Explanation, questions, notes and plan are yours — not a shared default.",
        },
        {
          q: "How is this different from a question bank?",
          a: "A question bank serves the same content to everyone. Scoliva produces videos, notes, questions, an assistant and a plan for you. Sending a question for a personal solution video is only one example.",
        },
        {
          q: "How do I get in touch?",
          a: "Demo, partnership, press and schools: write to hello@scoliva.ai.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s talk.",
      body: "Demos, partnerships, schools and press — we reply within one business day.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      cta: "Write to us",
    },
    footer: {
      blurb: "AI for personalized learning, for every exam.",
      privacy: "Privacy",
      rights: "Scoliva. All rights reserved.",
    },
    privacy: {
      title: "Privacy",
      updated: "Last updated: 19 August 2026",
      intro:
        "This notice covers the scoliva.ai marketing site. A fuller product notice will ship when learner accounts open here.",
      sections: [
        {
          title: "What we collect",
          body: "You don’t create an account on this site. If you email us we process your name, address and message to reply. Server logs may keep technical connection data (IP, browser, time) briefly.",
        },
        {
          title: "Why",
          body: "Only to answer you, run a demo or partnership request, and keep the site secure. We don’t build ad profiles or sell data.",
        },
        {
          title: "Who sees it",
          body: "The site is hosted on Cloudflare. Mail is delivered through Google Workspace (hello@scoliva.ai). We don’t share data with third parties for marketing.",
        },
        {
          title: "Your rights",
          body: "For access, correction, deletion or objection, write to hello@scoliva.ai.",
        },
      ],
    },
  },
} as const satisfies Record<Locale, unknown>;
