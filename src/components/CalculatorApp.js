import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Display from './Display';
import OperatorButtons from './OperatorButtons';
import { OPERATORS, DECIMAL } from '../consts/operators';

export default class CalculatorApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleOperator = this.handleOperator.bind(this);
        this.setOperator = this.updateOperator.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.updateCurrentNumber = this.updateCurrentNumber.bind(this);
        this.result = this.result.bind(this);
        this.clear = this.clear.bind(this);

        this.state = {
            currentNumber: '0',
            previousNumber: '',
            operator: undefined,
        };
    }

    handleOperator(e) {
        const operator = e.target.value;

        console.log(this.state.currentNumber);
        if (!this.state.currentNumber) {
            return;
        }

        if (this.state.previousNumber !== '') {
            const result = this.calculate();

            this.setState(
                () => ({
                    currentNumber: result,
                    operator: undefined,
                    previousNumber: '',
                }),
                () => {
                    this.updateOperator(operator);
                }
            );
        } else {
            this.updateOperator(operator);
        }
    }

    updateOperator(operator) {
        this.setState(() => ({
            operator,
            previousNumber: this.state.currentNumber,
            currentNumber: '',
        }));
    }

    handleDecimal() {
        let newNumber = DECIMAL;

        if (this.state.currentNumber.includes(DECIMAL)) {
            return;
        }

        if (!this.state.currentNumber || this.state.currentNumber === '0') {
            newNumber = '0.';
        } else {
            newNumber = this.state.currentNumber.toString() + newNumber;
        }

        this.updateCurrentNumber(newNumber);
    }

    handleNumber(e) {
        let inputNumber = e.target.value.toString();
        let newNumber = '';

        if (this.state.currentNumber === '0') {
            newNumber = inputNumber;
        } else {
            newNumber = this.state.currentNumber.toString() + inputNumber;
        }

        this.updateCurrentNumber(newNumber);
    }

    updateCurrentNumber(newNumber) {
        this.setState(() => ({
            currentNumber: newNumber,
        }));
    }

    result() {
        const result = this.calculate();

        this.setState(() => ({
            currentNumber: result,
            operator: undefined,
            previousNumber: '',
        }));
    }

    calculate() {
        let result;
        const previous = parseFloat(this.state.previousNumber);
        const current = parseFloat(this.state.currentNumber);

        if (isNaN(previous) || isNaN(current)) {
            return;
        }

        switch (this.state.operator) {
            case OPERATORS.ADD:
                result = previous + current;
                break;
            case OPERATORS.SUBTRACT:
                result = previous - current;
                break;
            case OPERATORS.MULTIPLY:
                result = previous * current;
                break;
            case OPERATORS.DIVIDE:
                result = previous / current;
                break;
            default:
                return;
        }

        return parseFloat(result.toFixed(10)).toString();
    }

    clear() {
        this.setState(() => ({
            currentNumber: '0',
            previousNumber: '',
            operator: undefined,
        }));
    }

    render() {
        return (
            <div className="calculator-app">
                <Header />
                <div className="calculator">
                    <div className="display-container">
                        <Display
                            previous={this.state.previousNumber}
                            current={this.state.currentNumber}
                            operator={this.state.operator}
                        />
                    </div>
                    <main>
                        <OperatorButtons
                            handleOperator={this.handleOperator}
                            clear={this.clear}
                            result={this.result}
                            handleNumber={this.handleNumber}
                            handleDecimal={this.handleDecimal}
                        />
                    </main>
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}
