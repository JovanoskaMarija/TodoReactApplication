import React, { Component } from "react";
import shortid from "short-id";
import styled from "styled-components";

const AddTodoForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
`;

const AddTodoInput = styled.input`
  width: 70%;
  margin: 0.5rem;
  border: none;
  border-bottom: 2px solid #009999;
`;

const AddTodoButton = styled.button`
  width: 20%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 2px solid #009999;
  border-radius: 5px;
  background: #009999;
  color: white;
`;

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo({
      text: this.state.text,
      complete: false,
      id: shortid.generate()
    });

    this.setState({ text: "" });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <AddTodoForm onSubmit={this.handleSubmit}>
        <AddTodoInput
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
            placeholder="Add todo.." >
        </AddTodoInput>
        <AddTodoButton type="submit" disabled={!this.state.text}> Add Todo </AddTodoButton>
          {/* <RenderCount /> */}
      </AddTodoForm>
    );
  }
}

export default Form;
