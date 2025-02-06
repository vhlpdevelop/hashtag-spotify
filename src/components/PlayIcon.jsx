import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const PlayIcon = ({ visible, distance = 7.5, fixed }) => {
  return (
    <FontAwesomeIcon
      className={`play-icon ${visible ? "play-icon--visible" : ""} `}
      icon={faCirclePlay}
      style={{
        right: `${distance}px`,
        bottom: `${distance}px`,
        position: fixed ? "fixed" : "absolute",
      }}
    />
  );
};

export default PlayIcon;
