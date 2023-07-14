exports.getBook = async (req, res, next) => {
  res.json({ message: `Book - ${req.method}` });
};

exports.getBookById = async (req, res, next) => {
  const bookId = req.params.bookId;
  res.json({ message: `Book - ${req.method}`, id: bookId });
};

exports.createBook = async (req, res, next) => {
  const bookId = req.params.bookId;
  res.json({ message: `Book - ${req.method}`, id: bookId });
};

exports.updateBook = async (req, res, next) => {
  const bookId = req.params.bookId;
  res.json({ message: `Book - ${req.method}`, id: bookId });
};

exports.deleteBook = async (req, res, next) => {
  const bookId = req.params.bookId;
  res.json({ message: `Book - ${req.method}`, id: bookId });
};
