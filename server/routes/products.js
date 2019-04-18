const express = require('express');
const router = express.Router();

const { getArticleById, getArticles, saveArticle } = require('../controllers/products');
const { authMiddleware } = require('../middlewares/auth');
const admin = require('../middlewares/isAdmin');

router.get('/articles', getArticles)

router.get('/articles_by_id', getArticleById);
router.post('/article', authMiddleware, admin, saveArticle)

module.exports = router;