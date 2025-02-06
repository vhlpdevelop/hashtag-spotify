import React from "react";
import { useParams } from "react-router-dom";
import { artistsIndexedById } from "../../assets/database/artists";
import { songsIndexedByArtist } from "../../assets/database/songs";
import PlayIcon from "../../components/PlayIcon";
import SongList from "./SongList";
import { Link } from "react-router-dom";

const Artist = () => {
  const { id } = useParams();
  const { name, image, banner } = artistsIndexedById[id];
  const songsArray = songsIndexedByArtist[name];
  const randomSongIndex = Math.floor(Math.random() * songsArray.length);

  let bgImage = `linear-gradient(to bottom, var(--_shade), var(--_shade)), url("${banner}")`;

  return (
    <section className="artist">
      <div className="artist__header" style={{ backgroundImage: `${bgImage}` }}>
        <h2 className="artist__title">{name}</h2>

        <Link to={`/song/${songsArray[randomSongIndex].id}`}>
          <PlayIcon visible={true} distance={25} fixed={true} />
        </Link>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArray} />
      </div>
    </section>
  );
};

export default Artist;
