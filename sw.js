// Service worker del Rincón: siempre intenta la red primero para que las
// actualizaciones lleguen al móvil, y usa la copia guardada solo sin conexión.
// Si añades un archivo nuevo, añádelo a esta lista y sube el número de CACHE.
const CACHE = 'rincon-v3';
const BASE = ['./',
  './1-primaria/comun/busca.html',
  './1-primaria/comun/cuentos.html',
  './1-primaria/comun/ingles.html',
  './1-primaria/comun/juegos.html',
  './1-primaria/comun/mas.html',
  './1-primaria/comun/micurso.html',
  './1-primaria/comun/pintar.html',
  './1-primaria/comun/taller.html',
  './1-primaria/cuentos.js',
  './1-primaria/juegos.js',
  './1-primaria/micurso.js',
  './2-primaria/comun/busca.html',
  './2-primaria/comun/cuentos.html',
  './2-primaria/comun/ingles.html',
  './2-primaria/comun/juegos.html',
  './2-primaria/comun/mas.html',
  './2-primaria/comun/micurso.html',
  './2-primaria/comun/pintar.html',
  './2-primaria/comun/taller.html',
  './2-primaria/cuentos.js',
  './2-primaria/juegos.js',
  './2-primaria/micurso.js',
  './3-primaria/comun/busca.html',
  './3-primaria/comun/cuentos.html',
  './3-primaria/comun/ingles.html',
  './3-primaria/comun/juegos.html',
  './3-primaria/comun/mas.html',
  './3-primaria/comun/micurso.html',
  './3-primaria/comun/pintar.html',
  './3-primaria/comun/taller.html',
  './3-primaria/cuentos.js',
  './3-primaria/juegos.js',
  './3-primaria/micurso.js',
  './4-primaria/comun/busca.html',
  './4-primaria/comun/cuentos.html',
  './4-primaria/comun/ingles.html',
  './4-primaria/comun/juegos.html',
  './4-primaria/comun/mas.html',
  './4-primaria/comun/micurso.html',
  './4-primaria/comun/pintar.html',
  './4-primaria/comun/taller.html',
  './4-primaria/cuentos.js',
  './4-primaria/juegos.js',
  './4-primaria/micurso.js',
  './5-primaria/comun/busca.html',
  './5-primaria/comun/cuentos.html',
  './5-primaria/comun/ingles.html',
  './5-primaria/comun/juegos.html',
  './5-primaria/comun/mas.html',
  './5-primaria/comun/micurso.html',
  './5-primaria/comun/pintar.html',
  './5-primaria/comun/taller.html',
  './5-primaria/cuentos.js',
  './5-primaria/juegos.js',
  './5-primaria/micurso.js',
  './icon-192.png',
  './icon-512.png',
  './index.html',
  './infantil/comun/busca.html',
  './infantil/comun/cuentos.html',
  './infantil/comun/micurso.html',
  './infantil/comun/pintar.html',
  './infantil/comun/taller.html',
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
