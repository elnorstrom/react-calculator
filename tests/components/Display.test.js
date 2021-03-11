"use strict";

var _react = _interopRequireDefault(require("react"));

var _Display = _interopRequireDefault(require("../../components/Display"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('It should render the empty Display correctly', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Display["default"], null));
  expect(wrapper).toMatchSnapshot();
});
test('It should render input correctly', function () {
  var input = ['1', '3', '+', '0'];
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Display["default"], {
    input: input
  }));
  expect(wrapper).toMatchSnapshot();
});
test('It should render result correctly', function () {
  var result = ['53424.00912'];
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_Display["default"], {
    result: result
  }));
  expect(wrapper).toMatchSnapshot();
});