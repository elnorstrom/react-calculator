"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Display = function Display(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "display-result",
    type: "numbers"
  }, "\xA0", props.result), /*#__PURE__*/_react["default"].createElement("div", {
    className: "display-numbers",
    id: "display",
    type: "numbers"
  }, props.input));
};

var _default = Display;
exports["default"] = _default;