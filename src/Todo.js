import React,{Component} from "react";
import {TodoWrapper, Text, DeleteButton} from './TodoStyle.js'


const Todo = props => {

  return (
    <TodoWrapper>
      <input type="checkbox" onClick={props.toggleComplete}/>
      <Text checked={props.todo.complete} >
        {props.todo.text}
      </Text>
      <DeleteButton onClick={props.deleteTodo} disabled={props.text}> X </DeleteButton>
    </TodoWrapper>
  );
};

export default Todo;
