import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('handleDecimal', () => {
    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<CalculatorApp />);
        instance = wrapper.instance();
    });

    test('handleDecimal should add a decimal to currentNumber', () => {
        const initialState = '0';
        const result = '0.';

        expect(wrapper.state('currentNumber')).toEqual(initialState);

        instance.handleDecimal();
        expect(wrapper.state('currentNumber')).toEqual(result);
    });

    test('handleDecimal should not add a decimal if the current value already contains a decimal', () => {
        const result = '0.';

        instance.handleDecimal();
        expect(wrapper.state('currentNumber')).toEqual(result);

        instance.handleDecimal();
        expect(wrapper.state('currentNumber')).toEqual(result);
    });
});
