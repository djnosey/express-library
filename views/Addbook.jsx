const React = require("react");

const Layout = require("./Layout");

function Addbook() {
  return (
    <Layout>
      <form action="/books/add" method="POST">
        <label>Title:</label>
        <input type="text" name="title" />
        <br />
        <label>Description</label>
        <input type="text" name="description" />
        <br />
        <label>rating</label>
        <input type="number" name="rating" />
        <br />
        <button type="submit">ADD</button>
      </form>
    </Layout>
  );
}

module.exports = Addbook;
