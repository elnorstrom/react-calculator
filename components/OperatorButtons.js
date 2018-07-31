"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _NumberButtons = require("./NumberButtons");

var _NumberButtons2 = _interopRequireDefault(_NumberButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OperatorButtons = function OperatorButtons(props) {
  return _react2.default.createElement(
    "div",
    { className: "operator-buttons" },
    _react2.default.createElement(
      "button",
      { className: "operator-buttons__ac-button", id: "clear", onClick: props.clear },
      "AC"
    ),
    _react2.default.createElement(
      "button",
      { id: "divide", value: " / ", onClick: props.handleOperator },
      "/"
    ),
    _react2.default.createElement(
      "button",
      { id: "multiply", value: " * ", onClick: props.handleOperator },
      "*"
    ),
    _react2.default.createElement(
      "button",
      { id: "subtract", value: " - ", onClick: props.handleOperator },
      "-"
    ),
    _react2.default.createElement(
      "button",
      { id: "add", value: " + ", onClick: props.handleOperator },
      "+"
    ),
    _react2.default.createElement(
      "div",
      { className: "operator-buttons__number-section" },
      _react2.default.createElement(_NumberButtons2.default, {
        handleNumber: props.handleNumber,
        handleZero: props.handleZero,
        handleDecimal: props.handleDecimal
      })
    ),
    _react2.default.createElement(
      "button",
      { className: "operator-buttons__result-button", id: "equals", onClick: props.result },
      "="
    )
  );
};

exports.default = OperatorButtons;