// Simulação de produtos no carrinho (inicialmente vazio)
const cartItems = []; // Carrinho começa vazio

// Função para atualizar o carrinho
function updateCart() {
  const cartTableBody = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");
  let total = 0;

  // Limpar o conteúdo atual da tabela
  cartTableBody.innerHTML = "";

  if (cartItems.length === 0) {
    // Exibir mensagem de carrinho vazio
    cartTableBody.innerHTML = `<tr><td colspan="5">Seu carrinho está vazio.</td></tr>`;
  } else {
    // Adicionar itens do carrinho
    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>R$ ${item.price.toFixed(2)}</td>
        <td>R$ ${itemTotal.toFixed(2)}</td>
        <td><button onclick="removeItem(${index})">Remover</button></td>
      `;

      cartTableBody.appendChild(row);
    });
  }

  // Atualizar o total no final
  cartTotalElement.textContent = total.toFixed(2);
}

// Função para remover um item do carrinho
function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
}

// Atualizar o carrinho quando a página carregar
window.onload = updateCart;
