import {
  Button,
  ContainerCard,
  Content,
  Description,
  HeaderCard,
  Title,
} from "./styles";

import Stars from "../../assets/estrela.png";
import { RestaurantProps } from "../../types/restaurant";

type Props = {
  restaurant: RestaurantProps;
};

const Card = ({ restaurant }: Props) => {
  return (
    <ContainerCard to={`/details/${restaurant.id}`}>
      <img src={restaurant.capa} alt="imagem do produto" />
      <Content>
        <HeaderCard>
          <Title>{restaurant.titulo}</Title>
          <div>
            <span>{restaurant.avaliacao}</span>
            <img src={Stars} alt="starts" />
          </div>
        </HeaderCard>
        <Description>{restaurant.descricao}</Description>
        <Button>Saiba mais</Button>
      </Content>
    </ContainerCard>
  );
};

export default Card;
