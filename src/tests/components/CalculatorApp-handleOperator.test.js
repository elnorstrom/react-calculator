import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('handleOperator', () => {
  
  
  const initialInputState = ['0'];
  const input = 'input';
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<CalculatorApp />);
    instance = wrapper.instance();
  });

  test('It should add the correct operator to the input in state', () => {
    const result = ['0', ' + '];
    const value = ' + ';
    const argumentForHandleOperator = { target: { value } };
    expect(wrapper.state('input')).toEqual(initialInputState);
    instance.handleOperator(argumentForHandleOperator);
    expect(wrapper.state('input')).toEqual(result);
  });

  test('It should replace the last item in state input if that item is an operator', () => {
    const result = ['0', ' - '];
    const value = ' - ';
    const argumentForHandleOperator = { target: { value } };
    const endsWithPlus = { input: ['0', ' + ']};
    wrapper.setState(() => (endsWithPlus))
    expect(wrapper.state(input)).toEqual(endsWithPlus.input);
    instance.handleOperator(argumentForHandleOperator);
    instance.handleOperator(argumentForHandleOperator);
    expect(wrapper.state(input)).toEqual(result);
  });
});
