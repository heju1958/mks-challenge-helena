import { Product } from "./shimmer.style";
import { HomeContainer } from "../Home/home.style";

const Shimmer = () => {
  return (
    <HomeContainer>
      <ul className="productsList">
        <Product className="product">
          <div className="productimg" />
          <div className="productInfo">
            <button></button>
          </div>
        </Product>
        <Product className="product">
          <div className="productimg" />
          <button></button>
        </Product>
        <Product className="product">
          <div className="productimg" />
          <button></button>
        </Product>
        <Product className="product">
          <div className="productimg" />
          <button></button>
        </Product>
        <Product className="product">
          <div className="productimg" />
          <button></button>
        </Product>
        <Product className="product">
          <div className="productimg" />
          <button></button>
        </Product>
        <Product className="product">
          <div className="productimg" />
          <button></button>
        </Product>
        <Product className="product">
          <div className="productimg" />
          <button></button>
        </Product>
      </ul>
    </HomeContainer>
  );
};
export default Shimmer;
