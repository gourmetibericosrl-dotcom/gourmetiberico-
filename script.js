document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa para Móvil
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-list');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Cambiar icono
        const icon = menuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
});
