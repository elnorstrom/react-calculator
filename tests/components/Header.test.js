"use strict";

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("../../components/Header"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('It should render Header correctly', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Header["default"], null));
  expect(wrapper).toMatchSnapshot();
});