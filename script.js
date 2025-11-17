document.addEventListener('DOMContentLoaded', () => {
    // Definición de la variable CSS para el color principal (Asumiendo que está en style.css)
    const colorNegro = getComputedStyle(document.documentElement).getPropertyValue('--color-negro').trim() || '#121212';

    // 1. Manejo del click en los CTAs (Área Clientes, Ofertas)
    const ctaButtons = document.querySelectorAll('.area-clientes a, .ofertas a, .area-clientes-btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Comprueba si el enlace es un placeholder genérico (#)
            if (button.getAttribute('href') === '#') {
                e.preventDefault();
                
                console.log(`Acceso a ${button.textContent.trim()} solicitado.`);
                
                // Simulación de respuesta para CTAs genéricos (ROJO)
                setTimeout(() => {
                    alert('Redirigiendo al portal de clientes o descargando folleto de ofertas...');
                }, 300);
            }
            // Los enlaces a URLs reales (ej. /area-clientes.html) navegarán normalmente.
        });
    });

    // 2. Funcionalidad UX: Smooth Scroll para Anclajes (Mejora la navegación a proveedores)
    // Selecciona todos los enlaces que contienen un hash (#) en su href
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // El scroll suave solo debe aplicarse a anclajes internos de la página (no a la barra de menú con '#').
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Funcionalidad visual: Destacar el encabezado al hacer scroll (Con consistencia de color)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Fondo semitransparente para efecto 'sticky' premium
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            // Vuelve al color base definido en el CSS (asegurando consistencia)
            header.style.backgroundColor = colorNegro; 
            header.style.boxShadow = 'none';
        }
    });
});
