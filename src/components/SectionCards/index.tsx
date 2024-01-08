import { RestaurantsProps } from "../../pages/Home";
import Card from "../Card";
import { Container } from "./styles";

type Props = {
  restaurants: RestaurantsProps[];
};

const SectionCards = ({ restaurants }: Props) => {
  return (
    <Container className="container">
      {restaurants.map((restaurant) => (
        <Card restaurant={restaurant} />
      ))}
    </Container>
  );
};

export default SectionCards;
