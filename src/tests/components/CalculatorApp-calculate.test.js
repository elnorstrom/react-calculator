import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('calculate', () => {
    const toFixedTen = 10;
    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<CalculatorApp />);
        instance = wrapper.instance();
    });

    test('It should return the correct result', () => {
        const testState = {
            currentNumber: '21',
            previousNumber: '63',
            operator: '-',
        };

        instance.setState(testState);
        expect(wrapper.state()).toEqual(testState);

        let expectedResult =
            parseFloat(testState.previousNumber) -
            parseFloat(testState.currentNumber);

        expectedResult = parseFloat(
            expectedResult.toFixed(toFixedTen)
        ).toString();

        const result = instance.calculate();

        expect(expectedResult).toEqual(result);
    });

    test('It should handle floating points correctly', () => {
        const testState = {
            currentNumber: '33094.1094',
            previousNumber: '03.1034134',
            operator: '*',
        };

        instance.setState(testState);
        expect(wrapper.state()).toEqual(testState);

        let expectedResult =
            parseFloat(testState.previousNumber) *
            parseFloat(testState.currentNumber);

        expectedResult = parseFloat(
            expectedResult.toFixed(toFixedTen)
        ).toString();

        const result = instance.calculate();

        expect(expectedResult).toEqual(result);
    });

    test('It should handle negative numbers', () => {
        const testState = {
            currentNumber: '-1094.031',
            previousNumber: '-0.2124',
            operator: '/',
        };

        instance.setState(testState);
        expect(wrapper.state()).toEqual(testState);

        let expectedResult =
            parseFloat(testState.previousNumber) /
            parseFloat(testState.currentNumber);

        expectedResult = parseFloat(
            expectedResult.toFixed(toFixedTen)
        ).toString();

        const result = instance.calculate();

        expect(expectedResult).toEqual(result);
    });

    test('It should return the correct result (external reference)', () => {
        const testState = {
            currentNumber: '3829141',
            previousNumber: '74987592',
            operator: '+',
        };

        instance.setState(testState);
        expect(wrapper.state()).toEqual(testState);

        const expectedResult = '78816733';

        const result = instance.calculate();

        expect(expectedResult).toEqual(result);
    });

    test('It should handle floating points correctly (external reference)', () => {
        const testState = {
            currentNumber: '3.0978',
            previousNumber: '1.0368',
            operator: '-',
        };

        instance.setState(testState);
        expect(wrapper.state()).toEqual(testState);

        const expectedResult = '-2.061';
        const result = instance.calculate();

        expect(expectedResult).toEqual(result);
    });

    test('It should handle negative numbers (external reference)', () => {
        const testState = {
            currentNumber: '-33.94029',
            previousNumber: '-42.6275',
            operator: '/',
        };

        instance.setState(testState);
        expect(wrapper.state()).toEqual(testState);

        const expectedResult = '1.2559556798';
        const result = instance.calculate();

        expect(expectedResult).toEqual(result);
    });

    test('It should handle larger numbers (external reference)', () => {
        const testState = {
            currentNumber: '8729837982734',
            previousNumber: '9872349872340',
            operator: '*',
        };

        instance.setState(testState);
        expect(wrapper.state()).toEqual(testState);

        const expectedResult = '8.61840148943929e+25';
        const result = instance.calculate();

        console.log(result, expectedResult);

        expect(expectedResult).toEqual(result);
    });
});
