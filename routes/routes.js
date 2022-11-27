const express = require("express");
const { Formulario } = require("../models/models");
const router = express.Router();

router.post("/formulario", (req, res) => {
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

router.get("/formulario", async (req, res) => {
  try {
    const data = await Formulario.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router.post("/delete-image/:id", (req, res) => {
//   res.send("hello world");
// });

// router.post("/image", (req, res) => {
//   res.send("hello world");
// });

// router.get("/image/:id", (req, res) => {
//   res.send("hello world");
// });

module.exports = router;
