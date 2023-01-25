import styled from "styled-components";

export const CartContainer = styled.div`
  background: #0f52ba;
  position: fixed;
  right: 0;
  width: 24rem;
  height: 100%;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  ul {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 35rem;
  }

  @media (max-width: 400px) {
    width: 20rem;
  }

  .btnRemove {
    margin-bottom: 4.3rem;
    font-size: 0.8rem;
    width: 1rem;
    height: 1rem;
    border: none;
    background: black;
    color: white;
    border-radius: 50%;
  }

  .cardContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    height: 4.5rem;
    margin: 1rem;
    width: 80%;
    margin-left: 8.5%;

    .containerQuantity {
      display: flex;
      flex-direction: column;
    }

    .qtd {
      font-size: 0.5rem;
      margin: 0.2rem;
    }

    .cartProductPrice {
      font-size: 0.9rem;
      font-weight: bold;
    }

    .cartProductQuantity {
      border-radius: 4px;
      border: 0.3px solid #bfbfbf;
      display: flex;
      gap: 0.7rem;
      font-size: 0.6rem;
      opacity: 0.6;

      button {
        border: none;
        background: none;
        margin: 0.3px;
      }
    }

    .cartProduct {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0.5rem;

      p {
        font-size: 0.7rem;
        width: 3rem;
      }
    }

    img {
      width: 3rem;
      object-fit: cover;
    }
  }

  .buy {
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
    width: 24rem;
    height: 5rem;
    background: black;
    color: white;
    font-size: 1.3rem;
    font-weight: 700;

    @media (max-width: 400px) {
      width: 20rem;
    }
  }
`;

export const CartTitle = styled.div`
  background: #0f52ba;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;

  p {
    font-size: 1.3rem;
    margin-left: 1rem;
    width: 11rem;
    font-weight: 700;
    padding: 1.2rem;
  }

  button {
    width: 1.8rem;
    height: 1.8rem;
    border: none;
    background: black;
    color: white;
    border-radius: 50%;
    margin: 1rem;
  }
`;

export const CartEmpty = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  font-size: 1.2rem;
`;

export const CartTotal = styled.div`
  position: fixed;
  gap: 11rem;
  bottom: 0;
  margin-bottom: 5rem;
  color: white;
  display: flex;
  padding: 2rem;
  font-size: 1.3rem;
  font-weight: bold;

  @media (max-width: 400px) {
    gap: 7rem;
  }
`;
