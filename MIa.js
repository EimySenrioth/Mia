// Función para manejar la visibilidad de la barra de reservación
function initReservationBar() {
    const reservationBar = document.querySelector('.barra-reserva');
    const menuSection = document.getElementById('menu');
    
    // Crear el observador de intersección
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reservationBar.classList.add('visible');
            } else {
                reservationBar.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // La barra aparecerá cuando el 20% de la sección del menú sea visible
    });

    // Observar la sección del menú
    observer.observe(menuSection);

    // Manejar el envío del formulario
    const form = document.getElementById('formulario-reserva');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
        
        // Aquí puedes agregar la lógica para procesar la reservación
        console.log('Reservación recibida:', { nombre, fecha });
        alert(`¡Gracias ${nombre}! Tu reservación para el ${fecha} ha sido recibida.`);
        
        // Limpiar el formulario
        form.reset();
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initReservationBar);

// Funcion mostrar las fotos unicamente
document.addEventListener('DOMContentLoaded', () => {
    const fotos = document.querySelectorAll('.foto');
    let index = 0;

    // Muestra la primera foto
    fotos[index].classList.add('active');

    const mostrarFoto = () => {
        fotos[index].classList.remove('active'); // Oculta la foto actual

        index++; // Incrementa el índice
        if (index >= fotos.length) {
            index = 0; // Reinicia el índice si todas las fotos han sido mostradas
        }

        fotos[index].classList.add('active'); // Muestra la nueva foto
    };

    setInterval(mostrarFoto, 3000); // Cambia la foto cada 3 segundos
});


