document.addEventListener('DOMContentLoaded', () => {
    // 1. FUNCIONALIDAD DEL MENÚ HAMBURGUESA (Móvil)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Ocultar el menú al hacer clic en un enlace (solo en móvil)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }


    // 2. FUNCIONALIDAD DE CAMBIO DE VISTA (Catálogo General vs. Detalle de Categoría)
    const mainSection = document.getElementById('main-catalog');
    const detailSection = document.getElementById('category-detail');
    const breadcrumbs = document.getElementById('breadcrumbs');
    const detailTitle = document.getElementById('detail-title');
    const productGrid = document.getElementById('product-grid');
    const categoryCards = document.querySelectorAll('.product-card');
    const backLink = document.getElementById('back-to-catalog');

    // Muestra la vista de catálogo principal por defecto
    const showMainCatalog = () => {
        mainSection.style.display = 'block';
        detailSection.style.display = 'none';
        breadcrumbs.style.display = 'none';
        window.scrollTo(0, 0);
    };

    // Muestra la vista de detalle de categoría
    const showCategoryDetail = (categoryName, products) => {
        mainSection.style.display = 'none';
        detailSection.style.display = 'block';
        breadcrumbs.style.display = 'block';

        // Actualiza el título y la ruta de navegación
        detailTitle.textContent = categoryName;
        // Opcional: actualizar el breadcrumb de forma dinámica
        const currentBreadcrumb = document.getElementById('current-category');
        if (currentBreadcrumb) {
            currentBreadcrumb.textContent = categoryName;
        }

        // Genera el contenido de la cuadrícula de productos
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            
            // Nota: Las imágenes son placeholders genéricos
            productItem.innerHTML = `
                <img src="https://picsum.photos/300/200?random=${Math.random()}" alt="Imagen de ${product}">
                <div class="product-item-content">
                    <h4>${product}</h4>
                    <p class="price-tag">Consultar precio</p>
                    <p class="item-description">Un producto de alta calidad y sabor ibérico.</p>
                </div>
            `;
            productGrid.appendChild(productItem);
        });

        window.scrollTo(0, 0); // Vuelve al inicio de la página
    };

    // Diccionario de categorías y productos (Simulación de datos)
    const mockData = {
        'Carnes Ibéricas': ['Tomo de cerdo ibérico', 'Chuletas de ternera', 'Carne de cordero', 'Presa Ibérica', 'Solomillo de Vaca'],
        'Pescados y Mariscos': ['Gambón grande', 'Merluza fresca', 'Salmón', 'Bacalao congelado', 'Langostinos'],
        'Aves y Huevos': ['Pollo entero', 'Muslos de pollo', 'Huevos M (docena)', 'Huevos L (docena)', 'Pavo'],
        'Verduras y Hortalizas': ['Patatas', 'Zanahoria', 'Tomate', 'Cebolla', 'Pimiento Rojo'],
        'Frutas': ['Plátano de Canarias', 'Naranja', 'Uva blanca', 'Manzana', 'Pera'],
        'Bebidas y Licores': ['Agua mineral', 'Coca-Cola', 'Zumo de Naranja', 'Ron Zacapa', 'Whisky Jack Daniel\'s', 'Jägermeister']
    };

    // Asigna el evento de clic a las tarjetas de categoría
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Usa el atributo data-category si existe, sino usa el texto del h3
            const categoryName = card.getAttribute('data-category') || card.querySelector('h3').textContent;
            
            const products = mockData[categoryName] || ['Producto 1', 'Producto 2', 'Producto 3']; // Fallback
            
            showCategoryDetail(categoryName, products);
        });
    });

    // Asigna el evento de clic al enlace "Volver"
    if (backLink) {
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            showMainCatalog();
        });
    }

    // Inicialización: Asegura que se vea el catálogo principal al cargar
    showMainCatalog();
});
