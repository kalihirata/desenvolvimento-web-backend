const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const mongoString =
  "mongodb+srv://pethouse:pethouse@cluster0.d083fx7.mongodb.net/pethouse?retryWrites=true&w=majority";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(cors());
app.use(express.json());

app.use("/pethouse", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
