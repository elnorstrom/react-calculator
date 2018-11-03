import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('handleNumber', () => {

  const initialInputState = ['0'];
  const input = 'input';
  const value = '7';
  const argumentForHandleNumber = { target: { value } };
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<CalculatorApp />);
    instance = wrapper.instance();
  })

  test('It should add the correct number to the state input', () => {
    const endsWithNumber = { input: ['2'] }
    const result = ['2', '7'];
    wrapper.setState(() => (endsWithNumber))
    expect(wrapper.state(input)).toEqual(endsWithNumber.input);
    instance.handleNumber(argumentForHandleNumber);
    expect(wrapper.state(input)).toEqual(result);
  });

  test('It should replace the initial zero in the state input', () => {
    expect(wrapper.state(input)).toEqual(initialInputState);
    const result = ['7'];
    instance.handleNumber(argumentForHandleNumber);
    expect(wrapper.state(input)).toEqual(result);
  });

  test('It should replace a zero after an operator in the state input', () => {
    const endsWithOperator = { input: ['2', '+', '0'] }
    const result = ['2', '+', '7'];
    wrapper.setState(() => (endsWithOperator))
    instance.handleNumber(argumentForHandleNumber);
    expect(wrapper.state(input)).toEqual(result);
  });
});
