"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CalculatorApp = _interopRequireDefault(require("../../components/CalculatorApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('handleOperator', function () {
  var initialInputState = ['0'];
  var input = 'input';
  var wrapper, instance;
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_CalculatorApp["default"], null));
    instance = wrapper.instance();
  });
  test('It should add the correct operator to the input in state', function () {
    var result = ['0', ' + '];
    var value = ' + ';
    var argumentForHandleOperator = {
      target: {
        value: value
      }
    };
    expect(wrapper.state('input')).toEqual(initialInputState);
    instance.handleOperator(argumentForHandleOperator);
    expect(wrapper.state('input')).toEqual(result);
  });
  test('It should replace the last item in state input if that item is an operator', function () {
    var result = ['0', ' - '];
    var value = ' - ';
    var argumentForHandleOperator = {
      target: {
        value: value
      }
    };
    var endsWithPlus = {
      input: ['0', ' + ']
    };
    wrapper.setState(function () {
      return endsWithPlus;
    });
    expect(wrapper.state(input)).toEqual(endsWithPlus.input);
    instance.handleOperator(argumentForHandleOperator);
    instance.handleOperator(argumentForHandleOperator);
    expect(wrapper.state(input)).toEqual(result);
  });
});