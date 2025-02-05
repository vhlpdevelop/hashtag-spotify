import React from "react";
import { useParams } from "react-router-dom";
import { artistsIndexedById } from "../../assets/database/artists";

const Artist = () => {
  const { id } = useParams();
  console.log(artistsIndexedById);

  return (
    <div>
      Artist with ID: {id}
      <p>{artistsIndexedById[id].id}</p>
      <p>{artistsIndexedById[id].name}</p>
      <p>{artistsIndexedById[id].image}</p>
    </div>
  );
};

export default Artist;
