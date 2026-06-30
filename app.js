/* =============================================================
   COSMOS — Solar System Explorer + Asteroid Defense
   Real planets · moons · comet · shooting stars · nebula
   Asteroid Defense game with waves, combos, shields
   ============================================================= */

// ─── Solar System Data ──────────────────────────────────────
const PLANETS = [
  {
    id:'sun', name:'The Sun', tagline:'Our Home Star',
    orbitRadius:0, displayRadius:38, orbitalPeriod:1,
    info:{
      type:'G2V Main-Sequence Star', diameter:'1,391,000 km',
      mass:'1.989 × 10³⁰ kg', surfaceTemp:'5,500 °C',
      coreTemp:'15 million °C', age:'4.6 billion years',
      composition:'73% H, 25% He', luminosity:'3.828 × 10²⁶ W',
    },
    description:'The Sun contains 99.86% of the mass of the entire Solar System. Its core fuses 600 million tonnes of hydrogen into helium every second, producing the energy that sustains life on Earth.',
    moons:[], glowColor:'rgba(255,180,40,.3)',
  },
  {
    id:'mercury', name:'Mercury', tagline:'The Swift Planet',
    orbitRadius:72, displayRadius:4.5, orbitalPeriod:88,
    info:{ diameter:'4,879 km', distance:'57.9 M km', orbitalPeriod:'88 days', dayLength:'58.6 Earth days', surfaceTemp:'-180 to 430 °C', gravity:'3.7 m/s²', atmosphere:'Virtually none', moons:'0' },
    description:'Mercury is the smallest planet and closest to the Sun. Despite having no atmosphere to retain heat, its Sun-facing side can reach 430 °C while the dark side plunges to -180 °C.',
    moons:[], glowColor:'rgba(140,126,108,.25)',
  },
  {
    id:'venus', name:'Venus', tagline:'Earth\'s Toxic Twin',
    orbitRadius:108, displayRadius:7, orbitalPeriod:225,
    info:{ diameter:'12,104 km', distance:'108.2 M km', orbitalPeriod:'225 days', dayLength:'243 Earth days', surfaceTemp:'465 °C', gravity:'8.87 m/s²', atmosphere:'96.5% CO₂', moons:'0' },
    description:'Venus spins backwards compared to most planets. Its thick CO₂ atmosphere creates a runaway greenhouse effect, making it the hottest planet — even hotter than Mercury.',
    moons:[], glowColor:'rgba(220,190,120,.25)',
  },
  {
    id:'earth', name:'Earth', tagline:'The Blue Marble',
    orbitRadius:152, displayRadius:7.5, orbitalPeriod:365.25,
    info:{ diameter:'12,742 km', distance:'149.6 M km', orbitalPeriod:'365.25 days', dayLength:'24 hours', surfaceTemp:'-89 to 57 °C', gravity:'9.81 m/s²', atmosphere:'78% N₂, 21% O₂', moons:'1' },
    description:'Earth is the only known planet to harbour life. Its liquid water, magnetic field, and oxygen-rich atmosphere create uniquely habitable conditions in our Solar System.',
    moons:[
      { name:'Moon', orbitRadius:18, displayRadius:2.5, orbitalPeriod:27.3, color:'#C8C8C8', info:'Diameter: 3,474 km · Distance: 384,400 km · Tidally locked to Earth' },
    ],
    glowColor:'rgba(70,140,220,.3)',
  },
  {
    id:'mars', name:'Mars', tagline:'The Red Planet',
    orbitRadius:210, displayRadius:5.5, orbitalPeriod:687,
    info:{ diameter:'6,779 km', distance:'227.9 M km', orbitalPeriod:'687 days', dayLength:'24h 37m', surfaceTemp:'-153 to 20 °C', gravity:'3.72 m/s²', atmosphere:'95% CO₂ (thin)', moons:'2' },
    description:'Mars features the tallest volcano (Olympus Mons, 21.9 km) and the deepest canyon (Valles Marineris, 7 km deep) in the Solar System. Evidence suggests it once had flowing water.',
    moons:[
      { name:'Phobos', orbitRadius:11, displayRadius:1.8, orbitalPeriod:0.32, color:'#9E8E7E', info:'Diameter: 22 km · Irregular shape · Orbits Mars in 7h 39m' },
      { name:'Deimos', orbitRadius:17, displayRadius:1.3, orbitalPeriod:1.26, color:'#8E7E6E', info:'Diameter: 12 km · Smoother surface · Possibly a captured asteroid' },
    ],
    glowColor:'rgba(200,100,60,.25)',
  },
  {
    id:'jupiter', name:'Jupiter', tagline:'King of the Planets',
    orbitRadius:320, displayRadius:24, orbitalPeriod:4333,
    info:{ diameter:'139,820 km', distance:'778.5 M km', orbitalPeriod:'11.86 years', dayLength:'9h 55m', surfaceTemp:'-110 °C', gravity:'24.79 m/s²', atmosphere:'90% H₂, 10% He', moons:'95 known' },
    description:'Jupiter is so massive it could fit all other planets inside it. Its Great Red Spot is a storm wider than Earth that has raged for at least 350 years.',
    moons:[
      { name:'Io', orbitRadius:34, displayRadius:2.8, orbitalPeriod:1.77, color:'#E8C838', info:'Diameter: 3,643 km · Most volcanically active body in the Solar System' },
      { name:'Europa', orbitRadius:42, displayRadius:2.5, orbitalPeriod:3.55, color:'#D0C8B8', info:'Diameter: 3,122 km · Subsurface ocean · Prime candidate for extraterrestrial life' },
      { name:'Ganymede', orbitRadius:52, displayRadius:3.2, orbitalPeriod:7.15, color:'#A09888', info:'Diameter: 5,268 km · Largest moon in the Solar System · Has its own magnetic field' },
      { name:'Callisto', orbitRadius:62, displayRadius:2.8, orbitalPeriod:16.69, color:'#706858', info:'Diameter: 4,821 km · Most heavily cratered body known · Ancient surface' },
    ],
    glowColor:'rgba(200,170,120,.25)',
  },
  {
    id:'saturn', name:'Saturn', tagline:'The Ringed Wonder',
    orbitRadius:440, displayRadius:20, orbitalPeriod:10759,
    info:{ diameter:'116,460 km', distance:'1.434 B km', orbitalPeriod:'29.46 years', dayLength:'10h 42m', surfaceTemp:'-140 °C', gravity:'10.44 m/s²', atmosphere:'96% H₂, 3% He', moons:'146 known' },
    description:'Saturn\'s rings are made of billions of ice and rock particles. Despite its enormous size, Saturn is less dense than water — it would float in a giant bathtub!',
    moons:[
      { name:'Titan', orbitRadius:42, displayRadius:3.2, orbitalPeriod:15.95, color:'#D4A840', info:'Diameter: 5,150 km · Thick atmosphere · Lakes of liquid methane on surface' },
      { name:'Enceladus', orbitRadius:32, displayRadius:2, orbitalPeriod:1.37, color:'#E0E8F0', info:'Diameter: 504 km · Icy geysers · Subsurface ocean with possible hydrothermal vents' },
      { name:'Mimas', orbitRadius:26, displayRadius:1.5, orbitalPeriod:0.94, color:'#C0C0C0', info:'Diameter: 396 km · Giant Herschel crater makes it resemble the Death Star' },
    ],
    glowColor:'rgba(210,190,130,.25)',
  },
  {
    id:'uranus', name:'Uranus', tagline:'The Tilted Ice Giant',
    orbitRadius:570, displayRadius:13, orbitalPeriod:30687,
    info:{ diameter:'50,724 km', distance:'2.871 B km', orbitalPeriod:'84 years', dayLength:'17h 14m', surfaceTemp:'-195 °C', gravity:'8.87 m/s²', atmosphere:'83% H₂, 15% He, 2% CH₄', moons:'28 known' },
    description:'Uranus rotates on its side with an axial tilt of 98°, likely due to an ancient collision. Its blue-green colour comes from methane absorbing red light.',
    moons:[
      { name:'Titania', orbitRadius:28, displayRadius:2.2, orbitalPeriod:8.71, color:'#B0C0C8', info:'Diameter: 1,578 km · Largest moon of Uranus · Icy surface with deep canyons' },
      { name:'Oberon', orbitRadius:36, displayRadius:2.2, orbitalPeriod:13.46, color:'#A0A098', info:'Diameter: 1,522 km · Outermost major moon · Heavily cratered ancient surface' },
    ],
    glowColor:'rgba(130,210,210,.25)',
  },
  {
    id:'neptune', name:'Neptune', tagline:'The Windswept Giant',
    orbitRadius:700, displayRadius:12, orbitalPeriod:60190,
    info:{ diameter:'49,244 km', distance:'4.495 B km', orbitalPeriod:'165 years', dayLength:'16h 6m', surfaceTemp:'-200 °C', gravity:'11.15 m/s²', atmosphere:'80% H₂, 19% He, 1% CH₄', moons:'16 known' },
    description:'Neptune has the strongest sustained winds of any planet — up to 2,100 km/h. It was discovered by mathematical prediction in 1846.',
    moons:[
      { name:'Triton', orbitRadius:26, displayRadius:2.8, orbitalPeriod:5.88, color:'#B0C0D0', info:'Diameter: 2,707 km · Retrograde orbit · Nitrogen geysers · Likely a captured Kuiper Belt object' },
    ],
    glowColor:'rgba(80,120,220,.3)',
  },
];

// ─── State ──────────────────────────────────────────────────
const STATE = {
  paused: false, speed: 10, simTime: 0,
  showOrbits: true, showLabels: true, showMoons: true,
  camera: { x: 0, y: 0, zoom: 1 }, targetZoom: 1,
};

// ─── Canvas ─────────────────────────────────────────────────
const canvas = document.getElementById('universe');
const ctx = canvas.getContext('2d');
function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resize(); window.addEventListener('resize', resize);

// ─── Background: Stars ─────────────────────────────────────
const stars = [];
for (let i = 0; i < 800; i++) {
  stars.push({
    x: Math.random(), y: Math.random(),
    size: Math.random() * 1.6 + 0.3,
    baseAlpha: Math.random() * 0.55 + 0.15,
    speed: Math.random() * 2 + 0.4,
    off: Math.random() * Math.PI * 2,
    hue: Math.random() < 0.15 ? (Math.random() < 0.5 ? 210 : 30) : 0, // some colored stars
  });
}

// ─── Background: Nebula clouds ─────────────────────────────
const nebulaClouds = [];
for (let i = 0; i < 5; i++) {
  nebulaClouds.push({
    x: Math.random(), y: Math.random(),
    rx: 0.1 + Math.random() * 0.25, ry: 0.08 + Math.random() * 0.15,
    hue: [260, 220, 320, 200, 280][i],
    alpha: 0.02 + Math.random() * 0.025,
    rotation: Math.random() * Math.PI,
  });
}

// ─── Shooting Stars ────────────────────────────────────────
const shootingStars = [];
function spawnShootingStar() {
  const side = Math.random();
  let sx, sy, angle;
  if (side < 0.5) { sx = Math.random() * canvas.width; sy = -10; angle = Math.PI * 0.3 + Math.random() * 0.4; }
  else { sx = canvas.width + 10; sy = Math.random() * canvas.height * 0.5; angle = Math.PI * 0.6 + Math.random() * 0.3; }
  shootingStars.push({
    x: sx, y: sy, angle,
    speed: 400 + Math.random() * 500,
    length: 40 + Math.random() * 80,
    alpha: 0.6 + Math.random() * 0.4,
    life: 0, maxLife: 1 + Math.random() * 1.5,
  });
}
let nextShootingStar = 2;

// ─── Comet ──────────────────────────────────────────────────
const COMET = {
  orbitRadius: 550, displayRadius: 3.5,
  orbitalPeriod: 8000, eccentricity: 0.7,
  _initAngle: Math.random() * Math.PI * 2,
  tailParticles: [],
};

// ─── Asteroids ──────────────────────────────────────────────
const ASTEROID_COUNT = 400;
const asteroids = [];
for (let i = 0; i < ASTEROID_COUNT; i++) {
  const r = 245 + Math.random() * 55;
  asteroids.push({
    orbitRadius: r, angle: Math.random() * Math.PI * 2,
    speed: (0.3 + Math.random() * 0.3) / r,
    size: Math.random() * 1.4 + 0.4, alpha: Math.random() * 0.4 + 0.15,
  });
}

// ─── Orbital Trails ────────────────────────────────────────
const orbitalTrails = new Map();
PLANETS.forEach(p => { if (p.orbitRadius > 0) orbitalTrails.set(p.id, []); });
const TRAIL_MAX = 300;

// ─── Planet Texture Cache ──────────────────────────────────
const textureCache = new Map();
function getTexture(id, radius) {
  if (textureCache.has(id)) return textureCache.get(id);
  const r = Math.max(radius, 50);
  const pad = id === 'saturn' ? r * 1.6 : (id === 'sun' ? r * 0.6 : r * 0.35);
  const w = (r + pad) * 2, h = (r + pad) * 2;
  const off = document.createElement('canvas');
  off.width = w; off.height = h;
  const c = off.getContext('2d');
  RENDERERS[id](c, w / 2, h / 2, r);
  textureCache.set(id, { canvas: off, radius: r, pad });
  return textureCache.get(id);
}

// ─── Planet Renderers ──────────────────────────────────────
const RENDERERS = {};

function sphereShading(ctx, cx, cy, r) {
  const g = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
  g.addColorStop(0, 'rgba(255,255,255,0.18)');
  g.addColorStop(0.45, 'rgba(255,255,255,0)');
  g.addColorStop(0.75, 'rgba(0,0,0,0.08)');
  g.addColorStop(1, 'rgba(0,0,0,0.35)');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = g; ctx.fill();
}

RENDERERS.sun = (ctx, cx, cy, r) => {
  for (let i = 3; i >= 1; i--) {
    const g = ctx.createRadialGradient(cx, cy, r * 0.5, cx, cy, r * (1 + i * 0.4));
    g.addColorStop(0, `rgba(255,220,80,${0.08 * i})`);
    g.addColorStop(1, 'rgba(255,100,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  const bg = ctx.createRadialGradient(cx - r * 0.25, cy - r * 0.25, 0, cx, cy, r);
  bg.addColorStop(0, '#FFF8E0'); bg.addColorStop(0.25, '#FFE566');
  bg.addColorStop(0.55, '#FFAA22'); bg.addColorStop(0.85, '#FF6600'); bg.addColorStop(1, '#CC3300');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
  for (let i = 0; i < 60; i++) {
    const a = Math.random() * Math.PI * 2, d = Math.random() * r * 0.9;
    const s = Math.random() * r * 0.08 + r * 0.02;
    ctx.beginPath(); ctx.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, s, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,${180 + Math.random() * 60},0,${Math.random() * 0.25})`; ctx.fill();
  }
  const cg = ctx.createRadialGradient(cx - r * 0.15, cy - r * 0.15, 0, cx, cy, r * 0.6);
  cg.addColorStop(0, 'rgba(255,255,240,0.4)'); cg.addColorStop(1, 'rgba(255,255,200,0)');
  ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
};

RENDERERS.mercury = (ctx, cx, cy, r) => {
  const bg = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
  bg.addColorStop(0, '#B8A898'); bg.addColorStop(0.6, '#8C7E6C'); bg.addColorStop(1, '#5C4E3C');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
  for (let i = 0; i < 20; i++) {
    const a = Math.random() * Math.PI * 2, d = Math.random() * r * 0.8;
    ctx.beginPath(); ctx.arc(cx + Math.cos(a) * d, cy + Math.sin(a) * d, Math.random() * r * 0.12 + r * 0.03, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(60,50,40,${Math.random() * 0.35 + 0.1})`; ctx.fill();
  }
  sphereShading(ctx, cx, cy, r);
};

RENDERERS.venus = (ctx, cx, cy, r) => {
  const bg = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
  bg.addColorStop(0, '#F0DFC0'); bg.addColorStop(0.5, '#DCC090'); bg.addColorStop(1, '#B8A060');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  for (let i = 0; i < 8; i++) {
    const yy = cy - r + (i / 8) * r * 2;
    ctx.beginPath(); ctx.moveTo(cx - r, yy);
    ctx.quadraticCurveTo(cx, yy + Math.random() * r * 0.15 - r * 0.07, cx + r, yy);
    ctx.strokeStyle = `rgba(200,180,130,${0.15 + Math.random() * 0.15})`; ctx.lineWidth = r * 0.08; ctx.stroke();
  }
  ctx.restore();
  const ag = ctx.createRadialGradient(cx, cy, r * 0.9, cx, cy, r * 1.15);
  ag.addColorStop(0, 'rgba(240,220,160,0.15)'); ag.addColorStop(1, 'rgba(240,220,160,0)');
  ctx.fillStyle = ag; ctx.beginPath(); ctx.arc(cx, cy, r * 1.15, 0, Math.PI * 2); ctx.fill();
  sphereShading(ctx, cx, cy, r);
};

RENDERERS.earth = (ctx, cx, cy, r) => {
  const bg = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
  bg.addColorStop(0, '#5B9BD5'); bg.addColorStop(0.5, '#2E75B6'); bg.addColorStop(1, '#1A4A7A');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  const continents = [
    { x: -0.15, y: -0.25, w: 0.35, h: 0.45 }, { x: 0.15, y: -0.35, w: 0.3, h: 0.3 },
    { x: 0.35, y: -0.15, w: 0.25, h: 0.35 }, { x: -0.1, y: 0.3, w: 0.15, h: 0.12 },
    { x: 0.3, y: 0.25, w: 0.2, h: 0.15 },
  ];
  for (const c of continents) {
    ctx.beginPath();
    ctx.ellipse(cx + c.x * r, cy + c.y * r, c.w * r * 0.5, c.h * r * 0.5, Math.random() * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${60 + Math.random() * 40},${110 + Math.random() * 40},${50 + Math.random() * 30},0.7)`; ctx.fill();
  }
  for (let i = 0; i < 12; i++) {
    const a = Math.random() * Math.PI * 2, d = Math.random() * r * 0.7;
    ctx.beginPath(); ctx.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d, r * 0.2, r * 0.06, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${0.15 + Math.random() * 0.2})`; ctx.fill();
  }
  ctx.beginPath(); ctx.ellipse(cx, cy - r * 0.85, r * 0.4, r * 0.12, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(240,248,255,0.5)'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy + r * 0.88, r * 0.35, r * 0.1, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(240,248,255,0.4)'; ctx.fill();
  ctx.restore();
  const ag = ctx.createRadialGradient(cx, cy, r * 0.92, cx, cy, r * 1.12);
  ag.addColorStop(0, 'rgba(100,180,255,0.2)'); ag.addColorStop(1, 'rgba(100,180,255,0)');
  ctx.fillStyle = ag; ctx.beginPath(); ctx.arc(cx, cy, r * 1.12, 0, Math.PI * 2); ctx.fill();
  sphereShading(ctx, cx, cy, r);
};

RENDERERS.mars = (ctx, cx, cy, r) => {
  const bg = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
  bg.addColorStop(0, '#D4845A'); bg.addColorStop(0.5, '#C06030'); bg.addColorStop(1, '#8B3A1A');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  for (let i = 0; i < 10; i++) {
    const a = Math.random() * Math.PI * 2, d = Math.random() * r * 0.7;
    ctx.beginPath(); ctx.ellipse(cx + Math.cos(a) * d, cy + Math.sin(a) * d, r * 0.2, r * 0.1, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100,40,15,${0.2 + Math.random() * 0.15})`; ctx.fill();
  }
  ctx.beginPath(); ctx.ellipse(cx, cy - r * 0.82, r * 0.35, r * 0.13, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(240,235,225,0.55)'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx, cy + r * 0.88, r * 0.25, r * 0.08, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(240,235,225,0.35)'; ctx.fill();
  ctx.restore();
  sphereShading(ctx, cx, cy, r);
};

RENDERERS.jupiter = (ctx, cx, cy, r) => {
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  ctx.fillStyle = '#C4A878'; ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  const bands = [
    {p:-0.85,h:0.14,c:'#A07850'},{p:-0.65,h:0.10,c:'#D8C098'},{p:-0.48,h:0.16,c:'#8B6040'},
    {p:-0.25,h:0.12,c:'#DCC8A0'},{p:-0.08,h:0.18,c:'#A07848'},{p:0.15,h:0.12,c:'#D8C498'},
    {p:0.32,h:0.16,c:'#8B5838'},{p:0.55,h:0.12,c:'#C8B080'},{p:0.72,h:0.14,c:'#9E7050'},
  ];
  for (const b of bands) { ctx.fillStyle = b.c; ctx.fillRect(cx - r, cy + b.p * r, r * 2, b.h * r); }
  ctx.beginPath(); ctx.ellipse(cx + r * 0.25, cy + r * 0.22, r * 0.18, r * 0.11, 0.1, 0, Math.PI * 2);
  ctx.fillStyle = '#B04030'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx + r * 0.25, cy + r * 0.22, r * 0.12, r * 0.07, 0.1, 0, Math.PI * 2);
  ctx.fillStyle = '#C85040'; ctx.fill();
  ctx.restore();
  sphereShading(ctx, cx, cy, r);
};

RENDERERS.saturn = (ctx, cx, cy, r) => {
  drawSaturnRings(ctx, cx, cy, r, true);
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  ctx.fillStyle = '#D8C890'; ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
  const bands = [{p:-0.7,h:0.18,c:'#C8B878'},{p:-0.4,h:0.15,c:'#E0D0A0'},{p:-0.15,h:0.2,c:'#C0A868'},{p:0.12,h:0.15,c:'#D8C890'},{p:0.35,h:0.18,c:'#B8A060'},{p:0.6,h:0.15,c:'#D0C080'}];
  for (const b of bands) { ctx.fillStyle = b.c; ctx.fillRect(cx - r, cy + b.p * r, r * 2, b.h * r); }
  ctx.restore();
  sphereShading(ctx, cx, cy, r);
  drawSaturnRings(ctx, cx, cy, r, false);
};
function drawSaturnRings(ctx, cx, cy, r, isBack) {
  const tilt = 0.32;
  const rings = [
    { inner: 1.25, outer: 1.45, color: 'rgba(200,185,140,0.3)' },
    { inner: 1.48, outer: 1.85, color: 'rgba(210,195,155,0.55)' },
    { inner: 1.93, outer: 2.20, color: 'rgba(195,180,140,0.4)' },
  ];
  for (const ring of rings) {
    const steps = 120;
    for (let i = 0; i <= steps; i++) {
      const a1 = (i / steps) * Math.PI * 2, a2 = ((i + 1) / steps) * Math.PI * 2;
      const upper = Math.sin(a1) * tilt < 0;
      if (isBack && !upper) continue;
      if (!isBack && upper) continue;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a1) * ring.inner * r, cy + Math.sin(a1) * ring.inner * r * tilt);
      ctx.lineTo(cx + Math.cos(a1) * ring.outer * r, cy + Math.sin(a1) * ring.outer * r * tilt);
      ctx.lineTo(cx + Math.cos(a2) * ring.outer * r, cy + Math.sin(a2) * ring.outer * r * tilt);
      ctx.lineTo(cx + Math.cos(a2) * ring.inner * r, cy + Math.sin(a2) * ring.inner * r * tilt);
      ctx.closePath(); ctx.fillStyle = ring.color; ctx.fill();
    }
  }
}

RENDERERS.uranus = (ctx, cx, cy, r) => {
  const bg = ctx.createRadialGradient(cx - r * 0.25, cy - r * 0.25, 0, cx, cy, r);
  bg.addColorStop(0, '#B8E8E8'); bg.addColorStop(0.4, '#7CC8C8'); bg.addColorStop(1, '#3A8888');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = `rgba(100,190,190,${0.08 + Math.random() * 0.08})`;
    ctx.fillRect(cx - r, cy - r + (i / 5) * r * 2, r * 2, r * 0.1);
  }
  ctx.restore();
  ctx.beginPath(); ctx.ellipse(cx, cy, r * 1.6, r * 1.6 * 0.15, 1.2, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(160,210,210,0.15)'; ctx.lineWidth = r * 0.04; ctx.stroke();
  sphereShading(ctx, cx, cy, r);
};

RENDERERS.neptune = (ctx, cx, cy, r) => {
  const bg = ctx.createRadialGradient(cx - r * 0.25, cy - r * 0.25, 0, cx, cy, r);
  bg.addColorStop(0, '#6090D0'); bg.addColorStop(0.45, '#3060B0'); bg.addColorStop(1, '#1A3070');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = `rgba(30,50,120,${0.15 + Math.random() * 0.1})`;
    ctx.fillRect(cx - r, cy - r * 0.6 + i * r * 0.35, r * 2, r * 0.12);
  }
  ctx.beginPath(); ctx.ellipse(cx - r * 0.2, cy - r * 0.15, r * 0.16, r * 0.1, -0.2, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(15,30,80,0.4)'; ctx.fill();
  for (let i = 0; i < 6; i++) {
    const yy = cy - r * 0.5 + Math.random() * r;
    ctx.beginPath(); ctx.moveTo(cx - r * 0.6, yy);
    ctx.quadraticCurveTo(cx, yy + Math.random() * r * 0.06 - r * 0.03, cx + r * 0.6, yy);
    ctx.strokeStyle = `rgba(140,180,255,${0.1 + Math.random() * 0.12})`; ctx.lineWidth = r * 0.04; ctx.stroke();
  }
  ctx.restore();
  sphereShading(ctx, cx, cy, r);
};

// Pre-render textures
PLANETS.forEach(p => getTexture(p.id, Math.max(p.displayRadius * 4, 50)));

// ─── World ↔ Screen ────────────────────────────────────────
function w2s(wx, wy) {
  return { x: (wx - STATE.camera.x) * STATE.camera.zoom + canvas.width / 2, y: (wy - STATE.camera.y) * STATE.camera.zoom + canvas.height / 2 };
}

// ─── Planet positions ──────────────────────────────────────
function calcPlanetPos(p) {
  if (p.orbitRadius === 0) { p._wx = 0; p._wy = 0; return w2s(0, 0); }
  const a = ((2 * Math.PI) / p.orbitalPeriod) * STATE.simTime + (p._initAngle || 0);
  p._wx = Math.cos(a) * p.orbitRadius;
  p._wy = Math.sin(a) * p.orbitRadius;
  return w2s(p._wx, p._wy);
}
function calcMoonPos(m, parent) {
  const a = ((2 * Math.PI) / m.orbitalPeriod) * STATE.simTime + (m._initAngle || 0);
  m._wx = parent._wx + Math.cos(a) * m.orbitRadius;
  m._wy = parent._wy + Math.sin(a) * m.orbitRadius;
  return w2s(m._wx, m._wy);
}

PLANETS.forEach(p => { p._initAngle = Math.random() * Math.PI * 2; p.moons.forEach(m => { m._initAngle = Math.random() * Math.PI * 2; }); });

// ═══════════════════════════════════════════════════════════
// ─── ASTEROID DEFENSE GAME ─────────────────────────────────
// ═══════════════════════════════════════════════════════════

const GAME = {
  active: false, score: 0, lives: 5, wave: 1,
  asteroidsDestroyed: 0, totalClicks: 0, hits: 0,
  asteroids: [], explosions: [], scorePopups: [],
  spawnTimer: 0, spawnInterval: 2.5,
  waveTimer: 0, waveDuration: 25,
  shieldReady: true, shieldCooldown: 0, shieldCooldownMax: 30,
  shieldActive: false, shieldTimer: 0,
  combo: 0, comboTimer: 0,
  gameOver: false,
};

class GameAsteroid {
  constructor(wave) {
    this.size = 8 + Math.random() * 18 + wave * 1.5;
    // Spawn from edges, heading toward Earth
    const earthP = PLANETS[3]; // Earth
    const earthAngle = ((2 * Math.PI) / earthP.orbitalPeriod) * STATE.simTime + earthP._initAngle;
    const earthWx = Math.cos(earthAngle) * earthP.orbitRadius;
    const earthWy = Math.sin(earthAngle) * earthP.orbitRadius;
    // Spawn from random edge
    const spawnAngle = Math.random() * Math.PI * 2;
    const spawnDist = 800 + Math.random() * 200;
    this.wx = earthWx + Math.cos(spawnAngle) * spawnDist;
    this.wy = earthWy + Math.sin(spawnAngle) * spawnDist;
    // Aim toward Earth with some randomness
    const dx = earthWx - this.wx, dy = earthWy - this.wy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const speed = 30 + Math.random() * 40 + wave * 5;
    this.vx = (dx / dist) * speed + (Math.random() - 0.5) * 15;
    this.vy = (dy / dist) * speed + (Math.random() - 0.5) * 15;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 3;
    this.hp = Math.ceil(this.size / 15);
    this.color = `hsl(${15 + Math.random() * 25}, ${30 + Math.random() * 30}%, ${30 + Math.random() * 20}%)`;
    this.alive = true;
    this.vertices = [];
    const vCount = 7 + Math.floor(Math.random() * 5);
    for (let i = 0; i < vCount; i++) {
      this.vertices.push(0.7 + Math.random() * 0.3);
    }
  }
}

class Explosion {
  constructor(x, y, size, color) {
    this.particles = [];
    const count = 15 + Math.floor(size * 1.5);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 30 + Math.random() * 120;
      this.particles.push({
        x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
        size: 1 + Math.random() * 3, alpha: 1, color,
        decay: 0.8 + Math.random() * 1.5,
      });
    }
    // Add flash
    this.flash = { x, y, radius: size * 2, alpha: 1 };
  }
  update(dt) {
    for (const p of this.particles) {
      p.x += p.vx * dt; p.y += p.vy * dt;
      p.vx *= 0.97; p.vy *= 0.97;
      p.alpha -= p.decay * dt;
    }
    this.flash.alpha -= 3 * dt;
    this.flash.radius += 80 * dt;
    this.particles = this.particles.filter(p => p.alpha > 0);
    return this.particles.length > 0 || this.flash.alpha > 0;
  }
}

function startGame() {
  GAME.active = true; GAME.score = 0; GAME.lives = 5; GAME.wave = 1;
  GAME.asteroidsDestroyed = 0; GAME.totalClicks = 0; GAME.hits = 0;
  GAME.asteroids = []; GAME.explosions = []; GAME.scorePopups = [];
  GAME.spawnTimer = 0; GAME.spawnInterval = 2.5;
  GAME.waveTimer = 0; GAME.combo = 0; GAME.comboTimer = 0;
  GAME.shieldReady = true; GAME.shieldCooldown = 0;
  GAME.shieldActive = false; GAME.shieldTimer = 0;
  GAME.gameOver = false;
  document.getElementById('game-hud').classList.add('open');
  document.getElementById('game-over').classList.remove('open');
  document.getElementById('btn-game').classList.add('game-active');
  document.body.classList.add('game-mode');
  updateHUD();
}

function endGame() {
  GAME.active = false; GAME.gameOver = true;
  document.getElementById('game-hud').classList.remove('open');
  document.getElementById('btn-game').classList.remove('game-active');
  document.body.classList.remove('game-mode');
  // Show game over
  document.getElementById('go-score').textContent = GAME.score.toLocaleString();
  document.getElementById('go-waves').textContent = GAME.wave;
  document.getElementById('go-destroyed').textContent = GAME.asteroidsDestroyed;
  document.getElementById('go-accuracy').textContent = GAME.totalClicks > 0 ? Math.round((GAME.hits / GAME.totalClicks) * 100) + '%' : '0%';
  document.getElementById('game-over').classList.add('open');
}

function exitGame() {
  GAME.active = false; GAME.gameOver = false;
  GAME.asteroids = []; GAME.explosions = []; GAME.scorePopups = [];
  document.getElementById('game-hud').classList.remove('open');
  document.getElementById('game-over').classList.remove('open');
  document.getElementById('btn-game').classList.remove('game-active');
  document.body.classList.remove('game-mode');
}

function updateHUD() {
  document.getElementById('hud-score').textContent = GAME.score.toLocaleString();
  document.getElementById('hud-lives').textContent = GAME.lives;
  document.getElementById('hud-wave').textContent = GAME.wave;
  const shieldEl = document.getElementById('hud-shield');
  if (GAME.shieldReady) { shieldEl.textContent = 'Ready'; shieldEl.style.color = '#00d4ff'; }
  else { shieldEl.textContent = Math.ceil(GAME.shieldCooldown) + 's'; shieldEl.style.color = '#ff4444'; }
}

function activateShield() {
  if (!GAME.shieldReady || !GAME.active) return;
  GAME.shieldActive = true; GAME.shieldTimer = 0.5;
  GAME.shieldReady = false; GAME.shieldCooldown = GAME.shieldCooldownMax;
  // Destroy all game asteroids on screen
  for (const a of GAME.asteroids) {
    const s = w2s(a.wx, a.wy);
    GAME.explosions.push(new Explosion(s.x, s.y, a.size, '#00d4ff'));
    GAME.score += 5;
    GAME.asteroidsDestroyed++;
  }
  GAME.asteroids = [];
  document.body.classList.add('shield-flash');
  setTimeout(() => document.body.classList.remove('shield-flash'), 400);
}

function gameUpdate(dt) {
  if (!GAME.active || STATE.paused) return;
  // Wave timer
  GAME.waveTimer += dt;
  if (GAME.waveTimer > GAME.waveDuration) {
    GAME.wave++; GAME.waveTimer = 0;
    GAME.spawnInterval = Math.max(0.3, 2.5 - GAME.wave * 0.2);
  }
  // Spawn asteroids
  GAME.spawnTimer += dt;
  if (GAME.spawnTimer >= GAME.spawnInterval) {
    GAME.spawnTimer = 0;
    const count = 1 + Math.floor(GAME.wave / 3);
    for (let i = 0; i < count; i++) GAME.asteroids.push(new GameAsteroid(GAME.wave));
  }
  // Combo decay
  if (GAME.comboTimer > 0) { GAME.comboTimer -= dt; if (GAME.comboTimer <= 0) GAME.combo = 0; }
  // Shield cooldown
  if (!GAME.shieldReady) {
    GAME.shieldCooldown -= dt;
    if (GAME.shieldCooldown <= 0) { GAME.shieldReady = true; GAME.shieldCooldown = 0; }
  }
  if (GAME.shieldActive) { GAME.shieldTimer -= dt; if (GAME.shieldTimer <= 0) GAME.shieldActive = false; }
  // Move asteroids
  const earthP = PLANETS[3];
  const earthPos = calcPlanetPos(earthP);
  const earthScreenR = Math.max(6, earthP.displayRadius * STATE.camera.zoom);
  for (const a of GAME.asteroids) {
    a.wx += a.vx * dt; a.wy += a.vy * dt; a.rotation += a.rotSpeed * dt;
    // Check if hit Earth
    const dx = a.wx - earthP._wx, dy = a.wy - earthP._wy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < earthP.displayRadius + a.size * 0.3) {
      a.alive = false; GAME.lives--;
      const s = w2s(a.wx, a.wy);
      GAME.explosions.push(new Explosion(s.x, s.y, a.size * 1.5, '#ff4444'));
      if (GAME.lives <= 0) endGame();
    }
    // Remove if too far
    if (dist > 1200) a.alive = false;
  }
  GAME.asteroids = GAME.asteroids.filter(a => a.alive);
  // Update explosions
  GAME.explosions = GAME.explosions.filter(e => e.update(dt));
  // Score popups
  for (const sp of GAME.scorePopups) { sp.y -= 40 * dt; sp.alpha -= 1.2 * dt; }
  GAME.scorePopups = GAME.scorePopups.filter(sp => sp.alpha > 0);
  updateHUD();
}

function gameClickTest(sx, sy) {
  if (!GAME.active) return false;
  GAME.totalClicks++;
  const zoom = STATE.camera.zoom;
  for (let i = GAME.asteroids.length - 1; i >= 0; i--) {
    const a = GAME.asteroids[i];
    const s = w2s(a.wx, a.wy);
    const screenSize = a.size * zoom;
    const dx = sx - s.x, dy = sy - s.y;
    if (dx * dx + dy * dy < (screenSize + 10) * (screenSize + 10)) {
      a.hp--;
      if (a.hp <= 0) {
        a.alive = false;
        GAME.explosions.push(new Explosion(s.x, s.y, a.size, '#FF8844'));
        GAME.asteroidsDestroyed++; GAME.hits++;
        // Score with combo
        GAME.combo++; GAME.comboTimer = 2;
        const points = Math.round(a.size * 2) * Math.max(1, GAME.combo);
        GAME.score += points;
        GAME.scorePopups.push({ x: s.x, y: s.y - 20, text: `+${points}`, alpha: 1, combo: GAME.combo > 1 });
      } else {
        GAME.hits++;
        GAME.scorePopups.push({ x: s.x, y: s.y - 15, text: 'HIT', alpha: 0.7, combo: false });
      }
      return true;
    }
  }
  return false;
}

function renderGame() {
  if (!GAME.active && GAME.explosions.length === 0) return;
  const zoom = STATE.camera.zoom;
  // Draw game asteroids
  for (const a of GAME.asteroids) {
    const s = w2s(a.wx, a.wy);
    const sz = a.size * zoom;
    if (s.x < -50 || s.x > canvas.width + 50 || s.y < -50 || s.y > canvas.height + 50) continue;
    ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(a.rotation);
    // Draw irregular asteroid
    ctx.beginPath();
    const verts = a.vertices;
    for (let i = 0; i <= verts.length; i++) {
      const vi = i % verts.length;
      const angle = (vi / verts.length) * Math.PI * 2;
      const r = sz * verts[vi];
      const px = Math.cos(angle) * r, py = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    // Gradient fill
    const ag = ctx.createRadialGradient(-sz * 0.2, -sz * 0.2, 0, 0, 0, sz);
    ag.addColorStop(0, '#8B7355'); ag.addColorStop(0.6, '#6B5335'); ag.addColorStop(1, '#3B2315');
    ctx.fillStyle = ag; ctx.fill();
    ctx.strokeStyle = 'rgba(120,100,70,0.5)'; ctx.lineWidth = 1; ctx.stroke();
    // Craters
    for (let i = 0; i < 3; i++) {
      const cx2 = (Math.random() - 0.5) * sz * 0.8, cy2 = (Math.random() - 0.5) * sz * 0.8;
      ctx.beginPath(); ctx.arc(cx2, cy2, sz * 0.12, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(30,20,10,0.3)'; ctx.fill();
    }
    // Danger glow (red if close to Earth)
    const earthDx = a.wx - PLANETS[3]._wx, earthDy = a.wy - PLANETS[3]._wy;
    const earthDist = Math.sqrt(earthDx * earthDx + earthDy * earthDy);
    if (earthDist < 200) {
      ctx.shadowColor = '#ff4444';
      ctx.shadowBlur = 10 + (1 - earthDist / 200) * 15;
      ctx.beginPath();
      for (let i = 0; i <= verts.length; i++) {
        const vi = i % verts.length;
        const angle = (vi / verts.length) * Math.PI * 2;
        const r = sz * verts[vi];
        if (i === 0) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
        else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(255,68,68,${0.3 + (1 - earthDist / 200) * 0.4})`;
      ctx.lineWidth = 2; ctx.stroke();
      ctx.shadowBlur = 0;
    }
    ctx.restore();
  }
  // Explosions
  for (const e of GAME.explosions) {
    if (e.flash.alpha > 0) {
      ctx.beginPath(); ctx.arc(e.flash.x, e.flash.y, e.flash.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,200,100,${e.flash.alpha * 0.3})`; ctx.fill();
    }
    for (const p of e.particles) {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color === '#00d4ff'
        ? `rgba(0,212,255,${p.alpha})`
        : p.color === '#ff4444'
          ? `rgba(255,68,68,${p.alpha})`
          : `rgba(255,${130 + Math.random() * 60},${30 + Math.random() * 40},${p.alpha})`;
      ctx.fill();
    }
  }
  // Score popups
  for (const sp of GAME.scorePopups) {
    ctx.save();
    ctx.font = sp.combo ? 'bold 1.1rem Outfit, sans-serif' : 'bold 0.85rem Inter, sans-serif';
    ctx.fillStyle = sp.combo ? `rgba(255,200,50,${sp.alpha})` : `rgba(255,255,255,${sp.alpha})`;
    ctx.textAlign = 'center';
    ctx.fillText(sp.text, sp.x, sp.y);
    if (sp.combo) {
      ctx.font = 'bold 0.65rem Inter, sans-serif';
      ctx.fillStyle = `rgba(0,212,255,${sp.alpha})`;
      ctx.fillText(`COMBO ×${GAME.combo}`, sp.x, sp.y + 16);
    }
    ctx.restore();
  }
  // Shield effect ring
  if (GAME.shieldActive) {
    const earthPos = w2s(PLANETS[3]._wx, PLANETS[3]._wy);
    const shieldR = 200 * STATE.camera.zoom * (1 - GAME.shieldTimer);
    ctx.beginPath(); ctx.arc(earthPos.x, earthPos.y, shieldR, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0,212,255,${GAME.shieldTimer * 1.5})`; ctx.lineWidth = 3 + GAME.shieldTimer * 5; ctx.stroke();
    ctx.beginPath(); ctx.arc(earthPos.x, earthPos.y, shieldR, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,212,255,${GAME.shieldTimer * 0.08})`; ctx.fill();
  }
  // Earth danger ring (when game active)
  if (GAME.active) {
    const ep = w2s(PLANETS[3]._wx, PLANETS[3]._wy);
    const er = PLANETS[3].displayRadius * STATE.camera.zoom;
    const pulse = Math.sin(performance.now() * 0.003) * 0.15 + 0.85;
    ctx.beginPath(); ctx.arc(ep.x, ep.y, er * 2.5 * pulse, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0,212,255,0.15)'; ctx.lineWidth = 1; ctx.setLineDash([3, 5]);
    ctx.stroke(); ctx.setLineDash([]);
  }
}

// ─── Main Render ────────────────────────────────────────────
function render(t) {
  const W = canvas.width, H = canvas.height;
  const zoom = STATE.camera.zoom;

  // ── Background ──
  ctx.fillStyle = '#03030a'; ctx.fillRect(0, 0, W, H);

  // ── Nebula clouds ──
  for (const n of nebulaClouds) {
    ctx.save();
    ctx.translate(n.x * W, n.y * H);
    ctx.rotate(n.rotation);
    const ng = ctx.createRadialGradient(0, 0, 0, 0, 0, n.rx * W);
    ng.addColorStop(0, `hsla(${n.hue},60%,30%,${n.alpha})`);
    ng.addColorStop(0.5, `hsla(${n.hue},50%,20%,${n.alpha * 0.5})`);
    ng.addColorStop(1, 'rgba(3,3,10,0)');
    ctx.fillStyle = ng;
    ctx.fillRect(-n.rx * W, -n.ry * H, n.rx * W * 2, n.ry * H * 2);
    ctx.restore();
  }

  // ── Stars ──
  for (const s of stars) {
    const twinkle = Math.sin(t * s.speed + s.off);
    const alpha = Math.max(0.05, s.baseAlpha + twinkle * 0.18);
    if (s.hue > 0) ctx.fillStyle = `hsla(${s.hue},60%,80%,${alpha})`;
    else ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fillRect(s.x * W, s.y * H, s.size, s.size);
  }

  // ── Shooting stars ──
  for (const ss of shootingStars) {
    const progress = ss.life / ss.maxLife;
    const fadeIn = Math.min(1, ss.life * 5);
    const fadeOut = 1 - Math.pow(progress, 2);
    const alpha = ss.alpha * fadeIn * fadeOut;
    const x = ss.x + Math.cos(ss.angle) * ss.speed * ss.life;
    const y = ss.y + Math.sin(ss.angle) * ss.speed * ss.life;
    const tailX = x - Math.cos(ss.angle) * ss.length;
    const tailY = y - Math.sin(ss.angle) * ss.length;
    const g = ctx.createLinearGradient(tailX, tailY, x, y);
    g.addColorStop(0, 'rgba(255,255,255,0)');
    g.addColorStop(0.6, `rgba(200,220,255,${alpha * 0.3})`);
    g.addColorStop(1, `rgba(255,255,255,${alpha})`);
    ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(x, y);
    ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke();
    // Head glow
    ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`; ctx.fill();
  }

  // ── Orbit lines ──
  if (STATE.showOrbits) {
    const center = w2s(0, 0);
    for (const p of PLANETS) {
      if (p.orbitRadius === 0) continue;
      ctx.beginPath(); ctx.arc(center.x, center.y, p.orbitRadius * zoom, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]); ctx.stroke(); ctx.setLineDash([]);
    }
  }

  // ── Orbital trails ──
  for (const p of PLANETS) {
    if (p.orbitRadius === 0) continue;
    const trail = orbitalTrails.get(p.id);
    if (!trail || trail.length < 2) continue;
    for (let i = 1; i < trail.length; i++) {
      const alpha = (i / trail.length) * 0.25;
      const s1 = w2s(trail[i - 1].x, trail[i - 1].y);
      const s2 = w2s(trail[i].x, trail[i].y);
      ctx.beginPath(); ctx.moveTo(s1.x, s1.y); ctx.lineTo(s2.x, s2.y);
      ctx.strokeStyle = `${p.glowColor.replace(/[\d.]+\)$/, alpha + ')')}`;
      ctx.lineWidth = Math.max(1, p.displayRadius * zoom * 0.15);
      ctx.stroke();
    }
  }

  // ── Asteroids belt ──
  for (const a of asteroids) {
    const angle = a.angle + STATE.simTime * a.speed;
    const s = w2s(Math.cos(angle) * a.orbitRadius, Math.sin(angle) * a.orbitRadius);
    const sz = Math.max(0.5, a.size * zoom * 0.5);
    if (s.x < -10 || s.x > W + 10 || s.y < -10 || s.y > H + 10) continue;
    ctx.fillStyle = `rgba(180,170,150,${a.alpha})`; ctx.fillRect(s.x, s.y, sz, sz);
  }

  // ── Comet ──
  const cAngle = ((2 * Math.PI) / COMET.orbitalPeriod) * STATE.simTime + COMET._initAngle;
  const cR = COMET.orbitRadius * (1 - COMET.eccentricity * Math.cos(cAngle));
  const cWx = Math.cos(cAngle) * cR, cWy = Math.sin(cAngle) * cR;
  const cPos = w2s(cWx, cWy);
  const cScreenR = Math.max(2, COMET.displayRadius * zoom);
  // Comet tail (always points away from Sun)
  const sunDist = Math.sqrt(cWx * cWx + cWy * cWy);
  const tailDirX = cWx / sunDist, tailDirY = cWy / sunDist;
  const tailLen = 50 + (COMET.orbitRadius / sunDist) * 60;
  const tailEndX = cPos.x + tailDirX * tailLen * zoom;
  const tailEndY = cPos.y + tailDirY * tailLen * zoom;
  // Dust tail (slightly curved)
  const tg = ctx.createLinearGradient(cPos.x, cPos.y, tailEndX, tailEndY);
  tg.addColorStop(0, 'rgba(200,220,255,0.5)');
  tg.addColorStop(0.3, 'rgba(150,180,220,0.25)');
  tg.addColorStop(1, 'rgba(100,140,200,0)');
  ctx.beginPath(); ctx.moveTo(cPos.x, cPos.y);
  ctx.quadraticCurveTo(
    (cPos.x + tailEndX) / 2 + tailDirY * 10 * zoom,
    (cPos.y + tailEndY) / 2 - tailDirX * 10 * zoom,
    tailEndX, tailEndY
  );
  ctx.strokeStyle = tg; ctx.lineWidth = cScreenR * 3; ctx.lineCap = 'round'; ctx.stroke();
  // Ion tail (straight, blue)
  const ig = ctx.createLinearGradient(cPos.x, cPos.y, cPos.x + tailDirX * tailLen * zoom * 1.3, cPos.y + tailDirY * tailLen * zoom * 1.3);
  ig.addColorStop(0, 'rgba(100,160,255,0.4)');
  ig.addColorStop(1, 'rgba(80,120,255,0)');
  ctx.beginPath(); ctx.moveTo(cPos.x, cPos.y);
  ctx.lineTo(cPos.x + tailDirX * tailLen * zoom * 1.3, cPos.y + tailDirY * tailLen * zoom * 1.3);
  ctx.strokeStyle = ig; ctx.lineWidth = cScreenR * 1.5; ctx.stroke();
  ctx.lineCap = 'butt';
  // Comet nucleus
  ctx.beginPath(); ctx.arc(cPos.x, cPos.y, cScreenR, 0, Math.PI * 2);
  ctx.fillStyle = '#D0E8FF'; ctx.shadowColor = '#88BBFF'; ctx.shadowBlur = cScreenR * 4;
  ctx.fill(); ctx.shadowBlur = 0;
  // Coma (fuzzy glow)
  const comaG = ctx.createRadialGradient(cPos.x, cPos.y, cScreenR * 0.5, cPos.x, cPos.y, cScreenR * 4);
  comaG.addColorStop(0, 'rgba(180,210,255,0.25)'); comaG.addColorStop(1, 'rgba(150,190,255,0)');
  ctx.fillStyle = comaG;
  ctx.beginPath(); ctx.arc(cPos.x, cPos.y, cScreenR * 4, 0, Math.PI * 2); ctx.fill();

  // ── Planets ──
  for (const planet of PLANETS) {
    const pos = calcPlanetPos(planet);
    const screenR = Math.max(2, planet.displayRadius * zoom);
    const margin = screenR * 4;
    if (pos.x < -margin || pos.x > W + margin || pos.y < -margin || pos.y > H + margin) continue;

    // Planet body from texture
    const tex = getTexture(planet.id, Math.max(planet.displayRadius * 4, 50));
    const scale = screenR / tex.radius;
    ctx.drawImage(tex.canvas, pos.x - tex.canvas.width * scale / 2, pos.y - tex.canvas.height * scale / 2, tex.canvas.width * scale, tex.canvas.height * scale);

    // Sun: animated corona + lens flare
    if (planet.id === 'sun') {
      const pulse = 1 + Math.sin(t * 1.5) * 0.04;
      const coronaR = screenR * 1.6 * pulse;
      const cg = ctx.createRadialGradient(pos.x, pos.y, screenR * 0.6, pos.x, pos.y, coronaR);
      cg.addColorStop(0, 'rgba(255,200,50,0.06)'); cg.addColorStop(0.5, 'rgba(255,150,0,0.03)'); cg.addColorStop(1, 'rgba(255,100,0,0)');
      ctx.fillStyle = cg; ctx.fillRect(pos.x - coronaR, pos.y - coronaR, coronaR * 2, coronaR * 2);
      // Lens flare rays
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < 6; i++) {
        const rayAngle = t * 0.1 + (i / 6) * Math.PI;
        const rayLen = screenR * (2.5 + Math.sin(t * 0.8 + i) * 0.5);
        const rg = ctx.createLinearGradient(
          pos.x - Math.cos(rayAngle) * rayLen, pos.y - Math.sin(rayAngle) * rayLen,
          pos.x + Math.cos(rayAngle) * rayLen, pos.y + Math.sin(rayAngle) * rayLen
        );
        rg.addColorStop(0, 'rgba(255,200,100,0)');
        rg.addColorStop(0.4, 'rgba(255,220,150,0.04)');
        rg.addColorStop(0.5, 'rgba(255,240,200,0.07)');
        rg.addColorStop(0.6, 'rgba(255,220,150,0.04)');
        rg.addColorStop(1, 'rgba(255,200,100,0)');
        ctx.beginPath();
        ctx.moveTo(pos.x + Math.cos(rayAngle + 0.02) * rayLen, pos.y + Math.sin(rayAngle + 0.02) * rayLen);
        ctx.lineTo(pos.x + Math.cos(rayAngle + Math.PI / 2) * screenR * 0.15, pos.y + Math.sin(rayAngle + Math.PI / 2) * screenR * 0.15);
        ctx.lineTo(pos.x - Math.cos(rayAngle + 0.02) * rayLen, pos.y - Math.sin(rayAngle + 0.02) * rayLen);
        ctx.lineTo(pos.x - Math.cos(rayAngle + Math.PI / 2) * screenR * 0.15, pos.y - Math.sin(rayAngle + Math.PI / 2) * screenR * 0.15);
        ctx.closePath();
        ctx.fillStyle = rg; ctx.fill();
      }
      ctx.restore();
    }

    // ── Moons ──
    if (STATE.showMoons && planet.moons.length > 0) {
      if (STATE.showOrbits) {
        for (const moon of planet.moons) {
          const mor = moon.orbitRadius * zoom;
          if (mor > 3) {
            ctx.beginPath(); ctx.arc(pos.x, pos.y, mor, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(255,255,255,0.04)'; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      for (const moon of planet.moons) {
        const mPos = calcMoonPos(moon, planet);
        const mR = Math.max(1.2, moon.displayRadius * zoom);
        ctx.beginPath(); ctx.arc(mPos.x, mPos.y, mR, 0, Math.PI * 2);
        const mg = ctx.createRadialGradient(mPos.x - mR * 0.3, mPos.y - mR * 0.3, 0, mPos.x, mPos.y, mR);
        mg.addColorStop(0, lighten(moon.color, 40)); mg.addColorStop(1, moon.color);
        ctx.fillStyle = mg; ctx.fill();
        if (STATE.showLabels && mR > 2 && zoom > 1.8) {
          ctx.font = `${Math.max(8, 9 * Math.min(zoom * 0.5, 1))}px Inter, sans-serif`;
          ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.textAlign = 'center';
          ctx.fillText(moon.name, mPos.x, mPos.y + mR + 10);
        }
      }
    }

    // ── Labels ──
    if (STATE.showLabels && screenR > 1.5) {
      const fs = Math.max(10, Math.min(14, 11 * zoom * 0.6));
      ctx.font = `600 ${fs}px Inter, sans-serif`;
      ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.textAlign = 'center';
      ctx.fillText(planet.name, pos.x, pos.y + screenR + fs + 4);
    }
  }

  // ── Game layer ──
  renderGame();
}

function lighten(hex, amt) {
  let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.min(255, r + amt)},${Math.min(255, g + amt)},${Math.min(255, b + amt)})`;
}

// ─── Hit Testing ────────────────────────────────────────────
function hitTest(sx, sy) {
  const zoom = STATE.camera.zoom;
  for (let i = PLANETS.length - 1; i >= 0; i--) {
    const p = PLANETS[i];
    const pos = calcPlanetPos(p);
    const sr = Math.max(8, p.displayRadius * zoom);
    if ((sx - pos.x) ** 2 + (sy - pos.y) ** 2 <= sr * sr * 2.5) return { type: 'planet', data: p };
    if (STATE.showMoons) {
      for (const m of p.moons) {
        const mp = calcMoonPos(m, p);
        const mr = Math.max(5, m.displayRadius * zoom);
        if ((sx - mp.x) ** 2 + (sy - mp.y) ** 2 <= mr * mr * 4) return { type: 'moon', data: m, parent: p };
      }
    }
  }
  return null;
}

// ─── Info Card ──────────────────────────────────────────────
const cardEl = document.getElementById('planet-card');
function showPlanetCard(planet) {
  document.getElementById('card-name').textContent = planet.name;
  document.getElementById('card-tagline').textContent = planet.tagline;
  document.getElementById('card-desc').textContent = planet.description;
  cardEl.style.setProperty('--card-glow', planet.glowColor);
  let html = '';
  for (const [k, v] of Object.entries(planet.info)) {
    html += `<div class="stat-cell"><span class="stat-label">${k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</span><span class="stat-val">${v}</span></div>`;
  }
  document.getElementById('card-stats').innerHTML = html;
  const moonsSection = document.getElementById('card-moons-section');
  const moonList = document.getElementById('card-moon-list');
  if (planet.moons.length > 0) {
    moonsSection.classList.add('has-moons');
    moonList.innerHTML = planet.moons.map(m =>
      `<span class="moon-badge" data-info="${m.info}"><span class="moon-dot" style="background:${m.color}"></span>${m.name}</span>`
    ).join('');
    moonList.querySelectorAll('.moon-badge').forEach(b => {
      b.addEventListener('click', () => {
        document.getElementById('card-desc').textContent = `${b.textContent.trim()}: ${b.dataset.info}`;
      });
    });
  } else { moonsSection.classList.remove('has-moons'); moonList.innerHTML = ''; }
  // Preview
  const cc = document.getElementById('card-canvas');
  const ccCtx = cc.getContext('2d'); cc.width = 140; cc.height = 140; ccCtx.clearRect(0, 0, 140, 140);
  const pr = planet.id === 'saturn' ? 32 : planet.id === 'sun' ? 45 : 42;
  if (RENDERERS[planet.id]) RENDERERS[planet.id](ccCtx, 70, 70, pr);
  cardEl.classList.add('open');
}
function showMoonCard(moon, parent) {
  document.getElementById('card-name').textContent = moon.name;
  document.getElementById('card-tagline').textContent = `Moon of ${parent.name}`;
  document.getElementById('card-desc').textContent = moon.info;
  cardEl.style.setProperty('--card-glow', parent.glowColor);
  document.getElementById('card-stats').innerHTML = `
    <div class="stat-cell"><span class="stat-label">Parent</span><span class="stat-val">${parent.name}</span></div>
    <div class="stat-cell"><span class="stat-label">Orbital Period</span><span class="stat-val">${moon.orbitalPeriod} days</span></div>`;
  document.getElementById('card-moons-section').classList.remove('has-moons');
  const cc = document.getElementById('card-canvas');
  const ccCtx = cc.getContext('2d'); cc.width = 140; cc.height = 140; ccCtx.clearRect(0, 0, 140, 140);
  const mg = ccCtx.createRadialGradient(55, 55, 0, 70, 70, 35);
  mg.addColorStop(0, lighten(moon.color, 50)); mg.addColorStop(1, moon.color);
  ccCtx.beginPath(); ccCtx.arc(70, 70, 35, 0, Math.PI * 2); ccCtx.fillStyle = mg; ccCtx.fill();
  sphereShading(ccCtx, 70, 70, 35);
  cardEl.classList.add('open');
}
function closeCard() { cardEl.classList.remove('open'); }
document.getElementById('card-close').addEventListener('click', closeCard);

// ─── Interaction ────────────────────────────────────────────
let isDragging = false, hasDragged = false, dragSX = 0, dragSY = 0, camSX = 0, camSY = 0;

canvas.addEventListener('mousedown', e => {
  isDragging = true; hasDragged = false;
  dragSX = e.clientX; dragSY = e.clientY;
  camSX = STATE.camera.x; camSY = STATE.camera.y;
});
canvas.addEventListener('mousemove', e => {
  if (!isDragging) { canvas.style.cursor = hitTest(e.clientX, e.clientY) ? 'pointer' : (GAME.active ? 'crosshair' : 'grab'); return; }
  const dx = e.clientX - dragSX, dy = e.clientY - dragSY;
  if (Math.abs(dx) + Math.abs(dy) > 4) hasDragged = true;
  STATE.camera.x = camSX - dx / STATE.camera.zoom;
  STATE.camera.y = camSY - dy / STATE.camera.zoom;
});
canvas.addEventListener('mouseup', e => {
  isDragging = false;
  if (!hasDragged) {
    // Game click first
    if (GAME.active && gameClickTest(e.clientX, e.clientY)) return;
    const hit = hitTest(e.clientX, e.clientY);
    if (hit) { hit.type === 'planet' ? showPlanetCard(hit.data) : showMoonCard(hit.data, hit.parent); }
    else closeCard();
  }
});
canvas.addEventListener('mouseleave', () => { isDragging = false; });

// Touch
let touchId = null;
canvas.addEventListener('touchstart', e => { e.preventDefault(); const t = e.touches[0]; touchId = t.identifier; isDragging = true; hasDragged = false; dragSX = t.clientX; dragSY = t.clientY; camSX = STATE.camera.x; camSY = STATE.camera.y; }, { passive: false });
canvas.addEventListener('touchmove', e => { e.preventDefault(); if (!isDragging) return; const t = [...e.touches].find(tt => tt.identifier === touchId); if (!t) return; const dx = t.clientX - dragSX, dy = t.clientY - dragSY; if (Math.abs(dx) + Math.abs(dy) > 4) hasDragged = true; STATE.camera.x = camSX - dx / STATE.camera.zoom; STATE.camera.y = camSY - dy / STATE.camera.zoom; }, { passive: false });
canvas.addEventListener('touchend', e => { e.preventDefault(); if (!hasDragged && touchId !== null) { const t = e.changedTouches[0]; if (GAME.active && gameClickTest(t.clientX, t.clientY)) { isDragging = false; touchId = null; return; } const hit = hitTest(t.clientX, t.clientY); if (hit) { hit.type === 'planet' ? showPlanetCard(hit.data) : showMoonCard(hit.data, hit.parent); } else closeCard(); } isDragging = false; touchId = null; }, { passive: false });

canvas.addEventListener('wheel', e => { e.preventDefault(); STATE.targetZoom = Math.max(0.15, Math.min(25, STATE.camera.zoom * (e.deltaY > 0 ? 0.88 : 1.14))); }, { passive: false });

// ─── UI Bindings ────────────────────────────────────────────
document.getElementById('speed-slider').addEventListener('input', e => { STATE.speed = Number(e.target.value); document.getElementById('speed-value').textContent = STATE.speed + ' d/s'; });

const toggleBtn = (id, key) => { const b = document.getElementById(id); b.classList.toggle('active', STATE[key]); b.addEventListener('click', () => { STATE[key] = !STATE[key]; b.classList.toggle('active', STATE[key]); }); };
toggleBtn('btn-orbits', 'showOrbits');
toggleBtn('btn-labels', 'showLabels');
toggleBtn('btn-moons-toggle', 'showMoons');

const pauseBtn = document.getElementById('btn-pause');
function togglePause() {
  STATE.paused = !STATE.paused;
  document.getElementById('pause-icon').textContent = STATE.paused ? '▶' : '⏸';
  document.getElementById('pause-text').textContent = STATE.paused ? 'Play' : 'Pause';
  document.getElementById('status-dot').classList.toggle('paused', STATE.paused);
  document.getElementById('status-text').textContent = STATE.paused ? 'Paused' : 'Running';
}
pauseBtn.addEventListener('click', togglePause);

function resetCamera() { STATE.camera.x = 0; STATE.camera.y = 0; STATE.targetZoom = 1; }
document.getElementById('btn-reset-view').addEventListener('click', resetCamera);
document.getElementById('zoom-in').addEventListener('click', () => { STATE.targetZoom = Math.min(25, STATE.camera.zoom * 1.4); });
document.getElementById('zoom-out').addEventListener('click', () => { STATE.targetZoom = Math.max(0.15, STATE.camera.zoom / 1.4); });

// Game button
document.getElementById('btn-game').addEventListener('click', () => { GAME.active ? exitGame() : startGame(); });
document.getElementById('go-restart').addEventListener('click', startGame);
document.getElementById('go-exit').addEventListener('click', exitGame);

// Info modal
const modal = document.getElementById('info-modal');
document.getElementById('btn-info').addEventListener('click', () => modal.classList.add('open'));
document.getElementById('modal-close').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

// Keyboard
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  switch (e.key) {
    case ' ': e.preventDefault(); togglePause(); break;
    case 'o': case 'O': document.getElementById('btn-orbits').click(); break;
    case 'l': case 'L': document.getElementById('btn-labels').click(); break;
    case 'm': case 'M': document.getElementById('btn-moons-toggle').click(); break;
    case 'r': case 'R': resetCamera(); break;
    case 'g': case 'G': document.getElementById('btn-game').click(); break;
    case 's': case 'S': activateShield(); break;
    case 'i': case 'I': modal.classList.toggle('open'); break;
    case 'Escape': modal.classList.remove('open'); closeCard(); break;
    case '+': case '=': STATE.targetZoom = Math.min(25, STATE.camera.zoom * 1.3); break;
    case '-': case '_': STATE.targetZoom = Math.max(0.15, STATE.camera.zoom / 1.3); break;
  }
});

// ─── Main Loop ──────────────────────────────────────────────
let lastTime = performance.now();

function loop(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.1);
  lastTime = now;
  const t = now * 0.001;

  if (!STATE.paused) {
    STATE.simTime += STATE.speed * dt;

    // Record orbital trails
    for (const p of PLANETS) {
      if (p.orbitRadius === 0) continue;
      const trail = orbitalTrails.get(p.id);
      if (trail) {
        trail.push({ x: p._wx || 0, y: p._wy || 0 });
        while (trail.length > TRAIL_MAX) trail.shift();
      }
    }
  }

  // Shooting stars
  nextShootingStar -= dt;
  if (nextShootingStar <= 0) { spawnShootingStar(); nextShootingStar = 2 + Math.random() * 5; }
  for (const ss of shootingStars) ss.life += dt;
  while (shootingStars.length > 0 && shootingStars[0].life > shootingStars[0].maxLife) shootingStars.shift();

  // Smooth zoom
  STATE.camera.zoom += (STATE.targetZoom - STATE.camera.zoom) * 0.12;

  // Game update
  gameUpdate(dt);

  // Render
  render(t);

  // Status
  if (Math.floor(now / 250) !== Math.floor((now - dt * 1000) / 250)) {
    document.getElementById('sim-day').textContent = Math.floor(STATE.simTime).toLocaleString();
    document.getElementById('sim-year').textContent = (STATE.simTime / 365.25).toFixed(1);
    const zStr = STATE.camera.zoom.toFixed(1) + '×';
    document.getElementById('zoom-display').textContent = zStr;
    document.getElementById('zoom-level').textContent = zStr;
  }

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
