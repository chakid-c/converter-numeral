const express = require('express');
const router = express.Router();

const { path: convertPath, router: convertRouter } = require('./convertRouter');

router.use(convertPath, convertRouter);

module.exports = router;
