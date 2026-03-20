let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarCarrito();

function agregarCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    guardarCarrito();
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("listaCarrito");
    const totalTexto = document.getElementById("total");
    const contador = document.getElementById("contador");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;

        lista.innerHTML += `
            <div class="item-carrito">
                ${item.nombre} - $${item.precio}
                <button onclick="eliminarItem(${index})">❌</button>
            </div>
        `;
    });

    totalTexto.innerText = "Total: $" + total;
    contador.innerText = carrito.length;
}

function eliminarItem(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarCarrito();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Abrir carrito
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnCarrito").addEventListener("click", () => {
        document.getElementById("carrito").classList.toggle("activo");
    });
});