const media = (query, w = 1400, h = 900) =>
  `https://tse4.mm.bing.net/th?q=${encodeURIComponent(query)}&w=${w}&h=${h}&c=7&rs=1&p=0&o=5&pid=1.7`;

const heroImage = media("Rolls Royce Cullinan Bentley showroom luxury dealership photography", 1800, 1100);

const fallbackSvg = (label = "Crown Vault", type = "Asset") => {
  const safeLabel = String(label).replace(/[<&>"]/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900">
    <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f7f2e9"/><stop offset=".52" stop-color="#d7c7b1"/><stop offset="1" stop-color="#2b2c2d"/></linearGradient></defs>
    <rect width="1400" height="900" fill="url(#g)"/><rect x="70" y="70" width="1260" height="760" fill="none" stroke="#b89455" stroke-width="2" opacity=".55"/>
    <text x="92" y="765" fill="#241913" font-family="Georgia,serif" font-size="72">${safeLabel}</text>
    <text x="96" y="815" fill="#6f675e" font-family="Arial,sans-serif" font-size="24" letter-spacing="8">${type.toUpperCase()} DOSSIER</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

window.imageFallback = (image) => {
  image.onerror = null;
  image.src = fallbackSvg(image.alt, image.dataset.assetType || "Asset");
  image.classList.add("is-loaded", "is-fallback");
};

const luxImg = (src, alt, type = "Asset", loading = "lazy") => `
  <img class="lux-image" src="${src}" alt="${alt}" loading="${loading}" decoding="async"
    ${loading === "eager" ? 'fetchpriority="high"' : ""}
    data-asset-type="${type}" onload="this.classList.add('is-loaded')" onerror="imageFallback(this)">
`;

const carModels = [
  ["Rolls-Royce","Cullinan",2022,9800,"SUV","Petrol","Automatic","Black Diamond","Mandarin leather",65000000,"MH 01 Mumbai","Valid till Aug 2026"],
  ["Rolls-Royce","Ghost Extended",2021,14300,"Sedan","Petrol","Automatic","Arctic White","Navy leather",52500000,"DL 01 Delhi","Valid till Jan 2027"],
  ["Rolls-Royce","Phantom VIII",2020,18800,"Sedan","Petrol","Automatic","Jubilee Silver","Seashell leather",79000000,"MH 02 Mumbai","Valid till Nov 2026"],
  ["Rolls-Royce","Wraith Black Badge",2019,22400,"Coupe","Petrol","Automatic","Black Badge Black","Black leather",42000000,"KA 03 Bengaluru","Valid till Jul 2026"],
  ["Bentley","Bentayga V8",2021,17600,"SUV","Petrol","Automatic","Onyx","Linen leather",38000000,"MH 01 Mumbai","Valid till Dec 2026"],
  ["Bentley","Continental GT Mulliner",2022,8200,"Coupe","Petrol","Automatic","Moonbeam Silver","Beluga leather",43000000,"HR 26 Gurugram","Valid till Sep 2026"],
  ["Bentley","Flying Spur V8",2021,21000,"Sedan","Petrol","Automatic","Anthracite","Camel leather",31000000,"DL 10 Delhi","Valid till Apr 2027"],
  ["Bentley","Mulsanne Speed",2018,31200,"Sedan","Petrol","Automatic","Royal Ebony","Saddle leather",36000000,"MH 14 Pune","Valid till May 2026"],
  ["Porsche","911 Turbo S",2022,6200,"Coupe","Petrol","PDK","GT Silver","Bordeaux leather",29000000,"MH 01 Mumbai","Valid till Oct 2026"],
  ["Porsche","911 GT3 Touring",2022,8700,"Coupe","Petrol","Manual","Chalk","Black leather",28500000,"TS 09 Hyderabad","Valid till Feb 2027"],
  ["Porsche","Panamera Turbo S",2021,26500,"Sedan","Petrol","PDK","Jet Black","Cohiba leather",16000000,"KA 05 Bengaluru","Valid till Jun 2026"],
  ["Porsche","Cayenne Turbo GT",2022,15400,"SUV","Petrol","PDK","Carrara White","Graphite leather",21000000,"MH 02 Mumbai","Valid till Mar 2027"],
  ["BMW","M8 Competition Gran Coupe",2022,18200,"Coupe","Petrol","Automatic","Frozen Grey","Ivory Merino",21000000,"DL 08 Delhi","Valid till Dec 2026"],
  ["BMW","M5 CS",2021,22600,"Sedan","Petrol","Automatic","Brands Hatch Grey","Merino leather",16500000,"MH 12 Pune","Valid till Aug 2026"],
  ["BMW","X7 M60i",2023,9200,"SUV","Petrol","Automatic","Carbon Black","Tartufo leather",14500000,"KA 04 Bengaluru","Valid till Jan 2027"],
  ["BMW","i7 xDrive60",2023,7600,"Sedan","Electric","Automatic","Oxide Grey","Cashmere wool",15500000,"MH 01 Mumbai","Valid till Feb 2027"],
  ["Mercedes-Benz","Maybach S680",2022,11200,"Sedan","Petrol","Automatic","Obsidian Black","Macchiato leather",36000000,"DL 01 Delhi","Valid till Jul 2027"],
  ["Mercedes-Benz","AMG GT Black Series",2021,9600,"Coupe","Petrol","DCT","Designo Magno","Black Alcantara",39000000,"MH 01 Mumbai","Valid till May 2026"],
  ["Mercedes-Benz","G 63 AMG",2023,7400,"SUV","Petrol","Automatic","Matte Olive","Classic red leather",30000000,"HR 26 Gurugram","Valid till Nov 2027"],
  ["Mercedes-Benz","EQS 580",2023,12400,"Sedan","Electric","Automatic","Selenite Grey","Neva Grey leather",13500000,"KA 03 Bengaluru","Valid till Sep 2027"],
  ["Audi","RS7 Sportback",2022,16700,"Sportback","Petrol","Automatic","Nardo Grey","Valcona leather",19000000,"MH 02 Mumbai","Valid till Apr 2027"],
  ["Audi","R8 V10 Performance",2020,13200,"Coupe","Petrol","DCT","Suzuka Grey","Black leather",23000000,"DL 03 Delhi","Valid till Jun 2026"],
  ["Audi","RS Q8",2022,18800,"SUV","Petrol","Automatic","Mythos Black","Rotor Grey leather",16500000,"TS 09 Hyderabad","Valid till Dec 2026"],
  ["Audi","A8 L",2023,10900,"Sedan","Hybrid","Automatic","Firmament Blue","Pearl beige leather",13500000,"MH 14 Pune","Valid till Mar 2027"],
  ["Land Rover","Range Rover Autobiography",2023,9900,"SUV","Petrol","Automatic","Santorini Black","Perlino leather",32000000,"MH 01 Mumbai","Valid till Jan 2028"],
  ["Land Rover","Range Rover SV",2022,15200,"SUV","Petrol","Automatic","British Racing Green","Caraway leather",35000000,"DL 01 Delhi","Valid till Oct 2026"],
  ["Land Rover","Defender 110 V8",2023,8900,"SUV","Petrol","Automatic","Carpathian Grey","Ebony leather",17000000,"KA 05 Bengaluru","Valid till Aug 2027"],
  ["Land Rover","Range Rover Sport SVR",2021,24800,"SUV","Petrol","Automatic","Fuji White","Pimento leather",15000000,"MH 12 Pune","Valid till Jun 2026"],
  ["Lamborghini","Urus Performante",2023,6400,"SUV","Petrol","Automatic","Nero Noctis","Alcantara Nero",42000000,"MH 01 Mumbai","Valid till Feb 2028"],
  ["Lamborghini","Huracan Tecnica",2022,8100,"Coupe","Petrol","DCT","Grigio Lynx","Sportivo leather",36000000,"DL 10 Delhi","Valid till Nov 2026"],
  ["Lamborghini","Aventador S",2020,13800,"Coupe","Petrol","ISR","Bianco Isis","Nero Ade leather",57500000,"MH 01 Mumbai","Valid till May 2026"],
  ["Lamborghini","Huracan EVO Spyder",2021,11600,"Convertible","Petrol","DCT","Blu Astraeus","Cream leather",33500000,"KA 03 Bengaluru","Valid till Sep 2026"],
  ["Ferrari","Roma",2022,7200,"Coupe","Petrol","DCT","Blu Roma","Sabbia leather",45000000,"MH 02 Mumbai","Valid till Mar 2027"],
  ["Ferrari","F8 Tributo",2021,10400,"Coupe","Petrol","DCT","Rosso Corsa","Nero leather",50000000,"DL 01 Delhi","Valid till Aug 2026"],
  ["Ferrari","Portofino M",2022,9300,"Convertible","Petrol","DCT","Grigio Silverstone","Cuoio leather",39000000,"HR 26 Gurugram","Valid till Dec 2026"],
  ["Ferrari","812 Superfast",2020,16400,"Coupe","Petrol","DCT","Nero Daytona","Bordeaux leather",62000000,"MH 01 Mumbai","Valid till Jun 2026"],
  ["McLaren","GT",2022,7600,"Coupe","Petrol","DCT","Sarthe Grey","Porcelain leather",48000000,"DL 03 Delhi","Valid till Apr 2027"],
  ["McLaren","720S Performance",2021,10800,"Coupe","Petrol","DCT","Silica White","Carbon black",52000000,"MH 02 Mumbai","Valid till Oct 2026"],
  ["McLaren","Artura",2023,5100,"Coupe","Hybrid","DCT","Ember Orange","Jet black leather",47000000,"KA 04 Bengaluru","Valid till Jan 2028"],
  ["McLaren","765LT Spider",2022,5900,"Convertible","Petrol","DCT","Chicane Grey","Alcantara",67500000,"MH 01 Mumbai","Valid till Sep 2027"],
  ["Porsche","Taycan Turbo S",2022,20500,"Sedan","Electric","Automatic","Frozen Blue","Oleander leather",15500000,"KA 03 Bengaluru","Valid till Aug 2026"],
  ["Mercedes-Benz","SL 63 AMG",2023,6800,"Convertible","Petrol","Automatic","Alpine Grey","Bengal red leather",20500000,"DL 01 Delhi","Valid till Dec 2027"],
  ["BMW","XM Label",2023,5200,"SUV","Hybrid","Automatic","Black Sapphire","Vintage coffee leather",22000000,"MH 01 Mumbai","Valid till Nov 2027"],
  ["Audi","S8 Plus",2021,21800,"Sedan","Petrol","Automatic","Glacier White","Cognac leather",11500000,"TS 09 Hyderabad","Valid till Jul 2026"],
  ["Bentley","Bentayga EWB Azure",2023,4800,"SUV","Petrol","Automatic","Damson","Linen leather",46000000,"MH 02 Mumbai","Valid till Feb 2028"]
];

const cars = carModels.map((m, i) => ({
  id: `car-${i + 1}`, type: "car", brand: m[0], model: m[1], year: m[2], mileage: m[3], body: m[4],
  fuel: m[5], transmission: m[6], exterior: m[7], interior: m[8], price: m[9], registration: m[10], insurance: m[11],
  ownership: i % 4 === 0 ? "Single owner" : i % 4 === 1 ? "Two owners" : i % 4 === 2 ? "Company maintained" : "Private collection",
  service: i % 3 === 0 ? "Full authorised service history" : i % 3 === 1 ? "Dealer service records and inspection" : "Complete service portfolio available",
  features: ["360 gallery", "Inspection report", "Concierge handover", "Ceramic coating", "Premium audio", "Adaptive comfort seating"],
  image: media(`${m[0]} ${m[1]} official luxury car exterior`, 1400, 900),
  gallery: [media(`${m[0]} ${m[1]} front three quarter`, 1400, 900), media(`${m[0]} ${m[1]} interior luxury`, 1400, 900), media(`${m[0]} ${m[1]} rear detail`, 1200, 800)]
}));

const yachtModels = [
  ["Sunseeker","Predator 74",2021,"1,120 engine hours","Mediterranean cruiser",180000000,"British registry","Valid class survey"],
  ["Azimut","Grande 27M",2020,"890 engine hours","Flybridge yacht",240000000,"Malta registry","Valid till 2027"],
  ["Princess Yachts","Y85",2022,"640 engine hours","Motor yacht",310000000,"Monaco registry","Valid till 2028"],
  ["Ferretti","780",2019,"1,380 engine hours","Luxury cruiser",165000000,"Dubai maritime","Valid till 2026"],
  ["Pershing","8X",2021,"760 engine hours","Performance yacht",365000000,"Cayman registry","Valid till 2027"],
  ["Riva","88 Folgore",2022,"540 engine hours","Italian open yacht",450000000,"Monaco registry","Valid till 2028"]
];

const yachts = yachtModels.map((y, i) => ({
  id: `yacht-${i + 1}`, type: "yacht", brand: y[0], model: y[1], year: y[2], mileage: y[3], body: y[4],
  fuel: "Diesel", transmission: "Twin engine", exterior: "Pearl white hull", interior: "Walnut, linen and leather", price: y[5],
  registration: y[6], insurance: y[7], ownership: i % 2 ? "Private family vessel" : "Single corporate owner",
  service: "Class survey, crew logs and maintenance invoices available",
  features: ["Beach club", "Stabilizers", "Crew cabin", "Tender garage", "Jacuzzi deck", "Premium galley"],
  image: media(`${y[0]} ${y[1]} luxury yacht`, 1400, 900),
  gallery: [media(`${y[0]} ${y[1]} yacht exterior`, 1400, 900), media(`${y[0]} yacht interior salon`, 1400, 900), media(`${y[0]} ${y[1]} yacht deck`, 1200, 800)]
}));

const jetModels = [
  ["Gulfstream","G700",2022,"820 flight hours","Ultra-long-range jet",3500000000,"FAA N-reg","Hull insurance valid"],
  ["Bombardier","Global 7500",2021,"1,040 flight hours","Ultra-long-range jet",3150000000,"Isle of Man registry","Valid till 2027"],
  ["Dassault","Falcon 8X",2020,"1,260 flight hours","Tri-jet",2250000000,"French registry","Valid till 2026"],
  ["Embraer","Praetor 600",2022,"690 flight hours","Super-midsize jet",1150000000,"VT Indian registry","Valid till 2027"],
  ["Cessna","Citation Longitude",2021,"930 flight hours","Super-midsize jet",1250000000,"FAA N-reg","Valid till 2026"],
  ["Gulfstream","G650ER",2019,"1,650 flight hours","Ultra-long-range jet",2850000000,"Cayman registry","Valid till 2027"],
  ["Bombardier","Challenger 3500",2023,"380 flight hours","Super-midsize jet",1450000000,"FAA N-reg","Valid till 2028"],
  ["Dassault","Falcon 2000LXS",2020,"1,170 flight hours","Large cabin jet",1650000000,"Isle of Man registry","Valid till 2026"],
  ["Embraer","Legacy 650E",2019,"1,480 flight hours","Large cabin jet",950000000,"VT Indian registry","Valid till 2026"],
  ["Cessna","Citation X+",2018,"1,920 flight hours","High-speed jet",650000000,"FAA N-reg","Valid till 2026"],
  ["Gulfstream","G500",2022,"710 flight hours","Large cabin jet",2350000000,"Cayman registry","Valid till 2027"],
  ["Bombardier","Global 6000",2020,"1,340 flight hours","Long-range jet",1950000000,"Dubai registry","Valid till 2026"]
];

const jets = jetModels.map((j, i) => ({
  id: `jet-${i + 1}`, type: "jet", brand: j[0], model: j[1], year: j[2], mileage: j[3], body: j[4],
  fuel: "Jet A", transmission: "Turbofan", exterior: "Pearl and graphite livery", interior: "Bespoke cabin leather", price: j[5],
  registration: j[6], insurance: j[7], ownership: i % 2 ? "Private charter management" : "Single principal owner",
  service: "Airframe, engine programs and complete logbooks available",
  features: ["Crew rest", "Satellite Wi-Fi", "Galley", "Private suite", "Cabin management", "Inspection dossier"],
  image: media(`${j[0]} ${j[1]} private jet runway`, 1400, 900),
  gallery: [media(`${j[0]} ${j[1]} private jet exterior`, 1400, 900), media(`${j[0]} ${j[1]} luxury cabin interior`, 1400, 900), media(`${j[0]} ${j[1]} private jet hangar`, 1200, 800)]
}));

const inventory = [...cars, ...yachts, ...jets];
const app = document.querySelector("#app");
const nav = document.querySelector("#mainNav");
const themeToggle = document.querySelector("#themeToggle");
let lastRouteKey = "";
let scrollSaveTick = false;

const storage = {
  get(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const sessionStore = {
  get(key, fallback) {
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};

const state = {
  wishlist: storage.get("cvWishlist", []),
  compare: storage.get("cvCompare", []),
  recent: storage.get("cvRecent", []),
  purchases: storage.get("cvPurchases", []),
  preferences: storage.get("cvPreferences", { theme: "light", budget: "", interest: "Luxury cars" })
};

function persistState() {
  storage.set("cvWishlist", state.wishlist);
  storage.set("cvCompare", state.compare);
  storage.set("cvRecent", state.recent);
  storage.set("cvPurchases", state.purchases);
  storage.set("cvPreferences", state.preferences);
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function resetScrollTop(behavior = "auto") {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo({ top: 0, left: 0, behavior });
}

function routeKey() {
  return location.hash || "#/home";
}

function getScrollMemory() {
  return sessionStore.get("cvScrollMemory", {});
}

function saveCurrentScroll() {
  const key = lastRouteKey || routeKey();
  const doc = document.documentElement;
  const max = Math.max(1, doc.scrollHeight - innerHeight);
  const memory = getScrollMemory();
  memory[key] = {
    y: Math.max(window.scrollY, document.body.scrollTop, document.documentElement.scrollTop),
    ratio: Math.max(0, Math.min(1, window.scrollY / max)),
    at: Date.now()
  };
  sessionStore.set("cvScrollMemory", memory);
}

function restoreRouteScroll(key, behavior = "auto") {
  const memory = getScrollMemory()[key];
  const y = memory ? Math.round(memory.y || 0) : 0;
  window.scrollTo({ top: y, left: 0, behavior });
}

function applyTheme(theme = state.preferences.theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
  if (themeToggle) themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0b0a08" : "#f7f2e9");
}

window.addEventListener("load", () => setTimeout(() => document.querySelector("#loader").classList.add("hidden"), 650));
document.querySelector("#menuToggle").addEventListener("click", () => nav.classList.toggle("open"));
themeToggle?.addEventListener("click", () => {
  state.preferences.theme = state.preferences.theme === "dark" ? "light" : "dark";
  persistState();
  applyTheme();
  notify(`${state.preferences.theme === "dark" ? "Dark" : "Light"} luxury mode enabled`);
});
document.querySelector("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.querySelector("button").textContent = "Subscribed";
  notify("Vault Letter subscription saved");
});

function price(value) {
  if (value >= 10000000) {
    const crore = value / 10000000;
    return `INR ${Number.isInteger(crore) ? crore : crore.toFixed(1)} Cr`;
  }
  const lakh = value / 100000;
  return `INR ${Number.isInteger(lakh) ? lakh : lakh.toFixed(1)} Lakh`;
}

function emi(value) { return price(Math.round(value * 0.016)); }
function title(item) { return `${item.brand} ${item.model}`; }
function usage(item) { return typeof item.mileage === "number" ? `${item.mileage.toLocaleString("en-IN")} km` : item.mileage; }
function byIds(ids) { return ids.map((id) => inventory.find((item) => item.id === id)).filter(Boolean); }
function isSaved(id) { return state.wishlist.includes(id); }
function isCompared(id) { return state.compare.includes(id); }
function assetName(type) { return type === "car" ? "vehicle" : type === "yacht" ? "yacht" : "aircraft"; }
function deliveryMode(item) { return item.type === "car" ? "enclosed transport" : item.type === "yacht" ? "ocean delivery" : "aviation handover"; }
function deliveryEta(item) { return item.type === "car" ? "14-28 days worldwide" : item.type === "yacht" ? "21-45 days by route and port" : "10-21 days after aviation clearance"; }
function invoiceNumber() { return `CV-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`; }
function taxEstimate(item) {
  const duty = item.type === "car" ? 0.42 : item.type === "yacht" ? 0.18 : 0.11;
  return Math.round(item.price * duty);
}
function warrantyLabel(item) {
  return item.type === "car" ? "24-month Crown Vault luxury warranty available" : item.type === "yacht" ? "12-month systems and survey warranty available" : "Airframe, engine program, and avionics support available";
}
function availability(item) {
  const hot = item.price > 40000000 || item.year >= 2023;
  return hot ? "Private allocation" : item.type === "car" ? "Available now" : "Viewing by appointment";
}

function vehicleSearch(query) {
  const text = query.toLowerCase();
  return inventory
    .filter((item) => `${item.brand} ${item.model} ${item.year} ${item.body}`.toLowerCase().includes(text))
    .slice(0, 5);
}

function localVehicleIntel(item) {
  const premium = ["Rolls-Royce", "Bentley", "Ferrari", "Lamborghini", "McLaren"].includes(item.brand);
  const electric = item.fuel === "Electric";
  const hybrid = item.fuel === "Hybrid";
  const coupe = item.body.includes("Coupe") || item.body.includes("Convertible");
  const baseHp = electric ? 650 : hybrid ? 680 : premium ? 760 : coupe ? 610 : 540;
  const baseTorque = electric ? 850 : hybrid ? 820 : premium ? 900 : 700;
  const topSpeed = item.type === "jet" ? 950 : item.type === "yacht" ? 60 : premium || coupe ? 325 : 260;
  const age = Math.max(0, 2026 - item.year);
  const market = Math.round(item.price * Math.max(0.62, 1 - age * 0.045));
  return {
    market_value_inr: market,
    resale_value_inr: Math.round(market * (age < 3 ? 0.82 : 0.74)),
    engine: electric ? "Dual-motor electric luxury drivetrain" : hybrid ? "Hybrid performance luxury drivetrain" : `${item.fuel} high-output ${item.transmission} powertrain`,
    horsepower: baseHp,
    torque_nm: baseTorque,
    top_speed_kmph: topSpeed,
    mileage: electric ? "Range depends on battery condition and charging profile" : item.type === "car" ? "4-8 km/l in mixed luxury use" : item.mileage,
    competitors: item.type === "car" ? ["Porsche", "Bentley", "Mercedes-Maybach"] : item.type === "yacht" ? ["Azimut", "Riva", "Princess"] : ["Gulfstream", "Bombardier", "Dassault"],
    acceleration: item.type === "car" ? (premium || coupe ? "0-100 km/h in 2.9-4.4 sec" : "0-100 km/h in 4.5-5.8 sec") : item.type === "yacht" ? "Cruising profile optimized for 22-32 knots" : "Long-range cruise profile near Mach 0.85-0.90",
    maintenance_cost: item.type === "car" ? "INR 18-75 Lakh/year depending on mileage and warranty" : item.type === "yacht" ? "INR 2.5-8 Cr/year including crew, berth and scheduled maintenance" : "INR 12-45 Cr/year depending on hours, programs and crew",
    insurance_estimate: item.type === "car" ? "INR 18-90 Lakh/year" : item.type === "yacht" ? "INR 1.2-5 Cr/year hull and liability" : "INR 4-18 Cr/year hull and liability",
    demand: premium || item.year >= 2022 ? "High demand among private collectors" : "Stable demand with price sensitivity",
    trend: age < 2 ? "Limited depreciation risk over the next 12 months" : "Expect softer depreciation if mileage and service records remain clean",
    facelift: "Monitor current dealer allocation for MY2026 cabin tech, ADAS, and limited-edition trim updates.",
    fetched_at: "Local concierge fallback"
  };
}

async function fetchVehicleIntel(item) {
  const params = new URLSearchParams({
    brand: item.brand,
    model: item.model,
    year: item.year,
    price: item.price,
    fuel: item.fuel,
    body: item.body
  });
  try {
    const response = await fetch(`/api/vehicle-intel/?${params.toString()}`, { headers: { "Accept": "application/json" } });
    if (!response.ok) throw new Error("Vehicle intelligence unavailable");
    return await response.json();
  } catch {
    return localVehicleIntel(item);
  }
}

async function fetchConciergeChat(prompt, item, intel) {
  const response = await fetch("/api/concierge-chat/", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      prompt,
      vehicle: {
        id: item.id,
        type: item.type,
        title: title(item),
        brand: item.brand,
        model: item.model,
        year: item.year,
        price_inr: item.price,
        usage: usage(item),
        body: item.body,
        fuel: item.fuel,
        transmission: item.transmission,
        exterior: item.exterior,
        interior: item.interior,
        ownership: item.ownership,
        service: item.service,
        registration: item.registration,
        insurance: item.insurance,
        features: item.features
      },
      intel
    })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "AI concierge unavailable");
  return data.reply;
}

function intelLine(label, value) {
  return `${label}: ${Array.isArray(value) ? value.join(", ") : value}`;
}

function vehicleSummary(item, intel) {
  return [
    intelLine("Current market value", price(intel.market_value_inr || item.price)),
    intelLine("Engine", intel.engine),
    intelLine("Power", `${intel.horsepower} hp / ${intel.torque_nm} Nm`),
    intelLine("Top speed", `${intel.top_speed_kmph} km/h`),
    intelLine("Acceleration", intel.acceleration || "Performance verified during inspection"),
    intelLine("Mileage", intel.mileage),
    intelLine("Ownership", item.ownership),
    intelLine("Service history", item.service),
    intelLine("Maintenance cost", intel.maintenance_cost || "Available from concierge"),
    intelLine("Insurance estimate", intel.insurance_estimate || "Available from concierge"),
    intelLine("Market demand", intel.demand || "Collector demand reviewed by concierge"),
    intelLine("Resale trend", intel.trend || "Resale trend depends on condition and allocation"),
    intelLine("Fuel", item.fuel),
    intelLine("Luxury features", item.features.slice(0, 4).join(", ")),
    intelLine("Resale value", price(intel.resale_value_inr || item.price * 0.72)),
    intelLine("Competitors", intel.competitors),
    intelLine("Facelift/new models", intel.facelift)
  ].join("\n");
}

function recommendationList() {
  const signals = byIds([...state.wishlist, ...state.recent]);
  const preferredTypes = signals.map((item) => item.type);
  const preferredBrands = signals.map((item) => item.brand);
  const budget = Number(state.preferences.budget || 0);
  return [...inventory].sort((a, b) => {
    const score = (item) =>
      (preferredTypes.includes(item.type) ? 5 : 0) +
      (preferredBrands.includes(item.brand) ? 4 : 0) +
      (budget && item.price <= budget ? 2 : 0) +
      (item.year >= 2022 ? 1 : 0);
    return score(b) - score(a);
  });
}

function rememberRecent(id) {
  state.recent = [id, ...state.recent.filter((itemId) => itemId !== id)].slice(0, 8);
  persistState();
}

function toggleWishlist(id) {
  state.wishlist = isSaved(id) ? state.wishlist.filter((itemId) => itemId !== id) : [id, ...state.wishlist].slice(0, 24);
  persistState();
  notify(isSaved(id) ? "Saved to wishlist" : "Removed from wishlist");
  render(false);
}

function toggleCompare(id) {
  if (isCompared(id)) {
    state.compare = state.compare.filter((itemId) => itemId !== id);
    notify("Removed from compare");
  } else if (state.compare.length >= 3) {
    notify("Compare is limited to three vehicles");
  } else {
    state.compare = [...state.compare, id];
    notify("Added to compare");
  }
  persistState();
  render(false);
}

function card(item) {
  return `
    <article class="listing-card fade-in" data-asset-card="${item.id}">
      <a class="listing-image" href="#/detail/${item.id}" aria-label="View ${title(item)}">
        ${luxImg(item.image, title(item), item.type)}
        <span class="badge">${availability(item)}</span>
      </a>
      <div class="listing-body">
        <div class="listing-title">
          <h3>${title(item)}</h3>
          <span class="price">${price(item.price)}</span>
        </div>
        <div class="meta">
          <span>${item.year}</span><span>${usage(item)}</span><span>${item.body}</span><span>${item.fuel}</span>
        </div>
        <div class="provenance">
          <span>${item.ownership}</span>
          <span>${item.registration}</span>
        </div>
        <p>${item.exterior} over ${item.interior}. ${item.service}.</p>
        <div class="card-actions">
          <a class="button primary" href="#/detail/${item.id}">View details</a>
          <a class="button primary buy" href="#/checkout/${item.id}">Buy now</a>
          <button class="button ghost" data-reserve="${item.id}">Reserve vehicle</button>
          <button class="button ghost" data-inquire="${item.id}">Speak to concierge</button>
          <button class="button ghost" data-inspection="${item.id}">Request live inspection</button>
          <button class="icon-action ${isSaved(item.id) ? "active" : ""}" data-wishlist="${item.id}" aria-label="${isSaved(item.id) ? "Remove from" : "Add to"} wishlist">${isSaved(item.id) ? "Saved" : "Save"}</button>
          <button class="icon-action ${isCompared(item.id) ? "active" : ""}" data-compare="${item.id}" aria-label="${isCompared(item.id) ? "Remove from" : "Add to"} compare">${isCompared(item.id) ? "Comparing" : "Compare"}</button>
          <button class="icon-action ai" data-chat-vehicle="${item.id}">Ask AI</button>
        </div>
      </div>
    </article>
  `;
}

function homePage() {
  const featured = [cars[0], cars[8], cars[16], yachts[1], jets[0], cars[28]];
  const recommended = recommendationList().slice(0, 4);
  const recent = byIds(state.recent).slice(0, 4);
  return `
    <section class="hero">
      <div class="hero-media">
        <video autoplay muted loop playsinline preload="metadata" poster="${heroImage}">
          <source src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4" type="video/mp4">
        </video>
        ${luxImg(heroImage, "Private luxury vehicle showroom", "hero", "eager")}
      </div>
      <div class="hero-content fade-in">
        <p class="eyebrow">Ultra-premium global brokerage</p>
        <h1>CROWN VAULT</h1>
        <p>Buy authenticated luxury cars, supercars, yachts, and private jets with secure INR payment, private invoice, and white-glove worldwide delivery.</p>
        <div class="hero-actions">
          <a class="button primary" href="#/cars">Buy luxury cars</a>
          <a class="button ghost" href="#/yachts">Acquire yachts</a>
          <a class="button ghost" href="#/jets">Acquire jets</a>
          <a class="button ghost" href="#/concierge">AI concierge</a>
        </div>
      </div>
    </section>
    <section class="stats">
      <div class="stat"><strong>${cars.length}</strong><span class="stat-label">Luxury cars</span></div>
      <div class="stat"><strong>${yachts.length}</strong><span class="stat-label">Yachts</span></div>
      <div class="stat"><strong>${jets.length}</strong><span class="stat-label">Private jets</span></div>
      <div class="stat"><strong>Global</strong><span class="stat-label">Delivery network</span></div>
    </section>
    <section class="section">
      <div class="section-heading">
        <div><p class="eyebrow">Featured acquisitions</p><h2>Purchase-ready private inventory.</h2></div>
        <p>Every dossier supports full payment, reservation, live inspection, secure invoice, import estimate, and delivery coordination for villas, marinas, hangars, and island destinations.</p>
      </div>
      <div class="listing-grid">${featured.map(card).join("")}</div>
    </section>
    <section class="section premium-band">
      <div class="section-heading">
        <div><p class="eyebrow">AI recommended</p><h2>Matched to your taste.</h2></div>
        <p>Concierge intelligence uses saved listings, recent views, budget signals, market trend, demand, and projected resale value to surface stronger alternatives.</p>
      </div>
      <div class="listing-grid">${recommended.map(card).join("")}</div>
    </section>
    ${recent.length ? `<section class="section"><div class="section-heading"><div><p class="eyebrow">Recently viewed</p><h2>Your last dossiers.</h2></div><a class="button ghost" href="#/dashboard">Private office</a></div><div class="listing-grid">${recent.map(card).join("")}</div></section>` : ""}
    <section class="section editorial-grid">
      <a class="editorial-card" href="#/yachts">
        ${luxImg(media("Azimut Grande 27M luxury yacht marina", 1200, 900), "Azimut Grande 27M luxury yacht in marina", "yacht")}
        <div><p class="eyebrow">Yacht office</p><h2>Brokered vessels for private waters.</h2></div>
      </a>
      <a class="editorial-card" href="#/jets">
        ${luxImg(media("Gulfstream G700 private jet luxury cabin", 1200, 900), "Gulfstream G700 private jet luxury cabin", "jet")}
        <div><p class="eyebrow">Aviation desk</p><h2>Aircraft with complete logbooks.</h2></div>
      </a>
    </section>
  `;
}

function listingPage(type) {
  const label = type === "car" ? "Luxury Cars" : type === "yacht" ? "Yachts" : "Private Jets";
  const items = inventory.filter((item) => item.type === type);
  const brands = [...new Set(items.map((item) => item.brand))].sort();
  return `
    <section class="page-hero fade-in">
      <p class="eyebrow">${label}</p>
      <h1>${label}</h1>
      <p>Verified global listings ready for full purchase, reservation, live inspection, secure payment, and private delivery coordination.</p>
    </section>
    <section class="section">
      <form class="filters" id="filters" data-type="${type}">
        <label>Brand<select name="brand"><option value="">All brands</option>${brands.map((b) => `<option>${b}</option>`).join("")}</select></label>
        <label>Budget<select name="budget"><option value="">Any budget</option><option value="10000000">Under ₹ 1 Cr</option><option value="20000000">Under ₹ 2 Cr</option><option value="50000000">Under ₹ 5 Cr</option><option value="500000000">Under ₹ 50 Cr</option><option value="3500000000">Under ₹ 350 Cr</option></select></label>
        <label>Year<select name="year"><option value="">Any year</option><option value="2023">2023+</option><option value="2022">2022+</option><option value="2021">2021+</option><option value="2020">2020+</option></select></label>
        <label>Fuel<select name="fuel"><option value="">Any fuel</option><option>Petrol</option><option>Hybrid</option><option>Electric</option><option>Diesel</option><option>Jet A</option></select></label>
        <label>Transmission<select name="transmission"><option value="">Any transmission</option><option>Automatic</option><option>DCT</option><option>PDK</option><option>Manual</option><option>Twin engine</option><option>Turbofan</option></select></label>
        <label>Body style<select name="body"><option value="">Any style</option>${[...new Set(items.map((i) => i.body))].map((b) => `<option>${b}</option>`).join("")}</select></label>
        <label>Color<input name="color" placeholder="Black, silver, ivory"></label>
        <label>Ownership<select name="ownership"><option value="">Any ownership</option><option>Single owner</option><option>Two owners</option><option>Corporate collection</option><option>Royal family provenance</option></select></label>
        <label>Mileage max<input name="mileage" type="number" min="0" placeholder="25000"></label>
        <label>Search<input name="search" placeholder="Cullinan, G700, Porsche"></label>
        <label>Sort<select name="sort"><option value="recommended">Recommended</option><option value="priceAsc">Price low to high</option><option value="priceDesc">Price high to low</option><option value="yearDesc">Newest first</option></select></label>
      </form>
      <div id="resultsCount" class="eyebrow">${items.length} listings available</div>
      <div class="listing-grid" id="listingGrid">${items.map(card).join("")}</div>
    </section>
  `;
}

function detailPage(id) {
  const item = inventory.find((asset) => asset.id === id);
  if (!item) return notFound();
  rememberRecent(item.id);
  const comparable = inventory.filter((asset) => asset.type === item.type && asset.id !== item.id).slice(0, 3);
  return `
    <section class="detail-hero fade-in">
      ${luxImg(item.image, title(item), item.type, "eager")}
      <div class="detail-copy">
        <p class="eyebrow">${item.type} dossier</p>
        <h1>${title(item)}</h1>
        <p>${item.year} • ${item.ownership} • ${item.service}</p>
      </div>
    </section>
    <section class="detail-layout">
      <div>
        <div class="gallery">
          ${item.gallery.map((src, i) => `<button class="gallery-tile" data-gallery="${item.id}" data-gallery-index="${i}" aria-label="Open gallery image ${i + 1}">${luxImg(src, `${title(item)} gallery image ${i + 1}`, item.type)}</button>`).join("")}
        </div>
        <div class="viewer360">
          <div class="viewer360-stage">${luxImg(item.gallery[1] || item.image, `${title(item)} interior viewer`, item.type)}</div>
          <label>360 interior angle<input type="range" min="0" max="100" value="45" data-viewer360></label>
        </div>
        <div class="sound-preview">
          <div>
            <p class="eyebrow">Engine sound preview</p>
            <h3>${item.type === "car" ? "Start-up and cabin note" : item.type === "yacht" ? "Twin engine dock departure" : "Turbofan cabin ambience"}</h3>
          </div>
          <button class="button ghost" data-sound-preview="${item.id}">Play preview</button>
        </div>
        <div class="spec-list">
          <div><span>Year</span><strong>${item.year}</strong></div>
          <div><span>${item.type === "car" ? "Mileage" : "Hours"}</span><strong>${usage(item)}</strong></div>
          <div><span>Exterior</span><strong>${item.exterior}</strong></div>
          <div><span>Interior</span><strong>${item.interior}</strong></div>
          <div><span>Fuel</span><strong>${item.fuel}</strong></div>
          <div><span>Transmission</span><strong>${item.transmission}</strong></div>
          <div><span>Ownership</span><strong>${item.ownership}</strong></div>
          <div><span>Service records</span><strong>${item.service}</strong></div>
          <div><span>Registration</span><strong>${item.registration}</strong></div>
          <div><span>Insurance</span><strong>${item.insurance}</strong></div>
          <div><span>Acceleration</span><strong>${localVehicleIntel(item).acceleration}</strong></div>
          <div><span>Top speed</span><strong>${localVehicleIntel(item).top_speed_kmph} km/h</strong></div>
          <div><span>Warranty</span><strong>${warrantyLabel(item)}</strong></div>
          <div><span>Delivery timeline</span><strong>${deliveryEta(item)}</strong></div>
        </div>
        <div class="dossier-grid">
          <section class="about-card">
            <p class="eyebrow">Inspection report</p>
            <h3>Verified condition file</h3>
            <p>Paint meter readings, cabin wear, systems review, service audit, tire/brake status, and final concierge video inspection before payment release.</p>
          </section>
          <section class="about-card">
            <p class="eyebrow">${item.type === "car" ? "VIN verification" : item.type === "yacht" ? "Hull verification" : "Serial verification"}</p>
            <h3>${item.type === "car" ? `VIN ${item.id.toUpperCase()}-CV-2026` : item.type === "yacht" ? `HIN ${item.id.toUpperCase()}-MONACO` : `MSN ${item.id.toUpperCase()}-AIR`}</h3>
            <p>Identity, registration, lien status, insurance validity, ownership authority, and export readiness are checked through the private office.</p>
          </section>
          <section class="about-card ownership-timeline">
            <p class="eyebrow">Ownership timeline</p>
            <h3>Clean provenance</h3>
            <span>${item.year} factory delivery</span>
            <span>${item.ownership}</span>
            <span>${item.service}</span>
            <span>2026 Crown Vault verification</span>
          </section>
          <section class="about-card">
            <p class="eyebrow">Global delivery</p>
            <h3>${deliveryMode(item)}</h3>
            <p>Route planning, customs documentation, import duty estimate, shipment tracking, and dedicated concierge contact through final handover.</p>
          </section>
        </div>
        <h2>Luxury features</h2>
        <ul class="feature-list">${item.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        <h2>Similar private listings</h2>
        <div class="listing-grid">${comparable.map(card).join("")}</div>
      </div>
      <aside class="side-panel">
        <div class="finance-card">
          <p class="eyebrow">Asking price</p>
          <h2>${price(item.price)}</h2>
          <p>Estimated structured payment from <strong>${emi(item.price)}/mo</strong>, subject to private finance approval.</p>
          <div class="emi-tool" data-emi-price="${item.price}">
            <label>Down payment<input type="range" min="10" max="60" value="25" data-emi-down></label>
            <label>Tenure months<input type="range" min="12" max="84" value="60" step="12" data-emi-tenure></label>
            <label>Annual rate<input type="range" min="7" max="16" value="10" step="0.5" data-emi-rate></label>
            <strong data-emi-output>Calculating...</strong>
          </div>
          <div class="detail-actions">
            <button class="button ghost ${isSaved(item.id) ? "active" : ""}" data-wishlist="${item.id}">${isSaved(item.id) ? "Saved to wishlist" : "Save to wishlist"}</button>
            <button class="button ghost ${isCompared(item.id) ? "active" : ""}" data-compare="${item.id}">${isCompared(item.id) ? "In compare" : "Add to compare"}</button>
            <button class="button ghost" data-chat-vehicle="${item.id}">Ask about this vehicle</button>
            <a class="button primary buy" href="#/checkout/${item.id}">Buy now</a>
            <button class="button ghost" data-reserve="${item.id}">Reserve vehicle</button>
            <button class="button ghost" data-inquire="${item.id}">Speak to concierge</button>
            <button class="button ghost" data-inspection="${item.id}">Request live inspection</button>
            <a class="button ghost" target="_blank" rel="noreferrer" href="https://wa.me/971555010099?text=I%20am%20interested%20in%20${encodeURIComponent(title(item))}">WhatsApp inquiry</a>
          </div>
        </div>
        <div class="dealer-card">
          <p class="eyebrow">Global private office</p>
          <h3>Crown Vault Private Office</h3>
          <p>Mayfair • Dubai • Monaco. Inspection, escrow, transport, finance, export documentation, and handover available by appointment.</p>
        </div>
      </aside>
    </section>
  `;
}

function checkoutFields(item) {
  if (item.type === "car") {
    return `
      <label>Delivery country<input name="deliveryCountry" required placeholder="United Arab Emirates"></label>
      <label>City<input name="city" required placeholder="Dubai"></label>
      <label>Exact delivery location<input name="deliveryLocation" required placeholder="Villa district, tower, estate, or private office"></label>
      <label>Villa/apartment delivery<select name="residenceType"><option>Villa delivery</option><option>Apartment tower delivery</option><option>Private office handover</option><option>Collector garage handover</option></select></label>
      <label>Garage access details<textarea name="garageAccess" placeholder="Ramp clearance, security gate, basement height, delivery window"></textarea></label>
      <label>Transport option<select name="supportOption"><option>Luxury enclosed transport</option><option>Climate-controlled collector trailer</option><option>Air freight delivery</option><option>Discreet covered flatbed</option></select></label>
    `;
  }
  if (item.type === "yacht") {
    return `
      <label>Port location<input name="deliveryCountry" required placeholder="Monaco / Dubai / Maldives"></label>
      <label>Marina name<input name="city" required placeholder="Port Hercule"></label>
      <label>Island destination<input name="deliveryLocation" placeholder="St Barths, Sardinia, Maldives private island"></label>
      <label>Docking assistance<select name="residenceType"><option>Full docking assistance</option><option>Marina berth coordination</option><option>Owner captain handover</option><option>Remote island tender support</option></select></label>
      <label>Ocean delivery route<textarea name="garageAccess" placeholder="Origin port, preferred route, customs stops, final marina"></textarea></label>
      <label>Captain/crew support<select name="supportOption"><option>Captain and crew for delivery</option><option>Permanent crew sourcing</option><option>Temporary passage crew</option><option>Owner-managed voyage</option></select></label>
    `;
  }
  return `
    <label>Airport delivery location<input name="deliveryCountry" required placeholder="London Luton / Dubai DWC / Nice"></label>
    <label>Private hangar<input name="city" required placeholder="ExecuJet private hangar"></label>
    <label>Island airstrip<input name="deliveryLocation" placeholder="Optional private island or secondary airstrip"></label>
    <label>Aviation registration details<textarea name="residenceType" placeholder="Preferred jurisdiction, tail number reservation, operator details"></textarea></label>
    <label>Charter management<select name="supportOption"><option>Charter management onboarding</option><option>Private-only operation</option><option>Aircraft management proposal</option><option>Crew and maintenance program</option></select></label>
    <label>Hangar access and security<textarea name="garageAccess" placeholder="FBO, security protocol, customs handling, arrival window"></textarea></label>
  `;
}

function checkoutPage(id) {
  const item = inventory.find((asset) => asset.id === id);
  if (!item) return notFound();
  const duty = taxEstimate(item);
  return `
    <section class="page-hero fade-in">
      <p class="eyebrow">Secure acquisition</p>
      <h1>Buy ${title(item)}.</h1>
      <p>Full INR payment, luxury invoice generation, secure gateway UI, wire transfer, crypto settlement, and concierge-led ${deliveryMode(item)}.</p>
    </section>
    <section class="checkout-layout section">
      <form class="checkout-form" id="checkoutForm" data-checkout-id="${item.id}">
        <div class="checkout-block">
          <p class="eyebrow">Buyer identity</p>
          <label>Full legal name<input name="buyerName" required placeholder="Buyer or entity name"></label>
          <label>Email<input type="email" name="email" required placeholder="private@example.com"></label>
          <label>Phone / WhatsApp<input name="phone" required placeholder="+971 55 000 0000"></label>
          <label>VIP membership<select name="membership"><option>Crown Black member</option><option>Private family office</option><option>New verified buyer</option><option>Representative / assistant</option></select></label>
        </div>
        <div class="checkout-block">
          <p class="eyebrow">${assetName(item.type)} delivery</p>
          ${checkoutFields(item)}
          <div class="delivery-estimate">
            <strong>${deliveryEta(item)}</strong>
            <span>Estimated timeline after cleared payment, inspection release, and export documentation.</span>
          </div>
        </div>
        <div class="checkout-block">
          <p class="eyebrow">Payment</p>
          <label>Payment method<select name="paymentMethod"><option>Secure payment gateway</option><option>Wire transfer</option><option>Crypto payment</option></select></label>
          <label>Invoice name<input name="invoiceName" required placeholder="Personal name or company"></label>
          <label>Billing address<textarea name="billingAddress" required placeholder="Registered billing address"></textarea></label>
          <label>Transaction note<textarea name="transactionNote" placeholder="Escrow preference, special handover requests, bank reference"></textarea></label>
          <div class="payment-panel">
            <span>Razor-secure gateway simulation</span>
            <strong>${price(item.price)}</strong>
            <small>Alternative settlement: private bank wire or BTC/ETH/USDT desk.</small>
          </div>
          <button class="button primary" type="submit">Complete full payment</button>
        </div>
      </form>
      <aside class="checkout-summary">
        ${luxImg(item.image, title(item), item.type)}
        <h2>${title(item)}</h2>
        <strong class="price">${price(item.price)}</strong>
        <div class="invoice-lines">
          <span>Asset price <strong>${price(item.price)}</strong></span>
          <span>Estimated import duty <strong>${price(duty)}</strong></span>
          <span>Warranty <strong>${warrantyLabel(item)}</strong></span>
          <span>Delivery <strong>${deliveryMode(item)}</strong></span>
          <span>Total estimate <strong>${price(item.price + duty)}</strong></span>
        </div>
      </aside>
    </section>
  `;
}

function successPage(id) {
  const purchase = state.purchases.find((item) => item.invoice === id) || state.purchases[0];
  if (!purchase) return `<section class="page-hero"><p class="eyebrow">No invoice</p><h1>No completed purchase found.</h1><a class="button primary" href="#/cars">Browse inventory</a></section>`;
  const item = inventory.find((asset) => asset.id === purchase.assetId);
  return `
    <section class="success-screen fade-in">
      <div class="success-mark">CV</div>
      <p class="eyebrow">Transaction secured</p>
      <h1>${title(item)} purchased.</h1>
      <p>Invoice ${purchase.invoice} has been generated for ${purchase.buyerName}. Your concierge desk is coordinating ${deliveryMode(item)} to ${purchase.deliveryLocation || purchase.city}.</p>
      <div class="invoice-card">
        <span>Paid amount <strong>${price(item.price)}</strong></span>
        <span>Payment method <strong>${purchase.paymentMethod}</strong></span>
        <span>Delivery timeline <strong>${deliveryEta(item)}</strong></span>
        <span>Concierge <strong>+971 55 501 0099</strong></span>
      </div>
      <div class="hero-actions">
        <a class="button primary" href="#/tracking/${purchase.invoice}">Track delivery</a>
        <a class="button ghost" href="#/dashboard">Private office</a>
      </div>
    </section>
  `;
}

function trackingPage(invoice = "") {
  const purchases = invoice ? state.purchases.filter((item) => item.invoice === invoice) : state.purchases;
  return `
    <section class="page-hero fade-in">
      <p class="eyebrow">Live delivery tracking</p>
      <h1>Shipment progress.</h1>
      <p>Track port, airport, enclosed transporter, customs, and concierge handover milestones after purchase.</p>
    </section>
    <section class="section">
      ${purchases.length ? purchases.map((purchase) => {
        const item = inventory.find((asset) => asset.id === purchase.assetId);
        return `<article class="tracking-card">
          ${luxImg(item.image, title(item), item.type)}
          <div>
            <p class="eyebrow">${purchase.invoice}</p>
            <h2>${title(item)}</h2>
            <p>${deliveryMode(item)} to ${purchase.deliveryLocation || purchase.city}. Concierge contact: +971 55 501 0099.</p>
            <div class="progress-rail">
              <span class="done">Payment secured</span>
              <span class="done">Invoice generated</span>
              <span class="active">Export clearance</span>
              <span>Port / airport dispatch</span>
              <span>Final handover</span>
            </div>
          </div>
        </article>`;
      }).join("") : `<p>No deliveries yet. Complete a purchase to activate shipment progress, port/airport tracking, and concierge handover updates.</p>`}
    </section>
  `;
}

function loginPage() {
  return authPage("login");
}

function signupPage() {
  return authPage("signup");
}

function authPage(mode) {
  const signup = mode === "signup";
  return `
    <section class="auth-page" style="--auth-image:url('${media(signup ? "luxury dealership private office interior" : "Rolls Royce interior luxury cabin", 1400, 1200)}')">
      <div class="auth-image"></div>
      <div class="auth-card fade-in">
        <p class="eyebrow">${signup ? "Private membership" : "Member access"}</p>
        <h1>${signup ? "Create your vault profile." : "Welcome back."}</h1>
        <p>${signup ? "Register for verified access, saved vehicles, inspection dossiers, and concierge appointment scheduling." : "Enter the private office to manage saved listings, view requests, and acquisition notes."}</p>
        <form id="${signup ? "signupForm" : "loginForm"}">
          ${signup ? '<label>Profile photo<input type="file" accept="image/*"></label><label>Full name<input required placeholder="Full name"></label>' : ""}
          <label>Email<input type="email" required placeholder="private@example.com"></label>
          <label>Password<input type="password" required placeholder="••••••••"></label>
          ${signup ? '<label>Phone verification<input required placeholder="+971 55 000 0000"></label><label>Preferred interest<select><option>Luxury cars</option><option>Yachts</option><option>Private jets</option><option>Concierge acquisition</option></select></label><label>Email verification code<input placeholder="6-digit code"></label>' : '<div class="auth-options"><label class="checkbox"><input type="checkbox">Remember me</label><a href="#/signup">Request access</a></div>'}
          <button class="button primary" type="submit">${signup ? "Create account" : "Login"}</button>
          <button class="button ghost" type="button">Continue with Google</button>
          <button class="button ghost" type="button">Continue with Apple</button>
        </form>
      </div>
    </section>
  `;
}

function dashboardPage() {
  const saved = byIds(state.wishlist);
  const recent = byIds(state.recent);
  const purchased = state.purchases.map((purchase) => ({ purchase, item: inventory.find((asset) => asset.id === purchase.assetId) })).filter((entry) => entry.item);
  return `
    <section class="dashboard fade-in">
      <aside class="dashboard-sidebar">
        <p class="eyebrow">Buyer dashboard</p>
        <h3>Crown Vault Member</h3>
        <p>Saved dossiers, appointment requests, finance notes, and concierge updates.</p>
      </aside>
      <div class="dashboard-main">
        <h1>Private office</h1>
        <div class="dashboard-grid">
          <div class="dash-card"><span class="stat-label">Saved listings</span><strong>${saved.length}</strong></div>
          <div class="dash-card"><span class="stat-label">Compare queue</span><strong>${state.compare.length}</strong></div>
          <div class="dash-card"><span class="stat-label">Recently viewed</span><strong>${recent.length}</strong></div>
          <div class="dash-card"><span class="stat-label">Purchased assets</span><strong>${purchased.length}</strong></div>
          <div class="dash-card"><span class="stat-label">VIP tier</span><strong>Black</strong></div>
          <div class="dash-card"><span class="stat-label">Saved locations</span><strong>3</strong></div>
        </div>
        <h2>Active deliveries</h2>
        <div class="compare-grid">${purchased.length ? purchased.map(({ purchase, item }) => `<article class="compare-card">${luxImg(item.image, title(item), item.type)}<h3>${title(item)}</h3><span>${purchase.invoice}</span><span>${deliveryEta(item)}</span><a class="button primary" href="#/tracking/${purchase.invoice}">Track delivery</a></article>`).join("") : `<p>No purchased assets yet. Use Buy Now to activate delivery tracking.</p>`}</div>
        <h2>Saved delivery profiles</h2>
        <div class="dashboard-grid">
          <div class="dash-card"><span class="stat-label">Saved garage</span><strong>Dubai villa garage</strong><p>Enclosed transport access and security gate notes saved.</p></div>
          <div class="dash-card"><span class="stat-label">Saved dock</span><strong>Port Hercule</strong><p>Preferred marina, berth coordination, and captain handover notes saved.</p></div>
          <div class="dash-card"><span class="stat-label">Saved hangar</span><strong>London Luton FBO</strong><p>Private hangar, operator contact, and customs details saved.</p></div>
        </div>
        <h2>Saved assets</h2>
        <div class="listing-grid">${saved.length ? saved.map(card).join("") : `<p>No saved assets yet. Use Save on any listing to build a private shortlist.</p>`}</div>
        <h2>Recently viewed</h2>
        <div class="listing-grid">${recent.length ? recent.map(card).join("") : `<p>Your recently viewed dossiers will appear here.</p>`}</div>
      </div>
    </section>
  `;
}

function comparePage() {
  const items = byIds(state.compare);
  return `
    <section class="page-hero fade-in">
      <p class="eyebrow">Compare vehicles</p>
      <h1>Decide with calm precision.</h1>
      <p>Compare up to three saved dossiers across price, year, usage, powertrain, provenance, and availability.</p>
    </section>
    <section class="section">
      ${items.length ? `<div class="compare-grid">${items.map((item) => `
        <article class="compare-card">
          ${luxImg(item.image, title(item), item.type)}
          <h3>${title(item)}</h3>
          <strong class="price">${price(item.price)}</strong>
          <span>${availability(item)}</span>
          <span>${item.year}</span>
          <span>${usage(item)}</span>
          <span>${item.fuel} / ${item.transmission}</span>
          <span>${item.ownership}</span>
          <span>${item.registration}</span>
          <button class="button ghost" data-compare="${item.id}">Remove</button>
        </article>`).join("")}</div>` : `<p>No vehicles selected. Add Compare from any listing to build a side-by-side shortlist.</p>`}
    </section>
  `;
}

function conciergePage() {
  return `
    <section class="page-hero fade-in">
      <p class="eyebrow">VIP automotive concierge</p>
      <h1>Acquisition without noise.</h1>
      <p>Source, inspect, purchase, register, transport, export, and deliver the world's finest luxury cars, yachts, and private jets with AI-guided discreet advisory.</p>
    </section>
    <section class="section concierge-panel">
      <div class="concierge-copy">
        <h2>Private brokerage services.</h2>
        <p>Our office coordinates provenance review, inspection reporting, service validation, escrow support, enclosed transport, yacht crew handover, and aircraft logbook review.</p>
        <ul class="feature-list">
          <li>Off-market sourcing</li><li>Inspection report requests</li><li>Finance introductions</li><li>Global shipping</li><li>Dealer negotiation</li><li>VIP handover</li>
        </ul>
      </div>
      <div class="concierge-form">
        <form id="conciergeForm">
          <label>Name<input required></label>
          <label>Email<input required type="email"></label>
          <label>Requirement<select><option>Luxury car acquisition</option><option>Yacht brokerage</option><option>Private jet acquisition</option><option>Sell my vehicle</option></select></label>
          <label>Message<textarea placeholder="Tell us what belongs in your vault."></textarea></label>
          <button class="button primary" type="submit">Request consultation</button>
        </form>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    <section class="page-hero fade-in">
      <p class="eyebrow">About Crown Vault</p>
      <h1>A private marketplace for serious collectors.</h1>
      <p>Inspired by old-world brokerage houses, modern product restraint, and the confidence of authenticated provenance.</p>
    </section>
    <section class="section editorial-grid">
      <div class="about-card">
        <h2>Built for discretion.</h2>
        <p>Crown Vault presents second-hand exotic assets with complete context: condition, ownership history, service records, gallery material, price transparency, and concierge access.</p>
      </div>
      <div class="about-card">
        <h2>Designed for confidence.</h2>
        <p>Every buyer journey is structured around calm decision-making: shortlist, request dossier, schedule viewing, secure inspection, and proceed through a private acquisition desk.</p>
      </div>
    </section>
  `;
}

function notFound() {
  return `<section class="page-hero"><p class="eyebrow">Not found</p><h1>The requested dossier is unavailable.</h1><p>Please return to the vault.</p><a class="button primary" href="#/home">Home</a></section>`;
}

const routes = {
  home: homePage,
  cars: () => listingPage("car"),
  yachts: () => listingPage("yacht"),
  jets: () => listingPage("jet"),
  checkout: (_, id) => checkoutPage(id),
  success: (_, id) => successPage(id),
  tracking: (_, id) => trackingPage(id),
  concierge: conciergePage,
  about: aboutPage,
  compare: comparePage,
  login: loginPage,
  signup: signupPage,
  dashboard: dashboardPage
};

function render(forceTop = true) {
  const currentRouteKey = routeKey();
  const routeChanged = currentRouteKey !== lastRouteKey;
  const memory = getScrollMemory()[currentRouteKey];
  const targetScroll = !routeChanged && !forceTop ? window.scrollY : memory ? memory.y : 0;
  const [route = "home", detailId] = location.hash.replace("#/", "").split("/");
  app.classList.remove("page-ready");
  app.classList.add("page-transitioning");
  app.innerHTML = route === "detail" ? detailPage(detailId) : (routes[route] || routes.home)(route, detailId);
  nav.classList.remove("open");
  setActive(route);
  bindDynamicForms();
  bindPremiumFeatures();
  lastRouteKey = currentRouteKey;
  requestAnimationFrame(() => {
    window.scrollTo({ top: targetScroll, left: 0, behavior: "auto" });
    requestAnimationFrame(() => {
      if (Math.abs(window.scrollY - targetScroll) > 2) window.scrollTo({ top: targetScroll, left: 0, behavior: "auto" });
      app.classList.remove("page-transitioning");
      app.classList.add("page-ready");
      updateBackToTop();
      updateCompareDock();
    });
  });
}

function setActive(route) {
  document.querySelectorAll(".main-nav a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#/${route}`);
  });
}

function bindDynamicForms() {
  const filters = document.querySelector("#filters");
  if (filters) filters.addEventListener("input", applyFilters);
  const checkout = document.querySelector("#checkoutForm");
  if (checkout) checkout.addEventListener("submit", (event) => {
    event.preventDefault();
    const item = inventory.find((asset) => asset.id === checkout.dataset.checkoutId);
    if (!item) return;
    const data = Object.fromEntries(new FormData(checkout));
    const invoice = invoiceNumber();
    state.purchases = [{
      invoice,
      assetId: item.id,
      createdAt: new Date().toISOString(),
      buyerName: data.buyerName,
      email: data.email,
      phone: data.phone,
      paymentMethod: data.paymentMethod,
      city: data.city,
      deliveryLocation: data.deliveryLocation,
      supportOption: data.supportOption,
      deliveryCountry: data.deliveryCountry
    }, ...state.purchases].slice(0, 12);
    persistState();
    notify("Full payment secured and invoice generated");
    location.hash = `#/success/${invoice}`;
  });
  ["loginForm", "signupForm", "conciergeForm"].forEach((id) => {
    const form = document.querySelector(`#${id}`);
    if (form) form.addEventListener("submit", (e) => {
      e.preventDefault();
      location.hash = id === "loginForm" || id === "signupForm" ? "#/dashboard" : "#/home";
    });
  });
}

function bindPremiumFeatures() {
  document.querySelectorAll(".emi-tool").forEach((tool) => {
    const update = () => {
      const priceValue = Number(tool.dataset.emiPrice);
      const down = Number(tool.querySelector("[data-emi-down]").value);
      const months = Number(tool.querySelector("[data-emi-tenure]").value);
      const annual = Number(tool.querySelector("[data-emi-rate]").value);
      const principal = priceValue * (1 - down / 100);
      const monthlyRate = annual / 1200;
      const payment = principal * monthlyRate * ((1 + monthlyRate) ** months) / (((1 + monthlyRate) ** months) - 1);
      tool.querySelector("[data-emi-output]").textContent = `${price(Math.round(payment))}/mo after ${down}% down for ${months} months`;
    };
    tool.addEventListener("input", update);
    update();
  });

  document.querySelectorAll("[data-viewer360]").forEach((range) => {
    range.addEventListener("input", () => {
      const stage = range.closest(".viewer360")?.querySelector(".viewer360-stage img");
      if (stage) stage.style.transform = `scale(1.12) translateX(${(Number(range.value) - 50) * -0.18}%)`;
    });
    range.dispatchEvent(new Event("input"));
  });
}

function applyFilters(event) {
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  const type = form.dataset.type;
  state.preferences.budget = data.budget || state.preferences.budget || "";
  state.preferences.interest = type === "car" ? "Luxury cars" : type === "yacht" ? "Yachts" : "Private jets";
  persistState();
  const source = inventory.filter((item) => item.type === type);
  const filtered = source.filter((item) => {
    const mileageNumber = typeof item.mileage === "number" ? item.mileage : Number(String(item.mileage).replace(/\D/g, ""));
    const haystack = `${item.brand} ${item.model} ${item.exterior} ${item.interior}`.toLowerCase();
    return (!data.brand || item.brand === data.brand)
      && (!data.budget || item.price <= Number(data.budget))
      && (!data.year || item.year >= Number(data.year))
      && (!data.fuel || item.fuel === data.fuel)
      && (!data.transmission || item.transmission === data.transmission)
      && (!data.body || item.body === data.body)
      && (!data.color || haystack.includes(data.color.toLowerCase()))
      && (!data.ownership || item.ownership === data.ownership)
      && (!data.mileage || mileageNumber <= Number(data.mileage))
      && (!data.search || haystack.includes(data.search.toLowerCase()));
  });
  if (data.sort === "priceAsc") filtered.sort((a, b) => a.price - b.price);
  if (data.sort === "priceDesc") filtered.sort((a, b) => b.price - a.price);
  if (data.sort === "yearDesc") filtered.sort((a, b) => b.year - a.year);
  document.querySelector("#listingGrid").innerHTML = filtered.map(card).join("") || `<p>No matching private listings. Adjust the filters or ask concierge for off-market sourcing.</p>`;
  document.querySelector("#resultsCount").textContent = `${filtered.length} listings available`;
}

function notify(message) {
  let stack = document.querySelector("#notifyStack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "notifyStack";
    stack.className = "notify-stack";
    document.body.appendChild(stack);
  }
  const note = document.createElement("div");
  note.className = "toast";
  note.textContent = message;
  stack.appendChild(note);
  requestAnimationFrame(() => note.classList.add("show"));
  setTimeout(() => {
    note.classList.remove("show");
    setTimeout(() => note.remove(), 260);
  }, 2600);
}

function openGallery(id, index = 0) {
  const item = inventory.find((asset) => asset.id === id);
  if (!item) return;
  const images = [item.image, ...item.gallery];
  let current = Math.max(0, Math.min(index + 1, images.length - 1));
  const overlay = document.createElement("div");
  overlay.className = "gallery-overlay";
  overlay.innerHTML = `
    <button class="dialog-close" data-gallery-close>Close</button>
    <button class="gallery-nav prev" data-gallery-prev aria-label="Previous image">‹</button>
    <img src="${images[current]}" alt="${title(item)} fullscreen gallery">
    <button class="gallery-nav next" data-gallery-next aria-label="Next image">›</button>
    <span>${title(item)} / ${images.length} images</span>
  `;
  const image = overlay.querySelector("img");
  const renderImage = () => image.src = images[current];
  overlay.addEventListener("click", (event) => {
    if (event.target.matches("[data-gallery-close]") || event.target === overlay) overlay.remove();
    if (event.target.matches("[data-gallery-prev]")) {
      current = (current - 1 + images.length) % images.length;
      renderImage();
    }
    if (event.target.matches("[data-gallery-next]")) {
      current = (current + 1) % images.length;
      renderImage();
    }
  });
  document.body.appendChild(overlay);
}

function updateBackToTop() {
  document.querySelector("#backTop")?.classList.toggle("visible", window.scrollY > 700);
}

function updateCompareDock() {
  const dock = document.querySelector("#compareDock");
  if (!dock) return;
  const items = byIds(state.compare);
  dock.innerHTML = items.length
    ? `<span>${items.length}/3 comparing</span><a class="button primary" href="#/compare">View</a>`
    : `<span>Compare queue empty</span>`;
  dock.classList.toggle("visible", items.length > 0);
}

function installPremiumShell() {
  document.body.insertAdjacentHTML("beforeend", `
    <button class="back-top" id="backTop" data-back-top aria-label="Back to top">↑</button>
    <div class="compare-dock" id="compareDock"></div>
    <section class="chatbot" id="chatbot" aria-label="Crown Vault AI concierge">
      <button class="chatbot-toggle" id="chatToggle" aria-label="Open AI concierge">Concierge</button>
      <div class="chatbot-panel" id="chatPanel">
        <div class="chatbot-head"><div><span class="eyebrow">Offline AI</span><strong>Vault Concierge</strong></div><button id="chatClose" aria-label="Close concierge">Close</button></div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="quick-replies">
          <button data-chat-prompt="Recommend a car">Recommend</button>
          <button data-chat-prompt="Finance help">Finance</button>
          <button data-chat-prompt="Book test drive">Booking</button>
          <button data-chat-prompt="Dealership contact">Contact</button>
        </div>
        <form class="chat-input" id="chatForm">
          <button type="button" id="voiceButton" aria-label="Voice input">Voice</button>
          <input id="chatText" autocomplete="off" placeholder="Ask about vehicles, finance, booking..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  `);

  const panel = document.querySelector("#chatPanel");
  const messages = document.querySelector("#chatMessages");
  const addMessage = (text, who = "bot") => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${who}`;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  };
  const reply = (prompt) => {
    addMessage(prompt, "user");
    const typing = document.createElement("div");
    typing.className = "chat-bubble bot typing";
    typing.textContent = "Concierge is typing";
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
    setTimeout(() => {
      typing.remove();
      addMessage(localConciergeReply(prompt));
    }, 650);
  };

  addMessage("Good day. I work offline and can help with vehicles, finance estimates, recommendations, bookings, and Crown Vault contact options.");
  document.querySelector("#chatToggle").addEventListener("click", () => panel.classList.toggle("open"));
  document.querySelector("#chatClose").addEventListener("click", () => panel.classList.remove("open"));
  document.querySelector("#chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#chatText");
    if (!input.value.trim()) return;
    reply(input.value.trim());
    input.value = "";
  });
  document.querySelectorAll("[data-chat-prompt]").forEach((button) => button.addEventListener("click", () => reply(button.dataset.chatPrompt)));
  document.querySelector("#voiceButton").addEventListener("click", () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      notify("Voice input is unavailable in this browser");
      return;
    }
    const recognition = new Recognition();
    recognition.onresult = (event) => {
      document.querySelector("#chatText").value = event.results[0][0].transcript;
    };
    recognition.start();
  });
}

function localConciergeReply(prompt) {
  const text = prompt.toLowerCase();
  if (text.includes("finance") || text.includes("emi")) return "For INR finance, open any dossier and use the live EMI calculator. A typical private structure uses 20-35% down, 36-60 months, and approval depends on profile and asset age.";
  if (text.includes("book") || text.includes("test") || text.includes("viewing")) return "Use Book test drive on the dossier. The concierge can arrange showroom, residence, or private office viewing, with WhatsApp as the fastest confirmation channel.";
  if (text.includes("contact") || text.includes("dealer") || text.includes("whatsapp")) return "Crown Vault Private Office: +971 55 501 0099, concierge@crownvault.example, or the WhatsApp inquiry link in each listing.";
  if (text.includes("recommend") || text.includes("suggest")) {
    const picks = recommendationList().slice(0, 3).map(title).join(", ");
    return `Based on your local activity, I would shortlist: ${picks}. Save one or add up to three to Compare for a sharper decision.`;
  }
  if (text.includes("car") || text.includes("vehicle") || text.includes("info")) return "Each dossier includes price, year, usage, ownership, registration, insurance, service notes, gallery, availability, EMI, and concierge actions.";
  return "I can help with vehicle information, finance queries, bookings, recommendations, dealership contact, WhatsApp concierge, and shortlist comparison while staying fully offline.";
}

function installVehicleChatShell() {
  document.body.insertAdjacentHTML("beforeend", `
    <button class="back-top" id="backTop" data-back-top aria-label="Back to top">Top</button>
    <div class="compare-dock" id="compareDock"></div>
    <section class="chatbot" id="chatbot" aria-label="Crown Vault online vehicle AI">
      <button class="chatbot-toggle" id="chatToggle" aria-label="Open AI concierge"><span>AI</span></button>
      <div class="chatbot-panel" id="chatPanel">
        <div class="chatbot-head"><div><span class="eyebrow">Online concierge</span><strong>Vehicle AI</strong></div><button id="chatClose" aria-label="Close concierge">Close</button></div>
        <div class="chat-messages" id="chatMessages"></div>
        <div class="vehicle-picker">
          <input id="vehicleSearch" autocomplete="off" placeholder="Select a vehicle first" />
          <div class="vehicle-suggestions" id="vehicleSuggestions"></div>
        </div>
        <div class="quick-replies">
          <button data-chat-prompt="Market value">Value</button>
          <button data-chat-prompt="Engine specs">Specs</button>
          <button data-chat-prompt="Competitor comparison">Compare</button>
          <button data-chat-prompt="Resale trend">Resale</button>
        </div>
        <form class="chat-input" id="chatForm">
          <button type="button" id="voiceButton" aria-label="Voice input">Voice</button>
          <input id="chatText" autocomplete="off" placeholder="Ask after selecting a vehicle..." />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  `);

  const panel = document.querySelector("#chatPanel");
  const messages = document.querySelector("#chatMessages");
  const vehicleInput = document.querySelector("#vehicleSearch");
  const suggestions = document.querySelector("#vehicleSuggestions");
  let selectedVehicle = null;
  let selectedIntel = null;

  const addMessage = (text, who = "bot", image = "") => {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${who}`;
    bubble.innerHTML = `${image ? `<img src="${image}" alt="">` : ""}<span>${String(text).replace(/\n/g, "<br>")}</span>`;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  };

  const setSuggestions = (items) => {
    suggestions.innerHTML = items.map((item) => `<button type="button" data-chat-select="${item.id}">${title(item)}<span>${price(item.price)}</span></button>`).join("");
  };

  const selectVehicle = async (item) => {
    selectedVehicle = item;
    selectedIntel = null;
    panel.classList.add("open");
    vehicleInput.value = title(item);
    setSuggestions([]);
    addMessage(`Selected ${title(item)}. Fetching live market intelligence...`, "bot", item.image);
    const typing = document.createElement("div");
    typing.className = "chat-bubble bot typing";
    typing.textContent = "Checking online market signals";
    messages.appendChild(typing);
    selectedIntel = await fetchVehicleIntel(item);
    typing.remove();
    addMessage(vehicleSummary(item, selectedIntel), "bot");
  };

  const answer = async (prompt) => {
    addMessage(prompt, "user");
    if (!selectedVehicle) {
      addMessage("Please select a vehicle first. Search by brand or model, or tap Ask AI on any listing.");
      vehicleInput.focus();
      return;
    }
    const typing = document.createElement("div");
    typing.className = "chat-bubble bot typing";
    typing.textContent = "Concierge is typing";
    messages.appendChild(typing);
    selectedIntel = selectedIntel || await fetchVehicleIntel(selectedVehicle);
    try {
      const reply = await fetchConciergeChat(prompt, selectedVehicle, selectedIntel);
      typing.remove();
      addMessage(reply);
    } catch {
      setTimeout(() => {
        typing.remove();
        addMessage(vehicleAiReply(prompt, selectedVehicle, selectedIntel));
      }, 260);
    }
  };

  addMessage("Good day. Select a vehicle first, then ask the live AI concierge about value, specs, resale, competitors, delivery, payment, insurance, maintenance, or upcoming launches.");
  setSuggestions(inventory.slice(0, 4));
  document.querySelector("#chatToggle").addEventListener("click", () => panel.classList.toggle("open"));
  document.querySelector("#chatClose").addEventListener("click", () => panel.classList.remove("open"));
  vehicleInput.addEventListener("input", () => setSuggestions(vehicleSearch(vehicleInput.value || "rolls")));
  suggestions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-chat-select]");
    if (!button) return;
    const item = inventory.find((asset) => asset.id === button.dataset.chatSelect);
    if (item) selectVehicle(item);
  });
  document.addEventListener("cv:chat-vehicle", (event) => {
    const item = inventory.find((asset) => asset.id === event.detail);
    if (item) selectVehicle(item);
  });
  document.querySelectorAll("[data-chat-prompt]").forEach((button) => button.addEventListener("click", () => answer(button.dataset.chatPrompt)));
  document.querySelector("#chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#chatText");
    if (!input.value.trim()) return;
    answer(input.value.trim());
    input.value = "";
  });
  document.querySelector("#voiceButton").addEventListener("click", () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      notify("Voice input is unavailable in this browser");
      return;
    }
    const recognition = new Recognition();
    recognition.onresult = (event) => {
      document.querySelector("#chatText").value = event.results[0][0].transcript;
    };
    recognition.start();
  });
}

function vehicleAiReply(prompt, item, intel) {
  const text = prompt.toLowerCase();
  if (text.includes("book") || text.includes("test") || text.includes("viewing")) return `I can arrange a private viewing for ${title(item)}. Use Book test drive on the dossier or WhatsApp concierge for fastest confirmation.`;
  if (text.includes("competitor") || text.includes("compare")) return `${title(item)} compares most directly with ${intel.competitors.join(", ")}. Its strongest points are provenance, condition, service history, and specification.`;
  if (text.includes("alternative") || text.includes("recommend") || text.includes("budget")) {
    const picks = recommendationList().filter((asset) => asset.type === item.type && asset.id !== item.id).slice(0, 3).map((asset) => `${title(asset)} (${price(asset.price)})`).join(", ");
    return `Better alternatives to consider: ${picks}. I would compare provenance, delivery timing, warranty coverage, and resale demand before payment.`;
  }
  if (text.includes("trend") || text.includes("demand") || text.includes("depreciation") || text.includes("appreciation")) return `Market demand: ${intel.demand}. Resale outlook: ${intel.trend}. Estimated resale value is ${price(intel.resale_value_inr)} against current market value near ${price(intel.market_value_inr)}.`;
  if (text.includes("maintenance") || text.includes("insurance")) return `Maintenance estimate: ${intel.maintenance_cost}. Insurance estimate: ${intel.insurance_estimate}. Concierge can refine this by country, usage, crew, storage, and warranty plan.`;
  if (text.includes("facelift") || text.includes("new model") || text.includes("upcoming")) return intel.facelift;
  if (text.includes("resale")) return `Estimated resale value: ${price(intel.resale_value_inr)}. Stronger resale depends on authorised service records, low usage, rare color, and clean ownership.`;
  if (text.includes("engine") || text.includes("spec") || text.includes("horse") || text.includes("torque") || text.includes("speed")) return `${intel.engine}. Output is around ${intel.horsepower} hp and ${intel.torque_nm} Nm, with top speed near ${intel.top_speed_kmph} km/h.`;
  if (text.includes("market") || text.includes("value") || text.includes("price")) return `Current market value estimate for ${title(item)}: ${price(intel.market_value_inr)}. Asking price shown: ${price(item.price)}.`;
  if (text.includes("fuel") || text.includes("mileage")) return `Fuel type: ${item.fuel}. Mileage/efficiency: ${intel.mileage}.`;
  if (text.includes("owner") || text.includes("service")) return `Ownership: ${item.ownership}. Service history: ${item.service}. Insurance: ${item.insurance}.`;
  if (text.includes("feature") || text.includes("luxury")) return `Luxury features include ${item.features.join(", ")} with ${item.exterior} exterior and ${item.interior} interior.`;
  return vehicleSummary(item, intel);
}

document.addEventListener("click", (event) => {
  const routeLink = event.target.closest('a[href^="#/"]');
  if (routeLink) saveCurrentScroll();

  const wishlist = event.target.closest("[data-wishlist]");
  if (wishlist) {
    event.preventDefault();
    toggleWishlist(wishlist.dataset.wishlist);
    return;
  }

  const compare = event.target.closest("[data-compare]");
  if (compare) {
    event.preventDefault();
    toggleCompare(compare.dataset.compare);
    return;
  }

  const gallery = event.target.closest("[data-gallery]");
  if (gallery) {
    event.preventDefault();
    openGallery(gallery.dataset.gallery, Number(gallery.dataset.galleryIndex || 0));
    return;
  }

  const chatVehicle = event.target.closest("[data-chat-vehicle]");
  if (chatVehicle) {
    event.preventDefault();
    document.dispatchEvent(new CustomEvent("cv:chat-vehicle", { detail: chatVehicle.dataset.chatVehicle }));
    return;
  }

  const booking = event.target.closest("[data-booking]");
  if (booking) {
    event.preventDefault();
    const item = inventory.find((asset) => asset.id === booking.dataset.booking);
    if (item) {
      document.querySelector("#inquiryAsset").value = `Test-drive booking: ${title(item)}`;
      document.querySelector("#inquiryNote").textContent = "Choose WhatsApp or phone for the fastest appointment confirmation.";
      document.querySelector("#inquiryDialog").showModal();
    }
    return;
  }

  const reserve = event.target.closest("[data-reserve]");
  if (reserve) {
    event.preventDefault();
    const item = inventory.find((asset) => asset.id === reserve.dataset.reserve);
    if (item) {
      document.querySelector("#inquiryAsset").value = `Reservation request: ${title(item)}`;
      document.querySelector("#inquiryNote").textContent = "A refundable reservation hold and payment instructions will be prepared by the private office.";
      document.querySelector("#inquiryDialog").showModal();
    }
    return;
  }

  const inspection = event.target.closest("[data-inspection]");
  if (inspection) {
    event.preventDefault();
    const item = inventory.find((asset) => asset.id === inspection.dataset.inspection);
    if (item) {
      document.querySelector("#inquiryAsset").value = `Live inspection request: ${title(item)}`;
      document.querySelector("#inquiryNote").textContent = "Concierge will arrange a live video inspection with condition report, identity verification, and delivery readiness.";
      document.querySelector("#inquiryDialog").showModal();
    }
    return;
  }

  const sound = event.target.closest("[data-sound-preview]");
  if (sound) {
    event.preventDefault();
    const item = inventory.find((asset) => asset.id === sound.dataset.soundPreview);
    notify(`${title(item)} sound preview queued for concierge playback`);
    return;
  }

  const backTop = event.target.closest("[data-back-top]");
  if (backTop) {
    resetScrollTop("smooth");
    return;
  }

  const button = event.target.closest("[data-inquire]");
  if (!button) return;
  const item = inventory.find((asset) => asset.id === button.dataset.inquire);
  if (!item) return;
  document.querySelector("#inquiryAsset").value = title(item);
  document.querySelector("#inquiryNote").textContent = "";
  document.querySelector("#inquiryDialog").showModal();
});

document.querySelector("#closeInquiry").addEventListener("click", () => document.querySelector("#inquiryDialog").close());
document.querySelector("#inquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#inquiryNote").textContent = "Your request has been received. A private advisor will respond within 24 hours.";
  notify("Concierge request received");
});

window.addEventListener("scroll", () => {
  if (!scrollSaveTick) {
    scrollSaveTick = true;
    requestAnimationFrame(() => {
      saveCurrentScroll();
      updateBackToTop();
      scrollSaveTick = false;
    });
  }
}, { passive: true });
window.addEventListener("hashchange", () => {
  saveCurrentScroll();
  render(true);
});
window.addEventListener("beforeunload", saveCurrentScroll);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveCurrentScroll();
});
window.addEventListener("pageshow", (event) => {
  if (event.persisted) requestAnimationFrame(() => restoreRouteScroll(routeKey(), "auto"));
});

let touchStartX = 0;
let touchStartY = 0;
window.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}, { passive: true });
window.addEventListener("touchend", (event) => {
  const dx = event.changedTouches[0].clientX - touchStartX;
  const dy = event.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 80 && Math.abs(dy) < 50) {
    const order = ["#/home", "#/cars", "#/yachts", "#/jets", "#/concierge"];
    const index = Math.max(0, order.indexOf(routeKey()));
    const next = dx < 0 ? order[Math.min(order.length - 1, index + 1)] : order[Math.max(0, index - 1)];
    if (next && next !== routeKey()) location.hash = next;
  }
}, { passive: true });

document.addEventListener("mouseover", (event) => {
  const link = event.target.closest('a[href^="#/"]');
  if (link) sessionStore.set("cvPreloadedRoute", { href: link.getAttribute("href"), at: Date.now() });
});

if (!location.hash) {
  history.replaceState(null, "", `${location.pathname}${location.search}#/home`);
}
applyTheme();
installVehicleChatShell();
render(true);
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js").catch(() => {});
}
