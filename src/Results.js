import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="Result">
        <h2>{props.results[0].word}</h2>
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
