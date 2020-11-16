const React = require("react");
const Layout = require("./Layout");

function BookDetails(props) {
  return (
    <Layout>
      <h1>{props.book.title}</h1>

      <ul>
        <span>Written by:</span>
        {props.book.authors.map((oneAuthor, i) => {
          return (
            <li key={i}>
              {oneAuthor.name} {oneAuthor.lastName}
            </li>
          );
        })}
      </ul>

      <p>Summary: {props.book.description}</p>

      <p>Rating: {props.book.rating}/10</p>

      <h3>reviews</h3>
      <ul>
        {props.book.reviews.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <a class="return-button" href="/books">
        Return
      </a>
    </Layout>
  );
}

module.exports = BookDetails;
