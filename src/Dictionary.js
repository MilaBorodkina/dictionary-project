import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");

  function handleSearchResult(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let dictionaryAPIURL = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchWord}`;
    axios.get(dictionaryAPIURL).then(handleSearchResult);
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
