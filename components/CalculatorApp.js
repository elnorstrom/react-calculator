'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

var _OperatorButtons = require('./OperatorButtons');

var _OperatorButtons2 = _interopRequireDefault(_OperatorButtons);

var _NumberButtons = require('./NumberButtons');

var _NumberButtons2 = _interopRequireDefault(_NumberButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalculatorApp = function (_React$Component) {
  _inherits(CalculatorApp, _React$Component);

  function CalculatorApp(props) {
    _classCallCheck(this, CalculatorApp);

    var _this = _possibleConstructorReturn(this, (CalculatorApp.__proto__ || Object.getPrototypeOf(CalculatorApp)).call(this, props));

    _this.handleOperator = _this.handleOperator.bind(_this);
    _this.handleZero = _this.handleZero.bind(_this);
    _this.handleNumber = _this.handleNumber.bind(_this);
    _this.handleDecimal = _this.handleDecimal.bind(_this);
    _this.result = _this.result.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.regexOperators = /[\+\-\*\/]/g;
    _this.state = {
      input: ['0'],
      result: [''],
      noDecimal: true
    };
    return _this;
  }

  _createClass(CalculatorApp, [{
    key: 'handleDecimal',
    value: function handleDecimal() {
      var _this2 = this;

      var lastItemAsNumber = Number(this.state.input[this.state.input.length - 1]);
      var decimal = Number.isNaN(lastItemAsNumber) ? '0.' : '.';
      this.setState(function () {
        if (_this2.state.noDecimal) {
          return {
            input: _this2.state.input.concat(decimal),
            noDecimal: false
          };
        }
      });
    }
  }, {
    key: 'handleOperator',
    value: function handleOperator(e) {
      var _this3 = this;

      var operator = e.target.value;
      var firstItem = this.state.input[0];
      var lastItem = this.state.input[this.state.input.length - 1];
      var currentArrayLength = this.state.input.length;
      var besginsWithMinus = /^\-/;
      var addOperator = function addOperator() {
        _this3.setState(function () {
          return {
            input: _this3.state.input.concat(operator),
            noDecimal: true
          };
        });
      };
      if (currentArrayLength === 1 && besginsWithMinus.test(firstItem)) {
        addOperator();
      }
      if (currentArrayLength > 1 && this.regexOperators.test(lastItem)) {
        this.state.input.pop();
        addOperator();
      }
      if (!this.regexOperators.test(lastItem)) {
        addOperator();
      }
    }
  }, {
    key: 'handleZero',
    value: function handleZero() {
      var _this4 = this;

      var lastItem = this.state.input[this.state.input.length - 1];
      var secondToLastItem = this.state.input[this.state.input.length - 2];
      var currentArrayLength = this.state.input.length;
      var firstResultItem = this.state.result[0];
      if (currentArrayLength === 1 && lastItem === '0') {
        return;
      }
      if (lastItem === '0' && secondToLastItem.match(this.regexOperators)) {
        return;
      }
      if (firstResultItem !== '' && currentArrayLength === 1) {
        this.setState(function () {
          return {
            input: ['0'],
            result: [''],
            noDecimal: true
          };
        });
      } else {
        this.setState(function () {
          return {
            input: _this4.state.input.concat('0')
          };
        });
      }
    }
  }, {
    key: 'handleNumber',
    value: function handleNumber(e) {
      var _this5 = this;

      var inputNumber = e.target.value;
      var lastItem = this.state.input[this.state.input.length - 1];
      var secondToLastItem = this.state.input[this.state.input.length - 2];
      var currentArrayLength = this.state.input.length;
      var firstResultItem = this.state.result[0];
      console.log(firstResultItem);

      if (currentArrayLength === 1 && lastItem === '0') {
        this.state.input.pop();
      }
      if (currentArrayLength > 1) {
        if (lastItem === '0' && secondToLastItem.match(this.regexOperators)) {
          this.state.input.pop();
        }
      }
      this.setState(function () {
        return {
          input: _this5.state.input.concat(inputNumber)
        };
      });

      if (firstResultItem !== '' && currentArrayLength === 1) {
        this.setState(function () {
          return {
            input: [inputNumber],
            result: [''],
            noDecimal: true
          };
        });
      }
    }
  }, {
    key: 'result',
    value: function result() {
      var _this6 = this;

      var lastIndex = this.state.input[this.state.input.length - 1];
      if (lastIndex.match(this.regexOperators)) {
        this.state.input.pop();
      }
      this.setState(function (prevState) {
        return {
          result: _this6.state.input.join('').toString() + " = " + eval(_this6.state.input.join('')).toString(),
          input: [eval(_this6.state.input.join('')).toString()],
          noDecimal: false
        };
      });
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setState(function () {
        return {
          input: ['0'],
          result: [''],
          noDecimal: true
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'calculator-app' },
          _react2.default.createElement(
            'div',
            { className: 'display-container' },
            _react2.default.createElement(_Display2.default, {
              result: this.state.result,
              input: this.state.input
            })
          ),
          _react2.default.createElement(
            'main',
            null,
            _react2.default.createElement(_OperatorButtons2.default, {
              handleOperator: this.handleOperator,
              clear: this.clear,
              result: this.result,
              handleNumber: this.handleNumber,
              handleZero: this.handleZero,
              handleDecimal: this.handleDecimal
            })
          )
        ),
        _react2.default.createElement('div', { className: 'footer' })
      );
    }
  }]);

  return CalculatorApp;
}(_react2.default.Component);

exports.default = CalculatorApp;