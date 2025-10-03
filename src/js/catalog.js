document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("catalog-container");

  // Cargar productos desde JSON
  fetch("../data/products.json") 
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
  ${product.image ? `<img src="${product.image}" alt="${product.name}" class="product-image">` : ""}
  <div class="product-name">${product.name}</div>
  <div class="product-price">$${product.price.toFixed(2)}</div>
  <button>Agregar al carrito</button>
`;

        container.appendChild(card);
      });
    })
    .catch(error => console.error("Error al cargar productos:", error));
});