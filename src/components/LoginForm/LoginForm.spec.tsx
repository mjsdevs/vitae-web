import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

const makeSut = () => {
  const props = {
    handle: jest.fn(),
  };

  return {
    props,
    component: shallow(<LoginForm {...props} />),
  };
};

describe("LoginForm test suit", () => {
  it("Should render without errors", () => {
    const { component } = makeSut();
    expect(component.exists()).toBeTruthy();
  });

  it("Should render e-mail input", () => {
    const { component } = makeSut();
    expect(component.find("email-input")).toBeTruthy();
  });

  it("Should render password input", () => {
    const { component } = makeSut();
    expect(component.find("password-input")).toBeTruthy();
  });

  it("Should render Sign In button with correct text", () => {
    const { component } = makeSut();
    expect(component.find("button")).toBeTruthy();
    expect(component.find("button").text()).toEqual("Sign In");
  });

  it("Should render Forgot Password anchor with correct text", () => {
    const { component } = makeSut();
    expect(component.find("action-anchor").at(0).text()).toEqual(
      "Forgot Password?"
    );
  });

  it("Should render Sign Up anchor with correct text", () => {
    const { component } = makeSut();
    expect(component.find("action-anchor").at(1).text()).toEqual("Sign Up");
  });

  it("Should call the handle method", () => {
    const { component, props } = makeSut();

    const form = component.find("form");
    form.simulate("submit");

    expect(props.handle).toHaveBeenCalled();
  });
});
