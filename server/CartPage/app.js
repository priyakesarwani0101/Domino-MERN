const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/database");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressValidator = require("express-validator");

const passport = require("passport");

// Connect to db
mongoose.connect(config.database);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Init app
const app = express();

//Set Public folder

app.use(express.static(path.join(__dirname, "public")));

//Set global errors variable
app.locals.errors = null;

// Express Session middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    //  cookie: { secure: true }
  })
);

// Express Messages middleware
app.use(require("connect-flash")());
app.use(function (req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

// // Passport Config
// require('./config/passport')(passport);
// // Passport Middleware
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('*', function(req,res,next) {
//    res.locals.cart = req.session.cart;
//    res.locals.user = req.user || null;
//    next();
// });

// Set routes
var pages = require("./routes/pages.js");
var cart = require("./routes/cart.js");

app.use("/cart", cart);

// Start the server
var port = 3000;
app.listen(port, function () {
  console.log("Server started on port http://localhost/" + port);
});
