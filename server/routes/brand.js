const express = require('express');
const router = express.Router();

const { brand, brands } = require('../controllers/brand');
const { authMiddleware } = require('../middlewares/auth');
const admin = require('../middlewares/isAdmin');

router.get('/brands', brands);
router.post('/brand', authMiddleware, admin, brand);

module.exports = router;