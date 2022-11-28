const { Formulario } = require("../models/models");
const cors = require("cors");
const express = require("express");
const initDB = require("../db").initDB;
const app = require("express")();
const port = 3001;

initDB();

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log("API Up and running on port " + port);
});

app.use(cors());
app.use(express.json());

app.post("/api/formulario", (req, res) => {
  const data = new Formulario({
    personalData: req.body.personalData,
    address: req.body.address,
    howToHelp: req.body.howToHelp,
  });

  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/api/formulario", async (req, res) => {
  try {
    const data = await Formulario.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;
