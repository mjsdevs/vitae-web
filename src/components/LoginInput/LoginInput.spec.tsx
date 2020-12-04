import React from "react";
import { shallow } from "enzyme";

import LoginInput from "./LoginInput";
import { LoginInputProps } from "./protocols";
import { UserIcon } from "../../assets/icons";

const setup = () => {
  const props: LoginInputProps = {
    labelName: "Email",
    type: "email",
    identifier: "email-input",
    icon: <UserIcon />,
  };

  return {
    props,
    component: shallow(<LoginInput {...props} />),
  };
};

describe("LoginInput test suit", () => {
  it("Should render without errors", () => {
    const { component } = setup();
    expect(component.exists()).toBeTruthy();
  });

  it("Should render a label with correct text", () => {
    const { component } = setup();
    expect(component.find("label").text()).toEqual("Email");
  });

  it("Should render an input with correct placeholder", () => {
    const { component } = setup();
    expect(component.find("input").props().placeholder).toEqual("Email");
  });
});
