import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {

  render() {
    let pItems;
    if (this.props.todos) {
      pItems = this.props.todos.map(x => {
        //console.log(x);
        return (
          <TodoItem key={x.nm} todos={x} />
        );
      });
    }
    return (
      <div className="todo">
        {pItems}
      </div>
    );
  }
}

export default Todo;
