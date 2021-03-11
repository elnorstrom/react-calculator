"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CalculatorApp = _interopRequireDefault(require("../../components/CalculatorApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('"clear" handler in CalculatorApp', function () {
  var wrapper, instance, initialState;
  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_CalculatorApp["default"], null));
    instance = wrapper.instance();
    initialState = wrapper.state();
  });
  test('clear should reset the state of the calculator', function () {
    var decimalAdded = ['0', '.'];
    expect(wrapper.state()).toEqual(initialState);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(decimalAdded);
    instance.clear();
    expect(wrapper.state()).toEqual(initialState);
  });
  test('clear should reset the state regardless of the current state', function () {
    var fixtureState = {
      input: ['1', '3', '+', '0.', '8', '-', '9'],
      result: ['4.800000000000001'],
      noDecimal: true
    };
    instance.setState(function () {
      return fixtureState;
    });
    expect(wrapper.state()).toEqual(fixtureState);
    instance.clear();
    expect(wrapper.state()).toEqual(initialState);
  });
});