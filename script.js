// Base de datos de productos y sus imágenes/detalles
const productData = {
    "CARNES": [
        // CORREGIDO: Reemplazar guiones bajos por ESPACIOS
        { name: "Lomo de cerdo ibérico", image: "FOTOS TRABAJO EMPRESA COMIDA/CARNE/lomo de cerdo iberico.jpg", detail: "Lomo ibérico de alta calidad, ideal para hostelería." },
        { name: "Chuletón de ternera", image: "FOTOS TRABAJO EMPRESA COMIDA/CARNE/chuleton de ternera.jpg", detail: "Cortes premium de ternera. Suministro Grupo Medina." },
        { name: "Carne de cordero", image: "FOTOS TRABAJO EMPRESA COMIDA/CARNE/carne de cordero.png", detail: "Cordero seleccionado para platos gourmet." },
        { name: "Pollo entero", image: "FOTOS TRABAJO EMPRESA COMIDA/CARNE/muslos de pollo.jpg", detail: "Pollo fresco (usando muslos de pollo como placeholder visual)." }, 
        { name: "Muslos de pollo", image: "FOTOS TRABAJO EMPRESA COMIDA/CARNE/muslos de pollo.jpg", detail: "Muslos de pollo frescos." }
    ],
    "PESCADO": [
        // CORREGIDO: Reemplazar guiones bajos por ESPACIOS (ajustar si tus archivos NO usan guiones bajos)
        { name: "Gambón grande", image: "FOTOS TRABAJO EMPRESA COMIDA/PESCADO/gambon grande.jpg", detail: "Gambón congelado de gran tamaño." },
        { name: "Bacalao congelado", image: "FOTOS TRABAJO EMPRESA COMIDA/PESCADO/bacalao congelado.jpg", detail: "Lomos de bacalao de primera." },
        { name: "SALMÓN FRESCO", image: "FOTOS TRABAJO EMPRESA COMIDA/PESCADO/salmon fresco.jpg", detail: "Salmón fresco, listo para corte." },
        { name: "Merluza fresca", image: "FOTOS TRABAJO EMPRESA COMIDA/PESCADO/merluza fresca.jpg", detail: "Merluza del día, garantizando frescura." }
    ],
    "VERDURAS Y FRUTAS": [
        // CORREGIDO: Reemplazar guiones bajos por ESPACIOS (ajustar si tus archivos NO usan guiones bajos)
        { name: "Patatas", image: "FOTOS TRABAJO EMPRESA COMIDA/FRUTAS/patatas.jpg", detail: "Patatas de la Horta Nord. Proveedor García." },
        { name: "Zanahoria", image: "FOTOS TRABAJO EMPRESA COMIDA/FRUTAS/zanahoria.jpg", detail: "Zanahorias frescas." },
        { name: "Tomate", image: "FOTOS TRABAJO EMPRESA COMIDA/FRUTAS/tomate.jpg", detail: "Tomate de temporada, alta calidad." },
        { name: "Cebolla", image: "FOTOS TRABAJO EMPRESA COMIDA/FRUTAS/tomate.jpg", detail: "Cebolla fresca (usando tomate como placeholder visual)." }, // Ajustado
        { name: "Naranja", image: "FOTOS TRABAJO EMPRESA COMIDA/FRUTAS/naranja.jpg", detail: "Naranja de Canarias/Valencia." },
        { name: "Plátano de Canarias", image: "FOTOS TRABAJO EMPRESA COMIDA/FRUTAS/platano canarias.jpg", detail: "Plátano con Denominación de Origen." },
        { name: "Uva blanca", image: "FOTOS TRABAJO EMPRESA COMIDA/FRUTAS/uva blanca.jpg", detail: "Uva de mesa blanca." }
    ],
    "OTROS FRESCOS": [
        // CORREGIDO: Reemplazar guiones bajos por ESPACIOS (ajustar si tus archivos NO usan guiones bajos)
        { name: "Huevos M (docena)", image: "FOTOS TRABAJO EMPRESA COMIDA/HUEVOS/huevos M docena.jpg", detail: "Huevos M por docenas." },
        { name: "Queso curado", image: "FOTOS TRABAJO EMPRESA COMIDA/HUEVOS/queso curado.jpg", detail: "Queso curado premium." } // Usando queso curado como ejemplo
    ],
    "ZUMOS Y REFRESCOS": [
        // CORREGIDO: Espacios y extensión .webp
        { name: "COCA-COLA / Coca-Cola", image: "FOTOS TRABAJO EMPRESA COMIDA/BEBIDA/coca cola 1L.webp", detail: "Variedad de Coca-Cola (regular y zero)." },
        // CORREGIDO: Espacios y extensión .jpeg (asumiendo que corregiste la extensión del zumo)
        { name: "ZUMO DE NARANJA NFC (1L)", image: "FOTOS TRABAJO EMPRESA COMIDA/BEBIDA/zumo de naranjaj 1L don simon.jpeg", detail: "Zumo NFC de Zuvamesa en formato 1L." }
    ],
    "AGUAS": [
        // CORREGIDO: Espacios y extensión .png
        { name: "AGUA MINERAL (1.5L)", image: "FOTOS TRABAJO EMPRESA COMIDA/BEBIDA/agua mineral garrafa nestle.png", detail: "Agua mineral natural en formatos de hostelería 1.5L." }
    ],
    "BEBIDAS ALCOHÓLICAS": [
        // CORREGIDO: La carpeta se llama BEBIDAS ALC**A**HÓLICAS y se usan ESPACIOS en los nombres de archivo.
        { name: "Ron Zacapa", image: "FOTOS TRABAJO EMPRESA COMIDA/BEBIDAS ALCAHÓLICAS/ron zacapa.jpg", detail: "Ron premium para coctelería." },
        { name: "Whisky Jack Daniel's", image: "FOTOS TRABAJO EMPRESA COMIDA/BEBIDAS ALCAHÓLICAS/whisky jack daniel's.jpg", detail: "Whisky clásico." },
        { name: "Jägermeister", image: "FOTOS TRABAJO EMPRESA COMIDA/BEBIDAS ALCAHÓLICAS/jagermeister.jpg", detail: "Licor de hierbas." },
        { name: "Havan Club ANEJO 3 AN", image: "FOTOS TRABAJO EMPRESA COMIDA/BEBIDAS ALCAHÓLICAS/havana club anejo.jpg", detail: "Ron añejo." }
    ]
};
// ... el resto de tu código JavaScript
const mainCatalogueView = document.getElementById('main-catalogue-view');
const productDetailView = document.getElementById('product-detail-view');
const detailViewTitle = document.getElementById('detail-view-title');
const productListContainer = document.getElementById('product-list-container');
const breadcrumbsPath = document.querySelector('.breadcrumbs-path');
// No usamos homeLink en la lógica, pero lo mantenemos para referencia DOM
const navLinks = document.getElementById('nav-links');
const menuToggle = document.getElementById('menu-toggle');


// Función para cambiar la vista (Catálogo principal vs. Detalle de productos)
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
    // Se corrige la ruta del breadcrumb para incluir
