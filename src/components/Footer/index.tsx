import Logo from "../../assets/logo.png";

import { Container, Description, Link, Links } from "./styles";

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <img src={Logo} alt="efood" />
      <Links>
        <Link>
          <a href="#">
            <FaInstagram />
          </a>
        </Link>
        <Link>
          <a href="#">
            <FaFacebook />
          </a>
        </Link>
        <Link>
          <a href="#">
            <FaTwitter />
          </a>
        </Link>
      </Links>
      <Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Description>
    </Container>
  );
};

export default Footer;
