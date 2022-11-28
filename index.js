require('dotenv').config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const mongoString = process.env.MONGODB_URI;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
