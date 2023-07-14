const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  books: String,
  //   name: {
  //     type: String,
  //     required: [true, 'please add the Authors name'],
  //     unique: true,
  //     trim: true,
  //     maxlength: [50, 'Name cannot be more than 50 characters'],
  //   },
  //   age: {
  //     type: Number,
  //     required: true,
  //   },
  //   email: {
  //     type: String,
  //     match: [
  //       /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  //       'Please enter a valid email addresss',
  //     ],
  //   },
  //   description: {
  //     type: String,
  //     required: [true, 'Please add a description'],
  //     maxlength: [500, 'Descriptions cannot be more than 500 characters'],
  //   },
  //   books: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'Book',
  //     },
  //   ],
  //   totalBooks: Number,
});

module.exports = mongoose.model('Author', authorSchema);
