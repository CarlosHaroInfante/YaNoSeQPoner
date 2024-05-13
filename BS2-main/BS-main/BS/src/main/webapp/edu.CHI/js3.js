document.addEventListener('DOMContentLoaded', () => {
    let contadorProductos = 0;

    // Función para agregar un producto al carrito
    function agregarAlCarrito() {
        contadorProductos++; // Incrementa el contador
        actualizarContadorCarrito();
    }

    // Función para eliminar un producto del carrito
    function eliminarDelCarrito() {
        if (contadorProductos > 0) {
            contadorProductos--; // Decrementa el contador
            actualizarContadorCarrito();
        }
    }

    // Función para actualizar el contador de productos en la barra de navegación
    function actualizarContadorCarrito() {
        const contadorElemento = document.querySelector('.carrito .badge');
        contadorElemento.textContent = contadorProductos;
    }

    // Agrega un evento al botón para agregar producto al carrito
    document.getElementById('agregarProductoBtn').addEventListener('click', agregarAlCarrito);

    // Agrega un evento al botón para eliminar producto del carrito
    document.getElementById('eliminarProductoBtn').addEventListener('click', eliminarDelCarrito);
});