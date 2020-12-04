import React, { FormEvent } from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";
import { LoginFormSignature } from "./protocols";

const makeSubmitHandler = (): LoginFormSignature => {
  class MakeSubmitHandlerStub implements LoginFormSignature {
    handle(e: FormEvent) {
      e.preventDefault();
      return true;
    }
  }

  return new MakeSubmitHandlerStub();
};

const makeSut = () => {
  const submitHandlerStub = makeSubmitHandler();

  const props = {
    handle: submitHandlerStub.handle,
  };

  return {
    props,
    submitHandlerStub,
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

  it("Should render an anchor with correct text", () => {
    const { component } = makeSut();
    expect(component.find("action-anchor").at(0).text()).toEqual("Forgot Password?");
  });
});
