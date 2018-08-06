import React from "react";
import ReactDOM from "react-dom";
import OperatorButtons from './OperatorButtons'

const NumberButtons = (props) => (
  <div className="number-buttons">
    <button id="seven" value="7" onClick={props.handleNumber}>7</button>  
    <button id="eight" value="8" onClick={props.handleNumber}>8</button>
    <button id="nine" value="9" onClick={props.handleNumber}>9</button>
    <button id="four" value="4" onClick={props.handleNumber}>4</button>
    <button id="five" value="5" onClick={props.handleNumber}>5</button>
    <button id="six" value="6" onClick={props.handleNumber}>6</button>
    <button id="one" value="1" onClick={props.handleNumber}>1</button>
    <button id="two" value="2" onClick={props.handleNumber}>2</button>
    <button id="three" value="3" onClick={props.handleNumber}>3</button>
    <button id="zero" value="0" className="zero-button" onClick={props.handleZero}>0</button>
    <button value="." id="decimal" onClick={props.handleDecimal}>.</button>
  </div>
);

export default NumberButtons;