import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <div className="row align-items-center header headword">
          <div className="col">
            <h2 className="word">{props.results[0].word}</h2>
          </div>
          <div className="col phonetics">
            {props.results[0].phonetics.map((phonetic, index) => {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </div>
        {props.results[0].meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
