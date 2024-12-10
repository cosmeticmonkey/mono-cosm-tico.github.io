// Función para generar copos de nieve
function createSnowflakes() {
    const snowContainer = document.querySelector('.sky');
    const numSnowflakes = 100; // Número de copos de nieve

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Usamos el emoji de copo de nieve

        // Posición y animación aleatoria para cada copo de nieve
        snowflake.style.left = Math.random() * 100 + 'vw'; // Random para la posición horizontal
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // Duración aleatoria
        snowflake.style.animationDelay = Math.random() * 10 + 's'; // Retardo aleatorio
        snowContainer.appendChild(snowflake);
    }
}

// Llamada a la función de copos de nieve cuando se carga la página
window.onload = createSnowflakes;
