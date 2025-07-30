// routes/aiRoutes.js

const express = require('express');
const router = express.Router();
const { analyzeInterview } = require('../controllers/aiAnalysisController');
const authMiddleware = require('../middleware/auth');

router.get('/feedback', authMiddleware, analyzeInterview);

module.exports = router;