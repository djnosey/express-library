const React = require("react");

function AddAuthor(props) {
  return (
    <form action={`/authors/add?bookid=${props.idOfTheBook}`} method="POST">
      <label>First name</label>
      <input type="text" name="name" />
      <label>Last name</label>
      <input type="text" name="lastName" />
      <label>Nationality</label>
      <input type="text" name="nationality" />
      <label>birthday</label>
      <input type="date" name="birthday" />
      <label>PictureURL</label>
      <input type="text" name="pictureUrl" />
      <button type="submit"></button>
    </form>
  );
}

module.exports = AddAuthor;
