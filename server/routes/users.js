const express = require('express');
const router = express.Router();

const { register, test } = require('../controllers/user');

router.post('/register', register);

module.exports = router;