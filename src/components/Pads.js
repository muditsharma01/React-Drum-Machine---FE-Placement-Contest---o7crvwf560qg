import React, { useState } from 'react';
import Pad from './Pad';
import { bank1 } from './App';

function Pads() {
  const keypadCode = Object.keys(bank1);

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentClip, setCurrentClip] = useState('');

  const handlePowerToggle = () => {
    setPower(!power);
    setCurrentClip('');
  };

  const handleVolumeChange = e => {
    const newVolume = e.target.value;
    setVolume(newVolume);
  };

  const playSound = (clipName, clipId) => {
    if (power) {
      const audioElement = document.getElementById(clipName);
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      audioElement.play();
      setCurrentClip(clipId);
    }
  };

  return (
    <div id="drum-machine">
      <div id="div-pads">
        {keypadCode.map((pad, idx) => (
          <Pad
            id={`pad-${pad}`}
            key={`pad-${pad}`}
            handleClick={() => playSound(pad, bank1[pad].id)}
            element={pad}
            power={power}
            volume={volume}
            className={currentClip === bank1[pad].id ? 'active' : ''}
          />
        ))}
      </div>
      <div id="controls">
        <div className="control">
          <p>Power</p>
          <div className="toggle-control">
            <input
              type="checkbox"
              id="power-toggle"
              checked={power}
              onChange={handlePowerToggle}
            />
            <label htmlFor="power-toggle" className="toggle"></label>
          </div>
        </div>
        <div className="control">
          <p>Volume</p>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      <div id="display">{currentClip}</div>
    </div>
  );
}

export default Pads;
