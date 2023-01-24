import styled from "styled-components";

export const HomeContainer = styled.div`
  ul {
    display: grid;
    grid-template-columns: 0fr 0fr 0fr 0fr;
    margin-top: 3rem;
    justify-content: center;
    gap: 1.4rem;
    padding: 2rem;

    @media (max-width: 1000px) {
      background-color: aqua;
      grid-template-columns: 1fr 1fr 0fr;
    }

    @media (max-width: 700px) {
      overflow-y: scroll;
      justify-items: center;
      background-color: aqua;
      grid-template-columns: 1fr;
    }
  }
`;

export const ProductContainer = styled.li`
  background: #ffffff;
  width: 14rem;
  height: 20rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  :hover {
    transform: scale(1.04);
    transition: 0.7s;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
  }

  .productimg {
    width: 12rem;
    object-fit: cover;
    padding: 1rem;
  }

  .productData {
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    p {
      font-size: 1rem;
    }
    .price {
      font-size: 1rem;
      color: white;
      background: #373737;
      border-radius: 5px;
      padding: 0.3rem;
      font-weight: 600;
    }
  }

  .description {
    font-size: 0.7rem;
    color: #2c2c2c;
    padding: 0.5rem;
  }

  button {
    font-size: 0.8rem;
    font-weight: 600;
    gap: 1rem;
    display: flex;
    background: #0f52ba;
    color: white;
    height: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 0px 0px 8px 8px;
  }
`;
