const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: String,
  price: Number,
});

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
