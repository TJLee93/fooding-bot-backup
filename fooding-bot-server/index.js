require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const port = process.env.DATABASE_PORT || null;
const router = require('./router/route');
const controller = require('./controller');

app.use(express.json());

app.use(
    cors({
        origin: "htts://www.fdbot.ml",
        credentials: true,
        methods: ["GET", "POST", "OPTIONS"],
    })
);

app.use(
    session({
        secret: null,
        resave: false,
        saveUninitialized: true,
        cookie: {
            domain: 'fdbot.ml',
            path: '/',
            secure: true,
            httpOnly: true,
            sameSite: 'none'
        }
    })
);

app.use((err, req, res) => {
    res.status(500).send({
        message: err.message,
    });
});

app.use('/', router);
app.get("/", (req, res) => {
    res.send("Welcome to fdbot");
});

app.get('/login', controller.login);

app.listen(port, () => {
    console.log(`server on ${port}`);
});

module.exports = app;
