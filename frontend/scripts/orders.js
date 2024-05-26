window.addEventListener('load', async () => {
    const response = await fetch('http://localhost:3000/api/orders');
    const orders = await response.json();

    const ordersList = document.getElementById('ordersList');
    orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = `Número do pedido: ${order.id}, Quantidade: ${order.quantity}`;
        ordersList.appendChild(listItem);
    });
});
