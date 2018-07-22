import React from "react";
import ReactDOM from "react-dom";

const Display = (props) => (
  <div className="display">
  <div className="display-result" type="numbers">&nbsp;{props.result}</div>
    <div className="display-numbers" id="display" type="numbers">{props.input}</div>
  </div>
);

export default Display;