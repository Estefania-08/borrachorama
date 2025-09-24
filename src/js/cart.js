document.addEventListener("DOMContentLoaded", () => {
  const cartTableBody = document.querySelector("#cart-table tbody");

  // Todos los productos del JSON (mock)
  const cartProducts = [
    { name: "Cerveza Corona", price: 25.50, quantity: 1 },
    { name: "Cerveza Modelo Especial", price: 28.00, quantity: 4 },
    { name: "Cerveza Tecate", price: 23.00, quantity: 1 },
    { name: "Whisky Buchanan's", price: 420.00, quantity: 2 },
    { name: "Ron Bacardí", price: 180.00, quantity: 3 },
    { name: "Tequila José Cuervo", price: 350.00, quantity: 1 },
    { name: "Coca-Cola", price: 20.00, quantity: 1 },
    { name: "Agua Bonafont", price: 15.00, quantity: 1 }
  ];

  // Generar filas de la tabla
  cartProducts.forEach(product => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.quantity}</td>
      <td>
        <button class="plus">+</button>
        <button class="minus">–</button>
        <button class="delete">Eliminar</button>
      </td>
    `;

    cartTableBody.appendChild(row);
  });
});
