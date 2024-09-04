const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Dummy user data
const users = {
    user1: 'password1',
    user2: 'password2'
};

// Home Route
app.get('/', (req, res) => {
    if (req.session.user) {
        res.send(`<h1>Hello, ${req.session.user}</h1><a href="/logout">Logout</a>`);
    } else {
        res.send('<h1>Home</h1><a href="/login">Login</a>');
    }
});

// Login Route
app.get('/login', (req, res) => {
    res.send('<h1>Login</h1><form action="/login" method="POST"><input type="text" name="username" placeholder="Username"/><input type="password" name="password" placeholder="Password"/><button type="submit">Login</button></form>');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        req.session.user = username;
        res.redirect('/');
    } else {
        res.send('Invalid username or password');
    }
});

// Logout Route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
