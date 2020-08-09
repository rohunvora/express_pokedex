var express = require('express');
var axios = require('axios')
var router = express.Router();
var db = require('../models')


// GET /pokemon - return a page with favorited Pokemon
router.get('/', async (req, res) => {

  try {
    let locatePoke = await db.pokemon.findAll()
    console.log(locatePoke);
    res.render('faves', {pokemon:locatePoke})
  } catch (error) {
    res.render(error)
    }
  });

  db.pokemon.create({
    name: 'Pikachu'
  }).then(function(poke) {
    console.log('Created', poke.name)
  })

  db.pokemon.findAll().then(function(poke) {
    console.log('Found: ', poke.name)
  })
  // TODO: Get all records from the DB and render to view
  // res.render('pokemon/faves');

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // TODO: Get form data and add a new record to DB
  res.send(req.body);
});

module.exports = router;
