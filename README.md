WebArtikelEdukasi
WebArtikelEdukasi adalah aplikasi web edukatif yang menyajikan konten berupa artikel dan video pembelajaran. Website ini dirancang dengan frontend HTML, CSS, JavaScript, serta backend PHP dan MySQL. Tersedia halaman admin untuk mengelola konten secara dinamis (CRUD).

🔧 Fitur Utama
👨‍🎓 Pengunjung Umum
Beranda: Tampilan awal berisi pengantar dan konten unggulan.

Artikel: Daftar artikel edukatif yang bisa dibaca langsung.

Video: Daftar video edukasi yang bisa ditonton langsung.

Tentang: Informasi tentang platform dan tujuan edukasi.

🔐 Admin
Login sistem untuk admin.

CRUD Artikel: tambah, ubah, hapus artikel (dengan upload gambar).

CRUD Video: tambah, ubah, hapus link video.

Artikel dan video yang dikelola akan ditampilkan di halaman pengguna.

🗂️ Struktur Direktori
bash
Copy
Edit
WebArtikelEdukasi/
│
├── index.php              # Beranda
├── artikel.php            # Halaman daftar artikel
├── video.php              # Halaman daftar video
├── tentang.php            # Halaman tentang
│
├── admin/                 # Direktori halaman admin
│   ├── login.php
│   ├── dashboard.php
│   ├── kelola_artikel.php
│   ├── kelola_video.php
│   └── logout.php
│
├── proses/                # Direktori pemrosesan backend
│   ├── login.php
│   ├── tambah_artikel.php
│   ├── edit_artikel.php
│   ├── hapus_artikel.php
│   ├── tambah_video.php
│   ├── edit_video.php
│   └── hapus_video.php
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/            # Gambar artikel disimpan di sini
│
└── db/
    └── koneksi.php        # File koneksi ke database
🛠️ Teknologi Digunakan
Frontend: HTML5, CSS3 (dengan Flexbox/Grid), JavaScript

Backend: PHP (Native)

Database: MySQL

Fitur Interaktif: JavaScript DOM untuk pencarian dan pemutaran video

💾 Instalasi dan Penggunaan
Clone repositori ini atau ekstrak ZIP:

bash
Copy
Edit
git clone https://github.com/namauser/WebArtikelEdukasi.git
Impor database:

Buka phpMyAdmin

Buat database baru, misal artikel_edukasi

Import file SQL dari /db/artikel_edukasi.sql (jika tersedia)

Konfigurasi koneksi database:

Buka db/koneksi.php

Ubah sesuai dengan kredensial lokal Anda:

php
Copy
Edit
$conn = new mysqli("localhost", "root", "", "artikel_edukasi");
Jalankan website di localhost (misalnya via XAMPP):

Akses http://localhost/WebArtikelEdukasi/index.php

🔐 Default Login Admin

Username	Password
admin	admin123
⚠️ Disarankan mengganti password default pada deployment.

🧩 Catatan Pengembangan
Tambahkan validasi input di sisi frontend dan backend untuk keamanan.

Tambahkan fitur pagination pada daftar artikel/video.

Upload gambar artikel disimpan di folder assets/images/.

Fitur pencarian artikel bisa dikembangkan lebih lanjut dengan AJAX.

📄 Lisensi
Proyek ini bersifat open-source dan dapat digunakan untuk keperluan edukasi atau pengembangan pribadi.

