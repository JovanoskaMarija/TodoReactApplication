import React, { Component } from "react";
import shortid from "short-id";


import {AddTodoForm, AddTodoInput, AddTodoButton} from './FormStyle.js'

class Form extends Component {
  
  state = {
    text: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.text.trim()){
      this.props.addTodo({
        text: this.state.text,
        complete: false,
        id: shortid.generate()
      });
      this.setState({ text: "" }); // TODO: Remove line since it's redundant
    }
    
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
        <AddTodoButton type="submit"  disabled={!this.state.text}> Add Todo </AddTodoButton>
        {/* <RenderCount />  */}
      </AddTodoForm>
    );
  }
}

export default Form;
