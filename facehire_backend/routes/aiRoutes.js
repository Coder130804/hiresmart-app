// routes/aiRoutes.js

const express = require('express');
const router = express.Router();
const { analyzeInterview } = require('../controllers/aiAnalysisController');

router.get('/analyze', analyzeInterview);

module.exports = router;
