const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const factureRoutes = require("./routes/Facture");

const app = express();

mongoose
  .connect(
    "mongodb+srv://bastien_escourbiac:tototata@cluster0.kgmnz.mongodb.net/NodeProject?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  ) //je n'ai pas réussi a trouver l'URI sur le nouveau cluster que j'ai créé pour l'exercice, je me suis donc connecté sur un ancien cluster
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get(bodyParser.json());

app.use("/api/facture", factureRoutes);

module.exports = app;
