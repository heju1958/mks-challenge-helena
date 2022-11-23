import GlobalStyle from "./styles/globalStyle";
import { useSelector } from "react-redux";
import { RootState } from ".";

import Cart from "./components/Cart/cart";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/Home/home";

interface IState {
  isOpen: boolean;
}

function App() {
  const { isOpen } = useSelector(
    (state: RootState) => state.openCart
  ) as IState;

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
