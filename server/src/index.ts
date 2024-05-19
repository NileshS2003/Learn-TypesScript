import express, { Request, Response } from "express";
import connectDB from "./db/connectToMongoDB.ts";
import Deck from "./models/Deck.model.ts";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/createDeck", async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });

  const doc = await newDeck.save();
  res.json(doc);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}); //connection with MongoDB
