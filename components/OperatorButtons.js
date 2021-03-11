"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NumberButtons = _interopRequireDefault(require("./NumberButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OperatorButtons = function OperatorButtons(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "operator-buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "operator-buttons__ac-button",
    id: "clear",
    onClick: props.clear
  }, "AC"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "divide",
    value: " / ",
    onClick: props.handleOperator
  }, "/"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "multiply",
    value: " * ",
    onClick: props.handleOperator
  }, "*"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "subtract",
    value: " - ",
    onClick: props.handleOperator
  }, "-"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "add",
    value: " + ",
    onClick: props.handleOperator
  }, "+"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "operator-buttons__number-section"
  }, /*#__PURE__*/_react["default"].createElement(_NumberButtons["default"], {
    handleNumber: props.handleNumber,
    handleZero: props.handleZero,
    handleDecimal: props.handleDecimal
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "operator-buttons__result-button",
    id: "equals",
    onClick: props.result
  }, "="));
};

var _default = OperatorButtons;
exports["default"] = _default;