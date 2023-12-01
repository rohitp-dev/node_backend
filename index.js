require('dotenv').config()
const express = require("express");
const cors = require("cors");
const auth = require("./auth/auth.middleware");
const dbConnect = require("./database/db.config");
const productRouter = require('./modules/products/product.route');
const logger = require('./middlewares/logger.middleware');

// connect mongodb
dbConnect()

const PORT = process.env.PORT || 3000;

// init app
const app = express();
app.use(cors());
app.use(express.json());

// log request
app.use(logger)

// jwt verify (custom)
app.use(auth);

// routes
app.get("/status", (req, res) => { res.json({ status: 'ok' }) });
app.use('/products', productRouter)

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}.`) });