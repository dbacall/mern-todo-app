import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import CreateTodo from '../create-todo.component';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("CreateTodo component", () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CreateTodo />);
  });

  it("user text is echoed", () => {
    wrapper.find('#desc').simulate("change", {
      target: { value: "first todo" }
    })
    expect(wrapper.find('#desc').props().value).toEqual("first todo")
  })

  it("changes the value in state for todo description", () => {
    wrapper.find('#desc').simulate("change", {
      target: { value: "first todo" }
    })
    expect(wrapper.state().todo_description).toEqual("first todo")
  })

})