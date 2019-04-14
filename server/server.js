const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const db = require('./config/db');
const users = require('./routes/users');

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on: ${port}`));