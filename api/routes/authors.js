const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({ message: 'Authors - GET' });
});

router.post('/', (req, res, next) => {
  res.json({ message: 'Authors - Post' });
});

router.get('/:authorId', (req, res, next) => {
  const authorId = req.params.authorId;
  res.json({ message: 'Authors - GET by ID', id: authorId });
});

router.patch('/:authorId', (req, res, next) => {
    const authorId = req.params.authorId;
    res.json({ message: 'Authors - PATCH by ID', id: authorId });
  });

  router.delete('/:authorId', (req, res, next) => {
    const authorId = req.params.authorId;
    res.json({ message: 'Authors - Delete by ID', id: authorId });
  });




module.exports = router;
