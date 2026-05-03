// --- CUENTA REGRESIVA ---
const targetDate = new Date("May 9, 2026 23:59:00").getTime(); 

const updateTimer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    
    if (distance < 0) {
        clearInterval(updateTimer);
        document.getElementById("timer").innerHTML = "¡Es hoy!";
    } else {
        document.getElementById("timer").innerHTML = `¡Faltan ${days} días!`;
    }
}, 1000);

// --- LÓGICA DE LA PORTADA Y MÚSICA ---
const welcomeScreen = document.getElementById('welcome-screen');
const openBtn = document.getElementById('open-btn');
const audio = document.getElementById('musica-fondo');
const musicToggleBtn = document.getElementById('music-toggle');

openBtn.addEventListener('click', () => {
    // Intentar reproducir la música con control de errores
    audio.play().then(() => {
        musicToggleBtn.innerHTML = "⏸️"; // Cambia el ícono a pausa
    }).catch((error) => {
        console.log("El navegador requiere más interacción para reproducir:", error);
    });
    
    // Mostrar el botón flotante
    musicToggleBtn.style.display = 'flex';

    // Desvanecer la portada suavemente
    welcomeScreen.style.opacity = '0';
    
    // Quitar el elemento después de que termine la animación (1.5 segundos)
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 1500);
});

// --- LÓGICA DEL BOTÓN FLOTANTE ---
musicToggleBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicToggleBtn.innerHTML = "⏸️";
    } else {
        audio.pause();
        musicToggleBtn.innerHTML = "🎵";
    }
});
