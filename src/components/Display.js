import React from 'react';

const Display = (props) => (
    <div className="display">
        <div className="display-result">
            &nbsp;{props.previous} {props.operator}
        </div>
        <div className="display-numbers" id="display">
            {props.current}
        </div>
    </div>
);

export default Display;
