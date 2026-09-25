<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\OrderManageController;

/*
|--------------------------------------------------------------------------
| Web Routes - Es Teh Poci Mide (Mie Gacoan Style Ordering System)
|--------------------------------------------------------------------------
*/

// Pelanggan (Customer Frontend)
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/menu', [MenuController::class, 'index'])->name('menu.index');
Route::get('/menu/{slug}', [MenuController::class, 'show'])->name('menu.show');
Route::get('/promo', [HomeController::class, 'promo'])->name('promo');
Route::get('/tentang-kami', [HomeController::class, 'about'])->name('about');
Route::get('/kontak', [HomeController::class, 'contact'])->name('contact');

// Keranjang (Cart)
Route::prefix('cart')->name('cart.')->group(function () {
    Route::get('/', [CartController::class, 'index'])->name('index');
    Route::post('/add', [CartController::class, 'add'])->name('add');
    Route::post('/update', [CartController::class, 'update'])->name('update');
    Route::post('/remove', [CartController::class, 'remove'])->name('remove');
    Route::post('/apply-promo', [CartController::class, 'applyPromo'])->name('apply-promo');
});

// Checkout & Pemesanan
Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
Route::post('/checkout/process', [CheckoutController::class, 'process'])->name('checkout.process');

// Status & Pelacakan Pesanan (Live Tracking)
Route::get('/order/status/{orderNumber}', [OrderController::class, 'status'])->name('order.status');
Route::get('/order/track/{orderNumber}/stream', [OrderController::class, 'streamStatus'])->name('order.stream');

// Area Khusus Administrator & Kasir (/access_admin)
Route::prefix('access_admin')->name('admin.')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AdminAuthController::class, 'login'])->name('login.post');
    Route::post('/logout', [AdminAuthController::class, 'logout'])->name('logout');

    Route::get('/', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard.index');
    
    // Antrean Dapur & Manajemen Pesanan
    Route::get('/orders', [OrderManageController::class, 'index'])->name('orders.index');
    Route::post('/orders/{id}/status', [OrderManageController::class, 'updateStatus'])->name('orders.updateStatus');
    Route::get('/orders/{id}/print', [OrderManageController::class, 'printReceipt'])->name('orders.print');

    // Manajemen Produk & Kategori
    Route::resource('products', AdminProductController::class);
    Route::post('/products/{id}/toggle-stock', [AdminProductController::class, 'toggleStock'])->name('products.toggleStock');
    
    // Laporan Penjualan (Harian, Mingguan, Bulanan & Export)
    Route::get('/reports/sales', [AdminDashboardController::class, 'salesReport'])->name('reports.sales');
    Route::get('/reports/sales/export-csv', [AdminDashboardController::class, 'exportCsv'])->name('reports.sales.export');
});
