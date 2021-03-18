const mongoose = require("mongoose");

const factureSchema = mongoose.Schema({
  numero: { type: String },
  date: { type: Date },
  client: {
    name: { type: String },
    email: { type: String },
  },
  produits: [
    {
      code: { type: String },
      name: { type: String },
      price: { type: Number },
      quantité: { type: String },
    },
  ],
  total: { type: Number },
});

module.exports = mongoose.model("Facture", factureSchema);
