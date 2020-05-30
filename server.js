const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const port = 3000;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(
    process.env.DATABASE_URI || "mongodb://localhost:27017/noteapp",
    dbOptions
  )
  .then(() => {
    console.log(`Connected to mongodb successfully`);
  })
  .catch(e => {
    console.log(e);
  });

const indexRouter = require("./routes/indexRoute");
const individualRouter = require("./routes/individualRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "public/javascript")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/note", individualRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});
