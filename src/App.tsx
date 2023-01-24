import { RootState } from ".";
import { useSelector } from "react-redux";
import { IModal } from "./interfaces/interfaces";
import GlobalStyle from "./styles/globalStyle";
import Header from "./components/Header/header";
import Cart from "./components/Cart/cart";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";

function App() {
  const { isOpen } = useSelector(
    (state: RootState) => state.openCart
  ) as IModal;

  return (
    <div>
      <GlobalStyle />
      {isOpen && <Cart />}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
