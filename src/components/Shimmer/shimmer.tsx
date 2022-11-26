import { Product } from "./shimmer.style";
import { HomeContainer } from "../Home/home.style";
import { motion } from "framer-motion";

const Shimmer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
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
    </motion.div>
  );
};
export default Shimmer;
