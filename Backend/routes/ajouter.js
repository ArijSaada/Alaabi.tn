const express = require('express');
const router = express.Router();
const {connection}= require('./userInterface');
console.log("PRODUCT ADD");
router.post('/add', async (req, res) => {
    try {
      // Récupérez les données du formulaire depuis req.body
      const { name, price, ref, img } = req.body;
      //req.body ta3tini access lilly ba3thou ll utilisateur par HTTP requetes
      const newProduct = new Product({ name, price, ref, img});
      await newProduct.save();
      alert("Produit ajouté");
    }
    catch (error)
    {
        alert("Erreur d'ajout");
    }
});
module.exports = router;

