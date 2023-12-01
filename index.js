require('dotenv').config()
const express = require("express");
const cors = require("cors");
const auth = require("./auth/auth.middleware");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

// log request
app.use((req, res, next) => {
    console.debug(`${req.method} ${req.url}`)
    next()
})

// jwt verify (custom)
app.use(auth);

app.get("/status", (req, res) => {
    res.json({ status: 'ok' });
});

app.get("/auth", (req, res) => {
    res.json({ message: 'JWT Verified!!!', data: req?.user?.sub });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});