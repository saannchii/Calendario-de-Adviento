// ===== CONFIGURACIÓN GENERAL =====
const START_DATE = new Date(2025, 11, 1); // 1 diciembre 2025
const TOTAL_DAYS = 24;
const MAX_ATTEMPTS = 3;
const STORAGE_KEY = "adviento_game_state_v7";
const DEV_PASSWORD = "1daniel1";

const BASE_SNOW_OPACITY = 0.25;
const TRANSITION_SNOW_OPACITY = 0.8;

// ===== PISTAS =====
const HINTS = [
  // 1) Perilla de palanca de cambios
  [
    "Donde una decisión pequeña cambia por completo el camino que tomas.",
    "Se usa siempre con la mano, pero nunca camina contigo.",
    "Sin tocarlo, el viaje se queda en punto muerto."
  ],
  // 2) Cabezal de cargador
  [
    "No tiene energía propia, pero la presta a otros.",
    "Le gusta vivir pegado a la pared.",
    "Sin él, muchos aparatos se quedarían dormidos para siempre."
  ],
  // 3) Peine plegable
  [
    "Cambia de forma cuando lo necesitas.",
    "Domina el caos sin levantar la voz.",
    "Suele aparecer justo antes de un espejo."
  ],
  // 4) Marcapáginas
  [
    "Siempre vuelve al mismo lugar sin avanzar ni retroceder.",
    "No lee, pero nunca olvida por dónde ibas.",
    "Vive entre páginas y odia que las doblen."
  ],
  // 5) Juego de brochas (MODIFICADAS)
  [
    "No pinta paredes ni lienzos, pero deja huella.",
    "Viajan juntas como un pequeño ejército silencioso.",
    "Entienden de colores, pero no pertenecen a un estuche de lápices."
  ],
  // 6) Caja de almacenamiento de joyas
  [
    "No brilla por sí misma, pero protege lo que sí lo hace.",
    "Es el hogar de cosas que solo se usan en momentos especiales.",
    "Si suena un tintineo al moverla, es buena señal."
  ],
  // 7) Lego muñeco de nieve
  [
    "Nació del frío, pero este nunca se derrite.",
    "No teme al sol, porque está hecho de algo muy distinto.",
    "Se construye pieza a pieza, no con copos."
  ],
  // 8) Luz de Luna
  [
    "Hace de noche incluso cuando es de día.",
    "No depende del cielo para brillar.",
    "Trae un trocito de satélite a tu habitación."
  ],
  // 9) Flor rosa eterna
  [
    "Desafía al calendario y a las estaciones.",
    "Tiene forma de algo que normalmente acaba marchitándose.",
    "Fue hecha para quedarse mucho más tiempo de lo normal."
  ],
  // 10) Led de notas
  [
    "Le gusta iluminar ideas antes de que se escapen.",
    "Su sitio favorito está cerca de una pared o escritorio.",
    "Combina mensajes cortos con un pequeño escenario de luz."
  ],
  // 11) Lámpara de noche de pato
  [
    "Su pico no hace ruido, pero ilumina.",
    "Es un animal que nunca se mueve del mismo sitio.",
    "Puede acompañar la noche desde la mesilla sin decir ni pío."
  ],
  // 12) Luz de Hello Kitty Luna
  [
    "No maúlla, pero le encanta la oscuridad para destacar.",
    "Tiene la cara de alguien muy famoso en el mundo kawaii.",
    "La reconocerías por su lazo aunque no vieras nada más."
  ],
  // 13) Guirnalda Led para fotos
  [
    "Le encantan los recuerdos, pero no tiene memoria propia.",
    "Solo sirve cuando algo se cuelga de ella.",
    "Hace que las paredes parezcan una línea del tiempo iluminada."
  ],
  // 14) Peluche Burbuja Supernenas
  [
    "Es blandito, pero nació de un dibujo muy explosivo.",
    "Tiene ojos grandes y mucha energía, aunque no se mueva.",
    "Su origen está en un trío de heroínas bastante retro."
  ],
  // 15) Labubu Stitch
  [
    "Parece un pequeño caos con cara adorable.",
    "Es de esas criaturas que dan más ternura que miedo.",
    "Su diseño mezcla monería con un toque travieso."
  ],
  // 16) Peluche Hello Kitty
  [
    "No necesita boca para ser reconocida.",
    "Siempre va bien vestida, aunque esté sobre la cama.",
    "La ves y piensas en la marca que lo invade todo."
  ],
  // 17) Cesta almacenamiento Hello Kitty
  [
    "Le encanta el orden, pero por fuera es puro diseño.",
    "No se pone nerviosa cuando las cosas se acumulan dentro.",
    "Organiza tus cosas con la misma cara famosa de siempre."
  ],
  // 18) Impresora portátil + papel térmico
  [
    "No necesita tinta para dejar huella.",
    "Convierte momentos digitales en pequeños trozos de papel.",
    "Saca recuerdos en blanco y negro casi al instante."
  ],
  // 19) Espejo interior de coche (OJO: ahora va antes)
  [
    "Su trabajo es mirar hacia atrás mientras tú miras hacia delante.",
    "Su hogar siempre está unido a un cristal.",
    "Te deja ver lo que viene, pero también lo que ya pasó."
  ],
  // 20) Espejo de tocador de escritorio
  [
    "Solo funciona si alguien está delante.",
    "Nunca se cansa de ver la misma cara cada día.",
    "Le gusta vivir cerca de luces y de productos para arreglarse."
  ],
  // 21) Cámara de fotos retro
  [
    "Detiene el tiempo en rectángulos pequeños.",
    "Ama los destellos y los clics.",
    "Tiene un aire antiguo aunque siga funcionando ahora."
  ],
  // 22) Mesita para cama
  [
    "Le encanta acercarse a ti cuando no quieres levantarte.",
    "Sostiene desayunos, libros o portátiles sin quejarse.",
    "Es como una pequeña extensión de la cama cuando estás comodx."
  ],
  // 23) Proyector portátil
  [
    "Convierte paredes normales en escenas enormes.",
    "Cuanto más oscuro esté todo, mejor trabaja.",
    "Le gusta transformar una habitación en mini cine improvisado."
  ],
  // 24) Hand Casting Kit
  [
    "No guarda objetos, guarda gestos.",
    "Trabaja con mezcla y paciencia.",
    "Su resultado es una forma sólida de algo que normalmente está siempre en movimiento."
  ]
];


const SOLUTIONS = [
  // 1
  ["palanca", "cambio", "cambios", "marchas", "coche", "perilla"],
  // 2
  ["cargador", "carga", "enchufe", "adaptador"],
  // 3
  ["peine", "pelo", "cabello", "plegable", "peinar"],
  // 4
  ["marcapaginas", "marcapáginas", "libro", "pagina", "página"],
  // 5 brochas
  ["brochas", "brocha", "pincel", "pinceles", "maquillaje"],
  // 6 joyero
  ["joyas", "joyero", "anillos", "collar", "pendientes"],
  // 7 lego nieve
  ["lego", "bloques", "nieve", "muñeco"],
  // 8 luz luna
  ["luna", "lampara", "lámpara", "noche", "luz"],
  // 9 rosa eterna
  ["rosa", "flor", "eterna", "preservada"],
  // 10 led notas
  ["notas", "postit", "post-it", "apuntes", "led"],
  // 11 pato
  ["pato", "lampara", "lámpara", "noche", "luz"],
  // 12 hello kitty luna
  ["hello", "kitty", "luna", "gata", "lampara", "lámpara"],
  // 13 guirnalda fotos
  ["fotos", "guirnalda", "luces", "recuerdos", "cadena"],
  // 14 burbuja
  ["peluche", "burbuja", "supernenas", "muñeca"],
  // 15 labubu stitch
  ["labubu", "stitch", "peluche", "muñeco"],
  // 16 peluche hello kitty
  ["hello", "kitty", "peluche", "gato"],
  // 17 cesta hello kitty
  ["cesta", "caja", "hello", "kitty", "almacenamiento", "organizador"],
  // 18 impresora
  ["impresora", "portatil", "portátil", "fotos", "papel", "termico", "térmico", "imprimir"],
  // 19 espejo coche
  ["espejo", "coche", "retrovisor", "interior"],
  // 20 espejo tocador
  ["espejo", "tocador", "maquillaje"],
  // 21 camara retro
  ["camara", "cámara", "fotos", "retro", "polaroid"],
  // 22 mesita cama
  ["mesita", "cama", "bandeja", "desayuno"],
  // 23 proyector
  ["proyector", "peliculas", "películas", "cine", "pantalla"],
  // 24 hand casting
  ["manos", "molde", "yeso", "escultura", "kit", "hand casting"]
];

// ===== DOM =====
const viewCalendar = document.getElementById("viewCalendar");
const viewDay = document.getElementById("viewDay");
const viewFinal = document.getElementById("viewFinal");

const daysGrid = document.getElementById("daysGrid");
const dateInfo = document.getElementById("dateInfo");
const devBtn = document.getElementById("devBtn");

const dayTitle = document.getElementById("dayTitle");
const dayStatus = document.getElementById("dayStatus");
const clueList = document.getElementById("clueList");
const guessForm = document.getElementById("guessForm");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const guessInfo = document.getElementById("guessInfo");
const backBtn = document.getElementById("backBtn");

const snowVideo = document.getElementById("snowVideo");

const endModalBackdrop = document.getElementById("endModalBackdrop");
const endModalCloseBtn = document.getElementById("endModalCloseBtn");

const successModalBackdrop = document.getElementById("successModalBackdrop");
const successModalCloseBtn = document.getElementById("successModalCloseBtn");

const devModalBackdrop = document.getElementById("devModalBackdrop");
const devPasswordInput = document.getElementById("devPasswordInput");
const devCancelBtn = document.getElementById("devCancelBtn");
const devConfirmBtn = document.getElementById("devConfirmBtn");

const topToast = document.getElementById("topToast");
const finalBackBtn = document.getElementById("finalBackBtn");

const bgMusicElement = document.getElementById("bgMusic");

// elementos del pase final (fotos / vídeos)
const finalImageEl = document.getElementById("finalImage");
const finalVideoEl = document.getElementById("finalVideo");

// ===== ESTADO =====
let currentDay = null;
let state = loadState();
let isDevMode = false;

// ---------- STATE ----------
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { opened: {}, attempts: {}, solved: {} };
    const parsed = JSON.parse(raw);
    return {
      opened: parsed.opened || {},
      attempts: parsed.attempts || {},
      solved: parsed.solved || {}
    };
  } catch {
    return { opened: {}, attempts: {}, solved: {} };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getTodayInfo() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = (today - START_DATE) / (1000 * 60 * 60 * 24);
  return {
    now,
    calendarDay: Math.floor(diff) + 1
  };
}

// ---------- RENDER CALENDARIO ----------
function renderCalendar() {
  const { now, calendarDay } = getTodayInfo();

  if (calendarDay < 1) {
    dateInfo.textContent =
      `Hoy es ${now.toLocaleDateString("es-ES")}. El calendario aún no ha empezado (empieza el 1/12/2025).`;
  } else {
    dateInfo.textContent =
      `Hoy es ${now.toLocaleDateString("es-ES")}. Día ${calendarDay} del calendario.`;
  }

  daysGrid.innerHTML = "";

  for (let i = 1; i <= TOTAL_DAYS; i++) {
    const card = document.createElement("div");
    card.className = "day-card";
    card.dataset.day = i;

    const label = document.createElement("div");
    label.className = "day-label";
    label.textContent = i;

    const icon = document.createElement("div");
    icon.className = "icon";

    const solved = !!state.solved[i];
    const opened = !!state.opened[i];

    let isLocked = false;

    if (!isDevMode) {
      if (calendarDay < 1 || i > calendarDay) {
        isLocked = true;
      }
    }

    if (isLocked) {
      card.classList.add("locked");
      icon.textContent = "🔒";
    } else {
      if (solved) {
        card.classList.add("solved");
        icon.textContent = "🎉";
      } else if (opened) {
        card.classList.add("opened");
        icon.textContent = "👀";
      } else {
        icon.textContent = "✨";
      }

      if (!isDevMode && calendarDay >= 1 && i === calendarDay) {
        card.classList.add("today");
        const badge = document.createElement("div");
        badge.className = "today-badge";
        badge.textContent = "HOY";
        card.appendChild(badge);
      }

      card.addEventListener("click", () => openDay(i));
    }

    card.appendChild(label);
    card.appendChild(icon);
    daysGrid.appendChild(card);
  }
}

// ---------- VISTAS ----------
function showView(name) {
  if (name === "calendar") {
    viewCalendar.classList.add("view-active");
    viewDay.classList.remove("view-active");
    viewFinal.classList.remove("view-active");
  } else if (name === "day") {
    viewDay.classList.add("view-active");
    viewCalendar.classList.remove("view-active");
    viewFinal.classList.remove("view-active");
  } else if (name === "final") {
    viewFinal.classList.add("view-active");
    viewCalendar.classList.remove("view-active");
    viewDay.classList.remove("view-active");
  }
}

function triggerSnowTransition(callback) {
  if (!snowVideo) {
    if (callback) callback();
    return;
  }

  snowVideo.style.opacity = TRANSITION_SNOW_OPACITY;

  setTimeout(() => {
    snowVideo.style.opacity = BASE_SNOW_OPACITY;
    if (callback) callback();
  }, 700);
}

// ---------- ABRIR DÍA ----------
function openDay(day) {
  currentDay = day;
  state.opened[day] = true;

  // Reiniciar siempre la “partida” del día:
  state.attempts[day] = 0;
  state.solved[day] = false;
  saveState();

  updateDayView();
  triggerSnowTransition(() => {
    showView("day");
  });
  renderCalendar();
}

function updateDayView() {
  if (!currentDay) return;
  const day = currentDay;
  const attempts = state.attempts[day] || 0;
  const solved = !!state.solved[day];

  dayTitle.textContent = `Día ${day}`;

  if (solved) {
    dayStatus.textContent = "Este regalo ya lo has adivinado 💚";
  } else if (attempts >= MAX_ATTEMPTS) {
    dayStatus.textContent = "Has agotado los intentos. Toca abrir el regalo. 🎁";
  } else {
    const remaining = MAX_ATTEMPTS - attempts;
    dayStatus.textContent = `Intentos restantes: ${remaining}`;
  }

  const hintsForDay = HINTS[day - 1] || [];
  const numHintsToShow = Math.min(attempts + 1, hintsForDay.length);
  clueList.innerHTML = "";
  for (let i = 0; i < numHintsToShow; i++) {
    const li = document.createElement("li");
    li.textContent = hintsForDay[i];
    clueList.appendChild(li);
  }

  if (solved) {
    guessInput.disabled = true;
    guessButton.disabled = true;
    guessInfo.textContent =
      "¡Has acertado! Diría que ya te haces bastante idea de lo que es… puedes abrirlo cuando quieras. ✨";
    guessInfo.className = "guess-info success";
  } else if (attempts >= MAX_ATTEMPTS) {
    guessInput.disabled = false;
    guessButton.disabled = false;
    guessInfo.textContent =
      "No te preocupes, lo importante es la sorpresa. Puedes volver a intentarlo si quieres. 🎁💖";
    guessInfo.className = "guess-info final";
  } else {
    guessInput.disabled = false;
    guessButton.disabled = false;
    const remaining = MAX_ATTEMPTS - attempts;
    guessInfo.textContent =
      `Te quedan ${remaining} intento${remaining === 1 ? "" : "s"} para este regalo.`;
    guessInfo.className = "guess-info";
  }

  guessInput.value = "";
}

// ---------- UTILIDADES ----------
function normalizeText(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function checkGuess(day, guess) {
  const keywords = SOLUTIONS[day - 1] || [];
  const normGuess = normalizeText(guess);
  return keywords.some((kw) => normGuess.includes(normalizeText(kw)));
}

// ---------- FINAL ESPECIAL DÍA 24 ----------
function goToFinalMessage() {
  triggerSnowTransition(() => {
    showView("final");
    startFinalSlideshow();
  });
}

// ---------- INTENTOS ----------
guessForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentDay) return;

  const guess = guessInput.value.trim();
  if (!guess) return;

  const day = currentDay;
  let attempts = state.attempts[day] || 0;
  const solved = !!state.solved[day];

  if (solved) {
    if (day === 24) {
      setTimeout(goToFinalMessage, 5000);
    }
    return;
  }

  if (attempts >= MAX_ATTEMPTS) {
    if (day === 24) {
      setTimeout(goToFinalMessage, 5000);
    } else {
      showEndModal();
    }
    return;
  }

  if (checkGuess(day, guess)) {
    state.solved[day] = true;
    saveState();
    guessInfo.textContent =
      "¡Has acertado! Parece que conoces muy bien tus regalos… 😏🎉";
    guessInfo.className = "guess-info success";
    updateDayView();
    renderCalendar();

    if (day === 24) {
      setTimeout(goToFinalMessage, 5000);
    } else {
      showSuccessModal();
    }
    return;
  }

  // FALLO
  attempts += 1;
  state.attempts[day] = attempts;
  saveState();

  if (attempts >= MAX_ATTEMPTS) {
    updateDayView();
    if (day === 24) {
      setTimeout(goToFinalMessage, 5000);
    } else {
      showEndModal();
    }
  } else {
    guessInfo.textContent =
      "No exactamente… la cosa va por otro lado. Mira la nueva pista. 😉";
    guessInfo.className = "guess-info fail";
    updateDayView();
  }
});

// ---------- MODALES FINAL / ACIERTO ----------
function showEndModal() {
  endModalBackdrop.classList.remove("hidden");
}

function hideEndModalAndResetAttempts() {
  endModalBackdrop.classList.add("hidden");
  if (currentDay != null && !state.solved[currentDay]) {
    state.attempts[currentDay] = 0;
    saveState();
  }
  triggerSnowTransition(() => {
    showView("calendar");
    renderCalendar();
  });
}

endModalCloseBtn.addEventListener("click", hideEndModalAndResetAttempts);

function showSuccessModal() {
  successModalBackdrop.classList.remove("hidden");
}

function hideSuccessModal() {
  successModalBackdrop.classList.add("hidden");
  triggerSnowTransition(() => {
    showView("calendar");
    renderCalendar();
  });
}

successModalCloseBtn.addEventListener("click", hideSuccessModal);

// ---------- MODO DESARROLLADOR ----------
function showDevModal() {
  devPasswordInput.value = "";
  devModalBackdrop.classList.remove("hidden");
  devPasswordInput.focus();
}

function hideDevModal() {
  devModalBackdrop.classList.add("hidden");
}

function showToast(message) {
  topToast.textContent = message;
  topToast.classList.add("show");
  setTimeout(() => {
    topToast.classList.remove("show");
  }, 3000);
}

devBtn.addEventListener("click", showDevModal);

devCancelBtn.addEventListener("click", () => {
  hideDevModal();
});

devConfirmBtn.addEventListener("click", () => {
  const value = devPasswordInput.value.trim();
  if (value === DEV_PASSWORD) {
    isDevMode = true;
    hideDevModal();
    devBtn.classList.add("dev-on");
    devBtn.textContent = "Modo desarrollador (ON)";
    showToast("Modo desarrollador activado. Todos los días desbloqueados.");
    renderCalendar();
  } else {
    hideDevModal();
    isDevMode = false;
    devBtn.classList.remove("dev-on");
    devBtn.textContent = "Modo desarrollador";
    showToast("Contraseña de desarrollador incorrecta");
  }
});

devModalBackdrop.addEventListener("click", (e) => {
  if (e.target === devModalBackdrop) hideDevModal();
});

// ---------- BOTONES VOLVER ----------
backBtn.addEventListener("click", () => {
  triggerSnowTransition(() => {
    showView("calendar");
  });
});

finalBackBtn.addEventListener("click", () => {
  stopFinalSlideshow();
  triggerSnowTransition(() => {
    showView("calendar");
  });
});

// ---------- MÚSICA CON CROSSFADE (independiente de pantallas) ----------
let musicTracks = [];
let activeTrack = 0;
let musicReady = false;
let isMusicPlaying = false;
const FADE_DURATION = 3;
let crossfadeScheduled = [false, false];

function initMusic() {
  if (musicReady) return;

  const src =
    bgMusicElement.querySelector("source")?.getAttribute("src") ||
    "audio/musica.mp3";

  musicTracks = [new Audio(src), new Audio(src)];
  musicTracks.forEach((track, index) => {
    track.preload = "auto";
    track.loop = false;
    track.volume = 0;
    track.addEventListener("timeupdate", () => handleTimeUpdate(index));
  });

  musicReady = true;
}

function handleTimeUpdate(index) {
  const track = musicTracks[index];
  if (!isMusicPlaying || isNaN(track.duration) || track.duration === Infinity) return;

  const remaining = track.duration - track.currentTime;

  if (remaining <= FADE_DURATION && !crossfadeScheduled[index]) {
    crossfadeScheduled[index] = true;
    const nextIndex = index === 0 ? 1 : 0;
    startCrossfade(index, nextIndex);
  }
}

function startCrossfade(fromIndex, toIndex) {
  const fromTrack = musicTracks[fromIndex];
  const toTrack = musicTracks[toIndex];

  toTrack.currentTime = 0;
  toTrack.volume = 0;
  toTrack.play().catch(() => {});
  activeTrack = toIndex;
  crossfadeScheduled[toIndex] = false;

  const stepTime = 100;
  const steps = (FADE_DURATION * 1000) / stepTime;
  let currentStep = 0;

  const fadeInterval = setInterval(() => {
    currentStep++;
    const t = currentStep / steps;

    fromTrack.volume = Math.max(0, 1 - t);
    toTrack.volume = Math.min(1, t);

    if (currentStep >= steps || !isMusicPlaying) {
      clearInterval(fadeInterval);
      fromTrack.pause();
      fromTrack.volume = 0;
    }
  }, stepTime);
}

function startMusic() {
  initMusic();
  if (!musicTracks.length) return;

  const first = musicTracks[activeTrack];
  first.currentTime = 0;
  first.volume = 0;
  crossfadeScheduled = [false, false];

  first
    .play()
    .then(() => {
      isMusicPlaying = true;
      const stepTime = 100;
      const steps = (FADE_DURATION * 1000) / stepTime;
      let currentStep = 0;
      const fadeIn = setInterval(() => {
        if (!isMusicPlaying) {
          clearInterval(fadeIn);
          return;
        }
        currentStep++;
        first.volume = Math.min(1, currentStep / steps);
        if (currentStep >= steps) clearInterval(fadeIn);
      }, stepTime);
    })
    .catch(() => {
      isMusicPlaying = false;
    });
}

// ---------- SLIDESHOW FINAL (6 FOTOS + 2 VÍDEOS) ----------
const finalMediaItems = [
  { type: "image", src: "img/final1.jpeg" },
  { type: "image", src: "img/final2.jpeg" },
  { type: "image", src: "img/final3.jpeg" },
  { type: "video", src: "video/final1.mp4" },
  { type: "image", src: "img/final4.jpeg" },
  { type: "image", src: "img/final5.jpeg" },
  { type: "image", src: "img/final6.jpeg" },
  { type: "video", src: "video/final2.mp4" }
];

let finalMediaIndex = 0;
let finalMediaTimeout = null;
const FINAL_IMAGE_DURATION = 4500;

function showFinalMedia(index) {
  if (!finalImageEl || !finalVideoEl) return;
  const item = finalMediaItems[index];
  if (!item) return;

  clearTimeout(finalMediaTimeout);

  if (item.type === "image") {
    finalVideoEl.pause();
    finalVideoEl.classList.remove("final-media-active");

    finalImageEl.src = item.src;
    requestAnimationFrame(() => {
      finalImageEl.classList.add("final-media-active");
    });

    finalMediaTimeout = setTimeout(() => {
      advanceFinalMedia();
    }, FINAL_IMAGE_DURATION);
  } else {
    finalImageEl.classList.remove("final-media-active");

    finalVideoEl.src = item.src;
    finalVideoEl.currentTime = 0;
    finalVideoEl.play().catch(() => {});
    finalVideoEl.classList.add("final-media-active");
  }
}

function advanceFinalMedia() {
  finalMediaIndex = (finalMediaIndex + 1) % finalMediaItems.length;
  showFinalMedia(finalMediaIndex);
}

if (finalVideoEl) {
  finalVideoEl.addEventListener("ended", () => {
    advanceFinalMedia();
  });
}

function startFinalSlideshow() {
  if (!finalImageEl || !finalVideoEl) return;
  finalMediaIndex = 0;
  showFinalMedia(finalMediaIndex);
}

function stopFinalSlideshow() {
  clearTimeout(finalMediaTimeout);
  if (finalVideoEl) {
    finalVideoEl.pause();
    finalVideoEl.src = "";
  }
}

// ---------- AUTOPLAY MÚSICA + NIEVE ----------
window.addEventListener("load", () => {
  startMusic();

  if (snowVideo) {
    snowVideo.style.opacity = BASE_SNOW_OPACITY;
    snowVideo.play().catch(() => {});
    snowVideo.addEventListener("ended", () => {
      snowVideo.currentTime = 0;
      snowVideo.play().catch(() => {});
    });
  }

  const resumeOnInteraction = () => {
    if (!isMusicPlaying) {
      startMusic();
    }
    if (snowVideo) {
      snowVideo.play().catch(() => {});
    }
    document.removeEventListener("click", resumeOnInteraction);
    document.removeEventListener("keydown", resumeOnInteraction);
  };

  document.addEventListener("click", resumeOnInteraction);
  document.addEventListener("keydown", resumeOnInteraction);
});

// ---------- INICIO ----------
renderCalendar();
showView("calendar");

// =====================================================
//  PWA: registro de Service Worker
// =====================================================
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch((err) => {
    console.error("Error registrando Service Worker:", err);
  });
}

// =====================================================
//  NOTIFICACIONES MEJORADAS + OneSignal
//  ✅ Campanita animada
//  ✅ Recuerda si ya activó
//  ✅ Detecta iPhone y avisa
//  ✅ OneSignal para diarias automáticas
// =====================================================

const notifyBtn = document.getElementById("notifyBtn");
const iphoneHint = document.getElementById("iphoneHint");

const NOTIFY_STORAGE_KEY = "adviento_notify_enabled";

// --- Detectar iPhone / iPad ---
function isIOS() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Detectar si está instalada como app (PWA)
function isStandalonePWA() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
}

// Mostrar mensajito si es iPhone y no está instalada
function showIphoneHintIfNeeded() {
  if (!iphoneHint) return;
  if (isIOS() && !isStandalonePWA()) {
    iphoneHint.classList.remove("hidden");
  } else {
    iphoneHint.classList.add("hidden");
  }
}

// --- Pintar estado del botón según localStorage ---
function syncNotifyButtonUI() {
  if (!notifyBtn) return;
  const enabled = localStorage.getItem(NOTIFY_STORAGE_KEY) === "true";
  notifyBtn.classList.toggle("enabled", enabled);
  notifyBtn.querySelector(".notify-text").textContent =
    enabled ? "Notificaciones activadas" : "Recordatorio diario";
}

showIphoneHintIfNeeded();
syncNotifyButtonUI();

// --- OneSignal init ---
window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function (OneSignal) {
  await OneSignal.init({
    appId: "TU_ONESIGNAL_APP_ID_AQUI",  // 👈 PON TU APP ID
    notifyButton: { enable: false }     // usamos nuestro botón
  });

  // Si ya estaba suscrito antes, reflejar en UI
  const isSubscribed = await OneSignal.User.PushSubscription.optedIn;
  if (isSubscribed) {
    localStorage.setItem(NOTIFY_STORAGE_KEY, "true");
    syncNotifyButtonUI();
  }
});


// --- Evento del botón campanita ---
if (notifyBtn && "Notification" in window) {
  notifyBtn.addEventListener("click", async () => {
    try {
      // Pedir permiso nativo
      const perm = await Notification.requestPermission();

      if (perm === "granted") {
        // Marcar como activado en localStorage
        localStorage.setItem(NOTIFY_STORAGE_KEY, "true");
        syncNotifyButtonUI();

        // Pedir suscripción OneSignal
        OneSignalDeferred.push(async function (OneSignal) {
          await OneSignal.User.PushSubscription.optIn();

          // Tag para luego mandar notis diarias SOLO a quien activó
          await OneSignal.User.addTag("adviento_notis", "true");

          // Notificación de bienvenida (push real)
          // Esto NO se puede “forzar” desde JS sin servidor.
          // Lo haremos desde el panel (te explico abajo).
        });

        alert("¡Perfecto! Te avisaré cada día cuando toque abrir el regalo. 💌");

      } else if (perm === "denied") {
        localStorage.setItem(NOTIFY_STORAGE_KEY, "false");
        syncNotifyButtonUI();
        alert("Has rechazado las notificaciones. Si cambias de idea, puedes activarlas en Ajustes.");
      } else {
        alert("No se han activado las notificaciones. Puedes intentarlo cuando quieras.");
      }
    } catch (err) {
      console.error("Error pidiendo permiso de notificación:", err);
    }
  });
} else if (notifyBtn) {
  notifyBtn.style.display = "none";
}


