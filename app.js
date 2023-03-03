const http = require("http");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const indexRouter = require("./app/routes/index");

var app = express();
app.use(cors());
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

if (process.env.MODE == "dev") {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server started on ${port}`));
} else {
  http
    .createServer((req, res) => {
      res.writeHead(301, {
        Location: "https://" + req.headers["host"] + req.url,
      });
      res.end();
    })
    .listen(80, () => {
      console.log(`HTTP Server running on port 80`);
    });
}
