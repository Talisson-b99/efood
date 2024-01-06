import { ContainerHeader, ImageBackground, Title } from "./styles";

import Background from "../../assets/fundo.png";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <ImageBackground style={{ backgroundImage: `url(${Background})` }}>
      <ContainerHeader className="container">
        <img src={Logo} alt="efood" />
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </ContainerHeader>
    </ImageBackground>
  );
};

export default Header;
