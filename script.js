document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos
    const menuToggle = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-list');

    // Función para alternar el menú
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Opcional: Cerrar menú al hacer click en un enlace
    const enlaces = document.querySelectorAll('.nav-links a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });
});
