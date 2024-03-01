import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <div className="row">
          <div className="col-2 synonyms">
            <h5>Synonyms:</h5>
          </div>
          <div className="col-9 synonym-words">
            <ul>
              {props.synonyms.map(function (synonym, index) {
                return <li key={index}>{synonym} </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
