import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-bottom: 2px solid #009999;
  margin: 2%;
`;

export const Text = styled.div`
  box-sizing: "border-box";
  ${ props => props.checked ? " color: grey; text-decoration:line-through;" : null }
  /* font-size: ${ props => props.checked ? "10px" : null}; */
  width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
`;

export const DeleteButton = styled.button`
  border: none;
  background: transparent;
  color: #009999;
  cursor: pointer;
  :hover{

  }
`;
