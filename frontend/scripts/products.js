window.addEventListener('load', async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    const productsList = document.getElementById('productsList');
    products.forEach(product => {
        const listItem = document.createElement('li');

        // Create an img element and set its src to the product's image
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-image';

        // Append the img element to the listItem
        listItem.appendChild(img);

        // Create a div for the product name
        const nameDiv = document.createElement('div');
        nameDiv.className = 'product-name';
        nameDiv.textContent = `Name: ${product.name}`;

        // Create a div for the product price
        const priceDiv = document.createElement('div');
        priceDiv.className = 'product-price';
        priceDiv.textContent = `Price: ${product.price}`;

        // Append the name and price divs to the listItem
        listItem.appendChild(nameDiv);
        listItem.appendChild(priceDiv);

        productsList.appendChild(listItem);
    });
});