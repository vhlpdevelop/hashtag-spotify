import { getDb, connectToServer, closeClient } from "../connect.js";
import { songsArray } from "../../src/assets/database/songs.js";

const createSongs = async () => {
  try {
    connectToServer();

    const db = getDb();

    const response = await db.collection("songs").insertMany(
      songsArray.map((song) => {
        const newSong = { ...song };
        delete newSong.id;

        return newSong;
      })
    );

    console.log(response);
  } catch (error) {
    throw error;
  } finally {
    closeClient();
  }
};

createSongs();
