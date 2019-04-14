const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })


app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on: ${port}`));