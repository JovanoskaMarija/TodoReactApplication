import React, { Component } from "react";
import Form from "./Form.js";
import Todo from "./Todo.js";

import {
  TodoListContainer,
  TodoItemsContainer,
  TodoItemsList,
  TodoFilterButtons,
  Button
} from "./TodoListStyle.js";

class TodoList extends Component {
  state = {
    todos: [],
    filter: "all",
    allTrue: true
  };

  render() {
    let active = this.state.todos.filter(todo => !todo.complete);
    let done = this.state.todos.filter(todo => todo.complete);
    let todos = this.generateViewList(this.state);
    let todoList = this.createTodoList(todos);
    return (
      <TodoListContainer>
        <h1 style={{ color: "#009999" }}>Todo List</h1>
        <Form addTodo={this.handleAddTodo} />
        <div> Active todos: {active.length}</div>
        <TodoItemsContainer>
          <TodoItemsList>{todoList}</TodoItemsList>
          <TodoFilterButtons>
            Filters:
            <Button onClick={() => this.changeFilter("all")}>All Todos</Button>
            <Button onClick={() => this.changeFilter("active")}>
              Active Todos
            </Button>
            <Button onClick={() => this.changeFilter("done")}>
              Done Todos
            </Button>
            <Button onClick={this.toggleAllDone}>
              Toggle {this.state.allTrue ? "done" : "active"}{" "}
            </Button>
            {done.length ? (
              <Button onClick={this.deleteAllDone}>Delete All Done</Button>
            ) : null}
          </TodoFilterButtons>
        </TodoItemsContainer>
      </TodoListContainer>
    );
  }

  handleAddTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
  };

  generateViewList(prevState) {
    let todos = [...this.state.todos];
    if (prevState.filter === "all") {
      todos = [...prevState.todos];
    } else if (prevState.filter === "done") {
      todos = prevState.todos.filter(todo => todo.complete);
    } else if (prevState.filter === "active") {
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
