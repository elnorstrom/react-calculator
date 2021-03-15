import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('"clear" handler in CalculatorApp', () => {
    const currentNumber = 'currentNumber';
    let wrapper, instance, initialState;

    beforeEach(() => {
        wrapper = shallow(<CalculatorApp />);
        instance = wrapper.instance();
        initialState = wrapper.state();
    });

    test('clear should reset the state of the calculator', () => {
        const decimalAdded = '0.';

        expect(wrapper.state()).toEqual(initialState);

        instance.handleDecimal();
        expect(wrapper.state(currentNumber)).toEqual(decimalAdded);

        instance.clear();
        expect(wrapper.state()).toEqual(initialState);
    });

    test('clear should reset the state regardless of the current state', () => {
        const testStateOne = {
            currentNumber: '342.0134',
            previousNumber: '',
            operator: undefined,
        };

        const testStateTwo = {
            currentNumber: '',
            previousNumber: '-6287634.0192',
            operator: '*',
        };

        instance.setState(() => testStateOne);
        expect(wrapper.state()).toEqual(testStateOne);
        instance.clear();
        expect(wrapper.state()).toEqual(initialState);

        instance.setState(() => testStateTwo);
        expect(wrapper.state()).toEqual(testStateTwo);
        instance.clear();
        expect(wrapper.state()).toEqual(initialState);
    });
});
