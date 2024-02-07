const axios = require("axios");
const express = require("express");
const router = express.Router();

//Get pokemons, this route is to get all pokemons from pokeapi: https://pokeapi.co/

router.get("/", async (req, res) => {
   //const user = req.user;
    try {
      let pokemon; 
      axios.get("https://pokeapi.co/api/v2/pokemon").then((response)=>{ 
 console.log(response);

      })
      return res.status(200).json({message:"API connected successfully"});
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal Server Error", errorMessage: error._message });
    }
  });


module.exports = router;