'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'header' },
    _react2.default.createElement(
      'h1',
      { className: 'header__title' },
      'Calculator'
    ),
    _react2.default.createElement(
      'h2',
      { className: 'header__subtitle' },
      'Numbers...numbers...'
    )
  );
};

exports.default = Header;