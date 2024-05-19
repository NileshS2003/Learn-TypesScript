import express, { Request, Response } from "express";
import Deck from "../models/Deck.model";

const router = express.Router();

router
  .post("/createDeck", async (req: Request, res: Response) => {
    const newDeck = new Deck({
      title: req.body.title,
    });

    const doc = await newDeck.save();
    res.json(doc);
  })
  .get("/getDecks", async (req: Request, res: Response) => {
    const decks = await Deck.find();
    res.json(decks);
  });

export default router;
