import React, { useState } from "react";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching ${searchWord}`);
  }

  function handleSearchWordChange(event) {
    setSearchWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a word"
          onChange={handleSearchWordChange}
          autoFocus
          required
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
