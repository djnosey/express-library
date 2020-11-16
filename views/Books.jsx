const React = require("react");
const Layout = require("./Layout");

function Books(props) {
  return (
    <Layout>
      <h1>Books Page</h1>
      {props.books.map((item, index) => {
        return (
          <p key={index} className="book-title">
            <a className="edit-button" href={`/books/edit?bookid=${item._id}`}>
              EDIT
            </a>
            <a href={`/books/details/${item._id}`}>{item.title}</a>
          </p>
        );
      })}
    </Layout>
  );
}

module.exports = Books;
