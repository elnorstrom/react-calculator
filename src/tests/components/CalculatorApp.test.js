import React from 'react';
import { shallow } from 'enzyme';
import CalculatorApp from '../../components/CalculatorApp';

test('It should render CalculatorApp correctly', () => {
  const wrapper = shallow(<CalculatorApp />);
  expect(wrapper).toMatchSnapshot();
});

