import React from "react";
import { shallow } from "enzyme";
import LoginForm from "./LoginForm";

const setup = () => {
  const props = {};

  return {
    props,
    wrapper: shallow(<LoginForm {...props} />),
  };
};

describe("LoginForm test suit", () => {
  it("Should render without errors", () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBeTruthy();
  });
});
