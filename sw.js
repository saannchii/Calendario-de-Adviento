// Instalación del Service Worker
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Manejo de notificaciones push
self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = {};
  }

  const title = data.title || "Calendario de Adviento 🎄";
  const options = {
    body: data.body || "Ya está disponible el regalo de hoy 💝",
    icon: data.icon || "img/icon-256.png",
    badge: data.badge || "img/icon-256.png",
    data: {
      // 👇 Ruta correcta dentro del repo
      url: data.url || "./index.html"
    }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url =
    (event.notification.data && event.notification.data.url)
      ? event.notification.data.url
      : "./index.html";

  event.waitUntil(clients.openWindow(url));
});
