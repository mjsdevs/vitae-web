import React from 'react';
import { shallow } from 'enzyme';
import LoginInput from './LoginInput';

const setup = () => {
  const props = {};

  return {
    props,
    wrapper: shallow(<LoginInput {...props} />),
  };
};

describe('LoginInput test suit', () => {
  it('renders without error', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBeTruthy();
  });
});
