import React from "react";
import ItemsList from "./ItemsList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const MainContent = () => {
  return (
    <section className="main-content">
      <ItemsList
        title="Artistas populares"
        type="Artista"
        path="/artists"
        individualPath="/artist"
        itemsToShow="6"
        itemsArray={artistArray}
      />

      <ItemsList
        title="Músicas populares"
        path="/songs"
        individualPath="/song"
        itemsToShow="6"
        itemsArray={songsArray}
        style="square"
      />
    </section>
  );
};

export default MainContent;
