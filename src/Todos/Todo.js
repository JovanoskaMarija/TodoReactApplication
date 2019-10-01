import React from "react";
import {TodoWrapper, Text, Delete} from './TodoStyle.js'


const Todo = props => {

  return (
    <TodoWrapper>
      <input type="checkbox" onClick={props.toggleComplete}/>
      <Text checked={props.todo.complete} >
        {props.todo.text}
      </Text>
      <Delete onClick={props.deleteTodo} > + </Delete>
    </TodoWrapper>
  );
};

export default Todo;
