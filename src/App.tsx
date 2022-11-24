import GlobalStyle from "./styles/globalStyle";
import { useSelector } from "react-redux";
import { RootState } from ".";
import { IModal } from "./interfaces/interfaces";
import Cart from "./components/Cart/cart";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/Home/home";

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
