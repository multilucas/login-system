document.getElementById('shippingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cep = document.getElementById('cep').value;

    const response = await fetch(`http://localhost:3000/api/calculate/calculate-shipping?cep=${cep}`);
    const data = await response.json();

    const shippingResult = document.getElementById('shippingResult');
    if (response.ok) {
        shippingResult.textContent = `Tempo de entrega: ${data.shippingTime} dias, Custo de entrega: R$${data.shippingCost}`;
    } else {
        shippingResult.textContent = 'Erro ao calcular o frete';
    }
});
