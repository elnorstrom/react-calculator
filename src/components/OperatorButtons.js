import React from "react";
import ReactDOM from "react-dom";

const OperatorButtons = (props) => (
  <div>
    <button id="add" value=" + " onClick={props.handleOperator}>+</button>
    <button id="subtract" value=" - " onClick={props.handleOperator}>-</button>
    <button id="multiply" value=" * " onClick={props.handleOperator}>*</button>
    <button id="divide" value=" / " onClick={props.handleOperator}>/</button>
    <button id="clear" onClick={props.clear}>AC</button>
    <button id="equals" onClick={props.result}>=</button>
  </div>
);

export default OperatorButtons;