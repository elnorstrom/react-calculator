import React from 'react';
import Header from './Header';
import Display from './Display';
import OperatorButtons from './OperatorButtons';
import { OPERATORS } from '../consts/operators';

export default class CalculatorApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleOperator = this.handleOperator.bind(this);
        this.setOperator = this.updateOperator.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.result = this.result.bind(this);
        this.clear = this.clear.bind(this);

        this.state = {
            currentNumber: '',
            previousNumber: '',
            operator: undefined,
        };
    }

    handleOperator(e) {
        const operator = e.target.value;

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

    handleNumber(e) {
        let inputNumber = e.target.value.toString();

        if (inputNumber === '.') {
            if (this.state.currentNumber.includes('.')) {
                return;
            }

            if (!this.state.currentNumber) {
                inputNumber = '0.';
            }
        }

        if (inputNumber === '0' && this.state.currentNumber === '0') {
            return;
        }

        this.setState(() => ({
            currentNumber: this.state.currentNumber.toString() + inputNumber,
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

        return result;
    }

    clear() {
        this.setState(() => ({
            currentNumber: '',
            previousNumber: '',
            operator: undefined,
        }));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="calculator-app">
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
                        />
                    </main>
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}
