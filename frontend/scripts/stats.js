document.getElementById('statsForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const productId = document.getElementById('productId').value;

    const response = await fetch(`http://localhost:3000/api/stats/calculate?productId=${productId}`);
    const data = await response.json();

    const statsResult = document.getElementById('statsResult');
    if (response.ok) {
        statsResult.textContent = `Product: ${data.product.name}, Total Orders: ${data.totalOrders}`;
    } else {
        statsResult.textContent = data.message;
    }
});
