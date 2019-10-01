import React, { Component } from "react";
import shortid from "short-id";


import {AddForm, AddInput, AddButton} from './FormStyle.js'

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
      <AddForm onSubmit={this.handleSubmit}>
        <AddInput
            onChange={this.handleChange}
            value={this.state.text}
            name="text"
            placeholder="Add todo.." >
        </AddInput>
        <AddButton type="submit"  disabled={!this.state.text}> Add Todo </AddButton>
        {/* <RenderCount />  */}
      </AddForm>
    );
  }
}

export default Form;
