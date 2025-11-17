document.addEventListener('DOMContentLoaded', () => {
    // Intenta obtener el valor de la variable CSS para el color de fondo base
    const rootStyle = getComputedStyle(document.documentElement);
    const colorNegro = rootStyle.getPropertyValue('--color-negro').trim() || '#121212';

    // 1. Manejo del click en los CTAs (Área Clientes, Ofertas)
    const ctaButtons = document.querySelectorAll('.area-clientes a, .ofertas a, .area-clientes-btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Simulación de acción para enlaces '#'
            if (button.getAttribute('href') === '#') {
                e.preventDefault();
                console.log(`Acceso a ${button.textContent.trim()} solicitado.`);
                
                setTimeout(() => {
                    alert('Accediendo a la plataforma profesional...');
                }, 300);
            }
            // Los enlaces a URLs reales (ej. /area-clientes.html) navegarán normalmente.
        });
    });

    // 2. Funcionalidad visual: Destacar el encabezado al hacer scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Fondo semitransparente para efecto 'sticky' premium 
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            // Vuelve al color base sin transparencia ni sombra
            header.style.backgroundColor = colorNegro; 
            header.style.boxShadow = 'none';
        }
    });
});
