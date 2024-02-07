const axios = require("axios");
const express = require("express");
const router = express.Router();
const favoritePokemonService = require("../Services/favoritePokemonService");

//Get favorite pokemon, this route is to get all favorite pokemons
router.get("/", async (req, res) => {
    //const user = req.user;
    try {
      const favoritePokemon = await  favoritePokemonService.getfavoritePokemon("usuario@example.com");
      return res.status(200).json(favoritePokemon);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal Server Error", errorMessage: error._message });
    }
  });



module.exports = router;