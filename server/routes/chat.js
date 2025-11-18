const express = require('express');
const router = express.Router();
const { getChatResponse } = require('../controllers/chatController');
const { protect } = require('../middleware/auth');

router.post('/message', protect, getChatResponse);

module.exports = router;