window.addEventListener('load', async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    const productsList = document.getElementById('productsList');
    products.forEach(product => {
        const listItem = createProductElement(product);
        productsList.appendChild(listItem);
    });

    const addProductButton = document.getElementById('addProductButton');
    addProductButton.addEventListener('click', () => {
        window.location.href = 'add-product.html';
    });
});

function createProductElement(product) {
    const listItem = document.createElement('li');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.className = 'product-image';
    listItem.appendChild(img);

    const nameDiv = document.createElement('div');
    nameDiv.className = 'product-name';
    nameDiv.textContent = `Name: ${product.name}`;
    listItem.appendChild(nameDiv);

    const priceDiv = document.createElement('div');
    priceDiv.className = 'product-price';
    priceDiv.textContent = `Price: ${product.price}`;
    listItem.appendChild(priceDiv);

    return listItem;
}
