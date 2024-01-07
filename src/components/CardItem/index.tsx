import { Button, Card, Description, Title } from "./styles";

import Item1 from "../../assets/cardItem1.png";

const CardItem = () => {
  return (
    <Card>
      <img src={Item1} alt="Pizza" />
      <Title>Pizza marguerita</Title>
      <Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Description>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  );
};

export default CardItem;
