import React from "react";
import { shallow } from "enzyme";

import LoginInput from "./LoginInput";
import { LoginInputProps } from "./protocols";
import { UserIcon } from "../../assets/icons";

const makeInputValidatorStub = () => {
  class InputValidatorStub {
    validate(): boolean {
      return true;
    }
  }

  return new InputValidatorStub();
};

const makeSut = () => {
  const inputValidatorStub = makeInputValidatorStub();
  const props: LoginInputProps = {
    labelName: "Email",
    type: "email",
    identifier: "email-input",
    icon: <UserIcon />,
    isWrong: inputValidatorStub.validate(),
  };

  return {
    props,
    inputValidatorStub,
    component: shallow(<LoginInput {...props} />),
  };
};

describe("LoginInput test suit", () => {
  it("Should render without errors", () => {
    const { component } = makeSut();
    expect(component.exists()).toBeTruthy();
  });

  it("Should render a label with correct text", () => {
    const { component } = makeSut();
    expect(component.find("label").text()).toEqual("Email");
  });

  it("Should render an input with correct placeholder", () => {
    const { component } = makeSut();
    expect(component.find("input").props().placeholder).toEqual("Email");
  });

  it("Should show an error message if isWrong prop is true", () => {
    const { component } = makeSut();
    const errorMessage = component.find("error");

    expect(errorMessage).toBeTruthy();
    expect(errorMessage.text()).toEqual("Wrong email or password provided");
  });

  it("Should not show an error message if isWrong prop is false", () => {
    const props: LoginInputProps = {
      labelName: "Email",
      type: "email",
      identifier: "email-input",
      icon: <UserIcon />,
      isWrong: false,
    };

    const component = shallow(<LoginInput {...props} />);

    const errorMessage = component.find("error");

    expect(errorMessage).toEqual({});
  });
});
