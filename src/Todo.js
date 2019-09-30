import React,{Component} from "react";
import {TodoWrapper, Text, DeleteButton} from './TodoStyle.js'

// TODO: Just a cool tip, when you need to use an X button, you can use an + sign that you would rotate(45deg) in css
// this will help to make it look more normal/natural

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
