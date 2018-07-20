import React from "react";
import ReactDOM from "react-dom";

const Display = (props) => (
  <div>
    <div type="numbers">Result: {props.result}</div>
    <div id="display" type="numbers">{props.input}</div>
  </div>
);

export default Display;