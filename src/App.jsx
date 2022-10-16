import GlobalStyle from "./styles/globalStyle";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/cart";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Home from "./components/Home/home";

function App() {
  const { isOpen } = useSelector((state) => state.openCart);

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
