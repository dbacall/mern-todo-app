import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import App from './App';
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import TodosList from './components/todos-list.component'
import CreateTodo from './components/create-todo-list.component'

Enzyme.configure({ adapter: new Adapter() });

describe ("App copmonent", () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders", () => {
    expect(wrapper.exists()).toBe( true );
  });

  test("title rendered", () => {
    expect(wrapper.find('#main-title').text()).toEqual("Todo App")
  })

  test("create todo link", () => {
    expect(wrapper.find('#create-todo-nav-btn').props().to).toBe('/create');
  })
});

describe('routes using memory router', () => {
  it('should show TodosList component for / router', () => {
    const component = mount( <MemoryRouter initialEntries = {['/']} >
        <App />
      </MemoryRouter>
    );
    expect(component.find(TodosList)).toHaveLength(1);
  })
})
