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
    expect(wrapper.find('label')).toBeTruthy();
  });

  it("Should render e-mail input", () => {
    const { wrapper } = makeSut();
    expect(wrapper.find({ name: 'email-input' })).toBeTruthy();
  });
});
