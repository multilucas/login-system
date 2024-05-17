const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../data/db.json');
const fs = require('fs');
const path = require('path');

const saveDb = (db) => {
    fs.writeFileSync(path.join(__dirname, '../data/db.json'), JSON.stringify(db, null, 2));
};

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = db.users.find(u => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: db.users.length + 1, username, password: hashedPassword };

    console.log('New user:', newUser);  // Log the new user data

    db.users.push(newUser);
    console.log('Updated users:', db.users);  // Log the updated users list

    saveDb(db);
    console.log('Database saved');  // Log after saving the database

    res.status(201).json({ message: 'User registered successfully', user: newUser });
});

module.exports = router;
