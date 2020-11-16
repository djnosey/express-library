require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const booksRouter = require("./routes/booksRouter");
const authorsRouter = require("./routes/authorsRouter");
const reviewsRouter = require("./routes/reviewsRouter");

const bodyParser = require("body-parser");

var app = express();
const mongoose = require("mongoose");
const erv = require("express-react-views");
const DB_NAME = "Library";

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(`connected to DB: ${x.connections[0].name}`);
  })
  .catch((err) => {
    console.log("error connecting to DB", err);
  });

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

app.use(express.static(__dirname + "/public"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/reviews", reviewsRouter);

app.get("/", (req, res, next) => {
  res.render("Home");
});

module.exports = app;
