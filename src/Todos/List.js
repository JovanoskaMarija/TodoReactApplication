import styled from "styled-components";
import React from 'react'

const ListWrapper = styled.div`
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

const List = ({ list }) => {
  return <ListWrapper>{list}</ListWrapper>;
}

export default List
