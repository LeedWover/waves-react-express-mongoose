const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const db = require('./config/db');
const users = require('./routes/users');
const product = require('./routes/product');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', users);
app.use('/api/product', product);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on: ${port}`));