import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

import Footer from "./components/Footer";
import { Globalcss } from "./styles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Globalcss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
