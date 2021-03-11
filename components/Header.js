"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "header__title"
  }, "Calculator"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "header__subtitle"
  }, "Numbers...numbers..."));
};

var _default = Header;
exports["default"] = _default;