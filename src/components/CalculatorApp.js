import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';


export default class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleZero = this.handleZero.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.result = this.result.bind(this);
    this.clear = this.clear.bind(this);
    this.regexOperators = /[\+\-\*\/]/g;
    this.state = {
      input: ['0'],
      result: [''],
      noDecimal: true
    }
  }

  handleDecimal() {
    let lastItemAsNumber = Number(this.state.input[this.state.input.length - 1]);
    let decimal = (Number.isNaN(lastItemAsNumber)) ? '0.' : '.';
    this.setState(() => {
      if (this.state.noDecimal) {
        return ({ 
          input: this.state.input.concat(decimal),
          noDecimal: false
        })
      }
    });
  };

  handleOperator(e) {
    let operator = e.target.value;
    let lastItem = this.state.input[this.state.input.length - 1];
    if (!lastItem.match(this.regexOperators)) {
      this.setState(() => ({
        input: this.state.input.concat(operator),
        noDecimal: true
      }));
    }
  };

  handleZero() {
    let lastItem = this.state.input[this.state.input.length - 1];
    let secondToLastItem = this.state.input[this.state.input.length - 2];
    let currentArrayLength = this.state.input.length;
    if (currentArrayLength === 1 && lastItem === '0') {
        return;
    }
    if (lastItem === '0' && secondToLastItem.match(this.regexOperators)) {
        return;
    }
    this.setState(() => ({
      input: this.state.input.concat('0')
    }));
  }

  handleNumber(e) {
    let inputNumber = e.target.value;
    let lastItem = this.state.input[this.state.input.length - 1];
    let secondToLastItem = this.state.input[this.state.input.length - 2];
    let currentArrayLength = this.state.input.length;
    if (currentArrayLength === 1 && lastItem === '0') {
      this.state.input.pop();
    }
    if (currentArrayLength > 1) {
      if (lastItem === '0' && secondToLastItem.match(this.regexOperators)) {
        this.state.input.pop();
      }
    }
    this.setState(() => ({
      input: this.state.input.concat(inputNumber)
    }));
  }

  result() {
    let lastIndex = this.state.input[this.state.input.length - 1];
    if (lastIndex.match(this.regexOperators)) {
      this.state.input.pop();
    }
    this.setState(() => {
      return (
        { 
          result: [eval(this.state.input.join('')).toString()],
          input: [eval(this.state.input.join('')).toString()],
          noDecimal: false
        }
      )
    });
  }

  clear() {
    this.setState(() => ({
      input: ['0'],
      result: [''],
      noDecimal: true
    }));
  };

  logState() {
    console.log(this.state.input);
    console.log(this.state.result);
  };

  render() { 
    return (
      <div>
      <Header />
        <div type="numbers">Result: {this.state.result}</div>
        <div id="display" type="numbers">{this.state.input}</div>
        <div>
          <button value=" + " onClick={this.handleOperator}>+</button>
          <button value=" - " onClick={this.handleOperator}>-</button>
          <button value=" * " onClick={this.handleOperator}>*</button>
          <button value=" / " onClick={this.handleOperator}>/</button>
          <button value="." id="decimal" onClick={this.handleDecimal}>.</button>
          <button id="clear" onClick={this.clear}>C</button>
          <button id="equals" onClick={this.result}>=</button>
        </div>
        <div>
          <button id="zero" value="0" onClick={this.handleZero}>0</button>
          <button id="one" value="1" onClick={this.handleNumber}>1</button>
          <button id="two" value="2" onClick={this.handleNumber}>2</button>
          <button id="three" value="3" onClick={this.handleNumber}>3</button>
          <button id="four" value="4" onClick={this.handleNumber}>4</button>
          <button id="five" value="5" onClick={this.handleNumber}>5</button>
          <button id="six" value="6" onClick={this.handleNumber}>6</button>
          <button id="seven" value="7" onClick={this.handleNumber}>7</button>
          <button id="eight" value="8" onClick={this.handleNumber}>8</button>
          <button id="nine" value="9" onClick={this.handleNumber}>9</button>
        </div>
        <button onClick={this.logState.bind(this)}>logState</button>
      </div>
    );
  }
}