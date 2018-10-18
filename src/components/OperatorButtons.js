import React from "react";
import NumberButtons from './NumberButtons';

const OperatorButtons = (props) => (
  <div className="operator-buttons">
    <button className="operator-buttons__ac-button" id="clear" onClick={props.clear}>AC</button>
    <button id="divide" value=" / " onClick={props.handleOperator}>/</button>
    <button id="multiply" value=" * " onClick={props.handleOperator}>*</button>
    <button id="subtract" value=" - " onClick={props.handleOperator}>-</button>
    <button id="add" value=" + " onClick={props.handleOperator}>+</button>
    <div className="operator-buttons__number-section">
      <NumberButtons
        handleNumber={props.handleNumber}
        handleZero={props.handleZero}
        handleDecimal={props.handleDecimal}
      />
    </div>
    <button className="operator-buttons__result-button" id="equals" onClick={props.result}>=</button>
 
  </div>
);

export default OperatorButtons;
