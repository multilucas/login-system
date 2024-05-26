const axios = require('axios');
const express = require('express');
const router = express.Router();

// Função para calcular frete com dados simulados
const calculateShipping = async (cep) => {
    // Simular tempo de entrega entre 1 e 7 dias
    const shippingTime = Math.floor(Math.random() * 7) + 1;
    // Simular custo de frete entre R$ 10,00 e R$ 100,00
    const shippingCost = (Math.random() * 90 + 10).toFixed(2);

    // Retornar dados simulados
    return {
        shippingTime,
        shippingCost
    };
};

router.get('/calculate-shipping', async (req, res) => {
    const { cep } = req.query;
    if (cep) {
        try {
            const result = await calculateShipping(cep);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao calcular o frete' });
        }
    } else {
        res.status(400).json({ message: 'CEP inválido' });
    }
});

module.exports = router;
