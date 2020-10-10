const express = require("express");
const router = express.Router();

// @desc Landing page
// @route GET /
// @access Public
router.get("/", (req, res) => {
  res.send("it works");
});

module.exports = router;
