import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';
import { OPERATORS } from '../../consts/operators';

describe('handleOperator', () => {
    const initialOperatorState = undefined;
    const operator = 'operator';
    let wrapper, instance;

    beforeEach(() => {
        wrapper = shallow(<CalculatorApp />);
        instance = wrapper.instance();
    });

    test('It should add the correct operator to the operator state', () => {
        const result = OPERATORS.ADD;
        const value = '+';
        const argumentForHandleOperator = { target: { value } };

        expect(wrapper.state('operator')).toEqual(initialOperatorState);

        instance.handleOperator(argumentForHandleOperator);
        expect(wrapper.state('operator')).toEqual(result);
    });

    test('It should not add a operator if one is already selected', () => {
        const result = OPERATORS.ADD;
        const subtractOperator = '-';
        const addAdditionOperator = { target: { value: result } };
        const addSubtractOperator = { target: { value: subtractOperator } };

        expect(wrapper.state(operator)).toEqual(initialOperatorState);

        instance.handleOperator(addAdditionOperator);
        expect(wrapper.state(operator)).toEqual(result);

        instance.handleOperator(addSubtractOperator);
        expect(wrapper.state(operator)).toEqual(result);
    });
});
