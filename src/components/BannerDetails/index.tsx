import { BannerImage, Header } from "./styles";

import Logo from "../../assets/logo.png";
import Background from "../../assets/fundo.png";
import Banner1 from "../../assets/banner1.png";

const BannerDetails = () => {
  return (
    <div>
      <Header style={{ backgroundImage: `url(${Background})` }}>
        <div className="container">
          <h3>Restaurantes</h3>
          <img src={Logo} alt="efood" />
          <p>0 produto(s) no carrinho</p>
        </div>
      </Header>
      <BannerImage style={{ backgroundImage: `url(${Banner1})` }}>
        <div className="container">
          <h4>Italiana</h4>
          <h2>La Dolce Vita Trattoria</h2>
        </div>
      </BannerImage>
    </div>
  );
};

export default BannerDetails;
