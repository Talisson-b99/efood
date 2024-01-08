import { useEffect, useState } from "react";
import Header from "../../components/Header";
import SectionCards from "../../components/SectionCards";

export type RestaurantsProps = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
};

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((response) => setRestaurants(response));
  }, []);
  console.log(restaurants);

  return (
    <div>
      <Header />
      <SectionCards restaurants={restaurants} />
    </div>
  );
};

export default Home;
