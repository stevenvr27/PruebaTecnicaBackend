const favoritePokemonSchema = require("../schemas/favorites");

getfavoritePokemon = async (userEmail) => {
    try {
      const favoritePokemon = await favoritePokemonSchema.find({ userEmail });
      return favoritePokemon;
    } catch (error) {
      console.error("Error getting tasks:", error);
      throw error;
    }
  };

  module.exports = {
    getfavoritePokemon
   };