# 🫖 PANDUAN LENGKAP PENGEMBANGAN & DEPLOYMENT WEBSITE ES TEH POCI MIDE
### Framework: Laravel (PHP 8.x) | Template: Blade | Database: MySQL | Konsep: Pemesanan Cepat Model Mie Gacoan

---

## 1. Arsitektur & Keterkaitan Sistem

Sistem penjualan **Es Teh Poci Mide** dibangun dengan mengintegrasikan 4 komponen utama yang saling mendukung:

```
[ Domain: estehpocimide.com ]
             │
             ▼
[ Web Hosting (cPanel / VPS) ] ── (Public Folder & Web Server: Nginx/Apache)
             │
             ▼
[ Framework Laravel (PHP Backend & Blade Template) ]
             │
             ├── Controller & Routing: Logika Pemesanan & Alur Mie Gacoan
             ├── State & Session: Customizer Menu (Gula, Es, Topping, Cup)
             ├── Middleware & Keamanan: Autentikasi Admin & CSRF Protection
             │
             ▼
[ Database MySQL ]
    ├── categories & products (Menu, Harga, Stok)
    ├── promos (Voucher Diskon, Min Order)
    ├── orders & order_items (Pesanan Pelanggan, Status KDS)
    └── users (Admin & Kasir)
```

1. **Domain**: Berfungsi sebagai alamat unik yang diketik oleh pelanggan (misal: `https://estehpocimide.com`). Domain mengarahkan lalu lintas internet ke server web hosting melalui DNS Record (A Record).
2. **Web Hosting**: Layanan server yang aktif 24/7 untuk menampung seluruh kode sumber aplikasi Laravel, aset visual, dan mengeksekusi PHP runtime serta manajemen database.
3. **Framework Laravel**: Bertindak sebagai motor penggerak backend dan frontend. Mengelola katalog produk, validasi pesanan, kalkulasi diskon voucher, keranjang belanja dinamis, antrean dapur (Kitchen Display System), dan otorisasi admin.
4. **Database MySQL**: Media penyimpanan terstruktur untuk data persisten pesanan, master menu, varian topping, dan catatan pembukuan transaksi.

---

## 2. Struktur Direktori Proyek

```text
k:/Project_SEO/
├── index.html                   # Versi Live Standalone (Bisa langsung dibuka di browser)
├── style.css                    # Desain Sistem & Nuansa Visual Teh Poci (Hijau, Kuning, Merah)
├── app.js                       # Engine Pemesanan Model Mie Gacoan & Simulasi Admin Realtime
├── assets/
│   └── images/
│       ├── logo.svg             # Logo Vektor Asli Cap Teh Poci Mide
│       ├── hero-banner.jpg      # Foto Komersial Es Teh Poci Melati
│       └── menu-showcase.jpg    # Foto Varian Minuman & Snack Pendamping
└── laravel/                     # Source Code Laravel Framework
    ├── app/
    │   ├── Http/Controllers/   # HomeController, MenuController, CartController, dll.
    │   └── Models/              # Product, Category, Order, OrderItem, Promo
    ├── database/
    │   ├── migrations/          # Skema Tabel Database Laravel
    │   └── schema.sql           # Dump SQL Siap Import ke phpMyAdmin
    ├── resources/
    │   └── views/               # Blade Templates (layouts/app.blade.php, dll.)
    └── routes/
        └── web.php              # Definisi Rute Frontend, Kasir & Admin
```

---

## 3. Fitur Utama Model Pemesanan Ala Mie Gacoan

1. **Selector Tipe Pesanan Cepat di Hero Banner**:
   - Pilihan **Dine-In** (Input No. Meja), **Takeaway (Bungkus)**, atau **Delivery (Antar ke Alamat)**.
2. **Kategori Sticky & Pencarian Instan**:
   - Menu Terlaris (Best Seller), Teh Original Poci, Fruity Tea, Milky Macchiato, Dimsum/Pangsit, Paket Hemat Combo.
3. **Modal Kustomisasi Produk (Customizer Sheet)**:
   - Ukuran Cup: Reguler (16oz) / Jumbo (22oz +Rp 2.000)
   - Tingkat Kemanisan (Sugar Level): Normal (100%), Less Sugar (70%), Sedikit (30%), No Sugar (0%)
   - Pilihan Es Batu (Ice Level): Normal Ice, Less Ice, Extra Ice, Tanpa Es
   - Pilihan Topping: Cincau Hitam, Rainbow Jelly, Biji Selasih, Cheese Cream Macchiato
   - Catatan Khusus untuk Barista (misal: sedotan 2, es dipisah).
4. **Bottom Floating Cart Bar**:
   - Bar mengambang otomatis muncul saat keranjang terisi, menampilkan ringkasan jumlah item dan tombol *Lihat Pesanan*.
5. **Slide-Out Cart & Checkout Drawer**:
   - Penerapan voucher promo (`POCISEGAR`, `GACOANMIDE`, `FREEONGKIR`).
   - Pilihan pembayaran: **QRIS Instan**, **Transfer Bank**, atau **Tunai di Kasir**.
6. **Live Order Tracking (Status Pesanan Realtime)**:
   - Timeline 4 langkah: `Diterima` ➔ `Diracik` ➔ `Siap Saji` ➔ `Selesai`.
   - Kode QRIS interaktif siap scan.
   - Tombol kirim struk otomatis via WhatsApp Kasir dan cetak struk nota.
7. **Panel Kasir & Admin Backoffice**:
   - Ringkasan omset harian, pesanan aktif, dan waktu saji rata-rata.
   - Manajemen antrean dapur (KDS) dengan tombol pembaruan status realtime.
   - Toggle stok bahan / menu (Tersedia / Habis) tanpa buka database langsung.

---

## 4. Panduan Langkah Demi Langkah Deployment ke Web Hosting cPanel

### Langkah 1: Persiapan Database MySQL
1. Buka **cPanel** hosting Anda.
2. Masuk ke menu **MySQL Databases**:
   - Buat database baru: `u1234_estehpoci`
   - Buat user database baru: `u1234_pociuser` dan password aman.
   - Hubungkan user ke database dengan memberi centang **ALL PRIVILEGES**.
3. Buka **phpMyAdmin**, pilih database `u1234_estehpoci`.
4. Klik tab **Import**, pilih file `laravel/database/schema.sql`, lalu klik **Go**.

### Langkah 2: Upload File Laravel
1. Kompres seluruh isi folder proyek menjadi file `.zip`.
2. Di cPanel, buka **File Manager**:
   - Letakkan folder core Laravel di luar direktori publik, misalnya di `/home/username/esteh_core/`.
   - Pindahkan seluruh isi folder `public/` (atau file `index.html`, `style.css`, `app.js`, folder `assets/`) ke folder `public_html/`.
3. Edit file `public_html/index.php` untuk mengarahkan autoload:
   ```php
   require __DIR__.'/../esteh_core/vendor/autoload.php';
   $app = require_once __DIR__.'/../esteh_core/bootstrap/app.php';
   ```

### Langkah 3: Konfigurasi File Environment (.env)
Buka file `.env` di folder core Laravel dan sesuaikan:
```env
APP_NAME="Es Teh Poci Mide"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://estehpocimide.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=u1234_estehpoci
DB_USERNAME=u1234_pociuser
DB_PASSWORD=PasswordRahasiaAnda123!
```

### Langkah 4: Hubungkan Domain
1. Arahkan **Name Server (NS)** domain Anda ke server hosting (misal: `ns1.namahosting.com` dan `ns2.namahosting.com`).
2. Pasang sertifikat **SSL (HTTPS)** gratis melalui cPanel Let's Encrypt / AutoSSL agar transaksi QRIS dan data pelanggan terenkripsi aman.

---

## 5. Cara Menjalankan Secara Lokal (Testing Langsung)

Untuk langsung menguji tampilan dan alur pemesanan di komputer:
1. Buka terminal di folder `k:/Project_SEO/`.
2. Jalankan perintah:
   ```powershell
   php -S 127.0.0.1:8888
   ```
3. Buka browser dan kunjungi:
   - **Toko Pelanggan**: **`http://127.0.0.1:8888/`**
   - **Portal Admin & Kasir**: **`http://127.0.0.1:8888/access_admin`** (PIN default: `1234`)

---

## 6. Penyimpanan Riwayat Transaksi & Laporan Penjualan (Harian, Mingguan, Bulanan)

Seluruh riwayat pesanan pelanggan disimpan secara persisten ke dalam database MySQL pada tabel `orders` dan `order_items` lengkap dengan tanggal, jam, detail varian cup, level gula, es batu, topping, voucher promo yang digunakan, dan metode pembayaran.

### A. SQL Views untuk Agregasi Otomatis (MySQL):
1. **Laporan Harian (`view_daily_sales`)**:
   ```sql
   SELECT * FROM view_daily_sales WHERE sales_date = CURDATE();
   ```
   Menghasilkan: Total omset bersih harian, jumlah transaksi, total diskon voucher, serta perincian omset per metode bayar (QRIS, Tunai, Transfer).

2. **Laporan Mingguan (`view_weekly_sales`)**:
   ```sql
   SELECT * FROM view_weekly_sales LIMIT 4;
   ```
   Menghasilkan: Rekapitulasi omset per minggu kalender, rata-rata belanja per pesanan (AOV), dan volume transaksi mingguan.

3. **Laporan Bulanan (`view_monthly_sales`)**:
   ```sql
   SELECT * FROM view_monthly_sales WHERE sales_month = '2026-09';
   ```
   Menghasilkan: Rekapitulasi omset kotor dan bersih bulanan untuk keperluan pembukuan keuangan toko.

4. **Peringkat Menu Terlaris (`view_product_sales_ranking`)**:
   ```sql
   SELECT * FROM view_product_sales_ranking LIMIT 10;
   ```

### B. Fitur Ekspor & Pelaporan di Portal Kasir (/access_admin):
- **Filter Fleksibel**: Pilihan mode **Harian** (dengan pemilih tanggal), **Mingguan** (7 hari terakhir), dan **Bulanan** (pemilih bulan & tahun).
- **Grafik Batang Visual**: Distribusi jam sibuk penjualan (harian), perbandingan hari (mingguan), dan progres minggu ke minggu (bulanan).
- **Export CSV/Excel**: Tombol **📥 Unduh CSV / Excel** yang menghasilkan berkas spreadsheet lengkap dengan format UTF-8 BOM yang dapat langsung dibuka rapi di Microsoft Excel.

