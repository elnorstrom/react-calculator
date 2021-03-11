"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _CalculatorApp = _interopRequireDefault(require("./components/CalculatorApp"));

require("normalize.css/normalize.css");

require("./styles/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_CalculatorApp["default"], null), document.getElementById('app'));

module.hot.accept();