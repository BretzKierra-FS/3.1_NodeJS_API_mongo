const express = require('express');
const router = express.Router();
const {
  deleteAuthor,
  updateAuthor,
  createAuthor,
  getAuthorById,
  getAuthor,
} = require('./controllers/authorController');

router.get('/', getAuthor);

router.post('/', createAuthor)

router.get('/:authorId', getAuthorById);

router.patch('/:authorId', updateAuthor)

router.delete('/:authorId', deleteAuthor);

module.exports = router;
