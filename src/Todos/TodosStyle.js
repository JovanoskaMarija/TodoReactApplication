import styled from "styled-components";

export const ListContainer = styled.div`
  width: 60%;
  margin: 5% 15%;
  padding: 3%;
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  text-align: center;
  h1 {
    color: #009999;
  }
`;

export const ItemsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f2f2f2;
  border-radius: 5px;
  margin-top: 2%;
`;
