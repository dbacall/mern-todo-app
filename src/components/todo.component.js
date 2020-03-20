import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.onClick = this.onClick.bind(this)

    this.state = ({ changed: false})
  }

  onClick(e) {
    // e.preventDefault();
    axios.delete(`http://localhost:4000/todos/delete/${this.props.todo._id}`);
  }

  render() {
    return (
      <tr>
          <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_description}</td>
          <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_responsible}</td>
          <td className={this.props.todo.todo_completed ? 'completed' : ''}>{this.props.todo.todo_priority}</td>
          <td>
              <Link to={"/edit/"+this.props.todo._id}>Edit</Link>
              <i> &nbsp;&nbsp;&nbsp;</i>
              <a href='/' onClick={this.onClick}>Delete</a>
          </td>
      </tr>
    )
  }
}

