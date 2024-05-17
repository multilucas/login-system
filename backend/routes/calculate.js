const express = require('express');
const router = express.Router();

router.get('/calculate', (req, res) => {
    const { num1, num2 } = req.query;
    if (num1 && num2) {
        const result = parseFloat(num1) + parseFloat(num2);
        res.json({ result });
    } else {
        res.status(400).json({ message: 'Invalid parameters' });
    }
});

module.exports = router;
