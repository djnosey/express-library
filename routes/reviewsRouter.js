const express = require("express");
const reviewsRouter = express.Router();
const Book = require("../models/Book.model");

reviewsRouter.post("/add", (req, res, next) => {
  const { bookid } = req.query;

  const { review } = req.body;

  const pr = Book.findByIdAndUpdate(
    bookid,
    { $push: { reviews: review } },
    { new: true }
  );
  return pr
    .then((updatedBook) => {
      res.redirect(`/books/details/${updatedBook._id}`);
    })
    .catch((error) => console.log(error));
});

module.exports = reviewsRouter;
