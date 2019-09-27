import styled from "styled-components";

export const TodoListContainer = styled.div`
  width: 60%;
  margin: 5% 15%;
  padding: 3%;
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const TodoItemsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f2f2f2;
  border-radius: 5px;
  margin-top: 2%;
`;

export const TodoItemsList = styled.div`
  width: 70%;
  margin-top: 3%;
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 10px;

  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3); */
    border-radius: 10px;
    background-color: #f2f2f2;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #009999;
  }
`;

export const TodoFilterButtons = styled.div`
  width: 22.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 3% 0;
`;

export const Button = styled.button`
  width: 90%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 2px solid #009999;
  border-radius: 5px;
  background: white;
  color: #009999;
  cursor: pointer;
  :hover{
    border: 2px solid #009999;
    background: #009999;
    color: white;
  }
`;