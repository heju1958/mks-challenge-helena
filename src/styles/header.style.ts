import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #0f52ba;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 2rem;

  div {
    display: flex;
    gap: 0.4rem;
    margin: 1rem;

    .MKS {
      font-weight: 500;
      font-size: 2rem;
    }
    .sistemas {
      font-weight: normal;
      margin-top: 0.8rem;
    }
  }

  .cartQuantity {
    margin: 1rem;
    border: none;
    border-radius: 0.4rem;
    width: 5rem;
    height: 2.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;
