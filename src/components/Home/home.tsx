import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { useGetAllProductsQuery } from "../../slices/productsApi";
import { HomeContainer, ProductContainer } from "../../styles/home.style";
import { RootState } from "../..";
import { IProduct } from "../interfaces/interfaces";

const Home = () => {
  const { status } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

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
                      <span className="price">R${product.price}</span>
                    </div>
                    <p className="description">{product.description}</p>
                    <button onClick={() => handleAddToCart(product)}>
                      <img src="../shoppingbag.png" alt="cartIcon" />
                      COMPRAR
                    </button>
                  </div>
                </ProductContainer>
              ))}
          </ul>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </HomeContainer>
  );
};

export default Home;
