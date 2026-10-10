// ISI DENGAN URL APPS SCRIPT SPREADSHEET HASIL DEPLOYMENT ANDA
// GANTI dengan URL Web App Google Apps Script yang berakhiran /exec
const GOOGLE_SCRIPT_URL = "TEMPEL_URL_WEB_APP_GOOGLE_APPS_SCRIPT_DI_SINI";

// Database Siswa Kelas 6A dan 6B
const validStudents = [
  // KELAS 6B
  { nisn: "3140466270", nama: "AIRIN RAHMI ANDINI", kelas: "6B" },
  { nisn: "3144872142", nama: "ALKAUSAR", kelas: "6B" },
  { nisn: "3145816553", nama: "ANINDYA JINAN RISQI", kelas: "6B" },
  { nisn: "3155916287", nama: "ANNISA RAMADANI", kelas: "6B" },
  { nisn: "3153814142", nama: "ANNISA SALSABILA", kelas: "6B" },
  { nisn: "3153207429", nama: "Asykar Alfatih", kelas: "6B" },
  { nisn: "0157237608", nama: "CAHAYA AURA NAZHIFA", kelas: "6B" },
  { nisn: "0144017685", nama: "DEWA AYU RESTTI GAURI", kelas: "6B" },
  { nisn: "3140013762", nama: "DIAN AFIKA", kelas: "6B" },
  { nisn: "3143677322", nama: "FACHRU RAFAY", kelas: "6B" },
  { nisn: "3146161150", nama: "FITRAH RAMADHAN ABDILLA", kelas: "6B" },
  { nisn: "3155806770", nama: "JANUAR MUSA P", kelas: "6B" },
  { nisn: "3158220865", nama: "KHARMAWAN", kelas: "6B" },
  { nisn: "3157251088", nama: "M HILAL FIQRI AUTHAR R", kelas: "6B" },
  { nisn: "3158928704", nama: "MIRZA SIDDIQIYAH RUSADY", kelas: "6B" },
  { nisn: "3143756321", nama: "MUH FARIS GHAIZAN", kelas: "6B" },
  { nisn: "3159351673", nama: "MUH IQWAL", kelas: "6B" },
  { nisn: "3144800157", nama: "MUH MUHAIMIN FAIZAL. M", kelas: "6B" },
  { nisn: "0131400871", nama: "MUH NAUFAL HAFIDZ", kelas: "6B" },
  { nisn: "0158917600", nama: "MUH. AL HAFIDZ NASWAR", kelas: "6B" },
  { nisn: "0149770417", nama: "MUH. AL QADRI", kelas: "6B" },
  { nisn: "3146513265", nama: "MUH. MIRZA UKAIL", kelas: "6B" },
  { nisn: "3142351906", nama: "MUHAMMAD ALGHAZHALY", kelas: "6B" },
  { nisn: "3157774636", nama: "MUHAMMAD NUR", kelas: "6B" },
  { nisn: "0127036921", nama: "Siti Almirah", kelas: "6B" },
  { nisn: "0157732812", nama: "UTARI MAHYA SANJAYA", kelas: "6B" },

  // KELAS 6A
  { nisn: "3156000315", nama: "ABID AQILAH WAHYUDI", kelas: "6A" },
  { nisn: "3147561743", nama: "AINUN HAKIMAH", kelas: "6A" },
  { nisn: "0142128968", nama: "AINUN NUR AZIZAH A", kelas: "6A" },
  { nisn: "3145705181", nama: "AMELIA AHMAD", kelas: "6A" },
  { nisn: "0141377777", nama: "ANDI FAISYA SYAHIRA", kelas: "6A" },
  { nisn: "3140573690", nama: "ANDI MUHAMMAD FAQIH AIRY H", kelas: "6A" },
  { nisn: "3147604091", nama: "CAHYA AINUN", kelas: "6A" },
  { nisn: "0148954249", nama: "DZAKY", kelas: "6A" },
  { nisn: "0158527938", nama: "FARDHAN ZAKI JASMAR", kelas: "6A" },
  { nisn: "3154882039", nama: "FEBY KHAIRUNNISA", kelas: "6A" },
  { nisn: "0158898393", nama: "KHAIRA NAJWA BAZIMA", kelas: "6A" },
  { nisn: "3141393725", nama: "LISNA YANTI", kelas: "6A" },
  { nisn: "0134551900", nama: "MUH ARDIANSYAH", kelas: "6A" },
  { nisn: "3151725727", nama: "MUH REVAN APRILIAN", kelas: "6A" },
  { nisn: "0151615246", nama: "MUH RIFKI AL FAHREZA Z", kelas: "6A" },
  { nisn: "3139286099", nama: "MUH. ARIFKI", kelas: "6A" },
  { nisn: "3141628787", nama: "MUH. MIFTAHUL YAFI ASIS", kelas: "6A" },
  { nisn: "0143085041", nama: "MUH. RAFLI", kelas: "6A" },
  { nisn: "3144207806", nama: "MUHAMMAD ARAS QURUSYA", kelas: "6A" },
  { nisn: "3159066266", nama: "MUHAMMAD SYAWAL", kelas: "6A" },
  { nisn: "0148124368", nama: "NAYLA SALSABILLAH", kelas: "6A" },
  { nisn: "3157945789", nama: "NURUL ADIVA AMRAN", kelas: "6A" },
  { nisn: "0149106374", nama: "ST ASSYURAH JUHARBI", kelas: "6A" },
  { nisn: "0141999506", nama: "SYAFWAAN SABQI", kelas: "6A" },
  { nisn: "3158929490", nama: "YUSUF GIBRAN Y", kelas: "6A" },
  { nisn: "0141239341", nama: "ZAM ZAMMY KHAIRIL MALIKI ABHAL", kelas: "6A" }
];

// Penggabungan 160 Soal
const allQuestions = [
  // PAI PG (1-15)
  { id: 1, mapel: "PAI", type: "pg", text: "Rukun iman yang keenam adalah iman kepada ....", options: ["A. Rasul", "B. Hari akhir", "C. Qada dan Qadar", "D. Malaikat"], answer: 2 },
  { id: 2, mapel: "PAI", type: "pg", text: "Rudi sudah belajar dengan giat, tetapi nilai ulangannya belum sesuai harapan. Sikap yang sesuai dengan iman kepada Qada dan Qadar adalah ....", options: ["A. Menyalahkan gurunya", "B. Berhenti belajar", "C. Mencontek agar nilai naik", "D. Bersabar, mengevaluasi diri, dan tetap berusaha"], answer: 3 },
  { id: 3, mapel: "PAI", type: "pg", text: "Asmaul Husna Ar-Rahman berarti ....", options: ["A. Maha Pengasih", "B. Maha Melihat", "C. Maha Mendengar", "D. Maha Kuasa"], answer: 0 },
  { id: 4, mapel: "PAI", type: "pg", text: "Siti menemukan dompet berisi uang di jalan dekat sekolah. Sikap amanah yang tepat adalah ....", options: ["A. Mengambil uangnya lalu membuang dompetnya", "B. Mencari pemiliknya atau menyerahkannya kepada guru atau pihak berwenang", "C. Membiarkan dompet itu di jalan", "D. Membagikan uangnya kepada teman"], answer: 1 },
  { id: 5, mapel: "PAI", type: "pg", text: "Sebelum diangkat menjadi rasul, Nabi Muhammad saw. dijuluki Al-Amin karena beliau ....", options: ["A. Sangat kaya", "B. Sangat kuat", "C. Dapat dipercaya", "D. Pandai berdagang"], answer: 2 },
  { id: 6, mapel: "PAI", type: "pg", text: "Sifat wajib rasul yang berarti jujur adalah ....", options: ["A. Siddiq", "B. Amanah", "C. Tabligh", "D. Fathanah"], answer: 0 },
  { id: 7, mapel: "PAI", type: "pg", text: "Berikut ini yang membatalkan puasa adalah ....", options: ["A. Berkumur tanpa menelan air", "B. Menggosok gigi", "C. Mandi", "D. Makan dan minum dengan sengaja"], answer: 3 },
  { id: 8, mapel: "PAI", type: "pg", text: "Zakat fitrah dikeluarkan pada ....", options: ["A. Awal bulan Rajab", "B. Bulan Ramadan sampai sebelum salat Idulfitri", "C. Hari raya Iduladha", "D. Bulan Muharam"], answer: 1 },
  { id: 9, mapel: "PAI", type: "pg", text: "Orang yang berhak menerima zakat disebut ....", options: ["A. Muzaki", "B. Munfik", "C. Mustahik", "D. Mujtahid"], answer: 2 },
  { id: 10, mapel: "PAI", type: "pg", text: "Salat berjemaah lebih utama daripada salat sendirian, yaitu dengan pahala sebanyak ... derajat.", options: ["A. 27", "B. 25", "C. 10", "D. 7"], answer: 0 },
  { id: 11, mapel: "PAI", type: "pg", text: "Nabi Yusuf a.s. tetap sabar ketika dibuang oleh saudara-saudaranya dan kemudian memaafkan mereka. Teladan yang dapat kita ambil adalah ....", options: ["A. Membalas dendam", "B. Mudah putus asa", "C. Berbohong demi selamat", "D. Sabar dan pemaaf"], answer: 3 },
  { id: 12, mapel: "PAI", type: "pg", text: "Nabi Ayyub a.s. menjadi teladan dalam hal ....", options: ["A. Kekayaan", "B. Kesabaran menghadapi penyakit dan cobaan", "C. Keberanian di medan perang", "D. Kepandaian berdagang"], answer: 1 },
  { id: 13, mapel: "PAI", type: "pg", text: "Rina melihat temannya membuang sampah sembarangan. Ia mengingatkannya karena kebersihan adalah ....", options: ["A. Sebagian dari iman", "B. Syarat naik kelas", "C. Tugas petugas kebersihan saja", "D. Aturan yang boleh dilanggar"], answer: 0 },
  { id: 14, mapel: "PAI", type: "pg", text: "Husnuzan artinya ....", options: ["A. Prasangka buruk", "B. Iri hati", "C. Berprasangka baik", "D. Marah"], answer: 2 },
  { id: 15, mapel: "PAI", type: "pg", text: "Dua orang teman bertengkar. Andi lalu meminta maaf lebih dulu dan memaafkan temannya. Akhlak yang ditunjukkan Andi adalah ....", options: ["A. Tamak", "B. Hasad", "C. Takabur", "D. Pemaaf"], answer: 3 },

  // PAI Uraian (16-20)
  { id: 16, mapel: "PAI", type: "essay", text: "Jelaskan arti beriman kepada Qada dan Qadar, lalu berikan satu contoh penerapannya di sekolah!" },
  { id: 17, mapel: "PAI", type: "essay", text: "Dimas sudah berlatih keras, tetapi gagal menjuarai lomba. Ia kecewa dan ingin berhenti mengikuti lomba. Berikan nasihat kepada Dimas berdasarkan sikap sabar dan tawakal!" },
  { id: 18, mapel: "PAI", type: "essay", text: "Sebutkan empat sifat wajib rasul beserta artinya!" },
  { id: 19, mapel: "PAI", type: "essay", text: "Sebutkan tiga hal yang dapat membatalkan puasa!" },
  { id: 20, mapel: "PAI", type: "essay", text: "Saat ujian, Hana melihat temannya menyontek. Apa yang sebaiknya dilakukan Hana menurut akhlak terpuji? Jelaskan alasannya!" },

  // Pancasila PG (21-35)
  { id: 21, mapel: "Pancasila", type: "pg", text: "Sila ketiga Pancasila berbunyi ....", options: ["A. Kemanusiaan yang adil dan beradab", "B. Persatuan Indonesia", "C. Kerakyatan yang dipimpin oleh hikmat...", "D. Keadilan sosial..."], answer: 1 },
  { id: 22, mapel: "Pancasila", type: "pg", text: "Pak RT mengajak seluruh warga membersihkan selokan bersama-sama tanpa membedakan suku dan agama. Nilai yang tampak dari kegiatan tersebut adalah ....", options: ["A. Ketuhanan semata", "B. Kekuasaan", "C. Persaingan", "D. Persatuan dan gotong royong"], answer: 3 },
  { id: 23, mapel: "Pancasila", type: "pg", text: "Berikut yang termasuk hak warga negara adalah ....", options: ["A. Mendapatkan pendidikan", "B. Membayar pajak", "C. Menaati hukum", "D. Membela negara"], answer: 0 },
  { id: 24, mapel: "Pancasila", type: "pg", text: "Contoh kewajiban warga negara adalah ....", options: ["A. Memilih agama", "B. Mendapat pekerjaan", "C. Membayar pajak", "D. Mengeluarkan pendapat"], answer: 2 },
  { id: 25, mapel: "Pancasila", type: "pg", text: "Andi dan Budi berbeda pendapat tentang tema kegiatan kelas. Cara penyelesaian yang sesuai dengan sila keempat adalah ....", options: ["A. Memaksakan kehendak", "B. Musyawarah untuk mufakat", "C. Bertaruh dengan undian", "D. Diputuskan sepihak"], answer: 1 },
  { id: 26, mapel: "Pancasila", type: "pg", text: "Di kelas VI terdapat murid dari berbagai suku dengan logat yang berbeda. Sikap yang tepat adalah ....", options: ["A. Saling menghargai perbedaan", "B. Hanya berteman dengan yang sesuku", "C. Menirukan logat teman untuk mengejek", "D. Menjauhi teman yang berbeda"], answer: 0 },
  { id: 27, mapel: "Pancasila", type: "pg", text: "Semboyan Bhinneka Tunggal Ika berarti ....", options: ["A. Bersatu kita teguh", "B. Satu nusa satu bangsa", "C. Maju terus pantang mundur", "D. Berbeda-beda tetapi tetap satu"], answer: 3 },
  { id: 28, mapel: "Pancasila", type: "pg", text: "Norma yang aturannya dibuat oleh negara dan memiliki sanksi tegas adalah norma ....", options: ["A. Kesusilaan", "B. Kesopanan", "C. Hukum", "D. Kebiasaan"], answer: 2 },
  { id: 29, mapel: "Pancasila", type: "pg", text: "Berbicara kasar kepada guru termasuk pelanggaran norma ....", options: ["A. Hukum", "B. Kesopanan", "C. Lalu lintas", "D. Pajak"], answer: 1 },
  { id: 30, mapel: "Pancasila", type: "pg", text: "Sikap yang mencerminkan sila kelima adalah ....", options: ["A. Menyontek saat ulangan", "B. Memilih-milih teman", "C. Menang sendiri", "D. Bersikap adil dalam membagi tugas kelompok"], answer: 3 }
];
