import React from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f2f2f2;
  border-radius: 5px;
  margin: 2%;
`;

const TodoItem = styled.div`
  margin: 2%;
`;

const DeleteButton = styled.button`
  width: 10%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 2px solid #009999;
  border-radius: 5px;
  background: #009999;
  color: white;
  
`;

const Todo = props => {
  return (
    <TodoWrapper>
      <TodoItem
        style={{
          textDecoration: props.todo.complete ? "line-through" : "none"
        }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </TodoItem>
      <DeleteButton onClick={props.deleteTodo} disabled={props.text}> X </DeleteButton>
    </TodoWrapper>
  );
};

export default Todo;
