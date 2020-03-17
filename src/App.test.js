import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import App from './App';
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from 'react-router'
import { Route } from 'react-router-dom';
import TodosList from './components/todos-list.component'
import CreateTodo from './components/create-todo.component'

Enzyme.configure({ adapter: new Adapter() });

describe ("App copmonent", () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBe( true );
  });

  it("title rendered", () => {
    expect(wrapper.find('#main-title').text()).toEqual("Todo App")
  })

  it("create todo link", () => {
    expect(wrapper.find('#create-todo-nav-btn').props().to).toBe('/create');
  })

  it("renders 2 li tags", () => {
    expect(wrapper.find('li')).toHaveLength(2)
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
