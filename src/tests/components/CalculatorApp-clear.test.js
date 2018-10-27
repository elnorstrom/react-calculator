import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

describe('"clear" handler in CalculatorApp', () => {
  
  let wrapper, instance, initialState;

  beforeEach(() => {
    wrapper = shallow(<CalculatorApp />);
    instance = wrapper.instance();
    initialState = wrapper.state();
  });

  test('clear should reset the state of the calculator', () => {
    const decimalAdded = ['0', '.'];
    expect(wrapper.state()).toEqual(initialState);
    instance.handleDecimal();
    expect(wrapper.state('input')).toEqual(decimalAdded);
    instance.clear();
    expect(wrapper.state()).toEqual(initialState);
  });

  test('clear should reset the state regardless of the current state', () => {
    const fixtureState = {
      input: ['1', '3', '+', '0.', '8', '-', '9'],
      result: ['4.800000000000001'],
      noDecimal: true
    };
    instance.setState(() => (fixtureState));
    expect(wrapper.state()).toEqual(fixtureState)
    instance.clear();
    expect(wrapper.state()).toEqual(initialState)
  });
});

