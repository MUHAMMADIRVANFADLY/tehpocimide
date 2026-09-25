<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Es Teh Poci Mide - Segarnya Teh Asli Indonesia')</title>
    <meta name="description" content="@yield('meta_description', 'Pesan Es Teh Poci Mide secara online cepat, segar, dan hemat dengan racikan otentik poci tanah liat ala Mie Gacoan.')">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Brand Assets -->
    <link rel="icon" type="image/svg+xml" href="{{ asset('assets/images/logo.svg') }}">
    <link rel="stylesheet" href="{{ asset('style.css') }}">
    @stack('styles')
</head>
<body>

    <!-- Top Announcement Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="ticker">
                <span class="pulse-dot"></span>
                <span>🎉 PROMO SPESIAL: Gunakan kode <b>POCISEGAR</b> untuk potongan Rp 5.000! Siap saji 5-10 menit.</span>
            </div>
        </div>
    </div>

    <!-- Navigation Bar -->
    <header class="navbar">
        <div class="container">
            <div class="nav-inner">
                <a href="{{ route('home') }}" class="brand-logo">
                    <img src="{{ asset('assets/images/logo.svg') }}" alt="Logo Es Teh Poci Mide">
                    <div class="brand-text">
                        <h1>ES TEH POCI</h1>
                        <span>M I D E • CABANG UTAMA</span>
                    </div>
                </a>

                <div class="outlet-badge" onclick="AppState.openAdminModal()">
                    <span class="status-led"></span>
                    <span>Outlet Buka • Estimasi <b>5-10 mnt</b></span>
                </div>

                <nav class="nav-links">
                    <a href="{{ route('home') }}" class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}">Beranda</a>
                    <a href="{{ route('menu.index') }}" class="nav-link {{ request()->routeIs('menu.*') ? 'active' : '' }}">Menu Lengkap</a>
                    <a href="{{ route('promo') }}" class="nav-link {{ request()->routeIs('promo') ? 'active' : '' }}">Promo & Voucher</a>
                    <a href="{{ route('about') }}" class="nav-link {{ request()->routeIs('about') ? 'active' : '' }}">Tentang Kami</a>
                    <a href="{{ route('contact') }}" class="nav-link {{ request()->routeIs('contact') ? 'active' : '' }}">Lokasi & Kontak</a>
                </nav>

                <div class="nav-actions">
                    <a href="{{ route('admin.dashboard') }}" class="btn-admin-switch">
                        <span>⚙️ Panel Kasir</span>
                    </a>
                    <button class="btn-cart-nav" onclick="AppState.openCartDrawer()">
                        <span>🛒</span>
                        <span>Pesanan</span>
                        <span class="cart-count-badge" id="navCartCount">0</span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content Yield -->
    <main>
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="{{ asset('assets/images/logo.svg') }}" alt="Es Teh Poci Mide">
                    <p>Es Teh Poci Mide menghadirkan kenikmatan teh melati otentik poci tanah liat khas Indonesia yang higienis, segar, dan ramah di kantong.</p>
                </div>
                <div class="footer-col">
                    <h5>Kategori Pilihan</h5>
                    <ul>
                        <li><a href="{{ route('menu.index', ['category' => 'teh-original']) }}">Teh Original Poci</a></li>
                        <li><a href="{{ route('menu.index', ['category' => 'fruity-tea']) }}">Fruity Jasmine Series</a></li>
                        <li><a href="{{ route('menu.index', ['category' => 'milky-macchiato']) }}">Milky & Macchiato</a></li>
                        <li><a href="{{ route('menu.index', ['category' => 'dimsum-snack']) }}">Pangsit & Dimsum</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>Akses Cepat</h5>
                    <ul>
                        <li><a href="javascript:void(0)" onclick="AppState.openCartDrawer()">Keranjang Belanja</a></li>
                        <li><a href="{{ route('admin.dashboard') }}">Login Administrator</a></li>
                        <li><a href="{{ route('contact') }}">Lokasi Outlet</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h5>Layanan Bantuan</h5>
                    <p style="font-size:0.85rem; color:#cbd5e1;">
                        📞 WhatsApp CS: 0812-3456-7890<br>
                        ✉️ halo@estehpocimide.com<br>
                        Powered by Laravel & MySQL Framework
                    </p>
                </div>
            </div>
            <div class="footer-bottom">
                <div>&copy; {{ date('Y') }} Es Teh Poci Mide. Sistem Pemesanan Model Mie Gacoan.</div>
                <div>Framework Laravel 10/11 • Blade Template Engine.</div>
            </div>
        </div>
    </footer>

    <!-- Include Javascript Bundle -->
    <script src="{{ asset('app.js') }}"></script>
    @stack('scripts')
</body>
</html>
