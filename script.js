document.addEventListener('DOMContentLoaded', () => {
    // Intenta obtener el valor de la variable CSS para el color de fondo base
    const rootStyle = getComputedStyle(document.documentElement);
    const colorNegro = rootStyle.getPropertyValue('--color-negro').trim() || '#121212';

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
                    alert('Accediendo a la plataforma profesional...');
                }, 300);
            }
        });
    });

    // 2. Funcionalidad UX: Smooth Scroll para Anclajes (Mejora la navegación a proveedores)
    // Se aplica a todos los enlaces que contienen un hash (#) en su href, excepto para el menú desplegable.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Solo aplica scroll si el ID no es solo '#' (evita el click en el menú principal)
            if (targetId.length > 1) {
                e.preventDefault();
                
                // Hace scroll suave al elemento de destino
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Funcionalidad visual: Destacar el encabezado al hacer scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Fondo semitransparente para efecto 'sticky' premium y evitar que el contenido "pase por encima" de forma brusca
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            // Vuelve al color base sin transparencia ni sombra
            header.style.backgroundColor = colorNegro; 
            header.style.boxShadow = 'none';
        }
    });
});
