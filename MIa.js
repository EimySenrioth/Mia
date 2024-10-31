document.addEventListener('DOMContentLoaded', () => {
    const formularioReserva = document.getElementById('formulario-reserva');
    const mensajeReserva = document.getElementById('mensaje-reserva');

    formularioReserva.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
        mensajeReserva.textContent = `¡Gracias ${nombre}, tu reservación para el ${fecha} está confirmada!`;
        formularioReserva.reset();
    });
});

document.querySelector('nav').addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const section = document.querySelector(e.target.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    }
});
