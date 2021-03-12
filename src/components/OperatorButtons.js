import React from 'react';
import NumberButtons from './NumberButtons';
import { OPERATORS } from '../consts/operators';

const OperatorButtons = (props) => (
    <div className="operator-buttons">
        <button
            className="operator-buttons__ac-button"
            id="clear"
            onClick={props.clear}
        >
            AC
        </button>
        <button
            id="divide"
            value={OPERATORS.DIVIDE}
            onClick={props.handleOperator}
        >
            {OPERATORS.DIVIDE}
        </button>
        <button
            id="multiply"
            value={OPERATORS.MULTIPLY}
            onClick={props.handleOperator}
        >
            {OPERATORS.MULTIPLY}
        </button>
        <button
            id="subtract"
            value={OPERATORS.SUBTRACT}
            onClick={props.handleOperator}
        >
            {OPERATORS.SUBTRACT}
        </button>
        <button id="add" value={OPERATORS.ADD} onClick={props.handleOperator}>
            {OPERATORS.ADD}
        </button>
        <div className="operator-buttons__number-section">
            <NumberButtons handleNumber={props.handleNumber} />
        </div>
        <button
            className="operator-buttons__result-button"
            id="equals"
            onClick={props.result}
        >
            =
        </button>
    </div>
);

export default OperatorButtons;
