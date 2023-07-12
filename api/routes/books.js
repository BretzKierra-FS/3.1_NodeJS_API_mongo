const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: 'Books - GET' });
});

router.post('/', (req, res, next) => {
  res.json({ message: 'Books - Post' });
});

router.get('/:bookId', (req, res, next) => {
  const bookId = req.params.bookId;
  res.json({ message: 'Books - GET by ID', id: bookId });
});

router.patch('/:bookId', (req, res, next) => {
  const bookId = req.params.bookId;
  res.json({ message: 'Books - PATCH by ID', id: bookId });
});

router.delete('/:bookId', (req, res, next) => {
  const bookId = req.params.bookId;
  res.json({ message: 'Books - Delete by ID', id: bookId });
});

module.exports = router;
