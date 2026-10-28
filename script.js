const products = {
  solsticio: { id: "solsticio", name: { es: "Solsticio", en: "Solstice" }, description: { es: "Rosas, ranúnculos y texturas de temporada", en: "Roses, ranunculus and seasonal textures" }, price: 289, image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=300&q=75" },
  jardin: { id: "jardin", name: { es: "Jardín secreto", en: "Secret Garden" }, description: { es: "Flores silvestres con movimiento natural", en: "Wild-inspired blooms with natural movement" }, price: 219, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=75" },
  calma: { id: "calma", name: { es: "Calma", en: "Calm" }, description: { es: "Paleta serena en jarrón de cerámica", en: "A serene palette in a ceramic vase" }, price: 329, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=300&q=75" },
  terracota: { id: "terracota", name: { es: "Terracota", en: "Terracotta" }, description: { es: "Tonos tierra, flores escultóricas y follaje", en: "Earthy tones, sculptural blooms and foliage" }, price: 269, image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=300&q=75" },
  romance: { id: "romance", name: { es: "Romance", en: "Romance" }, description: { es: "Rosas seleccionadas y envoltura de algodón", en: "Selected roses and cotton wrapping" }, price: 249, image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=300&q=75" },
  atelier: { id: "atelier", name: { es: "Atelier", en: "Atelier" }, description: { es: "Una pieza contemporánea para interiores", en: "A contemporary floral piece for interiors" }, price: 379, image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=300&q=75" }
};

const translations = {
  es: {
    announcement: "Entrega floral en Miraflores y Lima Metropolitana · Hecho con intención",
    wordmarkSub: "ESTUDIO FLORAL · LIMA", navShop: "Colección", navSubscription: "Suscripciones", navStudio: "El estudio", navDelivery: "Entregas", bag: "Bolsa",
    heroEyebrow: "FLORES DE AUTOR · MIRAFLORES, LIMA", heroTitle: "La belleza de<br>decirlo <em>con flores.</em>", heroText: "Composiciones florales extraordinarias, creadas para transformar los momentos cotidianos en recuerdos imborrables.", exploreCollection: "Explorar colección", discoverSubscription: "Descubrir suscripciones", heroNote: "Flores frescas. Diseño consciente. Entrega cuidadosa.", stampTop: "HECHO A MANO", stampBottom: "CON FLORES", heroCaption: "La colección de temporada",
    trust1: "Diseño floral de autor", trust2: "Entrega programada", trust3: "Flores de temporada", collectionEyebrow: "EL ARTE DE REGALAR", collectionTitle: "Una flor dice mucho.<br><em>Un ramo lo cambia todo.</em>", collectionText: "Piezas florales diseñadas en nuestro estudio de Miraflores. Cada arreglo tiene su propio carácter; las variedades pueden cambiar según la temporada.",
    filterAll: "Todo", filterSignature: "Arreglos de autor", filterBouquets: "Ramos", filterVases: "Flores en jarrón", bestseller: "Favorito", newArrival: "Novedad",
    productSolstice: "Solsticio", productSolsticeDesc: "Rosas, ranúnculos y texturas de temporada", productGarden: "Jardín secreto", productGardenDesc: "Flores silvestres con movimiento natural", productCalm: "Calma", productCalmDesc: "Paleta serena en jarrón de cerámica", productTerra: "Terracota", productTerraDesc: "Tonos tierra, flores escultóricas y follaje", productRomance: "Romance", productRomanceDesc: "Rosas seleccionadas y envoltura de algodón", productAtelier: "Atelier", productAtelierDesc: "Una pieza contemporánea para interiores", addToBag: "Añadir a la bolsa", seasonNote: "Cada arreglo se crea a mano. Si una flor no está disponible, elegiremos una alternativa de igual calidad y belleza.",
    subEyebrow: "FLORES, UNA Y OTRA VEZ", subTitle: "Un pequeño lujo.<br><em>Todos los meses.</em>", subText: "Una selección de flores de temporada, compuesta por nuestro estudio y entregada en la fecha que elijas. Para tu hogar, tu espacio de trabajo o alguien especial.",
    planEssential: "Esencial", planEssentialDesc: "Un ramo delicado · 1 entrega al mes", planSignature: "Signature", planSignatureDesc: "Una composición generosa · 1 entrega al mes", planAtelier: "Atelier", planAtelierDesc: "Flores premium para espacios especiales", perMonth: "/mes", frequencyLabel: "Frecuencia de entrega", monthly: "Mensual", twiceMonthly: "Dos veces al mes (+80%)", startSubscription: "Elegir mi suscripción", subFinePrint: "La suscripción se confirma por WhatsApp antes del primer cobro. Sin cargos automáticos en esta demo.",
    studioEyebrow: "NUESTRO ESTUDIO", studioTitle: "La naturaleza,<br><em>con otra mirada.</em>", studioText: "En Élan Florale creemos que las flores no necesitan una ocasión. Trabajamos con color, forma y textura para crear composiciones que se sienten personales, espontáneas y atemporales.", visitDelivery: "Conoce nuestro servicio de entrega ↗", studioCaption: "Composiciones hechas a mano en Lima",
    deliveryEyebrow: "DEL ESTUDIO A TU PUERTA", deliveryTitle: "Cada detalle,<br><em>bien cuidado.</em>", delivery1Title: "Entrega local", delivery1Text: "Entregamos en Miraflores y distritos seleccionados de Lima Metropolitana. Consulta cobertura antes de confirmar.", delivery2Title: "Elige tu momento", delivery2Text: "Indica la fecha y una franja horaria preferida. Coordinaremos contigo la disponibilidad por WhatsApp.", delivery3Title: "Un regalo personal", delivery3Text: "Añade un mensaje para esa persona especial. Podemos incluir una tarjeta escrita a mano.", checkCoverage: "Consultar cobertura de entrega",
    newsletterEyebrow: "NOTAS FLORALES", newsletterTitle: "Un poco de belleza<br><em>en tu bandeja de entrada.</em>", emailLabel: "Correo electrónico", footerText: "Flores de autor para celebrar lo extraordinario de cada día.", footerExplore: "EXPLORA", footerHelp: "TE AYUDAMOS", contactUs: "Escríbenos", whatsapp: "WhatsApp", footerVisit: "ENCUÉNTRANOS",
    yourBag: "TU BOLSA", bagTitle: "Flores para ti.", emptyCart: "Tu bolsa está esperando algo bonito.", subtotal: "Subtotal", deliveryCalculated: "El costo de entrega se confirma según el distrito.", continueOrder: "Continuar pedido", checkoutNote: "Demo de tienda: el pedido se coordina por WhatsApp.",
    orderEyebrow: "UN ÚLTIMO DETALLE", orderTitle: "¿Dónde entregamos?", nameLabel: "Tu nombre", phoneLabel: "WhatsApp / teléfono", districtLabel: "Distrito de entrega", chooseDistrict: "Selecciona un distrito", addressLabel: "Dirección completa", dateLabel: "Fecha preferida de entrega", messageLabel: "Mensaje para la tarjeta (opcional)", sendWhatsApp: "Coordinar por WhatsApp ↗", privacyNote: "Tus datos se usarán únicamente para coordinar este pedido.",
    subDialogEyebrow: "TU RITUAL FLORAL", subDialogTitle: "Llevemos flores a tu mes.", startDateLabel: "¿Cuándo te gustaría comenzar?", notesLabel: "Preferencias florales (opcional)", confirmWhatsApp: "Solicitar suscripción por WhatsApp ↗", subDialogNote: "Confirmaremos cobertura, disponibilidad y condiciones antes de activar tu suscripción.",
    toastAdded: "Añadido a tu bolsa", toastRemoved: "Producto eliminado", toastEmpty: "Añade al menos un arreglo antes de continuar.", toastNewsletter: "¡Gracias! Te avisaremos cuando publiquemos nuestras notas florales.", toastEmail: "Introduce un correo electrónico válido.", subscriptionSummary: "Plan {plan} · {frequency} · S/ {price} por entrega programada.", twice: "dos veces al mes", monthlyWord: "mensual", cartEmpty: "Tu bolsa está vacía.", whatsappIntro: "Hola, me gustaría coordinar este pedido de Élan Florale:", subscriptionIntro: "Hola, me gustaría solicitar esta suscripción floral de Élan Florale:", dateUnavailable: "Por favor, elige una fecha futura."
  },
  en: {
    announcement: "Flower delivery in Miraflores and Lima Metropolitan Area · Made with intention",
    wordmarkSub: "FLORAL STUDIO · LIMA", navShop: "Collection", navSubscription: "Subscriptions", navStudio: "The studio", navDelivery: "Delivery", bag: "Bag",
    heroEyebrow: "FLORAL DESIGN · MIRAFLORES, LIMA", heroTitle: "The beauty of<br>saying it <em>with flowers.</em>", heroText: "Extraordinary floral compositions, created to turn everyday moments into lasting memories.", exploreCollection: "Explore collection", discoverSubscription: "Discover subscriptions", heroNote: "Fresh flowers. Thoughtful design. Careful delivery.", stampTop: "MADE BY HAND", stampBottom: "WITH FLOWERS", heroCaption: "The seasonal collection",
    trust1: "Signature floral design", trust2: "Scheduled delivery", trust3: "Seasonal flowers", collectionEyebrow: "THE ART OF GIVING", collectionTitle: "One flower says a lot.<br><em>A bouquet changes everything.</em>", collectionText: "Floral pieces designed in our Miraflores studio. Every arrangement has its own character; flower varieties may change with the season.",
    filterAll: "All", filterSignature: "Signature arrangements", filterBouquets: "Bouquets", filterVases: "Flowers in vases", bestseller: "Bestseller", newArrival: "New",
    productSolstice: "Solstice", productSolsticeDesc: "Roses, ranunculus and seasonal textures", productGarden: "Secret Garden", productGardenDesc: "Wild-inspired blooms with natural movement", productCalm: "Calm", productCalmDesc: "A serene palette in a ceramic vase", productTerra: "Terracotta", productTerraDesc: "Earthy tones, sculptural blooms and foliage", productRomance: "Romance", productRomanceDesc: "Selected roses and cotton wrapping", productAtelier: "Atelier", productAtelierDesc: "A contemporary floral piece for interiors", addToBag: "Add to bag", seasonNote: "Every arrangement is made by hand. If a flower is unavailable, we will choose an alternative of equal quality and beauty.",
    subEyebrow: "FLOWERS, AGAIN AND AGAIN", subTitle: "A little luxury.<br><em>Every month.</em>", subText: "A seasonal selection, arranged by our studio and delivered on your chosen date. For your home, workspace, or someone special.",
    planEssential: "Essential", planEssentialDesc: "A delicate bouquet · 1 delivery per month", planSignature: "Signature", planSignatureDesc: "A generous arrangement · 1 delivery per month", planAtelier: "Atelier", planAtelierDesc: "Premium flowers for special spaces", perMonth: "/mo", frequencyLabel: "Delivery frequency", monthly: "Monthly", twiceMonthly: "Twice a month (+80%)", startSubscription: "Choose my subscription", subFinePrint: "Your subscription is confirmed via WhatsApp before the first payment. No automatic charges in this demo.",
    studioEyebrow: "OUR STUDIO", studioTitle: "Nature,<br><em>seen differently.</em>", studioText: "At Élan Florale, we believe flowers don't need an occasion. We work with color, form, and texture to create arrangements that feel personal, spontaneous, and timeless.", visitDelivery: "Discover our delivery service ↗", studioCaption: "Handcrafted arrangements in Lima",
    deliveryEyebrow: "FROM OUR STUDIO TO YOUR DOOR", deliveryTitle: "Every detail,<br><em>thoughtfully cared for.</em>", delivery1Title: "Local delivery", delivery1Text: "We deliver in Miraflores and selected districts across Metropolitan Lima. Please check coverage before confirming.", delivery2Title: "Choose your moment", delivery2Text: "Tell us your preferred date and time window. We'll coordinate availability with you on WhatsApp.", delivery3Title: "A personal gift", delivery3Text: "Add a message for someone special. We can include a handwritten card.", checkCoverage: "Check delivery coverage",
    newsletterEyebrow: "FLORAL NOTES", newsletterTitle: "A little beauty<br><em>in your inbox.</em>", emailLabel: "Email address", footerText: "Signature flowers to celebrate the extraordinary in every day.", footerExplore: "EXPLORE", footerHelp: "WE CAN HELP", contactUs: "Get in touch", whatsapp: "WhatsApp", footerVisit: "FIND US",
    yourBag: "YOUR BAG", bagTitle: "Flowers for you.", emptyCart: "Your bag is waiting for something beautiful.", subtotal: "Subtotal", deliveryCalculated: "Delivery cost is confirmed based on your district.", continueOrder: "Continue order", checkoutNote: "Store demo: orders are coordinated through WhatsApp.",
    orderEyebrow: "ONE LAST DETAIL", orderTitle: "Where should we deliver?", nameLabel: "Your name", phoneLabel: "WhatsApp / phone", districtLabel: "Delivery district", chooseDistrict: "Choose a district", addressLabel: "Full address", dateLabel: "Preferred delivery date", messageLabel: "Card message (optional)", sendWhatsApp: "Coordinate via WhatsApp ↗", privacyNote: "Your details will only be used to coordinate this order.",
    subDialogEyebrow: "YOUR FLORAL RITUAL", subDialogTitle: "Bring flowers into your month.", startDateLabel: "When would you like to begin?", notesLabel: "Floral preferences (optional)", confirmWhatsApp: "Request subscription via WhatsApp ↗", subDialogNote: "We will confirm coverage, availability, and terms before activating your subscription.",
    toastAdded: "Added to your bag", toastRemoved: "Item removed", toastEmpty: "Add at least one arrangement before continuing.", toastNewsletter: "Thank you! We'll let you know when our floral notes launch.", toastEmail: "Please enter a valid email address.", subscriptionSummary: "{plan} plan · {frequency} · S/ {price} per scheduled delivery.", twice: "twice a month", monthlyWord: "monthly", cartEmpty: "Your bag is empty.", whatsappIntro: "Hello, I'd like to coordinate this Élan Florale order:", subscriptionIntro: "Hello, I'd like to request this Élan Florale flower subscription:", dateUnavailable: "Please choose a future date."
  }
};

let currentLang = "es";
let cart = [];
let toastTimer;
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const money = value => `S/ ${Number(value).toLocaleString("es-PE")}`;

function t(key) { return translations[currentLang][key] || translations.es[key] || key; }
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  $$("[data-lang]").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  $$("[data-i18n]").forEach(el => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });
  $$("[data-i18n-html]").forEach(el => {
    const value = t(el.dataset.i18nHtml);
    if (value) el.innerHTML = value;
  });
  $$("[data-add]").forEach(btn => btn.textContent = t("addToBag"));
  const email = $("#newsletterEmail");
  if (email) email.placeholder = lang === "es" ? "Tu correo electrónico" : "Your email address";
  renderCart();
  updateSubscriptionSummary();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
}

function addToCart(id) {
  const item = cart.find(entry => entry.id === id);
  if (item) item.quantity += 1;
  else cart.push({ id, quantity: 1 });
  renderCart();
  showToast(t("toastAdded"));
}

function changeQuantity(id, delta) {
  const item = cart.find(entry => entry.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== id);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = count;
  const container = $("#cartItems");
  if (!cart.length) {
    container.innerHTML = `<p class="empty-cart">${t("emptyCart")}</p>`;
  } else {
    container.innerHTML = cart.map(item => {
      const product = products[item.id];
      return `<div class="cart-item">
        <img src="${product.image}" alt="">
        <div><h3>${product.name[currentLang]}</h3><p>${product.description[currentLang]}</p>
          <div class="quantity-control"><button type="button" data-quantity="${item.id}" data-delta="-1" aria-label="Decrease">−</button><span>${item.quantity}</span><button type="button" data-quantity="${item.id}" data-delta="1" aria-label="Increase">+</button></div>
          <button type="button" class="remove-item" data-remove="${item.id}">${currentLang === "es" ? "Eliminar" : "Remove"}</button>
        </div><span class="cart-item-price">${money(product.price * item.quantity)}</span>
      </div>`;
    }).join("");
  }
  const total = cart.reduce((sum, item) => sum + products[item.id].price * item.quantity, 0);
  $("#cartSubtotal").textContent = money(total);
}

function openCart() {
  $("#cartOverlay").hidden = false;
  requestAnimationFrame(() => $("#cartDrawer").classList.add("open"));
  $("#cartDrawer").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}
function closeCart() {
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { $("#cartOverlay").hidden = true; }, 300);
}
function openDialog(dialog) {
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}
function closeDialog(dialog) {
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}
function selectedPlan() {
  const plan = $('input[name="plan"]:checked')?.value || "esencial";
  const frequency = $("#subFrequency").value;
  const plans = {
    esencial: { name: t("planEssential"), price: 179 },
    signature: { name: t("planSignature"), price: 289 },
    atelier: { name: t("planAtelier"), price: 429 }
  };
  const data = plans[plan];
  return { ...data, id: plan, frequency, price: frequency === "twice" ? Math.round(data.price * 1.8) : data.price };
}
function updateSubscriptionSummary() {
  $$(".plan-option").forEach(label => label.classList.toggle("selected", $("input", label).checked));
  const summary = $("#selectedPlanSummary");
  if (summary) {
    const plan = selectedPlan();
    const frequencyText = plan.frequency === "twice" ? t("twice") : t("monthlyWord");
    summary.textContent = t("subscriptionSummary").replace("{plan}", plan.name).replace("{frequency}", frequencyText).replace("{price}", plan.price);
  }
}
function openWhatsApp(message) {
  const phone = "51999999999"; // Replace with the florist's real WhatsApp number before launch.
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", () => {
  $("#year").textContent = new Date().getFullYear();
  // Spanish is the default language.
  applyLanguage("es");

  $$("[data-lang]").forEach(btn => btn.addEventListener("click", () => applyLanguage(btn.dataset.lang)));
  $$(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
    $$(".filter-btn").forEach(filter => filter.classList.toggle("active", filter === btn));
    $$(".product-card").forEach(card => {
      card.hidden = btn.dataset.filter !== "all" && card.dataset.category !== btn.dataset.filter;
    });
  }));
  $$("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(btn.dataset.add)));
  $$("[data-product]").forEach(btn => btn.addEventListener("click", () => addToCart(btn.dataset.product)));
  $("#cartTrigger").addEventListener("click", openCart);
  $("#closeCart").addEventListener("click", closeCart);
  $("#cartOverlay").addEventListener("click", closeCart);
  $("#cartItems").addEventListener("click", event => {
    const quantityButton = event.target.closest("[data-quantity]");
    const removeButton = event.target.closest("[data-remove]");
    if (quantityButton) changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.delta));
    if (removeButton) {
      cart = cart.filter(item => item.id !== removeButton.dataset.remove);
      renderCart();
      showToast(t("toastRemoved"));
    }
  });
  $("#checkoutButton").addEventListener("click", () => {
    if (!cart.length) { showToast(t("toastEmpty")); return; }
    closeCart();
    openDialog($("#orderDialog"));
  });
  $("#closeOrderDialog").addEventListener("click", () => closeDialog($("#orderDialog")));
  $("#subscribeButton").addEventListener("click", () => {
    updateSubscriptionSummary();
    openDialog($("#subscriptionDialog"));
  });
  $("#closeSubscriptionDialog").addEventListener("click", () => closeDialog($("#subscriptionDialog")));
  $$('input[name="plan"], #subFrequency').forEach(el => el.addEventListener("change", updateSubscriptionSummary));

  $("#orderForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const date = form.get("date");
    if (date < new Date().toISOString().slice(0, 10)) { showToast(t("dateUnavailable")); return; }
    const orderLines = cart.map(item => `${item.quantity} x ${products[item.id].name[currentLang]} — ${money(products[item.id].price * item.quantity)}`).join("\n");
    const total = cart.reduce((sum, item) => sum + products[item.id].price * item.quantity, 0);
    const message = [
      t("whatsappIntro"), "", orderLines, `\n${t("subtotal")}: ${money(total)}`, "",
      `${t("nameLabel")}: ${form.get("name")}`, `${t("phoneLabel")}: ${form.get("phone")}`,
      `${t("districtLabel")}: ${form.get("district")}`, `${t("addressLabel")}: ${form.get("address")}`,
      `${t("dateLabel")}: ${date}`, `${t("messageLabel")}: ${form.get("message") || "—"}`
    ].join("\n");
    closeDialog($("#orderDialog"));
    openWhatsApp(message);
  });

  $("#subscriptionForm").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const plan = selectedPlan();
    const date = form.get("date");
    if (date < new Date().toISOString().slice(0, 10)) { showToast(t("dateUnavailable")); return; }
    const frequencyText = plan.frequency === "twice" ? t("twice") : t("monthlyWord");
    const message = [
      t("subscriptionIntro"), "",
      `${t("planSignature")}: ${plan.name}`, `${t("frequencyLabel")}: ${frequencyText}`,
      `${t("subtotal")}: ${money(plan.price)}`, `${t("startDateLabel")}: ${date}`, "",
      `${t("nameLabel")}: ${form.get("name")}`, `${t("phoneLabel")}: ${form.get("phone")}`,
      `${t("districtLabel")}: ${form.get("district")}`, `${t("addressLabel")}: ${form.get("address")}`,
      `${t("notesLabel")}: ${form.get("notes") || "—"}`
    ].join("\n");
    closeDialog($("#subscriptionDialog"));
    openWhatsApp(message);
  });

  $("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();
    const emailInput = $("#newsletterEmail");
    const feedback = $("#newsletterFeedback");
    if (!emailInput.checkValidity()) { feedback.textContent = t("toastEmail"); return; }
    feedback.textContent = t("toastNewsletter");
    emailInput.value = "";
  });

  $("#menuToggle").addEventListener("click", () => {
    const open = $("#mainNav").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(open));
  });
  $$("#mainNav a").forEach(link => link.addEventListener("click", () => {
    $("#mainNav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
  }));
  $("#whatsappLink").href = "https://wa.me/51999999999";
  // Set date inputs to today as a minimum; order handler also validates against past dates.
  $$('input[type="date"]').forEach(input => input.min = new Date().toISOString().slice(0, 10));
});
