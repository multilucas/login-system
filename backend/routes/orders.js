const express = require('express');
const router = express.Router();
const db = require('../data/db.json');

router.get('/', (req, res) => {
    res.json(db.orders);
});

module.exports = router;
