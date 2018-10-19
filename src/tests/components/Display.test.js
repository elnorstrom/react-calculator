import React from 'react';
import Display from '../../components/Display';
import { shallow } from 'enzyme';

test('It should render the empty Display correctly', () => {
  const wrapper = shallow(<Display />);
  expect(wrapper).toMatchSnapshot();
});

test('It should render input correctly', () => {
  const input = ['1', '3', '+', '0'];
  const wrapper = shallow(<Display input={input}/>);
  expect(wrapper).toMatchSnapshot();
});

test('It should render result correctly', () => {
  const result = ['53424.00912'];
  const wrapper = shallow(<Display result={result}/>);
  expect(wrapper).toMatchSnapshot();
});
