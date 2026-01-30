var express = require('express');
var router = express.Router();
console.log("user Interface ");
const app = express();

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
    console.log("failed" + err.stack);
    return;
  
  }
 console.log("success")


});







/*const dolls = [
  { id: 1, name: 'Barbie', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];
*/

router.get('/dolls', (req, res) => {
  if(Error)
  {
    console.log("erreuur");
  }
  else
  {
  
  res.render('/dolls', { dolls: dolls });
  console.log("the response is"+res);
 
  }
});


/*const Age1 = [
  { id: 1, name: 'Barbie', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];
*/

router.get('/age1', (req, res) => {
  
  res.render('Age1', { Age1: Age1 });
});

/*const Age2 = [
  { id: 1, name: 'Barbie doll', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];*/


router.get('/age2', (req, res) => {
 
  res.render('Age2', { Age2: Age2 });
});


/*const Age3 = [
  { id: 1, name: 'Barbie', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];*/


router.get('/age3', (req, res) => {
 
  res.render('Age3', { Age3: Age3});
});

/*
const Homme = [
  { id: 1, name: 'Barbie', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];
*/

router.get('/Homme', (req, res) => {
 
  res.render('Homme', { Homme: Homme });
});
/*
const Femmes = [
  { id: 1, name: 'Barbie', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];
*/

router.get('/femme', (req, res) => {

  res.render('Femmes', { dolls: Femmes });
});
/*
const Vehicules= [
  { id: 1, name: 'Barbie', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];
*/

router.get('/Vehicules', (req, res) => {
 
  res.render('Vehicules', { Vehicules: Vehicules });
});
/*
const Puzzles = [
  { id: 1, name: 'Barbie', color: 'pink' },
  { id: 2, name: 'Ken', color: 'blue' },
  { id: 3, name: 'American Girl', color: 'red' }
];
*/

router.get('/puzzles', (req, res) => {

  res.render('Puzzles', { Puzzles: Puzzles });
});




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
