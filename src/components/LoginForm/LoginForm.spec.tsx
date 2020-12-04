import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

const makeSut = () => {
  const props = {};

  return {
    props,
    wrapper: shallow(<LoginForm {...props} />),
  };
};

describe("LoginForm test suit", () => {
  it("Should render without errors", () => {
    const { wrapper } = makeSut();
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should render e-mail label", () => {
    const { wrapper } = makeSut();
    console.log(wrapper.find(<label />).at(1).debug());
    expect(wrapper.find('label').at(0).text()).toEqual("E-mail");
  });

  it("Should render e-mail input", () => {
    const { wrapper } = makeSut();
    expect(wrapper.find('email-input')).toBeTruthy();
  });

  it("Should render password label", () => {
    const { wrapper } = makeSut();
    expect(wrapper.find('label').at(1).text()).toEqual("Password");
  });
});
