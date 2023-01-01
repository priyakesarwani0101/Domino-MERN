var express = require("express");
var router = express.Router();

// Get Product model
var Product = require("../models/product");

/*
 * GET add product to cart
 */
router.get("/add/:product", function (req, res) {
  var slug = req.params.product;

  Product.findOne({ slug: slug }, function (err, p) {
    if (err) console.log(err);

    if (typeof req.session.cart == "undefined") {
      req.session.cart = [];
      req.session.cart.push({
        title: slug,
        qty: 1,
        price: parseFloat(p.price).toFixed(2),
        image: "/product_images/" + p._id + "/" + p.image,
      });
    } else {
      var cart = req.session.cart;
      var newItem = true;

      for (var i = 0; i < cart.length; i++) {
        if (cart[i].title == slug) {
          cart[i].qty++;
          newItem = false;
          break;
        }
      }

      if (newItem) {
        cart.push({
          title: slug,
          qty: 1,
          price: parseFloat(p.price).toFixed(2),
          image: "/product_images/" + p._id + "/" + p.image,
        });
      }
    }

    //        console.log(req.session.cart);
    req.flash("success", "Product added!");
    res.redirect("back");
  });
});

/*
 * GET carthome page
 */
router.get("/carthome", async function (req, res) {
  if (req.session.cart && req.session.cart.length == 0) {
    delete req.session.cart;
    res.redirect("/cart/carthome");
  } else {
    res.render("carthome", {
      title: "carthome",
      cart: req.session.cart,
    });
  }
    // res.send('Working')
    
});

/*
 * GET clear cart
 */
router.get("/clear", function (req, res) {
  delete req.session.cart;

  req.flash("success", "Cart cleared!");
  res.redirect("/cart/carthome");
});

/*
 * GET buy now
 */
router.get("/buynow", function (req, res) {
  delete req.session.cart;

  res.sendStatus(200);
});

// Exports
module.exports = router;
