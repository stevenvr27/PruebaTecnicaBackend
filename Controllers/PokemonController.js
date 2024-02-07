const axios = require("axios");
const express = require("express");
const router = express.Router();

//Get pokemon, this route is to get all pokemon from pokeapi: https://pokeapi.co/

router.get("/", async (req, res) => {
  //const user = req.user;
  const limit = req.query.limit || 1;
  const offset = req.query.offset || 0;

  try {
    let pokemonToBeFetched;
    let pokemon = [];
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then(async (response) => {
        pokemonToBeFetched = response.data.results;
        const promises = pokemonToBeFetched.map((element) =>
          axios.get(element.url)
        );

        const results = await Promise.all(promises);

        results.forEach((response) => {
          pokemon.push(response.data);
        });

        return res.status(200).json({ 
          pokemon,
        });
      })
      .catch((error) => {
        console.error(error);
        return res
          .status(500)
          .json({ message: "Error fetching data from API" });
      });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server Error", errorMessage: error._message });
  }
});

module.exports = router;