// ISI DENGAN URL APPS SCRIPT WEB APP ANDA YANG BENAR
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwaRxYKINNzIDZfRlh6gsjkCSoSP4096V01LUlbG0CW/dev";

const validStudents = [
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

const allQuestions = [
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
  { id: 16, mapel: "PAI", type: "essay", text: "Jelaskan arti beriman kepada Qada dan Qadar, lalu berikan satu contoh penerapannya di sekolah!" },
  { id: 17, mapel: "PAI", type: "essay", text: "Dimas sudah berlatih keras, tetapi gagal menjuarai lomba. Ia kecewa dan ingin berhenti mengikuti lomba. Berikan nasihat kepada Dimas berdasarkan sikap sabar dan tawakal!" },
  { id: 18, mapel: "PAI", type: "essay", text: "Sebutkan empat sifat wajib rasul beserta artinya!" },
  { id: 19, mapel: "PAI", type: "essay", text: "Sebutkan tiga hal yang dapat membatalkan puasa!" },
  { id: 20, mapel: "PAI", type: "essay", text: "Saat ujian, Hana melihat temannya menyontek. Apa yang sebaiknya dilakukan Hana menurut akhlak terpuji? Jelaskan alasannya!" },
  { id: 21, mapel: "Pancasila", type: "pg", text: "Sila ketiga Pancasila berbunyi ....", options: ["A. Kemanusiaan yang adil dan beradab", "B. Persatuan Indonesia", "C. Kerakyatan yang dipimpin oleh hikmat...", "D. Keadilan sosial..."], answer: 1 },
  { id: 22, mapel: "Pancasila", type: "pg", text: "Pak RT mengajak seluruh warga membersihkan selokan bersama-sama tanpa membedakan suku dan agama. Nilai yang tampak dari kegiatan tersebut adalah ....", options: ["A. Ketuhanan semata", "B. Kekuasaan", "C. Persaingan", "D. Persatuan dan gotong royong"], answer: 3 },
  { id: 23, mapel: "Pancasila", type: "pg", text: "Berikut yang termasuk hak warga negara adalah ....", options: ["A. Mendapatkan pendidikan", "B. Membayar pajak", "C. Menaati hukum", "D. Membela negara"], answer: 0 },
  { id: 24, mapel: "Pancasila", type: "pg", text: "Contoh kewajiban warga negara adalah ....", options: ["A. Memilih agama", "B. Mendapat pekerjaan", "C. Membayar pajak", "D. Mengeluarkan pendapat"], answer: 2 },
  { id: 25, mapel: "Pancasila", type: "pg", text: "Andi dan Budi berbeda pendapat tentang tema kegiatan kelas. Cara penyelesaian yang sesuai dengan sila keempat adalah ....", options: ["A. Memaksakan kehendak", "B. Musyawarah untuk mufakat", "C. Bertaruh dengan undian", "D. Diputuskan sepihak"], answer: 1 },
  { id: 26, mapel: "Pancasila", type: "pg", text: "Di kelas VI terdapat murid dari berbagai suku dengan logat yang berbeda. Sikap yang tepat adalah ....", options: ["A. Saling menghargai perbedaan", "B. Hanya berteman dengan yang sesuku", "C. Menirukan logat teman untuk mengejek", "D. Menjauhi teman yang berbeda"], answer: 0 },
  { id: 27, mapel: "Pancasila", type: "pg", text: "Semboyan Bhinneka Tunggal Ika berarti ....", options: ["A. Bersatu kita teguh", "B. Satu nusa satu bangsa", "C. Maju terus pantang mundur", "D. Berbeda-beda tetapi tetap satu"], answer: 3 },
  { id: 28, mapel: "Pancasila", type: "pg", text: "Norma yang aturannya dibuat oleh negara dan memiliki sanksi tegas adalah norma ....", options: ["A. Kesusilaan", "B. Kesopanan", "C. Hukum", "D. Kebiasaan"], answer: 2 },
  { id: 29, mapel: "Pancasila", type: "pg", text: "Berbicara kasar kepada guru termasuk pelanggaran norma ....", options: ["A. Hukum", "B. Kesopanan", "C. Lalu lintas", "D. Pajak"], answer: 1 },
  { id: 30, mapel: "Pancasila", type: "pg", text: "Sikap yang mencerminkan sila kelima adalah ....", options: ["A. Menyontek saat ulangan", "B. Memilih-milih teman", "C. Menang sendiri", "D. Bersikap adil dalam membagi tugas kelompok"], answer: 3 },
  { id: 31, mapel: "Pancasila", type: "pg", text: "Pancasila sebagai dasar negara tercantum dalam ....", options: ["A. Pembukaan UUD 1945", "B. Sumpah Pemuda", "C. Teks Proklamasi", "D. Pasal 33 UUD 1945"], answer: 0 },
  { id: 32, mapel: "Pancasila", type: "pg", text: "Sumpah Pemuda diikrarkan pada tanggal ....", options: ["A. 17 Agustus 1945", "B. 20 Mei 1908", "C. 28 Oktober 1928", "D. 1 Juni 1945"], answer: 2 },
  { id: 33, mapel: "Pancasila", type: "pg", text: "Di sekolah diadakan pemilihan ketua OSIS. Setiap siswa memilih sesuai hati nurani tanpa paksaan. Hal ini mencerminkan prinsip ....", options: ["A. Otoriter", "B. Demokrasi", "C. Monarki", "D. Anarki"], answer: 1 },
  { id: 34, mapel: "Pancasila", type: "pg", text: "Di desa Sari, warga berbeda agama hidup rukun. Saat ada hari raya, mereka tidak mengganggu ibadah satu sama lain dan saling membantu. Sikap ini disebut ....", options: ["A. Toleransi", "B. Egoisme", "C. Diskriminasi", "D. Fanatisme"], answer: 0 },
  { id: 35, mapel: "Pancasila", type: "pg", text: "Beni menuntut haknya memakai fasilitas sekolah tetapi tidak mau ikut menjaga kebersihan. Sikap yang benar adalah ....", options: ["A. Menuntut hak saja", "B. Menjalankan kewajiban saja", "C. Tidak peduli", "D. Menjalankan kewajiban bersamaan dengan hak"], answer: 3 },
  { id: 36, mapel: "Pancasila", type: "essay", text: "Tuliskan bunyi kelima sila Pancasila secara berurutan!" },
  { id: 37, mapel: "Pancasila", type: "essay", text: "Dua kelompok murid berselisih karena sama-sama ingin memakai lapangan untuk kegiatan pada hari yang sama. Bagaimana cara menyelesaikannya melalui musyawarah?" },
  { id: 38, mapel: "Pancasila", type: "essay", text: "Jelaskan perbedaan hak dan kewajiban, lalu berikan masing-masing dua contoh di lingkungan sekolah!" },
  { id: 39, mapel: "Pancasila", type: "essay", text: "Seorang siswa baru berbeda suku dan logat bicaranya sering diejek. Analisislah tindakan teman-temannya, sebutkan sila yang dilanggar, dan berikan solusinya!" },
  { id: 40, mapel: "Pancasila", type: "essay", text: "Jelaskan pentingnya gotong royong dan berikan dua contoh penerapannya di lingkungan tempat tinggalmu!" },
  { id: 41, mapel: "Bahasa Indonesia", type: "pg", text: "[Bacaan 1: Hutan Mangrove Penjaga Pantai]\nGagasan utama bacaan di atas adalah ....", options: ["A. Mangrove banyak ditebang", "B. Nelayan kesulitan mencari ikan", "C. Pentingnya hutan mangrove bagi pesisir", "D. Warga Desa Bahari menanam bibit"], answer: 2 },
  { id: 42, mapel: "Bahasa Indonesia", type: "pg", text: "Manfaat akar mangrove menurut bacaan adalah ....", options: ["A. Menahan ombak sehingga abrasi berkurang", "B. Menyuburkan tambak", "C. Memperluas permukiman", "D. Menarik wisatawan"], answer: 0 },
  { id: 43, mapel: "Bahasa Indonesia", type: "pg", text: "Hasil tangkapan nelayan menurun karena ....", options: ["A. Ombak semakin tenang", "B. Warga menanam bibit", "C. Jumlah nelayan bertambah", "D. Mangrove ditebang sehingga tempat berkembang biak ikan hilang"], answer: 3 },
  { id: 44, mapel: "Bahasa Indonesia", type: "pg", text: "Arti kata 'abrasi' pada bacaan adalah ....", options: ["A. Banjir di daratan", "B. Pengikisan tepi pantai oleh ombak", "C. Kekeringan di pesisir", "D. Naiknya suhu udara"], answer: 1 },
  { id: 45, mapel: "Bahasa Indonesia", type: "pg", text: "Sikap yang dapat diteladani dari warga Desa Bahari adalah ....", options: ["A. Peduli menjaga lingkungan dengan menanam mangrove", "B. Menebang pohon untuk tambak", "C. Menunggu bantuan", "D. Memindahkan permukiman"], answer: 0 },
  { id: 46, mapel: "Bahasa Indonesia", type: "pg", text: "[Bacaan 2: Cerita Dani & Nenek Ina]\nWatak Dani dalam cerita adalah ....", options: ["A. Pemalas", "B. Pemarah", "C. Penolong", "D. Sombong"], answer: 2 },
  { id: 47, mapel: "Bahasa Indonesia", type: "pg", text: "Latar waktu dan suasana pada cerita tersebut adalah ....", options: ["A. Malam hari yang sunyi", "B. Siang hari yang terik", "C. Sore hari yang berangin", "D. Pagi hari ketika hujan deras"], answer: 3 },
  { id: 48, mapel: "Bahasa Indonesia", type: "pg", text: "Konflik batin yang dialami Dani adalah ....", options: ["A. Takut kepada Pak Satpam", "B. Ragu membantu Nenek karena takut terlambat", "C. Marah kepada Nenek Ina", "D. Malu memakai jas hujan sobek"], answer: 1 },
  { id: 49, mapel: "Bahasa Indonesia", type: "pg", text: "Amanat cerita tersebut adalah ....", options: ["A. Kita hendaknya menolong sesama walaupun ada kepentingan pribadi", "B. Harus selalu datang paling awal", "C. Jas hujan harus baru", "D. Jangan berjalan saat hujan"], answer: 0 },
  { id: 50, mapel: "Bahasa Indonesia", type: "pg", text: "Kejadian yang terjadi tepat setelah Dani membantu Nenek Ina adalah ....", options: ["A. Dani melihat Nenek kesulitan", "B. Dani merasa ragu", "C. Dani tiba di sekolah dan pagar sudah tertutup", "D. Pak Satpam tersenyum"], answer: 2 },
  { id: 51, mapel: "Bahasa Indonesia", type: "pg", text: "Kalimat yang efektif adalah ....", options: ["A. Para siswa-siswa sedang membersihkan halaman sekolah.", "B. Mereka semua para siswa itu sedang bersih-bersih.", "C. Halaman dibersihkan oleh itu para siswa kelas.", "D. Para siswa sedang membersihkan halaman sekolah."], answer: 3 },
  { id: 52, mapel: "Bahasa Indonesia", type: "pg", text: "Kalimat dengan ejaan yang tepat adalah ....", options: ["A. Ayah membeli buku, pensil, dan penggaris di Pasar Mamuju.", "B. Ayah membeli buku pensil dan penggaris di Pasar Mamuju.", "C. Ayah membeli buku, pensil, dan penggaris di pasar mamuju.", "D. ayah Membeli buku, pensil, dan penggaris di Pasar Mamuju."], answer: 0 },
  { id: 53, mapel: "Bahasa Indonesia", type: "pg", text: "\"Kakiku mau patah karena berjalan seharian.\" Kalimat ini mengandung majas ....", options: ["A. Metafora", "B. Hiperbola", "C. Personifikasi", "D. Simile"], answer: 1 },
  { id: 54, mapel: "Bahasa Indonesia", type: "pg", text: "Kata baku yang tepat adalah ....", options: ["A. Apotik", "B. Resiko", "C. Praktik", "D. Nasehat"], answer: 2 },
  { id: 55, mapel: "Bahasa Indonesia", type: "pg", text: "Kalimat pembuka pidato yang paling sesuai adalah ....", options: ["A. \"Woi, dengarkan aku bicara!\"", "B. \"Bapak dan Ibu guru serta teman-teman yang saya hormati, ....\"", "C. \"Halo, aku mau cerita nih.\"", "D. \"Pokoknya hari ini aku mau bicara.\""], answer: 1 },
  { id: 56, mapel: "Bahasa Indonesia", type: "essay", text: "Ringkaslah bacaan 1 (Hutan Mangrove) menjadi dua kalimat!" },
  { id: 57, mapel: "Bahasa Indonesia", type: "essay", text: "Dari bacaan 1, tuliskan dua penyebab dan dua akibat dari penebangan mangrove!" },
  { id: 58, mapel: "Bahasa Indonesia", type: "essay", text: "Sebutkan watak Dani pada bacaan 2 beserta bukti dari cerita!" },
  { id: 59, mapel: "Bahasa Indonesia", type: "essay", text: "Buatlah pidato singkat (4-5 kalimat) bertema 'Menjaga Kebersihan Sekolah'!" },
  { id: 60, mapel: "Bahasa Indonesia", type: "essay", text: "Kembangkan gagasan utama 'Membaca bermanfaat bagi kita' menjadi satu paragraf (minimal 4 kalimat)!" },
  { id: 61, mapel: "Matematika", type: "pg", text: "Suhu di puncak gunung -3 derajat Celsius, sedangkan di kaki gunung 25 derajat Celsius. Selisih suhunya adalah ....", options: ["A. 22 derajat Celsius", "B. 25 derajat Celsius", "C. 28 derajat Celsius", "D. 30 derajat Celsius"], answer: 2 },
  { id: 62, mapel: "Matematika", type: "pg", text: "Sebuah kapal selam berada 40 m di bawah permukaan laut. Kapal naik 15 m, lalu turun lagi 30 m. Posisi akhir kapal selam adalah ....", options: ["A. 55 m di bawah permukaan laut", "B. 25 m di bawah permukaan laut", "C. 55 m di atas permukaan laut", "D. 85 m di bawah permukaan laut"], answer: 0 },
  { id: 63, mapel: "Matematika", type: "pg", text: "Hasil dari (-12) + 8 - (-5) adalah ....", options: ["A. -9", "B. -1", "C. 1", "D. 9"], answer: 2 },
  { id: 64, mapel: "Matematika", type: "pg", text: "Bu Sari memiliki 2 1/2 liter minyak. Hari pertama dipakai 3/4 liter, hari kedua 1 1/4 liter. Sisa minyak Bu Sari adalah ....", options: ["A. 1/4 liter", "B. 3/4 liter", "C. 1/2 liter", "D. 1 liter"], answer: 2 },
  { id: 65, mapel: "Matematika", type: "pg", text: "Sebuah pita sepanjang 3,6 m dipotong-potong, tiap potong 0,45 m. Banyak potongan pita adalah ....", options: ["A. 8", "B. 7", "C. 9", "D. 6"], answer: 0 },
  { id: 66, mapel: "Matematika", type: "pg", text: "Harga sebuah tas Rp150.000 mendapat diskon 20%. Uang yang harus dibayar adalah ....", options: ["A. Rp130.000", "B. Rp120.000", "C. Rp30.000", "D. Rp110.000"], answer: 1 },
  { id: 67, mapel: "Matematika", type: "pg", text: "Dari 40 siswa, 35% menyukai sepak bola. Banyak siswa yang menyukai sepak bola adalah ....", options: ["A. 14 siswa", "B. 12 siswa", "C. 16 siswa", "D. 35 siswa"], answer: 0 },
  { id: 68, mapel: "Matematika", type: "pg", text: "Perbandingan kelereng Budi dan Citra adalah 3 : 5. Jika jumlah kelereng mereka 48, maka kelereng Citra berjumlah ....", options: ["A. 18", "B. 24", "C. 30", "D. 36"], answer: 2 },
  { id: 69, mapel: "Matematika", type: "pg", text: "Pada peta berskala 1 : 2.000.000, jarak dua kota pada peta adalah 4 cm. Jarak sebenarnya adalah ....", options: ["A. 8 km", "B. 40 km", "C. 800 km", "D. 80 km"], answer: 3 },
  { id: 70, mapel: "Matematika", type: "pg", text: "Pak Dani memagari taman berbentuk persegi panjang berukuran 20 m x 15 m. Biaya pemagaran Rp25.000 per meter. Biaya seluruhnya adalah ....", options: ["A. Rp1.500.000", "B. Rp7.500.000", "C. Rp3.500.000", "D. Rp1.750.000"], answer: 3 },
  { id: 71, mapel: "Matematika", type: "pg", text: "Sebuah bangun terdiri dari persegi bersisi 10 cm dan segitiga di atasnya dengan alas 10 cm dan tinggi 6 cm. Luas bangun tersebut adalah ....", options: ["A. 110 cm persegi", "B. 130 cm persegi", "C. 160 cm persegi", "D. 100 cm persegi"], answer: 1 },
  { id: 72, mapel: "Matematika", type: "pg", text: "Luas lingkaran berdiameter 14 cm (pi = 22/7) adalah ....", options: ["A. 154 cm persegi", "B. 44 cm persegi", "C. 88 cm persegi", "D. 616 cm persegi"], answer: 0 },
  { id: 73, mapel: "Matematika", type: "pg", text: "Bak mandi berbentuk kubus dengan sisi 80 cm terisi penuh air. Volume air tersebut adalah ....", options: ["A. 64 liter", "B. 512 liter", "C. 5.120 liter", "D. 640 liter"], answer: 1 },
  { id: 74, mapel: "Matematika", type: "pg", text: "Akuarium berbentuk balok berukuran 60 cm x 40 cm x 30 cm diisi air setinggi 3/4 tinggi akuarium. Volume air adalah ....", options: ["A. 54 liter", "B. 72 liter", "C. 18 liter", "D. 54.000 liter"], answer: 0 },
  { id: 75, mapel: "Matematika", type: "pg", text: "Rata-rata tiga nilai ulangan Dika adalah 80. Agar rata-rata empat ulangan menjadi 82, nilai ulangan keempat harus ....", options: ["A. 84", "B. 86", "C. 88", "D. 90"], answer: 2 },
  { id: 76, mapel: "Matematika", type: "essay", text: "Sebuah gedung memiliki 3 lantai basement di bawah lantai dasar. Rina naik lift dari basement 3 ke lantai 5, lalu turun 2 lantai. Di lantai berapa Rina sekarang?" },
  { id: 77, mapel: "Matematika", type: "essay", text: "Dina membawa uang Rp500.000. Ia ingin membeli sepatu Rp350.000 dan tas Rp250.000. Keduanya diskon 20%. Cukupkah uang Dina? Jelaskan!" },
  { id: 78, mapel: "Matematika", type: "essay", text: "Resep kue untuk 4 orang memerlukan 300 g tepung, 100 g gula, dan 2 butir telur. Berapa bahan yang diperlukan untuk 10 orang?" },
  { id: 79, mapel: "Matematika", type: "essay", text: "Kolam renang berbentuk balok berukuran 12 m x 6 m x 1,5 m. Kolam diisi air dengan pompa 9 m kubik per jam. Berapa jam waktu sampai penuh?" },
  { id: 80, mapel: "Matematika", type: "essay", text: "Dari 40 siswa kelas VI, 16 siswa suka olahraga, 12 membaca, 8 menggambar, sisa hobi lain. Tentukan persentase tiap hobi & hobi paling diminati!" },
  { id: 81, mapel: "IPAS", type: "pg", text: "Organ tubuh yang berfungsi memompa darah ke seluruh tubuh adalah ....", options: ["A. Paru-paru", "B. Jantung", "C. Lambung", "D. Ginjal"], answer: 1 },
  { id: 82, mapel: "IPAS", type: "pg", text: "Rafi berlari selama 10 menit. Napasnya menjadi lebih cepat dan jantungnya berdetak lebih kencang. Penjelasan yang tepat adalah ....", options: ["A. Tubuh Rafi sedang sakit", "B. Paru-parunya mengalami kerusakan", "C. Jantungnya lelah selamanya", "D. Otot membutuhkan lebih banyak oksigen"], answer: 3 },
  { id: 83, mapel: "IPAS", type: "pg", text: "Fungsi utama usus halus adalah ....", options: ["A. Menyerap sari-sari makanan", "B. Menyimpan sisa makanan", "C. Menyaring darah", "D. Memompa darah"], answer: 0 },
  { id: 84, mapel: "IPAS", type: "pg", text: "Urutan jalannya makanan dalam sistem pencernaan yang benar adalah ....", options: ["A. Mulut, lambung, kerongkongan, usus halus", "B. Kerongkongan, mulut, lambung, usus halus", "C. Mulut, kerongkongan, lambung, usus halus", "D. Mulut, usus halus, lambung, kerongkongan"], answer: 2 },
  { id: 85, mapel: "IPAS", type: "pg", text: "Zat gizi yang menjadi sumber tenaga utama bagi tubuh adalah ....", options: ["A. Vitamin", "B. Karbohidrat", "C. Mineral", "D. Serat"], answer: 1 },
  { id: 86, mapel: "IPAS", type: "pg", text: "Ani sering sarapan hanya dengan minuman manis, lalu cepat lemas. Saran yang paling tepat adalah ....", options: ["A. Tidak perlu sarapan", "B. Minum lebih banyak minuman manis", "C. Tidur di kelas", "D. Sarapan bergizi seimbang"], answer: 3 },
  { id: 87, mapel: "IPAS", type: "pg", text: "Perubahan energi listrik menjadi energi cahaya terjadi pada ....", options: ["A. Lampu yang menyala", "B. Kompor gas", "C. Kipas angin", "D. Radio"], answer: 0 },
  { id: 88, mapel: "IPAS", type: "pg", text: "Ketika setrika listrik dinyalakan, energi listrik berubah menjadi energi ....", options: ["A. Gerak", "B. Bunyi", "C. Panas", "D. Kimia"], answer: 2 },
  { id: 89, mapel: "IPAS", type: "pg", text: "Sebuah desa pesisir ingin memiliki listrik ramah lingkungan dan tidak habis. Pilihan tepat adalah ....", options: ["A. Batu bara", "B. Panel surya", "C. Genset solar", "D. Bakar kayu"], answer: 1 },
  { id: 90, mapel: "IPAS", type: "pg", text: "Sampah yang paling mudah terurai oleh alam adalah ....", options: ["A. Botol plastik", "B. Pecahan kaca", "C. Kaleng bekas", "D. Daun kering"], answer: 3 },
  { id: 91, mapel: "IPAS", type: "pg", text: "Banyak ikan di sungai mati setelah warga membuang limbah ke sungai. Penyebab utamanya adalah ....", options: ["A. Pencemaran air", "B. Musim hujan", "C. Ikan terlalu banyak", "D. Sungai dalam"], answer: 0 },
  { id: 92, mapel: "IPAS", type: "pg", text: "Rantai makanan di sawah: padi, tikus, ular, elang. Jika ular berkurang drastis, tikus akan ....", options: ["A. Berkurang", "B. Tetap", "C. Bertambah banyak", "D. Hilang"], answer: 2 },
  { id: 93, mapel: "IPAS", type: "pg", text: "Orang yang menggunakan atau membeli barang untuk memenuhi kebutuhannya disebut ....", options: ["A. Produsen", "B. Konsumen", "C. Distributor", "D. Pedagang"], answer: 1 },
  { id: 94, mapel: "IPAS", type: "pg", text: "Menjelang hari raya, harga cabai naik. Penyebab yang paling mungkin adalah ....", options: ["A. Permintaan meningkat persediaan terbatas", "B. Persediaan cabai banyak", "C. Tidak ada yang membeli", "D. Cabai tidak laku"], answer: 0 },
  { id: 95, mapel: "IPAS", type: "pg", text: "Teks Proklamasi Kemerdekaan Indonesia dibacakan oleh ....", options: ["A. Jenderal Sudirman", "B. Ki Hajar Dewantara", "C. Moh. Yamin", "D. Ir. Soekarno dan Drs. Moh. Hatta"], answer: 3 },
  { id: 96, mapel: "IPAS", type: "essay", text: "Jelaskan perjalanan makanan dari mulut hingga menjadi sisa pembuangan, sebutkan organ yang dilalui!" },
  { id: 97, mapel: "IPAS", type: "essay", text: "Ani selalu sarapan minuman manis. Analisislah dampaknya bagi tubuh dan susunlah menu sarapan bergizi seimbang!" },
  { id: 98, mapel: "IPAS", type: "essay", text: "Pada rantai makanan padi, tikus, ular, elang; jika elang sering diburu manusia hingga habis, jelaskan dampaknya!" },
  { id: 99, mapel: "IPAS", type: "essay", text: "Sebutkan tiga contoh perubahan energi yang terjadi di rumah dan jelaskan!" },
  { id: 100, mapel: "IPAS", type: "essay", text: "Sungai dekat desa menjadi keruh dan berbau karena sampah. Berikan tiga solusi yang dapat dilakukan warga!" },
  { id: 101, mapel: "PJOK", type: "pg", text: "Berikut yang termasuk permainan bola besar adalah ....", options: ["A. Kasti", "B. Bulu tangkis", "C. Sepak bola", "D. Tenis meja"], answer: 2 },
  { id: 102, mapel: "PJOK", type: "pg", text: "Teknik dasar mengoper bola pendek dalam sepak bola menggunakan ....", options: ["A. Kaki bagian dalam", "B. Ujung jari kaki", "C. Tumit", "D. Lutut"], answer: 0 },
  { id: 103, mapel: "PJOK", type: "pg", text: "Dalam permainan kasti, pemain yang bertugas melambungkan bola kepada pemukul disebut ....", options: ["A. Penjaga", "B. Pemukul", "C. Penangkap", "D. Pelambung"], answer: 3 },
  { id: 104, mapel: "PJOK", type: "pg", text: "Urutan gerakan lompat jauh yang benar adalah ....", options: ["A. Awalan, melayang, tumpuan, mendarat", "B. Awalan, tumpuan, melayang, mendarat", "C. Tumpuan, awalan, melayang, mendarat", "D. Mendarat, tumpuan, melayang, awalan"], answer: 1 },
  { id: 105, mapel: "PJOK", type: "pg", text: "Start yang digunakan pada lari jarak pendek adalah start ....", options: ["A. Berdiri", "B. Melayang", "C. Jongkok", "D. Duduk"], answer: 2 },
  { id: 106, mapel: "PJOK", type: "pg", text: "Sebelum melakukan guling depan, hal yang wajib dilakukan adalah ....", options: ["A. Pemanasan agar otot siap", "B. Langsung berguling", "C. Makan banyak", "D. Tidur"], answer: 0 },
  { id: 107, mapel: "PJOK", type: "pg", text: "Pada guling depan, posisi kepala yang benar adalah ....", options: ["A. Kepala tegak", "B. Ubun-ubun menyentuh matras", "C. Kepala menoleh", "D. Dagu menempel ke dada dan tengkuk menyentuh matras"], answer: 3 },
  { id: 108, mapel: "PJOK", type: "pg", text: "Lari selama 12 menit (tes Cooper) digunakan untuk mengukur ....", options: ["A. Kekuatan lengan", "B. Daya tahan jantung dan paru-paru", "C. Kelincahan", "D. Keseimbangan"], answer: 1 },
  { id: 109, mapel: "PJOK", type: "pg", text: "Pendinginan setelah berolahraga bertujuan untuk ....", options: ["A. Menurunkan denyut jantung secara bertahap", "B. Menambah lelah", "C. Menaikkan suhu", "D. Menghentikan seketika"], answer: 0 },
  { id: 110, mapel: "PJOK", type: "pg", text: "Lama tidur yang dianjurkan bagi anak usia SD sekitar ....", options: ["A. 4 - 5 jam", "B. 6 jam", "C. 9 - 11 jam", "D. 14 jam"], answer: 2 },
  { id: 111, mapel: "PJOK", type: "pg", text: "Temanmu terjatuh saat bermain bola sehingga lututnya lecet. Pertolongan pertama yang tepat adalah ....", options: ["A. Membiarkan terbuka", "B. Tabur tanah", "C. Tetap bermain", "D. Bersihkan air bersih lalu tutup plester"], answer: 3 },
  { id: 112, mapel: "PJOK", type: "pg", text: "Tim kelas VI-A kalah kasti. Sikap sportif yang ditunjukkan adalah ....", options: ["A. Menuduh wasit curang", "B. Menerima kekalahan dan beri selamat pemenang", "C. Marah", "D. Mengejek lawan"], answer: 1 },
  { id: 113, mapel: "PJOK", type: "pg", text: "Salah satu cara menjaga kebersihan diri adalah ....", options: ["A. Mandi dan gosok gigi teratur", "B. Baju sama berhari-hari", "C. Jarang cuci tangan", "D. Potong kuku setahun sekali"], answer: 0 },
  { id: 114, mapel: "PJOK", type: "pg", text: "Jumlah pemain inti dalam satu regu permainan bola voli adalah ....", options: ["A. 5", "B. 7", "C. 6", "D. 11"], answer: 2 },
  { id: 115, mapel: "PJOK", type: "pg", text: "Rendi ingin meningkatkan kebugaran tanpa alat. Pilihan paling tepat adalah ....", options: ["A. Nonton TV", "B. Tidur siang", "C. Makan manis", "D. Berlari pagi dan lompat tali rutin"], answer: 3 },
  { id: 116, mapel: "PJOK", type: "essay", text: "Tuliskan urutan gerakan lompat jauh dan jelaskan singkat tiap tahapannya!" },
  { id: 117, mapel: "PJOK", type: "essay", text: "Jelaskan manfaat pemanasan dan pendinginan dalam berolahraga!" },
  { id: 118, mapel: "PJOK", type: "essay", text: "Saat bermain, temanmu terjatuh dan lengannya berdarah. Tuliskan langkah pertolongan pertama!" },
  { id: 119, mapel: "PJOK", type: "essay", text: "Tono menyentuh bola ketika keluar garis tapi tidak mengaku. Analisislah sikap Tono dan sikap yang seharusnya!" },
  { id: 120, mapel: "PJOK", type: "essay", text: "Susunlah jadwal sederhana kegiatan sehari-hari yang mencerminkan pola hidup sehat!" },
  { id: 121, mapel: "Seni Budaya", type: "pg", text: "Unsur seni rupa yang terbentuk dari titik yang bergerak adalah ....", options: ["A. Bidang", "B. Garis", "C. Warna", "D. Tekstur"], answer: 1 },
  { id: 122, mapel: "Seni Budaya", type: "pg", text: "Warna primer terdiri atas ....", options: ["A. Hijau, jingga, ungu", "B. Hitam, putih, abu-abu", "C. Merah, hijau, biru muda", "D. Merah, kuning, biru"], answer: 3 },
  { id: 123, mapel: "Seni Budaya", type: "pg", text: "Campuran warna merah dan kuning menghasilkan warna ....", options: ["A. Jingga", "B. Hijau", "C. Ungu", "D. Cokelat"], answer: 0 },
  { id: 124, mapel: "Seni Budaya", type: "pg", text: "Kelompok warna hangat adalah ....", options: ["A. Biru, hijau, ungu", "B. Biru, putih, hitam", "C. Merah, jingga, kuning", "D. Ungu, biru, hijau"], answer: 2 },
  { id: 125, mapel: "Seni Budaya", type: "pg", text: "Karya seni rupa dua dimensi adalah ....", options: ["A. Patung", "B. Lukisan", "C. Keramik", "D. Ukiran kayu"], answer: 1 },
  { id: 126, mapel: "Seni Budaya", type: "pg", text: "Fungsi utama poster adalah ....", options: ["A. Menghias ruangan", "B. Menyimpan benda", "C. Alat tulis", "D. Menyampaikan pesan/ajakan secara visual"], answer: 3 },
  { id: 127, mapel: "Seni Budaya", type: "pg", text: "Teknik arsir dalam menggambar adalah ....", options: ["A. Membuat garis-garis sejajar rapat untuk kesan gelap terang", "B. Menempel kertas", "C. Menekan lilin", "D. Memahat"], answer: 0 },
  { id: 128, mapel: "Seni Budaya", type: "pg", text: "Berikut yang termasuk karya seni rupa tiga dimensi adalah ....", options: ["A. Kolase", "B. Batik", "C. Patung", "D. Lukisan"], answer: 2 },
  { id: 129, mapel: "Seni Budaya", type: "pg", text: "Membuat pot bunga dari botol plastik bekas termasuk kerajinan ....", options: ["A. Lukis", "B. Daur ulang", "C. Cetak", "D. Anyaman"], answer: 1 },
  { id: 130, mapel: "Seni Budaya", type: "pg", text: "Kolase adalah karya seni yang dibuat dengan cara ....", options: ["A. Menempelkan berbagai bahan pada bidang gambar", "B. Memahat batu", "C. Mencetak balok", "D. Cat air"], answer: 0 },
  { id: 131, mapel: "Seni Budaya", type: "pg", text: "Teknik membuat batik secara umum adalah ....", options: ["A. Memahat kain", "B. Menjahit", "C. Menganyam", "D. Menutup bagian kain dengan lilin (malam) lalu dicelup warna"], answer: 3 },
  { id: 132, mapel: "Seni Budaya", type: "pg", text: "Kain tradisional khas Sulawesi Barat adalah ....", options: ["A. Ulos", "B. Songket Palembang", "C. Sutra Mandar", "D. Tenun Sumba"], answer: 2 },
  { id: 133, mapel: "Seni Budaya", type: "pg", text: "Prinsip keseimbangan dalam karya seni rupa adalah ....", options: ["A. Penataan unsur agar terlihat serasi dan stabil", "B. Satu warna saja", "C. Objek sebesar-besarnya", "D. Mengosongkan bidang"], answer: 0 },
  { id: 134, mapel: "Seni Budaya", type: "pg", text: "Tujuan diadakannya pameran karya seni di sekolah adalah ....", options: ["A. Cari kesalahan", "B. Menghargai karya dan menampilkan ke orang lain", "C. Mengejek", "D. Membandingkan nilai"], answer: 1 },
  { id: 135, mapel: "Seni Budaya", type: "pg", text: "Budi ingin menampilkan kesan jarak jauh dalam gambar pemandangan, tekniknya ....", options: ["A. Objek jauh lebih besar", "B. Sama besar", "C. Satu warna tebal", "D. Objek jauh digambar lebih kecil & warna pudar"], answer: 3 },
  { id: 136, mapel: "Seni Budaya", type: "essay", text: "Jelaskan perbedaan warna primer dan warna sekunder, lalu berikan contohnya!" },
  { id: 137, mapel: "Seni Budaya", type: "essay", text: "Tuliskan langkah-langkah membuat karya kolase dari bahan bekas!" },
  { id: 138, mapel: "Seni Budaya", type: "essay", text: "Kamu diminta membuat poster bertema 'Cintai Lingkungan'. Jelaskan unsur-unsur yang harus ada!" },
  { id: 139, mapel: "Seni Budaya", type: "essay", text: "Membuat tempat pensil dari kaleng bekas. Analisislah manfaatnya bagi lingkungan dan bagi siswa!" },
  { id: 140, mapel: "Seni Budaya", type: "essay", text: "Mengapa kain tenun/sutra Mandar perlu dilestarikan? Berikan 2 alasan dan 1 cara melestarikannya!" },
  { id: 141, mapel: "Bahasa Inggris", type: "pg", text: "[Text Sinta]\nHow old is Sinta?", options: ["A. Eleven", "B. Twelve", "C. Thirteen", "D. Ten"], answer: 1 },
  { id: 142, mapel: "Bahasa Inggris", type: "pg", text: "What time does Sinta wake up?", options: ["A. 5.00", "B. 6.00", "C. 6.30", "D. 5.30"], answer: 3 },
  { id: 143, mapel: "Bahasa Inggris", type: "pg", text: "How does Sinta go to school?", options: ["A. By bicycle", "B. By bus", "C. On foot", "D. By motorbike"], answer: 0 },
  { id: 144, mapel: "Bahasa Inggris", type: "pg", text: "What does Sinta do after school?", options: ["A. Plays football", "B. Watches TV", "C. Helps mother & does homework", "D. Visits grandmother"], answer: 2 },
  { id: 145, mapel: "Bahasa Inggris", type: "pg", text: "The word 'near' in the text has the same meaning as ....", options: ["A. Far", "B. Close", "C. Behind", "D. Under"], answer: 1 },
  { id: 146, mapel: "Bahasa Inggris", type: "pg", text: "Who do Sinta and her family visit on Sunday?", options: ["A. Her grandmother", "B. Her teacher", "C. Her friend", "D. Her uncle"], answer: 0 },
  { id: 147, mapel: "Bahasa Inggris", type: "pg", text: "I ___ breakfast every morning.", options: ["A. eats", "B. eating", "C. is eat", "D. eat"], answer: 3 },
  { id: 148, mapel: "Bahasa Inggris", type: "pg", text: "She ___ to school at 6.30.", options: ["A. go", "B. going", "C. goes", "D. gone"], answer: 2 },
  { id: 149, mapel: "Bahasa Inggris", type: "pg", text: "My little brother ___ playing football now.", options: ["A. is", "B. are", "C. am", "D. be"], answer: 0 },
  { id: 150, mapel: "Bahasa Inggris", type: "pg", text: "Where ___ you live?", options: ["A. does", "B. do", "C. is", "D. are"], answer: 1 },
  { id: 151, mapel: "Bahasa Inggris", type: "pg", text: "The elephant is ___ than the cat.", options: ["A. small", "B. smallest", "C. more big", "D. bigger"], answer: 3 },
  { id: 152, mapel: "Bahasa Inggris", type: "pg", text: "The bank is ___ the post office and the market.", options: ["A. on", "B. at", "C. between", "D. under"], answer: 2 },
  { id: 153, mapel: "Bahasa Inggris", type: "pg", text: "A place where we borrow books is a ....", options: ["A. library", "B. canteen", "C. market", "D. hospital"], answer: 0 },
  { id: 154, mapel: "Bahasa Inggris", type: "pg", text: "What do you say to ask someone's name?", options: ["A. How old are you?", "B. What is your name?", "C. Where do you live?", "D. What time is it?"], answer: 1 },
  { id: 155, mapel: "Bahasa Inggris", type: "pg", text: "Rina: \"Thank you for helping me.\"\nDani: \"....\"", options: ["A. Good bye", "B. I'm sorry", "C. Nice to meet you", "D. You're welcome"], answer: 3 },
  { id: 156, mapel: "Bahasa Inggris", type: "essay", text: "Answer based on text Sinta: (a) Where does Sinta live? (b) Who does she live with? (c) What does she do every morning?" },
  { id: 157, mapel: "Bahasa Inggris", type: "essay", text: "Write four sentences about your daily activities!" },
  { id: 158, mapel: "Bahasa Inggris", type: "essay", text: "Arrange the words into a good sentence: 'school / goes / to / she / every day'." },
  { id: 159, mapel: "Bahasa Inggris", type: "essay", text: "Describe your best friend in four sentences (name, age, appearance, hobby)!" },
  { id: 160, mapel: "Bahasa Inggris", type: "essay", text: "Complete dialogue: Dani: 'Good morning, Rina. How are you?' | Rina: '....' | Dani: 'Where are you going?' | Rina: '....'" }
];

let selectedKelas = "";
let currentUser = null;
let currentQuestionIndex = 0;
let userAnswers = {};

document.querySelectorAll(".btn-kelas").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".btn-kelas").forEach(b => b.classList.remove("selected"));
    this.classList.add("selected");
    selectedKelas = this.getAttribute("data-kelas");
  });
});

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputNisn = document.getElementById("nisn").value.trim();
  const loginError = document.getElementById("login-error");

  if (!selectedKelas) {
    alert("Silakan pilih Kelas (6A / 6B) terlebih dahulu!");
    return;
  }

  const student = validStudents.find(s => s.nisn === inputNisn && s.kelas === selectedKelas);
  if (!student) {
    loginError.style.display = "block";
    return;
  }

  loginError.style.display = "none";
  currentUser = student;

  document.getElementById("conf-nama").innerText = student.nama;
  document.getElementById("conf-nisn").innerText = student.nisn;
  document.getElementById("conf-kelas").innerText = student.kelas;

  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("confirm-screen").classList.remove("hidden");
});

document.getElementById("btn-back-login").addEventListener("click", function() {
  document.getElementById("confirm-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
});

document.getElementById("btn-start-exam").addEventListener("click", function() {
  document.getElementById("confirm-screen").classList.add("hidden");
  document.getElementById("exam-screen").classList.remove("hidden");

  kirimProgressKeServer(false);

  renderNumberGrid();
  loadQuestion(0);
});

function renderNumberGrid() {
  const grid = document.getElementById("number-grid");
  grid.innerHTML = "";

  allQuestions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "num-btn";
    btn.innerText = idx + 1;
    if (userAnswers[idx] !== undefined && userAnswers[idx] !== "") {
      btn.classList.add("answered");
    }
    if (idx === currentQuestionIndex) {
      btn.classList.add("active");
    }
    btn.onclick = () => loadQuestion(idx);
    grid.appendChild(btn);
  });
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const q = allQuestions[index];

  document.getElementById("soal-number-indicator").innerText = `Soal ${index + 1} dari ${allQuestions.length}`;
  document.getElementById("soal-type-badge").innerText = `[${q.mapel}] ${q.type === "pg" ? "Pilihan Ganda" : "Uraian"}`;
  document.getElementById("question-text").innerText = `${index + 1}. ${q.text}`;

  const optionsContainer = document.getElementById("options-container");
  const essayContainer = document.getElementById("essay-container");

  optionsContainer.innerHTML = "";
  
  if (q.type === "pg") {
    optionsContainer.classList.remove("hidden");
    essayContainer.classList.add("hidden");

    q.options.forEach((opt, optIdx) => {
      const item = document.createElement("label");
      item.className = "option-item";
      
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = optIdx;
      if (userAnswers[index] === optIdx) {
        radio.checked = true;
      }

      radio.onchange = () => {
        userAnswers[index] = optIdx;
        renderNumberGrid();
        kirimProgressKeServer(false);
      };

      item.appendChild(radio);
      item.appendChild(document.createTextNode(opt));
      optionsContainer.appendChild(item);
    });
  } else {
    optionsContainer.classList.add("hidden");
    essayContainer.classList.remove("hidden");

    const essayTextarea = document.getElementById("essay-answer");
    essayTextarea.value = userAnswers[index] || "";
    essayTextarea.oninput = (e) => {
      userAnswers[index] = e.target.value;
      renderNumberGrid();
      kirimProgressKeServer(false);
    };
  }

  document.getElementById("btn-prev").disabled = index === 0;
  document.getElementById("btn-next").disabled = index === allQuestions.length - 1;

  renderNumberGrid();
}

document.getElementById("btn-prev").onclick = () => {
  if (currentQuestionIndex > 0) loadQuestion(currentQuestionIndex - 1);
};

document.getElementById("btn-next").onclick = () => {
  if (currentQuestionIndex < allQuestions.length - 1) loadQuestion(currentQuestionIndex + 1);
};

document.getElementById("btn-finish").onclick = () => {
  if (confirm("Apakah Anda yakin ingin menyelesaikan dan mengirimkan jawaban?")) {
    finishExam();
  }
};

function hitungSkorSementara() {
  let pgScore = 0;
  allQuestions.forEach((q, idx) => {
    if (q.type === "pg" && userAnswers[idx] === q.answer) {
      pgScore += 2;
    }
  });
  return pgScore;
}

// PERBAIKAN PENGIRIMAN DATA: Menggunakan URLSearchParams agar terbaca sempurna di Google Apps Script
function kirimProgressKeServer(isSelesai) {
  if (!currentUser) return;

  const pgScore = hitungSkorSementara();
  let essayTextSummary = "";
  allQuestions.forEach((q, idx) => {
    if (q.type === "essay") {
      essayTextSummary += `[Soal ${idx + 1}]: ${userAnswers[idx] || "Kosong"} | `;
    }
  });

  const payload = {
    nama: currentUser.nama,
    nisn: currentUser.nisn,
    kelas: currentUser.kelas,
    skorPG: pgScore,
    jawabanUraian: essayTextSummary,
    selesai: isSelesai ? "true" : "false"
  };

  const encodedData = new URLSearchParams(payload).toString();

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodedData
  }).catch(err => {
    console.log("Kirim data latar belakang:", err);
  });
}

function finishExam() {
  document.getElementById("exam-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let pgScore = hitungSkorSementara();
  const pgLabels = [];
  const pgCorrectData = [];
  const pgWrongData = [];
  let cumulativeCorrect = 0;
  let cumulativeWrong = 0;

  allQuestions.forEach((q, idx) => {
    if (q.type === "pg") {
      pgLabels.push(`S${idx + 1}`);
      const isCorrect = (userAnswers[idx] === q.answer);
      if (isCorrect) {
        cumulativeCorrect++;
      } else {
        cumulativeWrong++;
      }
      pgCorrectData.push(cumulativeCorrect);
      pgWrongData.push(cumulativeWrong);
    }
  });

  document.getElementById("res-nama").innerText = currentUser.nama;
  document.getElementById("res-nisn").innerText = currentUser.nisn;
  document.getElementById("res-kelas").innerText = currentUser.kelas;
  document.getElementById("res-score").innerText = pgScore;

  renderResultChart(pgLabels, pgCorrectData, pgWrongData);

  kirimProgressKeServer(true);

  document.getElementById("res-status").innerText = "Berhasil Terkirim ke Server Sekolah!";
  document.getElementById("res-status").style.color = "#52c41a";
}

function renderResultChart(labels, correctData, wrongData) {
  const ctx = document.getElementById('resultChart').getContext('2d');
  if (window.myResultChart) {
    window.myResultChart.destroy();
  }
  window.myResultChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        { label: 'Jawaban Salah / Kosong (Merah)', data: wrongData, backgroundColor: '#b83b32', barPercentage: 1.0, categoryPercentage: 1.0 },
        { label: 'Jawaban Benar (Biru)', data: correctData, backgroundColor: '#4285f4', barPercentage: 1.0, categoryPercentage: 1.0 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'top', labels: { font: { weight: 'bold' } } } },
      scales: {
        x: { stacked: true, grid: { display: false }, ticks: { font: { size: 8 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 20 } },
        y: { stacked: true, beginAtZero: true, title: { display: true, text: 'Jumlah Soal' } }
      }
    }
  });
}
