const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../data/db.json');
const fs = require('fs');
const path = require('path');

const saveDb = (db) => {
    fs.writeFileSync(path.join(__dirname, '../data/db.json'), JSON.stringify(db, null, 2));
};

const SECRET_KEY = 'your_jwt_secret_key';  

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = db.users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login realizado com sucesso!', token });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: db.users.length + 1, username, password: hashedPassword };

    db.users.push(newUser);
    saveDb(db);

    res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
});

module.exports = router;
