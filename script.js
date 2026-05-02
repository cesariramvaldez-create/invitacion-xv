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