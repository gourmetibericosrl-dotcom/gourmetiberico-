// Base de datos de productos y sus imágenes/detalles
const productData = {
    "CARNES": [
        { name: "Tomo de cerdo ibérico", image: "https://picsum.photos/400/250?random=1", detail: "Lomo ibérico de alta calidad, ideal para hostelería." },
        { name: "Chuletas de ternera", image: "https://picsum.photos/400/250?random=2", detail: "Cortes premium de ternera. Suministro Grupo Medina." },
        { name: "Carne de cordero", image: "https://picsum.photos/400/250?random=3", detail: "Cordero seleccionado para platos gourmet." },
        { name: "Pollo entero", image: "https://picsum.photos/400/250?random=4", detail: "Pollo fresco." },
        { name: "Muslos de pollo", image: "https://picsum.photos/400/250?random=5", detail: "Muslos de pollo frescos." }
    ],
    "PESCADO": [
        { name: "Gambón grande", image: "https://picsum.photos/400/250?random=6", detail: "Gambón congelado de gran tamaño." },
        { name: "Bacalao congelado", image: "https://picsum.photos/400/250?random=7", detail: "Lomos de bacalao de primera." },
        { name: "SALMÓN", image: "https://picsum.photos/400/250?random=8", detail: "Salmón fresco, listo para corte." },
        { name: "Merluza fresca", image: "https://picsum.photos/400/250?random=9", detail: "Merluza del día, garantizando frescura." }
    ],
    "VERDURAS Y FRUTAS": [
        { name: "Patatas", image: "https://picsum.photos/400/250?random=10", detail: "Patatas de la Horta Nord. Proveedor García." },
        { name: "Zanahoria", image: "https://picsum.photos/400/250?random=11", detail: "Zanahorias frescas." },
        { name: "Tomate", image: "https://picsum.photos/400/250?random=12", detail: "Tomate de temporada, alta calidad." },
        { name: "Cebolla", image: "https://picsum.photos/400/250?random=13", detail: "Cebolla fresca." },
        { name: "Naranja", image: "https://picsum.photos/400/250?random=14", detail: "Naranja de Canarias/Valencia." },
        { name: "Plátano de Canarias", image: "https://picsum.photos/400/250?random=15", detail: "Plátano con Denominación de Origen." },
        { name: "Uva blanca", image: "https://picsum.photos/400/250?random=16", detail: "Uva de mesa blanca." }
    ],
    "OTROS FRESCOS": [
        { name: "Huevos M (docena)", image: "https://picsum.photos/400/250?random=17", detail: "Huevos M por docenas." },
        { name: "Huevos L (docena)", image: "https://picsum.photos/400/250?random=18", detail: "Huevos L por docenas." }
    ],
    "ZUMOS Y REFRESCOS": [
        { name: "COCA-COLA / Coca-Cola", image: "https://picsum.photos/400/250?random=19", detail: "Variedad de Coca-Cola (regular y zero)." },
        { name: "ZUMO DE NARANJA", image: "https://picsum.photos/400/250?random=20", detail: "Zumo NFC de Zuvamesa." }
    ],
    "AGUAS": [
        { name: "AGUA MINERAL", image: "https://picsum.photos/400/250?random=21", detail: "Agua mineral natural en formatos de hostelería." }
    ],
    "BEBIDAS ALCOHÓLICAS": [
        { name: "Ron Zacapa", image: "https://picsum.photos/400/250?random=22", detail: "Ron premium para coctelería." },
        { name: "Whisky Jack Daniel's", image: "https://picsum.photos/400/250?random=23", detail: "Whisky clásico." },
        { name: "Jägermeister", image: "https://picsum.photos/400/250?random=24", detail: "Licor de hierbas." },
        { name: "Havan Club ANEJO 3 AN", image: "https://picsum.photos/400/250?random=25", detail: "Ron añejo." }
    ]
};

const mainCatalogueView = document.getElementById('main-catalogue-view');
const productDetailView = document.getElementById('product-detail-view');
const detailViewTitle = document.getElementById('detail-view-title');
const productListContainer = document.getElementById('product-list-container');
const breadcrumbsPath = document.querySelector('.breadcrumbs-path');
const homeLink = document.getElementById('home-link');
const navLinks = document.getElementById('nav-links');
const menuToggle = document.getElementById('menu-toggle');


// Función para cambiar la vista
function switchView(showDetail) {
    if (showDetail) {
        mainCatalogueView.style.display = 'none';
        productDetailView.style.display = 'block';
    } else {
        mainCatalogueView.style.display = 'block';
        productDetailView.style.display = 'none';
    }
    window.scrollTo(0, 0); // Ir arriba al cambiar de vista
}

// Función para renderizar los productos de una categoría
function renderProductList(categoryName) {
    const products = productData[categoryName];
    
    // 1. Actualizar título y breadcrumbs
    detailViewTitle.textContent = categoryName;
    breadcrumbsPath.innerHTML = `<a href="#hero" id="home-link-dynamic">Inicio</a> > <a href="#" id="category-link">${categoryName}</a>`;
    
    // 2. Limpiar contenedor
    productListContainer.innerHTML = '';

    // 3. Crear HTML para cada producto
    products.forEach((product, index) => {
        // AQUI está la nueva estructura para la imagen
        const productHtml = `
            <div class="product-item" data-product-index="${index}" data-category-name="${categoryName}">
                <div class="product-item-img-wrapper">
                    <img src="${product.image}" alt="Imagen de ${product.name}">
                </div>
                <div class="product-item-content">
                    <h4>${product.name}</h4>
                </div>
            </div>
        `;
        productListContainer.insertAdjacentHTML('beforeend', productHtml);
    });

    // 4. Añadir listeners de click a los productos individuales
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', handleProductClick);
    });

    // 5. Mostrar la vista de detalle
    switchView(true);
}

// Manejar el click en un producto individual (Muestra un alert con los detalles simulados)
function handleProductClick(event) {
    const item = event.currentTarget;
    const categoryName = item.dataset.categoryName;
    const productIndex = parseInt(item.dataset.productIndex);
    const product = productData[categoryName][productIndex];
    
    alert(`Detalles del Producto: ${product.name}\n\nDescripción: ${product.detail}\n\n(En una web real, esto abriría una página de detalle con más información.)`);
}

// Lógica de inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Obtener color base para el sticky header
    const rootStyle = getComputedStyle(document.documentElement);
    const colorNegro = rootStyle.getPropertyValue('--color-negro').trim() || '#1A1A1A';
    const header = document.querySelector('header');
    
    // 0. Lógica de Menú Móvil
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 1. Manejo de los botones CTA (Simulación)
    document.querySelectorAll('.area-clientes a, .ofertas a, .area-clientes-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.getAttribute('href') === '#') {
                e.preventDefault();
                setTimeout(() => { alert('Accediendo a la plataforma profesional...'); }, 300);
            }
        });
    });

    // 2. Funcionalidad Sticky Header (Opacidad al hacer scroll)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)'; // Oscurece el header al bajar
            header.style.boxShadow = '0 1px 10px rgba(0,0,0,0.7)';
        } else {
            header.style.backgroundColor = colorNegro; // Vuelve al color base
            header.style.boxShadow = 'none';
        }
    });

    // 3. Manejo de clicks en las tarjetas de Categoría (Dispara la vista de detalle)
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const category = card.dataset.category;
            if (category) {
                renderProductList(category);
                // Cerrar menú móvil si está abierto al cambiar de vista
                navLinks.classList.remove('active');
            }
        });
    });

    // 4. Manejo del botón de "Volver"
    document.getElementById('back-to-catalogue').addEventListener('click', (e) => {
        e.preventDefault();
        switchView(false); // Volver a la vista principal
        breadcrumbsPath.innerHTML = `<a href="#hero" id="home-link">Inicio</a>`;
    });
    
    // 5. Manejo de enlaces dinámicos (breadcrumbs y menú)
    document.addEventListener('click', (e) => {
        // Manejar clicks en los breadcrumbs dinámicos
        if (e.target.id === 'home-link-dynamic' || e.target.id === 'category-link') {
            e.preventDefault();
            if(e.target.id !== 'category-link') {
                switchView(false); // Vuelve al inicio si se pulsa "Inicio" en los breadcrumbs
                breadcrumbsPath.innerHTML = `<a href="#hero" id="home-link">Inicio</a>`;
            }
        }
        
        // Cierre automático del menú móvil después de hacer clic en un enlace de navegación
        if (navLinks && window.innerWidth <= 768 && e.target.tagName === 'A') {
             navLinks.classList.remove('active');
        }
    });
});
