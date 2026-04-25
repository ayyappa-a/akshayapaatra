// ═══ DATA ═══
const DEFAULT_PRODUCTS = [
  // SWEETS
  { id: 1, name: "Bellam Gavvalu", category: "sweets", priceBase: 550, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5992272.jpg", desc: "Golden jaggery shells with a buttery finish and traditional cardamom notes.", weights: ["250g", "500g", "1kg"] },
  { id: 2, name: "Bandar Laddu / Tokkudu Laddu", category: "sweets", priceBase: 650, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-debasish-5350676.jpg", desc: "Dense, ghee-rich laddus prepared in the authentic coastal Andhra style.", weights: ["250g", "500g", "1kg"] },
  { id: 3, name: "Ariselu / Pakundalu", category: "sweets", priceBase: 730, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-gaurav-kumar-1281378-18488303.jpg", desc: "Traditional festive sweet made of rice flour and jaggery, deep-fried to perfection.", weights: ["250g", "500g", "1kg"] },
  { id: 4, name: "Boondi Laddu", category: "sweets", priceBase: 480, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5410407.jpg", desc: "Tiny gram flour pearls bound together with sugar syrup into perfect laddus.", weights: ["250g", "500g", "1kg"] },
  { id: 5, name: "Dry Fruit Laddu", category: "sweets", priceBase: 980, stock: "in", badge: "PREMIUM", image: "assets/items/pexels-masuma-rahaman-437541976-34153202.jpg", desc: "Luxurious laddus packed with cashews, almonds, raisins and pistachios.", weights: ["250g", "500g", "1kg"] },
  { id: 6, name: "Ragi Laddu", category: "sweets", priceBase: 420, stock: "in", badge: "HEALTHY", image: "assets/items/pexels-saveurssecretes-9832636.jpg", desc: "Nutritious finger millet laddus sweetened with jaggery — healthy and delicious.", weights: ["250g", "500g"] },
  { id: 7, name: "Sunnundalu", category: "sweets", priceBase: 520, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-9832685.jpg", desc: "Black sesame and urad dal laddus — a protein-rich traditional Andhra sweet.", weights: ["250g", "500g", "1kg"] },
  { id: 8, name: "Ravva Laddu", category: "sweets", priceBase: 460, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-gaurav-kumar-1281378-18488314.jpg", desc: "Semolina laddus with ghee, cashews and cardamom. Melt-in-mouth texture.", weights: ["250g", "500g", "1kg"] },
  { id: 9, name: "Poha Laddu", category: "sweets", priceBase: 400, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-dropshado-19151511.jpg", desc: "Light flattened rice laddus with jaggery, coconut and roasted nuts.", weights: ["250g", "500g"] },
  { id: 10, name: "Kova Kajjikayalu", category: "sweets", priceBase: 680, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-masuma-rahaman-437541976-34153206.jpg", desc: "Crispy fried pastries stuffed with reduced milk, dry fruits and cardamom.", weights: ["250g", "500g", "1kg"] },
  { id: 11, name: "Mysore Pak", category: "sweets", priceBase: 580, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5410409.jpg", desc: "Rich ghee fudge from Mysore, soft in the center with a golden crust.", weights: ["250g", "500g"] },
  { id: 12, name: "Kala Jamun", category: "sweets", priceBase: 520, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-13220364.jpg", desc: "Deep-fried khoya dumplings in sugar syrup — rich dark and soft.", weights: ["Pack of 10", "Pack of 20"] },
  { id: 13, name: "Bellam Nuvvula Undalu", category: "sweets", priceBase: 440, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-zayed-hossain-52728970-36021117.jpg", desc: "Sesame and jaggery balls — traditional, nutritious and naturally sweet.", weights: ["250g", "500g"] },
  { id: 14, name: "Boondi Achu", category: "sweets", priceBase: 380, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-thrissurkaranphotography-12865862.jpg", desc: "Golden gram flour drops shaped in traditional moulds and sweetened.", weights: ["250g", "500g"] },
  { id: 15, name: "Sweet Kommulu", category: "sweets", priceBase: 420, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-thrissurkaranphotography-12865863.jpg", desc: "Traditional cone-shaped sweets with a crispy shell and sweet filling.", weights: ["250g", "500g"] },
  { id: 16, name: "Bellam / Sugar Kommulu", category: "sweets", priceBase: 400, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-vipinvihari-murari-das-2150327057-36460898.jpg", desc: "Classic Andhra Kommulu made with both jaggery and sugar varieties.", weights: ["250g", "500g"] },
  { id: 17, name: "Sapota Sweet", category: "sweets", priceBase: 460, stock: "low", badge: "SEASONAL", image: "assets/items/pexels-saveurssecretes-5992272.jpg", desc: "Fresh sapota (chikoo) based sweet with natural fruit sweetness.", weights: ["250g", "500g"] },
  { id: 18, name: "Tomato Sweet", category: "sweets", priceBase: 380, stock: "in", badge: "UNIQUE", image: "assets/items/pexels-debasish-5350676.jpg", desc: "Unique tangy-sweet jam made from fresh tomatoes and sugar — a surprise delight.", weights: ["250g", "500g"] },
  { id: 19, name: "Palli Patti / Palli Undalu", category: "sweets", priceBase: 420, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5410407.jpg", desc: "Roasted groundnut brittle and peanut laddus with jaggery coating.", weights: ["250g", "500g"] },
  { id: 20, name: "Kobbari Laddu", category: "sweets", priceBase: 480, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-masuma-rahaman-437541976-34153202.jpg", desc: "Fresh coconut laddus with jaggery and cardamom — simple yet heavenly.", weights: ["250g", "500g", "1kg"] },
  { id: 21, name: "Kobbari Acchu", category: "sweets", priceBase: 460, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-gaurav-kumar-1281378-18488303.jpg", desc: "Moulded coconut sweets — firm and fragrant traditional Andhra treat.", weights: ["250g", "500g"] },
  { id: 22, name: "Kobbari Burelu", category: "sweets", priceBase: 520, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-9832636.jpg", desc: "Deep-fried coconut and jaggery stuffed dumplings with a golden shell.", weights: ["250g", "500g"] },
  { id: 23, name: "Kobbari Lowju", category: "sweets", priceBase: 550, stock: "low", badge: "LIMITED", image: "assets/items/pexels-saveurssecretes-9832685.jpg", desc: "Coconut halwa — slow-cooked to a rich, chewy and aromatic texture.", weights: ["250g", "500g"] },
  { id: 24, name: "Nuvvula Undalu", category: "sweets", priceBase: 430, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5410409.jpg", desc: "Sesame seed balls packed with nutrients and natural jaggery sweetness.", weights: ["250g", "500g"] },
  { id: 25, name: "Nuvvula Chikki", category: "sweets", priceBase: 360, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-13220364.jpg", desc: "Crispy sesame brittle with jaggery — a satisfying and healthy snack.", weights: ["250g", "500g"] },
  { id: 26, name: "Bellam Pootha Rekulu", category: "sweets", priceBase: 850, stock: "in", badge: "SPECIALTY", image: "assets/items/pexels-masuma-rahaman-437541976-34153206.jpg", desc: "Paper-thin rice starch sheets stuffed with jaggery — Konaseema's signature sweet.", weights: ["Box of 10", "Box of 20"] },
  { id: 27, name: "Dry Fruits Pootha Rekulu", category: "sweets", priceBase: 1200, stock: "in", badge: "PREMIUM", image: "assets/items/pexels-dropshado-19151511.jpg", desc: "Premium pootharekulu layered with dry fruits, ghee and sugar.", weights: ["Box of 10", "Box of 20"] },
  // SNACKS
  { id: 28, name: "Chegodilu", category: "snacks", priceBase: 420, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-thrissurkaranphotography-12865863.jpg", desc: "Crunchy golden rings — a classic Andhra snack perfect with evening tea.", weights: ["250g", "500g"] },
  { id: 29, name: "Murukulu", category: "snacks", priceBase: 390, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-chinarianphotographer-9198596.jpg", desc: "Crispy rice flour spirals seasoned with cumin and sesame seeds.", weights: ["250g", "500g"] },
  { id: 30, name: "Kara Boondi", category: "snacks", priceBase: 360, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-vipinvihari-murari-das-2150327057-36460898.jpg", desc: "Spicy gram flour pearls mixed with peanuts, curry leaves and dried chilies.", weights: ["250g", "500g"] },
  { id: 31, name: "Aloo Sev", category: "snacks", priceBase: 340, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-gaurav-kumar-1281378-18488314.jpg", desc: "Thin crispy potato-based sev with a mild spice blend.", weights: ["250g", "500g"] },
  { id: 32, name: "Bhujia", category: "snacks", priceBase: 350, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-zayed-hossain-52728970-36021117.jpg", desc: "Thin, crunchy moth bean flour sev with warm spice notes.", weights: ["250g", "500g"] },
  { id: 33, name: "Agra Mixture", category: "snacks", priceBase: 380, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5992272.jpg", desc: "A hearty blend of sev, boondi, peanuts and fried lentils.", weights: ["250g", "500g"] },
  { id: 34, name: "Pappu Chegodilu", category: "snacks", priceBase: 440, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-debasish-5350676.jpg", desc: "Lentil-enriched version of chegodilu — crunchier and more protein-rich.", weights: ["250g", "500g"] },
  { id: 35, name: "Pappu Chekkalu", category: "snacks", priceBase: 460, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5410407.jpg", desc: "Rice crackers with a dal filling — flat, thin and incredibly crunchy.", weights: ["250g", "500g"] },
  { id: 36, name: "Rose Flowers", category: "snacks", priceBase: 480, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-masuma-rahaman-437541976-34153202.jpg", desc: "Delicately shaped rice flour flowers, lightly salted and deep-fried.", weights: ["250g", "500g"] },
  { id: 37, name: "Panasa Thonalu", category: "snacks", priceBase: 420, stock: "low", badge: "SEASONAL", image: "assets/items/pexels-saveurssecretes-9832636.jpg", desc: "Jackfruit-inspired shaped rice flour snacks — crispy and traditional.", weights: ["250g", "500g"] },
  { id: 38, name: "Jantikalu", category: "snacks", priceBase: 400, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-9832685.jpg", desc: "Murukku-style snacks pressed through a disc mould — perfectly crispy.", weights: ["250g", "500g"] },
  { id: 39, name: "Sakinalu", category: "snacks", priceBase: 520, stock: "in", badge: "FESTIVE", image: "assets/items/pexels-gaurav-kumar-1281378-18488303.jpg", desc: "Festive sesame-rice crackers made during Sankranti — light and crunchy.", weights: ["250g", "500g"] },
  { id: 40, name: "Appalu", category: "snacks", priceBase: 380, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-thrissurkaranphotography-12865862.jpg", desc: "Sweet-salty rice flour discs lightly fried — a classic Andhra teatime snack.", weights: ["250g", "500g"] },
  { id: 41, name: "Chekkalu", category: "snacks", priceBase: 440, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-13220364.jpg", desc: "Crispy rice crackers seasoned with cumin and sesame — addictive and light.", weights: ["250g", "500g"] },
  { id: 42, name: "Sanna Karapposa", category: "snacks", priceBase: 360, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5410409.jpg", desc: "Small gram flour sev — fine, crispy and mildly spiced.", weights: ["250g", "500g"] },
  { id: 43, name: "Ribbon Pakoda", category: "snacks", priceBase: 400, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-zayed-hossain-52728970-36021117.jpg", desc: "Flat ribbon-shaped rice flour snack with pepper and ajwain — crispy and bold.", weights: ["250g", "500g"] },
  // PODI
  { id: 44, name: "Karivepaku Karam Podi", category: "podi", priceBase: 320, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-chinarianphotographer-9198596.jpg", desc: "Aromatic curry leaf podi, stone-ground with roasted lentils and red chilies.", weights: ["100g", "250g", "500g"] },
  { id: 45, name: "Nuvvula Karam Podi", category: "podi", priceBase: 340, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-saveurssecretes-5992272.jpg", desc: "Sesame-based spice powder with a deep nutty flavour and mild heat.", weights: ["100g", "250g", "500g"] },
  { id: 46, name: "Dhaniya Karam Podi", category: "podi", priceBase: 300, stock: "in", badge: "IN STOCK", image: "assets/items/pexels-debasish-5350676.jpg", desc: "Coriander seed podi with a fragrant aroma — great with rice and roti.", weights: ["100g", "250g", "500g"] },
  { id: 47, name: "Munagaaku Karam Podi", category: "podi", priceBase: 380, stock: "low", badge: "HEALTH+", image: "assets/items/pexels-saveurssecretes-5410407.jpg", desc: "Moringa leaf podi — iron-rich and fragrant, a superfood spice powder.", weights: ["100g", "250g", "500g"] },
  { id: 48, name: "Flax Seeds Karam Podi", category: "podi", priceBase: 360, stock: "in", badge: "HEALTHY", image: "assets/items/pexels-saveurssecretes-9832636.jpg", desc: "Omega-3 rich flax seed podi with roasted spices. Healthy and flavourful.", weights: ["100g", "250g", "500g"] },
  // OTHERS
  { id: 49, name: "Pasupu (Turmeric)", category: "others", priceBase: 180, stock: "in", badge: "ORGANIC", image: "assets/items/pexels-saveurssecretes-9832685.jpg", desc: "Pure organic turmeric powder from Konaseema farms — vibrant colour and aroma.", weights: ["100g", "250g", "500g"] },
  { id: 50, name: "Kumkum", category: "others", priceBase: 120, stock: "in", badge: "PURE", image: "assets/items/pexels-saveurssecretes-5410409.jpg", desc: "Traditional pure kumkum for puja and auspicious occasions.", weights: ["50g", "100g", "250g"] }
];

const TESTIMONIALS = [
  { quote: "Tastes exactly like my Ammamma's kitchen. The authenticity is unmatched.", author: "Seetha Devi", location: "Hyderabad", rating: 5 },
  { quote: "The jaggery balance and texture feel genuinely handcrafted. Reminds me of home.", author: "Ramakrishna Rao", location: "Kakinada", rating: 5 },
  { quote: "Premium, clean, and deeply traditional. Packaging was excellent too!", author: "Anjali Prasad", location: "Vijayawada", rating: 5 },
  { quote: "Excellent taste and arrived fresh all the way to Delhi. Highly recommend!", author: "Kumari Padma", location: "New Delhi", rating: 5 },
  { quote: "The Karivepaku Podi is a daily staple in our house now. So fragrant!", author: "Vivek V.", location: "Bengaluru", rating: 4 }
];

// ═══ HELPERS ═══
const getProducts = () => {
  const admin = JSON.parse(localStorage.getItem('adminProducts') || '[]');
  const merged = [...DEFAULT_PRODUCTS];
  admin.forEach(ap => { const i = merged.findIndex(p => p.id === ap.id); i >= 0 ? merged[i] = ap : merged.push(ap); });
  return merged.filter(p => !p.deleted);
};

const fmt = p => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p);

const calcPrice = (base, w) => {
  if (w.includes('500g')) return Math.round(base * 1.9);
  if (w.includes('1kg')) return Math.round(base * 3.6);
  if (w.includes('Box of 20') || w.includes('Pack of 12')) return Math.round(base * 1.8);
  if (w.includes('100g')) return Math.round(base * 0.45);
  return base;
};

let toastTimer;
const showToast = msg => {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
};

// ═══ STATE ═══
let cart = JSON.parse(localStorage.getItem('akshayaCart') || '[]');
let activeFilter = 'all';
let searchTerm = '';

const saveCart = () => {
  localStorage.setItem('akshayaCart', JSON.stringify(cart));
  updateCartUI();
};

const updateCartUI = () => {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badges = document.querySelectorAll('#cartBadge, #cartBadgeMobile');
  badges.forEach(b => {
    b.textContent = count;
    b.classList.toggle('active', count > 0);
  });
  renderCart();
};

// ═══ MOBILE PILLS LOGIC ═══
const initMobilePills = () => {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(p => {
    p.onclick = () => {
      pills.forEach(px => px.classList.remove('active'));
      p.classList.add('active');
      activeFilter = p.dataset.filter;
      renderProducts();
      // Scroll to shop section
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    };
  });
};

// ═══ DOM REFS ═══
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const searchToggle = document.getElementById('searchToggle');
const searchBarWrap = document.getElementById('searchBarWrap');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
const cardTpl = document.getElementById('cardTpl');
const filterRow = document.getElementById('filterRow');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartCloseBtn = document.getElementById('cartClose');
const cartBadge = document.getElementById('cartBadge');
const cartItemCount = document.getElementById('cartItemCount');
const cartItemsList = document.getElementById('cartItemsList');
const cartEmpty = document.getElementById('cartEmpty');
const cartFoot = document.getElementById('cartFoot');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartShipping = document.getElementById('cartShipping');
const cartTotal = document.getElementById('cartTotal');
const freeShipNote = document.getElementById('freeShipNote');
const freeShipLeft = document.getElementById('freeShipLeft');
const checkoutBtn = document.getElementById('checkoutBtn');
const notifyOverlay = document.getElementById('notifyOverlay');
const notifyClose = document.getElementById('notifyClose');
const notifyForm = document.getElementById('notifyForm');
const notifyProductName = document.getElementById('notifyProductName');
const testiRiver = document.getElementById('testiRiver');

// ═══ NAVBAR ═══
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
hamburger.addEventListener('click', () => navbar.classList.toggle('menu-open'));
searchToggle.addEventListener('click', () => { searchBarWrap.classList.add('active'); setTimeout(() => searchInput.focus(), 200); });
searchClose.addEventListener('click', () => { searchBarWrap.classList.remove('active'); searchInput.value = ''; searchTerm = ''; renderProducts(); });
searchInput.addEventListener('input', e => { searchTerm = e.target.value.toLowerCase(); renderProducts(); });

document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('menu-open');
    const f = link.dataset.filter;
    if (f) { activeFilter = f; document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p.dataset.filter === f)); renderProducts(); }
  });
});

// ═══ PRODUCTS ═══
const renderProducts = () => {
  const products = getProducts().filter(p => {
    const mf = activeFilter === 'all' || p.category === activeFilter;
    const ms = !searchTerm || p.name.toLowerCase().includes(searchTerm) || (p.desc || '').toLowerCase().includes(searchTerm);
    return mf && ms;
  });

  productGrid.innerHTML = '';
  if (!products.length) { productGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--cream);padding:3rem">No products found.</p>'; return; }

  const highlight = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark class="hl">$1</mark>');
  };

  products.forEach((product, i) => {
    const clone = cardTpl.content.cloneNode(true);
    const card = clone.querySelector('.product-card');
    card.style.animationDelay = `${(i % 10) * 0.07}s`; // Stagger animation

    const badge = clone.querySelector('.card-badge');
    badge.textContent = product.badge || 'NEW';
    badge.classList.toggle('out', product.stock === 'out');
    badge.classList.toggle('low', product.stock === 'low');

    const img = clone.querySelector('.card-img');
    img.src = product.image || 'assets/akshayapaatra-logo.jpeg';
    img.alt = product.name;

    clone.querySelector('.card-desc').innerHTML = highlight(product.desc, searchTerm);
    clone.querySelector('.card-name').innerHTML = highlight(product.name, searchTerm);

    const priceEl = clone.querySelector('.card-price-display');
    priceEl.textContent = fmt(product.priceBase);

    const sel = clone.querySelector('.card-weight-select');
    (product.weights || ['250g']).forEach(w => { const o = document.createElement('option'); o.value = w; o.textContent = w; sel.appendChild(o); });
    sel.addEventListener('change', () => priceEl.textContent = fmt(calcPrice(product.priceBase, sel.value)));

    const chip = clone.querySelector('.stock-chip');
    chip.textContent = product.stock === 'out' ? 'Out of Stock' : product.stock === 'low' ? 'Few Left!' : 'In Stock';
    chip.classList.toggle('out', product.stock === 'out');
    chip.classList.toggle('low', product.stock === 'low');

    const actions = clone.querySelector('.card-actions');
    if (product.stock === 'out') {
      const nb = document.createElement('button');
      nb.className = 'btn-notify';
      nb.textContent = '🔔 Notify Me';
      nb.onclick = () => openNotify(product.name);
      actions.appendChild(nb);
    } else {
      const ab = document.createElement('button');
      ab.className = 'btn-add ripple-btn';
      ab.innerHTML = '+ Add to Cart';
      const bb = document.createElement('button');
      bb.className = 'btn-buy ripple-btn';
      bb.textContent = 'Buy Now';
      const addHandler = () => {
        addToCart({ id: `${product.id}-${sel.value}`, baseId: product.id, name: product.name, weight: sel.value, price: calcPrice(product.priceBase, sel.value), image: product.image });
      };
      ab.onclick = () => {
        addHandler();
        showToast(`✓ ${product.name} added to cart`);
        const originalText = ab.innerHTML;
        ab.innerHTML = '✓ Added';
        ab.classList.add('added');
        setTimeout(() => {
          ab.innerHTML = originalText;
          ab.classList.remove('added');
        }, 2000);
      };
      bb.onclick = () => { addHandler(); openCart(); };
      actions.append(ab, bb);
    }
    productGrid.appendChild(clone);
  });
};

filterRow.addEventListener('click', e => {
  const btn = e.target.closest('.filter-pill');
  if (!btn) return;
  activeFilter = btn.dataset.filter;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.toggle('active', p === btn));
  renderProducts();
});

// ═══ CART ═══
const addToCart = item => {
  const ex = cart.find(c => c.id === item.id);
  ex ? ex.qty++ : cart.push({ ...item, qty: 1 });
  saveCart();

  if (typeof gsap !== 'undefined' && cartBadge) {
    gsap.fromTo(cartBadge,
      { scale: 1.5, backgroundColor: 'var(--gold)', color: '#000' },
      { scale: 1, backgroundColor: 'var(--terra)', color: '#fff', duration: 0.5, ease: 'back.out(2)' }
    );
  }
};

const openCart = () => { cartDrawer.classList.add('open'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; };
const closeCart = () => { cartDrawer.classList.remove('open'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; };

window.updateQty = (id, delta) => {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
};
window.removeItem = id => { cart = cart.filter(c => c.id !== id); saveCart(); };

const renderCart = () => {
  const qty = cart.reduce((s, i) => s + i.qty, 0);
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = sub >= 500 ? 0 : 60;
  const total = sub + shipping;

  cartBadge.textContent = qty;
  cartItemCount.textContent = `(${qty} ${qty === 1 ? 'item' : 'items'})`;

  if (!cart.length) {
    cartEmpty.style.display = 'flex';
    cartItemsList.innerHTML = '';
    cartFoot.hidden = true;
    return;
  }
  cartEmpty.style.display = 'none';
  cartFoot.hidden = false;

  cartItemsList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img"/>
      <div class="cart-item-details">
        <div class="cart-item-top">
          <div class="cart-item-name">${item.name}</div>
          <button class="cart-item-remove-btn" onclick="removeItem('${item.id}')">✕</button>
        </div>
        <div class="cart-item-meta">${item.weight}</div>
        <div class="cart-item-bottom">
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty('${item.id}',-1)">−</button>
            <div class="qty-val">${item.qty}</div>
            <button class="qty-btn" onclick="updateQty('${item.id}',1)">+</button>
          </div>
          <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
        </div>
      </div>
    </div>`).join('');

  cartSubtotal.textContent = fmt(sub);
  cartShipping.textContent = shipping === 0 ? 'FREE 🎉' : fmt(shipping);
  cartShipping.className = 'shipping-val' + (shipping === 0 ? ' free' : '');
  cartTotal.textContent = fmt(total);

  const remaining = 500 - sub;
  if (remaining > 0) { freeShipNote.hidden = false; freeShipLeft.textContent = fmt(remaining); }
  else { freeShipNote.hidden = true; }
};

cartBtn.addEventListener('click', openCart);
cartCloseBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
document.getElementById('continueShopLink')?.addEventListener('click', closeCart);


// ═══ NOTIFY MODAL ═══
const openNotify = name => { notifyProductName.textContent = `Product: ${name}`; notifyOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; };
const closeNotify = () => { notifyOverlay.classList.remove('active'); document.body.style.overflow = ''; notifyForm.reset(); };
notifyClose.addEventListener('click', closeNotify);
notifyOverlay.addEventListener('click', e => { if (e.target === notifyOverlay) closeNotify(); });
notifyForm.addEventListener('submit', e => { e.preventDefault(); closeNotify(); showToast("✓ We'll notify you when it's back in stock!"); });


// ═══ DYNAMIC BANNER SYSTEM ═══
const BANNER_IMAGES = {
  'Sankranti': { img: 'assets/items/ariselu.jpg', bg: 'linear-gradient(120deg,#0f3826,#1a5c3f)' },
  'Ugadi': { img: 'assets/items/bobbattlu.jpg', bg: 'linear-gradient(120deg,#5d4037,#8d6e63)' },
  'Ramzan': { img: 'assets/items/jangirie.jpg', bg: 'linear-gradient(120deg,#1a237e,#283593)' },
  'Easter': { img: 'assets/items/pexels-saveurssecretes-5992272.jpg', bg: 'linear-gradient(120deg,#6a1b9a,#8e24aa)' },
  'Summer Sale': { img: 'assets/items/kara-bondhi.jpg', bg: 'linear-gradient(120deg,#e65100,#f57c00)' },
  'May Sale': { img: 'assets/items/kaaram.jpg', bg: 'linear-gradient(120deg,#2e7d32,#43a047)' },
  'Dussehra': { img: 'assets/items/bandar laddu.jpg', bg: 'linear-gradient(120deg,#bf360c,#e64a19)' },
  'Diwali': { img: 'assets/items/kobbari undalu.jpg', bg: 'linear-gradient(120deg,#4a148c,#6a1b9a)' },
  'Christmas': { img: 'assets/items/pexels-saveurssecretes-5410409.jpg', bg: 'linear-gradient(120deg,#1b5e20,#2e7d32)' },
  'New Year': { img: 'assets/items/pexels-dropshado-19151511.jpg', bg: 'linear-gradient(120deg,#0d47a1,#1565c0)' },
  'Winter Sale': { img: 'assets/items/pexels-saveurssecretes-9832636.jpg', bg: 'linear-gradient(120deg,#263238,#37474f)' },
  'Ganesh Chaturthi': { img: 'assets/items/pexels-saveurssecretes-5410409.jpg', bg: 'linear-gradient(120deg,#f57f17,#f9a825)' },
  'Onam': { img: 'assets/items/sonpapid.jpg', bg: 'linear-gradient(120deg,#558b2f,#689f38)' },
  'Republic Day': { img: 'assets/items/pexels-vipinvihari-murari-das-2150327057-36460898.jpg', bg: 'linear-gradient(120deg,#1a5276,#1f618d)' },
  'Holi': { img: 'assets/items/pexels-saveurssecretes-13220364.jpg', bg: 'linear-gradient(120deg,#ad1457,#c2185b)' },
  'Flash Sale': { img: 'assets/items/pexels-gaurav-kumar-1281378-18488314.jpg', bg: 'linear-gradient(120deg,#d32f2f,#f44336)' },
  'Sunday Special': { img: 'assets/items/pexels-debasish-5350676.jpg', bg: 'linear-gradient(120deg,#f9a825,#fbc02d)' },
  'Sweets Offer': { img: 'assets/items/pexels-saveurssecretes-5992272.jpg', bg: 'linear-gradient(120deg,#4e342e,#6d4c41)' },
};

const DEFAULT_BANNERS_FALLBACK = [
  { id: 1, title: 'Freshly Prepared Arriselu', tag: 'Sankranti Special', desc: 'Traditional jaggery discs — 20% off.', festival: 'Sankranti', color: '#0f3826', active: true },
  { id: 2, title: 'Bandar Laddu', tag: 'All-Time Favourite', desc: 'Dense, ghee-rich Andhra coastal laddus.', festival: 'Diwali', color: '#4a148c', active: true },
  { id: 3, title: 'Bellam Pootha Rekulu', tag: 'Konaseema Specialty', desc: 'Paper-thin rice starch with jaggery.', festival: 'Ugadi', color: '#5d4037', active: true },
  { id: 4, title: 'Sunday Special: 10% OFF', tag: 'Limited Time', desc: 'Enjoy 10% discount on all orders above Rs.1000 today!', festival: 'Sunday Special', color: '#f9a825', active: true },
  { id: 5, title: '10% OFF on All Sweets', tag: 'Sweet Deal', desc: 'Get a flat 10% discount on our entire sweets collection.', festival: 'Sweets Offer', color: '#4e342e', active: true },
  { id: 6, title: 'Flash Sale: 50% OFF', tag: 'Hurry Up!', desc: 'Selected snacks at half price for the next 2 hours.', festival: 'Flash Sale', color: '#d32f2f', active: true },
  { id: 7, title: 'Konaseema Ghee Special', tag: 'Heritage Taste', desc: 'Traditional ghee sweets now at special rates.', festival: 'Dussehra', color: '#bf360c', active: true },
  { id: 8, title: 'Weekend Bonanza', tag: 'Family Treat', desc: 'Free shipping on all orders this Saturday and Sunday.', festival: 'Winter Sale', color: '#263238', active: true },
  { id: 9, title: 'Mid-Month Magic', tag: 'Save More', desc: 'Get Rs.100 off on orders above Rs.1500.', festival: 'May Sale', color: '#2e7d32', active: true },
  { id: 10, title: 'Traditional Podi Fest', tag: 'Spicy Deals', desc: 'Buy any 2 Podis and get 15% off.', festival: 'May Sale', color: '#2e7d32', active: true },
  { id: 11, title: 'Healthy Bites Sale', tag: 'Wellness', desc: '10% off on all healthy and ragi based sweets.', festival: 'May Sale', color: '#2e7d32', active: true },
  { id: 12, title: 'Authentic Snacks Combo', tag: 'Snack Box', desc: 'Curated mix of our best snacks at a 20% discount.', festival: 'Summer Sale', color: '#e65100', active: true },
  { id: 13, title: 'Bulk Order Savings', tag: 'Festive Prep', desc: 'Planning a function? Get massive discounts on bulk orders.', festival: 'Sankranti', color: '#0f3826', active: true }
];

let curSlide = 0;
let sliderInterval;

const goTo = n => {
  const slides = document.querySelectorAll('.banner-slide');
  const bannerDots = document.querySelectorAll('.banner-dot');
  const bannerSlider = document.getElementById('bannerSlider');
  if (!slides.length || !bannerSlider) return;
  curSlide = (n + slides.length) % slides.length;
  bannerSlider.style.transform = `translateX(-${curSlide * 100}%)`;
  slides.forEach((s, i) => s.classList.toggle('active', i === curSlide));
  bannerDots.forEach((d, i) => d.classList.toggle('active', i === curSlide));
};

const resetInterval = () => { clearInterval(sliderInterval); sliderInterval = setInterval(() => goTo(curSlide + 1), 5500); };

const renderStoreBanners = () => {
  const slider = document.getElementById('bannerSlider');
  const controlsWrap = document.querySelector('.banner-controls');
  if (!slider) return;

  const saved = localStorage.getItem('adminBanners');
  const allBanners = saved ? JSON.parse(saved) : DEFAULT_BANNERS_FALLBACK;
  const active = allBanners.filter(b => b.active);
  const toShow = active.length > 0 ? active : DEFAULT_BANNERS_FALLBACK;

  // Helper for random image from category
  const getRandomImg = (cat) => {
    const products = getProducts().filter(p => (cat === 'all' || p.category === cat));
    if (products.length) {
      const valid = products.filter(p => p.image && !p.image.includes('placeholder'));
      const pool = valid.length ? valid : products;
      return pool[Math.floor(Math.random() * pool.length)].image;
    }
    const all = getProducts();
    return all.length ? all[0].image : 'assets/akshayapaatra-logo.jpeg';
  };

  slider.innerHTML = toShow.map((b, i) => {
    const meta = BANNER_IMAGES[b.festival] || BANNER_IMAGES['Sankranti'];
    const slideBg = b.color ? `linear-gradient(135deg, ${b.color}, #000)` : meta.bg;

    // Intelligent image selection: Use category, or keyword search, or fallback
    let slideImg = b.cat ? getRandomImg(b.cat) : null;
    if (!slideImg) {
      const kw = b.title.toLowerCase();
      const guessedCat = kw.includes('sweet') ? 'sweets' : (kw.includes('snack') ? 'snacks' : (kw.includes('podi') ? 'podi' : 'all'));
      slideImg = getRandomImg(guessedCat);
    }

    return `
      <div class="banner-slide${i === 0 ? ' active' : ''}" style="--slide-bg:${slideBg}">
        <div class="slide-texture"></div>
        <div class="slide-copy">
          <span class="slide-tag">${b.tag}</span>
          <h2>${b.title}</h2>
          <p>${b.desc}</p>
          ${b.discount ? `<div class="slide-discount">${b.discount} OFF</div>` : ''}
          <a href="#shop" class="btn-gold small ripple-btn"><span>Shop Now</span></a>
        </div>
        <div class="slide-img"><img src="${slideImg}" alt="${b.title}" loading="lazy"/></div>
      </div>`;
  }).join('');

  if (controlsWrap) {
    controlsWrap.innerHTML = toShow.map((_, i) =>
      `<button class="banner-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></button>`
    ).join('');
    document.querySelectorAll('.banner-dot').forEach(d =>
      d.addEventListener('click', () => { goTo(+d.dataset.idx); resetInterval(); })
    );
  }

  curSlide = 0;
  if (slider) slider.style.transform = 'translateX(0)';
  resetInterval();
};

// ═══ TESTIMONIALS ═══
const renderTestimonials = () => {
  if (!testiRiver) return;
  const cardsHtml = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <p class="testi-quote">${t.quote}</p>
      <div class="testi-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <div class="testi-author">
        <div class="testi-avatar">${t.author[0]}</div>
        <div class="testi-author-info"><h4>${t.author}</h4><span>${t.location}</span></div>
      </div>
    </div>`).join('');
  testiRiver.innerHTML = cardsHtml;

  const testiRiver2 = document.getElementById('testiRiver2');
  if (testiRiver2) testiRiver2.innerHTML = cardsHtml;
};

// === DYNAMIC HERO IMAGES ===
const initDynamicHero = () => {
  const updateHero = () => {
    const products = getProducts();
    if (products.length < 4) return;

    // Prioritize products with external (Supabase) URLs
    const externalProds = products.filter(p => p.image && p.image.startsWith('http'));
    const pool = externalProds.length >= 4 ? externalProds : [...externalProds, ...products.filter(p => !p.image.startsWith('http'))];

    // Pick 4 random products from prioritized pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const [pMain, p1, p2, p3] = shuffled.slice(0, 4);

    const els = {
      heroMainImg: pMain.image,
      heroImg1: p1.image,
      heroImg2: p2.image,
      heroImg3: p3.image,
      heroImg1Name: p1.name.split(' ')[0],
      heroImg2Name: p2.name.split(' ')[0],
      heroImg3Name: p3.name.split(' ')[0]
    };

    // Fade out
    Object.keys(els).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.opacity = '0';
    });

    setTimeout(() => {
      Object.entries(els).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName === 'IMG') {
          el.src = val;
          el.onerror = () => { el.src = 'assets/akshayapaatra-logo.jpeg'; };
        } else {
          el.textContent = val;
        }
      });

      // Fade in
      Object.keys(els).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.style.transition = 'opacity 0.8s ease';
          el.style.opacity = '1';
        }
      });
    }, 800);
  };

  // Run once immediately
  updateHero();
  // Then periodically
  setInterval(updateHero, 60000);
};

// ═══ CHECKOUT FLOW ═══
const checkoutOverlay = document.getElementById('checkoutOverlay');
const openCheckoutModal = () => { showCheckoutStep('stepShipping'); checkoutOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; };
window.closeCheckout = () => { checkoutOverlay.classList.remove('active'); document.body.style.overflow = ''; };
document.getElementById('checkoutBtn')?.addEventListener('click', () => { if (cart.length) openCheckoutModal(); });
document.getElementById('checkoutClose')?.addEventListener('click', closeCheckout);
checkoutOverlay?.addEventListener('click', e => { if (e.target === checkoutOverlay) closeCheckout(); });
const showCheckoutStep = id => { document.querySelectorAll('.checkout-step').forEach(s => s.classList.remove('active')); document.getElementById(id)?.classList.add('active'); };

window.placeOrder = async () => {
  const g = id => document.getElementById(id)?.value || '';
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0); const sh = sub >= 500 ? 0 : 60; const base = sub + sh;
  const total = base;

  const orderData = {
    id: Date.now(),
    items: [...cart],
    shipping: { name: g('shipName'), phone: g('shipPhone'), address: g('shipAddress'), city: g('shipCity'), state: g('shipState'), pin: g('shipPin'), email: g('shipEmail') },
    paymentMethod: 'pending',
    total,
    status: 'pending',
    date: new Date().toLocaleString('en-IN')
  };

  // Save to local admin dashboard
  const orders = JSON.parse(localStorage.getItem('adminOrders') || '[]');
  orders.unshift(orderData);
  localStorage.setItem('adminOrders', JSON.stringify(orders));

  // Push to Supabase if available
  if (typeof supabaseClient !== 'undefined') {
    try {
      await supabaseClient.from('orders').insert([{
        id: orderData.id,
        items: orderData.items,
        total: orderData.total,
        status: orderData.status,
        shipping: orderData.shipping,
        created_at: new Date().toISOString()
      }]);
    } catch (e) { console.error('Supabase sync failed:', e); }
  }

  // Generate Pro WhatsApp Message
  let waText = `*NEW ORDER: Akshaya Paatra* 🌿\n*Order ID:* #${String(orderData.id).slice(-6)}\n\n*Items:*\n`;
  orderData.items.forEach(i => {
    waText += `▪️ *${i.name}* (${i.weight}) x${i.qty} - ${fmt(i.price * i.qty)}\n`;
  });
  waText += `\n*Subtotal:* ${fmt(sub)}\n*Shipping:* ${sh === 0 ? 'FREE' : fmt(sh)}\n*Total Payable:* *${fmt(total)}*\n\n`;
  waText += `*Delivery Details:*\n👤 ${g('shipName')}\n📞 ${g('shipPhone')}\n📍 ${g('shipAddress')}, ${g('shipCity')}, ${g('shipState')} - ${g('shipPin')}`;

  // Open WhatsApp in new tab
  const waUrl = `https://wa.me/919148025377?text=${encodeURIComponent(waText)}`;
  window.open(waUrl, '_blank');

  // Update success UI
  const sm = document.getElementById('successMsg'); if (sm) sm.textContent = `Order successfully placed, we will contact you soon for confirmation and for payment.`;
  const cb = document.getElementById('orderConfirmBox'); if (cb) cb.innerHTML = `<strong>Delivering to:</strong><br/>${g('shipAddress')}, ${g('shipCity')}, ${g('shipState')} - ${g('shipPin')}<br/><strong>Phone:</strong> ${g('shipPhone')}<br/><strong>Total:</strong> ${fmt(total)}`;

  // Fix Continue Shopping button in success screen
  const continueBtn = document.getElementById('continueShopSuccess');
  if (continueBtn) {
    continueBtn.onclick = () => { checkoutOverlay.classList.remove('active'); document.body.style.overflow = ''; };
  }

  showCheckoutStep('stepSuccess');
  cart = []; saveCart(); closeCart();
};

// ═══ GSAP ANIMATIONS ═══
const initGSAP = () => {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-hl-top', { y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: .2 });
  gsap.from('.hero-hl-mid', { y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: .4 });
  gsap.from('.hero-hl-brand', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: .6 });
  gsap.from('.hero-sub', { y: 30, opacity: 0, duration: .8, ease: 'power3.out', delay: .7 });
  gsap.from('.hero-trust-row', { y: 20, opacity: 0, duration: .8, ease: 'power3.out', delay: .85 });
  gsap.from('.hero-cta-row', { y: 20, opacity: 0, duration: .8, ease: 'power3.out', delay: 1 });
  gsap.from('.hero-center-img', { scale: .8, opacity: 0, duration: 1.2, ease: 'back.out(1.4)', delay: .3 });
  gsap.from('.hfc-1', { x: -60, opacity: 0, duration: 1, ease: 'power3.out', delay: .5, rotation: -20 });
  gsap.from('.hfc-2', { x: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: .7, rotation: 20 });
  gsap.from('.hfc-3', { y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: .9 });
  gsap.from('.hero-badge-fresh', { scale: 0, opacity: 0, duration: .8, ease: 'back.out(2)', delay: 1.2 });
  gsap.utils.toArray('.why-item,.stat,.contact-card').forEach(el => {
    gsap.from(el, { y: 40, opacity: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } });
  });
};

const syncStoreSettings = () => {
  const s = JSON.parse(localStorage.getItem('siteSettings'));
  if (!s) return;
  const marquee = document.querySelector('.marquee-track');
  if (marquee && s.marquee) marquee.innerHTML = `<span>${s.marquee}</span>`.repeat(10);
  const footerMail = document.querySelector('a[href^="mailto:"]');
  if (footerMail && s.email) { footerMail.href = `mailto:${s.email}`; footerMail.title = s.email; }
  const footerPhone = document.querySelector('a[href^="tel:"]');
  if (footerPhone && s.phone) { footerPhone.href = `tel:${s.phone.replace(/\D/g, '')}`; }
};

document.addEventListener('DOMContentLoaded', () => {
  syncStoreSettings();
  initMobilePills();
  updateCartUI();
  renderStoreBanners();
  initDynamicHero();
  renderProducts();
  renderTestimonials();
  renderCart();
  setTimeout(initGSAP, 150);
});





