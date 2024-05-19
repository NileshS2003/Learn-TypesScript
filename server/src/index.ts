import express, { Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import deckRouter from './routes/deck.routes.ts'
import connectDB from "./db/connectToMongoDB.ts";

const app = express();
config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/deck',deckRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

connectDB().then(() => {
  //connection with MongoDB
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
