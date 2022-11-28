const mongoose = require("mongoose");

const formularioSchema = new mongoose.Schema({
  personalData: {
    name: { type: String },
    email: { type: String },
    nickName: { type: String },
    date: { type: String },
    phoneNumber: { type: Number },
    cellNumber: { type: Number },
    cpf: { type: Number },
    socialLink: { type: String },
    helpOption: { type: String },
  },
  address: {
    zipcode: { type: Number },
    address: { type: String },
    number: { type: Number },
    city: { type: String },
    state: { type: String },
  },

  howToHelp: {
    helpOption: { type: String },
    petName: { type: String },
    reason: { type: String },
    comment: { type: String },
    reciveNews: { type: String },
  },
});

const Formulario = mongoose.model("Formulario", formularioSchema, "formularios");

module.exports = { Formulario }
