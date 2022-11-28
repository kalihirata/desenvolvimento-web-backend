const app = require("express")();
const cors = require("cors");
const express = require("express");
const initDB = require("../db").initDB;
const routes = require("../routes/routes");
const port = 5000;

initDB();

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log("API Up and running on port " + port);
});

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.use("/pethouse", routes);

module.exports = app;
