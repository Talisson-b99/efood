import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

import Footer from "./components/Footer";
import { Globalcss } from "./styles";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Globalcss />
        <ScrollToTop />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
