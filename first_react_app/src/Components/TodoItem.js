import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="TodoItem">
      <strong>{this.props.todos.nm}</strong>
      </li>
    );
  }
}

export default TodoItem;
