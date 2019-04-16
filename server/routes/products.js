const express = require('express');
const router = express.Router();

const { article } = require('../controllers/products');
const { authMiddleware } = require('../middlewares/auth');
const admin = require('../middlewares/isAdmin');

router.post('/article', authMiddleware, admin, article)

module.exports = router;