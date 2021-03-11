"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CalculatorApp = _interopRequireDefault(require("../../components/CalculatorApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('handleZero', function () {
  var initialInputState = ['0'];
  var input = 'input';
  var wrapper, instance;
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_CalculatorApp["default"], null));
    instance = wrapper.instance();
  });
  test('It should not add a zero to the default input state', function () {
    expect(wrapper.state(input)).toEqual(initialInputState);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(initialInputState);
  });
  test('It should add a zero if the state input starts with number other than zero', function () {
    var inputEndsWithNumber = {
      input: ['1']
    };
    var result = ['1', '0'];
    instance.setState(function () {
      return inputEndsWithNumber;
    });
    expect(wrapper.state(input)).toEqual(inputEndsWithNumber.input);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });
  test('It should add a zero if the state input last index is an operator', function () {
    var inputEndsWithOperator = {
      input: ['+']
    };
    var result = ['+', '0'];
    instance.setState(function () {
      return inputEndsWithOperator;
    });
    expect(wrapper.state(input)).toEqual(inputEndsWithOperator.input);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });
  test('It should not add a zero if the state input last index is a zero, preceeded by an operator', function () {
    var result = ['+', '0'];
    var inputWithZeroAfterOperator = {
      input: result
    };
    instance.setState(function () {
      return inputWithZeroAfterOperator;
    });
    expect(wrapper.state(input)).toEqual(result);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });
  test('It should add a zero to the state input if a decimal have been added', function () {
    var inputWithDecimal = {
      input: ['0', '.']
    };
    var result = ['0', '.', '0'];
    instance.setState(function () {
      return inputWithDecimal;
    });
    expect(wrapper.state(input)).toEqual(inputWithDecimal.input);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });
});