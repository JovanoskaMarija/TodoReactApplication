import React from 'react';
import styled from 'styled-components';

const Filter = styled.div`
  width: 22.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 3% 0;
`;

const Button = styled.button`
  width: 90%;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 2px solid #009999;
  border-radius: 5px;
  background: white;
  color: #009999;
  cursor: pointer;
  :hover {
    border: 2px solid #009999;
    background: #009999;
    color: white;
  }
`;



const Filters = ({
  changeFilter,
  toggleAllDone,
  deleteAllDone,
  isCompleted,
  allCompleted
}) => {
  return (
    <Filter>
      Filters:
      <Button onClick={() => changeFilter("all")}>All Todos</Button>
      <Button onClick={() => changeFilter("active")}>Active Todos</Button>
      <Button onClick={() => changeFilter("done")}>Done Todos</Button>
      <Button onClick={toggleAllDone}>
        Toggle {allCompleted ? "done" : "active"}
      </Button>
      {isCompleted ? <Button onClick={deleteAllDone}>Delete All Done</Button> : null}
    </Filter>
  );
};




export default Filters;