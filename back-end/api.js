import axios from "axios";

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

export const getArtists = async () => {
  const response = await axios.get(`${URL}/artists`);

  console.log('Get request to "artists"');

  if (response.status === 200) {
    return response.data;
  }
};

export const getSongs = async () => {
  const response = await axios.get(`${URL}/songs`);

  console.log('Get request to "songs"');

  if (response.status === 200) {
    return response.data;
  }
};
