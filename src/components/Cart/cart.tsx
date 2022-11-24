import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import { closeCart } from "../../slices/openCartSlice";
import { CartContainer, CartTitle, CartEmpty, CartTotal } from "./cart.style";
import { ICartItem } from "../../interfaces/interfaces";

import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals(""));
  }, [cart, dispatch]);

  const handleAddToCart = (product: ICartItem) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product: ICartItem) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product: ICartItem) => {
    dispatch(removeFromCart(product));
  };

  return (
    <CartContainer>
      <CartTitle>
        <p>Carrinho de Compras</p>{" "}
        <button onClick={() => dispatch(closeCart(""))}>x</button>
      </CartTitle>
      {cart.cartItems.length === 0 ? (
        <CartEmpty>
          <p>Seu carrinho está vazio :(</p>
        </CartEmpty>
      ) : (
        <ul>
          {cart.cartItems &&
            cart.cartItems.map((cartItem: ICartItem) => (
              <li key={cartItem.id}>
                <div className="cartProduct">
                  <img src={cartItem.photo} alt={cartItem.name} />
                  <div className="CartProductInfo">
                    <p>{cartItem.name}</p>
                  </div>
                </div>
                <p className="qtd">Qtd.</p>
                <div className="cartProductQuantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleAddToCart(cartItem)}>+</button>
                </div>
                <div className="cartProductPrice">
                  R${cartItem.price * cartItem.cartQuantity}
                </div>
                <button
                  onClick={() => handleRemoveFromCart(cartItem)}
                  className="btnRemove"
                >
                  x
                </button>
              </li>
            ))}
          <CartTotal>
            <span>Total:</span>
            <span className="amount">R${cart.cartTotalAmount}</span>
          </CartTotal>
          <button className="buy">Finalizar Compra</button>
        </ul>
      )}
    </CartContainer>
  );
};

export default Cart;
