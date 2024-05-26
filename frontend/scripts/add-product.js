document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    productForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(productForm);
        const product = {
            name: formData.get('name'),
            price: formData.get('price'),
            image: await toBase64(formData.get('image'))
        };

        const response = await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            window.location.href = 'products.html'; // Redirect back to the products list
        }
    });
});

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
