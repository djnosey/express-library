const mongoose = require("mongoose");
const Book = require("./../models/Book.model");
const Author = require("./../models/Author.model");

const books = require("./books-mock-data");
const authors = require("./authors-mock-data");

const DB_NAME = "Library";

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then((x) => {
    const pr = Author.create(authors);
    return pr;
  })
  .then((createdAuthors) => {
    console.log(`created ${createdAuthors.length} authors`);

    const updatedBooks = books.map((item, index) => {
      const author = createdAuthors[index];
      item.authors = [author._id];
      return item;
    });
    const pr = Book.create(updatedBooks);
    return pr;
  })
  .then((createdBooks) => {
    console.log(`created ${createdBooks.length} books`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
