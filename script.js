// ===== DATOS DE LIBROS =====
const libros = [
  {
    id: 1,
    titulo: "Las 48 Leyes del Poder",
    autor: "Robert Greene",
    precio: 9.99,
    precioOriginal: 14.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL.jpg",
    categoria: "negocios",
    estrellas: 5,
    reseñas: 2847,
    badge: "bestseller",
    badgeLabel: "Best Seller",
    resena: "Un análisis fascinante de los mecanismos del poder a lo largo de la historia. Greene destila siglos de sabiduría política y estratégica en 48 leyes concretas que te enseñarán a moverte con inteligencia en cualquier entorno. Lectura obligada para líderes y estrategas."
  },
  {
    id: 2,
    titulo: "Historia del Mundo Moderno",
    autor: "William McNeill",
    precio: 12.99,
    precioOriginal: 18.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg",
    categoria: "historia",
    estrellas: 4,
    reseñas: 1203,
    badge: "new",
    badgeLabel: "Nuevo",
    resena: "Un recorrido magistral por los grandes acontecimientos que dieron forma al mundo contemporáneo. McNeill conecta civilizaciones, guerras, ideas y revoluciones en una narrativa fluida que convierte la historia en algo apasionante y completamente accesible."
  },
  {
    id: 3,
    titulo: "Inteligencia Política",
    autor: "Bruce Bueno de Mesquita",
    precio: 8.99,
    precioOriginal: 12.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/41j-s9fHJcL.jpg",
    categoria: "negocios",
    estrellas: 4,
    reseñas: 984,
    badge: null,
    resena: "Usando modelos matemáticos y teoría de juegos, el autor revela cómo funciona realmente el poder político. Una obra que cambia la forma en que ves las decisiones de gobiernos, empresas y organizaciones. Perspicaz, provocador y sorprendentemente práctico."
  },
  {
    id: 4,
    titulo: "El Arte de la Guerra",
    autor: "Sun Tzu",
    precio: 6.99,
    precioOriginal: 9.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/61AaUEsVaqL.jpg",
    categoria: "negocios",
    estrellas: 5,
    reseñas: 5621,
    badge: "best",
    badgeLabel: "Clásico",
    resena: "Escrito hace más de 2,500 años, este tratado militar sigue siendo la guía de estrategia más influyente de todos los tiempos. Sus principios se aplican hoy en los negocios, la negociación y el liderazgo. Breve, profundo e imperecedero."
  },
  {
    id: 5,
    titulo: "Sapiens: De animales a dioses",
    autor: "Yuval Noah Harari",
    precio: 14.99,
    precioOriginal: 21.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    categoria: "historia",
    estrellas: 5,
    reseñas: 8902,
    badge: "bestseller",
    badgeLabel: "Best Seller",
    resena: "Un viaje extraordinario por 70,000 años de historia humana. Harari explica cómo el Homo sapiens conquistó el planeta gracias al lenguaje, la cooperación y la capacidad de creer en ficciones compartidas. Una obra que te hará repensar todo lo que creías saber sobre la humanidad."
  },
  {
    id: 6,
    titulo: "Piense y Hágase Rico",
    autor: "Napoleon Hill",
    precio: 7.99,
    precioOriginal: 11.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
    categoria: "negocios",
    estrellas: 5,
    reseñas: 12430,
    badge: "best",
    badgeLabel: "Clásico",
    resena: "Basado en el estudio de las mentes más exitosas del siglo XX, Hill revela los 13 principios que llevan a la riqueza y el éxito. Un clásico de la mentalidad de crecimiento que ha transformado millones de vidas desde su publicación en 1937."
  },
  {
    id: 7,
    titulo: "Una Breve Historia del Tiempo",
    autor: "Stephen Hawking",
    precio: 11.99,
    precioOriginal: 16.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/A1xkFZX5k-L.jpg",
    categoria: "ciencia",
    estrellas: 5,
    reseñas: 7342,
    badge: "new",
    badgeLabel: "Nuevo",
    resena: "Hawking lleva al lector a explorar los misterios más profundos del universo: el Big Bang, los agujeros negros, el tiempo y la naturaleza del espacio. Escrito con una claridad asombrosa, hace accesible la física teórica a cualquier persona curiosa."
  },
  {
    id: 8,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    precio: 5.99,
    precioOriginal: 8.99,
    img: "https://images-na.ssl-images-amazon.com/images/I/81BPaFgk6lL.jpg",
    categoria: "ficcion",
    estrellas: 5,
    reseñas: 3210,
    badge: "best",
    badgeLabel: "Clásico",
    resena: "La obra cumbre de la literatura en español y una de las más importantes de la historia universal. Cervantes narra las aventuras del idealista Don Quijote y su fiel escudero Sancho Panza en un relato que mezcla humor, filosofía y profunda humanidad."
  }
];

// ===== ESTADO DEL CARRITO =====
let carrito = [];
let librosVisibles = [...libros];

// ===== PORTADAS HERO (editables desde admin) =====
let heroSlots = [
  "https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41j-s9fHJcL.jpg"
];

// ===== INICIALIZAR =====
document.addEventListener("DOMContentLoaded", () => {
  renderGrid(libros);
  renderMasVendidos();
  actualizarCarritoUI();
  initScrollAnimations();
  aplicarHeroSlots();
});

// ===== RENDER GRID =====
function renderGrid(lista) {
  const grid = document.getElementById("grid-libros");
  const sub = document.getElementById("resultado-busqueda");

  if (lista.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fa fa-search"></i>
        <p>No se encontraron libros</p>
        <span>Intenta con otra búsqueda o categoría</span>
      </div>`;
    sub.textContent = "0 resultados";
    return;
  }

  sub.textContent = `Mostrando ${lista.length} título${lista.length !== 1 ? "s" : ""}`;

  grid.innerHTML = lista.map(libro => {
    const ahorro = ((libro.precioOriginal - libro.precio) / libro.precioOriginal * 100).toFixed(0);
    const enCarrito = carrito.find(i => i.id === libro.id);
    const estrellas = "★".repeat(libro.estrellas) + "☆".repeat(5 - libro.estrellas);

    return `
      <div class="libro" data-id="${libro.id}">
        ${libro.badge ? `<div class="libro-badge ${libro.badge}">${libro.badgeLabel}</div>` : ""}
        <div class="libro-img-wrap">
          <img src="${libro.img}" alt="${libro.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x260/f0e8dc/c8860a?text=📚'"/>
          <div class="libro-quick">
            <button onclick="verDetalle(${libro.id})"><i class="fa fa-eye"></i> Vista rápida</button>
          </div>
        </div>
        <div class="libro-info">
          <span class="libro-cat">${libro.categoria}</span>
          <h3 class="libro-titulo">${libro.titulo}</h3>
          <p class="libro-autor">${libro.autor}</p>
          <div class="libro-estrellas">
            ${estrellas} <span>(${libro.reseñas.toLocaleString()})</span>
          </div>
          <div class="libro-precio-row">
            <span class="precio-actual">$${libro.precio.toFixed(2)}</span>
            <span class="precio-original">$${libro.precioOriginal.toFixed(2)}</span>
            <span class="precio-ahorro">-${ahorro}%</span>
          </div>
          <button
            class="btn-agregar ${enCarrito ? "added" : ""}"
            onclick="agregarCarrito(${libro.id}, this)"
            id="btn-${libro.id}">
            <i class="fa ${enCarrito ? "fa-check" : "fa-cart-plus"}"></i>
            ${enCarrito ? "Agregado" : "Agregar al carrito"}
          </button>
        </div>
      </div>`;
  }).join("");
  setTimeout(observarTarjetas, 50);
}

// ===== AGREGAR AL CARRITO =====
function agregarCarrito(id, btn) {
  const libro = libros.find(l => l.id === id);
  if (!libro) return;

  const existe = carrito.find(i => i.id === id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...libro, cantidad: 1 });
  }

  // Actualizar botón
  if (btn) {
    btn.classList.add("added");
    btn.innerHTML = `<i class="fa fa-check"></i> Agregado`;
  }

  actualizarCarritoUI();
  mostrarToast(`📚 "${libro.titulo}" agregado al carrito`);
  animarBadge();
}

// ===== QUITAR DEL CARRITO =====
function quitarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);

  // Restaurar botón
  const btn = document.getElementById(`btn-${id}`);
  if (btn) {
    btn.classList.remove("added");
    btn.innerHTML = `<i class="fa fa-cart-plus"></i> Agregar al carrito`;
  }

  actualizarCarritoUI();
}

// ===== CAMBIAR CANTIDAD =====
function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) quitarDelCarrito(id);
  else actualizarCarritoUI();
}

// ===== VACIAR CARRITO =====
function vaciarCarrito() {
  carrito.forEach(item => {
    const btn = document.getElementById(`btn-${item.id}`);
    if (btn) {
      btn.classList.remove("added");
      btn.innerHTML = `<i class="fa fa-cart-plus"></i> Agregar al carrito`;
    }
  });
  carrito = [];
  actualizarCarritoUI();
  mostrarToast("🗑️ Carrito vaciado");
}

// ===== ACTUALIZAR UI CARRITO =====
function actualizarCarritoUI() {
  const totalItems = carrito.reduce((s, i) => s + i.cantidad, 0);
  const subtotal = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const envio = subtotal >= 299 ? 0 : (subtotal > 0 ? 9.99 : 0);
  const total = subtotal + envio;

  // Badge
  document.getElementById("contador").textContent = totalItems;

  // Items
  const itemsEl = document.getElementById("carritoItems");
  const footerEl = document.getElementById("carritoFooter");

  if (carrito.length === 0) {
    itemsEl.innerHTML = `
      <div class="carrito-vacio">
        <i class="fa fa-book-open"></i>
        <p>Tu carrito está vacío</p>
        <span>Agrega libros para comenzar</span>
      </div>`;
    footerEl.style.display = "none";
    return;
  }

  itemsEl.innerHTML = carrito.map(item => `
    <div class="cart-item" id="ci-${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.titulo}" onerror="this.src='https://via.placeholder.com/60x80/f0e8dc/c8860a?text=📚'"/>
      <div class="cart-item-info">
        <p class="cart-item-titulo">${item.titulo}</p>
        <p class="cart-item-precio">$${(item.precio * item.cantidad).toFixed(2)}</p>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="cambiarCantidad(${item.id}, -1)">−</button>
          <span class="qty-num">${item.cantidad}</span>
          <button class="qty-btn" onclick="cambiarCantidad(${item.id}, +1)">+</button>
          <button class="remove-btn" onclick="quitarDelCarrito(${item.id})">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </div>`).join("");

  footerEl.style.display = "block";
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("envio-txt").textContent = envio === 0 ? "Gratis 🎉" : `$${envio.toFixed(2)}`;
  document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}

// ===== TOGGLE CARRITO =====
function toggleCarrito() {
  const panel = document.getElementById("carritoPanel");
  const overlay = document.getElementById("cartOverlay");
  panel.classList.toggle("open");
  overlay.classList.toggle("active");
  document.body.style.overflow = panel.classList.contains("open") ? "hidden" : "";
}

// ===== TOAST =====
function mostrarToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

// ===== BADGE ANIMACIÓN =====
function animarBadge() {
  const badge = document.getElementById("contador");
  badge.classList.remove("pop");
  void badge.offsetWidth;
  badge.classList.add("pop");
}

// ===== FILTRAR BÚSQUEDA =====
function filtrarLibros() {
  const q = document.getElementById("searchInput").value.toLowerCase().trim();
  librosVisibles = libros.filter(l =>
    l.titulo.toLowerCase().includes(q) ||
    l.autor.toLowerCase().includes(q) ||
    l.categoria.toLowerCase().includes(q)
  );
  renderGrid(librosVisibles);
}

// ===== FILTRAR CATEGORÍA =====
function filtrarCategoria(cat) {
  librosVisibles = cat === "all" ? [...libros] : libros.filter(l => l.categoria === cat);
  renderGrid(librosVisibles);
}

// ===== ORDENAR =====
function ordenar(tipo) {
  const lista = [...librosVisibles];
  if (tipo === "precio-asc") lista.sort((a, b) => a.precio - b.precio);
  else if (tipo === "precio-desc") lista.sort((a, b) => b.precio - a.precio);
  else if (tipo === "nombre") lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
  renderGrid(lista);
}

// ===== SCROLL AL CATÁLOGO =====
function scrollCatalogo() {
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

// ===== NAV FUNCIONAL =====
function navFiltrar(tipo, el) {
  // Marcar activo
  document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active"));
  if (el) el.classList.add("active");

  // Scroll al catálogo
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });

  if (tipo === "all") {
    librosVisibles = [...libros];
  } else if (tipo === "new") {
    librosVisibles = libros.filter(l => l.badge === "new");
  } else if (tipo === "bestseller") {
    librosVisibles = libros.filter(l => l.badge === "bestseller");
  } else if (tipo === "noficcion") {
    librosVisibles = libros.filter(l => ["negocios","historia","ciencia"].includes(l.categoria));
  } else {
    librosVisibles = libros.filter(l => l.categoria === tipo);
  }
  renderGrid(librosVisibles);
}

// ===== HAMBURGUESA MÓVIL =====
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const ham  = document.getElementById("hamburger");
  menu.classList.toggle("open");
  ham.classList.toggle("open");
}
document.addEventListener("click", e => {
  const menu = document.getElementById("mobileMenu");
  const ham  = document.getElementById("hamburger");
  if (menu && ham && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove("open");
    ham.classList.remove("open");
  }
});

// ===== MÁS VENDIDOS (carrusel) =====
function renderMasVendidos() {
  const top = libros.filter(l => l.badge === "bestseller" || l.reseñas >= 3000)
    .sort((a,b) => b.reseñas - a.reseñas)
    .slice(0, 6);

  const carrusel = document.getElementById("mvCarrusel");
  if (!carrusel) return;

  carrusel.innerHTML = top.map(l => {
    const ahorro = ((l.precioOriginal - l.precio) / l.precioOriginal * 100).toFixed(0);
    return `
      <div class="mv-card" onclick="verDetalle(${l.id})">
        <div class="mv-img-wrap">
          <img src="${l.img}" alt="${l.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/120x160/f0e8dc/c8860a?text=📚'"/>
          <div class="mv-ahorro">-${ahorro}%</div>
        </div>
        <div class="mv-info">
          <p class="mv-titulo">${l.titulo}</p>
          <p class="mv-autor">${l.autor}</p>
          <div class="mv-precios">
            <span class="mv-precio">$${l.precio.toFixed(2)}</span>
            <span class="mv-orig">$${l.precioOriginal.toFixed(2)}</span>
          </div>
        </div>
      </div>`;
  }).join("");
}

// ===== ANIMACIONES SCROLL =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  // Observar secciones
  document.querySelectorAll(".mas-vendidos, .catalogo-header, .badges-bar").forEach(el => {
    el.classList.add("fade-section");
    observer.observe(el);
  });

  // Observar tarjetas del grid cuando se rendericen
  window._scrollObserver = observer;
}

function observarTarjetas() {
  if (!window._scrollObserver) return;
  document.querySelectorAll(".libro:not(.observed)").forEach((el, i) => {
    el.classList.add("observed", "fade-card");
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    window._scrollObserver.observe(el);
  });
}

// ===== HERO SLOTS =====
function aplicarHeroSlots() {
  const imgs = document.querySelectorAll(".book-stack img");
  heroSlots.forEach((url, i) => {
    if (imgs[i]) imgs[i].src = url;
  });
}

function actualizarHero() {
  for (let i = 0; i < 3; i++) {
    const sel = document.getElementById(`hero-slot-${i}`);
    const prev = document.getElementById(`hero-preview-${i}`);
    if (!sel) continue;
    const libro = libros.find(l => l.id === parseInt(sel.value));
    if (libro) {
      heroSlots[i] = libro.img;
      if (prev) { prev.src = libro.img; prev.style.display = "block"; }
    }
  }
  aplicarHeroSlots();
  mostrarToast("🖼️ Portada actualizada");
}

function poblarHeroSelects() {
  for (let i = 0; i < 3; i++) {
    const sel = document.getElementById(`hero-slot-${i}`);
    if (!sel) continue;
    sel.innerHTML = libros.map(l =>
      `<option value="${l.id}" ${heroSlots[i] === l.img ? "selected" : ""}>${l.titulo}</option>`
    ).join("");
    const prev = document.getElementById(`hero-preview-${i}`);
    if (prev) { prev.src = heroSlots[i]; prev.style.display = "block"; }
  }
}

// ===== VISTA PREVIA LIBRO =====
function verDetalle(id) {
  const l = libros.find(x => x.id === id);
  if (!l) return;

  const ahorro = (((l.precioOriginal - l.precio) / l.precioOriginal) * 100).toFixed(0);
  const estrellas = "★".repeat(l.estrellas) + "☆".repeat(5 - l.estrellas);
  const enCarrito = carrito.find(i => i.id === id);

  document.getElementById("previa-img").src = l.img;
  document.getElementById("previa-img").alt = l.titulo;
  document.getElementById("previa-cat").textContent = l.categoria.toUpperCase();
  document.getElementById("previa-titulo").textContent = l.titulo;
  document.getElementById("previa-autor").textContent = "✍️ " + l.autor;
  document.getElementById("previa-estrellas").innerHTML = `${estrellas} <span style="color:var(--text-muted);font-size:12px">(${l.reseñas.toLocaleString()} reseñas)</span>`;
  document.getElementById("previa-precio").textContent = "$" + l.precio.toFixed(2);
  document.getElementById("previa-precio-orig").textContent = "$" + l.precioOriginal.toFixed(2);
  document.getElementById("previa-ahorro").textContent = "-" + ahorro + "%";
  document.getElementById("previa-resena").textContent = l.resena || "Sin descripción disponible. Agrega una reseña desde el panel de administración.";

  // Badge
  const badgeWrap = document.getElementById("previa-badge-wrap");
  badgeWrap.innerHTML = l.badge ? `<div class="libro-badge ${l.badge}">${l.badgeLabel}</div>` : "";

  // Botón agregar
  const btnAgregar = document.getElementById("previa-btn-agregar");
  if (enCarrito) {
    btnAgregar.innerHTML = `<i class="fa fa-check"></i> Agregado al carrito`;
    btnAgregar.classList.add("added");
    btnAgregar.onclick = null;
  } else {
    btnAgregar.innerHTML = `<i class="fa fa-cart-plus"></i> Agregar al carrito`;
    btnAgregar.classList.remove("added");
    btnAgregar.onclick = () => {
      agregarCarrito(l.id, btnAgregar);
      btnAgregar.innerHTML = `<i class="fa fa-check"></i> Agregado al carrito`;
      btnAgregar.onclick = null;
    };
  }

  // Guardar libro para botón ayuda
  window._libroEnPrevia = l.titulo;

  document.getElementById("previaModal").classList.add("open");
  document.getElementById("previaOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function cerrarPrevia() {
  document.getElementById("previaModal").classList.remove("open");
  document.getElementById("previaOverlay").classList.remove("active");
  document.body.style.overflow = "";
  window._libroEnPrevia = null;
}

// ===========================
// PANEL DE ADMINISTRACIÓN
// ===========================

const ADMIN_PASS = "97030625"; // ← Cambia aquí tu contraseña

// ----- LOGIN -----
function abrirLogin() {
  document.getElementById("loginModal").classList.add("open");
  document.getElementById("loginOverlay").classList.add("active");
  document.getElementById("adminPass").value = "";
  document.getElementById("loginError").style.display = "none";
  setTimeout(() => document.getElementById("adminPass").focus(), 100);
  document.body.style.overflow = "hidden";
}

function cerrarLogin() {
  document.getElementById("loginModal").classList.remove("open");
  document.getElementById("loginOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function verificarLogin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === ADMIN_PASS) {
    cerrarLogin();
    abrirAdmin();
  } else {
    document.getElementById("loginError").style.display = "flex";
    document.getElementById("adminPass").focus();
    document.getElementById("adminPass").select();
  }
}

// ----- ABRIR/CERRAR PANEL -----
function abrirAdmin() {
  document.getElementById("adminPanel").classList.add("open");
  document.getElementById("adminOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  actualizarStats();
  renderTablaAdmin();
  cancelarEdicion();
  poblarHeroSelects();
}

function cerrarAdmin() {
  document.getElementById("adminPanel").classList.remove("open");
  document.getElementById("adminOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ----- STATS -----
function actualizarStats() {
  document.getElementById("stat-total").textContent = libros.length;
  const avg = libros.length ? (libros.reduce((s,l) => s + l.precio, 0) / libros.length) : 0;
  document.getElementById("stat-precio").textContent = "$" + avg.toFixed(2);
  const cats = new Set(libros.map(l => l.categoria)).size;
  document.getElementById("stat-cats").textContent = cats;
}

// ----- TABLA ADMIN -----
function renderTablaAdmin() {
  const q = (document.getElementById("admin-search").value || "").toLowerCase();
  const lista = libros.filter(l =>
    l.titulo.toLowerCase().includes(q) ||
    l.autor.toLowerCase().includes(q) ||
    l.categoria.toLowerCase().includes(q)
  );

  const tbody = document.getElementById("admin-tbody");
  if (lista.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:var(--text-muted)"><i class="fa fa-search" style="margin-right:8px"></i>Sin resultados</td></tr>`;
    return;
  }

  tbody.innerHTML = lista.map(l => `
    <tr>
      <td><img src="${l.img}" alt="${l.titulo}" onerror="this.src='https://via.placeholder.com/44x58/f0e8dc/c8860a?text=📚'" /></td>
      <td>
        <p class="table-titulo">${l.titulo}</p>
        <p class="table-autor">${l.autor}</p>
      </td>
      <td><span class="table-cat">${l.categoria}</span></td>
      <td>
        <p class="table-precio">$${l.precio.toFixed(2)}</p>
        <p class="table-precio-orig">$${l.precioOriginal.toFixed(2)}</p>
      </td>
      <td>${"★".repeat(l.estrellas)}</td>
      <td>
        <div class="table-actions">
          <button class="btn-edit" onclick="editarLibro(${l.id})"><i class="fa fa-pen"></i> Editar</button>
          <button class="btn-delete" onclick="eliminarLibro(${l.id})"><i class="fa fa-trash"></i> Eliminar</button>
        </div>
      </td>
    </tr>`).join("");
}

// ----- GUARDAR (AGREGAR O EDITAR) -----
function guardarLibro() {
  const id      = document.getElementById("edit-id").value;
  const titulo  = document.getElementById("f-titulo").value.trim();
  const autor   = document.getElementById("f-autor").value.trim();
  const precio  = parseFloat(document.getElementById("f-precio").value);
  const precioO = parseFloat(document.getElementById("f-precioOriginal").value) || precio;
  const cat     = document.getElementById("f-categoria").value;
  const estrellas = parseInt(document.getElementById("f-estrellas").value) || 5;
  const reseñas = parseInt(document.getElementById("f-reseñas").value) || 0;
  const img     = document.getElementById("f-img").value.trim();
  const badgeV  = document.getElementById("f-badge").value;

  // Validación
  let errores = false;
  ["f-titulo","f-autor","f-precio","f-img"].forEach(fid => {
    const el = document.getElementById(fid);
    if (!el.value.trim()) { el.classList.add("error"); errores = true; }
    else el.classList.remove("error");
  });
  if (isNaN(precio) || precio <= 0) { document.getElementById("f-precio").classList.add("error"); errores = true; }
  if (errores) { mostrarToast("⚠️ Completa los campos obligatorios"); return; }

  const resena  = document.getElementById("f-resena").value.trim();
  const badgeLabels = { bestseller: "Best Seller", new: "Nuevo", best: "Clásico" };

  if (id) {
    // Editar existente
    const idx = libros.findIndex(l => l.id === parseInt(id));
    if (idx !== -1) {
      libros[idx] = { ...libros[idx], titulo, autor, precio, precioOriginal: precioO, categoria: cat, estrellas, reseñas, img, badge: badgeV || null, badgeLabel: badgeLabels[badgeV] || "", resena };
      mostrarToast(`✏️ "${titulo}" actualizado`);
    }
  } else {
    // Nuevo libro
    const newId = libros.length ? Math.max(...libros.map(l => l.id)) + 1 : 1;
    libros.push({ id: newId, titulo, autor, precio, precioOriginal: precioO, categoria: cat, estrellas, reseñas, img, badge: badgeV || null, badgeLabel: badgeLabels[badgeV] || "", resena });
    mostrarToast(`✅ "${titulo}" agregado al catálogo`);
  }

  librosVisibles = [...libros];
  renderGrid(libros);
  renderMasVendidos();
  actualizarStats();
  renderTablaAdmin();
  poblarHeroSelects();
  cancelarEdicion();
}

// ----- EDITAR LIBRO (cargar en formulario) -----
function editarLibro(id) {
  const l = libros.find(x => x.id === id);
  if (!l) return;

  document.getElementById("edit-id").value      = l.id;
  document.getElementById("f-titulo").value     = l.titulo;
  document.getElementById("f-autor").value      = l.autor;
  document.getElementById("f-precio").value     = l.precio;
  document.getElementById("f-precioOriginal").value = l.precioOriginal;
  document.getElementById("f-categoria").value  = l.categoria;
  document.getElementById("f-estrellas").value  = l.estrellas;
  document.getElementById("f-reseñas").value    = l.reseñas;
  document.getElementById("f-img").value        = l.img;
  document.getElementById("f-badge").value      = l.badge || "";
  document.getElementById("f-resena").value     = l.resena || "";

  previewImg();
  document.getElementById("form-titulo-admin").innerHTML = `<i class="fa fa-pen"></i> Editando: ${l.titulo}`;
  document.getElementById("btn-cancel-form").style.display = "flex";

  // Scroll al formulario
  document.querySelector(".admin-form-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ----- ELIMINAR LIBRO -----
function eliminarLibro(id) {
  const l = libros.find(x => x.id === id);
  if (!l) return;
  if (!confirm(`¿Eliminar "${l.titulo}" del catálogo?`)) return;

  const idx = libros.indexOf(l);
  libros.splice(idx, 1);
  librosVisibles = [...libros];

  // Si estaba en carrito, quitarlo
  carrito = carrito.filter(i => i.id !== id);
  actualizarCarritoUI();

  renderGrid(libros);
  actualizarStats();
  renderTablaAdmin();
  mostrarToast(`🗑️ "${l.titulo}" eliminado`);
}

// ----- CANCELAR EDICIÓN -----
function cancelarEdicion() {
  document.getElementById("edit-id").value = "";
  ["f-titulo","f-autor","f-precio","f-precioOriginal","f-img"].forEach(id => {
    const el = document.getElementById(id);
    el.value = "";
    el.classList.remove("error");
  });
  document.getElementById("f-estrellas").value = "";
  document.getElementById("f-reseñas").value = "";
  document.getElementById("f-categoria").value = "negocios";
  document.getElementById("f-badge").value = "";
  document.getElementById("f-resena").value = "";
  document.getElementById("img-preview").style.display = "none";
  document.getElementById("img-preview-placeholder").style.display = "flex";
  document.getElementById("form-titulo-admin").innerHTML = `<i class="fa fa-plus-circle"></i> Agregar nuevo libro`;
  document.getElementById("btn-cancel-form").style.display = "none";
}

// ----- PREVIEW IMAGEN -----
function previewImg() {
  const url = document.getElementById("f-img").value.trim();
  const img = document.getElementById("img-preview");
  const placeholder = document.getElementById("img-preview-placeholder");
  if (url) {
    img.src = url;
    img.style.display = "block";
    placeholder.style.display = "none";
    img.onerror = () => { img.style.display = "none"; placeholder.style.display = "flex"; };
  } else {
    img.style.display = "none";
    placeholder.style.display = "flex";
  }
}

// ===========================
// CHECKOUT — WHATSAPP
// ===========================

const WA_NUMBER = "525572866238"; // Tu número de WhatsApp

function checkout() {
  if (carrito.length === 0) return;

  // Llenar resumen en el modal
  const subtotal = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const envio    = subtotal >= 299 ? 0 : 9.99;
  const total    = subtotal + envio;

  let html = `<p class="checkout-resumen-titulo">📚 Resumen de tu pedido</p>`;
  carrito.forEach(item => {
    html += `
      <div class="checkout-resumen-item">
        <span>${item.cantidad}× ${item.titulo}</span>
        <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
      </div>`;
  });
  html += `
    <div class="checkout-resumen-total">
      <span>Total a pagar</span>
      <span>$${total.toFixed(2)}</span>
    </div>`;
  document.getElementById("checkout-resumen").innerHTML = html;

  // Limpiar campos y errores
  ["co-nombre","co-telefono","co-ciudad","co-nota"].forEach(id => {
    document.getElementById(id).value = "";
    document.getElementById(id).classList.remove("error");
  });
  document.getElementById("co-error").style.display = "none";

  // Abrir modal
  document.getElementById("checkoutModal").classList.add("open");
  document.getElementById("checkoutOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
  setTimeout(() => document.getElementById("co-nombre").focus(), 150);
}

function cerrarCheckout() {
  document.getElementById("checkoutModal").classList.remove("open");
  document.getElementById("checkoutOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function enviarPedidoWhatsapp() {
  const nombre   = document.getElementById("co-nombre").value.trim();
  const telefono = document.getElementById("co-telefono").value.trim();
  const ciudad   = document.getElementById("co-ciudad").value.trim();
  const nota     = document.getElementById("co-nota").value.trim();

  // Validar obligatorios
  let error = false;
  if (!nombre)   { document.getElementById("co-nombre").classList.add("error");   error = true; }
  if (!telefono) { document.getElementById("co-telefono").classList.add("error"); error = true; }
  if (error) { document.getElementById("co-error").style.display = "block"; return; }

  const subtotal = carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const envio    = subtotal >= 299 ? 0 : 9.99;
  const total    = subtotal + envio;

  // Fecha y hora
  const ahora = new Date();
  const fecha = ahora.toLocaleDateString("es-MX", { day:"2-digit", month:"2-digit", year:"numeric" });
  const hora  = ahora.toLocaleTimeString("es-MX", { hour:"2-digit", minute:"2-digit" });

  // Construir mensaje tipo ticket
  let msg = "";
  msg += "🛒 *NUEVO PEDIDO — Librería Digital*\n";
  msg += "━━━━━━━━━━━━━━━━━━━━\n";
  msg += `👤 *Cliente:* ${nombre}\n`;
  msg += `📱 *WhatsApp:* ${telefono}\n`;
  if (ciudad) msg += `📍 *Ciudad:* ${ciudad}\n`;
  msg += `📅 *Fecha:* ${fecha} — ${hora}\n`;
  msg += "━━━━━━━━━━━━━━━━━━━━\n";
  msg += "📚 *DETALLE DEL PEDIDO:*\n\n";

  carrito.forEach((item, i) => {
    msg += `${i + 1}️⃣ *${item.titulo}*\n`;
    msg += `   ✍️ ${item.autor}\n`;
    msg += `   🔢 Cant: ${item.cantidad} × $${item.precio.toFixed(2)} = *$${(item.precio * item.cantidad).toFixed(2)}*\n\n`;
  });

  msg += "━━━━━━━━━━━━━━━━━━━━\n";
  msg += `📦 Subtotal:   $${subtotal.toFixed(2)}\n`;
  msg += `🚚 Envío:      ${envio === 0 ? "¡Gratis! 🎉" : "$" + envio.toFixed(2)}\n`;
  msg += `💰 *TOTAL A PAGAR: $${total.toFixed(2)}*\n`;
  msg += "━━━━━━━━━━━━━━━━━━━━\n";
  if (nota) msg += `📝 Nota: ${nota}\n━━━━━━━━━━━━━━━━━━━━\n`;
  msg += "¡Hola! Me gustaría realizar este pedido. Quedo en espera de sus datos de pago. 😊";

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  cerrarCheckout();
  mostrarToast("✅ ¡Pedido enviado por WhatsApp!");
}

// ===========================
// BOTÓN FLOTANTE DE AYUDA
// ===========================

function toggleAyuda() {
  const menu = document.getElementById("helpMenu");
  menu.classList.toggle("open");
}

// Cerrar al hacer clic fuera
document.addEventListener("click", (e) => {
  const menu = document.getElementById("helpMenu");
  const bubble = document.getElementById("helpBubble");
  if (menu && bubble && !menu.contains(e.target) && !bubble.contains(e.target)) {
    menu.classList.remove("open");
  }
});

function abrirAyuda() {
  cerrarPrevia();
  setTimeout(() => {
    document.getElementById("helpMenu").classList.add("open");
  }, 300);
}

function enviarAyuda(tipo) {
  document.getElementById("helpMenu").classList.remove("open");

  const libroPrevia = window._libroEnPrevia || "";
  let msg = "";

  if (tipo === "solicitar") {
    msg = "Hola 👋, quisiera solicitar un libro que no encontré en el catálogo:\n\n📖 *Título:* \n✍️ *Autor (si lo sé):* \n\n¿Pueden conseguirlo?";
    if (libroPrevia) msg = `Hola 👋, tengo una pregunta sobre el libro *"${libroPrevia}"* que vi en su catálogo.\n\n¿Podrían darme más información?`;
  } else if (tipo === "duda") {
    msg = "Hola 👋, tengo una duda sobre la Librería Digital:\n\n💬 *Mi pregunta:* ";
  } else if (tipo === "pago") {
    msg = "Hola 👋, quisiera saber los métodos de pago disponibles para realizar mi compra. ¿Con qué opciones cuentan?";
  } else if (tipo === "entrega") {
    msg = "Hola 👋, quisiera saber cómo recibo mi libro digital después de confirmar el pago. ¿Cuál es el proceso de entrega?";
  } else if (tipo === "promo") {
    msg = "Hola 👋, quisiera saber si tienen promociones, descuentos o paquetes disponibles actualmente. 🎁";
  }

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
