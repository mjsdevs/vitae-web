import React from "react";
import { shallow } from "enzyme";

import LoginInput from "./LoginInput";
import { LoginInputProps } from "./protocols";
import { UserIcon } from "../../assets/icons";

const inputValidator = jest.fn(() => false);

const makeSut = () => {
  const props: LoginInputProps = {
    labelName: "Email",
    type: "email",
    identifier: "email-input",
    icon: <UserIcon />,
    isWrong: inputValidator(),
  };

  return {
    props,
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
    inputValidator.mockReturnValueOnce(true);
    const errorMessage = component.find('error');

    expect(errorMessage).toBeTruthy();
    expect(errorMessage.text()).toEqual("Wrong email or password provided");
  });
});
