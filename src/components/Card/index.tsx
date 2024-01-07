import {
  Button,
  ContainerCard,
  Content,
  Description,
  HeaderCard,
  Title,
} from "./styles";

import Stars from "../../assets/estrela.png";
import Item1 from "../../assets/item1.png";

const Card = () => {
  return (
    <ContainerCard to="/details">
      <img src={Item1} alt="imagem do produto" />
      <Content>
        <HeaderCard>
          <Title>Hioki Sushi</Title>
          <div>
            <span>4.9</span>
            <img src={Stars} alt="starts" />
          </div>
        </HeaderCard>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida. Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
        <Button>Saiba mais</Button>
      </Content>
    </ContainerCard>
  );
};

export default Card;
