// Service worker del Rincón: siempre intenta la red primero para que las
// actualizaciones lleguen al móvil, y usa la copia guardada solo sin conexión.
// Si añades un archivo nuevo, añádelo a esta lista y sube el número de CACHE.
const CACHE = 'rincon-v2';
const BASE = ['./',
  './1-primaria/cuentos.js',
  './1-primaria/juegos.js',
  './1-primaria/micurso.js',
  './2-primaria/cuentos.js',
  './2-primaria/juegos.js',
  './2-primaria/micurso.js',
  './3-primaria/cuentos.js',
  './3-primaria/juegos.js',
  './3-primaria/micurso.js',
  './4-primaria/cuentos.js',
  './4-primaria/juegos.js',
  './4-primaria/micurso.js',
  './5-primaria/cuentos.js',
  './5-primaria/juegos.js',
  './5-primaria/micurso.js',
  './comun/busca.html',
  './comun/cuentos.html',
  './comun/ingles.html',
  './comun/juegos.html',
  './comun/mas.html',
  './comun/micurso.html',
  './comun/pintar.html',
  './comun/taller.html',
  './icon-192.png',
  './icon-512.png',
  './index.html',
  './infantil/cuentos.js',
  './infantil/infantil.html',
  './infantil/micurso.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  // cada archivo por separado: si uno falla, los demás se guardan igual
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(BASE.map(u => c.add(u).catch(() => {})))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
        return res;
      })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || (r.mode === 'navigate' ? caches.match('./index.html') : new Response('', { status: 504 }))))
  );
});
