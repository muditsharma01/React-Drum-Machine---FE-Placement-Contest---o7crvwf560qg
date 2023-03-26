import React from "react";
import {bank1} from "./App"

function Pad({ handleClick, power, className, element, id }) {
  const handlePadClick = () => {
    if (power) {
      const audioElement = document.getElementById(element);
      audioElement.currentTime = 0;
      audioElement.play();
      handleClick(id);
    }
  };

  return (
    <button
      data-tag={id}
      type="button"
      className={`drum-pad ${className}`}
      onClick={handlePadClick}
      id={id}
    >
      {element}
      <audio id={element} src={id} className="clip"></audio>
    </button>
  );
}

export default Pad;
