// 1. Array de datos de ejemplo (simulando una respuesta de API)
const products = [
    {
        id: 1,
        name: "Jamón Ibérico de Cebo",
        description: "Curación de 36 meses. Sabor intenso y textura jugosa.",
        price: "159.99 €",
        image: "https://via.placeholder.com/350x250?text=Jamón+Ibérico"
    },
    {
        id: 2,
        name: "Lomo de Cerdo Ibérico",
        description: "Pieza entera, ideal para asar o filetear. Calidad Premium.",
        price: "45.50 €",
        image: "https://via.placeholder.com/350x250?text=Lomo+Ibérico"
    },
    {
        id: 3,
        name: "Queso Curado de Oveja",
        description: "Elaborado con leche cruda de oveja. 12 meses de curación.",
        price: "29.95 €",
        image: "https://via.placeholder.com/350x250?text=Queso+Curado"
    },
    {
        id: 4,
        name: "Aceite de Oliva Virgen Extra (5L)",
        description: "Cosecha temprana, primera presión en frío. Sabor frutado.",
        price: "55.00 €",
        image: "https://via.placeholder.com/350x250?text=AOVE+5L"
    }
    // Puedes añadir más productos aquí
];

// 2. Función para generar el HTML de una tarjeta de producto
function createProductCard(product) {
    return `
        <a href="#" class="product-item" data-product-id="${product.id}">
            <div class="product-item-img-wrapper">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-item-content">
                <div>
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                </div>
                <div>
                    <div class="product-item-price">${product.price}</div>
                    <button class="btn-primary add-to-cart-btn" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </a>
    `;
}

// 3. Función principal para renderizar todos los productos
function renderProducts() {
    const gridContainer = document.querySelector('.product-item-grid');
    
    // Si no encuentra el contenedor, sale de la función
    if (!gridContainer) {
        console.error("Contenedor .product-item-grid no encontrado.");
        return;
    }

    let htmlContent = '';
    
    // Genera el HTML para cada producto
    products.forEach(product => {
        htmlContent += createProductCard(product);
    });

    // Inserta todo el HTML generado de una sola vez para mejor rendimiento
    gridContainer.innerHTML = htmlContent;
    
    // Llama a la función para añadir los listeners después de renderizar
    addCartButtonListeners();
}

// 4. Función para manejar la interactividad (simular la adición al carrito)
function addCartButtonListeners() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Previene que el enlace de la tarjeta principal se active
            event.preventDefault(); 
            event.stopPropagation(); // Detiene la propagación del evento al contenedor

            const productId = event.target.dataset.id;
            const productName = products.find(p => p.id == productId).name;

            // Feedback simple al usuario
            alert(`✅ Producto "${productName}" (ID: ${productId}) añadido al carrito!`);
            
            // Aquí iría la lógica real para añadir el producto a un estado o API (e.g., fetch('/api/cart/add', ...))
        });
    });
}

// 5. Iniciar la renderización cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', renderProducts);
