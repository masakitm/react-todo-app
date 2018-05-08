// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';

type Props = {
  removeClick: Function,
  doneClick: Function,
  todos: Array<Object>
}

const doneStyle = (done: boolean) => {
  let style: Object = {};

  if (done) {
    style = { textDecoration: 'line-through' };
  }
  return style;
};

class TodoList extends Component<Props> {
  removeTodo(name: string) {
    this.props.removeClick(name);
  }

  doneTodo(name: string) {
    this.props.doneClick(name);
  }

  render() {
    const { todos } = this.props;

    const todoItems = todos.map((todo) => {
      if (todo.name) {
        return (
          <Single key={todo.name} style={doneStyle(todo.done)}>
            {todo.name}
            <Button onClick={() => this.doneTodo(todo.name)}>DONE</Button>
            <Button onClick={() => this.removeTodo(todo.name)}>REMOVE</Button>
          </Single>
        );
      }
      return false;
    });

    return (
      <List>{todoItems}</List>
    );
  }
}
export default TodoList;

const List = styled.div`
  margin: 0 auto;
  text-align: left;
  padding: 4rem 4rem;
`;

const Single = styled.div`
  padding: 0.5rem 0;
`;
