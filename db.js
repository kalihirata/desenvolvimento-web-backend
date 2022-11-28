require("dotenv").config();
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://pethouse:pethouse@cluster0.d083fx7.mongodb.net/pethouse?retryWrites=true&w=majority";
const mongoString = uri;

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
