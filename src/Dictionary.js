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
      <div className="Search-bar header">
        <h2>What word do you want to look up?</h2>
        <form className="Search" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a word"
              onChange={handleSearchWordChange}
              required
            />
            <button className="btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="Body">
        <Results results={dictionarySearchResults} />
      </div>
    </div>
  );
}
