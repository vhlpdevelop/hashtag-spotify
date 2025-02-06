import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faBackwardStep,
  faForwardStep,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";
import { formatTimeInSeconds } from "../utils/formatTimeInSeconds";
import { convertStringTimeToSeconds } from "../utils/convertStringTimeToSeconds";
import { songsArray } from "../assets/database/songs";
import { Link } from "react-router-dom";

const Player = ({ duration, audio, artist, id }) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [songStatus, setSongStatus] = useState({
    isPlaying: false,
    currentTime: formatTimeInSeconds(0),
  });
  const { isPlaying, currentTime } = songStatus;
  const durationInSeconds = convertStringTimeToSeconds(duration);

  const playPauseMusic = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    updateSongStatus(!songStatus.isPlaying, audioPlayer.current.currentTime);
  };

  const updateSongStatus = (playingStatus, currentTimeStatus) => {
    setSongStatus({
      isPlaying: playingStatus,
      currentTime: formatTimeInSeconds(currentTimeStatus),
    });

    progressBar.current.style.setProperty(
      "--_progress",
      `${(currentTimeStatus / durationInSeconds) * 100}%`
    );
  };

  const resetSong = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;

    updateSongStatus(false, 0);
  };

  const previusSongPath = () => {
    const maxId = songsArray.length;
    const previousId = id > 1 ? id - 1 : maxId;

    return `/song/${previousId}`;
  };

  const nextSongPath = () => {
    const numberId = Number(id);
    const maxId = songsArray.length;
    const nextId = numberId === maxId ? 1 : numberId + 1;

    return `/song/${nextId}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        const timeNowInSeconds = audioPlayer.current.currentTime;

        updateSongStatus(songStatus.isPlaying, timeNowInSeconds);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={previusSongPath()} onClick={() => resetSong()}>
          <FontAwesomeIcon
            className="player__icon player__icon--backward"
            icon={faBackwardStep}
          ></FontAwesomeIcon>
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={songStatus.isPlaying ? faPauseCircle : faPlayCircle}
          onClick={() => playPauseMusic()}
        ></FontAwesomeIcon>

        <Link to={nextSongPath()} onClick={() => resetSong()}>
          <FontAwesomeIcon
            className="player__icon player__icon--forward"
            icon={faForwardStep}
          ></FontAwesomeIcon>
        </Link>
      </div>

      <div className="player__progress">
        <p className="player__time">{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p className="player__time">
          {formatTimeInSeconds(convertStringTimeToSeconds(duration))}
        </p>
      </div>

      <audio ref={audioPlayer} id="audio-player" src={audio}></audio>
    </div>
  );
};

export default Player;
