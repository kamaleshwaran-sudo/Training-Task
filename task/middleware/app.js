const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const PORT = 3001; // Set a different port

app.use(express.json());

let users = [];

// Middleware to check if a user exists (for login)
const checkUserExists = (req, res, next) => {
    const { name } = req.body;
    const user = users.find(user => user.name === name);
    if (user) {
        req.user = user; // Attach user data to req for later use
        next();
    } else {
        res.status(404).send("User does not exist");
    }
};

// Middleware to check if a user does not exist (for register)
const checkUserDoesNotExist = (req, res, next) => {
    const { name } = req.body;
    const user = users.find(user => user.name === name);
    if (user) {
        res.status(400).send("User already exists");
    } else {
        next();
    }
};

// Register route with checkUserDoesNotExist middleware
app.post('/register', checkUserDoesNotExist, async (req, res) => {
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, password: hashedPassword });
    res.send("Registration successful");
});

// Login route with checkUserExists middleware
app.post('/login', checkUserExists, async (req, res) => {
    const { password } = req.body;
    const isPasswordCorrect = await bcrypt.compare(password, req.user.password);

    if (!isPasswordCorrect) {
        res.send("Incorrect password");
    } else {
        res.send("Login successful");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
