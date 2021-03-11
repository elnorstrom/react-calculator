"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CalculatorApp = _interopRequireDefault(require("../../components/CalculatorApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('handleDecimal', function () {
  var wrapper, instance;
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_CalculatorApp["default"], null));
    instance = wrapper.instance();
  });
  test('handleDecimal should add a decimal if the last index of input state is a number', function () {
    var initialState = ['0'];
    var result = ['0', '.'];
    expect(wrapper.state('input')).toEqual(initialState);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
  });
  test('handleDecimal should add a zero and decimal if the last index of input is an operator', function () {
    var inputEndsWithOperator = {
      input: ['0', '+']
    };
    var initialState = inputEndsWithOperator.input;
    var result = ['0', '+', '0.'];
    wrapper.setState(function () {
      return inputEndsWithOperator;
    });
    expect(wrapper.state('input')).toEqual(initialState);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
  });
  test('handleDecimal should not add a decimal if the last index of input is a decimal', function () {
    var result = ['0', '.'];
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
  });
});