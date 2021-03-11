"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CalculatorApp = _interopRequireDefault(require("../../components/CalculatorApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('handleNumber', function () {
  var initialInputState = ['0'];
  var input = 'input';
  var value = '7';
  var argumentForHandleNumber = {
    target: {
      value: value
    }
  };
  var wrapper, instance;
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_CalculatorApp["default"], null));
    instance = wrapper.instance();
  });
  test('It should add the correct number to the state input', function () {
    var endsWithNumber = {
      input: ['2']
    };
    var result = ['2', '7'];
    wrapper.setState(function () {
      return endsWithNumber;
    });
    expect(wrapper.state(input)).toEqual(endsWithNumber.input);
    instance.handleNumber(argumentForHandleNumber);
    expect(wrapper.state(input)).toEqual(result);
  });
  test('It should replace the initial zero in the state input', function () {
    expect(wrapper.state(input)).toEqual(initialInputState);
    var result = ['7'];
    instance.handleNumber(argumentForHandleNumber);
    expect(wrapper.state(input)).toEqual(result);
  });
  test('It should replace a zero after an operator in the state input', function () {
    var endsWithOperator = {
      input: ['2', '+', '0']
    };
    var result = ['2', '+', '7'];
    wrapper.setState(function () {
      return endsWithOperator;
    });
    instance.handleNumber(argumentForHandleNumber);
    expect(wrapper.state(input)).toEqual(result);
  });
});