import Header from "../../components/Header";
import SectionCards from "../../components/SectionCards";
import { useGetRestaurantesQuery } from "../../services/api";

const Home = () => {
  const { data: restaurants } = useGetRestaurantesQuery();

  if (!restaurants) {
    return null;
  }

  return (
    <div>
      <Header />
      <SectionCards restaurants={restaurants} />
    </div>
  );
};

export default Home;
