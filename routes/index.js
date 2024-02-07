const express = require("express");
const router = express.Router();
//const authMiddleware = require("../middleware/authMiddleware");
//router.use(authMiddleware);

//Principal route 
const pokemonController = require("../Controllers/PokemonController");
router.use("/pokemon", pokemonController);

// favorite Pokemons route 
const favoriteControllerPokemon = require ("../Controllers/favoriteControllerPokemon");
router.use("/favoritepokemon", favoriteControllerPokemon);


module.exports = router;
