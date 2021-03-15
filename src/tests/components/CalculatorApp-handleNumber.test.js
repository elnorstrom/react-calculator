import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('handleNumber', () => {
    const initialCurrentNumberState = '0';
    const currentNumber = 'currentNumber';
    const value = '7';
    const argumentForHandleNumber = { target: { value } };
    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<CalculatorApp />);
        instance = wrapper.instance();
    });

    test('It should add the correct number to the state currentNumber', () => {
        expect(wrapper.state(currentNumber)).toEqual(initialCurrentNumberState);
        const endsWithNumber = { currentNumber: '2' };
        const result = '27';
        wrapper.setState(() => endsWithNumber);

        expect(wrapper.state(currentNumber)).toEqual(
            endsWithNumber.currentNumber
        );

        instance.handleNumber(argumentForHandleNumber);

        expect(wrapper.state(currentNumber)).toEqual(result);
    });

    test('It should replace the initial zero in the state input', () => {
        expect(wrapper.state(currentNumber)).toEqual(initialCurrentNumberState);
        const result = '7';
        instance.handleNumber(argumentForHandleNumber);
        expect(wrapper.state(currentNumber)).toEqual(result);
    });
});
