"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NumberButtons = function NumberButtons(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "number-buttons"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    id: "seven",
    value: "7",
    onClick: props.handleNumber
  }, "7"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "eight",
    value: "8",
    onClick: props.handleNumber
  }, "8"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "nine",
    value: "9",
    onClick: props.handleNumber
  }, "9"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "four",
    value: "4",
    onClick: props.handleNumber
  }, "4"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "five",
    value: "5",
    onClick: props.handleNumber
  }, "5"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "six",
    value: "6",
    onClick: props.handleNumber
  }, "6"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "one",
    value: "1",
    onClick: props.handleNumber
  }, "1"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "two",
    value: "2",
    onClick: props.handleNumber
  }, "2"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "three",
    value: "3",
    onClick: props.handleNumber
  }, "3"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "zero",
    value: "0",
    className: "zero-button",
    onClick: props.handleZero
  }, "0"), /*#__PURE__*/_react["default"].createElement("button", {
    id: "decimal",
    value: ".",
    onClick: props.handleDecimal
  }, "."));
};

var _default = NumberButtons;
exports["default"] = _default;