// Instalación del Service Worker
self.addEventListener("install", (event) => {
  // Activación inmediata
  self.skipWaiting();
});

// Activación
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Manejo de notificaciones push (usadas por OneSignal)
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
    icon: data.icon || "img/icon-192.png",
    badge: data.badge || "img/icon-192.png",
    data: {
      url: data.url || "/calendario.html"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Al pulsar sobre la notificación, abrir la web
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data && event.notification.data.url
    ? event.notification.data.url
    : "/calendario.html";

  event.waitUntil(
    clients.openWindow(url)
  );
});
