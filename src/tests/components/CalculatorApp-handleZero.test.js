import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('handleZero', () => {

  const initialInputState = ['0'];
  const input = 'input';
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<CalculatorApp />);
    instance = wrapper.instance();
  });

  test('It should not add a zero to the default input state', () => {
    expect(wrapper.state(input)).toEqual(initialInputState);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(initialInputState);
  });

  test('It should add a zero if the state input starts with number other than zero', () => {
    const inputEndsWithNumber = { input: ['1']}
    const result = ['1', '0'];
    instance.setState(() => (inputEndsWithNumber))
    expect(wrapper.state(input)).toEqual(inputEndsWithNumber.input);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });

  test('It should add a zero if the state input last index is an operator', () => {
    const inputEndsWithOperator = { input: ['+']}
    const result = ['+', '0'];
    instance.setState(() => (inputEndsWithOperator));
    expect(wrapper.state(input)).toEqual(inputEndsWithOperator.input);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });

  test('It should not add a zero if the state input last index is a zero, preceeded by an operator', () => {
    const result = ['+', '0'];
    const inputWithZeroAfterOperator = { input: result}
    instance.setState(() => (inputWithZeroAfterOperator));
    expect(wrapper.state(input)).toEqual(result);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });

  test('It should add a zero to the state input if a decimal have been added', () => {
    const inputWithDecimal = { input: ['0', '.']}
    const result = ['0', '.', '0'];
    instance.setState(() => (inputWithDecimal));
    expect(wrapper.state(input)).toEqual(inputWithDecimal.input);
    instance.handleZero();
    expect(wrapper.state(input)).toEqual(result);
  });
});
