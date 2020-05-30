const express = require("express");
const router = express.Router();
const Notes = require("../models/notes");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/new", (req, res) => {
  res.render("newnotes");
});

router.post("/new", async (req, res) => {
  let note = new Notes({
    title: req.body.title,
    body: req.body.body
  });
  try {
    let result = await note.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", (req, res) => {
  res.redirect("/");
});

router.get("/edit", (req, res) => {
  res.send("Edit it here");
});

router.put("/edit", (req, res) => {
  res.redirect("/:id");
});

module.exports = router;
