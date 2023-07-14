exports.getAuthor = async (req, res, next) => {
  res.json({ message: `Authors - ${req.method}` });
};

exports.getAuthorById = async (req, res, next) => {
  const authorId = req.params.authorId;
  res.json({ message: `Authors - ${req.method}`, id: authorId });
};

exports.createAuthor = async (req, res, next) => {
  const authorId = req.params.authorId;
  res.json({ message: `Authors - ${req.method}`, id: authorId });
};

exports.updateAuthor = async (req, res, next) => {
  const authorId = req.params.authorId;
  res.json({ message: `Authors - ${req.method}`, id: authorId });
};

exports.deleteAuthor = async (req, res, next) => {
  const authorId = req.params.authorId;
  res.json({ message: `Authors - ${req.method}`, id: authorId });
};
