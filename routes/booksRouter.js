const express = require("express");
const Book = require("../models/Book.model");
const Author = require("../models/Author.model");
const booksRouter = express.Router();

booksRouter.get("/", function (req, res, next) {
  Book.find().then((allBooksFromDb) => {
    const props = { books: allBooksFromDb };
    res.render("Books", props);
  });
});

booksRouter.get("/add", (req, res, next) => {
  res.render("AddBook");
});

booksRouter.post("/add", (req, res, next) => {
  const { title, author, description, rating } = req.body;
  Book.create({ title, author, description, rating })
    .then(() => {
      res.redirect("/books");
    })
    .catch((err) => console.log(err));
});

booksRouter.get("/edit", (req, res, next) => {
  const { bookid } = req.query;
  Book.findOne({ _id: bookid })
    .then((book) => {
      const props = { book };
      res.render("EditBook", props);
    })
    .catch((err) => console.log(err));
});

booksRouter.post("/edit", (req, res, next) => {
  const { bookid } = req.query;
  const { title, author, description, rating } = req.body;
  Book.findByIdAndUpdate(
    bookid,
    { title, author, description, rating },
    { new: true }
  )
    .then((book) => {
      console.log("book after update", book);
      res.redirect("/books");
    })
    .catch((error) => console.error(error));
});

booksRouter.get("/details/:bookId", (req, res, next) => {
  const { bookId } = req.params;
  Book.findById(bookId)
    .populate("authors")
    .then((book) => {
      props = { book };
      res.render("BookDetails", props);
    })
    .catch((err) => console.log(err));
});

module.exports = booksRouter;
