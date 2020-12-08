import React from "react";
import { shallow } from "enzyme";
import LoginRightSection from "./LoginRightSection";

const makeSut = () => {
  const props = {};

  return {
    props,
    component: shallow(<LoginRightSection {...props} />),
  };
};

describe("LoginRightSection test suit", () => {
  it("Should render without errors", () => {
    const { component } = makeSut();
    expect(component.exists()).toBeTruthy();
  });

  it("Should render an image with the text 'Fork me on Github '", () => {
    const { component } = makeSut();
    const image = component.find("img");
    const imageSource =
      "https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149";

    expect(image.prop("alt")).toEqual("Fork me on GitHub");
    expect(image.prop("src")).toEqual(imageSource);
  });
});
