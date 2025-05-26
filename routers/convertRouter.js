const express = require('express');
const router = express.Router();
const { convertAlienNumeral } = require('../controllers/convert');

// Prefix: /api/convert
router.post('/', convertAlienNumeral);

module.exports = { path: '/api/convert', router };
