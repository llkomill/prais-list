// Данные каталога и рисунок автомобиля
const CARS = [
  { id: 1, brand: 'Toyota', model: 'Camry', body: 'Седан', year: 2021, km: 48000, price: 289000, color: '#C8CDD3', fuel: 'Бензин' },
  { id: 2, brand: 'Toyota', model: 'RAV4', body: 'Кроссовер', year: 2022, km: 31000, price: 345000, color: '#2E4E7E', fuel: 'Гибрид' },
  { id: 3, brand: 'Hyundai', model: 'Sonata', body: 'Седан', year: 2020, km: 72000, price: 212000, color: '#1E2329', fuel: 'Бензин' },
  { id: 4, brand: 'Hyundai', model: 'Tucson', body: 'Кроссовер', year: 2023, km: 15000, price: 318000, color: '#B8362F', fuel: 'Бензин' },
  { id: 5, brand: 'Kia', model: 'K5', body: 'Седан', year: 2022, km: 39000, price: 268000, color: '#E4E6E8', fuel: 'Бензин' },
  { id: 6, brand: 'Kia', model: 'Sportage', body: 'Кроссовер', year: 2021, km: 55000, price: 276000, color: '#4C6B57', fuel: 'Дизель' },
  { id: 7, brand: 'Chevrolet', model: 'Malibu', body: 'Седан', year: 2019, km: 91000, price: 168000, color: '#7A1F2B', fuel: 'Бензин' },
  { id: 8, brand: 'Chevrolet', model: 'Spark', body: 'Хэтчбек', year: 2020, km: 44000, price: 96000, color: '#2FA39A', fuel: 'Бензин' },
  { id: 9, brand: 'Toyota', model: 'Yaris', body: 'Хэтчбек', year: 2018, km: 83000, price: 118000, color: '#E0A92E', fuel: 'Бензин' },
  { id: 10, brand: 'Hyundai', model: 'i20', body: 'Хэтчбек', year: 2021, km: 36000, price: 142000, color: '#3B6FD4', fuel: 'Бензин' },
  { id: 11, brand: 'Kia', model: 'Sorento', body: 'Кроссовер', year: 2023, km: 12000, price: 428000, color: '#30363D', fuel: 'Гибрид' },
  { id: 12, brand: 'Chevrolet', model: 'Tracker', body: 'Кроссовер', year: 2022, km: 27000, price: 198000, color: '#D2692F', fuel: 'Бензин' },
];
const som = (n) => n.toLocaleString('ru-RU') + ' сом.';
function carSvg(c) {
  const shapes = {
    'Седан': 'M30 112 C34 94 58 90 92 86 L132 56 C142 49 150 48 164 48 H236 C252 48 262 52 274 62 L300 86 C340 90 370 96 374 112 V128 H30Z',
    'Кроссовер': 'M28 112 C30 88 54 84 84 80 L118 44 C126 36 136 34 148 34 H262 C276 34 286 38 294 48 L318 80 C352 84 372 92 374 112 V130 H28Z',
    'Хэтчбек': 'M44 112 C46 92 68 88 96 84 L134 48 C142 40 152 38 164 38 H254 C272 38 288 46 298 62 L322 92 C346 94 358 100 360 112 V128 H44Z',
  };
  const win = { 'Седан': 'M112 86 L140 62 C146 57 152 56 162 56 H196 V86Z M204 56 H236 C248 56 256 60 264 67 L282 86 H204Z', 'Кроссовер': 'M104 80 L128 52 C134 45 140 43 150 43 H198 V80Z M206 43 H258 C270 43 278 46 284 54 L302 80 H206Z', 'Хэтчбек': 'M118 84 L142 56 C148 49 156 47 166 47 H204 V84Z M212 47 H252 C266 47 278 54 286 66 L300 84 H212Z' };
  return `<svg viewBox="0 0 400 170" role="img" aria-label="${c.brand} ${c.model}"><ellipse cx="200" cy="148" rx="176" ry="7" fill="#1A1F3A" fill-opacity=".14"/>
    <path d="${shapes[c.body]}" fill="${c.color}" stroke="#1A1F3A" stroke-opacity=".28"/><path d="${win[c.body]}" fill="#1A1F3A" fill-opacity=".72"/>
    <g fill="#1A1F3A"><circle cx="104" cy="130" r="23"/><circle cx="300" cy="130" r="23"/></g><g fill="#D9DEEA"><circle cx="104" cy="130" r="11"/><circle cx="300" cy="130" r="11"/></g></svg>`;
}
const HEAD = (cur) => `<header class="head"><a class="logo" href="index.html">Мошина+</a><nav><a href="index.html"${cur === 0 ? ' aria-current="page"' : ''}>Главная</a><a href="catalog.html"${cur === 1 ? ' aria-current="page"' : ''}>Каталог</a></nav></header>`;
const FOOT = `<footer class="foot">Мошина+. Пример сайта, автомобили и цены вымышлены.</footer>`;
const card = (c) => `<a class="car" href="car.html?id=${c.id}">${carSvg(c)}<h3>${c.brand} ${c.model}</h3><p>${c.year}, ${c.km.toLocaleString('ru-RU')} км, ${c.fuel.toLowerCase()}</p><b>${som(c.price)}</b></a>`;
