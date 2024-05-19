import mongoose from "mongoose";

const Schema = mongoose.Schema;

const deckSchema = new Schema({
  title: String,
  author: mongoose.Schema.ObjectId,
});

const Deck = mongoose.model("Deck", deckSchema);
export default Deck;
