import { useDispatch, useSelector } from "react-redux";

import { openCart } from "../../slices/openCartSlice";

import { HeaderContainer } from "../../styles/header.style";

const Header = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <HeaderContainer>
      <div>
        <p className="MKS">MKS</p>
        <p className="sistemas">Sistemas</p>
      </div>
      <button className="cartQuantity" onClick={() => dispatch(openCart())}>
        <img src="../cart.png" alt="cartIcon" /> <span>{cartTotalQuantity}</span>
      </button>
    </HeaderContainer>
  );
};

export default Header;
