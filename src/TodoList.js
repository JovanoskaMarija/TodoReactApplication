import React, { Component } from "react";
import Form from "./Form.js";
import Todo from "./Todo.js";
import styled from "styled-components";

const TodoListContainer = styled.div`
  width: 60%;
  height: auto;
  margin: 5% 15%;
  padding: 3%;
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const TodoItemsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TodoItemsList = styled.div`
  width: 70%;
`;

const TodoFilterButtons = styled.div`
  width: 22.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 3%;
  background: #f2f2f2;
`;

const Button = styled.button`
  width: 90%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 2px solid #009999;
  border-radius: 5px;
  background: white;
  color: #009999;
`;

class TodoList extends Component {
  state = {
    todos: [],
    filter: "all",
    allTrue: true
  };

  handleAddTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
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
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  deleteAllDone = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };

  toggleAllDone = () => {
    this.setState({
      allTrue: !this.state.allTrue
    });
    this.setState({
      todos: this.state.todos.map(todos => {
        return {
          ...todos,
          complete: this.state.allTrue
        };
      })
    });
  };

  render() {
    let active = this.state.todos.filter(todo => !todo.complete);
    let done = this.state.todos.filter(todo => todo.complete);
    let todos = this.generateViewList(this.state);
    return (
      <TodoListContainer>
        <h1 style={{color:"#009999"}}>Todo List</h1>
        <Form addTodo={this.handleAddTodo} />
        <TodoItemsContainer>
          <TodoItemsList>
            <div> Active todos: {active.length}</div>
            {todos.map(todo => (
              <Todo
                todo={todo}
                toggleComplete={() => this.toggleComplete(todo.id)}
                deleteTodo={() => this.deleteTodo(todo.id)}
                key={todo.id}
              />
            ))}
          </TodoItemsList>
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
}

export default TodoList;
