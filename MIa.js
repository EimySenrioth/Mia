

// Mostrar la modal cuando se desplaza a la sección del menú
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-reservacion');
    const menuSection = document.getElementById('menu');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                modal.classList.add('show');
            } else {
                modal.classList.remove('show');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(menuSection);
});

// Función para manejar la visibilidad de la barra de reservación
function initReservationBar() {
    const reservationBar = document.querySelector('.barra-reserva');
    const menuSection = document.getElementById('menu');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reservationBar.classList.add('visible');
            } else {
                reservationBar.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    observer.observe(menuSection);

    const form = document.getElementById('formulario-reserva');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;

        console.log('Reservación recibida:', { nombre, fecha });
        alert(`¡Gracias ${nombre}! Tu reservación para el ${fecha} ha sido recibida.`);

        form.reset();
    });
}

// Inicializar las funciones
document.addEventListener('DOMContentLoaded', () => {
    initReservationBar();

// Función para mostrar fotos secuenciales
    const fotos = document.querySelectorAll('.foto');
    let index = 0;

    fotos[index].classList.add('active');

    const mostrarFoto = () => {
        fotos[index].classList.remove('active');

        index++;
        if (index >= fotos.length) {
            index = 0;
        }

        fotos[index].classList.add('active');
    };

    setInterval(mostrarFoto, 3000);
});

// Selecciona los contenedores y las imágenes para ambas secciones
const containerTaco = document.querySelector('#taco-wagyu');
const imgTaco = containerTaco.querySelector('img');

const containerSashimi = document.querySelector('#sashimi-atun');
const imgSashimi = containerSashimi.querySelector('img');

const containertepanyaki = document.querySelector('#tepanyaki');
const imgtepanyaki = containerSashimi.querySelector('img');

// Script para la animación del texto flotante
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos floating-text
    const floatingTexts = document.querySelectorAll('.floating-text');
    
    if (floatingTexts.length === 0) {
        console.error('Elementos .floating-text no encontrados');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    // Observa cada elemento floating-text
    floatingTexts.forEach(text => {
        observer.observe(text);
    });
});


// Script para el menú desplegable
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lottie !== 'undefined') {
        const animationContainer = document.getElementById('menu-animation');
        const menuIconContainer = document.querySelector('.menu-icon');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        const menuAnimation = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'animation/menu.json'
        });

        let isMenuOpen = false;

        menuIconContainer.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (!isMenuOpen) {
                dropdownMenu.classList.add('active');
                menuAnimation.setDirection(1);
                menuAnimation.play();
                isMenuOpen = true;
            } else {
                dropdownMenu.classList.remove('active');
                menuAnimation.setDirection(-1);
                menuAnimation.play();
                isMenuOpen = false;
            }
        });

        document.querySelector('.close-btn').addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
            menuAnimation.setDirection(-1);
            menuAnimation.play();
            isMenuOpen = false;
        });
    } else {
        console.error('Lottie library not loaded');
    }
});

