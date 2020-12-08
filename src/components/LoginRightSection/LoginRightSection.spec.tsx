import React from "react";
import { shallow } from "enzyme";
import LoginRightSection from "./LoginRightSection";

const setup = () => {
  const props = {};

  return {
    props,
    component: shallow(<LoginRightSection {...props} />),
  };
};

describe("LoginRightSection test suit", () => {
  it("renders without error", () => {
    const { component } = setup();
    expect(component.exists()).toBeTruthy();
  });
});
