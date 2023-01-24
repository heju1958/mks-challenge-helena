import styled from "styled-components";

export const Product = styled.li`
  background: #f1f1f1;
  width: 13rem;
  height: 20rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .productimg {
    width: 10.7rem;
    height: 9rem;
    background-color: #dddddd;
    padding: 1rem;
    margin-bottom: 8rem;
    border-radius: 0.6rem;
  }

  button {
    width: 13rem;
    display: flex;
    background: #dddddd;
    height: 2rem;
    border-radius: 0px 0px 8px 8px;
  }
`;
