/**
 * ES TEH POCI MIDE - APP LOGIC & STATE ENGINE
 */

// 1. Initial Product Data (Sesuai Daftar Menu Asli Es Teh Mide)
const DEFAULT_PRODUCTS = [
  // --- KATEGORI 1: ORIGINAL ---
  {
    id: 1,
    name: 'Es Teh Original (Cup Besar)',
    category: 'original',
    categoryName: 'Teh Original',
    price: 4000,
    desc: 'Seduhan daun teh melati asli poci tanah liat khas Poci Mide. Harum, sejuk, dan menyegarkan dahaga.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Best Seller',
    badgeType: 'bestseller',
    isAvailable: true,
    hasCustomization: true
  },

  // --- KATEGORI 2: RASA ---
  {
    id: 2,
    name: 'Es Teh Rasa Apel',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Perpaduan teh melati harum khas Poci dengan rasa buah apel segar manis.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Favorit',
    badgeType: 'special',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 3,
    name: 'Es Teh Rasa Blackcurrant',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Sensasi manis dan asam segar buah blackcurrant berpadu seduhan teh poci dingin.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 4,
    name: 'Es Teh Rasa Jambu',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Cita rasa manis wangi khas buah jambu biji berpadu kepekatan teh poci alami.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 5,
    name: 'Es Teh Rasa Jeruk',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Kesegaran rasa jeruk segar alami yang sejuk dipadukan racikan teh poci melati.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Favorit',
    badgeType: 'special',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 6,
    name: 'Es Teh Rasa Leci',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Aroma wangi mewah buah leci manis menyegarkan yang jadi favorit banyak orang.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Best Seller',
    badgeType: 'bestseller',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 7,
    name: 'Es Teh Rasa Lemon',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Sensasi asam manis segar buah lemon yang bikin dahaga langsung hilang seketika.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Best Seller',
    badgeType: 'bestseller',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 8,
    name: 'Es Teh Rasa Mangga',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Manis harum buah mangga tropis berpadu seduhan teh poci melati dingin.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Favorit',
    badgeType: 'special',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 9,
    name: 'Es Teh Green Tea',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Aroma teh hijau alami yang sejuk dan menenangkan dengan racikan khas Poci Mide.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 10,
    name: 'Es Teh Milo',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Rasa cokelat malt Milo favorit berpadu teh segar yang manis dan creamy.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Favorit',
    badgeType: 'special',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 11,
    name: 'Es Teh Oren',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Sensasi rasa jeruk oren manis menyegarkan, nikmat diminum saat cuaca terik.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 12,
    name: 'Es Teh Taro',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 5000,
    desc: 'Cita rasa talas taro ungu yang gurih manis lembut dipadu dinginnya teh poci.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Viral',
    badgeType: 'special',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 13,
    name: 'Es Teh Capuccino',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 6000,
    desc: 'Perpaduan kopi capuccino creamy dengan racikan teh poci melati yang mantap.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 14,
    name: 'Es Teh Cokelat',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 6000,
    desc: 'Manis legit cokelat pekat berpadu seduhan teh segar dingin yang lezat.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 15,
    name: 'Es Teh Thai Tea',
    category: 'rasa',
    categoryName: 'Varian Rasa',
    price: 6500,
    desc: 'Racikan teh rempah khas Thailand yang pekat dan legit dengan aroma khas memikat.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Best Seller',
    badgeType: 'bestseller',
    isAvailable: true,
    hasCustomization: true
  },

  // --- KATEGORI 3: MIX SUSU ---
  {
    id: 16,
    name: 'Es Teh Original + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Teh melati poci otentik dipadukan susu kental manis gurih legit dan lembut.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Best Seller',
    badgeType: 'bestseller',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 17,
    name: 'Es Teh Apel + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Perpaduan buah apel manis dan susu kental manis lembut yang menyegarkan.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 18,
    name: 'Es Teh Blackcurrant + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Asam manis buah blackcurrant dipadukan susu creamy lembut nikmat.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 19,
    name: 'Es Teh Jambu + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Aroma wangi jambu biji dipadukan kelembutan susu creamy yang legit.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 20,
    name: 'Es Teh Jeruk + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Sensasi unik kesegaran jeruk dipadukan rasa susu gurih creamy yang nagih.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 21,
    name: 'Es Teh Leci + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Wangi manis leci berpadu kelembutan susu kental manis favorit pelanggan.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Favorit',
    badgeType: 'special',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 22,
    name: 'Es Teh Lemon + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Segarnya rasa lemon dipadu sentuhan susu manis creamy yang pas di lidah.',
    image: 'assets/images/hero-banner.jpg',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 23,
    name: 'Es Teh Mangga + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 8000,
    desc: 'Manis buah mangga tropis dipadukan susu creamy lezat yang bikin ketagihan.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Favorit',
    badgeType: 'special',
    isAvailable: true,
    hasCustomization: true
  },
  {
    id: 24,
    name: 'Es Thai Tea + Susu',
    category: 'mix',
    categoryName: 'Mix Susu',
    price: 9500,
    desc: 'Spesial seduhan Thai Tea pekat berpadu ekstra susu kental manis creamy autentik.',
    image: 'assets/images/hero-banner.jpg',
    badge: 'Rekomendasi',
    badgeType: 'bestseller',
    isAvailable: true,
    hasCustomization: true
  }
];

// Available Promos
const AVAILABLE_PROMOS = {
  'POCISEGAR': { code: 'POCISEGAR', discount: 5000, minOrder: 15000, desc: 'Potongan Rp 5.000' },
  'POCISUSU': { code: 'POCISUSU', discount: 0.15, isPercent: true, minOrder: 20000, desc: 'Diskon 15%' },
  'FREEONGKIR': { code: 'FREEONGKIR', discount: 5000, minOrder: 25000, desc: 'Subsidi Ongkir Rp 5.000' }
};

// 2. State Controller
const AppState = {
  products: [],
  cart: [],
  currentModalProduct: null,
  orderMode: 'dine_in', // 'dine_in', 'takeaway', 'delivery'
  tableNumber: '07',
  activeCategory: 'all',
  searchQuery: '',
  appliedPromo: null,
  activeOrder: null,
  allOrders: [],

  init() {
    // Invalidate old cache so browser loads fresh actual menu
    const APP_VERSION = '3.0';
    if (localStorage.getItem('poci_app_version') !== APP_VERSION) {
      localStorage.removeItem('poci_products');
      localStorage.removeItem('poci_orders');
      localStorage.setItem('poci_app_version', APP_VERSION);
    }

    // Load products from localStorage or defaults
    const savedProducts = localStorage.getItem('poci_products');
    this.products = savedProducts ? JSON.parse(savedProducts) : DEFAULT_PRODUCTS;
    if (!savedProducts) {
      localStorage.setItem('poci_products', JSON.stringify(this.products));
    }

    // Load cart
    const savedCart = localStorage.getItem('poci_cart');
    this.cart = savedCart ? JSON.parse(savedCart) : [];

    // Load orders
    const savedOrders = localStorage.getItem('poci_orders');
    this.allOrders = savedOrders ? JSON.parse(savedOrders) : [
      {
        id: 'POCI-10821',
        customerName: 'Budi Santoso',
        whatsapp: '089650965540',
        orderType: 'dine_in',
        tableOrAddress: 'Meja 04',
        paymentMethod: 'qris',
        items: [
          { name: 'Es Teh Poci Melati Original', qty: 2, size: 'Jumbo (22oz)', sugar: 'Normal 100%', ice: 'Normal Ice', toppings: ['Cincau Hitam'], totalItemPrice: 16000 },
          { name: 'Es Teh Lemon Fresh Sultan', qty: 1, size: 'Reguler (16oz)', sugar: 'Normal 100%', ice: 'Normal Ice', toppings: ['Biji Selasih'], totalItemPrice: 8000 }
        ],
        subtotal: 24000,
        discount: 5000,
        serviceFee: 1000,
        total: 20000,
        status: 'diproses',
        timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString()
      },
      {
        id: 'POCI-10820',
        customerName: 'Siti Rahma',
        whatsapp: '085712349988',
        orderType: 'takeaway',
        tableOrAddress: 'Bungkus',
        paymentMethod: 'cash',
        items: [
          { name: 'Es Teh Poci Leci Sultan', qty: 2, size: 'Reguler (16oz)', sugar: 'Less Sugar 70%', ice: 'Normal Ice', toppings: ['Rainbow Jelly'], totalItemPrice: 22000 }
        ],
        subtotal: 22000,
        discount: 0,
        serviceFee: 1000,
        total: 23000,
        status: 'siap',
        timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString()
      }
    ];

    // Load active customer order if any
    const savedActiveOrder = localStorage.getItem('poci_active_order');
    if (savedActiveOrder) {
      this.activeOrder = JSON.parse(savedActiveOrder);
    }

    this.renderCatalog();
    this.updateCartUI();
    this.setupListeners();
    this.renderAdminView();
  },

  saveProducts() {
    localStorage.setItem('poci_products', JSON.stringify(this.products));
  },

  saveCart() {
    localStorage.setItem('poci_cart', JSON.stringify(this.cart));
    this.updateCartUI();
  },

  saveOrders() {
    localStorage.setItem('poci_orders', JSON.stringify(this.allOrders));
    this.renderAdminView();
  },

  // 3. Render Catalog
  renderCatalog() {
    const catalogContainer = document.getElementById('productsContainer');
    if (!catalogContainer) return;

    let filtered = this.products;

    // Filter by Category
    if (this.activeCategory !== 'all') {
      if (this.activeCategory === 'bestseller') {
        filtered = filtered.filter(p => p.badgeType === 'bestseller');
      } else {
        filtered = filtered.filter(p => p.category === this.activeCategory);
      }
    }

    // Filter by Search Query
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.desc.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      catalogContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🍃</div>
          <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--dark);">Menu Tidak Ditemukan</h4>
          <p style="font-size: 0.85rem;">Coba cari dengan kata kunci lain seperti 'lemon', 'melati', atau 'pangsit'.</p>
        </div>
      `;
      return;
    }

    catalogContainer.innerHTML = filtered.map(item => `
      <div class="product-card" id="product-${item.id}">
        <div class="product-thumb">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${item.badge ? `<span class="badge-tag badge-${item.badgeType || 'bestseller'}">${item.badge}</span>` : ''}
          ${!item.isAvailable ? `<div class="stock-tag-out">Habis Terjual</div>` : ''}
        </div>
        <div class="product-details">
          <span class="product-category-lbl">${item.categoryName}</span>
          <h3 class="product-name">${item.name}</h3>
          <p class="product-desc">${item.desc}</p>
          <div class="product-footer">
            <div class="product-price">
              <span class="price-val">Rp ${item.price.toLocaleString('id-ID')}</span>
              ${item.priceStrike ? `<span class="price-strike">Rp ${item.priceStrike.toLocaleString('id-ID')}</span>` : ''}
            </div>
            <button class="btn-add-item" onclick="AppState.openProductModal(${item.id})" ${!item.isAvailable ? 'disabled' : ''}>
              <span>+ Tambah</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  // 4. Modal Customizer
  openProductModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product || !product.isAvailable) return;

    this.currentModalProduct = product;
    const modal = document.getElementById('customizeModal');
    
    // Set basic info
    document.getElementById('modalProductImg').src = product.image;
    document.getElementById('modalProductTitle').innerText = product.name;
    document.getElementById('modalProductDesc').innerText = product.desc;
    document.getElementById('modalBasePrice').innerText = `Rp ${product.price.toLocaleString('id-ID')}`;

    // Show/Hide drink options if it's a snack
    const drinkOptions = document.getElementById('drinkCustomizationFields');
    if (product.hasCustomization) {
      drinkOptions.style.display = 'block';
    } else {
      drinkOptions.style.display = 'none';
    }

    // Reset default form values
    document.getElementById('modalQty').innerText = '1';
    document.getElementById('modalNotes').value = '';
    
    // Reset radio buttons to default
    const defaultSize = document.querySelector('input[name="cupSize"][value="reguler"]');
    if (defaultSize) defaultSize.checked = true;
    
    const defaultSugar = document.querySelector('input[name="sugarLevel"][value="normal"]');
    if (defaultSugar) defaultSugar.checked = true;

    const defaultIce = document.querySelector('input[name="iceLevel"][value="normal"]');
    if (defaultIce) defaultIce.checked = true;

    // Uncheck toppings
    document.querySelectorAll('input[name="topping"]').forEach(cb => cb.checked = false);

    // Update chips visual styles
    this.updateModalChipStyles();
    this.recalcModalPrice();

    modal.classList.add('active');
  },

  closeProductModal() {
    const modal = document.getElementById('customizeModal');
    if (modal) modal.classList.remove('active');
  },

  updateModalChipStyles() {
    document.querySelectorAll('.option-chip').forEach(chip => {
      const radio = chip.querySelector('input[type="radio"]');
      if (radio && radio.checked) {
        chip.classList.add('selected');
      } else {
        chip.classList.remove('selected');
      }
    });
  },

  changeModalQty(delta) {
    const qtyElem = document.getElementById('modalQty');
    let current = parseInt(qtyElem.innerText, 10);
    current = Math.max(1, current + delta);
    qtyElem.innerText = current;
    this.recalcModalPrice();
  },

  recalcModalPrice() {
    if (!this.currentModalProduct) return;

    let base = this.currentModalProduct.price;
    const qty = parseInt(document.getElementById('modalQty').innerText, 10);

    if (this.currentModalProduct.hasCustomization) {
      // Cup Size
      const sizeSelected = document.querySelector('input[name="cupSize"]:checked');
      if (sizeSelected && sizeSelected.value === 'jumbo') {
        base += 2000;
      }

      // Toppings
      document.querySelectorAll('input[name="topping"]:checked').forEach(cb => {
        base += parseInt(cb.getAttribute('data-price') || 0, 10);
      });
    }

    const total = base * qty;
    document.getElementById('modalTotalBtnPrice').innerText = `Rp ${total.toLocaleString('id-ID')}`;
  },

  addToCartFromModal() {
    if (!this.currentModalProduct) return;

    const qty = parseInt(document.getElementById('modalQty').innerText, 10);
    const notes = document.getElementById('modalNotes').value.trim();

    let sizeLabel = 'Standar';
    let sugarLabel = '-';
    let iceLabel = '-';
    let toppings = [];
    let unitPrice = this.currentModalProduct.price;

    if (this.currentModalProduct.hasCustomization) {
      const sizeInput = document.querySelector('input[name="cupSize"]:checked');
      if (sizeInput) {
        sizeLabel = sizeInput.value === 'jumbo' ? 'Jumbo (22oz)' : 'Reguler (16oz)';
        if (sizeInput.value === 'jumbo') unitPrice += 2000;
      }

      const sugarInput = document.querySelector('input[name="sugarLevel"]:checked');
      if (sugarInput) sugarInput.closest('.option-chip') && (sugarLabel = sugarInput.closest('.option-chip').querySelector('.chip-name').innerText);

      const iceInput = document.querySelector('input[name="iceLevel"]:checked');
      if (iceInput) iceInput.closest('.option-chip') && (iceLabel = iceInput.closest('.option-chip').querySelector('.chip-name').innerText);

      document.querySelectorAll('input[name="topping"]:checked').forEach(cb => {
        toppings.push(cb.value);
        unitPrice += parseInt(cb.getAttribute('data-price') || 0, 10);
      });
    }

    const cartItem = {
      cartItemId: Date.now() + Math.random().toString(36).substr(2, 4),
      productId: this.currentModalProduct.id,
      name: this.currentModalProduct.name,
      image: this.currentModalProduct.image,
      unitPrice: unitPrice,
      qty: qty,
      size: sizeLabel,
      sugar: sugarLabel,
      ice: iceLabel,
      toppings: toppings,
      notes: notes,
      totalItemPrice: unitPrice * qty
    };

    this.cart.push(cartItem);
    this.saveCart();
    this.closeProductModal();

    // Play quick feedback sound
    this.playAudioChime('add');
    this.showToastNotification(`Berhasil ditambahkan: ${cartItem.name}`);
  },

  // 5. Cart Drawer Management
  openCartDrawer() {
    this.updateCartUI();
    document.getElementById('cartDrawerOverlay').classList.add('active');
    document.getElementById('cartDrawer').classList.add('active');
  },

  closeCartDrawer() {
    document.getElementById('cartDrawerOverlay').classList.remove('active');
    document.getElementById('cartDrawer').classList.remove('active');
  },

  updateCartItemQty(cartItemId, delta) {
    const itemIndex = this.cart.findIndex(i => i.cartItemId === cartItemId);
    if (itemIndex > -1) {
      this.cart[itemIndex].qty += delta;
      if (this.cart[itemIndex].qty <= 0) {
        this.cart.splice(itemIndex, 1);
      } else {
        this.cart[itemIndex].totalItemPrice = this.cart[itemIndex].qty * this.cart[itemIndex].unitPrice;
      }
      this.saveCart();
    }
  },

  removeCartItem(cartItemId) {
    this.cart = this.cart.filter(i => i.cartItemId !== cartItemId);
    this.saveCart();
  },

  applyPromoCode(codeManual) {
    const input = document.getElementById('promoInput');
    const code = (codeManual || (input ? input.value : '')).trim().toUpperCase();

    if (!code) {
      alert('Masukkan kode voucher promo terlebih dahulu.');
      return;
    }

    const promo = AVAILABLE_PROMOS[code];
    if (!promo) {
      alert('Kode voucher tidak valid atau telah kadaluarsa.');
      return;
    }

    const subtotal = this.calcCartSubtotal();
    if (subtotal < promo.minOrder) {
      alert(`Minimal pesanan untuk voucher ${code} adalah Rp ${promo.minOrder.toLocaleString('id-ID')}`);
      return;
    }

    this.appliedPromo = promo;
    this.showToastNotification(`Voucher ${promo.code} berhasil diterapkan!`);
    this.updateCartUI();
  },

  removePromo() {
    this.appliedPromo = null;
    this.updateCartUI();
  },

  calcCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + item.totalItemPrice, 0);
  },

  calcCartDiscount() {
    if (!this.appliedPromo) return 0;
    const subtotal = this.calcCartSubtotal();
    if (this.appliedPromo.isPercent) {
      return Math.round(subtotal * this.appliedPromo.discount);
    }
    return this.appliedPromo.discount;
  },

  updateCartUI() {
    const totalItems = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = this.calcCartSubtotal();
    const discount = this.calcCartDiscount();
    const serviceFee = totalItems > 0 ? 1000 : 0;
    const grandTotal = Math.max(0, subtotal - discount + serviceFee);

    // Navbar badges & floating bar
    const navCount = document.getElementById('navCartCount');
    if (navCount) navCount.innerText = totalItems;

    const floatingBar = document.getElementById('floatingCartBar');
    if (floatingBar) {
      if (totalItems > 0) {
        floatingBar.classList.add('active');
        document.getElementById('floatingCartCount').innerText = `${totalItems} Item`;
        document.getElementById('floatingCartPrice').innerText = `Rp ${grandTotal.toLocaleString('id-ID')}`;
      } else {
        floatingBar.classList.remove('active');
      }
    }

    // Drawer list
    const drawerList = document.getElementById('cartDrawerItems');
    const drawerEmpty = document.getElementById('cartDrawerEmpty');
    const drawerCheckout = document.getElementById('cartDrawerCheckoutSection');

    if (totalItems === 0) {
      if (drawerList) drawerList.innerHTML = '';
      if (drawerEmpty) drawerEmpty.style.display = 'block';
      if (drawerCheckout) drawerCheckout.style.display = 'none';
      return;
    }

    if (drawerEmpty) drawerEmpty.style.display = 'none';
    if (drawerCheckout) drawerCheckout.style.display = 'block';

    if (drawerList) {
      drawerList.innerHTML = this.cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item-img" alt="${item.name}">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-options">
              ${item.size ? `<span>${item.size}</span> • ` : ''}
              ${item.sugar && item.sugar !== '-' ? `<span>Gula: ${item.sugar}</span> • ` : ''}
              ${item.ice && item.ice !== '-' ? `<span>Es: ${item.ice}</span>` : ''}
              ${item.toppings && item.toppings.length > 0 ? `<div>Topping: ${item.toppings.join(', ')}</div>` : ''}
              ${item.notes ? `<div style="font-style: italic; color: #b45309;">Catatan: "${item.notes}"</div>` : ''}
            </div>
            <div class="cart-item-bottom">
              <span class="cart-item-price">Rp ${item.totalItemPrice.toLocaleString('id-ID')}</span>
              <div class="cart-item-actions">
                <button class="btn-remove-item" onclick="AppState.removeCartItem('${item.cartItemId}')" title="Hapus">
                  🗑️
                </button>
                <div class="qty-counter">
                  <button class="qty-btn" onclick="AppState.updateCartItemQty('${item.cartItemId}', -1)">-</button>
                  <span class="qty-val">${item.qty}</span>
                  <button class="qty-btn" onclick="AppState.updateCartItemQty('${item.cartItemId}', 1)">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Update Drawer Pricing Summary
    const subtotalEl = document.getElementById('drawerSubtotal');
    if (subtotalEl) subtotalEl.innerText = `Rp ${subtotal.toLocaleString('id-ID')}`;

    const discountRow = document.getElementById('drawerDiscountRow');
    const discountEl = document.getElementById('drawerDiscount');
    if (discount > 0 && discountRow && discountEl) {
      discountRow.style.display = 'flex';
      discountEl.innerText = `- Rp ${discount.toLocaleString('id-ID')}`;
    } else if (discountRow) {
      discountRow.style.display = 'none';
    }

    const grandTotalEl = document.getElementById('drawerGrandTotal');
    if (grandTotalEl) grandTotalEl.innerText = `Rp ${grandTotal.toLocaleString('id-ID')}`;

    // Voucher message alert
    const voucherAlert = document.getElementById('drawerVoucherAlert');
    if (voucherAlert) {
      if (this.appliedPromo) {
        voucherAlert.innerHTML = `
          <span>🎉 Voucher <b>${this.appliedPromo.code}</b> aktif! (-Rp ${discount.toLocaleString('id-ID')})</span>
          <a href="javascript:void(0)" onclick="AppState.removePromo()" style="color: var(--red); font-size: 0.75rem;">Hapus</a>
        `;
        voucherAlert.style.display = 'flex';
      } else {
        voucherAlert.style.display = 'none';
      }
    }
  },

  // 6. Checkout & Order Submission
  submitOrder(event) {
    if (event) event.preventDefault();

    if (this.cart.length === 0) {
      alert('Keranjang Anda masih kosong!');
      return;
    }

    const customerName = document.getElementById('checkoutName').value.trim();
    const whatsapp = document.getElementById('checkoutWa').value.trim();
    const orderType = document.querySelector('input[name="checkoutOrderType"]:checked')?.value || this.orderMode;
    const tableOrAddress = document.getElementById('checkoutDetailDest').value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'qris';

    if (!customerName || !whatsapp) {
      alert('Mohon lengkapi Nama Pemesan dan Nomor WhatsApp!');
      return;
    }

    const orderId = 'POCI-' + Math.floor(10000 + Math.random() * 90000);
    const subtotal = this.calcCartSubtotal();
    const discount = this.calcCartDiscount();
    const serviceFee = 1000;
    const total = Math.max(0, subtotal - discount + serviceFee);

    const newOrder = {
      id: orderId,
      customerName: customerName,
      whatsapp: whatsapp,
      orderType: orderType,
      tableOrAddress: tableOrAddress || (orderType === 'dine_in' ? `Meja ${this.tableNumber}` : 'Bungkus'),
      paymentMethod: paymentMethod,
      items: JSON.parse(JSON.stringify(this.cart)),
      subtotal: subtotal,
      discount: discount,
      serviceFee: serviceFee,
      total: total,
      status: 'diterima', // diterima, diproses, siap, selesai
      timestamp: new Date().toISOString()
    };

    // Store order
    this.allOrders.unshift(newOrder);
    this.saveOrders();

    this.activeOrder = newOrder;
    localStorage.setItem('poci_active_order', JSON.stringify(newOrder));

    // Reset cart
    this.cart = [];
    this.appliedPromo = null;
    this.saveCart();

    this.closeCartDrawer();
    this.playAudioChime('order');
    this.openTrackingModal(newOrder);
  },

  // 7. Order Live Tracking Modal
  openTrackingModal(order) {
    const targetOrder = order || this.activeOrder;
    if (!targetOrder) {
      alert('Belum ada pesanan aktif yang sedang berlangsung.');
      return;
    }

    const modal = document.getElementById('trackingModal');
    if (!modal) return;

    document.getElementById('trackOrderId').innerText = '#' + targetOrder.id;
    document.getElementById('trackCustomerName').innerText = targetOrder.customerName;
    document.getElementById('trackOrderType').innerText = targetOrder.orderType === 'dine_in' ? `Dine-in (${targetOrder.tableOrAddress})` : (targetOrder.orderType === 'takeaway' ? 'Take Away (Bungkus)' : 'Delivery Antar');
    document.getElementById('trackTotal').innerText = `Rp ${targetOrder.total.toLocaleString('id-ID')}`;
    document.getElementById('trackPayMethod').innerText = targetOrder.paymentMethod.toUpperCase();

    // Timeline progress indicators
    const steps = ['diterima', 'diproses', 'siap', 'selesai'];
    const currentIdx = steps.indexOf(targetOrder.status);

    const fillLine = document.getElementById('timelineProgressLine');
    if (fillLine) {
      const percentages = ['0%', '33%', '66%', '100%'];
      fillLine.style.width = percentages[Math.max(0, currentIdx)];
    }

    steps.forEach((step, idx) => {
      const stepElem = document.getElementById(`step-${step}`);
      if (stepElem) {
        stepElem.classList.remove('completed', 'current');
        if (idx < currentIdx) {
          stepElem.classList.add('completed');
        } else if (idx === currentIdx) {
          stepElem.classList.add('current');
        }
      }
    });

    // Dynamic QRIS box
    const qrisBox = document.getElementById('trackQrisBox');
    if (qrisBox) {
      if (targetOrder.paymentMethod === 'qris' && targetOrder.status === 'diterima') {
        qrisBox.style.display = 'block';
      } else {
        qrisBox.style.display = 'none';
      }
    }

    // Items list in tracking
    const itemsContainer = document.getElementById('trackItemsList');
    if (itemsContainer) {
      itemsContainer.innerHTML = targetOrder.items.map(i => `
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.4rem;">
          <span>${i.qty}x ${i.name} (${i.size || 'Reguler'})</span>
          <span style="font-weight:700;">Rp ${i.totalItemPrice.toLocaleString('id-ID')}</span>
        </div>
      `).join('');
    }

    // WhatsApp Action button link
    const waBtn = document.getElementById('btnTrackSendWa');
    if (waBtn) {
      const text = encodeURIComponent(
        `Halo Kasir Es Teh Poci Mide! 👋\n` +
        `Saya ingin konfirmasi pesanan:\n` +
        `📌 No. Pesanan: #${targetOrder.id}\n` +
        `👤 Nama: ${targetOrder.customerName}\n` +
        `🪑 Tipe: ${targetOrder.orderType.toUpperCase()} (${targetOrder.tableOrAddress})\n` +
        `💰 Total: Rp ${targetOrder.total.toLocaleString('id-ID')}\n` +
        `💳 Metode: ${targetOrder.paymentMethod.toUpperCase()}\n\n` +
        `Mohon segera diproses ya kak. Terima kasih!`
      );
      waBtn.href = `https://wa.me/6289650965540?text=${text}`;
    }

    modal.classList.add('active');
  },

  closeTrackingModal() {
    const modal = document.getElementById('trackingModal');
    if (modal) modal.classList.remove('active');
  },

  // 8. Admin Backoffice & Kitchen Display System (KDS)
  openAdminModal() {
    this.renderAdminView();
    document.getElementById('adminModal').classList.add('active');
  },

  closeAdminModal() {
    document.getElementById('adminModal').classList.remove('active');
  },

  renderAdminView() {
    // Stats
    const totalOrders = this.allOrders.length;
    const totalRevenue = this.allOrders.reduce((sum, o) => sum + o.total, 0);
    const activeOrders = this.allOrders.filter(o => o.status !== 'selesai').length;

    const elTotalRev = document.getElementById('adminStatRevenue');
    if (elTotalRev) elTotalRev.innerText = `Rp ${totalRevenue.toLocaleString('id-ID')}`;

    const elTotalOrd = document.getElementById('adminStatOrders');
    if (elTotalOrd) elTotalOrd.innerText = totalOrders;

    const elActiveOrd = document.getElementById('adminStatActive');
    if (elActiveOrd) elActiveOrd.innerText = activeOrders;

    // Render Orders Table
    const tableBody = document.getElementById('adminOrdersTableBody');
    if (tableBody) {
      if (this.allOrders.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:2rem; color:var(--text-muted);">Belum ada riwayat pesanan.</td></tr>`;
      } else {
        tableBody.innerHTML = this.allOrders.map(o => `
          <tr>
            <td><b>#${o.id}</b></td>
            <td>
              <div><b>${o.customerName}</b></div>
              <small style="color:var(--text-muted);">${o.whatsapp}</small>
            </td>
            <td>
              <span style="text-transform:capitalize;">${o.orderType.replace('_', ' ')}</span>
              <small style="display:block; color:var(--primary); font-weight:700;">${o.tableOrAddress}</small>
            </td>
            <td>
              <small>${o.items.map(i => `${i.qty}x ${i.name}`).join('<br>')}</small>
            </td>
            <td><b>Rp ${o.total.toLocaleString('id-ID')}</b><br><small>${o.paymentMethod.toUpperCase()}</small></td>
            <td>
              <span class="status-badge ${o.status}">${o.status.toUpperCase()}</span>
            </td>
            <td>
              <div style="display:flex; gap:4px; flex-wrap:wrap;">
                ${o.status === 'diterima' ? `<button class="btn-action-status" onclick="AppState.updateOrderStatus('${o.id}', 'diproses')">Racik</button>` : ''}
                ${o.status === 'diproses' ? `<button class="btn-action-status" style="background:#7e22ce;" onclick="AppState.updateOrderStatus('${o.id}', 'siap')">Siap</button>` : ''}
                ${o.status === 'siap' ? `<button class="btn-action-status" style="background:#15803d;" onclick="AppState.updateOrderStatus('${o.id}', 'selesai')">Selesai</button>` : ''}
                ${o.status === 'selesai' ? `<span style="font-size:0.75rem; color:#15803d; font-weight:700;">✓ Selesai</span>` : ''}
              </div>
            </td>
          </tr>
        `).join('');
      }
    }

    // Render Admin Products Stock Manager
    const productStockList = document.getElementById('adminProductStockList');
    if (productStockList) {
      productStockList.innerHTML = this.products.map(p => `
        <div style="display:flex; align-items:center; justify-content:space-between; padding:0.6rem 0; border-bottom:1px solid var(--border-light);">
          <div>
            <div style="font-weight:700; font-size:0.88rem;">${p.name}</div>
            <small style="color:var(--text-muted);">Rp ${p.price.toLocaleString('id-ID')} • ${p.categoryName}</small>
          </div>
          <div>
            <button class="btn-action-status" style="background: ${p.isAvailable ? '#15803d' : '#e30613'}" onclick="AppState.toggleProductStock(${p.id})">
              ${p.isAvailable ? '🟢 Tersedia' : '🔴 Habis'}
            </button>
          </div>
        </div>
      `).join('');
    }
  },

  updateOrderStatus(orderId, newStatus) {
    const order = this.allOrders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.saveOrders();

      // If active order matches, sync live
      if (this.activeOrder && this.activeOrder.id === orderId) {
        this.activeOrder.status = newStatus;
        localStorage.setItem('poci_active_order', JSON.stringify(this.activeOrder));
        if (document.getElementById('trackingModal').classList.contains('active')) {
          this.openTrackingModal(this.activeOrder);
        }
      }

      this.showToastNotification(`Pesanan #${orderId} diubah ke status: ${newStatus.toUpperCase()}`);
    }
  },

  toggleProductStock(productId) {
    const prod = this.products.find(p => p.id === productId);
    if (prod) {
      prod.isAvailable = !prod.isAvailable;
      this.saveProducts();
      this.renderCatalog();
      this.renderAdminView();
      this.showToastNotification(`Stok ${prod.name} diperbarui: ${prod.isAvailable ? 'Tersedia' : 'Habis'}`);
    }
  },

  // 9. Audio Synthesis & Helpers
  playAudioChime(type) {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'add') {
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.15); // G5
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.15);
      } else {
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      }
    } catch (e) {
      // Audio not supported or blocked
    }
  },

  showToastNotification(msg) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%) translateY(50px);
        background: var(--dark-surface);
        color: #fff;
        padding: 0.65rem 1.25rem;
        border-radius: var(--radius-full);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        font-size: 0.85rem;
        font-weight: 700;
        z-index: 3000;
        opacity: 0;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: 1px solid var(--yellow);
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>🍵</span> ${msg}`;
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';

    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(50px)';
    }, 2800);
  },

  // 10. Listeners Setup
  setupListeners() {
    // Category pills filter
    document.querySelectorAll('.cat-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeCategory = btn.getAttribute('data-cat') || 'all';
        this.renderCatalog();
      });
    });

    // Search input
    const searchInp = document.getElementById('menuSearchInput');
    if (searchInp) {
      searchInp.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderCatalog();
      });
    }

    // Modal option chips selection
    document.addEventListener('change', (e) => {
      if (e.target.name === 'cupSize' || e.target.name === 'sugarLevel' || e.target.name === 'iceLevel' || e.target.name === 'topping') {
        this.updateModalChipStyles();
        this.recalcModalPrice();
      }
    });

    // Mode Selector in Hero
    document.querySelectorAll('.order-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.order-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.orderMode = btn.getAttribute('data-mode');
        
        const fieldWrap = document.getElementById('heroModeFields');
        if (fieldWrap) {
          if (this.orderMode === 'dine_in') {
            fieldWrap.innerHTML = `
              <input type="text" id="heroTableNumber" placeholder="Nomor Meja (misal: 07)" value="${this.tableNumber}">
              <button class="btn-hero-cta" onclick="AppState.scrollToMenu()">Pesan Sekarang →</button>
            `;
          } else if (this.orderMode === 'takeaway') {
            fieldWrap.innerHTML = `
              <input type="text" placeholder="Nama Pemesan (Bungkus Bawa Pulang)">
              <button class="btn-hero-cta" onclick="AppState.scrollToMenu()">Pesan Sekarang →</button>
            `;
          } else {
            fieldWrap.innerHTML = `
              <input type="text" placeholder="Alamat Pengantaran / Patokan...">
              <button class="btn-hero-cta" onclick="AppState.scrollToMenu()">Cek Menu Delivery →</button>
            `;
          }
        }
      });
    });
  },

  scrollToMenu() {
    const el = document.getElementById('menuCatalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// Global Boot
window.addEventListener('DOMContentLoaded', () => {
  AppState.init();
});
