const express = require('express');
const router = express.Router();
const db = require('../data/db.json');

router.get('/calculate', (req, res) => {
    const { productId } = req.query;
    const product = db.products.find(p => p.id === parseInt(productId));
    if (product) {
        const totalOrders = db.orders.filter(order => order.productId === product.id).length;
        res.json({ product, totalOrders });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router;
