import { RootState } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { useGetAllProductsQuery } from "../../services/productsApi";
import { HomeContainer, ProductContainer } from "./home.style";
import { openCart } from "../../slices/openCartSlice";
import { IProduct } from "../../interfaces/interfaces";
import ShopBag from "../../assets/shoppingBag.png";
import Shimmer from "../Shimmer/shimmer";

const Home = () => {

  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.products);
  const { data } = useGetAllProductsQuery("");

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <HomeContainer>
      {status === "success" ? (
        <>
          <ul className="productsList">
            {data &&
              data.products?.map((product: IProduct) => (
                <ProductContainer key={product.id} className="product">
                  <img
                    src={product.photo}
                    alt={product.name}
                    className="productimg"
                  />
                  <div className="productInfo">
                    <div className="productData">
                      <p>{product.name}</p>
                      <span className="price">R${product.price.slice(0, -3)}</span>
                    </div>
                    <p className="description">{product.description}</p>
                    <button
                      onClick={() =>
                        dispatch(openCart(handleAddToCart(product)))
                      }
                    >
                      <img src={ShopBag} alt="shoppingBag" />
                      COMPRAR
                    </button>
                  </div>
                </ProductContainer>
              ))}
          </ul>
        </>
      ) : status === "pending" ? (
        <Shimmer />
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </HomeContainer>
  );
};

export default Home;
