import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ path, image, name, type, id, artist, style }) => {
  return (
    <Link to={`${path}/${id ?? name}`} className="single-item">
      <div className="single-item__div-image">
        <img
          src={image}
          alt={`Imagem de ${name}`}
          className={`single-item__image ${
            style === "square" ? "single-item__image--square" : ""
          }`}
        />

        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <p className="single-item__title">{name}</p>
        <p className="single-item__type">{type ?? artist}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
