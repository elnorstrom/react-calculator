"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _OperatorButtons = require("./OperatorButtons");

var _OperatorButtons2 = _interopRequireDefault(_OperatorButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberButtons = function NumberButtons(props) {
  return _react2.default.createElement(
    "div",
    { className: "number-buttons" },
    _react2.default.createElement(
      "button",
      { id: "seven", value: "7", onClick: props.handleNumber },
      "7"
    ),
    _react2.default.createElement(
      "button",
      { id: "eight", value: "8", onClick: props.handleNumber },
      "8"
    ),
    _react2.default.createElement(
      "button",
      { id: "nine", value: "9", onClick: props.handleNumber },
      "9"
    ),
    _react2.default.createElement(
      "button",
      { id: "four", value: "4", onClick: props.handleNumber },
      "4"
    ),
    _react2.default.createElement(
      "button",
      { id: "five", value: "5", onClick: props.handleNumber },
      "5"
    ),
    _react2.default.createElement(
      "button",
      { id: "six", value: "6", onClick: props.handleNumber },
      "6"
    ),
    _react2.default.createElement(
      "button",
      { id: "one", value: "1", onClick: props.handleNumber },
      "1"
    ),
    _react2.default.createElement(
      "button",
      { id: "two", value: "2", onClick: props.handleNumber },
      "2"
    ),
    _react2.default.createElement(
      "button",
      { id: "three", value: "3", onClick: props.handleNumber },
      "3"
    ),
    _react2.default.createElement(
      "button",
      { id: "zero", value: "0", className: "zero-button", onClick: props.handleZero },
      "0"
    ),
    _react2.default.createElement(
      "button",
      { value: ".", id: "decimal", onClick: props.handleDecimal },
      "."
    )
  );
};

exports.default = NumberButtons;