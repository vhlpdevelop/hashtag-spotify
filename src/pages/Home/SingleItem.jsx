import React from "react";
import { Link } from "react-router-dom";
import PlayIcon from "../../components/PlayIcon";

const SingleItem = ({ path, image, name, type, _id, artist, style }) => {
  return (
    <Link to={`${path}/${_id}`} className="single-item">
      <div className="single-item__div-image">
        <img
          src={image}
          alt={`Imagem de ${name}`}
          className={`single-item__image ${
            style === "square" ? "single-item__image--square" : ""
          }`}
        />

        <PlayIcon />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">{type ?? artist}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
