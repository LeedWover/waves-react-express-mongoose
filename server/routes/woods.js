const express = require('express');
const router = express.Router();

const { wood, woods } = require('../controllers/woods');
const { authMiddleware } = require('../middlewares/auth');
const admin = require('../middlewares/isAdmin');

router.post('/wood', authMiddleware, admin, wood);
router.get('/woods', woods);

module.exports = router;