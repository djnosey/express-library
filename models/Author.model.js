const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String },
  lastName: { type: String },
  nationality: { type: String },
  birthday: { type: Date },
  pictureUrl: { type: String },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
