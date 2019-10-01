import React, { Component } from "react";
import Form from "./Form.js";
import Filters from "./Filters.js";
import Todo from "./Todo.js";
import List from './List';

import {
  ListContainer,
  ItemsContainer
} from "./TodosStyle.js";

class TodoList extends Component {
  state = {
    todos: [],
    filter: "all",
    allTrue: true
  };

  render() {
    let active = this.state.todos.filter(todo => !todo.complete);
    let isDone = this.state.todos.some(todo => todo.complete);
    let todos = this.generateViewList(this.state);
    let todoList = this.createTodoList(todos);
    return (
      <ListContainer>
        <h1>Todo List</h1>
        <Form addTodo={this.handleAddTodo} />
        <div> Active todos: {active.length}</div>
        <ItemsContainer>
          
        <List list={todoList} /> 
          
      <Filters 
        changeFilter = {this.changeFilter}
        toggleAllCompleted = {this.toggleAllDone}
        allCompleted = {this.allTrue}
        isCompleted = {isDone}
        deleteAllCompleted = {this.deleteAllDone}
      />
        
        </ItemsContainer>
      </ListContainer>
    );
  }

  handleAddTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
  };

  generateViewList(prevState) {

    let todos = [...prevState.todos];
    if (prevState.filter === "all") {
      todos = [...prevState.todos];
    } 
    if (prevState.filter === "done") {
      todos = prevState.todos.filter(todo => todo.complete);
    } 
    if (prevState.filter === "active") {
      todos = prevState.todos.filter(todo => !todo.complete);
    }
    return todos;
  }

  toggleComplete = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter
    });
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  deleteAllDone = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => !todo.complete)
    }));
  };

  toggleAllDone = () => {
    this.setState(prevState => ({
      allTrue: !prevState.allTrue
    }));
    this.setState(prevState => ({
      todos: prevState.todos.map(todos => {
        return {
          ...todos,
          complete: prevState.allTrue
        };
      })
    }));
  };

  createTodoList = todos => {
    let list;

    list = todos.map(todo => (
      <Todo
        todo={todo}
        toggleComplete={() => this.toggleComplete(todo.id)}
        deleteTodo={() => this.deleteTodo(todo.id)}
        key={todo.id}
      />
    ));

    return list;
  };
}

export default TodoList;
