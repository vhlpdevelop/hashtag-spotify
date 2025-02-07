import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToServer, getDb } from "./connect.js";

const app = express();
const PORT = process.env.PORT;

console.log(process.env);

app.use(cors());

app.get("/artists", async (req, res) => {
  const db = getDb();
  const artists = await db.collection("artists").find({}).toArray();

  res.json(artists);
});

app.get("/songs", async (req, res) => {
  const db = getDb();
  const songs = await db.collection("songs").find({}).toArray();

  res.json(songs);
});

app.listen(PORT, () => {
  connectToServer();
  console.log(`Servidor está rodando na porta ${PORT}`);
});
