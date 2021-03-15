import React from 'react';
import PropTypes from 'prop-types';
import NumberButtons from './NumberButtons';
import { OPERATORS } from '../consts/operators';

const OperatorButtons = ({
    clear,
    handleOperator,
    handleNumber,
    handleDecimal,
    result,
}) => (
    <div className="operator-buttons">
        <button
            className="operator-buttons__ac-button"
            id="clear"
            onClick={clear}
        >
            AC
        </button>
        <button id="divide" value={OPERATORS.DIVIDE} onClick={handleOperator}>
            {OPERATORS.DIVIDE}
        </button>
        <button
            id="multiply"
            value={OPERATORS.MULTIPLY}
            onClick={handleOperator}
        >
            {OPERATORS.MULTIPLY}
        </button>
        <button
            id="subtract"
            value={OPERATORS.SUBTRACT}
            onClick={handleOperator}
        >
            {OPERATORS.SUBTRACT}
        </button>
        <button id="add" value={OPERATORS.ADD} onClick={handleOperator}>
            {OPERATORS.ADD}
        </button>
        <div className="operator-buttons__number-section">
            <NumberButtons
                handleNumber={handleNumber}
                handleDecimal={handleDecimal}
            />
        </div>
        <button
            className="operator-buttons__result-button"
            id="equals"
            onClick={result}
        >
            =
        </button>
    </div>
);

OperatorButtons.propTypes = {
    clear: PropTypes.func.isRequired,
    handleOperator: PropTypes.func.isRequired,
    handleNumber: PropTypes.func.isRequired,
    handleDecimal: PropTypes.func.isRequired,
    result: PropTypes.func.isRequired,
};

export default OperatorButtons;
