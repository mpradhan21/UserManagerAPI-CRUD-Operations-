const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5084;

// Middleware
app.use(bodyParser.json());

// In-memory data store
let users = [];

// CREATE: Add a new user
app.post('/users', (req, res) => {
    const { name, age } = req.body;
    const id = users.length + 1;
    const newUser = { id, name, age };
    users.push(newUser);
    res.status(201).json(newUser);
});

// READ: Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// READ: Get user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// UPDATE: Update user by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        const { name, age } = req.body;
        user.name = name || user.name;
        user.age = age || user.age;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE: Delete user by ID
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({ message: 'User deleted' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
