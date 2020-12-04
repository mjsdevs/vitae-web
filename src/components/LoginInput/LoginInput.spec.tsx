import React from 'react';
import { shallow } from 'enzyme';
import LoginInput from './LoginInput';
import { LoginInputProps } from './protocols';

const setup = () => {
  const props: LoginInputProps = {
    labelName: "E-mail",
    type: "email"
  };

  return {
    props,
    wrapper: shallow(<LoginInput {...props} />),
  };
};

describe('LoginInput test suit', () => {
  it('Should render without errors', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  it('Should render a label with correct text', () => {
    const { wrapper } = setup();
    expect(wrapper.find('label').text()).toEqual("E-mail");
  });
});
