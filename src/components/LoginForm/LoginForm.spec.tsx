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
    wrapper: shallow(<LoginForm {...props} />),
  };
};

describe("LoginForm test suit", () => {
  it("Should render without errors", () => {
    const { wrapper } = makeSut();
    expect(wrapper.exists()).toBeTruthy();
  });

  it("Should render e-mail input", () => {
    const { wrapper } = makeSut();
    expect(wrapper.find("email-input")).toBeTruthy();
  });

  it("Should render password input", () => {
    const { wrapper } = makeSut();
    expect(wrapper.find("password-input")).toBeTruthy();
  });

  it("Should render Sign In button with correct text", () => {
    const { wrapper } = makeSut();
    expect(wrapper.find("button")).toBeTruthy();
    expect(wrapper.find("button").text()).toEqual("Sign In");
  });
});
