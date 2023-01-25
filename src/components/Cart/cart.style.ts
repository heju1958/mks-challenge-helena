import styled from "styled-components";

export const CartContainer = styled.div`

  background: #0F52BA;
  position: fixed;
  right: 0;
  width: 24rem;
  height: 100vh;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

  .btnRemove {
    position: fixed;
    right: 2.5rem;
    margin-bottom: 4rem;
    font-size: 0.8rem;
    width: 1rem;
    height: 1rem;
    border: none;
    background: black;
    color: white;
    border-radius: 50%;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    height: 4.5rem;
    margin: 1rem;
    width: 80%;
    margin-left: 8.5%;

    .qtd {
      font-size: 0.5rem;
      position: fixed;
      margin-bottom: 2rem;
      margin-left: 2.8rem;
    }

    .cartProductPrice {
      font-size: 0.9rem;
      font-weight: bold;
    }

    .cartProductQuantity {
      padding: 0.2rem;
      border-radius: 4px;
      border: 0.3px solid #bfbfbf;
      display: flex;
      gap: 0.7rem;
      font-size: 0.6rem;
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
  }
`;

export const CartTitle = styled.div`
  background: #0f52ba;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  p{
    font-size: 1.3rem;
    margin-left: 1rem;
    width: 8rem;
    font-weight: 700;
  }

  button {
    width: 1.8rem;
    height: 1.8rem;
    border: none;
    background: black;
    color: white;
    border-radius: 50%;
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
`;
