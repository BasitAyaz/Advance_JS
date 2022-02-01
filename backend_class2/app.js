const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookModel = require("./models/books");
const cors = require("cors");

app.use(cors());

mongoose.connect(
  "mongodb+srv://user2:user123456@cluster0.3ytfn.mongodb.net/pro2?retryWrites=true&w=majority",
  () => {
    console.log("DB Connected Successfully");
  }
);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/books", (req, res) => {
  bookModel.find({}, (err, result) => {
    if (err) {
      res.send(err).status(400);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

app.post("/books", (req, res) => {
  let obj = {
    title: "The Book Of Sultan Salahuddin Ayubi",
    author: "Anonymous",
    price: 1000,
  };
  let newBook = new bookModel(obj);
  newBook.save((err, result) => {
    if (err) {
      res.send(err).status(404);
      return;
    } else {
      res.json(result).status(200);
    }
  });
});

app.listen(5000, () => {
  console.log("server is listening...");
});
