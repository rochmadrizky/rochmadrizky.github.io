export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      // bagian navbar dan footer ---
      'navbar': {
        blog: 'BLOGS',
        expert: 'EXPERT',
        thisIsMe: 'This Is Me',
      },

      'footer': {
        hakCipta: 'All rights reserved.',
      },
      // ---

      // bagian index/pages ---
      'index': {
        kegiatan: 'What I do every day?',
        salam: 'Say hello,',
        kata1: 'I like myself, I like you.',
        kata2: 'This is specifically for women only. haha',
        tags: '#justKidding',
      },

      // bagian blogs/pages ---
      'blogs':{
        judul: 'Blog about me,',
        desk: "Let's get to know each other and be friends.",
        tag: '#Blogs',
        judul2: 'Hi there! Nice to meet you.',
        salam: 'Regards! from me,',
        terimakasih: 'Thank you for visiting my website.',
        tags: '#regardsSemicolonCode',
      },

      // bagian expert/pages ---
      'expert': {
        judul: 'Notes on my skills,',
        desk1: 'I share notes, what I learned regarding my web development.',
        tag: '#Expert',
        judul2: 'Skills I have learned:',
        quotes: '" Some quote notes that I always remember.',
      },
      // 

      // bagian Hero ---
      // isi dari index/pages
      // ini halamanUp
      'halamanUp': {
        ucapan: "Hi everyone there, I'm",
      },

      // ini halamanDown
      'kegiatan': {
        judul: 'I like sports.',
        desk: 'The sport I like is boxing, almost every day I do boxing.',
      },

      'kode': {
        judul: 'My profession.',
        desk: 'My field is front-end web development, which focuses on creating web displays.',
      },

      'ngopi': {
        judul: 'I like coffee.',
        desk: 'Almost every day I drink coffee and smoke, to bring inspiration.',
      },

      'kataKata': {
        judul: 'My quote.',
        desk: "'All days are beautiful, except Monday.' this is just kidding.",
      },
      // ---

      // bagian AboutMe ---
      'aboutMe': {
        desk1: 'Regards! Let me introduce myself,',
        desk2: 'I spend my days designing and developing web applications. I specialize in web display creation frameworks often called',
        desk3: 'I enjoy creating web applications and exploring framework new technologies.',
        desk4: 'Frameworks I always use:',
      },
      // ---

      // bagian Notes ---
      'notes1': {
        ke1: 'Html & Css base.',
        desk1: 'Set the basic structure in arranging the layout and appearance during the process of creating a website.'
      },

      'notes2': {
        ke2: 'JavaScript Base.',
        desk2: 'The most common is for web application development, has dynamic elements, managing website functions and features.',
      },

      'notes3': {
        ke3: 'Using Frameworks.',
        desk3: 'In short, speeding up the process of creating a website, some of the frameworks that I often use are: Tailwind Css, Vue Js, and Nuxt Js.',
      },

      'notes4': {
        ke4: 'Using UI/UX.',
        desk4: 'Using several components available on various websites that provide UI/UX for website creation needs.',
      },
      // ---

      // bagian Quotes ---
      'kutipan1': {
        quote1: 'The peak of the spirit of success, is when we are heartbroken.',
      },

      'kutipan2': {
        quote2: "Sometimes the things we don't like, could our passion.",
      },

      'kutipan3': {
        quote3: "Don't look for money, but look for knowledge and money will follow.",
      },

      'kutipan4': {
        quote4: ' In fact, the key to life is "Grateful".',
      },
      // ---
    },

    id: {
      // bagian navbar dan footer ---
      'navbar': {
        blog: 'BLOG',
        expert: 'KEAHLIAN',
        thisIsMe: 'Ini Saya',
      },

      'footer': {
        hakCipta: 'Seluruh hak cipta.',
      },
      // ---

      // bagian index/pages ---
      'index': {
        kegiatan: 'Apa yang saya lakukan setiap hari?',
        salam: 'Katakan halo,',
        kata1: 'Aku menyukai diriku, aku menyukaimu.',
        kata2: 'Ini khusus untuk wanita saja. wkwk',
        tags: '#hanyaBercanda',
      },

      // bagian blogs/pages ---
      'blogs':{
        judul: 'Blog tentang saya,',
        desk: "Mari kita saling mengenal dan berteman.",
        tag: '#Blog',
        judul2: 'Hai, yang di sana! Senang berkenalan dengan Anda.',
        salam: 'Salam! dari saya,',
        terimakasih: 'Terima kasih telah mengunjungi situs web saya.',
        tags: '#salamKodeTitikKoma',
      },

      // bagian expert/pages ---
      'expert': {
        judul: 'Catatan tentang keterampilan saya,',
        desk1: 'Saya berbagi catatan, apa yang saya pelajari mengenai pengembangan web saya.',
        tag: '#Keahlian',
        judul2: 'Keterampilan yang telah saya pelajari:',
        quotes: '" Beberapa catatan kutipan yang selalu saya ingat.',
      },
      //---

      // bagian Hero ---
      // isi dari index/pages
      // ini halamanUp
      'halamanUp': {
        ucapan: "Halo semuanya, Saya",
      },

      // ini halamanDown ---
      'kegiatan': {
        judul: 'Saya suka olahraga.',
        desk: 'Olahraga yang saya suka adalah tinju, hampir setiap hari saya melakukan tinju.',
      },

      'kode': {
        judul: 'Profesi saya',
        desk: 'Bidang saya adalah pengembangan web front-end, yang fokus pada pembuatan tampilan web.',
      },

      'ngopi': {
        judul: 'Saya suka kopi.',
        desk: 'Hampir setiap hari saya minum kopi dan merokok, untuk mendatangkan inspirasi.',
      },

      'kataKata': {
        judul: 'Kutipan saya.',
        desk: "'Semua hari itu indah, kecuali hari Senin.' ini hanya bercanda."
      },
      // ---

      // bagian AboutMe ---
      'aboutMe': {
        desk1: 'Salam! Biarkan saya memperkenalkan diri,',
        desk2: 'Saya menghabiskan hari-hari saya merancang dan mengembangkan aplikasi web. Saya berspesialisasi dalam kerangka pembuatan tampilan web yang sering disebut',
        desk3: 'Saya menikmati membuat aplikasi web dan menjelajahi kerangka teknologi baru.',
        desk4: 'Kerangka kerja yang selalu saya gunakan:',
      },
      // ---

      // bagian Notes ---
      'notes1': {
        ke1: 'Basis HTML & Css.',
        desk1: 'Mengatur struktur dasar dalam menata tata letak dan tampilan pada saat proses pembuatan website.'
      },

      'notes2': {
        ke2: 'Basis JavaScript.',
        desk2: 'Yang paling umum adalah untuk pengembangan aplikasi web, memiliki elemen dinamis, mengelola fungsi dan fitur situs web.',
      },

      'notes3': {
        ke3: 'Menggunakan Kerangka Kerja.',
        desk3: 'Singkatnya untuk mempercepat proses pembuatan website, beberapa kerangka kerja yang sering saya gunakan adalah: Tailwind Css, Vue Js, dan Nuxt Js.',
      },

      'notes4': {
        ke4: 'Menggunakan UI/UX.',
        desk4: 'Menggunakan beberapa komponen yang tersedia di berbagai website yang menyediakan UI/UX untuk kebutuhan pembuatan website.',
      },
      // ---

      // bagian Quotes ---
      'kutipan1': {
        quote1: 'Puncak dari semangat kesuksesan, adalah ketika kita sedang patah hati.',
      },

      'kutipan2': {
        quote2: "Terkadang hal yang tidak kita sukai, bisa jadi itu passion kita.",
      },

      'kutipan3': {
        quote3: "Jangan mencari uang, tapi carilah ilmu maka uang akan mengikuti.",
      },

      'kutipan4': {
        quote4: 'Padahal, kunci hidup adalah “Bersyukur”.',
      },
      // ---
    }
  }
}))
