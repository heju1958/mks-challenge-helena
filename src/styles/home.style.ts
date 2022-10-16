import styled from "styled-components";

export const HomeContainer = styled.div`
  ul {
    margin-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
    padding: 2rem;
    align-items: stretch;
  }
`;

export const ProductContainer = styled.li`
  background: #ffffff;
  width: 13rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 0.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .productInfo {
    display: flex;
    flex-direction: column;
  }

  .productimg {
    width: 9rem;
    object-fit: cover;
    padding: 1rem;
  }

  .productData {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    p {
      font-size: 0.9rem;
    }
    .price {
      font-size: 0.8rem;
      color: white;
      background: #373737;
      border-radius: 5px;
      padding: 0.3rem;
      font-weight: 600;
    }
  }

  .description {
    font-size: 0.6rem;
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
