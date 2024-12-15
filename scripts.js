// JavaScript para o Carrossel 3D
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.carousel__card');
let currentIndex = 0;

function rotateCarousel() {
    currentIndex = (currentIndex + 1) % cards.length;
    carousel.style.transform = `rotateY(-${currentIndex * 60}deg)`; // Roda o carrossel
}

// Iniciar rotação automática a cada 3 segundos
setInterval(rotateCarousel, 3000);

// Função para controlar o movimento do carrossel
function rotateCarouselBy(index) {
    currentIndex = index;
    carousel.style.transform = `rotateY(-${currentIndex * 60}deg)`; // Ajusta a rotação do carrossel
}
