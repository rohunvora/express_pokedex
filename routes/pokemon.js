var express = require('express');
var router = express.Router();
var db = require('../models')

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  db.pokemon.create({
    name: 'Pikachu'
  }).then(function(poke) {
    console.log('Created', poke.name)
  })

  db.pokemon.findAll().then(function(poke) {
    console.log('Found: ', poke.name)
  })
  // TODO: Get all records from the DB and render to view
  res.send('Render a page of favorites here');
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // TODO: Get form data and add a new record to DB
  res.send(req.body);
});

module.exports = router;
