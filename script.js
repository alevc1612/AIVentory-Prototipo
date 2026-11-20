const storageKeys = {
  leads: "aiventory_leads",
  tickets: "aiventory_tickets",
  companies: "aiventory_companies",
  analyses: "aiventory_analyses",
  selectedPlan: "aiventory_selected_plan",
};

const inventory = [
  {
    product: "Bebidas de campaña",
    abc: "A",
    stock: "1,248 und.",
    rotation: "Alta",
    risk: "Medio",
    riskClass: "risk-mid",
    action: "Aumentar reposición preventiva",
  },
  {
    product: "Snacks premium",
    abc: "A",
    stock: "864 und.",
    rotation: "Alta",
    risk: "Bajo",
    riskClass: "risk-low",
    action: "Mantener frecuencia actual",
  },
  {
    product: "Útiles escolares",
    abc: "B",
    stock: "512 und.",
    rotation: "Estacional",
    risk: "Alto",
    riskClass: "risk-high",
    action: "Preparar compra por campaña",
  },
  {
    product: "Cuidado personal",
    abc: "B",
    stock: "398 und.",
    rotation: "Media",
    risk: "Medio",
    riskClass: "risk-mid",
    action: "Revisar tendencia semanal",
  },
  {
    product: "Accesorios menores",
    abc: "C",
    stock: "1,920 und.",
    rotation: "Baja",
    risk: "Alto",
    riskClass: "risk-high",
    action: "Activar promoción por sobrestock",
  },
];

const dimensions = [
  {
    key: "rotacion",
    icon: "R",
    title: "Rotación",
    score: 88,
    body:
      "Mide la frecuencia con la que los productos se venden y reponen. Ayuda a diferenciar artículos de alta, media y baja rotación.",
    signal: "Productos A con mayor prioridad de abastecimiento.",
  },
  {
    key: "riesgo",
    icon: "K",
    title: "Riesgo",
    score: 72,
    body:
      "Evalúa la probabilidad de quiebres de stock, exceso de inventario o cambios abruptos en la demanda.",
    signal: "Alertas preventivas para evitar pérdidas y desabastecimiento.",
  },
  {
    key: "estacionalidad",
    icon: "E",
    title: "Estacionalidad",
    score: 81,
    body:
      "Identifica patrones vinculados a campañas, temporadas y comportamiento del consumidor en retail.",
    signal: "Planificación anticipada para campañas escolares y comerciales.",
  },
  {
    key: "servicio",
    icon: "S",
    title: "Clasificación de servicio",
    score: 96,
    body:
      "Clasifica la disponibilidad de productos en niveles óptimo, aceptable y crítico para priorizar acciones.",
    signal: "Servicio dividido por disponibilidad operativa.",
  },
];

const defaultCompanies = [
  {
    id: "company-retail-norte",
    company: "Retail Norte SAC",
    ruc: "20123456789",
    plan: "Retail Pro",
    contact: "María Torres",
    email: "maria@retailnorte.pe",
    phone: "+51 999 111 222",
    users: 8,
    status: "Activo",
    lastUpload: "Hoy, 09:35",
  },
  {
    id: "company-market-sur",
    company: "Market Sur",
    ruc: "20678945123",
    plan: "Enterprise",
    contact: "Diego Ramos",
    email: "diego@marketsur.pe",
    phone: "+51 988 222 333",
    users: 21,
    status: "Activo",
    lastUpload: "Ayer, 17:10",
  },
  {
    id: "company-tiendas-lima",
    company: "Tiendas Lima",
    ruc: "20555111987",
    plan: "Retail Pro",
    contact: "Andrea Salas",
    email: "andrea@tiendaslima.pe",
    phone: "+51 977 333 444",
    users: 12,
    status: "En revisión",
    lastUpload: "Hace 2 días",
  },
];

const platformUsers = [
  {
    user: "cliente@aiventory.pe",
    company: "Retail Norte SAC",
    role: "Cliente",
    status: "Activo",
    lastLogin: "Hoy, 10:12",
  },
  {
    user: "admin@aiventory.pe",
    company: "AIVentory",
    role: "Administrador",
    status: "Activo",
    lastLogin: "Hoy, 08:20",
  },
];

const clientAccounts = [
  {
    id: "client-retail-pro",
    initials: "CL",
    title: "Cliente",
    accountName: "Retail Norte SAC",
    roleLabel: "Cuenta cliente",
    user: "cliente@aiventory.pe",
    password: "cliente2026",
    planKey: null,
  },
];

const roles = {
  cliente: {
    initials: "CR",
    title: "Cliente retail",
    accountName: "Retail Norte SAC",
    roleLabel: "Cuenta cliente",
    eyebrow: "Perfil Cliente",
    user: "cliente@aiventory.pe",
    password: "cliente2026",
    firstPanel: "client-inventory",
    nav: [
      { panel: "client-inventory", label: "Inventarios" },
      { panel: "client-dashboard", label: "Dashboard" },
      { panel: "client-classification", label: "Clasificación" },
      { panel: "client-simulator", label: "Escenarios" },
      { panel: "client-support", label: "Reportar problema" },
      { panel: "account-panel", label: "Mi perfil" },
    ],
    permissions: [
      {
        name: "Dashboards operativos",
        detail: "Visualiza indicadores de inventario, demanda, rotación y riesgo.",
      },
      {
        name: "Carga de archivos",
        detail: "Sube archivos Excel, CSV o PDF con una tabla de inventario para procesar sus datos.",
      },
      {
        name: "Análisis de escenarios",
        detail: "Evalúa variaciones de stock y recibe recomendaciones.",
      },
      {
        name: "Mesa de ayuda",
        detail: "Reporta problemas para que el administrador los atienda.",
      },
    ],
  },
  admin: {
    initials: "AD",
    title: "Administrador",
    accountName: "AIVentory Admin",
    roleLabel: "Gestión de plataforma",
    eyebrow: "Perfil Administrador",
    user: "admin@aiventory.pe",
    password: "admin2026",
    firstPanel: "admin-dashboard",
    nav: [
      { panel: "admin-dashboard", label: "Centro admin" },
      { panel: "admin-companies", label: "Empresas" },
      { panel: "admin-users", label: "Usuarios" },
      { panel: "admin-leads", label: "Solicitudes" },
      { panel: "admin-tickets", label: "Problemas" },
      { panel: "admin-platform", label: "Plataforma" },
      { panel: "account-panel", label: "Mi perfil" },
    ],
    permissions: [
      {
        name: "Control de empresas",
        detail: "Administra empresas, RUC, planes, contactos y estado de servicio.",
      },
      {
        name: "Gestión de usuarios",
        detail: "Supervisa perfiles, roles, accesos y último ingreso.",
      },
      {
        name: "Notificaciones de soporte",
        detail: "Recibe problemas reportados por clientes y los marca como resueltos.",
      },
      {
        name: "Solicitudes comerciales",
        detail: "Revisa empresas interesadas en comprar acceso a AIVentory.",
      },
    ],
  },
};

const panelTitles = {
  "client-dashboard": "Dashboard",
  "client-inventory": "Inventarios",
  "client-classification": "Clasificación logística",
  "client-simulator": "Análisis de stock",
  "client-support": "Reportar problema",
  "admin-dashboard": "Centro administrativo",
  "admin-companies": "Empresas con perfil",
  "admin-users": "Usuarios y accesos",
  "admin-leads": "Solicitudes comerciales",
  "admin-tickets": "Problemas reportados",
  "admin-platform": "Estado de la plataforma",
  "account-panel": "Mi perfil",
};

let currentRole = null;
let selectedInventoryFile = null;
let selectedPeriod = "mensual";
let inventoryView = "all";
let analysisState = null;
let reportGenerated = false;
let selectedPlanKey = "retail-pro-monthly";
let currentClientAccount = null;
let selectedNyleAnalysisId = '';
let pendingLeadDeletionId = null;

const periodLabels = {
  semanal: "semanal",
  mensual: "mensual",
  trimestral: "trimestral",
  anual: "anual",
};

let planCatalog = {};

const productFamilies = [
  "Bebidas de campaña",
  "Snacks premium",
  "Útiles escolares",
  "Cuidado personal",
  "Abarrotes",
  "Limpieza del hogar",
  "Congelados",
  "Panadería",
  "Electro menor",
  "Accesorios menores",
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function todayLabel() {
  return new Date().toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStoredList(key, fallback = []) {
  if (window.localApp) return window.localApp.read(key, fallback);
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setStoredList(key, value) {
  if (window.localApp) { window.localApp.write(key, value); return; }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return false;
  }

  return true;
}

function getLeads() {
  return getStoredList(storageKeys.leads, []);
}

function setLeads(leads) {
  setStoredList(storageKeys.leads, leads);
}

function getTickets() {
  return getStoredList(storageKeys.tickets, []);
}

function setTickets(tickets) {
  setStoredList(storageKeys.tickets, tickets);
}

function getCompanies() {
  let changed = false;
  const normalized = getStoredList(storageKeys.companies, defaultCompanies).map((company, index) => {
    const fallback = defaultCompanies[index] || defaultCompanies[0];
    const id = company.id || fallback.id || `company-${index + 1}`;
    const email = company.email || fallback.email || "contacto@empresa.pe";
    const phone = company.phone || fallback.phone || "+51 999 999 999";

    if (!company.id || !company.email || !company.phone) changed = true;

    return {
      ...fallback,
      ...company,
      id,
      email,
      phone,
    };
  });

  if (changed) setCompanies(normalized);
  return normalized;
}

function setCompanies(companies) {
  setStoredList(storageKeys.companies, companies);
}

function getAnalyses() {
  return getStoredList(storageKeys.analyses, []);
}

function setAnalyses(analyses) {
  setStoredList(storageKeys.analyses, analyses);
}

function resolveSelectedPlanKey({ persist = true, allowDefault = true } = {}) {
  const params = new URLSearchParams(window.location.search);
  const planFromUrl = params.get("plan");
  const stored = localStorage.getItem(storageKeys.selectedPlan);
  const key = planCatalog[planFromUrl]
    ? planFromUrl
    : planCatalog[stored]
      ? stored
      : allowDefault
        ? selectedPlanKey
        : null;

  if (!key) return null;
  selectedPlanKey = key;
  if (persist) localStorage.setItem(storageKeys.selectedPlan, key);
  return key;
}

function getSelectedPlan() {
  const key = resolveSelectedPlanKey();
  return planCatalog[key];
}

function getActiveClientAccount() {
  return currentClientAccount || clientAccounts[0];
}

function getActiveClientPlan() {
  const account = getActiveClientAccount();
  return planCatalog[window.localApp?.user?.planKey || account.planKey] || getSelectedPlan();
}

function planCheckoutUrl(planKey) {
  return `comprar.html?plan=${encodeURIComponent(planKey)}`;
}

function selectPlan(planKey) {
  if (!planCatalog[planKey]) return;

  selectedPlanKey = planKey;
  localStorage.setItem(storageKeys.selectedPlan, planKey);
}

function createLeadFromPurchase(formData, planKey) {
  const plan = planCatalog[planKey] || getSelectedPlan();
  const cardNumber = String(formData.get("cardNumber") || "").replace(/\D/g, "");
  const company = String(formData.get("company") || "").trim();
  const stores = String(formData.get("stores") || "").trim();
  const cardBrand = detectCardBrand(cardNumber);

  return {
    id: makeId("purchase"),
    company,
    ruc: String(formData.get("ruc") || "").trim(),
    contact: String(formData.get("contact") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    plan: plan.name,
    amount: plan.price,
    stores,
    source: "Compra web",
    paymentStatus: "Acceso de prueba · sin cobro",
    cardBrand,
    cardLast4: cardNumber.slice(-4),
    message: `Compra registrada para ${plan.name}. ${plan.offer} Rango de sedes: ${stores}.`,
    date: new Date().toLocaleString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    status: "Nueva",
  };
}

function saveAnalysisToHistory(analysis) {
  const entry = {
    ...analysis,
    id: analysis.id || makeId("analysis"),
    uploadedAt: new Date().toLocaleString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    uploadedAtMs: Date.now(),
  };
  const analyses = [entry, ...getAnalyses().filter((item) => item.id !== entry.id)].slice(0, 8);
  setAnalyses(analyses);
  return entry;
}

function loadAnalysisFromHistory(analysisId) {
  const selected = getAnalyses().find((item) => item.id === analysisId);
  if (!selected) return;

  analysisState = selected;
  reportGenerated = true;
  renderClientAnalysis();
  showToast(`Base cargada: ${selected.sourceName}.`);
}

function deleteAnalysisFromHistory(analysisId) {
  const selected = getAnalyses().find((item) => item.id === analysisId);
  const analyses = getAnalyses().filter((item) => item.id !== analysisId);

  setAnalyses(analyses);

  if (analysisState?.id === analysisId) {
    analysisState = null;
    reportGenerated = false;
    $("#generatedReport")?.classList.add("hidden");
  }

  renderClientAnalysis();
  renderAdminData();
  showToast(selected ? `Base eliminada: ${selected.sourceName}.` : "Base eliminada.");
}

function seededNumber(seed, min, max) {
  const raw = Math.sin(seed * 9301 + 49297) * 233280;
  const normalized = raw - Math.floor(raw);
  return Math.round(min + normalized * (max - min));
}

function classifyABC(index, total) {
  const ratio = index / Math.max(total, 1);
  if (ratio < 0.22) return "A";
  if (ratio < 0.62) return "B";
  return "C";
}

function riskFrom(stock, demand, abc) {
  if (demand === 0) return 'Bajo';
  const coverage = stock / Math.max(demand, 1);
  if (coverage < 0.8 || (abc === "A" && coverage < 1.05)) return "Alto";
  if (coverage < 1.45) return "Medio";
  return "Bajo";
}

function riskClassFrom(risk) {
  if (risk === "Alto") return "risk-high";
  if (risk === "Medio") return "risk-mid";
  return "risk-low";
}

function serviceLevelFrom(score) {
  const value = Number(score) || 0;
  if (value >= 95) return "Óptimo";
  if (value >= 86) return "Aceptable";
  return "Crítico";
}

function serviceClassFrom(level) {
  if (level === "Óptimo") return "green";
  if (level === "Aceptable") return "amber";
  return "clay";
}

function rotationFrom(demand) {
  if (demand >= 780) return "Alta";
  if (demand >= 360) return "Media";
  return "Baja";
}

function actionFrom(record) {
  if (record.risk === "Alto" && record.abc === "A") return "Reponer de inmediato";
  if (record.risk === "Alto") return "Revisar abastecimiento";
  if (record.stock > record.demand * 1.8) return "Evaluar promoción";
  if (record.seasonality >= 80) return "Preparar campaña";
  return "Mantener reposición";
}

function generateSyntheticRecords(count = 1000, seed = 1, sourceName = "Base retail procesada") {
  const total = Math.max(1, count);
  return Array.from({ length: total }, (_, index) => {
    const rank = index + 1;
    const category = productFamilies[index % productFamilies.length];
    const demand = seededNumber(seed + rank, 95, 1280);
    const stock = seededNumber(seed + rank * 3, 45, 1450);
    const seasonality = seededNumber(seed + rank * 5, 20, 98);
    const projected = Math.round(demand * (1 + seasonality / 420));
    const abc = classifyABC(index, total);
    const risk = riskFrom(stock, demand, abc);

    return {
      sku: `SKU-${String(rank).padStart(4, "0")}`,
      product: `${category} ${rank}`,
      category,
      stock,
      demand,
      projected,
      abc,
      rotation: rotationFrom(demand),
      risk,
      riskClass: riskClassFrom(risk),
      seasonality,
      service: Math.max(78, Math.min(99, Math.round((stock / Math.max(projected, 1)) * 92))),
      action: "",
      source: sourceName,
    };
  }).map((record) => ({ ...record, action: actionFrom(record) }));
}

function splitCSV(text, delimiter) {
  const rows = []; let row = [], value = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') { if (quoted && text[i + 1] === '"') { value += '"'; i++; } else quoted = !quoted; }
    else if (char === delimiter && !quoted) { row.push(value.trim()); value = ''; }
    else if ((char === '\n' || char === '\r') && !quoted) { if (char === '\r' && text[i + 1] === '\n') i++; row.push(value.trim()); if (row.some(Boolean)) rows.push(row); row = []; value = ''; }
    else value += char;
  }
  if (quoted) throw new Error('Hay comillas sin cerrar en el CSV.');
  row.push(value.trim()); if (row.some(Boolean)) rows.push(row);
  return rows;
}

function parseCSVText(text, sourceName) {
  const delimiter = text.split(/\r?\n/)[0].includes(';') ? ';' : text.split(/\r?\n/)[0].includes('\t') ? '\t' : ',';
  const lines = splitCSV(text.replace(/^\uFEFF/, ''), delimiter);
  if (lines.length <= 1) return [];
  const headers = lines[0].map((header) => header.trim().toLowerCase());
  const findIndex = (...keys) =>
    headers.findIndex((header) => keys.some((key) => header.includes(key)));

  const productIndex = findIndex("producto", "product", "nombre", "item");
  const categoryIndex = findIndex("categoria", "categoría", "category", "familia");
  const stockIndex = findIndex("stock", "inventario", "existencia");
  const demandIndex = findIndex("demanda", "ventas", "sales", "demand");

  const parsed = lines.slice(1).map((cells, index) => {
    const seed = index + sourceName.length + 1;
    if (stockIndex < 0 || demandIndex < 0 || productIndex < 0) throw new Error('Faltan columnas producto, stock o demanda.');
    const stock = Number(cells[stockIndex]);
    const demand = Number(cells[demandIndex]);
    if (!cells[stockIndex] || !cells[demandIndex] || !Number.isFinite(stock) || !Number.isFinite(demand) || stock < 0 || demand < 0) throw new Error('Stock y demanda deben ser números no negativos.');
    const category = cells[categoryIndex] || 'Sin categoría';
    const projected = Math.round(demand * (1 + seededNumber(seed, 10, 80) / 420));
    const abc = classifyABC(index, lines.length - 1);
    const risk = riskFrom(stock, demand, abc);

    return {
      sku: `SKU-${String(index + 1).padStart(4, "0")}`,
      product: cells[productIndex] || `${category} ${index + 1}`,
      category,
      stock,
      demand,
      projected,
      abc,
      rotation: rotationFrom(demand),
      risk,
      riskClass: riskClassFrom(risk),
      seasonality: seededNumber(seed * 7, 20, 98),
      service: demand === 0 ? 100 : Math.min(100, Math.round(stock / demand * 100)),
      action: "",
      source: sourceName,
    };
  }).sort((a,b) => b.demand - a.demand);
  const totalDemand = parsed.reduce((sum, item) => sum + item.demand, 0);
  let before = 0;
  return parsed.map(record => {
    record.abc = totalDemand === 0 ? 'C' : before / totalDemand < .8 ? 'A' : before / totalDemand < .95 ? 'B' : 'C';
    before += record.demand;
    record.risk = riskFrom(record.stock, record.demand, record.abc);
    record.riskClass = riskClassFrom(record.risk);
    return { ...record, action: actionFrom(record) };
  });
}

function summarizeRecords(records, sourceName = "Base retail procesada") {
  const total = records.length || 1;
  const abcCounts = countBy(records, "abc");
  const riskCounts = countBy(records, "risk");
  const avg = (key) => Math.round(records.reduce((sum, item) => sum + Number(item[key] || 0), 0) / total);
  const critical = records.filter((item) => item.risk === "Alto").length;
  const highStock = records.filter((item) => item.stock > item.demand * 1.7).length;
  const stockouts = records.filter((item) => item.stock < item.demand * 0.85).length;
  const accuracy = Math.max(82, Math.min(96, 92 - Math.round((critical / total) * 20)));

  return {
    sourceName,
    records,
    total,
    abcCounts,
    riskCounts,
    critical,
    overstockReduction: Math.max(18, Math.min(48, Math.round((highStock / total) * 100 + 24))),
    stockoutReduction: Math.max(16, Math.min(42, Math.round((stockouts / total) * 100 + 20))),
    processingReduction: Math.max(35, Math.min(58, 38 + Math.round(total / 400))),
    accuracy,
    rotationScore: avg("demand") > 700 ? 91 : avg("demand") > 430 ? 82 : 70,
    riskScore: Math.max(45, 100 - Math.round((critical / total) * 100)),
    seasonalityScore: avg("seasonality"),
    serviceScore: avg("service"),
    generatedAt: todayLabel(),
  };
}

async function createAnalysisFromFile(file) {
  if (file?.size > 8 * 1024 * 1024) throw new Error('El archivo supera 8 MB.');
  const sourceName = file?.name || "Base retail procesada";
  let records = [];
  let importInfo = '';

  if (file && window.localApp?.upload) {
    const imported = await window.localApp.upload(file);
    const csv = imported.rows.map(row => row.map(cell => '"' + String(cell).replace(/"/g, '""') + '"').join(',')).join('\n');
    records = parseCSVText(csv, sourceName);
    importInfo = imported.sheetName ? `Hoja utilizada: ${imported.sheetName}.` : 'Tabla extraída del PDF.';
  } else if (file && /\.(csv|txt)$/i.test(file.name)) {
    records = parseCSVText(await file.text(), sourceName);
  } else {
    throw new Error('Inicia el servicio para leer archivos Excel o PDF.');
  }

  if (!records.length) throw new Error("El archivo no contiene productos. Revisa las columnas Producto, Stock y Demanda.");

  return { ...summarizeRecords(records, sourceName), importInfo };
}

function ensureAnalysisState() {
  return analysisState;
}

function seedStorage() {
  if (window.localApp) return;
  if (!getStoredList(storageKeys.leads, null)) {
    setLeads([
      {
        id: "lead-demo-1",
        company: "Supermercados Andinos",
        ruc: "20444555777",
        contact: "Lucía Paredes",
        email: "lucia@andinos.pe",
        phone: "+51 987 654 321",
        plan: "Enterprise",
        message: "Necesitamos integrar varias sedes y controlar quiebres de stock.",
        date: "06 jun 2026",
        status: "Nueva",
      },
    ]);
  }

  if (!getStoredList(storageKeys.tickets, null)) {
    setTickets([
      {
        id: "ticket-demo-1",
        company: "Retail Norte SAC",
        user: "cliente@aiventory.pe",
        area: "Carga de archivos",
        priority: "Alta",
        title: "No procesa archivo Excel de inventario",
        description:
          "El archivo queda cargando y no muestra el reporte predictivo.",
        status: "Abierto",
        created: "06 jun 2026",
        resolvedAt: "",
        resolution: "",
      },
      {
        id: "ticket-demo-2",
        company: "Market Sur",
        user: "cliente.enterprise@aiventory.pe",
        area: "Dashboard",
        priority: "Media",
        title: "Solicita revisión de indicadores multisede",
        description:
          "El equipo necesita confirmar la lectura consolidada para tiendas de Lima y Arequipa.",
        status: "En proceso",
        created: "06 jun 2026",
        resolvedAt: "",
        resolution: "Soporte premium revisando permisos de visualización por sede.",
      },
    ]);
  }

  if (!getStoredList(storageKeys.companies, null)) {
    setCompanies(defaultCompanies);
  }
}

function showToast(message) {
  const toast = $("#reportToast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function periodMultiplier() {
  return {
    semanal: 0.24,
    mensual: 1,
    trimestral: 2.85,
    anual: 11.4,
  }[selectedPeriod] || 1;
}

function getPeriodSeries(state) {
  const labels = {
    semanal: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    mensual: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"],
    trimestral: ["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"],
    anual: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"],
  }[selectedPeriod];
  const base = Math.max(90, Math.round(state.records.reduce((sum, item) => sum + item.projected, 0) / state.total));

  return labels.map((label, index) => ({
    label,
    value: Math.round(base * periodMultiplier() * (0.78 + seededNumber(index + state.total, 1, 42) / 100)),
  }));
}

function renderDemandChart() {
  const chart = $("#demandChart");
  const caption = $("#demandChartCaption");
  if (!chart) return;

  const state = ensureAnalysisState();
  if (!state) {
    chart.innerHTML = `<p class="empty-state">Sube una base de datos en Inventarios para generar la predicción de demanda.</p>`;
    if (caption) caption.textContent = "Sin base procesada";
    renderPeriodStats([]);
    return;
  }

  const series = getPeriodSeries(state);
  const max = Math.max(...series.map((item) => item.value), 1);
  const points = series.map((item, index) => {
    const x = 36 + (index * 648) / Math.max(series.length - 1, 1);
    const y = 224 - (item.value / max) * 184;
    return { ...item, x, y };
  });
  const line = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const area = `${line} L700 240 L36 240 Z`;

  chart.innerHTML = `
    <svg viewBox="0 0 720 270" role="img">
      <defs>
        <linearGradient id="lineFillDynamic" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2bc4a4" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#2bc4a4" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path class="area" fill="url(#lineFillDynamic)" d="${area}" />
      <path class="line" d="${line}" />
      ${points
        .map(
          (point) => `
            <g>
              <circle cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="6" />
              <text class="value-label" x="${point.x.toFixed(1)}" y="${Math.max(18, point.y - 14).toFixed(1)}" text-anchor="middle">${point.value.toLocaleString("es-PE")}</text>
              <text x="${point.x.toFixed(1)}" y="258" text-anchor="middle">${point.label}</text>
            </g>
          `
        )
        .join("")}
    </svg>
  `;

  if (caption) {
    caption.textContent = `${state.sourceName} · vista ${periodLabels[selectedPeriod]}`;
  }

  renderPeriodStats(series);
}

function renderPeriodStats(series) {
  const container = $("#periodStats");
  if (!container) return;

  if (!series.length) {
    container.innerHTML = `<p class="empty-state">Sin valores hasta procesar una base de datos.</p>`;
    return;
  }

  const total = series.reduce((sum, item) => sum + item.value, 0);
  const average = Math.round(total / Math.max(series.length, 1));
  const peak = series.reduce((max, item) => (item.value > max.value ? item : max), series[0]);

  container.innerHTML = `
    <article>
      <span>Total ${periodLabels[selectedPeriod]}</span>
      <strong>${total.toLocaleString("es-PE")}</strong>
    </article>
    <article>
      <span>Promedio</span>
      <strong>${average.toLocaleString("es-PE")}</strong>
    </article>
    <article>
      <span>Pico</span>
      <strong>${peak.label}: ${peak.value.toLocaleString("es-PE")}</strong>
    </article>
  `;
}

function renderClientAlerts() {
  const list = $("#clientAlertList");
  if (!list) return;

  const state = ensureAnalysisState();
  if (!state) {
    list.innerHTML = `
      <li>
        <strong>Sin alertas</strong>
        <span>Las alertas críticas aparecerán después de procesar una base de datos.</span>
      </li>
    `;
    return;
  }

  const alerts = state.records
    .filter((item) => item.risk === "Alto" || item.abc === "A")
    .slice(0, 3);

  list.innerHTML = alerts
    .map(
      (item) => `
        <li>
          <strong>${item.risk === "Alto" ? "Riesgo alto" : "Producto crítico ABC A"}</strong>
          <span>${escapeHTML(item.sku)} · ${escapeHTML(item.product)} · ${escapeHTML(item.action)}</span>
        </li>
      `
    )
    .join("");
}

function renderClientDashboard() {
  const state = ensureAnalysisState();
  if (!state) {
    if ($("#clientOverstockKpi")) $("#clientOverstockKpi").textContent = "—";
    if ($("#clientStockoutKpi")) $("#clientStockoutKpi").textContent = "—";
    if ($("#clientProcessingKpi")) $("#clientProcessingKpi").textContent = "—";
    if ($("#clientAccuracyKpi")) $("#clientAccuracyKpi").textContent = "—";
    if ($("#clientOverstockText")) $("#clientOverstockText").textContent = "Sube una base de datos para calcular este indicador.";
    if ($("#clientStockoutText")) $("#clientStockoutText").textContent = "Aún no hay productos analizados.";
    if ($("#clientProcessingText")) $("#clientProcessingText").textContent = "Procesa un archivo para generar métricas.";
    if ($("#clientAccuracyText")) $("#clientAccuracyText").textContent = "Sin predicción hasta cargar una base.";
    renderDemandChart();
    renderClientAlerts();
    return;
  }

  const overstock = state.records.filter(item => item.stock > item.demand * 1.7).length;
  const shortages = state.records.filter(item => item.stock < item.demand).length;
  if ($("#clientOverstockKpi")) $("#clientOverstockKpi").textContent = `${overstock} productos`;
  if ($("#clientStockoutKpi")) $("#clientStockoutKpi").textContent = `${shortages} productos`;
  if ($("#clientProcessingKpi")) $("#clientProcessingKpi").textContent = state.total.toLocaleString("es-PE");
  if ($("#clientAccuracyKpi")) $("#clientAccuracyKpi").textContent = `${state.serviceScore}%`;
  if ($("#clientOverstockText")) $("#clientOverstockText").textContent = `Calculado con ${state.total.toLocaleString("es-PE")} registros.`;
  if ($("#clientStockoutText")) $("#clientStockoutText").textContent = "Stock inferior a la demanda registrada.";
  if ($("#clientProcessingText")) $("#clientProcessingText").textContent = `Análisis automatizado para ${state.sourceName}.`;
  if ($("#clientAccuracyText")) $("#clientAccuracyText").textContent = "Cobertura de la demanda con el stock registrado.";

  renderDemandChart();
  renderClientAlerts();
}

function syncPeriodButtons() {
  $$("[data-period]").forEach((button) => {
    button.classList.toggle("active", button.dataset.period === selectedPeriod);
  });
}

function renderReportFromAnalysis() {
  const state = ensureAnalysisState();
  const report = $("#generatedReport");
  if (!report) return;
  if (!state) {
    report.classList.add("hidden");
    return;
  }

  $("#reportTitle").textContent = `Reporte de ${state.sourceName}`;
  $("#reportDate").textContent = `Procesado ${state.generatedAt}`;
  $("#reportKpis").innerHTML = `
    <div><span>Registros procesados</span><strong>${state.total.toLocaleString("es-PE")}</strong></div>
    <div><span>Productos críticos</span><strong>${state.critical.toLocaleString("es-PE")}</strong></div>
    <div><span>Disponibilidad estimada</span><strong>${state.serviceScore}%</strong></div>
    <div><span>Stock registrado</span><strong>${state.records.reduce((sum, item) => sum + item.stock, 0).toLocaleString("es-PE")} und.</strong></div>
  `;

  const total = Math.max(state.total, 1);
  $("#abcStackChart").innerHTML = ["A", "B", "C"]
    .map((abc) => {
      const count = state.abcCounts[abc] || 0;
      if (!count) return '';
      const percent = Math.round((count / total) * 1000) / 10;
      return `<span class="stack-${abc.toLowerCase()}" style="--value: ${percent}%">${abc} · ${percent}%</span>`;
    })
    .join("");

  renderHorizontalChart("#riskChart", [
    { label: "Riesgo alto", value: state.riskCounts.Alto || 0, color: "clay" },
    { label: "Riesgo medio", value: state.riskCounts.Medio || 0, color: "amber" },
    { label: "Riesgo bajo", value: state.riskCounts.Bajo || 0, color: "green" },
  ]);

  $("#reportRecommendations").innerHTML = `
    <article>
      <strong>Reponer productos ABC A con riesgo alto</strong>
      <span>La base ${escapeHTML(state.sourceName)} tiene ${state.critical.toLocaleString("es-PE")} productos críticos que requieren atención prioritaria.</span>
    </article>
    <article>
      <strong>Separar decisiones por categoría ABC</strong>
      <span>A: control diario; B: control periódico; C: control básico y estrategias contra sobrestock.</span>
    </article>
  `;

  report.classList.remove("hidden");
}

function renderAnalysisHistory() {
  const inventoryList = $("#inventoryHistoryList");
  const classificationList = $("#classificationHistoryList");
  const analyses = getAnalyses();

  const content = analyses.length
    ? analyses
        .map(
          (analysis) => `
            <button class="history-item ${analysisState?.id === analysis.id ? "active" : ""}" type="button" data-load-analysis="${analysis.id}">
              <span>${escapeHTML(analysis.sourceName)}</span>
              <strong>${analysis.total.toLocaleString("es-PE")} registros · ${escapeHTML(analysis.uploadedAt || analysis.generatedAt)}</strong>
              <small>ABC A: ${(analysis.abcCounts?.A || 0).toLocaleString("es-PE")} · Riesgo alto: ${(analysis.riskCounts?.Alto || 0).toLocaleString("es-PE")} · Disponibilidad: ${analysis.serviceScore}%</small>
            </button>
            <button class="danger-button history-delete-button" type="button" data-delete-analysis="${analysis.id}">
              Eliminar base
            </button>
          `
        )
        .join("")
    : `<p class="empty-state">Aún no hay bases subidas. Procesa una base para crear el historial.</p>`;

  if (inventoryList) inventoryList.innerHTML = content;
  if (classificationList) classificationList.innerHTML = content;
}

function dimensionVisual(key, state) {
  if (key === "rotacion") {
    const counts = countBy(state.records, "rotation");
    return `
      <div class="dimension-chart">
        ${["Alta", "Media", "Baja"]
          .map((label) => `<div><span>${label}</span><i style="--value: ${Math.max(8, Math.round(((counts[label] || 0) / state.total) * 100))}%"></i><strong>${(counts[label] || 0).toLocaleString("es-PE")}</strong></div>`)
          .join("")}
      </div>
    `;
  }

  if (key === "riesgo") {
    return `
      <div class="dimension-chart">
        ${[
          ["Alto", "clay"],
          ["Medio", "amber"],
          ["Bajo", "green"],
        ]
          .map(([label, color]) => `<div class="${color}"><span>${label}</span><i style="--value: ${Math.max(8, Math.round(((state.riskCounts[label] || 0) / state.total) * 100))}%"></i><strong>${(state.riskCounts[label] || 0).toLocaleString("es-PE")}</strong></div>`)
          .join("")}
      </div>
    `;
  }

  if (key === "estacionalidad") {
    const buckets = [
      ["Baja", state.records.filter((item) => item.seasonality < 45).length],
      ["Media", state.records.filter((item) => item.seasonality >= 45 && item.seasonality < 75).length],
      ["Alta", state.records.filter((item) => item.seasonality >= 75).length],
    ];
    return `
      <div class="mini-column-chart">
        ${buckets
          .map(([label, value]) => `<div><i style="--height: ${Math.max(12, Math.round((value / state.total) * 100))}%"></i><strong>${value.toLocaleString("es-PE")}</strong><span>${label}</span></div>`)
          .join("")}
      </div>
    `;
  }

  const levels = ["Óptimo", "Aceptable", "Crítico"];
  const counts = levels.reduce((acc, level) => ({ ...acc, [level]: 0 }), {});
  state.records.forEach((item) => {
    counts[serviceLevelFrom(item.service)] += 1;
  });

  return `
    <div class="dimension-chart service-level-chart">
      ${levels
        .map((label) => `<div class="${serviceClassFrom(label)}"><span>${label}</span><i style="--value: ${Math.max(8, Math.round(((counts[label] || 0) / state.total) * 100))}%"></i><strong>${(counts[label] || 0).toLocaleString("es-PE")}</strong></div>`)
        .join("")}
    </div>
  `;
}

function renderClientAnalysis() {
  renderClientDashboard();
  renderInventory();
  renderDimensions();
  if (reportGenerated) renderReportFromAnalysis();
  renderAnalysisHistory();
  updateScenario($("#stockRange")?.value || 0);
  renderNyleSources();
  syncPeriodButtons();
}

function renderInventory() {
  const rows = $("#inventoryRows");
  const head = $("#inventoryHead");
  const summary = $("#categorySummary");
  const status = $("#inventoryStatusPill");
  if (!rows) return;

  const state = ensureAnalysisState();
  if (!state) {
    if (status) status.textContent = "Sin base procesada";
    summary?.classList.add("hidden");
    if (head) {
      head.innerHTML = `
        <tr>
          <th>Estado</th>
          <th>Acción requerida</th>
        </tr>
      `;
    }
    rows.innerHTML = `
      <tr>
        <td>Sin datos</td>
        <td>Sube una base de datos y presiona “Procesar archivo y generar reporte”.</td>
      </tr>
    `;
    return;
  }

  const records = state.records;

  if (status) {
    status.textContent = `${state.total.toLocaleString("es-PE")} registros de ${state.sourceName}`;
  }

  if (inventoryView === "classified") {
    if (summary) {
      summary.classList.remove("hidden");
      summary.innerHTML = ["A", "B", "C"]
        .map((abc) => {
          const count = state.abcCounts[abc] || 0;
          const description =
            abc === "A"
              ? "Productos críticos de mayor impacto. Requieren seguimiento diario."
              : abc === "B"
                ? "Productos de importancia media. Requieren control periódico."
                : "Productos de menor prioridad. Requieren control básico y revisión de sobrestock.";

          return `
            <article>
              <span class="abc-tag abc-${abc.toLowerCase()}">Categoría ${abc}</span>
              <strong>${count.toLocaleString("es-PE")} productos</strong>
              <p>${description}</p>
            </article>
          `;
        })
        .join("");
    }

    if (head) {
      head.innerHTML = `
        <tr>
          <th>Categoría ABC</th>
          <th>Productos</th>
          <th>Riesgo alto</th>
          <th>Rotación dominante</th>
          <th>Acción recomendada</th>
        </tr>
      `;
    }

    rows.innerHTML = ["A", "B", "C"]
      .map((abc) => {
        const group = records.filter((item) => item.abc === abc);
        const highRisk = group.filter((item) => item.risk === "Alto").length;
        const rotations = countBy(group, "rotation");
        const dominantRotation = Object.entries(rotations).sort((a, b) => b[1] - a[1])[0]?.[0] || "Sin datos";
        const action =
          abc === "A"
            ? "Priorizar reposición, alertas y revisión diaria."
            : abc === "B"
              ? "Mantener control semanal y ajustar compras."
              : "Optimizar promociones y evitar capital inmovilizado.";

        return `
          <tr>
            <td><span class="abc-tag abc-${abc.toLowerCase()}">ABC ${abc}</span></td>
            <td>${group.length.toLocaleString("es-PE")}</td>
            <td>${highRisk.toLocaleString("es-PE")}</td>
            <td>${dominantRotation}</td>
            <td>${action}</td>
          </tr>
        `;
      })
      .join("");
    return;
  }

  summary?.classList.add("hidden");

  if (head) {
    head.innerHTML = `
      <tr>
        <th>SKU</th>
        <th>Producto</th>
        <th>Familia</th>
        <th>Categoría ABC</th>
        <th>Stock</th>
        <th>Demanda</th>
        <th>Proyección</th>
        <th>Rotación</th>
        <th>Riesgo</th>
        <th>Acción sugerida</th>
      </tr>
    `;
  }

  rows.innerHTML = records
    .map(
      (item) => `
        <tr>
          <td>${escapeHTML(item.sku)}</td>
          <td>${escapeHTML(item.product)}</td>
          <td>${escapeHTML(item.category)}</td>
          <td><span class="abc-tag abc-${item.abc.toLowerCase()}">ABC ${item.abc}</span></td>
          <td>${Number(item.stock).toLocaleString("es-PE")}</td>
          <td>${Number(item.demand).toLocaleString("es-PE")}</td>
          <td>${Number(item.projected).toLocaleString("es-PE")}</td>
          <td>${item.rotation}</td>
          <td><span class="risk-tag ${item.riskClass}">${item.risk}</span></td>
          <td>${item.action}</td>
        </tr>
      `
    )
    .join("");
}

function renderDimensions(filter = "todos") {
  const grid = $("#dimensionGrid");
  if (!grid) return;

  const state = ensureAnalysisState();
  const source = $("#classificationSource");
  if (!state) {
    if (source) {
      source.textContent = "Sube una base de datos para ver la clasificación";
    }
    grid.innerHTML = `<p class="empty-state">La clasificación logística aparecerá después de procesar una base en Inventarios.</p>`;
    return;
  }

  const dynamicDimensions = dimensions.map((dimension) => {
    const scoreMap = {
      rotacion: state.rotationScore,
      riesgo: state.riskScore,
      estacionalidad: state.seasonalityScore,
      servicio: state.serviceScore,
    };
    const signalMap = {
      rotacion: `${state.abcCounts.A || 0} productos A requieren prioridad de abastecimiento.`,
      riesgo: `${state.critical} productos presentan riesgo alto en ${state.sourceName}.`,
      estacionalidad: `Patrones de campaña recalculados para vista ${periodLabels[selectedPeriod]}.`,
      servicio: `Servicio ${serviceLevelFrom(state.serviceScore).toLowerCase()} con promedio de ${state.serviceScore}%.`,
    };

    return {
      ...dimension,
      score: scoreMap[dimension.key],
      signal: signalMap[dimension.key],
    };
  });

  if (source) {
    source.textContent = `Clasificación basada en ${state.sourceName} (${state.total.toLocaleString("es-PE")} registros)`;
  }

  grid.innerHTML = dynamicDimensions
    .map((dimension) => {
      const hidden = filter !== "todos" && filter !== dimension.key ? "hidden" : "";

      return `
        <article class="dimension-card ${hidden} ${filter !== "todos" ? "focused" : ""}" data-dimension="${dimension.key}">
          <span class="dimension-icon">${dimension.icon}</span>
          <h3>${dimension.title}</h3>
          <p>${dimension.body}</p>
          <strong>${escapeHTML(dimension.signal)}</strong>
          ${dimensionVisual(dimension.key, state)}
          <meter min="0" max="100" value="${dimension.score}">${dimension.score}%</meter>
        </article>
      `;
    })
    .join("");
}

function renderRole(roleKey = "cliente") {
  const role = roles[roleKey];
  const detail = $("#roleDetail");
  if (!detail) return;
  const account = getActiveClientAccount();
  const plan = roleKey === "cliente" ? getActiveClientPlan() : getSelectedPlan();
  const planBlock =
    roleKey === "cliente" && window.localApp?.user?.subscription
      ? `
        <div class="profile-plan-box">
          <span class="chip success">${window.localApp?.user?.subscription ? "Acceso de prueba activo" : "Sin suscripción"}</span>
          <h3>${plan.name}</h3>
          <p><strong>${plan.price}</strong></p>
          <p>${plan.offer}</p>
          <a class="primary-action" href="planes.html">Gestionar suscripción</a>
          <div class="plan-capacity-grid" aria-label="Capacidades del plan">
            ${plan.capacity.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <ul>
            ${plan.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
          </ul>
        </div>
      `
      : "";

  detail.innerHTML = `
    <div class="profile-detail-grid">
      <div class="profile-hero">
        <span class="avatar-large">${roleKey === "cliente" ? account.initials : role.initials}</span>
        <h3>${roleKey === "cliente" ? "Cliente" : role.title}</h3>
        <p>${roleKey === "cliente" ? "Cuenta de cliente" : role.roleLabel}</p>
        <p><strong>Usuario:</strong> ${roleKey === "cliente" ? account.user : role.user}</p>
      </div>
      <ul class="permission-list">
        ${role.permissions
          .map(
            (permission) => `
              <li>
                <strong>${permission.name}</strong>
                <span>${permission.detail}</span>
              </li>
            `
          )
          .join("")}
      </ul>
      ${planBlock}
    </div>
  `;
}

function renderSideNav(roleKey) {
  const nav = $("#roleNav");
  if (!nav) return;

  nav.innerHTML = roles[roleKey].nav
    .map(
      (item) => `
        <button class="side-link" data-panel="${item.panel}">
          <span>${item.label}</span>
        </button>
      `
    )
    .join("");
}

function updateWorkspace(roleKey) {
  const role = roles[roleKey];
  const account = getActiveClientAccount();
  const plan = getActiveClientPlan();

  $("#workspaceAvatar").textContent = roleKey === "cliente" ? account.initials : role.initials;
  $("#workspaceName").textContent = roleKey === "cliente" ? account.accountName : role.accountName;
  $("#workspaceRole").textContent = roleKey === "cliente" ? "Cuenta cliente" : role.roleLabel;
  $("#workspaceEyebrow").textContent = role.eyebrow;
  $("#generateReport")?.classList.toggle('hidden', roleKey !== 'cliente');

  renderSideNav(roleKey);
  renderRole(roleKey);
  renderClientAnalysis();
  renderAdminData();
  renderClientTickets();
  updateNotificationCount();
  showPanel(role.firstPanel);
}

function showPanel(panelName) {
  $$("[data-panel-content]").forEach((panel) => {
    const roleContent = panel.dataset.roleContent;
    const allowed = !roleContent || roleContent === currentRole;
    panel.classList.toggle("active", allowed && panel.dataset.panelContent === panelName);
  });

  $$(".side-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.panel === panelName);
  });

  const title = $("#panel-title");
  if (title) title.textContent = panelTitles[panelName] || "Panel";
}

function unlockWorkspace(roleKey) {
  currentRole = roleKey;
  const workspace = $("#workspace");
  const gate = $("#acceso");
  const logoutButton = $("#logoutButton");

  updateWorkspace(roleKey);
  workspace.classList.remove("locked");
  workspace.classList.add("unlocked");
  gate?.classList.add("hidden");
  logoutButton?.classList.remove("hidden");
  workspace.scrollIntoView({ behavior: "smooth", block: "start" });
}

function lockWorkspace() {
  toggleNotifications(false);
  $("#notificationDrawerList")?.replaceChildren();
  currentRole = null;
  currentClientAccount = null;
  const workspace = $("#workspace");
  const gate = $("#acceso");
  const logoutButton = $("#logoutButton");

  workspace?.classList.add("locked");
  workspace?.classList.remove("unlocked");
  gate?.classList.remove("hidden");
  logoutButton?.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function handleLogin(event) {
  event.preventDefault();
  if (window.localApp) {
    const form = event.currentTarget;
    const status = $(".login-status", form);
    try {
      await window.localApp.login(Object.fromEntries(new FormData(form)), form.dataset.loginRole);
      status.textContent = "Acceso validado.";
      activateLocalSession();
      const next = new URLSearchParams(location.search).get('next');
      if (next && /^comprar\.html\?plan=[a-z-]+$/.test(next)) location.href = next;
    } catch (error) { status.textContent = error.message; status.classList.add('error'); }
    return;
  }

  const form = event.currentTarget;
  const roleKey = form.dataset.loginRole;
  const role = roles[roleKey];
  const formData = new FormData(form);
  const user = String(formData.get("user") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "").trim();
  const status = $(".login-status", form);
  const clientAccount =
    roleKey === "cliente"
      ? clientAccounts.find((account) => account.user === user && account.password === password)
      : null;
  const isValid =
    roleKey === "cliente" ? Boolean(clientAccount) : user === role.user && password === role.password;

  status.classList.toggle("error", !isValid);

  if (!isValid) {
    status.textContent = "Usuario o contraseña incorrectos. Usa las credenciales demo.";
    return;
  }

  if (clientAccount) {
    currentClientAccount = clientAccount;
    selectedPlanKey = clientAccount.planKey;
    localStorage.setItem(storageKeys.selectedPlan, clientAccount.planKey);
  }

  status.textContent = "Acceso validado. Abriendo perfil privado...";
  unlockWorkspace(roleKey);
  showToast(`Bienvenido: ${clientAccount?.title || role.title}.`);
}

function setScenarioBar(barSelector, metricSelector, value, suffix = "%") {
  const clamped = Math.max(0, Math.min(100, Math.round(Number(value) || 0)));
  const bar = $(barSelector);
  const metric = $(metricSelector);

  if (bar) bar.style.setProperty("--value", `${clamped}%`);
  if (metric) metric.textContent = `${clamped}${suffix}`;
}

function updateScenario(value) {
  if (!analysisState) {
    ["stockValue", "riskValue", "serviceValue", "actionValue"].forEach(id => { if ($(`#${id}`)) $(`#${id}`).textContent = "Sin datos"; });
    if ($("#stockMessage")) $("#stockMessage").textContent = "Procesa una base de datos para evaluar cambios de stock.";
    if ($("#stockRange")) $("#stockRange").disabled = true;
    ["Stock", "Risk", "Service", "Overstock"].forEach(key => {
      setScenarioBar(`#scenario${key}Bar`, `#scenario${key}Metric`, 0);
      if ($(`#scenario${key}Metric`)) $(`#scenario${key}Metric`).textContent = "Sin datos";
    });
    return;
  }
  if ($("#stockRange")) $("#stockRange").disabled = false;
  const stockValue = $("#stockValue");
  const stockMessage = $("#stockMessage");
  const riskValue = $("#riskValue");
  const serviceValue = $("#serviceValue");
  const actionValue = $("#actionValue");

  if (!stockValue || !stockMessage || !riskValue || !serviceValue || !actionValue) return;

  const numeric = Number(value);
  const formatted = numeric > 0 ? `+${numeric}%` : `${numeric}%`;
  stockValue.textContent = formatted;
  let scenario;

  if (numeric <= -60) {
    scenario = {
      message: "El inventario cae de forma crítica. Existe riesgo severo de quiebre y pérdida de ventas.",
      risk: "Crítico",
      service: 72,
      action: "Compra urgente",
      stock: 18,
      riskScore: 96,
      overstock: 2,
      caption: "Riesgo crítico por falta de stock",
    };
  } else if (numeric <= -20) {
    scenario = {
      message: "El stock cae por debajo del punto seguro. Existe riesgo de quiebre en productos de alta rotación.",
      risk: "Alto",
      service: 88,
      action: "Reponer de inmediato",
      stock: 38,
      riskScore: 74,
      overstock: 5,
      caption: "Reposición recomendada",
    };
  } else if (numeric < 5) {
    scenario = {
      message: "El inventario está ajustado. Conviene revisar demanda histórica antes de una campaña.",
      risk: "Medio",
      service: 93,
      action: "Programar reposición",
      stock: 52,
      riskScore: 48,
      overstock: 10,
      caption: "Inventario ajustado",
    };
  } else if (numeric <= 30) {
    scenario = {
      message: "Inventario saludable para campaña activa. La disponibilidad se mantiene por encima de la meta.",
      risk: "Bajo",
      service: 96,
      action: "Mantener reposición",
      stock: 68,
      riskScore: 22,
      overstock: 18,
      caption: "Escenario saludable",
    };
  } else if (numeric <= 65) {
    scenario = {
      message: "El incremento puede generar sobrestock. Se recomienda evaluar promociones o redistribución.",
      risk: "Medio",
      service: 98,
      action: "Evitar compra extra",
      stock: 84,
      riskScore: 42,
      overstock: 58,
      caption: "Vigilar sobrestock",
    };
  } else {
    scenario = {
      message: "El exceso de inventario es alto. Puede inmovilizar capital y elevar costos de almacenamiento.",
      risk: "Alto",
      service: 99,
      action: "Reducir compra",
      stock: 96,
      riskScore: 65,
      overstock: 92,
      caption: "Sobrestock elevado",
    };
  }

  const rows = analysisState.records;
  const factor = Math.max(0, 1 + numeric / 100);
  const count = Math.max(rows.length, 1);
  const stockouts = rows.filter(r => r.stock * factor < r.demand).length;
  const excess = rows.filter(r => r.stock * factor > r.demand * 1.7).length;
  const availability = Math.round(rows.reduce((sum, r) => sum + (r.demand === 0 ? 1 : Math.min(1, r.stock * factor / r.demand)), 0) / count * 100);
  scenario = { message: `Sobre ${rows.length} productos: ${stockouts} con stock inferior a demanda y ${excess} con exceso (más de 1,7 veces la demanda).`, risk: stockouts / count > .3 ? 'Alto' : stockouts ? 'Medio' : 'Bajo', service: availability, action: stockouts ? 'Revisar reposición' : excess ? 'Evaluar redistribución' : 'Mantener seguimiento', stock: Math.min(100, Math.round(factor * 50)), riskScore: Math.round(stockouts / count * 100), overstock: Math.round(excess / count * 100), caption: `Análisis sobre ${analysisState.sourceName} · variación ${formatted}` };
  stockMessage.textContent = scenario.message;
  riskValue.textContent = scenario.risk;
  serviceValue.textContent = `${scenario.service}%`;
  actionValue.textContent = scenario.action;
  $("#scenarioChartCaption").textContent = scenario.caption;
  setScenarioBar("#scenarioStockBar", "#scenarioStockMetric", scenario.stock);
  setScenarioBar("#scenarioRiskBar", "#scenarioRiskMetric", scenario.riskScore);
  setScenarioBar("#scenarioServiceBar", "#scenarioServiceMetric", scenario.service);
  setScenarioBar("#scenarioOverstockBar", "#scenarioOverstockMetric", scenario.overstock);
}

async function handleLeadSubmit(event) {
  event.preventDefault();
  if (window.localApp) {
    const form = event.currentTarget;
    try { await window.localApp.api('/api/contact', { method: 'POST', body: Object.fromEntries(new FormData(form)) }); $("#leadStatus").textContent = "Solicitud guardada en este navegador. Puedes verla desde el perfil Administrador de este equipo."; form.reset(); }
    catch (error) { $("#leadStatus").textContent = error.message; }
    return;
  }

  const form = event.currentTarget;
  const formData = new FormData(form);
  const lead = {
    id: makeId("lead"),
    company: String(formData.get("company") || "").trim(),
    ruc: String(formData.get("ruc") || "").trim(),
    contact: String(formData.get("contact") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    plan: String(formData.get("plan") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    date: todayLabel(),
    status: "Nueva",
  };
  const leads = [lead, ...getLeads()];

  setLeads(leads);
  form.reset();
  $("#leadStatus").textContent =
    "Solicitud enviada. El equipo comercial podrá verla desde el perfil Administrador.";
}

function renderCheckoutPlan() {
  const planKey = resolveSelectedPlanKey();
  const plan = planCatalog[planKey];
  if (!plan) return;

  $("#checkoutPlanKey").value = planKey;
  $("#checkoutPlanName").textContent = plan.name;
  $("#checkoutPlanPrice").textContent = plan.price;
  $("#checkoutPlanOffer").textContent = plan.offer;
  $("#checkoutTotal").textContent = plan.totalLabel;
  $("#checkoutTotalNote").textContent = plan.paymentNote;
  $("#checkoutPlanCapacity").innerHTML = plan.capacity.map((item) => `<span>${escapeHTML(item)}</span>`).join("");
  $("#checkoutPlanBenefits").innerHTML = plan.benefits.map(item => `<li>${escapeHTML(item)}</li>`).join("");
}

function formatCardNumber(value) {
  return String(value || "")
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function detectCardBrand(cardNumber) {
  const value = String(cardNumber || "");
  if (/^4\d{12,18}$/.test(value)) return "Visa";
  if (/^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7[01]\d{12}|720\d{12}))$/.test(value)) return "Mastercard";
  if (/^3[47]\d{13}$/.test(value)) return "American Express";
  if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(value)) return "Diners Club";
  return "No reconocida";
}

function passesLuhn(cardNumber) {
  const digits = String(cardNumber || "").replace(/\D/g, "");
  if (digits.length < 13 || digits.length > 19) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let digit = Number(digits[index]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function hasValidExpiry(expiry) {
  const match = /^(\d{2})\/(\d{2})$/.exec(String(expiry || "").trim());
  if (!match) return false;

  const month = Number(match[1]);
  const year = 2000 + Number(match[2]);
  if (month < 1 || month > 12) return false;

  const lastDayOfMonth = new Date(year, month, 0, 23, 59, 59);
  return lastDayOfMonth >= new Date();
}

function updateCardPreview(form) {
  const cardName = String(form.elements.cardName?.value || "").trim();
  const cardNumber = formatCardNumber(form.elements.cardNumber?.value || "");
  const expiry = String(form.elements.expiry?.value || "").trim();

  if (form.elements.cardNumber) form.elements.cardNumber.value = cardNumber;
  $("#cardPreviewName").textContent = cardName || "EMPRESA RETAIL";
  $("#cardPreviewNumber").textContent = cardNumber || "•••• •••• •••• ••••";
  $("#cardPreviewExpiry").textContent = expiry || "MM/AA";
}

async function handlePurchaseSubmit(event) {
  event.preventDefault();
  if (window.localApp) {
    const form = event.currentTarget;
    const button = $("[type=submit]", form);
    button.disabled = true;
    try {
      await window.localApp.api('/api/checkout', { method: 'POST', body: Object.fromEntries(new FormData(form)) });
      await window.localApp.reload();
      $("#purchaseStatus").textContent = "Acceso de prueba activado. Sin cobro. El administrador recibió la notificación. Ya puedes entrar al portal.";
      form.reset(); renderCheckoutPlan(); updateCardPreview(form);
    } catch (error) { $("#purchaseStatus").textContent = error.message; }
    finally { button.disabled = false; }
    return;
  }

  $("#purchaseStatus").textContent = "Inicia el servicio para activar tu acceso de prueba.";
}

function handleTicketSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const account = getActiveClientAccount();
  const ticket = {
    id: makeId("ticket"),
    company: account.accountName,
    user: account.user,
    area: String(formData.get("area") || "").trim(),
    priority: String(formData.get("priority") || "").trim(),
    title: String(formData.get("title") || "").trim(),
    description: String(formData.get("description") || "").trim(),
    status: "Abierto",
    created: todayLabel(),
    resolvedAt: "",
    resolution: "",
  };
  const tickets = [ticket, ...getTickets()];

  setTickets(tickets);
  form.reset();
  $("#ticketStatus").textContent =
    "Problema enviado. El administrador ya tiene una notificación pendiente.";
  renderClientTickets();
  renderAdminData();
  updateNotificationCount();
  showToast("Problema reportado al administrador.");
}

function renderClientTickets() {
  const list = $("#clientTicketList");
  if (!list) return;

  const account = getActiveClientAccount();
  const tickets = getTickets().filter((ticket) => ticket.user === account.user);

  if (!tickets.length) {
    list.innerHTML = `<p class="empty-state">Aún no tienes problemas reportados.</p>`;
    return;
  }

  list.innerHTML = tickets.map(ticket => renderTicketCard(ticket, false)).join("");
}

function renderAdminData() {
  renderAdminCompanies();
  renderAdminUsers();
  renderAdminLeads();
  renderAdminTickets();
  renderAdminStats();
  renderAdminNotifications();
  renderAdminCharts();
}

function renderAdminCompanies() {
  const rows = $("#adminCompaniesRows");
  if (!rows) return;

  rows.innerHTML = getCompanies()
    .map(
      (company) => `
        <tr>
          <td>${escapeHTML(company.company)}</td>
          <td>${escapeHTML(company.ruc)}</td>
          <td>${escapeHTML(company.plan)}</td>
          <td>${escapeHTML(company.contact)}</td>
          <td>${escapeHTML(company.email)}</td>
          <td>${escapeHTML(company.phone)}</td>
          <td>${company.users}</td>
          <td><span class="risk-tag ${company.status === "Activo" ? "risk-low" : "risk-mid"}">${company.status}</span></td>
          <td>${escapeHTML(company.lastUpload)}</td>
          <td><button class="ghost-button small-button" data-edit-company="${company.id}">Editar</button></td>
        </tr>
      `
    )
    .join("");
}

function renderAdminUsers() {
  const rows = $("#adminUsersRows");
  if (!rows) return;

  rows.innerHTML = platformUsers
    .map(
      (user) => `
        <tr>
          <td>${user.user}</td>
          <td>${user.company}</td>
          <td>${user.role}</td>
          <td><span class="risk-tag risk-low">${user.status}</span></td>
          <td>${user.lastLogin}</td>
        </tr>
      `
    )
    .join("");
}

function renderAdminLeads() {
  const pendingList = $("#adminPendingLeadsList");
  const contactedList = $("#adminContactedLeadsList");
  const historyList = $("#adminLeadHistoryList");
  if (!pendingList && !contactedList && !historyList) return;

  const leads = getLeads();
  const pending = leads.filter((lead) => lead.status !== "Contactada");
  const contacted = leads.filter((lead) => lead.status === "Contactada");

  const renderLeadCards = (items, emptyText, mode = "pending") =>
    items.length
      ? items
          .map(
            (lead) => `
              <article class="lead-card ${mode}">
                <div class="lead-summary">
                  <span class="chip">${escapeHTML(lead.status)}</span>
                  <h3>${escapeHTML(lead.company)}</h3>
                  <p>${escapeHTML(lead.message)}</p>
                </div>
                <dl>
                  <div><dt>RUC</dt><dd>${escapeHTML(lead.ruc)}</dd></div>
                  <div><dt>Contacto</dt><dd>${escapeHTML(lead.contact)}</dd></div>
                  <div><dt>Correo</dt><dd>${escapeHTML(lead.email)}</dd></div>
                  <div><dt>Teléfono</dt><dd>${escapeHTML(lead.phone)}</dd></div>
                  <div><dt>Plan</dt><dd>${escapeHTML(lead.plan)}</dd></div>
                  ${lead.amount ? `<div><dt>Monto</dt><dd>${escapeHTML(lead.amount)}</dd></div>` : ""}
                  ${lead.stores ? `<div><dt>Sedes</dt><dd>${escapeHTML(lead.stores)}</dd></div>` : ""}
                  ${lead.source ? `<div><dt>Origen</dt><dd>${escapeHTML(lead.source)}</dd></div>` : ""}
                  ${lead.cardBrand ? `<div><dt>Marca</dt><dd>${escapeHTML(lead.cardBrand)}</dd></div>` : ""}
                  ${lead.cardLast4 ? `<div><dt>Tarjeta</dt><dd>Terminada en ${escapeHTML(lead.cardLast4)}</dd></div>` : ""}
                  ${lead.paymentStatus ? `<div><dt>Pago</dt><dd>${escapeHTML(lead.paymentStatus.replace('Activación simulada', 'Acceso de prueba'))}</dd></div>` : ""}
                  <div><dt>Solicitud</dt><dd>${escapeHTML(lead.date)}</dd></div>
                  ${lead.contactedAt ? `<div><dt>Contactada</dt><dd>${escapeHTML(lead.contactedAt)}</dd></div>` : ""}
                </dl>
                <div class="lead-actions">
                  <a class="primary-action small" href="${whatsappHref(lead.phone, lead.company, lead.plan)}" target="_blank" rel="noopener">
                    Escribir por WhatsApp
                  </a>
                  ${
                    lead.status !== "Contactada"
                      ? `<button class="ghost-button" data-contact-lead="${lead.id}">Marcar contactada</button>`
                      : `
                        <span class="status-pill">Ya contactada</span>
                        <button class="danger-button small-button" data-request-delete-lead="${lead.id}">Eliminar solicitud</button>
                      `
                  }
                  ${
                    pendingLeadDeletionId === lead.id
                      ? `
                        <div class="delete-confirmation">
                          <strong>¿Estás seguro que deseas eliminar?</strong>
                          <button class="danger-button small-button" data-confirm-delete-lead="${lead.id}">Sí, eliminar</button>
                          <button class="ghost-button small-button" data-cancel-delete-lead type="button">No, cancelar</button>
                        </div>
                      `
                      : ""
                  }
                </div>
              </article>
            `
          )
          .join("")
      : `<p class="empty-state">${emptyText}</p>`;

  if (pendingList) {
    pendingList.innerHTML = renderLeadCards(pending, "No hay empresas pendientes por contactar.");
  }

  if (contactedList) {
    contactedList.innerHTML = renderLeadCards(contacted, "Aún no hay empresas contactadas.", "contacted");
  }

  if (historyList) {
    historyList.innerHTML = leads.length
      ? leads
          .map(
            (lead) => `
              <article class="history-row">
                <strong>${escapeHTML(lead.company)}</strong>
                <span>${escapeHTML(lead.status)} · ${escapeHTML(lead.source || "Contacto")} · ${escapeHTML(lead.plan)}${lead.amount ? ` · ${escapeHTML(lead.amount)}` : ""} · Solicitud: ${escapeHTML(lead.date)}${lead.contactedAt ? ` · Contactada: ${escapeHTML(lead.contactedAt)}` : ""}</span>
              </article>
            `
          )
          .join("")
      : `<p class="empty-state">No hay historial comercial.</p>`;
  }
}

function renderAdminTickets() {
  const list = $("#adminTicketList");
  if (!list) return;

  const tickets = getTickets();

  if (!tickets.length) {
    list.innerHTML = `<p class="empty-state">No hay problemas reportados.</p>`;
    return;
  }

  list.innerHTML = tickets.map((ticket) => renderTicketCard(ticket, true)).join("");
}

function renderTicketCard(ticket, adminMode = false) {
  const isResolved = ticket.status === "Resuelto";
  const priorityClass =
    ticket.priority === "Alta" ? "risk-high" : ticket.priority === "Media" ? "risk-mid" : "risk-low";
  const statusClass =
    ticket.status === "Resuelto" ? "risk-low" : ticket.status === "En proceso" ? "risk-mid" : "risk-high";

  return `
    <article class="ticket-card ${isResolved ? "resolved" : "open"}">
      <div>
        <span class="risk-tag ${priorityClass}">${escapeHTML(ticket.priority)}</span>
        <span class="risk-tag ${statusClass}">${escapeHTML(ticket.status)}</span>
      </div>
      <h3>${escapeHTML(ticket.title)}</h3>
      <p>${escapeHTML(ticket.description)}</p>
      <dl>
        <div><dt>Empresa</dt><dd>${escapeHTML(ticket.company)}</dd></div>
        <div><dt>Área</dt><dd>${escapeHTML(ticket.area)}</dd></div>
        <div><dt>Reportado</dt><dd>${escapeHTML(ticket.created)}</dd></div>
        ${
          ticket.resolvedAt
            ? `<div><dt>Resuelto</dt><dd>${escapeHTML(ticket.resolvedAt)}</dd></div>`
            : ""
        }
      </dl>
      ${
        ticket.resolution
          ? `<div class="resolution-note"><strong>Solución aplicada</strong><p>${escapeHTML(ticket.resolution)}</p></div>`
          : ""
      }
      ${
        adminMode
          ? `
            <form class="resolution-form" data-resolution-form="${ticket.id}">
              <label>
                Estado del caso
                <select name="status" required>
                  <option value="Abierto" ${ticket.status === "Abierto" ? "selected" : ""}>Abierto</option>
                  <option value="En proceso" ${ticket.status === "En proceso" ? "selected" : ""}>En proceso</option>
                  <option value="Resuelto" ${ticket.status === "Resuelto" ? "selected" : ""}>Resuelto</option>
                </select>
              </label>
              <label>
                Cómo se resolvió
                <textarea name="resolution" rows="3" placeholder="Ej. Se corrigió el validador de Excel y se re-procesó la base.">${escapeHTML(ticket.resolution || "")}</textarea>
              </label>
              <button class="primary-action small" type="submit">Guardar solución</button>
            </form>
          `
          : ""
      }
    </article>
  `;
}

function renderAdminStats() {
  const openTickets = getTickets().filter((ticket) => ticket.status !== "Resuelto");
  const newLeads = getLeads().filter((lead) => lead.status === "Nueva");
  const companies = getCompanies();

  if ($("#adminCompanyCount")) $("#adminCompanyCount").textContent = companies.length;
  if ($("#adminOpenTicketCount")) $("#adminOpenTicketCount").textContent = openTickets.length;
  if ($("#adminLeadCount")) $("#adminLeadCount").textContent = newLeads.length;
}

function renderAdminCharts() {
  const companies = getCompanies();
  const tickets = getTickets();
  const planCounts = countBy(companies, "plan");
  const ticketCounts = countBy(tickets, "status");

  renderHorizontalChart("#adminPlanChart", [
    { label: "Retail Pro", value: planCounts["Retail Pro"] || 0, color: "green" },
    { label: "Enterprise", value: planCounts.Enterprise || 0, color: "blue" },
    { label: "Piloto", value: planCounts.Piloto || 0, color: "amber" },
  ]);

  renderHorizontalChart("#adminTicketChart", [
    { label: "Abierto", value: ticketCounts.Abierto || 0, color: "clay" },
    { label: "En proceso", value: ticketCounts["En proceso"] || 0, color: "amber" },
    { label: "Resuelto", value: ticketCounts.Resuelto || 0, color: "green" },
  ]);
}

function renderAdminNotifications() {
  const list = $("#adminNotificationList");
  if (!list) return;

  const openTickets = getTickets().filter((ticket) => ticket.status !== "Resuelto");
  const newLeads = getLeads().filter((lead) => lead.status === "Nueva");
  const notifications = [
    ...openTickets.map((ticket) => ({
      title: `Problema: ${ticket.title}`,
      detail: `${ticket.company} · Prioridad ${ticket.priority}`,
    })),
    ...newLeads.map((lead) => ({
      title: `${lead.source === "Compra web" ? "Acceso de prueba" : "Nueva solicitud"}: ${lead.company}`,
      detail: `${lead.contact} · Plan ${lead.plan}${lead.amount ? ` · ${lead.amount}` : ""}`,
    })),
  ];

  if (!notifications.length) {
    list.innerHTML = `<li><strong>Sin notificaciones pendientes</strong><span>Todo está al día.</span></li>`;
    return;
  }

  list.innerHTML = notifications
    .slice(0, 5)
    .map(
      (item) => `
        <li>
          <strong>${escapeHTML(item.title)}</strong>
          <span>${escapeHTML(item.detail)}</span>
        </li>
      `
    )
    .join("");
}

function updateNotificationCount() {
  const count = $("#notificationCount");
  if (!count || !currentRole) return;

  const openTickets = getTickets().filter((ticket) => ticket.status !== "Resuelto");
  const newLeads = getLeads().filter((lead) => lead.status === "Nueva");
  const account = getActiveClientAccount();
  const value =
    currentRole === "admin"
      ? openTickets.length + newLeads.length
      : openTickets.filter((ticket) => ticket.user === account.user).length;

  count.textContent = value;
  renderNotificationDrawer();
}

function getNotificationsForRole() {
  if (!currentRole) return [];

  const openTickets = getTickets().filter((ticket) => ticket.status !== "Resuelto");
  const newLeads = getLeads().filter((lead) => lead.status === "Nueva");
  const account = getActiveClientAccount();

  if (currentRole === "admin") {
    return [
      ...openTickets.map((ticket) => ({
        type: "Problema",
        title: ticket.title,
        detail: `${ticket.company} · ${ticket.area} · Prioridad ${ticket.priority}`,
        panel: "admin-tickets",
      })),
      ...newLeads.map((lead) => ({
        type: lead.source === "Compra web" ? "Compra" : "Solicitud",
        title: lead.company,
        detail: `${lead.contact} solicita ${lead.plan}${lead.amount ? ` · ${lead.amount}` : ""}`,
        panel: "admin-leads",
      })),
    ];
  }

  return openTickets
    .filter((ticket) => ticket.user === account.user)
    .map((ticket) => ({
      type: "Soporte",
      title: ticket.title,
      detail: `${ticket.status} · ${ticket.area} · ${ticket.priority}`,
      panel: "client-support",
    }));
}

function renderNotificationDrawer() {
  const list = $("#notificationDrawerList");
  if (!list) return;

  const notifications = getNotificationsForRole();

  if (!notifications.length) {
    list.innerHTML = `<p class="empty-state">No tienes notificaciones pendientes.</p>`;
    return;
  }

  list.innerHTML = notifications
    .map(
      (item) => `
        <button class="notification-item" type="button" data-notification-panel="${item.panel}">
          <span>${escapeHTML(item.type)}</span>
          <strong>${escapeHTML(item.title)}</strong>
          <small>${escapeHTML(item.detail)}</small>
        </button>
      `
    )
    .join("");
}

function toggleNotifications(forceOpen = null) {
  const drawer = $("#notificationDrawer");
  if (!drawer) return;

  const shouldOpen = forceOpen ?? drawer.classList.contains("hidden");
  renderNotificationDrawer();
  drawer.classList.toggle("hidden", !shouldOpen);
}

function resolveTicket(ticketId, status = "Resuelto", resolution = "Caso resuelto por el equipo administrador.") {
  const tickets = getTickets().map((ticket) =>
    ticket.id === ticketId
      ? {
          ...ticket,
          status,
          resolution,
          resolvedAt: status === "Resuelto" ? todayLabel() : ticket.resolvedAt,
        }
      : ticket
  );

  setTickets(tickets);
  renderAdminData();
  renderClientTickets();
  updateNotificationCount();
  showToast(status === "Resuelto" ? "Problema marcado como resuelto." : "Estado del problema actualizado.");
}

function contactLead(leadId) {
  pendingLeadDeletionId = null;
  const leads = getLeads().map((lead) =>
    lead.id === leadId
      ? {
          ...lead,
          status: "Contactada",
          contactedAt: new Date().toLocaleString("es-PE", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        }
      : lead
  );

  setLeads(leads);
  renderAdminData();
  updateNotificationCount();
  showToast("Solicitud marcada como contactada.");
}

function requestLeadDeletion(leadId) {
  pendingLeadDeletionId = leadId;
  renderAdminLeads();
}

function cancelLeadDeletion() {
  pendingLeadDeletionId = null;
  renderAdminLeads();
}

function deleteContactedLead(leadId) {
  const lead = getLeads().find((item) => item.id === leadId);

  if (!lead || lead.status !== "Contactada") {
    showToast("Solo se pueden eliminar solicitudes contactadas.");
    return;
  }

  setLeads(getLeads().filter((item) => item.id !== leadId));
  pendingLeadDeletionId = null;
  renderAdminData();
  updateNotificationCount();
  showToast(`Solicitud eliminada: ${lead.company}.`);
}

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || "Sin dato";
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function whatsappHref(phone, company, plan = "AIVentory") {
  const digits = String(phone || "").replace(/\D/g, "");
  const normalized = digits.startsWith("51") ? digits : `51${digits}`;
  const message = encodeURIComponent(
    `Hola, somos AIVentory. Hemos recibido la solicitud de ${company} para acceder al plan ${plan} y queremos coordinar la activación del perfil.`
  );
  return `https://wa.me/${normalized}?text=${message}`;
}

function renderHorizontalChart(selector, rows) {
  const chart = $(selector);
  if (!chart) return;

  const max = Math.max(...rows.map((row) => row.value), 1);

  chart.innerHTML = rows
    .map((row) => {
      const width = Math.max(8, Math.round((row.value / max) * 100));
      return `
        <div class="chart-row ${row.color}">
          <span>${escapeHTML(row.label)}</span>
          <i style="--value: ${width}%"></i>
          <strong>${row.value}</strong>
        </div>
      `;
    })
    .join("");
}

async function processSelectedFile() {
  if (!selectedInventoryFile) {
    showToast("Primero selecciona una base de datos.");
    return;
  }

  $("#processFileButton").disabled = true;
  $("#processStatus").textContent = "Procesando base de datos y recalculando dashboards...";
  try {
  analysisState = saveAnalysisToHistory(await createAnalysisFromFile(selectedInventoryFile));
  await window.localApp?.flush();
  reportGenerated = true;
  renderClientAnalysis();
  $("#processFileButton").disabled = false;
  $("#processStatus").textContent = `Reporte generado desde ${analysisState.sourceName} con ${analysisState.total.toLocaleString("es-PE")} registros. ${analysisState.importInfo || ''}`;
  showToast("Reporte predictivo generado desde el archivo.");
  } catch (error) {
    $("#processStatus").textContent = error.message;
    $("#processFileButton").disabled = false;
  }
}

function openCompanyEditor(companyId) {
  const form = $("#companyEditForm");
  if (!form) return;

  const company = getCompanies().find((item) => item.id === companyId);
  if (!company) return;

  form.elements.id.value = company.id;
  form.elements.company.value = company.company;
  form.elements.ruc.value = company.ruc;
  form.elements.plan.value = company.plan;
  form.elements.contact.value = company.contact;
  form.elements.email.value = company.email;
  form.elements.phone.value = company.phone;
  form.elements.users.value = company.users;
  form.elements.status.value = company.status;
  form.elements.lastUpload.value = company.lastUpload;
  $("#companyEditStatus").textContent = "";
  form.classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleCompanyEdit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const id = String(formData.get("id"));
  const companies = getCompanies().map((company) =>
    company.id === id
      ? {
          ...company,
          company: String(formData.get("company") || "").trim(),
          ruc: String(formData.get("ruc") || "").trim(),
          plan: String(formData.get("plan") || "").trim(),
          contact: String(formData.get("contact") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          phone: String(formData.get("phone") || "").trim(),
          users: Number(formData.get("users") || 1),
          status: String(formData.get("status") || "").trim(),
          lastUpload: String(formData.get("lastUpload") || "").trim(),
        }
      : company
  );

  setCompanies(companies);
  renderAdminData();
  $("#companyEditStatus").textContent = "Perfil empresarial actualizado correctamente.";
  showToast("Datos de empresa actualizados.");
}

function handleResolutionSubmit(event) {
  const form = event.target.closest("[data-resolution-form]");
  if (!form) return;

  event.preventDefault();
  const formData = new FormData(form);
  const status = String(formData.get("status") || "Abierto");
  const resolution = String(formData.get("resolution") || "").trim();

  if (status === "Resuelto" && !resolution) {
    showToast("Indica cómo se resolvió el problema.");
    return;
  }

  resolveTicket(form.dataset.resolutionForm, status, resolution);
}

function initializeLanding() {
  const leadForm = $("#leadForm");

  if (leadForm) {
    leadForm.addEventListener("submit", handleLeadSubmit);
  }
}

function initializePricing() {
  $$("[data-plan-benefits]").forEach(list => { list.innerHTML = planCatalog[list.dataset.planBenefits].benefits.map(item => `<li>${escapeHTML(item)}</li>`).join(""); });
  if (!$("[data-select-plan]")) return;

  $$("[data-select-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      selectPlan(button.dataset.selectPlan);
      showToast?.("Abriendo página de compra.");
    });
  });
}

function initializePurchase() {
  const purchaseForm = $("#purchaseForm");
  if (!purchaseForm) return;

  renderCheckoutPlan();
  purchaseForm.addEventListener("submit", handlePurchaseSubmit);
  purchaseForm.addEventListener("input", () => updateCardPreview(purchaseForm));
  updateCardPreview(purchaseForm);
}

function initializePortal() {
  const workspace = $("#workspace");
  if (!workspace) return;

  seedStorage();
  renderClientAnalysis();
  renderAdminData();
  renderClientTickets();

  $$("[data-login-form]").forEach((form) => {
    form.addEventListener("submit", handleLogin);
  });

  $("#roleNav")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-panel]");
    if (!button) return;
    showPanel(button.dataset.panel);
  });

  $("#logoutButton")?.addEventListener("click", lockWorkspace);
  $("#logoutButton")?.addEventListener("click", async () => { await window.localApp?.logout(); analysisState = null; reportGenerated = false; document.querySelector('#nyleLauncher')?.setAttribute('hidden', ''); document.querySelector('#nylePanel')?.setAttribute('hidden', ''); });
  $("#notificationButton")?.addEventListener("click", () => toggleNotifications());
  $("#closeNotifications")?.addEventListener("click", () => toggleNotifications(false));
  $("#notificationDrawerList")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-notification-panel]");
    if (!button) return;
    showPanel(button.dataset.notificationPanel);
    toggleNotifications(false);
  });

  $$(".dimension-filter .filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".dimension-filter .filter-chip").forEach((chip) => chip.classList.remove("active"));
      button.classList.add("active");
      renderDimensions(button.dataset.filter);
    });
  });

  $$("[data-inventory-view]").forEach((button) => {
    button.addEventListener("click", () => {
      inventoryView = button.dataset.inventoryView;
      $$("[data-inventory-view]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderInventory();
    });
  });

  $$("[data-period]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedPeriod = button.dataset.period;
      syncPeriodButtons();
      renderClientDashboard();
      renderDimensions();
      if (!$("#generatedReport")?.classList.contains("hidden")) {
        renderReportFromAnalysis();
      }
    });
  });

  $("#stockRange")?.addEventListener("input", (event) => {
    updateScenario(event.target.value);
  });

  $("#fileInput")?.addEventListener("change", (event) => {
    const [file] = event.target.files;
    const status = $("#fileStatus");
    const processButton = $("#processFileButton");
    const processStatus = $("#processStatus");
    if (!status) return;

    selectedInventoryFile = file || null;
    reportGenerated = false;
    $("#generatedReport")?.classList.add("hidden");
    status.textContent = file
      ? `${file.name} listo para clasificación predictiva.`
      : "Excel (.xlsx o .xls), CSV o PDF con una tabla de texto. Máximo 8 MB.";

    if (processButton) processButton.disabled = !file;
    if (processStatus) {
      processStatus.textContent = file
        ? "Archivo listo. Presiona el botón para generar el reporte."
        : "Selecciona una base de datos para iniciar el análisis.";
    }

    if (file) showToast("Archivo recibido. Listo para analizar.");
  });

  $("#processFileButton")?.addEventListener("click", processSelectedFile);

  $("#generateReport")?.addEventListener("click", () => {
    if (!analysisState) {
      showToast("Primero sube y procesa una base de datos.");
      return;
    }
    reportGenerated = true;
    renderReportFromAnalysis();
    showToast("Reporte generado correctamente.");
  });

  $("#refreshData")?.addEventListener("click", () => {
    renderClientAnalysis();
    renderAdminData();
    renderClientTickets();
    updateNotificationCount();
    showToast("Datos actualizados.");
  });

  $("#ticketForm")?.addEventListener("submit", handleTicketSubmit);
  $("#companyEditForm")?.addEventListener("submit", handleCompanyEdit);
  $("#cancelCompanyEdit")?.addEventListener("click", () => {
    $("#companyEditForm")?.classList.add("hidden");
  });

  document.addEventListener("click", (event) => {
    const resolveButton = event.target.closest("[data-resolve-ticket]");
    const leadButton = event.target.closest("[data-contact-lead]");
    const editCompanyButton = event.target.closest("[data-edit-company]");
    const loadAnalysisButton = event.target.closest("[data-load-analysis]");
    const deleteAnalysisButton = event.target.closest("[data-delete-analysis]");
    const requestDeleteLeadButton = event.target.closest("[data-request-delete-lead]");
    const confirmDeleteLeadButton = event.target.closest("[data-confirm-delete-lead]");
    const cancelDeleteLeadButton = event.target.closest("[data-cancel-delete-lead]");

    if (resolveButton) resolveTicket(resolveButton.dataset.resolveTicket);
    if (leadButton) contactLead(leadButton.dataset.contactLead);
    if (editCompanyButton) openCompanyEditor(editCompanyButton.dataset.editCompany);
    if (loadAnalysisButton) loadAnalysisFromHistory(loadAnalysisButton.dataset.loadAnalysis);
    if (deleteAnalysisButton) deleteAnalysisFromHistory(deleteAnalysisButton.dataset.deleteAnalysis);
    if (requestDeleteLeadButton) requestLeadDeletion(requestDeleteLeadButton.dataset.requestDeleteLead);
    if (confirmDeleteLeadButton) deleteContactedLead(confirmDeleteLeadButton.dataset.confirmDeleteLead);
    if (cancelDeleteLeadButton) cancelLeadDeletion();
  });

  document.addEventListener("submit", handleResolutionSubmit);

  updateScenario($("#stockRange")?.value || 12);
}

function initializeSharedInteractions() {
  $$("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = $(button.dataset.scroll);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initializeReveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  items.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    observer.observe(element);
  });
}

function activateLocalSession() {
  const user = window.localApp?.user;
  if (!user || !$("#workspace")) return;
  currentClientAccount = clientAccounts.find(account => account.user === user.user) || null;
  selectedNyleAnalysisId = "";
  analysisState = null;
  reportGenerated = false;
  selectedInventoryFile = null;
  $("#generatedReport")?.classList.add('hidden');
  unlockWorkspace(user.role);
  $("#nyleLauncher").hidden = user.role !== 'cliente';
  $("#nyleMessages").replaceChildren();
  appendNyle('Soy Nyle, tu asistente de inventario. Elige una base arriba para consultar sus productos, o pregúntame cómo usar el portal.');
}

function renderNyleSources() {
  const select = $("#nyleSource"), status = $("#nyleSourceStatus");
  if (!select) return;
  const analyses = getAnalyses();
  if (!analyses.some(item => item.id === selectedNyleAnalysisId)) {
    selectedNyleAnalysisId = analyses.some(item => item.id === analysisState?.id) ? analysisState.id : '';
  }
  select.innerHTML = '<option value="">Selecciona una base</option>' + analyses.map(item =>
    '<option value="' + escapeHTML(item.id) + '">' + escapeHTML(item.sourceName) + ' · ' + escapeHTML(item.uploadedAt || item.generatedAt || '') + '</option>'
  ).join('');
  select.value = selectedNyleAnalysisId;
  select.disabled = !analyses.length;
  const selected = analyses.find(item => item.id === selectedNyleAnalysisId);
  status.textContent = selected ? selected.total.toLocaleString('es-PE') + ' registros disponibles para consultar.' : analyses.length ? 'Elige la base que deseas consultar con Nyle.' : 'Aún no hay bases. Sube un archivo desde Inventarios.';
}

function appendNyle(message, sender = 'assistant') {
  const list = $("#nyleMessages");
  if (!list) return;
  const bubble = document.createElement('div');
  bubble.className = `nyle-message ${sender}`;
  bubble.textContent = message;
  list.append(bubble); list.scrollTop = list.scrollHeight;
}

function initializeNyle() {
  const panel = $("#nylePanel"), launcher = $("#nyleLauncher");
  if (!panel) return;
  function toggle(open) { panel.hidden = !open; launcher.setAttribute('aria-expanded', String(open)); (open ? $("#nyleForm input") : launcher).focus(); }
  launcher.onclick = () => toggle(true);
  $("#closeNyle").onclick = () => toggle(false);
  panel.onkeydown = event => {
    if (event.key === 'Escape') toggle(false);
    if (event.key === 'Tab') {
      const items = $('button:not(:disabled),input,select:not(:disabled)', panel), first = items[0], last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  };
  $("#nyleSource").onchange = event => {
    selectedNyleAnalysisId = event.target.value;
    $("#nyleMessages").replaceChildren();
    renderNyleSources();
    const selected = getAnalyses().find(item => item.id === selectedNyleAnalysisId);
    appendNyle(selected ? 'Ahora consultaré la base ' + selected.sourceName + '. ¿Qué te gustaría revisar?' : 'Elige una base para consultar sus productos.');
  };
  let busy = false;
  async function ask(question) {
    if (busy) return;
    busy = true; appendNyle(question, 'user');
    const button = $("#nyleForm button"); button.disabled = true;
    const source = $("#nyleSource"); source.disabled = true;
    const analysisId = selectedNyleAnalysisId;
    try {
      await window.localApp.flush();
      const result = await window.localApp.api('/api/nyle', { method: 'POST', body: { question, analysisId } });
      appendNyle(result.answer);
    } catch (error) { appendNyle(error.message); }
    finally { busy = false; button.disabled = false; renderNyleSources(); }
  }
  $("#nyleForm").onsubmit = event => { event.preventDefault(); const input = $("#nyleForm input"); const q = input.value.trim(); if (q) { input.value = ''; ask(q); } };
  $$('.nyle-prompts button').forEach(button => button.onclick = () => ask(button.textContent));
}

async function boot() {
  try {
    await window.localApp.ready;
    planCatalog = window.localApp.catalog;
    initializeSharedInteractions(); initializeLanding(); initializePricing(); initializePurchase(); initializePortal(); initializeReveal(); initializeNyle();
    activateLocalSession();
    if ($("#purchaseForm") && window.localApp.user?.role !== 'cliente') {
      $("#purchaseStatus").innerHTML = `Inicia sesión como cliente para activar un plan. <a href="portal.html?next=${encodeURIComponent('comprar.html?plan=' + resolveSelectedPlanKey())}">Entrar al portal</a>`;
      $("#purchaseForm [type=submit]").disabled = true;
    }
    document.addEventListener('local-error', event => showToast(`No se pudo guardar: ${event.detail}`));
    $("#refreshData")?.addEventListener('click', async () => { await window.localApp.flush(); await window.localApp.reload(); renderAdminData(); renderClientTickets(); updateNotificationCount(); });
  } catch (error) {
    const banner = document.createElement('p'); banner.className = 'local-banner'; banner.textContent = error.message; document.body.prepend(banner);
  }
}
boot();
