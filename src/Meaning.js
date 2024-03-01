import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="row">
        <div className="col-md-2 partOfSpeech meaning-col">
          <h3>{props.meaning.partOfSpeech}</h3>
        </div>
        <div className="col-md-6 main-result meaning-col">
          {props.meaning.definitions.map((definition, index) => {
            return (
              <div key={index}>
                <h4 className="definition">
                  {index + 1}. {definition.definition}
                </h4>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </div>
        <div className="col-md-4 phrases meaning-col">
          <h3 className="example-title">Example</h3>
          {props.meaning.definitions.map((definition, index) => {
            if (definition.example) {
              return (
                <p className="example" key={index}>
                  {index + 1}. &ldquo;{definition.example}
                  &rdquo;
                </p>
              );
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
}
