const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/database");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressValidator = require("express-validator");

//Connect to db
mongoose.connect(config.database);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("Connected to MongoDB"));

// Initialize app
const app = express();

//view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//set public folder
app.use(express.static(path.join(__dirname, "public")));

//Body Parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Express session middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

//Express Validator middleware
app.use(
  expressValidator.body({
    errorFormatter: function (param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "{" + namespace.shift() + "}";
      }
      return {
        param: formParam,
        msg: msg,
        value: value,
      };
    },
  })
);

//Express messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//Set routes
let pages = require("./routes/pages.js");
let adminPages = require("./routes/admin_pages.js");

app.use("/", pages);
app.use("/admin/pages", adminPages);

//start the server
let port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
