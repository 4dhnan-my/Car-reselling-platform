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
let lastRouteKey = "";

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

window.addEventListener("load", () => setTimeout(() => document.querySelector("#loader").classList.add("hidden"), 650));
document.querySelector("#menuToggle").addEventListener("click", () => nav.classList.toggle("open"));
document.querySelector("#newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.querySelector("button").textContent = "Subscribed";
});

function price(value) {
  if (value >= 10000000) {
    const crore = value / 10000000;
    return `₹ ${Number.isInteger(crore) ? crore : crore.toFixed(1)} Cr`;
  }
  const lakh = value / 100000;
  return `₹ ${Number.isInteger(lakh) ? lakh : lakh.toFixed(1)} Lakh`;
}

function emi(value) { return price(Math.round(value * 0.016)); }
function title(item) { return `${item.brand} ${item.model}`; }
function usage(item) { return typeof item.mileage === "number" ? `${item.mileage.toLocaleString("en-IN")} km` : item.mileage; }

function card(item) {
  return `
    <article class="listing-card fade-in">
      <a class="listing-image" href="#/detail/${item.id}" aria-label="View ${title(item)}">
        ${luxImg(item.image, title(item), item.type)}
        <span class="badge">${item.type === "car" ? "Certified pre-owned" : "Private sale"}</span>
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
          <button class="button ghost" data-inquire="${item.id}">Contact concierge</button>
        </div>
      </div>
    </article>
  `;
}

function homePage() {
  const featured = [cars[0], cars[8], cars[16], yachts[1], jets[0], cars[28]];
  return `
    <section class="hero">
      <div class="hero-media">
        <video autoplay muted loop playsinline preload="metadata" poster="${heroImage}">
          <source src="https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4" type="video/mp4">
        </video>
        ${luxImg(heroImage, "Private luxury vehicle showroom", "hero", "eager")}
      </div>
      <div class="hero-content fade-in">
        <p class="eyebrow">Private pre-owned marketplace</p>
        <h1>PRE-OWNED. PERFECTED.</h1>
        <p>The world’s most exclusive luxury vehicles, curated for distinguished buyers.</p>
        <div class="hero-actions">
          <a class="button primary" href="#/cars">Enter the car vault</a>
          <a class="button ghost" href="#/concierge">Speak to concierge</a>
        </div>
      </div>
    </section>
    <section class="stats">
      <div class="stat"><strong>${cars.length}</strong><span class="stat-label">Luxury cars</span></div>
      <div class="stat"><strong>${yachts.length}</strong><span class="stat-label">Yachts</span></div>
      <div class="stat"><strong>${jets.length}</strong><span class="stat-label">Private jets</span></div>
      <div class="stat"><strong>24h</strong><span class="stat-label">Concierge response</span></div>
    </section>
    <section class="section">
      <div class="section-heading">
        <div><p class="eyebrow">Featured acquisitions</p><h2>Quietly exceptional inventory.</h2></div>
        <p>Every listing is positioned like a private dossier: ownership, service history, gallery, inspection access, financing estimate, and concierge contact.</p>
      </div>
      <div class="listing-grid">${featured.map(card).join("")}</div>
    </section>
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
      <p>Discreet, verified second-hand listings presented with the restraint of a private brokerage office.</p>
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
      </form>
      <div id="resultsCount" class="eyebrow">${items.length} listings available</div>
      <div class="listing-grid" id="listingGrid">${items.map(card).join("")}</div>
    </section>
  `;
}

function detailPage(id) {
  const item = inventory.find((asset) => asset.id === id);
  if (!item) return notFound();
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
          ${item.gallery.map((src, i) => luxImg(src, `${title(item)} gallery image ${i + 1}`, item.type)).join("")}
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
          <div class="detail-actions">
            <button class="button primary" data-inquire="${item.id}">Contact concierge</button>
            <button class="button ghost" data-inquire="${item.id}">Schedule viewing</button>
            <button class="button ghost" data-inquire="${item.id}">Request inspection report</button>
            <a class="button ghost" target="_blank" rel="noreferrer" href="https://wa.me/971555010099?text=I%20am%20interested%20in%20${encodeURIComponent(title(item))}">WhatsApp inquiry</a>
          </div>
        </div>
        <div class="dealer-card">
          <p class="eyebrow">Dealer information</p>
          <h3>Crown Vault Private Office</h3>
          <p>Mayfair • Dubai • Monaco. Inspection, escrow, transport, finance, export documentation, and handover available by appointment.</p>
        </div>
      </aside>
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
  const saved = [cars[0], cars[8], yachts[2], jets[1]];
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
          <div class="dash-card"><span class="stat-label">Saved listings</span><strong>4</strong></div>
          <div class="dash-card"><span class="stat-label">Viewing requests</span><strong>2</strong></div>
          <div class="dash-card"><span class="stat-label">Inspection reports</span><strong>3</strong></div>
        </div>
        <h2>Saved assets</h2>
        <div class="listing-grid">${saved.map(card).join("")}</div>
      </div>
    </section>
  `;
}

function conciergePage() {
  return `
    <section class="page-hero fade-in">
      <p class="eyebrow">VIP automotive concierge</p>
      <h1>Acquisition without noise.</h1>
      <p>Source, inspect, finance, register, transport, export, and deliver the world’s finest pre-owned vehicles with discreet advisory.</p>
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
  concierge: conciergePage,
  about: aboutPage,
  login: loginPage,
  signup: signupPage,
  dashboard: dashboardPage
};

function render(forceTop = true) {
  const currentRouteKey = routeKey();
  const shouldResetScroll = forceTop || currentRouteKey !== lastRouteKey;
  if (shouldResetScroll) resetScrollTop("auto");
  const [route = "home", detailId] = location.hash.replace("#/", "").split("/");
  app.classList.remove("page-ready");
  app.innerHTML = route === "detail" ? detailPage(detailId) : (routes[route] || routes.home)();
  nav.classList.remove("open");
  setActive(route);
  bindDynamicForms();
  lastRouteKey = currentRouteKey;
  requestAnimationFrame(() => {
    if (shouldResetScroll) resetScrollTop("auto");
    app.classList.add("page-ready");
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
  ["loginForm", "signupForm", "conciergeForm"].forEach((id) => {
    const form = document.querySelector(`#${id}`);
    if (form) form.addEventListener("submit", (e) => {
      e.preventDefault();
      location.hash = id === "loginForm" || id === "signupForm" ? "#/dashboard" : "#/home";
    });
  });
}

function applyFilters(event) {
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  const type = form.dataset.type;
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
  document.querySelector("#listingGrid").innerHTML = filtered.map(card).join("") || `<p>No matching private listings. Adjust the filters or ask concierge for off-market sourcing.</p>`;
  document.querySelector("#resultsCount").textContent = `${filtered.length} listings available`;
}

document.addEventListener("click", (event) => {
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
});

window.addEventListener("hashchange", () => render(true));
window.addEventListener("popstate", () => requestAnimationFrame(() => resetScrollTop("auto")));
window.addEventListener("pageshow", (event) => {
  if (event.persisted) requestAnimationFrame(() => resetScrollTop("auto"));
});

if (!location.hash) {
  history.replaceState(null, "", `${location.pathname}${location.search}#/home`);
}
render(true);
