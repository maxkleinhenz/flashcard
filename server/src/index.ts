import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";

const PORT = 5000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.post("/decks", async (req, res) => {
  const newDeck = new Deck({ title: req.body.title });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

mongoose
  .connect(
    "mongodb+srv://max:Cdrfyg9OBTRmxnYF@cluster0.2tzhovs.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`listening on port ${PORT}`);
    app.listen(PORT);
  });