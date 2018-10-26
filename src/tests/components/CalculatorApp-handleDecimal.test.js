import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('handleDecimal', () => {
  
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<CalculatorApp />);
    instance = wrapper.instance();
  });

  test('handleDecimal should add a decimal if the last index of input state is a number', () => {
    const initialState = ['0'];
    const result = ['0', '.'];
    expect(wrapper.state('input')).toEqual(initialState);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
  });

  test('handleDecimal should add a zero and decimal if the last index of input is an operator', () => {
    const inputEndsWithOperator = { input: ['0', '+']};
    const initialState = inputEndsWithOperator.input;
    const result = ['0', '+', '0.'];
    wrapper.setState(() => (inputEndsWithOperator));
    expect(wrapper.state('input')).toEqual(initialState);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
  });

  test('handleDecimal should not add a decimal if the last index of input is a decimal', () => {
    const result = ['0', '.'];
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(result);
  });
});
