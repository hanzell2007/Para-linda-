const messages = [
    "Espero que tengas un día maravilloso lleno de alegría y amor.",
    "Eres la razón de mi felicidad y cada mañana es mejor porque te tengo en mi vida.",
    "Tu sonrisa ilumina mi día, y tu amor llena mi corazón.",
    "No puedo esperar para verte y abrazarte. ¡Te amo!",
    "Cada día a tu lado es un regalo. Gracias por estar en mi vida.",
    "Que tengas un día tan hermoso como tú. Te amo mucho."
];

let clickCount = 0;

document.getElementById('showMessage').addEventListener('click', function() {
    const message = document.getElementById('message');
    const flower = document.getElementById('flower');
    const dots = document.getElementById('dots');

    if (clickCount < messages.length) {
        message.textContent = messages[clickCount];
        message.style.display = 'block';
        flower.style.display = 'none';
        updateDots();
        clickCount++;
    } else {
        message.style.display = 'none';
        flower.style.display = 'block';
        dots.innerHTML = '';
        clickCount = 0;
    }
});

// Create stars
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 50 + 50}s`;
    document.body.appendChild(star);
}

// Create planets
const planetImages = [
    'IMG/planet1.png',
    'IMG/planet2.png',
    'IMG/planet3.png',
    'IMG/planet4.png',
    'IMG/planet5.png'
];

for (let i = 0; i < planetImages.length; i++) {
    const planet = document.createElement('div');
    planet.className = 'planet';
    planet.style.top = `${Math.random() * 100}vh`;
    planet.style.left = `${Math.random() * 100}vw`;

    // Generar un tamaño aleatorio entre 30px y 100px
    const size = `${Math.random() * 70 + 30}px`;
    planet.style.width = size;
    planet.style.height = size;

    planet.style.backgroundImage = `url(${planetImages[i]})`;
    planet.style.animationDuration = `${Math.random() * 50 + 50}s`;
    document.body.appendChild(planet);
}


// Update dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < clickCount) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
