import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #0f52ba;
  height: 5rem;
  display: flex;
  gap: 20rem;
  justify-content: space-around;
  align-items: center;
  color: white;

  @media (max-width: 700px) {
      gap: 0;
    }

  div {
    display: flex;
    gap: 0.4rem;
    .MKS {
      font-weight: 500;
      font-size: 2rem;
    }
    .sistemas {
      margin-top: 0.8rem;
      font-stretch: semi-expanded;
      font-family: Arial Narrow, sans-serif;
      opacity: 0.6;
    }
  }
  .cartQuantity {
    border: none;
    border-radius: 0.4rem;
    width: 4.5rem;
    height: 2.5rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
`;
