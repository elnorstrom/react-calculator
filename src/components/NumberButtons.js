import React from 'react';
import PropTypes from 'prop-types';

const NumberButtons = ({ handleNumber, handleDecimal }) => (
    <div className="number-buttons">
        <button id="seven" value="7" onClick={handleNumber}>
            7
        </button>
        <button id="eight" value="8" onClick={handleNumber}>
            8
        </button>
        <button id="nine" value="9" onClick={handleNumber}>
            9
        </button>
        <button id="four" value="4" onClick={handleNumber}>
            4
        </button>
        <button id="five" value="5" onClick={handleNumber}>
            5
        </button>
        <button id="six" value="6" onClick={handleNumber}>
            6
        </button>
        <button id="one" value="1" onClick={handleNumber}>
            1
        </button>
        <button id="two" value="2" onClick={handleNumber}>
            2
        </button>
        <button id="three" value="3" onClick={handleNumber}>
            3
        </button>
        <button
            id="zero"
            value="0"
            className="zero-button"
            onClick={handleNumber}
        >
            0
        </button>
        <button id="decimal" value="." onClick={handleDecimal}>
            .
        </button>
    </div>
);

NumberButtons.propTypes = {
    handleNumber: PropTypes.func.isRequired,
    handleDecimal: PropTypes.func.isRequired,
};

export default NumberButtons;
