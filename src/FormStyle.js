import styled from "styled-components";

export const AddTodoForm = styled.form`
  display: inline;
`;

export const AddTodoInput = styled.input`
  width: 70%;
  border: none;
  padding: 8px 0 8px 30px;
  /* border-bottom: 2px solid #009999; */
  border-radius: 6px 0 0 6px ;
  background: #f2f2f2;
  box-sizing:border-box;
`;

export const AddTodoButton = styled.button`
  width: 30%;
  padding: 8px;
  border: none;
  border-radius: 0 5px 5px 0;
  background: ${props => props.disabled ? "#99d6d6" : "#009999"};
  color: white;
  cursor: pointer;
  :hover{
    background: #4cb7b7;
  }

`;