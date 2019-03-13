import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
describe("<Button />", () => {
  let wrapper;
  let onClick;
  const ButtonChildren = () => <span className="button__children" />;

  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(
      <Button onClick={onClick}>
        <ButtonChildren />
      </Button>
    );
  });

  afterEach(() => {
    onClick = null;
    wrapper = null;
  });
  it("should render a button tag", () => {
    expect(wrapper.find('button').exists()).toBeTruthy();
  });

  it("should render whatever it receives as children", () => {
    expect(wrapper.find(ButtonChildren).exists()).toBeTruthy();
  });
  
  it("", () => {
    wrapper.find('button').simulate("click")
    expect(onClick).toBeCalled();
  });
});
