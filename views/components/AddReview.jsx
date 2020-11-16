const React = require("react");
const Layout = require("./../Layout");

function AddReview(props) {
  return (
    <Layout>
      <form action={`/reviews/add?bookid=${props.idOfTheBook}`} method="POST">
        <label>Review</label>
        <textarea name="review" id="" cols="30" rows="10"></textarea>
        <button type="submit">add review</button>
      </form>
    </Layout>
  );
}

module.exports = AddReview;
