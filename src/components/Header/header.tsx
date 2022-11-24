import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../slices/openCartSlice";
import { HeaderContainer } from "./header.style";
import { RootState } from "../..";

const Header = () => {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state: RootState) => state.cart);
  const payload = "";
  return (
    <HeaderContainer>
      <div>
        <p className="MKS">MKS</p>
        <p className="sistemas">Sistemas</p>
      </div>
      <button
        className="cartQuantity"
        onClick={() => dispatch(openCart({ payload }))}
      >
        <img src="../cart.png" alt="cartIcon" />{" "}
        <span>{cartTotalQuantity}</span>
      </button>
    </HeaderContainer>
  );
};

export default Header;
