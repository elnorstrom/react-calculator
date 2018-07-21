import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Display from './Display';
import OperatorButtons from './OperatorButtons';
import NumberButtons from './NumberButtons';

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
    let firstItem = this.state.input[0];
    let lastItem = this.state.input[this.state.input.length - 1];
    let currentArrayLength = this.state.input.length;
    let besginsWithMinus = /^\-/;
    const addOperator = () => {
      this.setState(() => ({
        input: this.state.input.concat(operator),
        noDecimal: true
      }));
    }
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
  };

  handleZero() {
    let lastItem = this.state.input[this.state.input.length - 1];
    let secondToLastItem = this.state.input[this.state.input.length - 2];
    let currentArrayLength = this.state.input.length;
    let firstResultItem = this.state.result[0];
    if (currentArrayLength === 1 && lastItem === '0') {
        return;
    }
    if (lastItem === '0' && secondToLastItem.match(this.regexOperators)) {
        return;
    } 
    if (firstResultItem !== '' && currentArrayLength === 1) {
      this.setState(() => ({
        input: ['0'],
        result: [''],
        noDecimal: true
      }));
    } else {
        this.setState(() => ({
          input: this.state.input.concat('0')
        }));
      }
  }

  handleNumber(e) {
    let inputNumber = e.target.value;
    let lastItem = this.state.input[this.state.input.length - 1];
    let secondToLastItem = this.state.input[this.state.input.length - 2];
    let currentArrayLength = this.state.input.length;
    let firstResultItem = this.state.result[0];
    console.log(firstResultItem);

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

    if (firstResultItem !== '' && currentArrayLength === 1) {
      this.setState(() => ({
        input: [inputNumber],
        result: [''],
        noDecimal: true
      }));
    }
  }

  result() {
    let lastIndex = this.state.input[this.state.input.length - 1];
    if (lastIndex.match(this.regexOperators)) {
      this.state.input.pop();
    }
    this.setState(() => {
      return (
        { 
          result: this.state.input.join('').toString() + " = " + eval(this.state.input.join('')).toString(),
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
        <div className="calculator-app">
          <div className="display-container">
            <Display
              result={this.state.result}
              input={this.state.input}
            />
          </div>
          <div>
            <OperatorButtons
              handleOperator={this.handleOperator}
              clear={this.clear}
              result={this.result}
              handleNumber={this.handleNumber}
              handleZero={this.handleZero}
              handleDecimal={this.handleDecimal}
            />
          </div>
        </div>
        <button onClick={this.logState.bind(this)}>logState</button>
      </div>
    );
  }
}
