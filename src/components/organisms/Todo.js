import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';
import TodoList from '../molecules/TodoList';

export default class Todo extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      temp: '',
    };

    this.doneTodo = this.doneTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  inputTodo(e) {
    const name = e.target.value;
    this.setState(() => ({
      temp: name,
    }));
  }

  addTodo() {
    const todoList = [...this.state.todos];
    const todo = { done: false, name: this.state.temp };
    const isInclude = todoList.some(val => val.name === todo.name);

    if (!isInclude) {
      todoList.push(todo);
    }

    this.setState(() => ({
      todos: todoList,
    }));
  }

  doneTodo(name) {
    const todoList = [...this.state.todos];
    const updatedList = todoList.map((val) => {
      if (val.name === name) {
        val.done = !val.done;
      }
      return val;
    });

    this.setState(() => ({
      todos: updatedList,
    }));
  }

  removeTodo(name) {
    const todoList = [...this.state.todos];
    const removedList = todoList.filter(val => val.name !== name);

    this.setState(() => ({
      todos: removedList,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Head>Todo App</Head>
          <TodoForm>
            <input onKeyUp={e => this.inputTodo(e)} type="text" />
            <Button onClick={() => this.addTodo()}>Add</Button>
          </TodoForm>
        </Header>

        <TodoList
          todos={this.state.todos}
          removeClick={this.removeTodo}
          doneClick={this.doneTodo}
        />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #fff;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.div`
  box-shadow: 0px 1px 2px rgba(0,0,0,0.1);
  padding: 1.5rem;
`;

const Head = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const TodoForm = styled.div`
  margin: 1.5rem 0 0 0;
`;
