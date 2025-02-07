import { getDb, connectToServer, closeClient } from "../connect.js";
import { artistArray } from "../../src/assets/database/artists.js";

const createArtists = async () => {
  try {
    connectToServer();

    const db = getDb();

    const response = await db.collection("artists").insertMany(
      artistArray.map((artist) => {
        const newArtist = { ...artist };
        delete newArtist.id;

        return newArtist;
      })
    );

    console.log(response);
  } catch (error) {
    throw error;
  } finally {
    closeClient();
  }
};

createArtists();
