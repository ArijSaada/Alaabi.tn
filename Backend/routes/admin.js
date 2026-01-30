var express = require('express');
var router = express.Router();

console.log("admin interface  : ");

const mysql = require('mysql2');
const connection=mysql.createConnection({
host:'127.0.0.1',
port : '3306',

user:'root',
password : 'istic.glsi3',
database: 'jpabase'

})
connection.connect((err) => {
  if (err) {
    console.log("failed to connect " + err.stack);
    return;
  
  }
 console.log(" connected successfully")


})
const app = express();


router.get('/admin', (req, res) => {
    if(Error)
    {
      console.log("error");
    }
    else
    {
        const query = 'SELECT * FROM produits';
        if (error)
        {console.log("check product name ");
    } else {

    res.render('admin', { produits: produits });
    }
}
  });
  

  module.exports = router;












