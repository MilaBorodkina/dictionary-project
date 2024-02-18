import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [searchWord, setSearchWord] = useState("");
  let [dictionarySearchResults, setDictionarySearchResults] = useState(null);

  function handleSearchResult(response) {
    setDictionarySearchResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let dictionaryAPIURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
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
      <Results results={dictionarySearchResults} />
    </div>
  );
}
