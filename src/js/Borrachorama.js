document.addEventListener('DOMContentLoaded', () => {
    fetch('js/products.json')
        .then(res => res.json())
        .then(data => mostrarProductos(data))
        .catch(err => console.error('Error al cargar productos:', err));
});

function mostrarProductos(productos){
    const container = document.getElementById('productos');
    container.innerHTML = '';
    productos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p><strong>Categoría:</strong> ${p.category}</p>
            <p>${p.description}</p>
            <p><strong>Precio:</strong> $${p.price.toFixed(2)}</p>
            <button class="cta" onclick="agregarCarrito('${p.name}', ${p.price})">Agregar al carrito</button>
        `;
        container.appendChild(div);
    });
}

let carrito = [];

function agregarCarrito(nombre, precio){
    carrito.push({nombre, precio});
    actualizarCarrito();
}

function actualizarCarrito(){
    const container = document.getElementById('carrito-items');
    if(carrito.length === 0){
        container.textContent = 'Aún no hay productos en el carrito.';
        return;
    }

    container.innerHTML = '';
    let total = 0;
    carrito.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        container.appendChild(div);
        total += item.precio;
    });

    const totalDiv = document.createElement('p');
    totalDiv.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
    container.appendChild(totalDiv);
}
