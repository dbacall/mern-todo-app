import React, { Component } from "react";
import axios from "axios";
import Todo from "./todo.component";
import { Link } from "react-router-dom";

export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoDeleted: false
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  // _isMounted = false;

  componentDidMount() {
    // this._isMounted = true;

    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // componentDidUpdate(prevState) {
  //   if (prevState !== this.state) {
  //     axios
  //       .get("http://localhost:4000/todos/")
  //       .then(response => {
  //         this.setState({ todos: response.data });
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   }
  // }

  componentWillUnmount() {
    // this._isMounted = false;
  }

  handleDelete() {
    this.setState({
      todoDeleted: true
    });
  }

  todoList() {
    return this.state.todos.map((currentTodo, i) => {
      return (
        <Todo todo={currentTodo} key={i} handleDelete={this.handleDelete} />
      );
    });
  }

  renderTodos() {
    if (this.state.todos.length === 0)
      return (
        <Link to="/create" className="btn btn-primary">
          Create Todo
        </Link>
      );

    return (
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.todoList()}</tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h2>Todos List</h2>
        {this.renderTodos()}
      </div>
    );
  }
}
