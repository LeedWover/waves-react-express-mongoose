const express = require('express');
const router = express.Router();

const { register, login, logout, auth } = require('../controllers/user');
const { authMiddleware } = require('../middlewares/auth');

router.get('/auth',authMiddleware, auth)
router.post('/register', register);
router.post('/login', login);
router.get('/logout',authMiddleware, logout);

module.exports = router;