"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = _interopRequireDefault(require("./Header"));

var _Display = _interopRequireDefault(require("./Display"));

var _OperatorButtons = _interopRequireDefault(require("./OperatorButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CalculatorApp = /*#__PURE__*/function (_React$Component) {
  _inherits(CalculatorApp, _React$Component);

  var _super = _createSuper(CalculatorApp);

  function CalculatorApp(props) {
    var _this;

    _classCallCheck(this, CalculatorApp);

    _this = _super.call(this, props);
    _this.handleOperator = _this.handleOperator.bind(_assertThisInitialized(_this));
    _this.handleZero = _this.handleZero.bind(_assertThisInitialized(_this));
    _this.handleNumber = _this.handleNumber.bind(_assertThisInitialized(_this));
    _this.handleDecimal = _this.handleDecimal.bind(_assertThisInitialized(_this));
    _this.result = _this.result.bind(_assertThisInitialized(_this));
    _this.clear = _this.clear.bind(_assertThisInitialized(_this));
    _this.regexOperators = /[\+\-\*\/]/g;
    _this.state = {
      input: ['0'],
      result: [''],
      noDecimal: true
    };
    return _this;
  }

  _createClass(CalculatorApp, [{
    key: "handleDecimal",
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
    key: "handleOperator",
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
      }

      if (!this.regexOperators.test(lastItem)) {
        addOperator();
      }
    }
  }, {
    key: "handleZero",
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
    key: "handleNumber",
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
    key: "result",
    value: function result() {
      var _this6 = this;

      var lastIndex = this.state.input[this.state.input.length - 1];

      if (lastIndex.match(this.regexOperators)) {
        this.state.input.pop();
      }

      this.setState(function () {
        return {
          result: _this6.state.input.join('').toString() + " = " + eval(_this6.state.input.join('')).toString(),
          input: [eval(_this6.state.input.join('')).toString()],
          noDecimal: false
        };
      });
    }
  }, {
    key: "clear",
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
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "calculator-app"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "display-container"
      }, /*#__PURE__*/_react["default"].createElement(_Display["default"], {
        result: this.state.result,
        input: this.state.input
      })), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_OperatorButtons["default"], {
        handleOperator: this.handleOperator,
        clear: this.clear,
        result: this.result,
        handleNumber: this.handleNumber,
        handleZero: this.handleZero,
        handleDecimal: this.handleDecimal
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer"
      }));
    }
  }]);

  return CalculatorApp;
}(_react["default"].Component);

exports["default"] = CalculatorApp;
;