import React from "react";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button type="button" onClick={handleClick}>
          <img src="https://img.icons8.com/speaker" alt="" />
        </button>
        <div className="phonetic-text">{props.phonetic.text}</div>
      </div>
    );
  }
}
