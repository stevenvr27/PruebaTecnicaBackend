const express = require("express");
const router = express.Router();
//const authMiddleware = require("../middleware/authMiddleware");
//router.use(authMiddleware);

//Principal route 
const pokemonController = require("../Controllers/PokemonController");

router.use("/pokemon", pokemonController);

module.exports = router;
