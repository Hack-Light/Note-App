const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("individual notes");
});

module.exports = router;
