document.addEventListener('DOMContentLoaded', () => {
    // 1. Manejo del click en los CTAs (Área Clientes, Ofertas)
    const ctaButtons = document.querySelectorAll('.area-clientes a, .ofertas a, .area-clientes-btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Ejemplo de funcionalidad: Si el enlace apunta a '#', evita la acción por defecto
            // y ejecuta una simulación de acceso.
            if (button.getAttribute('href') === '#') {
                e.preventDefault(); 
                
                // Simulación de carga/redirección
                console.log(`Acceso a ${button.textContent.trim()} solicitado.`);
                
                // Podría añadir una animación de carga aquí
                
                setTimeout(() => {
                    alert('Redirigiendo al portal de clientes o descargando folleto de ofertas...');
                }, 300);
            }
            // Si el enlace tiene un destino real (ej. 'login.html'), simplemente navegará.
        });
    });

    // 2. Ejemplo de funcionalidad visual: Destacar el encabezado al hacer scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)'; // Oscurece con opacidad
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
        } else {
            header.style.backgroundColor = 'var(--color-negro)';
            header.style.boxShadow = 'none';
        }
    });
});
