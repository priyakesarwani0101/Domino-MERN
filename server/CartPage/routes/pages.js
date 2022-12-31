const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Route is Working");
});
  
//Exports from pages

module.exports = router;