const express = require('express');
const router = express.Router();
const {
  deleteBook,
  updateBook,
  createBook,
  getBookById,
  getBook,
} = require('./controllers/booksController');

router.get('/', getBook);

router.post('/', createBook);

router.get('/:bookId', getBookById);

router.patch('/:bookId', updateBook);

router.delete('/:bookId', deleteBook);

module.exports = router;
