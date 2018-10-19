import React from 'react';
import { shallow } from 'enzyme';
import NumberButtons from '../../components/NumberButtons';

test('It should render NumberButtons correctly', () => {
  const wrapper = shallow(<NumberButtons />);
  expect(wrapper).toMatchSnapshot();
});

test('It should trigger handleNumber on buttons 1 through 9', () => {
  const handleNumberSpy = jest.fn();
  const wrapper = shallow(<NumberButtons handleNumber={handleNumberSpy}/>);
  wrapper.find('#three').simulate('click');
  wrapper.find('#eight').simulate('click');
  wrapper.find('#zero').simulate('click');
  wrapper.find('#decimal').simulate('click');
  expect(handleNumberSpy).toHaveBeenCalledTimes(2);
});
