require("dotenv").config();
const mongoose = require("mongoose");

const mongoString = process.env.MONGODB_URI;

function initDB() {
  mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}

module.exports = { initDB };
