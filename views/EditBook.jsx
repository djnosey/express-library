const React = require("react");
const Layout = require("./Layout");
const AddAuthor = require("./components/AddAuthor");
const AddReview = require("./components/AddReview");

function EditBook(props) {
  return (
    <Layout>
      <form action={`/books/edit?bookid=${props.book._id}`} method="POST">
        <label>Title:</label>
        <input type="text" name="title" value={props.book.title} />
        <br />

        <label>Author:</label>
        <input type="text" name="author" value={props.book.author} />
        <br />

        <label>Description:</label>
        <input type="text" name="description" value={props.book.description} />
        <br />

        <label>Rate:</label>
        <input type="number" name="rating" value={props.book.rating} />
        <br />

        <button className="edit-button" type="submit">
          EDIT
        </button>
      </form>
      <h3>Add an author</h3>
      <AddAuthor idOfTheBook={props.book._id} />
      <AddReview idOfTheBook={props.book._id} />
    </Layout>
  );
}

module.exports = EditBook;
