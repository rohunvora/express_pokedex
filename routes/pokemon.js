var express = require('express');
var axios = require('axios');
var router = express.Router();
var db = require('../models');


// GET /pokemon - return a page with favorited Pokemon
router.get('/', async (req, res) => {

  // TODO: Get all records from the DB and render to view
  // res.render('pokemon/faves');
  try {
    let locatePoke = await db.pokemon.findAll()
    res.render('faves', {pokemon:locatePoke})
  } catch (error) {
    res.render(error)
    }
  });

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', async function(req, res) {
  // TODO: Get form data and add a new record to DB
  await db.pokemon.findOrCreate({
    where : {
      name : req.body.name
    }
  })
  res.redirect('/pokemon');
});

router.get('/:name', (req, res) => {
  let pokeName = req.params.name
  let pokemonUrl = `http://pokeapi.co/api/v2/pokemon/${pokeName}`;
  // Use request to call the API
  axios.get(pokemonUrl).then(response => {
    console.log(response.data)
    let pokemon = response.data;
    res.render('show', {pokemon : pokemon})
})
})

module.exports = router;
