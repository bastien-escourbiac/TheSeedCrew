const express = require("express");
const router = express.Router();

const Facture = require("../models/Facture");

router.post("/", (req, res, next) => {
  const facture = new Facture({
    ...req.body, //le corps de la requête n'est pas enregistré, j'ai pourtant une réponse 201 du serveur mais
    //je ne comprend pas quel est mon problème dans l'enregistrement de la requête.
  });
  facture
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
        facture,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.get("/:id", (req, res, next) => {
  Facture.findOne({
    _id: req.params.id,
  })
    .then((facture) => {
      res.status(200).json(facture);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
});

router.put("/:id", (req, res, next) => {
  const facture = new Facture({
    numero: req.body.numero,
    date: req.body.date,
    client: req.body.client,
    produits: req.body.produits,
    total: req.body.total,
  });
  Facture.updateOne({ _id: req.params.id }, facture)
    .then(() => {
      res.status(201).json({
        message: "Bill updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Facture.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

router.get("/" + "", (req, res, next) => {
  Facture.find()
    .then((factures) => {
      res.status(200).json(factures);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = router;
