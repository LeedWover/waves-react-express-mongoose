const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const db = require('./config/db');
const users = require('./routes/users');
const product = require('./routes/brand');
const woods = require('./routes/woods');
const products = require('./routes/products');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', users);
app.use('/api/product', product);
app.use('/api/product', woods);
app.use('/api/product', products);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on: ${port}`));