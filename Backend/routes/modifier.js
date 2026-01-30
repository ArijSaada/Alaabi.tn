const express = require('express');
const router = express.Router();
console.log("Modifier function");

router.post('/modifier', async (req, res) => {
  try {
    const { name, price, ref, img } = req.body;

    const existingProduct = await produit.findById(ref);

    if (!existingProduct) {
        const { name, price, ref, img } = req.body;
        //req.body ta3tini access lilly ba3tou ll utilisateur par HTTP requetes
        const newProduct = new Product({ name, price, ref, img});
        await newProduct.save();
    }
    else {
    existingProduct.name = name;
    existingProduct.price = price;
    existingProduct.ref = ref;
    existingProduct.img = img;

    
    await existingProduct.save();

   alert("Modification réussie ");}
  } catch (error) {
    console.log('Erreur lors de la mise à jour du produit :', error);
    
  }
});

module.exports = router;
