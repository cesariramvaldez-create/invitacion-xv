// Cuenta Regresiva para el 9 de Mayo de 2026
const targetDate = new Date("May 9, 2026 18:00:00").getTime(); 

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

// --- LÓGICA DE LA PANTALLA DE BIENVENIDA Y MÚSICA ---
const welcomeScreen = document.getElementById('welcome-screen');
const openBtn = document.getElementById('open-btn');
const audio = document.getElementById('musica-fondo');

openBtn.addEventListener('click', () => {
    // 1. Iniciar la música
    audio.play();
    
    // 2. Desvanecer la pantalla de bienvenida
    welcomeScreen.style.opacity = '0';
    
    // 3. Quitar el elemento después de la transición (1 segundo)
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
    }, 1000);
});
