const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

const indexRouter = require("./routes/indexRoute");

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "public/stylesheets")));
app.use("/js", express.static(path.join(__dirname, "public/javascript")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`App listening on port ${port}`);
});
