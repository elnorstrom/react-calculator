'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CalculatorApp = require('./components/CalculatorApp');

var _CalculatorApp2 = _interopRequireDefault(_CalculatorApp);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('heyhey');
console.log('boooo!');

_reactDom2.default.render(_react2.default.createElement(_CalculatorApp2.default, null), document.getElementById('app'));