import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import CreateTodo from '../create-todo.component';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("CreateTodo component", () => {

  it("renders the value in state for todo description", () => {
    const wrapper = shallow(<CreateTodo />)

    wrapper.find('#desc').simulate("change", {
      target: { value: "first todo" }
    })
    expect(wrapper.find('#desc').props().value).toEqual("first todo")
  })

})