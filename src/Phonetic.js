import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetic.audio.length > 1) {
    return (
      <div className="Phonetic">
        <button type="button" onClick={handleClick}>
          <i className="fas fa-volume-up"></i>
          <div className="Phonetic-text">{props.phonetic.text}</div>
        </button>
      </div>
    );
  }
}
