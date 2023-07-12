const express = require('express');
const router = express.Router();
const authorRoutes = require('./authors');
const bookRoutes = require('./books');

router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);

module.exports = router;
