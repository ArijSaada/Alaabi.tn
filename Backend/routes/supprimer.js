const express = require('express');
const router = express.Router();
const connection = require('./userInterface');
console.log("DELETE");



router.post('/del', async (req, res) => {
    try {
      const ref = req.body.ref;
      const query = 'DELETE FROM products WHERE ref = ?';
      await connection.query(query, [ref]);
      alert("Produit supprimé");
    } catch (error) {
      console.error('Erreur de suppression du produit :', error);
     
    }
  });
  
  module.exports = router;