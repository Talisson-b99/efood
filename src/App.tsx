import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

import Footer from "./components/Footer";
import { Globalcss } from "./styles";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Globalcss />
        <ScrollToTop />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
