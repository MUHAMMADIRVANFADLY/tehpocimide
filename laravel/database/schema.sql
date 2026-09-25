-- ==============================================================
-- DATABASE SCHEMA: Es Teh Poci Mide (MySQL / MariaDB)
-- Untuk Hosting cPanel / VPS dengan Framework Laravel
-- ==============================================================

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `order_items`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `promos`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `users`;
SET FOREIGN_KEY_CHECKS=1;

-- 1. Tabel Kategori Menu
CREATE TABLE `categories` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `icon` VARCHAR(50) DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `categories` (`id`, `name`, `slug`, `icon`) VALUES
(1, 'Teh Original Poci', 'teh-original', '🍵'),
(2, 'Fruity Tea Series', 'fruity-tea', '🍋'),
(3, 'Milky & Macchiato', 'milky-macchiato', '🥛'),
(4, 'Dimsum & Snack', 'dimsum-snack', '🥟'),
(5, 'Paket Hemat Combo', 'paket-hemat', '🎉');

-- 2. Tabel Produk
CREATE TABLE `products` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `category_id` BIGINT UNSIGNED NOT NULL,
  `name` VARCHAR(150) NOT NULL,
  `slug` VARCHAR(150) NOT NULL UNIQUE,
  `price` DECIMAL(12,2) NOT NULL,
  `price_strike` DECIMAL(12,2) DEFAULT NULL,
  `description` TEXT,
  `image` VARCHAR(255) DEFAULT NULL,
  `badge` VARCHAR(50) DEFAULT NULL,
  `badge_type` ENUM('bestseller', 'special', 'new') DEFAULT 'special',
  `has_customization` TINYINT(1) DEFAULT 1,
  `is_available` TINYINT(1) DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `products` (`id`, `category_id`, `name`, `slug`, `price`, `price_strike`, `description`, `image`, `badge`, `badge_type`, `has_customization`, `is_available`) VALUES
(1, 1, 'Es Teh Poci Melati Original', 'es-teh-poci-melati-original', 4000.00, 5000.00, 'Seduhan daun teh melati pilihan khas Poci tanah liat alami yang sejuk dan menyegarkan.', 'assets/images/hero-banner.jpg', 'Best Seller', 'bestseller', 1, 1),
(2, 1, 'Es Teh Poci Klasik Gula Batu', 'es-teh-poci-klasik-gula-batu', 5000.00, NULL, 'Racikan otentik poci tanah liat dipadukan dengan manis legit khas gula batu Solo-Tegal.', 'assets/images/hero-banner.jpg', 'Favorit', 'special', 1, 1),
(3, 1, 'Es Teh Poci Pandan Wangi', 'es-teh-poci-pandan-wangi', 5000.00, NULL, 'Teh hitam Poci dengan rebusan daun pandan wangi asli, rasa manis lembut menenangkan.', 'assets/images/hero-banner.jpg', NULL, 'special', 1, 1),
(4, 2, 'Es Teh Lemon Fresh Sultan', 'es-teh-lemon-fresh-sultan', 7000.00, NULL, 'Perpaduan teh melati harum dengan perasan sari lemon segar asli dan irisan lemon kuning impor.', 'assets/images/menu-showcase.jpg', 'Favorit', 'bestseller', 1, 1),
(5, 2, 'Es Teh Poci Leci Sultan', 'es-teh-poci-leci-sultan', 9000.00, NULL, 'Sensasi rasa mewah buah leci manis dengan buah leci utuh dan rainbow crystal jelly.', 'assets/images/menu-showcase.jpg', 'Viral', 'special', 1, 1),
(6, 2, 'Es Teh Mangga Tropis Mide', 'es-teh-mangga-tropis-mide', 8000.00, NULL, 'Kombinasi teh poci dengan puree mangga harum manis tropis, manis segar mengguncang dahaga.', 'assets/images/menu-showcase.jpg', NULL, 'special', 1, 1),
(7, 3, 'Es Teh Poci Susu Brown Sugar', 'es-teh-poci-susu-brown-sugar', 10000.00, 12000.00, 'Perpaduan susu segar creamy, teh poci pekat harum, dan sirup brown sugar legit.', 'assets/images/menu-showcase.jpg', 'Rekomendasi', 'bestseller', 1, 1),
(8, 3, 'Macchiato Jasmine Cheese Cream', 'macchiato-jasmine-cheese-cream', 11000.00, NULL, 'Es teh melati premium dilapisi foam keju gurih macchiato lembut di atasnya.', 'assets/images/menu-showcase.jpg', 'Premium', 'special', 1, 1),
(9, 4, 'Pangsit Goreng Crispy Gacoan Mide', 'pangsit-goreng-crispy-gacoan-mide', 10000.00, NULL, 'Pangsit renyah isi olahan ayam udang gurih isi 4 pcs, disajikan dengan saus asam pedas.', 'assets/images/menu-showcase.jpg', 'Wajib Coba', 'bestseller', 0, 1),
(10, 4, 'Siomay Ayam Kukus Lembut', 'siomay-ayam-kukus-lembut', 10000.00, NULL, 'Siomay ayam kukus lembut juicy isi 3 pcs dengan taburan wortel dan saus dimsum.', 'assets/images/menu-showcase.jpg', NULL, 'special', 0, 1),
(11, 4, 'Udang Rambutan Golden Ball', 'udang-rambutan-golden-ball', 12000.00, NULL, 'Bola udang cincang berbalut kulit pangsit krispi keemasan isi 3 pcs.', 'assets/images/menu-showcase.jpg', 'Favorit', 'special', 0, 1),
(12, 5, 'Paket Puas Mide: Teh Jumbo + Pangsit', 'paket-puas-mide-teh-jumbo-pangsit', 14000.00, 17000.00, '1x Es Teh Poci Jumbo 22oz + 1 Porsi Pangsit Goreng Crispy. Hemat Rp 3.000!', 'assets/images/menu-showcase.jpg', 'Hemat 20%', 'bestseller', 1, 1);

-- 3. Tabel Voucher & Promo
CREATE TABLE `promos` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `code` VARCHAR(50) NOT NULL UNIQUE,
  `discount_amount` DECIMAL(12,2) NOT NULL,
  `is_percent` TINYINT(1) DEFAULT 0,
  `min_order` DECIMAL(12,2) DEFAULT 0,
  `description` VARCHAR(255) DEFAULT NULL,
  `is_active` TINYINT(1) DEFAULT 1,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `promos` (`id`, `code`, `discount_amount`, `is_percent`, `min_order`, `description`, `is_active`) VALUES
(1, 'POCISEGAR', 5000.00, 0, 15000.00, 'Potongan langsung Rp 5.000 untuk minimal belanja Rp 15.000', 1),
(2, 'GACOANMIDE', 15.00, 1, 20000.00, 'Diskon 15% untuk pemesanan teh susu & dimsum', 1),
(3, 'FREEONGKIR', 5000.00, 0, 25000.00, 'Subsidi biaya kirim Rp 5.000', 1);

-- 4. Tabel Pesanan Pelanggan (Orders)
CREATE TABLE `orders` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `order_number` VARCHAR(50) NOT NULL UNIQUE,
  `customer_name` VARCHAR(100) NOT NULL,
  `whatsapp` VARCHAR(25) NOT NULL,
  `order_type` ENUM('dine_in', 'takeaway', 'delivery') NOT NULL DEFAULT 'dine_in',
  `table_or_address` VARCHAR(255) NOT NULL,
  `payment_method` ENUM('qris', 'transfer', 'cash') NOT NULL DEFAULT 'qris',
  `subtotal` DECIMAL(12,2) NOT NULL,
  `discount` DECIMAL(12,2) DEFAULT 0,
  `service_fee` DECIMAL(12,2) DEFAULT 1000.00,
  `total_amount` DECIMAL(12,2) NOT NULL,
  `status` ENUM('diterima', 'diproses', 'siap', 'selesai', 'dibatalkan') NOT NULL DEFAULT 'diterima',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `completed_at` TIMESTAMP NULL DEFAULT NULL,
  INDEX `idx_orders_created` (`created_at`),
  INDEX `idx_orders_status` (`status`),
  INDEX `idx_orders_completed` (`completed_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Tabel Detail Item Pesanan (Order Items)
CREATE TABLE `order_items` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `order_id` BIGINT UNSIGNED NOT NULL,
  `product_id` BIGINT UNSIGNED NOT NULL,
  `quantity` INT UNSIGNED NOT NULL DEFAULT 1,
  `unit_price` DECIMAL(12,2) NOT NULL,
  `cup_size` VARCHAR(50) DEFAULT 'Reguler (16oz)',
  `sugar_level` VARCHAR(50) DEFAULT 'Normal (100%)',
  `ice_level` VARCHAR(50) DEFAULT 'Normal Ice',
  `toppings` TEXT DEFAULT NULL,
  `notes` VARCHAR(255) DEFAULT NULL,
  `subtotal` DECIMAL(12,2) NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_items_order_id` (`order_id`),
  INDEX `idx_items_product_id` (`product_id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Tabel Pengguna / Admin (Users)
CREATE TABLE `users` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'kasir', 'kitchen') DEFAULT 'admin',
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Admin Es Teh Poci Mide', 'admin@estehpocimide.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- ==============================================================
-- SQL VIEWS: ANALISIS LAPORAN HARIAN, MINGGUAN, DAN BULANAN
-- ==============================================================

-- View 1: Laporan Penjualan Harian
CREATE OR REPLACE VIEW `view_daily_sales` AS
SELECT 
  DATE(created_at) AS `sales_date`,
  COUNT(*) AS `total_transactions`,
  SUM(subtotal) AS `gross_subtotal`,
  SUM(discount) AS `total_discounts`,
  SUM(total_amount) AS `net_revenue`,
  ROUND(AVG(total_amount), 2) AS `average_order_value`,
  SUM(CASE WHEN payment_method = 'qris' THEN total_amount ELSE 0 END) AS `revenue_qris`,
  SUM(CASE WHEN payment_method = 'cash' THEN total_amount ELSE 0 END) AS `revenue_cash`,
  SUM(CASE WHEN payment_method = 'transfer' THEN total_amount ELSE 0 END) AS `revenue_transfer`
FROM `orders`
WHERE `status` = 'selesai'
GROUP BY DATE(created_at)
ORDER BY `sales_date` DESC;

-- View 2: Laporan Penjualan Mingguan
CREATE OR REPLACE VIEW `view_weekly_sales` AS
SELECT 
  YEARWEEK(created_at, 1) AS `year_week_code`,
  MIN(DATE(created_at)) AS `week_start_date`,
  MAX(DATE(created_at)) AS `week_end_date`,
  COUNT(*) AS `total_transactions`,
  SUM(total_amount) AS `total_revenue`,
  ROUND(AVG(total_amount), 2) AS `average_order_value`
FROM `orders`
WHERE `status` = 'selesai'
GROUP BY YEARWEEK(created_at, 1)
ORDER BY `year_week_code` DESC;

-- View 3: Laporan Penjualan Bulanan
CREATE OR REPLACE VIEW `view_monthly_sales` AS
SELECT 
  DATE_FORMAT(created_at, '%Y-%m') AS `sales_month`,
  COUNT(*) AS `total_transactions`,
  SUM(subtotal) AS `gross_subtotal`,
  SUM(discount) AS `total_discounts`,
  SUM(total_amount) AS `net_revenue`,
  ROUND(AVG(total_amount), 2) AS `average_order_value`
FROM `orders`
WHERE `status` = 'selesai'
GROUP BY DATE_FORMAT(created_at, '%Y-%m')
ORDER BY `sales_month` DESC;

-- View 4: Peringkat Menu Terlaris (Item Ranking)
CREATE OR REPLACE VIEW `view_product_sales_ranking` AS
SELECT 
  p.id AS `product_id`,
  p.name AS `product_name`,
  c.name AS `category_name`,
  SUM(oi.quantity) AS `total_quantity_sold`,
  SUM(oi.subtotal) AS `total_product_revenue`
FROM `order_items` oi
JOIN `products` p ON oi.product_id = p.id
JOIN `categories` c ON p.category_id = c.id
JOIN `orders` o ON oi.order_id = o.id
WHERE o.status = 'selesai'
GROUP BY p.id, p.name, c.name
ORDER BY `total_quantity_sold` DESC;

-- ==============================================================
-- SAMPLE TRANSAKSI MULTI-TANGGAL (HARI INI, KEMARIN, MINGGU INI, BULAN INI)
-- ==============================================================
INSERT INTO `orders` (`id`, `order_number`, `customer_name`, `whatsapp`, `order_type`, `table_or_address`, `payment_method`, `subtotal`, `discount`, `service_fee`, `total_amount`, `status`, `created_at`, `completed_at`) VALUES
(1, 'POCI-10821', 'Budi Santoso', '081234567890', 'dine_in', 'Meja 04', 'qris', 26000.00, 5000.00, 1000.00, 22000.00, 'selesai', NOW() - INTERVAL 1 HOUR, NOW() - INTERVAL 50 MINUTE),
(2, 'POCI-10822', 'Siti Rahma', '085712349988', 'takeaway', 'Bungkus', 'cash', 22000.00, 0.00, 1000.00, 23000.00, 'selesai', NOW() - INTERVAL 3 HOUR, NOW() - INTERVAL 2 HOUR),
(3, 'POCI-10823', 'Dimas Arya', '081399887766', 'dine_in', 'Meja 07', 'qris', 32000.00, 5000.00, 1000.00, 28000.00, 'selesai', NOW() - INTERVAL 6 HOUR, NOW() - INTERVAL 5 HOUR),
(4, 'POCI-10815', 'Anisa Maharani', '081923456711', 'delivery', 'Jl. Melati No. 18', 'transfer', 62000.00, 5000.00, 1000.00, 58000.00, 'selesai', NOW() - INTERVAL 1 DAY, NOW() - INTERVAL 1 DAY + INTERVAL 20 MINUTE),
(5, 'POCI-10810', 'Rian Hidayat', '082145678901', 'dine_in', 'Meja 02', 'qris', 28000.00, 0.00, 1000.00, 29000.00, 'selesai', NOW() - INTERVAL 2 DAY, NOW() - INTERVAL 2 DAY + INTERVAL 15 MINUTE),
(6, 'POCI-10795', 'Dewi Lestari', '085611223344', 'takeaway', 'Bungkus', 'cash', 32000.00, 5000.00, 1000.00, 28000.00, 'selesai', NOW() - INTERVAL 4 DAY, NOW() - INTERVAL 4 DAY + INTERVAL 10 MINUTE),
(7, 'POCI-10780', 'Fajar Nugraha', '087812344321', 'dine_in', 'Meja 09', 'qris', 36000.00, 0.00, 1000.00, 37000.00, 'selesai', NOW() - INTERVAL 6 DAY, NOW() - INTERVAL 6 DAY + INTERVAL 25 MINUTE),
(8, 'POCI-10750', 'Citra Kirana', '081299001122', 'delivery', 'Jl. Ahmad Yani No. 5', 'transfer', 53000.00, 5000.00, 1000.00, 49000.00, 'selesai', NOW() - INTERVAL 12 DAY, NOW() - INTERVAL 12 DAY + INTERVAL 35 MINUTE);

INSERT INTO `order_items` (`order_id`, `product_id`, `quantity`, `unit_price`, `cup_size`, `sugar_level`, `ice_level`, `toppings`, `subtotal`) VALUES
(1, 1, 2, 8000.00, 'Jumbo (22oz)', 'Normal 100%', 'Normal Ice', '["Cincau Hitam"]', 16000.00),
(1, 9, 1, 10000.00, NULL, NULL, NULL, NULL, 10000.00),
(2, 5, 2, 11000.00, 'Reguler (16oz)', 'Less Sugar 70%', 'Normal Ice', '["Rainbow Jelly"]', 22000.00),
(3, 4, 2, 10000.00, 'Jumbo (22oz)', 'Normal 100%', 'Normal Ice', '["Biji Selasih"]', 20000.00),
(3, 11, 1, 12000.00, NULL, NULL, NULL, NULL, 12000.00),
(4, 7, 3, 14000.00, 'Jumbo (22oz)', 'Less Sugar 70%', 'Normal Ice', '["Rainbow Jelly"]', 42000.00),
(4, 9, 2, 10000.00, NULL, NULL, NULL, NULL, 20000.00),
(5, 12, 2, 14000.00, 'Jumbo (22oz)', 'Normal 100%', 'Normal Ice', NULL, 28000.00),
(6, 8, 2, 16000.00, 'Jumbo (22oz)', 'Normal 100%', 'Normal Ice', '["Cream Cheese Macchiato"]', 32000.00),
(7, 1, 4, 4000.00, 'Reguler (16oz)', 'Normal 100%', 'Normal Ice', NULL, 16000.00),
(7, 10, 2, 10000.00, NULL, NULL, NULL, NULL, 20000.00),
(8, 6, 3, 11000.00, 'Jumbo (22oz)', 'Normal 100%', 'Normal Ice', '["Biji Selasih"]', 33000.00),
(8, 9, 2, 10000.00, NULL, NULL, NULL, NULL, 20000.00);

