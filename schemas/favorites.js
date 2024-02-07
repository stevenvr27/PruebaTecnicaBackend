const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  updatedAt: { type: Date, default: Date.now, required: true },
  favoritePokemonUrl: {type:String, required:true}
});

favoriteSchema.pre("save", function (next) {
  const currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.createdAt) {
    this.createdAt = currentDate;
  }
  next();
});

const favoritePokemon = mongoose.model("favoritePokemon", favoriteSchema);

module.exports = favoritePokemon;