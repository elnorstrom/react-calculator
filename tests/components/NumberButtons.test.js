"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _NumberButtons = _interopRequireDefault(require("../../components/NumberButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('It should render NumberButtons correctly', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_NumberButtons["default"], null));
  expect(wrapper).toMatchSnapshot();
});
test('It should trigger handleNumber on buttons 1 through 9', function () {
  var handleNumberSpy = jest.fn();
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_NumberButtons["default"], {
    handleNumber: handleNumberSpy
  }));
  wrapper.find('#three').simulate('click');
  wrapper.find('#eight').simulate('click');
  wrapper.find('#zero').simulate('click');
  wrapper.find('#decimal').simulate('click');
  expect(handleNumberSpy).toHaveBeenCalledTimes(2);
});