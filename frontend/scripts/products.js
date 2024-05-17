window.addEventListener('load', async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    const productsList = document.getElementById('productsList');
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`;
        productsList.appendChild(listItem);
    });
});
