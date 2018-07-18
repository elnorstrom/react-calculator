'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from "./components/Header.js";
console.log('heyhey');
function boogie() {
  return console.log('face');
}
boogie();
console.log(testing);
var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Welcome!'
        )
      );
    }
  }]);

  return Header;
}(React.Component);

;

var DoStuff = function (_React$Component2) {
  _inherits(DoStuff, _React$Component2);

  function DoStuff(props) {
    _classCallCheck(this, DoStuff);

    var _this2 = _possibleConstructorReturn(this, (DoStuff.__proto__ || Object.getPrototypeOf(DoStuff)).call(this, props));

    _this2.buttonClick = _this2.buttonClick.bind(_this2);
    _this2.showStuff = _this2.showStuff.bind(_this2);
    _this2.state = {
      counter: 0,
      visibility: false
    };
    return _this2;
  }

  _createClass(DoStuff, [{
    key: 'buttonClick',
    value: function buttonClick() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: 'clearCount',
    value: function clearCount() {
      this.setState(function () {
        return { counter: 0 };
      });
    }
  }, {
    key: 'showStuff',
    value: function showStuff() {
      console.log(this.state.visibility);
      this.setState(function (prevState) {
        return { visibility: !prevState.visibility };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.buttonClick },
          'Click ME!'
        ),
        React.createElement(
          'div',
          null,
          'Counter: ',
          this.state.counter
        ),
        React.createElement(
          'button',
          { id: 'clearCount', onClick: this.clearCount },
          'Clear'
        ),
        React.createElement(
          'button',
          { onClick: this.showStuff.bind(this) },
          'Show stuff'
        ),
        this.state.visibility && React.createElement(
          'p',
          null,
          'Here I am!'
        )
      );
    }
  }]);

  return DoStuff;
}(React.Component);

;

var App = React.createElement(
  'div',
  null,
  React.createElement(Header, null),
  React.createElement(DoStuff, null),
  React.createElement(
    'p',
    null,
    'Boogie!.'
  )
);

ReactDOM.render(App, document.getElementById('app'));
