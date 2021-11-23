import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./PauseableGif.css";

export default function PauseableGif({ video, slate }) {
  const [playing, setPlaying] = useState(false);
  const switchGif = () => {
    setPlaying(!playing);
    console.log("Switch!");
  };

  const playElem = <img src={video} alt="" />;

  const pauseElem = (
    <div className="pause">
      <img src={slate} alt="" />
      <FontAwesomeIcon icon={faPlay} className="play-icon" />
    </div>
  );

  return (
    <div className="pauseable-gif" onClick={switchGif}>
      {playing ? playElem : pauseElem}
    </div>
  );
}
