import { RestaurantProps } from "../../types/restaurant";
import Card from "../Card";
import { Container } from "./styles";

type Props = {
  restaurants: RestaurantProps[];
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
