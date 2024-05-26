const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const dbPath = path.join(__dirname, '..', 'data', 'db.json');

// Inicializar o banco de dados se não existir
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ products: [] }, null, 2), 'utf-8');
}

let db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

router.get('/', (req, res) => {
    res.json(db.products);
});

router.post('/', (req, res) => {
    const newProduct = req.body;
    db.products.push(newProduct);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
    res.status(201).json(newProduct);
});

module.exports = router;
